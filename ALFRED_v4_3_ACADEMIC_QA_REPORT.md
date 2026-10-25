# Alfred v4.3 — Academic QA

- Course baseline validated against deployed v4.2 by exact course.json / course.js SHA during preparation.
- 20 targeted page-level additions, 9 instructional modules.
- 16 new original scored practice items; all 16 objectives had no older or v3.5 exam-question tag at baseline.
- Answer options unique, one keyed response, rationale included and numerical case checks pass. This **does not** establish independent item validity.
- Baseline course questions: 635; updated: 651.
- 262 official competency entries, 30 modules, 373 lessons unchanged in structure.
- Original question IDs and answer keys preserved; M29/M30 100-question banks identical; 60 old diagnostic candidates identical.
- Printed guide PDF and 20 historic reading assignments untouched; formulas checked against ETA current formulas and errata.
- 32 objectives still without tagged scored item, including non-scoreable cross-reference 2.5.1.
- Progress schema, Cloud Sync settings, user content, media and styles unchanged.
- Not a full passage-by-passage book or independent certification validation.

## Numerical cross-checks
- 9 V / 3 kΩ = 3 mA; P = 27 mW.
- 10 V divider with 10 kΩ upper and (10 kΩ || 10 kΩ) lower = 3.333 V.
- Series RLC |100 + j30| = 104.403 Ω.
- Parallel 1 A resistive and 2 A capacitive = 2.236 A source current.
- LC resonance for 200 µH and 200 pF = 795,775 Hz (ETA Sixth Edition errata p.23).
- 100:25 ideal transformer on 120 V primary -> 30 V secondary.

## Remaining acceptance
**Completed (2026-10-24):**
- Node `--check` of course.js and service-worker.js: PASS.
- 36 Chromium route/viewport renders (390px and 1280px): PASS, zero page exceptions and no horizontal overflow.
- All 20 new teaching sections directly rendered in a mobile-sized Chromium page: PASS.
- Six updated module Master views with their v4.3 assessment prompts: PASS.
- Actual graded M08 module assessment: 31/31 correct answers, including three new v4.3 items; recorded 100% in isolated browser localStorage: PASS.
- Baseline source-vs-deployed Git blob verification: confirmed course.js, course.json, governance and service-worker v4.2 hashes matched GitHub commit `c052cc1ae5f4a972104b3d6b9acf79c464cbcc5e` before modification.
- 16 added item IDs are unique, all 16 linked to genuine previously untagged objectives and include rationales; all original question IDs and source content retained.
- Question content has internal technical and arithmetic review only. No independent subject-matter examiner, blind exam pilot, or real iPhone hardware tested.
- ZIP CRC and payload hashing verified during packaging.

