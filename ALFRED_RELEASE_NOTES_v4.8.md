# Alfred University v4.8 — Academic remediation and consistency repair

Date: 2026-10-24. Applied on the exact verified v4.7 deployment package.

## What actually changed

1. **50 distinct reused question IDs across 55 archived contexts reconciled.** Incorrectly outdated archived distractors and feedback were replaced with their corrected instructional versions. The prompt, correct answer text/index, objective tags and question ID remain unchanged; older attempt and score records stay intact. Archived forms remain *rehearsal only* and are not new exam evidence.
2. **200 original 100-question mock-form explanations expanded.** Each now contains the original scenario feedback, a relevant technical reasoning method (including step-by-step formulas where applicable), and a misconception warning. This increases the instructional value of reviewed mistakes. Both mock forms' original wording, answer choices, keys, IDs, and objective distribution are unchanged.
3. **28 distinct near-transfer exercises** added at the **end** of the 28 instructional modules, after their teaching prerequisites. Each asks a new worked quantitative or diagnostic problem and hides a detailed reasoned answer until the student chooses to reveal it. These self-checks are unscored, do not affect saved assessment results and do not claim independent validation.
4. A small shared teaching renderer update displays the new exercises using existing responsive styling. Service-worker cache was bumped to load new runtime and lesson data. No Cloud Sync or branding logic altered.
5. Machine-checkable logs, numerical checks and independent post-repair metrics are included with this release.

## Learning science and governing materials

Design follows the U.S. Department of Education/IES *Organizing Instruction and Study to Improve Student Learning* (2007), particularly worked examples alternated with practice, elaborative questioning and retrieval after teaching (https://ies.ed.gov/ncee/wwc/PracticeGuide/1). CETa target IDs remain ETA's published 2025 competency outline (https://www.etai.org/comps/CETa_comps.pdf). The Sixth Edition errata and the official Common Formulas Sheet remain governing references (https://www.etai.org/6thEdASTErrataSheet.pdf; https://www.etai.org/Common_Formulas.pdf).

## Preservation and delivery

Replacement files: `course.json`, `course.js`, `ceta.js`, `service-worker.js`, `ALFRED PROJECT GOVERNANCE.md`. The other JSON and Markdown files are new academic review artifacts. The 234-page PDF already hosted in your repository is unchanged and **must not be uploaded again**. Existing localStorage keys, exam histories, progress states, answer keys and 373 lesson identities are not changed.

## Remaining academic gates — DO NOT CLAIM EXAM READINESS SIGN-OFF

- The two new 100-question mocks still cover the same 100 ETA objective IDs (not the remaining 162). Broader, representative independent item sampling and external calibration remain outstanding.
- Historical duplicated question IDs are now consistent, but preserving their prompts and keys means archived practice is familiar. A repeated in-house test score is not a validated pass probability.
- The original instructional and mock questions require exhaustive individual technical/psychometric review; this release strengthens rationales but doesn't independently certify them.
- 257 previously short teaching pages remain a triage priority for substantive teaching sufficiency review; this release adds 28 transfer tasks, not line-by-line rewriting of every lesson.
- The 234-page Sixth Edition still requires complete page-level technical, formula and errata reconciliation. Only selected pages and inherited reading assignments have been topic-checked.
- Visual/schematic instructional adequacy remains an open quality criterion. No unverifiable AI-generated diagrams were introduced.

**Honest current status:** safer and more pedagogically substantive practice, not a near-guaranteed examination pass or externally approved college curriculum. Full academic sign-off is withheld.
