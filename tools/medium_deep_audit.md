# Medium Deep Audit

Generated: 2026-08-11T19:15:19.282Z

## Summary

- Previous MEDIUM: **31**
- Upgraded to STRONG: **23**
- Still MEDIUM: **7**
- CONFLICT: **0**
- INVALID: **1**

STRONG IDs: 121, 120, 119, 117, 114, 113, 112, 111, 83, 42, 41, 624, 667, 672, 674, 675, 677, 680, 683, 685, 686, 687, 688

Still MEDIUM IDs: 33, 27, 25, 4, 923, 665, 666

INVALID IDs: 673

## Methodology

- Investigated ONLY the 31 remaining MEDIUM rows from tools/medium_upgrade_audit.json.
- Downloaded our (trainingdriving screenshot URLs) and external (alqemah / morortest) images; did not require identical filenames or byte hashes.
- Visually compared sign shape, symbols, arrows, colors, layout, and scene content for each image question.
- Image/sign questions upgraded to STRONG only when visual identity matched a keyed external diagram AND the correct answer mapped uniquely into our choices.
- Shared yes/no stems with different scenes were NOT upgraded on text alone; mismatched scenes marked INVALID.
- Text-only items used deep Arabic normalization (diacritics/hamza/taa-marbuta + harmless typos ثالث/ثلاث, باختالف/باختلاف) and required dual independent keyed agreement for STRONG.
- No modifications to data/questions.js, app.js, or styles.css. Keys NOT applied.

### Question ID 121 — STRONG (high)

- Question: .توضع هذه الاشارة على المسارب ,وتسمح بالمرور للمسرب الموضوعة عليه :
- Image: Screenshot-2023-03-06-042356.jpg / mediaId 2286
- Proposed correct answer: نعم (index 0)
- Confidence: high

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 422,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/74.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-042356.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/74.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same overhead two-bay lane-control signal: left dark, right green downward arrow, flared grey housing.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_121.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_121.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same overhead two-bay lane-control signal: left dark, right green downward arrow, flared grey housing.
- explicit external key → our index 0 ("نعم")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 120 — STRONG (high)

- Question: توضع هذه الاشارة على مسارب الطرق وتمنع المرور في المسرب الموضوعه عليه
- Image: Screenshot-2023-03-06-042229.jpg / mediaId 2285
- Proposed correct answer: نعم (index 0)
- Confidence: high

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 423,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/75.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-042229.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/75.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same overhead two-bay lane-control signal: left red X, right dark/off, same housing style.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_120.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_120.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same overhead two-bay lane-control signal: left red X, right dark/off, same housing style.
- explicit external key → our index 0 ("نعم")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 119 — STRONG (high)

- Question: اللون الاخضر المتقطع للمشاة في الاشارات الضوئية يعني أن الاشارة على وشك التحول إلى الاحمر ،وهنا لا يجوز للمشاة المرور الا إذا كانوا بداخل ممر المشاة ، ويجب أن يكملوا طريقهم إلى الجانب الاخر
- Image: Screenshot-2023-03-06-042143.jpg / mediaId 2284
- Proposed correct answer: نعم (index 0)
- Confidence: high

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 424,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/76.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7372,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-042143.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/76.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same pedestrian signal: top dark, bottom green walking figure with radiating flash lines, same housing/visors.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_119.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_119.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same pedestrian signal: top dark, bottom green walking figure with radiating flash lines, same housing/visors.
- keyed sources agree on mapped index 0 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 0 ("نعم")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 117 — STRONG (high)

- Question: اللون الاحمر في الاشارة الضوئية للمشاة يعني منع المشاة من عبور الطريق
- Image: Screenshot-2023-03-06-041829.jpg / mediaId 2282
- Proposed correct answer: نعم (index 0)
- Confidence: high

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 426,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/79.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7371,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-041829.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/79.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same pedestrian signal: top red standing figure, bottom dark, identical housing/visors.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_117.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_117.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same pedestrian signal: top red standing figure, bottom dark, identical housing/visors.
- keyed sources agree on mapped index 0 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 0 ("نعم")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 114 — STRONG (high)

- Question: في الاشارات الضوئية ممكن أن تستبدل الاوان بأسهم من نفس اللون لكن على خلفية سوداء اللون ، وعندما تضيء تكون لها نفس أهمية الاشارة الضوئية العادية لكن المنع أو السماح يكون لالتجاه أو الاتجاهات المبينة بالسهم أو الاسهم .
- Image: Screenshot-2023-03-06-041447.jpg / mediaId 2280
- Proposed correct answer: نعم (index 0)
- Confidence: high

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 429,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/81.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-041447.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/81.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same 3-aspect traffic light with bottom green U-turn arrow; top/middle dark; same visors.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_114.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_114.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same 3-aspect traffic light with bottom green U-turn arrow; top/middle dark; same visors.
- explicit external key → our index 0 ("نعم")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 113 — STRONG (high)

- Question: وجود الضوء الاخضر في الاشارة الضوئية على التقاطع لا يعنى الحق في المرور اذا لم يكن التقاطع خالي من المركبات الاخرى :
- Image: Screenshot-2023-03-06-040610.jpg / mediaId 2279
- Proposed correct answer: نعم (index 0)
- Confidence: high

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 430,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/82.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7368,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-040610.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/82.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same 3-aspect traffic light with solid green bottom lamp; top/middle dark; same housing.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_113.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_113.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same 3-aspect traffic light with solid green bottom lamp; top/middle dark; same housing.
- keyed sources agree on mapped index 0 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 0 ("نعم")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 112 — STRONG (high)

- Question: عند ظهور اللون الاصفر في الاشارة الضوئية بعد اللون الاحمر فهذا يعنى ان الاشارة على وشك التغير للضوء الاخضر و عليك الاستعداد للمسير.
- Image: Screenshot-2023-03-06-035826-2.jpg / mediaId 4805
- Proposed correct answer: نعم (index 0)
- Confidence: high

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 431,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/83.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7366,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/05/Screenshot-2023-03-06-035826-2.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/83.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same 3-aspect traffic light with red+amber lit and green off (transition-to-green state).",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_112.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_112.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same 3-aspect traffic light with red+amber lit and green off (transition-to-green state).
- keyed sources agree on mapped index 0 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 0 ("نعم")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 111 — STRONG (high)

- Question: الضوء الاحمر في الاشارة الضوئية يعني ممنوع المرور وعلى المركبات الوقوف قبل خط التوقف إن وجد :
- Image: Screenshot-2023-03-06-035644-2.jpg / mediaId 4806
- Proposed correct answer: نعم (index 0)
- Confidence: high

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 432,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/84.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7365,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/05/Screenshot-2023-03-06-035644-2.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/84.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same 3-aspect traffic light with solid red top lamp; middle/bottom dark.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_111.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_111.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same 3-aspect traffic light with solid red top lamp; middle/bottom dark.
- keyed sources agree on mapped index 0 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 0 ("نعم")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 83 — STRONG (high)

- Question: تحميل الركاب بهذه الطريقة صحيح
- Image: Screenshot-2023-03-06-021450.jpg / mediaId 2245
- Proposed correct answer: لا (index 1)
- Confidence: high

Answer choices:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 489,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/18-2.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-021450.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/18-2.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same photograph: dark green dump truck rear with passengers in open bed, hazard stripe, sandy embankment.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_83.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_83.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same photograph: dark green dump truck rear with passengers in open bed, hazard stripe, sandy embankment.
- explicit external key → our index 1 ("لا")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 42 — STRONG (high)

- Question: .يمكن زيادة مسافة الامان بين المركبات إلى ثالث ثوان بدلاً من ثانيتين في ظروف القيادة غير الملائمة :
- Image: n/a / mediaId n/a
- Proposed correct answer: نعم (index 0)
- Confidence: high

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 657,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7092,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    }
  ],
  "trainImageUrl": null,
  "alqImageUrl": null,
  "morImageUrl": null,
  "visualMatchedSource": null
}
```

Evidence:

- deepNorm question identity across morortest + alqemah
- identical نعم/لا answer-text set
- both sources map to index 0 ("نعم")
- Deep Arabic normalization treats ثالث/ثلاث as the same stem; answer sets identical; morortest#7092 and alqemah#657 both key نعم (index 0).

Explanation: Deep Arabic normalization treats ثالث/ثلاث as the same stem; answer sets identical; morortest#7092 and alqemah#657 both key نعم (index 0).

### Question ID 41 — STRONG (high)

- Question: مسافة الامان تختلف باختالف أحجام المركبات :
- Image: n/a / mediaId n/a
- Proposed correct answer: نعم (index 0)
- Confidence: high

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 658,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7091,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    }
  ],
  "trainImageUrl": null,
  "alqImageUrl": null,
  "morImageUrl": null,
  "visualMatchedSource": null
}
```

Evidence:

- deepNorm question identity across morortest + alqemah
- identical نعم/لا answer-text set
- both sources map to index 0 ("نعم")
- Deep normalization treats باختالف/باختلاف as the same stem; answer sets identical; morortest#7091 and alqemah#658 both key نعم (index 0).

Explanation: Deep normalization treats باختالف/باختلاف as the same stem; answer sets identical; morortest#7091 and alqemah#658 both key نعم (index 0).

### Question ID 33 — MEDIUM (medium)

- Question: يجب على السائق ترك مسافة أمان بينه وبين المركبة الموجودة أمامه مباشرة بحيث تكون كافية عند تطبيق قاعدة الثانيتين في الظروف الجوية الجيدة (السطح الجاف) :
- Image: n/a / mediaId n/a
- Proposed correct answer: نعم (index 0)
- Confidence: medium

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 666,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    }
  ],
  "trainImageUrl": null,
  "alqImageUrl": null,
  "morImageUrl": null,
  "visualMatchedSource": null
}
```

Evidence:

- deepNorm/exact identity to a single keyed source only (or polarity-different twin)
- yes/no rule: dual independent keys required for STRONG on text-only items
- Exact keyed match only on alqemah#666 → نعم. No independent morortest exact/deepNorm keyed twin found. Single-source yes/no blocked.

Explanation: Exact keyed match only on alqemah#666 → نعم. No independent morortest exact/deepNorm keyed twin found. Single-source yes/no blocked.

### Question ID 27 — MEDIUM (medium)

- Question: .يجب أعطاء جميع راكبي الدراجات الهوائية مسافات الامان الكافية عند الاقترب منهم
- Image: n/a / mediaId n/a
- Proposed correct answer: نعم (index 0)
- Confidence: medium

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 672,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    }
  ],
  "trainImageUrl": null,
  "alqImageUrl": null,
  "morImageUrl": null,
  "visualMatchedSource": null
}
```

Evidence:

- deepNorm/exact identity to a single keyed source only (or polarity-different twin)
- yes/no rule: dual independent keys required for STRONG on text-only items
- Only alqemah#672 keys نعم. No independent keyed twin on morortest. Single-source yes/no blocked.

Explanation: Only alqemah#672 keys نعم. No independent keyed twin on morortest. Single-source yes/no blocked.

### Question ID 25 — MEDIUM (medium)

- Question: إن مستخدمي احزمة الامان يصابون بإصابات أخف وأقل خطورة من الذين لا يستخدمونها :
- Image: n/a / mediaId n/a
- Proposed correct answer: نعم (index 0)
- Confidence: medium

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 674,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    }
  ],
  "trainImageUrl": null,
  "alqImageUrl": null,
  "morImageUrl": null,
  "visualMatchedSource": null
}
```

Evidence:

- deepNorm/exact identity to a single keyed source only (or polarity-different twin)
- yes/no rule: dual independent keys required for STRONG on text-only items
- Only alqemah#674 keys نعم. No independent keyed twin on morortest. Single-source yes/no blocked.

Explanation: Only alqemah#674 keys نعم. No independent keyed twin on morortest. Single-source yes/no blocked.

### Question ID 4 — MEDIUM (medium)

- Question: يعتبر شرود الذهن اثناء القيادة من اكثر الاسباب المؤدية الرتكاب الحوادث المرورية:
- Image: n/a / mediaId n/a
- Proposed correct answer: نعم (index 0)
- Confidence: medium

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 692,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    }
  ],
  "trainImageUrl": null,
  "alqImageUrl": null,
  "morImageUrl": null,
  "visualMatchedSource": null
}
```

Evidence:

- deepNorm/exact identity to a single keyed source only (or polarity-different twin)
- yes/no rule: dual independent keys required for STRONG on text-only items
- Only alqemah#692 keys نعم (our stem has الرتكاب). No independent keyed twin on morortest after deepNorm. Single-source blocked.

Explanation: Only alqemah#692 keys نعم (our stem has الرتكاب). No independent keyed twin on morortest after deepNorm. Single-source blocked.

### Question ID 923 — MEDIUM (medium)

- Question: لا تقتصر وظائف العلامات الارضية على الوظائف التنظيمية فقط
- Image: n/a / mediaId n/a
- Proposed correct answer: نعم (index 0)
- Confidence: medium

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 744,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": null,
      "role": "keyed"
    }
  ],
  "trainImageUrl": null,
  "alqImageUrl": null,
  "morImageUrl": null,
  "visualMatchedSource": null
}
```

Evidence:

- deepNorm/exact identity to a single keyed source only (or polarity-different twin)
- yes/no rule: dual independent keys required for STRONG on text-only items
- Only alqemah#744 keys نعم for the negated stem. Morortest has opposite-polarity stem تقتصر... — not the same question.

Explanation: Only alqemah#744 keys نعم for the negated stem. Morortest has opposite-polarity stem تقتصر... — not the same question.

### Question ID 624 — STRONG (high)

- Question: في الصورة التي امامك المركبة رقم ( 2 )تتجاوز بشكل صحيح:
- Image: Screenshot-2023-03-08-220119-300x236.jpg / mediaId n/a
- Proposed correct answer: لا (index 1)
- Confidence: high

Answer choices:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 912,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/4-4.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-220119-300x236.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/4-4.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same 3D overtaking scene: cars labeled 1/2/3, pink car #2 crossing dashed center line with oncoming #3.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_624.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_624.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same 3D overtaking scene: cars labeled 1/2/3, pink car #2 crossing dashed center line with oncoming #3.
- explicit external key → our index 1 ("لا")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 665 — MEDIUM (low)

- Question: إذا كانت المركبة التي امامك تقف على منحدر بدون رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:
- Image: Screnshot-2023-03-08-035433.jpg / mediaId n/a
- Proposed correct answer: نعم (index 0)
- Confidence: low

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 953,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/43-4.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7160,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "/uploads/jo_image/hhhhhhh.png",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screnshot-2023-03-08-035433.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/43-4.jpg",
  "morImageUrl": "https://morortest.com/uploads/jo_image/hhhhhhh.png",
  "visualMatchedSource": null
}
```

Image comparison:

```json
{
  "result": "UNCLEAR",
  "detail": "Hill/wheel-position diagrams differ across sources (orientation vs arrow, hazard wedges vs turned wheels). Cannot confirm identical diagram.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_665.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_665.jpg",
  "morImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\mor_665.img",
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": null
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Hill/wheel-position diagrams differ across sources (orientation vs arrow, hazard wedges vs turned wheels). Cannot confirm identical diagram.
- upgrade blocked: image/sign identity not proven

Explanation: Still MEDIUM: external keys exist for similar wording, but the parking/wheel diagram identity could not be confirmed visually with high confidence.

### Question ID 666 — MEDIUM (low)

- Question: إذا كانت المركبة التي امامك تقف على منحدر مع وجود رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:
- Image: Screenshot-2023-03-08-035433.jpg / mediaId n/a
- Proposed correct answer: نعم (index 0)
- Confidence: low

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 954,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/44-4.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7162,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "/uploads/jo_image/kkkkkkk.png",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-035433.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/44-4.jpg",
  "morImageUrl": "https://morortest.com/uploads/jo_image/kkkkkkk.png",
  "visualMatchedSource": null
}
```

Image comparison:

```json
{
  "result": "UNCLEAR",
  "detail": "Hill-with-curb diagrams are in the same family but wheel-turn / curb cues are not clearly identical across our vs alq vs mor renders. Insufficient for STRONG.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_666.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_666.jpg",
  "morImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\mor_666.img",
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": null
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Hill-with-curb diagrams are in the same family but wheel-turn / curb cues are not clearly identical across our vs alq vs mor renders. Insufficient for STRONG.
- upgrade blocked: image/sign identity not proven

Explanation: Still MEDIUM: external keys exist for similar wording, but the parking/wheel diagram identity could not be confirmed visually with high confidence.

### Question ID 667 — STRONG (high)

- Question: في الصورة التي أمامك يريد السائق ان يهدء السرعة :
- Image: Screenshot-2023-03-08-035328.jpg / mediaId n/a
- Proposed correct answer: نعم (index 0)
- Confidence: high

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 955,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/45-4.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-035328.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/45-4.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same rear-view grey car hand signal: left arm down with red up/down motion arrows (slow/stop).",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_667.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_667.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same rear-view grey car hand signal: left arm down with red up/down motion arrows (slow/stop).
- explicit external key → our index 0 ("نعم")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 672 — STRONG (high)

- Question: في الصورة التي امامك وقوف المركبات صحيح:
- Image: Screenshot-2023-03-08-034810.jpg / mediaId n/a
- Proposed correct answer: نعم (index 0)
- Confidence: high

Answer choices:

0. نعم ← PROPOSED
1. لا

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 960,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/50-1.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7150,
      "mappedIndex": 0,
      "correctText": "نعم",
      "imageUrl": "/uploads/jo_image/yyyyyyy.png",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-034810.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/50-1.jpg",
  "morImageUrl": "https://morortest.com/uploads/jo_image/yyyyyyy.png",
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same angled parking diagram: yellow/blue/red cars in diagonal bays under yellow curb line (our↔alq).",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_672.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_672.jpg",
  "morImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\mor_672.img",
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same angled parking diagram: yellow/blue/red cars in diagonal bays under yellow curb line (our↔alq).
- keyed sources agree on mapped index 0 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 0 ("نعم")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 673 — INVALID (high)

- Question: في الصورة التي امامك وقوف المركبة الصفراء صحيح:
- Image: Screenshot-2023-03-08-034728.jpg / mediaId n/a
- Proposed correct answer: لا (index 1)
- Confidence: high

Answer choices:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 961,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/51-1.jpg",
      "role": "keyed"
    },
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 963,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/53-1.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-034728.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/51-1.jpg",
  "morImageUrl": null,
  "visualMatchedSource": null
}
```

Image comparison:

```json
{
  "result": "DIFFERENT",
  "detail": "Our image is yellow car on wheelchair/disabled bay. Linked alq images (51-1 / 53-1) are yellow car by garage with red car/person — different scene. Text collision only.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_673.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_673.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": null
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Our image is yellow car on wheelchair/disabled bay. Linked alq images (51-1 / 53-1) are yellow car by garage with red car/person — different scene. Text collision only.
- classification INVALID due to scene mismatch despite shared yes/no stem

Explanation: INVALID: prior MEDIUM external link is not the same question/scene. Our diagram does not match the linked external image(s); wording collision only.

### Question ID 674 — STRONG (high)

- Question: في الصورة التي امامك وقوف المركبة رقم (1) صحيح:
- Image: Screenshot-2023-03-08-034614.jpg / mediaId n/a
- Proposed correct answer: لا (index 1)
- Confidence: high

Answer choices:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 962,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/52-1.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7148,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "/uploads/jo_image/rrrrrrr.png",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-034614.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/52-1.jpg",
  "morImageUrl": "https://morortest.com/uploads/jo_image/rrrrrrr.png",
  "visualMatchedSource": "alqemah+morortest"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same angled parking lot with horizontal blue car labeled yellow \"1\" below the stalls (our↔alq; mor same family).",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_674.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_674.jpg",
  "morImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\mor_674.img",
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah+morortest"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same angled parking lot with horizontal blue car labeled yellow "1" below the stalls (our↔alq; mor same family).
- keyed sources agree on mapped index 1 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 1 ("لا")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 675 — STRONG (high)

- Question: في الصورة التي امامك وقوف المركبة الصفراء صحيح ؟
- Image: Screenshot-2023-03-08-034519.jpg / mediaId n/a
- Proposed correct answer: لا (index 1)
- Confidence: high

Answer choices:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 961,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/51-1.jpg",
      "role": "keyed"
    },
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 963,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/53-1.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-034519.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/51-1.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same garage/exit scene: yellow sedan on road, red car in bay, person in blue — matches alq 53-1 family.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_675.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_675.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same garage/exit scene: yellow sedan on road, red car in bay, person in blue — matches alq 53-1 family.
- paired to alq garage scene (53-1 family)
- explicit external key → our index 1 ("لا")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 677 — STRONG (high)

- Question: في الصورة التي امامك وقوف المركبة الزرقاء صحيح:
- Image: Screenshot-2023-03-08-034349.jpg / mediaId n/a
- Proposed correct answer: لا (index 1)
- Confidence: high

Answer choices:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 965,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/55-1.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-034349.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/55-1.jpg",
  "morImageUrl": null,
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same top-down two-way road with blue car and 2.5م clearance marking to solid center line.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_677.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_677.jpg",
  "morImagePath": null,
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same top-down two-way road with blue car and 2.5م clearance marking to solid center line.
- explicit external key → our index 1 ("لا")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 680 — STRONG (high)

- Question: في الصورة التي امامك وقوف المركبة صحيح
- Image: Screenshot-2023-03-08-034043.jpg / mediaId n/a
- Proposed correct answer: لا (index 1)
- Confidence: high

Answer choices:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 968,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/58-1.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7149,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "/uploads/jo_image/ttttttt.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7151,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "/uploads/jo_image/uuuuuuu.png",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7261,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "/uploads/jo_image/bbbbbb.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-034043.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/58-1.jpg",
  "morImageUrl": "https://morortest.com/uploads/jo_image/ttttttt.jpg",
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same grade-separated interchange: blue car on overpass with slip ramp (our↔alq 58-1). Mor text-collided images are different scenes and were disregarded for identity.",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_680.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_680.jpg",
  "morImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\mor_680.img",
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same grade-separated interchange: blue car on overpass with slip ramp (our↔alq 58-1). Mor text-collided images are different scenes and were disregarded for identity.
- keyed sources agree on mapped index 1 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 1 ("لا")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 683 — STRONG (high)

- Question: في الصورة التي امامك المركبة الصفراء تتجاوز بشكل صحيح:
- Image: Screenshot-2023-03-08-033604.jpg / mediaId n/a
- Proposed correct answer: لا (index 1)
- Confidence: high

Answer choices:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 971,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/61-1.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7257,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "/uploads/jo_image/zzzzzz.png",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-033604.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/61-1.jpg",
  "morImageUrl": "https://morortest.com/uploads/jo_image/zzzzzz.png",
  "visualMatchedSource": "alqemah+morortest"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same yellow-overtakes-blue-at-intersection diagram with signal arcs and path arrows (our↔alq↔mor).",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_683.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_683.jpg",
  "morImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\mor_683.img",
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah+morortest"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same yellow-overtakes-blue-at-intersection diagram with signal arcs and path arrows (our↔alq↔mor).
- keyed sources agree on mapped index 1 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 1 ("لا")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 685 — STRONG (high)

- Question: في الصورة التي امامك التصرف الذي تقوم به المركبة صحيح:
- Image: Screenshot-2023-03-08-033126.jpg / mediaId n/a
- Proposed correct answer: لا (index 1)
- Confidence: high

Answer choices:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 973,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/63-1.jpg",
      "role": "keyed"
    },
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 974,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/64-1.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7252,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "/uploads/jo_image/gggggg.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7253,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "/uploads/jo_image/hhhhhh.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-033126.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/63-1.jpg",
  "morImageUrl": "https://morortest.com/uploads/jo_image/gggggg.jpg",
  "visualMatchedSource": "alqemah:63-1"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Our hill/bridge overtaking (silver car in red oval over double solid lines) matches alq 63-1. alq 64-1 is a different U-turn diagram (belongs with Q686).",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_685.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_685.jpg",
  "morImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\mor_685.img",
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah:63-1"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Our hill/bridge overtaking (silver car in red oval over double solid lines) matches alq 63-1. alq 64-1 is a different U-turn diagram (belongs with Q686).
- paired specifically to alq image 63-1 (hill overtaking)
- keyed sources agree on mapped index 1 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 1 ("لا")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 686 — STRONG (high)

- Question: في الصورة التي امامك التصرف الذي تقوم به المركبة صحيح:
- Image: Screenshot-2023-03-08-033037.jpg / mediaId n/a
- Proposed correct answer: لا (index 1)
- Confidence: high

Answer choices:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 973,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/63-1.jpg",
      "role": "keyed"
    },
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 974,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/64-1.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7252,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "/uploads/jo_image/gggggg.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7253,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "/uploads/jo_image/hhhhhh.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-033037.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/63-1.jpg",
  "morImageUrl": "https://morortest.com/uploads/jo_image/gggggg.jpg",
  "visualMatchedSource": "alqemah:64-1"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Our U-turn-across-solid-line diagram matches alq 64-1. alq 63-1 is the hill overtaking scene (belongs with Q685).",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_686.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_686.jpg",
  "morImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\mor_686.img",
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah:64-1"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Our U-turn-across-solid-line diagram matches alq 64-1. alq 63-1 is the hill overtaking scene (belongs with Q685).
- paired specifically to alq image 64-1 (U-turn across solid line)
- keyed sources agree on mapped index 1 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 1 ("لا")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 687 — STRONG (high)

- Question: في الصورة التي امامك المركبة رقم ( 2 ) يعتبر تجاوزها صحيحا:
- Image: Screenshot-2023-03-08-032942-300x109.jpg / mediaId n/a
- Proposed correct answer: لا (index 1)
- Confidence: high

Answer choices:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 975,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/65-1.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7251,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "/uploads/jo_image/ffffff.jpg",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-032942-300x109.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/65-1.jpg",
  "morImageUrl": "https://morortest.com/uploads/jo_image/ffffff.jpg",
  "visualMatchedSource": "alqemah"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same curve scene: vehicle #1 (white box) outer lane, #2 (silver) inner lane, solid white divider (our↔alq).",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_687.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_687.jpg",
  "morImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\mor_687.img",
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same curve scene: vehicle #1 (white box) outer lane, #2 (silver) inner lane, solid white divider (our↔alq).
- keyed sources agree on mapped index 1 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 1 ("لا")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

### Question ID 688 — STRONG (high)

- Question: في الصورة التي امامك هل تصرف المركبة الزرقاء صحيح
- Image: Screenshot-2023-03-08-032848.jpg / mediaId n/a
- Proposed correct answer: لا (index 1)
- Confidence: high

Answer choices:

0. نعم
1. لا ← PROPOSED

External source(s):

```json
{
  "sources": [
    {
      "source": "https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/",
      "id": 976,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/66-1.jpg",
      "role": "keyed"
    },
    {
      "source": "https://morortest.com/questions/jo",
      "id": 7250,
      "mappedIndex": 1,
      "correctText": "لا",
      "imageUrl": "/uploads/jo_image/dddddd.png",
      "role": "keyed"
    }
  ],
  "trainImageUrl": "https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-032848.jpg",
  "alqImageUrl": "https://alqemahdriving.com/wp-content/uploads/2023/06/66-1.jpg",
  "morImageUrl": "https://morortest.com/uploads/jo_image/dddddd.png",
  "visualMatchedSource": "alqemah+morortest"
}
```

Image comparison:

```json
{
  "result": "MATCH",
  "detail": "Same top-down right-turn-from-left: blue car arrow cuts across yellow car path beside trees/building (our↔alq↔mor).",
  "ourImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\our_688.jpg",
  "alqImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\alq_688.jpg",
  "morImagePath": "C:\\Users\\moats\\AppData\\Local\\Temp\\quiz-source-audit\\round2\\medium-deep\\mor_688.img",
  "byteMatchOurAlq": false,
  "byteMatchOurMor": false,
  "matchedSource": "alqemah+morortest"
}
```

Evidence:

- image filenames differ; compared visual content of downloaded our vs external images
- visual: Same top-down right-turn-from-left: blue car arrow cuts across yellow car path beside trees/building (our↔alq↔mor).
- keyed sources agree on mapped index 1 (text-level); visual identity anchored to matched diagram
- explicit external key → our index 1 ("لا")
- filenames/hashes not required; visual identity established

Explanation: Upgraded to STRONG: visual inspection confirms the same sign/diagram/scene as a keyed external source; correct answer mapped uniquely into our choices. Not upgraded from question text alone.

## Final counts

Previous MEDIUM: 31
Upgraded to STRONG: 23
Still MEDIUM: 7
CONFLICT: 0
INVALID: 1
