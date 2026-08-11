const fs = require('fs');
const vm = require('vm');

const root = 'C:/Users/moats/Downloads/Captain-Awad-quiz/Captain-Awad-main';
const path = `${root}/data/questions.js`;
const outDir = `${root}/tools`;

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path, 'utf8'), ctx);
const bank = ctx.window.DRIVING_QUESTION_BANK;

const searched = [
  'data/questions.js',
  'README_AR.txt',
  'README_AR_EN.txt',
  'TEST_REPORT.txt',
  'download_question_images.py',
  'app.js',
  'i18n.js',
  'index.html',
  'styles.css',
  'service-worker.js',
  'manifest.webmanifest',
  'CNAME',
  'sitemap.xml',
  'robots.txt',
  'assets/* (images only; no answer-key sidecar files)',
  'image alt / filename / mediaId correlation',
  'git metadata (none in project)',
  'Downloads folders/zips for separate answer-key files',
];

const unresolved = [];
let total = 0;
let one = 0;
let multi = 0;
let missing = 0;

for (const sec of bank) {
  for (const q of sec.questions) {
    total += 1;
    const c = q.answers.filter((a) => a.correct === true).length;
    if (c === 1) {
      one += 1;
      continue;
    }
    if (c > 1) {
      multi += 1;
      continue;
    }
    missing += 1;
    unresolved.push({
      id: q.id,
      number: q.number,
      section: sec.subtitle,
      question: String(q.question || '').replace(/\s+/g, ' ').trim(),
      answers: q.answers.map((a) => ({
        id: a.id,
        text: String(a.text || '').replace(/\s+/g, ' ').trim(),
        correct: a.correct === true,
      })),
      imageFilename: q.image?.filename || null,
      imageMediaId: q.image?.mediaId || null,
      imageAlt: q.image?.alt || null,
      videoFilename: q.video?.filename || null,
      videoMediaId: q.video?.mediaId || null,
      searchedIn: searched,
      authoritativeAnswerFound: false,
      reason:
        'No in-project answer key found. README states source HTML omitted keys and they were intentionally left unverified.',
    });
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  auditConclusion:
    'NO authoritative in-project source found to recover missing answer keys. STOPPING without inventing answers.',
  summary: {
    totalQuestions: total,
    withExactlyOneCorrect: one,
    withMultipleCorrect: multi,
    withMissingAnswerKey: missing,
    recoveredFromAuthoritativeSource: 0,
    remainingUnresolved: missing,
  },
  sourcesInspected: searched,
  readmeNote:
    'README_AR.txt: some correct answers were unmarked in the source HTML and were deliberately not invented. README_AR_EN.txt: source exposes verified keys only for a subset.',
  questions: unresolved,
};

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/unresolved_answer_keys_audit.json`, JSON.stringify(report, null, 2));

let md = '';
md += '# Unresolved Answer Keys Audit\n\n';
md += `Generated: ${report.generatedAt}\n\n`;
md += `## Conclusion\n\n${report.auditConclusion}\n\n`;
md += '## Summary\n\n';
for (const [k, v] of Object.entries(report.summary)) md += `- ${k}: **${v}**\n`;
md += '\n## Sources inspected\n\n';
for (const s of searched) md += `- ${s}\n`;
md += `\n## README note\n\n${report.readmeNote}\n\n`;
md += `## Unresolved questions (${unresolved.length})\n\n`;

unresolved.forEach((q, i) => {
  md += `### ${i + 1}. ID ${q.id}`;
  if (q.number != null) md += ` (number ${q.number})`;
  md += '\n\n';
  md += `- Section: ${q.section}\n`;
  md += `- Question: ${q.question}\n`;
  md += `- Image filename: ${q.imageFilename || 'n/a'}\n`;
  md += `- Image mediaId: ${q.imageMediaId || 'n/a'}\n`;
  md += `- Image alt: ${q.imageAlt || 'n/a'}\n`;
  md += `- Video filename: ${q.videoFilename || 'n/a'}\n`;
  md += '- Authoritative answer found: **false**\n\n';
  md += 'Answers:\n\n';
  q.answers.forEach((a, idx) => {
    md += `${idx + 1}. ID ${a.id} — "${a.text}" → correct: **${a.correct}**\n`;
  });
  md += '\n';
});

fs.writeFileSync(`${outDir}/unresolved_answer_keys_audit.md`, md);
console.log(JSON.stringify(report.summary, null, 2));
console.log('Wrote', `${outDir}/unresolved_answer_keys_audit.json`);
console.log('Wrote', `${outDir}/unresolved_answer_keys_audit.md`);
