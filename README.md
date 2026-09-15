# Alfred University — v16.1

A university-style independent-study environment for two equal goals:

1. Prepare for the ETA Associate Certified Electronics Technician (CETa) exam.
2. Build demonstrable electronics, hardware-test, and embedded-systems skill for a career transition while continuing school.

This is a fictional personal learning environment. It is not an accredited university, an ETA-endorsed course, an official exam, or a guarantee of certification or employment. Its green, gold, and cream institutional presentation is intentional: the atmosphere supports returning to serious work, while the Classroom—not the aesthetics—is the product.

## Start here

Open **Learn / Classroom**. Select the current week and follow the seven required stages in order:

1. Start Here
2. CETa Lesson
3. Career Lesson
4. Teaching Media / accessible text path
5. Guided and independent practice
6. Lab or application
7. Weekly Mastery

Each week includes two complete Alfred-authored lessons. Videos, university lectures, manufacturer resources, simulations, official PDFs, and the learner’s private sixth-edition study booklet add other explanations and practice; they do not replace Alfred’s in-house teaching.

| Area | One authoritative responsibility |
| --- | --- |
| Learn / Classroom | Complete teaching sequence, required lesson checks, practice, lab/application, and weekly mastery |
| Study | Next action, timed focus session, spaced review, interruption notes, and resume |
| Week Overview | Weekly outcomes, schedule, lab requirements, and supporting sources |
| Calendar | Dates, today’s assignment, outcomes, and detailed source notes |
| Practice | Entry point for Lab Center and Assessment Center |
| Progress | Completion, notes, career gates, backup, and Cloud Sync |
| Mastery | Current assessment evidence, retention, and repair priorities |

More contains Week Overview, Course Overview, Engineering, Engineering Library, Projects, Search, Knowledge Base, Labs, Assessments, Standards, Documents, Student Services, About, and Release Notes. At desktop 100% zoom it uses a grouped, viewport-bounded menu; on mobile it becomes a scrollable drawer.

Quick, Standard, and Deep Work are 20-, 60-, and 120-minute plans, not forced deadlines. Quiet Mode reduces nonessential decoration. Focus Mode hides surrounding study material while a session is active. Work can be paused and resumed, and no streak penalty or make-up marathon is imposed.

## Verified instructional inventory

- 31 weeks and 62 required primary lessons: one CETa and one Career lesson every week.
- Equal track weight: 2,790 weighted CETa minutes and 2,790 weighted career minutes.
- 262 current CETa objective rows across 20 official competency categories.
- 78 Alfred career standards across 13 technician/embedded evidence domains.
- 340-row coverage matrix; every row identifies its lesson, teaching section, guided task, independent transfer, assessment, mastery evidence, and lab/project route.
- 24 structured labs, each with virtual and physical requirements, procedure, evidence, completion rule, and an honest statement of what its route proves.
- 125 dated calendar items from September 8, 2026 through April 10, 2027.
- 1,381 stable assessment records; 409 are current, substantive, and editorially reviewed for course use. All 262 CETa and 78 career rows have a direct current question path.
- 125 supplemental calendar-event practice definitions, 24 required lab checks, 31 required weekly mastery gates, and three major forms.

The instructional-depth layer adds purpose, prerequisite activation, retrieval, mechanism-level explanation, calculation and representation guidance, evidence rules, a worked diagnostic chain, misconceptions, guided practice, independent transfer, technician context, troubleshooting, teach-back, and exact standard traceability to every primary lesson. Row mapping or one multiple-choice item is not treated as mastery by itself.

## Mastery and readiness rules

- Required lesson checks must be correct before their lesson stage completes.
- Weekly and lab mastery require at least 80%.
- Safety-critical checks require 100% before related hands-on work continues.
- A miss opens targeted correction and a new attempt; it is not a punishment or a reason to restart the course.
- CETa readiness requires **two separate current full-length 100-question Alfred CETa practice runs at 85% or higher**.
- ETA’s published 75% official exam threshold is separate from Alfred’s conservative internal readiness rule.
- Alfred’s five-per-domain practice blueprint is a breadth design, not a claim about ETA’s unpublished question weighting.
- Repeated finite-bank questions are weaker evidence than fresh calculations, explanations, official practice, and changed-context transfer.

Historical records and prior course completion remain intact. Pre-v15.8 mixed evidence may be classified as historical rather than current mastery, but the learner does not need to restart the course. Scores estimate study needs; they do not prove certification, job qualification, or physical competence.

## Practical evidence and safety

Simulation can prove concepts, calculations, logic, procedure, and software behavior. It cannot prove real probe handling, current-jack safety, solder quality, crimp/harness workmanship, physical assembly, or physical board debugging. Claims must identify the actual virtual or physical route.

LAB-018 is the cumulative embedded gate: controlled STM32 baseline → build → flash → SWD observation → UART log → I²C or SPI peripheral → raw/decoded logic capture → safe reversible fault → evidence-based diagnosis → correction → nominal and recovery retest → technical report.

When a setup hazard is found, the course requires: stop and de-energize as appropriate → identify and record the condition and risk → document the corrective action → independently verify the safe state → obtain required authorization → continue. The course is limited to safe, isolated, low-voltage work unless qualified supervision and an approved facility explicitly provide otherwise.

## Files and sources of truth

- `curriculum-data.js`: v16 base curriculum.
- `instructional-completion.js`: v16.1 complete-lesson and 340-row traceability layer.
- `assessment-data.js`: stable question bank and standards.
- `assessment-completion.js`: direct current assessment coverage for every standard.
- `assessment-policy.js`: required/supplemental roles and readiness rules.
- `academic-content.js`: labs, knowledge entries, and document search text.
- `practical-completion.js`: v16.1 lab completeness and cumulative-gate layer.
- `course-data.js`: calendar schedule, weekly summaries, and resource records.
- `academic-state.js`: shared compatibility helpers and calendar editorial normalization.
- `learn.html` / `learn.js`: authoritative Classroom delivery.
- `AU-ESET-301-v16.1-Curriculum-and-Instruction-Plan.docx`: printable teaching and maintenance plan.
- v16.1 CSV/JSON coverage matrices and Markdown audit reports: release evidence.

Do not remove or reorder the completion overlays without rebuilding and rerunning the acceptance audit. Preserve existing event IDs, question IDs, lab IDs, week numbers, progress keys, and Cloud Sync records.

## Upload this release

Read `UPLOAD-INSTRUCTIONS.txt`. Extract the flat v16.1 ZIP and upload every extracted file together to the existing GitHub repository root beside `index.html`. Do not upload the ZIP itself, create a wrapper folder, or add nested folders. No frontend build, package installation, Worker deployment, or D1 migration is required.

Keep the existing GitHub Pages branch/root and site address. A different domain is a different browser origin: export Progress first, preserve the Recovery / Student Sync Key separately, restore data after the move, and add the new host to the Worker’s allowed origins before using Cloud Sync.

Production sync endpoint:

`https://alfred-university-sync.totallywill13.workers.dev`

Normal Cloud Sync setup uses the private Recovery / Student Sync Key; server configuration remains under advanced maintenance settings. Protocol 2 and the existing D1 record structure are unchanged. The Worker root may return 404; `/health` is the status endpoint.

Do not clear browser site data as a routine update step. That can erase local progress and the locally stored key. Export a backup before replacing files, close old tabs after GitHub Pages finishes, and reopen the same site URL so the v16.1 service worker can replace the old cache.

## Offline behavior

The v16.1 service worker covers all current HTML routes and core application dependencies, including the three completion layers. Documents, images, reports, and the ICS calendar are cached when available but cannot block installation if an optional asset fails. Unknown offline navigation uses the dedicated offline page. External videos, publishers, simulations, and official sites still require internet access; visit needed material online before depending on it offline.

## Maintenance and limits

The complete coverage matrix proves that each current row has a deliberate instructional and assessment route. It does not prove that a learner has mastered the row, that the questions are externally psychometrically validated, that ETA endorses the course, or that external resources will never change. Recheck official ETA scope and exam information before a future cohort or exam booking, revalidate external resources periodically, and advance the cache version whenever deployable assets change.

Release Notes remains in More and under About by request. It records the detailed history; the v16.1 Curriculum & Instruction Plan explains instructional design and maintenance; the Acceptance Report records the final structural and technical evidence.
