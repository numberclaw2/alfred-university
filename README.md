# Alfred University — v16.3 Final Instructional Depth

AU-ESET 301 is a fictional, university-style independent-study environment built around two equal goals:

1. Prepare for the current ETA Associate Certified Electronics Technician (CETa) competency scope.
2. Build demonstrable electronics, hardware-test, and embedded-systems skill for a career transition while continuing school.

It is not an accredited university, an ETA-endorsed course, an official exam, or a guarantee of certification or employment. The learner-facing Classroom is the instructional product.

## What v16.3 changes

v16.3 is the final lesson-depth rebuild of the accepted v16.2 semantic baseline. It preserves the 31-week schedule, 125 calendar events and UIDs, 24 labs, Week 18 cumulative embedded gate, saved-progress identities, Cloud Sync protocol 2, and the equal 2,790 / 2,790 CETa/Career weighting.

The critical change is instructional architecture: the old `instructional-completion.js` learner layer is removed. The actual 62 primary lesson objects now contain the teaching. Each lesson consolidates the strongest original material, v16.2 subject-specific semantic teaching, worked examples, new technical explanation, guided practice, an actual changed independent scenario, topic-specific misconception repair, a technician/embedded connection, checks, teach-back, and a lesson-specific instructional visual.

Release audit results:

- 31 weeks / 62 primary lessons; 62/62 lesson-depth PASS.
- Topic-specific substantive lesson bodies range from 1,016 to 2,668 words; no lesson is below the 1,000-word manual-review warning.
- 62 lesson-specific SVG instructional visuals are stored at the release root and rendered inside Classroom.
- 262/262 current CETa rows and 78/78 Alfred Career standards retain subject-specific teaching/evidence routes.
- 87 required semantic constructed-response / performance tasks remain as competency evidence; they are not substitutes for instruction.
- 223 substantive reviewed bank questions remain active. The 186 generic v16.1 coverage-fill IDs remain historical only and are retired from mastery from reconstruction time.
- 24 labs remain, including the cumulative Week 18 STM32 → SWD → UART → I2C/SPI → logic-analysis → fault → diagnosis → correction → retest → documentation gate.
- The two current 100-question Alfred CETa readiness runs at ≥85% remain the internal readiness rule.

External videos, university material, manufacturer documentation, official standards, and the private ETA study guide remain supplemental. They may reinforce or verify Alfred's instruction, but they do not carry the missing core explanation.

## Start here

Open **Learn / Classroom** and work through the current week. Every week retains one CETa lesson and one Career lesson plus combined application, lab/project work where assigned, and a weekly mastery gate.

The intended learner path is:

1. Start Here
2. CETa Lesson
3. Career Lesson
4. Teaching Media / accessible text path
5. Guided and independent practice
6. Lab or application
7. Weekly Mastery

Quick, Standard, and Deep Work remain 20-, 60-, and 120-minute plans rather than forced deadlines. Quiet Mode, Focus Mode, pause/resume behavior, Resume Session, and the current-week flow are preserved.

## Assessment and evidence

Evidence types are intentionally separated:

- **Auto-graded:** 223 reviewed bank questions, required primary gates, and one additional integrated MCQ in every primary lesson. Assessment-engine forms shuffle answer choices deterministically; v16.3 Classroom also deterministically shuffles the integrated lesson MCQ display while preserving the correct answer mapping.
- **Rubric/self-reviewed:** 87 subject-specific semantic tasks covering all 262 CETa and 78 Career standards.
- **Practical/physical:** 24 labs and project gates. Simulation may establish conceptual or analytical performance but does not establish tactile workmanship, actual probe handling, solder quality, crimp quality, harness workmanship, or real-board debugging.

The reviewed objective assessment bank itself was not rewritten for v16.3. Its evidence revision intentionally remains **16.2** so existing qualifying full-length runs and saved analytics remain comparable; the course release version is **16.3**. This is a compatibility choice, not stale release labeling.

## Files and sources of truth

- `curriculum-data.js` — v16.3 integrated 62-lesson instructional source, lesson visuals, practice, checks, and semantic-task placement.
- `semantic-repair.js` — preserved semantic-evidence/standards authority and historical v16.1 filler retirement compatibility.
- `assessment-data.js` — stable standards and reviewed assessment-bank identities.
- `assessment-completion.js` — compatibility reconstruction of historical generated IDs; those generic v16.1 filler items are retired from current mastery.
- `assessment-policy.js` — current Classroom assessment policy plus explicit release/evidence-revision metadata.
- `assessment-engine.js` — deterministic reviewed-question selection and choice shuffling for graded forms.
- `academic-content.js` / `practical-completion.js` — labs and practical gates.
- `course-data.js` — preserved 125-event calendar identity.
- `learn.html` / `learn.js` — authoritative Classroom rendering and completion path.
- `AU-ESET-301-v16.3-Curriculum-and-Instruction-Plan.docx` — reviewable integrated curriculum and instruction plan.
- `AU-ESET-301-v16.3-Lesson-Depth-Audit.csv` — one row for each of the 62 primary lessons.
- `AU-ESET-301-v16.3-Semantic-Coverage-Matrix.csv` / `.json` — 340-row standards traceability.
- `AU-ESET-301-v16.3-Final-Lesson-Acceptance-Report.md` — final instructional and technical release audit.
- `AU-ESET-301-v16.3-Resource-Verification.md` — source/provenance record.

The semantic matrix's guided/independent-practice columns identify the integrated lesson practice associated with a row; they should not be read as 340 separate unique practice exercises. The row's named semantic task is the competency-specific active demonstration/evidence route.

## Upload this release

Read `UPLOAD-INSTRUCTIONS.txt` first.

Extract **`Alfred-University-v16.3-FINAL-INSTRUCTIONAL-DEPTH-FLAT.zip`** and upload every extracted file together to the existing GitHub repository root beside `index.html`. Do not upload the ZIP itself, create a wrapper directory, or create nested folders. No frontend build, package installation, Worker redeployment, or D1 migration is required.

Production Cloud Sync endpoint:

`https://alfred-university-sync.totallywill13.workers.dev`

Protocol 2 and the existing D1 record structure are unchanged. Export Progress before replacing site files, preserve the Recovery / Student Sync Key separately, wait for GitHub Pages to finish, close old tabs, then reopen the same site URL so the `alfred-u-v16-3` service worker can install the current cache. Do not clear browser site data as a routine update step.

## Release integrity

The final acceptance report records the release gate: 24 production JavaScript files with 0 syntax failures, 25 HTML pages, 0 missing local references, 0 broken anchors, 125 calendar events / 125 unique UIDs, `.nojekyll` present, flat-root ZIP structure, and passing ZIP CRC/integrity validation.
