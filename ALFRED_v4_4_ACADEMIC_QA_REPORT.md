# Alfred v4.4 — Academic Release QA

## Exact-preservation tests

- 30 module IDs, 373 page IDs, 262 mapped ETA objective records, existing scored-question IDs, answers, candidate questions, independent rehearsal questions, labs, readings and storage schema are preserved.
- 14 new scored items have unique IDs, 4 distinct answer choices, a uniquely defined correct index, remediation explanation, and an objective ID not previously tagged.
- 14 teaching enhancements across 11 distinct lesson pages; all changed text is attached to an existing page rather than orphaned in a report.
- 32 − 14 = 18 remaining coverage exceptions, including the EM5 cross-reference.
- Book chapter authority is a topic context check, not a 234-page editorial signoff.

## Test execution

The release-time tests completed as follows:

- `node --check course.js` and `node --check service-worker.js`: PASS.
- Structural/data-preservation suite: PASS, including 30 modules, 373 unchanged page IDs, 262 ETA objective entries, original question IDs and answer keys, unchanged labs/readings/fresh mock banks, and all 14 unique new items.
- New answers additionally checked against independent arithmetic recomputations for BJT and FET amplifier load power, and meter loading.
- Chromium: 36 standard route/viewport render combinations at 390 px and 1280 px: PASS, with zero page exceptions or horizontal overflow.
- Chromium: eight complete scored module-assessment submissions across the four affected modules and two viewports: all 100%, stored correctly in isolated local progress test records.
- Chromium: 28 targeted competency-to-lesson rendering checks (14 new explanations × two viewports): PASS, zero page exceptions.
- ZIP archive CRC test: PASS; exact payload hashes verified against output source files. Tests do not constitute independent external expert review.

## Exam-readiness limits

- No external technical reviewer approval.
- No calibrated item statistics or unseen-form predictive validation.
- No real iPhone or live Cloud Sync acceptance in this academic-only batch.
