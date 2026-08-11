# Medium Upgrade Audit

Generated: 2026-08-11T19:04:31.676Z

## Summary

- MEDIUM candidates: **43**
- Upgraded to STRONG: **12**
- Still MEDIUM: **31**
- New CONFLICTS: **0**
- INVALID: **0**

### STRONG IDs

40, 38, 37, 36, 21, 6, 302, 266, 263, 262, 259, 258

### Still MEDIUM IDs

121, 120, 119, 117, 114, 113, 112, 111, 83, 42, 41, 33, 27, 25, 4, 923, 624, 665, 666, 667, 672, 673, 674, 675, 677, 680, 683, 685, 686, 687, 688

## Methodology

- Investigated only the 43 MEDIUM rows from tools/additional_external_answer_audit.json.
- Re-matched against morortest offline JO package (keyed) and alqemah quizOptions (keyed).
- trainingdriving used for screenshot URL/basename recovery only (no public keys).
- Additional check: arabquest.net Jordan quiz page was inspected; it shows stems but does not expose extractable answer keys in static HTML.
- Additional check: downloaded trainingdriving vs alqemah images for all image MEDIUM items; 0 exact byte-hash matches.
- Arabic orthography normalization applied (hamza/taa-marbuta/alif variants) for identity only.
- Answer-order independence: if sources reverse نعم/لا, map by correct answer TEXT into our local order.
- YES/NO items are never upgraded from question-text identity alone; need dual independent keyed sources (non-image) or proven image identity.
- Image/sign/scene questions require image basename/URL/byte identity (dual text agreement alone is insufficient).
- Non-image items may upgrade to STRONG only when morortest and alqemah both have exact question + same answer-text set and agree on the same mapped correct answer.
- No modifications to data/questions.js, app.js, or styles.css. Keys were NOT applied.

## Notes

- Upgraded STRONG ids are NON-IMAGE yes/no items with dual independent keyed agreement (morortest + alqemah), including order-independent نعم/لا mapping.
- All 24 image-bearing MEDIUM items remain MEDIUM: training vs alqemah image byte-hash compare produced 0 exact matches.
- No CONFLICTS found among the 43 after mapping by answer text (earlier apparent index disagreements were order reversals of نعم/لا).
- No INVALID classifications: original MEDIUM external matches remain the same question family, just under-evidenced for STRONG.
- Keys were NOT applied to data/questions.js.

### Question ID 121 — MEDIUM

- Question: .توضع هذه الاشارة على المسارب ,وتسمح بالمرور للمسرب الموضوعة عليه :
- Image filename/mediaId: Screenshot-2023-03-06-042356.jpg / 2286
- Yes/No: true; Image-dependent: true
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: false

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 422,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- external keyed match present for exact/near question identity
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 120 — MEDIUM

- Question: توضع هذه الاشارة على مسارب الطرق وتمنع المرور في المسرب الموضوعه عليه
- Image filename/mediaId: Screenshot-2023-03-06-042229.jpg / 2285
- Yes/No: true; Image-dependent: true
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: false

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 423,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- external keyed match present for exact/near question identity
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 119 — MEDIUM

- Question: اللون الاخضر المتقطع للمشاة في الاشارات الضوئية يعني أن الاشارة على وشك التحول إلى الاحمر ،وهنا لا يجوز للمشاة المرور الا إذا كانوا بداخل ممر المشاة ، ويجب أن يكملوا طريقهم إلى الجانب الاخر
- Image filename/mediaId: Screenshot-2023-03-06-042143.jpg / 2284
- Yes/No: true; Image-dependent: true
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7372,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 424,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 117 — MEDIUM

- Question: اللون الاحمر في الاشارة الضوئية للمشاة يعني منع المشاة من عبور الطريق
- Image filename/mediaId: Screenshot-2023-03-06-041829.jpg / 2282
- Yes/No: true; Image-dependent: true
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7371,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 426,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 114 — MEDIUM

- Question: في الاشارات الضوئية ممكن أن تستبدل الاوان بأسهم من نفس اللون لكن على خلفية سوداء اللون ، وعندما تضيء تكون لها نفس أهمية الاشارة الضوئية العادية لكن المنع أو السماح يكون لالتجاه أو الاتجاهات المبينة بالسهم أو الاسهم .
- Image filename/mediaId: Screenshot-2023-03-06-041447.jpg / 2280
- Yes/No: true; Image-dependent: true
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: false

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 429,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- external keyed match present for exact/near question identity
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 113 — MEDIUM

- Question: وجود الضوء الاخضر في الاشارة الضوئية على التقاطع لا يعنى الحق في المرور اذا لم يكن التقاطع خالي من المركبات الاخرى :
- Image filename/mediaId: Screenshot-2023-03-06-040610.jpg / 2279
- Yes/No: true; Image-dependent: true
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7368,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 430,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 112 — MEDIUM

- Question: عند ظهور اللون الاصفر في الاشارة الضوئية بعد اللون الاحمر فهذا يعنى ان الاشارة على وشك التغير للضوء الاخضر و عليك الاستعداد للمسير.
- Image filename/mediaId: Screenshot-2023-03-06-035826-2.jpg / 4805
- Yes/No: true; Image-dependent: true
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7366,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 431,
    "index": 0,
    "imageMatch": false,
    "sameOrder": false
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 111 — MEDIUM

- Question: الضوء الاحمر في الاشارة الضوئية يعني ممنوع المرور وعلى المركبات الوقوف قبل خط التوقف إن وجد :
- Image filename/mediaId: Screenshot-2023-03-06-035644-2.jpg / 4806
- Yes/No: true; Image-dependent: true
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7365,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 432,
    "index": 0,
    "imageMatch": false,
    "sameOrder": false
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 83 — MEDIUM

- Question: تحميل الركاب بهذه الطريقة صحيح
- Image filename/mediaId: Screenshot-2023-03-06-021450.jpg / 2245
- Yes/No: true; Image-dependent: true
- Proposed correct answer: لا (index 1)
- Dual-source agreement: false

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 489,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- external keyed match present for exact/near question identity
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 42 — MEDIUM

- Question: .يمكن زيادة مسافة الامان بين المركبات إلى ثالث ثوان بدلاً من ثانيتين في ظروف القيادة غير الملائمة :
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: false

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 657,
    "index": 0
  }
]
```

Evidence:

- exact question + ordered answers + single external key
- yes/no: single-source key is insufficient to upgrade without independent cross-check or extra evidence
- Near-miss only: our stem has typo "ثالث ثوان"; morortest uses "ثلاث ثوان". Not treated as exact identity, so no dual-source STRONG upgrade.

Explanation: Still MEDIUM: Near-miss only: our stem has typo "ثالث ثوان"; morortest uses "ثلاث ثوان". Not treated as exact identity, so no dual-source STRONG upgrade. Proposed candidate remains "نعم" (index 0) but is not applied.

### Question ID 41 — MEDIUM

- Question: مسافة الامان تختلف باختالف أحجام المركبات :
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: false

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 658,
    "index": 0
  }
]
```

Evidence:

- exact question + ordered answers + single external key
- yes/no: single-source key is insufficient to upgrade without independent cross-check or extra evidence
- Near-miss only: our stem has typo "باختالف"; morortest uses "باختلاف". Exact identity not established for dual upgrade.

Explanation: Still MEDIUM: Near-miss only: our stem has typo "باختالف"; morortest uses "باختلاف". Exact identity not established for dual upgrade. Proposed candidate remains "نعم" (index 0) but is not applied.

### Question ID 40 — STRONG

- Question: الشيء الجيد في " قاعدة الثانيتين" هي انها تساعد على الاحتفاظ بمسافة أمان كافية :
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7089,
    "index": 0
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 659,
    "index": 0
  }
]
```

Evidence:

- exact normalized question text on both morortest and alqemah (Arabic orthography-normalized)
- same answer-text set on both sources; mapped into our local answer order
- both independent keyed sources map to the same our-answer index 0 ("نعم")
- not image-dependent; dual independent keys satisfy upgrade (beyond yes/no text-only identity)

Explanation: Upgraded to STRONG: non-image question with exact wording/answers and independent agreement between morortest and alqemah keys.

### Question ID 38 — STRONG

- Question: مسافة الوقوف للمركبات الثقيلة كالشاحنات والحافلات تكون اقل منها بالنسبة للمركبات الصغيرة.
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7101,
    "index": 1
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 661,
    "index": 1
  }
]
```

Evidence:

- exact normalized question text on both morortest and alqemah (Arabic orthography-normalized)
- same answer-text set on both sources; mapped into our local answer order
- both independent keyed sources map to the same our-answer index 1 ("لا")
- not image-dependent; dual independent keys satisfy upgrade (beyond yes/no text-only identity)

Explanation: Upgraded to STRONG: non-image question with exact wording/answers and independent agreement between morortest and alqemah keys.

### Question ID 37 — STRONG

- Question: مسافة الوقوف للمركبات الكبيرة كالشاحنات والحافلات تكون أكثر منها بالنسبة للمركبات الصغيرة.
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7100,
    "index": 0
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 662,
    "index": 0
  }
]
```

Evidence:

- exact normalized question text on both morortest and alqemah (Arabic orthography-normalized)
- same answer-text set on both sources; mapped into our local answer order
- both independent keyed sources map to the same our-answer index 0 ("نعم")
- not image-dependent; dual independent keys satisfy upgrade (beyond yes/no text-only identity)

Explanation: Upgraded to STRONG: non-image question with exact wording/answers and independent agreement between morortest and alqemah keys.

### Question ID 36 — STRONG

- Question: .تكون مسافة الوقوف اكبر في حالة كانت الطريق جافة.
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7099,
    "index": 1
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 663,
    "index": 1
  }
]
```

Evidence:

- exact normalized question text on both morortest and alqemah (Arabic orthography-normalized)
- same answer-text set on both sources; mapped into our local answer order
- both independent keyed sources map to the same our-answer index 1 ("لا")
- not image-dependent; dual independent keys satisfy upgrade (beyond yes/no text-only identity)
- note: external answer order differed from ours on at least one source; mapping used correct answer text

Explanation: Upgraded to STRONG: non-image question with exact wording/answers and independent agreement between morortest and alqemah keys.

### Question ID 33 — MEDIUM

- Question: يجب على السائق ترك مسافة أمان بينه وبين المركبة الموجودة أمامه مباشرة بحيث تكون كافية عند تطبيق قاعدة الثانيتين في الظروف الجوية الجيدة (السطح الجاف) :
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: false

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 666,
    "index": 0
  }
]
```

Evidence:

- exact question + ordered answers + single external key
- yes/no: single-source key is insufficient to upgrade without independent cross-check or extra evidence
- Only alqemah exposes a keyed exact match; no independent morortest exact match found. Yes/no single-source rule blocks STRONG.

Explanation: Still MEDIUM: Only alqemah exposes a keyed exact match; no independent morortest exact match found. Yes/no single-source rule blocks STRONG. Proposed candidate remains "نعم" (index 0) but is not applied.

### Question ID 27 — MEDIUM

- Question: .يجب أعطاء جميع راكبي الدراجات الهوائية مسافات الامان الكافية عند الاقترب منهم
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: false

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 672,
    "index": 0
  }
]
```

Evidence:

- exact question + ordered answers + single external key
- yes/no: single-source key is insufficient to upgrade without independent cross-check or extra evidence
- Only alqemah keyed exact match; no independent morortest exact match. Yes/no single-source rule blocks STRONG.

Explanation: Still MEDIUM: Only alqemah keyed exact match; no independent morortest exact match. Yes/no single-source rule blocks STRONG. Proposed candidate remains "نعم" (index 0) but is not applied.

### Question ID 25 — MEDIUM

- Question: إن مستخدمي احزمة الامان يصابون بإصابات أخف وأقل خطورة من الذين لا يستخدمونها :
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: false

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 674,
    "index": 0
  }
]
```

Evidence:

- exact question + ordered answers + single external key
- yes/no: single-source key is insufficient to upgrade without independent cross-check or extra evidence
- Only alqemah keyed exact match; no independent morortest exact match. Yes/no single-source rule blocks STRONG.

Explanation: Still MEDIUM: Only alqemah keyed exact match; no independent morortest exact match. Yes/no single-source rule blocks STRONG. Proposed candidate remains "نعم" (index 0) but is not applied.

### Question ID 21 — STRONG

- Question: من الادوية التي تؤثر على القيادة بعض أقراص الحمية الغذائية :
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7020,
    "index": 0
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 678,
    "index": 0
  }
]
```

Evidence:

- exact normalized question text on both morortest and alqemah (Arabic orthography-normalized)
- same answer-text set on both sources; mapped into our local answer order
- both independent keyed sources map to the same our-answer index 0 ("نعم")
- not image-dependent; dual independent keys satisfy upgrade (beyond yes/no text-only identity)

Explanation: Upgraded to STRONG: non-image question with exact wording/answers and independent agreement between morortest and alqemah keys.

### Question ID 6 — STRONG

- Question: تزداد احتمالات الشعور بالارهاق كلما زادت ساعات القيادة:
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7013,
    "index": 0
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 690,
    "index": 0
  }
]
```

Evidence:

- exact normalized question text on both morortest and alqemah (Arabic orthography-normalized)
- same answer-text set on both sources; mapped into our local answer order
- both independent keyed sources map to the same our-answer index 0 ("نعم")
- not image-dependent; dual independent keys satisfy upgrade (beyond yes/no text-only identity)

Explanation: Upgraded to STRONG: non-image question with exact wording/answers and independent agreement between morortest and alqemah keys.

### Question ID 4 — MEDIUM

- Question: يعتبر شرود الذهن اثناء القيادة من اكثر الاسباب المؤدية الرتكاب الحوادث المرورية:
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: false

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 692,
    "index": 0
  }
]
```

Evidence:

- exact question + ordered answers + single external key
- yes/no: single-source key is insufficient to upgrade without independent cross-check or extra evidence
- Only alqemah keyed exact match; our stem has "الرتكاب" vs common "لارتكاب". No independent exact morortest key. Yes/no single-source rule blocks STRONG.

Explanation: Still MEDIUM: Only alqemah keyed exact match; our stem has "الرتكاب" vs common "لارتكاب". No independent exact morortest key. Yes/no single-source rule blocks STRONG. Proposed candidate remains "نعم" (index 0) but is not applied.

### Question ID 302 — STRONG

- Question: يعطى المشاة حق المرور عند مباشرتهم بقطع الطريق على التقاطعات التي لا تحكمها اشارات ضوئية او شواخص مرورية
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7077,
    "index": 0
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 701,
    "index": 0
  }
]
```

Evidence:

- exact normalized question text on both morortest and alqemah (Arabic orthography-normalized)
- same answer-text set on both sources; mapped into our local answer order
- both independent keyed sources map to the same our-answer index 0 ("نعم")
- not image-dependent; dual independent keys satisfy upgrade (beyond yes/no text-only identity)

Explanation: Upgraded to STRONG: non-image question with exact wording/answers and independent agreement between morortest and alqemah keys.

### Question ID 266 — STRONG

- Question: تتناسب الازرار مع الخطوط المستخدمة عليها:
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7055,
    "index": 0
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 735,
    "index": 0
  }
]
```

Evidence:

- exact normalized question text on both morortest and alqemah (Arabic orthography-normalized)
- same answer-text set on both sources; mapped into our local answer order
- both independent keyed sources map to the same our-answer index 0 ("نعم")
- not image-dependent; dual independent keys satisfy upgrade (beyond yes/no text-only identity)

Explanation: Upgraded to STRONG: non-image question with exact wording/answers and independent agreement between morortest and alqemah keys.

### Question ID 263 — STRONG

- Question: لا يوجد علامات أرضية تسمى خطوط الحواف
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7054,
    "index": 1
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 738,
    "index": 1
  }
]
```

Evidence:

- exact normalized question text on both morortest and alqemah (Arabic orthography-normalized)
- same answer-text set on both sources; mapped into our local answer order
- both independent keyed sources map to the same our-answer index 1 ("لا")
- not image-dependent; dual independent keys satisfy upgrade (beyond yes/no text-only identity)
- note: external answer order differed from ours on at least one source; mapping used correct answer text

Explanation: Upgraded to STRONG: non-image question with exact wording/answers and independent agreement between morortest and alqemah keys.

### Question ID 262 — STRONG

- Question: لا يوجد علامات أرضية تسمى خطوط الطول
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7053,
    "index": 1
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 739,
    "index": 1
  }
]
```

Evidence:

- exact normalized question text on both morortest and alqemah (Arabic orthography-normalized)
- same answer-text set on both sources; mapped into our local answer order
- both independent keyed sources map to the same our-answer index 1 ("لا")
- not image-dependent; dual independent keys satisfy upgrade (beyond yes/no text-only identity)

Explanation: Upgraded to STRONG: non-image question with exact wording/answers and independent agreement between morortest and alqemah keys.

### Question ID 259 — STRONG

- Question: تقتصر وظائف العلامات الارضية على الوظائف الارشادية فقط.
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7050,
    "index": 1
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 742,
    "index": 1
  }
]
```

Evidence:

- exact normalized question text on both morortest and alqemah (Arabic orthography-normalized)
- same answer-text set on both sources; mapped into our local answer order
- both independent keyed sources map to the same our-answer index 1 ("لا")
- not image-dependent; dual independent keys satisfy upgrade (beyond yes/no text-only identity)

Explanation: Upgraded to STRONG: non-image question with exact wording/answers and independent agreement between morortest and alqemah keys.

### Question ID 258 — STRONG

- Question: تقتصر وظائف العلامات الارضية على الوظائف التنظيمية فقط.
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7049,
    "index": 1
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 743,
    "index": 1
  }
]
```

Evidence:

- exact normalized question text on both morortest and alqemah (Arabic orthography-normalized)
- same answer-text set on both sources; mapped into our local answer order
- both independent keyed sources map to the same our-answer index 1 ("لا")
- not image-dependent; dual independent keys satisfy upgrade (beyond yes/no text-only identity)

Explanation: Upgraded to STRONG: non-image question with exact wording/answers and independent agreement between morortest and alqemah keys.

### Question ID 923 — MEDIUM

- Question: لا تقتصر وظائف العلامات الارضية على الوظائف التنظيمية فقط
- Image filename/mediaId: n/a / n/a
- Yes/No: true; Image-dependent: false
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: false

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 744,
    "index": 0
  }
]
```

Evidence:

- exact question + ordered answers + single external key
- yes/no: single-source key is insufficient to upgrade without independent cross-check or extra evidence
- Only alqemah keyed exact match for the negated stem. Morortest has the opposite polarity stem ("تقتصر...") with a different key mapping — not the same question identity.

Explanation: Still MEDIUM: Only alqemah keyed exact match for the negated stem. Morortest has the opposite polarity stem ("تقتصر...") with a different key mapping — not the same question identity. Proposed candidate remains "نعم" (index 0) but is not applied.

### Question ID 624 — MEDIUM

- Question: في الصورة التي امامك المركبة رقم ( 2 )تتجاوز بشكل صحيح:
- Image filename/mediaId: Screenshot-2023-03-08-220119-300x236.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: لا (index 1)
- Dual-source agreement: false

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 912,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- external keyed match present for exact/near question identity
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 665 — MEDIUM

- Question: إذا كانت المركبة التي امامك تقف على منحدر بدون رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:
- Image filename/mediaId: Screnshot-2023-03-08-035433.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7160,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 953,
    "index": 0,
    "imageMatch": false,
    "sameOrder": false
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 666 — MEDIUM

- Question: إذا كانت المركبة التي امامك تقف على منحدر مع وجود رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:
- Image filename/mediaId: Screenshot-2023-03-08-035433.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7162,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 954,
    "index": 0,
    "imageMatch": false,
    "sameOrder": false
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 667 — MEDIUM

- Question: في الصورة التي أمامك يريد السائق ان يهدء السرعة :
- Image filename/mediaId: Screenshot-2023-03-08-035328.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: false

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 955,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- external keyed match present for exact/near question identity
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 672 — MEDIUM

- Question: في الصورة التي امامك وقوف المركبات صحيح:
- Image filename/mediaId: Screenshot-2023-03-08-034810.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: نعم (index 0)
- Dual-source agreement: true

Our answers:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7150,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 960,
    "index": 0,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 673 — MEDIUM

- Question: في الصورة التي امامك وقوف المركبة الصفراء صحيح:
- Image filename/mediaId: Screenshot-2023-03-08-034728.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: لا (index 1)
- Dual-source agreement: false

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 961,
    "index": 1,
    "imageMatch": false,
    "sameOrder": false
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 963,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- external keyed match present for exact/near question identity
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 674 — MEDIUM

- Question: في الصورة التي امامك وقوف المركبة رقم (1) صحيح:
- Image filename/mediaId: Screenshot-2023-03-08-034614.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7148,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 962,
    "index": 1,
    "imageMatch": false,
    "sameOrder": false
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 675 — MEDIUM

- Question: في الصورة التي امامك وقوف المركبة الصفراء صحيح ؟
- Image filename/mediaId: Screenshot-2023-03-08-034519.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: لا (index 1)
- Dual-source agreement: false

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 961,
    "index": 1,
    "imageMatch": false,
    "sameOrder": false
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 963,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- external keyed match present for exact/near question identity
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 677 — MEDIUM

- Question: في الصورة التي امامك وقوف المركبة الزرقاء صحيح:
- Image filename/mediaId: Screenshot-2023-03-08-034349.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: لا (index 1)
- Dual-source agreement: false

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 965,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- external keyed match present for exact/near question identity
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 680 — MEDIUM

- Question: في الصورة التي امامك وقوف المركبة صحيح
- Image filename/mediaId: Screenshot-2023-03-08-034043.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7149,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7151,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7261,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 968,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 683 — MEDIUM

- Question: في الصورة التي امامك المركبة الصفراء تتجاوز بشكل صحيح:
- Image filename/mediaId: Screenshot-2023-03-08-033604.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7257,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 971,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 685 — MEDIUM

- Question: في الصورة التي امامك التصرف الذي تقوم به المركبة صحيح:
- Image filename/mediaId: Screenshot-2023-03-08-033126.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7252,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7253,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 973,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 974,
    "index": 1,
    "imageMatch": false,
    "sameOrder": false
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 686 — MEDIUM

- Question: في الصورة التي امامك التصرف الذي تقوم به المركبة صحيح:
- Image filename/mediaId: Screenshot-2023-03-08-033037.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7252,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7253,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 973,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 974,
    "index": 1,
    "imageMatch": false,
    "sameOrder": false
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 687 — MEDIUM

- Question: في الصورة التي امامك المركبة رقم ( 2 ) يعتبر تجاوزها صحيحا:
- Image filename/mediaId: Screenshot-2023-03-08-032942-300x109.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7251,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 975,
    "index": 1,
    "imageMatch": false,
    "sameOrder": false
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

### Question ID 688 — MEDIUM

- Question: في الصورة التي امامك هل تصرف المركبة الزرقاء صحيح
- Image filename/mediaId: Screenshot-2023-03-08-032848.jpg / n/a
- Yes/No: true; Image-dependent: true
- Proposed correct answer: لا (index 1)
- Dual-source agreement: true

Our answers:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
[
  {
    "source": "https://morortest.com/questions/jo",
    "id": 7250,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  },
  {
    "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
    "id": 976,
    "index": 1,
    "imageMatch": false,
    "sameOrder": true
  }
]
```

Evidence:

- morortest and alqemah agree on the same mapped answer text/index
- image/scene identity not established (basename and byte-hash compare failed)
- yes/no + image rule: cannot upgrade on question text alone without image/sign match

Explanation: Still MEDIUM: keyed external evidence exists and dual sources agree, but image/sign identity was not proven, so upgrade is blocked.

## Final counts

MEDIUM candidates: 43
Upgraded to STRONG: 12
Still MEDIUM: 31
New CONFLICTS: 0
INVALID: 0
