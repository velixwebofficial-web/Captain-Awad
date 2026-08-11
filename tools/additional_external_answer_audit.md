# Additional External Answer Audit

Generated: 2026-08-11T15:43:54.383Z

## Summary

- Current verified questions: **253**
- Remaining without answer key: **400**
- STRONG matches: **8**
- MEDIUM matches: **43**
- CONFLICTS: **11**
- NO MATCH: **338**

### Source availability

```json
{
  "morortestQuestions": 451,
  "morortestKeyed": 451,
  "alqemahQuestionsParsed": 703,
  "alqemahKeyed": 703,
  "trainingdrivingQuestionsParsed": 299,
  "trainingdrivingKeyed": 0,
  "sewaqaAvailable": false,
  "sewaqaNote": "sewaqa.com currently returns a redirect stub to /lander (no question bank HTML/JSON available in this audit)."
}
```

### Cross-check (STRONG only, morortest vs alqemah)

```json
{
  "agree": 0,
  "disagree": 0
}
```

## Methodology

- Audited remaining questions with zero correct:true flags only (did not modify verified keys).
- morortest.com: downloaded /api/offline/country/jo package (451 questions) containing correct_answer letters a–d.
- alqemahdriving.com: reused scraped Quiz Maker HTML; keys from window.quizOptions_* question_answer maps.
- trainingdriving.com: reused scraped HTML for identity/images only (keys stripped in live page).
- sewaqa.com: unavailable — HTML is a redirect stub to /lander; no question bank extracted.
- STRONG requires near/exact question text + same answer texts in the same order (equal option count) + explicit external correct + unambiguous mapping. Image basename may also elevate an order-differing set match to STRONG.
- MEDIUM is limited to weaker-but-ordered cases (e.g. yes/no without image, or option-count mismatch with otherwise ordered answers). Answer-set-only matches without image are NO_MATCH.
- CONFLICT when multiple STRONG (or MEDIUM) candidates map to different answer indexes.
- Question numbers alone never used as identity.
- No modifications to data/questions.js, app.js, or styles.css.

## STRONG matches (eligible for later apply after review)

### Question ID 172

- Our question: من أولويات المرور للمشاة:
- External source: https://morortest.com/questions/jo
- Matched external id: 7078
- External correct: **جميع ما ذكر.** (index 3)
- Confidence: STRONG
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - mapped correct by same-order index

Our answers:

0. ذوي الاحتياجات الخاصة او للكفيف الذي يحمل عصا بيضاء
1. عند وجود اشارة ضوئية حمراء متقطعة او صفراء متقطعة او شاخصة قف على تقاطع الطرق
2. عندما تكون الاشارة الضوئية الخاصة بمرور المشاة خضراء
3. جميع ما ذكر. ← EXTERNAL CORRECT

### Question ID 158

- Our question: هذه الشاخصة التحذيرية تعني :
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Matched external id: 200
- External correct: **طريق ذو اتجاهين** (index 1)
- Confidence: STRONG
- Evidence:
  - exact normalized question text
  - identical normalized answer text set (order differs)
  - identical image basename
  - mapped correct by unique answer text
  - order differed but image basename + answer set uniquely identify

Our answers:

0. طريق مفصول.
1. طريق ذو اتجاهين ← EXTERNAL CORRECT
2. أمامك طريق مفصول بجزيرة وسطية.

### Question ID 32

- Our question: من العوامل التي تتأثر فيها مسافة وقوف المركبة :
- External source: https://morortest.com/questions/jo
- Matched external id: 7081
- External correct: **جميع ما ذكر.** (index 3)
- Confidence: STRONG
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - mapped correct by same-order index

Our answers:

0. حالة الفرامل (البريكات)
1. زمن ردة فعل السائق
2. تصميم المركبة
3. جميع ما ذكر. ← EXTERNAL CORRECT

### Question ID 12

- Our question: من الاسباب الرئيسية لوقوع الحوادث المرورية :
- External source: https://morortest.com/questions/jo
- Matched external id: 7093
- External correct: **جميع ما ذكر.** (index 3)
- Confidence: STRONG
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - mapped correct by same-order index

Our answers:

0. عدم الانتباه .
1. خلل فني في المركبة
2. اساليب خاطئة اثناء السوق.
3. جميع ما ذكر. ← EXTERNAL CORRECT

### Question ID 301

- Our question: يمتلك المشاة حق الاولوية عند
- External source: https://morortest.com/questions/jo
- Matched external id: 7076
- External correct: **جميع ما ذكر** (index 3)
- Confidence: STRONG
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - mapped correct by same-order index

Our answers:

0. اجتياز الممرات المخصصة لهم
1. عند دخول المدرسة او الخروج منها.
2. اعطاء شرطي المرور الاولوية للمشاة
3. جميع ما ذكر ← EXTERNAL CORRECT

### Question ID 272

- Our question: المركبة ذات الاستعمال الخاص هي:
- External source: https://morortest.com/questions/jo
- Matched external id: 7061
- External correct: **جميع ما ذكر** (index 3)
- Confidence: STRONG
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - mapped correct by same-order index

Our answers:

0. مركبة النقل .
1. مركبة الرفع.
2. مركبة جر.
3. جميع ما ذكر ← EXTERNAL CORRECT

### Question ID 508

- Our question: وظيفة القابض (الكلتش)
- External source: https://morortest.com/questions/jo
- Matched external id: 7038
- External correct: **نقل القوة من المحرك الى صندوق التروس أو فصلها عند الحاجة** (index 0)
- Confidence: STRONG
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - mapped correct by same-order index

Our answers:

0. نقل القوة من المحرك الى صندوق التروس أو فصلها عند الحاجة ← EXTERNAL CORRECT
1. نقل القوة من صندوق التروس الى المحرك أو فصلها عند الحاجة
2. نقل القوة من المحرك الى صندوق التروس دون فصلها حتى عند الحاجة

### Question ID 696

- Our question: في الصورة التي امامك تبين الظروف الجوية الغير ملائمة لوجود الضباب و الامطار فعلى السائق ان:
- External source: https://morortest.com/questions/jo
- Matched external id: 7132
- External correct: **أ + ب** (index 3)
- Confidence: STRONG
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - mapped correct by same-order index

Our answers:

0. يخفف السرعة.
1. اعطاء المزيد من الوقت عندما يقترب من ممر المشاة
2. يتابع المسير في نفس السرعة.
3. أ + ب ← EXTERNAL CORRECT

## MEDIUM matches

### Question ID 121

- Question: .توضع هذه الاشارة على المسارب ,وتسمح بالمرور للمسرب الموضوعة عليه :
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 120

- Question: توضع هذه الاشارة على مسارب الطرق وتمنع المرور في المسرب الموضوعه عليه
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 119

- Question: اللون الاخضر المتقطع للمشاة في الاشارات الضوئية يعني أن الاشارة على وشك التحول إلى الاحمر ،وهنا لا يجوز للمشاة المرور الا إذا كانوا بداخل ممر المشاة ، ويجب أن يكملوا طريقهم إلى الجانب الاخر
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 117

- Question: اللون الاحمر في الاشارة الضوئية للمشاة يعني منع المشاة من عبور الطريق
- Source: https://morortest.com/questions/jo
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 114

- Question: في الاشارات الضوئية ممكن أن تستبدل الاوان بأسهم من نفس اللون لكن على خلفية سوداء اللون ، وعندما تضيء تكون لها نفس أهمية الاشارة الضوئية العادية لكن المنع أو السماح يكون لالتجاه أو الاتجاهات المبينة بالسهم أو الاسهم .
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 113

- Question: وجود الضوء الاخضر في الاشارة الضوئية على التقاطع لا يعنى الحق في المرور اذا لم يكن التقاطع خالي من المركبات الاخرى :
- Source: https://morortest.com/questions/jo
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 112

- Question: عند ظهور اللون الاصفر في الاشارة الضوئية بعد اللون الاحمر فهذا يعنى ان الاشارة على وشك التغير للضوء الاخضر و عليك الاستعداد للمسير.
- Source: https://morortest.com/questions/jo
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 111

- Question: الضوء الاحمر في الاشارة الضوئية يعني ممنوع المرور وعلى المركبات الوقوف قبل خط التوقف إن وجد :
- Source: https://morortest.com/questions/jo
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 83

- Question: تحميل الركاب بهذه الطريقة صحيح
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 42

- Question: .يمكن زيادة مسافة الامان بين المركبات إلى ثالث ثوان بدلاً من ثانيتين في ظروف القيادة غير الملائمة :
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 41

- Question: مسافة الامان تختلف باختالف أحجام المركبات :
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 40

- Question: الشيء الجيد في " قاعدة الثانيتين" هي انها تساعد على الاحتفاظ بمسافة أمان كافية :
- Source: https://morortest.com/questions/jo
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 38

- Question: مسافة الوقوف للمركبات الثقيلة كالشاحنات والحافلات تكون اقل منها بالنسبة للمركبات الصغيرة.
- Source: https://morortest.com/questions/jo
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 37

- Question: مسافة الوقوف للمركبات الكبيرة كالشاحنات والحافلات تكون أكثر منها بالنسبة للمركبات الصغيرة.
- Source: https://morortest.com/questions/jo
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 36

- Question: .تكون مسافة الوقوف اكبر في حالة كانت الطريق جافة.
- Source: https://morortest.com/questions/jo
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 33

- Question: يجب على السائق ترك مسافة أمان بينه وبين المركبة الموجودة أمامه مباشرة بحيث تكون كافية عند تطبيق قاعدة الثانيتين في الظروف الجوية الجيدة (السطح الجاف) :
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 27

- Question: .يجب أعطاء جميع راكبي الدراجات الهوائية مسافات الامان الكافية عند الاقترب منهم
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 25

- Question: إن مستخدمي احزمة الامان يصابون بإصابات أخف وأقل خطورة من الذين لا يستخدمونها :
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 21

- Question: من الادوية التي تؤثر على القيادة بعض أقراص الحمية الغذائية :
- Source: https://morortest.com/questions/jo
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 6

- Question: تزداد احتمالات الشعور بالارهاق كلما زادت ساعات القيادة:
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 4

- Question: يعتبر شرود الذهن اثناء القيادة من اكثر الاسباب المؤدية الرتكاب الحوادث المرورية:
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 302

- Question: يعطى المشاة حق المرور عند مباشرتهم بقطع الطريق على التقاطعات التي لا تحكمها اشارات ضوئية او شواخص مرورية
- Source: https://morortest.com/questions/jo
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 266

- Question: تتناسب الازرار مع الخطوط المستخدمة عليها:
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 263

- Question: لا يوجد علامات أرضية تسمى خطوط الحواف
- Source: https://morortest.com/questions/jo
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 262

- Question: لا يوجد علامات أرضية تسمى خطوط الطول
- Source: https://morortest.com/questions/jo
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 259

- Question: تقتصر وظائف العلامات الارضية على الوظائف الارشادية فقط.
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 258

- Question: تقتصر وظائف العلامات الارضية على الوظائف التنظيمية فقط.
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 923

- Question: لا تقتصر وظائف العلامات الارضية على الوظائف التنظيمية فقط
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 624

- Question: في الصورة التي امامك المركبة رقم ( 2 )تتجاوز بشكل صحيح:
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 665

- Question: إذا كانت المركبة التي امامك تقف على منحدر بدون رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:
- Source: https://morortest.com/questions/jo
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 666

- Question: إذا كانت المركبة التي امامك تقف على منحدر مع وجود رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:
- Source: https://morortest.com/questions/jo
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 667

- Question: في الصورة التي أمامك يريد السائق ان يهدء السرعة :
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 672

- Question: في الصورة التي امامك وقوف المركبات صحيح:
- Source: https://morortest.com/questions/jo
- Suggested index: 0 — نعم
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 673

- Question: في الصورة التي امامك وقوف المركبة الصفراء صحيح:
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 674

- Question: في الصورة التي امامك وقوف المركبة رقم (1) صحيح:
- Source: https://morortest.com/questions/jo
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 675

- Question: في الصورة التي امامك وقوف المركبة الصفراء صحيح ؟
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 677

- Question: في الصورة التي امامك وقوف المركبة الزرقاء صحيح:
- Source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 680

- Question: في الصورة التي امامك وقوف المركبة صحيح
- Source: https://morortest.com/questions/jo
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 683

- Question: في الصورة التي امامك المركبة الصفراء تتجاوز بشكل صحيح:
- Source: https://morortest.com/questions/jo
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 685

- Question: في الصورة التي امامك التصرف الذي تقوم به المركبة صحيح:
- Source: https://morortest.com/questions/jo
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 686

- Question: في الصورة التي امامك التصرف الذي تقوم به المركبة صحيح:
- Source: https://morortest.com/questions/jo
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 687

- Question: في الصورة التي امامك المركبة رقم ( 2 ) يعتبر تجاوزها صحيحا:
- Source: https://morortest.com/questions/jo
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

### Question ID 688

- Question: في الصورة التي امامك هل تصرف المركبة الزرقاء صحيح
- Source: https://morortest.com/questions/jo
- Suggested index: 1 — لا
- Reason: best available match is MEDIUM (weaker identity or missing image for yes/no)
- Evidence: exact normalized question text; identical normalized answer texts in same order; mapped correct by same-order index; yes/no stem without image match → MEDIUM (not auto-applicable)

## CONFLICTS

### Question ID 600

- Question: في الصورة التي امامك تكون الاولوية:
- Reason: multiple STRONG matches map to different indexes: 0, 1
- Candidates:

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 981,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 987,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 979,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 983,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  }
]
```

### Question ID 601

- Question: في الصورة التي امامك تكون الاولوية:
- Reason: multiple STRONG matches map to different indexes: 0, 1
- Candidates:

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 981,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 987,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 979,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 983,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  }
]
```

### Question ID 602

- Question: في الصورة التي امامك تكون الاولوية
- Reason: multiple STRONG matches map to different indexes: 0, 1
- Candidates:

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 981,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 987,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 979,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 983,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  }
]
```

### Question ID 603

- Question: في الصورة التي امامك تكون الاولوية:
- Reason: multiple STRONG matches map to different indexes: 0, 1
- Candidates:

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 981,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 987,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 979,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 983,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  }
]
```

### Question ID 604

- Question: في الصورة التي امامك تكون الاولوية:
- Reason: multiple STRONG matches map to different indexes: 0, 1
- Candidates:

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 981,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 987,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 979,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 983,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  }
]
```

### Question ID 605

- Question: في الصورة التي امامك تكون الاولوية:
- Reason: multiple STRONG matches map to different indexes: 0, 1
- Candidates:

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 981,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 987,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 979,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 983,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  }
]
```

### Question ID 606

- Question: في الصورة التي امامك تكون الاولوية:
- Reason: multiple STRONG matches map to different indexes: 0, 1
- Candidates:

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 981,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 987,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 979,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 983,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  }
]
```

### Question ID 670

- Question: في الصورة التي امامك يريد السائق التوجه:
- Reason: multiple STRONG matches map to different indexes: 1, 0
- Candidates:

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7152,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "الى اليسار.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7153,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "الى اليمين.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  }
]
```

### Question ID 679

- Question: في الصورة التي امامك الوقوف صحيح:
- Reason: MEDIUM candidates disagree on indexes: 1, 0
- Candidates:

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7145,
    "confidence": "MEDIUM",
    "mappedIndex": 1,
    "mappedText": "لا",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index",
      "yes/no stem without image match → MEDIUM (not auto-applicable)"
    ]
  },
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7146,
    "confidence": "MEDIUM",
    "mappedIndex": 0,
    "mappedText": "نعم",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index",
      "yes/no stem without image match → MEDIUM (not auto-applicable)"
    ]
  },
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7262,
    "confidence": "MEDIUM",
    "mappedIndex": 1,
    "mappedText": "لا",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index",
      "yes/no stem without image match → MEDIUM (not auto-applicable)"
    ]
  },
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7263,
    "confidence": "MEDIUM",
    "mappedIndex": 0,
    "mappedText": "نعم",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index",
      "yes/no stem without image match → MEDIUM (not auto-applicable)"
    ]
  }
]
```

### Question ID 690

- Question: في الصورة التي امامك تكون الاولوية:
- Reason: multiple STRONG matches map to different indexes: 0, 1
- Candidates:

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 981,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 987,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 979,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 983,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  }
]
```

### Question ID 691

- Question: في الصورة التي امامك تكون الاولوية:
- Reason: multiple STRONG matches map to different indexes: 0, 1
- Candidates:

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 981,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 987,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 979,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 983,
    "confidence": "STRONG",
    "mappedIndex": 1,
    "mappedText": "للمركبة رقم 2.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 985,
    "confidence": "STRONG",
    "mappedIndex": 0,
    "mappedText": "للمركبة رقم 1.",
    "imageMatch": false,
    "sameOrder": true,
    "qNear": true,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order",
      "mapped correct by same-order index"
    ]
  }
]
```

## NO MATCH (remaining)

Count: 338

- ID 188: هذه الشاخصة تعني
- ID 187: هذه الشاخصة تعني
- ID 186: هذه الشاخصة تعني
- ID 185: هذه الشاخصة تعني
- ID 183: هذه الشاخصة تعني
- ID 181: هذه الشاخصة تعني
- ID 180: هذه الشاخصة تعني
- ID 179: هذه الشاخصة تعني
- ID 178: هذه الشاخصة تعني
- ID 177: هذه الشاخصة تعني
- ID 176: هذه الشاخصة تعني
- ID 175: هذه الشاخصة تعني
- ID 174: هذه الشاخصة التحذيرية تعني
- ID 171: هذه الشاخصة التحذيرية تعني
- ID 170: هذه الشاخصة التحذيرية تعني
- ID 169: هذه الشاخصة التحذيرية تعني
- ID 168: هذه الشاخصة التحذيرية تعني
- ID 167: هذه الشاخصة التحذيرية تعني
- ID 166: هذه الشاخصة التحذيرية تعني
- ID 165: هذه الشاخصة التحذيرية تعني
- ID 164: هذه الشاخصة التحذيرية تعني
- ID 163: هذه الشاخصة التحذيرية تعني
- ID 162: هذه الشاخصة التحذيرية تعني
- ID 160: هذه الشاخصة التحذيرية تعني
- ID 159: هذه الشاخصة التحذيرية تعني :
- ID 155: هذه الشاخصة التحذيرية تعني:
- ID 154: هذه الشاخصة التحذيرية تعني
- ID 151: هذه الشاخصة التحذيرية تعني
- ID 150: هذه الشاخصة التحذيرية تعني
- ID 149: هذه الشاخصة التحذيرية تعني
- ID 148: هذه الشاخصة التحذيرية تعني
- ID 145: هذه الشاخصة التحذيرية تعني
- ID 144: هذه الشاخصة التحذيرية تعني
- ID 143: هذه الشاخصة التحذيرية تعني.
- ID 140: هذه الشاخصة التحذيرية تعني
- ID 137: هذه الشاخصة التحذيرية تعني
- ID 134: هذه الشاخصة التحذيرية تعني:
- ID 133: هذه الشاخصة التحذيرية تعني
- ID 132: هذه الشاخصة التحذيرية تعني :
- ID 199: هذه الشاخصة تعني
- ID 192: هذه الشاخصة تعني
- ID 197: هذه الشاخصة تعني
- ID 130: الحد الاقصى لسرعة الحافالت على الطرق الفرعية والتي يقع عليها مدارس هو :
- ID 127: الحد الاقصى لسرعة سيارات الركوب الصغيرة على الطرق الفرعية والتي يقع عليها مدارس 
- ID 125: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن خارج المدن والق
- ID 124: .الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن خارج المدن وال
- ID 123: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن داخل المدن والق
- ID 122: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن داخل المدن والق
- ID 118: اللون الاخضر للمشاة في الاشارات الضوئية يعني السماح لهم بالمسير
- ID 116: تشتمل الاشارة الضوئية الخاصه بالمشاة على:
- ID 115: .الضوء الاصفر المتقطع يسمح للسائق بالمرور بحذر شديد بعد إعطاء الاولوية للمشاة او
- ID 110: توضع إشارة المرور في الاماكن التالية:
- ID 109: الاشارة الضوئيه هي عبارة عن ادوات تحكم مروري تستخدم للسيطرة على حركة المركبات وا
- ID 108: المسرب الذي يتخذه سائق المركبة:
- ID 107: عند مشاهدة هذه الاشارة فإنه
- ID 106: عند مشاهدة هذه الاشارة فإنه:
- ID 103: على سائق المركبة المشار إليها:
- ID 102: وجود البسطات بهذا الشكل:
- ID 100: وقوف المركبة بهذه الطريقة:
- ID 99: مايقوم به المشاة
- ID 98: ما يقوم به سائق المركبة:
- ID 97: ظهور هذه الاشارة يعني:
- ID 96: ما يقوم به سائق المركبة رقم 1
- ID 95: سير المركبة (التكسي) المبينه بالصورة:
- ID 94: وجود هذه الشاخصة يعني :
- ID 93: عند رؤية هذه الشاخصة على السائق:
- ID 92: الشاخصة التحذيرية التي امامك بالصورة تعني
- ID 91: سائق المركبة المبينة في الصورة والتي وضع عليها دائرة في اللون الاحمر :
- ID 90: عند رؤية هذه الاشارة يجب عليك
- ID 89: عند رؤية الاشارة الضوئية بهذا اللون يجب عليك:
- ID 88: المركبة المبينة في الصورة :
- ID 87: تقف المركبة المبينة بالصورة
- ID 86: الخطوط البيضاء المبينة في الصورة تعني :
- ID 84: هذه الشاخصة تعني
- ID 82: عند رؤية هذه الشاخصة
- ID 81: تعتبر هذه الشاخصة من الشواخص
- ID 80: طريقة تحميل المركبة المبينة في الصورة:
- ID 79: من خلال الصورة المبينة فإن المركبة بحمولتها
- ID 78: عند وجود هذه الشاخصة فإنه يجب:
- ID 77: الخطوط الموجودة على الطريق هي
- ID 76: من خلال الشاخصة المبينة فإنه
- ID 75: عند رؤية هاتين الشاخصتين فإنه:
- ID 74: عند وجود هذه الشاخصة فإنه:
- ID 73: عند وجود هذه الشاخصة فإنه:
- ID 72: عند رؤية هذه الشاخصة فإنه:
- ID 71: عند رؤية هذه الشاخصة فإن
- ID 70: عند الاقتراب من هذه الشاخصة
- ID 69: عند رؤية هاتين الشاخصتين فإنه
- ID 68: يجب على سائقي الشاحنات:
- ID 67: عند رؤية هاتين الشاخصتين فإن
- ID 66: عند رؤية هذه الشاخصة فإنه:
- ID 65: تعتبر هذه الشواخص
- ID 64: عندما ترى هذه الشاخصة وانت تقود مركبتك فإنه يجب عليك:
- ID 63: ان توقف الباص في هذا المكان هو
- ID 61: عند وجود هذه الشاخصة يجب على المشاة
- ID 60: عند رؤيتك لهذه الشاخصة فإنة يجب عليك :
- ID 59: من خلال الصورة المبينة فإنة يجب عليك:
- ID 58: الاجراء الذي يجب أن تتخذه عند رؤية هذه الشاخصة هو:
- ID 57: عند رؤيتك لهذه الازرار فإنه :
- ID 56: عند رؤيتك لهذه الشاخصة فأنه يجب عليك :
- ID 55: تناول السوائل أثناء القيادة يؤدي إلى تشتيت انتباه السائق وبالتالي زيادة نسبة احت
- ID 54: .من الاهداف الرئيسية لرجال السير هو:
- ID 53: استخدام حزام الامان هو:
- ID 52: .استخدام حزام الامان داخل المركبة:
- ID 51: .على الراكب الجالس بجوار السائق :
- ID 50: قانون السير الاردني يلزم السائق :
- ID 49: في حالة وقوع حادث مروري فإن استخدام حزام الامان بالصورة الصحيحة يساعد على :
- ID 48: استخدام حزام الامان في المركبات:
- ID 47: حزام الامان في المركبات:
- ID 46: الوسادة الهوائية (Air bag ):
- ID 44: من وظائف الاطارات الرئيسية:
- ID 43: .من اجل الحصول على تعبئة وقود امنه يجب:
- ID 39: .ان افضل طريق لتجنب الحوادث المرورية استخدام اسلوب القيادة الوقائية المتمثل بترك
- ID 35: تكون مسافة الوقوف اقل في حالة كان الطريق مبتالا ً أو رطبا.
- ID 34: يجب على السائق ترك مسافة أمان بينه وبين المركبة الموجودة امامه مباشرة بحيث تكون 
- ID 31: من العوامل التي تتأثر فيها مسافة وقوف المركبة :
- ID 30: لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة الا تحاول المنافسة معهم على نفس الجز
- ID 29: لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة يجب عند تجاوز شاحنة او حافلة تذكر ان
- ID 28: لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة يجب :
- ID 26: .من أكثر مستخدمي الطريق المعرضون للخطر:
- ID 24: من الاجهزة المستخدمة للسالمة الوقائية لركاب المركبات :
- ID 23: تتم عملية انتفاخ الوسادة الهوائية بواسطة إشارة كهربائية تنبعث من احدى اجهزة الحس
- ID 22: .حسب قانون السير الاردني يجب ان تقل نسبة تركيز الكحول في الدم عند القيادة عن الا
- ID 20: .من الادوية التي تؤثر على القيادة بعض أدوية البرد والانفلونزا :
- ID 18: الكحول عبارة عن مادة مسكنة تؤدي الى خفض النشاط والحيوية فهي تعمل على :
- ID 17: من الناحيه العلمية الكحول عبارة عن مادة مسكنة تؤدي إلى خفض النشاط والحيوية وتؤثر
- ID 16: يجب على سائق المركبة ان يقرأ النشرة المرفقة مع الادوية التي يتناولها للتأكد من ا
- ID 15: يتم فحص نسبة الكحول في النفس من قبل رجال الشرطة بواسطة اجهزة خاصة بحيث يتم ضبط ر
- ID 14: أثبتت الابحاث والدراسات أن تجاوز السرعة المحددة ولو بشكل بسيط يمكن أن يزيد من خط
- ID 13: السرعة هي السبب الرئيسي وراء وقوع حوادث الطرق المميتة والمسببة لإلصابات ، بالاضا
- ID 11: من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة
- ID 7: من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة:
- ID 5: لتجنب الشعور بالارهاق اثناء القيادة يجب عليك كسائق اتباع ما يلي:
- ID 3: من الامور التى تساعد على تقليل مصادر شرود الذهن والتي تساعد على التقليل من إرتكا
- ID 2: قد يتسبب الشعور بالارهاق الى حادث سير:
- ID 1: من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة:
- ID 616: واحدة من الامور التي تساعد على زيادة إستهلاك البنزين:
- ID 617: عند تشغيل المركبة يوميا و قبل الانطلاق يجب :
- ID 635: المشاة هم :
- ID 634: عمق فرزات الاطار الجيدة تكون عادة 9 ملم
- ID 304: من واجبات المشاة:
- ID 300: الرخصة من الفئة الثانية (2)تصنف بأنها:
- ID 299: الرخصة من الفئة الثانية (1)تصنف بأنها:
- ID 298: الرخصة الدولية الصادرة من نادي السيارات الملكي تسمح لحاملها بقيادة مركبة
- ID 297: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- ID 296: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- ID 295: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي
- ID 294: .إذا كانت المركبه التالية يبلغ وزنها الاجمالي 19 طن فإن فئة رخصة السوق التي تؤهل
- ID 293: فئة رخصة السوق التي تؤهلك لقيادة حافلة متوسطة هي:
- ID 292: فئة رخصة السوق التي تؤهلك لقيادة سيارة التاكسي هي
- ID 290: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- ID 288: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- ID 287: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- ID 284: رخصة السوق من الفئة السابعة تصنف بأنها:
- ID 283: رخصة السوق من الفئة الخامسة تصنف بأنها:
- ID 281: رخصة السوق من الفئة الثانية ( 1+2 )تصنف بأنها:
- ID 279: المركبة الالية المصممة لاستخدامها في الاشغال الانشائية بما في ذلك الاشغال المتعل
- ID 278: مركبة النقل او الرفع او الجر الية مجهزة بمعدات ثابتة وبصورة دائمة و لا يمكن استع
- ID 277: المركبة المصممة لنقل البضائع هي:
- ID 276: المركبات المصممة لنقل الاشخاص و البضائع معا هي:
- ID 275: المركبه المصممة لنقل ما يزيد على ثلاثين راكبا هي
- ID 274: المركبه المصممة لنقل ما لا يقل عن عشرة ركاب ولا يزيد على ثلاثين راكبا بمن فيهم ا
- ID 273: السيارت المصممه لنقل ما لا يزيد على تسعة اشخاص بمن فيهم السائق تصنف من فئة :
- ID 271: مركبة الشحن مصممة لنقل :
- ID 270: مركبة النقل المشترك مصممة لنقل البضائع والاشخاص معا
- ID 269: الحافلة مصممة لنقل ما يزيد عن .......:
- ID 267: سيارة الركوب مصممة لنقل ما لا يزيد عن
- ID 265: تستخدم الازرار البيضاء للدلالة على:
- ID 264: تستخدم الازرار الصفراء للدلالة على
- ID 261: من وظائف العلامات الارضية:
- ID 260: تقتصر وظائف العلامات الارضية على الوظائف التحذيرية فقط.
- ID 254: هذه العلامة الارضيه تعني
- ID 252: هذه العلامة الارضيه تعني
- ID 251: هذه العلامة الارضيه تعني
- ID 250: هذه العلامة الارضيه تعني
- ID 249: هذه العلامة الارضيه تعني
- ID 248: هذه العلامة الارضيه تعني
- ID 247: هذه العلامة الارضيه تعني
- ID 246: هذه العلامة الارضيه تعني
- ID 245: هذه العلامة الارضيه تعني
- ID 244: هذه العلامة الارضيه تعني
- ID 243: هذه العلامة الارضيه تعني
- ID 242: هذه الشاخصة تعني:
- ID 241: تدل هذه الشاخصة على مخرج المنحدرات للطوارىء:
- ID 240: هذه الشاخصة الارشادية تعني
- ID 239: هذه الشاخصة الارشادية تعني
- ID 238: هذه الشاخصة الارشادية تعني
- ID 236: هذه الشاخصة الارشادية تعني
- ID 235: هذه الشاخصة الارشادية تعني
- ID 234: هذه الشاخصة الارشادية تعني
- ID 233: هذه الشاخصة الارشادية تعني
- ID 232: هذه ' الشاخصة ' تعني
- ID 231: هذه الشاخصة الارشادية تعني
- ID 228: هذه الشاخصة الالزامية تعني
- ID 227: هذه الشاخصة الالزامية تعني
- ID 226: هذه الشاخصة الالزامية تعني
- ID 225: هذه الشاخصة الالزامية تعني
- ID 224: هذه الشاخصة الالزامية تعني
- ID 223: هذه الشاخصة الالزامية تعني
- ID 222: هذه الشاخصة الالزامية تعني
- ID 221: هذه الشاخصة الالزامية تعني
- ID 220: هذه الشاخصة الالزامية تعني
- ID 216: هذه الشاخصة الالزامية تعني
- ID 215: هذه الشاخصة الالزامية تعني
- ID 214: هذه الشاخصة الالزامية تعني
- ID 213: هذه الشاخصة الالزامية تعني
- ID 212: هذه الشاخصة الالزامية تعني
- ID 211: هذه الشاخصة تعني
- ID 210: هذه الشاخصة تعني
- ID 208: هذه الشاخصة تعني
- ID 207: هذه الشاخصة تعني
- ID 206: هذه الشاخصة تعني
- ID 205: هذه الشاخصة تعني
- ID 204: هذه الشاخصة تعني
- ID 436: من الحالات التي يمنع التجاوز فيها:
- ID 437: من الحالات التي يمنع التجاوز فيها:
- ID 446: اذا اعطى السائق الذي يقود مركبته في الطريق أي اشارة ضوئية (غماز) فعلى كل سائق يس
- ID 462: التقاطع المتكافئ هو :
- ID 473: عند تقاطع طرق مع سكة حديد فإن الاولوية تكون:
- ID 474: في حال وجود مركبتان متقابلتان على التقاطع تقع كل منهما على يسار الاخرى وكانت احد
- ID 475: عند وجود مركبة قادمة من طريق رئيسي على تقاطع واخرى قادمة من طريق فرعي تكون الاول
- ID 477: اذا كان تقاطع الطرق غير منظم بواسطة شرطي مرور او اشارة ضوئية او شواخص او علامات 
- ID 483: على السائق عند وصوله الى تقاطع طرق منظم بواسطة شرطي مرور :
- ID 484: عند اقتراب السائق من تقاطع طرق عليه ان :
- ID 492: الضوء الاحمر المخصص للمشاة في الاشارة الضوئية يعني:
- ID 494: الضوء المخصص لعبور المشاة من خلال الاشارة الضوئية.
- ID 500: من اهداف وجود نظام التعليق:
- ID 509: من الاجزاء التي تشارك في نقل القوة من المحرك الى العجلات هي:
- ID 516: من مواصفات ماء التبريد المستخدم لتبريد المحرك:
- ID 517: من فوائد نظام التبريد:
- ID 525: عند وصول ساعة الحرارة إلى المنطقة ( H )فإنه يجب عليك:
- ID 541: تكون فرصة تجنب الاصابات الخطيرة كبيرة جدا لسائقي الدراجات إذا قاموا بإرتداء:
- ID 543: يجوز لاي فرد من افراد الشرطة اذا كانت المركبة غير مسجلة او انتهى ترخيصها لمدة تز
- ID 544: اذا حاول السائق الهرب من مكان حادث ارتكبه فإنه :
- ID 546: يجوز لاي فرد من افراد الشرطة ان يلقي القبض دون مذكرة على سائق اي مركبة إذا:
- ID 547: يعاقب السائق بالحبس مدة لا تقل عن ثلاثة أشهر ولا تزيد على ثلاث سنوات لمن ارتكب ا
- ID 549: عند قيادة المركبة من قبل سائق تحت تأثير الكحول أو أي من المؤثرات العقلية التي تف
- ID 551: من إجراءات التي تتخذ لفاقد الوعي:
- ID 555: من انواع النزيف :
- ID 566: الصدمة هي:
- ID 578: من الاصابات التي تتطلب إسعافات أولية:
- ID 597: يحظر على السائق استعمال اجهزة التنبيه الصوتية :
- ID 607: في الصور التي امامك يكون ترتيب الاولوية :
- ID 608: في الصور التي امامك تكون الاولوية :
- ID 609: في الصور التي امامك يكون ترتيب الاولوية :
- ID 610: في الصور التي امامك تكون الاولوية :
- ID 611: من الامور التي تساعد على زيادة إستهلاك البنزين:
- ID 612: ان الوصول للسرعة القصوى فور تشغيلك للمركبة يقلل من استهلاك الوقود.
- ID 615: ان وجود الرمز 155 / 13 على الاطار يعني:
- ID 616: واحدة من التالية ليست من وظيفة الاطارات
- ID 620: يجب أن تكون جميع الاطارات الاربعة في المركبة
- ID 623: تشير حركة يد الشرطي الموضحة في الصورة التي امامك الى :
- ID 625: الانحراف هو :
- ID 626: يجب ضبط المرايا :
- ID 628: الاجراء الصحيح عند اقترابك من التقاطع ورؤيتك للخط العرضي المتصل :
- ID 630: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 631: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 632: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 633: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 634: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 635: اذا رايت هذه الشاخصة فانه عليك
- ID 638: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 640: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 641: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 642: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 646: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 650: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 651: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 652: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 657: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 658: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة .
- ID 659: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 660: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- ID 662: ان سائق المركبة الحمراء لا يزعج بضوئه سائق المركبة الموجودة في الامام (الخضراء) 
- ID 663: ان الرياح التي تؤثر على المركبة اثناء عملية التجاوز كما هو مبين بالرسم
- ID 664: في حالة وقوف المركبة على مرتفع بدون رصيف يجب ان يقوم السائق بلف المقود على اليمي
- ID 668: استخدام الضوء الرباعي (الفلشر) يعني :
- ID 669: في الصورة التي امامك يريد السائق التوجه الى :
- ID 676: في الصورة التي امامك تقف المركبة الحمراء في المكان الصحيح:
- ID 678: في الصورة التي امامك الوقوف للمركبة صحيح:
- ID 682: في الصورة التي امامك هل تتجاوز المركبة الزرقاء بشكل صحيح:
- ID 684: من خلال الرسم الموضح نجد أن :
- ID 689: في الصورة التي امامك يجب على المركبة الصفراء:
- ID 692: في الصورة التي امامك يجب على المركبة رقم ( 1 )اخذ اقصى اليمين:
- ID 693: في الصورة التي امامك من يتصرف بشكل خاطئ:
- ID 694: في الصورة التي امامك تبين شخص من ذوي الاحتياجات الخاصة يقطع الشارع فان على السائ
- ID 695: في الصورة التي امامك تبين كفيف يقطع الشارع على السائق ان:
- ID 700: تصرف سائق المركبة الحمراء
- ID 701: ما قام به سائق المركبة الحمراء
- ID 702: ما قام به سائق التكسي:
- ID 703: ما قام به سائق المركبة الحمراء :
- ID 704: ما قام به سائق المركبة الحمراء:
- ID 705: المسار الذي سلكه سائق المركبة للانتقال من النقطة (1) الى النقطة (2)
- ID 706: ما قام به سائق المركبة الحمراء
- ID 707: ما قام به سائق المركبة الحمراء :
- ID 708: تصرف سائق المركبة الحمراء صحيح:
- ID 709: تصرف سائق المركبة البيضاء
- ID 710: تصرف سائق التكسي صحيح
- ID 711: تصرف سائق المركبة الحمراء
- ID 712: ما قام به سائق المركبة الصفراء
- ID 713: تصرف سائق المركبة الحمراء :
- ID 714: تصرف سائق المركبة الحمراء :
- ID 715: تصرف سائق المركبة الحمراء بشكل :
- ID 716: ما قام به سائق المركبة الحمراء يعتبر تصرف :
- ID 717: تصرف سائق المركبة الحمراء بشكل
- ID 718: ما قام به سائق المركبة الحمراء يعتبر تصرف
- ID 719: وقوف المركبة الحمراء بهذا الشكل يعتبر
- ID 720: ما قام به سائق الحافلة يعتبر تصرف
- ID 721: إجراء سائق المركبة الحمراء يعتبر إجراء
- ID 722: اجراء سائق المركبة الحمراء يعتبر اجراء :
- ID 723: اجراء سائق التكسي يعتبر اجراء
- ID 724: اجراء سائق المركبة يعتبر اجراء
- ID 725: تصرف صاحب السيارة الزرقاء يعتبر تصرف:
- ID 726: يعتبر تصرف سائق السيارة الزرقاء تصرف
- ID 727: يعتبر تجاوز السيارة الزرقاء تجاوزاً
- ID 728: يعتبر تجاوز السيارة الزرقاء تجاوزاً:
- ID 729: اي سيارة من السيارات التالية يعتبر تصرفها تصرف خاطئ
- ID 730: يعتبر تصرف سائق السيارة الزرقاء تصرف
- ID 731: يعتبر تصرف سائق السيارة الخضراء :
- ID 732: يعتبر تجاوز السيارة الخضراء تجاوز
- ID 733: تجاوز السيارة الحمراء يعتبر تجاوز
- ID 735: تجاوز السيارة الزرقاء يعتبر تجاوز:
- ID 736: تصرف سائق السيارة الحمراء يعتبر تصرف :
- ID 737: تصرف سائق السيارة الحمراء يعتبر تصرف :
- ID 738: يعتبر تصرف سائق السيارة الحمراء في اعطاء الاولوية للسيارة الزرقاء تصرف
- ID 739: اي من السيارات التالية تصرفت بشكل صحيح عند ممر المشاة
- ID 740: تكون الاولوية عند ممرات المشاة بدون وجود اشارة مرور
- ID 741: يعتبر تصرف سائق السيارة الزرقاء تصرف
- ID 742: يعتبر تصرف سائق السيارة السوداء
- ID 743: يعتبر تصرف سائق السيارة السوداء
- ID 744: ما قام به سائق السيارة الحمراء
- ID 745: ما قام به سائق السيارة الحمراء
- ID 746: تصرف السيارة الخضراء يعتبر تصرف
- ID 747: تصرف السيارتين التاليتين للخروج من الدوار يعتبر تصرف
- ID 748: يعتبر تصرف سائق السيارة التالية تصرف
- ID 749: يعتبر تصرف سائق السيارة:
- ID 750: ما قام به سائق السيارة البيضاء
- ID 752: قام السائق بفحص نسبة الزيت في سيارته فوجده كالتالي

