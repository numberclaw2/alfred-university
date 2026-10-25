# Alfred University v4.7 — Examination-Item Quality Repair

Built from verified GitHub Pages v4.6 commit `0d918615309dfbe7b1882d4c9fdbc3f1155eb669` on 2026-10-24.

## What changed in this release

- Replaced weak, mostly implausible incorrect-answer choices in **61 distinct instructional questions** (62 module-question instances). The replacement choices now test real nearby technical misconceptions: diagrams, safe meter hookup, loading, RMS/phase, magnetics, filters, semiconductors, supplies, audio, RF and troubleshooting.
- Rewrote the associated explanations to explain why the correct answer follows and, where appropriate, distinguish closely related wrong ideas.
- Added **20 first-principles lesson checkpoints** in the existing teaching pages, including worked calculation or fault-discrimination reasoning.
- Left the original correct answer, answer slot, question ID, module score identity, competency tags, and question stem unchanged. **Prior score history and bank IDs remain**, but individual items can become more challenging after improved distractors; historical percentages are therefore not psychometrically equivalent to later attempts.
- Both 100-item editorial mock forms **unchanged**, including every key and explanation. No claims that these forms are independently validated.
- Service worker cache version bumped to deliver the updated course bundle. No Cloud Sync, account, localStorage, image, guide PDF, or progress schema changes.

## Source precedence

ETA 2025 CETa requirements: https://www.etai.org/comps/CETa_comps.pdf

ETA official Sixth Edition errata: https://www.etai.org/6thEdASTErrataSheet.pdf

ETA 2025 Common Formulas Sheet: https://www.etai.org/Common_Formulas.pdf

Bundled Sixth Edition remains supporting instruction; full 234-page passage-by-passage validation **not complete**. No ETA-endorsed question forms, private test question access, or known weighting is claimed.

## Acceptance boundary

**Internal question-quality repair / source-informed instructional reinforcement**, not final CETa exam-readiness sign-off. This update corrects one known type of problem (weak distractors) but does not address the full 162-objective fresh-mock coverage gap, nor establish independent review of all question keys or technical instruction.

Detailed before/after evidence: `ALFRED_v4_7_EDITORIAL_ITEM_REVIEW.json`. Tests and boundaries: `ALFRED_v4_7_ACADEMIC_QA_REPORT.md`.
