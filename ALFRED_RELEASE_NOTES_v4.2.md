# Alfred University v4.2 — ETA-first teaching depth and publisher errata repair

Date: 2026-10-24  |  Baseline: deployed v4.1, GitHub commit `7eaa75e381e65670bf913b043c5f4270749dd596`.

## Primary goal

Improve exam-preparation **substance**, not functionality or cosmetic UI. The highest authority for examinable subjects is [ETA's current 2025 CETa competency PDF](https://www.etai.org/comps/CETa_comps.pdf). The complementary authority is the existing original [Associate CET Study Guide Sixth Edition] scan plus the [publisher errata](https://www.etai.org/6thEdASTErrataSheet.pdf) and [current formula sheet](https://www.etai.org/Common_Formulas.pdf).

## What changed

- Strengthened **53 specific teaching pages spanning all 28 instructional modules**, by adding exam-transfer reasoning, alternative cases, mathematical checks, troubleshooting decision rules or essential safety boundaries. Every change is itemized in `ALFRED_v4_2_EDUCATIONAL_REPAIRS.json` with its original module/page identity.
- Added **262-row** `ALFRED_v4_2_OBJECTIVE_EVIDENCE_REGISTER.json` linking each objective to its mapped instructional section, page IDs, previously scored question tags, fresh-mock question tags and diagnostics. All 262 have a mapped section page; technical completeness is **not** inferred from tagging.
- Applied the publisher errata's **NOR SR latch** distinction from printed page 138, amplifier formula conditions, resonance unit precision, AC networks, and common-emitter/common-base/common-collector distinctions. The book's apparent additional inverted bandwidth formula on printed page 47 is openly marked an *editorial* observation rather than an ETA-endorsed correction.
- Preserved all historical learner progress identifiers, stage structure, 373 page IDs, question IDs/answers, original rehearsals, 200 newly authored mock questions, and 60 objective diagnostics. No new readiness qualifications are granted.
- Bumped the service-worker cache so browsers receive the new `course.js` after deploying this academic update.

## Numbers that still prohibit a readiness guarantee

- Fresh Form A and Form B each test 100 items linked to the **same 100 distinct ETA competencies**, leaving **162** unsampled by these two mocks.
- **48** of the 262 objectives still lack an older scored or fresh-mock question tag, even if a diagnostic may exist. The register makes those gaps actionable.
- This is **53 revised pages**, not complete line-by-line independent validation of 373 pages, 262 competencies, or 234 scanned book pages.
- All questions and new teaching remain subject to technical review; no inference of an ETA-approved curriculum or statistical exam pass probability is warranted.

## Academic priorities after this batch

1. Review the highest-risk untreated competencies individually and repair actual missing instruction, then audit all 262 across their lesson passages and examples.
2. Validate/rewrite scored item coverage where absent, improve independently authored case variety across all topic families, inspect distractors and explanations, and make formative misses drive relevant lesson review.
3. Simulate ETA's actual two-hour, 100-question exam format with unfamiliar items and formula-sheet rules, but **never claim a valid readiness guarantee** without established exam-bank validity.
4. Keep Cloud Sync feature work deferred unless it blocks studying or risks data loss.

## Install

Extract the v4.2 ZIP and upload its root files. Do not re-upload the study-guide PDF, do not alter user storage, and avoid uploading the ZIP itself into GitHub as a substitute for root file replacements.
