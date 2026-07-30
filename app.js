(() => {
  'use strict';

  const bank = Array.isArray(window.DRIVING_QUESTION_BANK) ? window.DRIVING_QUESTION_BANK : [];
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const STORAGE = {
    stats: 'driving-v2-stats',
    bookmarks: 'driving-v2-bookmarks',
    mistakes: 'driving-v2-mistakes',
    theme: 'driving-v2-theme',
    media: 'driving-v2-media-cache'
  };

  const state = {
    mode: 'quick',
    questions: [],
    index: 0,
    answers: {},
    startedAt: null,
    timeLimit: 0,
    timerId: null,
    remaining: 0,
    lastConfig: null,
    imageToken: 0
  };

  const storageGet = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const storageSet = (key, value) => { try { localStorage.setItem(key, value); return true; } catch { return false; } };
  const safeJSON = (key, fallback) => {
    try { return JSON.parse(storageGet(key)) ?? fallback; } catch { return fallback; }
  };
  const saveJSON = (key, value) => storageSet(key, JSON.stringify(value));
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  const flattenBank = () => bank.flatMap((section, sectionIndex) => section.questions.map(q => ({ ...q, sectionIndex, sectionTitle: section.subtitle })));
  const allQuestions = flattenBank();
  const sectionName = i => bank[i]?.subtitle || 'موضوع عام';

  function toast(message) {
    const el = $('#toast');
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(el._timer);
    el._timer = setTimeout(() => el.classList.remove('show'), 2400);
  }

  function initTheme() {
    const saved = storageGet(STORAGE.theme);
    if (saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches)) document.body.classList.add('dark');
    $('#themeToggle').addEventListener('click', () => {
      document.body.classList.toggle('dark');
      storageSet(STORAGE.theme, document.body.classList.contains('dark') ? 'dark' : 'light');
    });
  }

  function initNavigation() {
    const header = $('#siteHeader');
    addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10), { passive: true });

    $$('[data-scroll]').forEach(btn => btn.addEventListener('click', () => $(btn.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' })));

    const drawer = $('#mobileDrawer');
    const backdrop = $('#drawerBackdrop');
    const menu = $('#menuBtn');
    const close = () => {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      menu.setAttribute('aria-expanded', 'false');
      backdrop.hidden = true;
      document.body.classList.remove('modal-open');
    };
    const open = () => {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      menu.setAttribute('aria-expanded', 'true');
      backdrop.hidden = false;
      document.body.classList.add('modal-open');
    };
    menu.addEventListener('click', open);
    $('#drawerClose').addEventListener('click', close);
    backdrop.addEventListener('click', close);
    $$('.drawer-nav a').forEach(a => a.addEventListener('click', close));

    const links = $$('.desktop-nav a, .mobile-bottom-nav a');
    const sections = $$('main section[id]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-40% 0px -50%' });
    sections.forEach(s => observer.observe(s));
  }

  function initReveal() {
    const reveal = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); reveal.unobserve(e.target); }
    }), { threshold: .08 });
    $$('.reveal').forEach(el => reveal.observe(el));
  }

  function openStartDialog(mode = null) {
    const dlg = $('#startDialog');
    $('#categoryPicker').hidden = true;
    if (!dlg.open) dlg.showModal();
    if (mode) chooseStartMode(mode);
  }

  function initStartDialog() {
    $$('[data-action="open-start"]').forEach(btn => btn.addEventListener('click', () => {
      $('#mobileDrawer')?.classList.remove('open');
      $('#drawerBackdrop').hidden = true;
      document.body.classList.remove('modal-open');
      openStartDialog();
    }));
    $$('[data-start-mode]').forEach(btn => btn.addEventListener('click', () => chooseStartMode(btn.dataset.startMode)));
    $$('[data-quiz-mode]').forEach(btn => btn.addEventListener('click', () => chooseStartMode(btn.dataset.quizMode)));

    const options = $('#categoryOptions');
    bank.forEach((section, index) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'category-btn';
      b.innerHTML = `<strong>${section.subtitle}</strong><br><small>${section.questions.length} سؤالاً</small>`;
      b.addEventListener('click', () => { $('#startDialog').close(); startQuiz({ mode: 'learn', sectionIndex: index, count: Math.min(20, section.questions.length) }); });
      options.appendChild(b);
    });
  }

  function chooseStartMode(mode) {
    if (mode === 'learn') {
      const picker = $('#categoryPicker');
      picker.hidden = false;
      picker.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }
    if (mode === 'mistakes') {
      const ids = safeJSON(STORAGE.mistakes, []);
      const qs = allQuestions.filter(q => ids.includes(String(q.id)));
      if (!qs.length) return toast('لا توجد أخطاء محفوظة بعد. أكمل اختباراً أولاً.');
      $('#startDialog')?.open && $('#startDialog').close();
      return startQuiz({ mode: 'review', questions: qs, title: 'مراجعة الأخطاء' });
    }
    if (mode === 'bookmarks') {
      const ids = safeJSON(STORAGE.bookmarks, []);
      const qs = allQuestions.filter(q => ids.includes(String(q.id)));
      if (!qs.length) return toast('لم تحفظ أي سؤال حتى الآن.');
      $('#startDialog')?.open && $('#startDialog').close();
      return startQuiz({ mode: 'learn', questions: qs, title: 'الأسئلة المحفوظة' });
    }
    $('#startDialog')?.open && $('#startDialog').close();
    if (mode === 'exam') return startQuiz({ mode: 'exam', count: 20, timeLimit: 20 * 60 });
    if (mode === 'daily') return startQuiz({ mode: 'learn', count: 7, title: 'تحدي اليوم' });
    return startQuiz({ mode: 'quick', count: 10 });
  }

  function balancedSelection(count) {
    const per = Math.floor(count / bank.length);
    const rest = count % bank.length;
    const result = [];
    bank.forEach((section, i) => result.push(...shuffle(section.questions).slice(0, per + (i < rest ? 1 : 0)).map(q => ({ ...q, sectionIndex: i, sectionTitle: section.subtitle }))));
    return shuffle(result);
  }

  function startQuiz(config) {
    clearInterval(state.timerId);
    state.mode = config.mode;
    state.questions = config.questions ? shuffle(config.questions) : config.sectionIndex != null
      ? shuffle(bank[config.sectionIndex].questions).slice(0, config.count || 20).map(q => ({ ...q, sectionIndex: config.sectionIndex, sectionTitle: bank[config.sectionIndex].subtitle }))
      : balancedSelection(config.count || 10);
    state.index = 0;
    state.answers = {};
    state.startedAt = Date.now();
    state.timeLimit = config.timeLimit || 0;
    state.remaining = state.timeLimit;
    state.lastConfig = { ...config, questions: undefined };

    $('#quizTitle').textContent = config.title || ({ exam: 'محاكاة الامتحان', quick: 'اختبار سريع', learn: 'وضع التعلّم', review: 'مراجعة الأخطاء' }[state.mode] || 'اختبار');
    $('#quizSubtitle').textContent = config.sectionIndex != null ? sectionName(config.sectionIndex) : 'جميع المحاور';
    $('#resultShell').hidden = true;
    $('#questionShell').hidden = false;
    $('#quizApp').hidden = false;
    document.body.classList.add('modal-open');
    $('#quizApp').scrollTop = 0;
    $('#quizTimer').hidden = !state.timeLimit;
    if (state.timeLimit) startTimer();
    renderQuestion();
    renderMap();
  }

  function startTimer() {
    updateTimer();
    state.timerId = setInterval(() => {
      state.remaining--;
      updateTimer();
      if (state.remaining <= 0) finishQuiz(true);
    }, 1000);
  }

  function updateTimer() {
    const m = Math.floor(Math.max(0, state.remaining) / 60).toString().padStart(2, '0');
    const s = (Math.max(0, state.remaining) % 60).toString().padStart(2, '0');
    $('#quizTimer').textContent = `${m}:${s}`;
    $('#quizTimer').style.color = state.remaining < 120 ? 'var(--danger)' : '';
  }

  function renderQuestion() {
    const q = state.questions[state.index];
    if (!q) return finishQuiz();
    const stored = state.answers[String(q.id)];
    const isLearning = ['learn', 'review'].includes(state.mode);
    $('#questionCounter').textContent = `السؤال ${state.index + 1} من ${state.questions.length}`;
    $('#quizProgressBar').style.width = `${((state.index + 1) / state.questions.length) * 100}%`;
    $('#questionText').textContent = q.question || 'اختر الإجابة الصحيحة';
    $('#prevQuestion').disabled = state.index === 0;
    $('#nextQuestion').textContent = state.index === state.questions.length - 1 ? 'إنهاء الاختبار' : 'التالي';
    renderImage(q);

    const answers = $('#answersList'); answers.innerHTML = '';
    const letters = ['أ', 'ب', 'ج', 'د', 'هـ'];
    q.answers.forEach((a, i) => {
      const btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'answer-option';
      btn.innerHTML = `<span class="letter">${letters[i] || i + 1}</span><span>${escapeHTML(a.text)}</span>`;
      if (stored) {
        if (String(stored.answerId) === String(a.id)) btn.classList.add('selected');
        if (isLearning && stored.locked) {
          btn.disabled = true;
          if (a.correct) btn.classList.add('correct');
          if (String(stored.answerId) === String(a.id) && !a.correct) btn.classList.add('wrong');
        }
      }
      btn.addEventListener('click', () => chooseAnswer(q, a));
      answers.appendChild(btn);
    });

    const feedback = $('#answerFeedback');
    if (stored?.locked && isLearning) {
      const correct = q.answers.find(a => a.correct);
      feedback.hidden = false;
      if (!stored.verified) {
        feedback.className = 'answer-feedback neutral';
        feedback.textContent = 'تم حفظ إجابتك. مفتاح الإجابة لهذا السؤال غير ظاهر في الملف المصدر، لذلك لن يتم احتسابه في النتيجة.';
      } else {
        feedback.className = `answer-feedback ${stored.correct ? 'success' : 'danger'}`;
        feedback.textContent = stored.correct ? 'إجابة صحيحة، أحسنت.' : `الإجابة الصحيحة: ${correct?.text || 'غير محددة'}`;
      }
    } else feedback.hidden = true;

    const bookmarks = safeJSON(STORAGE.bookmarks, []);
    const bookmarked = bookmarks.includes(String(q.id));
    $('#bookmarkBtn').classList.toggle('active', bookmarked);
    $('#bookmarkBtn').setAttribute('aria-pressed', String(bookmarked));
    $('#bookmarkBtn').textContent = bookmarked ? '★ محفوظ' : '☆ حفظ السؤال';
    updateMap();
    $('#quizMain').scrollTo?.({ top: 0, behavior: 'smooth' });
  }

  function escapeHTML(str = '') {
    return str.replace(/[&<>'"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[c]));
  }

  function chooseAnswer(q, answer) {
    const current = state.answers[String(q.id)];
    if (current?.locked && ['learn', 'review'].includes(state.mode)) return;
    const verified = q.answers.some(a => a.correct);
    state.answers[String(q.id)] = { answerId: String(answer.id), correct: verified ? !!answer.correct : null, verified, locked: ['learn', 'review'].includes(state.mode), sectionIndex: q.sectionIndex };
    renderQuestion();
    if (['learn', 'review'].includes(state.mode) && verified && answer.correct) setTimeout(() => { if (state.index < state.questions.length - 1) { state.index++; renderQuestion(); } }, 650);
  }

  async function renderImage(q) {
    const wrap = $('#questionImageWrap'); const img = $('#questionImage'); const loader = $('#imageLoader'); const vid = $('#questionVideo');
    const token = ++state.imageToken;
    img.removeAttribute('src'); img.hidden = true; loader.hidden = false;
    if (vid) { vid.pause?.(); vid.removeAttribute('src'); vid.hidden = true; }
    loader.textContent = 'يتم تحميل صورة السؤال…';
    if (q.video?.filename) {
      wrap.hidden = false;
      const candidates = await resolveMediaCandidates(q.video);
      if (token !== state.imageToken) return;
      if (!candidates.length || !vid) { loader.textContent = q.video?.alt || 'تعذر تحميل فيديو السؤال'; return; }
      let vIndex = 0;
      const tryNextVid = () => {
        if (token !== state.imageToken) return;
        if (vIndex >= candidates.length) { loader.hidden = false; loader.textContent = q.video?.alt || 'تعذر تحميل فيديو السؤال. تأكد من اتصال الإنترنت.'; vid.hidden = true; return; }
        vid.src = candidates[vIndex++];
      };
      vid.oncanplay = () => { if (token === state.imageToken) { loader.hidden = true; vid.hidden = false; } };
      vid.onerror = () => { vid.hidden = true; tryNextVid(); };
      tryNextVid();
      return;
    }
    if (!q.image?.mediaId && !q.image?.filename) { wrap.hidden = true; return; }
    wrap.hidden = false;
    const candidates = await resolveMediaCandidates(q.image || {});
    if (token !== state.imageToken) return;
    if (!candidates.length) { loader.textContent = q.image?.alt || 'تعذر تحميل صورة السؤال'; return; }
    img.alt = q.image?.alt || 'صورة السؤال';
    let index = 0;
    const tryNext = () => {
      if (token !== state.imageToken) return;
      if (index >= candidates.length) {
        loader.hidden = false;
        loader.textContent = q.image?.alt || 'تعذر تحميل صورة السؤال. تأكد من اتصال الإنترنت.';
        img.hidden = true;
        return;
      }
      img.src = candidates[index++];
    };
    img.onload = () => { if (token === state.imageToken) { loader.hidden = true; img.hidden = false; } };
    img.onerror = () => { img.hidden = true; tryNext(); };
    tryNext();
  }

  function directMediaCandidates(filename = '') {
    if (!filename) return [];
    const encoded = filename.split('/').map(encodeURIComponent).join('/');
    const hinted = filename.match(/(20\d{2})[-_](0[1-9]|1[0-2])/);
    const months = hinted ? [[hinted[1], hinted[2]]] : [
      ['2023','03'], ['2023','04'], ['2023','05'], ['2023','06'], ['2023','07'],
      ['2023','08'], ['2023','09'], ['2023','10'], ['2023','11'], ['2023','12']
    ];
    if (filename.includes('اياد-اللحام')) months.unshift(['2023','07']);
    return months.map(([y,m]) => `https://trainingdriving.com/wp-content/uploads/${y}/${m}/${encoded}`);
  }

  async function resolveMediaCandidates(image) {
    const id = image.mediaId;
    const cache = safeJSON(STORAGE.media, {});
    const urls = [];
    if (image.filename) urls.push(`assets/questions/${image.filename.split('/').map(encodeURIComponent).join('/')}`);
    if (cache[id]) urls.push(cache[id]);
    if (id && !cache[id]) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 6500);
        const res = await fetch(`https://trainingdriving.com/wp-json/wp/v2/media/${id}`, { signal: controller.signal });
        clearTimeout(timeout);
        if (res.ok) {
          const data = await res.json();
          const url = data.source_url || data.guid?.rendered;
          if (url) { cache[id] = url; saveJSON(STORAGE.media, cache); urls.push(url); }
        }
      } catch {}
    }
    urls.push(...directMediaCandidates(image.filename));
    return [...new Set(urls)];
  }

  function nextQuestion() {
    const q = state.questions[state.index];
    if (!state.answers[String(q.id)]) return toast('اختر إجابة قبل الانتقال.');
    if (state.index >= state.questions.length - 1) return finishQuiz();
    state.index++; renderQuestion();
  }
  function prevQuestion() { if (state.index > 0) { state.index--; renderQuestion(); } }

  function finishQuiz(timeout = false) {
    clearInterval(state.timerId);
    const total = state.questions.length;
    const answered = Object.values(state.answers);
    const gradedQuestions = state.questions.filter(q => q.answers.some(a => a.correct));
    const gradedTotal = gradedQuestions.length;
    const correct = answered.filter(a => a.verified && a.correct).length;
    const wrong = answered.filter(a => a.verified && a.correct === false).length + gradedQuestions.filter(q => !state.answers[String(q.id)]).length;
    const unverified = total - gradedTotal;
    const percent = gradedTotal ? Math.round((correct / gradedTotal) * 100) : 0;
    const elapsed = state.timeLimit ? state.timeLimit - state.remaining : Math.round((Date.now() - state.startedAt) / 1000);

    const mistakeIds = new Set(safeJSON(STORAGE.mistakes, []));
    state.questions.forEach(q => {
      const a = state.answers[String(q.id)];
      if (!a?.verified) return;
      if (!a.correct) mistakeIds.add(String(q.id)); else mistakeIds.delete(String(q.id));
    });
    saveJSON(STORAGE.mistakes, [...mistakeIds]);

    const byTopic = bank.map((section, i) => {
      const qs = state.questions.filter(q => q.sectionIndex === i);
      const verifiedQs = qs.filter(q => q.answers.some(a => a.correct));
      const c = verifiedQs.filter(q => state.answers[String(q.id)]?.correct).length;
      return { index: i, title: section.subtitle, total: verifiedQs.length, correct: c, percent: verifiedQs.length ? Math.round(c / verifiedQs.length * 100) : null };
    }).filter(x => x.total);

    const stats = safeJSON(STORAGE.stats, { attempts: [], topicTotals: {} });
    stats.attempts.unshift({ date: new Date().toISOString(), percent, correct, total, elapsed, mode: state.mode, byTopic });
    stats.attempts = stats.attempts.slice(0, 30);
    byTopic.forEach(t => {
      const old = stats.topicTotals[t.index] || { correct: 0, total: 0 };
      old.correct += t.correct; old.total += t.total; stats.topicTotals[t.index] = old;
    });
    saveJSON(STORAGE.stats, stats);

    $('#questionShell').hidden = true;
    $('#resultShell').hidden = false;
    $('#resultIcon').textContent = percent >= 70 ? '✓' : '!';
    $('#resultTitle').textContent = percent >= 90 ? 'نتيجة ممتازة!' : percent >= 70 ? 'أحسنت، أنت على الطريق الصحيح' : 'تحتاج إلى مراجعة إضافية';
    $('#resultMessage').textContent = !gradedTotal
      ? 'تم حفظ إجاباتك، لكن هذه المجموعة لا تحتوي مفتاح إجابة موثقاً في الملف المصدر.'
      : `${timeout ? 'انتهى الوقت. ' : ''}تم احتساب ${gradedTotal} سؤالاً يملك مفتاح إجابة موثقاً${unverified ? `، و${unverified} سؤالاً تدريبياً غير مُصحح` : ''}.`;
    $('#resultPercent').textContent = `${percent}%`;
    $('#resultFraction').textContent = `${correct} / ${gradedTotal}`;
    $('#correctCount').textContent = correct;
    $('#wrongCount').textContent = wrong;
    $('#unverifiedCount').textContent = unverified;
    $('#timeUsed').textContent = formatTime(elapsed);
    $('#reviewWrong').disabled = wrong === 0;
    $('#resultTopics').innerHTML = byTopic.map(t => `<div class="result-topic"><span>${escapeHTML(t.title)}</span><strong>${t.percent}%</strong><div class="topic-track"><i style="width:${t.percent}%"></i></div></div>`).join('');
    $('#quizProgressBar').style.width = '100%';
    $('#quizApp').scrollTo({ top: 0, behavior: 'smooth' });
    updateDashboard();
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = Math.max(0, seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function renderMap() {
    const grid = $('#mapGrid'); grid.innerHTML = '';
    state.questions.forEach((q, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'map-number'; b.textContent = i + 1;
      b.addEventListener('click', () => { state.index = i; renderQuestion(); closeMap(); });
      grid.appendChild(b);
    });
    updateMap();
  }
  function updateMap() { $$('.map-number').forEach((b, i) => { b.classList.toggle('current', i === state.index); b.classList.toggle('answered', !!state.answers[String(state.questions[i]?.id)]); }); }
  function openMap() { $('#questionMap').classList.add('open'); $('#questionMap').setAttribute('aria-hidden','false'); $('#mapBackdrop').hidden = false; }
  function closeMap() { $('#questionMap').classList.remove('open'); $('#questionMap').setAttribute('aria-hidden','true'); $('#mapBackdrop').hidden = true; }

  function exitQuiz() {
    if (!$('#resultShell').hidden || confirm('هل تريد الخروج من الاختبار؟ سيتم فقدان المحاولة الحالية.')) {
      clearInterval(state.timerId); $('#quizApp').hidden = true; document.body.classList.remove('modal-open'); closeMap();
    }
  }

  function toggleBookmark() {
    const q = state.questions[state.index];
    const set = new Set(safeJSON(STORAGE.bookmarks, []));
    set.has(String(q.id)) ? set.delete(String(q.id)) : set.add(String(q.id));
    saveJSON(STORAGE.bookmarks, [...set]); renderQuestion(); updateDashboard();
  }

  function updateDashboard() {
    const stats = safeJSON(STORAGE.stats, { attempts: [], topicTotals: {} });
    const bookmarks = safeJSON(STORAGE.bookmarks, []);
    const mistakes = safeJSON(STORAGE.mistakes, []);
    $('#bookmarkCountTag').textContent = `${bookmarks.length} محفوظ`;
    $('#mistakeCountTag').textContent = `${mistakes.length} أسئلة`;
    const last = stats.attempts?.[0];
    const score = last?.percent || 0;
    $('#readinessScore').textContent = `${score}%`;
    $('#scoreRing').style.setProperty('--score', score);
    $('#readinessStatus').textContent = !last ? 'ابدأ أول اختبار' : score >= 85 ? 'جاهزية ممتازة' : score >= 70 ? 'جاهزية جيدة' : 'يحتاج مراجعة';
    $('#readinessMessage').textContent = !last ? 'لم تسجل أي محاولة بعد. ابدأ اختباراً سريعاً للحصول على تحليل أولي.' : `آخر نتيجة كانت ${score}%. ${score >= 70 ? 'استمر في المراجعة للحفاظ على مستواك.' : 'راجع المحاور الأقل أداءً ثم أعد الاختبار.'}`;
    const bars = $('#topicBars');
    bars.innerHTML = bank.map((s, i) => {
      const t = stats.topicTotals?.[i]; const p = t?.total ? Math.round(t.correct / t.total * 100) : 0;
      return `<div class="topic-row"><span>${escapeHTML(s.subtitle)}</span><span>${p}%</span><div class="topic-track"><i style="width:${p}%"></i></div></div>`;
    }).join('');
  }

  function initQuizControls() {
    $('#nextQuestion').addEventListener('click', nextQuestion);
    $('#prevQuestion').addEventListener('click', prevQuestion);
    $('#quizExit').addEventListener('click', exitQuiz);
    $('#bookmarkBtn').addEventListener('click', toggleBookmark);
    $('#questionMapBtn').addEventListener('click', openMap);
    $('#questionMapClose').addEventListener('click', closeMap);
    $('#mapBackdrop').addEventListener('click', closeMap);
    $('#retryQuiz').addEventListener('click', () => startQuiz(state.lastConfig || { mode: 'quick', count: 10 }));
    $('#reviewWrong').addEventListener('click', () => chooseStartMode('mistakes'));
    $('#backHome').addEventListener('click', exitQuiz);
    addEventListener('keydown', e => {
      if ($('#quizApp').hidden) return;
      if (e.key === 'Escape') exitQuiz();
      if (e.key === 'ArrowLeft') nextQuestion();
      if (e.key === 'ArrowRight') prevQuestion();
      if (/^[1-5]$/.test(e.key)) {
        const q = state.questions[state.index]; const a = q?.answers[Number(e.key) - 1]; if (a) chooseAnswer(q, a);
      }
    });
  }

  function initContactForm() {
    const form = $('#contactForm');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const fd = new FormData(form);
      const name = String(fd.get('name') || '').trim();
      const phone = String(fd.get('phone') || '').trim();
      const request = String(fd.get('request') || '').trim();
      const message = String(fd.get('message') || '').trim();
      const text = [
        'مرحباً أكاديمية عواد الرواد،',
        `الاسم: ${name}`,
        `رقم الهاتف: ${phone}`,
        `نوع الطلب: ${request}`,
        message ? `الرسالة: ${message}` : '',
      ].filter(Boolean).join('\n');
      const url = `https://wa.me/962799586976?text=${encodeURIComponent(text)}`;
      $('#formNote').textContent = 'تم تجهيز رسالتك، جارٍ فتح واتساب…';
      const opened = window.open(url, '_blank', 'noopener,noreferrer');
      if (!opened) window.location.href = url;
    });
  }

  function initServiceWorker() {
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  }

  initTheme();
  initNavigation();
  initReveal();
  initStartDialog();
  initQuizControls();
  initContactForm();
  initServiceWorker();
  updateDashboard();
})();
