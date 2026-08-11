# Conflicting Answer Resolution

Generated: 2026-08-11T15:23:07.604Z

## Summary

- Total conflicts: **30**
- Resolved with strong evidence: **19**
- Still unresolved: **2**
- Invalid matches: **9**

## Methodology

- Loaded the 30 status=conflicting rows from tools/external_answer_key_audit.json.
- Re-parsed alqemah + trainingdriving HTML to list keyed candidates sharing question stem and answer-text set.
- Recovered our question screenshots from trainingdriving when available (same Screenshot-*.jpg filenames referenced by our bank).
- Visually compared our screenshot to each alqemah candidate image; accepted a resolution only when pictogram/scene uniquely matched one candidate AND that candidate has exactly one quizOptions correct flag.
- trainingdriving never provides a public answer key in live HTML — it is an image/source-identity aid only.
- Priority-scene questions without recoverable unique images were classified INVALID_MATCH (stem collisions across many different scenes).
- No modifications were made to data/questions.js, app.js, or styles.css.

## Classifications

- **RESOLVED**: unique visual identity to one alqemah keyed question + single correct flag.
- **UNRESOLVED**: real ambiguity; evidence insufficient to choose without guessing.
- **INVALID_MATCH**: supposed Source A/B are different external questions sharing stem/answers; not uniquely our question.

### Question ID 157 — RESOLVED

- Question text: هذه الشاخصة التحذيرية تعني
- Image filename / mediaId: Screenshot-2023-03-06-222511.jpg / 2316
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-222511.jpg (recovered: true)

Answer choices:

0. ID 477 — "منطقة جبلية"
1. ID 478 — "رياح شديدة من اليمين."
2. ID 479 — "رياح شديدة من اليسار."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 203
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/41.jpg
- Suggested answer: index 2 — "رياح شديدة من اليسار."
- quizOptions correct answer id: 665

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 206
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/42.jpg
- Suggested answer: index 1 — "رياح شديدة من اليمين."
- quizOptions correct answer id: 677

**Recommended answer (NOT applied):** index **2** — "رياح شديدة من اليسار." (alqemah external id 203)

Evidence:

- Our trainingdriving image shows windsock pole on the LEFT, sock extending RIGHT (same orientation as alqemah 203 / 41.jpg).
- alqemah quizOptions for question 203 marks answer id 665 = "رياح شديدة من اليسار." as "1".
- Competing alqemah 206 / 42.jpg has the mirrored windsock (pole RIGHT) and keys "رياح شديدة من اليمين" — different pictogram, not our image.
- trainingdriving exposes the matching screenshot but strips keys (quizOptions=[]).

### Question ID 156 — RESOLVED

- Question text: هذه الشاخصة التحذيرية تعني :
- Image filename / mediaId: Screenshot-2023-03-06-222251.jpg / 2314
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-222251.jpg (recovered: true)

Answer choices:

0. ID 474 — "منطقة جبلية"
1. ID 475 — "رياح شديدة من اليمين."
2. ID 476 — "رياح شديدة من اليسار"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 203
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/41.jpg
- Suggested answer: index 2 — "رياح شديدة من اليسار"
- quizOptions correct answer id: 665

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 206
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/42.jpg
- Suggested answer: index 1 — "رياح شديدة من اليمين."
- quizOptions correct answer id: 677

**Recommended answer (NOT applied):** index **1** — "رياح شديدة من اليمين." (alqemah external id 206)

Evidence:

- Our trainingdriving image shows windsock pole on the RIGHT, sock extending LEFT (same orientation as alqemah 206 / 42.jpg).
- alqemah quizOptions for question 206 marks "رياح شديدة من اليمين." as correct.
- Competing alqemah 203 is the mirrored left-side wind sign — not our image.

### Question ID 147 — RESOLVED

- Question text: هذه الشاخصة التحذيرية تعني
- Image filename / mediaId: Screenshot-2023-03-06-045952.jpg / 2306
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-045952.jpg (recovered: true)

Answer choices:

0. ID 447 — "طريق خطر"
1. ID 448 — "تساقط حجارة من اليمين"
2. ID 449 — "تساقط حجارة من اليسار."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 233
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/51.jpg
- Suggested answer: index 2 — "تساقط حجارة من اليسار."
- quizOptions correct answer id: 771

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 229
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/50.jpg
- Suggested answer: index 1 — "تساقط حجارة من اليمين"
- quizOptions correct answer id: 759

**Recommended answer (NOT applied):** index **1** — "تساقط حجارة من اليمين" (alqemah external id 229)

Evidence:

- Our image shows cliff/slope on the RIGHT with rocks falling — matches alqemah 229 / 50.jpg.
- alqemah 229 keys "تساقط حجارة من اليمين".
- Competing alqemah 233 has cliff on the LEFT (different pictogram).

### Question ID 146 — RESOLVED

- Question text: هذه الشاخصة التحذيرية تعني
- Image filename / mediaId: Screenshot-2023-03-06-045817.jpg / 2305
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-045817.jpg (recovered: true)

Answer choices:

0. ID 444 — "طريق خطر."
1. ID 445 — "تساقط حجارة من اليمين."
2. ID 446 — "تساقط حجارة من اليسار"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 233
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/51.jpg
- Suggested answer: index 2 — "تساقط حجارة من اليسار"
- quizOptions correct answer id: 771

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 229
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/50.jpg
- Suggested answer: index 1 — "تساقط حجارة من اليمين."
- quizOptions correct answer id: 759

**Recommended answer (NOT applied):** index **2** — "تساقط حجارة من اليسار" (alqemah external id 233)

Evidence:

- Our image shows cliff/slope on the LEFT with rocks falling — matches alqemah 233 / 51.jpg.
- alqemah 233 keys "تساقط حجارة من اليسار".
- Competing alqemah 229 is the right-side rockfall sign.

### Question ID 142 — RESOLVED

- Question text: هذه الشاخصة التحذيرية تعني
- Image filename / mediaId: Screenshot-2023-03-06-044858.jpg / 2301
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-044858.jpg (recovered: true)

Answer choices:

0. ID 432 — "انخفاض في مستوى الطريق."
1. ID 433 — "طريق غير مستوي"
2. ID 434 — "مطب."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 247
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/55.jpg
- Suggested answer: index 1 — "طريق غير مستوي"
- quizOptions correct answer id: 805

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 250
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/56.jpg
- Suggested answer: index 2 — "مطب."
- quizOptions correct answer id: 813

**Recommended answer (NOT applied):** index **1** — "طريق غير مستوي" (alqemah external id 247)

Evidence:

- Our image shows TWO road humps (uneven road) — matches alqemah 247 / 55.jpg.
- alqemah 247 keys "طريق غير مستوي".
- Competing alqemah 250 is a SINGLE hump (مطب) — different pictogram.
- International/Jordanian convention: two humps = uneven road; one hump = speed bump.

### Question ID 141 — RESOLVED

- Question text: هذه الشاخصة التحذيرية تعني
- Image filename / mediaId: Screenshot-2023-03-06-044740-2.jpg / 4794
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/05/Screenshot-2023-03-06-044740-2.jpg (recovered: true)

Answer choices:

0. ID 429 — "انخفاض في مستوى الطريق."
1. ID 430 — "طريق غير مستوي."
2. ID 431 — "مطب."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 247
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/55.jpg
- Suggested answer: index 1 — "طريق غير مستوي."
- quizOptions correct answer id: 805

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 250
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/56.jpg
- Suggested answer: index 2 — "مطب."
- quizOptions correct answer id: 813

**Recommended answer (NOT applied):** index **2** — "مطب." (alqemah external id 250)

Evidence:

- Our image shows a SINGLE road hump — matches alqemah 250 / 56.jpg.
- alqemah 250 keys "مطب.".
- Competing alqemah 247 is the two-hump uneven-road sign.

### Question ID 139 — RESOLVED

- Question text: هذه الشاخصة التحذيرية تعني :
- Image filename / mediaId: Screenshot-2023-03-06-044500.jpg / 2298
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-044500.jpg (recovered: true)

Answer choices:

0. ID 423 — "تضيق الطريق من اليسار."
1. ID 424 — "تضيق الطريق من اليمين"
2. ID 425 — "تضيق خطر."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 258
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/59.jpg
- Suggested answer: index 0 — "تضيق الطريق من اليسار."
- quizOptions correct answer id: 834

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 256
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/58.jpg
- Suggested answer: index 1 — "تضيق الطريق من اليمين"
- quizOptions correct answer id: 828

**Recommended answer (NOT applied):** index **1** — "تضيق الطريق من اليمين" (alqemah external id 256)

Evidence:

- Our image: left edge straight, right edge tapers inward — road narrows from the RIGHT — matches alqemah 256.
- alqemah 256 keys "تضيق الطريق من اليمين".
- Competing alqemah 258 narrows from the LEFT.

### Question ID 138 — RESOLVED

- Question text: هذه الشاخصة التحذيرية تعني
- Image filename / mediaId: Screenshot-2023-03-06-044353.jpg / 2297
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-044353.jpg (recovered: true)

Answer choices:

0. ID 420 — "تضيق الطريق من اليسار"
1. ID 421 — "تضيق الطريق من اليمين"
2. ID 422 — "تضيق خطر."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 258
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/59.jpg
- Suggested answer: index 0 — "تضيق الطريق من اليسار"
- quizOptions correct answer id: 834

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 256
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/58.jpg
- Suggested answer: index 1 — "تضيق الطريق من اليمين"
- quizOptions correct answer id: 828

**Recommended answer (NOT applied):** index **0** — "تضيق الطريق من اليسار" (alqemah external id 258)

Evidence:

- Our image: right edge straight, left edge tapers inward — narrows from the LEFT — matches alqemah 258.
- alqemah 258 keys "تضيق الطريق من اليسار".
- Competing alqemah 256 narrows from the RIGHT.

### Question ID 136 — RESOLVED

- Question text: .هذه الشاخصة التحذيرية تعني
- Image filename / mediaId: Screenshot-2023-03-06-044126.jpg / 2295
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-044126.jpg (recovered: true)

Answer choices:

0. ID 414 — "مرتفع حاد."
1. ID 415 — "منحدر حاد."
2. ID 416 — "منحدر خطر"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 263
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/61.jpg
- Suggested answer: index 1 — "منحدر حاد."
- quizOptions correct answer id: 852

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 404
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/62.jpg
- Suggested answer: index 0 — "مرتفع حاد."
- quizOptions correct answer id: 1328

**Recommended answer (NOT applied):** index **1** — "منحدر حاد." (alqemah external id 263)

Evidence:

- Our image: downhill slope (high left → low right) with ٨% and downward arrow — steep descent — matches alqemah 263.
- alqemah 263 keys "منحدر حاد.".
- Competing alqemah 404 is steep ascent (١٠% upward).

### Question ID 135 — RESOLVED

- Question text: هذه الشاخصة التحذيرية تعني
- Image filename / mediaId: Screenshot-2023-03-06-044015.jpg / 2294
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-044015.jpg (recovered: true)

Answer choices:

0. ID 411 — "مرتفع حاد."
1. ID 412 — "منحدر حاد."
2. ID 413 — "منحدر خطر."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 263
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/61.jpg
- Suggested answer: index 1 — "منحدر حاد."
- quizOptions correct answer id: 852

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 404
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/62.jpg
- Suggested answer: index 0 — "مرتفع حاد."
- quizOptions correct answer id: 1328

**Recommended answer (NOT applied):** index **0** — "مرتفع حاد." (alqemah external id 404)

Evidence:

- Our image: uphill slope (low left → high right) with ١٠% and upward arrow — steep ascent — matches alqemah 404.
- alqemah 404 keys "مرتفع حاد.".
- Competing alqemah 263 is steep descent.

### Question ID 131 — RESOLVED

- Question text: هذه الشاخصة التحذيرية تعني
- Image filename / mediaId: Screenshot-2023-03-06-043525-1.jpg / 4796
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/05/Screenshot-2023-03-06-043525-1.jpg (recovered: true)

Answer choices:

0. ID 399 — "منعطف لليسار"
1. ID 400 — "منعطف لليمين"
2. ID 401 — "منعطف خطر"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 408
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/66.jpg
- Suggested answer: index 0 — "منعطف لليسار"
- quizOptions correct answer id: 1339

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 407
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/65.jpg
- Suggested answer: index 1 — "منعطف لليمين"
- quizOptions correct answer id: 1337

**Recommended answer (NOT applied):** index **0** — "منعطف لليسار" (alqemah external id 408)

Evidence:

- Our image: curved arrow bending LEFT — matches alqemah 408.
- alqemah 408 keys "منعطف لليسار".
- Competing alqemah 407 curves RIGHT.

### Question ID 257 — RESOLVED

- Question text: علامة الرصيف تعني:
- Image filename / mediaId: Screenshot-2023-03-07-042251.jpg / 2424
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-042251.jpg (recovered: true)

Answer choices:

0. ID 781 — "ممنوع الوقوف لجميع المركبات"
1. ID 782 — "الوقوف فقط للمركبات العمومية و النقل"
2. ID 783 — "لتأكيد الرؤيا فقط ."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 745
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/8-3.jpg
- Suggested answer: index 2 — "لتأكيد الرؤيا فقط ."
- quizOptions correct answer id: 2343

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 747
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/10-3.jpg
- Suggested answer: index 0 — "ممنوع الوقوف لجميع المركبات"
- quizOptions correct answer id: 2348

**Recommended answer (NOT applied):** index **2** — "لتأكيد الرؤيا فقط ." (alqemah external id 745)

Evidence:

- Our curb marking is alternating BLACK and WHITE — matches alqemah 745.
- alqemah 745 keys "لتأكيد الرؤيا فقط ." (visibility marking).
- Competing alqemah 747 is RED/WHITE curb (no-parking) — different marking.

### Question ID 255 — RESOLVED

- Question text: علامة الرصيف تعني:
- Image filename / mediaId: Screenshot-2023-03-07-041612.jpg / 2422
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-041612.jpg (recovered: true)

Answer choices:

0. ID 774 — "ممنوع الوقوف لجميع المركبات."
1. ID 775 — "الوقوف فقط للمركبات العمومية و النقل"
2. ID 776 — "لتأكيد الرؤيا فقط"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 745
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/8-3.jpg
- Suggested answer: index 2 — "لتأكيد الرؤيا فقط"
- quizOptions correct answer id: 2343

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 747
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/10-3.jpg
- Suggested answer: index 0 — "ممنوع الوقوف لجميع المركبات."
- quizOptions correct answer id: 2348

**Recommended answer (NOT applied):** index **0** — "ممنوع الوقوف لجميع المركبات." (alqemah external id 747)

Evidence:

- Our curb marking is alternating RED and WHITE — matches alqemah 747.
- alqemah 747 keys "ممنوع الوقوف لجميع المركبات.".
- Competing alqemah 745 is black/white visibility curb.

### Question ID 253 — RESOLVED

- Question text: هذه العلامة الارضيه تعني
- Image filename / mediaId: Screenshot-2023-03-07-041350.jpg / 2420
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-041350.jpg (recovered: true)

Answer choices:

0. ID 768 — "ممنوع الوقوف."
1. ID 769 — "مواقف مركبات موازية للطريق."
2. ID 770 — "مواقف مركبات بشكل زاوية على الطريق"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 751
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/14-3.jpg
- Suggested answer: index 1 — "مواقف مركبات موازية للطريق."
- quizOptions correct answer id: 2361

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 749
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/12-3.jpg
- Suggested answer: index 2 — "مواقف مركبات بشكل زاوية على الطريق"
- quizOptions correct answer id: 2356

**Recommended answer (NOT applied):** index **2** — "مواقف مركبات بشكل زاوية على الطريق" (alqemah external id 749)

Evidence:

- Our diagram shows a row of perpendicular/angled parking bays (incl. disabled symbols) matching alqemah 749.
- alqemah 749 keys "مواقف مركبات بشكل زاوية على الطريق".
- Other alqemah candidates with parallel-parking answers use different diagrams.

### Question ID 252 — UNRESOLVED

- Question text: هذه العلامة الارضيه تعني
- Image filename / mediaId: Screenshot-2023-03-07-041234.jpg / 2419
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-041234.jpg (recovered: true)

Answer choices:

0. ID 765 — "ممنوع الوقوف"
1. ID 766 — "مواقف مركبات موازية للطريق."
2. ID 767 — "مواقف مركبات بشكل زاوية على الطريق."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 751
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/14-3.jpg
- Suggested answer: index 1 — "مواقف مركبات موازية للطريق."
- quizOptions correct answer id: 2361

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 749
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/12-3.jpg
- Suggested answer: index 2 — "مواقف مركبات بشكل زاوية على الطريق."
- quizOptions correct answer id: 2356

Evidence:

- Same stem/answer family as Q251/Q253 with multiple alqemah keyed diagrams mapping to different indexes (1 vs 2).
- Could not establish a unique strong visual match between our recovered screenshot and exactly one alqemah candidate.
- Insufficient evidence to choose without guessing.

### Question ID 251 — UNRESOLVED

- Question text: هذه العلامة الارضيه تعني
- Image filename / mediaId: Screenshot-2023-03-07-041128.jpg / 2418
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-041128.jpg (recovered: true)

Answer choices:

0. ID 762 — "ممنوع الوقوف"
1. ID 763 — "مواقف مركبات موازية للطريق."
2. ID 764 — "مواقف مركبات بشكل زاوية على الطريق."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 751
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/14-3.jpg
- Suggested answer: index 1 — "مواقف مركبات موازية للطريق."
- quizOptions correct answer id: 2361

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 749
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/12-3.jpg
- Suggested answer: index 2 — "مواقف مركبات بشكل زاوية على الطريق."
- quizOptions correct answer id: 2356

Evidence:

- Answer choices are parking-marking texts, and alqemah offers multiple keyed candidates (parallel vs angled) with different images.
- Downloaded trainingdriving screenshot for this ID did not yield a clear unique visual match to a single alqemah parking diagram with strong confidence (candidate images/parser association ambiguous).
- trainingdriving exposes no answer key. No official unique image identity established.

### Question ID 230 — RESOLVED

- Question text: هذه الشاخصة الارشادية تعني
- Image filename / mediaId: Screenshot-2023-03-07-032220.jpg / 2387
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-032220.jpg (recovered: true)

Answer choices:

0. ID 698 — "طريق رئيسي."
1. ID 699 — "نهاية الاوتوستراد."
2. ID 700 — "بداية الاوتوستراد"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 773
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/38-3.jpg
- Suggested answer: index 2 — "بداية الاوتوستراد"
- quizOptions correct answer id: 2429

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 772
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/37-3.jpg
- Suggested answer: index 1 — "نهاية الاوتوستراد."
- quizOptions correct answer id: 2425

**Recommended answer (NOT applied):** index **1** — "نهاية الاوتوستراد." (alqemah external id 772)

Evidence:

- Our image is the blue motorway symbol with a RED diagonal cancellation slash — end of motorway — matches alqemah 772.
- alqemah 772 keys "نهاية الاوتوستراد.".
- Competing alqemah 773 is start-of-motorway (no red slash).

### Question ID 229 — RESOLVED

- Question text: هذه الشاخصة الارشادية تعني
- Image filename / mediaId: Screenshot-2023-03-07-032053.jpg / 2386
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-032053.jpg (recovered: true)

Answer choices:

0. ID 695 — "طريق رئيسي."
1. ID 696 — "نهاية الاوتوستراد"
2. ID 697 — "بداية الاوتوستراد"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 773
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/38-3.jpg
- Suggested answer: index 2 — "بداية الاوتوستراد"
- quizOptions correct answer id: 2429

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 772
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/37-3.jpg
- Suggested answer: index 1 — "نهاية الاوتوستراد"
- quizOptions correct answer id: 2425

**Recommended answer (NOT applied):** index **2** — "بداية الاوتوستراد" (alqemah external id 773)

Evidence:

- Our image is the blue motorway symbol WITHOUT cancellation slash — start of motorway — matches alqemah 773.
- alqemah 773 keys "بداية الاوتوستراد".
- Competing alqemah 772 is end-of-motorway.

### Question ID 203 — RESOLVED

- Question text: هذه الشاخصة تعني
- Image filename / mediaId: Screenshot-2023-03-07-024232.jpg / 2361
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-024232.jpg (recovered: true)

Answer choices:

0. ID 616 — "ممنوع التجاوز."
1. ID 617 — "نهاية منطقة منع التجاوز"
2. ID 618 — "ممنوع التجاوز للشاحنات."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 474
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/7-2.jpg
- Suggested answer: index 0 — "ممنوع التجاوز."
- quizOptions correct answer id: 1526

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 798
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/65-3.jpg
- Suggested answer: index 2 — "ممنوع التجاوز للشاحنات."
- quizOptions correct answer id: 2505

**Recommended answer (NOT applied):** index **2** — "ممنوع التجاوز للشاحنات." (alqemah external id 798)

Evidence:

- Our sign shows a RED TRUCK beside a black car (truck overtaking prohibition) — matches alqemah 798.
- alqemah 798 keys "ممنوع التجاوز للشاحنات.".
- Competing alqemah 474 is general no-overtaking (two cars, left car red) — different pictogram.

### Question ID 600 — INVALID_MATCH

- Question text: في الصورة التي امامك تكون الاولوية:
- Image filename / mediaId: Screenshot-2023-03-08-032215.jpg / n/a
- trainingdriving image URL: n/a (recovered: false)

Answer choices:

0. ID 2560 — "للمركبة رقم 1."
1. ID 2561 — "للمركبة رقم 2."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 978
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/69-1.jpg
- Suggested answer: index 1 — "للمركبة رقم 2."
- quizOptions correct answer id: 2989

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 981
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/72-1.jpg
- Suggested answer: index 0 — "للمركبة رقم 1."
- quizOptions correct answer id: 2994

Evidence:

- Priority scenario stem "في الصورة التي امامك تكون الاولوية" matches many alqemah questions (978–988…) with different scene images and opposite keys (مركبة 1 vs 2). Our local/trainingdriving screenshot for this ID was not recoverable from scraped HTML; without the scene image, no candidate is the same question.

### Question ID 601 — INVALID_MATCH

- Question text: في الصورة التي امامك تكون الاولوية:
- Image filename / mediaId: Screenshot-2023-03-08-032112.jpg / n/a
- trainingdriving image URL: n/a (recovered: false)

Answer choices:

0. ID 2562 — "للمركبة رقم 1."
1. ID 2563 — "للمركبة رقم 2"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 978
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/69-1.jpg
- Suggested answer: index 1 — "للمركبة رقم 2"
- quizOptions correct answer id: 2989

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 981
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/72-1.jpg
- Suggested answer: index 0 — "للمركبة رقم 1."
- quizOptions correct answer id: 2994

Evidence:

- Same colliding priority stem + نعم/لا-style vehicle-number answers across many different alqemah scene images; our screenshot not recovered. Not a single-question conflict — invalid multi-match.

### Question ID 602 — INVALID_MATCH

- Question text: في الصورة التي امامك تكون الاولوية
- Image filename / mediaId: Screenshot-2023-03-08-032015.jpg / n/a
- trainingdriving image URL: n/a (recovered: false)

Answer choices:

0. ID 2564 — "للمركبة رقم 1."
1. ID 2565 — "للمركبة رقم 2"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 978
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/69-1.jpg
- Suggested answer: index 1 — "للمركبة رقم 2"
- quizOptions correct answer id: 2989

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 981
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/72-1.jpg
- Suggested answer: index 0 — "للمركبة رقم 1."
- quizOptions correct answer id: 2994

Evidence:

- Same as 600/601 — stem collision across distinct priority diagrams; no unique image identity.

### Question ID 603 — INVALID_MATCH

- Question text: في الصورة التي امامك تكون الاولوية:
- Image filename / mediaId: Screenshot-2023-03-08-031827-1.jpg / n/a
- trainingdriving image URL: n/a (recovered: false)

Answer choices:

0. ID 2566 — "للمركبة رقم 1."
1. ID 2567 — "للمركبة رقم 2"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 978
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/69-1.jpg
- Suggested answer: index 1 — "للمركبة رقم 2"
- quizOptions correct answer id: 2989

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 981
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/72-1.jpg
- Suggested answer: index 0 — "للمركبة رقم 1."
- quizOptions correct answer id: 2994

Evidence:

- Same as 600/601 — stem collision across distinct priority diagrams; no unique image identity.

### Question ID 604 — INVALID_MATCH

- Question text: في الصورة التي امامك تكون الاولوية:
- Image filename / mediaId: Screenshot-2023-03-08-031717.jpg / n/a
- trainingdriving image URL: n/a (recovered: false)

Answer choices:

0. ID 2568 — "للمركبة رقم 1."
1. ID 2569 — "للمركبة رقم 2"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 978
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/69-1.jpg
- Suggested answer: index 1 — "للمركبة رقم 2"
- quizOptions correct answer id: 2989

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 981
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/72-1.jpg
- Suggested answer: index 0 — "للمركبة رقم 1."
- quizOptions correct answer id: 2994

Evidence:

- Same as 600/601 — stem collision across distinct priority diagrams; no unique image identity.

### Question ID 605 — INVALID_MATCH

- Question text: في الصورة التي امامك تكون الاولوية:
- Image filename / mediaId: Screenshot-2023-03-08-031554.jpg / n/a
- trainingdriving image URL: n/a (recovered: false)

Answer choices:

0. ID 2570 — "للمركبة رقم 1."
1. ID 2571 — "للمركبة رقم 2"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 978
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/69-1.jpg
- Suggested answer: index 1 — "للمركبة رقم 2"
- quizOptions correct answer id: 2989

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 981
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/72-1.jpg
- Suggested answer: index 0 — "للمركبة رقم 1."
- quizOptions correct answer id: 2994

Evidence:

- Same as 600/601 — stem collision across distinct priority diagrams; no unique image identity.

### Question ID 606 — INVALID_MATCH

- Question text: في الصورة التي امامك تكون الاولوية:
- Image filename / mediaId: Screenshot-2023-03-08-031443.jpg / n/a
- trainingdriving image URL: n/a (recovered: false)

Answer choices:

0. ID 2572 — "للمركبة رقم 1."
1. ID 2573 — "للمركبة رقم 2"

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 978
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/69-1.jpg
- Suggested answer: index 1 — "للمركبة رقم 2"
- quizOptions correct answer id: 2989

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 981
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/72-1.jpg
- Suggested answer: index 0 — "للمركبة رقم 1."
- quizOptions correct answer id: 2994

Evidence:

- Same as 600/601 — stem collision across distinct priority diagrams; no unique image identity.

### Question ID 653 — RESOLVED

- Question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Image filename / mediaId: Screenshot-2023-03-06-045408-1.jpg / n/a
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/05/Screenshot-2023-03-06-045408-1.jpg (recovered: true)

Answer choices:

0. ID 2712 — "تخفيض سرعة مركبتك لكي تستطيع اجتياز هذا الانخفاض بأمان."
1. ID 2713 — "تخفيض سرعة مركبتك، لكي تستطيع اجتياز المطب بأمان."
2. ID 2714 — "زيادة سرعة مركبتك، لكي تستطيع اجتياز المطب بأمان."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 942
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/32-4.jpg
- Suggested answer: index 1 — "تخفيض سرعة مركبتك، لكي تستطيع اجتياز المطب بأمان."
- quizOptions correct answer id: 2903

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 941
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/31-1.jpg
- Suggested answer: index 0 — "تخفيض سرعة مركبتك لكي تستطيع اجتياز هذا الانخفاض بأمان."
- quizOptions correct answer id: 2899

**Recommended answer (NOT applied):** index **0** — "تخفيض سرعة مركبتك لكي تستطيع اجتياز هذا الانخفاض بأمان." (alqemah external id 941)

Evidence:

- Our warning sign shows a DIP (downward hollow), not a hump — matches alqemah 941.
- alqemah 941 keys the dip-related action answer.
- Competing alqemah 942 is the single-hump (مطب) sign with the hump-related action.

### Question ID 654 — RESOLVED

- Question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Image filename / mediaId: Screenshot-2023-03-06-044740-2.jpg / n/a
- trainingdriving image URL: https://trainingdriving.com/wp-content/uploads/2023/05/Screenshot-2023-03-06-044740-2.jpg (recovered: true)

Answer choices:

0. ID 2715 — "تخفيض سرعة مركبتك لكي تستطيع اجتياز هذا الانخفاض بأمان."
1. ID 2716 — "تخفيض سرعة مركبتك، لكي تستطيع اجتياز المطب بأمان"
2. ID 2717 — "زيادة سرعة مركبتك، لكي تستطيع اجتياز المطب بأمان."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 942
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/32-4.jpg
- Suggested answer: index 1 — "تخفيض سرعة مركبتك، لكي تستطيع اجتياز المطب بأمان"
- quizOptions correct answer id: 2903

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 941
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/31-1.jpg
- Suggested answer: index 0 — "تخفيض سرعة مركبتك لكي تستطيع اجتياز هذا الانخفاض بأمان."
- quizOptions correct answer id: 2899

**Recommended answer (NOT applied):** index **1** — "تخفيض سرعة مركبتك، لكي تستطيع اجتياز المطب بأمان" (alqemah external id 942)

Evidence:

- Our warning sign shows a SINGLE HUMP (مطب) — matches alqemah 942.
- alqemah 942 keys the hump-related action answer.
- Competing alqemah 941 is the dip sign.
- Note: same screenshot filename family as Q141 (مطب identification); action question uses matching pictogram.

### Question ID 690 — INVALID_MATCH

- Question text: في الصورة التي امامك تكون الاولوية:
- Image filename / mediaId: Screenshot-2023-03-08-032551.jpg / n/a
- trainingdriving image URL: n/a (recovered: false)

Answer choices:

0. ID 2801 — "للمركبة رقم 1."
1. ID 2802 — "للمركبة رقم 2."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 978
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/69-1.jpg
- Suggested answer: index 1 — "للمركبة رقم 2."
- quizOptions correct answer id: 2989

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 981
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/72-1.jpg
- Suggested answer: index 0 — "للمركبة رقم 1."
- quizOptions correct answer id: 2994

Evidence:

- Same colliding priority stem family; screenshot not in scraped trainingdriving page; multiple alqemah scenes disagree. Invalid match set.

### Question ID 691 — INVALID_MATCH

- Question text: في الصورة التي امامك تكون الاولوية:
- Image filename / mediaId: Screenshot-2023-03-08-032456.jpg / n/a
- trainingdriving image URL: n/a (recovered: false)

Answer choices:

0. ID 2803 — "للمركبة رقم 1."
1. ID 2804 — "للمركبة رقم 2."

**Source A** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 978
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/69-1.jpg
- Suggested answer: index 1 — "للمركبة رقم 2."
- quizOptions correct answer id: 2989

**Source B** (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)

- External Q id: 981
- External image: https://alqemahdriving.com/wp-content/uploads/2023/06/72-1.jpg
- Suggested answer: index 0 — "للمركبة رقم 1."
- quizOptions correct answer id: 2994

Evidence:

- Same colliding priority stem family; screenshot not in scraped trainingdriving page; multiple alqemah scenes disagree. Invalid match set.

## Final counts

Total conflicts: 30
Resolved with strong evidence: 19
Still unresolved: 2
Invalid matches: 9
