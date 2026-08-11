# Next 273 Missing Questions — Answer Audit (READ-ONLY)

Generated: 2026-08-11T19:45:17.239Z

**Status: AUDIT ONLY — nothing applied.**

## Summary

- Starting missing: **273**
- Current verified: **380**
- STRONG: **1**
- HIGH_CONFIDENCE: **3**
- MEDIUM: **161**
- CONFLICT: **17**
- INVALID: **1**
- NO_MATCH: **90**

### Duplicate IDs (must manually exclude from any auto-apply)

- Q616 — 2 slots
- Q617 — 2 slots
- Q634 — 2 slots
- Q635 — 2 slots

### STRONG / HIGH_CONFIDENCE safe candidates (non-duplicate IDs)

(none)

### STRONG / HIGH that must be manually excluded

- Q616 (1:96:616) — HIGH_CONFIDENCE
- Q617 (1:97:617) — HIGH_CONFIDENCE
- Q635 (1:98:635) — STRONG
- Q616 (5:16:616) — HIGH_CONFIDENCE

## STRONG / HIGH_CONFIDENCE candidate details

### Q616 — HIGH_CONFIDENCE [MUST EXCLUDE]

- Question: واحدة من الامور التي تساعد على زيادة إستهلاك البنزين:
- Choices: [0] الابتعاد عن الاختناقات المرورية | [1] الضغط المنخفض للهواء بالاطارات | [2] تغير السرعات يتم بنقل الحركة من سرعة الى اخرى فى الوقت المناسب
- External source: alqemah
- External question: واحدة من الامور التي تساعد على زيادة إستهلاك البنزين:
- External correct answer: الضغط المنخفض للهواء بالاطارات
- Answer index: 1
- Confidence: high
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("الضغط المنخفض للهواء بالاطارات")
- All sources: alqemah→1

### Q617 — HIGH_CONFIDENCE [MUST EXCLUDE]

- Question: عند تشغيل المركبة يوميا و قبل الانطلاق يجب :
- Choices: [0] التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية). | [1] تفقد صلاحية الاطارات وشد الصواميل. | [2] التأكد من زيت الجير والمحور الخلفي
- External source: alqemah
- External question: عند تشغيل المركبة يوميا و قبل الانطلاق يجب :
- External correct answer: التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية).
- Answer index: 0
- Confidence: high
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية).")
- All sources: alqemah→0

### Q635 — STRONG [MUST EXCLUDE]

- Question: المشاة هم :
- Choices: [0] الذين يسيرون على اقدامهم. | [1] سائقوا الدراجات الهوائية . | [2] اي شخص يدفع أو يجر عربة اطفال او عربة مريض او مقعد او عربة يد. | [3] جميع ما ذكر
- External source: morortest
- External question: المشاة هم
- External correct answer: جميع ما ذكر
- Answer index: 3
- Confidence: high
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 3 ("جميع ما ذكر")
- All sources: morortest→3, alqemah→3

### Q616 — HIGH_CONFIDENCE [MUST EXCLUDE]

- Question: واحدة من التالية ليست من وظيفة الاطارات
- Choices: [0] تحمل الصدمات. | [1] رفع الاحمال. | [2] تزويد المركبة بالطاقة من خلال الحركة. | [3] ايقاف المركبة
- External source: alqemah
- External question: واحدة من التالية ليست من وظيفة الاطارات
- External correct answer: تزويد المركبة بالطاقة من خلال الحركة.
- Answer index: 2
- Confidence: high
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("تزويد المركبة بالطاقة من خلال الحركة.")
- All sources: alqemah→2

## Methodology

- AUDIT ONLY — no answers applied; data/questions.js / app.js / styles.css untouched.
- Source bank: current data/questions.js (380 verified / 273 missing).
- Each missing SLOT classified independently (duplicate IDs are not collapsed).
- Matched against morortest JO package, alqemah Quiz Maker keys, training-driving keyed sheets.
- Arabic deepNorm + complete answer-set identity; question IDs never used as identity.
- Image/scene stems require image identity for STRONG; yes/no prefer dual independent confirmation.
- Duplicate IDs (616,617,634,635) must NEVER be auto-applied.
- Q665/Q666 force-held; Q673 INVALID.

## Per-slot results (all 273 missing)

### Q188 (0:9:188) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات الالية | [1] ممنوع مرور المركات القاطرة والمقطورة. | [2] ممنوع مرور المركبات المعدة لنقل البضائع
- Proposed: ممنوع مرور المركات القاطرة والمقطورة. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q187 (0:10:187) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات. | [1] ممنوع المرور. | [2] ممنوع مرور المركبات المعدة لنقل البضائع .
- Proposed: ممنوع مرور المركبات المعدة لنقل البضائع . (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q186 (0:11:186) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات الالية | [1] ممنوع مرور الدراجات النارية. | [2] ممنوع مرور الدراجات ذات المحرك الصغير.
- Proposed: ممنوع مرور الدراجات ذات المحرك الصغير. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q185 (0:12:185) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات الالية | [1] ممنوع مرور الدراجات النارية. | [2] ممنوع مرور الدراجات الهوائية
- Proposed: ممنوع مرور الدراجات الهوائية (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q183 (0:14:183) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات الالية | [1] أفضلية المرور لك. | [2] يسمح بمرور الاليات
- Proposed: ممنوع مرور المركبات الالية (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q181 (0:16:181) — CONFLICT

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات بالاتجاهين | [1] أفضلية المرور لك. | [2] ممنوع المرور.
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 2, 0
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q180 (0:17:180) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] نهاية طريق رئيسي. | [1] أفضلية المرور لك. | [2] طريق رئيسي.
- Proposed: أفضلية المرور لك. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q179 (0:18:179) — NO_MATCH

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] نهاية طريق رئيسي. | [1] افضلية المرور لك. | [2] الاولوية للقادمين من الجهة المقابلة.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q178 (0:19:178) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] نهاية الطريق ذات الاولوية. | [1] امامك شاخصة اعطي الاولوية. | [2] بداية طريق ذو اولوية.
- Proposed: نهاية الطريق ذات الاولوية. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q177 (0:20:177) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] نهاية الطريق ذات الاولوية | [1] أمامك شاخصة اعطي الاولوية. | [2] طريق ذو اولوية .
- Proposed: طريق ذو اولوية . (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q176 (0:21:176) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] طريق خطر. | [1] طريق رئيسي. | [2] اعطي الاولوية.
- Proposed: اعطي الاولوية. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q175 (0:22:175) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] امامك تقاطع | [1] امامك دوار | [2] وجوب الوقوف
- Proposed: وجوب الوقوف (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q174 (0:23:174) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق خطر | [1] امامك شاخصة اعط الاولوية. | [2] طريق رئيسي
- Proposed: امامك شاخصة اعط الاولوية. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q171 (0:26:171) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] تقاطع طريق رئيسي مع فرعي من جهة اليسار. | [1] تقاطع طريق رئيسي مع فرعي من جهة اليمين. | [2] تقاطع طريق رئيسي مع طريق رئيسي.
- Proposed: تقاطع طريق رئيسي مع فرعي من جهة اليسار. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q170 (0:27:170) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] أمامك تقاطع. | [1] تقاطع طريق رئيسي مع طريقين فرعيين | [2] تقاطع فرعي.
- Proposed: تقاطع طريق رئيسي مع طريقين فرعيين (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q169 (0:28:169) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] أمامك تقاطع | [1] امامك دوار. | [2] أمامك شاخصة قف
- Proposed: أمامك شاخصة قف (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q168 (0:29:168) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق خطر | [1] يجب الدوران. | [2] أمامك دوار
- Proposed: أمامك دوار (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q167 (0:30:167) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق خطر | [1] خفض السرعة. | [2] تقاطع متكافئ الحقوق.
- Proposed: تقاطع متكافئ الحقوق. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q166 (0:31:166) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق غير خطر | [1] خفض السرعة | [2] أخطار مختلفة
- Proposed: أخطار مختلفة (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q165 (0:32:165) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] أمامك سكة حديد مع حاجز | [1] مقاطع سكة حديد على أبعاد مختلفة من التقاطع | [2] مقطع سكة حديد(خط واحد)
- Proposed: مقاطع سكة حديد على أبعاد مختلفة من التقاطع (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q164 (0:33:164) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] امامك سكة حديد مع حاجز. | [1] مقطع سكة حديد (أكثر من خط). | [2] مقطع سكة حديد(خط واحد)
- Proposed: مقطع سكة حديد (أكثر من خط). (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q163 (0:34:163) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] أمامك سكة حديد مع حاجز. | [1] أمامك سكة حديد بدون حاجز. | [2] مقطع سكة حديد(خط واحد)
- Proposed: مقطع سكة حديد(خط واحد) (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q162 (0:35:162) — NO_MATCH

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] أمامك سكة حديد مع حاجز | [1] امامك سكة حديد دون حاجز | [2] امامك قطار.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q160 (0:37:160) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] امامك نفق. | [1] امامك جسر. | [2] امامك طريق مفصول بجزيرة وسطية.
- Proposed: امامك نفق. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q159 (0:38:159) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني :
- Choices: [0] طريق مفصول. | [1] طريق ذو اتجاهين. | [2] إنتهاء الطريق المفصول بجزيرة وسطية.
- Proposed: إنتهاء الطريق المفصول بجزيرة وسطية. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q155 (0:42:155) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني:
- Choices: [0] أمامك مطار | [1] منطقة طيران منخفض | [2] منطقة خطرة.
- Proposed: منطقة طيران منخفض (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q154 (0:43:154) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] ممنوع مرور الحيوانات | [1] منطقة خطرة | [2] عبور حيوانات.
- Proposed: عبور حيوانات. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q151 (0:45:151) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] أمامك مدرسة. | [1] وجود طلاب مدارس. | [2] ممر مشاة.
- Proposed: وجود طلاب مدارس. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q150 (0:46:150) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] ممر مشاة. | [1] وجود أطفال | [2] ممنوع المرور.
- Proposed: ممر مشاة. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q149 (0:47:149) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق خطر | [1] طريق زلقة | [2] تناثر حصى
- Proposed: تناثر حصى (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q148 (0:48:148) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] اكتاف خطرة. | [1] طريق زلقة | [2] تناثر حصى.
- Proposed: طريق زلقة (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q145 (0:51:145) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق غير مستوى. | [1] يجب الانتباه. | [2] اعمال على الطريق.
- Proposed: اعمال على الطريق. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q144 (0:52:144) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق غير مستوى. | [1] طريق ينتهي إلى رصيف بحر او نهر | [2] أمامك شاطئ بحر
- Proposed: طريق ينتهي إلى رصيف بحر او نهر (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q143 (0:53:143) — CONFLICT

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني.
- Choices: [0] انخفاض في مستوى الطريق | [1] طريق غير مستوى. | [2] مطب.
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1, 2
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q140 (0:56:140) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] تضيق جسر. | [1] تضيق الطريق من جهتين. | [2] تضيق الطريق من اليمين.
- Proposed: تضيق جسر. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q137 (0:59:137) — NO_MATCH

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] تضيق الطريق من جهتين. | [1] امامك تضيق جسر . | [2] تضيق خطر. | [3] لا شي مما ذكر
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q134 (0:62:134) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني:
- Choices: [0] منعطفان اولها لليمين | [1] منعطفان خطرة. | [2] منعطف لليمين.
- Proposed: منعطفان اولها لليمين (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q133 (0:63:133) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] منعطفان اولها لليسار | [1] منعطفان اولها لليمين. | [2] منعطفات خطرة.
- Proposed: منعطفان اولها لليسار (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q132 (0:64:132) — NO_MATCH

- Section: الشواخص والاشارات
- Question: هذه الشاخصة التحذيرية تعني :
- Choices: [0] نعطف لليسار. | [1] منعطف لليمين. | [2] منعطف خطر.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q199 (0:66:199) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع الانعطاف إلى اليسار. | [1] ممنوع الانعطاف إلى اليمين. | [2] مسموح الانعطاف الى اليسار.
- Proposed: ممنوع الانعطاف إلى اليسار. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q192 (0:67:192) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور العربات التي تدفع باليد. | [1] ممنوع مرور المشاة. | [2] الطريق لعربات اليد
- Proposed: ممنوع مرور العربات التي تدفع باليد. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q197 (0:68:197) — MEDIUM

- Section: الشواخص والاشارات
- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات التي تزن اكثر من 8طن على المحور | [1] ممنوع مرور المركبات التي يزيد ارتفاعها عن 8م | [2] ممنوع مرور المركبات التي يزيد عرضها عن 8م
- Proposed: ممنوع مرور المركبات التي تزن اكثر من 8طن على المحور (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q125 (0:74:125) — MEDIUM

- Section: الشواخص والاشارات
- Question: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن خارج المدن والقرى على الطرق الرئيسية ذات الاتجاهين وغير المفصولة بجزيرة وسيطة هو:
- Choices: [0] 100كم/ساعة. | [1] 90كم/ساعة. | [2] 80كم/ساعة.
- Proposed: 100كم/ساعة. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q124 (0:75:124) — MEDIUM

- Section: الشواخص والاشارات
- Question: .الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن خارج المدن والقرى على الطرق الرئيسية ذات المسربين او اكثر في كل اتجاه والمفصولة بجزيرة وسيطة هو :
- Choices: [0] 100كم/ساعة. | [1] 90 كم/ساعة. | [2] 110كم/ساعة. | [3] 120كم/ساعة
- Proposed: 110كم/ساعة. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q122 (0:77:122) — MEDIUM

- Section: الشواخص والاشارات
- Question: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن داخل المدن والقرى على الطرق الرئيسية ذات المسربين او اكثر في كل اتجاه والمفصولة بجزيرة وسيطة هو:
- Choices: [0] 60 كم/ساعة. | [1] 70كم/ساعة. | [2] 80كم/ساعة.
- Proposed: 80كم/ساعة. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q115 (0:84:115) — CONFLICT

- Section: الشواخص والاشارات
- Question: .الضوء الاصفر المتقطع يسمح للسائق بالمرور بحذر شديد بعد إعطاء الاولوية للمشاة او المركبات صاحبة حق الاولوية :
- Choices: [0] نعم | [1] لا
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q108 (0:91:108) — MEDIUM

- Section: الشواخص والاشارات
- Question: المسرب الذي يتخذه سائق المركبة:
- Choices: [0] صحيح. | [1] خاطىء
- Proposed: خاطىء (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q107 (0:92:107) — NO_MATCH

- Section: الشواخص والاشارات
- Question: عند مشاهدة هذه الاشارة فإنه
- Choices: [0] يسمح بالانعطاف لليمين. | [1] يمنع الانعطاف لليمين. | [2] يسمح بالتقدم للأمام | [3] أ+ج
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q106 (0:93:106) — NO_MATCH

- Section: الشواخص والاشارات
- Question: عند مشاهدة هذه الاشارة فإنه:
- Choices: [0] يسمح بالانعطاف لليمين. | [1] يمنع الانعطاف لليمين. | [2] يمنع التقدم لألمام | [3] أ+ج
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q103 (0:96:103) — MEDIUM

- Section: الشواخص والاشارات
- Question: على سائق المركبة المشار إليها:
- Choices: [0] الالتزام بيسار لطريق. | [1] الالتزام بيمين الطريق . | [2] السير امام مركبة الاطفاء لفسح الطريق لها.
- Proposed: الالتزام بيمين الطريق . (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q102 (0:97:102) — NO_MATCH

- Section: الشواخص والاشارات
- Question: وجود البسطات بهذا الشكل:
- Choices: [0] مسموح به لانه يقدم خدمة للناس. | [1] ممنوع لانه لا يلتزم بالاسعار المحددة | [2] ممنوع لانه يتعدى على حرمة الطريق.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q100 (0:98:100) — MEDIUM

- Section: الشواخص والاشارات
- Question: وقوف المركبة بهذه الطريقة:
- Choices: [0] صحيح لعدم وجود شرطي سير | [1] خاطئ لانها  تبعد اكثر من نصف متر عن الرصيف | [2] خاطئ لوجود شاخصة تمنع ذلك.
- Proposed: خاطئ لانها  تبعد اكثر من نصف متر عن الرصيف (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q99 (1:0:99) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: مايقوم به المشاة
- Choices: [0] صحيح لوجود معبر المشاة. | [1] خاطيء لعدم وجود شاخصة تسمح بذلك
- Proposed: صحيح لوجود معبر المشاة. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q98 (1:1:98) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: ما يقوم به سائق المركبة:
- Choices: [0] صحيح لعدم وجود شاخصة تمنع ذلك | [1] خاطئ لانها تعيق المرور
- Proposed: خاطئ لانها تعيق المرور (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q97 (1:2:97) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: ظهور هذه الاشارة يعني:
- Choices: [0] السماح للمشاة بعبور الطريق. | [1] منع المشاة من عبور الطريق | [2] عدم السماح للمشاة بالشروع في عبور الطريق واتمام العبور بعد البدء فيه.
- Proposed: منع المشاة من عبور الطريق (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q96 (1:3:96) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: ما يقوم به سائق المركبة رقم 1
- Choices: [0] صحيح لعدم وجود مركبات من هذا الجانب من الطريق. | [1] صحيح لعدم وجود وجود شاخصة تمنع ذلك | [2] ممنوع لسيره بعكس إتجاه السير. | [3] ممنوع لاقترابها من الجزيرة الوسطية.
- Proposed: ممنوع لسيره بعكس إتجاه السير. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q95 (1:4:95) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: سير المركبة (التكسي) المبينه بالصورة:
- Choices: [0] مسموح | [1] ممنوع
- Proposed: ممنوع (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q94 (1:5:94) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: وجود هذه الشاخصة يعني :
- Choices: [0] على السائق الانتباه والحذر من وجود منعطف حاد أمامه | [1] على السائق الانتباه والحذر من وجود أخطار مختلفة أمامه | [2] على السائق االنتباه والحذر من وجود منحدر خطر أمامه.
- Proposed: على السائق الانتباه والحذر من وجود أخطار مختلفة أمامه (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q93 (1:7:93) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤية هذه الشاخصة على السائق:
- Choices: [0] تخفيف سرعته والتوقف على التقاطع وإعطاء حق الاولوية حسب قواعد أولويات المرور. | [1] يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق محكوم بإشارات ضوئية. | [2] يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق محكوم بشواخص مرورية. | [3] يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق غير متكافئ.
- Proposed: تخفيف سرعته والتوقف على التقاطع وإعطاء حق الاولوية حسب قواعد أولويات المرور. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q92 (1:8:92) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: الشاخصة التحذيرية التي امامك بالصورة تعني
- Choices: [0] على السائق القادم من اليمين الانتباه كونه يدخل الى اتجاه الطريق الرئيسي. | [1] على السائق القادم من الطريق الرئيسي عدم الانتباه إلى الشاخصة. | [2] على السائق القادم من الطريق الرئيسي متابعة مسيره بصورة طبيعية | [3] لا شيء مما ذكر
- Proposed: على السائق القادم من اليمين الانتباه كونه يدخل الى اتجاه الطريق الرئيسي. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q91 (1:9:91) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: سائق المركبة المبينة في الصورة والتي وضع عليها دائرة في اللون الاحمر :
- Choices: [0] يتصرف بشكل صحيح. | [1] يتصرف بشكل خاطئ.
- Proposed: يتصرف بشكل خاطئ. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q90 (1:10:90) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤية هذه الاشارة يجب عليك
- Choices: [0] السير الى الامام. | [1] التوقف وقوفا تاما. | [2] الاستعداد للمسير | [3] الاستعداد للتوقف
- Proposed: السير الى الامام. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q89 (1:11:89) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤية الاشارة الضوئية بهذا اللون يجب عليك:
- Choices: [0] السير الى الامام بحذر | [1] التوقف بصورة تامة | [2] الاستعداد للتقدم. | [3] لا شيء مما ذكر
- Proposed: التوقف بصورة تامة (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q88 (1:12:88) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: المركبة المبينة في الصورة :
- Choices: [0] متوقفة بشكل خاطئ لوجود شاخصة تمنع الوقوف والتوقف. | [1] متوقفة بشكل خاطئ لوقوفها على الرصيف. | [2] المركبة متوقفة بشكل صحيح لعدم وجود شاخصة تمنع ذلك
- Proposed: متوقفة بشكل خاطئ لوجود شاخصة تمنع الوقوف والتوقف. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q87 (1:13:87) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: تقف المركبة المبينة بالصورة
- Choices: [0] بشكل صحيح. | [1] بشكل خاطئ
- Proposed: بشكل خاطئ (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q86 (1:14:86) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: الخطوط البيضاء المبينة في الصورة تعني :
- Choices: [0] ممنوع التجاوز. | [1] مسموح التجاوز بحذر شديد. | [2] مسموح التجاوز من اليمين فقط | [3] مسموح التجاوز من اليسار فقط.
- Proposed: ممنوع التجاوز. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q84 (1:16:84) — NO_MATCH

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور الشاحنات على المسرب الايسر | [1] ممنوع مرور الشاحنات على المسرب الايمن | [2] ممنوع مرور الباصات على المسرب الايسر | [3] ج+أ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q82 (1:18:82) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤية هذه الشاخصة
- Choices: [0] على السائق عدم التجاوز عند مشاهدته لهذه الشاخصة. | [1] على السائق التجاوز عند مشاهدته لهذه الشاخصة ولكن بحذر شديد. | [2] على السائق إعطاء الاولوية للمركبات القادمة عند مشاهدته لهذه الشاخصة.
- Proposed: على السائق عدم التجاوز عند مشاهدته لهذه الشاخصة. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q81 (1:19:81) — NO_MATCH

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: تعتبر هذه الشاخصة من الشواخص
- Choices: [0] الارشادية . | [1] التحذيرية. | [2] الازامية .
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q80 (1:20:80) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: طريقة تحميل المركبة المبينة في الصورة:
- Choices: [0] صحيحة كون السائق يحمل حمولة خفيفة. | [1] غير صحيحة كون السائق لم يستخدم وسائل السلامة. | [2] لا شئ مما ذكر
- Proposed: غير صحيحة كون السائق لم يستخدم وسائل السلامة. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q79 (1:21:79) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: من خلال الصورة المبينة فإن المركبة بحمولتها
- Choices: [0] تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها. | [1] لا تتخذ الاحتياطات الالزمة لانها التضع العواكس المطلوبة | [2] لا تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها لان حمولتها تشكل خطرا على الاخرين
- Proposed: لا تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها لان حمولتها تشكل خطرا على الاخرين (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q78 (1:22:78) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند وجود هذه الشاخصة فإنه يجب:
- Choices: [0] على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز الحفر بأمان. | [1] على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز المطب بأمان. | [2] على السائق العمل على زيادة سرعة مركبته لكي اليشعر بقوة المطب
- Proposed: على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز المطب بأمان. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q77 (1:23:77) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: الخطوط الموجودة على الطريق هي
- Choices: [0] خطوط عوائق أرضية يسمح للمركبات بالمرور فوقها. | [1] خطوط عوائق أرضية تمنع المركبات من المرور فوقها. | [2] لا شئ مما ذكر
- Proposed: خطوط عوائق أرضية تمنع المركبات من المرور فوقها. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q76 (1:24:76) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: من خلال الشاخصة المبينة فإنه
- Choices: [0] يمنع الانعطاف إلى اليمين. | [1] يمنع الانعطاف إلى اليسار | [2] يسمح الانعطاف إلى اليمين. | [3] يسمح الانعطاف إلى اليسار .
- Proposed: يمنع الانعطاف إلى اليمين. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q75 (1:25:75) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤية هاتين الشاخصتين فإنه:
- Choices: [0] يسمح الدوران ويمنع الانعطاف لليسار. | [1] يمنع الدوران ويسمح الانعطاف لليسار | [2] يمنع الانعطاف لليسار ويمنع الدوران | [3] لا شئ مما ذكر
- Proposed: يمنع الانعطاف لليسار ويمنع الدوران (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q74 (1:26:74) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند وجود هذه الشاخصة فإنه:
- Choices: [0] يسمح بمرور المركبات الالية | [1] ممنوع مرور المركبات المعدة لنقل البضائع | [2] يمنع مرور المركبات.
- Proposed: ممنوع مرور المركبات المعدة لنقل البضائع (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q73 (1:27:73) — NO_MATCH

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند وجود هذه الشاخصة فإنه:
- Choices: [0] على السائق عدم التوقف الا إذا كان يقوم بعملية تحميل وتنزيل الركاب | [1] على السائق عدم الوقوف والتوقف نهائياً. | [2] يسمح بالتوقف دون الوقوف | [3] الشئ مما ذكر
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q72 (1:28:72) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤية هذه الشاخصة فإنه:
- Choices: [0] يسمح لك بالوقوف | [1] لايسمح لك بالوقوف | [2] يسمح بالوقوف لذوي الاحتياجات الخاصة فقط. | [3] لا شئ مما ذكر
- Proposed: يسمح لك بالوقوف (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q71 (1:29:71) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤية هذه الشاخصة فإن
- Choices: [0] السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة | [1] السرعة القصوى للشاحنات 100 كم/ساعة وللمركبات الصغيرة 80 كم/ساعة | [2] السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 80 كم/ساعة. | [3] السرعة الدنيا للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة
- Proposed: السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q70 (1:30:70) — NO_MATCH

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند الاقتراب من هذه الشاخصة
- Choices: [0] يجب التوقف والسماح للمركبات بالمرور. | [1] يجب إعطاء الاولوية للمركبات بالمرور. | [2] أ+ب. | [3] لا شيء مما ذكر.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q69 (1:31:69) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤية هاتين الشاخصتين فإنه
- Choices: [0] يجب ان تنعطف الى اليمين وممنوع الانعطاف الى اليسار | [1] يجب ان تنعطف الي اليسار. | [2] يسمح الانعطاف لليسار | [3] يجب ان تسير الى الامام
- Proposed: يجب ان تنعطف الى اليمين وممنوع الانعطاف الى اليسار (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q68 (1:32:68) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: يجب على سائقي الشاحنات:
- Choices: [0] عدم المسير على المسرب الايسر والاوسط. | [1] عدم المسير على المسرب الايمن. | [2] عدم مرور الشاحنات نهائيا في هذا الطريق
- Proposed: عدم المسير على المسرب الايسر والاوسط. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q67 (1:33:67) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤية هاتين الشاخصتين فإن
- Choices: [0] الالتفاف مسموح والانعطاف إلى اليسار ممنوع | [1] السير الى الامام إلزامي. | [2] الانعطاف لليمين ممنوع
- Proposed: الالتفاف مسموح والانعطاف إلى اليسار ممنوع (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q66 (1:34:66) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤية هذه الشاخصة فإنه:
- Choices: [0] الاتجاه الى الامام | [1] ممنوع الدخول الامام بداخل النفق | [2] ممنوع الاتجاه الى اليمين
- Proposed: ممنوع الدخول الامام بداخل النفق (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q65 (1:35:65) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: تعتبر هذه الشواخص
- Choices: [0] إرشادية | [1] إلزامية | [2] تحذيرية.
- Proposed: إرشادية (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q64 (1:36:64) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عندما ترى هذه الشاخصة وانت تقود مركبتك فإنه يجب عليك:
- Choices: [0] التمهل و التوقف عند وجود مشاة يعبرون الطريق. | [1] إكمال الطريق دون توقف لانه طريق رئيسي. | [2] يجب عليك تخفيف السرعة دون التوقف
- Proposed: التمهل و التوقف عند وجود مشاة يعبرون الطريق. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q63 (1:37:63) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: ان توقف الباص في هذا المكان هو
- Choices: [0] ممنوع لانه على طريق رئيسي. | [1] ممنوع لانه تحت جسر مشاة. | [2] مسموح لوجود شاخصة تدل على ذلك. | [3] خاطئ كونه لم يلتزم بالوقوف بالموقف.
- Proposed: خاطئ كونه لم يلتزم بالوقوف بالموقف. (index 3)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q61 (1:39:61) — NO_MATCH

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند وجود هذه الشاخصة يجب على المشاة
- Choices: [0] المرور لكن بحذر. | [1] المرور لانهم يملكون الاولوية | [2] عدم المرور . | [3] الشيء مما ذكر
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q60 (1:40:60) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤيتك لهذه الشاخصة فإنة يجب عليك :
- Choices: [0] المرور بحذر إذا كان إرتفاع مركبتك اكثر من 4.7 متر. | [1] عدم المرور إذا كان إرتفاع مركبتك اقل 4.7 متر. | [2] عدم المرور إذا كان إرتفاع مركبتك اكثر من 4.7متر. | [3] عدم المرور إذا كان عرض مركبتك اكثر من 4.7 متر.
- Proposed: عدم المرور إذا كان إرتفاع مركبتك اكثر من 4.7متر. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q59 (1:41:59) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: من خلال الصورة المبينة فإنة يجب عليك:
- Choices: [0] المرور بحذر لانك تقترب من منطقة عمل على بعد 50م | [1] المرور بحذر لانك تقترب من منطقة عمل. | [2] ان لا تزيد من سرعة مركبتك عن 50كم/ساعة. | [3] ب+ج.
- Proposed: ب+ج. (index 3)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q58 (1:42:58) — NO_MATCH

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: الاجراء الذي يجب أن تتخذه عند رؤية هذه الشاخصة هو:
- Choices: [0] إستعمال الزامور في جميع الاحوال. | [1] إستعمال الزامور عند الضرورة فقط. | [2] عدم إستعمال الزامور.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q57 (1:43:57) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤيتك لهذه الازرار فإنه :
- Choices: [0] يسمح لك بالمرور عليها. | [1] يسمح لك بالمرور عليها لكن بشرط. | [2] لا يسمح لك بالمرور عليها
- Proposed: لا يسمح لك بالمرور عليها (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q56 (1:44:56) — NO_MATCH

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند رؤيتك لهذه الشاخصة فأنه يجب عليك :
- Choices: [0] ان تخفف من سرعة المركبة لانك تقترب من تقاطع طرق على شكل (+). | [1] ان تزيد من سرعة المركبة لانك تقترب من تقاطع طرق . | [2] ان تخفف من سرعة المركبة لانك تقترب من دوار. | [3] ان لا تخفف من سرعة المركبة لانك تقترب من دوار.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q55 (1:45:55) — NO_MATCH

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: تناول السوائل أثناء القيادة يؤدي إلى تشتيت انتباه السائق وبالتالي زيادة نسبة احتمالية الاشتراك في الحوادث
- Choices: [0] نعم | [1] لا
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q54 (1:46:54) — NO_MATCH

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: .من الاهداف الرئيسية لرجال السير هو:
- Choices: [0] حماية السائق من ايذاء نفسه او ايذاء الاخرين | [1] ضمان فعالية النظام المروري وضمان تفاعل عناصره بالطريقة الصحيحة. | [2] توعية مستخدمي الطريق. | [3] جميع ما ذكر.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q51 (1:49:51) — NO_MATCH

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: .على الراكب الجالس بجوار السائق :
- Choices: [0] إستخدام حزام الامان إذا اراد ذلك . | [1] عدم استخدام حزام الامان اذا كان يقيد حريته | [2] ستخدام حزام الامان لانه ملزم قانونياً. | [3] لا شئ مماذكر.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q50 (1:50:50) — NO_MATCH

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: قانون السير الاردني يلزم السائق :
- Choices: [0] استخدام حزام الامان خارج المدن فقط . | [1] استخدام حزام الامان داخل المدن فقط . | [2] - استخدام حزام الامان باستمرار أثناء القيادة
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q39 (1:60:39) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: .ان افضل طريق لتجنب الحوادث المرورية استخدام اسلوب القيادة الوقائية المتمثل بترك مسافة امان كافية بين المركبات :
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q35 (1:64:35) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: تكون مسافة الوقوف اقل في حالة كان الطريق مبتالا ً أو رطبا.
- Choices: [0] نعم | [1] لا
- Proposed: لا (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q34 (1:65:34) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: يجب على السائق ترك مسافة أمان بينه وبين المركبة الموجودة امامه مباشرة بحيث تكون كافية ويمكن زيادة الزمن الذي يفصل بينه وبين المركبة الموجودة امامه إلى ثلاث ثواني او اكثر في الظروف الجوية السيئه بدالًا من ثانيتين:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q30 (1:69:30) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة الا تحاول المنافسة معهم على نفس الجزء من الطريق اعطهم الكثير من الفراغ :
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q29 (1:70:29) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة يجب عند تجاوز شاحنة او حافلة تذكر انها قد تكون اطول مرات عديدة من سيارتك و انها سوف تستغرق وقتا اطول لكي تتخطاها او تسبقها:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q23 (1:76:23) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: تتم عملية انتفاخ الوسادة الهوائية بواسطة إشارة كهربائية تنبعث من احدى اجهزة الحساس الواقعة في مقدمة السيارة:.
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q20 (1:79:20) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: .من الادوية التي تؤثر على القيادة بعض أدوية البرد والانفلونزا :
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q17 (1:82:17) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: من الناحيه العلمية الكحول عبارة عن مادة مسكنة تؤدي إلى خفض النشاط والحيوية وتؤثر على قدرة السائق على القيادة بأمان.
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q16 (1:83:16) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: يجب على سائق المركبة ان يقرأ النشرة المرفقة مع الادوية التي يتناولها للتأكد من انها التؤثر على قيادة المركبة بأي شكل من الاشكال :
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q14 (1:85:14) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: أثبتت الابحاث والدراسات أن تجاوز السرعة المحددة ولو بشكل بسيط يمكن أن يزيد من خطر إرتكاب حوادث مرورية بشكل كبير :
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q13 (1:86:13) — MEDIUM

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: السرعة هي السبب الرئيسي وراء وقوع حوادث الطرق المميتة والمسببة لإلصابات ، بالاضافة إلى أنها تكلف المجتمع مبالغ طائلة سنويا.
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q616 (1:96:616) — HIGH_CONFIDENCE [MUST EXCLUDE]

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: واحدة من الامور التي تساعد على زيادة إستهلاك البنزين:
- Choices: [0] الابتعاد عن الاختناقات المرورية | [1] الضغط المنخفض للهواء بالاطارات | [2] تغير السرعات يتم بنقل الحركة من سرعة الى اخرى فى الوقت المناسب
- Proposed: الضغط المنخفض للهواء بالاطارات (index 1)
- Confidence: high
- Duplicate ID: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("الضغط المنخفض للهواء بالاطارات")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q617 (1:97:617) — HIGH_CONFIDENCE [MUST EXCLUDE]

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عند تشغيل المركبة يوميا و قبل الانطلاق يجب :
- Choices: [0] التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية). | [1] تفقد صلاحية الاطارات وشد الصواميل. | [2] التأكد من زيت الجير والمحور الخلفي
- Proposed: التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية). (index 0)
- Confidence: high
- Duplicate ID: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية).")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q635 (1:98:635) — STRONG [MUST EXCLUDE]

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: المشاة هم :
- Choices: [0] الذين يسيرون على اقدامهم. | [1] سائقوا الدراجات الهوائية . | [2] اي شخص يدفع أو يجر عربة اطفال او عربة مريض او مقعد او عربة يد. | [3] جميع ما ذكر
- Proposed: جميع ما ذكر (index 3)
- Confidence: high
- Duplicate ID: true
- Sources: morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 3 ("جميع ما ذكر")
- Explanation: STRONG: dual/independent keyed agreement.

### Q634 (1:99:634) — MEDIUM [MUST EXCLUDE]

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question: عمق فرزات الاطار الجيدة تكون عادة 9 ملم
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: true
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q298 (2:5:298) — NO_MATCH

- Section: فئات رخص السوق والعلامات الارضية
- Question: الرخصة الدولية الصادرة من نادي السيارات الملكي تسمح لحاملها بقيادة مركبة
- Choices: [0] داخل الاردن | [1] خارج الاردن | [2] أ+ب صحيحان
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q297 (2:6:297) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Choices: [0] الفئة الثالثة. | [1] الفئة الرابعة | [2] الفئة السابعة.
- Proposed: الفئة السابعة. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q296 (2:7:296) — NO_MATCH

- Section: فئات رخص السوق والعلامات الارضية
- Question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Choices: [0] الفئة الثالثة. | [1] الفئة الثالثة. | [2] الفئة السادسة 2.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q295 (2:8:295) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي
- Choices: [0] الفئة الرابعة | [1] الفئة السادسة1. | [2] الفئة الخامسة
- Proposed: الفئة السادسة1. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q294 (2:9:294) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: .إذا كانت المركبه التالية يبلغ وزنها الاجمالي 19 طن فإن فئة رخصة السوق التي تؤهلك لقيادتها هي:
- Choices: [0] الفئة الثالثة. | [1] الفئة الخامسة. | [2] الفئة السابعة.
- Proposed: الفئة الخامسة. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q290 (2:12:290) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Choices: [0] الفئة الاولى . | [1] الفئة الثانيه (2) | [2] الفئة الثالثة.
- Proposed: الفئة الثانيه (2) (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q288 (2:14:288) — NO_MATCH

- Section: فئات رخص السوق والعلامات الارضية
- Question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Choices: [0] الفئة الاولى (1) | [1] الفئة الثانية. | [2] الفئة الثانية.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q281 (2:20:281) — NO_MATCH

- Section: فئات رخص السوق والعلامات الارضية
- Question: رخصة السوق من الفئة الثانية ( 1+2 )تصنف بأنها:
- Choices: [0] رخصة سوق لجميع انواع الدراجات الالية . | [1] رخصة سوق لقيادة مركبة اشغال. | [2] رخصة سوق لقيادة مركبة زراعية. | [3] ب + ج
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q254 (2:48:254) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه العلامة الارضيه تعني
- Choices: [0] مواقف للمركبات بشكل زاوية على الطريق. | [1] مواقف للمركبات موازية للطريق | [2] ممنوع الوقوف.
- Proposed: مواقف للمركبات بشكل زاوية على الطريق. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q252 (2:50:252) — CONFLICT

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه العلامة الارضيه تعني
- Choices: [0] ممنوع الوقوف | [1] مواقف مركبات موازية للطريق. | [2] مواقف مركبات بشكل زاوية على الطريق.
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 1, 2
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q251 (2:51:251) — CONFLICT

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه العلامة الارضيه تعني
- Choices: [0] ممنوع الوقوف | [1] مواقف مركبات موازية للطريق. | [2] مواقف مركبات بشكل زاوية على الطريق.
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 1, 2
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q250 (2:52:250) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه العلامة الارضيه تعني
- Choices: [0] قبل ممرات المشاة ويمنع الوقوف عليه | [1] قبل ممرات المشاة ويسمح الوقوف عليه. | [2] عند مواقف السيارات.
- Proposed: قبل ممرات المشاة ويمنع الوقوف عليه (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q249 (2:53:249) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه العلامة الارضيه تعني
- Choices: [0] خط قف | [1] ممر مشاة. | [2] نهاية الطريق
- Proposed: ممر مشاة. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q248 (2:54:248) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه العلامة الارضيه تعني
- Choices: [0] خط قف. | [1] خط الاولوية | [2] ممر مشاة.
- Proposed: خط الاولوية (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q247 (2:55:247) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه العلامة الارضيه تعني
- Choices: [0] خط قف | [1] نهاية الطريق. | [2] خط األولوية.
- Proposed: خط قف (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q246 (2:56:246) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه العلامة الارضيه تعني
- Choices: [0] خط حافة الطريق. | [1] خط مسارب الطريق | [2] اتجاهات الطريق.
- Proposed: خط حافة الطريق. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q245 (2:57:245) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه العلامة الارضيه تعني
- Choices: [0] السماح بالتجاوز. | [1] خط الوقوف. | [2] خط التوقف. | [3] لا شئ مما ذكر.
- Proposed: السماح بالتجاوز. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q244 (2:58:244) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه العلامة الارضيه تعني
- Choices: [0] السماح بالتجاوز من الجهتين. | [1] السماح بالتجاوز من جهة الخط المتقطع. | [2] السماح بالتجاوز من جهة الخط المتصل.
- Proposed: السماح بالتجاوز من جهة الخط المتقطع. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q243 (2:59:243) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه العلامة الارضيه تعني
- Choices: [0] السماح بالتجاوز | [1] السماح بالتجاوز من اليمين . | [2] يمنع التجاوز من الجهتين
- Proposed: يمنع التجاوز من الجهتين (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q242 (2:60:242) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة تعني:
- Choices: [0] توزين إجباري للشاحنات | [1] توزين اختياري للشاحنات | [2] نقطة تفتيش للشاحنات
- Proposed: توزين إجباري للشاحنات (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q241 (2:61:241) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: تدل هذه الشاخصة على مخرج المنحدرات للطوارىء:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q240 (2:62:240) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] موقف لذوي الاحتياجات الخاصه | [1] موقف عام. | [2] موقف مشترك لذوي الاحتياجات والمركبات الاخرى
- Proposed: موقف لذوي الاحتياجات الخاصه (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q239 (2:63:239) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] مناطق سياحية | [1] مناطق علاجيه | [2] مناطق اثرية | [3] جميع ما ذكر
- Proposed: مناطق سياحية (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q238 (2:64:238) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] مركز إسعاف أولي. | [1] شاخصة ارشاديه لوجود مسجد. | [2] مستشفى
- Proposed: مركز إسعاف أولي. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q236 (2:66:236) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] مقهى | [1] اشارة ارشادية لبائع ادوات منزلية. | [2] مطعم .
- Proposed: مطعم . (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q235 (2:67:235) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] مقهى. | [1] مخيم سياحي. | [2] مطعم
- Proposed: مقهى. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q234 (2:68:234) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] محطة وقود | [1] مخيم سياحي. | [2] مطعم.
- Proposed: محطة وقود (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q233 (2:69:233) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] ممنوع الوقوف | [1] موقف مخصص لذوي الاحتياجات الخاصة. | [2] موقف.
- Proposed: موقف. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q232 (2:70:232) — NO_MATCH

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه ' الشاخصة ' تعني
- Choices: [0] ممنوع الوقوف والتوقف. | [1] ممنوع الوقوف.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q231 (2:71:231) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] ممنوع الوقوف والتوقف. | [1] ممنوع الوقوف. | [2] مسموح الوقوف.
- Proposed: ممنوع الوقوف والتوقف. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q228 (2:74:228) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] انتبة امامك نادي فروسية. | [1] ممر إلزامي للخيول | [2] يمنع مرور الخيول
- Proposed: ممر إلزامي للخيول (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q227 (2:75:227) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] ممر إلزامي للمشاة . | [1] يمنع مرور المشاة | [2] اولوية المرور للمشاة
- Proposed: ممر إلزامي للمشاة . (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q226 (2:76:226) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] مكان وقوف للدرجات . | [1] ممنوع دخول الدرجات. | [2] ممر للدراجات الهوائية.
- Proposed: ممر للدراجات الهوائية. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q225 (2:77:225) — NO_MATCH

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه اجباري دائري (دوار). | [1] شاخصة إرشادية "امامك دوار". | [2] شاخصة تحذيرية "امامك دوار"
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q224 (2:78:224) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إجباري نحو اليمين أو اليسار | [1] اتجاه اجباري لليمين. | [2] اتجاه اجباري لليسار.
- Proposed: اتجاه إجباري نحو اليمين أو اليسار (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q223 (2:79:223) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إختياري نحو اليمين | [1] اتجاه اختياري نحو اليسار | [2] اتجاه إجباري نحو اليسار
- Proposed: اتجاه إجباري نحو اليسار (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q222 (2:80:222) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إختياري نحو اليمين | [1] اتجاه اختياري نحو اليسار | [2] اتجاه إجباري نحو اليمين
- Proposed: اتجاه إجباري نحو اليمين (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q221 (2:81:221) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إختياري نحو اليمين | [1] اتجاه اختياري نحو اليسار | [2] اتجاه إجباري نحو اليمين
- Proposed: اتجاه إجباري نحو اليمين (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q220 (2:82:220) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] انعطاف إجباري نحو اليمين أو اليسار. | [1] اتجاه اجباري لليمين. | [2] اتجاه اجباري لليسار
- Proposed: انعطاف إجباري نحو اليمين أو اليسار. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q216 (2:86:216) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إجباري لمسرب واحد. | [1] اتجاه إجباري لليمين. | [2] اتجاه إجباري نحو الامام
- Proposed: اتجاه إجباري نحو الامام (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q215 (2:87:215) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] انعطاف إجباري نحو اليمين. | [1] انعطاف إجباري نحو اليسار. | [2] اولوية المتجة الى اليسار.
- Proposed: انعطاف إجباري نحو اليسار. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q214 (2:88:214) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] انعطاف إجباري نحو اليمين. | [1] انعطاف إجباري نحو اليسار. | [2] الاولوية للمتجه الى اليمين
- Proposed: انعطاف إجباري نحو اليمين. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q213 (2:89:213) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إجباري إلى اليسار | [1] اتجاه إجباري الى اليمين. | [2] الاولوية االتجاه الى اليمين
- Proposed: اتجاه إجباري الى اليمين. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q212 (2:90:212) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إجباري إلى اليسار | [1] اتجاه إجباري الى اليمين. | [2] الاولوية للمتجه الى اليسار.
- Proposed: اتجاه إجباري إلى اليسار (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q211 (2:91:211) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة تعني
- Choices: [0] وقوف | [1] منطقة جمركية. | [2] ممنوع المرور دون توقف (جمارك)
- Proposed: ممنوع المرور دون توقف (جمارك) (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q210 (2:92:210) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع استعمال الزامور | [1] يسمح استعمال الزامور | [2] توجد فرقة موسيقية
- Proposed: ممنوع استعمال الزامور (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q208 (2:94:208) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة تعني
- Choices: [0] السرعة الدنيا المسموح بها | [1] نهاية حد السرعة المدون في الشاخصة. | [2] السرعات القصوى للمركبات.
- Proposed: السرعات القصوى للمركبات. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q207 (2:95:207) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة تعني
- Choices: [0] السرعة القصوى | [1] نهاية حد السرعة المدون في الشاخصة. | [2] السرعة الدنيا المسموح بها.
- Proposed: السرعة القصوى (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q206 (2:96:206) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة تعني
- Choices: [0] نهاية منطقة منع التجاوز للشاحنات. | [1] نهاية منطقة منع التجاوز. | [2] نهاية منطقة المنع.
- Proposed: نهاية منطقة المنع. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q205 (2:97:205) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة تعني
- Choices: [0] نهاية منطقة منع التجاوز للشاحنات | [1] نهاية منطقة منع التجاوز. | [2] ممنوع التجاوز للشاحنات
- Proposed: نهاية منطقة منع التجاوز للشاحنات (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q204 (2:98:204) — MEDIUM

- Section: فئات رخص السوق والعلامات الارضية
- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع التجاوز. | [1] نهاية منطقة منع التجاوز. | [2] ممنوع التجاوز للشاحنات. | [3] نهاية منطقة المنع.
- Proposed: نهاية منطقة منع التجاوز. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q492 (3:92:492) — NO_MATCH

- Section: الوقوف والتوقف واحكام عامة
- Question: الضوء الاحمر المخصص للمشاة في الاشارة الضوئية يعني:
- Choices: [0] السماح للمشاة بعبور الطريق | [1] السماح للمشاة بعبور الطريق | [2] منع المشاة من عبور الطريق
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q494 (3:94:494) — NO_MATCH

- Section: الوقوف والتوقف واحكام عامة
- Question: الضوء المخصص لعبور المشاة من خلال الاشارة الضوئية.
- Choices: [0] الضوء الاخضر. | [1] الضوء الاحمر. | [2] الضوء الاصفر. | [3] لا شئ مما ذكر.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q551 (4:51:551) — NO_MATCH

- Section: ميكانيك المركبات
- Question: من إجراءات التي تتخذ لفاقد الوعي:
- Choices: [0] لا نقل المصاب من مكان الحادث | [1] لا تجبير أي جزء من جسمه. | [2] أ + ب | [3] لا شئ مما ذكر
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q555 (4:55:555) — NO_MATCH

- Section: ميكانيك المركبات
- Question: من انواع النزيف :
- Choices: [0] نزيف خارجي وهو سيالان الدم خارج الجسم | [1] نزيف داخلي وهو سيالان الدم داخل تجاويف الجسم مثل تجويف الجمجمة والصدر و البطن والمفاصل | [2] أ + ب
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q566 (4:66:566) — NO_MATCH

- Section: ميكانيك المركبات
- Question: الصدمة هي:
- Choices: [0] حالة مرضية تحدث بسبب هبوط حاد في الدورة الدموية مما يؤدي إلى عدم وصول الاوكسجين بكميات كافية إلى أنسجة الجسم وخاصة أنسجة المخ. | [1] حالة مرضية تحدث بسبب هبوط في الدورة الدموية مما يؤدي إلى وصول الاوكسجين بكميات كافية إلى أنسجة الجسم وخاصة أنسجة المخ. | [2] حالة مرضية تحدث بسبب إرتفاع في الدورة الدموية مما يؤدي إلى وصول الاوكسجين بكميات كافية إلى أنسجة الجسم وخاصة أنسجة المخ. | [3] لا شيء مما ذكر.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q578 (4:78:578) — NO_MATCH

- Section: ميكانيك المركبات
- Question: من الاصابات التي تتطلب إسعافات أولية:
- Choices: [0] الجروح – النزيف – الكسور والحروق | [1] ضربات الشمس والاجهاد الحراري والتشنجات الحرارية | [2] أ + ب.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q600 (5:0:600) — CONFLICT

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2.
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q601 (5:1:601) — CONFLICT

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q602 (5:2:602) — CONFLICT

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك تكون الاولوية
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q603 (5:3:603) — CONFLICT

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q604 (5:4:604) — CONFLICT

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q605 (5:5:605) — CONFLICT

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q606 (5:6:606) — CONFLICT

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q607 (5:7:607) — MEDIUM

- Section: قواعد اولويات المرور
- Question: في الصور التي امامك يكون ترتيب الاولوية :
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2.
- Proposed: للمركبة رقم 1. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q608 (5:8:608) — MEDIUM

- Section: قواعد اولويات المرور
- Question: في الصور التي امامك تكون الاولوية :
- Choices: [0] 3 - 2 - 1 | [1] 1 - 2 - 3 | [2] 2 - 1 - 3
- Proposed: 2 - 1 - 3 (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q609 (5:9:609) — MEDIUM

- Section: قواعد اولويات المرور
- Question: في الصور التي امامك يكون ترتيب الاولوية :
- Choices: [0] 1- 2 - 3 | [1] 1 - 3 - 2 | [2] 3 - 1 - 2 | [3] لا شيء مما ذكر
- Proposed: 1 - 3 - 2 (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q612 (5:12:612) — NO_MATCH

- Section: قواعد اولويات المرور
- Question: ان الوصول للسرعة القصوى فور تشغيلك للمركبة يقلل من استهلاك الوقود.
- Choices: [0] نعم | [1] لا
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q615 (5:15:615) — NO_MATCH

- Section: قواعد اولويات المرور
- Question: ان وجود الرمز 155 / 13 على الاطار يعني:
- Choices: [0] عرض الاطار 155 ملم وقياس الجنط قطره 13 أنش. | [1] عرض الاطار 13 أنش وقياس الجنط قطره 155 ملم. | [2] لا شيء مما ذكر
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q616 (5:16:616) — HIGH_CONFIDENCE [MUST EXCLUDE]

- Section: قواعد اولويات المرور
- Question: واحدة من التالية ليست من وظيفة الاطارات
- Choices: [0] تحمل الصدمات. | [1] رفع الاحمال. | [2] تزويد المركبة بالطاقة من خلال الحركة. | [3] ايقاف المركبة
- Proposed: تزويد المركبة بالطاقة من خلال الحركة. (index 2)
- Confidence: high
- Duplicate ID: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("تزويد المركبة بالطاقة من خلال الحركة.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q620 (5:20:620) — NO_MATCH

- Section: قواعد اولويات المرور
- Question: يجب أن تكون جميع الاطارات الاربعة في المركبة
- Choices: [0] العجالت الامامية ذات قياس واحد والخلفية ذات قياس اخر | [1] من نفس القياس | [2] ليس ضروري لان تكون العجلات الاربعة من نفس القياس
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q623 (5:23:623) — MEDIUM

- Section: قواعد اولويات المرور
- Question: تشير حركة يد الشرطي الموضحة في الصورة التي امامك الى :
- Choices: [0] ايقاف حركة المرور المركبات | [1] تخفيف سرعة المركبات | [2] تمرير المركبات القادمة من جانب الطريق وايقاف المركبات القادمة من الامام و الخلف.
- Proposed: تمرير المركبات القادمة من جانب الطريق وايقاف المركبات القادمة من الامام و الخلف. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q630 (5:30:630) — MEDIUM

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] تخفيض سرعة مركبتك وإعطاء الاولوية للمركبات الاخرى على التقاطع ثم الدوران. | [1] زيادة سرعة مركبتك وأخذ حق الاولوية على التقاطع ثم الدوران. | [2] الذهاب إلى تقاطع أخر يكون فيه الدوران مسموح.
- Proposed: تخفيض سرعة مركبتك وإعطاء الاولوية للمركبات الاخرى على التقاطع ثم الدوران. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q631 (5:31:631) — MEDIUM

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] زيادة سرعة مركبتك والانعطاف نحو اليسار | [1] تخفيض سرعة مركبتك والانعطاف نحو اليسار. | [2] زيادة سرعة مركبتك والانعطاف نحو اليمين.
- Proposed: تخفيض سرعة مركبتك والانعطاف نحو اليسار. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q632 (5:32:632) — MEDIUM

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] زيادة سرعة مركبتك والانعطاف نحو اليسار | [1] تخفيض سرعة مركبتك والانعطاف نحو اليسار. | [2] تخفيض سرعة مركبتك والانعطاف نحو اليمين
- Proposed: تخفيض سرعة مركبتك والانعطاف نحو اليمين (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q633 (5:33:633) — CONFLICT

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] التوقف في حال خلو الطريق من المركبات والمشاة | [1] عدم التوقف إلا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع. | [2] عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى لاعاقة حركة المرور
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, morortest, alqemah
- Evidence: Keyed matches disagree on indexes: 1, 2
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q634 (5:34:634) — MEDIUM [MUST EXCLUDE]

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] التوقف في حال خلو الطريق من المركبات والمشاة. | [1] عدم التوقف الا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع. | [2] عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى إلعاقة حركة المرور.
- Proposed: عدم التوقف الا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع. (index 1)
- Confidence: medium
- Duplicate ID: true
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q635 (5:35:635) — NO_MATCH [MUST EXCLUDE]

- Section: قواعد اولويات المرور
- Question: اذا رايت هذه الشاخصة فانه عليك
- Choices: [0] عدم الدوران كون ذلك ممنوع ومن الممكن ان يواجهك مخاطر ناتجة عن عدم اتساع التقاطع. | [1] الدوران بعد التأكد من خلو الطريق من المركبات الاخرى. | [2] الدوران خلال اوقات المساء فقط.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: true
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q640 (5:40:640) — NO_MATCH

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] توقيف مركبتك والسماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور. | [1] تخفيف السرعة ومتابعة المسير كون أولوية المرور لك | [2] لا شئ مما ذكر.
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q641 (5:41:641) — MEDIUM

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] تخفيض سرعة مركبتك والسماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور. | [1] تخفيف السرعة ومتابعة سيرك وعدم السماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور لان اولوية المرور لك. | [2] ملاحظة وضع الطريق وبناءا عليه تسير او تعطي الاولوية للمركبات القادمة.
- Proposed: تخفيض سرعة مركبتك والسماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q642 (5:42:642) — MEDIUM

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] زيادة سرعة مركبتك دون الالتزام بحدود السرعة. | [1] الوقوف التام بمركبتك. | [2] الالتزام بحدود السرعة لان الطريق ذات الاولوية انتهت
- Proposed: الالتزام بحدود السرعة لان الطريق ذات الاولوية انتهت (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q646 (5:46:646) — MEDIUM

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] الالتزام بحدود السرعة المقررة بسبب الرياح الشديدة من جهة اليمين | [1] الالتزام بحدود السرعة المقررة فقط. | [2] زيادة سرعتك عن حدود السرعة المقررة بسبب الرياح الشديدة من جهة اليسار.
- Proposed: الالتزام بحدود السرعة المقررة بسبب الرياح الشديدة من جهة اليمين (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q650 (5:50:650) — MEDIUM

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] زيادة سرعة مركبتك و المسافة بينك وبين المركبات الاخرى وعدم القيام بالتجاوز. | [1] تخفيض سرعة مركبتك وترك مسافة أمان كافية بينك وبين المركبات الاخرى والسماح بالتجاوز. | [2] تخفيض سرعة مركبتك وترك مسافة أمان كافية بينك وبين المركبات الاخرى وعدم القيام بالتجاوز.
- Proposed: تخفيض سرعة مركبتك وترك مسافة أمان كافية بينك وبين المركبات الاخرى وعدم القيام بالتجاوز. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q651 (5:51:651) — MEDIUM

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] تخفيض سرعة مركبتك والالتزام بمسربك وعدم التجاوز. | [1] زيادة سرعة مركبتك والالتزام بمسربك وعدم التجاوز. | [2] تخفيض سرعة مركبتك وتغيير مسربك الى المسرب المناسب وعدم التجاوز
- Proposed: تخفيض سرعة مركبتك والالتزام بمسربك وعدم التجاوز. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q652 (5:52:652) — NO_MATCH

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] تخفيض سرعة مركبتك والالتزام بالمسرب الايمن وإعطاء الاولوية للمركبات التي تملك حق الاولوية. | [1] تخفيض سرعة مركبتك والالتزام بالمسرب الايسر وإعطاء الاولوية للمركبات التي تملك حق الاولوية. | [2] تخفيض سرعة مركبتك والالتزام بالمسرب المناسب وإعطاء الاولوية للمركبات التي تملك حق الاولوية
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q657 (5:57:657) — MEDIUM

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال الغيارات العكسية. | [1] ملائمة سرعة مركبتك مع هذا المرتفع والالتزام بحدود السرعة المقررة والتزام الجانب الايمن من الطريق. | [2] ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال المكابح.
- Proposed: ملائمة سرعة مركبتك مع هذا المرتفع والالتزام بحدود السرعة المقررة والتزام الجانب الايمن من الطريق. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q658 (5:58:658) — MEDIUM

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة .
- Choices: [0] ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال الغيارات العكسية | [1] ملائمة سرعة مركبتك مع هذا المرتفع والالتزام بحدود السرعة المقررة والتزام الجانب الايمن من الطريق. | [2] ملائمة سرعة مركبتك مع هذا المنحدر وزيادة السرعة عن المقررة واستعمال الغيارات العكسية.
- Proposed: ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال الغيارات العكسية (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q659 (5:59:659) — NO_MATCH

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] زيادة سرعة مركبتك، لتتناسب مع سرعة المنعطف والسماح بالتجاوز. | [1] تخفيض سرعة مركبتك، لتتناسب مع سرعة المنعطفات وعدم التجاوز | [2] ايقاف مركبتك ثم التحرك ببطء نحو المنعطف لدخوله بأمان ومنع التجاوز
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q660 (5:60:660) — NO_MATCH

- Section: قواعد اولويات المرور
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] زيادة سرعة مركبتك، لتتناسب مع سرعة المنعطف والسماح بالتجاوز. | [1] تخفيض سرعة مركبتك، لتتناسب مع سرعة المنعطف وعدم التجاوز | [2] ايقاف مركبتك ثم التحرك ببطء نحو المنعطف لدخوله بأمان ومنع التجاوز
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q662 (5:62:662) — MEDIUM

- Section: قواعد اولويات المرور
- Question: ان سائق المركبة الحمراء لا يزعج بضوئه سائق المركبة الموجودة في الامام (الخضراء) و ذلك لانه لا يسير ملاصقا له
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q663 (5:63:663) — MEDIUM

- Section: قواعد اولويات المرور
- Question: ان الرياح التي تؤثر على المركبة اثناء عملية التجاوز كما هو مبين بالرسم
- Choices: [0] رياح طبيعية | [1] رياح التفريغ | [2] لا شئ مما ذكر
- Proposed: رياح طبيعية (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q664 (5:64:664) — MEDIUM

- Section: قواعد اولويات المرور
- Question: في حالة وقوف المركبة على مرتفع بدون رصيف يجب ان يقوم السائق بلف المقود على اليمين هل هذا الاجراء صحيح :
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q665 (5:65:665) — MEDIUM [MUST EXCLUDE]

- Section: قواعد اولويات المرور
- Question: إذا كانت المركبة التي امامك تقف على منحدر بدون رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: low
- Duplicate ID: false
- Sources: morortest, alqemah
- Evidence: Previously unresolved image/wheel question; force-held pending definitive visual proof
- Explanation: Left unresolved by policy (Q665/Q666) without new definitive visual identity.

### Q666 (5:66:666) — MEDIUM [MUST EXCLUDE]

- Section: قواعد اولويات المرور
- Question: إذا كانت المركبة التي امامك تقف على منحدر مع وجود رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: low
- Duplicate ID: false
- Sources: morortest, alqemah
- Evidence: Previously unresolved image/wheel question; force-held pending definitive visual proof
- Explanation: Left unresolved by policy (Q665/Q666) without new definitive visual identity.

### Q668 (5:68:668) — MEDIUM

- Section: قواعد اولويات المرور
- Question: استخدام الضوء الرباعي (الفلشر) يعني :
- Choices: [0] التوجه الى اليمين | [1] التوجه الى اليسار. | [2] تخفيف السرعة يوجد خطر أمامك.
- Proposed: تخفيف السرعة يوجد خطر أمامك. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: training-driving
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q669 (5:69:669) — MEDIUM

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك يريد السائق التوجه الى :
- Choices: [0] التوجه الى اليمين. | [1] التوجه الى اليسار. | [2] تخفيف السرعة.
- Proposed: التوجه الى اليمين. (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q670 (5:70:670) — CONFLICT

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك يريد السائق التوجه:
- Choices: [0] الى اليمين. | [1] الى اليسار. | [2] تخفيف السرعة
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, morortest, alqemah
- Evidence: Keyed matches disagree on indexes: 1, 0
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q673 (5:73:673) — INVALID [MUST EXCLUDE]

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك وقوف المركبة الصفراء صحيح:
- Choices: [0] نعم | [1] لا
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: alqemah, alqemah
- Evidence: Previously classified INVALID (scene mismatch); no new validating image match
- Explanation: Remains INVALID.

### Q676 (5:76:676) — MEDIUM

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك تقف المركبة الحمراء في المكان الصحيح:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q678 (5:78:678) — MEDIUM

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك الوقوف للمركبة صحيح:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q679 (5:79:679) — CONFLICT

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك الوقوف صحيح:
- Choices: [0] نعم | [1] لا
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, morortest, morortest, morortest, alqemah
- Evidence: Keyed matches disagree on indexes: 1, 0
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q682 (5:82:682) — MEDIUM

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك هل تتجاوز المركبة الزرقاء بشكل صحيح:
- Choices: [0] نعم. | [1] لا.
- Proposed: لا. (index 1)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q684 (5:84:684) — MEDIUM

- Section: قواعد اولويات المرور
- Question: من خلال الرسم الموضح نجد أن :
- Choices: [0] السيارة الصفراء ضمن رؤية المركبة الزرقاء. | [1] السيارة الحمراء ضمن رؤية المركبة الزرقاء. | [2] السيارتين الصفراء او الحمراء خارج رؤية السيارة الزرقاء وتسمى هذه الحالة بالنقطة العمياء. | [3] لا شيء مما ذكر
- Proposed: السيارتين الصفراء او الحمراء خارج رؤية السيارة الزرقاء وتسمى هذه الحالة بالنقطة العمياء. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q689 (5:89:689) — MEDIUM

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك يجب على المركبة الصفراء:
- Choices: [0] التوقف للافساح للشاحنة بالالتفاف | [1] الالتفاف إلى اليمين.
- Proposed: التوقف للافساح للشاحنة بالالتفاف (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: morortest, alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q690 (5:90:690) — CONFLICT

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2.
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q691 (5:91:691) — CONFLICT

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2.
- Proposed: n/a (index n/a)
- Confidence: high
- Duplicate ID: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q692 (5:92:692) — MEDIUM

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك يجب على المركبة رقم ( 1 )اخذ اقصى اليمين:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q693 (5:93:693) — NO_MATCH

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك من يتصرف بشكل خاطئ:
- Choices: [0] سائق المركبة | [1] المشاة. | [2] أ+ب
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q694 (5:94:694) — MEDIUM

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك تبين شخص من ذوي الاحتياجات الخاصة يقطع الشارع فان على السائق ان:
- Choices: [0] يتجاوز عنه | [1] الاستمرار في المرور مع تنبيه الكفيف بالزامور | [2] الوقوف التام لحين مرور الشخص المقعد.
- Proposed: الوقوف التام لحين مرور الشخص المقعد. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q695 (5:95:695) — MEDIUM

- Section: قواعد اولويات المرور
- Question: في الصورة التي امامك تبين كفيف يقطع الشارع على السائق ان:
- Choices: [0] يتجاوز عنه. | [1] الاستمرار في المرور مع تنبيه الكفيف بالزامور | [2] الوقوف التام لحين مرور الكفيف.
- Proposed: الوقوف التام لحين مرور الكفيف. (index 2)
- Confidence: medium
- Duplicate ID: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q700 (6:0:700) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف سائق المركبة الحمراء
- Choices: [0] صحيح | [1] خاطىء
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q701 (6:1:701) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق المركبة الحمراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q702 (6:2:702) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق التكسي:
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q703 (6:3:703) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق المركبة الحمراء :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q704 (6:4:704) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق المركبة الحمراء:
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q705 (6:5:705) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: المسار الذي سلكه سائق المركبة للانتقال من النقطة (1) الى النقطة (2)
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q706 (6:6:706) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق المركبة الحمراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q707 (6:7:707) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق المركبة الحمراء :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q708 (6:8:708) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف سائق المركبة الحمراء صحيح:
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q709 (6:9:709) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف سائق المركبة البيضاء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q710 (6:10:710) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف سائق التكسي صحيح
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q711 (6:11:711) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف سائق المركبة الحمراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q712 (6:12:712) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق المركبة الصفراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q713 (6:13:713) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف سائق المركبة الحمراء :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q714 (6:14:714) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف سائق المركبة الحمراء :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q715 (6:15:715) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف سائق المركبة الحمراء بشكل :
- Choices: [0] صحيح لانه سار في مسرب التسارع | [1] خاطئ لانه تعدى على اولوية السيارة البيضاء
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q716 (6:16:716) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق المركبة الحمراء يعتبر تصرف :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q717 (6:17:717) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف سائق المركبة الحمراء بشكل
- Choices: [0] صحيح | [1] خاطئ لان الاولوية للحافلة ثم له ثم للدراجة
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q718 (6:18:718) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق المركبة الحمراء يعتبر تصرف
- Choices: [0] خاطئ لانه لم يلتزم بشاخصة ممنوع المرور | [1] صحيح لانه لا يوجد سيارات اخرى في الشارع
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q719 (6:19:719) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: وقوف المركبة الحمراء بهذا الشكل يعتبر
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q720 (6:20:720) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق الحافلة يعتبر تصرف
- Choices: [0] صحيح لانه الاكبر حجماً | [1] خاطيء لان الاولوية ليست له
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q721 (6:21:721) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: إجراء سائق المركبة الحمراء يعتبر إجراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q722 (6:22:722) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: اجراء سائق المركبة الحمراء يعتبر اجراء :
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q723 (6:23:723) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: اجراء سائق التكسي يعتبر اجراء
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q724 (6:24:724) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: اجراء سائق المركبة يعتبر اجراء
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q725 (6:25:725) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف صاحب السيارة الزرقاء يعتبر تصرف:
- Choices: [0] صحيح | [1] خاطئ لوجود شاخصة منع التجاوز
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q726 (6:26:726) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: يعتبر تصرف سائق السيارة الزرقاء تصرف
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q727 (6:27:727) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: يعتبر تجاوز السيارة الزرقاء تجاوزاً
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q728 (6:28:728) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: يعتبر تجاوز السيارة الزرقاء تجاوزاً:
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q729 (6:29:729) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: اي سيارة من السيارات التالية يعتبر تصرفها تصرف خاطئ
- Choices: [0] الزرقاء | [1] الحمراء | [2] كلاهما
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q730 (6:30:730) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: يعتبر تصرف سائق السيارة الزرقاء تصرف
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q731 (6:31:731) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: يعتبر تصرف سائق السيارة الخضراء :
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q732 (6:32:732) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: يعتبر تجاوز السيارة الخضراء تجاوز
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q733 (6:33:733) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تجاوز السيارة الحمراء يعتبر تجاوز
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q735 (6:35:735) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تجاوز السيارة الزرقاء يعتبر تجاوز:
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q736 (6:36:736) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف سائق السيارة الحمراء يعتبر تصرف :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q737 (6:37:737) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف سائق السيارة الحمراء يعتبر تصرف :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q738 (6:38:738) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: يعتبر تصرف سائق السيارة الحمراء في اعطاء الاولوية للسيارة الزرقاء تصرف
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q739 (6:39:739) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: اي من السيارات التالية تصرفت بشكل صحيح عند ممر المشاة
- Choices: [0] السوداء | [1] البيضاء
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q740 (6:40:740) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تكون الاولوية عند ممرات المشاة بدون وجود اشارة مرور
- Choices: [0] للسيارات | [1] للمشاة
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q741 (6:41:741) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: يعتبر تصرف سائق السيارة الزرقاء تصرف
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q742 (6:42:742) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: يعتبر تصرف سائق السيارة السوداء
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q743 (6:43:743) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: يعتبر تصرف سائق السيارة السوداء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q744 (6:44:744) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق السيارة الحمراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q745 (6:45:745) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق السيارة الحمراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q746 (6:46:746) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف السيارة الخضراء يعتبر تصرف
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q747 (6:47:747) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: تصرف السيارتين التاليتين للخروج من الدوار يعتبر تصرف
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q748 (6:48:748) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: يعتبر تصرف سائق السيارة التالية تصرف
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q749 (6:49:749) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: يعتبر تصرف سائق السيارة:
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q750 (6:50:750) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: ما قام به سائق السيارة البيضاء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q752 (6:52:752) — NO_MATCH

- Section: اسئلة الجزء السابع للفحص النظري
- Question: قام السائق بفحص نسبة الزيت في سيارته فوجده كالتالي
- Choices: [0] نسبة الزيت في السيارة مناسبة | [1] يجب زيادة نسبة الزيت في السيارة | [2] يجب تقليل الزيت في السيارة
- Proposed: n/a (index n/a)
- Confidence: none
- Duplicate ID: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

