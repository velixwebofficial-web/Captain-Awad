# Final Bulk Answer Recovery Report (AUDIT ONLY)

Generated: 2026-08-11T19:36:41.357Z

**Status: AUDIT ONLY — nothing applied to `data/questions.js` by this run.**

> NOTE: LIVE questions.js currently has verified=381 missing=272 (premature prior apply). Audit used backup with 301/352. Restore backup before any apply.

## Summary

- Starting total: **653**
- Verified before (locked): **301**
- Missing slots audited: **352**
- Missing unique IDs: **349**
- Newly applied: **0** (audit only)
- STRONG: **13**
- HIGH_CONFIDENCE: **69**
- MEDIUM: **160**
- CONFLICT: **17**
- INVALID: **1**
- NO_MATCH: **89**

### IDs that would be modified (STRONG + HIGH_CONFIDENCE only)

1, 2, 3, 5, 7, 11, 15, 18, 22, 24, 26, 28, 31, 43, 44, 46, 47, 48, 49, 52, 53, 109, 110, 116, 118, 123, 127, 130, 260, 261, 264, 265, 267, 269, 270, 271, 273, 274, 275, 276, 277, 278, 279, 283, 284, 287, 292, 293, 299, 300, 304, 436, 437, 446, 462, 473, 474, 475, 477, 483, 484, 500, 509, 516, 517, 525, 541, 543, 544, 546, 547, 549, 597, 610, 611, 616, 617, 625, 626, 628, 635, 638

### MEDIUM dual-source (optional apply; not in default Strong+High list)

689

## Methodology

- AUDIT ONLY — no answers applied; data/questions.js not written by this script.
- Classification source bank: data/questions.js.backup-before-final-bulk (301 verified / 352 missing slots).
- Matched all missing unique questions against morortest JO package, alqemah quizOptions, and training-driving.com keyed sheets.
- Arabic deepNorm + answer-set identity; question IDs never used as identity.
- APPLYABLE = STRONG or HIGH_CONFIDENCE; MEDIUM only if dual independent sources agree + identity confirmed.
- CONFLICT / INVALID / NO_MATCH never applyable.
- Q665/Q666 force-held MEDIUM; Q673 remains INVALID.
- Existing 301 verified keys locked.

## Per-question results (all missing slots)

### Q188 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات الالية | [1] ممنوع مرور المركات القاطرة والمقطورة. | [2] ممنوع مرور المركبات المعدة لنقل البضائع
- Proposed: ممنوع مرور المركات القاطرة والمقطورة. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q187 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات. | [1] ممنوع المرور. | [2] ممنوع مرور المركبات المعدة لنقل البضائع .
- Proposed: ممنوع مرور المركبات المعدة لنقل البضائع . (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q186 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات الالية | [1] ممنوع مرور الدراجات النارية. | [2] ممنوع مرور الدراجات ذات المحرك الصغير.
- Proposed: ممنوع مرور الدراجات ذات المحرك الصغير. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q185 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات الالية | [1] ممنوع مرور الدراجات النارية. | [2] ممنوع مرور الدراجات الهوائية
- Proposed: ممنوع مرور الدراجات الهوائية (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q183 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات الالية | [1] أفضلية المرور لك. | [2] يسمح بمرور الاليات
- Proposed: ممنوع مرور المركبات الالية (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q181 — CONFLICT

- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات بالاتجاهين | [1] أفضلية المرور لك. | [2] ممنوع المرور.
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 2, 0
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q180 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] نهاية طريق رئيسي. | [1] أفضلية المرور لك. | [2] طريق رئيسي.
- Proposed: أفضلية المرور لك. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q179 — NO_MATCH

- Question: هذه الشاخصة تعني
- Choices: [0] نهاية طريق رئيسي. | [1] افضلية المرور لك. | [2] الاولوية للقادمين من الجهة المقابلة.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q178 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] نهاية الطريق ذات الاولوية. | [1] امامك شاخصة اعطي الاولوية. | [2] بداية طريق ذو اولوية.
- Proposed: نهاية الطريق ذات الاولوية. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q177 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] نهاية الطريق ذات الاولوية | [1] أمامك شاخصة اعطي الاولوية. | [2] طريق ذو اولوية .
- Proposed: طريق ذو اولوية . (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q176 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] طريق خطر. | [1] طريق رئيسي. | [2] اعطي الاولوية.
- Proposed: اعطي الاولوية. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q175 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] امامك تقاطع | [1] امامك دوار | [2] وجوب الوقوف
- Proposed: وجوب الوقوف (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q174 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق خطر | [1] امامك شاخصة اعط الاولوية. | [2] طريق رئيسي
- Proposed: امامك شاخصة اعط الاولوية. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q171 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] تقاطع طريق رئيسي مع فرعي من جهة اليسار. | [1] تقاطع طريق رئيسي مع فرعي من جهة اليمين. | [2] تقاطع طريق رئيسي مع طريق رئيسي.
- Proposed: تقاطع طريق رئيسي مع فرعي من جهة اليسار. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q170 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] أمامك تقاطع. | [1] تقاطع طريق رئيسي مع طريقين فرعيين | [2] تقاطع فرعي.
- Proposed: تقاطع طريق رئيسي مع طريقين فرعيين (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q169 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] أمامك تقاطع | [1] امامك دوار. | [2] أمامك شاخصة قف
- Proposed: أمامك شاخصة قف (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q168 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق خطر | [1] يجب الدوران. | [2] أمامك دوار
- Proposed: أمامك دوار (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q167 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق خطر | [1] خفض السرعة. | [2] تقاطع متكافئ الحقوق.
- Proposed: تقاطع متكافئ الحقوق. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q166 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق غير خطر | [1] خفض السرعة | [2] أخطار مختلفة
- Proposed: أخطار مختلفة (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q165 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] أمامك سكة حديد مع حاجز | [1] مقاطع سكة حديد على أبعاد مختلفة من التقاطع | [2] مقطع سكة حديد(خط واحد)
- Proposed: مقاطع سكة حديد على أبعاد مختلفة من التقاطع (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q164 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] امامك سكة حديد مع حاجز. | [1] مقطع سكة حديد (أكثر من خط). | [2] مقطع سكة حديد(خط واحد)
- Proposed: مقطع سكة حديد (أكثر من خط). (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q163 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] أمامك سكة حديد مع حاجز. | [1] أمامك سكة حديد بدون حاجز. | [2] مقطع سكة حديد(خط واحد)
- Proposed: مقطع سكة حديد(خط واحد) (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q162 — NO_MATCH

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] أمامك سكة حديد مع حاجز | [1] امامك سكة حديد دون حاجز | [2] امامك قطار.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q160 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] امامك نفق. | [1] امامك جسر. | [2] امامك طريق مفصول بجزيرة وسطية.
- Proposed: امامك نفق. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q159 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني :
- Choices: [0] طريق مفصول. | [1] طريق ذو اتجاهين. | [2] إنتهاء الطريق المفصول بجزيرة وسطية.
- Proposed: إنتهاء الطريق المفصول بجزيرة وسطية. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q155 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني:
- Choices: [0] أمامك مطار | [1] منطقة طيران منخفض | [2] منطقة خطرة.
- Proposed: منطقة طيران منخفض (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q154 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] ممنوع مرور الحيوانات | [1] منطقة خطرة | [2] عبور حيوانات.
- Proposed: عبور حيوانات. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q151 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] أمامك مدرسة. | [1] وجود طلاب مدارس. | [2] ممر مشاة.
- Proposed: وجود طلاب مدارس. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q150 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] ممر مشاة. | [1] وجود أطفال | [2] ممنوع المرور.
- Proposed: ممر مشاة. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q149 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق خطر | [1] طريق زلقة | [2] تناثر حصى
- Proposed: تناثر حصى (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q148 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] اكتاف خطرة. | [1] طريق زلقة | [2] تناثر حصى.
- Proposed: طريق زلقة (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q145 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق غير مستوى. | [1] يجب الانتباه. | [2] اعمال على الطريق.
- Proposed: اعمال على الطريق. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q144 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] طريق غير مستوى. | [1] طريق ينتهي إلى رصيف بحر او نهر | [2] أمامك شاطئ بحر
- Proposed: طريق ينتهي إلى رصيف بحر او نهر (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q143 — CONFLICT

- Question: هذه الشاخصة التحذيرية تعني.
- Choices: [0] انخفاض في مستوى الطريق | [1] طريق غير مستوى. | [2] مطب.
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1, 2
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q140 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] تضيق جسر. | [1] تضيق الطريق من جهتين. | [2] تضيق الطريق من اليمين.
- Proposed: تضيق جسر. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q137 — NO_MATCH

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] تضيق الطريق من جهتين. | [1] امامك تضيق جسر . | [2] تضيق خطر. | [3] لا شي مما ذكر
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q134 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني:
- Choices: [0] منعطفان اولها لليمين | [1] منعطفان خطرة. | [2] منعطف لليمين.
- Proposed: منعطفان اولها لليمين (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q133 — MEDIUM

- Question: هذه الشاخصة التحذيرية تعني
- Choices: [0] منعطفان اولها لليسار | [1] منعطفان اولها لليمين. | [2] منعطفات خطرة.
- Proposed: منعطفان اولها لليسار (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q132 — NO_MATCH

- Question: هذه الشاخصة التحذيرية تعني :
- Choices: [0] نعطف لليسار. | [1] منعطف لليمين. | [2] منعطف خطر.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q199 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع الانعطاف إلى اليسار. | [1] ممنوع الانعطاف إلى اليمين. | [2] مسموح الانعطاف الى اليسار.
- Proposed: ممنوع الانعطاف إلى اليسار. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q192 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور العربات التي تدفع باليد. | [1] ممنوع مرور المشاة. | [2] الطريق لعربات اليد
- Proposed: ممنوع مرور العربات التي تدفع باليد. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q197 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور المركبات التي تزن اكثر من 8طن على المحور | [1] ممنوع مرور المركبات التي يزيد ارتفاعها عن 8م | [2] ممنوع مرور المركبات التي يزيد عرضها عن 8م
- Proposed: ممنوع مرور المركبات التي تزن اكثر من 8طن على المحور (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q130 — HIGH_CONFIDENCE [APPLYABLE]

- Question: الحد الاقصى لسرعة الحافالت على الطرق الفرعية والتي يقع عليها مدارس هو :
- Choices: [0] 30كم/ساعة. | [1] 40 كم/ساعة. | [2] 50كم/ساعة.
- Proposed: 40 كم/ساعة. (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("40 كم/ساعة.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q127 — HIGH_CONFIDENCE [APPLYABLE]

- Question: الحد الاقصى لسرعة سيارات الركوب الصغيرة على الطرق الفرعية والتي يقع عليها مدارس هو
- Choices: [0] 30كم/ساعة. | [1] 40 كم/ساعة. | [2] 50كم/ساعة.
- Proposed: 40 كم/ساعة. (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("40 كم/ساعة.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q125 — MEDIUM

- Question: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن خارج المدن والقرى على الطرق الرئيسية ذات الاتجاهين وغير المفصولة بجزيرة وسيطة هو:
- Choices: [0] 100كم/ساعة. | [1] 90كم/ساعة. | [2] 80كم/ساعة.
- Proposed: 100كم/ساعة. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q124 — MEDIUM

- Question: .الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن خارج المدن والقرى على الطرق الرئيسية ذات المسربين او اكثر في كل اتجاه والمفصولة بجزيرة وسيطة هو :
- Choices: [0] 100كم/ساعة. | [1] 90 كم/ساعة. | [2] 110كم/ساعة. | [3] 120كم/ساعة
- Proposed: 110كم/ساعة. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q123 — HIGH_CONFIDENCE [APPLYABLE]

- Question: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن داخل المدن والقرى على الطرق الرئيسية ذات الاتجاهين وغير المفصولة بجزيرة وسيطة هو:
- Choices: [0] 70م/ساعة. | [1] 50كم/ساعة. | [2] 60كم/ساعة.
- Proposed: 70م/ساعة. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("70م/ساعة.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q122 — MEDIUM

- Question: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن داخل المدن والقرى على الطرق الرئيسية ذات المسربين او اكثر في كل اتجاه والمفصولة بجزيرة وسيطة هو:
- Choices: [0] 60 كم/ساعة. | [1] 70كم/ساعة. | [2] 80كم/ساعة.
- Proposed: 80كم/ساعة. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q118 — HIGH_CONFIDENCE [APPLYABLE]

- Question: اللون الاخضر للمشاة في الاشارات الضوئية يعني السماح لهم بالمسير
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact yes/no stem + dual independent keyed sources agree; stem is not scene-only (في الصورة/كما في الشكل); agreed index 0 ("نعم")
- Explanation: HIGH_CONFIDENCE dual-source yes/no with non-scene-only stem.

### Q116 — HIGH_CONFIDENCE [APPLYABLE]

- Question: تشتمل الاشارة الضوئية الخاصه بالمشاة على:
- Choices: [0] اشارة ضوئية تظهر شخص مشاه يمشي باللون الاحمر. | [1] اشارة ضوئية تظهر شخص مشاه يمشي باللون الاخضر. | [2] اشارة ضوئية تظهر شخص مشاه واقف باللون الاخضر. | [3] جميع ما ذكر صحيح.
- Proposed: اشارة ضوئية تظهر شخص مشاه يمشي باللون الاخضر. (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest
- Evidence: exact identity + single authoritative keyed source (morortest); mapped index 1 ("اشارة ضوئية تظهر شخص مشاه يمشي باللون الاخضر.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q115 — CONFLICT

- Question: .الضوء الاصفر المتقطع يسمح للسائق بالمرور بحذر شديد بعد إعطاء الاولوية للمشاة او المركبات صاحبة حق الاولوية :
- Choices: [0] نعم | [1] لا
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q110 — STRONG [APPLYABLE]

- Question: توضع إشارة المرور في الاماكن التالية:
- Choices: [0] تقاطع الطرقات | [1] أماكن أعمال الطرقات | [2] ممرات المشاة | [3] جميع ما ذكر
- Proposed: جميع ما ذكر (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 3 ("جميع ما ذكر")
- Explanation: STRONG: dual/independent keyed agreement.

### Q109 — STRONG [APPLYABLE]

- Question: الاشارة الضوئيه هي عبارة عن ادوات تحكم مروري تستخدم للسيطرة على حركة المركبات والمشاه :
- Choices: [0] نعم | [1] لا .
- Proposed: نعم (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 0 ("نعم")
- Explanation: STRONG: dual/independent keyed agreement.

### Q108 — MEDIUM

- Question: المسرب الذي يتخذه سائق المركبة:
- Choices: [0] صحيح. | [1] خاطىء
- Proposed: خاطىء (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q107 — NO_MATCH

- Question: عند مشاهدة هذه الاشارة فإنه
- Choices: [0] يسمح بالانعطاف لليمين. | [1] يمنع الانعطاف لليمين. | [2] يسمح بالتقدم للأمام | [3] أ+ج
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q106 — NO_MATCH

- Question: عند مشاهدة هذه الاشارة فإنه:
- Choices: [0] يسمح بالانعطاف لليمين. | [1] يمنع الانعطاف لليمين. | [2] يمنع التقدم لألمام | [3] أ+ج
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q103 — MEDIUM

- Question: على سائق المركبة المشار إليها:
- Choices: [0] الالتزام بيسار لطريق. | [1] الالتزام بيمين الطريق . | [2] السير امام مركبة الاطفاء لفسح الطريق لها.
- Proposed: الالتزام بيمين الطريق . (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q102 — NO_MATCH

- Question: وجود البسطات بهذا الشكل:
- Choices: [0] مسموح به لانه يقدم خدمة للناس. | [1] ممنوع لانه لا يلتزم بالاسعار المحددة | [2] ممنوع لانه يتعدى على حرمة الطريق.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q100 — MEDIUM

- Question: وقوف المركبة بهذه الطريقة:
- Choices: [0] صحيح لعدم وجود شرطي سير | [1] خاطئ لانها  تبعد اكثر من نصف متر عن الرصيف | [2] خاطئ لوجود شاخصة تمنع ذلك.
- Proposed: خاطئ لانها  تبعد اكثر من نصف متر عن الرصيف (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q99 — MEDIUM

- Question: مايقوم به المشاة
- Choices: [0] صحيح لوجود معبر المشاة. | [1] خاطيء لعدم وجود شاخصة تسمح بذلك
- Proposed: صحيح لوجود معبر المشاة. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q98 — MEDIUM

- Question: ما يقوم به سائق المركبة:
- Choices: [0] صحيح لعدم وجود شاخصة تمنع ذلك | [1] خاطئ لانها تعيق المرور
- Proposed: خاطئ لانها تعيق المرور (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q97 — MEDIUM

- Question: ظهور هذه الاشارة يعني:
- Choices: [0] السماح للمشاة بعبور الطريق. | [1] منع المشاة من عبور الطريق | [2] عدم السماح للمشاة بالشروع في عبور الطريق واتمام العبور بعد البدء فيه.
- Proposed: منع المشاة من عبور الطريق (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q96 — MEDIUM

- Question: ما يقوم به سائق المركبة رقم 1
- Choices: [0] صحيح لعدم وجود مركبات من هذا الجانب من الطريق. | [1] صحيح لعدم وجود وجود شاخصة تمنع ذلك | [2] ممنوع لسيره بعكس إتجاه السير. | [3] ممنوع لاقترابها من الجزيرة الوسطية.
- Proposed: ممنوع لسيره بعكس إتجاه السير. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q95 — MEDIUM

- Question: سير المركبة (التكسي) المبينه بالصورة:
- Choices: [0] مسموح | [1] ممنوع
- Proposed: ممنوع (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q94 — MEDIUM

- Question: وجود هذه الشاخصة يعني :
- Choices: [0] على السائق الانتباه والحذر من وجود منعطف حاد أمامه | [1] على السائق الانتباه والحذر من وجود أخطار مختلفة أمامه | [2] على السائق االنتباه والحذر من وجود منحدر خطر أمامه.
- Proposed: على السائق الانتباه والحذر من وجود أخطار مختلفة أمامه (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q93 — MEDIUM

- Question: عند رؤية هذه الشاخصة على السائق:
- Choices: [0] تخفيف سرعته والتوقف على التقاطع وإعطاء حق الاولوية حسب قواعد أولويات المرور. | [1] يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق محكوم بإشارات ضوئية. | [2] يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق محكوم بشواخص مرورية. | [3] يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق غير متكافئ.
- Proposed: تخفيف سرعته والتوقف على التقاطع وإعطاء حق الاولوية حسب قواعد أولويات المرور. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q92 — MEDIUM

- Question: الشاخصة التحذيرية التي امامك بالصورة تعني
- Choices: [0] على السائق القادم من اليمين الانتباه كونه يدخل الى اتجاه الطريق الرئيسي. | [1] على السائق القادم من الطريق الرئيسي عدم الانتباه إلى الشاخصة. | [2] على السائق القادم من الطريق الرئيسي متابعة مسيره بصورة طبيعية | [3] لا شيء مما ذكر
- Proposed: على السائق القادم من اليمين الانتباه كونه يدخل الى اتجاه الطريق الرئيسي. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q91 — MEDIUM

- Question: سائق المركبة المبينة في الصورة والتي وضع عليها دائرة في اللون الاحمر :
- Choices: [0] يتصرف بشكل صحيح. | [1] يتصرف بشكل خاطئ.
- Proposed: يتصرف بشكل خاطئ. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q90 — MEDIUM

- Question: عند رؤية هذه الاشارة يجب عليك
- Choices: [0] السير الى الامام. | [1] التوقف وقوفا تاما. | [2] الاستعداد للمسير | [3] الاستعداد للتوقف
- Proposed: السير الى الامام. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q89 — MEDIUM

- Question: عند رؤية الاشارة الضوئية بهذا اللون يجب عليك:
- Choices: [0] السير الى الامام بحذر | [1] التوقف بصورة تامة | [2] الاستعداد للتقدم. | [3] لا شيء مما ذكر
- Proposed: التوقف بصورة تامة (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q88 — MEDIUM

- Question: المركبة المبينة في الصورة :
- Choices: [0] متوقفة بشكل خاطئ لوجود شاخصة تمنع الوقوف والتوقف. | [1] متوقفة بشكل خاطئ لوقوفها على الرصيف. | [2] المركبة متوقفة بشكل صحيح لعدم وجود شاخصة تمنع ذلك
- Proposed: متوقفة بشكل خاطئ لوجود شاخصة تمنع الوقوف والتوقف. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q87 — MEDIUM

- Question: تقف المركبة المبينة بالصورة
- Choices: [0] بشكل صحيح. | [1] بشكل خاطئ
- Proposed: بشكل خاطئ (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q86 — MEDIUM

- Question: الخطوط البيضاء المبينة في الصورة تعني :
- Choices: [0] ممنوع التجاوز. | [1] مسموح التجاوز بحذر شديد. | [2] مسموح التجاوز من اليمين فقط | [3] مسموح التجاوز من اليسار فقط.
- Proposed: ممنوع التجاوز. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q84 — NO_MATCH

- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع مرور الشاحنات على المسرب الايسر | [1] ممنوع مرور الشاحنات على المسرب الايمن | [2] ممنوع مرور الباصات على المسرب الايسر | [3] ج+أ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q82 — MEDIUM

- Question: عند رؤية هذه الشاخصة
- Choices: [0] على السائق عدم التجاوز عند مشاهدته لهذه الشاخصة. | [1] على السائق التجاوز عند مشاهدته لهذه الشاخصة ولكن بحذر شديد. | [2] على السائق إعطاء الاولوية للمركبات القادمة عند مشاهدته لهذه الشاخصة.
- Proposed: على السائق عدم التجاوز عند مشاهدته لهذه الشاخصة. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q81 — NO_MATCH

- Question: تعتبر هذه الشاخصة من الشواخص
- Choices: [0] الارشادية . | [1] التحذيرية. | [2] الازامية .
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q80 — MEDIUM

- Question: طريقة تحميل المركبة المبينة في الصورة:
- Choices: [0] صحيحة كون السائق يحمل حمولة خفيفة. | [1] غير صحيحة كون السائق لم يستخدم وسائل السلامة. | [2] لا شئ مما ذكر
- Proposed: غير صحيحة كون السائق لم يستخدم وسائل السلامة. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q79 — MEDIUM

- Question: من خلال الصورة المبينة فإن المركبة بحمولتها
- Choices: [0] تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها. | [1] لا تتخذ الاحتياطات الالزمة لانها التضع العواكس المطلوبة | [2] لا تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها لان حمولتها تشكل خطرا على الاخرين
- Proposed: لا تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها لان حمولتها تشكل خطرا على الاخرين (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q78 — MEDIUM

- Question: عند وجود هذه الشاخصة فإنه يجب:
- Choices: [0] على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز الحفر بأمان. | [1] على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز المطب بأمان. | [2] على السائق العمل على زيادة سرعة مركبته لكي اليشعر بقوة المطب
- Proposed: على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز المطب بأمان. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q77 — MEDIUM

- Question: الخطوط الموجودة على الطريق هي
- Choices: [0] خطوط عوائق أرضية يسمح للمركبات بالمرور فوقها. | [1] خطوط عوائق أرضية تمنع المركبات من المرور فوقها. | [2] لا شئ مما ذكر
- Proposed: خطوط عوائق أرضية تمنع المركبات من المرور فوقها. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q76 — MEDIUM

- Question: من خلال الشاخصة المبينة فإنه
- Choices: [0] يمنع الانعطاف إلى اليمين. | [1] يمنع الانعطاف إلى اليسار | [2] يسمح الانعطاف إلى اليمين. | [3] يسمح الانعطاف إلى اليسار .
- Proposed: يمنع الانعطاف إلى اليمين. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q75 — MEDIUM

- Question: عند رؤية هاتين الشاخصتين فإنه:
- Choices: [0] يسمح الدوران ويمنع الانعطاف لليسار. | [1] يمنع الدوران ويسمح الانعطاف لليسار | [2] يمنع الانعطاف لليسار ويمنع الدوران | [3] لا شئ مما ذكر
- Proposed: يمنع الانعطاف لليسار ويمنع الدوران (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q74 — MEDIUM

- Question: عند وجود هذه الشاخصة فإنه:
- Choices: [0] يسمح بمرور المركبات الالية | [1] ممنوع مرور المركبات المعدة لنقل البضائع | [2] يمنع مرور المركبات.
- Proposed: ممنوع مرور المركبات المعدة لنقل البضائع (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q73 — NO_MATCH

- Question: عند وجود هذه الشاخصة فإنه:
- Choices: [0] على السائق عدم التوقف الا إذا كان يقوم بعملية تحميل وتنزيل الركاب | [1] على السائق عدم الوقوف والتوقف نهائياً. | [2] يسمح بالتوقف دون الوقوف | [3] الشئ مما ذكر
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q72 — MEDIUM

- Question: عند رؤية هذه الشاخصة فإنه:
- Choices: [0] يسمح لك بالوقوف | [1] لايسمح لك بالوقوف | [2] يسمح بالوقوف لذوي الاحتياجات الخاصة فقط. | [3] لا شئ مما ذكر
- Proposed: يسمح لك بالوقوف (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q71 — MEDIUM

- Question: عند رؤية هذه الشاخصة فإن
- Choices: [0] السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة | [1] السرعة القصوى للشاحنات 100 كم/ساعة وللمركبات الصغيرة 80 كم/ساعة | [2] السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 80 كم/ساعة. | [3] السرعة الدنيا للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة
- Proposed: السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q70 — NO_MATCH

- Question: عند الاقتراب من هذه الشاخصة
- Choices: [0] يجب التوقف والسماح للمركبات بالمرور. | [1] يجب إعطاء الاولوية للمركبات بالمرور. | [2] أ+ب. | [3] لا شيء مما ذكر.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q69 — MEDIUM

- Question: عند رؤية هاتين الشاخصتين فإنه
- Choices: [0] يجب ان تنعطف الى اليمين وممنوع الانعطاف الى اليسار | [1] يجب ان تنعطف الي اليسار. | [2] يسمح الانعطاف لليسار | [3] يجب ان تسير الى الامام
- Proposed: يجب ان تنعطف الى اليمين وممنوع الانعطاف الى اليسار (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q68 — MEDIUM

- Question: يجب على سائقي الشاحنات:
- Choices: [0] عدم المسير على المسرب الايسر والاوسط. | [1] عدم المسير على المسرب الايمن. | [2] عدم مرور الشاحنات نهائيا في هذا الطريق
- Proposed: عدم المسير على المسرب الايسر والاوسط. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q67 — MEDIUM

- Question: عند رؤية هاتين الشاخصتين فإن
- Choices: [0] الالتفاف مسموح والانعطاف إلى اليسار ممنوع | [1] السير الى الامام إلزامي. | [2] الانعطاف لليمين ممنوع
- Proposed: الالتفاف مسموح والانعطاف إلى اليسار ممنوع (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q66 — MEDIUM

- Question: عند رؤية هذه الشاخصة فإنه:
- Choices: [0] الاتجاه الى الامام | [1] ممنوع الدخول الامام بداخل النفق | [2] ممنوع الاتجاه الى اليمين
- Proposed: ممنوع الدخول الامام بداخل النفق (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q65 — MEDIUM

- Question: تعتبر هذه الشواخص
- Choices: [0] إرشادية | [1] إلزامية | [2] تحذيرية.
- Proposed: إرشادية (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q64 — MEDIUM

- Question: عندما ترى هذه الشاخصة وانت تقود مركبتك فإنه يجب عليك:
- Choices: [0] التمهل و التوقف عند وجود مشاة يعبرون الطريق. | [1] إكمال الطريق دون توقف لانه طريق رئيسي. | [2] يجب عليك تخفيف السرعة دون التوقف
- Proposed: التمهل و التوقف عند وجود مشاة يعبرون الطريق. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q63 — MEDIUM

- Question: ان توقف الباص في هذا المكان هو
- Choices: [0] ممنوع لانه على طريق رئيسي. | [1] ممنوع لانه تحت جسر مشاة. | [2] مسموح لوجود شاخصة تدل على ذلك. | [3] خاطئ كونه لم يلتزم بالوقوف بالموقف.
- Proposed: خاطئ كونه لم يلتزم بالوقوف بالموقف. (index 3)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q61 — NO_MATCH

- Question: عند وجود هذه الشاخصة يجب على المشاة
- Choices: [0] المرور لكن بحذر. | [1] المرور لانهم يملكون الاولوية | [2] عدم المرور . | [3] الشيء مما ذكر
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q60 — MEDIUM

- Question: عند رؤيتك لهذه الشاخصة فإنة يجب عليك :
- Choices: [0] المرور بحذر إذا كان إرتفاع مركبتك اكثر من 4.7 متر. | [1] عدم المرور إذا كان إرتفاع مركبتك اقل 4.7 متر. | [2] عدم المرور إذا كان إرتفاع مركبتك اكثر من 4.7متر. | [3] عدم المرور إذا كان عرض مركبتك اكثر من 4.7 متر.
- Proposed: عدم المرور إذا كان إرتفاع مركبتك اكثر من 4.7متر. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q59 — MEDIUM

- Question: من خلال الصورة المبينة فإنة يجب عليك:
- Choices: [0] المرور بحذر لانك تقترب من منطقة عمل على بعد 50م | [1] المرور بحذر لانك تقترب من منطقة عمل. | [2] ان لا تزيد من سرعة مركبتك عن 50كم/ساعة. | [3] ب+ج.
- Proposed: ب+ج. (index 3)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q58 — NO_MATCH

- Question: الاجراء الذي يجب أن تتخذه عند رؤية هذه الشاخصة هو:
- Choices: [0] إستعمال الزامور في جميع الاحوال. | [1] إستعمال الزامور عند الضرورة فقط. | [2] عدم إستعمال الزامور.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q57 — MEDIUM

- Question: عند رؤيتك لهذه الازرار فإنه :
- Choices: [0] يسمح لك بالمرور عليها. | [1] يسمح لك بالمرور عليها لكن بشرط. | [2] لا يسمح لك بالمرور عليها
- Proposed: لا يسمح لك بالمرور عليها (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q56 — NO_MATCH

- Question: عند رؤيتك لهذه الشاخصة فأنه يجب عليك :
- Choices: [0] ان تخفف من سرعة المركبة لانك تقترب من تقاطع طرق على شكل (+). | [1] ان تزيد من سرعة المركبة لانك تقترب من تقاطع طرق . | [2] ان تخفف من سرعة المركبة لانك تقترب من دوار. | [3] ان لا تخفف من سرعة المركبة لانك تقترب من دوار.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q55 — NO_MATCH

- Question: تناول السوائل أثناء القيادة يؤدي إلى تشتيت انتباه السائق وبالتالي زيادة نسبة احتمالية الاشتراك في الحوادث
- Choices: [0] نعم | [1] لا
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q54 — NO_MATCH

- Question: .من الاهداف الرئيسية لرجال السير هو:
- Choices: [0] حماية السائق من ايذاء نفسه او ايذاء الاخرين | [1] ضمان فعالية النظام المروري وضمان تفاعل عناصره بالطريقة الصحيحة. | [2] توعية مستخدمي الطريق. | [3] جميع ما ذكر.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q53 — HIGH_CONFIDENCE [APPLYABLE]

- Question: استخدام حزام الامان هو:
- Choices: [0] اختياري . | [1] إلزامي على الطرق الخارجية فقط . | [2] حرية شخصية للمستخدم وحسب مزاجه . | [3] إلزامي ويساعد المستخدم على تخفيف حدة الاصابة في حال وقوع حادث مروري شريطة استخدامه بالطريقة الصحيحة.
- Proposed: إلزامي ويساعد المستخدم على تخفيف حدة الاصابة في حال وقوع حادث مروري شريطة استخدامه بالطريقة الصحيحة. (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 3 ("إلزامي ويساعد المستخدم على تخفيف حدة الاصابة في حال وقوع حادث مروري شريطة استخدامه بالطريقة الصحيحة.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q52 — HIGH_CONFIDENCE [APPLYABLE]

- Question: .استخدام حزام الامان داخل المركبة:
- Choices: [0] خاص بالاردن . | [1] خاص داخل المدن. | [2] خاص فقط على الطرق الخارجية . | [3] منتشر في كافة أنحاء العالم بما فيها الاردن .
- Proposed: منتشر في كافة أنحاء العالم بما فيها الاردن . (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest
- Evidence: exact identity + single authoritative keyed source (morortest); mapped index 3 ("منتشر في كافة أنحاء العالم بما فيها الاردن .")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q51 — NO_MATCH

- Question: .على الراكب الجالس بجوار السائق :
- Choices: [0] إستخدام حزام الامان إذا اراد ذلك . | [1] عدم استخدام حزام الامان اذا كان يقيد حريته | [2] ستخدام حزام الامان لانه ملزم قانونياً. | [3] لا شئ مماذكر.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q50 — NO_MATCH

- Question: قانون السير الاردني يلزم السائق :
- Choices: [0] استخدام حزام الامان خارج المدن فقط . | [1] استخدام حزام الامان داخل المدن فقط . | [2] - استخدام حزام الامان باستمرار أثناء القيادة
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q49 — HIGH_CONFIDENCE [APPLYABLE]

- Question: في حالة وقوع حادث مروري فإن استخدام حزام الامان بالصورة الصحيحة يساعد على :
- Choices: [0] يزيد من الاصابة والاذى للمستخدم . | [1] لا فائدة من استخدامه. | [2] انقاذ حياة مستخدمة
- Proposed: انقاذ حياة مستخدمة (index 2)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest
- Evidence: exact identity + single authoritative keyed source (morortest); mapped index 2 ("انقاذ حياة مستخدمة")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q48 — HIGH_CONFIDENCE [APPLYABLE]

- Question: استخدام حزام الامان في المركبات:
- Choices: [0] يساعد على حماية المستخدم. | [1] تدخل في حرية المستخدم . | [2] يعيق حركة المستخدم. | [3] جميع ما ذكر أعاله.
- Proposed: يساعد على حماية المستخدم. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("يساعد على حماية المستخدم.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q47 — HIGH_CONFIDENCE [APPLYABLE]

- Question: حزام الامان في المركبات:
- Choices: [0] إلزامي حسب قانون السير الاردني. . | [1] غير الزامي . | [2] لا يساعد على حماية المستخدم. | [3] جميع ما ذكر أعلاه
- Proposed: إلزامي حسب قانون السير الاردني. . (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("إلزامي حسب قانون السير الاردني. .")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q46 — HIGH_CONFIDENCE [APPLYABLE]

- Question: الوسادة الهوائية (Air bag ):
- Choices: [0] وحدها كافية لتوفير الحماية الالزمة لانقاذ حياة السائق في حالة وقوع حادث مروري . | [1] سلبية وقد تؤدي إلى إيذاء السائق. | [2] استعمال حزام الامان ووجود الوسادة الهوائية توفر أكبر قدر ممكن من الوقاية في حالة وقوع حادث مروري
- Proposed: استعمال حزام الامان ووجود الوسادة الهوائية توفر أكبر قدر ممكن من الوقاية في حالة وقوع حادث مروري (index 2)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("استعمال حزام الامان ووجود الوسادة الهوائية توفر أكبر قدر ممكن من الوقاية في حالة وقوع حادث مروري")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q44 — STRONG [APPLYABLE]

- Question: من وظائف الاطارات الرئيسية:
- Choices: [0] امتصاص الصدمات من الطريق | [1] رفع الاحمال | [2] نقل عملية الدفع والفرملة على الطريق | [3] جميع ما ذكر.
- Proposed: جميع ما ذكر. (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 3 ("جميع ما ذكر.")
- Explanation: STRONG: dual/independent keyed agreement.

### Q43 — HIGH_CONFIDENCE [APPLYABLE]

- Question: .من اجل الحصول على تعبئة وقود امنه يجب:
- Choices: [0] إطفاء المحرك | [1] عدم التدخين | [2] عدم إستخدام الهاتف المتنقل،وتركه داخل السيارة أو إغلاقه | [3] جميع ما ذكر
- Proposed: جميع ما ذكر (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 3 ("جميع ما ذكر")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q39 — MEDIUM

- Question: .ان افضل طريق لتجنب الحوادث المرورية استخدام اسلوب القيادة الوقائية المتمثل بترك مسافة امان كافية بين المركبات :
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q35 — MEDIUM

- Question: تكون مسافة الوقوف اقل في حالة كان الطريق مبتالا ً أو رطبا.
- Choices: [0] نعم | [1] لا
- Proposed: لا (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q34 — MEDIUM

- Question: يجب على السائق ترك مسافة أمان بينه وبين المركبة الموجودة امامه مباشرة بحيث تكون كافية ويمكن زيادة الزمن الذي يفصل بينه وبين المركبة الموجودة امامه إلى ثلاث ثواني او اكثر في الظروف الجوية السيئه بدالًا من ثانيتين:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q31 — STRONG [APPLYABLE]

- Question: من العوامل التي تتأثر فيها مسافة وقوف المركبة :
- Choices: [0] حمولة المركبة | [1] ظروف سطح الطريق | [2] الاطارات | [3] جميع ما ذكر.
- Proposed: جميع ما ذكر. (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 3 ("جميع ما ذكر.")
- Explanation: STRONG: dual/independent keyed agreement.

### Q30 — MEDIUM

- Question: لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة الا تحاول المنافسة معهم على نفس الجزء من الطريق اعطهم الكثير من الفراغ :
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q29 — MEDIUM

- Question: لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة يجب عند تجاوز شاحنة او حافلة تذكر انها قد تكون اطول مرات عديدة من سيارتك و انها سوف تستغرق وقتا اطول لكي تتخطاها او تسبقها:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q28 — HIGH_CONFIDENCE [APPLYABLE]

- Question: لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة يجب :
- Choices: [0] تحاشي القيادة في المساحات العمياء للشاحنات و الحافالات | [1] تجنب السير قريبا من الشاحنات و الحافلات حيث ان هذا قد يحجب رؤيتك للطريق | [2] لا تحاول المنافسة معهم على نفس الجزء من الطريق اعطهم الكثير من الفراغ و بالذات عند الدوران او عندما يستخدمون الكوابح ( الفرامل ) . | [3] جميع ما ذكر.
- Proposed: جميع ما ذكر. (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 3 ("جميع ما ذكر.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q26 — STRONG [APPLYABLE]

- Question: .من أكثر مستخدمي الطريق المعرضون للخطر:
- Choices: [0] المشاة | [1] راكبوا الدرجات الهوائية | [2] راكبوا الدراجات الالية | [3] جميع ما ذكر
- Proposed: المشاة (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 0 ("المشاة")
- Explanation: STRONG: dual/independent keyed agreement.

### Q24 — HIGH_CONFIDENCE [APPLYABLE]

- Question: من الاجهزة المستخدمة للسالمة الوقائية لركاب المركبات :
- Choices: [0] حزام الامان. | [1] الوسادة الهوائية. | [2] جميع ماذكر .
- Proposed: جميع ماذكر . (index 2)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("جميع ماذكر .")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q23 — MEDIUM

- Question: تتم عملية انتفاخ الوسادة الهوائية بواسطة إشارة كهربائية تنبعث من احدى اجهزة الحساس الواقعة في مقدمة السيارة:.
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q22 — HIGH_CONFIDENCE [APPLYABLE]

- Question: .حسب قانون السير الاردني يجب ان تقل نسبة تركيز الكحول في الدم عند القيادة عن الاتي :
- Choices: [0] ( 40 ) ملغم كحول /100 ميلليتر دم | [1] (60 ) ملغم كحول /100 ميلليتر دم | [2] (80 ) ملغم كحول /100 ميلليتر دم | [3] (100 ) ملغم كحول /100 ميلليتر دم
- Proposed: (80 ) ملغم كحول /100 ميلليتر دم (index 2)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("(80 ) ملغم كحول /100 ميلليتر دم")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q20 — MEDIUM

- Question: .من الادوية التي تؤثر على القيادة بعض أدوية البرد والانفلونزا :
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q18 — HIGH_CONFIDENCE [APPLYABLE]

- Question: الكحول عبارة عن مادة مسكنة تؤدي الى خفض النشاط والحيوية فهي تعمل على :
- Choices: [0] الابطاء من سرعة وظائف الدماغ مما يضعف القدرة على الاستجابه. | [1] التأثير على تقدير السائق للسرعة التي يسير بها و سرعة المركبات المجاورة له والمسافة والتي تفصله عنها. | [2] زيادة صعوبة القيام باكثر من عملين في وقت واحد. | [3] جميع ما ذكر .
- Proposed: جميع ما ذكر . (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 3 ("جميع ما ذكر .")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q17 — MEDIUM

- Question: من الناحيه العلمية الكحول عبارة عن مادة مسكنة تؤدي إلى خفض النشاط والحيوية وتؤثر على قدرة السائق على القيادة بأمان.
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q16 — MEDIUM

- Question: يجب على سائق المركبة ان يقرأ النشرة المرفقة مع الادوية التي يتناولها للتأكد من انها التؤثر على قيادة المركبة بأي شكل من الاشكال :
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q15 — HIGH_CONFIDENCE [APPLYABLE]

- Question: يتم فحص نسبة الكحول في النفس من قبل رجال الشرطة بواسطة اجهزة خاصة بحيث يتم ضبط رخصتي السوق والسير ومنع السائق من متابعة القيادة اذا كانت نسبة الكحول في هواء الزفير:
- Choices: [0] (4.0 )ملغرام كحول في التر الواحد من عينه النفس. | [1] (3.0 )ملغرام كحول في التر الواحد من عينه النفس. | [2] (2.0 )ملغرام كحول في التر الواحد من عينه النفس. | [3] ملغرام واحد كحول في التر الواحد من عينه النفس.
- Proposed: (4.0 )ملغرام كحول في التر الواحد من عينه النفس. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("(4.0 )ملغرام كحول في التر الواحد من عينه النفس.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q14 — MEDIUM

- Question: أثبتت الابحاث والدراسات أن تجاوز السرعة المحددة ولو بشكل بسيط يمكن أن يزيد من خطر إرتكاب حوادث مرورية بشكل كبير :
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q13 — MEDIUM

- Question: السرعة هي السبب الرئيسي وراء وقوع حوادث الطرق المميتة والمسببة لإلصابات ، بالاضافة إلى أنها تكلف المجتمع مبالغ طائلة سنويا.
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q11 — HIGH_CONFIDENCE [APPLYABLE]

- Question: من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة
- Choices: [0] عدم الانتباه لشواخص المرور | [1] سهولة البقاء في مسارات الطريق. | [2] جميع ماذكر .
- Proposed: عدم الانتباه لشواخص المرور (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("عدم الانتباه لشواخص المرور")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q7 — STRONG [APPLYABLE]

- Question: من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة:
- Choices: [0] التثاؤب | [1] ضعف التركيز | [2] الخمول | [3] جميع ما ذكر.
- Proposed: جميع ما ذكر. (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 3 ("جميع ما ذكر.")
- Explanation: STRONG: dual/independent keyed agreement.

### Q5 — HIGH_CONFIDENCE [APPLYABLE]

- Question: لتجنب الشعور بالارهاق اثناء القيادة يجب عليك كسائق اتباع ما يلي:
- Choices: [0] ايقاف المركبة واخذ قسط من الراحة. | [1] متابعة السير عند الشعور بالارهاق. | [2] تناول الاطعمة الدسمة. | [3] جميع ما ذكر
- Proposed: ايقاف المركبة واخذ قسط من الراحة. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("ايقاف المركبة واخذ قسط من الراحة.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q3 — HIGH_CONFIDENCE [APPLYABLE]

- Question: من الامور التى تساعد على تقليل مصادر شرود الذهن والتي تساعد على التقليل من إرتكاب الحوادث:
- Choices: [0] إستخدام الهاتف اثناء القيادة | [1] عدم إستخدام الهاتف المتنقل أثناء القيادة | [2] محاولة تشغيل الراديو أو الكاسيت أثناء القيادة | [3] جميع ما ذكر
- Proposed: عدم إستخدام الهاتف المتنقل أثناء القيادة (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("عدم إستخدام الهاتف المتنقل أثناء القيادة")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q2 — STRONG [APPLYABLE]

- Question: قد يتسبب الشعور بالارهاق الى حادث سير:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 0 ("نعم")
- Explanation: STRONG: dual/independent keyed agreement.

### Q1 — HIGH_CONFIDENCE [APPLYABLE]

- Question: من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة:
- Choices: [0] بطء ردة الفعل | [1] الضجر | [2] سرعة الاثارة و الغضب. | [3] جميع ما ذكر.
- Proposed: جميع ما ذكر. (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 3 ("جميع ما ذكر.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q616 — HIGH_CONFIDENCE [APPLYABLE]

- Question: واحدة من الامور التي تساعد على زيادة إستهلاك البنزين:
- Choices: [0] الابتعاد عن الاختناقات المرورية | [1] الضغط المنخفض للهواء بالاطارات | [2] تغير السرعات يتم بنقل الحركة من سرعة الى اخرى فى الوقت المناسب
- Proposed: الضغط المنخفض للهواء بالاطارات (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("الضغط المنخفض للهواء بالاطارات")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q617 — HIGH_CONFIDENCE [APPLYABLE]

- Question: عند تشغيل المركبة يوميا و قبل الانطلاق يجب :
- Choices: [0] التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية). | [1] تفقد صلاحية الاطارات وشد الصواميل. | [2] التأكد من زيت الجير والمحور الخلفي
- Proposed: التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية). (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية).")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q635 — STRONG [APPLYABLE]

- Question: المشاة هم :
- Choices: [0] الذين يسيرون على اقدامهم. | [1] سائقوا الدراجات الهوائية . | [2] اي شخص يدفع أو يجر عربة اطفال او عربة مريض او مقعد او عربة يد. | [3] جميع ما ذكر
- Proposed: جميع ما ذكر (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 3 ("جميع ما ذكر")
- Explanation: STRONG: dual/independent keyed agreement.

### Q634 — MEDIUM

- Question: عمق فرزات الاطار الجيدة تكون عادة 9 ملم
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q304 — STRONG [APPLYABLE]

- Question: من واجبات المشاة:
- Choices: [0] الالتزام باستخدام ممرات المشاة حيثما وجدت | [1] الالتزام والتقيد بالاشارات الضوئية. | [2] الالتزام باشارات شرطي المرور. | [3] جميع ما ذكر
- Proposed: جميع ما ذكر (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 3 ("جميع ما ذكر")
- Explanation: STRONG: dual/independent keyed agreement.

### Q300 — HIGH_CONFIDENCE [APPLYABLE]

- Question: الرخصة من الفئة الثانية (2)تصنف بأنها:
- Choices: [0] رخصة سوق لجميع أنواع الدراجات الالية . | [1] رخصة سوق لقيادة مركبة أشغال. | [2] رخصة سوق لقيادة مركبة زراعية.
- Proposed: رخصة سوق لقيادة مركبة زراعية. (index 2)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("رخصة سوق لقيادة مركبة زراعية.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q299 — HIGH_CONFIDENCE [APPLYABLE]

- Question: الرخصة من الفئة الثانية (1)تصنف بأنها:
- Choices: [0] رخصة سوق لقيادة مركبة أشغال. | [1] رخصة سوق لقيادة مركبة زراعية. | [2] رخصة سوق لجميع أنواع الدراجات الالية .
- Proposed: رخصة سوق لقيادة مركبة أشغال. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("رخصة سوق لقيادة مركبة أشغال.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q298 — NO_MATCH

- Question: الرخصة الدولية الصادرة من نادي السيارات الملكي تسمح لحاملها بقيادة مركبة
- Choices: [0] داخل الاردن | [1] خارج الاردن | [2] أ+ب صحيحان
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q297 — MEDIUM

- Question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Choices: [0] الفئة الثالثة. | [1] الفئة الرابعة | [2] الفئة السابعة.
- Proposed: الفئة السابعة. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q296 — NO_MATCH

- Question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Choices: [0] الفئة الثالثة. | [1] الفئة الثالثة. | [2] الفئة السادسة 2.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q295 — MEDIUM

- Question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي
- Choices: [0] الفئة الرابعة | [1] الفئة السادسة1. | [2] الفئة الخامسة
- Proposed: الفئة السادسة1. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q294 — MEDIUM

- Question: .إذا كانت المركبه التالية يبلغ وزنها الاجمالي 19 طن فإن فئة رخصة السوق التي تؤهلك لقيادتها هي:
- Choices: [0] الفئة الثالثة. | [1] الفئة الخامسة. | [2] الفئة السابعة.
- Proposed: الفئة الخامسة. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q293 — HIGH_CONFIDENCE [APPLYABLE]

- Question: فئة رخصة السوق التي تؤهلك لقيادة حافلة متوسطة هي:
- Choices: [0] الفئة الثالثة. | [1] الفئة الرابعة | [2] الفئة الخامسة
- Proposed: الفئة الخامسة (index 2)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("الفئة الخامسة")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q292 — HIGH_CONFIDENCE [APPLYABLE]

- Question: فئة رخصة السوق التي تؤهلك لقيادة سيارة التاكسي هي
- Choices: [0] الفئة الثانية. | [1] الفئة الثالثة | [2] الفئة الرابعة
- Proposed: الفئة الرابعة (index 2)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("الفئة الرابعة")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q290 — MEDIUM

- Question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Choices: [0] الفئة الاولى . | [1] الفئة الثانيه (2) | [2] الفئة الثالثة.
- Proposed: الفئة الثانيه (2) (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q288 — NO_MATCH

- Question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Choices: [0] الفئة الاولى (1) | [1] الفئة الثانية. | [2] الفئة الثانية.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q287 — STRONG [APPLYABLE]

- Question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Choices: [0] الفئة الثالثة. | [1] الفئة الثانية. | [2] الفئة السابعة
- Proposed: الفئة الثالثة. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact normalized question text; same answer-text set; image basename/URL identity with keyed external; external key → index 0 ("الفئة الثالثة.")
- Explanation: STRONG via image identity + explicit key.

### Q284 — HIGH_CONFIDENCE [APPLYABLE]

- Question: رخصة السوق من الفئة السابعة تصنف بأنها:
- Choices: [0] رخصة قيادة مركبة ذوي احتياجات خاصة | [1] رخصة سوق لقيادة سيارة الركوب التي يزيد عدد ركابها على ثالثين راكبا بمن فيهم السائق | [2] لا شيء مما ذكر
- Proposed: رخصة قيادة مركبة ذوي احتياجات خاصة (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("رخصة قيادة مركبة ذوي احتياجات خاصة")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q283 — HIGH_CONFIDENCE [APPLYABLE]

- Question: رخصة السوق من الفئة الخامسة تصنف بأنها:
- Choices: [0] رخصة سوق لجميع انواع الدراجات الالية . | [1] رخصة سوق لقيادة مركبة اشغال. | [2] رخصة قيادة حافلة متوسطة أو مركبة يزيد وزنها الاجمالي عن سبعة أطنان ونصف الطن
- Proposed: رخصة قيادة حافلة متوسطة أو مركبة يزيد وزنها الاجمالي عن سبعة أطنان ونصف الطن (index 2)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("رخصة قيادة حافلة متوسطة أو مركبة يزيد وزنها الاجمالي عن سبعة أطنان ونصف الطن")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q281 — NO_MATCH

- Question: رخصة السوق من الفئة الثانية ( 1+2 )تصنف بأنها:
- Choices: [0] رخصة سوق لجميع انواع الدراجات الالية . | [1] رخصة سوق لقيادة مركبة اشغال. | [2] رخصة سوق لقيادة مركبة زراعية. | [3] ب + ج
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q279 — HIGH_CONFIDENCE [APPLYABLE]

- Question: المركبة الالية المصممة لاستخدامها في الاشغال الانشائية بما في ذلك الاشغال المتعلقة بالطرق هي:
- Choices: [0] سيارة الشحن. | [1] الحافلة | [2] مركبة الاشغال.
- Proposed: مركبة الاشغال. (index 2)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("مركبة الاشغال.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q278 — HIGH_CONFIDENCE [APPLYABLE]

- Question: مركبة النقل او الرفع او الجر الية مجهزة بمعدات ثابتة وبصورة دائمة و لا يمكن استعمالها الا في الاغراض المصممة لها تسمى :
- Choices: [0] سيارة الشحن. | [1] الحافلة | [2] مركبة ذات الاستعمال الخاص
- Proposed: مركبة ذات الاستعمال الخاص (index 2)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("مركبة ذات الاستعمال الخاص")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q277 — HIGH_CONFIDENCE [APPLYABLE]

- Question: المركبة المصممة لنقل البضائع هي:
- Choices: [0] مركبة الشحن | [1] الحافلة. | [2] سيارة النقل المشترك.
- Proposed: مركبة الشحن (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("مركبة الشحن")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q276 — HIGH_CONFIDENCE [APPLYABLE]

- Question: المركبات المصممة لنقل الاشخاص و البضائع معا هي:
- Choices: [0] سيارات ركوب المتوسطه | [1] مركبات النقل المشترك | [2] الحافلات.
- Proposed: مركبات النقل المشترك (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("مركبات النقل المشترك")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q275 — HIGH_CONFIDENCE [APPLYABLE]

- Question: المركبه المصممة لنقل ما يزيد على ثلاثين راكبا هي
- Choices: [0] سيارة الركوب المتوسطه. | [1] الحافلة. | [2] سيارة النقل المشترك.
- Proposed: الحافلة. (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("الحافلة.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q274 — HIGH_CONFIDENCE [APPLYABLE]

- Question: المركبه المصممة لنقل ما لا يقل عن عشرة ركاب ولا يزيد على ثلاثين راكبا بمن فيهم السائق هي:
- Choices: [0] سيارة الركوب المتوسطه. | [1] الحافلة. | [2] سيارات النقل المشترك.
- Proposed: سيارة الركوب المتوسطه. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("سيارة الركوب المتوسطه.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q273 — HIGH_CONFIDENCE [APPLYABLE]

- Question: السيارت المصممه لنقل ما لا يزيد على تسعة اشخاص بمن فيهم السائق تصنف من فئة :
- Choices: [0] سيارات الركوب | [1] مركبات النقل المشترك | [2] مركبات الشحن
- Proposed: سيارات الركوب (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("سيارات الركوب")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q271 — HIGH_CONFIDENCE [APPLYABLE]

- Question: مركبة الشحن مصممة لنقل :
- Choices: [0] الاشخاص. | [1] البضائع. | [2] لا شيء مما ذكر.
- Proposed: البضائع. (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("البضائع.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q270 — STRONG [APPLYABLE]

- Question: مركبة النقل المشترك مصممة لنقل البضائع والاشخاص معا
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 0 ("نعم")
- Explanation: STRONG: dual/independent keyed agreement.

### Q269 — HIGH_CONFIDENCE [APPLYABLE]

- Question: الحافلة مصممة لنقل ما يزيد عن .......:
- Choices: [0] عشرة ركاب. | [1] عشرون راكب. | [2] ثالثون راكبا.
- Proposed: ثالثون راكبا. (index 2)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("ثالثون راكبا.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q267 — HIGH_CONFIDENCE [APPLYABLE]

- Question: سيارة الركوب مصممة لنقل ما لا يزيد عن
- Choices: [0] تسعة أشخاص بمن فيهم السائق | [1] خمسة أشخاص بمن فيهم السائق | [2] سبعة أشخاص بمن فيهم السائق
- Proposed: تسعة أشخاص بمن فيهم السائق (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("تسعة أشخاص بمن فيهم السائق")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q265 — HIGH_CONFIDENCE [APPLYABLE]

- Question: تستخدم الازرار البيضاء للدلالة على:
- Choices: [0] حواف الطريق . | [1] المسارب. | [2] إعطاء الاولويه
- Proposed: المسارب. (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("المسارب.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q264 — HIGH_CONFIDENCE [APPLYABLE]

- Question: تستخدم الازرار الصفراء للدلالة على
- Choices: [0] حواف الطريق . | [1] المسارب. | [2] لاشيء مما ذكر
- Proposed: حواف الطريق . (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("حواف الطريق .")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q261 — STRONG [APPLYABLE]

- Question: من وظائف العلامات الارضية:
- Choices: [0] وظائف إرشادية. | [1] وظائف تحذيرية. | [2] وظائف تنظيمية. | [3] جميع ما ذكر.
- Proposed: جميع ما ذكر. (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 3 ("جميع ما ذكر.")
- Explanation: STRONG: dual/independent keyed agreement.

### Q260 — STRONG [APPLYABLE]

- Question: تقتصر وظائف العلامات الارضية على الوظائف التحذيرية فقط.
- Choices: [0] نعم | [1] لا
- Proposed: لا (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 1 ("لا")
- Explanation: STRONG: dual/independent keyed agreement.

### Q254 — MEDIUM

- Question: هذه العلامة الارضيه تعني
- Choices: [0] مواقف للمركبات بشكل زاوية على الطريق. | [1] مواقف للمركبات موازية للطريق | [2] ممنوع الوقوف.
- Proposed: مواقف للمركبات بشكل زاوية على الطريق. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q252 — CONFLICT

- Question: هذه العلامة الارضيه تعني
- Choices: [0] ممنوع الوقوف | [1] مواقف مركبات موازية للطريق. | [2] مواقف مركبات بشكل زاوية على الطريق.
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 1, 2
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q251 — CONFLICT

- Question: هذه العلامة الارضيه تعني
- Choices: [0] ممنوع الوقوف | [1] مواقف مركبات موازية للطريق. | [2] مواقف مركبات بشكل زاوية على الطريق.
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 1, 2
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q250 — MEDIUM

- Question: هذه العلامة الارضيه تعني
- Choices: [0] قبل ممرات المشاة ويمنع الوقوف عليه | [1] قبل ممرات المشاة ويسمح الوقوف عليه. | [2] عند مواقف السيارات.
- Proposed: قبل ممرات المشاة ويمنع الوقوف عليه (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q249 — MEDIUM

- Question: هذه العلامة الارضيه تعني
- Choices: [0] خط قف | [1] ممر مشاة. | [2] نهاية الطريق
- Proposed: ممر مشاة. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q248 — MEDIUM

- Question: هذه العلامة الارضيه تعني
- Choices: [0] خط قف. | [1] خط الاولوية | [2] ممر مشاة.
- Proposed: خط الاولوية (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q247 — MEDIUM

- Question: هذه العلامة الارضيه تعني
- Choices: [0] خط قف | [1] نهاية الطريق. | [2] خط األولوية.
- Proposed: خط قف (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q246 — MEDIUM

- Question: هذه العلامة الارضيه تعني
- Choices: [0] خط حافة الطريق. | [1] خط مسارب الطريق | [2] اتجاهات الطريق.
- Proposed: خط حافة الطريق. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q245 — MEDIUM

- Question: هذه العلامة الارضيه تعني
- Choices: [0] السماح بالتجاوز. | [1] خط الوقوف. | [2] خط التوقف. | [3] لا شئ مما ذكر.
- Proposed: السماح بالتجاوز. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q244 — MEDIUM

- Question: هذه العلامة الارضيه تعني
- Choices: [0] السماح بالتجاوز من الجهتين. | [1] السماح بالتجاوز من جهة الخط المتقطع. | [2] السماح بالتجاوز من جهة الخط المتصل.
- Proposed: السماح بالتجاوز من جهة الخط المتقطع. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q243 — MEDIUM

- Question: هذه العلامة الارضيه تعني
- Choices: [0] السماح بالتجاوز | [1] السماح بالتجاوز من اليمين . | [2] يمنع التجاوز من الجهتين
- Proposed: يمنع التجاوز من الجهتين (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q242 — MEDIUM

- Question: هذه الشاخصة تعني:
- Choices: [0] توزين إجباري للشاحنات | [1] توزين اختياري للشاحنات | [2] نقطة تفتيش للشاحنات
- Proposed: توزين إجباري للشاحنات (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q241 — MEDIUM

- Question: تدل هذه الشاخصة على مخرج المنحدرات للطوارىء:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q240 — MEDIUM

- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] موقف لذوي الاحتياجات الخاصه | [1] موقف عام. | [2] موقف مشترك لذوي الاحتياجات والمركبات الاخرى
- Proposed: موقف لذوي الاحتياجات الخاصه (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q239 — MEDIUM

- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] مناطق سياحية | [1] مناطق علاجيه | [2] مناطق اثرية | [3] جميع ما ذكر
- Proposed: مناطق سياحية (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q238 — MEDIUM

- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] مركز إسعاف أولي. | [1] شاخصة ارشاديه لوجود مسجد. | [2] مستشفى
- Proposed: مركز إسعاف أولي. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q236 — MEDIUM

- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] مقهى | [1] اشارة ارشادية لبائع ادوات منزلية. | [2] مطعم .
- Proposed: مطعم . (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q235 — MEDIUM

- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] مقهى. | [1] مخيم سياحي. | [2] مطعم
- Proposed: مقهى. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q234 — MEDIUM

- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] محطة وقود | [1] مخيم سياحي. | [2] مطعم.
- Proposed: محطة وقود (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q233 — MEDIUM

- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] ممنوع الوقوف | [1] موقف مخصص لذوي الاحتياجات الخاصة. | [2] موقف.
- Proposed: موقف. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q232 — NO_MATCH

- Question: هذه ' الشاخصة ' تعني
- Choices: [0] ممنوع الوقوف والتوقف. | [1] ممنوع الوقوف.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q231 — MEDIUM

- Question: هذه الشاخصة الارشادية تعني
- Choices: [0] ممنوع الوقوف والتوقف. | [1] ممنوع الوقوف. | [2] مسموح الوقوف.
- Proposed: ممنوع الوقوف والتوقف. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q228 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] انتبة امامك نادي فروسية. | [1] ممر إلزامي للخيول | [2] يمنع مرور الخيول
- Proposed: ممر إلزامي للخيول (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q227 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] ممر إلزامي للمشاة . | [1] يمنع مرور المشاة | [2] اولوية المرور للمشاة
- Proposed: ممر إلزامي للمشاة . (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q226 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] مكان وقوف للدرجات . | [1] ممنوع دخول الدرجات. | [2] ممر للدراجات الهوائية.
- Proposed: ممر للدراجات الهوائية. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q225 — NO_MATCH

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه اجباري دائري (دوار). | [1] شاخصة إرشادية "امامك دوار". | [2] شاخصة تحذيرية "امامك دوار"
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q224 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إجباري نحو اليمين أو اليسار | [1] اتجاه اجباري لليمين. | [2] اتجاه اجباري لليسار.
- Proposed: اتجاه إجباري نحو اليمين أو اليسار (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q223 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إختياري نحو اليمين | [1] اتجاه اختياري نحو اليسار | [2] اتجاه إجباري نحو اليسار
- Proposed: اتجاه إجباري نحو اليسار (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q222 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إختياري نحو اليمين | [1] اتجاه اختياري نحو اليسار | [2] اتجاه إجباري نحو اليمين
- Proposed: اتجاه إجباري نحو اليمين (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q221 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إختياري نحو اليمين | [1] اتجاه اختياري نحو اليسار | [2] اتجاه إجباري نحو اليمين
- Proposed: اتجاه إجباري نحو اليمين (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q220 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] انعطاف إجباري نحو اليمين أو اليسار. | [1] اتجاه اجباري لليمين. | [2] اتجاه اجباري لليسار
- Proposed: انعطاف إجباري نحو اليمين أو اليسار. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q216 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إجباري لمسرب واحد. | [1] اتجاه إجباري لليمين. | [2] اتجاه إجباري نحو الامام
- Proposed: اتجاه إجباري نحو الامام (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q215 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] انعطاف إجباري نحو اليمين. | [1] انعطاف إجباري نحو اليسار. | [2] اولوية المتجة الى اليسار.
- Proposed: انعطاف إجباري نحو اليسار. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q214 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] انعطاف إجباري نحو اليمين. | [1] انعطاف إجباري نحو اليسار. | [2] الاولوية للمتجه الى اليمين
- Proposed: انعطاف إجباري نحو اليمين. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q213 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إجباري إلى اليسار | [1] اتجاه إجباري الى اليمين. | [2] الاولوية االتجاه الى اليمين
- Proposed: اتجاه إجباري الى اليمين. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q212 — MEDIUM

- Question: هذه الشاخصة الالزامية تعني
- Choices: [0] اتجاه إجباري إلى اليسار | [1] اتجاه إجباري الى اليمين. | [2] الاولوية للمتجه الى اليسار.
- Proposed: اتجاه إجباري إلى اليسار (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q211 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] وقوف | [1] منطقة جمركية. | [2] ممنوع المرور دون توقف (جمارك)
- Proposed: ممنوع المرور دون توقف (جمارك) (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q210 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع استعمال الزامور | [1] يسمح استعمال الزامور | [2] توجد فرقة موسيقية
- Proposed: ممنوع استعمال الزامور (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q208 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] السرعة الدنيا المسموح بها | [1] نهاية حد السرعة المدون في الشاخصة. | [2] السرعات القصوى للمركبات.
- Proposed: السرعات القصوى للمركبات. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q207 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] السرعة القصوى | [1] نهاية حد السرعة المدون في الشاخصة. | [2] السرعة الدنيا المسموح بها.
- Proposed: السرعة القصوى (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q206 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] نهاية منطقة منع التجاوز للشاحنات. | [1] نهاية منطقة منع التجاوز. | [2] نهاية منطقة المنع.
- Proposed: نهاية منطقة المنع. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q205 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] نهاية منطقة منع التجاوز للشاحنات | [1] نهاية منطقة منع التجاوز. | [2] ممنوع التجاوز للشاحنات
- Proposed: نهاية منطقة منع التجاوز للشاحنات (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q204 — MEDIUM

- Question: هذه الشاخصة تعني
- Choices: [0] ممنوع التجاوز. | [1] نهاية منطقة منع التجاوز. | [2] ممنوع التجاوز للشاحنات. | [3] نهاية منطقة المنع.
- Proposed: نهاية منطقة منع التجاوز. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q436 — HIGH_CONFIDENCE [APPLYABLE]

- Question: من الحالات التي يمنع التجاوز فيها:
- Choices: [0] عن رتل متوقف من السيارات بسبب تعطل حركة السير او توقف السير بسبب وجود اشارة في الطريق | [1] عند الخط الطولي المتصل في الطرق او الممنوع التجاوز فيها بموجب شواخص المرور | [2] على الجسور وداخل الانفاق
- Proposed: عن رتل متوقف من السيارات بسبب تعطل حركة السير او توقف السير بسبب وجود اشارة في الطريق (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("عن رتل متوقف من السيارات بسبب تعطل حركة السير او توقف السير بسبب وجود اشارة في الطريق")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q437 — HIGH_CONFIDENCE [APPLYABLE]

- Question: من الحالات التي يمنع التجاوز فيها:
- Choices: [0] عند المنعطفات ورؤوس التلال والطرق الزلقة والساحات الدائرية وبالقرب من ممرات عبور المشاة | [1] بالقرب من تقاطع الطرق او تقاطع خطوط السكك الحديدية | [2] عند تدني مدى الرؤية في الطريق نتيجة لعوامل طبيعية او طارئة
- Proposed: عند تدني مدى الرؤية في الطريق نتيجة لعوامل طبيعية او طارئة (index 2)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 2 ("عند تدني مدى الرؤية في الطريق نتيجة لعوامل طبيعية او طارئة")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q446 — HIGH_CONFIDENCE [APPLYABLE]

- Question: اذا اعطى السائق الذي يقود مركبته في الطريق أي اشارة ضوئية (غماز) فعلى كل سائق يسير خلفه ان:
- Choices: [0] زيادة سرعة مركبته وعدم فسح المجال للمركبة الاخرى. | [1] يخفف من سرعة مركبته وفسح المجال للمركبة الاخرى | [2] متابعة سيره.
- Proposed: يخفف من سرعة مركبته وفسح المجال للمركبة الاخرى (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("يخفف من سرعة مركبته وفسح المجال للمركبة الاخرى")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q462 — HIGH_CONFIDENCE [APPLYABLE]

- Question: التقاطع المتكافئ هو :
- Choices: [0] تقاطع غير محكوم بشرطي مرور والضوابط مرورية كالاشارات الضوئية والشواخص المرورية والعالمات الارضية. | [1] تقاطع محكوم بشرطي مرور وضوابط مرورية كاالاشارات الضوئية والشواخص المرورية والعالمات الارضية. | [2] تقاطع غير محكوم بشرطي مرور ولكن يوجد ضوابط مرورية كالاشارات الضوئية والشواخص المرورية العالمات الارضية.
- Proposed: تقاطع غير محكوم بشرطي مرور والضوابط مرورية كالاشارات الضوئية والشواخص المرورية والعالمات الارضية. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("تقاطع غير محكوم بشرطي مرور والضوابط مرورية كالاشارات الضوئية والشواخص المرورية والعالمات الارضية.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q473 — HIGH_CONFIDENCE [APPLYABLE]

- Question: عند تقاطع طرق مع سكة حديد فإن الاولوية تكون:
- Choices: [0] للمركبات. | [1] للقطار. | [2] للحافلات
- Proposed: للقطار. (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("للقطار.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q474 — HIGH_CONFIDENCE [APPLYABLE]

- Question: في حال وجود مركبتان متقابلتان على التقاطع تقع كل منهما على يسار الاخرى وكانت احداهما تشير الى انها ستتجه الى يمينها والاخرى الى اليسار تكون الاولوية:
- Choices: [0] للمركبة المتجه الى اليمين | [1] للمركبة المتجهة الى اليسار. | [2] لا شيء مما ذكر
- Proposed: للمركبة المتجه الى اليمين (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("للمركبة المتجه الى اليمين")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q475 — HIGH_CONFIDENCE [APPLYABLE]

- Question: عند وجود مركبة قادمة من طريق رئيسي على تقاطع واخرى قادمة من طريق فرعي تكون الاولوية :
- Choices: [0] للقادم من الطريق الفرعي. | [1] للقادم من الطريق الرئيسي | [2] لا شيء مما ذكر
- Proposed: للقادم من الطريق الرئيسي (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("للقادم من الطريق الرئيسي")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q477 — HIGH_CONFIDENCE [APPLYABLE]

- Question: اذا كان تقاطع الطرق غير منظم بواسطة شرطي مرور او اشارة ضوئية او شواخص او علامات ارضية تكون الاولوية عند تساوي الاولويات :
- Choices: [0] للمركبة القادمة على التقاطع من يمينك. | [1] للمركبة القادمة على التقاطع من يسارك. | [2] لاي مركبه موجودة على التقاطع
- Proposed: للمركبة القادمة على التقاطع من يمينك. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("للمركبة القادمة على التقاطع من يمينك.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q483 — HIGH_CONFIDENCE [APPLYABLE]

- Question: على السائق عند وصوله الى تقاطع طرق منظم بواسطة شرطي مرور :
- Choices: [0] أن يقوم بالمرور بمركبته بدون ان يسمح له الشرطي. | [1] عدم المرور بمركبته الا عندما يسمح له الشرطي. | [2] لا شيء مما ذكر.
- Proposed: عدم المرور بمركبته الا عندما يسمح له الشرطي. (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("عدم المرور بمركبته الا عندما يسمح له الشرطي.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q484 — HIGH_CONFIDENCE [APPLYABLE]

- Question: عند اقتراب السائق من تقاطع طرق عليه ان :
- Choices: [0] يخفف السرعة. | [1] يزيد السرعة. | [2] لا شئ مما ذكر
- Proposed: يخفف السرعة. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("يخفف السرعة.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q492 — NO_MATCH

- Question: الضوء الاحمر المخصص للمشاة في الاشارة الضوئية يعني:
- Choices: [0] السماح للمشاة بعبور الطريق | [1] السماح للمشاة بعبور الطريق | [2] منع المشاة من عبور الطريق
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q494 — NO_MATCH

- Question: الضوء المخصص لعبور المشاة من خلال الاشارة الضوئية.
- Choices: [0] الضوء الاخضر. | [1] الضوء الاحمر. | [2] الضوء الاصفر. | [3] لا شئ مما ذكر.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q500 — HIGH_CONFIDENCE [APPLYABLE]

- Question: من اهداف وجود نظام التعليق:
- Choices: [0] تثبيت المحرك على جسم الالية. | [1] امتصاص الصدمات والمحافظة على توازن المركبة | [2] لا شئ مما ذكر.
- Proposed: امتصاص الصدمات والمحافظة على توازن المركبة (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("امتصاص الصدمات والمحافظة على توازن المركبة")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q509 — HIGH_CONFIDENCE [APPLYABLE]

- Question: من الاجزاء التي تشارك في نقل القوة من المحرك الى العجلات هي:
- Choices: [0] المازج (الكربوريتر). | [1] صندوق التروس | [2] واقي الصدمة (الصنوبرصات) | [3] الهيكل
- Proposed: صندوق التروس (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("صندوق التروس")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q516 — HIGH_CONFIDENCE [APPLYABLE]

- Question: من مواصفات ماء التبريد المستخدم لتبريد المحرك:
- Choices: [0] يجب أن يكون ماء التبريد نقياً وأن يحتوي مادة تساعد على عدم تكون الصدأ والرواسب | [1] يجب أن يكون ماء التبريد نقياً وأن يحتوي على نسبة مرتفعة من الكلس. | [2] يجب أن يكون ماء التبريد عكراً وأن يحتوي على نسبة مخفضة من الكلس
- Proposed: يجب أن يكون ماء التبريد نقياً وأن يحتوي مادة تساعد على عدم تكون الصدأ والرواسب (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest
- Evidence: exact identity + single authoritative keyed source (morortest); mapped index 0 ("يجب أن يكون ماء التبريد نقياً وأن يحتوي مادة تساعد على عدم تكون الصدأ والرواسب")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q517 — HIGH_CONFIDENCE [APPLYABLE]

- Question: من فوائد نظام التبريد:
- Choices: [0] المحافظة على حرارة المحرك عند حرارة معينة محددة. | [1] تبريد الزيت الموجود في المحرك والمحافظة عليه من التلف | [2] تقليل القوة الضائعة في تسخين أجزاء المحرك. | [3] أ+ب
- Proposed: المحافظة على حرارة المحرك عند حرارة معينة محددة. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("المحافظة على حرارة المحرك عند حرارة معينة محددة.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q525 — HIGH_CONFIDENCE [APPLYABLE]

- Question: عند وصول ساعة الحرارة إلى المنطقة ( H )فإنه يجب عليك:
- Choices: [0] ايقاف سيارتك في مكان آمن لاتخاذ الاجراء الضروري | [1] إيقاف سيارتك في أي مكان في الطريق فورا لاتخاذ الاجراء الضروري | [2] متابعة المسير في السيارة حتى تصل اقرب كراج.
- Proposed: ايقاف سيارتك في مكان آمن لاتخاذ الاجراء الضروري (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("ايقاف سيارتك في مكان آمن لاتخاذ الاجراء الضروري")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q541 — HIGH_CONFIDENCE [APPLYABLE]

- Question: تكون فرصة تجنب الاصابات الخطيرة كبيرة جدا لسائقي الدراجات إذا قاموا بإرتداء:
- Choices: [0] واقية الرأس ( الخوذة) المناسبة | [1] نظارات طبية. | [2] قبعة تغطي الرأس بشكل كامل.
- Proposed: واقية الرأس ( الخوذة) المناسبة (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("واقية الرأس ( الخوذة) المناسبة")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q543 — HIGH_CONFIDENCE [APPLYABLE]

- Question: يجوز لاي فرد من افراد الشرطة اذا كانت المركبة غير مسجلة او انتهى ترخيصها لمدة تزيد على ستة اشهر
- Choices: [0] حجز المركبة | [1] إلقاء القبض على السائق. | [2] إلزام السائق بدفع غرامه فقط. | [3] لا شئ مما ذكر
- Proposed: حجز المركبة (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("حجز المركبة")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q544 — HIGH_CONFIDENCE [APPLYABLE]

- Question: اذا حاول السائق الهرب من مكان حادث ارتكبه فإنه :
- Choices: [0] يجوز لاي فرد من افراد الشرطة ان يلقي القبض عليه دون مذكرة | [1] لا يجوز إلقاء القبض عليه ولكن يجب دفع قيمة المخالفه فقط. | [2] لا شئ مما ذكر
- Proposed: يجوز لاي فرد من افراد الشرطة ان يلقي القبض عليه دون مذكرة (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("يجوز لاي فرد من افراد الشرطة ان يلقي القبض عليه دون مذكرة")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q546 — HIGH_CONFIDENCE [APPLYABLE]

- Question: يجوز لاي فرد من افراد الشرطة ان يلقي القبض دون مذكرة على سائق اي مركبة إذا:
- Choices: [0] تسبب في وفاة شخص او اصابته بسبب قيادة المركبة. | [1] رفض التوقف لدورية الشرطة | [2] القيادة بعكس السير | [3] لا شئ مما ذكر
- Proposed: تسبب في وفاة شخص او اصابته بسبب قيادة المركبة. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("تسبب في وفاة شخص او اصابته بسبب قيادة المركبة.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q547 — HIGH_CONFIDENCE [APPLYABLE]

- Question: يعاقب السائق بالحبس مدة لا تقل عن ثلاثة أشهر ولا تزيد على ثلاث سنوات لمن ارتكب المخالفات التالية:
- Choices: [0] إذا تسبب سائق المركبة أثناء قيادتها بوفاة إنسان أو تسبب بإحداث عاهة دائمة له | [1] محاولة الهرب من مكان حادث ارتكبه | [2] عدم إعلام أول مركز أمني أو دورية شرطه بحادث سير ارتكبه أثناء قيادة مركبة وأدى إلى إصابة شخص
- Proposed: إذا تسبب سائق المركبة أثناء قيادتها بوفاة إنسان أو تسبب بإحداث عاهة دائمة له (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("إذا تسبب سائق المركبة أثناء قيادتها بوفاة إنسان أو تسبب بإحداث عاهة دائمة له")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q549 — HIGH_CONFIDENCE [APPLYABLE]

- Question: عند قيادة المركبة من قبل سائق تحت تأثير الكحول أو أي من المؤثرات العقلية التي تفقد سائقها السيطرة على قيادتها أو تناول الكحول أثناء القيادة :
- Choices: [0] القبض من قبل أفراد الامن العام على السائق بدون مذكرة | [1] القبض من قبل أفراد الامن العام على السائق بمذكرة | [2] لا شيء مما ذكر
- Proposed: القبض من قبل أفراد الامن العام على السائق بدون مذكرة (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("القبض من قبل أفراد الامن العام على السائق بدون مذكرة")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q551 — NO_MATCH

- Question: من إجراءات التي تتخذ لفاقد الوعي:
- Choices: [0] لا نقل المصاب من مكان الحادث | [1] لا تجبير أي جزء من جسمه. | [2] أ + ب | [3] لا شئ مما ذكر
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q555 — NO_MATCH

- Question: من انواع النزيف :
- Choices: [0] نزيف خارجي وهو سيالان الدم خارج الجسم | [1] نزيف داخلي وهو سيالان الدم داخل تجاويف الجسم مثل تجويف الجمجمة والصدر و البطن والمفاصل | [2] أ + ب
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q566 — NO_MATCH

- Question: الصدمة هي:
- Choices: [0] حالة مرضية تحدث بسبب هبوط حاد في الدورة الدموية مما يؤدي إلى عدم وصول الاوكسجين بكميات كافية إلى أنسجة الجسم وخاصة أنسجة المخ. | [1] حالة مرضية تحدث بسبب هبوط في الدورة الدموية مما يؤدي إلى وصول الاوكسجين بكميات كافية إلى أنسجة الجسم وخاصة أنسجة المخ. | [2] حالة مرضية تحدث بسبب إرتفاع في الدورة الدموية مما يؤدي إلى وصول الاوكسجين بكميات كافية إلى أنسجة الجسم وخاصة أنسجة المخ. | [3] لا شيء مما ذكر.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q578 — NO_MATCH

- Question: من الاصابات التي تتطلب إسعافات أولية:
- Choices: [0] الجروح – النزيف – الكسور والحروق | [1] ضربات الشمس والاجهاد الحراري والتشنجات الحرارية | [2] أ + ب.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q597 — HIGH_CONFIDENCE [APPLYABLE]

- Question: يحظر على السائق استعمال اجهزة التنبيه الصوتية :
- Choices: [0] اثناء وقوف المركبة. | [1] اثناء حركة المركبة. | [2] لا شئ ما ذكر
- Proposed: اثناء وقوف المركبة. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("اثناء وقوف المركبة.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q600 — CONFLICT

- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2.
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q601 — CONFLICT

- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q602 — CONFLICT

- Question: في الصورة التي امامك تكون الاولوية
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q603 — CONFLICT

- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q604 — CONFLICT

- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q605 — CONFLICT

- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q606 — CONFLICT

- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q607 — MEDIUM

- Question: في الصور التي امامك يكون ترتيب الاولوية :
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2.
- Proposed: للمركبة رقم 1. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q608 — MEDIUM

- Question: في الصور التي امامك تكون الاولوية :
- Choices: [0] 3 - 2 - 1 | [1] 1 - 2 - 3 | [2] 2 - 1 - 3
- Proposed: 2 - 1 - 3 (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q609 — MEDIUM

- Question: في الصور التي امامك يكون ترتيب الاولوية :
- Choices: [0] 1- 2 - 3 | [1] 1 - 3 - 2 | [2] 3 - 1 - 2 | [3] لا شيء مما ذكر
- Proposed: 1 - 3 - 2 (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q610 — HIGH_CONFIDENCE [APPLYABLE]

- Question: في الصور التي امامك تكون الاولوية :
- Choices: [0] للقطار 1 | [1] للمركبة 2
- Proposed: للقطار 1 (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact question + answer set on multiple independent keyed sources; not a bare في الصورة stem; dual keys agree; agreed index 0 ("للقطار 1")
- Explanation: HIGH_CONFIDENCE: dual independent keys; image present but stem is text-identifying.

### Q611 — HIGH_CONFIDENCE [APPLYABLE]

- Question: من الامور التي تساعد على زيادة إستهلاك البنزين:
- Choices: [0] إستخدام الغيارات الثقيلة اثناء القيادة. | [1] إستخدام الغيارات الخفيفة اثناء القيادة | [2] إستعمال المركبة لمسافات قصيرة لان ذلك يؤدي الى زيادة إستهلاك الوقود.
- Proposed: إستخدام الغيارات الثقيلة اثناء القيادة. (index 0)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 0 ("إستخدام الغيارات الثقيلة اثناء القيادة.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q612 — NO_MATCH

- Question: ان الوصول للسرعة القصوى فور تشغيلك للمركبة يقلل من استهلاك الوقود.
- Choices: [0] نعم | [1] لا
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q615 — NO_MATCH

- Question: ان وجود الرمز 155 / 13 على الاطار يعني:
- Choices: [0] عرض الاطار 155 ملم وقياس الجنط قطره 13 أنش. | [1] عرض الاطار 13 أنش وقياس الجنط قطره 155 ملم. | [2] لا شيء مما ذكر
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q616 — HIGH_CONFIDENCE [APPLYABLE]

- Question: واحدة من الامور التي تساعد على زيادة إستهلاك البنزين:
- Choices: [0] الابتعاد عن الاختناقات المرورية | [1] الضغط المنخفض للهواء بالاطارات | [2] تغير السرعات يتم بنقل الحركة من سرعة الى اخرى فى الوقت المناسب
- Proposed: الضغط المنخفض للهواء بالاطارات (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("الضغط المنخفض للهواء بالاطارات")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q620 — NO_MATCH

- Question: يجب أن تكون جميع الاطارات الاربعة في المركبة
- Choices: [0] العجالت الامامية ذات قياس واحد والخلفية ذات قياس اخر | [1] من نفس القياس | [2] ليس ضروري لان تكون العجلات الاربعة من نفس القياس
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q623 — MEDIUM

- Question: تشير حركة يد الشرطي الموضحة في الصورة التي امامك الى :
- Choices: [0] ايقاف حركة المرور المركبات | [1] تخفيف سرعة المركبات | [2] تمرير المركبات القادمة من جانب الطريق وايقاف المركبات القادمة من الامام و الخلف.
- Proposed: تمرير المركبات القادمة من جانب الطريق وايقاف المركبات القادمة من الامام و الخلف. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q625 — HIGH_CONFIDENCE [APPLYABLE]

- Question: الانحراف هو :
- Choices: [0] تغير تدريجي في الاتجاه ومن الممكن ان يكون انعطافي بطئ او ازاحة متوسطة للجانب | [1] تغير مفاجئ في الاتجاه ومن الممكن ان يكون انعطافي سريع او ازاحة سريعة للجانب | [2] تغير مفاجئ في الاتجاه ومن غير الممكن ان يكون انعطافي سريع
- Proposed: تغير مفاجئ في الاتجاه ومن الممكن ان يكون انعطافي سريع او ازاحة سريعة للجانب (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 1 ("تغير مفاجئ في الاتجاه ومن الممكن ان يكون انعطافي سريع او ازاحة سريعة للجانب")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q626 — HIGH_CONFIDENCE [APPLYABLE]

- Question: يجب ضبط المرايا :
- Choices: [0] قبل الدخول الى المنعطفات | [1] عند الرجوع الى الخلف | [2] عند التجاوز | [3] قبل التحرك.
- Proposed: قبل التحرك. (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: alqemah
- Evidence: exact identity + single authoritative keyed source (alqemah); mapped index 3 ("قبل التحرك.")
- Explanation: HIGH_CONFIDENCE: non-yes/no with exact match to one authoritative keyed bank.

### Q628 — HIGH_CONFIDENCE [APPLYABLE]

- Question: الاجراء الصحيح عند اقترابك من التقاطع ورؤيتك للخط العرضي المتصل :
- Choices: [0] متابعة السير دون التوقف | [1] تخفيض السرعة والتوقف قبل الخط وإعطاء الاولوية للمركبات صاحبة حق الاولوية | [2] التوقف عند الضرورة قبل استئناف السير
- Proposed: تخفيض السرعة والتوقف قبل الخط وإعطاء الاولوية للمركبات صاحبة حق الاولوية (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact question + answer set on multiple independent keyed sources; not a bare في الصورة stem; dual keys agree; agreed index 1 ("تخفيض السرعة والتوقف قبل الخط وإعطاء الاولوية للمركبات صاحبة حق الاولوية")
- Explanation: HIGH_CONFIDENCE: dual independent keys; image present but stem is text-identifying.

### Q630 — MEDIUM

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] تخفيض سرعة مركبتك وإعطاء الاولوية للمركبات الاخرى على التقاطع ثم الدوران. | [1] زيادة سرعة مركبتك وأخذ حق الاولوية على التقاطع ثم الدوران. | [2] الذهاب إلى تقاطع أخر يكون فيه الدوران مسموح.
- Proposed: تخفيض سرعة مركبتك وإعطاء الاولوية للمركبات الاخرى على التقاطع ثم الدوران. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q631 — MEDIUM

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] زيادة سرعة مركبتك والانعطاف نحو اليسار | [1] تخفيض سرعة مركبتك والانعطاف نحو اليسار. | [2] زيادة سرعة مركبتك والانعطاف نحو اليمين.
- Proposed: تخفيض سرعة مركبتك والانعطاف نحو اليسار. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q632 — MEDIUM

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] زيادة سرعة مركبتك والانعطاف نحو اليسار | [1] تخفيض سرعة مركبتك والانعطاف نحو اليسار. | [2] تخفيض سرعة مركبتك والانعطاف نحو اليمين
- Proposed: تخفيض سرعة مركبتك والانعطاف نحو اليمين (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q633 — CONFLICT

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] التوقف في حال خلو الطريق من المركبات والمشاة | [1] عدم التوقف إلا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع. | [2] عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى لاعاقة حركة المرور
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, morortest, alqemah
- Evidence: Keyed matches disagree on indexes: 1, 2
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q634 — MEDIUM

- Question: عمق فرزات الاطار الجيدة تكون عادة 9 ملم
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: yes/no with only one keyed source (alqemah)
- Explanation: MEDIUM: yes/no needs dual sources; only one keyed source found.

### Q635 — STRONG [APPLYABLE]

- Question: المشاة هم :
- Choices: [0] الذين يسيرون على اقدامهم. | [1] سائقوا الدراجات الهوائية . | [2] اي شخص يدفع أو يجر عربة اطفال او عربة مريض او مقعد او عربة يد. | [3] جميع ما ذكر
- Proposed: جميع ما ذكر (index 3)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact deepNorm question on multiple independent keyed sources; same answer-text set; mapped by correct answer text; sources agree on index 3 ("جميع ما ذكر")
- Explanation: STRONG: dual/independent keyed agreement.

### Q638 — HIGH_CONFIDENCE [APPLYABLE]

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] سلوك هذا الطريق بعد التأكد من خلوه من المركبات القادمة. | [1] عدم سلوك هذا الطريق كونه باتجاه واحد | [2] لا شىء مما ذكر
- Proposed: عدم سلوك هذا الطريق كونه باتجاه واحد (index 1)
- Confidence: high
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: exact question + answer set on multiple independent keyed sources; not a bare في الصورة stem; dual keys agree; agreed index 1 ("عدم سلوك هذا الطريق كونه باتجاه واحد")
- Explanation: HIGH_CONFIDENCE: dual independent keys; image present but stem is text-identifying.

### Q640 — NO_MATCH

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] توقيف مركبتك والسماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور. | [1] تخفيف السرعة ومتابعة المسير كون أولوية المرور لك | [2] لا شئ مما ذكر.
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q641 — MEDIUM

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] تخفيض سرعة مركبتك والسماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور. | [1] تخفيف السرعة ومتابعة سيرك وعدم السماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور لان اولوية المرور لك. | [2] ملاحظة وضع الطريق وبناءا عليه تسير او تعطي الاولوية للمركبات القادمة.
- Proposed: تخفيض سرعة مركبتك والسماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q642 — MEDIUM

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] زيادة سرعة مركبتك دون الالتزام بحدود السرعة. | [1] الوقوف التام بمركبتك. | [2] الالتزام بحدود السرعة لان الطريق ذات الاولوية انتهت
- Proposed: الالتزام بحدود السرعة لان الطريق ذات الاولوية انتهت (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q646 — MEDIUM

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] الالتزام بحدود السرعة المقررة بسبب الرياح الشديدة من جهة اليمين | [1] الالتزام بحدود السرعة المقررة فقط. | [2] زيادة سرعتك عن حدود السرعة المقررة بسبب الرياح الشديدة من جهة اليسار.
- Proposed: الالتزام بحدود السرعة المقررة بسبب الرياح الشديدة من جهة اليمين (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q650 — MEDIUM

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] زيادة سرعة مركبتك و المسافة بينك وبين المركبات الاخرى وعدم القيام بالتجاوز. | [1] تخفيض سرعة مركبتك وترك مسافة أمان كافية بينك وبين المركبات الاخرى والسماح بالتجاوز. | [2] تخفيض سرعة مركبتك وترك مسافة أمان كافية بينك وبين المركبات الاخرى وعدم القيام بالتجاوز.
- Proposed: تخفيض سرعة مركبتك وترك مسافة أمان كافية بينك وبين المركبات الاخرى وعدم القيام بالتجاوز. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q651 — MEDIUM

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] تخفيض سرعة مركبتك والالتزام بمسربك وعدم التجاوز. | [1] زيادة سرعة مركبتك والالتزام بمسربك وعدم التجاوز. | [2] تخفيض سرعة مركبتك وتغيير مسربك الى المسرب المناسب وعدم التجاوز
- Proposed: تخفيض سرعة مركبتك والالتزام بمسربك وعدم التجاوز. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q652 — NO_MATCH

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] تخفيض سرعة مركبتك والالتزام بالمسرب الايمن وإعطاء الاولوية للمركبات التي تملك حق الاولوية. | [1] تخفيض سرعة مركبتك والالتزام بالمسرب الايسر وإعطاء الاولوية للمركبات التي تملك حق الاولوية. | [2] تخفيض سرعة مركبتك والالتزام بالمسرب المناسب وإعطاء الاولوية للمركبات التي تملك حق الاولوية
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q657 — MEDIUM

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال الغيارات العكسية. | [1] ملائمة سرعة مركبتك مع هذا المرتفع والالتزام بحدود السرعة المقررة والتزام الجانب الايمن من الطريق. | [2] ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال المكابح.
- Proposed: ملائمة سرعة مركبتك مع هذا المرتفع والالتزام بحدود السرعة المقررة والتزام الجانب الايمن من الطريق. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q658 — MEDIUM

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة .
- Choices: [0] ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال الغيارات العكسية | [1] ملائمة سرعة مركبتك مع هذا المرتفع والالتزام بحدود السرعة المقررة والتزام الجانب الايمن من الطريق. | [2] ملائمة سرعة مركبتك مع هذا المنحدر وزيادة السرعة عن المقررة واستعمال الغيارات العكسية.
- Proposed: ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال الغيارات العكسية (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q659 — NO_MATCH

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] زيادة سرعة مركبتك، لتتناسب مع سرعة المنعطف والسماح بالتجاوز. | [1] تخفيض سرعة مركبتك، لتتناسب مع سرعة المنعطفات وعدم التجاوز | [2] ايقاف مركبتك ثم التحرك ببطء نحو المنعطف لدخوله بأمان ومنع التجاوز
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q660 — NO_MATCH

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] زيادة سرعة مركبتك، لتتناسب مع سرعة المنعطف والسماح بالتجاوز. | [1] تخفيض سرعة مركبتك، لتتناسب مع سرعة المنعطف وعدم التجاوز | [2] ايقاف مركبتك ثم التحرك ببطء نحو المنعطف لدخوله بأمان ومنع التجاوز
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q662 — MEDIUM

- Question: ان سائق المركبة الحمراء لا يزعج بضوئه سائق المركبة الموجودة في الامام (الخضراء) و ذلك لانه لا يسير ملاصقا له
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q663 — MEDIUM

- Question: ان الرياح التي تؤثر على المركبة اثناء عملية التجاوز كما هو مبين بالرسم
- Choices: [0] رياح طبيعية | [1] رياح التفريغ | [2] لا شئ مما ذكر
- Proposed: رياح طبيعية (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q664 — MEDIUM

- Question: في حالة وقوف المركبة على مرتفع بدون رصيف يجب ان يقوم السائق بلف المقود على اليمين هل هذا الاجراء صحيح :
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q665 — MEDIUM

- Question: إذا كانت المركبة التي امامك تقف على منحدر بدون رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: low
- Applied: false
- Applyable: false
- Sources: morortest, alqemah
- Evidence: Previously unresolved image/wheel question; force-held pending definitive visual proof
- Explanation: Left unresolved by policy (Q665/Q666) without new definitive visual identity.

### Q666 — MEDIUM

- Question: إذا كانت المركبة التي امامك تقف على منحدر مع وجود رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: low
- Applied: false
- Applyable: false
- Sources: morortest, alqemah
- Evidence: Previously unresolved image/wheel question; force-held pending definitive visual proof
- Explanation: Left unresolved by policy (Q665/Q666) without new definitive visual identity.

### Q668 — MEDIUM

- Question: استخدام الضوء الرباعي (الفلشر) يعني :
- Choices: [0] التوجه الى اليمين | [1] التوجه الى اليسار. | [2] تخفيف السرعة يوجد خطر أمامك.
- Proposed: تخفيف السرعة يوجد خطر أمامك. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: training-driving
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q669 — MEDIUM

- Question: في الصورة التي امامك يريد السائق التوجه الى :
- Choices: [0] التوجه الى اليمين. | [1] التوجه الى اليسار. | [2] تخفيف السرعة.
- Proposed: التوجه الى اليمين. (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q670 — CONFLICT

- Question: في الصورة التي امامك يريد السائق التوجه:
- Choices: [0] الى اليمين. | [1] الى اليسار. | [2] تخفيف السرعة
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, morortest, alqemah
- Evidence: Keyed matches disagree on indexes: 1, 0
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q673 — INVALID

- Question: في الصورة التي امامك وقوف المركبة الصفراء صحيح:
- Choices: [0] نعم | [1] لا
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: alqemah, alqemah
- Evidence: Previously classified INVALID (scene mismatch); no new validating image match
- Explanation: Remains INVALID.

### Q676 — MEDIUM

- Question: في الصورة التي امامك تقف المركبة الحمراء في المكان الصحيح:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q678 — MEDIUM

- Question: في الصورة التي امامك الوقوف للمركبة صحيح:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q679 — CONFLICT

- Question: في الصورة التي امامك الوقوف صحيح:
- Choices: [0] نعم | [1] لا
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, morortest, morortest, morortest, alqemah
- Evidence: Keyed matches disagree on indexes: 1, 0
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q682 — MEDIUM

- Question: في الصورة التي امامك هل تتجاوز المركبة الزرقاء بشكل صحيح:
- Choices: [0] نعم. | [1] لا.
- Proposed: لا. (index 1)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q684 — MEDIUM

- Question: من خلال الرسم الموضح نجد أن :
- Choices: [0] السيارة الصفراء ضمن رؤية المركبة الزرقاء. | [1] السيارة الحمراء ضمن رؤية المركبة الزرقاء. | [2] السيارتين الصفراء او الحمراء خارج رؤية السيارة الزرقاء وتسمى هذه الحالة بالنقطة العمياء. | [3] لا شيء مما ذكر
- Proposed: السيارتين الصفراء او الحمراء خارج رؤية السيارة الزرقاء وتسمى هذه الحالة بالنقطة العمياء. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q689 — MEDIUM [APPLYABLE]

- Question: في الصورة التي امامك يجب على المركبة الصفراء:
- Choices: [0] التوقف للافساح للشاحنة بالالتفاف | [1] الالتفاف إلى اليمين.
- Proposed: التوقف للافساح للشاحنة بالالتفاف (index 0)
- Confidence: medium
- Applied: false
- Applyable: true
- Sources: morortest, alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q690 — CONFLICT

- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2.
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q691 — CONFLICT

- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2.
- Proposed: n/a (index n/a)
- Confidence: high
- Applied: false
- Applyable: false
- Sources: morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, morortest, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah, alqemah
- Evidence: Keyed matches disagree on indexes: 0, 1
- Explanation: Reliable sources/candidates disagree on the correct answer.

### Q692 — MEDIUM

- Question: في الصورة التي امامك يجب على المركبة رقم ( 1 )اخذ اقصى اليمين:
- Choices: [0] نعم | [1] لا
- Proposed: نعم (index 0)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven; yes/no + image: text-only insufficient
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q693 — NO_MATCH

- Question: في الصورة التي امامك من يتصرف بشكل خاطئ:
- Choices: [0] سائق المركبة | [1] المشاة. | [2] أ+ب
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q694 — MEDIUM

- Question: في الصورة التي امامك تبين شخص من ذوي الاحتياجات الخاصة يقطع الشارع فان على السائق ان:
- Choices: [0] يتجاوز عنه | [1] الاستمرار في المرور مع تنبيه الكفيف بالزامور | [2] الوقوف التام لحين مرور الشخص المقعد.
- Proposed: الوقوف التام لحين مرور الشخص المقعد. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q695 — MEDIUM

- Question: في الصورة التي امامك تبين كفيف يقطع الشارع على السائق ان:
- Choices: [0] يتجاوز عنه. | [1] الاستمرار في المرور مع تنبيه الكفيف بالزامور | [2] الوقوف التام لحين مرور الكفيف.
- Proposed: الوقوف التام لحين مرور الكفيف. (index 2)
- Confidence: medium
- Applied: false
- Applyable: false
- Sources: alqemah
- Evidence: keyed external text match exists but image identity not proven
- Explanation: MEDIUM: insufficient image/sign identity for safe apply.

### Q700 — NO_MATCH

- Question: تصرف سائق المركبة الحمراء
- Choices: [0] صحيح | [1] خاطىء
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q701 — NO_MATCH

- Question: ما قام به سائق المركبة الحمراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q702 — NO_MATCH

- Question: ما قام به سائق التكسي:
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q703 — NO_MATCH

- Question: ما قام به سائق المركبة الحمراء :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q704 — NO_MATCH

- Question: ما قام به سائق المركبة الحمراء:
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q705 — NO_MATCH

- Question: المسار الذي سلكه سائق المركبة للانتقال من النقطة (1) الى النقطة (2)
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q706 — NO_MATCH

- Question: ما قام به سائق المركبة الحمراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q707 — NO_MATCH

- Question: ما قام به سائق المركبة الحمراء :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q708 — NO_MATCH

- Question: تصرف سائق المركبة الحمراء صحيح:
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q709 — NO_MATCH

- Question: تصرف سائق المركبة البيضاء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q710 — NO_MATCH

- Question: تصرف سائق التكسي صحيح
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q711 — NO_MATCH

- Question: تصرف سائق المركبة الحمراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q712 — NO_MATCH

- Question: ما قام به سائق المركبة الصفراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q713 — NO_MATCH

- Question: تصرف سائق المركبة الحمراء :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q714 — NO_MATCH

- Question: تصرف سائق المركبة الحمراء :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q715 — NO_MATCH

- Question: تصرف سائق المركبة الحمراء بشكل :
- Choices: [0] صحيح لانه سار في مسرب التسارع | [1] خاطئ لانه تعدى على اولوية السيارة البيضاء
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q716 — NO_MATCH

- Question: ما قام به سائق المركبة الحمراء يعتبر تصرف :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q717 — NO_MATCH

- Question: تصرف سائق المركبة الحمراء بشكل
- Choices: [0] صحيح | [1] خاطئ لان الاولوية للحافلة ثم له ثم للدراجة
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q718 — NO_MATCH

- Question: ما قام به سائق المركبة الحمراء يعتبر تصرف
- Choices: [0] خاطئ لانه لم يلتزم بشاخصة ممنوع المرور | [1] صحيح لانه لا يوجد سيارات اخرى في الشارع
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q719 — NO_MATCH

- Question: وقوف المركبة الحمراء بهذا الشكل يعتبر
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q720 — NO_MATCH

- Question: ما قام به سائق الحافلة يعتبر تصرف
- Choices: [0] صحيح لانه الاكبر حجماً | [1] خاطيء لان الاولوية ليست له
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q721 — NO_MATCH

- Question: إجراء سائق المركبة الحمراء يعتبر إجراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q722 — NO_MATCH

- Question: اجراء سائق المركبة الحمراء يعتبر اجراء :
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q723 — NO_MATCH

- Question: اجراء سائق التكسي يعتبر اجراء
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q724 — NO_MATCH

- Question: اجراء سائق المركبة يعتبر اجراء
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q725 — NO_MATCH

- Question: تصرف صاحب السيارة الزرقاء يعتبر تصرف:
- Choices: [0] صحيح | [1] خاطئ لوجود شاخصة منع التجاوز
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q726 — NO_MATCH

- Question: يعتبر تصرف سائق السيارة الزرقاء تصرف
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q727 — NO_MATCH

- Question: يعتبر تجاوز السيارة الزرقاء تجاوزاً
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q728 — NO_MATCH

- Question: يعتبر تجاوز السيارة الزرقاء تجاوزاً:
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q729 — NO_MATCH

- Question: اي سيارة من السيارات التالية يعتبر تصرفها تصرف خاطئ
- Choices: [0] الزرقاء | [1] الحمراء | [2] كلاهما
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q730 — NO_MATCH

- Question: يعتبر تصرف سائق السيارة الزرقاء تصرف
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q731 — NO_MATCH

- Question: يعتبر تصرف سائق السيارة الخضراء :
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q732 — NO_MATCH

- Question: يعتبر تجاوز السيارة الخضراء تجاوز
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q733 — NO_MATCH

- Question: تجاوز السيارة الحمراء يعتبر تجاوز
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q735 — NO_MATCH

- Question: تجاوز السيارة الزرقاء يعتبر تجاوز:
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q736 — NO_MATCH

- Question: تصرف سائق السيارة الحمراء يعتبر تصرف :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q737 — NO_MATCH

- Question: تصرف سائق السيارة الحمراء يعتبر تصرف :
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q738 — NO_MATCH

- Question: يعتبر تصرف سائق السيارة الحمراء في اعطاء الاولوية للسيارة الزرقاء تصرف
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q739 — NO_MATCH

- Question: اي من السيارات التالية تصرفت بشكل صحيح عند ممر المشاة
- Choices: [0] السوداء | [1] البيضاء
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q740 — NO_MATCH

- Question: تكون الاولوية عند ممرات المشاة بدون وجود اشارة مرور
- Choices: [0] للسيارات | [1] للمشاة
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q741 — NO_MATCH

- Question: يعتبر تصرف سائق السيارة الزرقاء تصرف
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q742 — NO_MATCH

- Question: يعتبر تصرف سائق السيارة السوداء
- Choices: [0] صحيح | [1] خاطيء
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q743 — NO_MATCH

- Question: يعتبر تصرف سائق السيارة السوداء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q744 — NO_MATCH

- Question: ما قام به سائق السيارة الحمراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q745 — NO_MATCH

- Question: ما قام به سائق السيارة الحمراء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q746 — NO_MATCH

- Question: تصرف السيارة الخضراء يعتبر تصرف
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q747 — NO_MATCH

- Question: تصرف السيارتين التاليتين للخروج من الدوار يعتبر تصرف
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q748 — NO_MATCH

- Question: يعتبر تصرف سائق السيارة التالية تصرف
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q749 — NO_MATCH

- Question: يعتبر تصرف سائق السيارة:
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q750 — NO_MATCH

- Question: ما قام به سائق السيارة البيضاء
- Choices: [0] صحيح | [1] خاطئ
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

### Q752 — NO_MATCH

- Question: قام السائق بفحص نسبة الزيت في سيارته فوجده كالتالي
- Choices: [0] نسبة الزيت في السيارة مناسبة | [1] يجب زيادة نسبة الزيت في السيارة | [2] يجب تقليل الزيت في السيارة
- Proposed: n/a (index n/a)
- Confidence: none
- Applied: false
- Applyable: false
- Sources: none
- Evidence: No exact deepNorm question + answer-set match with explicit key
- Explanation: No reliable keyed identity found.

