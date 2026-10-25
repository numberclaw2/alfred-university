# Alfred University — v4.6 Examination Practice and Evidence

Date: 2026-10-24. Baseline: deployed v4.5 commit `0a5ec56d3020a8137cbb2230590efc1760f543b1`.

## Academic purpose

This is the second consolidated examination-quality improvement package. It is designed to improve *real study practice*, not to falsely confer ETA certification readiness. The official ETA CETa examination has **100 questions, 120 minutes, and a 75% passing score**; the ETA Common Formulas Sheet is permitted. Alfred retains an aspirational 85% practice goal, which is not an official ETA guarantee or ETA readiness cutoff.

## Changes

1. Optional **120-minute timed mode** for fresh Form A and Form B. Starting a timed attempt is deliberate; existing saved attempts remain untimed. A persisted absolute start timestamp prevents refreshing the browser from resetting the clock. Expired attempts count unanswered items incorrect. Timing is included in *new* assessment records, without rewriting historical scores. A resumed unfinished timed draft retains its start time when imported from a v4.6 backup.
2. **20 ETA topic-category practice drills** under Assessments. Each is assembled from already published *instructional module questions*, excluding both original 100-question editorial forms. The drills identify gaps, show the correct reasoning for misses and link to teaching, but are explicitly marked **familiar practice rather than independent exams**. Topic results save locally without granting module mastery or exam readiness.
3. Mock exam feedback now shows the correct answers and explanations for misses **after** an attempt is graded. Per-topic score summaries help select appropriate diagnostic drills; each summary reflects only the sampled items and is not a validated topic score.
4. Expanded **21 already-authored exam-item explanations** covering AC/RMS, Ohm's law, power, RC/reactance, series resonance, relay states, Boolean logic, wavelength, reflection coefficient and a parallel-resistance check. These edits do not change any question prompt, choices, answer index, question ID, or existing completed attempt.
5. Added `ALFRED_v4_6_OBJECTIVE_EXAM_BLUEPRINT.json` with a row for every 2025 ETA objective and honest separation of module questions from fresh-form coverage.
6. Advanced offline static-cache version for the changed runtime and course data; Cloud Sync setup, secrets, backend endpoint, recovery key, progress schema, student branding, and 373 lesson pages are not changed.

## Hard findings, deliberately left unresolved

- **Only 100 distinct objectives** appear across both original 100-item forms, even though they contain 200 distinct questions. **162 competency entries have not appeared in either fresh mock**. Category drills provide familiar practice for 249 objective tags but are *not* 162 new unseen exam items. One entry, 2.5.1, is an instruction to consult EM5, not a discrete quiz target.
- No source supports the proposition that Alfred's practice exams are independently reviewed, statistically calibrated, equivalent in difficulty to ETA's actual exam, or predictive of guaranteed success.
- The 234-page Sixth Edition textbook has **not** received complete passage-by-passage verification. Historical chapter links and previously examined pages remain useful with the official published errata.
- An exhaustive subject-matter review of all 200 exam question explanations, every possible distractor and all 373 lessons is not yet complete. This release improves specifically selected explanations.
- Exam timing is browser-clock based and intended for self-study simulation; it is not anti-cheat proctoring. Returning after an expired deadline requires scoring the expired attempt; old attempts and partial records remain untouched.
- Genuine unfamiliar challenge questions and external expert scrutiny remain required before academic sign-off.

## Official sources

- ETA certification requirements: https://www.etai.org/comps/CETa_comps.pdf
- ETA CETa exam specifications: https://www.etai.org/electronics.html
- Permitted formula sheet: https://www.etai.org/Common_Formulas.pdf
- ETA test site procedures: https://www.etai.org/test_sites.html

## How to deploy

Extract the archive and upload every file directly to the existing `numberclaw2/alfred-university` GitHub root, replacing matching files. There is no need to upload the existing large study guide PDF again. No server configuration changes are required.
