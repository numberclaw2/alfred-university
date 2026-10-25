# Alfred University — v4.4 Academic Repair Batch 2

Release date: 2026-10-24
Baseline: v4.3, verified Git commit `69d021617696f5a9fc938c8bda24c3a07830882b`.

## Academic changes

- 14 internally reason-checked, independently authored-from-lesson scored **instructional** transfer items, assigned to 14 previously untagged ETA objectives.
- 14 focused instruction additions across 11 distinct pages in M11 (controlled semiconductors), M13 (power supplies), M14 (amplifiers and instrument loading), and M15 (solder workmanship).
- Scored-question coverage exceptions drop from 32 to 18; one remaining objective (2.5.1) is an official reference directive to the EM5 competencies rather than a distinct skill.
- Each item includes objective tag, four substantive choices, a checked correct index, remediation explanation, and source-specific teaching paragraph.
- Source authority: ETA's ©2025 CETa competency outline, https://www.etai.org/comps/CETa_comps.pdf, with historical Sixth Edition chapter context (semiconductors chapter 9, power supplies chapter 11, amplifiers chapter 12, solder chapter 20). The guide chapter contexts are *not* claims of exhaustive page-by-page validation.
- Safety-critical practice uses written/isolated low-voltage reasoning. No unsupervised mains, CRT or high-voltage procedure is presented as authorized practice.

## Preservation

- All 30 modules and 373 teaching-page IDs, every existing scored-question ID and its original answer key, all previous mock-exam forms and candidate questions, book readings, labs, ETA objective text and progress schema are preserved.
- This release modifies only `course.json` and its matching `course.js` representation, adds the current academic registers/release records, updates governance, and refreshes the service-worker version so existing browser clients discover new content.
- Cloud Sync code, status indicator, settings, original Study Guide PDF and site design are unchanged.

## Readiness limits

- Objective *coverage by a tagged question* is not proof of competency mastery. The 14 new items require independent technical validation and performance calibration.
- The complete scanned book, 373 instructional pages and 200 new mock-exam questions have not been exhaustively line-by-line independently reviewed.
- The present mock exams sample 100 selected objectives each; the other 162 need assessment coverage across a larger and correctly weighted pool.
- Exam readiness remains pending.
