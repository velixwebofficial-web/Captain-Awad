# Conflict + Likely Resolution (Final Audit)

Generated: 2026-08-11T20:26:31.590Z

**Status: AUDIT ONLY — `data/questions.js` / `app.js` / `styles.css` not modified.**

## Scope

- Conflict cases = **18**
- Likely cases = **3**
- NO_MATCH excluded = **90** (not investigated here)

## Summary

| Classification | Count |
|---|---:|
| VERIFIED | **14** |
| STILL_CONFLICT | **6** |
| LIKELY | **1** |
| UNRESOLVED | **0** |

### VERIFIED slotKeys

- `0:16:181` (Q181) → index 0: ممنوع مرور المركبات بالاتجاهين
- `0:53:143` (Q143) → index 0: انخفاض في مستوى الطريق
- `0:84:115` (Q115) → index 0: نعم
- `5:0:600` (Q600) → index 0: للمركبة رقم 1.
- `5:1:601` (Q601) → index 1: للمركبة رقم 2
- `5:2:602` (Q602) → index 1: للمركبة رقم 2
- `5:3:603` (Q603) → index 0: للمركبة رقم 1.
- `5:4:604` (Q604) → index 0: للمركبة رقم 1.
- `5:6:606` (Q606) → index 1: للمركبة رقم 2
- `5:33:633` (Q633) → index 2: عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى لاعاقة حركة المرور
- `5:34:634` (Q634) → index 1: عدم التوقف الا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع.
- `5:68:668` (Q668) → index 2: تخفيف السرعة يوجد خطر أمامك.
- `5:70:670` (Q670) → index 1: الى اليسار.
- `5:79:679` (Q679) → index 1: لا

### STILL_CONFLICT slotKeys

- `1:99:634` (Q634)
- `2:50:252` (Q252)
- `2:51:251` (Q251)
- `5:5:605` (Q605)
- `5:90:690` (Q690)
- `5:91:691` (Q691)

### LIKELY slotKeys

- `5:63:663` (Q663) → proposed index 0: رياح طبيعية

## Per-case results

### Q181 (0:16:181) — **VERIFIED**

- Section: الجزء الاول
- Question: هذه الشاخصة  تعني
- Choices: [0] ممنوع مرور المركبات بالاتجاهين | [1] أفضلية المرور لك. | [2] ممنوع المرور.
- Image: Screenshot-2023-03-07-020737.jpg
- Proposed: ممنوع مرور المركبات بالاتجاهين (index 0)
- Sources: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/ | https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan | https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-020737.jpg
- Source A: alqemah Q120 → ممنوع المرور. (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Source B: alqemah Q122 → ممنوع مرور المركبات بالاتجاهين (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Official: Jordan traffic-sign documentation (gpsarab) — ممنوع مرور المركبات بالاتجاهين = road closed to vehicles in both directions / pedestrian use. (https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan)
- Evidence:
  - Our slot image Screenshot-2023-03-07-020737.jpg is a red circular ring with empty white center (no white bar).
  - Perceptual compare vs first conflicting alqemah no-entry image: hashDistance≈0.55 (NOT the same sign).
  - Jordan sign docs: empty/both-directions prohibition = ممنوع مرور المركبات بالاتجاهين.
  - Prior quiz-bank conflict was stem-only collision between two different prohibition pictograms.
- Explanation: Source A (ممنوع المرور / no-entry bar) loses because it is a different visual sign. Official Jordan sign meaning + our pictogram identify Source B answer (index 0).

### Q143 (0:53:143) — **VERIFIED**

- Section: الجزء الاول
- Question: هذه الشاخصة التحذيرية تعني.
- Choices: [0] انخفاض في مستوى الطريق | [1] طريق غير مستوى. | [2] مطب.
- Image: Screenshot-2023-03-06-045408-1.jpg
- Proposed: انخفاض في مستوى الطريق (index 0)
- Sources: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/ | https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan | https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-06-045408-1.jpg
- Source A: alqemah Q244 → انخفاض في مستوى الطريق (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Source B: alqemah Q247 / Q250 → Two-hump uneven-road and single-hump speed-bump pictograms. (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Official: Jordan traffic-sign documentation (gpsarab) — انخفاض في مستوى الطريق = dip/depression warning; مطب = single hump; uneven = two humps. (https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan)
- Evidence:
  - Our image shows a single U-shaped dip (depression), not a raised hump and not two humps.
  - Pairwise visual match to dip candidate: hashDistance=0, meanDiff≈0.006.
  - Official Jordan sign table distinguishes dip vs hump vs uneven road.
- Explanation: Stem collision across three warning signs. Visual identity of the dip pictogram + official Jordan meanings select index 0. Source B answers belong to different pictograms.

### Q115 (0:84:115) — **VERIFIED**

- Section: الجزء الاول
- Question: .الضوء الاصفر المتقطع يسمح للسائق بالمرور بحذر شديد بعد إعطاء الاولوية للمشاة او المركبات صاحبة حق الاولوية :
- Choices: [0] نعم | [1] لا
- Image: Screenshot-2023-03-06-041542.jpg
- Proposed: نعم (index 0)
- Sources: https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/ | https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan | https://morortest.com/questions/jo | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Source A: morortest → نعم (https://morortest.com/questions/jo)
- Source B: alqemah → لا (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Official: نظام قواعد السير والمرور على الطرق لسنة 2004 — مادة 32/د — السير بحذر وانتباه عند الاشارة الصفراء المتقطعة والسماح بمرور المشاة والمركبات ذات الاولوية. (https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/)
- Evidence:
  - Our image is a three-lens signal with middle amber flashing.
  - Official 2004 traffic-rules regulation Art.32(d) states exactly what the quiz statement asserts.
  - gpsarab Jordan documentation restates the same rule.
  - Alqemah key لا contradicts the official regulation.
- Explanation: Authoritative Jordan regulation wins over alqemah. Statement is true → نعم (index 0).

### Q634 (1:99:634) — **STILL_CONFLICT**

- Section: الجزء الثاني
- Question: عمق فرزات الاطار الجيدة تكون عادة 9 ملم
- Choices: [0] نعم | [1] لا
- Image: none
- Proposed: n/a (index n/a)
- Sources: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/ | https://royanews.tv/news/357598 | https://jordan-lawyer.com/2021/10/06/jordanian-traffic-law/
- Source A: alqemah → نعم (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Source B: Roya News citing Public Security Directorate guidance → legal/service focus on minimum tread depth (not usually-9mm as a standard good figure) (https://royanews.tv/news/357598)
- Evidence:
  - Alqemah affirms نعم for depth-of-good-tread usually 9mm wording.
  - Jordan public/PSD-facing reporting emphasizes minimum legal/service tread (~1.6mm for passenger cars), not usually 9mm.
  - No official PSD/Traffic Department manual found stating that good tread is usually 9mm.
  - Duplicate ID 634 also exists as a different parking-sign question — slot-scoped only.
- Explanation: Quiz-bank wording vs independent Jordan legal/safety figures remain irreconcilable without an official manual quote for usually-9mm. Retain conflict; do not auto-apply.

### Q252 (2:50:252) — **STILL_CONFLICT**

- Section: الجزء الثالث
- Question: هذه العلامة الارضيه تعني
- Choices: [0] ممنوع الوقوف | [1] مواقف مركبات موازية للطريق. | [2] مواقف مركبات بشكل زاوية على الطريق.
- Image: Screenshot-2023-03-07-041234.jpg
- Proposed: n/a (index n/a)
- Sources: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/ | https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-041234.jpg
- Source A: alqemah Q751/Q750 → مواقف مركبات موازية للطريق. (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Source B: alqemah Q749 → مواقف مركبات بشكل زاوية على الطريق. (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Evidence:
  - Same stem/answer family as Q251/Q253 with parallel vs angled keyed diagrams.
  - Downloaded ext candidates for 251 and 252 were byte-identical (same MD5), so prior auto-match is not unique.
  - Our recovered screenshots are low-resolution technical diagrams; cannot confidently map uniquely to parallel vs angled parking bays without a clean unique pictogram match.
  - Earlier conflicting_answer_resolution also left Q252 UNRESOLVED.
- Explanation: Sources disagree (index 1 vs 2) and visual identity is not uniquely established. Still conflict.

### Q251 (2:51:251) — **STILL_CONFLICT**

- Section: الجزء الثالث
- Question: هذه العلامة الارضيه تعني
- Choices: [0] ممنوع الوقوف | [1] مواقف مركبات موازية للطريق. | [2] مواقف مركبات بشكل زاوية على الطريق.
- Image: Screenshot-2023-03-07-041128.jpg
- Proposed: n/a (index n/a)
- Sources: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/ | https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-041128.jpg
- Source A: alqemah Q751/Q750 → مواقف مركبات موازية للطريق. (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Source B: alqemah Q749 → مواقف مركبات بشكل زاوية على الطريق. (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Evidence:
  - Identical stem/answer conflict family as Q252.
  - Shared identical external candidate blob with Q252 in the last scrape — not a trustworthy unique image key.
  - No official Jordan pavement-marking plate uniquely identified from the recovered screenshot alone.
- Explanation: Cannot choose parallel vs angled without guessing. Still conflict.

### Q600 (5:0:600) — **VERIFIED**

- Section: الجزء السادس
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2.
- Image: Screenshot-2023-03-08-032215.jpg
- Proposed: للمركبة رقم 1. (index 0)
- Sources: https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/ | https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan | https://morortest.com/questions/jo | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Source A: morortest/alqemah stem collisions → Many different priority scenes share the same stem; mapped indexes 0 and 1 both appear. (https://morortest.com/questions/jo)
- Source B: Official Jordan traffic rules Art.33(3)/(6) → Main-road / T-junction through traffic has priority over vehicle entering from a side road. (https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/)
- Evidence:
  - Our diagram: Vehicle 1 travels straight on the through/main road; Vehicle 2 enters from a side road and turns.
  - Art.33: priority to vehicle from main road over secondary; also straight on T-junction.
  - Quiz-bank index conflicts are invalid stem matches across unrelated scenes.
- Explanation: Discard stem-only quiz conflicts. Official right-of-way + unique diagram → vehicle 1.

### Q601 (5:1:601) — **VERIFIED**

- Section: الجزء السادس
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Image: Screenshot-2023-03-08-032112.jpg
- Proposed: للمركبة رقم 2 (index 1)
- Sources: https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/ | https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan | https://morortest.com/questions/jo | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Source A: morortest/alqemah stem collisions → Indexes 0 and 1 both appear for same stem family. (https://morortest.com/questions/jo)
- Source B: Official Jordan traffic rules Art.33(3)/(6) → Main-road through traffic has priority over side-road entrant. (https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/)
- Evidence:
  - Our diagram: Vehicle 2 is on the main road going straight; Vehicle 1 enters from a side road turning left across its path.
  - Official Art.33 awards priority to the main-road / through vehicle → رقم 2.
- Explanation: Official rule + diagram identity beat stem-colliding quiz keys.

### Q602 (5:2:602) — **VERIFIED**

- Section: الجزء السادس
- Question: في الصورة التي امامك تكون الاولوية
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Image: Screenshot-2023-03-08-032015.jpg
- Proposed: للمركبة رقم 2 (index 1)
- Sources: https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/ | https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan | https://morortest.com/questions/jo | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Source A: morortest/alqemah stem collisions → Indexes 0 and 1 collide across scenes. (https://morortest.com/questions/jo)
- Source B: Official Jordan traffic rules Art.33(3) → Main-road vehicle has priority over side-road entrant. (https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/)
- Evidence:
  - Our diagram: Vehicle 2 travels straight on the main road; Vehicle 1 turns in from a side road into the same lane.
  - Art.33(3) → priority to vehicle 2.
- Explanation: Official main-vs-side priority resolves the diagram; quiz stem collisions discarded.

### Q603 (5:3:603) — **VERIFIED**

- Section: الجزء السادس
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Image: Screenshot-2023-03-08-031827-1.jpg
- Proposed: للمركبة رقم 1. (index 0)
- Sources: https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan | https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/ | https://morortest.com/questions/jo | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Source A: morortest/alqemah stem collisions → Indexes 0 and 1 collide. (https://morortest.com/questions/jo)
- Source B: Official priority-road sign meaning + Art.33 → طريق ذو اولوية / priority road has passage priority; give-way approaches yield. (https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan)
- Evidence:
  - Our diagram: Vehicle 1 is on a road marked with the yellow diamond priority-road sign; Vehicle 2 approaches from a give-way / side approach.
  - Jordan sign docs: طريق ذو اولوية keeps priority at intersections.
  - Therefore priority is للمركبة رقم 1.
- Explanation: Sign-controlled priority overrides equal-intersection defaults. Index 0.

### Q604 (5:4:604) — **VERIFIED**

- Section: الجزء السادس
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Image: Screenshot-2023-03-08-031717.jpg
- Proposed: للمركبة رقم 1. (index 0)
- Sources: https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/ | https://morortest.com/questions/jo | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Source A: morortest/alqemah stem collisions → Indexes 0 and 1 collide. (https://morortest.com/questions/jo)
- Source B: Official Jordan traffic rules Art.33(2) → When two opposite vehicles meet, priority to the one going straight or turning right over the one turning left. (https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/)
- Evidence:
  - Our diagram: Vehicle 1 turns right; Vehicle 2 from opposite direction turns left into the same road.
  - Art.33(2) gives priority to the right-turning / non-left-crossing vehicle → رقم 1.
- Explanation: Official opposite-turn rule selects vehicle 1.

### Q605 (5:5:605) — **STILL_CONFLICT**

- Section: الجزء السادس
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Image: Screenshot-2023-03-08-031554.jpg
- Proposed: n/a (index n/a)
- Sources: https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/ | https://morortest.com/questions/jo | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Source A: morortest/alqemah stem collisions → Indexes 0 and 1 collide across unrelated scenes. (https://morortest.com/questions/jo)
- Source B: Official Art.33 → No explicit clause uniquely awarding priority when both opposite vehicles simultaneously turn left into separate lanes of the same arm. (https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/)
- Evidence:
  - Our diagram: both vehicles turn left into the same destination road, apparently into different lanes.
  - Art.33(2) covers straight/right vs left, not mutual left turns.
  - No unique keyed image identity found; quiz stem collisions remain noisy.
- Explanation: Underlying rule is not uniquely determined for this mutual left-turn diagram. Still conflict.

### Q606 (5:6:606) — **VERIFIED**

- Section: الجزء السادس
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2
- Image: Screenshot-2023-03-08-031443.jpg
- Proposed: للمركبة رقم 2 (index 1)
- Sources: https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/ | https://morortest.com/questions/jo | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Source A: morortest/alqemah stem collisions → Indexes 0 and 1 collide. (https://morortest.com/questions/jo)
- Source B: Official Jordan traffic rules Art.33(1)/(2) → Priority to vehicle coming from the right when equal; also priority to straight-moving vehicle vs left-turning vehicle. (https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/)
- Evidence:
  - Our diagram: Vehicle 2 goes straight; Vehicle 1 turns left across Vehicle 2 path; Vehicle 2 approaches from the right of Vehicle 1.
  - Art.33 supports priority to the straight / right-side vehicle → رقم 2.
- Explanation: Official equal-intersection and straight-vs-left rules select vehicle 2.

### Q633 (5:33:633) — **VERIFIED**

- Section: الجزء السادس
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] التوقف في حال خلو الطريق من المركبات والمشاة | [1] عدم التوقف إلا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع. | [2] عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى لاعاقة حركة المرور
- Image: Screenshot-2023-03-07-032329.jpg
- Proposed: عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى لاعاقة حركة المرور (index 2)
- Sources: https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/ | https://morortest.com/questions/jo | https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-032329.jpg
- Source A: morortest Q7355 → عدم التوقف إلا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع. (https://morortest.com/questions/jo)
- Source B: alqemah Q921 + morortest Q7356 → عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى لاعاقة حركة المرور (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Official: Jordan traffic-sign documentation — ممنوع الوقوف والتوقف (red X on blue) = no stopping/parking at all; ممنوع الوقوف (one diagonal) = loading/unloading only. (https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan)
- Evidence:
  - Our image is blue disc with red border and red X (two diagonals) = no stopping.
  - Visual match to keyed no-stopping candidate: hashDistance=0, meanDiff≈0.018.
  - Official Jordan sign table maps that pictogram to final absolute no-stop meaning (index 2).
  - Morortest index 1 belongs to the single-diagonal no-parking sign (see slot 5:34:634).
- Explanation: Source A is the wrong pictogram. Visual + official Jordan sign meaning select index 2.

### Q634 (5:34:634) — **VERIFIED**

- Section: الجزء السادس
- Question: الاجراء الصحيح عند رؤيتك لهذه الشاخصة أثناء القيادة :
- Choices: [0] التوقف في حال خلو الطريق من المركبات والمشاة. | [1] عدم التوقف الا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع. | [2] عدم الوقوف والتوقف نهائياً كون توقفك ووقوفك يؤدى إلعاقة حركة المرور.
- Image: Screenshot-2023-03-07-032438.jpg
- Proposed: عدم التوقف الا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع. (index 1)
- Sources: https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/ | https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-07-032438.jpg
- Source A: alqemah Q922 (keyed) → عدم التوقف الا إذا كنت تقوم بتحميل وتنزيل الركاب أو تحميل وتنزيل البضائع. (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Source B: Official Jordan traffic-sign documentation → ممنوع الوقوف (one red diagonal on blue) = stop only for loading/unloading passengers/goods. (https://gpsarab.com/driving/page.php?name=traffic-signs-in-jordan)
- Evidence:
  - Our image is blue disc with one red diagonal = no parking (stopping for loading/unloading allowed).
  - Visual match to alqemah 11-4.jpg: hashDistance=0, meanDiff≈0.010.
  - Official Jordan sign wording matches answer index 1 exactly.
  - Duplicate ID 634 also used by tread question 1:99:634 — this resolution is slot-scoped only.
- Explanation: Upgraded from LIKELY: pictogram identity + official Jordan meaning + keyed alqemah image agree. Duplicate ID is not a barrier under slot-scoped apply.

### Q663 (5:63:663) — **LIKELY**

- Section: الجزء السادس
- Question: ان الرياح التي تؤثر على المركبة اثناء عملية التجاوز كما هو مبين بالرسم
- Choices: [0] رياح طبيعية | [1] رياح التفريغ | [2] لا شئ مما ذكر
- Image: رياح-طبيعية-1-275x300.png
- Proposed: رياح طبيعية (index 0)
- Sources: https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Source A: alqemah → رياح طبيعية (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Source B: our image recovery → Our local image download for the wind diagram failed in prior audits; ext scrape pulled an unrelated priority diagram.
- Evidence:
  - Keyed alqemah text match proposes رياح طبيعية (index 0).
  - Filename suggests natural wind, but filename-alone is disallowed as sole proof.
  - No conclusive our-vs-keyed visual identity established.
- Explanation: Remains LIKELY — supporting quiz key exists, but image identity not proven to VERIFIED standard.

### Q668 (5:68:668) — **VERIFIED**

- Section: الجزء السادس
- Question: استخدام الضوء الرباعي (الفلشر) يعني :
- Choices: [0] التوجه الى اليمين | [1] التوجه الى اليسار. | [2] تخفيف السرعة يوجد خطر أمامك.
- Image: Screenshot-2023-03-08-035224.jpg
- Proposed: تخفيف السرعة يوجد خطر أمامك. (index 2)
- Sources: https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/ | https://trainingdriving.com/wp-content/uploads/2023/03/Screenshot-2023-03-08-035224.jpg
- Source A: training-driving keyed sheet → تخفيف السرعة يوجد خطر أمامك. (training-driving keyed export)
- Source B: Official Jordan traffic rules (emergency/hazard flashers) → انوار الطوارئ / الغمازات الرباعية are emergency warning lights; following drivers must reduce speed when a driver signals; flashers are regulated as hazard/emergency use. (https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/)
- Evidence:
  - Our image shows rear of car with BOTH left and right amber indicators illuminated simultaneously = hazard flashers, not a single turn signal.
  - Choices 0/1 are turn left/right; only index 2 matches hazard meaning.
  - Jordan regulation text refers to الغمازات الرباعية as emergency/warning lights and requires following traffic to slow for driver signals.
  - Prior LIKELY lacked conclusive image identity; recovered screenshot now identifies the pictogram.
- Explanation: Upgraded from LIKELY: visual hazard-light identity + official emergency-flasher concept + keyed sheet agree on index 2.

### Q670 (5:70:670) — **VERIFIED**

- Section: الجزء السادس
- Question: في الصورة التي امامك يريد السائق التوجه:
- Choices: [0] الى اليمين. | [1] الى اليسار. | [2] تخفيف السرعة
- Image: Screenshot-2023-03-08-035000.jpg
- Proposed: الى اليسار. (index 1)
- Sources: https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/ | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/ | https://morortest.com/questions/jo
- Source A: morortest Q7153 → الى اليمين. (https://morortest.com/questions/jo)
- Source B: alqemah Q958 + morortest Q7152 → الى اليسار. (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Official: نظام قواعد السير والمرور 2004 — hand signals when indicator fails — مد الذراع اليسرى أفقياً = التحول الى اليسار. (https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/)
- Evidence:
  - Our image: driver left arm extended straight horizontal out the window.
  - Visual match to keyed left-turn candidate: hashDistance=0, meanDiff≈0.003.
  - Official Jordan hand-signal rule: horizontal left arm = turn left.
  - Competing الى اليمين keys belong to a different arm posture (raised).
- Explanation: Source A is a different hand-signal pictogram. Official rule + matched image select index 1.

### Q679 (5:79:679) — **VERIFIED**

- Section: الجزء السادس
- Question: في الصورة التي امامك الوقوف صحيح:
- Choices: [0] نعم | [1] لا
- Image: Screenshot-2023-03-08-034143-1.jpg
- Proposed: لا (index 1)
- Sources: https://www.alabbadilawfirm.com/traffic-law-jordan/ | https://jordan-lawyer.com/2021/10/06/jordanian-traffic-law/ | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/ | https://morortest.com/questions/jo
- Source A: morortest yes-variants → نعم (https://morortest.com/questions/jo)
- Source B: alqemah Q967 + morortest no-variants → لا (https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/)
- Official: Jordan Traffic Law — parking near intersections — Leaving a vehicle within less than 20 meters of road intersections/junctions is an offence. (https://www.alabbadilawfirm.com/traffic-law-jordan/)
- Evidence:
  - Our diagram labels parked car at 10 m from the intersection corner.
  - Jordan Traffic Law prohibits leaving a vehicle within less than 20 meters of intersections/junctions.
  - 10m < 20m ⇒ parking is not correct → لا.
  - Visual match to keyed لا candidate: hashDistance=0, meanDiff≈0.003.
  - Morortest نعم matches are other scenes with different distances/layouts.
- Explanation: Official 20m intersection rule overrides conflicting quiz stems. Index 1 (لا).

### Q690 (5:90:690) — **STILL_CONFLICT**

- Section: الجزء السادس
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2.
- Image: Screenshot-2023-03-08-032551.jpg
- Proposed: n/a (index n/a)
- Sources: https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/ | https://morortest.com/questions/jo | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Source A: morortest/alqemah stem collisions → Indexes 0 and 1 collide across many priority scenes. (https://morortest.com/questions/jo)
- Source B: Official Art.33(4) roundabout rule → Vehicles already circulating in the roundabout have priority over entrants; lane-vs-lane priority between two circulating/entering cars is not uniquely stated for this diagram. (https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/)
- Evidence:
  - Our image is a multi-lane roundabout with cars 1 and 2 in adjacent lanes and exit/path markings.
  - Art.33(4) covers entrant vs circulating traffic, not a unique choice between these two labeled cars.
  - No unique keyed image identity established against alqemah/morortest scenes.
- Explanation: Still conflict — diagram-specific priority between the two labeled cars is not uniquely fixed by official text alone.

### Q691 (5:91:691) — **STILL_CONFLICT**

- Section: الجزء السادس
- Question: في الصورة التي امامك تكون الاولوية:
- Choices: [0] للمركبة رقم 1. | [1] للمركبة رقم 2.
- Image: Screenshot-2023-03-08-032456.jpg
- Proposed: n/a (index n/a)
- Sources: https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/ | https://morortest.com/questions/jo | https://alqemahdriving.com/الفئتين-الثالثة-والرابعة/
- Source A: morortest/alqemah stem collisions → Indexes 0 and 1 collide. (https://morortest.com/questions/jo)
- Source B: Official Art.33(4) roundabout rule → Circulation priority stated, but not a unique lane-1 vs lane-2 answer for this entrance diagram. (https://jordanlaws.org/2020/10/13/%d9%86%d8%b8%d8%a7%d9%85-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d8%b1%d9%82-%d9%84%d8%b3%d9%86/)
- Evidence:
  - Our image: two vehicles approaching/entering a roundabout in inner vs outer lanes.
  - Official roundabout rule does not uniquely pick رقم 1 vs رقم 2 for this labeling.
  - Quiz stem collisions remain non-authoritative without image-keyed identity.
- Explanation: Still conflict.

## Final counts

Conflict cases = 18
Likely cases = 3

VERIFIED = 14
STILL_CONFLICT = 6
LIKELY = 1
UNRESOLVED = 0

STOP — no answers applied.