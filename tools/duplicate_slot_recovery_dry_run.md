# Duplicate-ID Slot-Scoped Recovery Dry-Run

Generated: 2026-08-11T19:47:30.399Z

**Status: DRY-RUN ONLY — `data/questions.js` not modified.**

## Summary

- Candidates evaluated: **4** (max 4)
- APPLY: **4**
- REJECT: **0**
- APPLY slots: 1:96:616, 5:16:616, 1:97:617, 1:98:635
- REJECT slots: (none)

## Methodology

- SLOT-SCOPED dry-run only; data/questions.js not modified.
- Candidates taken from tools/next_273_answer_audit.json.
- Match requires: exact slotKey in bank, section, normalized question text, complete ordered answer texts, proposed answer exact+unique in that slot, STRONG/HIGH classification, external mapped evidence.
- Reject if another slot with same ID has identical question+answers (ambiguity).
- Question ID alone is never identity.

## Candidates

### 1:96:616 — **APPLY**

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question ID (not identity): 616
- Classification: HIGH_CONFIDENCE (high)
- Question: واحدة من الامور التي تساعد على زيادة إستهلاك البنزين:
- Choices: [0] الابتعاد عن الاختناقات المرورية | [1] الضغط المنخفض للهواء بالاطارات | [2] تغير السرعات يتم بنقل الحركة من سرعة الى اخرى فى الوقت المناسب
- Proposed correct answer: الضغط المنخفض للهواء بالاطارات (index 1, answerId 1786)
- External sources: alqemah → "الضغط المنخفض للهواء بالاطارات"
- Exact slot-scoped matching succeeds: true
- Decision: **APPLY**
- Reason: slot-scoped identity confirmed: slotKey + section + normalized question + ordered answers + exact proposed text + STRONG/HIGH external evidence; no ambiguous twin slot

### 5:16:616 — **APPLY**

- Section: قواعد اولويات المرور
- Question ID (not identity): 616
- Classification: HIGH_CONFIDENCE (high)
- Question: واحدة من التالية ليست من وظيفة الاطارات
- Choices: [0] تحمل الصدمات. | [1] رفع الاحمال. | [2] تزويد المركبة بالطاقة من خلال الحركة. | [3] ايقاف المركبة
- Proposed correct answer: تزويد المركبة بالطاقة من خلال الحركة. (index 2, answerId 2601)
- External sources: alqemah → "تزويد المركبة بالطاقة من خلال الحركة."
- Exact slot-scoped matching succeeds: true
- Decision: **APPLY**
- Reason: slot-scoped identity confirmed: slotKey + section + normalized question + ordered answers + exact proposed text + STRONG/HIGH external evidence; no ambiguous twin slot

### 1:97:617 — **APPLY**

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question ID (not identity): 617
- Classification: HIGH_CONFIDENCE (high)
- Question: عند تشغيل المركبة يوميا و قبل الانطلاق يجب :
- Choices: [0] التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية). | [1] تفقد صلاحية الاطارات وشد الصواميل. | [2] التأكد من زيت الجير والمحور الخلفي
- Proposed correct answer: التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية). (index 0, answerId 1788)
- External sources: alqemah → "التأكد من صلاحية الاضوية (ضوء أمامي، ضوء بريك، ضوء الرجوع الى الخلف (الريفرس)، (الغمازات،  الاضوية الخلفية)."
- Exact slot-scoped matching succeeds: true
- Decision: **APPLY**
- Reason: slot-scoped identity confirmed: slotKey + section + normalized question + ordered answers + exact proposed text + STRONG/HIGH external evidence; no ambiguous twin slot

### 1:98:635 — **APPLY**

- Section: وسائل الامان في المركبات والاسعافات الاولية
- Question ID (not identity): 635
- Classification: STRONG (high)
- Question: المشاة هم :
- Choices: [0] الذين يسيرون على اقدامهم. | [1] سائقوا الدراجات الهوائية . | [2] اي شخص يدفع أو يجر عربة اطفال او عربة مريض او مقعد او عربة يد. | [3] جميع ما ذكر
- Proposed correct answer: جميع ما ذكر (index 3, answerId 1836)
- External sources: morortest → "جميع ما ذكر"; alqemah → "جميع ما ذكر"
- Exact slot-scoped matching succeeds: true
- Decision: **APPLY**
- Reason: slot-scoped identity confirmed: slotKey + section + normalized question + ordered answers + exact proposed text + STRONG/HIGH external evidence; no ambiguous twin slot

