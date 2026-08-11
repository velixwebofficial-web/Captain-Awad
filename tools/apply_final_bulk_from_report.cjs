/**
 * APPLY SCRIPT — DO NOT RUN until user explicitly authorizes.
 *
 * Loads tools/final_bulk_answer_recovery_report.json
 * Filters ONLY STRONG and HIGH_CONFIDENCE by default
 *   (optional: --include-medium-dual for MEDIUM with ≥2 independent sources)
 * Validates exact question identity + proposed answer text
 * Sets exactly one correct:true inside that question block
 * Creates backup before writing
 * Never touches locked verified keys, app.js, styles.css
 *
 * Usage (manual only):
 *   node tools/apply_final_bulk_from_report.cjs
 *   node tools/apply_final_bulk_from_report.cjs --include-medium-dual
 *   node tools/apply_final_bulk_from_report.cjs --dry-run
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const QPATH = path.join(ROOT, 'data/questions.js');
const BACKUP_LOCKED = path.join(ROOT, 'data/questions.js.backup-before-final-bulk');
const BACKUP_APPLY = path.join(ROOT, 'data/questions.js.backup-before-safe79-apply');
const REPORT_JSON = path.join(ROOT, 'tools/final_bulk_answer_recovery_report.json');

const FORCE_UNRESOLVED = new Set([665, 666]);
const LOCKED_INVALID = new Set([673]);
/** Never touch these IDs (dup collisions / unresolved / invalid / medium dual). */
const HARD_EXCLUDE = new Set([616, 635, 617, 665, 666, 673, 689]);

const args = new Set(process.argv.slice(2));
const INCLUDE_MEDIUM_DUAL = args.has('--include-medium-dual');
const DRY_RUN = args.has('--dry-run');

function loadBank(jsText) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(jsText, ctx);
  return ctx.window.DRIVING_QUESTION_BANK;
}

function countStats(bank) {
  let exactlyOne = 0,
    multi = 0,
    missing = 0,
    total = 0;
  for (const sec of bank) {
    for (const q of sec.questions) {
      total++;
      const c = q.answers.filter((a) => a.correct === true).length;
      if (c === 1) exactlyOne++;
      else if (c > 1) multi++;
      else missing++;
    }
  }
  return { exactlyOne, multi, missing, total };
}

function collectById(bank) {
  const byId = new Map();
  const lockedVerified = new Set();
  for (const sec of bank) {
    for (const q of sec.questions) {
      const c = q.answers.filter((a) => a.correct === true).length;
      if (c === 1) lockedVerified.add(q.id);
      if (!byId.has(q.id)) byId.set(q.id, q);
    }
  }
  return { byId, lockedVerified };
}

function applyFlagInAllOccurrences(jsText, questionId, answerId, answerText) {
  const qMarker = `"id": ${questionId},`;
  let from = 0;
  let hits = 0;
  let out = jsText;
  // Re-scan after each replace because indices shift
  while (true) {
    const i = out.indexOf(qMarker, from);
    if (i < 0) break;
    const after = out.slice(i + qMarker.length);
    const nextQ = after.search(/\{\s*"id":\s*\d+,\s*"number":/);
    const end = nextQ >= 0 ? i + qMarker.length + nextQ : Math.min(out.length, i + 5000);
    const block = out.slice(i, end);
    if ((block.match(/"correct": true/g) || []).length > 0) {
      from = i + qMarker.length;
      continue;
    }
    const needle = `"id": "${answerId}", "text": ${JSON.stringify(answerText)}, "correct": false`;
    const replacement = `"id": "${answerId}", "text": ${JSON.stringify(answerText)}, "correct": true`;
    const count = block.split(needle).length - 1;
    if (count !== 1) {
      throw new Error(`Q${questionId} answer ${answerId} needle count=${count} at offset ${i}`);
    }
    out = out.slice(0, i) + block.replace(needle, replacement) + out.slice(end);
    hits++;
    from = i + block.replace(needle, replacement).length;
  }
  if (hits === 0) throw new Error(`Q${questionId} no ungraded block found`);
  return { text: out, hits };
}

function main() {
  if (!fs.existsSync(REPORT_JSON)) {
    throw new Error('Missing report: ' + REPORT_JSON);
  }
  const report = JSON.parse(fs.readFileSync(REPORT_JSON, 'utf8'));

  // Use current authoritative questions.js as base
  if (!fs.existsSync(QPATH)) {
    throw new Error('Missing questions.js: ' + QPATH);
  }
  const baseJs = fs.readFileSync(QPATH, 'utf8');
  const bank = loadBank(baseJs);
  const before = countStats(bank);
  const { byId, lockedVerified } = collectById(bank);

  // Prefer uniqueResults if present; else unique by ourQuestionId from results
  let unique = report.uniqueResults;
  if (!unique || !unique.length) {
    const map = new Map();
    for (const r of report.results || []) {
      if (!map.has(r.ourQuestionId)) map.set(r.ourQuestionId, r);
    }
    unique = [...map.values()];
  }

  const counts = {
    STRONG: unique.filter((r) => r.classification === 'STRONG').length,
    HIGH_CONFIDENCE: unique.filter((r) => r.classification === 'HIGH_CONFIDENCE').length,
    MEDIUM: unique.filter((r) => r.classification === 'MEDIUM').length,
    CONFLICT: unique.filter((r) => r.classification === 'CONFLICT').length,
    INVALID: unique.filter((r) => r.classification === 'INVALID').length,
    NO_MATCH: unique.filter((r) => r.classification === 'NO_MATCH').length,
  };

  console.log('Existing verified:', before.exactlyOne);
  console.log('Strong:', counts.STRONG);
  console.log('High confidence:', counts.HIGH_CONFIDENCE);
  console.log('Medium:', counts.MEDIUM);
  console.log('Conflict:', counts.CONFLICT);
  console.log('Invalid:', counts.INVALID);
  console.log('No match:', counts.NO_MATCH);

  const selected = [];
  for (const r of unique) {
    if (HARD_EXCLUDE.has(r.ourQuestionId)) continue;
    if (FORCE_UNRESOLVED.has(r.ourQuestionId) || LOCKED_INVALID.has(r.ourQuestionId)) continue;
    if (lockedVerified.has(r.ourQuestionId)) continue;
    let ok = false;
    if (r.classification === 'STRONG' || r.classification === 'HIGH_CONFIDENCE') ok = true;
    if (
      INCLUDE_MEDIUM_DUAL &&
      r.classification === 'MEDIUM' &&
      r.dualSourceAgreement &&
      [...new Set((r.externalSources || []).map((s) => s.source))].length >= 2
    ) {
      ok = true;
    }
    if (!ok) continue;
    if (r.answerIndex == null || r.proposedCorrectAnswer == null) continue;

    const our = byId.get(r.ourQuestionId);
    if (!our) continue;
    if (our.answers.some((a) => a.correct === true)) continue;
    if (r.answerIndex < 0 || r.answerIndex >= our.answers.length) continue;
    if (our.answers[r.answerIndex].text !== r.proposedCorrectAnswer) continue;
    const textHits = our.answers.filter((a) => a.text === r.proposedCorrectAnswer);
    if (textHits.length !== 1) continue;

    selected.push({
      id: r.ourQuestionId,
      classification: r.classification,
      answerIndex: r.answerIndex,
      answerId: String(our.answers[r.answerIndex].id),
      answerText: our.answers[r.answerIndex].text,
    });
  }

  selected.sort((a, b) => a.id - b.id);
  console.log('');
  console.log('IDs that will be modified (' + selected.length + '):');
  console.log(selected.map((s) => s.id).join(', '));
  console.log('');
  for (const s of selected) {
    console.log(
      `  Q${s.id} [${s.classification}] → index ${s.answerIndex} id=${s.answerId} "${s.answerText}"`
    );
  }

  if (DRY_RUN) {
    console.log('\nDRY-RUN: no files written.');
    return;
  }

  if (!args.has('--execute')) {
    console.log('\nSTOP: apply not executed.');
    console.log('Re-run with --execute to write (after restoring/using locked backup as base).');
    console.log('Optional: --include-medium-dual  --dry-run');
    return;
  }

  // Backup current authoritative file before any write
  fs.copyFileSync(QPATH, BACKUP_APPLY);
  if (selected.some((s) => HARD_EXCLUDE.has(s.id))) {
    throw new Error('HARD_EXCLUDE ID leaked into selected set');
  }
  if (selected.length !== 79) {
    console.warn('WARN: expected 79 selected, got', selected.length);
  }
  let js = baseJs;
  const applied = [];
  for (const s of selected) {
    if (HARD_EXCLUDE.has(s.id)) throw new Error('refusing to apply excluded Q' + s.id);
    const { text, hits } = applyFlagInAllOccurrences(js, s.id, s.answerId, s.answerText);
    if (hits !== 1) throw new Error(`Q${s.id} expected 1 occurrence, got ${hits}`);
    js = text;
    applied.push({ ...s, occurrences: hits });
  }
  fs.writeFileSync(QPATH, js, 'utf8');

  const after = countStats(loadBank(fs.readFileSync(QPATH, 'utf8')));
  console.log('\nApplied IDs:', applied.map((a) => a.id).join(', '));
  console.log('Applied count:', applied.length);
  console.log('Slots applied:', applied.reduce((n, a) => n + a.occurrences, 0));
  console.log('After stats:', after);
  console.log('Backup saved at:', BACKUP_APPLY);
  fs.writeFileSync(
    path.join(ROOT, 'tools/safe79_apply_result.json'),
    JSON.stringify({ before, after, applied }, null, 2),
    'utf8'
  );
}

main();
