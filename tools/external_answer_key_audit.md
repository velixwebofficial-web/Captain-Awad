# External Answer Key Audit

Generated: 2026-08-11T15:06:58.301Z

## Summary

- Total missing questions: **463**
- Recovered with strong evidence: **44**
- Recovered with conflicting evidence: **30**
- Still unresolved: **389**

## Definitions used in this audit

- **Recovered with strong evidence**: Exact normalized question text match on alqemah + identical answer texts in the same order + exactly one `quizOptions.question_answer=1` + unique mapped answer index. Yes/no-only items also require identical answer IDs or matching image basename. Source of the key is alqemah `window.quizOptions_*` base64 JSON (not AI, not guessing).
- **Recovered with conflicting evidence**: External candidates exist, but mapped correct indexes disagree across matches (ambiguous identity / colliding stems). Not applied.
- **Still unresolved**: No safe unique strong mapping. Includes cases where trainingdriving matches the question but exposes no key, and yes/no image questions that lack image/ID disambiguation.
- **Second-source cross-check**: trainingdriving.com strips keys in live HTML (`quizOptions` → `[]`, all `ays_answer_correct[]=0`), so recovered answers cannot be confirmed there.

## Investigation findings

- Both sites use WordPress Quiz Maker (ays-quiz).
- trainingdriving.com theoretical-examination: live HTML has ays_answer_correct[] all 0; window.quizOptions_* values decode to empty arrays []. No public answer key — cannot cross-check recovered answers against this source.
- alqemahdriving.com embeds window.quizOptions_<quizId>[questionId]=base64(JSON) with question_answer maps marking correct answers as "1". This is a client-visible key source.
- Strong recovery requires: exact normalized question text; identical answer texts in same order; exactly one external correct flag; unique mapped answer across matches. Yes/no-only questions additionally require identical answer IDs or image basename match. Answer IDs / question IDs alone are never identity (IDs collide across quizzes).
- Question numeric IDs and answer numeric IDs collide across Quiz Maker quizzes with different texts — never used alone.
- Cross-check: compare alqemah keys against our already-graded questions under the same strong-recovery rules. Disagreements reduce confidence (trainingdriving cannot adjudicate).
- No modifications were made to data/questions.js, app.js, or styles.css.

### Cross-check vs already graded local questions

```json
{
  "gradedQuestions": 190,
  "alqemahStrongMatchesAgree": 7,
  "alqemahStrongMatchesConflict": 0,
  "alqemahNoStrongOrNoKey": 183
}
```

### External parse stats

```json
{
  "trainingdrivingQuestionsParsed": 299,
  "alqemahQuestionsParsed": 703,
  "trainingdrivingWithQuestionText": 299,
  "alqemahWithQuestionText": 703,
  "trainingdrivingQuizOptionsWithKeys": 0,
  "alqemahQuizOptionsWithKeys": 645,
  "trainingdrivingQuizOptionsEmpty": 299,
  "alqemahQuestionsWithExactOneKeyViaOptions": 703,
  "trainingdrivingHtmlCorrectFlagsAllZero": true,
  "alqemahHtmlCorrectFlagsAllZero": true
}
```

## Recovered mappings (strong evidence only)

### Question ID 184

- Our question text: هذه الشاخصة تعني
- Matched external question: هذه الشاخصة تعني
- External question id: 118
- Correct answer according to source: **ممنوع مرور الدراجات النارية.**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[371]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 559 — "ممنوع مرور المركبات الالية" → correct:false
1. ID 560 — "ممنوع مرور الدراجات النارية." → correct:false ← SOURCE CORRECT
2. ID 561 — "ممنوع المرور" → correct:false

External answers (alqemah):

```json
{
  "id": 118,
  "question": "هذه الشاخصة تعني",
  "answers": [
    {
      "id": "370",
      "text": ".ممنوع مرور المركبات الالية",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "371",
      "text": "ممنوع مرور الدراجات النارية",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "372",
      "text": "ممنوع المرور",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "371"
  ],
  "quizOptionsAnswerMap": {
    "370": "0",
    "371": "1",
    "372": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 182

- Our question text: هذه الشاخصة تعني
- Matched external question: هذه الشاخصة تعني
- External question id: 120
- Correct answer according to source: **ممنوع المرور.**
- Answer index: **2**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 2)
  - alqemah quizOptions question_answer[378]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 553 — "ممنوع مرور المركبات بالاتجاهين" → correct:false
1. ID 554 — "افضلية المرور لك." → correct:false
2. ID 555 — "ممنوع المرور." → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 120,
  "question": "هذه الشاخصة تعني",
  "answers": [
    {
      "id": "376",
      "text": "ممنوع مرور المركبات بالاتجاهين",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "377",
      "text": "افضلية المرور لك.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "378",
      "text": "ممنوع المرور.",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "378"
  ],
  "quizOptionsAnswerMap": {
    "376": "0",
    "377": "0",
    "378": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 173

- Our question text: هذه الشاخصة التحذيرية تعني
- Matched external question: هذه الشاخصة التحذيرية تعني
- External question id: 140
- Correct answer according to source: **تقاطع طريق رئيسي مع فرعي من جهة اليمين**
- Answer index: **2**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 2)
  - alqemah quizOptions question_answer[446]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 526 — "تقاطع طريق رئيسي مع فرعي من جهة اليسار." → correct:false
1. ID 527 — "تقاطع طريق رئيسي مع طريقين فرعيين" → correct:false
2. ID 528 — "تقاطع طريق رئيسي مع فرعي من جهة اليمين" → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 140,
  "question": "هذه الشاخصة التحذيرية تعني",
  "answers": [
    {
      "id": "448",
      "text": "تقاطع طريق رئيسي مع فرعي من جهة اليسار.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "447",
      "text": "تقاطع طريق رئيسي مع طريقين فرعيين",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "446",
      "text": "تقاطع طريق رئيسي مع فرعي من جهة اليمين",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "446"
  ],
  "quizOptionsAnswerMap": {
    "446": "1",
    "447": "0",
    "448": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 161

- Our question text: هذه الشاخصة التحذيرية تعني
- Matched external question: هذه الشاخصة التحذيرية تعني
- External question id: 191
- Correct answer according to source: **امامك سكة حديد دون حاجز**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[623]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 489 — "أمامك سكة حديد مع حاجز زجاجي" → correct:false
1. ID 490 — "امامك سكة حديد دون حاجز" → correct:false ← SOURCE CORRECT
2. ID 491 — "امامك قطار." → correct:false

External answers (alqemah):

```json
{
  "id": 191,
  "question": "هذه الشاخصة التحذيرية تعني",
  "answers": [
    {
      "id": "624",
      "text": "أمامك سكة حديد مع حاجز زجاجي",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "623",
      "text": "امامك سكة حديد دون حاجز",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "625",
      "text": "امامك قطار.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "623"
  ],
  "quizOptionsAnswerMap": {
    "623": "1",
    "624": "0",
    "625": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 153

- Our question text: هذه الشاخصة التحذيرية تعني:
- Matched external question: هذه الشاخصة التحذيرية تعني:
- External question id: 214
- Correct answer according to source: **ممر او مدخل دراجات.**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[707]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 465 — "أطفال" → correct:false
1. ID 466 — "ممر او مدخل دراجات." → correct:false ← SOURCE CORRECT
2. ID 467 — "ممر مشاة." → correct:false

External answers (alqemah):

```json
{
  "id": 214,
  "question": "هذه الشاخصة التحذيرية تعني:",
  "answers": [
    {
      "id": "706",
      "text": "أطفال",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "707",
      "text": "ممر او مدخل دراجات.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "705",
      "text": "ممر مشاة.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "707"
  ],
  "quizOptionsAnswerMap": {
    "705": "0",
    "706": "0",
    "707": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 129

- Our question text: الحد الاقصى لسرعة سيارات الركوب المتوسطة على الطرق الفرعية والتي يقع عليها مدارس هو :
- Matched external question: الحد الاقصى لسرعة سيارات الركوب المتوسطة على الطرق الفرعية والتي يقع عليها مدارس هو :
- External question id: 414
- Correct answer according to source: **40 كم/ساعة.**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[1357]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 393 — "30كم/ساعة." → correct:false
1. ID 394 — "40 كم/ساعة." → correct:false ← SOURCE CORRECT
2. ID 395 — "50كم/ساعة." → correct:false

External answers (alqemah):

```json
{
  "id": 414,
  "question": "الحد الاقصى لسرعة سيارات الركوب المتوسطة على الطرق الفرعية والتي يقع عليها مدارس هو :",
  "answers": [
    {
      "id": "1358",
      "text": "30كم/ساعة.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "1357",
      "text": "40 كم/ساعة.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "1359",
      "text": "50كم/ساعة.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "1357"
  ],
  "quizOptionsAnswerMap": {
    "1357": "1",
    "1358": "0",
    "1359": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 128

- Our question text: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي (2 )طن او اقل على الطرق الفرعية والتي يقع عليها مدارس هو :
- Matched external question: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي (2 )طن او اقل على الطرق الفرعية والتي يقع عليها مدارس هو :
- External question id: 415
- Correct answer according to source: **40كم/ساعة.**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[1362]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 390 — "40كم/ساعة." → correct:false ← SOURCE CORRECT
1. ID 391 — "30كم/ساعة." → correct:false
2. ID 392 — "20كم/ساعة." → correct:false

External answers (alqemah):

```json
{
  "id": 415,
  "question": "الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي (2 )طن او اقل على الطرق الفرعية والتي يقع عليها مدارس هو :",
  "answers": [
    {
      "id": "1362",
      "text": "40كم/ساعة.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "1361",
      "text": "30كم/ساعة.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "1360",
      "text": "20كم/ساعة.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "1362"
  ],
  "quizOptionsAnswerMap": {
    "1360": "0",
    "1361": "0",
    "1362": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 126

- Our question text: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من(2 )طن على الطرق الفرعية داخل المدن والقرى هو:
- Matched external question: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من(2 )طن على الطرق الفرعية داخل المدن والقرى هو:
- External question id: 417
- Correct answer according to source: **40 كم/ساعة.**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[1366]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 384 — "40 كم/ساعة." → correct:false ← SOURCE CORRECT
1. ID 385 — "50كم/ساعة." → correct:false
2. ID 386 — "60كم/ساعة." → correct:false

External answers (alqemah):

```json
{
  "id": 417,
  "question": "الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من(2 )طن على الطرق الفرعية داخل المدن والقرى هو:",
  "answers": [
    {
      "id": "1366",
      "text": "40 كم/ساعة.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "1367",
      "text": "50كم/ساعة.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "1368",
      "text": "60كم/ساعة.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "1366"
  ],
  "quizOptionsAnswerMap": {
    "1366": "1",
    "1367": "0",
    "1368": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 105

- Our question text: وجود هذه الشاخصة يعني:
- Matched external question: وجود هذه الشاخصة يعني:
- External question id: 446
- Correct answer according to source: **على السائق الحذر والانتباه من وجود طريق زلقة أمامه**
- Answer index: **2**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 2)
  - alqemah quizOptions question_answer[1446]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 327 — "على السائق الاسراع لوجود طريق زلقة أمامه" → correct:false
1. ID 328 — "على السائق الحذر والانتباه من وجود طريق ترابية أمامه" → correct:false
2. ID 329 — "على السائق الحذر والانتباه من وجود طريق زلقة أمامه" → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 446,
  "question": "وجود هذه الشاخصة يعني:",
  "answers": [
    {
      "id": "1444",
      "text": "على السائق الاسراع لوجود طريق زلقة أمامه",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "1445",
      "text": "على السائق الحذر والانتباه من وجود طريق ترابية أمامه",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "1446",
      "text": "على السائق الحذر والانتباه من وجود طريق زلقة أمامه",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "1446"
  ],
  "quizOptionsAnswerMap": {
    "1444": "0",
    "1445": "0",
    "1446": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 104

- Our question text: وجود هذه الشاخصة يعني:
- Matched external question: وجود هذه الشاخصة يعني:
- External question id: 449
- Correct answer according to source: **على السائق الحذر والانتباه من وجود تساقط للحجارة من جهة اليمين.**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[1453]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 324 — "على السائق الحذر والانتباه من وجود تساقط للحجارة من جهة اليمين." → correct:false ← SOURCE CORRECT
1. ID 325 — "على السائق الحذر والانتباه من وجود تساقط للحجارة من جهة اليسار." → correct:false
2. ID 326 — "على السائق الحذر والانتباه من وجود تساقط للحجارة من جهتي الطريق." → correct:false

External answers (alqemah):

```json
{
  "id": 449,
  "question": "وجود هذه الشاخصة يعني:",
  "answers": [
    {
      "id": "1453",
      "text": "على السائق الحذر والانتباه من وجود تساقط للحجارة من جهة اليمين.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "1454",
      "text": "على السائق الحذر والانتباه من وجود تساقط للحجارة من جهة اليسار.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "1455",
      "text": "على السائق الحذر والانتباه من وجود تساقط للحجارة من جهتي الطريق.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "1453"
  ],
  "quizOptionsAnswerMap": {
    "1453": "1",
    "1454": "0",
    "1455": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 202

- Our question text: هذه الشاخصة تعني
- Matched external question: هذه الشاخصة تعني
- External question id: 798
- Correct answer according to source: **ممنوع التجاوز للشاحنات.**
- Answer index: **2**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 2)
  - alqemah quizOptions question_answer[2505]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 613 — "نهاية منطقة منع التجاوز." → correct:false
1. ID 614 — "ممنوع التجاوز." → correct:false
2. ID 615 — "ممنوع التجاوز للشاحنات." → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 798,
  "question": "هذه الشاخصة تعني",
  "answers": [
    {
      "id": "2504",
      "text": "نهاية منطقة منع التجاوز",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2503",
      "text": "ممنوع التجاوز.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2505",
      "text": "ممنوع التجاوز للشاحنات.",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2505"
  ],
  "quizOptionsAnswerMap": {
    "2503": "0",
    "2504": "0",
    "2505": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 85

- Our question text: عند رؤية هذه الشاخصة على السائق:
- Matched external question: عند رؤية هذه الشاخصة على السائق:
- External question id: 483
- Correct answer according to source: **ان يسير بسرعة (40 )كم/كحد اقصى.**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[1555]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 266 — "ان يسير بسرعة (40 )كم/كحد اقصى." → correct:false ← SOURCE CORRECT
1. ID 267 — "ان يسير بسرعة (40 )كم/كحد ادنى." → correct:false
2. ID 268 — "لا شئ مما ذكر." → correct:false

External answers (alqemah):

```json
{
  "id": 483,
  "question": "عند رؤية هذه الشاخصة على السائق:",
  "answers": [
    {
      "id": "1555",
      "text": "ان يسير بسرعة (40 )كم/كحد اقصى",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "1556",
      "text": "ان يسير بسرعة (40 )كم/كحد ادنى",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "1557",
      "text": "لا شئ مما ذكر",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "1555"
  ],
  "quizOptionsAnswerMap": {
    "1555": "1",
    "1556": "0",
    "1557": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 62

- Our question text: .إذا اقتربت مركبه من النفق المبين وكان هناك مشاة يقطعون الشارع فإنه يجب على سائق المركبة ان
- Matched external question: .إذا اقتربت مركبه من النفق المبين وكان هناك مشاة يقطعون الشارع فإنه يجب على سائق المركبة ان
- External question id: 637
- Correct answer according to source: **يسمح للمشاة بالمرور حتى اذا وجدت شاخصة تمنع مرور المشاة.**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2023]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 190 — "يتابع المرور بمركبته دون توقف لوجود شاخصة تمنع مرور المشاة" → correct:false
1. ID 191 — "يسمح للمشاة بالمرور حتى اذا وجدت شاخصة تمنع مرور المشاة." → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 637,
  "question": ".إذا اقتربت مركبه من النفق المبين وكان هناك مشاة يقطعون الشارع فإنه يجب على سائق المركبة ان",
  "answers": [
    {
      "id": "2022",
      "text": "يتابع المرور بمركبته دون توقف لوجود شاخصة تمنع مرور المشاة",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2023",
      "text": "يسمح للمشاة بالمرور حتى اذا وجدت شاخصة تمنع مرور المشاة.",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2023"
  ],
  "quizOptionsAnswerMap": {
    "2022": "0",
    "2023": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 19

- Our question text: من الادوية التي تؤثر على القيادة :
- Matched external question: من الادوية التي تؤثر على القيادة :
- External question id: 680
- Correct answer according to source: **جميع ما ذكر.**
- Answer index: **3**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 3)
  - alqemah quizOptions question_answer[2153]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 61 — "المهدئات والمسكنات وبعض الادوية المسكنه." → correct:false
1. ID 62 — "بعض الادوية الخاصة بعالج ضغط الدم والغثيان والحساسية والالتهابات والعدوى الفطرية" → correct:false
2. ID 63 — "الاقراص المنومة" → correct:false
3. ID 64 — "جميع ما ذكر." → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 680,
  "question": "من الادوية التي تؤثر على القيادة :",
  "answers": [
    {
      "id": "2150",
      "text": "المهدئات والمسكنات وبعض الادوية المسكنه.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2151",
      "text": "بعض الادوية الخاصة بعالج ضغط الدم والغثيان والحساسية والالتهابات والعدوى الفطرية",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2152",
      "text": "الاقراص المنومة",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2153",
      "text": "جميع ما ذكر.",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2153"
  ],
  "quizOptionsAnswerMap": {
    "2150": "0",
    "2151": "0",
    "2152": "0",
    "2153": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 289

- Our question text: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Matched external question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- External question id: 713
- Correct answer according to source: **الفئة الاولى (2)**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[2251]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 873 — "الفئة الاولى (2)" → correct:false ← SOURCE CORRECT
1. ID 874 — "الفئة الثانية." → correct:false
2. ID 875 — "الفئة الثالثة." → correct:false

External answers (alqemah):

```json
{
  "id": 713,
  "question": "فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:",
  "answers": [
    {
      "id": "2251",
      "text": "الفئة الاولى (2)",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2252",
      "text": "الفئة الثانية.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2253",
      "text": "الفئة الثالثة.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2251"
  ],
  "quizOptionsAnswerMap": {
    "2251": "1",
    "2252": "0",
    "2253": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 285

- Our question text: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Matched external question: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- External question id: 716
- Correct answer according to source: **الفئة الثالثة.**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - image basename appears in external image URL
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2261]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 861 — "الفئة الثانية." → correct:false
1. ID 862 — "الفئة الثالثة." → correct:false ← SOURCE CORRECT
2. ID 863 — "لا شيء مما ذكر." → correct:false

External answers (alqemah):

```json
{
  "id": 716,
  "question": "فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:",
  "answers": [
    {
      "id": "2260",
      "text": "الفئة الثانية.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2261",
      "text": "الفئة الثالثة.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2262",
      "text": "لا شيء مما ذكر.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2261"
  ],
  "quizOptionsAnswerMap": {
    "2260": "0",
    "2261": "1",
    "2262": "0"
  },
  "score": 10,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order",
    "image basename appears in external image URL"
  ]
}
```

### Question ID 282

- Our question text: رخصة السوق من الفئة الرابعة تصنف بأنها:
- Matched external question: رخصة السوق من الفئة الرابعة تصنف بأنها:
- External question id: 719
- Correct answer according to source: **رخصة سوق لقيادة مركبة لا يزيد وزنها الاجمالي على سبعة أطنان ونصف الطن**
- Answer index: **2**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 2)
  - alqemah quizOptions question_answer[2271]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 852 — "رخصة سوق لجميع انواع الدراجات الالية ." → correct:false
1. ID 853 — "رخصة سوق لقيادة مركبة اشغال." → correct:false
2. ID 854 — "رخصة سوق لقيادة مركبة لا يزيد وزنها الاجمالي على سبعة أطنان ونصف الطن" → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 719,
  "question": "رخصة السوق من الفئة الرابعة تصنف بأنها:",
  "answers": [
    {
      "id": "2269",
      "text": "رخصة سوق لجميع انواع الدراجات الالية .",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2270",
      "text": "رخصة سوق لقيادة مركبة اشغال.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2271",
      "text": "رخصة سوق لقيادة مركبة لا يزيد وزنها الاجمالي على سبعة أطنان ونصف الطن",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2271"
  ],
  "quizOptionsAnswerMap": {
    "2269": "0",
    "2270": "0",
    "2271": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 280

- Our question text: رخصة السوق من الفئة الاولى (1 )هي:
- Matched external question: رخصة السوق من الفئة الاولى (1 )هي:
- External question id: 721
- Correct answer according to source: **رخصة سوق لجميع انواع الدراجات الالية .**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[2277]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 845 — "رخصة سوق لجميع انواع الدراجات الالية ." → correct:false ← SOURCE CORRECT
1. ID 846 — "رخصة سوق لقيادة مركبة اشغال." → correct:false
2. ID 847 — "رخصة سوق لقيادة مركبة زراعية." → correct:false

External answers (alqemah):

```json
{
  "id": 721,
  "question": "رخصة السوق من الفئة الاولى (1 )هي:",
  "answers": [
    {
      "id": "2277",
      "text": "رخصة سوق لجميع انواع الدراجات الالية .",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2276",
      "text": "رخصة سوق لقيادة مركبة اشغال.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2275",
      "text": "رخصة سوق لقيادة مركبة زراعية.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2277"
  ],
  "quizOptionsAnswerMap": {
    "2275": "0",
    "2276": "0",
    "2277": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 268

- Our question text: سيارة الركوب المتوسطة مصممة لنقل بمن فيهم السائق.
- Matched external question: سيارة الركوب المتوسطة مصممة لنقل بمن فيهم السائق.
- External question id: 733
- Correct answer according to source: **ما لا يقل عن عشرة و لا يزيد عن الثلاثين.**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2312]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 809 — "ما لا يقل عن عشرة ولايزيد عن عشرين" → correct:false
1. ID 810 — "ما لا يقل عن عشرة و لا يزيد عن الثلاثين." → correct:false ← SOURCE CORRECT
2. ID 811 — "ما لا يقل عن خمسة عشر ولا يزيد عن عشرين." → correct:false

External answers (alqemah):

```json
{
  "id": 733,
  "question": "سيارة الركوب المتوسطة مصممة لنقل بمن فيهم السائق.",
  "answers": [
    {
      "id": "2311",
      "text": "ما لا يقل عن عشرة ولايزيد عن عشرين",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2312",
      "text": "ما لا يقل عن عشرة و لا يزيد عن الثلاثين.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2313",
      "text": "ما لا يقل عن خمسة عشر ولا يزيد عن عشرين.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2312"
  ],
  "quizOptionsAnswerMap": {
    "2311": "0",
    "2312": "1",
    "2313": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 256

- Our question text: علامة الرصيف تعني:
- Matched external question: علامة الرصيف تعني:
- External question id: 746
- Correct answer according to source: **الوقوف فقط للمركبات العمومية و النقل**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2345]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 777 — "ممنوع الوقوف لجميع المركبات" → correct:false
1. ID 778 — "الوقوف فقط للمركبات العمومية و النقل" → correct:false ← SOURCE CORRECT
2. ID 779 — "لتأكيد الرؤيا فقط" → correct:false
3. ID 780 — "لا شئ مما ذكر" → correct:false

External answers (alqemah):

```json
{
  "id": 746,
  "question": "علامة الرصيف تعني:",
  "answers": [
    {
      "id": "2344",
      "text": "ممنوع الوقوف لجميع المركبات",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2345",
      "text": "الوقوف فقط للمركبات العمومية و النقل",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2346",
      "text": "لتأكيد الرؤيا فقط",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2347",
      "text": "لا شئ مما ذكر",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2345"
  ],
  "quizOptionsAnswerMap": {
    "2344": "0",
    "2345": "1",
    "2346": "0",
    "2347": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 237

- Our question text: هذه الشاخصة الارشادية تعني
- Matched external question: هذه الشاخصة الارشادية تعني
- External question id: 765
- Correct answer according to source: **فندق.**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[2403]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 719 — "فندق." → correct:false ← SOURCE CORRECT
1. ID 720 — "اشارة ارشادية" → correct:false
2. ID 721 — "مستشفى." → correct:false

External answers (alqemah):

```json
{
  "id": 765,
  "question": "هذه الشاخصة الارشادية تعني",
  "answers": [
    {
      "id": "2403",
      "text": "فندق",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2404",
      "text": "اشارة ارشادية",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2405",
      "text": "مستشفى",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2403"
  ],
  "quizOptionsAnswerMap": {
    "2403": "1",
    "2404": "0",
    "2405": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 219

- Our question text: هذه الشاخصة الالزامية تعني
- Matched external question: هذه الشاخصة الالزامية تعني
- External question id: 782
- Correct answer according to source: **اتجاه إجباري لأمام أواليمين .**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[2454]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 665 — "اتجاه إجباري لأمام أواليمين ." → correct:false ← SOURCE CORRECT
1. ID 666 — "اتجاه اجباري لليمين." → correct:false
2. ID 667 — "اتجاه اجباري الى الامام" → correct:false

External answers (alqemah):

```json
{
  "id": 782,
  "question": "هذه الشاخصة الالزامية تعني",
  "answers": [
    {
      "id": "2454",
      "text": "اتجاه إجباري لأمام أواليمين .",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2455",
      "text": "اتجاه اجباري لليمين.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2456",
      "text": "اتجاه اجباري الى الامام",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2454"
  ],
  "quizOptionsAnswerMap": {
    "2454": "1",
    "2455": "0",
    "2456": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 218

- Our question text: .هذه الشاخصة الالزامية تعني
- Matched external question: .هذه الشاخصة الالزامية تعني
- External question id: 783
- Correct answer according to source: **اتجاه إجباري لأمام أو اليسار.**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[2457]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 662 — "اتجاه إجباري لأمام أو اليسار." → correct:false ← SOURCE CORRECT
1. ID 663 — "اتجاه اجباري لليسار" → correct:false
2. ID 664 — "اتجاه اجباري الى الامام" → correct:false

External answers (alqemah):

```json
{
  "id": 783,
  "question": ".هذه الشاخصة الالزامية تعني",
  "answers": [
    {
      "id": "2457",
      "text": "اتجاه إجباري لأمام أو اليسار.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2458",
      "text": "اتجاه اجباري لليسار",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2459",
      "text": "اتجاه اجباري الى الامام",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2457"
  ],
  "quizOptionsAnswerMap": {
    "2457": "1",
    "2458": "0",
    "2459": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 217

- Our question text: هذه الشاخصة الالزامية تعني
- Matched external question: هذه الشاخصة الالزامية تعني
- External question id: 784
- Correct answer according to source: **إجبارية الدوران.**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2461]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 659 — "اتجاه إجباري إلى اليسار" → correct:false
1. ID 660 — "إجبارية الدوران." → correct:false ← SOURCE CORRECT
2. ID 661 — "ممنوع الدوران." → correct:false

External answers (alqemah):

```json
{
  "id": 784,
  "question": "هذه الشاخصة الالزامية تعني",
  "answers": [
    {
      "id": "2460",
      "text": "اتجاه إجباري إلى اليسار",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2461",
      "text": "إجبارية الدوران.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2462",
      "text": "ممنوع الدوران.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2461"
  ],
  "quizOptionsAnswerMap": {
    "2460": "0",
    "2461": "1",
    "2462": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 209

- Our question text: هذه الشاخصة تعني
- Matched external question: هذه الشاخصة تعني
- External question id: 792
- Correct answer according to source: **نهاية حد السرعة المدون في الشاخصة.**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2485]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 635 — "نهاية السرعة الدنيا المسموح بها" → correct:false
1. ID 636 — "نهاية حد السرعة المدون في الشاخصة." → correct:false ← SOURCE CORRECT
2. ID 637 — "السرعات القصوى للمركبات." → correct:false

External answers (alqemah):

```json
{
  "id": 792,
  "question": "هذه الشاخصة تعني",
  "answers": [
    {
      "id": "2484",
      "text": "نهاية السرعة الدنيا المسموح بها",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2485",
      "text": "نهاية حد السرعة المدون في الشاخصة.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2486",
      "text": "السرعات القصوى للمركبات.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2485"
  ],
  "quizOptionsAnswerMap": {
    "2484": "0",
    "2485": "1",
    "2486": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 476

- Our question text: اذا كان هناك مركبتان متقابلتان على التقاطع تقع كل منهما على يسار الاخرى وكانت احداهما تشير الى انها ستتجه الى اليسار والاخرى بإستقامة تكون الاولوية:
- Matched external question: اذا كان هناك مركبتان متقابلتان على التقاطع تقع كل منهما على يسار الاخرى وكانت احداهما تشير الى انها ستتجه الى اليسار والاخرى بإستقامة تكون الاولوية:
- External question id: 875
- Correct answer according to source: **للمركبة المتجه بإستقامة.**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[2706]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2200 — "للمركبة المتجه بإستقامة." → correct:false ← SOURCE CORRECT
1. ID 2201 — "للمركبة المتجه الى اليسار" → correct:false
2. ID 2202 — "لمن يسبق قبل الاخر." → correct:false

External answers (alqemah):

```json
{
  "id": 875,
  "question": "اذا كان هناك مركبتان متقابلتان على التقاطع تقع كل منهما على يسار الاخرى وكانت احداهما تشير الى انها ستتجه الى اليسار والاخرى بإستقامة تكون الاولوية:",
  "answers": [
    {
      "id": "2706",
      "text": "للمركبة المتجه بإستقامة.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2707",
      "text": "للمركبة المتجه الى اليسار",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2708",
      "text": "لمن يسبق قبل الاخر .",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2706"
  ],
  "quizOptionsAnswerMap": {
    "2706": "1",
    "2707": "0",
    "2708": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 493

- Our question text: الضوء الاحمر المتقطع المخصص لعبور المشاة في الاشارة الضوئية يعني:
- Matched external question: الضوء الاحمر المتقطع المخصص لعبور المشاة في الاشارة الضوئية يعني:
- External question id: 892
- Correct answer according to source: **عدم الشروع في عبور الطريق واتمام العبور بعد البدء فيه**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2755]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2249 — "السماح للمشاة بعبور الطريق" → correct:false
1. ID 2250 — "عدم الشروع في عبور الطريق واتمام العبور بعد البدء فيه" → correct:false ← SOURCE CORRECT
2. ID 2251 — "منع المشاة من عبور الطريق" → correct:false

External answers (alqemah):

```json
{
  "id": 892,
  "question": "الضوء الاحمر المتقطع المخصص لعبور المشاة في الاشارة الضوئية يعني:",
  "answers": [
    {
      "id": "2754",
      "text": "السماح للمشاة بعبور الطريق",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2755",
      "text": "عدم الشروع في عبور الطريق واتمام العبور بعد البدء فيه",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2756",
      "text": "منع المشاة من عبور الطريق",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2755"
  ],
  "quizOptionsAnswerMap": {
    "2754": "0",
    "2755": "1",
    "2756": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 495

- Our question text: الضوء المخصص لمنع عبور المشاة من خلال الاشارة الضوئية هو:
- Matched external question: الضوء المخصص لمنع عبور المشاة من خلال الاشارة الضوئية هو:
- External question id: 894
- Correct answer according to source: **الضوء الاحمر المخصص للمشاة.**
- Answer index: **2**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 2)
  - alqemah quizOptions question_answer[2763]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2256 — "الضوء الاخضر المخصص للمشاة." → correct:false
1. ID 2257 — "الضوء الاخضر المتقطع المخصص للمشاة." → correct:false
2. ID 2258 — "الضوء الاحمر المخصص للمشاة." → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 894,
  "question": "الضوء المخصص لمنع عبور المشاة من خلال الاشارة الضوئية هو:",
  "answers": [
    {
      "id": "2761",
      "text": "الضوء الاخضر المخصص للمشاة.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2762",
      "text": "الضوء الاخضر المتقطع المخصص للمشاة.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2763",
      "text": "الضوء الاحمر المخصص للمشاة.",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2763"
  ],
  "quizOptionsAnswerMap": {
    "2761": "0",
    "2762": "0",
    "2763": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 511

- Our question text: وظيفة مضخة الوقود:
- Matched external question: وظيفة مضخة الوقود:
- External question id: 536
- Correct answer according to source: **تقوم مضخة الوقود بسحب ( امتصاص) الوقود من الخزان وتوصيله الى المازج.**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[1718]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2297 — "تقوم مضخة الوقود بسحب ( امتصاص) الوقود من الخزان وتوصيله الى المازج." → correct:false ← SOURCE CORRECT
1. ID 2298 — "تقوم مضخة الوقود بدفع ( امتصاص) الوقود الى الخزان من المازج." → correct:false
2. ID 2299 — "تقوم مضخة الوقود بسحب ( امتصاص) الوقود من الخزان وتوصيله الى فلتر الهواء" → correct:false

External answers (alqemah):

```json
{
  "id": 536,
  "question": "وظيفة مضخة الوقود:",
  "answers": [
    {
      "id": "1718",
      "text": "تقوم مضخة الوقود بسحب ( امتصاص) الوقود من الخزان وتوصيله الى المازج .",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "1719",
      "text": "تقوم مضخة الوقود بدفع ( امتصاص) الوقود الى الخزان من المازج .",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "1720",
      "text": "تقوم مضخة الوقود بسحب ( امتصاص) الوقود من الخزان وتوصيله الى فلتر الهواء",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "1718"
  ],
  "quizOptionsAnswerMap": {
    "1718": "1",
    "1719": "0",
    "1720": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 621

- Our question text: تشير حركة يد الشرطي الموضحة في الصورة التي امامك الى :
- Matched external question: تشير حركة يد الشرطي الموضحة في الصورة التي امامك الى :
- External question id: 909
- Correct answer according to source: **ايقاف حركة مرور المركبات.**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[2803]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2616 — "ايقاف حركة مرور المركبات." → correct:false ← SOURCE CORRECT
1. ID 2617 — "تخفيف سرعة المركبات." → correct:false
2. ID 2618 — "تمرير المركبات القادمة من جانب الطريق وايقاف المركبات القادمة من الامام و الخلف." → correct:false

External answers (alqemah):

```json
{
  "id": 909,
  "question": "تشير حركة يد الشرطي الموضحة في الصورة التي امامك الى :",
  "answers": [
    {
      "id": "2803",
      "text": "ايقاف حركة مرور المركبات .",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2804",
      "text": "تخفيف سرعة المركبات .",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2805",
      "text": "تمرير المركبات القادمة من جانب الطريق وايقاف المركبات القادمة من الامام و الخلف.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2803"
  ],
  "quizOptionsAnswerMap": {
    "2803": "1",
    "2804": "0",
    "2805": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 622

- Our question text: تشير حركة يد الشرطي الموضحة في الصورة التي امامك الى :
- Matched external question: تشير حركة يد الشرطي الموضحة في الصورة التي امامك الى :
- External question id: 910
- Correct answer according to source: **تخفيف سرعة المركبات.**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2807]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2619 — "ايقاف حركة مرور المركبات" → correct:false
1. ID 2620 — "تخفيف سرعة المركبات." → correct:false ← SOURCE CORRECT
2. ID 2621 — "تمرير حركة المرور وتكون الاشارة بالذراع نحو المركبات المطلوب تحريكها." → correct:false

External answers (alqemah):

```json
{
  "id": 910,
  "question": "تشير حركة يد الشرطي الموضحة في الصورة التي امامك الى :",
  "answers": [
    {
      "id": "2806",
      "text": "ايقاف حركة مرور المركبات",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2807",
      "text": "تخفيف سرعة المركبات .",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2808",
      "text": "تمرير حركة المرور وتكون الاشارة بالذراع نحو المركبات المطلوب تحريكها.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2807"
  ],
  "quizOptionsAnswerMap": {
    "2806": "0",
    "2807": "1",
    "2808": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 627

- Our question text: من الامور الواجب تفقدها بصورة مستمرة:
- Matched external question: من الامور الواجب تفقدها بصورة مستمرة:
- External question id: 915
- Correct answer according to source: **مستوى الزيت في المحرك والماء في المبرد.**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[2821]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2634 — "مستوى الزيت في المحرك والماء في المبرد." → correct:false ← SOURCE CORRECT
1. ID 2635 — "قشاط المروحة." → correct:false
2. ID 2636 — "مؤشر ساعة الحرارة" → correct:false

External answers (alqemah):

```json
{
  "id": 915,
  "question": "من الامور الواجب تفقدها بصورة مستمرة:",
  "answers": [
    {
      "id": "2821",
      "text": "مستوى الزيت في المحرك والماء في المبرد.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2822",
      "text": "قشاط المروحة.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2823",
      "text": "مؤشر ساعة الحرارة",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2821"
  ],
  "quizOptionsAnswerMap": {
    "2821": "1",
    "2822": "0",
    "2823": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 629

- Our question text: على سائق المركبة عند رؤيته لهذه الشاخصة:
- Matched external question: على سائق المركبة عند رؤيته لهذه الشاخصة:
- External question id: 917
- Correct answer according to source: **عدم سلوك هذا الطريق كونه مخصص للدراجات الهوائية.**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2828]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2640 — "سلوك هذا الطريق عند التأكد من خلوه من الدراجات الهوائية." → correct:false
1. ID 2641 — "عدم سلوك هذا الطريق كونه مخصص للدراجات الهوائية." → correct:false ← SOURCE CORRECT
2. ID 2642 — "لا شئ مما ذكر." → correct:false

External answers (alqemah):

```json
{
  "id": 917,
  "question": "على سائق المركبة عند رؤيته لهذه الشاخصة:",
  "answers": [
    {
      "id": "2827",
      "text": "سلوك هذا الطريق عند التأكد من خلوه من الدراجات الهوائية.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2828",
      "text": "عدم سلوك هذا الطريق كونه مخصص للدراجات الهوائية.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2829",
      "text": "لا شئ مما ذكر.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2828"
  ],
  "quizOptionsAnswerMap": {
    "2827": "0",
    "2828": "1",
    "2829": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 639

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Matched external question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- External question id: 927
- Correct answer according to source: **عدم سلوك هذا الطريق كونه مخصص لحركة المشاه فقط.**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2858]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2670 — "سلوك هذا الطريق بحذر كونه يوجد دوار." → correct:false
1. ID 2671 — "عدم سلوك هذا الطريق كونه مخصص لحركة المشاه فقط." → correct:false ← SOURCE CORRECT
2. ID 2672 — "لا شىء مما ذكر" → correct:false

External answers (alqemah):

```json
{
  "id": 927,
  "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
  "answers": [
    {
      "id": "2857",
      "text": "سلوك هذا الطريق بحذر كونه يوجد دوار.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2858",
      "text": "عدم سلوك هذا الطريق كونه مخصص لحركة المشاه فقط.",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2859",
      "text": "لا شىء مما ذكر",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2858"
  ],
  "quizOptionsAnswerMap": {
    "2857": "0",
    "2858": "1",
    "2859": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 643

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Matched external question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- External question id: 931
- Correct answer according to source: **طريق ذو اولوية**
- Answer index: **2**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 2)
  - alqemah quizOptions question_answer[2871]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2682 — "الوقوف التام بمركبتك." → correct:false
1. ID 2683 — "تخفيض سرعة مركبتك." → correct:false
2. ID 2684 — "طريق ذو اولوية" → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 931,
  "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
  "answers": [
    {
      "id": "2869",
      "text": "الوقوف التام بمركبتك.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2870",
      "text": "تخفيض سرعة مركبتك.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2871",
      "text": "طريق ذو اولوية",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2871"
  ],
  "quizOptionsAnswerMap": {
    "2869": "0",
    "2870": "0",
    "2871": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 644

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Matched external question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- External question id: 932
- Correct answer according to source: **الوقوف التام بمركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات صاحبة حق الاولوية.**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2873]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2685 — "زيادة سرعة مركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات الاخرى." → correct:false
1. ID 2686 — "الوقوف التام بمركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات صاحبة حق الاولوية." → correct:false ← SOURCE CORRECT
2. ID 2687 — "تخفيض سرعة مركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات الاخرى." → correct:false

External answers (alqemah):

```json
{
  "id": 932,
  "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
  "answers": [
    {
      "id": "2872",
      "text": "زيادة سرعة مركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات الاخرى.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2873",
      "text": "الوقوف التام بمركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات صاحبة حق الاولوية .",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2874",
      "text": "تخفيض سرعة مركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات الاخرى.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2873"
  ],
  "quizOptionsAnswerMap": {
    "2872": "0",
    "2873": "1",
    "2874": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 645

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Matched external question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- External question id: 933
- Correct answer according to source: **تخفيض سرعة مركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات صاحبة حق الاولوية.**
- Answer index: **2**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 2)
  - alqemah quizOptions question_answer[2877]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2688 — "زيادة سرعة مركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات الاخرى." → correct:false
1. ID 2689 — "الوقوف التام بمركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات الاخرى." → correct:false
2. ID 2690 — "تخفيض سرعة مركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات صاحبة حق الاولوية." → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 933,
  "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
  "answers": [
    {
      "id": "2875",
      "text": "زيادة سرعة مركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات الاخرى.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2876",
      "text": "الوقوف التام بمركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات الاخرى.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2877",
      "text": "تخفيض سرعة مركبتك قبل الوصول إلى التقاطع وإعطاء الاولوية للمركبات صاحبة حق الاولوية .",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2877"
  ],
  "quizOptionsAnswerMap": {
    "2875": "0",
    "2876": "0",
    "2877": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 647

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Matched external question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- External question id: 935
- Correct answer according to source: **تخفيض سرعة مركبتك لتستطيع تجنب ( الجمل).**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2882]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2694 — "زيادة سرعة مركبتك لتستطيع تجنب (الجمل)." → correct:false
1. ID 2695 — "تخفيض سرعة مركبتك لتستطيع تجنب ( الجمل)." → correct:false ← SOURCE CORRECT
2. ID 2696 — "المحافظة على نفس السرعة." → correct:false

External answers (alqemah):

```json
{
  "id": 935,
  "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
  "answers": [
    {
      "id": "2881",
      "text": "زيادة سرعة مركبتك لتستطيع تجنب (الجمل).",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2882",
      "text": "تخفيض سرعة مركبتك لتستطيع تجنب ( الجمل).",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2883",
      "text": "المحافظة على نفس السرعة.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2882"
  ],
  "quizOptionsAnswerMap": {
    "2881": "0",
    "2882": "1",
    "2883": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 655

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Matched external question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- External question id: 943
- Correct answer according to source: **تخفيض سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايمن من الطريق وعدم التجاوز.**
- Answer index: **2**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 2)
  - alqemah quizOptions question_answer[2907]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2718 — "تخفيض سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايسر من الطريق وعدم التجاوز." → correct:false
1. ID 2719 — "تخفيض سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايسر من الطريق وإمكانية التجاوز." → correct:false
2. ID 2720 — "تخفيض سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايمن من الطريق وعدم التجاوز." → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 943,
  "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
  "answers": [
    {
      "id": "2905",
      "text": "تخفيض سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايسر من الطريق وعدم التجاوز.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2906",
      "text": "تخفيض سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايسر من الطريق وإمكانية التجاوز.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2907",
      "text": "تخفيض سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايمن من الطريق وعدم التجاوز.",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2907"
  ],
  "quizOptionsAnswerMap": {
    "2905": "0",
    "2906": "0",
    "2907": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 656

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Matched external question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- External question id: 944
- Correct answer according to source: **تخفيض سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايمن من الطريق وعدم التجاوز**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[2908]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2721 — "تخفيض سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايمن من الطريق وعدم التجاوز" → correct:false ← SOURCE CORRECT
1. ID 2722 — "زيادة سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايمن من الطريق وعدم التجاوز." → correct:false
2. ID 2723 — "تخفيض سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايسر من الطريق وعدم التجاوز." → correct:false

External answers (alqemah):

```json
{
  "id": 944,
  "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
  "answers": [
    {
      "id": "2908",
      "text": "تخفيض سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايمن من الطريق وعدم التجاوز",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2909",
      "text": "زيادة سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايمن من الطريق وعدم التجاوز.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2910",
      "text": "تخفيض سرعة مركبتك والالتزام بحدود السرعة المقررة والجانب الايسر من الطريق وعدم التجاوز.",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2908"
  ],
  "quizOptionsAnswerMap": {
    "2908": "1",
    "2909": "0",
    "2910": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 661

- Our question text: ان سائق المركبة الحمراء يزعج بضوئه سائق المركبة الموجودة في الامام (الصفراء) لانه :
- Matched external question: ان سائق المركبة الحمراء يزعج بضوئه سائق المركبة الموجودة في الامام (الصفراء) لانه :
- External question id: 949
- Correct answer according to source: **يسير ملاصقا له**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[2923]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2736 — "يسير ملاصقا له" → correct:false ← SOURCE CORRECT
1. ID 2737 — "لا يسير ملاصقا له." → correct:false

External answers (alqemah):

```json
{
  "id": 949,
  "question": "ان سائق المركبة الحمراء يزعج بضوئه سائق المركبة الموجودة في الامام (الصفراء) لانه :",
  "answers": [
    {
      "id": "2923",
      "text": "يسير ملاصقا له",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2924",
      "text": "لا يسير ملاصقا له .",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2923"
  ],
  "quizOptionsAnswerMap": {
    "2923": "1",
    "2924": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 671

- Our question text: في الصورة التي امامك وقوف المركبة الحمراء :
- Matched external question: في الصورة التي امامك وقوف المركبة الحمراء :
- External question id: 959
- Correct answer according to source: **غير صحيح**
- Answer index: **1**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 1)
  - alqemah quizOptions question_answer[2948]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2760 — "صحيح" → correct:false
1. ID 2761 — "غير صحيح" → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 959,
  "question": "في الصورة التي امامك وقوف المركبة الحمراء :",
  "answers": [
    {
      "id": "2947",
      "text": "صحيح",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2948",
      "text": "غير صحيح",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2948"
  ],
  "quizOptionsAnswerMap": {
    "2947": "0",
    "2948": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 681

- Our question text: الاجراء الذي يجب ان يقوم به سائق المركبة رقم 1
- Matched external question: الاجراء الذي يجب ان يقوم به سائق المركبة رقم 1
- External question id: 969
- Correct answer according to source: **تخفيف السرعة وإتخاذ اقصى اليمين**
- Answer index: **0**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 0)
  - alqemah quizOptions question_answer[2967]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2780 — "تخفيف السرعة وإتخاذ اقصى اليمين" → correct:false ← SOURCE CORRECT
1. ID 2781 — "زيادة السرعة وإتخاذ اقصى اليمين" → correct:false
2. ID 2782 — "لا شئ مما ذكر" → correct:false

External answers (alqemah):

```json
{
  "id": 969,
  "question": "الاجراء الذي يجب ان يقوم به سائق المركبة رقم 1",
  "answers": [
    {
      "id": "2967",
      "text": "تخفيف السرعة وإتخاذ اقصى اليمين",
      "correctFlag": false,
      "correctFromOptions": true
    },
    {
      "id": "2968",
      "text": "زيادة السرعة وإتخاذ اقصى اليمين",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "2969",
      "text": "لا شئ مما ذكر",
      "correctFlag": false,
      "correctFromOptions": false
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "2967"
  ],
  "quizOptionsAnswerMap": {
    "2967": "1",
    "2968": "0",
    "2969": "0"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

### Question ID 697

- Our question text: كما هو موضح بالرسم فإن الاولوية تكون:
- Matched external question: كما هو موضح بالرسم فإن الاولوية تكون:
- External question id: 996
- Correct answer according to source: **للمشاة**
- Answer index: **2**
- External source: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Confidence: high
- Evidence:
  - exact normalized question text
  - identical normalized answer texts in same order
  - unique strong alqemah match count=1 (all map to same answer index 2)
  - alqemah quizOptions question_answer[3033]=1
  - trainingdriving live HTML/options do not expose keys (quizOptions decode to [] / ays_answer_correct all 0) — cannot cross-check answer

Our answer choices:

0. ID 2820 — "للمركبة رقم 1." → correct:false
1. ID 2821 — "للمركبة رقم 2." → correct:false
2. ID 2822 — "للمشاة" → correct:false ← SOURCE CORRECT

External answers (alqemah):

```json
{
  "id": 996,
  "question": "كما هو موضح بالرسم فإن الاولوية تكون:",
  "answers": [
    {
      "id": "3031",
      "text": "للمركبة رقم 1.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "3032",
      "text": "للمركبة رقم 2.",
      "correctFlag": false,
      "correctFromOptions": false
    },
    {
      "id": "3033",
      "text": "للمشاة",
      "correctFlag": false,
      "correctFromOptions": true
    }
  ],
  "optionsOnesCount": 1,
  "optionsOnesInMap": [
    "3033"
  ],
  "quizOptionsAnswerMap": {
    "3031": "0",
    "3032": "0",
    "3033": "1"
  },
  "score": 8,
  "evidence": [
    "exact normalized question text",
    "identical normalized answer texts in same order"
  ]
}
```

## Conflicting mappings

### Question ID 157

- Question: هذه الشاخصة التحذيرية تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=2, 1

### Question ID 156

- Question: هذه الشاخصة التحذيرية تعني :
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=2, 1

### Question ID 147

- Question: هذه الشاخصة التحذيرية تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=2, 1

### Question ID 146

- Question: هذه الشاخصة التحذيرية تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=2, 1

### Question ID 142

- Question: هذه الشاخصة التحذيرية تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=1, 2

### Question ID 141

- Question: هذه الشاخصة التحذيرية تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=1, 2

### Question ID 139

- Question: هذه الشاخصة التحذيرية تعني :
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=0, 1

### Question ID 138

- Question: هذه الشاخصة التحذيرية تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=0, 1

### Question ID 136

- Question: .هذه الشاخصة التحذيرية تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=1, 0

### Question ID 135

- Question: هذه الشاخصة التحذيرية تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=1, 0

### Question ID 131

- Question: هذه الشاخصة التحذيرية تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=0, 1

### Question ID 257

- Question: علامة الرصيف تعني:
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=2, 0

### Question ID 255

- Question: علامة الرصيف تعني:
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=2, 0

### Question ID 253

- Question: هذه العلامة الارضيه تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=1, 2

### Question ID 252

- Question: هذه العلامة الارضيه تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=1, 2

### Question ID 251

- Question: هذه العلامة الارضيه تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=1, 2

### Question ID 230

- Question: هذه الشاخصة الارشادية تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=2, 1

### Question ID 229

- Question: هذه الشاخصة الارشادية تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=2, 1

### Question ID 203

- Question: هذه الشاخصة تعني
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=0, 2

### Question ID 600

- Question: في الصورة التي امامك تكون الاولوية:
- Evidence: multiple strong alqemah matches map to different answer indexes: 0, 1; candidate external id 981 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 987 -> our index 1 (للمركبة رقم 2.); exact normalized question text; identical normalized answer texts in same order; candidate external id 985 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 979 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 983 -> our index 1 (للمركبة رقم 2.); exact normalized question text; identical normalized answer texts in same order

### Question ID 601

- Question: في الصورة التي امامك تكون الاولوية:
- Evidence: multiple strong alqemah matches map to different answer indexes: 0, 1; candidate external id 981 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 987 -> our index 1 (للمركبة رقم 2); exact normalized question text; identical normalized answer texts in same order; candidate external id 985 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 979 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 983 -> our index 1 (للمركبة رقم 2); exact normalized question text; identical normalized answer texts in same order

### Question ID 602

- Question: في الصورة التي امامك تكون الاولوية
- Evidence: multiple strong alqemah matches map to different answer indexes: 0, 1; candidate external id 981 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 987 -> our index 1 (للمركبة رقم 2); exact normalized question text; identical normalized answer texts in same order; candidate external id 985 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 979 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 983 -> our index 1 (للمركبة رقم 2); exact normalized question text; identical normalized answer texts in same order

### Question ID 603

- Question: في الصورة التي امامك تكون الاولوية:
- Evidence: multiple strong alqemah matches map to different answer indexes: 0, 1; candidate external id 981 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 987 -> our index 1 (للمركبة رقم 2); exact normalized question text; identical normalized answer texts in same order; candidate external id 985 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 979 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 983 -> our index 1 (للمركبة رقم 2); exact normalized question text; identical normalized answer texts in same order

### Question ID 604

- Question: في الصورة التي امامك تكون الاولوية:
- Evidence: multiple strong alqemah matches map to different answer indexes: 0, 1; candidate external id 981 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 987 -> our index 1 (للمركبة رقم 2); exact normalized question text; identical normalized answer texts in same order; candidate external id 985 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 979 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 983 -> our index 1 (للمركبة رقم 2); exact normalized question text; identical normalized answer texts in same order

### Question ID 605

- Question: في الصورة التي امامك تكون الاولوية:
- Evidence: multiple strong alqemah matches map to different answer indexes: 0, 1; candidate external id 981 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 987 -> our index 1 (للمركبة رقم 2); exact normalized question text; identical normalized answer texts in same order; candidate external id 985 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 979 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 983 -> our index 1 (للمركبة رقم 2); exact normalized question text; identical normalized answer texts in same order

### Question ID 606

- Question: في الصورة التي امامك تكون الاولوية:
- Evidence: multiple strong alqemah matches map to different answer indexes: 0, 1; candidate external id 981 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 987 -> our index 1 (للمركبة رقم 2); exact normalized question text; identical normalized answer texts in same order; candidate external id 985 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 979 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 983 -> our index 1 (للمركبة رقم 2); exact normalized question text; identical normalized answer texts in same order

### Question ID 653

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=1, 0

### Question ID 654

- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Evidence: weaker identity matches (e.g. yes/no stem without image/IDs, or unordered answer set) produce different answer indexes; indexes=1, 0

### Question ID 690

- Question: في الصورة التي امامك تكون الاولوية:
- Evidence: multiple strong alqemah matches map to different answer indexes: 0, 1; candidate external id 981 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 987 -> our index 1 (للمركبة رقم 2.); exact normalized question text; identical normalized answer texts in same order; candidate external id 985 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 979 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 983 -> our index 1 (للمركبة رقم 2.); exact normalized question text; identical normalized answer texts in same order

### Question ID 691

- Question: في الصورة التي امامك تكون الاولوية:
- Evidence: multiple strong alqemah matches map to different answer indexes: 0, 1; candidate external id 981 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 987 -> our index 1 (للمركبة رقم 2.); exact normalized question text; identical normalized answer texts in same order; candidate external id 985 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 979 -> our index 0 (للمركبة رقم 1.); exact normalized question text; identical normalized answer texts in same order; candidate external id 983 -> our index 1 (للمركبة رقم 2.); exact normalized question text; identical normalized answer texts in same order

## Unresolved missing questions

Count: 389

### Question ID 188

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-021642-1.jpg / 4787
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (ممنوع مرور المركات القاطرة والمقطورة.) — NOT applied

Our answer choices:

0. ID 571 — "ممنوع مرور المركبات الالية" → correct:false
1. ID 572 — "ممنوع مرور المركات القاطرة والمقطورة." → correct:false
2. ID 573 — "ممنوع مرور المركبات المعدة لنقل البضائع" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 188,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "571",
        "text": "ممنوع مرور المركبات الالية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "572",
        "text": "ممنوع مرور المركات القاطرة والمقطورة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "573",
        "text": "ممنوع مرور المركبات المعدة لنقل البضائع",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 111,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "347",
        "text": "ممنوع مرور المركات القاطرة والمقطورة.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "346",
        "text": "ممنوع مرور المركبات الالية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "348",
        "text": "ممنوع مرور المركبات المعدة لنقل البضائع",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "347"
    ],
    "quizOptionsAnswerMap": {
      "346": "0",
      "347": "1",
      "348": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 187

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-021538.jpg / 2345
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (ممنوع مرور المركبات المعدة لنقل البضائع .) — NOT applied

Our answer choices:

0. ID 568 — "ممنوع مرور المركبات." → correct:false
1. ID 569 — "ممنوع المرور." → correct:false
2. ID 570 — "ممنوع مرور المركبات المعدة لنقل البضائع ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 187,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "568",
        "text": "ممنوع مرور المركبات.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "569",
        "text": "ممنوع المرور.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "570",
        "text": "ممنوع مرور المركبات المعدة لنقل البضائع .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 112,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "350",
        "text": "ممنوع المرور.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "349",
        "text": "ممنوع مرور المركبات المعدة لنقل البضائع .",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "351",
        "text": "ممنوع مرور المركبات.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "349"
    ],
    "quizOptionsAnswerMap": {
      "349": "1",
      "350": "0",
      "351": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 186

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-021430.jpg / 2344
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (ممنوع مرور الدراجات ذات المحرك الصغير.) — NOT applied

Our answer choices:

0. ID 565 — "ممنوع مرور المركبات الالية" → correct:false
1. ID 566 — "ممنوع مرور الدراجات النارية." → correct:false
2. ID 567 — "ممنوع مرور الدراجات ذات المحرك الصغير." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 186,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "565",
        "text": "ممنوع مرور المركبات الالية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "566",
        "text": "ممنوع مرور الدراجات النارية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "567",
        "text": "ممنوع مرور الدراجات ذات المحرك الصغير.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 114,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "357",
        "text": "ممنوع مرور الدراجات النارية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "356",
        "text": "ممنوع مرور المركبات الالية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "358",
        "text": "ممنوع مرور الدراجات ذات المحرك الصغير.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "358"
    ],
    "quizOptionsAnswerMap": {
      "356": "0",
      "357": "0",
      "358": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 185

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-021320.jpg / 2343
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (ممنوع مرور الدراجات الهوائية) — NOT applied

Our answer choices:

0. ID 562 — "ممنوع مرور المركبات الالية" → correct:false
1. ID 563 — "ممنوع مرور الدراجات النارية." → correct:false
2. ID 564 — "ممنوع مرور الدراجات الهوائية" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 185,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "562",
        "text": "ممنوع مرور المركبات الالية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "563",
        "text": "ممنوع مرور الدراجات النارية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "564",
        "text": "ممنوع مرور الدراجات الهوائية",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 115,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "361",
        "text": "ممنوع مرور الدراجات الهوائية",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "359",
        "text": "ممنوع مرور المركبات الالية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "360",
        "text": "ممنوع مرور الدراجات النارية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "361"
    ],
    "quizOptionsAnswerMap": {
      "359": "0",
      "360": "0",
      "361": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 183

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-021011.jpg / 2341
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ممنوع مرور المركبات الالية) — NOT applied

Our answer choices:

0. ID 556 — "ممنوع مرور المركبات الالية" → correct:false
1. ID 557 — "أفضلية المرور لك." → correct:false
2. ID 558 — "يسمح بمرور الاليات" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 183,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "556",
        "text": "ممنوع مرور المركبات الالية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "557",
        "text": "أفضلية المرور لك.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "558",
        "text": "يسمح بمرور الاليات",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 119,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "373",
        "text": "ممنوع مرور المركبات الالية",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "375",
        "text": "يسمح بمرور الاليات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "374",
        "text": "أفضلية المرور لك.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "373"
    ],
    "quizOptionsAnswerMap": {
      "373": "1",
      "374": "0",
      "375": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 181

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-020737.jpg / 2339
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ممنوع مرور المركبات بالاتجاهين) — NOT applied

Our answer choices:

0. ID 550 — "ممنوع مرور المركبات بالاتجاهين" → correct:false
1. ID 551 — "أفضلية المرور لك." → correct:false
2. ID 552 — "ممنوع المرور." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 181,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "550",
        "text": "ممنوع مرور المركبات بالاتجاهين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "551",
        "text": "أفضلية المرور لك.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "552",
        "text": "ممنوع المرور.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 122,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "383",
        "text": "ممنوع مرور المركبات بالاتجاهين",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "385",
        "text": "ممنوع المرور.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "384",
        "text": "أفضلية المرور لك.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "383"
    ],
    "quizOptionsAnswerMap": {
      "383": "1",
      "384": "0",
      "385": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 180

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-020630.jpg / 2338
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (أفضلية المرور لك.) — NOT applied

Our answer choices:

0. ID 547 — "نهاية طريق رئيسي." → correct:false
1. ID 548 — "أفضلية المرور لك." → correct:false
2. ID 549 — "طريق رئيسي." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 180,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "547",
        "text": "نهاية طريق رئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "548",
        "text": "أفضلية المرور لك.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "549",
        "text": "طريق رئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 124,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "390",
        "text": "نهاية طريق رئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "392",
        "text": "طريق رئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "391",
        "text": "أفضلية المرور لك.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "391"
    ],
    "quizOptionsAnswerMap": {
      "390": "0",
      "391": "1",
      "392": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 179

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-020448.jpg / 2337
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 544 — "نهاية طريق رئيسي." → correct:false
1. ID 545 — "افضلية المرور لك." → correct:false
2. ID 546 — "الاولوية للقادمين من الجهة المقابلة." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 179,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "544",
        "text": "نهاية طريق رئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "545",
        "text": "افضلية المرور لك.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "546",
        "text": "الاولوية للقادمين من الجهة المقابلة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 178

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-020345.jpg / 2336
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 541 — "نهاية الطريق ذات الاولوية." → correct:false
1. ID 542 — "امامك شاخصة اعطي الاولوية." → correct:false
2. ID 543 — "بداية طريق ذو اولوية." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 178,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "541",
        "text": "نهاية الطريق ذات الاولوية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "542",
        "text": "امامك شاخصة اعطي الاولوية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "543",
        "text": "بداية طريق ذو اولوية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 177

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-020232.jpg / 2335
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (طريق ذو اولوية .) — NOT applied

Our answer choices:

0. ID 538 — "نهاية الطريق ذات الاولوية" → correct:false
1. ID 539 — "أمامك شاخصة اعطي الاولوية." → correct:false
2. ID 540 — "طريق ذو اولوية ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 177,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "538",
        "text": "نهاية الطريق ذات الاولوية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "539",
        "text": "أمامك شاخصة اعطي الاولوية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "540",
        "text": "طريق ذو اولوية .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 127,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "400",
        "text": "أمامك شاخصة اعطي الاولوية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "399",
        "text": "نهاية الطريق ذات الاولوية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "401",
        "text": "طريق ذو اولوية .",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "401"
    ],
    "quizOptionsAnswerMap": {
      "399": "0",
      "400": "0",
      "401": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 176

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-020130.jpg / 2334
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (اعطي الاولوية.) — NOT applied

Our answer choices:

0. ID 535 — "طريق خطر." → correct:false
1. ID 536 — "طريق رئيسي." → correct:false
2. ID 537 — "اعطي الاولوية." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 176,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "535",
        "text": "طريق خطر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "536",
        "text": "طريق رئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "537",
        "text": "اعطي الاولوية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 130,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "412",
        "text": "اعطي الاولوية.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "411",
        "text": "طريق رئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "410",
        "text": "طريق خطر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "412"
    ],
    "quizOptionsAnswerMap": {
      "410": "0",
      "411": "0",
      "412": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 175

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-015746.jpg / 2333
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (وجوب الوقوف) — NOT applied

Our answer choices:

0. ID 532 — "امامك تقاطع" → correct:false
1. ID 533 — "امامك دوار" → correct:false
2. ID 534 — "وجوب الوقوف" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 175,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "532",
        "text": "امامك تقاطع",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "533",
        "text": "امامك دوار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "534",
        "text": "وجوب الوقوف",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 132,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "418",
        "text": "امامك دوار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "419",
        "text": "وجوب الوقوف",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "417",
        "text": "امامك تقاطع",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "419"
    ],
    "quizOptionsAnswerMap": {
      "417": "0",
      "418": "0",
      "419": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 174

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-015301.jpg / 2332
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (امامك شاخصة اعط الاولوية.) — NOT applied

Our answer choices:

0. ID 529 — "طريق خطر" → correct:false
1. ID 530 — "امامك شاخصة اعط الاولوية." → correct:false
2. ID 531 — "طريق رئيسي" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 174,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "529",
        "text": "طريق خطر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "530",
        "text": "امامك شاخصة اعط الاولوية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "531",
        "text": "طريق رئيسي",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 136,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "434",
        "text": "امامك شاخصة اعط الاولوية.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "433",
        "text": "طريق رئيسي",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "432",
        "text": "طريق خطر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "434"
    ],
    "quizOptionsAnswerMap": {
      "432": "0",
      "433": "0",
      "434": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 172

- Our question text: من أولويات المرور للمشاة:
- Section: الشواخص والاشارات
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 522 — "ذوي الاحتياجات الخاصة او للكفيف الذي يحمل عصا بيضاء" → correct:false
1. ID 523 — "عند وجود اشارة ضوئية حمراء متقطعة او صفراء متقطعة او شاخصة قف على تقاطع الطرق" → correct:false
2. ID 524 — "عندما تكون الاشارة الضوئية الخاصة بمرور المشاة خضراء" → correct:false
3. ID 525 — "جميع ما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 171

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-014954.jpg / 2330
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (تقاطع طريق رئيسي مع فرعي من جهة اليسار.) — NOT applied

Our answer choices:

0. ID 519 — "تقاطع طريق رئيسي مع فرعي من جهة اليسار." → correct:false
1. ID 520 — "تقاطع طريق رئيسي مع فرعي من جهة اليمين." → correct:false
2. ID 521 — "تقاطع طريق رئيسي مع طريق رئيسي." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 171,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "519",
        "text": "تقاطع طريق رئيسي مع فرعي من جهة اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "520",
        "text": "تقاطع طريق رئيسي مع فرعي من جهة اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "521",
        "text": "تقاطع طريق رئيسي مع طريق رئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 145,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "463",
        "text": "تقاطع طريق رئيسي مع فرعي من جهة اليسار.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "464",
        "text": "تقاطع طريق رئيسي مع طريق رئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "462",
        "text": "تقاطع طريق رئيسي مع فرعي من جهة اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "463"
    ],
    "quizOptionsAnswerMap": {
      "462": "0",
      "463": "1",
      "464": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 170

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-014843.jpg / 2329
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (تقاطع طريق رئيسي مع طريقين فرعيين) — NOT applied

Our answer choices:

0. ID 516 — "أمامك تقاطع." → correct:false
1. ID 517 — "تقاطع طريق رئيسي مع طريقين فرعيين" → correct:false
2. ID 518 — "تقاطع فرعي." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 170,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "516",
        "text": "أمامك تقاطع.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "517",
        "text": "تقاطع طريق رئيسي مع طريقين فرعيين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "518",
        "text": "تقاطع فرعي.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 147,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "471",
        "text": "تقاطع فرعي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "469",
        "text": "أمامك تقاطع.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "470",
        "text": "تقاطع طريق رئيسي مع طريقين فرعيين",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "470"
    ],
    "quizOptionsAnswerMap": {
      "469": "0",
      "470": "1",
      "471": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 169

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-014732-1-1.jpg / 4810
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (أمامك شاخصة قف) — NOT applied

Our answer choices:

0. ID 513 — "أمامك تقاطع" → correct:false
1. ID 514 — "امامك دوار." → correct:false
2. ID 515 — "أمامك شاخصة قف" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 169,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "513",
        "text": "أمامك تقاطع",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "514",
        "text": "امامك دوار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "515",
        "text": "أمامك شاخصة قف",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 150,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "479",
        "text": "أمامك شاخصة قف",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "481",
        "text": "امامك دوار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "480",
        "text": "أمامك تقاطع",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "479"
    ],
    "quizOptionsAnswerMap": {
      "479": "1",
      "480": "0",
      "481": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 168

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-014407.jpg / 2327
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (أمامك دوار) — NOT applied

Our answer choices:

0. ID 510 — "طريق خطر" → correct:false
1. ID 511 — "يجب الدوران." → correct:false
2. ID 512 — "أمامك دوار" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 168,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "510",
        "text": "طريق خطر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "511",
        "text": "يجب الدوران.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "512",
        "text": "أمامك دوار",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 153,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "490",
        "text": "يجب الدوران.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "489",
        "text": "طريق خطر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "491",
        "text": "أمامك دوار",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "491"
    ],
    "quizOptionsAnswerMap": {
      "489": "0",
      "490": "0",
      "491": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 167

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-014306.jpg / 2326
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (تقاطع متكافئ الحقوق.) — NOT applied

Our answer choices:

0. ID 507 — "طريق خطر" → correct:false
1. ID 508 — "خفض السرعة." → correct:false
2. ID 509 — "تقاطع متكافئ الحقوق." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 167,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "507",
        "text": "طريق خطر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "508",
        "text": "خفض السرعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "509",
        "text": "تقاطع متكافئ الحقوق.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 156,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "501",
        "text": "طريق خطر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "499",
        "text": "تقاطع متكافئ الحقوق.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "500",
        "text": "خفض السرعة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "499"
    ],
    "quizOptionsAnswerMap": {
      "499": "1",
      "500": "0",
      "501": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 166

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-014203.jpg / 2325
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (أخطار مختلفة) — NOT applied

Our answer choices:

0. ID 504 — "طريق غير خطر" → correct:false
1. ID 505 — "خفض السرعة" → correct:false
2. ID 506 — "أخطار مختلفة" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 166,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "504",
        "text": "طريق غير خطر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "505",
        "text": "خفض السرعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "506",
        "text": "أخطار مختلفة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 159,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "510",
        "text": "خفض السرعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "511",
        "text": "أخطار مختلفة",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "512",
        "text": "طريق غير خطر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "511"
    ],
    "quizOptionsAnswerMap": {
      "510": "0",
      "511": "1",
      "512": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 165

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-014041-1.jpg / 4789
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (مقاطع سكة حديد على أبعاد مختلفة من التقاطع) — NOT applied

Our answer choices:

0. ID 501 — "أمامك سكة حديد مع حاجز" → correct:false
1. ID 502 — "مقاطع سكة حديد على أبعاد مختلفة من التقاطع" → correct:false
2. ID 503 — "مقطع سكة حديد(خط واحد)" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 165,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "501",
        "text": "أمامك سكة حديد مع حاجز",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "502",
        "text": "مقاطع سكة حديد على أبعاد مختلفة من التقاطع",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "503",
        "text": "مقطع سكة حديد(خط واحد)",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 161,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "517",
        "text": "مقطع سكة حديد(خط واحد)",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "519",
        "text": "أمامك سكة حديد مع حاجز",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "518",
        "text": "مقاطع سكة حديد على أبعاد مختلفة من التقاطع",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "518"
    ],
    "quizOptionsAnswerMap": {
      "517": "0",
      "518": "1",
      "519": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 164

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-013908-3.jpg / 4790
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - identical question ID (bonus only; not identity by itself)
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (مقطع سكة حديد (أكثر من خط).) — NOT applied

Our answer choices:

0. ID 498 — "امامك سكة حديد مع حاجز." → correct:false
1. ID 499 — "مقطع سكة حديد (أكثر من خط)." → correct:false
2. ID 500 — "مقطع سكة حديد(خط واحد)" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 164,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "498",
        "text": "امامك سكة حديد مع حاجز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "499",
        "text": "مقطع سكة حديد (أكثر من خط).",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "500",
        "text": "مقطع سكة حديد(خط واحد)",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 164,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "529",
        "text": "مقطع سكة حديد (أكثر من خط).",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "528",
        "text": "امامك سكة حديد مع حاجز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "530",
        "text": "مقطع سكة حديد(خط واحد)",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "529"
    ],
    "quizOptionsAnswerMap": {
      "528": "0",
      "529": "1",
      "530": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set",
      "identical question ID (bonus only; not identity by itself)"
    ]
  }
}
```

### Question ID 163

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-013648.jpg / 2322
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (مقطع سكة حديد(خط واحد)) — NOT applied

Our answer choices:

0. ID 495 — "أمامك سكة حديد مع حاجز." → correct:false
1. ID 496 — "أمامك سكة حديد بدون حاجز." → correct:false
2. ID 497 — "مقطع سكة حديد(خط واحد)" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 163,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "495",
        "text": "أمامك سكة حديد مع حاجز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "496",
        "text": "أمامك سكة حديد بدون حاجز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "497",
        "text": "مقطع سكة حديد(خط واحد)",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 167,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "539",
        "text": "مقطع سكة حديد(خط واحد)",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "538",
        "text": "أمامك سكة حديد بدون حاجز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "537",
        "text": "أمامك سكة حديد مع حاجز.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "539"
    ],
    "quizOptionsAnswerMap": {
      "537": "0",
      "538": "0",
      "539": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 162

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-223034.jpg / 2321
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 492 — "أمامك سكة حديد مع حاجز" → correct:false
1. ID 493 — "امامك سكة حديد دون حاجز" → correct:false
2. ID 494 — "امامك قطار." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 162,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "492",
        "text": "أمامك سكة حديد مع حاجز",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "493",
        "text": "امامك سكة حديد دون حاجز",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "494",
        "text": "امامك قطار.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 160

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-222816.jpg / 2319
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (امامك نفق.) — NOT applied

Our answer choices:

0. ID 486 — "امامك نفق." → correct:false
1. ID 487 — "امامك جسر." → correct:false
2. ID 488 — "امامك طريق مفصول بجزيرة وسطية." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 160,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "486",
        "text": "امامك نفق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "487",
        "text": "امامك جسر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "488",
        "text": "امامك طريق مفصول بجزيرة وسطية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 194,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "632",
        "text": "امامك جسر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "633",
        "text": "امامك نفق.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "634",
        "text": "امامك طريق مفصول بجزيرة وسطية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "633"
    ],
    "quizOptionsAnswerMap": {
      "632": "0",
      "633": "1",
      "634": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 159

- Our question text: هذه الشاخصة التحذيرية تعني :
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-222713.jpg / 2318
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (إنتهاء الطريق المفصول بجزيرة وسطية.) — NOT applied

Our answer choices:

0. ID 483 — "طريق مفصول." → correct:false
1. ID 484 — "طريق ذو اتجاهين." → correct:false
2. ID 485 — "إنتهاء الطريق المفصول بجزيرة وسطية." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 159,
    "question": "هذه الشاخصة التحذيرية تعني :",
    "answers": [
      {
        "id": "483",
        "text": "طريق مفصول.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "484",
        "text": "طريق ذو اتجاهين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "485",
        "text": "إنتهاء الطريق المفصول بجزيرة وسطية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 196,
    "question": "هذه الشاخصة التحذيرية تعني :",
    "answers": [
      {
        "id": "639",
        "text": "إنتهاء الطريق المفصول بجزيرة وسطية.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "640",
        "text": "طريق ذو اتجاهين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "641",
        "text": "طريق مفصول.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "639"
    ],
    "quizOptionsAnswerMap": {
      "639": "1",
      "640": "0",
      "641": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 158

- Our question text: هذه الشاخصة التحذيرية تعني :
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-222605.jpg / 2317
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - image basename appears in external image URL
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (طريق ذو اتجاهين) — NOT applied

Our answer choices:

0. ID 480 — "طريق مفصول." → correct:false
1. ID 481 — "طريق ذو اتجاهين" → correct:false
2. ID 482 — "أمامك طريق مفصول بجزيرة وسطية." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 158,
    "question": "هذه الشاخصة التحذيرية تعني :",
    "answers": [
      {
        "id": "480",
        "text": "طريق مفصول.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "481",
        "text": "طريق ذو اتجاهين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "482",
        "text": "أمامك طريق مفصول بجزيرة وسطية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 200,
    "question": "هذه الشاخصة التحذيرية تعني :",
    "answers": [
      {
        "id": "654",
        "text": "طريق ذو اتجاهين",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "656",
        "text": "أمامك طريق مفصول بجزيرة وسطية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "655",
        "text": "طريق مفصول.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "654"
    ],
    "quizOptionsAnswerMap": {
      "654": "1",
      "655": "0",
      "656": "0"
    },
    "score": 9,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set",
      "image basename appears in external image URL"
    ]
  }
}
```

### Question ID 155

- Our question text: هذه الشاخصة التحذيرية تعني:
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-222037.jpg / 2313
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (منطقة طيران منخفض) — NOT applied

Our answer choices:

0. ID 471 — "أمامك مطار" → correct:false
1. ID 472 — "منطقة طيران منخفض" → correct:false
2. ID 473 — "منطقة خطرة." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 155,
    "question": "هذه الشاخصة التحذيرية تعني:",
    "answers": [
      {
        "id": "471",
        "text": "أمامك مطار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "472",
        "text": "منطقة طيران منخفض",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "473",
        "text": "منطقة خطرة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 209,
    "question": "هذه الشاخصة التحذيرية تعني:",
    "answers": [
      {
        "id": "688",
        "text": "منطقة طيران منخفض",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "687",
        "text": "منطقة خطرة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "689",
        "text": "أمامك مطار",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "688"
    ],
    "quizOptionsAnswerMap": {
      "687": "0",
      "688": "1",
      "689": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 154

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-221927.jpg / 2312
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (عبور حيوانات.) — NOT applied

Our answer choices:

0. ID 468 — "ممنوع مرور الحيوانات" → correct:false
1. ID 469 — "منطقة خطرة" → correct:false
2. ID 470 — "عبور حيوانات." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 154,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "468",
        "text": "ممنوع مرور الحيوانات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "469",
        "text": "منطقة خطرة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "470",
        "text": "عبور حيوانات.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 211,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "694",
        "text": "عبور حيوانات.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "696",
        "text": "ممنوع مرور الحيوانات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "695",
        "text": "منطقة خطرة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "694"
    ],
    "quizOptionsAnswerMap": {
      "694": "1",
      "695": "0",
      "696": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 151

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-050425.jpg / 2310
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (وجود طلاب مدارس.) — NOT applied

Our answer choices:

0. ID 459 — "أمامك مدرسة." → correct:false
1. ID 460 — "وجود طلاب مدارس." → correct:false
2. ID 461 — "ممر مشاة." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 151,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "459",
        "text": "أمامك مدرسة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "460",
        "text": "وجود طلاب مدارس.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "461",
        "text": "ممر مشاة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 217,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "717",
        "text": "أمامك مدرسة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "715",
        "text": "ممر مشاة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "716",
        "text": "وجود طلاب مدارس.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "716"
    ],
    "quizOptionsAnswerMap": {
      "715": "0",
      "716": "1",
      "717": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 150

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-050320.jpg / 2309
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ممر مشاة.) — NOT applied

Our answer choices:

0. ID 456 — "ممر مشاة." → correct:false
1. ID 457 — "وجود أطفال" → correct:false
2. ID 458 — "ممنوع المرور." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 150,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "456",
        "text": "ممر مشاة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "457",
        "text": "وجود أطفال",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "458",
        "text": "ممنوع المرور.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 220,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "728",
        "text": "ممر مشاة.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "726",
        "text": "ممنوع المرور.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "727",
        "text": "وجود أطفال",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "728"
    ],
    "quizOptionsAnswerMap": {
      "726": "0",
      "727": "0",
      "728": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 149

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-050208.jpg / 2308
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (تناثر حصى) — NOT applied

Our answer choices:

0. ID 453 — "طريق خطر" → correct:false
1. ID 454 — "طريق زلقة" → correct:false
2. ID 455 — "تناثر حصى" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 149,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "453",
        "text": "طريق خطر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "454",
        "text": "طريق زلقة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "455",
        "text": "تناثر حصى",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 223,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "737",
        "text": "طريق زلقة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "738",
        "text": "تناثر حصى",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "739",
        "text": "طريق خطر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "738"
    ],
    "quizOptionsAnswerMap": {
      "737": "0",
      "738": "1",
      "739": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 148

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-050105.jpg / 2307
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (طريق زلقة) — NOT applied

Our answer choices:

0. ID 450 — "اكتاف خطرة." → correct:false
1. ID 451 — "طريق زلقة" → correct:false
2. ID 452 — "تناثر حصى." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 148,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "450",
        "text": "اكتاف خطرة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "451",
        "text": "طريق زلقة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "452",
        "text": "تناثر حصى.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 227,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "754",
        "text": "اكتاف خطرة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "752",
        "text": "تناثر حصى.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "753",
        "text": "طريق زلقة",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "753"
    ],
    "quizOptionsAnswerMap": {
      "752": "0",
      "753": "1",
      "754": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 145

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-045701-3.jpg / 4797
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (اعمال على الطريق.) — NOT applied

Our answer choices:

0. ID 441 — "طريق غير مستوى." → correct:false
1. ID 442 — "يجب الانتباه." → correct:false
2. ID 443 — "اعمال على الطريق." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 145,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "441",
        "text": "طريق غير مستوى.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "442",
        "text": "يجب الانتباه.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "443",
        "text": "اعمال على الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 238,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "785",
        "text": "طريق غير مستوى.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "783",
        "text": "اعمال على الطريق.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "784",
        "text": "يجب الانتباه.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "783"
    ],
    "quizOptionsAnswerMap": {
      "783": "1",
      "784": "0",
      "785": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 144

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-045526-2.jpg / 4793
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (طريق ينتهي إلى رصيف بحر او نهر) — NOT applied

Our answer choices:

0. ID 438 — "طريق غير مستوى." → correct:false
1. ID 439 — "طريق ينتهي إلى رصيف بحر او نهر" → correct:false
2. ID 440 — "أمامك شاطئ بحر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 144,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "438",
        "text": "طريق غير مستوى.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "439",
        "text": "طريق ينتهي إلى رصيف بحر او نهر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "440",
        "text": "أمامك شاطئ بحر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 241,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "790",
        "text": "أمامك شاطئ بحر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "792",
        "text": "طريق غير مستوى.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "791",
        "text": "طريق ينتهي إلى رصيف بحر او نهر",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "791"
    ],
    "quizOptionsAnswerMap": {
      "790": "0",
      "791": "1",
      "792": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 143

- Our question text: هذه الشاخصة التحذيرية تعني.
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-045408-1.jpg / 4792
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (انخفاض في مستوى الطريق) — NOT applied

Our answer choices:

0. ID 435 — "انخفاض في مستوى الطريق" → correct:false
1. ID 436 — "طريق غير مستوى." → correct:false
2. ID 437 — "مطب." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 143,
    "question": "هذه الشاخصة التحذيرية تعني.",
    "answers": [
      {
        "id": "435",
        "text": "انخفاض في مستوى الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "436",
        "text": "طريق غير مستوى.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "437",
        "text": "مطب.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 244,
    "question": "هذه الشاخصة التحذيرية تعني.",
    "answers": [
      {
        "id": "797",
        "text": "مطب",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "799",
        "text": "انخفاض في مستوى الطريق",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "798",
        "text": "طريق غير مستوى",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "799"
    ],
    "quizOptionsAnswerMap": {
      "797": "0",
      "798": "0",
      "799": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 140

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-044621.jpg / 2299
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (تضيق جسر.) — NOT applied

Our answer choices:

0. ID 426 — "تضيق جسر." → correct:false
1. ID 427 — "تضيق الطريق من جهتين." → correct:false
2. ID 428 — "تضيق الطريق من اليمين." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 140,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "426",
        "text": "تضيق جسر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "427",
        "text": "تضيق الطريق من جهتين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "428",
        "text": "تضيق الطريق من اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 253,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "820",
        "text": "تضيق الطريق من اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "822",
        "text": "تضيق الطريق من جهتين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "821",
        "text": "تضيق جسر.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "821"
    ],
    "quizOptionsAnswerMap": {
      "820": "0",
      "821": "1",
      "822": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 137

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-044235.jpg / 2296
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 417 — "تضيق الطريق من جهتين." → correct:false
1. ID 418 — "امامك تضيق جسر ." → correct:false
2. ID 419 — "تضيق خطر." → correct:false
3. ID 3254 — "لا شي مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 137,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "417",
        "text": "تضيق الطريق من جهتين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "418",
        "text": "امامك تضيق جسر .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "419",
        "text": "تضيق خطر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "3254",
        "text": "لا شي مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 134

- Our question text: هذه الشاخصة التحذيرية تعني:
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-043908.jpg / 2293
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (منعطفان اولها لليمين) — NOT applied

Our answer choices:

0. ID 408 — "منعطفان اولها لليمين" → correct:false
1. ID 409 — "منعطفان خطرة." → correct:false
2. ID 410 — "منعطف لليمين." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 134,
    "question": "هذه الشاخصة التحذيرية تعني:",
    "answers": [
      {
        "id": "408",
        "text": "منعطفان اولها لليمين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "409",
        "text": "منعطفان خطرة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "410",
        "text": "منعطف لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 405,
    "question": "هذه الشاخصة التحذيرية تعني:",
    "answers": [
      {
        "id": "1332",
        "text": "منعطفان اولها لليمين",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1330",
        "text": "منعطف لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1331",
        "text": "منعطفان خطرة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1332"
    ],
    "quizOptionsAnswerMap": {
      "1330": "0",
      "1331": "0",
      "1332": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 133

- Our question text: هذه الشاخصة التحذيرية تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-043742.jpg / 2292
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (منعطفان اولها لليسار) — NOT applied

Our answer choices:

0. ID 405 — "منعطفان اولها لليسار" → correct:false
1. ID 406 — "منعطفان اولها لليمين." → correct:false
2. ID 407 — "منعطفات خطرة." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 133,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "405",
        "text": "منعطفان اولها لليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "406",
        "text": "منعطفان اولها لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "407",
        "text": "منعطفات خطرة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 406,
    "question": "هذه الشاخصة التحذيرية تعني",
    "answers": [
      {
        "id": "1334",
        "text": "منعطفان اولها لليسار",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1333",
        "text": "منعطفات خطرة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1335",
        "text": "منعطفان اولها لليمين",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1334"
    ],
    "quizOptionsAnswerMap": {
      "1333": "0",
      "1334": "1",
      "1335": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 132

- Our question text: هذه الشاخصة التحذيرية تعني :
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-043630.jpg / 2291
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 402 — "نعطف لليسار." → correct:false
1. ID 403 — "منعطف لليمين." → correct:false
2. ID 404 — "منعطف خطر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 132,
    "question": "هذه الشاخصة التحذيرية تعني :",
    "answers": [
      {
        "id": "402",
        "text": "نعطف لليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "403",
        "text": "منعطف لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "404",
        "text": "منعطف خطر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 199

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-023659-2.jpg / 4795
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ممنوع الانعطاف إلى اليسار.) — NOT applied

Our answer choices:

0. ID 604 — "ممنوع الانعطاف إلى اليسار." → correct:false
1. ID 605 — "ممنوع الانعطاف إلى اليمين." → correct:false
2. ID 606 — "مسموح الانعطاف الى اليسار." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 199,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "604",
        "text": "ممنوع الانعطاف إلى اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "605",
        "text": "ممنوع الانعطاف إلى اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "606",
        "text": "مسموح الانعطاف الى اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 409,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "1344",
        "text": "ممنوع الانعطاف إلى اليسار.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1342",
        "text": "مسموح الانعطاف الى اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1343",
        "text": "ممنوع الانعطاف إلى اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1344"
    ],
    "quizOptionsAnswerMap": {
      "1342": "0",
      "1343": "0",
      "1344": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 192

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-022821ع-1.jpg / 4802
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ممنوع مرور العربات التي تدفع باليد.) — NOT applied

Our answer choices:

0. ID 583 — "ممنوع مرور العربات التي تدفع باليد." → correct:false
1. ID 584 — "ممنوع مرور المشاة." → correct:false
2. ID 585 — "الطريق لعربات اليد" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 192,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "583",
        "text": "ممنوع مرور العربات التي تدفع باليد.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "584",
        "text": "ممنوع مرور المشاة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "585",
        "text": "الطريق لعربات اليد",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 411,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "1350",
        "text": "الطريق لعربات اليد",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1349",
        "text": "ممنوع مرور المشاة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1348",
        "text": "ممنوع مرور العربات التي تدفع باليد.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1348"
    ],
    "quizOptionsAnswerMap": {
      "1348": "1",
      "1349": "0",
      "1350": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 197

- Our question text: هذه الشاخصة تعني
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-07-023432-1.jpg / 4803
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ممنوع مرور المركبات التي تزن اكثر من 8طن على المحور) — NOT applied

Our answer choices:

0. ID 598 — "ممنوع مرور المركبات التي تزن اكثر من 8طن على المحور" → correct:false
1. ID 599 — "ممنوع مرور المركبات التي يزيد ارتفاعها عن 8م" → correct:false
2. ID 600 — "ممنوع مرور المركبات التي يزيد عرضها عن 8م" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 197,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "598",
        "text": "ممنوع مرور المركبات التي تزن اكثر من 8طن على المحور",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "599",
        "text": "ممنوع مرور المركبات التي يزيد ارتفاعها عن 8م",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "600",
        "text": "ممنوع مرور المركبات التي يزيد عرضها عن 8م",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 412,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "1351",
        "text": "ممنوع مرور المركبات التي يزيد عرضها عن 8م",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1353",
        "text": "ممنوع مرور المركبات التي تزن اكثر من 8طن على المحور",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1352",
        "text": "ممنوع مرور المركبات التي يزيد ارتفاعها عن 8م",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1353"
    ],
    "quizOptionsAnswerMap": {
      "1351": "0",
      "1352": "0",
      "1353": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 130

- Our question text: الحد الاقصى لسرعة الحافالت على الطرق الفرعية والتي يقع عليها مدارس هو :
- Section: الشواخص والاشارات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (40 كم/ساعة.) — NOT applied

Our answer choices:

0. ID 396 — "30كم/ساعة." → correct:false
1. ID 397 — "40 كم/ساعة." → correct:false
2. ID 398 — "50كم/ساعة." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 130,
    "question": "الحد الاقصى لسرعة الحافالت على الطرق الفرعية والتي يقع عليها مدارس هو :",
    "answers": [
      {
        "id": "396",
        "text": "30كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "397",
        "text": "40 كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "398",
        "text": "50كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 413,
    "question": "الحد الاقصى لسرعة الحافالت على الطرق الفرعية والتي يقع عليها مدارس هو :",
    "answers": [
      {
        "id": "1356",
        "text": "50كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1354",
        "text": "30كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1355",
        "text": "40 كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1355"
    ],
    "quizOptionsAnswerMap": {
      "1354": "0",
      "1355": "1",
      "1356": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 127

- Our question text: الحد الاقصى لسرعة سيارات الركوب الصغيرة على الطرق الفرعية والتي يقع عليها مدارس هو
- Section: الشواخص والاشارات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (40 كم/ساعة.) — NOT applied

Our answer choices:

0. ID 387 — "30كم/ساعة." → correct:false
1. ID 388 — "40 كم/ساعة." → correct:false
2. ID 389 — "50كم/ساعة." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 127,
    "question": "الحد الاقصى لسرعة سيارات الركوب الصغيرة على الطرق الفرعية والتي يقع عليها مدارس هو",
    "answers": [
      {
        "id": "387",
        "text": "30كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "388",
        "text": "40 كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "389",
        "text": "50كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 416,
    "question": "الحد الاقصى لسرعة سيارات الركوب الصغيرة على الطرق الفرعية والتي يقع عليها مدارس هو",
    "answers": [
      {
        "id": "1364",
        "text": "40 كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1365",
        "text": "50كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1363",
        "text": "30كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1364"
    ],
    "quizOptionsAnswerMap": {
      "1363": "0",
      "1364": "1",
      "1365": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 125

- Our question text: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن خارج المدن والقرى على الطرق الرئيسية ذات الاتجاهين وغير المفصولة بجزيرة وسيطة هو:
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-042844.jpg / 2289
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (100كم/ساعة.) — NOT applied

Our answer choices:

0. ID 381 — "100كم/ساعة." → correct:false
1. ID 382 — "90كم/ساعة." → correct:false
2. ID 383 — "80كم/ساعة." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 125,
    "question": "الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن خارج المدن والقرى على الطرق الرئيسية ذات الاتجاهين وغير المفصولة بجزيرة وسيطة هو:",
    "answers": [
      {
        "id": "381",
        "text": "100كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "382",
        "text": "90كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "383",
        "text": "80كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 418,
    "question": "الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن خارج المدن والقرى على الطرق الرئيسية ذات الاتجاهين وغير المفصولة بجزيرة وسيطة هو:",
    "answers": [
      {
        "id": "1371",
        "text": "100كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1369",
        "text": "80كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1370",
        "text": "90كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1371"
    ],
    "quizOptionsAnswerMap": {
      "1369": "0",
      "1370": "0",
      "1371": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 124

- Our question text: .الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن خارج المدن والقرى على الطرق الرئيسية ذات المسربين او اكثر في كل اتجاه والمفصولة بجزيرة وسيطة هو :
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-042710-2.jpg / 4804
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (110كم/ساعة.) — NOT applied

Our answer choices:

0. ID 377 — "100كم/ساعة." → correct:false
1. ID 378 — "90 كم/ساعة." → correct:false
2. ID 379 — "110كم/ساعة." → correct:false
3. ID 380 — "120كم/ساعة" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 419,
    "question": "الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن خارج المدن والقرى على الطرق الرئيسية ذات المسربين او اكثر في كل اتجاه والمفصولة بجزيرة وسيطة هو",
    "answers": [
      {
        "id": "1372",
        "text": "90 كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1375",
        "text": "120كم/ساعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1373",
        "text": "100كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1374",
        "text": "110كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1374"
    ],
    "quizOptionsAnswerMap": {
      "1372": "0",
      "1373": "0",
      "1374": "1",
      "1375": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 123

- Our question text: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن داخل المدن والقرى على الطرق الرئيسية ذات الاتجاهين وغير المفصولة بجزيرة وسيطة هو:
- Section: الشواخص والاشارات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (70م/ساعة.) — NOT applied

Our answer choices:

0. ID 374 — "70م/ساعة." → correct:false
1. ID 375 — "50كم/ساعة." → correct:false
2. ID 376 — "60كم/ساعة." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 420,
    "question": "الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن داخل المدن والقرى على الطرق الرئيسية ذات الاتجاهين وغير المفصولة بجزيرة وسيطة هو",
    "answers": [
      {
        "id": "1377",
        "text": "60كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1376",
        "text": "50كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1378",
        "text": "70م/ساعة.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1378"
    ],
    "quizOptionsAnswerMap": {
      "1376": "0",
      "1377": "0",
      "1378": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 122

- Our question text: الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن داخل المدن والقرى على الطرق الرئيسية ذات المسربين او اكثر في كل اتجاه والمفصولة بجزيرة وسيطة هو:
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-042510.jpg / 2287
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (80كم/ساعة.) — NOT applied

Our answer choices:

0. ID 371 — "60 كم/ساعة." → correct:false
1. ID 372 — "70كم/ساعة." → correct:false
2. ID 373 — "80كم/ساعة." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 421,
    "question": "الحد الاقصى لسرعة سيارات الشحن ذات الوزن الاجمالي اكثر من (2 )طن داخل المدن والقرى على الطرق الرئيسية ذات المسربين او اكثر في كل اتجاه والمفصولة بجزيرة وسيطة هو:",
    "answers": [
      {
        "id": "1380",
        "text": "70كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1379",
        "text": "60 كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1381",
        "text": "80كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1381"
    ],
    "quizOptionsAnswerMap": {
      "1379": "0",
      "1380": "0",
      "1381": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 121

- Our question text: .توضع هذه الاشارة على المسارب ,وتسمح بالمرور للمسرب الموضوعة عليه :
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-042356.jpg / 2286
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 369 — "نعم" → correct:false
1. ID 370 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 121,
    "question": ".توضع هذه الاشارة على المسارب ,وتسمح بالمرور للمسرب الموضوعة عليه :",
    "answers": [
      {
        "id": "369",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "370",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 422,
    "question": ".توضع هذه الاشارة على المسارب ,وتسمح بالمرور للمسرب الموضوعة عليه :",
    "answers": [
      {
        "id": "1382",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1383",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1382"
    ],
    "quizOptionsAnswerMap": {
      "1382": "1",
      "1383": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 120

- Our question text: توضع هذه الاشارة على مسارب الطرق وتمنع المرور في المسرب الموضوعه عليه
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-042229.jpg / 2285
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 367 — "نعم" → correct:false
1. ID 368 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 120,
    "question": "توضع هذه الاشارة على مسارب الطرق وتمنع المرور في المسرب الموضوعه عليه",
    "answers": [
      {
        "id": "367",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "368",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 423,
    "question": "توضع هذه الاشارة على مسارب الطرق وتمنع المرور في المسرب الموضوعه عليه",
    "answers": [
      {
        "id": "1384",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1385",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1384"
    ],
    "quizOptionsAnswerMap": {
      "1384": "1",
      "1385": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 119

- Our question text: اللون الاخضر المتقطع للمشاة في الاشارات الضوئية يعني أن الاشارة على وشك التحول إلى الاحمر ،وهنا لا يجوز للمشاة المرور الا إذا كانوا بداخل ممر المشاة ، ويجب أن يكملوا طريقهم إلى الجانب الاخر
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-042143.jpg / 2284
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 365 — "نعم" → correct:false
1. ID 366 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 119,
    "question": "اللون الاخضر المتقطع للمشاة في الاشارات الضوئية يعني أن الاشارة على وشك التحول إلى الاحمر ،وهنا لا يجوز للمشاة المرور الا إذا كانوا بداخل ممر المشاة ، ويجب أن يكملوا طريقهم إلى الجانب الاخر",
    "answers": [
      {
        "id": "365",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "366",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 424,
    "question": "اللون الاخضر المتقطع للمشاة في الاشارات الضوئية يعني أن الاشارة على وشك التحول إلى الاحمر ،وهنا لا يجوز للمشاة المرور الا إذا كانوا بداخل ممر المشاة ، ويجب أن يكملوا طريقهم إلى الجانب الاخر",
    "answers": [
      {
        "id": "1386",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1387",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1386"
    ],
    "quizOptionsAnswerMap": {
      "1386": "1",
      "1387": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 118

- Our question text: اللون الاخضر للمشاة في الاشارات الضوئية يعني السماح لهم بالمسير
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-041950.jpg / 2283
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 363 — "نعم" → correct:false
1. ID 364 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 118,
    "question": "اللون الاخضر للمشاة في الاشارات الضوئية يعني السماح لهم بالمسير",
    "answers": [
      {
        "id": "363",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "364",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 425,
    "question": "اللون الاخضر للمشاة في الاشارات الضوئية يعني السماح لهم بالمسير",
    "answers": [
      {
        "id": "1389",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1388",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1388"
    ],
    "quizOptionsAnswerMap": {
      "1388": "1",
      "1389": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 117

- Our question text: اللون الاحمر في الاشارة الضوئية للمشاة يعني منع المشاة من عبور الطريق
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-041829.jpg / 2282
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 361 — "نعم" → correct:false
1. ID 362 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 117,
    "question": "اللون الاحمر في الاشارة الضوئية للمشاة يعني منع المشاة من عبور الطريق",
    "answers": [
      {
        "id": "361",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "362",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 426,
    "question": "اللون الاحمر في الاشارة الضوئية للمشاة يعني منع المشاة من عبور الطريق",
    "answers": [
      {
        "id": "1390",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1391",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1390"
    ],
    "quizOptionsAnswerMap": {
      "1390": "1",
      "1391": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 116

- Our question text: تشتمل الاشارة الضوئية الخاصه بالمشاة على:
- Section: الشواخص والاشارات
- Image filename/mediaId: n/a / n/a
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)

Our answer choices:

0. ID 357 — "اشارة ضوئية تظهر شخص مشاه يمشي باللون الاحمر." → correct:false
1. ID 358 — "اشارة ضوئية تظهر شخص مشاه يمشي باللون الاخضر." → correct:false
2. ID 359 — "اشارة ضوئية تظهر شخص مشاه واقف باللون الاخضر." → correct:false
3. ID 360 — "جميع ما ذكر صحيح." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 116,
    "question": "تشتمل الاشارة الضوئية الخاصه بالمشاة على:",
    "answers": [
      {
        "id": "357",
        "text": "اشارة ضوئية تظهر شخص مشاه يمشي باللون الاحمر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "358",
        "text": "اشارة ضوئية تظهر شخص مشاه يمشي باللون الاخضر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "359",
        "text": "اشارة ضوئية تظهر شخص مشاه واقف باللون الاخضر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "360",
        "text": "جميع ما ذكر صحيح.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": null
}
```

### Question ID 115

- Our question text: .الضوء الاصفر المتقطع يسمح للسائق بالمرور بحذر شديد بعد إعطاء الاولوية للمشاة او المركبات صاحبة حق الاولوية :
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-041542.jpg / 2281
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 354 — "نعم" → correct:false
1. ID 355 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 115,
    "question": ".الضوء الاصفر المتقطع يسمح للسائق بالمرور بحذر شديد بعد إعطاء الاولوية للمشاة او المركبات صاحبة حق الاولوية :",
    "answers": [
      {
        "id": "354",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "355",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 428,
    "question": ".الضوء الاصفر المتقطع يسمح للسائق بالمرور بحذر شديد بعد إعطاء الاولوية للمشاة او المركبات صاحبة حق الاولوية :",
    "answers": [
      {
        "id": "1397",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1396",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1397"
    ],
    "quizOptionsAnswerMap": {
      "1396": "0",
      "1397": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 114

- Our question text: في الاشارات الضوئية ممكن أن تستبدل الاوان بأسهم من نفس اللون لكن على خلفية سوداء اللون ، وعندما تضيء تكون لها نفس أهمية الاشارة الضوئية العادية لكن المنع أو السماح يكون لالتجاه أو الاتجاهات المبينة بالسهم أو الاسهم .
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-041447.jpg / 2280
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 352 — "نعم" → correct:false
1. ID 353 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 429,
    "question": "في الاشارات الضوئية ممكن أن تستبدل الاوان بأسهم من نفس اللون لكن على خلفية سوداء اللون ، وعندما تضيء تكون لها نفس أهمية الاشارة الضوئية العادية لكن المنع أو السماح يكون لالتجاه أو الاتجاهات المبينة بالسهم أو الاسهم .",
    "answers": [
      {
        "id": "1398",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1399",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1398"
    ],
    "quizOptionsAnswerMap": {
      "1398": "1",
      "1399": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 113

- Our question text: وجود الضوء الاخضر في الاشارة الضوئية على التقاطع لا يعنى الحق في المرور اذا لم يكن التقاطع خالي من المركبات الاخرى :
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-040610.jpg / 2279
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 350 — "نعم" → correct:false
1. ID 351 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 430,
    "question": "وجود الضوء الاخضر في الاشارة الضوئية على التقاطع لا يعنى الحق في المرور اذا لم يكن التقاطع خالي من المركبات الاخرى :",
    "answers": [
      {
        "id": "1400",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1401",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1400"
    ],
    "quizOptionsAnswerMap": {
      "1400": "1",
      "1401": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 112

- Our question text: عند ظهور اللون الاصفر في الاشارة الضوئية بعد اللون الاحمر فهذا يعنى ان الاشارة على وشك التغير للضوء الاخضر و عليك الاستعداد للمسير.
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-035826-2.jpg / 4805
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 348 — "نعم" → correct:false
1. ID 349 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 112,
    "question": "عند ظهور اللون الاصفر في الاشارة الضوئية بعد اللون الاحمر فهذا يعنى ان الاشارة على وشك التغير للضوء الاخضر و عليك الاستعداد للمسير.",
    "answers": [
      {
        "id": "348",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "349",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 431,
    "question": "عند ظهور اللون الاصفر في الاشارة الضوئية بعد اللون الاحمر فهذا يعنى ان الاشارة على وشك التغير للضوء الاخضر و عليك الاستعداد للمسير.",
    "answers": [
      {
        "id": "1403",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1402",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1402"
    ],
    "quizOptionsAnswerMap": {
      "1402": "1",
      "1403": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 111

- Our question text: الضوء الاحمر في الاشارة الضوئية يعني ممنوع المرور وعلى المركبات الوقوف قبل خط التوقف إن وجد :
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-035644-2.jpg / 4806
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 346 — "نعم" → correct:false
1. ID 347 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 111,
    "question": "الضوء الاحمر في الاشارة الضوئية يعني ممنوع المرور وعلى المركبات الوقوف قبل خط التوقف إن وجد :",
    "answers": [
      {
        "id": "346",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "347",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 432,
    "question": "الضوء الاحمر في الاشارة الضوئية يعني ممنوع المرور وعلى المركبات الوقوف قبل خط التوقف إن وجد :",
    "answers": [
      {
        "id": "1405",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1404",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1404"
    ],
    "quizOptionsAnswerMap": {
      "1404": "1",
      "1405": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 110

- Our question text: توضع إشارة المرور في الاماكن التالية:
- Section: الشواخص والاشارات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر) — NOT applied

Our answer choices:

0. ID 342 — "تقاطع الطرقات" → correct:false
1. ID 343 — "أماكن أعمال الطرقات" → correct:false
2. ID 344 — "ممرات المشاة" → correct:false
3. ID 345 — "جميع ما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 110,
    "question": "توضع إشارة المرور في الاماكن التالية:",
    "answers": [
      {
        "id": "342",
        "text": "تقاطع الطرقات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "343",
        "text": "أماكن أعمال الطرقات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "344",
        "text": "ممرات المشاة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "345",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 433,
    "question": "توضع إشارة المرور في الاماكن التالية:",
    "answers": [
      {
        "id": "1407",
        "text": "أماكن أعمال الطرقات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1408",
        "text": "ممرات المشاة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1406",
        "text": "تقاطع الطرقات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1409",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1409"
    ],
    "quizOptionsAnswerMap": {
      "1406": "0",
      "1407": "0",
      "1408": "0",
      "1409": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 109

- Our question text: الاشارة الضوئيه هي عبارة عن ادوات تحكم مروري تستخدم للسيطرة على حركة المركبات والمشاه :
- Section: الشواخص والاشارات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 340 — "نعم" → correct:false
1. ID 341 — "لا ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 109,
    "question": "الاشارة الضوئيه هي عبارة عن ادوات تحكم مروري تستخدم للسيطرة على حركة المركبات والمشاه :",
    "answers": [
      {
        "id": "340",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "341",
        "text": "لا .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 434,
    "question": "الاشارة الضوئيه هي عبارة عن ادوات تحكم مروري تستخدم للسيطرة على حركة المركبات والمشاه :",
    "answers": [
      {
        "id": "1411",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1410",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1410"
    ],
    "quizOptionsAnswerMap": {
      "1410": "1",
      "1411": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 108

- Our question text: المسرب الذي يتخذه سائق المركبة:
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-035307-e1691837392665.jpg / 2276
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (خاطىء) — NOT applied

Our answer choices:

0. ID 338 — "صحيح." → correct:false
1. ID 339 — "خاطىء" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 108,
    "question": "المسرب الذي يتخذه سائق المركبة:",
    "answers": [
      {
        "id": "338",
        "text": "صحيح.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "339",
        "text": "خاطىء",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 435,
    "question": "المسرب الذي يتخذه سائق المركبة:",
    "answers": [
      {
        "id": "1413",
        "text": "خاطىء",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1412",
        "text": "صحيح",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1413"
    ],
    "quizOptionsAnswerMap": {
      "1412": "0",
      "1413": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 107

- Our question text: عند مشاهدة هذه الاشارة فإنه
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-035000.jpg / 2275
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 334 — "يسمح بالانعطاف لليمين." → correct:false
1. ID 335 — "يمنع الانعطاف لليمين." → correct:false
2. ID 336 — "يسمح بالتقدم للأمام" → correct:false
3. ID 337 — "أ+ج" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 107,
    "question": "عند مشاهدة هذه الاشارة فإنه",
    "answers": [
      {
        "id": "334",
        "text": "يسمح بالانعطاف لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "335",
        "text": "يمنع الانعطاف لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "336",
        "text": "يسمح بالتقدم للأمام",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "337",
        "text": "أ+ج",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 106

- Our question text: عند مشاهدة هذه الاشارة فإنه:
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-034752.jpg / 2274
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 330 — "يسمح بالانعطاف لليمين." → correct:false
1. ID 331 — "يمنع الانعطاف لليمين." → correct:false
2. ID 332 — "يمنع التقدم لألمام" → correct:false
3. ID 333 — "أ+ج" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 106,
    "question": "عند مشاهدة هذه الاشارة فإنه:",
    "answers": [
      {
        "id": "330",
        "text": "يسمح بالانعطاف لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "331",
        "text": "يمنع الانعطاف لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "332",
        "text": "يمنع التقدم لألمام",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "333",
        "text": "أ+ج",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 103

- Our question text: على سائق المركبة المشار إليها:
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-034214.jpg / 2272
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (الالتزام بيمين الطريق .) — NOT applied

Our answer choices:

0. ID 321 — "الالتزام بيسار لطريق." → correct:false
1. ID 322 — "الالتزام بيمين الطريق ." → correct:false
2. ID 323 — "السير امام مركبة الاطفاء لفسح الطريق لها." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 103,
    "question": "على سائق المركبة المشار إليها:",
    "answers": [
      {
        "id": "321",
        "text": "الالتزام بيسار لطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "322",
        "text": "الالتزام بيمين الطريق .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "323",
        "text": "السير امام مركبة الاطفاء لفسح الطريق لها.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 452,
    "question": "على سائق المركبة المشار إليها:",
    "answers": [
      {
        "id": "1461",
        "text": "الالتزام بيمين الطريق",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1462",
        "text": "السير امام مركبة الاطفاء لفسح الطريق لها.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1460",
        "text": "الالتزام بيسار لطريق",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1461"
    ],
    "quizOptionsAnswerMap": {
      "1460": "0",
      "1461": "1",
      "1462": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 102

- Our question text: وجود البسطات بهذا الشكل:
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-034002.jpg / 2271
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 318 — "مسموح به لانه يقدم خدمة للناس." → correct:false
1. ID 319 — "ممنوع لانه لا يلتزم بالاسعار المحددة" → correct:false
2. ID 320 — "ممنوع لانه يتعدى على حرمة الطريق." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 102,
    "question": "وجود البسطات بهذا الشكل:",
    "answers": [
      {
        "id": "318",
        "text": "مسموح به لانه يقدم خدمة للناس.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "319",
        "text": "ممنوع لانه لا يلتزم بالاسعار المحددة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "320",
        "text": "ممنوع لانه يتعدى على حرمة الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 100

- Our question text: وقوف المركبة بهذه الطريقة:
- Section: الشواخص والاشارات
- Image filename/mediaId: Screenshot-2023-03-06-023927.jpg / 2262
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (خاطئ لانها  تبعد اكثر من نصف متر عن الرصيف) — NOT applied

Our answer choices:

0. ID 312 — "صحيح لعدم وجود شرطي سير" → correct:false
1. ID 313 — "خاطئ لانها تبعد اكثر من نصف متر عن الرصيف" → correct:false
2. ID 314 — "خاطئ لوجود شاخصة تمنع ذلك." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 100,
    "question": "وقوف المركبة بهذه الطريقة:",
    "answers": [
      {
        "id": "312",
        "text": "صحيح لعدم وجود شرطي سير",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "313",
        "text": "خاطئ لانها تبعد اكثر من نصف متر عن الرصيف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "314",
        "text": "خاطئ لوجود شاخصة تمنع ذلك.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 458,
    "question": "وقوف المركبة بهذه الطريقة:",
    "answers": [
      {
        "id": "1477",
        "text": "خاطئ لانها تبعد اكثر من نصف متر عن الرصيف",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1476",
        "text": "صحيح لعدم وجود شرطي سير",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1478",
        "text": "خاطئ لوجود شاخصة تمنع ذلك.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1477"
    ],
    "quizOptionsAnswerMap": {
      "1476": "0",
      "1477": "1",
      "1478": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 99

- Our question text: مايقوم به المشاة
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-023758.jpg / 2261
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (صحيح لوجود معبر المشاة.) — NOT applied

Our answer choices:

0. ID 310 — "صحيح لوجود معبر المشاة." → correct:false
1. ID 311 — "خاطيء لعدم وجود شاخصة تسمح بذلك" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 99,
    "question": "مايقوم به المشاة",
    "answers": [
      {
        "id": "310",
        "text": "صحيح لوجود معبر المشاة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "311",
        "text": "خاطيء لعدم وجود شاخصة تسمح بذلك",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 468,
    "question": "مايقوم به المشاة",
    "answers": [
      {
        "id": "1510",
        "text": "خاطيء لعدم وجود شاخصة تسمح بذلك",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1509",
        "text": "صحيح لوجود معبر المشاة",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1509"
    ],
    "quizOptionsAnswerMap": {
      "1509": "1",
      "1510": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 98

- Our question text: ما يقوم به سائق المركبة:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-023656.jpg / 2260
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (خاطئ لانها تعيق المرور) — NOT applied

Our answer choices:

0. ID 308 — "صحيح لعدم وجود شاخصة تمنع ذلك" → correct:false
1. ID 309 — "خاطئ لانها تعيق المرور" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 98,
    "question": "ما يقوم به سائق المركبة:",
    "answers": [
      {
        "id": "308",
        "text": "صحيح لعدم وجود شاخصة تمنع ذلك",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "309",
        "text": "خاطئ لانها تعيق المرور",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 469,
    "question": "ما يقوم به سائق المركبة:",
    "answers": [
      {
        "id": "1511",
        "text": "خاطئ لانها تعيق المرور",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1512",
        "text": "صحيح لعدم وجود شاخصة تمنع ذلك",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1511"
    ],
    "quizOptionsAnswerMap": {
      "1511": "1",
      "1512": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 97

- Our question text: ظهور هذه الاشارة يعني:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-023518.jpg / 2259
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (منع المشاة من عبور الطريق) — NOT applied

Our answer choices:

0. ID 305 — "السماح للمشاة بعبور الطريق." → correct:false
1. ID 306 — "منع المشاة من عبور الطريق" → correct:false
2. ID 307 — "عدم السماح للمشاة بالشروع في عبور الطريق واتمام العبور بعد البدء فيه." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 97,
    "question": "ظهور هذه الاشارة يعني:",
    "answers": [
      {
        "id": "305",
        "text": "السماح للمشاة بعبور الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "306",
        "text": "منع المشاة من عبور الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "307",
        "text": "عدم السماح للمشاة بالشروع في عبور الطريق واتمام العبور بعد البدء فيه.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 470,
    "question": "ظهور هذه الاشارة يعني:",
    "answers": [
      {
        "id": "1514",
        "text": "منع المشاة من عبور الطريق",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1513",
        "text": "السماح للمشاة بعبور الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1515",
        "text": "عدم السماح للمشاة بالشروع في عبور الطريق واتمام العبور بعد البدء فيه.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1514"
    ],
    "quizOptionsAnswerMap": {
      "1513": "0",
      "1514": "1",
      "1515": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 96

- Our question text: ما يقوم به سائق المركبة رقم 1
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-023401-300x249.jpg / 2258
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (ممنوع لسيره بعكس إتجاه السير.) — NOT applied

Our answer choices:

0. ID 301 — "صحيح لعدم وجود مركبات من هذا الجانب من الطريق." → correct:false
1. ID 302 — "صحيح لعدم وجود وجود شاخصة تمنع ذلك" → correct:false
2. ID 303 — "ممنوع لسيره بعكس إتجاه السير." → correct:false
3. ID 304 — "ممنوع لاقترابها من الجزيرة الوسطية." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 96,
    "question": "ما يقوم به سائق المركبة رقم 1",
    "answers": [
      {
        "id": "301",
        "text": "صحيح لعدم وجود مركبات من هذا الجانب من الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "302",
        "text": "صحيح لعدم وجود وجود شاخصة تمنع ذلك",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "303",
        "text": "ممنوع لسيره بعكس إتجاه السير.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "304",
        "text": "ممنوع لاقترابها من الجزيرة الوسطية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 471,
    "question": "ما يقوم به سائق المركبة رقم 1",
    "answers": [
      {
        "id": "1519",
        "text": "ممنوع لاقترابها من الجزيرة الوسطية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1517",
        "text": "صحيح لعدم وجود وجود شاخصة تمنع ذلك",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1518",
        "text": "ممنوع لسيره بعكس إتجاه السير.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1516",
        "text": "صحيح لعدم وجود مركبات من هذا الجانب من الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1518"
    ],
    "quizOptionsAnswerMap": {
      "1516": "0",
      "1517": "0",
      "1518": "1",
      "1519": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 95

- Our question text: سير المركبة (التكسي) المبينه بالصورة:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-023226.jpg / 2257
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (ممنوع) — NOT applied

Our answer choices:

0. ID 299 — "مسموح" → correct:false
1. ID 300 — "ممنوع" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 95,
    "question": "سير المركبة (التكسي) المبينه بالصورة:",
    "answers": [
      {
        "id": "299",
        "text": "مسموح",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "300",
        "text": "ممنوع",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 472,
    "question": "سير المركبة (التكسي) المبينه بالصورة:",
    "answers": [
      {
        "id": "1521",
        "text": "ممنوع",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1520",
        "text": "مسموح",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1521"
    ],
    "quizOptionsAnswerMap": {
      "1520": "0",
      "1521": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 94

- Our question text: وجود هذه الشاخصة يعني :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-023057-1.jpg / 4770
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (على السائق الانتباه والحذر من وجود أخطار مختلفة أمامه) — NOT applied

Our answer choices:

0. ID 296 — "على السائق الانتباه والحذر من وجود منعطف حاد أمامه" → correct:false
1. ID 297 — "على السائق الانتباه والحذر من وجود أخطار مختلفة أمامه" → correct:false
2. ID 298 — "على السائق االنتباه والحذر من وجود منحدر خطر أمامه." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 94,
    "question": "وجود هذه الشاخصة يعني :",
    "answers": [
      {
        "id": "296",
        "text": "على السائق الانتباه والحذر من وجود منعطف حاد أمامه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "297",
        "text": "على السائق الانتباه والحذر من وجود أخطار مختلفة أمامه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "298",
        "text": "على السائق االنتباه والحذر من وجود منحدر خطر أمامه.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 473,
    "question": "وجود هذه الشاخصة يعني :",
    "answers": [
      {
        "id": "1524",
        "text": "على السائق االنتباه والحذر من وجود منحدر خطر أمامه.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1523",
        "text": "على السائق الانتباه والحذر من وجود أخطار مختلفة أمامه",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1522",
        "text": "على السائق الانتباه والحذر من وجود منعطف حاد أمامه",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1523"
    ],
    "quizOptionsAnswerMap": {
      "1522": "0",
      "1523": "1",
      "1524": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 93

- Our question text: عند رؤية هذه الشاخصة على السائق:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-022836.jpg / 2255
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (تخفيف سرعته والتوقف على التقاطع وإعطاء حق الاولوية حسب قواعد أولويات المرور.) — NOT applied

Our answer choices:

0. ID 292 — "تخفيف سرعته والتوقف على التقاطع وإعطاء حق الاولوية حسب قواعد أولويات المرور." → correct:false
1. ID 293 — "يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق محكوم بإشارات ضوئية." → correct:false
2. ID 294 — "يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق محكوم بشواخص مرورية." → correct:false
3. ID 295 — "يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق غير متكافئ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 93,
    "question": "عند رؤية هذه الشاخصة على السائق:",
    "answers": [
      {
        "id": "292",
        "text": "تخفيف سرعته والتوقف على التقاطع وإعطاء حق الاولوية حسب قواعد أولويات المرور.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "293",
        "text": "يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق محكوم بإشارات ضوئية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "294",
        "text": "يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق محكوم بشواخص مرورية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "295",
        "text": "يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق غير متكافئ.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 475,
    "question": "عند رؤية هذه الشاخصة على السائق:",
    "answers": [
      {
        "id": "1530",
        "text": "يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق محكوم بشواخص مرورية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1529",
        "text": "يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق محكوم بإشارات ضوئية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1531",
        "text": "يجب على السائق الانتباه من انه يتجه نحو تقاطع طرق غير متكافئ.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1528",
        "text": "تخفيف سرعته والتوقف على التقاطع وإعطاء حق الاولوية حسب قواعد أولويات المرور.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1528"
    ],
    "quizOptionsAnswerMap": {
      "1528": "1",
      "1529": "0",
      "1530": "0",
      "1531": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 92

- Our question text: الشاخصة التحذيرية التي امامك بالصورة تعني
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-022652.jpg / 2254
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (على السائق القادم من اليمين الانتباه كونه يدخل الى اتجاه الطريق الرئيسي.) — NOT applied

Our answer choices:

0. ID 288 — "على السائق القادم من اليمين الانتباه كونه يدخل الى اتجاه الطريق الرئيسي." → correct:false
1. ID 289 — "على السائق القادم من الطريق الرئيسي عدم الانتباه إلى الشاخصة." → correct:false
2. ID 290 — "على السائق القادم من الطريق الرئيسي متابعة مسيره بصورة طبيعية" → correct:false
3. ID 291 — "لا شيء مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 92,
    "question": "الشاخصة التحذيرية التي امامك بالصورة تعني",
    "answers": [
      {
        "id": "288",
        "text": "على السائق القادم من اليمين الانتباه كونه يدخل الى اتجاه الطريق الرئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "289",
        "text": "على السائق القادم من الطريق الرئيسي عدم الانتباه إلى الشاخصة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "290",
        "text": "على السائق القادم من الطريق الرئيسي متابعة مسيره بصورة طبيعية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "291",
        "text": "لا شيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 476,
    "question": "الشاخصة التحذيرية التي امامك بالصورة تعني",
    "answers": [
      {
        "id": "1534",
        "text": "على السائق القادم من الطريق الرئيسي متابعة مسيره بصورة طبيعية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1535",
        "text": "لا شيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1533",
        "text": "على السائق القادم من الطريق الرئيسي عدم الانتباه إلى الشاخصة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1532",
        "text": "على السائق القادم من اليمين الانتباه كونه يدخل الى اتجاه الطريق الرئيسي.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1532"
    ],
    "quizOptionsAnswerMap": {
      "1532": "1",
      "1533": "0",
      "1534": "0",
      "1535": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 91

- Our question text: سائق المركبة المبينة في الصورة والتي وضع عليها دائرة في اللون الاحمر :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-022521-150x150-1.jpg / 4766
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (يتصرف بشكل خاطئ.) — NOT applied

Our answer choices:

0. ID 286 — "يتصرف بشكل صحيح." → correct:false
1. ID 287 — "يتصرف بشكل خاطئ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 91,
    "question": "سائق المركبة المبينة في الصورة والتي وضع عليها دائرة في اللون الاحمر :",
    "answers": [
      {
        "id": "286",
        "text": "يتصرف بشكل صحيح.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "287",
        "text": "يتصرف بشكل خاطئ.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 477,
    "question": "سائق المركبة المبينة في الصورة والتي وضع عليها دائرة في اللون الاحمر :",
    "answers": [
      {
        "id": "1537",
        "text": "يتصرف بشكل خاطئ.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1536",
        "text": "يتصرف بشكل صحيح",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1537"
    ],
    "quizOptionsAnswerMap": {
      "1536": "0",
      "1537": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 90

- Our question text: عند رؤية هذه الاشارة يجب عليك
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-022402.jpg / 2252
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (السير الى الامام.) — NOT applied

Our answer choices:

0. ID 282 — "السير الى الامام." → correct:false
1. ID 283 — "التوقف وقوفا تاما." → correct:false
2. ID 284 — "الاستعداد للمسير" → correct:false
3. ID 285 — "الاستعداد للتوقف" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 90,
    "question": "عند رؤية هذه الاشارة يجب عليك",
    "answers": [
      {
        "id": "282",
        "text": "السير الى الامام.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "283",
        "text": "التوقف وقوفا تاما.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "284",
        "text": "الاستعداد للمسير",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "285",
        "text": "الاستعداد للتوقف",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 478,
    "question": "عند رؤية هذه الاشارة يجب عليك",
    "answers": [
      {
        "id": "1538",
        "text": "السير الى الامام.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1540",
        "text": "الاستعداد للمسير",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1541",
        "text": "الاستعداد للتوقف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1539",
        "text": "التوقف وقوفا تاما.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1538"
    ],
    "quizOptionsAnswerMap": {
      "1538": "1",
      "1539": "0",
      "1540": "0",
      "1541": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 89

- Our question text: عند رؤية الاشارة الضوئية بهذا اللون يجب عليك:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-022241.jpg / 2251
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (التوقف بصورة تامة) — NOT applied

Our answer choices:

0. ID 278 — "السير الى الامام بحذر" → correct:false
1. ID 279 — "التوقف بصورة تامة" → correct:false
2. ID 280 — "الاستعداد للتقدم." → correct:false
3. ID 281 — "لا شيء مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 89,
    "question": "عند رؤية الاشارة الضوئية بهذا اللون يجب عليك:",
    "answers": [
      {
        "id": "278",
        "text": "السير الى الامام بحذر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "279",
        "text": "التوقف بصورة تامة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "280",
        "text": "الاستعداد للتقدم.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "281",
        "text": "لا شيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 479,
    "question": "عند رؤية الاشارة الضوئية بهذا اللون يجب عليك:",
    "answers": [
      {
        "id": "1543",
        "text": "التوقف بصورة تامة",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1544",
        "text": "الاستعداد للتقدم.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1545",
        "text": "لا شيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1542",
        "text": "السير الى الامام بحذر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1543"
    ],
    "quizOptionsAnswerMap": {
      "1542": "0",
      "1543": "1",
      "1544": "0",
      "1545": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 88

- Our question text: المركبة المبينة في الصورة :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-022132-1.jpg / 4774
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (متوقفة بشكل خاطئ لوجود شاخصة تمنع الوقوف والتوقف.) — NOT applied

Our answer choices:

0. ID 275 — "متوقفة بشكل خاطئ لوجود شاخصة تمنع الوقوف والتوقف." → correct:false
1. ID 276 — "متوقفة بشكل خاطئ لوقوفها على الرصيف." → correct:false
2. ID 277 — "المركبة متوقفة بشكل صحيح لعدم وجود شاخصة تمنع ذلك" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 88,
    "question": "المركبة المبينة في الصورة :",
    "answers": [
      {
        "id": "275",
        "text": "متوقفة بشكل خاطئ لوجود شاخصة تمنع الوقوف والتوقف.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "276",
        "text": "متوقفة بشكل خاطئ لوقوفها على الرصيف.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "277",
        "text": "المركبة متوقفة بشكل صحيح لعدم وجود شاخصة تمنع ذلك",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 480,
    "question": "المركبة المبينة في الصورة :",
    "answers": [
      {
        "id": "1548",
        "text": "المركبة متوقفة بشكل صحيح لعدم وجود شاخصة تمنع ذلك",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1546",
        "text": "متوقفة بشكل خاطئ لوجود شاخصة تمنع الوقوف والتوقف.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1547",
        "text": "متوقفة بشكل خاطئ لوقوفها على الرصيف.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1546"
    ],
    "quizOptionsAnswerMap": {
      "1546": "1",
      "1547": "0",
      "1548": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 87

- Our question text: تقف المركبة المبينة بالصورة
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-022017.jpg / 2249
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (بشكل خاطئ) — NOT applied

Our answer choices:

0. ID 273 — "بشكل صحيح." → correct:false
1. ID 274 — "بشكل خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 87,
    "question": "تقف المركبة المبينة بالصورة",
    "answers": [
      {
        "id": "273",
        "text": "بشكل صحيح.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "274",
        "text": "بشكل خاطئ",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 481,
    "question": "تقف المركبة المبينة بالصورة",
    "answers": [
      {
        "id": "1549",
        "text": "بشكل خاطئ",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1550",
        "text": "بشكل صحيح.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1549"
    ],
    "quizOptionsAnswerMap": {
      "1549": "1",
      "1550": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 86

- Our question text: الخطوط البيضاء المبينة في الصورة تعني :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-021856.jpg / 2248
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ممنوع التجاوز.) — NOT applied

Our answer choices:

0. ID 269 — "ممنوع التجاوز." → correct:false
1. ID 270 — "مسموح التجاوز بحذر شديد." → correct:false
2. ID 271 — "مسموح التجاوز من اليمين فقط" → correct:false
3. ID 272 — "مسموح التجاوز من اليسار فقط." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 86,
    "question": "الخطوط البيضاء المبينة في الصورة تعني :",
    "answers": [
      {
        "id": "269",
        "text": "ممنوع التجاوز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "270",
        "text": "مسموح التجاوز بحذر شديد.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "271",
        "text": "مسموح التجاوز من اليمين فقط",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "272",
        "text": "مسموح التجاوز من اليسار فقط.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 482,
    "question": "الخطوط البيضاء المبينة في الصورة تعني :",
    "answers": [
      {
        "id": "1554",
        "text": "مسموح التجاوز من اليسار فقط.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1552",
        "text": "مسموح التجاوز بحذر شديد",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1551",
        "text": "ممنوع التجاوز",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1553",
        "text": "مسموح التجاوز من اليمين فقط",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1551"
    ],
    "quizOptionsAnswerMap": {
      "1551": "1",
      "1552": "0",
      "1553": "0",
      "1554": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 84

- Our question text: هذه الشاخصة تعني
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-021554.jpg / 2246
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 262 — "ممنوع مرور الشاحنات على المسرب الايسر" → correct:false
1. ID 263 — "ممنوع مرور الشاحنات على المسرب الايمن" → correct:false
2. ID 264 — "ممنوع مرور الباصات على المسرب الايسر" → correct:false
3. ID 265 — "ج+أ" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 84,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "262",
        "text": "ممنوع مرور الشاحنات على المسرب الايسر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "263",
        "text": "ممنوع مرور الشاحنات على المسرب الايمن",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "264",
        "text": "ممنوع مرور الباصات على المسرب الايسر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "265",
        "text": "ج+أ",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 83

- Our question text: تحميل الركاب بهذه الطريقة صحيح
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-021450.jpg / 2245
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 260 — "نعم" → correct:false
1. ID 261 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 83,
    "question": "تحميل الركاب بهذه الطريقة صحيح",
    "answers": [
      {
        "id": "260",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "261",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 489,
    "question": "تحميل الركاب بهذه الطريقة صحيح",
    "answers": [
      {
        "id": "1575",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1576",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1576"
    ],
    "quizOptionsAnswerMap": {
      "1575": "0",
      "1576": "1"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 82

- Our question text: عند رؤية هذه الشاخصة
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-021312.jpg / 2244
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (على السائق عدم التجاوز عند مشاهدته لهذه الشاخصة.) — NOT applied

Our answer choices:

0. ID 257 — "على السائق عدم التجاوز عند مشاهدته لهذه الشاخصة." → correct:false
1. ID 258 — "على السائق التجاوز عند مشاهدته لهذه الشاخصة ولكن بحذر شديد." → correct:false
2. ID 259 — "على السائق إعطاء الاولوية للمركبات القادمة عند مشاهدته لهذه الشاخصة." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 82,
    "question": "عند رؤية هذه الشاخصة",
    "answers": [
      {
        "id": "257",
        "text": "على السائق عدم التجاوز عند مشاهدته لهذه الشاخصة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "258",
        "text": "على السائق التجاوز عند مشاهدته لهذه الشاخصة ولكن بحذر شديد.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "259",
        "text": "على السائق إعطاء الاولوية للمركبات القادمة عند مشاهدته لهذه الشاخصة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 491,
    "question": "عند رؤية هذه الشاخصة",
    "answers": [
      {
        "id": "1581",
        "text": "على السائق التجاوز عند مشاهدته لهذه الشاخصة ولكن بحذر شديد.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1580",
        "text": "على السائق عدم التجاوز عند مشاهدته لهذه الشاخصة.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1582",
        "text": "على السائق إعطاء الاولوية للمركبات القادمة عند مشاهدته لهذه الشاخصة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1580"
    ],
    "quizOptionsAnswerMap": {
      "1580": "1",
      "1581": "0",
      "1582": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 81

- Our question text: تعتبر هذه الشاخصة من الشواخص
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-021203-1.jpg / 4778
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 254 — "الارشادية ." → correct:false
1. ID 255 — "التحذيرية." → correct:false
2. ID 256 — "الازامية ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 81,
    "question": "تعتبر هذه الشاخصة من الشواخص",
    "answers": [
      {
        "id": "254",
        "text": "الارشادية .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "255",
        "text": "التحذيرية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "256",
        "text": "الازامية .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 80

- Our question text: طريقة تحميل المركبة المبينة في الصورة:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-021041.jpg / 2242
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (غير صحيحة كون السائق لم يستخدم وسائل السلامة.) — NOT applied

Our answer choices:

0. ID 251 — "صحيحة كون السائق يحمل حمولة خفيفة." → correct:false
1. ID 252 — "غير صحيحة كون السائق لم يستخدم وسائل السلامة." → correct:false
2. ID 253 — "لا شئ مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 80,
    "question": "طريقة تحميل المركبة المبينة في الصورة:",
    "answers": [
      {
        "id": "251",
        "text": "صحيحة كون السائق يحمل حمولة خفيفة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "252",
        "text": "غير صحيحة كون السائق لم يستخدم وسائل السلامة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "253",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 497,
    "question": "طريقة تحميل المركبة المبينة في الصورة:",
    "answers": [
      {
        "id": "1599",
        "text": "غير صحيحة كون السائق لم يستخدم وسائل السلامة",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1598",
        "text": "صحيحة كون السائق يحمل حمولة خفيفة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1600",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1599"
    ],
    "quizOptionsAnswerMap": {
      "1598": "0",
      "1599": "1",
      "1600": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 79

- Our question text: من خلال الصورة المبينة فإن المركبة بحمولتها
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-020905.jpg / 2241
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (لا تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها لان حمولتها تشكل خطرا على الاخرين) — NOT applied

Our answer choices:

0. ID 248 — "تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها." → correct:false
1. ID 249 — "لا تتخذ الاحتياطات الالزمة لانها التضع العواكس المطلوبة" → correct:false
2. ID 250 — "لا تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها لان حمولتها تشكل خطرا على الاخرين" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 79,
    "question": "من خلال الصورة المبينة فإن المركبة بحمولتها",
    "answers": [
      {
        "id": "248",
        "text": "تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "249",
        "text": "لا تتخذ الاحتياطات الالزمة لانها التضع العواكس المطلوبة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "250",
        "text": "لا تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها لان حمولتها تشكل خطرا على الاخرين",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 499,
    "question": "من خلال الصورة المبينة فإن المركبة بحمولتها",
    "answers": [
      {
        "id": "1606",
        "text": "لا تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها لان حمولتها تشكل خطرا على الاخرين",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1605",
        "text": "لا تتخذ الاحتياطات الالزمة لانها التضع العواكس المطلوبة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1604",
        "text": "تتخذ الاحتياطات الالزمة لتثبيت الحمولة و تغطيتها.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1606"
    ],
    "quizOptionsAnswerMap": {
      "1604": "0",
      "1605": "0",
      "1606": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 78

- Our question text: عند وجود هذه الشاخصة فإنه يجب:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-020758-1-1.jpg / 4820
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز المطب بأمان.) — NOT applied

Our answer choices:

0. ID 245 — "على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز الحفر بأمان." → correct:false
1. ID 246 — "على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز المطب بأمان." → correct:false
2. ID 247 — "على السائق العمل على زيادة سرعة مركبته لكي اليشعر بقوة المطب" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 78,
    "question": "عند وجود هذه الشاخصة فإنه يجب:",
    "answers": [
      {
        "id": "245",
        "text": "على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز الحفر بأمان.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "246",
        "text": "على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز المطب بأمان.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "247",
        "text": "على السائق العمل على زيادة سرعة مركبته لكي اليشعر بقوة المطب",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 500,
    "question": "عند وجود هذه الشاخصة فإنه يجب:",
    "answers": [
      {
        "id": "1609",
        "text": "على السائق العمل على زيادة سرعة مركبته لكي اليشعر بقوة المطب",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1608",
        "text": "على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز المطب بأمان.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1607",
        "text": "على السائق العمل على تخفيض سرعة مركبته لكي يستطيع اجتياز الحفر بأمان.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1608"
    ],
    "quizOptionsAnswerMap": {
      "1607": "0",
      "1608": "1",
      "1609": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 77

- Our question text: الخطوط الموجودة على الطريق هي
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-020413.jpg / 2239
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (خطوط عوائق أرضية تمنع المركبات من المرور فوقها.) — NOT applied

Our answer choices:

0. ID 242 — "خطوط عوائق أرضية يسمح للمركبات بالمرور فوقها." → correct:false
1. ID 243 — "خطوط عوائق أرضية تمنع المركبات من المرور فوقها." → correct:false
2. ID 244 — "لا شئ مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 77,
    "question": "الخطوط الموجودة على الطريق هي",
    "answers": [
      {
        "id": "242",
        "text": "خطوط عوائق أرضية يسمح للمركبات بالمرور فوقها.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "243",
        "text": "خطوط عوائق أرضية تمنع المركبات من المرور فوقها.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "244",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 502,
    "question": "الخطوط الموجودة على الطريق هي",
    "answers": [
      {
        "id": "1615",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1613",
        "text": "خطوط عوائق أرضية يسمح للمركبات بالمرور فوقها",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1614",
        "text": "خطوط عوائق أرضية تمنع المركبات من المرور فوقها",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1614"
    ],
    "quizOptionsAnswerMap": {
      "1613": "0",
      "1614": "1",
      "1615": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 76

- Our question text: من خلال الشاخصة المبينة فإنه
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-020249.jpg / 2238
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (يمنع الانعطاف إلى اليمين.) — NOT applied

Our answer choices:

0. ID 238 — "يمنع الانعطاف إلى اليمين." → correct:false
1. ID 239 — "يمنع الانعطاف إلى اليسار" → correct:false
2. ID 240 — "يسمح الانعطاف إلى اليمين." → correct:false
3. ID 241 — "يسمح الانعطاف إلى اليسار ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 76,
    "question": "من خلال الشاخصة المبينة فإنه",
    "answers": [
      {
        "id": "238",
        "text": "يمنع الانعطاف إلى اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "239",
        "text": "يمنع الانعطاف إلى اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "240",
        "text": "يسمح الانعطاف إلى اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "241",
        "text": "يسمح الانعطاف إلى اليسار .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 503,
    "question": "من خلال الشاخصة المبينة فإنه",
    "answers": [
      {
        "id": "1616",
        "text": "يمنع الانعطاف إلى اليمين.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1618",
        "text": "يسمح الانعطاف إلى اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1617",
        "text": "يمنع الانعطاف إلى اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1619",
        "text": "يسمح الانعطاف إلى اليسار .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1616"
    ],
    "quizOptionsAnswerMap": {
      "1616": "1",
      "1617": "0",
      "1618": "0",
      "1619": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 75

- Our question text: عند رؤية هاتين الشاخصتين فإنه:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-020117.jpg / 2237
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (يمنع الانعطاف لليسار ويمنع الدوران) — NOT applied

Our answer choices:

0. ID 234 — "يسمح الدوران ويمنع الانعطاف لليسار." → correct:false
1. ID 235 — "يمنع الدوران ويسمح الانعطاف لليسار" → correct:false
2. ID 236 — "يمنع الانعطاف لليسار ويمنع الدوران" → correct:false
3. ID 237 — "لا شئ مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 75,
    "question": "عند رؤية هاتين الشاخصتين فإنه:",
    "answers": [
      {
        "id": "234",
        "text": "يسمح الدوران ويمنع الانعطاف لليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "235",
        "text": "يمنع الدوران ويسمح الانعطاف لليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "236",
        "text": "يمنع الانعطاف لليسار ويمنع الدوران",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "237",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 624,
    "question": "عند رؤية هاتين الشاخصتين فإنه:",
    "answers": [
      {
        "id": "1976",
        "text": "يسمح الدوران ويمنع الانعطاف لليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1979",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1978",
        "text": "يمنع الانعطاف لليسار ويمنع الدوران",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1977",
        "text": "يمنع الدوران ويسمح الانعطاف لليسار",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1978"
    ],
    "quizOptionsAnswerMap": {
      "1976": "0",
      "1977": "0",
      "1978": "1",
      "1979": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 74

- Our question text: عند وجود هذه الشاخصة فإنه:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-020001.jpg / 2236
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (ممنوع مرور المركبات المعدة لنقل البضائع) — NOT applied

Our answer choices:

0. ID 231 — "يسمح بمرور المركبات الالية" → correct:false
1. ID 232 — "ممنوع مرور المركبات المعدة لنقل البضائع" → correct:false
2. ID 233 — "يمنع مرور المركبات." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 74,
    "question": "عند وجود هذه الشاخصة فإنه:",
    "answers": [
      {
        "id": "231",
        "text": "يسمح بمرور المركبات الالية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "232",
        "text": "ممنوع مرور المركبات المعدة لنقل البضائع",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "233",
        "text": "يمنع مرور المركبات.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 625,
    "question": "عند وجود هذه الشاخصة فإنه:",
    "answers": [
      {
        "id": "1980",
        "text": "يسمح بمرور المركبات الالية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1982",
        "text": "يمنع مرور المركبات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1981",
        "text": "ممنوع مرور المركبات المعدة لنقل البضائع",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1981"
    ],
    "quizOptionsAnswerMap": {
      "1980": "0",
      "1981": "1",
      "1982": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 73

- Our question text: عند وجود هذه الشاخصة فإنه:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-015833.jpg / 2235
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 227 — "على السائق عدم التوقف الا إذا كان يقوم بعملية تحميل وتنزيل الركاب" → correct:false
1. ID 228 — "على السائق عدم الوقوف والتوقف نهائياً." → correct:false
2. ID 229 — "يسمح بالتوقف دون الوقوف" → correct:false
3. ID 230 — "الشئ مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 73,
    "question": "عند وجود هذه الشاخصة فإنه:",
    "answers": [
      {
        "id": "227",
        "text": "على السائق عدم التوقف الا إذا كان يقوم بعملية تحميل وتنزيل الركاب",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "228",
        "text": "على السائق عدم الوقوف والتوقف نهائياً.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "229",
        "text": "يسمح بالتوقف دون الوقوف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "230",
        "text": "الشئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 72

- Our question text: عند رؤية هذه الشاخصة فإنه:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-015652.jpg / 2234
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (يسمح لك بالوقوف) — NOT applied

Our answer choices:

0. ID 223 — "يسمح لك بالوقوف" → correct:false
1. ID 224 — "لايسمح لك بالوقوف" → correct:false
2. ID 225 — "يسمح بالوقوف لذوي الاحتياجات الخاصة فقط." → correct:false
3. ID 226 — "لا شئ مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 72,
    "question": "عند رؤية هذه الشاخصة فإنه:",
    "answers": [
      {
        "id": "223",
        "text": "يسمح لك بالوقوف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "224",
        "text": "لايسمح لك بالوقوف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "225",
        "text": "يسمح بالوقوف لذوي الاحتياجات الخاصة فقط.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "226",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 627,
    "question": "عند رؤية هذه الشاخصة فإنه:",
    "answers": [
      {
        "id": "1990",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1988",
        "text": "لايسمح لك بالوقوف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1989",
        "text": "يسمح بالوقوف لذوي الاحتياجات الخاصة فقط",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1987",
        "text": "يسمح لك بالوقوف",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1987"
    ],
    "quizOptionsAnswerMap": {
      "1987": "1",
      "1988": "0",
      "1989": "0",
      "1990": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 71

- Our question text: عند رؤية هذه الشاخصة فإن
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-015517.jpg / 2233
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة) — NOT applied

Our answer choices:

0. ID 219 — "السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة" → correct:false
1. ID 220 — "السرعة القصوى للشاحنات 100 كم/ساعة وللمركبات الصغيرة 80 كم/ساعة" → correct:false
2. ID 221 — "السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 80 كم/ساعة." → correct:false
3. ID 222 — "السرعة الدنيا للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 71,
    "question": "عند رؤية هذه الشاخصة فإن",
    "answers": [
      {
        "id": "219",
        "text": "السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "220",
        "text": "السرعة القصوى للشاحنات 100 كم/ساعة وللمركبات الصغيرة 80 كم/ساعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "221",
        "text": "السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 80 كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "222",
        "text": "السرعة الدنيا للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 628,
    "question": "عند رؤية هذه الشاخصة فإن",
    "answers": [
      {
        "id": "1992",
        "text": "السرعة القصوى للشاحنات 100 كم/ساعة وللمركبات الصغيرة 80 كم/ساعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1993",
        "text": "السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 80 كم/ساعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1994",
        "text": "السرعة الدنيا للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1991",
        "text": "السرعة القصوى للشاحنات 90 كم/ساعة وللمركبات الصغيرة 100 كم/ساعة",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1991"
    ],
    "quizOptionsAnswerMap": {
      "1991": "1",
      "1992": "0",
      "1993": "0",
      "1994": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 70

- Our question text: عند الاقتراب من هذه الشاخصة
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-015402.jpg / 2232
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 215 — "يجب التوقف والسماح للمركبات بالمرور." → correct:false
1. ID 216 — "يجب إعطاء الاولوية للمركبات بالمرور." → correct:false
2. ID 217 — "أ+ب." → correct:false
3. ID 218 — "لا شيء مما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 70,
    "question": "عند الاقتراب من هذه الشاخصة",
    "answers": [
      {
        "id": "215",
        "text": "يجب التوقف والسماح للمركبات بالمرور.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "216",
        "text": "يجب إعطاء الاولوية للمركبات بالمرور.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "217",
        "text": "أ+ب.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "218",
        "text": "لا شيء مما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 69

- Our question text: عند رؤية هاتين الشاخصتين فإنه
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-015158.jpg / 2231
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (يجب ان تنعطف الى اليمين وممنوع الانعطاف الى اليسار) — NOT applied

Our answer choices:

0. ID 211 — "يجب ان تنعطف الى اليمين وممنوع الانعطاف الى اليسار" → correct:false
1. ID 212 — "يجب ان تنعطف الي اليسار." → correct:false
2. ID 213 — "يسمح الانعطاف لليسار" → correct:false
3. ID 214 — "يجب ان تسير الى الامام" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 69,
    "question": "عند رؤية هاتين الشاخصتين فإنه",
    "answers": [
      {
        "id": "211",
        "text": "يجب ان تنعطف الى اليمين وممنوع الانعطاف الى اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "212",
        "text": "يجب ان تنعطف الي اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "213",
        "text": "يسمح الانعطاف لليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "214",
        "text": "يجب ان تسير الى الامام",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 630,
    "question": "عند رؤية هاتين الشاخصتين فإنه",
    "answers": [
      {
        "id": "2000",
        "text": "يجب ان تنعطف الي اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2001",
        "text": "يسمح الانعطاف لليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2002",
        "text": "يجب ان تسير الى الامام",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1999",
        "text": "يجب ان تنعطف الى اليمين وممنوع الانعطاف الى اليسار",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1999"
    ],
    "quizOptionsAnswerMap": {
      "1999": "1",
      "2000": "0",
      "2001": "0",
      "2002": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 68

- Our question text: يجب على سائقي الشاحنات:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-015057.jpg / 2230
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (عدم المسير على المسرب الايسر والاوسط.) — NOT applied

Our answer choices:

0. ID 208 — "عدم المسير على المسرب الايسر والاوسط." → correct:false
1. ID 209 — "عدم المسير على المسرب الايمن." → correct:false
2. ID 210 — "عدم مرور الشاحنات نهائيا في هذا الطريق" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 68,
    "question": "يجب على سائقي الشاحنات:",
    "answers": [
      {
        "id": "208",
        "text": "عدم المسير على المسرب الايسر والاوسط.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "209",
        "text": "عدم المسير على المسرب الايمن.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "210",
        "text": "عدم مرور الشاحنات نهائيا في هذا الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 631,
    "question": "يجب على سائقي الشاحنات:",
    "answers": [
      {
        "id": "2004",
        "text": "عدم المسير على المسرب الايمن.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2005",
        "text": "عدم مرور الشاحنات نهائيا في هذا الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2003",
        "text": "عدم المسير على المسرب الايسر والاوسط.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2003"
    ],
    "quizOptionsAnswerMap": {
      "2003": "1",
      "2004": "0",
      "2005": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 67

- Our question text: عند رؤية هاتين الشاخصتين فإن
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-014858-4.jpg / 4821
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (الالتفاف مسموح والانعطاف إلى اليسار ممنوع) — NOT applied

Our answer choices:

0. ID 205 — "الالتفاف مسموح والانعطاف إلى اليسار ممنوع" → correct:false
1. ID 206 — "السير الى الامام إلزامي." → correct:false
2. ID 207 — "الانعطاف لليمين ممنوع" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 67,
    "question": "عند رؤية هاتين الشاخصتين فإن",
    "answers": [
      {
        "id": "205",
        "text": "الالتفاف مسموح والانعطاف إلى اليسار ممنوع",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "206",
        "text": "السير الى الامام إلزامي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "207",
        "text": "الانعطاف لليمين ممنوع",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 632,
    "question": "عند رؤية هاتين الشاخصتين فإن",
    "answers": [
      {
        "id": "2007",
        "text": "السير الى الامام إلزامي",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2008",
        "text": "الانعطاف لليمين ممنوع",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2006",
        "text": "الالتفاف مسموح والانعطاف إلى اليسار ممنوع",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2006"
    ],
    "quizOptionsAnswerMap": {
      "2006": "1",
      "2007": "0",
      "2008": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 66

- Our question text: عند رؤية هذه الشاخصة فإنه:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-014747.jpg / 2228
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (ممنوع الدخول الامام بداخل النفق) — NOT applied

Our answer choices:

0. ID 202 — "الاتجاه الى الامام" → correct:false
1. ID 203 — "ممنوع الدخول الامام بداخل النفق" → correct:false
2. ID 204 — "ممنوع الاتجاه الى اليمين" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 66,
    "question": "عند رؤية هذه الشاخصة فإنه:",
    "answers": [
      {
        "id": "202",
        "text": "الاتجاه الى الامام",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "203",
        "text": "ممنوع الدخول الامام بداخل النفق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "204",
        "text": "ممنوع الاتجاه الى اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 633,
    "question": "عند رؤية هذه الشاخصة فإنه:",
    "answers": [
      {
        "id": "2011",
        "text": "ممنوع الاتجاه الى اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2010",
        "text": "ممنوع الدخول الامام بداخل النفق",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2009",
        "text": "الاتجاه الى الامام",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2010"
    ],
    "quizOptionsAnswerMap": {
      "2009": "0",
      "2010": "1",
      "2011": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 65

- Our question text: تعتبر هذه الشواخص
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-014627.jpg / 2227
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (إرشادية) — NOT applied

Our answer choices:

0. ID 199 — "إرشادية" → correct:false
1. ID 200 — "إلزامية" → correct:false
2. ID 201 — "تحذيرية." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 65,
    "question": "تعتبر هذه الشواخص",
    "answers": [
      {
        "id": "199",
        "text": "إرشادية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "200",
        "text": "إلزامية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "201",
        "text": "تحذيرية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 634,
    "question": "تعتبر هذه الشواخص",
    "answers": [
      {
        "id": "2012",
        "text": "إرشادية",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2014",
        "text": "تحذيرية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2013",
        "text": "إلزامية",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2012"
    ],
    "quizOptionsAnswerMap": {
      "2012": "1",
      "2013": "0",
      "2014": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 64

- Our question text: عندما ترى هذه الشاخصة وانت تقود مركبتك فإنه يجب عليك:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-014443.jpg / 2226
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (التمهل و التوقف عند وجود مشاة يعبرون الطريق.) — NOT applied

Our answer choices:

0. ID 196 — "التمهل و التوقف عند وجود مشاة يعبرون الطريق." → correct:false
1. ID 197 — "إكمال الطريق دون توقف لانه طريق رئيسي." → correct:false
2. ID 198 — "يجب عليك تخفيف السرعة دون التوقف" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 64,
    "question": "عندما ترى هذه الشاخصة وانت تقود مركبتك فإنه يجب عليك:",
    "answers": [
      {
        "id": "196",
        "text": "التمهل و التوقف عند وجود مشاة يعبرون الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "197",
        "text": "إكمال الطريق دون توقف لانه طريق رئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "198",
        "text": "يجب عليك تخفيف السرعة دون التوقف",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 635,
    "question": "عندما ترى هذه الشاخصة وانت تقود مركبتك فإنه يجب عليك:",
    "answers": [
      {
        "id": "2017",
        "text": "يجب عليك تخفيف السرعة دون التوقف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2015",
        "text": "التمهل و التوقف عند وجود مشاة يعبرون الطريق",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2016",
        "text": "إكمال الطريق دون توقف لانه طريق رئيسي",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2015"
    ],
    "quizOptionsAnswerMap": {
      "2015": "1",
      "2016": "0",
      "2017": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 63

- Our question text: ان توقف الباص في هذا المكان هو
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-014235.jpg / 2225
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (خاطئ كونه لم يلتزم بالوقوف بالموقف.) — NOT applied

Our answer choices:

0. ID 192 — "ممنوع لانه على طريق رئيسي." → correct:false
1. ID 193 — "ممنوع لانه تحت جسر مشاة." → correct:false
2. ID 194 — "مسموح لوجود شاخصة تدل على ذلك." → correct:false
3. ID 195 — "خاطئ كونه لم يلتزم بالوقوف بالموقف." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 63,
    "question": "ان توقف الباص في هذا المكان هو",
    "answers": [
      {
        "id": "192",
        "text": "ممنوع لانه على طريق رئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "193",
        "text": "ممنوع لانه تحت جسر مشاة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "194",
        "text": "مسموح لوجود شاخصة تدل على ذلك.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "195",
        "text": "خاطئ كونه لم يلتزم بالوقوف بالموقف.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 636,
    "question": "ان توقف الباص في هذا المكان هو",
    "answers": [
      {
        "id": "2020",
        "text": "مسموح لوجود شاخصة تدل على ذلك",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2018",
        "text": "ممنوع لانه على طريق رئيسي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2019",
        "text": "ممنوع لانه تحت جسر مشاة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2021",
        "text": "خاطئ كونه لم يلتزم بالوقوف بالموقف",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2021"
    ],
    "quizOptionsAnswerMap": {
      "2018": "0",
      "2019": "0",
      "2020": "0",
      "2021": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 61

- Our question text: عند وجود هذه الشاخصة يجب على المشاة
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-013833-1.jpg / 2223
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 186 — "المرور لكن بحذر." → correct:false
1. ID 187 — "المرور لانهم يملكون الاولوية" → correct:false
2. ID 188 — "عدم المرور ." → correct:false
3. ID 189 — "الشيء مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 61,
    "question": "عند وجود هذه الشاخصة يجب على المشاة",
    "answers": [
      {
        "id": "186",
        "text": "المرور لكن بحذر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "187",
        "text": "المرور لانهم يملكون الاولوية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "188",
        "text": "عدم المرور .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "189",
        "text": "الشيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 60

- Our question text: عند رؤيتك لهذه الشاخصة فإنة يجب عليك :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-013455.jpg / 2221
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (عدم المرور إذا كان إرتفاع مركبتك اكثر من 4.7متر.) — NOT applied

Our answer choices:

0. ID 182 — "المرور بحذر إذا كان إرتفاع مركبتك اكثر من 4.7 متر." → correct:false
1. ID 183 — "عدم المرور إذا كان إرتفاع مركبتك اقل 4.7 متر." → correct:false
2. ID 184 — "عدم المرور إذا كان إرتفاع مركبتك اكثر من 4.7متر." → correct:false
3. ID 185 — "عدم المرور إذا كان عرض مركبتك اكثر من 4.7 متر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 60,
    "question": "عند رؤيتك لهذه الشاخصة فإنة يجب عليك :",
    "answers": [
      {
        "id": "182",
        "text": "المرور بحذر إذا كان إرتفاع مركبتك اكثر من 4.7 متر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "183",
        "text": "عدم المرور إذا كان إرتفاع مركبتك اقل 4.7 متر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "184",
        "text": "عدم المرور إذا كان إرتفاع مركبتك اكثر من 4.7متر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "185",
        "text": "عدم المرور إذا كان عرض مركبتك اكثر من 4.7 متر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 639,
    "question": "عند رؤيتك لهذه الشاخصة فإنة يجب عليك :",
    "answers": [
      {
        "id": "2031",
        "text": "عدم المرور إذا كان عرض مركبتك اكثر من 4.7 متر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2029",
        "text": "عدم المرور إذا كان إرتفاع مركبتك اقل 4.7 متر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2030",
        "text": "عدم المرور إذا كان إرتفاع مركبتك اكثر من 4.7متر",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2028",
        "text": "المرور بحذر إذا كان إرتفاع مركبتك اكثر من 4.7 متر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2030"
    ],
    "quizOptionsAnswerMap": {
      "2028": "0",
      "2029": "0",
      "2030": "1",
      "2031": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 59

- Our question text: من خلال الصورة المبينة فإنة يجب عليك:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-013304.jpg / 2220
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (ب+ج.) — NOT applied

Our answer choices:

0. ID 178 — "المرور بحذر لانك تقترب من منطقة عمل على بعد 50م" → correct:false
1. ID 179 — "المرور بحذر لانك تقترب من منطقة عمل." → correct:false
2. ID 180 — "ان لا تزيد من سرعة مركبتك عن 50كم/ساعة." → correct:false
3. ID 181 — "ب+ج." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 640,
    "question": "من خلال الصورة المبينة فإنة يجب عليك:",
    "answers": [
      {
        "id": "2032",
        "text": "المرور بحذر لانك تقترب من منطقة عمل على بعد 50م",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2035",
        "text": "ب+ج",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2033",
        "text": "المرور بحذر لانك تقترب من منطقة عمل",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2034",
        "text": "ان لا تزيد من سرعة مركبتك عن 50كم/ساعة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2035"
    ],
    "quizOptionsAnswerMap": {
      "2032": "0",
      "2033": "0",
      "2034": "0",
      "2035": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 58

- Our question text: الاجراء الذي يجب أن تتخذه عند رؤية هذه الشاخصة هو:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-013141.jpg / 2219
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 175 — "إستعمال الزامور في جميع الاحوال." → correct:false
1. ID 176 — "إستعمال الزامور عند الضرورة فقط." → correct:false
2. ID 177 — "عدم إستعمال الزامور." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 58,
    "question": "الاجراء الذي يجب أن تتخذه عند رؤية هذه الشاخصة هو:",
    "answers": [
      {
        "id": "175",
        "text": "إستعمال الزامور في جميع الاحوال.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "176",
        "text": "إستعمال الزامور عند الضرورة فقط.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "177",
        "text": "عدم إستعمال الزامور.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 57

- Our question text: عند رؤيتك لهذه الازرار فإنه :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-013026-1.jpg / 4823
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (لا يسمح لك بالمرور عليها) — NOT applied

Our answer choices:

0. ID 172 — "يسمح لك بالمرور عليها." → correct:false
1. ID 173 — "يسمح لك بالمرور عليها لكن بشرط." → correct:false
2. ID 174 — "لا يسمح لك بالمرور عليها" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 57,
    "question": "عند رؤيتك لهذه الازرار فإنه :",
    "answers": [
      {
        "id": "172",
        "text": "يسمح لك بالمرور عليها.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "173",
        "text": "يسمح لك بالمرور عليها لكن بشرط.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "174",
        "text": "لا يسمح لك بالمرور عليها",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 643,
    "question": "عند رؤيتك لهذه الازرار فإنه :",
    "answers": [
      {
        "id": "2044",
        "text": "يسمح لك بالمرور عليها لكن بشرط",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2043",
        "text": "يسمح لك بالمرور عليها",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2045",
        "text": "لا يسمح لك بالمرور عليها",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2045"
    ],
    "quizOptionsAnswerMap": {
      "2043": "0",
      "2044": "0",
      "2045": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 56

- Our question text: عند رؤيتك لهذه الشاخصة فأنه يجب عليك :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: Screenshot-2023-03-06-012548.jpg / 2217
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 168 — "ان تخفف من سرعة المركبة لانك تقترب من تقاطع طرق على شكل (+)." → correct:false
1. ID 169 — "ان تزيد من سرعة المركبة لانك تقترب من تقاطع طرق ." → correct:false
2. ID 170 — "ان تخفف من سرعة المركبة لانك تقترب من دوار." → correct:false
3. ID 171 — "ان لا تخفف من سرعة المركبة لانك تقترب من دوار." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 56,
    "question": "عند رؤيتك لهذه الشاخصة فأنه يجب عليك :",
    "answers": [
      {
        "id": "168",
        "text": "ان تخفف من سرعة المركبة لانك تقترب من تقاطع طرق على شكل (+).",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "169",
        "text": "ان تزيد من سرعة المركبة لانك تقترب من تقاطع طرق .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "170",
        "text": "ان تخفف من سرعة المركبة لانك تقترب من دوار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "171",
        "text": "ان لا تخفف من سرعة المركبة لانك تقترب من دوار.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 55

- Our question text: تناول السوائل أثناء القيادة يؤدي إلى تشتيت انتباه السائق وبالتالي زيادة نسبة احتمالية الاشتراك في الحوادث
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)

Our answer choices:

0. ID 166 — "نعم" → correct:false
1. ID 167 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 55,
    "question": "تناول السوائل أثناء القيادة يؤدي إلى تشتيت انتباه السائق وبالتالي زيادة نسبة احتمالية الاشتراك في الحوادث",
    "answers": [
      {
        "id": "166",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "167",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": null
}
```

### Question ID 54

- Our question text: .من الاهداف الرئيسية لرجال السير هو:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)

Our answer choices:

0. ID 162 — "حماية السائق من ايذاء نفسه او ايذاء الاخرين" → correct:false
1. ID 163 — "ضمان فعالية النظام المروري وضمان تفاعل عناصره بالطريقة الصحيحة." → correct:false
2. ID 164 — "توعية مستخدمي الطريق." → correct:false
3. ID 165 — "جميع ما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 54,
    "question": ".من الاهداف الرئيسية لرجال السير هو:",
    "answers": [
      {
        "id": "162",
        "text": "حماية السائق من ايذاء نفسه او ايذاء الاخرين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "163",
        "text": "ضمان فعالية النظام المروري وضمان تفاعل عناصره بالطريقة الصحيحة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "164",
        "text": "توعية مستخدمي الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "165",
        "text": "جميع ما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": null
}
```

### Question ID 53

- Our question text: استخدام حزام الامان هو:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (إلزامي ويساعد المستخدم على تخفيف حدة الاصابة في حال وقوع حادث مروري شريطة استخدامه بالطريقة الصحيحة.) — NOT applied

Our answer choices:

0. ID 158 — "اختياري ." → correct:false
1. ID 159 — "إلزامي على الطرق الخارجية فقط ." → correct:false
2. ID 160 — "حرية شخصية للمستخدم وحسب مزاجه ." → correct:false
3. ID 161 — "إلزامي ويساعد المستخدم على تخفيف حدة الاصابة في حال وقوع حادث مروري شريطة استخدامه بالطريقة الصحيحة." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 53,
    "question": "استخدام حزام الامان هو:",
    "answers": [
      {
        "id": "158",
        "text": "اختياري .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "159",
        "text": "إلزامي على الطرق الخارجية فقط .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "160",
        "text": "حرية شخصية للمستخدم وحسب مزاجه .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "161",
        "text": "إلزامي ويساعد المستخدم على تخفيف حدة الاصابة في حال وقوع حادث مروري شريطة استخدامه بالطريقة الصحيحة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 647,
    "question": "استخدام حزام الامان هو:",
    "answers": [
      {
        "id": "2057",
        "text": "إلزامي على الطرق الخارجية فقط",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2058",
        "text": "إلزامي ويساعد المستخدم على تخفيف حدة الاصابة في حال وقوع حادث مروري شريطة استخدامه بالطريقة الصحيحة.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2059",
        "text": "حرية شخصية للمستخدم وحسب مزاجه .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2056",
        "text": "اختياري",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2058"
    ],
    "quizOptionsAnswerMap": {
      "2056": "0",
      "2057": "0",
      "2058": "1",
      "2059": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 52

- Our question text: .استخدام حزام الامان داخل المركبة:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)

Our answer choices:

0. ID 154 — "خاص بالاردن ." → correct:false
1. ID 155 — "خاص داخل المدن." → correct:false
2. ID 156 — "خاص فقط على الطرق الخارجية ." → correct:false
3. ID 157 — "منتشر في كافة أنحاء العالم بما فيها الاردن ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 52,
    "question": ".استخدام حزام الامان داخل المركبة:",
    "answers": [
      {
        "id": "154",
        "text": "خاص بالاردن .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "155",
        "text": "خاص داخل المدن.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "156",
        "text": "خاص فقط على الطرق الخارجية .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "157",
        "text": "منتشر في كافة أنحاء العالم بما فيها الاردن .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": null
}
```

### Question ID 51

- Our question text: .على الراكب الجالس بجوار السائق :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)

Our answer choices:

0. ID 150 — "إستخدام حزام الامان إذا اراد ذلك ." → correct:false
1. ID 151 — "عدم استخدام حزام الامان اذا كان يقيد حريته" → correct:false
2. ID 152 — "ستخدام حزام الامان لانه ملزم قانونياً." → correct:false
3. ID 153 — "لا شئ مماذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 51,
    "question": ".على الراكب الجالس بجوار السائق :",
    "answers": [
      {
        "id": "150",
        "text": "إستخدام حزام الامان إذا اراد ذلك .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "151",
        "text": "عدم استخدام حزام الامان اذا كان يقيد حريته",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "152",
        "text": "ستخدام حزام الامان لانه ملزم قانونياً.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "153",
        "text": "لا شئ مماذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": null
}
```

### Question ID 50

- Our question text: قانون السير الاردني يلزم السائق :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)

Our answer choices:

0. ID 147 — "استخدام حزام الامان خارج المدن فقط ." → correct:false
1. ID 148 — "استخدام حزام الامان داخل المدن فقط ." → correct:false
2. ID 149 — "- استخدام حزام الامان باستمرار أثناء القيادة" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 50,
    "question": "قانون السير الاردني يلزم السائق :",
    "answers": [
      {
        "id": "147",
        "text": "استخدام حزام الامان خارج المدن فقط .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "148",
        "text": "استخدام حزام الامان داخل المدن فقط .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "149",
        "text": "- استخدام حزام الامان باستمرار أثناء القيادة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": null
}
```

### Question ID 49

- Our question text: في حالة وقوع حادث مروري فإن استخدام حزام الامان بالصورة الصحيحة يساعد على :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)

Our answer choices:

0. ID 144 — "يزيد من الاصابة والاذى للمستخدم ." → correct:false
1. ID 145 — "لا فائدة من استخدامه." → correct:false
2. ID 146 — "انقاذ حياة مستخدمة" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 49,
    "question": "في حالة وقوع حادث مروري فإن استخدام حزام الامان بالصورة الصحيحة يساعد على :",
    "answers": [
      {
        "id": "144",
        "text": "يزيد من الاصابة والاذى للمستخدم .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "145",
        "text": "لا فائدة من استخدامه.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "146",
        "text": "انقاذ حياة مستخدمة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": null
}
```

### Question ID 48

- Our question text: استخدام حزام الامان في المركبات:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (يساعد على حماية المستخدم.) — NOT applied

Our answer choices:

0. ID 140 — "يساعد على حماية المستخدم." → correct:false
1. ID 141 — "تدخل في حرية المستخدم ." → correct:false
2. ID 142 — "يعيق حركة المستخدم." → correct:false
3. ID 143 — "جميع ما ذكر أعاله." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 48,
    "question": "استخدام حزام الامان في المركبات:",
    "answers": [
      {
        "id": "140",
        "text": "يساعد على حماية المستخدم.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "141",
        "text": "تدخل في حرية المستخدم .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "142",
        "text": "يعيق حركة المستخدم.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "143",
        "text": "جميع ما ذكر أعاله.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 652,
    "question": "استخدام حزام الامان في المركبات:",
    "answers": [
      {
        "id": "2075",
        "text": "تدخل في حرية المستخدم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2076",
        "text": "يعيق حركة المستخدم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2077",
        "text": "جميع ما ذكر أعاله",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2074",
        "text": "يساعد على حماية المستخدم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2074"
    ],
    "quizOptionsAnswerMap": {
      "2074": "1",
      "2075": "0",
      "2076": "0",
      "2077": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 47

- Our question text: حزام الامان في المركبات:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (إلزامي حسب قانون السير الاردني. .) — NOT applied

Our answer choices:

0. ID 136 — "إلزامي حسب قانون السير الاردني. ." → correct:false
1. ID 137 — "غير الزامي ." → correct:false
2. ID 138 — "لا يساعد على حماية المستخدم." → correct:false
3. ID 139 — "جميع ما ذكر أعلاه" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 47,
    "question": "حزام الامان في المركبات:",
    "answers": [
      {
        "id": "136",
        "text": "إلزامي حسب قانون السير الاردني. .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "137",
        "text": "غير الزامي .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "138",
        "text": "لا يساعد على حماية المستخدم.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "139",
        "text": "جميع ما ذكر أعلاه",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 653,
    "question": "حزام الامان في المركبات:",
    "answers": [
      {
        "id": "2081",
        "text": "جميع ما ذكر أعلاه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2078",
        "text": "إلزامي حسب قانون السير الاردني",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2080",
        "text": "لا يساعد على حماية المستخدم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2079",
        "text": "غير الزامي",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2078"
    ],
    "quizOptionsAnswerMap": {
      "2078": "1",
      "2079": "0",
      "2080": "0",
      "2081": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 46

- Our question text: الوسادة الهوائية (Air bag ):
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (استعمال حزام الامان ووجود الوسادة الهوائية توفر أكبر قدر ممكن من الوقاية في حالة وقوع حادث مروري) — NOT applied

Our answer choices:

0. ID 133 — "وحدها كافية لتوفير الحماية الالزمة لانقاذ حياة السائق في حالة وقوع حادث مروري ." → correct:false
1. ID 134 — "سلبية وقد تؤدي إلى إيذاء السائق." → correct:false
2. ID 135 — "استعمال حزام الامان ووجود الوسادة الهوائية توفر أكبر قدر ممكن من الوقاية في حالة وقوع حادث مروري" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 46,
    "question": "الوسادة الهوائية (Air bag ):",
    "answers": [
      {
        "id": "133",
        "text": "وحدها كافية لتوفير الحماية الالزمة لانقاذ حياة السائق في حالة وقوع حادث مروري .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "134",
        "text": "سلبية وقد تؤدي إلى إيذاء السائق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "135",
        "text": "استعمال حزام الامان ووجود الوسادة الهوائية توفر أكبر قدر ممكن من الوقاية في حالة وقوع حادث مروري",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 654,
    "question": "الوسادة الهوائية (Air bag ):",
    "answers": [
      {
        "id": "2084",
        "text": "استعمال حزام الامان ووجود الوسادة الهوائية توفر أكبر قدر ممكن من الوقاية في حالة وقوع حادث مروري",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2082",
        "text": "وحدها كافية لتوفير الحماية الالزمة لانقاذ حياة السائق في حالة وقوع حادث مروري .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2083",
        "text": "سلبية وقد تؤدي إلى إيذاء السائق",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2084"
    ],
    "quizOptionsAnswerMap": {
      "2082": "0",
      "2083": "0",
      "2084": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 44

- Our question text: من وظائف الاطارات الرئيسية:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر.) — NOT applied

Our answer choices:

0. ID 126 — "امتصاص الصدمات من الطريق" → correct:false
1. ID 127 — "رفع الاحمال" → correct:false
2. ID 128 — "نقل عملية الدفع والفرملة على الطريق" → correct:false
3. ID 129 — "جميع ما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 44,
    "question": "من وظائف الاطارات الرئيسية:",
    "answers": [
      {
        "id": "126",
        "text": "امتصاص الصدمات من الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "127",
        "text": "رفع الاحمال",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "128",
        "text": "نقل عملية الدفع والفرملة على الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "129",
        "text": "جميع ما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 655,
    "question": "من وظائف الاطارات الرئيسية:",
    "answers": [
      {
        "id": "2088",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2086",
        "text": "رفع الاحمال",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2085",
        "text": "امتصاص الصدمات من الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2087",
        "text": "نقل عملية الدفع والفرملة على الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2088"
    ],
    "quizOptionsAnswerMap": {
      "2085": "0",
      "2086": "0",
      "2087": "0",
      "2088": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 43

- Our question text: .من اجل الحصول على تعبئة وقود امنه يجب:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر) — NOT applied

Our answer choices:

0. ID 122 — "إطفاء المحرك" → correct:false
1. ID 123 — "عدم التدخين" → correct:false
2. ID 124 — "عدم إستخدام الهاتف المتنقل،وتركه داخل السيارة أو إغلاقه" → correct:false
3. ID 125 — "جميع ما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 43,
    "question": ".من اجل الحصول على تعبئة وقود امنه يجب:",
    "answers": [
      {
        "id": "122",
        "text": "إطفاء المحرك",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "123",
        "text": "عدم التدخين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "124",
        "text": "عدم إستخدام الهاتف المتنقل،وتركه داخل السيارة أو إغلاقه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "125",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 656,
    "question": ".من اجل الحصول على تعبئة وقود امنه يجب:",
    "answers": [
      {
        "id": "2089",
        "text": "إطفاء المحرك",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2092",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2091",
        "text": "عدم إستخدام الهاتف المتنقل،وتركه داخل السيارة أو إغلاقه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2090",
        "text": "عدم التدخين",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2092"
    ],
    "quizOptionsAnswerMap": {
      "2089": "0",
      "2090": "0",
      "2091": "0",
      "2092": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 42

- Our question text: .يمكن زيادة مسافة الامان بين المركبات إلى ثالث ثوان بدلاً من ثانيتين في ظروف القيادة غير الملائمة :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 120 — "نعم" → correct:false
1. ID 121 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 42,
    "question": ".يمكن زيادة مسافة الامان بين المركبات إلى ثالث ثوان بدلاً من ثانيتين في ظروف القيادة غير الملائمة :",
    "answers": [
      {
        "id": "120",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "121",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 657,
    "question": ".يمكن زيادة مسافة الامان بين المركبات إلى ثالث ثوان بدلاً من ثانيتين في ظروف القيادة غير الملائمة :",
    "answers": [
      {
        "id": "2093",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2094",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2093"
    ],
    "quizOptionsAnswerMap": {
      "2093": "1",
      "2094": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 41

- Our question text: مسافة الامان تختلف باختالف أحجام المركبات :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 118 — "نعم" → correct:false
1. ID 119 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 41,
    "question": "مسافة الامان تختلف باختالف أحجام المركبات :",
    "answers": [
      {
        "id": "118",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "119",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 658,
    "question": "مسافة الامان تختلف باختالف أحجام المركبات :",
    "answers": [
      {
        "id": "2095",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2096",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2095"
    ],
    "quizOptionsAnswerMap": {
      "2095": "1",
      "2096": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 40

- Our question text: الشيء الجيد في " قاعدة الثانيتين" هي انها تساعد على الاحتفاظ بمسافة أمان كافية :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 116 — "نعم" → correct:false
1. ID 117 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 40,
    "question": "الشيء الجيد في \" قاعدة الثانيتين\" هي انها تساعد على الاحتفاظ بمسافة أمان كافية :",
    "answers": [
      {
        "id": "116",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "117",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 659,
    "question": "الشيء الجيد في \" قاعدة الثانيتين\" هي انها تساعد على الاحتفاظ بمسافة أمان كافية :",
    "answers": [
      {
        "id": "2097",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2098",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2097"
    ],
    "quizOptionsAnswerMap": {
      "2097": "1",
      "2098": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 39

- Our question text: .ان افضل طريق لتجنب الحوادث المرورية استخدام اسلوب القيادة الوقائية المتمثل بترك مسافة امان كافية بين المركبات :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 114 — "نعم" → correct:false
1. ID 115 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 39,
    "question": ".ان افضل طريق لتجنب الحوادث المرورية استخدام اسلوب القيادة الوقائية المتمثل بترك مسافة امان كافية بين المركبات :",
    "answers": [
      {
        "id": "114",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "115",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 660,
    "question": ".ان افضل طريق لتجنب الحوادث المرورية استخدام اسلوب القيادة الوقائية المتمثل بترك مسافة امان كافية بين المركبات :",
    "answers": [
      {
        "id": "2100",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2099",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2099"
    ],
    "quizOptionsAnswerMap": {
      "2099": "1",
      "2100": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 38

- Our question text: مسافة الوقوف للمركبات الثقيلة كالشاحنات والحافلات تكون اقل منها بالنسبة للمركبات الصغيرة.
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 112 — "نعم" → correct:false
1. ID 113 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 38,
    "question": "مسافة الوقوف للمركبات الثقيلة كالشاحنات والحافلات تكون اقل منها بالنسبة للمركبات الصغيرة.",
    "answers": [
      {
        "id": "112",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "113",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 661,
    "question": "مسافة الوقوف للمركبات الثقيلة كالشاحنات والحافلات تكون اقل منها بالنسبة للمركبات الصغيرة.",
    "answers": [
      {
        "id": "2101",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2102",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2102"
    ],
    "quizOptionsAnswerMap": {
      "2101": "0",
      "2102": "1"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 37

- Our question text: مسافة الوقوف للمركبات الكبيرة كالشاحنات والحافلات تكون أكثر منها بالنسبة للمركبات الصغيرة.
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 110 — "نعم" → correct:false
1. ID 111 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 37,
    "question": "مسافة الوقوف للمركبات الكبيرة كالشاحنات والحافلات تكون أكثر منها بالنسبة للمركبات الصغيرة.",
    "answers": [
      {
        "id": "110",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "111",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 662,
    "question": "مسافة الوقوف للمركبات الكبيرة كالشاحنات والحافلات تكون أكثر منها بالنسبة للمركبات الصغيرة.",
    "answers": [
      {
        "id": "2103",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2104",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2103"
    ],
    "quizOptionsAnswerMap": {
      "2103": "1",
      "2104": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 36

- Our question text: .تكون مسافة الوقوف اكبر في حالة كانت الطريق جافة.
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 108 — "نعم" → correct:false
1. ID 109 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 36,
    "question": ".تكون مسافة الوقوف اكبر في حالة كانت الطريق جافة.",
    "answers": [
      {
        "id": "108",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "109",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 663,
    "question": ".تكون مسافة الوقوف اكبر في حالة كانت الطريق جافة.",
    "answers": [
      {
        "id": "2106",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2105",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2106"
    ],
    "quizOptionsAnswerMap": {
      "2105": "0",
      "2106": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 35

- Our question text: تكون مسافة الوقوف اقل في حالة كان الطريق مبتالا ً أو رطبا.
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 106 — "نعم" → correct:false
1. ID 107 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 35,
    "question": "تكون مسافة الوقوف اقل في حالة كان الطريق مبتالا ً أو رطبا.",
    "answers": [
      {
        "id": "106",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "107",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 664,
    "question": "تكون مسافة الوقوف اقل في حالة كان الطريق مبتالا ً أو رطبا.",
    "answers": [
      {
        "id": "2108",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2107",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2108"
    ],
    "quizOptionsAnswerMap": {
      "2107": "0",
      "2108": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 34

- Our question text: يجب على السائق ترك مسافة أمان بينه وبين المركبة الموجودة امامه مباشرة بحيث تكون كافية ويمكن زيادة الزمن الذي يفصل بينه وبين المركبة الموجودة امامه إلى ثلاث ثواني او اكثر في الظروف الجوية السيئه بدالًا من ثانيتين:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 104 — "نعم" → correct:false
1. ID 105 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 34,
    "question": "يجب على السائق ترك مسافة أمان بينه وبين المركبة الموجودة امامه مباشرة بحيث تكون كافية ويمكن زيادة الزمن الذي يفصل بينه وبين المركبة الموجودة امامه إلى ثلاث ثواني او اكثر في الظروف الجوية السيئه بدالًا من ثانيتين:",
    "answers": [
      {
        "id": "104",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "105",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 665,
    "question": "يجب على السائق ترك مسافة أمان بينه وبين المركبة الموجودة امامه مباشرة بحيث تكون كافية ويمكن زيادة الزمن الذي يفصل بينه وبين المركبة الموجودة امامه إلى ثلاث ثواني او اكثر في الظروف الجوية السيئه بدالًا من ثانيتين:",
    "answers": [
      {
        "id": "2110",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2109",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2109"
    ],
    "quizOptionsAnswerMap": {
      "2109": "1",
      "2110": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 33

- Our question text: يجب على السائق ترك مسافة أمان بينه وبين المركبة الموجودة أمامه مباشرة بحيث تكون كافية عند تطبيق قاعدة الثانيتين في الظروف الجوية الجيدة (السطح الجاف) :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 102 — "نعم" → correct:false
1. ID 103 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 33,
    "question": "يجب على السائق ترك مسافة أمان بينه وبين المركبة الموجودة أمامه مباشرة بحيث تكون كافية عند تطبيق قاعدة الثانيتين في الظروف الجوية الجيدة (السطح الجاف) :",
    "answers": [
      {
        "id": "102",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "103",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 666,
    "question": "يجب على السائق ترك مسافة أمان بينه وبين المركبة الموجودة أمامه مباشرة بحيث تكون كافية عند تطبيق قاعدة الثانيتين في الظروف الجوية الجيدة (السطح الجاف)",
    "answers": [
      {
        "id": "2111",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2112",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2111"
    ],
    "quizOptionsAnswerMap": {
      "2111": "1",
      "2112": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 32

- Our question text: من العوامل التي تتأثر فيها مسافة وقوف المركبة :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر.) — NOT applied

Our answer choices:

0. ID 98 — "حالة الفرامل (البريكات)" → correct:false
1. ID 99 — "زمن ردة فعل السائق" → correct:false
2. ID 100 — "تصميم المركبة" → correct:false
3. ID 101 — "جميع ما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 32,
    "question": "من العوامل التي تتأثر فيها مسافة وقوف المركبة :",
    "answers": [
      {
        "id": "98",
        "text": "حالة الفرامل (البريكات)",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "99",
        "text": "زمن ردة فعل السائق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "100",
        "text": "تصميم المركبة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "101",
        "text": "جميع ما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 667,
    "question": "من العوامل التي تتأثر فيها مسافة وقوف المركبة :",
    "answers": [
      {
        "id": "2115",
        "text": "تصميم المركبة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2113",
        "text": "حالة الفرامل (البريكات)",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2116",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2114",
        "text": "زمن ردة فعل السائق",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2116"
    ],
    "quizOptionsAnswerMap": {
      "2113": "0",
      "2114": "0",
      "2115": "0",
      "2116": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 31

- Our question text: من العوامل التي تتأثر فيها مسافة وقوف المركبة :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر.) — NOT applied

Our answer choices:

0. ID 94 — "حمولة المركبة" → correct:false
1. ID 95 — "ظروف سطح الطريق" → correct:false
2. ID 96 — "الاطارات" → correct:false
3. ID 97 — "جميع ما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 31,
    "question": "من العوامل التي تتأثر فيها مسافة وقوف المركبة :",
    "answers": [
      {
        "id": "94",
        "text": "حمولة المركبة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "95",
        "text": "ظروف سطح الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "96",
        "text": "الاطارات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "97",
        "text": "جميع ما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 668,
    "question": "من العوامل التي تتأثر فيها مسافة وقوف المركبة :",
    "answers": [
      {
        "id": "2118",
        "text": "ظروف سطح الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2117",
        "text": "حمولة المركبة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2120",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2119",
        "text": "الاطارات",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2120"
    ],
    "quizOptionsAnswerMap": {
      "2117": "0",
      "2118": "0",
      "2119": "0",
      "2120": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 30

- Our question text: لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة الا تحاول المنافسة معهم على نفس الجزء من الطريق اعطهم الكثير من الفراغ :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 92 — "نعم" → correct:false
1. ID 93 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 30,
    "question": "لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة الا تحاول المنافسة معهم على نفس الجزء من الطريق اعطهم الكثير من الفراغ :",
    "answers": [
      {
        "id": "92",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "93",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 669,
    "question": "لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة الا تحاول المنافسة معهم على نفس الجزء من الطريق اعطهم الكثير من الفراغ :",
    "answers": [
      {
        "id": "2122",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2121",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2121"
    ],
    "quizOptionsAnswerMap": {
      "2121": "1",
      "2122": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 29

- Our question text: لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة يجب عند تجاوز شاحنة او حافلة تذكر انها قد تكون اطول مرات عديدة من سيارتك و انها سوف تستغرق وقتا اطول لكي تتخطاها او تسبقها:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 90 — "نعم" → correct:false
1. ID 91 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 29,
    "question": "لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة يجب عند تجاوز شاحنة او حافلة تذكر انها قد تكون اطول مرات عديدة من سيارتك و انها سوف تستغرق وقتا اطول لكي تتخطاها او تسبقها:",
    "answers": [
      {
        "id": "90",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "91",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 670,
    "question": "لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة يجب عند تجاوز شاحنة او حافلة تذكر انها قد تكون اطول مرات عديدة من سيارتك و انها سوف تستغرق وقتا اطول لكي تتخطاها او تسبقها",
    "answers": [
      {
        "id": "2124",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2123",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2123"
    ],
    "quizOptionsAnswerMap": {
      "2123": "1",
      "2124": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 28

- Our question text: لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة يجب :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر.) — NOT applied

Our answer choices:

0. ID 86 — "تحاشي القيادة في المساحات العمياء للشاحنات و الحافالات" → correct:false
1. ID 87 — "تجنب السير قريبا من الشاحنات و الحافلات حيث ان هذا قد يحجب رؤيتك للطريق" → correct:false
2. ID 88 — "لا تحاول المنافسة معهم على نفس الجزء من الطريق اعطهم الكثير من الفراغ و بالذات عند الدوران او عندما يستخدمون الكوابح ( الفرامل ) ." → correct:false
3. ID 89 — "جميع ما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 28,
    "question": "لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة يجب :",
    "answers": [
      {
        "id": "86",
        "text": "تحاشي القيادة في المساحات العمياء للشاحنات و الحافالات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "87",
        "text": "تجنب السير قريبا من الشاحنات و الحافلات حيث ان هذا قد يحجب رؤيتك للطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "88",
        "text": "لا تحاول المنافسة معهم على نفس الجزء من الطريق اعطهم الكثير من الفراغ و بالذات عند الدوران او عندما يستخدمون الكوابح ( الفرامل ) .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "89",
        "text": "جميع ما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 671,
    "question": "لتقليل مخاطر حدوث تصادم مع المركبات الثقيلة يجب :",
    "answers": [
      {
        "id": "2125",
        "text": "تحاشي القيادة في المساحات العمياء للشاحنات و الحافالات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2127",
        "text": "لا تحاول المنافسة معهم على نفس الجزء من الطريق اعطهم الكثير من الفراغ و بالذات عند الدوران او عندما يستخدمون الكوابح ( الفرامل ) .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2126",
        "text": "تجنب السير قريبا من الشاحنات و الحافلات حيث ان هذا قد يحجب رؤيتك للطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2128",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2128"
    ],
    "quizOptionsAnswerMap": {
      "2125": "0",
      "2126": "0",
      "2127": "0",
      "2128": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 27

- Our question text: .يجب أعطاء جميع راكبي الدراجات الهوائية مسافات الامان الكافية عند الاقترب منهم
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 84 — "نعم" → correct:false
1. ID 85 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 27,
    "question": ".يجب أعطاء جميع راكبي الدراجات الهوائية مسافات الامان الكافية عند الاقترب منهم",
    "answers": [
      {
        "id": "84",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "85",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 672,
    "question": ".يجب أعطاء جميع راكبي الدراجات الهوائية مسافات الامان الكافية عند الاقترب منهم",
    "answers": [
      {
        "id": "2129",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2130",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2129"
    ],
    "quizOptionsAnswerMap": {
      "2129": "1",
      "2130": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 26

- Our question text: .من أكثر مستخدمي الطريق المعرضون للخطر:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (المشاة) — NOT applied

Our answer choices:

0. ID 80 — "المشاة" → correct:false
1. ID 81 — "راكبوا الدرجات الهوائية" → correct:false
2. ID 82 — "راكبوا الدراجات الالية" → correct:false
3. ID 83 — "جميع ما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 26,
    "question": ".من أكثر مستخدمي الطريق المعرضون للخطر:",
    "answers": [
      {
        "id": "80",
        "text": "المشاة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "81",
        "text": "راكبوا الدرجات الهوائية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "82",
        "text": "راكبوا الدراجات الالية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "83",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 673,
    "question": ".من أكثر مستخدمي الطريق المعرضون للخطر:",
    "answers": [
      {
        "id": "2131",
        "text": "المشاة",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2133",
        "text": "راكبوا الدراجات الالية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2134",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2132",
        "text": "راكبوا الدرجات الهوائية",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2131"
    ],
    "quizOptionsAnswerMap": {
      "2131": "1",
      "2132": "0",
      "2133": "0",
      "2134": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 25

- Our question text: إن مستخدمي احزمة الامان يصابون بإصابات أخف وأقل خطورة من الذين لا يستخدمونها :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 78 — "نعم" → correct:false
1. ID 79 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 25,
    "question": "إن مستخدمي احزمة الامان يصابون بإصابات أخف وأقل خطورة من الذين لا يستخدمونها :",
    "answers": [
      {
        "id": "78",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "79",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 674,
    "question": "إن مستخدمي احزمة الامان يصابون بإصابات أخف وأقل خطورة من الذين لا يستخدمونها :",
    "answers": [
      {
        "id": "2135",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2136",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2135"
    ],
    "quizOptionsAnswerMap": {
      "2135": "1",
      "2136": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 24

- Our question text: من الاجهزة المستخدمة للسالمة الوقائية لركاب المركبات :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (جميع ماذكر .) — NOT applied

Our answer choices:

0. ID 75 — "حزام الامان." → correct:false
1. ID 76 — "الوسادة الهوائية." → correct:false
2. ID 77 — "جميع ماذكر ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 24,
    "question": "من الاجهزة المستخدمة للسالمة الوقائية لركاب المركبات :",
    "answers": [
      {
        "id": "75",
        "text": "حزام الامان.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "76",
        "text": "الوسادة الهوائية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "77",
        "text": "جميع ماذكر .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 675,
    "question": "من الاجهزة المستخدمة للسالمة الوقائية لركاب المركبات :",
    "answers": [
      {
        "id": "2138",
        "text": "الوسادة الهوائية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2139",
        "text": "جميع ماذكر",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2137",
        "text": "حزام الامان",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2139"
    ],
    "quizOptionsAnswerMap": {
      "2137": "0",
      "2138": "0",
      "2139": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 23

- Our question text: تتم عملية انتفاخ الوسادة الهوائية بواسطة إشارة كهربائية تنبعث من احدى اجهزة الحساس الواقعة في مقدمة السيارة:.
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 73 — "نعم" → correct:false
1. ID 74 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 23,
    "question": "تتم عملية انتفاخ الوسادة الهوائية بواسطة إشارة كهربائية تنبعث من احدى اجهزة الحساس الواقعة في مقدمة السيارة:.",
    "answers": [
      {
        "id": "73",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "74",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 676,
    "question": "تتم عملية انتفاخ الوسادة الهوائية بواسطة إشارة كهربائية تنبعث من احدى اجهزة الحساس الواقعة في مقدمة السيارة:.",
    "answers": [
      {
        "id": "2141",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2140",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2140"
    ],
    "quizOptionsAnswerMap": {
      "2140": "1",
      "2141": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 22

- Our question text: .حسب قانون السير الاردني يجب ان تقل نسبة تركيز الكحول في الدم عند القيادة عن الاتي :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 ((80 ) ملغم كحول /100 ميلليتر دم) — NOT applied

Our answer choices:

0. ID 69 — "( 40 ) ملغم كحول /100 ميلليتر دم" → correct:false
1. ID 70 — "(60 ) ملغم كحول /100 ميلليتر دم" → correct:false
2. ID 71 — "(80 ) ملغم كحول /100 ميلليتر دم" → correct:false
3. ID 72 — "(100 ) ملغم كحول /100 ميلليتر دم" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 22,
    "question": ".حسب قانون السير الاردني يجب ان تقل نسبة تركيز الكحول في الدم عند القيادة عن الاتي :",
    "answers": [
      {
        "id": "69",
        "text": "( 40 ) ملغم كحول /100 ميلليتر دم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "70",
        "text": "(60 ) ملغم كحول /100 ميلليتر دم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "71",
        "text": "(80 ) ملغم كحول /100 ميلليتر دم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "72",
        "text": "(100 ) ملغم كحول /100 ميلليتر دم",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 677,
    "question": ".حسب قانون السير الاردني يجب ان تقل نسبة تركيز الكحول في الدم عند القيادة عن الاتي :",
    "answers": [
      {
        "id": "2142",
        "text": "( 40 ) ملغم كحول /100 ميلليتر دم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2144",
        "text": "(80 ) ملغم كحول /100 ميلليتر دم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2143",
        "text": "(60 ) ملغم كحول /100 ميلليتر دم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2145",
        "text": "(100 ) ملغم كحول /100 ميلليتر دم",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2144"
    ],
    "quizOptionsAnswerMap": {
      "2142": "0",
      "2143": "0",
      "2144": "1",
      "2145": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 21

- Our question text: من الادوية التي تؤثر على القيادة بعض أقراص الحمية الغذائية :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 67 — "نعم" → correct:false
1. ID 68 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 21,
    "question": "من الادوية التي تؤثر على القيادة بعض أقراص الحمية الغذائية :",
    "answers": [
      {
        "id": "67",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "68",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 678,
    "question": "من الادوية التي تؤثر على القيادة بعض أقراص الحمية الغذائية :",
    "answers": [
      {
        "id": "2146",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2147",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2146"
    ],
    "quizOptionsAnswerMap": {
      "2146": "1",
      "2147": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 20

- Our question text: .من الادوية التي تؤثر على القيادة بعض أدوية البرد والانفلونزا :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 65 — "نعم" → correct:false
1. ID 66 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 20,
    "question": ".من الادوية التي تؤثر على القيادة بعض أدوية البرد والانفلونزا :",
    "answers": [
      {
        "id": "65",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "66",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 679,
    "question": ".من الادوية التي تؤثر على القيادة بعض أدوية البرد والانفلونزا :",
    "answers": [
      {
        "id": "2149",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2148",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2148"
    ],
    "quizOptionsAnswerMap": {
      "2148": "1",
      "2149": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 18

- Our question text: الكحول عبارة عن مادة مسكنة تؤدي الى خفض النشاط والحيوية فهي تعمل على :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر .) — NOT applied

Our answer choices:

0. ID 57 — "الابطاء من سرعة وظائف الدماغ مما يضعف القدرة على الاستجابه." → correct:false
1. ID 58 — "التأثير على تقدير السائق للسرعة التي يسير بها و سرعة المركبات المجاورة له والمسافة والتي تفصله عنها." → correct:false
2. ID 59 — "زيادة صعوبة القيام باكثر من عملين في وقت واحد." → correct:false
3. ID 60 — "جميع ما ذكر ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 18,
    "question": "الكحول عبارة عن مادة مسكنة تؤدي الى خفض النشاط والحيوية فهي تعمل على :",
    "answers": [
      {
        "id": "57",
        "text": "الابطاء من سرعة وظائف الدماغ مما يضعف القدرة على الاستجابه.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "58",
        "text": "التأثير على تقدير السائق للسرعة التي يسير بها و سرعة المركبات المجاورة له والمسافة والتي تفصله عنها.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "59",
        "text": "زيادة صعوبة القيام باكثر من عملين في وقت واحد.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "60",
        "text": "جميع ما ذكر .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 681,
    "question": "الكحول عبارة عن مادة مسكنة تؤدي الى خفض النشاط والحيوية فهي تعمل على :",
    "answers": [
      {
        "id": "2157",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2155",
        "text": "التأثير على تقدير السائق للسرعة التي يسير بها و سرعة المركبات المجاورة له والمسافة والتي تفصله عنها.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2154",
        "text": "الابطاء من سرعة وظائف الدماغ مما يضعف القدرة على الاستجابه.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2156",
        "text": "زيادة صعوبة القيام باكثر من عملين في وقت واحد.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2157"
    ],
    "quizOptionsAnswerMap": {
      "2154": "0",
      "2155": "0",
      "2156": "0",
      "2157": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 17

- Our question text: من الناحيه العلمية الكحول عبارة عن مادة مسكنة تؤدي إلى خفض النشاط والحيوية وتؤثر على قدرة السائق على القيادة بأمان.
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 55 — "نعم" → correct:false
1. ID 56 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 17,
    "question": "من الناحيه العلمية الكحول عبارة عن مادة مسكنة تؤدي إلى خفض النشاط والحيوية وتؤثر على قدرة السائق على القيادة بأمان.",
    "answers": [
      {
        "id": "55",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "56",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 682,
    "question": "من الناحيه العلمية الكحول عبارة عن مادة مسكنة تؤدي إلى خفض النشاط والحيوية وتؤثر على قدرة السائق على القيادة بأمان.",
    "answers": [
      {
        "id": "2159",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2158",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2158"
    ],
    "quizOptionsAnswerMap": {
      "2158": "1",
      "2159": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 16

- Our question text: يجب على سائق المركبة ان يقرأ النشرة المرفقة مع الادوية التي يتناولها للتأكد من انها التؤثر على قيادة المركبة بأي شكل من الاشكال :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 53 — "نعم" → correct:false
1. ID 54 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 16,
    "question": "يجب على سائق المركبة ان يقرأ النشرة المرفقة مع الادوية التي يتناولها للتأكد من انها التؤثر على قيادة المركبة بأي شكل من الاشكال :",
    "answers": [
      {
        "id": "53",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "54",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 683,
    "question": "يجب على سائق المركبة ان يقرأ النشرة المرفقة مع الادوية التي يتناولها للتأكد من انها التؤثر على قيادة المركبة بأي شكل من الاشكال :",
    "answers": [
      {
        "id": "2161",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2160",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2160"
    ],
    "quizOptionsAnswerMap": {
      "2160": "1",
      "2161": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 15

- Our question text: يتم فحص نسبة الكحول في النفس من قبل رجال الشرطة بواسطة اجهزة خاصة بحيث يتم ضبط رخصتي السوق والسير ومنع السائق من متابعة القيادة اذا كانت نسبة الكحول في هواء الزفير:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 ((4.0 )ملغرام كحول في التر الواحد من عينه النفس.) — NOT applied

Our answer choices:

0. ID 49 — "(4.0 )ملغرام كحول في التر الواحد من عينه النفس." → correct:false
1. ID 50 — "(3.0 )ملغرام كحول في التر الواحد من عينه النفس." → correct:false
2. ID 51 — "(2.0 )ملغرام كحول في التر الواحد من عينه النفس." → correct:false
3. ID 52 — "ملغرام واحد كحول في التر الواحد من عينه النفس." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 15,
    "question": "يتم فحص نسبة الكحول في النفس من قبل رجال الشرطة بواسطة اجهزة خاصة بحيث يتم ضبط رخصتي السوق والسير ومنع السائق من متابعة القيادة اذا كانت نسبة الكحول في هواء الزفير:",
    "answers": [
      {
        "id": "49",
        "text": "(4.0 )ملغرام كحول في التر الواحد من عينه النفس.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "50",
        "text": "(3.0 )ملغرام كحول في التر الواحد من عينه النفس.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "51",
        "text": "(2.0 )ملغرام كحول في التر الواحد من عينه النفس.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "52",
        "text": "ملغرام واحد كحول في التر الواحد من عينه النفس.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 684,
    "question": "يتم فحص نسبة الكحول في النفس من قبل رجال الشرطة بواسطة اجهزة خاصة بحيث يتم ضبط رخصتي السوق والسير ومنع السائق من متابعة القيادة اذا كانت نسبة الكحول في هواء الزفير:",
    "answers": [
      {
        "id": "2164",
        "text": "(2.0 )ملغرام كحول في التر الواحد من عينه النفس.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2162",
        "text": "(4.0 )ملغرام كحول في التر الواحد من عينه النفس.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2163",
        "text": "(3.0 )ملغرام كحول في التر الواحد من عينه النفس.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2165",
        "text": "ملغرام واحد كحول في التر الواحد من عينه النفس.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2162"
    ],
    "quizOptionsAnswerMap": {
      "2162": "1",
      "2163": "0",
      "2164": "0",
      "2165": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 14

- Our question text: أثبتت الابحاث والدراسات أن تجاوز السرعة المحددة ولو بشكل بسيط يمكن أن يزيد من خطر إرتكاب حوادث مرورية بشكل كبير :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 47 — "نعم" → correct:false
1. ID 48 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 14,
    "question": "أثبتت الابحاث والدراسات أن تجاوز السرعة المحددة ولو بشكل بسيط يمكن أن يزيد من خطر إرتكاب حوادث مرورية بشكل كبير :",
    "answers": [
      {
        "id": "47",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "48",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 685,
    "question": "أثبتت الابحاث والدراسات أن تجاوز السرعة المحددة ولو بشكل بسيط يمكن أن يزيد من خطر إرتكاب حوادث مرورية بشكل كبير :",
    "answers": [
      {
        "id": "2167",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2166",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2166"
    ],
    "quizOptionsAnswerMap": {
      "2166": "1",
      "2167": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 13

- Our question text: السرعة هي السبب الرئيسي وراء وقوع حوادث الطرق المميتة والمسببة لإلصابات ، بالاضافة إلى أنها تكلف المجتمع مبالغ طائلة سنويا.
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 45 — "نعم" → correct:false
1. ID 46 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 13,
    "question": "السرعة هي السبب الرئيسي وراء وقوع حوادث الطرق المميتة والمسببة لإلصابات ، بالاضافة إلى أنها تكلف المجتمع مبالغ طائلة سنويا.",
    "answers": [
      {
        "id": "45",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "46",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 686,
    "question": "السرعة هي السبب الرئيسي وراء وقوع حوادث الطرق المميتة والمسببة لإلصابات ، بالاضافة إلى أنها تكلف المجتمع مبالغ طائلة سنويا.",
    "answers": [
      {
        "id": "2169",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2168",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2168"
    ],
    "quizOptionsAnswerMap": {
      "2168": "1",
      "2169": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 12

- Our question text: من الاسباب الرئيسية لوقوع الحوادث المرورية :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر.) — NOT applied

Our answer choices:

0. ID 41 — "عدم الانتباه ." → correct:false
1. ID 42 — "خلل فني في المركبة" → correct:false
2. ID 43 — "اساليب خاطئة اثناء السوق." → correct:false
3. ID 44 — "جميع ما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 12,
    "question": "من الاسباب الرئيسية لوقوع الحوادث المرورية :",
    "answers": [
      {
        "id": "41",
        "text": "عدم الانتباه .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "42",
        "text": "خلل فني في المركبة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "43",
        "text": "اساليب خاطئة اثناء السوق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "44",
        "text": "جميع ما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 687,
    "question": "من الاسباب الرئيسية لوقوع الحوادث المرورية :",
    "answers": [
      {
        "id": "2172",
        "text": "اساليب خاطئة اثناء السوق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2171",
        "text": "خلل فني في المركبة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2170",
        "text": "عدم الانتباه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2173",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2173"
    ],
    "quizOptionsAnswerMap": {
      "2170": "0",
      "2171": "0",
      "2172": "0",
      "2173": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 11

- Our question text: من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (عدم الانتباه لشواخص المرور) — NOT applied

Our answer choices:

0. ID 38 — "عدم الانتباه لشواخص المرور" → correct:false
1. ID 39 — "سهولة البقاء في مسارات الطريق." → correct:false
2. ID 40 — "جميع ماذكر ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 11,
    "question": "من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة",
    "answers": [
      {
        "id": "38",
        "text": "عدم الانتباه لشواخص المرور",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "39",
        "text": "سهولة البقاء في مسارات الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "40",
        "text": "جميع ماذكر .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 688,
    "question": "من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة",
    "answers": [
      {
        "id": "2176",
        "text": "جميع ماذكر .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2174",
        "text": "عدم الانتباه لشواخص المرور",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2175",
        "text": "سهولة البقاء في مسارات الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2174"
    ],
    "quizOptionsAnswerMap": {
      "2174": "1",
      "2175": "0",
      "2176": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 7

- Our question text: من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر.) — NOT applied

Our answer choices:

0. ID 24 — "التثاؤب" → correct:false
1. ID 25 — "ضعف التركيز" → correct:false
2. ID 26 — "الخمول" → correct:false
3. ID 27 — "جميع ما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 7,
    "question": "من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة:",
    "answers": [
      {
        "id": "24",
        "text": "التثاؤب",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "25",
        "text": "ضعف التركيز",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "26",
        "text": "الخمول",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "27",
        "text": "جميع ما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 689,
    "question": "من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة:",
    "answers": [
      {
        "id": "2180",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2177",
        "text": "التثاؤب",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2178",
        "text": "ضعف التركيز",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2179",
        "text": "الخمول",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2180"
    ],
    "quizOptionsAnswerMap": {
      "2177": "0",
      "2178": "0",
      "2179": "0",
      "2180": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 6

- Our question text: تزداد احتمالات الشعور بالارهاق كلما زادت ساعات القيادة:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 20 — "نعم" → correct:false
1. ID 21 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 6,
    "question": "تزداد احتمالات الشعور بالارهاق كلما زادت ساعات القيادة:",
    "answers": [
      {
        "id": "20",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "21",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 690,
    "question": "تزداد احتمالات الشعور بالارهاق كلما زادت ساعات القيادة:",
    "answers": [
      {
        "id": "2181",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2182",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2181"
    ],
    "quizOptionsAnswerMap": {
      "2181": "1",
      "2182": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 5

- Our question text: لتجنب الشعور بالارهاق اثناء القيادة يجب عليك كسائق اتباع ما يلي:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ايقاف المركبة واخذ قسط من الراحة.) — NOT applied

Our answer choices:

0. ID 14 — "ايقاف المركبة واخذ قسط من الراحة." → correct:false
1. ID 15 — "متابعة السير عند الشعور بالارهاق." → correct:false
2. ID 16 — "تناول الاطعمة الدسمة." → correct:false
3. ID 17 — "جميع ما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 5,
    "question": "لتجنب الشعور بالارهاق اثناء القيادة يجب عليك كسائق اتباع ما يلي:",
    "answers": [
      {
        "id": "14",
        "text": "ايقاف المركبة واخذ قسط من الراحة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "15",
        "text": "متابعة السير عند الشعور بالارهاق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "16",
        "text": "تناول الاطعمة الدسمة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "17",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 691,
    "question": "لتجنب الشعور بالارهاق اثناء القيادة يجب عليك كسائق اتباع ما يلي:",
    "answers": [
      {
        "id": "2186",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2184",
        "text": "متابعة السير عند الشعور بالارهاق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2183",
        "text": "ايقاف المركبة واخذ قسط من الراحة",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2185",
        "text": "تناول الاطعمة الدسمة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2183"
    ],
    "quizOptionsAnswerMap": {
      "2183": "1",
      "2184": "0",
      "2185": "0",
      "2186": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 4

- Our question text: يعتبر شرود الذهن اثناء القيادة من اكثر الاسباب المؤدية الرتكاب الحوادث المرورية:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 10 — "نعم" → correct:false
1. ID 11 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 4,
    "question": "يعتبر شرود الذهن اثناء القيادة من اكثر الاسباب المؤدية الرتكاب الحوادث المرورية:",
    "answers": [
      {
        "id": "10",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "11",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 692,
    "question": "يعتبر شرود الذهن اثناء القيادة من اكثر الاسباب المؤدية الرتكاب الحوادث المرورية:",
    "answers": [
      {
        "id": "2187",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2188",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2187"
    ],
    "quizOptionsAnswerMap": {
      "2187": "1",
      "2188": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 3

- Our question text: من الامور التى تساعد على تقليل مصادر شرود الذهن والتي تساعد على التقليل من إرتكاب الحوادث:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (عدم إستخدام الهاتف المتنقل أثناء القيادة) — NOT applied

Our answer choices:

0. ID 7 — "إستخدام الهاتف اثناء القيادة" → correct:false
1. ID 8 — "عدم إستخدام الهاتف المتنقل أثناء القيادة" → correct:false
2. ID 9 — "محاولة تشغيل الراديو أو الكاسيت أثناء القيادة" → correct:false
3. ID 18 — "جميع ما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 3,
    "question": "من الامور التى تساعد على تقليل مصادر شرود الذهن والتي تساعد على التقليل من إرتكاب الحوادث:",
    "answers": [
      {
        "id": "7",
        "text": "إستخدام الهاتف اثناء القيادة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "8",
        "text": "عدم إستخدام الهاتف المتنقل أثناء القيادة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "9",
        "text": "محاولة تشغيل الراديو أو الكاسيت أثناء القيادة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "18",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 693,
    "question": "من الامور التى تساعد على تقليل مصادر شرود الذهن والتي تساعد على التقليل من إرتكاب الحوادث:",
    "answers": [
      {
        "id": "2191",
        "text": "محاولة تشغيل الراديو أو الكاسيت أثناء القيادة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2192",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2190",
        "text": "عدم إستخدام الهاتف المتنقل أثناء القيادة",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2189",
        "text": "إستخدام الهاتف اثناء القيادة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2190"
    ],
    "quizOptionsAnswerMap": {
      "2189": "0",
      "2190": "1",
      "2191": "0",
      "2192": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 2

- Our question text: قد يتسبب الشعور بالارهاق الى حادث سير:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 4 — "نعم" → correct:false
1. ID 5 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 2,
    "question": "قد يتسبب الشعور بالارهاق الى حادث سير:",
    "answers": [
      {
        "id": "4",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "5",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 694,
    "question": "قد يتسبب الشعور بالارهاق الى حادث سير:",
    "answers": [
      {
        "id": "2194",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2193",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2193"
    ],
    "quizOptionsAnswerMap": {
      "2193": "1",
      "2194": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 1

- Our question text: من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر.) — NOT applied

Our answer choices:

0. ID 1 — "بطء ردة الفعل" → correct:false
1. ID 2 — "الضجر" → correct:false
2. ID 3 — "سرعة الاثارة و الغضب." → correct:false
3. ID 19 — "جميع ما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 1,
    "question": "من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة:",
    "answers": [
      {
        "id": "1",
        "text": "بطء ردة الفعل",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2",
        "text": "الضجر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "3",
        "text": "سرعة الاثارة و الغضب.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "19",
        "text": "جميع ما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 695,
    "question": "من المؤشرات المبكرة للشعور بالارهاق أثناء القيادة:",
    "answers": [
      {
        "id": "2195",
        "text": "بطء ردة الفعل",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2198",
        "text": "جميع ما ذكر.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2196",
        "text": "الضجر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2197",
        "text": "سرعة الاثارة و الغضب.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2198"
    ],
    "quizOptionsAnswerMap": {
      "2195": "0",
      "2196": "0",
      "2197": "0",
      "2198": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 616

- Our question text: واحدة من الامور التي تساعد على زيادة إستهلاك البنزين:
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (الضغط المنخفض للهواء بالاطارات) — NOT applied

Our answer choices:

0. ID 1785 — "الابتعاد عن الاختناقات المرورية" → correct:false
1. ID 1786 — "الضغط المنخفض للهواء بالاطارات" → correct:false
2. ID 1787 — "تغير السرعات يتم بنقل الحركة من سرعة الى اخرى فى الوقت المناسب" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 616,
    "question": "واحدة من الامور التي تساعد على زيادة إستهلاك البنزين:",
    "answers": [
      {
        "id": "1785",
        "text": "الابتعاد عن الاختناقات المرورية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1786",
        "text": "الضغط المنخفض للهواء بالاطارات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1787",
        "text": "تغير السرعات يتم بنقل الحركة من سرعة الى اخرى فى الوقت المناسب",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 696,
    "question": "واحدة من الامور التي تساعد على زيادة إستهلاك البنزين:",
    "answers": [
      {
        "id": "2199",
        "text": "الابتعاد عن الاختناقات المرورية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2201",
        "text": "تغير السرعات يتم بنقل الحركة من سرعة الى اخرى فى الوقت المناسب",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2200",
        "text": "الضغط المنخفض للهواء بالاطارات",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2200"
    ],
    "quizOptionsAnswerMap": {
      "2199": "0",
      "2200": "1",
      "2201": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 617

- Our question text: عند تشغيل المركبة يوميا و قبل الانطلاق يجب :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية).) — NOT applied

Our answer choices:

0. ID 1788 — "التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات، الاضوية الخلفية)." → correct:false
1. ID 1789 — "تفقد صلاحية الاطارات وشد الصواميل." → correct:false
2. ID 1790 — "التأكد من زيت الجير والمحور الخلفي" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 617,
    "question": "عند تشغيل المركبة يوميا و قبل الانطلاق يجب :",
    "answers": [
      {
        "id": "1788",
        "text": "التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات، الاضوية الخلفية).",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1789",
        "text": "تفقد صلاحية الاطارات وشد الصواميل.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1790",
        "text": "التأكد من زيت الجير والمحور الخلفي",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 697,
    "question": "عند تشغيل المركبة يوميا و قبل الانطلاق يجب :",
    "answers": [
      {
        "id": "2203",
        "text": "تفقد صلاحية الاطارات وشد الصواميل.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2202",
        "text": "التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات، الاضوية الخلفية).",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2204",
        "text": "التأكد من زيت الجير والمحور الخلفي",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2202"
    ],
    "quizOptionsAnswerMap": {
      "2202": "1",
      "2203": "0",
      "2204": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 635

- Our question text: المشاة هم :
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر) — NOT applied

Our answer choices:

0. ID 1833 — "الذين يسيرون على اقدامهم." → correct:false
1. ID 1834 — "سائقوا الدراجات الهوائية ." → correct:false
2. ID 1835 — "اي شخص يدفع أو يجر عربة اطفال او عربة مريض او مقعد او عربة يد." → correct:false
3. ID 1836 — "جميع ما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 635,
    "question": "المشاة هم :",
    "answers": [
      {
        "id": "1833",
        "text": "الذين يسيرون على اقدامهم.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1834",
        "text": "سائقوا الدراجات الهوائية .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1835",
        "text": "اي شخص يدفع أو يجر عربة اطفال او عربة مريض او مقعد او عربة يد.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1836",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 698,
    "question": "المشاة هم :",
    "answers": [
      {
        "id": "2205",
        "text": "الذين يسيرون على اقدامهم.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2208",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2207",
        "text": "اي شخص يدفع أو يجر عربة اطفال او عربة مريض او مقعد او عربة يد.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2206",
        "text": "سائقوا الدراجات الهوائية .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2208"
    ],
    "quizOptionsAnswerMap": {
      "2205": "0",
      "2206": "0",
      "2207": "0",
      "2208": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 634

- Our question text: عمق فرزات الاطار الجيدة تكون عادة 9 ملم
- Section: وسائل الامان في المركبات والاسعافات الاولية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 1830 — "نعم" → correct:false
1. ID 1831 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 634,
    "question": "عمق فرزات الاطار الجيدة تكون عادة 9 ملم",
    "answers": [
      {
        "id": "1830",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1831",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 699,
    "question": "عمق فرزات الاطار الجيدة تكون عادة 9 ملم",
    "answers": [
      {
        "id": "2210",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2209",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2209"
    ],
    "quizOptionsAnswerMap": {
      "2209": "1",
      "2210": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 304

- Our question text: من واجبات المشاة:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر) — NOT applied

Our answer choices:

0. ID 919 — "الالتزام باستخدام ممرات المشاة حيثما وجدت" → correct:false
1. ID 920 — "الالتزام والتقيد بالاشارات الضوئية." → correct:false
2. ID 921 — "الالتزام باشارات شرطي المرور." → correct:false
3. ID 922 — "جميع ما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 304,
    "question": "من واجبات المشاة:",
    "answers": [
      {
        "id": "919",
        "text": "الالتزام باستخدام ممرات المشاة حيثما وجدت",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "920",
        "text": "الالتزام والتقيد بالاشارات الضوئية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "921",
        "text": "الالتزام باشارات شرطي المرور.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "922",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 641,
    "question": "من واجبات المشاة:",
    "answers": [
      {
        "id": "2039",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2038",
        "text": "الالتزام باشارات شرطي المرور.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2037",
        "text": "الالتزام والتقيد بالاشارات الضوئية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2036",
        "text": "الالتزام باستخدام ممرات المشاة حيثما وجدت",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2039"
    ],
    "quizOptionsAnswerMap": {
      "2036": "0",
      "2037": "0",
      "2038": "0",
      "2039": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 302

- Our question text: يعطى المشاة حق المرور عند مباشرتهم بقطع الطريق على التقاطعات التي لا تحكمها اشارات ضوئية او شواخص مرورية
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 913 — "نعم" → correct:false
1. ID 914 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 302,
    "question": "يعطى المشاة حق المرور عند مباشرتهم بقطع الطريق على التقاطعات التي لا تحكمها اشارات ضوئية او شواخص مرورية",
    "answers": [
      {
        "id": "913",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "914",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 701,
    "question": "يعطى المشاة حق المرور عند مباشرتهم بقطع الطريق على التقاطعات التي لا تحكمها اشارات ضوئية او شواخص مرورية",
    "answers": [
      {
        "id": "2215",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2216",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2215"
    ],
    "quizOptionsAnswerMap": {
      "2215": "1",
      "2216": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 301

- Our question text: يمتلك المشاة حق الاولوية عند
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر) — NOT applied

Our answer choices:

0. ID 909 — "اجتياز الممرات المخصصة لهم" → correct:false
1. ID 910 — "عند دخول المدرسة او الخروج منها." → correct:false
2. ID 911 — "اعطاء شرطي المرور الاولوية للمشاة" → correct:false
3. ID 912 — "جميع ما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 301,
    "question": "يمتلك المشاة حق الاولوية عند",
    "answers": [
      {
        "id": "909",
        "text": "اجتياز الممرات المخصصة لهم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "910",
        "text": "عند دخول المدرسة او الخروج منها.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "911",
        "text": "اعطاء شرطي المرور الاولوية للمشاة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "912",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 702,
    "question": "يمتلك المشاة حق الاولوية عند",
    "answers": [
      {
        "id": "2220",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2219",
        "text": "اعطاء شرطي المرور الاولوية للمشاة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2217",
        "text": "اجتياز الممرات المخصصة لهم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2218",
        "text": "عند دخول المدرسة او الخروج منها.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2220"
    ],
    "quizOptionsAnswerMap": {
      "2217": "0",
      "2218": "0",
      "2219": "0",
      "2220": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 300

- Our question text: الرخصة من الفئة الثانية (2)تصنف بأنها:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (رخصة سوق لقيادة مركبة زراعية.) — NOT applied

Our answer choices:

0. ID 906 — "رخصة سوق لجميع أنواع الدراجات الالية ." → correct:false
1. ID 907 — "رخصة سوق لقيادة مركبة أشغال." → correct:false
2. ID 908 — "رخصة سوق لقيادة مركبة زراعية." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 300,
    "question": "الرخصة من الفئة الثانية (2)تصنف بأنها:",
    "answers": [
      {
        "id": "906",
        "text": "رخصة سوق لجميع أنواع الدراجات الالية .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "907",
        "text": "رخصة سوق لقيادة مركبة أشغال.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "908",
        "text": "رخصة سوق لقيادة مركبة زراعية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 703,
    "question": "الرخصة من الفئة الثانية (2)تصنف بأنها:",
    "answers": [
      {
        "id": "2221",
        "text": "رخصة سوق لجميع أنواع الدراجات الالية .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2223",
        "text": "رخصة سوق لقيادة مركبة زراعية.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2222",
        "text": "رخصة سوق لقيادة مركبة أشغال.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2223"
    ],
    "quizOptionsAnswerMap": {
      "2221": "0",
      "2222": "0",
      "2223": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 299

- Our question text: الرخصة من الفئة الثانية (1)تصنف بأنها:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (رخصة سوق لقيادة مركبة أشغال.) — NOT applied

Our answer choices:

0. ID 903 — "رخصة سوق لقيادة مركبة أشغال." → correct:false
1. ID 904 — "رخصة سوق لقيادة مركبة زراعية." → correct:false
2. ID 905 — "رخصة سوق لجميع أنواع الدراجات الالية ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 299,
    "question": "الرخصة من الفئة الثانية (1)تصنف بأنها:",
    "answers": [
      {
        "id": "903",
        "text": "رخصة سوق لقيادة مركبة أشغال.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "904",
        "text": "رخصة سوق لقيادة مركبة زراعية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "905",
        "text": "رخصة سوق لجميع أنواع الدراجات الالية .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 704,
    "question": "الرخصة من الفئة الثانية (1)تصنف بأنها:",
    "answers": [
      {
        "id": "2226",
        "text": "رخصة سوق لجميع أنواع الدراجات الالية .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2224",
        "text": "رخصة سوق لقيادة مركبة أشغال.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2225",
        "text": "رخصة سوق لقيادة مركبة زراعية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2224"
    ],
    "quizOptionsAnswerMap": {
      "2224": "1",
      "2225": "0",
      "2226": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 298

- Our question text: الرخصة الدولية الصادرة من نادي السيارات الملكي تسمح لحاملها بقيادة مركبة
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)

Our answer choices:

0. ID 900 — "داخل الاردن" → correct:false
1. ID 901 — "خارج الاردن" → correct:false
2. ID 902 — "أ+ب صحيحان" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 298,
    "question": "الرخصة الدولية الصادرة من نادي السيارات الملكي تسمح لحاملها بقيادة مركبة",
    "answers": [
      {
        "id": "900",
        "text": "داخل الاردن",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "901",
        "text": "خارج الاردن",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "902",
        "text": "أ+ب صحيحان",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": null
}
```

### Question ID 297

- Our question text: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-050509.jpg / 2429
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (الفئة السابعة.) — NOT applied

Our answer choices:

0. ID 897 — "الفئة الثالثة." → correct:false
1. ID 898 — "الفئة الرابعة" → correct:false
2. ID 899 — "الفئة السابعة." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 297,
    "question": "فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:",
    "answers": [
      {
        "id": "897",
        "text": "الفئة الثالثة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "898",
        "text": "الفئة الرابعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "899",
        "text": "الفئة السابعة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 706,
    "question": "فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:",
    "answers": [
      {
        "id": "2231",
        "text": "الفئة الرابعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2232",
        "text": "الفئة السابعة.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2230",
        "text": "الفئة الثالثة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2232"
    ],
    "quizOptionsAnswerMap": {
      "2230": "0",
      "2231": "0",
      "2232": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 296

- Our question text: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-050423.jpg / 2654
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 894 — "الفئة الثالثة." → correct:false
1. ID 895 — "الفئة الثالثة." → correct:false
2. ID 896 — "الفئة السادسة 2." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 295

- Our question text: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-050319.jpg / 2428
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (الفئة السادسة1.) — NOT applied

Our answer choices:

0. ID 891 — "الفئة الرابعة" → correct:false
1. ID 892 — "الفئة السادسة1." → correct:false
2. ID 893 — "الفئة الخامسة" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 295,
    "question": "فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي",
    "answers": [
      {
        "id": "891",
        "text": "الفئة الرابعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "892",
        "text": "الفئة السادسة1.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "893",
        "text": "الفئة الخامسة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 708,
    "question": "فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي",
    "answers": [
      {
        "id": "2236",
        "text": "الفئة الرابعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2238",
        "text": "الفئة الخامسة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2237",
        "text": "الفئة السادسة1",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2237"
    ],
    "quizOptionsAnswerMap": {
      "2236": "0",
      "2237": "1",
      "2238": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 294

- Our question text: .إذا كانت المركبه التالية يبلغ وزنها الاجمالي 19 طن فإن فئة رخصة السوق التي تؤهلك لقيادتها هي:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: لقطة-الشاشة-2023-05-27-094321-1-300x141.png / 5112
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (الفئة الخامسة.) — NOT applied

Our answer choices:

0. ID 888 — "الفئة الثالثة." → correct:false
1. ID 889 — "الفئة الخامسة." → correct:false
2. ID 890 — "الفئة السابعة." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 709,
    "question": ".إذا كانت المركبه التالية يبلغ وزنها الاجمالي 19 طن فإن فئة رخصة السوق التي تؤهلك لقيادتها هي:",
    "answers": [
      {
        "id": "2239",
        "text": "الفئة الثالثة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2241",
        "text": "الفئة السابعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2240",
        "text": "الفئة الخامسة",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2240"
    ],
    "quizOptionsAnswerMap": {
      "2239": "0",
      "2240": "1",
      "2241": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 293

- Our question text: فئة رخصة السوق التي تؤهلك لقيادة حافلة متوسطة هي:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (الفئة الخامسة) — NOT applied

Our answer choices:

0. ID 885 — "الفئة الثالثة." → correct:false
1. ID 886 — "الفئة الرابعة" → correct:false
2. ID 887 — "الفئة الخامسة" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 293,
    "question": "فئة رخصة السوق التي تؤهلك لقيادة حافلة متوسطة هي:",
    "answers": [
      {
        "id": "885",
        "text": "الفئة الثالثة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "886",
        "text": "الفئة الرابعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "887",
        "text": "الفئة الخامسة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 710,
    "question": "فئة رخصة السوق التي تؤهلك لقيادة حافلة متوسطة هي:",
    "answers": [
      {
        "id": "2244",
        "text": "الفئة الخامسة",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2242",
        "text": "الفئة الثالثة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2243",
        "text": "الفئة الرابعة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2244"
    ],
    "quizOptionsAnswerMap": {
      "2242": "0",
      "2243": "0",
      "2244": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 292

- Our question text: فئة رخصة السوق التي تؤهلك لقيادة سيارة التاكسي هي
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (الفئة الرابعة) — NOT applied

Our answer choices:

0. ID 882 — "الفئة الثانية." → correct:false
1. ID 883 — "الفئة الثالثة" → correct:false
2. ID 884 — "الفئة الرابعة" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 292,
    "question": "فئة رخصة السوق التي تؤهلك لقيادة سيارة التاكسي هي",
    "answers": [
      {
        "id": "882",
        "text": "الفئة الثانية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "883",
        "text": "الفئة الثالثة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "884",
        "text": "الفئة الرابعة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 711,
    "question": "فئة رخصة السوق التي تؤهلك لقيادة سيارة التاكسي هي",
    "answers": [
      {
        "id": "2247",
        "text": "الفئة الرابعة",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2246",
        "text": "الفئة الثالثة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2245",
        "text": "الفئة الثانية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2247"
    ],
    "quizOptionsAnswerMap": {
      "2245": "0",
      "2246": "0",
      "2247": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 290

- Our question text: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: لقطة-الشاشة-2023-05-27-093738.png / 5111
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (الفئة الثانيه (2)) — NOT applied

Our answer choices:

0. ID 876 — "الفئة الاولى ." → correct:false
1. ID 877 — "الفئة الثانيه (2)" → correct:false
2. ID 878 — "الفئة الثالثة." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 712,
    "question": "فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:",
    "answers": [
      {
        "id": "2250",
        "text": "الفئة الثالثة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2248",
        "text": "الفئة الاولى .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2249",
        "text": "الفئة الثانيه (2)",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2249"
    ],
    "quizOptionsAnswerMap": {
      "2248": "0",
      "2249": "1",
      "2250": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 288

- Our question text: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-045636-1.jpg / 2657
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 870 — "الفئة الاولى (1)" → correct:false
1. ID 871 — "الفئة الثانية." → correct:false
2. ID 872 — "الفئة الثانية." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 287

- Our question text: فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: لقطة-الشاشة-2023-05-27-100121-1-300x76.png / 5113
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (الفئة الثالثة.) — NOT applied

Our answer choices:

0. ID 867 — "الفئة الثالثة." → correct:false
1. ID 868 — "الفئة الثانية." → correct:false
2. ID 869 — "الفئة السابعة" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 715,
    "question": "فئة رخصة السوق التي تؤهلك لقيادة المركبة المبينة هي:",
    "answers": [
      {
        "id": "2259",
        "text": "الفئة السابعة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2258",
        "text": "الفئة الثانية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2257",
        "text": "الفئة الثالثة.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2257"
    ],
    "quizOptionsAnswerMap": {
      "2257": "1",
      "2258": "0",
      "2259": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 284

- Our question text: رخصة السوق من الفئة السابعة تصنف بأنها:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (رخصة قيادة مركبة ذوي احتياجات خاصة) — NOT applied

Our answer choices:

0. ID 858 — "رخصة قيادة مركبة ذوي احتياجات خاصة" → correct:false
1. ID 859 — "رخصة سوق لقيادة سيارة الركوب التي يزيد عدد ركابها على ثالثين راكبا بمن فيهم السائق" → correct:false
2. ID 860 — "لا شيء مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 284,
    "question": "رخصة السوق من الفئة السابعة تصنف بأنها:",
    "answers": [
      {
        "id": "858",
        "text": "رخصة قيادة مركبة ذوي احتياجات خاصة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "859",
        "text": "رخصة سوق لقيادة سيارة الركوب التي يزيد عدد ركابها على ثالثين راكبا بمن فيهم السائق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "860",
        "text": "لا شيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 717,
    "question": "رخصة السوق من الفئة السابعة تصنف بأنها:",
    "answers": [
      {
        "id": "2265",
        "text": "لا شيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2264",
        "text": "رخصة سوق لقيادة سيارة الركوب التي يزيد عدد ركابها على ثالثين راكبا بمن فيهم السائق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2263",
        "text": "رخصة قيادة مركبة ذوي احتياجات خاصة",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2263"
    ],
    "quizOptionsAnswerMap": {
      "2263": "1",
      "2264": "0",
      "2265": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 283

- Our question text: رخصة السوق من الفئة الخامسة تصنف بأنها:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (رخصة قيادة حافلة متوسطة أو مركبة يزيد وزنها الاجمالي عن سبعة أطنان ونصف الطن) — NOT applied

Our answer choices:

0. ID 855 — "رخصة سوق لجميع انواع الدراجات الالية ." → correct:false
1. ID 856 — "رخصة سوق لقيادة مركبة اشغال." → correct:false
2. ID 857 — "رخصة قيادة حافلة متوسطة أو مركبة يزيد وزنها الاجمالي عن سبعة أطنان ونصف الطن" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 283,
    "question": "رخصة السوق من الفئة الخامسة تصنف بأنها:",
    "answers": [
      {
        "id": "855",
        "text": "رخصة سوق لجميع انواع الدراجات الالية .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "856",
        "text": "رخصة سوق لقيادة مركبة اشغال.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "857",
        "text": "رخصة قيادة حافلة متوسطة أو مركبة يزيد وزنها الاجمالي عن سبعة أطنان ونصف الطن",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 718,
    "question": "رخصة السوق من الفئة الخامسة تصنف بأنها:",
    "answers": [
      {
        "id": "2267",
        "text": "رخصة سوق لقيادة مركبة اشغال.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2266",
        "text": "رخصة سوق لجميع انواع الدراجات الالية .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2268",
        "text": "رخصة قيادة حافلة متوسطة أو مركبة يزيد وزنها الاجمالي عن سبعة أطنان ونصف الطن",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2268"
    ],
    "quizOptionsAnswerMap": {
      "2266": "0",
      "2267": "0",
      "2268": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 281

- Our question text: رخصة السوق من الفئة الثانية ( 1+2 )تصنف بأنها:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)

Our answer choices:

0. ID 848 — "رخصة سوق لجميع انواع الدراجات الالية ." → correct:false
1. ID 849 — "رخصة سوق لقيادة مركبة اشغال." → correct:false
2. ID 850 — "رخصة سوق لقيادة مركبة زراعية." → correct:false
3. ID 851 — "ب + ج" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 281,
    "question": "رخصة السوق من الفئة الثانية ( 1+2 )تصنف بأنها:",
    "answers": [
      {
        "id": "848",
        "text": "رخصة سوق لجميع انواع الدراجات الالية .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "849",
        "text": "رخصة سوق لقيادة مركبة اشغال.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "850",
        "text": "رخصة سوق لقيادة مركبة زراعية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "851",
        "text": "ب + ج",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": null
}
```

### Question ID 279

- Our question text: المركبة الالية المصممة لاستخدامها في الاشغال الانشائية بما في ذلك الاشغال المتعلقة بالطرق هي:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (مركبة الاشغال.) — NOT applied

Our answer choices:

0. ID 842 — "سيارة الشحن." → correct:false
1. ID 843 — "الحافلة" → correct:false
2. ID 844 — "مركبة الاشغال." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 279,
    "question": "المركبة الالية المصممة لاستخدامها في الاشغال الانشائية بما في ذلك الاشغال المتعلقة بالطرق هي:",
    "answers": [
      {
        "id": "842",
        "text": "سيارة الشحن.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "843",
        "text": "الحافلة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "844",
        "text": "مركبة الاشغال.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 722,
    "question": "المركبة الالية المصممة لاستخدامها في الاشغال الانشائية بما في ذلك الاشغال المتعلقة بالطرق هي:",
    "answers": [
      {
        "id": "2280",
        "text": "مركبة الاشغال.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2278",
        "text": "سيارة الشحن.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2279",
        "text": "الحافلة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2280"
    ],
    "quizOptionsAnswerMap": {
      "2278": "0",
      "2279": "0",
      "2280": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 278

- Our question text: مركبة النقل او الرفع او الجر الية مجهزة بمعدات ثابتة وبصورة دائمة و لا يمكن استعمالها الا في الاغراض المصممة لها تسمى :
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (مركبة ذات الاستعمال الخاص) — NOT applied

Our answer choices:

0. ID 839 — "سيارة الشحن." → correct:false
1. ID 840 — "الحافلة" → correct:false
2. ID 841 — "مركبة ذات الاستعمال الخاص" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 278,
    "question": "مركبة النقل او الرفع او الجر الية مجهزة بمعدات ثابتة وبصورة دائمة و لا يمكن استعمالها الا في الاغراض المصممة لها تسمى :",
    "answers": [
      {
        "id": "839",
        "text": "سيارة الشحن.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "840",
        "text": "الحافلة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "841",
        "text": "مركبة ذات الاستعمال الخاص",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 723,
    "question": "مركبة النقل او الرفع او الجر الية مجهزة بمعدات ثابتة وبصورة دائمة و لا يمكن استعمالها الا في الاغراض المصممة لها تسمى :",
    "answers": [
      {
        "id": "2283",
        "text": "مركبة ذات الاستعمال الخاص",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2282",
        "text": "الحافلة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2281",
        "text": "سيارة الشحن.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2283"
    ],
    "quizOptionsAnswerMap": {
      "2281": "0",
      "2282": "0",
      "2283": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 277

- Our question text: المركبة المصممة لنقل البضائع هي:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (مركبة الشحن) — NOT applied

Our answer choices:

0. ID 836 — "مركبة الشحن" → correct:false
1. ID 837 — "الحافلة." → correct:false
2. ID 838 — "سيارة النقل المشترك." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 277,
    "question": "المركبة المصممة لنقل البضائع هي:",
    "answers": [
      {
        "id": "836",
        "text": "مركبة الشحن",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "837",
        "text": "الحافلة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "838",
        "text": "سيارة النقل المشترك.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 724,
    "question": "المركبة المصممة لنقل البضائع هي:",
    "answers": [
      {
        "id": "2285",
        "text": "الحافلة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2286",
        "text": "سيارة النقل المشترك.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2284",
        "text": "مركبة الشحن",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2284"
    ],
    "quizOptionsAnswerMap": {
      "2284": "1",
      "2285": "0",
      "2286": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 276

- Our question text: المركبات المصممة لنقل الاشخاص و البضائع معا هي:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (مركبات النقل المشترك) — NOT applied

Our answer choices:

0. ID 833 — "سيارات ركوب المتوسطه" → correct:false
1. ID 834 — "مركبات النقل المشترك" → correct:false
2. ID 835 — "الحافلات." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 276,
    "question": "المركبات المصممة لنقل الاشخاص و البضائع معا هي:",
    "answers": [
      {
        "id": "833",
        "text": "سيارات ركوب المتوسطه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "834",
        "text": "مركبات النقل المشترك",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "835",
        "text": "الحافلات.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 725,
    "question": "المركبات المصممة لنقل الاشخاص و البضائع معا هي:",
    "answers": [
      {
        "id": "2288",
        "text": "مركبات النقل المشترك",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2289",
        "text": "الحافلات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2287",
        "text": "سيارات ركوب المتوسطه",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2288"
    ],
    "quizOptionsAnswerMap": {
      "2287": "0",
      "2288": "1",
      "2289": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 275

- Our question text: المركبه المصممة لنقل ما يزيد على ثلاثين راكبا هي
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (الحافلة.) — NOT applied

Our answer choices:

0. ID 830 — "سيارة الركوب المتوسطه." → correct:false
1. ID 831 — "الحافلة." → correct:false
2. ID 832 — "سيارة النقل المشترك." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 275,
    "question": "المركبه المصممة لنقل ما يزيد على ثلاثين راكبا هي",
    "answers": [
      {
        "id": "830",
        "text": "سيارة الركوب المتوسطه.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "831",
        "text": "الحافلة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "832",
        "text": "سيارة النقل المشترك.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 726,
    "question": "المركبه المصممة لنقل ما يزيد على ثلاثين راكبا هي",
    "answers": [
      {
        "id": "2290",
        "text": "سيارة الركوب المتوسطه.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2292",
        "text": "سيارة النقل المشترك.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2291",
        "text": "الحافلة.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2291"
    ],
    "quizOptionsAnswerMap": {
      "2290": "0",
      "2291": "1",
      "2292": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 274

- Our question text: المركبه المصممة لنقل ما لا يقل عن عشرة ركاب ولا يزيد على ثلاثين راكبا بمن فيهم السائق هي:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (سيارة الركوب المتوسطه.) — NOT applied

Our answer choices:

0. ID 827 — "سيارة الركوب المتوسطه." → correct:false
1. ID 828 — "الحافلة." → correct:false
2. ID 829 — "سيارات النقل المشترك." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 274,
    "question": "المركبه المصممة لنقل ما لا يقل عن عشرة ركاب ولا يزيد على ثلاثين راكبا بمن فيهم السائق هي:",
    "answers": [
      {
        "id": "827",
        "text": "سيارة الركوب المتوسطه.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "828",
        "text": "الحافلة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "829",
        "text": "سيارات النقل المشترك.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 727,
    "question": "المركبه المصممة لنقل ما لا يقل عن عشرة ركاب ولا يزيد على ثلاثين راكبا بمن فيهم السائق هي:",
    "answers": [
      {
        "id": "2294",
        "text": "الحافلة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2293",
        "text": "سيارة الركوب المتوسطه.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2295",
        "text": "سيارات النقل المشترك.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2293"
    ],
    "quizOptionsAnswerMap": {
      "2293": "1",
      "2294": "0",
      "2295": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 273

- Our question text: السيارت المصممه لنقل ما لا يزيد على تسعة اشخاص بمن فيهم السائق تصنف من فئة :
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (سيارات الركوب) — NOT applied

Our answer choices:

0. ID 824 — "سيارات الركوب" → correct:false
1. ID 825 — "مركبات النقل المشترك" → correct:false
2. ID 826 — "مركبات الشحن" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 273,
    "question": "السيارت المصممه لنقل ما لا يزيد على تسعة اشخاص بمن فيهم السائق تصنف من فئة :",
    "answers": [
      {
        "id": "824",
        "text": "سيارات الركوب",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "825",
        "text": "مركبات النقل المشترك",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "826",
        "text": "مركبات الشحن",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 728,
    "question": "السيارت المصممه لنقل ما لا يزيد على تسعة اشخاص بمن فيهم السائق تصنف من فئة :",
    "answers": [
      {
        "id": "2298",
        "text": "مركبات الشحن",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2297",
        "text": "مركبات النقل المشترك",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2296",
        "text": "سيارات الركوب",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2296"
    ],
    "quizOptionsAnswerMap": {
      "2296": "1",
      "2297": "0",
      "2298": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 272

- Our question text: المركبة ذات الاستعمال الخاص هي:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر) — NOT applied

Our answer choices:

0. ID 820 — "مركبة النقل ." → correct:false
1. ID 821 — "مركبة الرفع." → correct:false
2. ID 822 — "مركبة جر." → correct:false
3. ID 823 — "جميع ما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 272,
    "question": "المركبة ذات الاستعمال الخاص هي:",
    "answers": [
      {
        "id": "820",
        "text": "مركبة النقل .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "821",
        "text": "مركبة الرفع.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "822",
        "text": "مركبة جر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "823",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 729,
    "question": "المركبة ذات الاستعمال الخاص هي:",
    "answers": [
      {
        "id": "2300",
        "text": "مركبة جر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2302",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2299",
        "text": "مركبة النقل .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2301",
        "text": "مركبة الرفع.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2302"
    ],
    "quizOptionsAnswerMap": {
      "2299": "0",
      "2300": "0",
      "2301": "0",
      "2302": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 271

- Our question text: مركبة الشحن مصممة لنقل :
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (البضائع.) — NOT applied

Our answer choices:

0. ID 817 — "الاشخاص." → correct:false
1. ID 818 — "البضائع." → correct:false
2. ID 819 — "لا شيء مما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 271,
    "question": "مركبة الشحن مصممة لنقل :",
    "answers": [
      {
        "id": "817",
        "text": "الاشخاص.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "818",
        "text": "البضائع.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "819",
        "text": "لا شيء مما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 730,
    "question": "مركبة الشحن مصممة لنقل :",
    "answers": [
      {
        "id": "2303",
        "text": "الاشخاص",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2305",
        "text": "لا شيء مما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2304",
        "text": "البضائع.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2304"
    ],
    "quizOptionsAnswerMap": {
      "2303": "0",
      "2304": "1",
      "2305": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 270

- Our question text: مركبة النقل المشترك مصممة لنقل البضائع والاشخاص معا
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 815 — "نعم" → correct:false
1. ID 816 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 270,
    "question": "مركبة النقل المشترك مصممة لنقل البضائع والاشخاص معا",
    "answers": [
      {
        "id": "815",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "816",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 731,
    "question": "مركبة النقل المشترك مصممة لنقل البضائع والاشخاص معا",
    "answers": [
      {
        "id": "2307",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2306",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2306"
    ],
    "quizOptionsAnswerMap": {
      "2306": "1",
      "2307": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 269

- Our question text: الحافلة مصممة لنقل ما يزيد عن .......:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (ثالثون راكبا.) — NOT applied

Our answer choices:

0. ID 812 — "عشرة ركاب." → correct:false
1. ID 813 — "عشرون راكب." → correct:false
2. ID 814 — "ثالثون راكبا." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 269,
    "question": "الحافلة مصممة لنقل ما يزيد عن .......:",
    "answers": [
      {
        "id": "812",
        "text": "عشرة ركاب.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "813",
        "text": "عشرون راكب.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "814",
        "text": "ثالثون راكبا.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 732,
    "question": "الحافلة مصممة لنقل ما يزيد عن .......:",
    "answers": [
      {
        "id": "2310",
        "text": "ثالثون راكبا.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2309",
        "text": "عشرون راكب.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2308",
        "text": "عشرة ركاب.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2310"
    ],
    "quizOptionsAnswerMap": {
      "2308": "0",
      "2309": "0",
      "2310": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 267

- Our question text: سيارة الركوب مصممة لنقل ما لا يزيد عن
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (تسعة أشخاص بمن فيهم السائق) — NOT applied

Our answer choices:

0. ID 806 — "تسعة أشخاص بمن فيهم السائق" → correct:false
1. ID 807 — "خمسة أشخاص بمن فيهم السائق" → correct:false
2. ID 808 — "سبعة أشخاص بمن فيهم السائق" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 267,
    "question": "سيارة الركوب مصممة لنقل ما لا يزيد عن",
    "answers": [
      {
        "id": "806",
        "text": "تسعة أشخاص بمن فيهم السائق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "807",
        "text": "خمسة أشخاص بمن فيهم السائق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "808",
        "text": "سبعة أشخاص بمن فيهم السائق",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 734,
    "question": "سيارة الركوب مصممة لنقل ما لا يزيد عن",
    "answers": [
      {
        "id": "2315",
        "text": "خمسة أشخاص بمن فيهم السائق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2316",
        "text": "سبعة أشخاص بمن فيهم السائق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2314",
        "text": "تسعة أشخاص بمن فيهم السائق",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2314"
    ],
    "quizOptionsAnswerMap": {
      "2314": "1",
      "2315": "0",
      "2316": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 266

- Our question text: تتناسب الازرار مع الخطوط المستخدمة عليها:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 804 — "نعم" → correct:false
1. ID 805 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 266,
    "question": "تتناسب الازرار مع الخطوط المستخدمة عليها:",
    "answers": [
      {
        "id": "804",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "805",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 735,
    "question": "تتناسب الازرار مع الخطوط المستخدمة عليها:",
    "answers": [
      {
        "id": "2317",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2318",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2317"
    ],
    "quizOptionsAnswerMap": {
      "2317": "1",
      "2318": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 265

- Our question text: تستخدم الازرار البيضاء للدلالة على:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (المسارب.) — NOT applied

Our answer choices:

0. ID 801 — "حواف الطريق ." → correct:false
1. ID 802 — "المسارب." → correct:false
2. ID 803 — "إعطاء الاولويه" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 265,
    "question": "تستخدم الازرار البيضاء للدلالة على:",
    "answers": [
      {
        "id": "801",
        "text": "حواف الطريق .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "802",
        "text": "المسارب.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "803",
        "text": "إعطاء الاولويه",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 736,
    "question": "تستخدم الازرار البيضاء للدلالة على:",
    "answers": [
      {
        "id": "2319",
        "text": "حواف الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2321",
        "text": "إعطاء الاولويه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2320",
        "text": "المسارب",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2320"
    ],
    "quizOptionsAnswerMap": {
      "2319": "0",
      "2320": "1",
      "2321": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 264

- Our question text: تستخدم الازرار الصفراء للدلالة على
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (حواف الطريق .) — NOT applied

Our answer choices:

0. ID 798 — "حواف الطريق ." → correct:false
1. ID 799 — "المسارب." → correct:false
2. ID 800 — "لاشيء مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 264,
    "question": "تستخدم الازرار الصفراء للدلالة على",
    "answers": [
      {
        "id": "798",
        "text": "حواف الطريق .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "799",
        "text": "المسارب.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "800",
        "text": "لاشيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 737,
    "question": "تستخدم الازرار الصفراء للدلالة على",
    "answers": [
      {
        "id": "2322",
        "text": "حواف الطريق .",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2324",
        "text": "لاشيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2323",
        "text": "المسارب.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2322"
    ],
    "quizOptionsAnswerMap": {
      "2322": "1",
      "2323": "0",
      "2324": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 263

- Our question text: لا يوجد علامات أرضية تسمى خطوط الحواف
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 796 — "نعم" → correct:false
1. ID 797 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 263,
    "question": "لا يوجد علامات أرضية تسمى خطوط الحواف",
    "answers": [
      {
        "id": "796",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "797",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 738,
    "question": "لا يوجد علامات أرضية تسمى خطوط الحواف",
    "answers": [
      {
        "id": "2326",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2325",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2326"
    ],
    "quizOptionsAnswerMap": {
      "2325": "0",
      "2326": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 262

- Our question text: لا يوجد علامات أرضية تسمى خطوط الطول
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 794 — "نعم" → correct:false
1. ID 795 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 262,
    "question": "لا يوجد علامات أرضية تسمى خطوط الطول",
    "answers": [
      {
        "id": "794",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "795",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 739,
    "question": "لا يوجد علامات أرضية تسمى خطوط الطول",
    "answers": [
      {
        "id": "2327",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2328",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2328"
    ],
    "quizOptionsAnswerMap": {
      "2327": "0",
      "2328": "1"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 261

- Our question text: من وظائف العلامات الارضية:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (جميع ما ذكر.) — NOT applied

Our answer choices:

0. ID 790 — "وظائف إرشادية." → correct:false
1. ID 791 — "وظائف تحذيرية." → correct:false
2. ID 792 — "وظائف تنظيمية." → correct:false
3. ID 793 — "جميع ما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 261,
    "question": "من وظائف العلامات الارضية:",
    "answers": [
      {
        "id": "790",
        "text": "وظائف إرشادية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "791",
        "text": "وظائف تحذيرية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "792",
        "text": "وظائف تنظيمية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "793",
        "text": "جميع ما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 740,
    "question": "من وظائف العلامات الارضية:",
    "answers": [
      {
        "id": "2329",
        "text": "وظائف إرشادية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2332",
        "text": "جميع ما ذكر.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2330",
        "text": "وظائف تحذيرية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2331",
        "text": "وظائف تنظيمية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2332"
    ],
    "quizOptionsAnswerMap": {
      "2329": "0",
      "2330": "0",
      "2331": "0",
      "2332": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 260

- Our question text: تقتصر وظائف العلامات الارضية على الوظائف التحذيرية فقط.
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 788 — "نعم" → correct:false
1. ID 789 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 260,
    "question": "تقتصر وظائف العلامات الارضية على الوظائف التحذيرية فقط.",
    "answers": [
      {
        "id": "788",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "789",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 741,
    "question": "تقتصر وظائف العلامات الارضية على الوظائف التحذيرية فقط.",
    "answers": [
      {
        "id": "2333",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2334",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2333"
    ],
    "quizOptionsAnswerMap": {
      "2333": "1",
      "2334": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 259

- Our question text: تقتصر وظائف العلامات الارضية على الوظائف الارشادية فقط.
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 786 — "نعم" → correct:false
1. ID 787 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 259,
    "question": "تقتصر وظائف العلامات الارضية على الوظائف الارشادية فقط.",
    "answers": [
      {
        "id": "786",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "787",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 742,
    "question": "تقتصر وظائف العلامات الارضية على الوظائف الارشادية فقط.",
    "answers": [
      {
        "id": "2335",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2336",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2336"
    ],
    "quizOptionsAnswerMap": {
      "2335": "0",
      "2336": "1"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 258

- Our question text: تقتصر وظائف العلامات الارضية على الوظائف التنظيمية فقط.
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 784 — "نعم" → correct:false
1. ID 785 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 258,
    "question": "تقتصر وظائف العلامات الارضية على الوظائف التنظيمية فقط.",
    "answers": [
      {
        "id": "784",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "785",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 743,
    "question": "تقتصر وظائف العلامات الارضية على الوظائف التنظيمية فقط.",
    "answers": [
      {
        "id": "2338",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2337",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2337"
    ],
    "quizOptionsAnswerMap": {
      "2337": "1",
      "2338": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 923

- Our question text: لا تقتصر وظائف العلامات الارضية على الوظائف التنظيمية فقط
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 2797 — "نعم" → correct:false
1. ID 2798 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 923,
    "question": "لا تقتصر وظائف العلامات الارضية على الوظائف التنظيمية فقط",
    "answers": [
      {
        "id": "2797",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2798",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 13,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)"
    ]
  },
  "alqemah": {
    "id": 744,
    "question": "لا تقتصر وظائف العلامات الارضية على الوظائف التنظيمية فقط",
    "answers": [
      {
        "id": "2339",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2340",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2339"
    ],
    "quizOptionsAnswerMap": {
      "2339": "1",
      "2340": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 254

- Our question text: هذه العلامة الارضيه تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-041513.jpg / 2421
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (مواقف للمركبات بشكل زاوية على الطريق.) — NOT applied

Our answer choices:

0. ID 771 — "مواقف للمركبات بشكل زاوية على الطريق." → correct:false
1. ID 772 — "مواقف للمركبات موازية للطريق" → correct:false
2. ID 773 — "ممنوع الوقوف." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 254,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "771",
        "text": "مواقف للمركبات بشكل زاوية على الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "772",
        "text": "مواقف للمركبات موازية للطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "773",
        "text": "ممنوع الوقوف.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 748,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "2353",
        "text": "ممنوع الوقوف.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2351",
        "text": "مواقف للمركبات بشكل زاوية على الطريق.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2352",
        "text": "مواقف للمركبات موازية للطريق",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2351"
    ],
    "quizOptionsAnswerMap": {
      "2351": "1",
      "2352": "0",
      "2353": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 250

- Our question text: هذه العلامة الارضيه تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-041030.jpg / 2417
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (قبل ممرات المشاة ويمنع الوقوف عليه) — NOT applied

Our answer choices:

0. ID 759 — "قبل ممرات المشاة ويمنع الوقوف عليه" → correct:false
1. ID 760 — "قبل ممرات المشاة ويسمح الوقوف عليه." → correct:false
2. ID 761 — "عند مواقف السيارات." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 250,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "759",
        "text": "قبل ممرات المشاة ويمنع الوقوف عليه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "760",
        "text": "قبل ممرات المشاة ويسمح الوقوف عليه.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "761",
        "text": "عند مواقف السيارات.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 752,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "2365",
        "text": "عند مواقف السيارات.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2363",
        "text": "قبل ممرات المشاة ويمنع الوقوف عليه",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2364",
        "text": "قبل ممرات المشاة ويسمح الوقوف عليه.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2363"
    ],
    "quizOptionsAnswerMap": {
      "2363": "1",
      "2364": "0",
      "2365": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 249

- Our question text: هذه العلامة الارضيه تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-040917.jpg / 2416
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (ممر مشاة.) — NOT applied

Our answer choices:

0. ID 756 — "خط قف" → correct:false
1. ID 757 — "ممر مشاة." → correct:false
2. ID 758 — "نهاية الطريق" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 249,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "756",
        "text": "خط قف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "757",
        "text": "ممر مشاة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "758",
        "text": "نهاية الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 753,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "2368",
        "text": "نهاية الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2367",
        "text": "ممر مشاة.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2366",
        "text": "خط قف",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2367"
    ],
    "quizOptionsAnswerMap": {
      "2366": "0",
      "2367": "1",
      "2368": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 248

- Our question text: هذه العلامة الارضيه تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-040807.jpg / 2415
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (خط الاولوية) — NOT applied

Our answer choices:

0. ID 753 — "خط قف." → correct:false
1. ID 754 — "خط الاولوية" → correct:false
2. ID 755 — "ممر مشاة." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 248,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "753",
        "text": "خط قف.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "754",
        "text": "خط الاولوية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "755",
        "text": "ممر مشاة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 754,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "2371",
        "text": "ممر مشاة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2369",
        "text": "خط قف.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2370",
        "text": "خط الاولوية",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2370"
    ],
    "quizOptionsAnswerMap": {
      "2369": "0",
      "2370": "1",
      "2371": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 247

- Our question text: هذه العلامة الارضيه تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-040501.jpg / 2411
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (خط قف) — NOT applied

Our answer choices:

0. ID 750 — "خط قف" → correct:false
1. ID 751 — "نهاية الطريق." → correct:false
2. ID 752 — "خط األولوية." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 247,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "750",
        "text": "خط قف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "751",
        "text": "نهاية الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "752",
        "text": "خط األولوية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 755,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "2372",
        "text": "خط قف",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2374",
        "text": "خط األولوية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2373",
        "text": "نهاية الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2372"
    ],
    "quizOptionsAnswerMap": {
      "2372": "1",
      "2373": "0",
      "2374": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 246

- Our question text: هذه العلامة الارضيه تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-040358.jpg / 2600
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (خط حافة الطريق.) — NOT applied

Our answer choices:

0. ID 747 — "خط حافة الطريق." → correct:false
1. ID 748 — "خط مسارب الطريق" → correct:false
2. ID 749 — "اتجاهات الطريق." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 756,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "2377",
        "text": "اتجاهات الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2375",
        "text": "خط حافة الطريق.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2376",
        "text": "خط مسارب الطريق",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2375"
    ],
    "quizOptionsAnswerMap": {
      "2375": "1",
      "2376": "0",
      "2377": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 245

- Our question text: هذه العلامة الارضيه تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-040228.jpg / 2410
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (السماح بالتجاوز.) — NOT applied

Our answer choices:

0. ID 743 — "السماح بالتجاوز." → correct:false
1. ID 744 — "خط الوقوف." → correct:false
2. ID 745 — "خط التوقف." → correct:false
3. ID 746 — "لا شئ مما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 245,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "743",
        "text": "السماح بالتجاوز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "744",
        "text": "خط الوقوف.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "745",
        "text": "خط التوقف.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "746",
        "text": "لا شئ مما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 757,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "2379",
        "text": "خط الوقوف.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2378",
        "text": "السماح بالتجاوز.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2380",
        "text": "لا شئ مما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2381",
        "text": "خط التوقف.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2378"
    ],
    "quizOptionsAnswerMap": {
      "2378": "1",
      "2379": "0",
      "2380": "0",
      "2381": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 244

- Our question text: هذه العلامة الارضيه تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-040121.jpg / 2409
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (السماح بالتجاوز من جهة الخط المتقطع.) — NOT applied

Our answer choices:

0. ID 740 — "السماح بالتجاوز من الجهتين." → correct:false
1. ID 741 — "السماح بالتجاوز من جهة الخط المتقطع." → correct:false
2. ID 742 — "السماح بالتجاوز من جهة الخط المتصل." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 244,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "740",
        "text": "السماح بالتجاوز من الجهتين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "741",
        "text": "السماح بالتجاوز من جهة الخط المتقطع.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "742",
        "text": "السماح بالتجاوز من جهة الخط المتصل.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 758,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "2384",
        "text": "السماح بالتجاوز من جهة الخط المتصل.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2383",
        "text": "السماح بالتجاوز من جهة الخط المتقطع.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2382",
        "text": "السماح بالتجاوز من الجهتين.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2383"
    ],
    "quizOptionsAnswerMap": {
      "2382": "0",
      "2383": "1",
      "2384": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 243

- Our question text: هذه العلامة الارضيه تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-040019.jpg / 2408
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (يمنع التجاوز من الجهتين) — NOT applied

Our answer choices:

0. ID 737 — "السماح بالتجاوز" → correct:false
1. ID 738 — "السماح بالتجاوز من اليمين ." → correct:false
2. ID 739 — "يمنع التجاوز من الجهتين" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 243,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "737",
        "text": "السماح بالتجاوز",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "738",
        "text": "السماح بالتجاوز من اليمين .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "739",
        "text": "يمنع التجاوز من الجهتين",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 759,
    "question": "هذه العلامة الارضيه تعني",
    "answers": [
      {
        "id": "2387",
        "text": "يمنع التجاوز من الجهتين",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2386",
        "text": "السماح بالتجاوز من اليمين .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2385",
        "text": "السماح بالتجاوز",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2387"
    ],
    "quizOptionsAnswerMap": {
      "2385": "0",
      "2386": "0",
      "2387": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 242

- Our question text: هذه الشاخصة تعني:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-035932.jpg / 2601
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (توزين إجباري للشاحنات) — NOT applied

Our answer choices:

0. ID 734 — "توزين إجباري للشاحنات" → correct:false
1. ID 735 — "توزين اختياري للشاحنات" → correct:false
2. ID 736 — "نقطة تفتيش للشاحنات" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 242,
    "question": "هذه الشاخصة تعني:",
    "answers": [
      {
        "id": "734",
        "text": "توزين إجباري للشاحنات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "735",
        "text": "توزين اختياري للشاحنات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "736",
        "text": "نقطة تفتيش للشاحنات",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 760,
    "question": "هذه الشاخصة تعني:",
    "answers": [
      {
        "id": "2389",
        "text": "توزين اختياري للشاحنات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2388",
        "text": "توزين إجباري للشاحنات",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2390",
        "text": "نقطة تفتيش للشاحنات",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2388"
    ],
    "quizOptionsAnswerMap": {
      "2388": "1",
      "2389": "0",
      "2390": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 241

- Our question text: تدل هذه الشاخصة على مخرج المنحدرات للطوارىء:
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-035818.jpg / 2407
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 732 — "نعم" → correct:false
1. ID 733 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 241,
    "question": "تدل هذه الشاخصة على مخرج المنحدرات للطوارىء:",
    "answers": [
      {
        "id": "732",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "733",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 761,
    "question": "تدل هذه الشاخصة على مخرج المنحدرات للطوارىء:",
    "answers": [
      {
        "id": "2392",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2391",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2391"
    ],
    "quizOptionsAnswerMap": {
      "2391": "1",
      "2392": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 240

- Our question text: هذه الشاخصة الارشادية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-035702.jpg / 2406
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (موقف لذوي الاحتياجات الخاصه) — NOT applied

Our answer choices:

0. ID 729 — "موقف لذوي الاحتياجات الخاصه" → correct:false
1. ID 730 — "موقف عام." → correct:false
2. ID 731 — "موقف مشترك لذوي الاحتياجات والمركبات الاخرى" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 240,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "729",
        "text": "موقف لذوي الاحتياجات الخاصه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "730",
        "text": "موقف عام.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "731",
        "text": "موقف مشترك لذوي الاحتياجات والمركبات الاخرى",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 762,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "2393",
        "text": "موقف لذوي الاحتياجات الخاصه",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2395",
        "text": "موقف مشترك لذوي الاحتياجات والمركبات الاخرى",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2394",
        "text": "موقف عام.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2393"
    ],
    "quizOptionsAnswerMap": {
      "2393": "1",
      "2394": "0",
      "2395": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 239

- Our question text: هذه الشاخصة الارشادية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-035538-1.jpg / 4824
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (مناطق سياحية) — NOT applied

Our answer choices:

0. ID 725 — "مناطق سياحية" → correct:false
1. ID 726 — "مناطق علاجيه" → correct:false
2. ID 727 — "مناطق اثرية" → correct:false
3. ID 728 — "جميع ما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 239,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "725",
        "text": "مناطق سياحية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "726",
        "text": "مناطق علاجيه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "727",
        "text": "مناطق اثرية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "728",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 763,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "2397",
        "text": "مناطق علاجيه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2399",
        "text": "جميع ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2396",
        "text": "مناطق سياحية",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2398",
        "text": "مناطق اثرية",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2396"
    ],
    "quizOptionsAnswerMap": {
      "2396": "1",
      "2397": "0",
      "2398": "0",
      "2399": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 238

- Our question text: هذه الشاخصة الارشادية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-035426.jpg / 2404
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (مركز إسعاف أولي.) — NOT applied

Our answer choices:

0. ID 722 — "مركز إسعاف أولي." → correct:false
1. ID 723 — "شاخصة ارشاديه لوجود مسجد." → correct:false
2. ID 724 — "مستشفى" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 238,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "722",
        "text": "مركز إسعاف أولي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "723",
        "text": "شاخصة ارشاديه لوجود مسجد.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "724",
        "text": "مستشفى",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 764,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "2401",
        "text": "شاخصة ارشاديه لوجود مسجد.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2402",
        "text": "مركز إسعاف أولي.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2400",
        "text": "مستشفى",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2402"
    ],
    "quizOptionsAnswerMap": {
      "2400": "0",
      "2401": "0",
      "2402": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 236

- Our question text: هذه الشاخصة الارشادية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-033739.jpg / 2393
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (مطعم .) — NOT applied

Our answer choices:

0. ID 716 — "مقهى" → correct:false
1. ID 717 — "اشارة ارشادية لبائع ادوات منزلية." → correct:false
2. ID 718 — "مطعم ." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 236,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "716",
        "text": "مقهى",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "717",
        "text": "اشارة ارشادية لبائع ادوات منزلية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "718",
        "text": "مطعم .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 766,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "2406",
        "text": "مقهى",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2408",
        "text": "مطعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2407",
        "text": "اشارة ارشادية لبائع ادوات منزلية",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2408"
    ],
    "quizOptionsAnswerMap": {
      "2406": "0",
      "2407": "0",
      "2408": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 235

- Our question text: هذه الشاخصة الارشادية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-033038.jpg / 2392
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (مقهى.) — NOT applied

Our answer choices:

0. ID 713 — "مقهى." → correct:false
1. ID 714 — "مخيم سياحي." → correct:false
2. ID 715 — "مطعم" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 235,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "713",
        "text": "مقهى.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "714",
        "text": "مخيم سياحي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "715",
        "text": "مطعم",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 767,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "2409",
        "text": "مقهى",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2411",
        "text": "مطعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2410",
        "text": "مخيم سياحي",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2409"
    ],
    "quizOptionsAnswerMap": {
      "2409": "1",
      "2410": "0",
      "2411": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 234

- Our question text: هذه الشاخصة الارشادية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-032647.jpg / 2391
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (محطة وقود) — NOT applied

Our answer choices:

0. ID 710 — "محطة وقود" → correct:false
1. ID 711 — "مخيم سياحي." → correct:false
2. ID 712 — "مطعم." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 234,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "710",
        "text": "محطة وقود",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "711",
        "text": "مخيم سياحي.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "712",
        "text": "مطعم.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 768,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "2413",
        "text": "مخيم سياحي",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2412",
        "text": "محطة وقود",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2414",
        "text": "مطعم.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2412"
    ],
    "quizOptionsAnswerMap": {
      "2412": "1",
      "2413": "0",
      "2414": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 233

- Our question text: هذه الشاخصة الارشادية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-032539.jpg / 2390
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (موقف.) — NOT applied

Our answer choices:

0. ID 707 — "ممنوع الوقوف" → correct:false
1. ID 708 — "موقف مخصص لذوي الاحتياجات الخاصة." → correct:false
2. ID 709 — "موقف." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 233,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "707",
        "text": "ممنوع الوقوف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "708",
        "text": "موقف مخصص لذوي الاحتياجات الخاصة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "709",
        "text": "موقف.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 769,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "2416",
        "text": "موقف مخصص لذوي الاحتياجات الخاصة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2415",
        "text": "ممنوع الوقوف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2417",
        "text": "موقف",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2417"
    ],
    "quizOptionsAnswerMap": {
      "2415": "0",
      "2416": "0",
      "2417": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 232

- Our question text: هذه ' الشاخصة ' تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-032438.jpg / 2389
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 704 — "ممنوع الوقوف والتوقف." → correct:false
1. ID 705 — "ممنوع الوقوف." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 232,
    "question": "هذه ' الشاخصة ' تعني",
    "answers": [
      {
        "id": "704",
        "text": "ممنوع الوقوف والتوقف.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "705",
        "text": "ممنوع الوقوف.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 231

- Our question text: هذه الشاخصة الارشادية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-032329.jpg / 2388
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ممنوع الوقوف والتوقف.) — NOT applied

Our answer choices:

0. ID 701 — "ممنوع الوقوف والتوقف." → correct:false
1. ID 702 — "ممنوع الوقوف." → correct:false
2. ID 703 — "مسموح الوقوف." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 231,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "701",
        "text": "ممنوع الوقوف والتوقف.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "702",
        "text": "ممنوع الوقوف.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "703",
        "text": "مسموح الوقوف.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 771,
    "question": "هذه الشاخصة الارشادية تعني",
    "answers": [
      {
        "id": "2422",
        "text": "ممنوع الوقوف.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2421",
        "text": "ممنوع الوقوف والتوقف.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2423",
        "text": "مسموح الوقوف.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2421"
    ],
    "quizOptionsAnswerMap": {
      "2421": "1",
      "2422": "0",
      "2423": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 228

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-031950-2.jpg / 4825
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (ممر إلزامي للخيول) — NOT applied

Our answer choices:

0. ID 692 — "انتبة امامك نادي فروسية." → correct:false
1. ID 693 — "ممر إلزامي للخيول" → correct:false
2. ID 694 — "يمنع مرور الخيول" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 228,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "692",
        "text": "انتبة امامك نادي فروسية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "693",
        "text": "ممر إلزامي للخيول",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "694",
        "text": "يمنع مرور الخيول",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 774,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "2431",
        "text": "ممر إلزامي للخيول",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2432",
        "text": "يمنع مرور الخيول",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2430",
        "text": "انتبة امامك نادي فروسية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2431"
    ],
    "quizOptionsAnswerMap": {
      "2430": "0",
      "2431": "1",
      "2432": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 227

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-031821.jpg / 2384
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ممر إلزامي للمشاة .) — NOT applied

Our answer choices:

0. ID 689 — "ممر إلزامي للمشاة ." → correct:false
1. ID 690 — "يمنع مرور المشاة" → correct:false
2. ID 691 — "اولوية المرور للمشاة" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 227,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "689",
        "text": "ممر إلزامي للمشاة .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "690",
        "text": "يمنع مرور المشاة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "691",
        "text": "اولوية المرور للمشاة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 775,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "2435",
        "text": "اولوية المرور للمشاة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2434",
        "text": "يمنع مرور المشاة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2433",
        "text": "ممر إلزامي للمشاة",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2433"
    ],
    "quizOptionsAnswerMap": {
      "2433": "1",
      "2434": "0",
      "2435": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 226

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-031719.jpg / 2383
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (ممر للدراجات الهوائية.) — NOT applied

Our answer choices:

0. ID 686 — "مكان وقوف للدرجات ." → correct:false
1. ID 687 — "ممنوع دخول الدرجات." → correct:false
2. ID 688 — "ممر للدراجات الهوائية." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 226,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "686",
        "text": "مكان وقوف للدرجات .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "687",
        "text": "ممنوع دخول الدرجات.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "688",
        "text": "ممر للدراجات الهوائية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 776,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "2438",
        "text": "ممر للدراجات الهوائية.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2436",
        "text": "مكان وقوف للدرجات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2437",
        "text": "ممنوع دخول الدرجات",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2438"
    ],
    "quizOptionsAnswerMap": {
      "2436": "0",
      "2437": "0",
      "2438": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 225

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-031608.jpg / 2382
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 683 — "اتجاه اجباري دائري (دوار)." → correct:false
1. ID 684 — "شاخصة إرشادية "امامك دوار"." → correct:false
2. ID 685 — "شاخصة تحذيرية "امامك دوار"" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 224

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-031501.jpg / 2381
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (اتجاه إجباري نحو اليمين أو اليسار) — NOT applied

Our answer choices:

0. ID 680 — "اتجاه إجباري نحو اليمين أو اليسار" → correct:false
1. ID 681 — "اتجاه اجباري لليمين." → correct:false
2. ID 682 — "اتجاه اجباري لليسار." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 224,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "680",
        "text": "اتجاه إجباري نحو اليمين أو اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "681",
        "text": "اتجاه اجباري لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "682",
        "text": "اتجاه اجباري لليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 778,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "2442",
        "text": "اتجاه إجباري نحو اليمين أو اليسار",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2444",
        "text": "اتجاه اجباري لليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2443",
        "text": "اتجاه اجباري لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2442"
    ],
    "quizOptionsAnswerMap": {
      "2442": "1",
      "2443": "0",
      "2444": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 223

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-031355-1.jpg / 4830
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (اتجاه إجباري نحو اليسار) — NOT applied

Our answer choices:

0. ID 677 — "اتجاه إختياري نحو اليمين" → correct:false
1. ID 678 — "اتجاه اختياري نحو اليسار" → correct:false
2. ID 679 — "اتجاه إجباري نحو اليسار" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 223,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "677",
        "text": "اتجاه إختياري نحو اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "678",
        "text": "اتجاه اختياري نحو اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "679",
        "text": "اتجاه إجباري نحو اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 779,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "2447",
        "text": "اتجاه إجباري نحو اليسار",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2445",
        "text": "اتجاه إختياري نحو اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2446",
        "text": "اتجاه اختياري نحو اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2447"
    ],
    "quizOptionsAnswerMap": {
      "2445": "0",
      "2446": "0",
      "2447": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 222

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-030830.jpg / 2379
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (اتجاه إجباري نحو اليمين) — NOT applied

Our answer choices:

0. ID 674 — "اتجاه إختياري نحو اليمين" → correct:false
1. ID 675 — "اتجاه اختياري نحو اليسار" → correct:false
2. ID 676 — "اتجاه إجباري نحو اليمين" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 222,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "674",
        "text": "اتجاه إختياري نحو اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "675",
        "text": "اتجاه اختياري نحو اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "676",
        "text": "اتجاه إجباري نحو اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 780,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "2448",
        "text": "اتجاه إختياري نحو اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2450",
        "text": "اتجاه إجباري نحو اليمين",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2449",
        "text": "اتجاه اختياري نحو اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2450"
    ],
    "quizOptionsAnswerMap": {
      "2448": "0",
      "2449": "0",
      "2450": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 221

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-030830.jpg / 2379
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (اتجاه إجباري نحو اليمين) — NOT applied

Our answer choices:

0. ID 671 — "اتجاه إختياري نحو اليمين" → correct:false
1. ID 672 — "اتجاه اختياري نحو اليسار" → correct:false
2. ID 673 — "اتجاه إجباري نحو اليمين" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 221,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "671",
        "text": "اتجاه إختياري نحو اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "672",
        "text": "اتجاه اختياري نحو اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "673",
        "text": "اتجاه إجباري نحو اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 780,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "2448",
        "text": "اتجاه إختياري نحو اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2450",
        "text": "اتجاه إجباري نحو اليمين",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2449",
        "text": "اتجاه اختياري نحو اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2450"
    ],
    "quizOptionsAnswerMap": {
      "2448": "0",
      "2449": "0",
      "2450": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 220

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-030717.jpg / 2378
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (انعطاف إجباري نحو اليمين أو اليسار.) — NOT applied

Our answer choices:

0. ID 668 — "انعطاف إجباري نحو اليمين أو اليسار." → correct:false
1. ID 669 — "اتجاه اجباري لليمين." → correct:false
2. ID 670 — "اتجاه اجباري لليسار" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 220,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "668",
        "text": "انعطاف إجباري نحو اليمين أو اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "669",
        "text": "اتجاه اجباري لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "670",
        "text": "اتجاه اجباري لليسار",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 781,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "2452",
        "text": "اتجاه اجباري لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2453",
        "text": "اتجاه اجباري لليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2451",
        "text": "انعطاف إجباري نحو اليمين أو اليسار.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2451"
    ],
    "quizOptionsAnswerMap": {
      "2451": "1",
      "2452": "0",
      "2453": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 216

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-030209.jpg / 2374
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (اتجاه إجباري نحو الامام) — NOT applied

Our answer choices:

0. ID 656 — "اتجاه إجباري لمسرب واحد." → correct:false
1. ID 657 — "اتجاه إجباري لليمين." → correct:false
2. ID 658 — "اتجاه إجباري نحو الامام" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 216,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "656",
        "text": "اتجاه إجباري لمسرب واحد.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "657",
        "text": "اتجاه إجباري لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "658",
        "text": "اتجاه إجباري نحو الامام",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 785,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "2465",
        "text": "اتجاه إجباري نحو الامام",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2464",
        "text": "اتجاه إجباري لليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2463",
        "text": "اتجاه إجباري لمسرب واحد.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2465"
    ],
    "quizOptionsAnswerMap": {
      "2463": "0",
      "2464": "0",
      "2465": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 215

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-030055.jpg / 2373
- Confidence: identity-only-no-key
- Evidence:
  - identity match on trainingdriving but keys are stripped (no public answer key)
  - exact normalized question text
  - identical answer IDs
  - identical normalized answer texts in same order
  - identical question ID (bonus only; not identity by itself)
  - image basename appears in external image URL

Our answer choices:

0. ID 653 — "انعطاف إجباري نحو اليمين." → correct:false
1. ID 654 — "انعطاف إجباري نحو اليسار." → correct:false
2. ID 655 — "اولوية المتجة الى اليسار." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 215,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "653",
        "text": "انعطاف إجباري نحو اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "654",
        "text": "انعطاف إجباري نحو اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "655",
        "text": "اولوية المتجة الى اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": null
}
```

### Question ID 214

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-025928.jpg / 2372
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (انعطاف إجباري نحو اليمين.) — NOT applied

Our answer choices:

0. ID 650 — "انعطاف إجباري نحو اليمين." → correct:false
1. ID 651 — "انعطاف إجباري نحو اليسار." → correct:false
2. ID 652 — "الاولوية للمتجه الى اليمين" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 214,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "650",
        "text": "انعطاف إجباري نحو اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "651",
        "text": "انعطاف إجباري نحو اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "652",
        "text": "الاولوية للمتجه الى اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 787,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "2470",
        "text": "انعطاف إجباري نحو اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2469",
        "text": "انعطاف إجباري نحو اليمين.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2471",
        "text": "الاولوية للمتجه الى اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2469"
    ],
    "quizOptionsAnswerMap": {
      "2469": "1",
      "2470": "0",
      "2471": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 213

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-025810.jpg / 2371
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (اتجاه إجباري الى اليمين.) — NOT applied

Our answer choices:

0. ID 647 — "اتجاه إجباري إلى اليسار" → correct:false
1. ID 648 — "اتجاه إجباري الى اليمين." → correct:false
2. ID 649 — "الاولوية االتجاه الى اليمين" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 213,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "647",
        "text": "اتجاه إجباري إلى اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "648",
        "text": "اتجاه إجباري الى اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "649",
        "text": "الاولوية االتجاه الى اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 788,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "2474",
        "text": "الاولوية االتجاه الى اليمين",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2473",
        "text": "اتجاه إجباري الى اليمين.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2472",
        "text": "اتجاه إجباري إلى اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2473"
    ],
    "quizOptionsAnswerMap": {
      "2472": "0",
      "2473": "1",
      "2474": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 212

- Our question text: هذه الشاخصة الالزامية تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-025707.jpg / 2370
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (اتجاه إجباري إلى اليسار) — NOT applied

Our answer choices:

0. ID 644 — "اتجاه إجباري إلى اليسار" → correct:false
1. ID 645 — "اتجاه إجباري الى اليمين." → correct:false
2. ID 646 — "الاولوية للمتجه الى اليسار." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 212,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "644",
        "text": "اتجاه إجباري إلى اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "645",
        "text": "اتجاه إجباري الى اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "646",
        "text": "الاولوية للمتجه الى اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 789,
    "question": "هذه الشاخصة الالزامية تعني",
    "answers": [
      {
        "id": "2477",
        "text": "الاولوية للمتجه الى اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2475",
        "text": "اتجاه إجباري إلى اليسار",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2476",
        "text": "اتجاه إجباري الى اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2475"
    ],
    "quizOptionsAnswerMap": {
      "2475": "1",
      "2476": "0",
      "2477": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 211

- Our question text: هذه الشاخصة تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-025558.jpg / 2369
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (ممنوع المرور دون توقف (جمارك)) — NOT applied

Our answer choices:

0. ID 641 — "وقوف" → correct:false
1. ID 642 — "منطقة جمركية." → correct:false
2. ID 643 — "ممنوع المرور دون توقف (جمارك)" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 211,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "641",
        "text": "وقوف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "642",
        "text": "منطقة جمركية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "643",
        "text": "ممنوع المرور دون توقف (جمارك)",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 790,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "2480",
        "text": "ممنوع المرور دون توقف (جمارك)",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2479",
        "text": "منطقة جمركية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2478",
        "text": "وقوف",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2480"
    ],
    "quizOptionsAnswerMap": {
      "2478": "0",
      "2479": "0",
      "2480": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 210

- Our question text: هذه الشاخصة تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-025454-1.jpg / 4837
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ممنوع استعمال الزامور) — NOT applied

Our answer choices:

0. ID 638 — "ممنوع استعمال الزامور" → correct:false
1. ID 639 — "يسمح استعمال الزامور" → correct:false
2. ID 640 — "توجد فرقة موسيقية" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 210,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "638",
        "text": "ممنوع استعمال الزامور",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "639",
        "text": "يسمح استعمال الزامور",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "640",
        "text": "توجد فرقة موسيقية",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 791,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "2481",
        "text": "ممنوع استعمال الزامور",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2483",
        "text": "توجد فرقة موسيقية",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2482",
        "text": "يسمح استعمال الزامور",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2481"
    ],
    "quizOptionsAnswerMap": {
      "2481": "1",
      "2482": "0",
      "2483": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 208

- Our question text: هذه الشاخصة تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-025121-1.jpg / 4839
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (السرعات القصوى للمركبات.) — NOT applied

Our answer choices:

0. ID 632 — "السرعة الدنيا المسموح بها" → correct:false
1. ID 633 — "نهاية حد السرعة المدون في الشاخصة." → correct:false
2. ID 634 — "السرعات القصوى للمركبات." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 208,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "632",
        "text": "السرعة الدنيا المسموح بها",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "633",
        "text": "نهاية حد السرعة المدون في الشاخصة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "634",
        "text": "السرعات القصوى للمركبات.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 793,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "2489",
        "text": "السرعات القصوى للمركبات.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2487",
        "text": "السرعة الدنيا المسموح بها",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2488",
        "text": "نهاية حد السرعة المدون في الشاخصة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2489"
    ],
    "quizOptionsAnswerMap": {
      "2487": "0",
      "2488": "0",
      "2489": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 207

- Our question text: هذه الشاخصة تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-024958.jpg / 2365
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (السرعة القصوى) — NOT applied

Our answer choices:

0. ID 629 — "السرعة القصوى" → correct:false
1. ID 630 — "نهاية حد السرعة المدون في الشاخصة." → correct:false
2. ID 631 — "السرعة الدنيا المسموح بها." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 207,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "629",
        "text": "السرعة القصوى",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "630",
        "text": "نهاية حد السرعة المدون في الشاخصة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "631",
        "text": "السرعة الدنيا المسموح بها.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 794,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "2491",
        "text": "نهاية حد السرعة المدون في الشاخصة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2492",
        "text": "السرعة الدنيا المسموح بها.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2490",
        "text": "السرعة القصوى",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2490"
    ],
    "quizOptionsAnswerMap": {
      "2490": "1",
      "2491": "0",
      "2492": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 206

- Our question text: هذه الشاخصة تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-024856.jpg / 2364
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (نهاية منطقة المنع.) — NOT applied

Our answer choices:

0. ID 626 — "نهاية منطقة منع التجاوز للشاحنات." → correct:false
1. ID 627 — "نهاية منطقة منع التجاوز." → correct:false
2. ID 628 — "نهاية منطقة المنع." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 206,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "626",
        "text": "نهاية منطقة منع التجاوز للشاحنات.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "627",
        "text": "نهاية منطقة منع التجاوز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "628",
        "text": "نهاية منطقة المنع.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 795,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "2495",
        "text": "نهاية منطقة المنع.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2493",
        "text": "نهاية منطقة منع التجاوز للشاحنات.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2494",
        "text": "نهاية منطقة منع التجاوز.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2495"
    ],
    "quizOptionsAnswerMap": {
      "2493": "0",
      "2494": "0",
      "2495": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 205

- Our question text: هذه الشاخصة تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-024759.jpg / 2363
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نهاية منطقة منع التجاوز للشاحنات) — NOT applied

Our answer choices:

0. ID 623 — "نهاية منطقة منع التجاوز للشاحنات" → correct:false
1. ID 624 — "نهاية منطقة منع التجاوز." → correct:false
2. ID 625 — "ممنوع التجاوز للشاحنات" → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 205,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "623",
        "text": "نهاية منطقة منع التجاوز للشاحنات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "624",
        "text": "نهاية منطقة منع التجاوز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "625",
        "text": "ممنوع التجاوز للشاحنات",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 796,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "2498",
        "text": "ممنوع التجاوز للشاحنات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2496",
        "text": "نهاية منطقة منع التجاوز للشاحنات",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2497",
        "text": "نهاية منطقة منع التجاوز.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2496"
    ],
    "quizOptionsAnswerMap": {
      "2496": "1",
      "2497": "0",
      "2498": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 204

- Our question text: هذه الشاخصة تعني
- Section: فئات رخص السوق والعلامات الارضية
- Image filename/mediaId: Screenshot-2023-03-07-024650.jpg / 2362
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (نهاية منطقة منع التجاوز.) — NOT applied

Our answer choices:

0. ID 619 — "ممنوع التجاوز." → correct:false
1. ID 620 — "نهاية منطقة منع التجاوز." → correct:false
2. ID 621 — "ممنوع التجاوز للشاحنات." → correct:false
3. ID 622 — "نهاية منطقة المنع." → correct:false

Matched external question:

```json
{
  "trainingdriving": {
    "id": 204,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "619",
        "text": "ممنوع التجاوز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "620",
        "text": "نهاية منطقة منع التجاوز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "621",
        "text": "ممنوع التجاوز للشاحنات.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "622",
        "text": "نهاية منطقة المنع.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 0,
    "optionsOnesInMap": [],
    "score": 15,
    "evidence": [
      "exact normalized question text",
      "identical answer IDs",
      "identical normalized answer texts in same order",
      "identical question ID (bonus only; not identity by itself)",
      "image basename appears in external image URL"
    ]
  },
  "alqemah": {
    "id": 797,
    "question": "هذه الشاخصة تعني",
    "answers": [
      {
        "id": "2500",
        "text": "نهاية منطقة منع التجاوز.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2499",
        "text": "ممنوع التجاوز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2502",
        "text": "نهاية منطقة المنع.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2501",
        "text": "ممنوع التجاوز للشاحنات.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2500"
    ],
    "quizOptionsAnswerMap": {
      "2499": "0",
      "2500": "1",
      "2501": "0",
      "2502": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 436

- Our question text: من الحالات التي يمنع التجاوز فيها:
- Section: الوقوف والتوقف واحكام عامة
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (عن رتل متوقف من السيارات بسبب تعطل حركة السير او توقف السير بسبب وجود اشارة في الطريق) — NOT applied

Our answer choices:

0. ID 2098 — "عن رتل متوقف من السيارات بسبب تعطل حركة السير او توقف السير بسبب وجود اشارة في الطريق" → correct:false
1. ID 2099 — "عند الخط الطولي المتصل في الطرق او الممنوع التجاوز فيها بموجب شواخص المرور" → correct:false
2. ID 2100 — "على الجسور وداخل الانفاق" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 835,
    "question": "من الحالات التي يمنع التجاوز فيها:",
    "answers": [
      {
        "id": "2606",
        "text": "على الجسور وداخل الانفاق",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2604",
        "text": "عن رتل متوقف من السيارات بسبب تعطل حركة السير او توقف السير بسبب وجود اشارة في الطريق",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2605",
        "text": "عند الخط الطولي المتصل في الطرق او الممنوع التجاوز فيها بموجب شواخص المرور",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2604"
    ],
    "quizOptionsAnswerMap": {
      "2604": "1",
      "2605": "0",
      "2606": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 437

- Our question text: من الحالات التي يمنع التجاوز فيها:
- Section: الوقوف والتوقف واحكام عامة
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (عند تدني مدى الرؤية في الطريق نتيجة لعوامل طبيعية او طارئة) — NOT applied

Our answer choices:

0. ID 2101 — "عند المنعطفات ورؤوس التلال والطرق الزلقة والساحات الدائرية وبالقرب من ممرات عبور المشاة" → correct:false
1. ID 2102 — "بالقرب من تقاطع الطرق او تقاطع خطوط السكك الحديدية" → correct:false
2. ID 2103 — "عند تدني مدى الرؤية في الطريق نتيجة لعوامل طبيعية او طارئة" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 836,
    "question": "من الحالات التي يمنع التجاوز فيها:",
    "answers": [
      {
        "id": "2609",
        "text": "عند تدني مدى الرؤية في الطريق نتيجة لعوامل طبيعية او طارئة",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2607",
        "text": "عند المنعطفات ورؤوس التلال والطرق الزلقة والساحات الدائرية وبالقرب من ممرات عبور المشاة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2608",
        "text": "بالقرب من تقاطع الطرق او تقاطع خطوط السكك الحديدية",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2609"
    ],
    "quizOptionsAnswerMap": {
      "2607": "0",
      "2608": "0",
      "2609": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 446

- Our question text: اذا اعطى السائق الذي يقود مركبته في الطريق أي اشارة ضوئية (غماز) فعلى كل سائق يسير خلفه ان:
- Section: الوقوف والتوقف واحكام عامة
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (يخفف من سرعة مركبته وفسح المجال للمركبة الاخرى) — NOT applied

Our answer choices:

0. ID 2127 — "زيادة سرعة مركبته وعدم فسح المجال للمركبة الاخرى." → correct:false
1. ID 2128 — "يخفف من سرعة مركبته وفسح المجال للمركبة الاخرى" → correct:false
2. ID 2129 — "متابعة سيره." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 845,
    "question": "اذا اعطى السائق الذي يقود مركبته في الطريق أي اشارة ضوئية (غماز) فعلى كل سائق يسير خلفه ان:",
    "answers": [
      {
        "id": "2635",
        "text": "متابعة سيره.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2634",
        "text": "يخفف من سرعة مركبته وفسح المجال للمركبة الاخرى",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2633",
        "text": "زيادة سرعة مركبته وعدم فسح المجال للمركبة الاخرى.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2634"
    ],
    "quizOptionsAnswerMap": {
      "2633": "0",
      "2634": "1",
      "2635": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 462

- Our question text: التقاطع المتكافئ هو :
- Section: الوقوف والتوقف واحكام عامة
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (تقاطع غير محكوم بشرطي مرور والضوابط مرورية كالاشارات الضوئية والشواخص المرورية والعالمات الارضية.) — NOT applied

Our answer choices:

0. ID 2167 — "تقاطع غير محكوم بشرطي مرور والضوابط مرورية كالاشارات الضوئية والشواخص المرورية والعالمات الارضية." → correct:false
1. ID 2168 — "تقاطع محكوم بشرطي مرور وضوابط مرورية كاالاشارات الضوئية والشواخص المرورية والعالمات الارضية." → correct:false
2. ID 2169 — "تقاطع غير محكوم بشرطي مرور ولكن يوجد ضوابط مرورية كالاشارات الضوئية والشواخص المرورية العالمات الارضية." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 861,
    "question": "التقاطع المتكافئ هو :",
    "answers": [
      {
        "id": "2674",
        "text": "تقاطع محكوم بشرطي مرور وضوابط مرورية كاالاشارات الضوئية والشواخص المرورية والعالمات الارضية .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2673",
        "text": "تقاطع غير محكوم بشرطي مرور والضوابط مرورية كالاشارات الضوئية والشواخص المرورية والعالمات الارضية .",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2675",
        "text": "تقاطع غير محكوم بشرطي مرور ولكن يوجد ضوابط مرورية كالاشارات الضوئية والشواخص المرورية العالمات الارضية .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2673"
    ],
    "quizOptionsAnswerMap": {
      "2673": "1",
      "2674": "0",
      "2675": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 473

- Our question text: عند تقاطع طرق مع سكة حديد فإن الاولوية تكون:
- Section: الوقوف والتوقف واحكام عامة
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (للقطار.) — NOT applied

Our answer choices:

0. ID 2191 — "للمركبات." → correct:false
1. ID 2192 — "للقطار." → correct:false
2. ID 2193 — "للحافلات" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 872,
    "question": "عند تقاطع طرق مع سكة حديد فإن الاولوية تكون:",
    "answers": [
      {
        "id": "2699",
        "text": "للحافلات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2698",
        "text": "للقطار .",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2697",
        "text": "للمركبات .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2698"
    ],
    "quizOptionsAnswerMap": {
      "2697": "0",
      "2698": "1",
      "2699": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 474

- Our question text: في حال وجود مركبتان متقابلتان على التقاطع تقع كل منهما على يسار الاخرى وكانت احداهما تشير الى انها ستتجه الى يمينها والاخرى الى اليسار تكون الاولوية:
- Section: الوقوف والتوقف واحكام عامة
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2194 — "للمركبة المتجه الى اليمين" → correct:false
1. ID 2195 — "للمركبة المتجهة الى اليسار." → correct:false
2. ID 2196 — "لا شيء مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 475

- Our question text: عند وجود مركبة قادمة من طريق رئيسي على تقاطع واخرى قادمة من طريق فرعي تكون الاولوية :
- Section: الوقوف والتوقف واحكام عامة
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (للقادم من الطريق الرئيسي) — NOT applied

Our answer choices:

0. ID 2197 — "للقادم من الطريق الفرعي." → correct:false
1. ID 2198 — "للقادم من الطريق الرئيسي" → correct:false
2. ID 2199 — "لا شيء مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 874,
    "question": "عند وجود مركبة قادمة من طريق رئيسي على تقاطع واخرى قادمة من طريق فرعي تكون الاولوية :",
    "answers": [
      {
        "id": "2705",
        "text": "لا شيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2704",
        "text": "للقادم من الطريق الرئيسي",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2703",
        "text": "للقادم من الطريق الفرعي.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2704"
    ],
    "quizOptionsAnswerMap": {
      "2703": "0",
      "2704": "1",
      "2705": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 477

- Our question text: اذا كان تقاطع الطرق غير منظم بواسطة شرطي مرور او اشارة ضوئية او شواخص او علامات ارضية تكون الاولوية عند تساوي الاولويات :
- Section: الوقوف والتوقف واحكام عامة
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (للمركبة القادمة على التقاطع من يمينك.) — NOT applied

Our answer choices:

0. ID 2203 — "للمركبة القادمة على التقاطع من يمينك." → correct:false
1. ID 2204 — "للمركبة القادمة على التقاطع من يسارك." → correct:false
2. ID 2205 — "لاي مركبه موجودة على التقاطع" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 876,
    "question": "اذا كان تقاطع الطرق غير منظم بواسطة شرطي مرور او اشارة ضوئية او شواخص او علامات ارضية تكون الاولوية عند تساوي الاولويات :",
    "answers": [
      {
        "id": "2711",
        "text": "لاي مركبه موجودة على التقاطع",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2709",
        "text": "للمركبة القادمة على التقاطع من يمينك.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2710",
        "text": "للمركبة القادمة على التقاطع من يسارك.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2709"
    ],
    "quizOptionsAnswerMap": {
      "2709": "1",
      "2710": "0",
      "2711": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 483

- Our question text: على السائق عند وصوله الى تقاطع طرق منظم بواسطة شرطي مرور :
- Section: الوقوف والتوقف واحكام عامة
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (عدم المرور بمركبته الا عندما يسمح له الشرطي.) — NOT applied

Our answer choices:

0. ID 2220 — "أن يقوم بالمرور بمركبته بدون ان يسمح له الشرطي." → correct:false
1. ID 2221 — "عدم المرور بمركبته الا عندما يسمح له الشرطي." → correct:false
2. ID 2222 — "لا شيء مما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 882,
    "question": "على السائق عند وصوله الى تقاطع طرق منظم بواسطة شرطي مرور :",
    "answers": [
      {
        "id": "2728",
        "text": "لا شيء مما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2727",
        "text": "عدم المرور بمركبته الا عندما يسمح له الشرطي .",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2726",
        "text": "أن يقوم بالمرور بمركبته بدون ان يسمح له الشرطي .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2727"
    ],
    "quizOptionsAnswerMap": {
      "2726": "0",
      "2727": "1",
      "2728": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 484

- Our question text: عند اقتراب السائق من تقاطع طرق عليه ان :
- Section: الوقوف والتوقف واحكام عامة
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (يخفف السرعة.) — NOT applied

Our answer choices:

0. ID 2223 — "يخفف السرعة." → correct:false
1. ID 2224 — "يزيد السرعة." → correct:false
2. ID 2225 — "لا شئ مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 883,
    "question": "عند اقتراب السائق من تقاطع طرق عليه ان :",
    "answers": [
      {
        "id": "2730",
        "text": "يزيد السرعة .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2731",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2729",
        "text": "يخفف السرعة .",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2729"
    ],
    "quizOptionsAnswerMap": {
      "2729": "1",
      "2730": "0",
      "2731": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 492

- Our question text: الضوء الاحمر المخصص للمشاة في الاشارة الضوئية يعني:
- Section: الوقوف والتوقف واحكام عامة
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2246 — "السماح للمشاة بعبور الطريق" → correct:false
1. ID 2247 — "السماح للمشاة بعبور الطريق" → correct:false
2. ID 2248 — "منع المشاة من عبور الطريق" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 494

- Our question text: الضوء المخصص لعبور المشاة من خلال الاشارة الضوئية.
- Section: الوقوف والتوقف واحكام عامة
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2252 — "الضوء الاخضر." → correct:false
1. ID 2253 — "الضوء الاحمر." → correct:false
2. ID 2254 — "الضوء الاصفر." → correct:false
3. ID 2255 — "لا شئ مما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 500

- Our question text: من اهداف وجود نظام التعليق:
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (امتصاص الصدمات والمحافظة على توازن المركبة) — NOT applied

Our answer choices:

0. ID 2267 — "تثبيت المحرك على جسم الالية." → correct:false
1. ID 2268 — "امتصاص الصدمات والمحافظة على توازن المركبة" → correct:false
2. ID 2269 — "لا شئ مما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 525,
    "question": "من اهداف وجود نظام التعليق:",
    "answers": [
      {
        "id": "1689",
        "text": "امتصاص الصدمات والمحافظة على توازن المركبة",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1688",
        "text": "تثبيت المحرك على جسم الالية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1690",
        "text": "لا شئ مما ذكر.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1689"
    ],
    "quizOptionsAnswerMap": {
      "1688": "0",
      "1689": "1",
      "1690": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 508

- Our question text: وظيفة القابض (الكلتش)
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نقل القوة من المحرك الى صندوق التروس أو فصلها عند الحاجة) — NOT applied

Our answer choices:

0. ID 2288 — "نقل القوة من المحرك الى صندوق التروس أو فصلها عند الحاجة" → correct:false
1. ID 2289 — "نقل القوة من صندوق التروس الى المحرك أو فصلها عند الحاجة" → correct:false
2. ID 2290 — "نقل القوة من المحرك الى صندوق التروس دون فصلها حتى عند الحاجة" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 533,
    "question": "وظيفة القابض (الكلتش)",
    "answers": [
      {
        "id": "1710",
        "text": "نقل القوة من صندوق التروس الى المحرك أو فصلها عند الحاجة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1711",
        "text": "نقل القوة من المحرك الى صندوق التروس دون فصلها حتى عند الحاجة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1709",
        "text": "نقل القوة من المحرك الى صندوق التروس أو فصلها عند الحاجة",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1709"
    ],
    "quizOptionsAnswerMap": {
      "1709": "1",
      "1710": "0",
      "1711": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 509

- Our question text: من الاجزاء التي تشارك في نقل القوة من المحرك الى العجلات هي:
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (صندوق التروس) — NOT applied

Our answer choices:

0. ID 2291 — "المازج (الكربوريتر)." → correct:false
1. ID 2292 — "صندوق التروس" → correct:false
2. ID 2293 — "واقي الصدمة (الصنوبرصات)" → correct:false
3. ID 2294 — "الهيكل" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 534,
    "question": ".من الاجزاء التي تشارك في نقل القوة من المحرك الى العجلات هي:",
    "answers": [
      {
        "id": "1712",
        "text": "المازج (الكربوريتر).",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1713",
        "text": "صندوق التروس",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1715",
        "text": "الهيكل",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1714",
        "text": "واقي الصدمة (الصنوبرصات)",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1713"
    ],
    "quizOptionsAnswerMap": {
      "1712": "0",
      "1713": "1",
      "1714": "0",
      "1715": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 516

- Our question text: من مواصفات ماء التبريد المستخدم لتبريد المحرك:
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2314 — "يجب أن يكون ماء التبريد نقياً وأن يحتوي مادة تساعد على عدم تكون الصدأ والرواسب" → correct:false
1. ID 2315 — "يجب أن يكون ماء التبريد نقياً وأن يحتوي على نسبة مرتفعة من الكلس." → correct:false
2. ID 2316 — "يجب أن يكون ماء التبريد عكراً وأن يحتوي على نسبة مخفضة من الكلس" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 517

- Our question text: من فوائد نظام التبريد:
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (المحافظة على حرارة المحرك عند حرارة معينة محددة.) — NOT applied

Our answer choices:

0. ID 2317 — "المحافظة على حرارة المحرك عند حرارة معينة محددة." → correct:false
1. ID 2318 — "تبريد الزيت الموجود في المحرك والمحافظة عليه من التلف" → correct:false
2. ID 2319 — "تقليل القوة الضائعة في تسخين أجزاء المحرك." → correct:false
3. ID 2320 — "أ+ب" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 542,
    "question": "من فوائد نظام التبريد:",
    "answers": [
      {
        "id": "1738",
        "text": "المحافظة على حرارة المحرك عند حرارة معينة محددة.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1739",
        "text": "تبريد الزيت الموجود في المحرك والمحافظة عليه من التلف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1741",
        "text": "أ+ب",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1740",
        "text": "تقليل القوة الضائعة في تسخين أجزاء المحرك.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1738"
    ],
    "quizOptionsAnswerMap": {
      "1738": "1",
      "1739": "0",
      "1740": "0",
      "1741": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 525

- Our question text: عند وصول ساعة الحرارة إلى المنطقة ( H )فإنه يجب عليك:
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ايقاف سيارتك في مكان آمن لاتخاذ الاجراء الضروري) — NOT applied

Our answer choices:

0. ID 2341 — "ايقاف سيارتك في مكان آمن لاتخاذ الاجراء الضروري" → correct:false
1. ID 2342 — "إيقاف سيارتك في أي مكان في الطريق فورا لاتخاذ الاجراء الضروري" → correct:false
2. ID 2343 — "متابعة المسير في السيارة حتى تصل اقرب كراج." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 550,
    "question": "عند وصول ساعة الحرارة إلى المنطقة ( H )فإنه يجب عليك:",
    "answers": [
      {
        "id": "1763",
        "text": "إيقاف سيارتك في أي مكان في الطريق فورا لاتخاذ الاجراء الضروري",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1762",
        "text": "ايقاف سيارتك في مكان آمن لاتخاذ الاجراء الضروري",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1764",
        "text": "متابعة المسير في السيارة حتى تصل اقرب كراج.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1762"
    ],
    "quizOptionsAnswerMap": {
      "1762": "1",
      "1763": "0",
      "1764": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 541

- Our question text: تكون فرصة تجنب الاصابات الخطيرة كبيرة جدا لسائقي الدراجات إذا قاموا بإرتداء:
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (واقية الرأس ( الخوذة) المناسبة) — NOT applied

Our answer choices:

0. ID 2374 — "واقية الرأس ( الخوذة) المناسبة" → correct:false
1. ID 2375 — "نظارات طبية." → correct:false
2. ID 2376 — "قبعة تغطي الرأس بشكل كامل." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 566,
    "question": "تكون فرصة تجنب الاصابات الخطيرة كبيرة جدا لسائقي الدراجات إذا قاموا بإرتداء:",
    "answers": [
      {
        "id": "1796",
        "text": "نظارات طبية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1797",
        "text": "قبعة تغطي الرأس بشكل كامل.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1795",
        "text": "واقية الرأس ( الخوذة) المناسبة",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1795"
    ],
    "quizOptionsAnswerMap": {
      "1795": "1",
      "1796": "0",
      "1797": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 543

- Our question text: يجوز لاي فرد من افراد الشرطة اذا كانت المركبة غير مسجلة او انتهى ترخيصها لمدة تزيد على ستة اشهر
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (حجز المركبة) — NOT applied

Our answer choices:

0. ID 2379 — "حجز المركبة" → correct:false
1. ID 2380 — "إلقاء القبض على السائق." → correct:false
2. ID 2381 — "إلزام السائق بدفع غرامه فقط." → correct:false
3. ID 2382 — "لا شئ مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 568,
    "question": "يجوز لاي فرد من افراد الشرطة اذا كانت المركبة غير مسجلة او انتهى ترخيصها لمدة تزيد على ستة اشهر",
    "answers": [
      {
        "id": "1803",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1801",
        "text": "إلقاء القبض على السائق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1802",
        "text": "إلزام السائق بدفع غرامه فقط.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1800",
        "text": "حجز المركبة",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1800"
    ],
    "quizOptionsAnswerMap": {
      "1800": "1",
      "1801": "0",
      "1802": "0",
      "1803": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 544

- Our question text: اذا حاول السائق الهرب من مكان حادث ارتكبه فإنه :
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (يجوز لاي فرد من افراد الشرطة ان يلقي القبض عليه دون مذكرة) — NOT applied

Our answer choices:

0. ID 2383 — "يجوز لاي فرد من افراد الشرطة ان يلقي القبض عليه دون مذكرة" → correct:false
1. ID 2384 — "لا يجوز إلقاء القبض عليه ولكن يجب دفع قيمة المخالفه فقط." → correct:false
2. ID 2385 — "لا شئ مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 569,
    "question": "اذا حاول السائق الهرب من مكان حادث ارتكبه فإنه :",
    "answers": [
      {
        "id": "1806",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1804",
        "text": "يجوز لاي فرد من افراد الشرطة ان يلقي القبض عليه دون مذكرة",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "1805",
        "text": "لا يجوز إلقاء القبض عليه ولكن يجب دفع قيمة المخالفه فقط.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1804"
    ],
    "quizOptionsAnswerMap": {
      "1804": "1",
      "1805": "0",
      "1806": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 546

- Our question text: يجوز لاي فرد من افراد الشرطة ان يلقي القبض دون مذكرة على سائق اي مركبة إذا:
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (تسبب في وفاة شخص او اصابته بسبب قيادة المركبة.) — NOT applied

Our answer choices:

0. ID 2390 — "تسبب في وفاة شخص او اصابته بسبب قيادة المركبة." → correct:false
1. ID 2391 — "رفض التوقف لدورية الشرطة" → correct:false
2. ID 2392 — "القيادة بعكس السير" → correct:false
3. ID 2393 — "لا شئ مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 571,
    "question": "يجوز لاي فرد من افراد الشرطة ان يلقي القبض دون مذكرة على سائق اي مركبة إذا:",
    "answers": [
      {
        "id": "1812",
        "text": "رفض التوقف لدورية الشرطة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1813",
        "text": "القيادة بعكس السير",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1814",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1811",
        "text": "تسبب في وفاة شخص او اصابته بسبب قيادة المركبة .",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1811"
    ],
    "quizOptionsAnswerMap": {
      "1811": "1",
      "1812": "0",
      "1813": "0",
      "1814": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 547

- Our question text: يعاقب السائق بالحبس مدة لا تقل عن ثلاثة أشهر ولا تزيد على ثلاث سنوات لمن ارتكب المخالفات التالية:
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (إذا تسبب سائق المركبة أثناء قيادتها بوفاة إنسان أو تسبب بإحداث عاهة دائمة له) — NOT applied

Our answer choices:

0. ID 2394 — "إذا تسبب سائق المركبة أثناء قيادتها بوفاة إنسان أو تسبب بإحداث عاهة دائمة له" → correct:false
1. ID 2395 — "محاولة الهرب من مكان حادث ارتكبه" → correct:false
2. ID 2396 — "عدم إعلام أول مركز أمني أو دورية شرطه بحادث سير ارتكبه أثناء قيادة مركبة وأدى إلى إصابة شخص" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 572,
    "question": "يعاقب السائق بالحبس مدة لا تقل عن ثلاثة أشهر ولا تزيد على ثلاث سنوات لمن ارتكب المخالفات التالية ؟",
    "answers": [
      {
        "id": "1817",
        "text": "عدم إعلام أول مركز أمني أو دورية شرطه بحادث سير ارتكبه أثناء قيادة مركبة وأدى إلى إصابة شخص",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1816",
        "text": "محاولة الهرب من مكان حادث ارتكبه",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1815",
        "text": "إذا تسبب سائق المركبة أثناء قيادتها بوفاة إنسان أو تسبب بإحداث عاهة دائمة له",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1815"
    ],
    "quizOptionsAnswerMap": {
      "1815": "1",
      "1816": "0",
      "1817": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 549

- Our question text: عند قيادة المركبة من قبل سائق تحت تأثير الكحول أو أي من المؤثرات العقلية التي تفقد سائقها السيطرة على قيادتها أو تناول الكحول أثناء القيادة :
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (القبض من قبل أفراد الامن العام على السائق بدون مذكرة) — NOT applied

Our answer choices:

0. ID 2399 — "القبض من قبل أفراد الامن العام على السائق بدون مذكرة" → correct:false
1. ID 2400 — "القبض من قبل أفراد الامن العام على السائق بمذكرة" → correct:false
2. ID 2401 — "لا شيء مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 574,
    "question": "عند قيادة المركبة من قبل سائق تحت تأثير الكحول أو أي من المؤثرات العقلية التي تفقد سائقها السيطرة على قيادتها أو تناول الكحول أثناء القيادة :",
    "answers": [
      {
        "id": "1822",
        "text": "لا شيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1821",
        "text": "القبض من قبل أفراد الامن العام على السائق بمذكرة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1820",
        "text": "القبض من قبل أفراد الامن العام على السائق بدون مذكرة",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1820"
    ],
    "quizOptionsAnswerMap": {
      "1820": "1",
      "1821": "0",
      "1822": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 551

- Our question text: من إجراءات التي تتخذ لفاقد الوعي:
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2406 — "لا نقل المصاب من مكان الحادث" → correct:false
1. ID 2407 — "لا تجبير أي جزء من جسمه." → correct:false
2. ID 2408 — "أ + ب" → correct:false
3. ID 2409 — "لا شئ مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 555

- Our question text: من انواع النزيف :
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2422 — "نزيف خارجي وهو سيالان الدم خارج الجسم" → correct:false
1. ID 2423 — "نزيف داخلي وهو سيالان الدم داخل تجاويف الجسم مثل تجويف الجمجمة والصدر و البطن والمفاصل" → correct:false
2. ID 2424 — "أ + ب" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 566

- Our question text: الصدمة هي:
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2460 — "حالة مرضية تحدث بسبب هبوط حاد في الدورة الدموية مما يؤدي إلى عدم وصول الاوكسجين بكميات كافية إلى أنسجة الجسم وخاصة أنسجة المخ." → correct:false
1. ID 2461 — "حالة مرضية تحدث بسبب هبوط في الدورة الدموية مما يؤدي إلى وصول الاوكسجين بكميات كافية إلى أنسجة الجسم وخاصة أنسجة المخ." → correct:false
2. ID 2462 — "حالة مرضية تحدث بسبب إرتفاع في الدورة الدموية مما يؤدي إلى وصول الاوكسجين بكميات كافية إلى أنسجة الجسم وخاصة أنسجة المخ." → correct:false
3. ID 2463 — "لا شيء مما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 578

- Our question text: من الاصابات التي تتطلب إسعافات أولية:
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2496 — "الجروح – النزيف – الكسور والحروق" → correct:false
1. ID 2497 — "ضربات الشمس والاجهاد الحراري والتشنجات الحرارية" → correct:false
2. ID 2498 — "أ + ب." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 597

- Our question text: يحظر على السائق استعمال اجهزة التنبيه الصوتية :
- Section: ميكانيك المركبات
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (اثناء وقوف المركبة.) — NOT applied

Our answer choices:

0. ID 2550 — "اثناء وقوف المركبة." → correct:false
1. ID 2551 — "اثناء حركة المركبة." → correct:false
2. ID 2552 — "لا شئ ما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 621,
    "question": "يحظر على السائق استعمال اجهزة التنبيه الصوتية :",
    "answers": [
      {
        "id": "1968",
        "text": "لا شئ ما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1967",
        "text": "اثناء حركة المركبة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "1966",
        "text": "اثناء وقوف المركبة.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "1966"
    ],
    "quizOptionsAnswerMap": {
      "1966": "1",
      "1967": "0",
      "1968": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 607

- Our question text: في الصور التي امامك يكون ترتيب الاولوية :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-031305.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (للمركبة رقم 1.) — NOT applied

Our answer choices:

0. ID 2574 — "للمركبة رقم 1." → correct:false
1. ID 2575 — "للمركبة رقم 2." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 988,
    "question": "في الصور التي امامك يكون ترتيب الاولوية :",
    "answers": [
      {
        "id": "3009",
        "text": "للمركبة رقم 2",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "3008",
        "text": "للمركبة رقم 1",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "3008"
    ],
    "quizOptionsAnswerMap": {
      "3008": "1",
      "3009": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 608

- Our question text: في الصور التي امامك تكون الاولوية :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-031044.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (2 - 1 - 3) — NOT applied

Our answer choices:

0. ID 2576 — "3 - 2 - 1" → correct:false
1. ID 2577 — "1 - 2 - 3" → correct:false
2. ID 2578 — "2 - 1 - 3" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 989,
    "question": "في الصور التي امامك تكون الاولوية :",
    "answers": [
      {
        "id": "3012",
        "text": "2 - 1 - 3",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "3011",
        "text": "1 - 2 - 3",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "3010",
        "text": "3 - 2 - 1",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "3012"
    ],
    "quizOptionsAnswerMap": {
      "3010": "0",
      "3011": "0",
      "3012": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 609

- Our question text: في الصور التي امامك يكون ترتيب الاولوية :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-030811.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (1 - 3 - 2) — NOT applied

Our answer choices:

0. ID 2579 — "1- 2 - 3" → correct:false
1. ID 2580 — "1 - 3 - 2" → correct:false
2. ID 2581 — "3 - 1 - 2" → correct:false
3. ID 2582 — "لا شيء مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 990,
    "question": "في الصور التي امامك يكون ترتيب الاولوية :",
    "answers": [
      {
        "id": "3015",
        "text": "3 - 1 - 2",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "3016",
        "text": "لا شيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "3013",
        "text": ".1- 2 - 3",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "3014",
        "text": "1 - 3 - 2",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "3014"
    ],
    "quizOptionsAnswerMap": {
      "3013": "0",
      "3014": "1",
      "3015": "0",
      "3016": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 610

- Our question text: في الصور التي امامك تكون الاولوية :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-030610.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (للقطار 1) — NOT applied

Our answer choices:

0. ID 2583 — "للقطار 1" → correct:false
1. ID 2584 — "للمركبة 2" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 991,
    "question": "في الصور التي امامك تكون الاولوية :",
    "answers": [
      {
        "id": "3018",
        "text": "للمركبة 2",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "3017",
        "text": "للقطار 1",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "3017"
    ],
    "quizOptionsAnswerMap": {
      "3017": "1",
      "3018": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 611

- Our question text: من الامور التي تساعد على زيادة إستهلاك البنزين:
- Section: قواعد اولويات المرور
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (إستخدام الغيارات الثقيلة اثناء القيادة.) — NOT applied

Our answer choices:

0. ID 2585 — "إستخدام الغيارات الثقيلة اثناء القيادة." → correct:false
1. ID 2586 — "إستخدام الغيارات الخفيفة اثناء القيادة" → correct:false
2. ID 2587 — "إستعمال المركبة لمسافات قصيرة لان ذلك يؤدي الى زيادة إستهلاك الوقود." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 899,
    "question": "من الامور التي تساعد على زيادة إستهلاك البنزين:",
    "answers": [
      {
        "id": "2773",
        "text": "إستخدام الغيارات الخفيفة اثناء القيادة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2772",
        "text": "إستخدام الغيارات الثقيلة اثناء القيادة.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2774",
        "text": "إستعمال المركبة لمسافات قصيرة لان ذلك يؤدي الى زيادة إستهلاك الوقود.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2772"
    ],
    "quizOptionsAnswerMap": {
      "2772": "1",
      "2773": "0",
      "2774": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 612

- Our question text: ان الوصول للسرعة القصوى فور تشغيلك للمركبة يقلل من استهلاك الوقود.
- Section: قواعد اولويات المرور
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2588 — "نعم" → correct:false
1. ID 2589 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 615

- Our question text: ان وجود الرمز 155 / 13 على الاطار يعني:
- Section: قواعد اولويات المرور
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2596 — "عرض الاطار 155 ملم وقياس الجنط قطره 13 أنش." → correct:false
1. ID 2597 — "عرض الاطار 13 أنش وقياس الجنط قطره 155 ملم." → correct:false
2. ID 2598 — "لا شيء مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 616

- Our question text: واحدة من التالية ليست من وظيفة الاطارات
- Section: قواعد اولويات المرور
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (تزويد المركبة بالطاقة من خلال الحركة.) — NOT applied

Our answer choices:

0. ID 2599 — "تحمل الصدمات." → correct:false
1. ID 2600 — "رفع الاحمال." → correct:false
2. ID 2601 — "تزويد المركبة بالطاقة من خلال الحركة." → correct:false
3. ID 2602 — "ايقاف المركبة" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 904,
    "question": "واحدة من التالية ليست من وظيفة الاطارات",
    "answers": [
      {
        "id": "2789",
        "text": "ايقاف المركبة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2787",
        "text": "رفع الاحمال.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2788",
        "text": "تزويد المركبة بالطاقة من خلال الحركة.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2786",
        "text": "تحمل الصدمات.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2788"
    ],
    "quizOptionsAnswerMap": {
      "2786": "0",
      "2787": "0",
      "2788": "1",
      "2789": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 620

- Our question text: يجب أن تكون جميع الاطارات الاربعة في المركبة
- Section: قواعد اولويات المرور
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2613 — "العجالت الامامية ذات قياس واحد والخلفية ذات قياس اخر" → correct:false
1. ID 2614 — "من نفس القياس" → correct:false
2. ID 2615 — "ليس ضروري لان تكون العجلات الاربعة من نفس القياس" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 623

- Our question text: تشير حركة يد الشرطي الموضحة في الصورة التي امامك الى :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-220344.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (تمرير المركبات القادمة من جانب الطريق وايقاف المركبات القادمة من الامام و الخلف.) — NOT applied

Our answer choices:

0. ID 2622 — "ايقاف حركة المرور المركبات" → correct:false
1. ID 2623 — "تخفيف سرعة المركبات" → correct:false
2. ID 2624 — "تمرير المركبات القادمة من جانب الطريق وايقاف المركبات القادمة من الامام و الخلف." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 911,
    "question": "تشير حركة يد الشرطي الموضحة في الصورة التي امامك الى :",
    "answers": [
      {
        "id": "2810",
        "text": "تخفيف سرعة المركبات",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2811",
        "text": "تمرير المركبات القادمة من جانب الطريق وايقاف المركبات القادمة من الامام و الخلف.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2809",
        "text": "ايقاف حركة المرور المركبات",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2811"
    ],
    "quizOptionsAnswerMap": {
      "2809": "0",
      "2810": "0",
      "2811": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 624

- Our question text: في الصورة التي امامك المركبة رقم ( 2 )تتجاوز بشكل صحيح:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-220119-300x236.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 2625 — "نعم" → correct:false
1. ID 2626 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 912,
    "question": "في الصورة التي امامك المركبة رقم ( 2 )تتجاوز بشكل صحيح:",
    "answers": [
      {
        "id": "2812",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2813",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2813"
    ],
    "quizOptionsAnswerMap": {
      "2812": "0",
      "2813": "1"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 625

- Our question text: الانحراف هو :
- Section: قواعد اولويات المرور
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (تغير مفاجئ في الاتجاه ومن الممكن ان يكون انعطافي سريع او ازاحة سريعة للجانب) — NOT applied

Our answer choices:

0. ID 2627 — "تغير تدريجي في الاتجاه ومن الممكن ان يكون انعطافي بطئ او ازاحة متوسطة للجانب" → correct:false
1. ID 2628 — "تغير مفاجئ في الاتجاه ومن الممكن ان يكون انعطافي سريع او ازاحة سريعة للجانب" → correct:false
2. ID 2629 — "تغير مفاجئ في الاتجاه ومن غير الممكن ان يكون انعطافي سريع" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 913,
    "question": "الانحراف هو :",
    "answers": [
      {
        "id": "2816",
        "text": "تغير مفاجئ في الاتجاه ومن غير الممكن ان يكون انعطافي سريع",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2815",
        "text": "تغير مفاجئ في الاتجاه ومن الممكن ان يكون انعطافي سريع او ازاحة سريعة للجانب",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2814",
        "text": "تغير تدريجي في الاتجاه ومن الممكن ان يكون انعطافي بطئ او ازاحة متوسطة للجانب",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2815"
    ],
    "quizOptionsAnswerMap": {
      "2814": "0",
      "2815": "1",
      "2816": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 626

- Our question text: يجب ضبط المرايا :
- Section: قواعد اولويات المرور
- Image filename/mediaId: n/a / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 3 (قبل التحرك.) — NOT applied

Our answer choices:

0. ID 2630 — "قبل الدخول الى المنعطفات" → correct:false
1. ID 2631 — "عند الرجوع الى الخلف" → correct:false
2. ID 2632 — "عند التجاوز" → correct:false
3. ID 2633 — "قبل التحرك." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 914,
    "question": "يجب ضبط المرايا :",
    "answers": [
      {
        "id": "2819",
        "text": "عند التجاوز",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2820",
        "text": "قبل التحرك.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2818",
        "text": "عند الرجوع الى الخلف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2817",
        "text": "قبل الدخول الى المنعطفات",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2820"
    ],
    "quizOptionsAnswerMap": {
      "2817": "0",
      "2818": "0",
      "2819": "0",
      "2820": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 628

- Our question text: الاجراء الصحيح عند اقترابك من التقاطع ورؤيتك للخط العرضي المتصل :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-07-040501.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (تخفيض السرعة والتوقف قبل الخط وإعطاء الاولوية للمركبات صاحبة حق الاولوية) — NOT applied

Our answer choices:

0. ID 2637 — "متابعة السير دون التوقف" → correct:false
1. ID 2638 — "تخفيض السرعة والتوقف قبل الخط وإعطاء الاولوية للمركبات صاحبة حق الاولوية" → correct:false
2. ID 2639 — "التوقف عند الضرورة قبل استئناف السير" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 916,
    "question": "الاجراء الصحيح عند اقترابك من التقاطع ورؤيتك للخط العرضي المتصل :",
    "answers": [
      {
        "id": "2826",
        "text": "التوقف عند الضرورة قبل استئناف السير",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2824",
        "text": "متابعة السير دون التوقف",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2825",
        "text": "تخفيض السرعة والتوقف قبل الخط وإعطاء الاولوية للمركبات صاحبة حق الاولوية",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2825"
    ],
    "quizOptionsAnswerMap": {
      "2824": "0",
      "2825": "1",
      "2826": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 630

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-07-030327.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (تخفيض سرعة مركبتك وإعطاء الاولوية للمركبات الاخرى على التقاطع ثم الدوران.) — NOT applied

Our answer choices:

0. ID 2643 — "تخفيض سرعة مركبتك وإعطاء الاولوية للمركبات الاخرى على التقاطع ثم الدوران." → correct:false
1. ID 2644 — "زيادة سرعة مركبتك وأخذ حق الاولوية على التقاطع ثم الدوران." → correct:false
2. ID 2645 — "الذهاب إلى تقاطع أخر يكون فيه الدوران مسموح." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 918,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
    "answers": [
      {
        "id": "2832",
        "text": "الذهاب إلى تقاطع أخر يكون فيه الدوران مسموح.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2831",
        "text": "زيادة سرعة مركبتك وأخذ حق الاولوية على التقاطع ثم الدوران.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2830",
        "text": "تخفيض سرعة مركبتك وإعطاء الاولوية للمركبات الاخرى على التقاطع ثم الدوران.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2830"
    ],
    "quizOptionsAnswerMap": {
      "2830": "1",
      "2831": "0",
      "2832": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 631

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-07-030055.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (تخفيض سرعة مركبتك والانعطاف نحو اليسار.) — NOT applied

Our answer choices:

0. ID 2646 — "زيادة سرعة مركبتك والانعطاف نحو اليسار" → correct:false
1. ID 2647 — "تخفيض سرعة مركبتك والانعطاف نحو اليسار." → correct:false
2. ID 2648 — "زيادة سرعة مركبتك والانعطاف نحو اليمين." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 919,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
    "answers": [
      {
        "id": "2835",
        "text": "زيادة سرعة مركبتك والانعطاف نحو اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2833",
        "text": "زيادة سرعة مركبتك والانعطاف نحو اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2834",
        "text": "تخفيض سرعة مركبتك والانعطاف نحو اليسار.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2834"
    ],
    "quizOptionsAnswerMap": {
      "2833": "0",
      "2834": "1",
      "2835": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 632

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-07-025928.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (تخفيض سرعة مركبتك والانعطاف نحو اليمين) — NOT applied

Our answer choices:

0. ID 2649 — "زيادة سرعة مركبتك والانعطاف نحو اليسار" → correct:false
1. ID 2650 — "تخفيض سرعة مركبتك والانعطاف نحو اليسار." → correct:false
2. ID 2651 — "تخفيض سرعة مركبتك والانعطاف نحو اليمين" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 920,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
    "answers": [
      {
        "id": "2838",
        "text": "تخفيض سرعة مركبتك والانعطاف نحو اليمين",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2837",
        "text": "تخفيض سرعة مركبتك والانعطاف نحو اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2836",
        "text": "زيادة سرعة مركبتك والانعطاف نحو اليسار",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2838"
    ],
    "quizOptionsAnswerMap": {
      "2836": "0",
      "2837": "0",
      "2838": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 633

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-07-032329.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى لاعاقة حركة المرور) — NOT applied

Our answer choices:

0. ID 2652 — "التوقف في حال خلو الطريق من المركبات والمشاة" → correct:false
1. ID 2653 — "عدم التوقف إلا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع." → correct:false
2. ID 2654 — "عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى لاعاقة حركة المرور" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 921,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
    "answers": [
      {
        "id": "2841",
        "text": "عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى لاعاقة حركة المرور",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2839",
        "text": "التوقف في حال خلو الطريق من المركبات والمشاة",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2840",
        "text": "عدم التوقف إلا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2841"
    ],
    "quizOptionsAnswerMap": {
      "2839": "0",
      "2840": "0",
      "2841": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 634

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-07-032438.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (عدم التوقف الا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع.) — NOT applied

Our answer choices:

0. ID 2655 — "التوقف في حال خلو الطريق من المركبات والمشاة." → correct:false
1. ID 2656 — "عدم التوقف الا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع." → correct:false
2. ID 2657 — "عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى إلعاقة حركة المرور." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 922,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
    "answers": [
      {
        "id": "2842",
        "text": "التوقف في حال خلو الطريق من المركبات والمشاة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2844",
        "text": "عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى إلعاقة حركة المرور.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2843",
        "text": "عدم التوقف الا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2843"
    ],
    "quizOptionsAnswerMap": {
      "2842": "0",
      "2843": "1",
      "2844": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 635

- Our question text: اذا رايت هذه الشاخصة فانه عليك
- Section: قواعد اولويات المرور
- Image filename/mediaId: لقطة-الشاشة-2023-05-15-092215-2-1.png / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2658 — "عدم الدوران كون ذلك ممنوع ومن الممكن ان يواجهك مخاطر ناتجة عن عدم اتساع التقاطع." → correct:false
1. ID 2659 — "الدوران بعد التأكد من خلو الطريق من المركبات الاخرى." → correct:false
2. ID 2660 — "الدوران خلال اوقات المساء فقط." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 638

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-07-020847.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (عدم سلوك هذا الطريق كونه باتجاه واحد) — NOT applied

Our answer choices:

0. ID 2667 — "سلوك هذا الطريق بعد التأكد من خلوه من المركبات القادمة." → correct:false
1. ID 2668 — "عدم سلوك هذا الطريق كونه باتجاه واحد" → correct:false
2. ID 2669 — "لا شىء مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 926,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
    "answers": [
      {
        "id": "2855",
        "text": "عدم سلوك هذا الطريق كونه باتجاه واحد",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2856",
        "text": "لا شىء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2854",
        "text": "سلوك هذا الطريق بعد التأكد من خلوه من المركبات القادمة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2855"
    ],
    "quizOptionsAnswerMap": {
      "2854": "0",
      "2855": "1",
      "2856": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 640

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-07-020630.jpg / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2673 — "توقيف مركبتك والسماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور." → correct:false
1. ID 2674 — "تخفيف السرعة ومتابعة المسير كون أولوية المرور لك" → correct:false
2. ID 2675 — "لا شئ مما ذكر." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 641

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-07-020448.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (تخفيض سرعة مركبتك والسماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور.) — NOT applied

Our answer choices:

0. ID 2676 — "تخفيض سرعة مركبتك والسماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور." → correct:false
1. ID 2677 — "تخفيف السرعة ومتابعة سيرك وعدم السماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور لان اولوية المرور لك." → correct:false
2. ID 2678 — "ملاحظة وضع الطريق وبناءا عليه تسير او تعطي الاولوية للمركبات القادمة." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 929,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
    "answers": [
      {
        "id": "2864",
        "text": "تخفيف السرعة ومتابعة سيرك وعدم السماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور لان اولوية المرور لك.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2863",
        "text": "تخفيض سرعة مركبتك والسماح للمركبات الاخرى الموجودة في الاتجاه الاخر بالمرور.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2865",
        "text": "ملاحظة وضع الطريق وبناءا عليه تسير او تعطي الاولوية للمركبات القادمة.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2863"
    ],
    "quizOptionsAnswerMap": {
      "2863": "1",
      "2864": "0",
      "2865": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 642

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-07-020345.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (الالتزام بحدود السرعة لان الطريق ذات الاولوية انتهت) — NOT applied

Our answer choices:

0. ID 2679 — "زيادة سرعة مركبتك دون الالتزام بحدود السرعة." → correct:false
1. ID 2680 — "الوقوف التام بمركبتك." → correct:false
2. ID 2681 — "الالتزام بحدود السرعة لان الطريق ذات الاولوية انتهت" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 930,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
    "answers": [
      {
        "id": "2868",
        "text": "الالتزام بحدود السرعة لان الطريق ذات الاولوية انتهت",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2866",
        "text": "زيادة سرعة مركبتك دون الالتزام بحدود السرعة .",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2867",
        "text": "الوقوف التام بمركبتك.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2868"
    ],
    "quizOptionsAnswerMap": {
      "2866": "0",
      "2867": "0",
      "2868": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 646

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-06-222251.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (الالتزام بحدود السرعة المقررة بسبب الرياح الشديدة من جهة اليمين) — NOT applied

Our answer choices:

0. ID 2691 — "الالتزام بحدود السرعة المقررة بسبب الرياح الشديدة من جهة اليمين" → correct:false
1. ID 2692 — "الالتزام بحدود السرعة المقررة فقط." → correct:false
2. ID 2693 — "زيادة سرعتك عن حدود السرعة المقررة بسبب الرياح الشديدة من جهة اليسار." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 934,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
    "answers": [
      {
        "id": "2880",
        "text": "زيادة سرعتك عن حدود السرعة المقررة بسبب الرياح الشديدة من جهة اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2878",
        "text": "الالتزام بحدود السرعة المقررة بسبب الرياح الشديدة من جهة اليمين",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2879",
        "text": "الالتزام بحدود السرعة المقررة فقط.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2878"
    ],
    "quizOptionsAnswerMap": {
      "2878": "1",
      "2879": "0",
      "2880": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 650

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-06-050208.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (تخفيض سرعة مركبتك وترك مسافة أمان كافية بينك وبين المركبات الاخرى وعدم القيام بالتجاوز.) — NOT applied

Our answer choices:

0. ID 2703 — "زيادة سرعة مركبتك و المسافة بينك وبين المركبات الاخرى وعدم القيام بالتجاوز." → correct:false
1. ID 2704 — "تخفيض سرعة مركبتك وترك مسافة أمان كافية بينك وبين المركبات الاخرى والسماح بالتجاوز." → correct:false
2. ID 2705 — "تخفيض سرعة مركبتك وترك مسافة أمان كافية بينك وبين المركبات الاخرى وعدم القيام بالتجاوز." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 938,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
    "answers": [
      {
        "id": "2892",
        "text": "تخفيض سرعة مركبتك وترك مسافة أمان كافية بينك وبين المركبات الاخرى وعدم القيام بالتجاوز.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2890",
        "text": "زيادة سرعة مركبتك و المسافة بينك وبين المركبات الاخرى وعدم القيام بالتجاوز.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2891",
        "text": "تخفيض سرعة مركبتك وترك مسافة أمان كافية بينك وبين المركبات الاخرى والسماح بالتجاوز.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2892"
    ],
    "quizOptionsAnswerMap": {
      "2890": "0",
      "2891": "0",
      "2892": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 651

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-06-050105.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (تخفيض سرعة مركبتك والالتزام بمسربك وعدم التجاوز.) — NOT applied

Our answer choices:

0. ID 2706 — "تخفيض سرعة مركبتك والالتزام بمسربك وعدم التجاوز." → correct:false
1. ID 2707 — "زيادة سرعة مركبتك والالتزام بمسربك وعدم التجاوز." → correct:false
2. ID 2708 — "تخفيض سرعة مركبتك وتغيير مسربك الى المسرب المناسب وعدم التجاوز" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 939,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
    "answers": [
      {
        "id": "2893",
        "text": "تخفيض سرعة مركبتك والالتزام بمسربك وعدم التجاوز.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2895",
        "text": "تخفيض سرعة مركبتك وتغيير مسربك الى المسرب المناسب وعدم التجاوز",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2894",
        "text": "زيادة سرعة مركبتك والالتزام بمسربك وعدم التجاوز.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2893"
    ],
    "quizOptionsAnswerMap": {
      "2893": "1",
      "2894": "0",
      "2895": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 652

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-06-045701-3.jpg / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2709 — "تخفيض سرعة مركبتك والالتزام بالمسرب الايمن وإعطاء الاولوية للمركبات التي تملك حق الاولوية." → correct:false
1. ID 2710 — "تخفيض سرعة مركبتك والالتزام بالمسرب الايسر وإعطاء الاولوية للمركبات التي تملك حق الاولوية." → correct:false
2. ID 2711 — "تخفيض سرعة مركبتك والالتزام بالمسرب المناسب وإعطاء الاولوية للمركبات التي تملك حق الاولوية" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 657

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-06-044015.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (ملائمة سرعة مركبتك مع هذا المرتفع والالتزام بحدود السرعة المقررة والتزام الجانب الايمن من الطريق.) — NOT applied

Our answer choices:

0. ID 2724 — "ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال الغيارات العكسية." → correct:false
1. ID 2725 — "ملائمة سرعة مركبتك مع هذا المرتفع والالتزام بحدود السرعة المقررة والتزام الجانب الايمن من الطريق." → correct:false
2. ID 2726 — "ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال المكابح." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 945,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :",
    "answers": [
      {
        "id": "2913",
        "text": "ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال المكابح.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2912",
        "text": "ملائمة سرعة مركبتك مع هذا المرتفع والالتزام بحدود السرعة المقررة والتزام الجانب الايمن من الطريق.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2911",
        "text": "ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال الغيارات العكسية.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2912"
    ],
    "quizOptionsAnswerMap": {
      "2911": "0",
      "2912": "1",
      "2913": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 658

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة .
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-06-044126.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال الغيارات العكسية) — NOT applied

Our answer choices:

0. ID 2727 — "ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال الغيارات العكسية" → correct:false
1. ID 2728 — "ملائمة سرعة مركبتك مع هذا المرتفع والالتزام بحدود السرعة المقررة والتزام الجانب الايمن من الطريق." → correct:false
2. ID 2729 — "ملائمة سرعة مركبتك مع هذا المنحدر وزيادة السرعة عن المقررة واستعمال الغيارات العكسية." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 946,
    "question": "الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة .",
    "answers": [
      {
        "id": "2915",
        "text": "ملائمة سرعة مركبتك مع هذا المرتفع والالتزام بحدود السرعة المقررة والتزام الجانب الايمن من الطريق.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2916",
        "text": "ملائمة سرعة مركبتك مع هذا المنحدر وزيادة السرعة عن المقررة واستعمال الغيارات العكسية.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2914",
        "text": "ملائمة سرعة مركبتك مع هذا المنحدر والالتزام بحدود السرعة المقررة واستعمال الغيارات العكسية",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2914"
    ],
    "quizOptionsAnswerMap": {
      "2914": "1",
      "2915": "0",
      "2916": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 659

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-06-043908.jpg / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2730 — "زيادة سرعة مركبتك، لتتناسب مع سرعة المنعطف والسماح بالتجاوز." → correct:false
1. ID 2731 — "تخفيض سرعة مركبتك، لتتناسب مع سرعة المنعطفات وعدم التجاوز" → correct:false
2. ID 2732 — "ايقاف مركبتك ثم التحرك ببطء نحو المنعطف لدخوله بأمان ومنع التجاوز" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 660

- Our question text: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-06-043630.jpg / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2733 — "زيادة سرعة مركبتك، لتتناسب مع سرعة المنعطف والسماح بالتجاوز." → correct:false
1. ID 2734 — "تخفيض سرعة مركبتك، لتتناسب مع سرعة المنعطف وعدم التجاوز" → correct:false
2. ID 2735 — "ايقاف مركبتك ثم التحرك ببطء نحو المنعطف لدخوله بأمان ومنع التجاوز" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 662

- Our question text: ان سائق المركبة الحمراء لا يزعج بضوئه سائق المركبة الموجودة في الامام (الخضراء) و ذلك لانه لا يسير ملاصقا له
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-035937.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 2738 — "نعم" → correct:false
1. ID 2739 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 950,
    "question": "ان سائق المركبة الحمراء لا يزعج بضوئه سائق المركبة الموجودة في الامام (الخضراء) و ذلك لانه لا يسير ملاصقا له",
    "answers": [
      {
        "id": "2926",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2925",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2925"
    ],
    "quizOptionsAnswerMap": {
      "2925": "1",
      "2926": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 663

- Our question text: ان الرياح التي تؤثر على المركبة اثناء عملية التجاوز كما هو مبين بالرسم
- Section: قواعد اولويات المرور
- Image filename/mediaId: رياح-طبيعية-1-275x300.png / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (رياح طبيعية) — NOT applied

Our answer choices:

0. ID 2740 — "رياح طبيعية" → correct:false
1. ID 2741 — "رياح التفريغ" → correct:false
2. ID 2742 — "لا شئ مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 951,
    "question": "ان الرياح التي تؤثر على المركبة اثناء عملية التجاوز كما هو مبين بالرسم",
    "answers": [
      {
        "id": "2928",
        "text": "رياح التفريغ",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2927",
        "text": "رياح طبيعية",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2929",
        "text": "لا شئ مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2927"
    ],
    "quizOptionsAnswerMap": {
      "2927": "1",
      "2928": "0",
      "2929": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 664

- Our question text: في حالة وقوف المركبة على مرتفع بدون رصيف يجب ان يقوم السائق بلف المقود على اليمين هل هذا الاجراء صحيح :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-035657.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 2743 — "نعم" → correct:false
1. ID 2744 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 952,
    "question": "في حالة وقوف المركبة على مرتفع بدون رصيف يجب ان يقوم السائق بلف المقود على اليمين هل هذا الاجراء صحيح :",
    "answers": [
      {
        "id": "2931",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2930",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2930"
    ],
    "quizOptionsAnswerMap": {
      "2930": "1",
      "2931": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 665

- Our question text: إذا كانت المركبة التي امامك تقف على منحدر بدون رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screnshot-2023-03-08-035433.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 2745 — "نعم" → correct:false
1. ID 2746 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 953,
    "question": "إذا كانت المركبة التي امامك تقف على منحدر بدون رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:",
    "answers": [
      {
        "id": "2933",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2932",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2932"
    ],
    "quizOptionsAnswerMap": {
      "2932": "1",
      "2933": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 666

- Our question text: إذا كانت المركبة التي امامك تقف على منحدر مع وجود رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-035433.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 2747 — "نعم" → correct:false
1. ID 2748 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 954,
    "question": "إذا كانت المركبة التي امامك تقف على منحدر مع وجود رصيف فإن وضعية عجلات المركبة تكون كما في الشكل:",
    "answers": [
      {
        "id": "2935",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2934",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2934"
    ],
    "quizOptionsAnswerMap": {
      "2934": "1",
      "2935": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 667

- Our question text: في الصورة التي أمامك يريد السائق ان يهدء السرعة :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-035328.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 2749 — "نعم" → correct:false
1. ID 2750 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 955,
    "question": "في الصورة التي أمامك يريد السائق ان يهدء السرعة :",
    "answers": [
      {
        "id": "2936",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2937",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2936"
    ],
    "quizOptionsAnswerMap": {
      "2936": "1",
      "2937": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 668

- Our question text: استخدام الضوء الرباعي (الفلشر) يعني :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-035224.jpg / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2751 — "التوجه الى اليمين" → correct:false
1. ID 2752 — "التوجه الى اليسار." → correct:false
2. ID 2753 — "تخفيف السرعة يوجد خطر أمامك." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 669

- Our question text: في الصورة التي امامك يريد السائق التوجه الى :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-035101.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (التوجه الى اليمين.) — NOT applied

Our answer choices:

0. ID 2754 — "التوجه الى اليمين." → correct:false
1. ID 2755 — "التوجه الى اليسار." → correct:false
2. ID 2756 — "تخفيف السرعة." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 957,
    "question": "في الصورة التي امامك يريد السائق التوجه الى :",
    "answers": [
      {
        "id": "2943",
        "text": "تخفيف السرعة.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2942",
        "text": "التوجه الى اليسار.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2941",
        "text": "التوجه الى اليمين.",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2941"
    ],
    "quizOptionsAnswerMap": {
      "2941": "1",
      "2942": "0",
      "2943": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 670

- Our question text: في الصورة التي امامك يريد السائق التوجه:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-035000.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (الى اليسار.) — NOT applied

Our answer choices:

0. ID 2757 — "الى اليمين." → correct:false
1. ID 2758 — "الى اليسار." → correct:false
2. ID 2759 — "تخفيف السرعة" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 958,
    "question": "في الصورة التي امامك يريد السائق التوجه:",
    "answers": [
      {
        "id": "2945",
        "text": "الى اليسار.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2944",
        "text": "الى اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2946",
        "text": "تخفيف السرعة",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2945"
    ],
    "quizOptionsAnswerMap": {
      "2944": "0",
      "2945": "1",
      "2946": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 672

- Our question text: في الصورة التي امامك وقوف المركبات صحيح:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-034810.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 2762 — "نعم" → correct:false
1. ID 2763 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 960,
    "question": "في الصورة التي امامك وقوف المركبات صحيح:",
    "answers": [
      {
        "id": "2949",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2950",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2949"
    ],
    "quizOptionsAnswerMap": {
      "2949": "1",
      "2950": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 673

- Our question text: في الصورة التي امامك وقوف المركبة الصفراء صحيح:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-034728.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 2764 — "نعم" → correct:false
1. ID 2765 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 963,
    "question": "في الصورة التي امامك وقوف المركبة الصفراء صحيح ؟",
    "answers": [
      {
        "id": "2955",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2956",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2956"
    ],
    "quizOptionsAnswerMap": {
      "2955": "0",
      "2956": "1"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 674

- Our question text: في الصورة التي امامك وقوف المركبة رقم (1) صحيح:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-034614.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 2766 — "نعم" → correct:false
1. ID 2767 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 962,
    "question": "في الصورة التي امامك وقوف المركبة رقم (1) صحيح:",
    "answers": [
      {
        "id": "2954",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2953",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2954"
    ],
    "quizOptionsAnswerMap": {
      "2953": "0",
      "2954": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 675

- Our question text: في الصورة التي امامك وقوف المركبة الصفراء صحيح ؟
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-034519.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 2768 — "نعم" → correct:false
1. ID 2769 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 963,
    "question": "في الصورة التي امامك وقوف المركبة الصفراء صحيح ؟",
    "answers": [
      {
        "id": "2955",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2956",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2956"
    ],
    "quizOptionsAnswerMap": {
      "2955": "0",
      "2956": "1"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 676

- Our question text: في الصورة التي امامك تقف المركبة الحمراء في المكان الصحيح:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-034428.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 2770 — "نعم" → correct:false
1. ID 2771 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 964,
    "question": "في الصورة التي امامك تقف المركبة الحمراء في المكان الصحيح:",
    "answers": [
      {
        "id": "2958",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2957",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2957"
    ],
    "quizOptionsAnswerMap": {
      "2957": "1",
      "2958": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 677

- Our question text: في الصورة التي امامك وقوف المركبة الزرقاء صحيح:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-034349.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 2772 — "نعم" → correct:false
1. ID 2773 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 965,
    "question": "في الصورة التي امامك وقوف المركبة الزرقاء صحيح:",
    "answers": [
      {
        "id": "2959",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2960",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2960"
    ],
    "quizOptionsAnswerMap": {
      "2959": "0",
      "2960": "1"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 678

- Our question text: في الصورة التي امامك الوقوف للمركبة صحيح:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-034251.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 2774 — "نعم" → correct:false
1. ID 2775 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 966,
    "question": "في الصورة التي امامك الوقوف للمركبة صحيح:",
    "answers": [
      {
        "id": "2962",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2961",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2961"
    ],
    "quizOptionsAnswerMap": {
      "2961": "1",
      "2962": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 679

- Our question text: في الصورة التي امامك الوقوف صحيح:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-034143-1.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 2776 — "نعم" → correct:false
1. ID 2777 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 967,
    "question": "في الصورة التي امامك الوقوف صحيح:",
    "answers": [
      {
        "id": "2964",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2963",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2964"
    ],
    "quizOptionsAnswerMap": {
      "2963": "0",
      "2964": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 680

- Our question text: في الصورة التي امامك وقوف المركبة صحيح
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-034043.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 2778 — "نعم" → correct:false
1. ID 2779 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 968,
    "question": "في الصورة التي امامك وقوف المركبة صحيح",
    "answers": [
      {
        "id": "2966",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2965",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2965"
    ],
    "quizOptionsAnswerMap": {
      "2965": "1",
      "2966": "0"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 682

- Our question text: في الصورة التي امامك هل تتجاوز المركبة الزرقاء بشكل صحيح:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-033358-1.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (لا.) — NOT applied

Our answer choices:

0. ID 2783 — "نعم." → correct:false
1. ID 2784 — "لا." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 970,
    "question": "في الصورة التي امامك هل تتجاوز المركبة الزرقاء بشكل صحيح:",
    "answers": [
      {
        "id": "2971",
        "text": "لا .",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2970",
        "text": "نعم .",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2971"
    ],
    "quizOptionsAnswerMap": {
      "2970": "0",
      "2971": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 683

- Our question text: في الصورة التي امامك المركبة الصفراء تتجاوز بشكل صحيح:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-033604.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 2785 — "نعم" → correct:false
1. ID 2786 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 971,
    "question": "في الصورة التي امامك المركبة الصفراء تتجاوز بشكل صحيح:",
    "answers": [
      {
        "id": "2972",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2973",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2973"
    ],
    "quizOptionsAnswerMap": {
      "2972": "0",
      "2973": "1"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 684

- Our question text: من خلال الرسم الموضح نجد أن :
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-033209.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (السيارتين الصفراء او الحمراء خارج رؤية السيارة الزرقاء وتسمى هذه الحالة بالنقطة العمياء.) — NOT applied

Our answer choices:

0. ID 2787 — "السيارة الصفراء ضمن رؤية المركبة الزرقاء." → correct:false
1. ID 2788 — "السيارة الحمراء ضمن رؤية المركبة الزرقاء." → correct:false
2. ID 2789 — "السيارتين الصفراء او الحمراء خارج رؤية السيارة الزرقاء وتسمى هذه الحالة بالنقطة العمياء." → correct:false
3. ID 2790 — "لا شيء مما ذكر" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 972,
    "question": "من خلال الرسم الموضح نجد أن :",
    "answers": [
      {
        "id": "2976",
        "text": "السيارتين الصفراء او الحمراء خارج رؤية السيارة الزرقاء وتسمى هذه الحالة بالنقطة العمياء.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2974",
        "text": "السيارة الصفراء ضمن رؤية المركبة الزرقاء.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2977",
        "text": "لا شيء مما ذكر",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2975",
        "text": "السيارة الحمراء ضمن رؤية المركبة الزرقاء.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2976"
    ],
    "quizOptionsAnswerMap": {
      "2974": "0",
      "2975": "0",
      "2976": "1",
      "2977": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 685

- Our question text: في الصورة التي امامك التصرف الذي تقوم به المركبة صحيح:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-033126.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 2791 — "نعم" → correct:false
1. ID 2792 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 973,
    "question": "في الصورة التي امامك التصرف الذي تقوم به المركبة صحيح:",
    "answers": [
      {
        "id": "2978",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2979",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2979"
    ],
    "quizOptionsAnswerMap": {
      "2978": "0",
      "2979": "1"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 686

- Our question text: في الصورة التي امامك التصرف الذي تقوم به المركبة صحيح:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-033037.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 2793 — "نعم" → correct:false
1. ID 2794 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 973,
    "question": "في الصورة التي امامك التصرف الذي تقوم به المركبة صحيح:",
    "answers": [
      {
        "id": "2978",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2979",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2979"
    ],
    "quizOptionsAnswerMap": {
      "2978": "0",
      "2979": "1"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 687

- Our question text: في الصورة التي امامك المركبة رقم ( 2 ) يعتبر تجاوزها صحيحا:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-032942-300x109.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 2795 — "نعم" → correct:false
1. ID 2796 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 975,
    "question": "في الصورة التي امامك المركبة رقم ( 2 ) يعتبر تجاوزها صحيحا:",
    "answers": [
      {
        "id": "2983",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "2982",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2983"
    ],
    "quizOptionsAnswerMap": {
      "2982": "0",
      "2983": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 688

- Our question text: في الصورة التي امامك هل تصرف المركبة الزرقاء صحيح
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-032848.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer texts in same order
  - yes/no question rejected without identical answer IDs or image basename match
  - would-be mapped answer index 1 (لا) — NOT applied

Our answer choices:

0. ID 2797 — "نعم" → correct:false
1. ID 2798 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 976,
    "question": "في الصورة التي امامك هل تصرف المركبة الزرقاء صحيح",
    "answers": [
      {
        "id": "2984",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2985",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2985"
    ],
    "quizOptionsAnswerMap": {
      "2984": "0",
      "2985": "1"
    },
    "score": 8,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer texts in same order"
    ]
  }
}
```

### Question ID 689

- Our question text: في الصورة التي امامك يجب على المركبة الصفراء:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-032712.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (التوقف للافساح للشاحنة بالالتفاف) — NOT applied

Our answer choices:

0. ID 2799 — "التوقف للافساح للشاحنة بالالتفاف" → correct:false
1. ID 2800 — "الالتفاف إلى اليمين." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 977,
    "question": "في الصورة التي امامك يجب على المركبة الصفراء:",
    "answers": [
      {
        "id": "2987",
        "text": "الالتفاف إلى اليمين.",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2986",
        "text": "التوقف للافساح للشاحنة بالالتفاف",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2986"
    ],
    "quizOptionsAnswerMap": {
      "2986": "1",
      "2987": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 692

- Our question text: في الصورة التي امامك يجب على المركبة رقم ( 1 )اخذ اقصى اليمين:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-032314-300x93-1.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - yes/no question rejected without identical answer IDs or image basename match
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 0 (نعم) — NOT applied

Our answer choices:

0. ID 2805 — "نعم" → correct:false
1. ID 2806 — "لا" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 980,
    "question": "في الصورة التي امامك يجب على المركبة رقم ( 1 )اخذ اقصى اليمين:",
    "answers": [
      {
        "id": "2993",
        "text": "لا",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "2992",
        "text": "نعم",
        "correctFlag": false,
        "correctFromOptions": true
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "2992"
    ],
    "quizOptionsAnswerMap": {
      "2992": "1",
      "2993": "0"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 693

- Our question text: في الصورة التي امامك من يتصرف بشكل خاطئ:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-030519.jpg / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2807 — "سائق المركبة" → correct:false
1. ID 2808 — "المشاة." → correct:false
2. ID 2809 — "أ+ب" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 694

- Our question text: في الصورة التي امامك تبين شخص من ذوي الاحتياجات الخاصة يقطع الشارع فان على السائق ان:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-030329-1.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (الوقوف التام لحين مرور الشخص المقعد.) — NOT applied

Our answer choices:

0. ID 2810 — "يتجاوز عنه" → correct:false
1. ID 2811 — "الاستمرار في المرور مع تنبيه الكفيف بالزامور" → correct:false
2. ID 2812 — "الوقوف التام لحين مرور الشخص المقعد." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 993,
    "question": "في الصورة التي امامك تبين شخص من ذوي الاحتياجات الخاصة يقطع الشارع فان على السائق ان:",
    "answers": [
      {
        "id": "3024",
        "text": "الوقوف التام لحين مرور الشخص المقعد.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "3023",
        "text": "الاستمرار في المرور مع تنبيه الكفيف بالزامور",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "3022",
        "text": "يتجاوز عنه",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "3024"
    ],
    "quizOptionsAnswerMap": {
      "3022": "0",
      "3023": "0",
      "3024": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 695

- Our question text: في الصورة التي امامك تبين كفيف يقطع الشارع على السائق ان:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-030218-1.jpg / n/a
- Confidence: key-found-identity-too-weak
- Evidence:
  - external key exists but identity evidence is not strong enough to recover safely
  - exact normalized question text
  - identical normalized answer text set
  - answer texts match as unordered set only (order differs) — rejected for strong recovery
  - would-be mapped answer index 2 (الوقوف التام لحين مرور الكفيف.) — NOT applied

Our answer choices:

0. ID 2813 — "يتجاوز عنه." → correct:false
1. ID 2814 — "الاستمرار في المرور مع تنبيه الكفيف بالزامور" → correct:false
2. ID 2815 — "الوقوف التام لحين مرور الكفيف." → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": {
    "id": 994,
    "question": "في الصورة التي امامك تبين كفيف يقطع الشارع على السائق ان:",
    "answers": [
      {
        "id": "3027",
        "text": "الوقوف التام لحين مرور الكفيف.",
        "correctFlag": false,
        "correctFromOptions": true
      },
      {
        "id": "3026",
        "text": "الاستمرار في المرور مع تنبيه الكفيف بالزامور",
        "correctFlag": false,
        "correctFromOptions": false
      },
      {
        "id": "3025",
        "text": "يتجاوز عنه.",
        "correctFlag": false,
        "correctFromOptions": false
      }
    ],
    "optionsOnesCount": 1,
    "optionsOnesInMap": [
      "3027"
    ],
    "quizOptionsAnswerMap": {
      "3025": "0",
      "3026": "0",
      "3027": "1"
    },
    "score": 7,
    "evidence": [
      "exact normalized question text",
      "identical normalized answer text set"
    ]
  }
}
```

### Question ID 696

- Our question text: في الصورة التي امامك تبين الظروف الجوية الغير ملائمة لوجود الضباب و الامطار فعلى السائق ان:
- Section: قواعد اولويات المرور
- Image filename/mediaId: Screenshot-2023-03-08-030045.jpg / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2816 — "يخفف السرعة." → correct:false
1. ID 2817 — "اعطاء المزيد من الوقت عندما يقترب من ممر المشاة" → correct:false
2. ID 2818 — "يتابع المسير في نفس السرعة." → correct:false
3. ID 2819 — "أ + ب" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 700

- Our question text: تصرف سائق المركبة الحمراء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2830 — "صحيح" → correct:false
1. ID 2831 — "خاطىء" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 701

- Our question text: ما قام به سائق المركبة الحمراء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2832 — "صحيح" → correct:false
1. ID 2833 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 702

- Our question text: ما قام به سائق التكسي:
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2834 — "صحيح" → correct:false
1. ID 2835 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 703

- Our question text: ما قام به سائق المركبة الحمراء :
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2836 — "صحيح" → correct:false
1. ID 2837 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 704

- Our question text: ما قام به سائق المركبة الحمراء:
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2838 — "صحيح" → correct:false
1. ID 2839 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 705

- Our question text: المسار الذي سلكه سائق المركبة للانتقال من النقطة (1) الى النقطة (2)
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2840 — "صحيح" → correct:false
1. ID 2841 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 706

- Our question text: ما قام به سائق المركبة الحمراء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2842 — "صحيح" → correct:false
1. ID 2843 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 707

- Our question text: ما قام به سائق المركبة الحمراء :
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2844 — "صحيح" → correct:false
1. ID 2845 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 708

- Our question text: تصرف سائق المركبة الحمراء صحيح:
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2846 — "صحيح" → correct:false
1. ID 2847 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 709

- Our question text: تصرف سائق المركبة البيضاء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2848 — "صحيح" → correct:false
1. ID 2849 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 710

- Our question text: تصرف سائق التكسي صحيح
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2850 — "صحيح" → correct:false
1. ID 2851 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 711

- Our question text: تصرف سائق المركبة الحمراء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2852 — "صحيح" → correct:false
1. ID 2853 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 712

- Our question text: ما قام به سائق المركبة الصفراء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2854 — "صحيح" → correct:false
1. ID 2855 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 713

- Our question text: تصرف سائق المركبة الحمراء :
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2856 — "صحيح" → correct:false
1. ID 2857 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 714

- Our question text: تصرف سائق المركبة الحمراء :
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2858 — "صحيح" → correct:false
1. ID 2859 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 715

- Our question text: تصرف سائق المركبة الحمراء بشكل :
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2860 — "صحيح لانه سار في مسرب التسارع" → correct:false
1. ID 2861 — "خاطئ لانه تعدى على اولوية السيارة البيضاء" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 716

- Our question text: ما قام به سائق المركبة الحمراء يعتبر تصرف :
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2862 — "صحيح" → correct:false
1. ID 2863 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 717

- Our question text: تصرف سائق المركبة الحمراء بشكل
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2864 — "صحيح" → correct:false
1. ID 2865 — "خاطئ لان الاولوية للحافلة ثم له ثم للدراجة" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 718

- Our question text: ما قام به سائق المركبة الحمراء يعتبر تصرف
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2866 — "خاطئ لانه لم يلتزم بشاخصة ممنوع المرور" → correct:false
1. ID 2867 — "صحيح لانه لا يوجد سيارات اخرى في الشارع" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 719

- Our question text: وقوف المركبة الحمراء بهذا الشكل يعتبر
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2868 — "صحيح" → correct:false
1. ID 2869 — "خاطيء" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 720

- Our question text: ما قام به سائق الحافلة يعتبر تصرف
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2870 — "صحيح لانه الاكبر حجماً" → correct:false
1. ID 2871 — "خاطيء لان الاولوية ليست له" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 721

- Our question text: إجراء سائق المركبة الحمراء يعتبر إجراء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2872 — "صحيح" → correct:false
1. ID 2873 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 722

- Our question text: اجراء سائق المركبة الحمراء يعتبر اجراء :
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2874 — "صحيح" → correct:false
1. ID 2875 — "خاطيء" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 723

- Our question text: اجراء سائق التكسي يعتبر اجراء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2876 — "صحيح" → correct:false
1. ID 2877 — "خاطيء" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 724

- Our question text: اجراء سائق المركبة يعتبر اجراء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2878 — "صحيح" → correct:false
1. ID 2879 — "خاطيء" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 725

- Our question text: تصرف صاحب السيارة الزرقاء يعتبر تصرف:
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2880 — "صحيح" → correct:false
1. ID 2881 — "خاطئ لوجود شاخصة منع التجاوز" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 726

- Our question text: يعتبر تصرف سائق السيارة الزرقاء تصرف
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2882 — "صحيح" → correct:false
1. ID 2883 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 727

- Our question text: يعتبر تجاوز السيارة الزرقاء تجاوزاً
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2884 — "صحيح" → correct:false
1. ID 2885 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 728

- Our question text: يعتبر تجاوز السيارة الزرقاء تجاوزاً:
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2886 — "صحيح" → correct:false
1. ID 2887 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 729

- Our question text: اي سيارة من السيارات التالية يعتبر تصرفها تصرف خاطئ
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2888 — "الزرقاء" → correct:false
1. ID 2889 — "الحمراء" → correct:false
2. ID 2890 — "كلاهما" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 730

- Our question text: يعتبر تصرف سائق السيارة الزرقاء تصرف
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2891 — "صحيح" → correct:false
1. ID 2892 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 731

- Our question text: يعتبر تصرف سائق السيارة الخضراء :
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2893 — "صحيح" → correct:false
1. ID 2894 — "خاطيء" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 732

- Our question text: يعتبر تجاوز السيارة الخضراء تجاوز
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2895 — "صحيح" → correct:false
1. ID 2896 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 733

- Our question text: تجاوز السيارة الحمراء يعتبر تجاوز
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2897 — "صحيح" → correct:false
1. ID 2898 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 735

- Our question text: تجاوز السيارة الزرقاء يعتبر تجاوز:
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2901 — "صحيح" → correct:false
1. ID 2902 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 736

- Our question text: تصرف سائق السيارة الحمراء يعتبر تصرف :
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2903 — "صحيح" → correct:false
1. ID 2904 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 737

- Our question text: تصرف سائق السيارة الحمراء يعتبر تصرف :
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2905 — "صحيح" → correct:false
1. ID 2906 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 738

- Our question text: يعتبر تصرف سائق السيارة الحمراء في اعطاء الاولوية للسيارة الزرقاء تصرف
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2907 — "صحيح" → correct:false
1. ID 2908 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 739

- Our question text: اي من السيارات التالية تصرفت بشكل صحيح عند ممر المشاة
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2909 — "السوداء" → correct:false
1. ID 2910 — "البيضاء" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 740

- Our question text: تكون الاولوية عند ممرات المشاة بدون وجود اشارة مرور
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2911 — "للسيارات" → correct:false
1. ID 2912 — "للمشاة" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 741

- Our question text: يعتبر تصرف سائق السيارة الزرقاء تصرف
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2913 — "صحيح" → correct:false
1. ID 2914 — "خاطيء" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 742

- Our question text: يعتبر تصرف سائق السيارة السوداء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2915 — "صحيح" → correct:false
1. ID 2916 — "خاطيء" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 743

- Our question text: يعتبر تصرف سائق السيارة السوداء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2917 — "صحيح" → correct:false
1. ID 2918 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 744

- Our question text: ما قام به سائق السيارة الحمراء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2919 — "صحيح" → correct:false
1. ID 2920 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 745

- Our question text: ما قام به سائق السيارة الحمراء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2921 — "صحيح" → correct:false
1. ID 2922 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 746

- Our question text: تصرف السيارة الخضراء يعتبر تصرف
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2923 — "صحيح" → correct:false
1. ID 2924 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 747

- Our question text: تصرف السيارتين التاليتين للخروج من الدوار يعتبر تصرف
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2925 — "صحيح" → correct:false
1. ID 2926 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 748

- Our question text: يعتبر تصرف سائق السيارة التالية تصرف
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2927 — "صحيح" → correct:false
1. ID 2928 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 749

- Our question text: يعتبر تصرف سائق السيارة:
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2929 — "صحيح" → correct:false
1. ID 2930 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 750

- Our question text: ما قام به سائق السيارة البيضاء
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2931 — "صحيح" → correct:false
1. ID 2932 — "خاطئ" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

### Question ID 752

- Our question text: قام السائق بفحص نسبة الزيت في سيارته فوجده كالتالي
- Section: اسئلة الجزء السابع للفحص النظري
- Image filename/mediaId: n/a / n/a
- Confidence: none
- Evidence:
  - no strong external question match (require answer-text alignment + exact question text or identical answer IDs; yes/no also needs answer IDs or image)

Our answer choices:

0. ID 2936 — "نسبة الزيت في السيارة مناسبة" → correct:false
1. ID 2937 — "يجب زيادة نسبة الزيت في السيارة" → correct:false
2. ID 2938 — "يجب تقليل الزيت في السيارة" → correct:false

Matched external question:

```json
{
  "trainingdriving": null,
  "alqemah": null
}
```

