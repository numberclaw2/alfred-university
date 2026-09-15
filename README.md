# Alfred University — v16.3 Final Instructional Depth

AU-ESET 301 is a fictional, university-style independent-study environment built around two equal goals:

1. Prepare for the current ETA Associate Certified Electronics Technician (CETa) competency scope.
2. Build demonstrable electronics, hardware-test, and embedded-systems skill for a career transition while continuing school.

It is not an accredited university, an ETA-endorsed course, an official exam, or a guarantee of certification or employment. The learner-facing Classroom is the instructional product.


## Runtime hotfix v16.3.2

The v16.3.2 runtime patch is a surgical assessment/deployment/documentation repair on top of the accepted v16.3 curriculum and v16.3.1 mastery-evidence hotfix. It does **not** alter lesson content, labs, standards mapping, calendar identities, Cloud Sync protocol, progress keys, or the reviewed objective-bank evidence revision.

- Reviewed-bank answer choices now use a deterministic **constrained-random learner-facing layout** rather than the earlier LCG choice shuffle. The runtime rejects conspicuously concentrated position sequences and long same-letter runs without imposing an exploitable “exactly N of each letter” quota. Question IDs, wording, distractors, explanations, standard tags, canonical bank answers, question selection, and question order remain unchanged.
- `build-info.json` provides the public deployment marker: course release **16.3**, runtime patch **16.3.2**, objective evidence revision **16.2**, Cloud Sync protocol **2**, build **`v16.3.2-final-mobile-visual-20260915`**, and presentation patch **`mobile-visual-readability-final`**. The service worker intentionally does not cache this marker.
- The final service-worker cache is **`alfred-u-v16-3-2-mobile-visual-final`**. Activation deletes only older Alfred Cache Storage entries; it does not clear localStorage, IndexedDB, progress, notes, assessment history, or sync credentials.
- The v15.8 Academic System Guide remains available for provenance but is explicitly labeled historical/superseded in Documents and Search so its old operational wording cannot masquerade as current workflow.
- Final mobile visual acceptance repair: on phone widths, dense 1000 px lesson SVGs are presented inside a horizontally scrollable 900 px inspection viewport instead of being shrunk until labels are unreadable. A visible swipe instruction and **Open full-size diagram** link provide redundant access. Desktop/tablet presentation remains fit-to-card.

## Runtime hotfix v16.3.1

A post-upload GitHub/runtime audit found that Standards, Analytics, and the Progress assessment-intelligence summary still hard-coded the historical `15.8` bank revision even though the current reviewed objective evidence revision is intentionally `16.2`. The v16.3.1 runtime hotfix makes those consumers derive the revision from assessment metadata, preserves older evidence as revalidation history, and prevents uncompleted self-reviewed semantic-task mappings from satisfying the automatic objective-bank breadth guard for `Mastered`. The 62 integrated lessons, calendar, labs, Cloud Sync protocol, event identities, and objective bank itself are unchanged.

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

- **Auto-graded:** 223 reviewed bank questions, required primary gates, and one additional integrated MCQ in every primary lesson. Assessment-engine forms use deterministic constrained-random answer placement so canonical source order does not create a learner-facing answer-letter cue or a fixed per-form letter quota; v16.3 Classroom also deterministically shuffles the integrated lesson MCQ display while preserving the correct answer mapping.
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

## Upload / update

The current production target is the accepted **v16.3 Final Instructional Depth** curriculum with **runtime patch v16.3.2**, **objective evidence revision 16.2**, **Cloud Sync protocol 2**, and the final mobile visual presentation repair.

For an existing v16.3.2 deployment, apply the final mobile visual repair files at the repository root, replacing matching filenames. Do not upload a ZIP itself or create a wrapper directory.

For a clean install, use the latest complete final project package that already includes the final mobile visual repair. Do not restore older runtime-only files over the final presentation layer.

After GitHub Pages deploys, verify the actual public files:

- `build-info.json` must report:
  - `courseRelease = 16.3`
  - `runtimePatch = 16.3.2`
  - `evidenceRevision = 16.2`
  - `cloudSyncProtocol = 2`
  - `build = v16.3.2-final-mobile-visual-20260915`
  - `presentationPatch = mobile-visual-readability-final`
- `service-worker.js` must contain **`alfred-u-v16-3-2-mobile-visual-final`**.
- On a phone, a dense Classroom visual such as Week 18 must remain at readable inspection scale inside a horizontally scrollable viewport, show the phone swipe instruction, and provide **Open full-size diagram**.
- Desktop and tablet lesson visuals must remain fit-to-card.

No frontend build, package installation, Worker redeployment, D1 migration, progress reset, or browser-site-data clearing is required for this final presentation repair.

Production Cloud Sync endpoint:

`https://alfred-university-sync.totallywill13.workers.dev`

Protocol 2 and the existing D1 record structure are unchanged. Export Progress before replacing site files, preserve the Recovery / Student Sync Key separately, wait for GitHub Pages to finish, close old tabs, then reopen the same site URL so the **`alfred-u-v16-3-2-mobile-visual-final`** service worker can install the current cache. Do not clear browser site data as a routine update step.

## Release integrity

The accepted release gate preserves 24 production JavaScript files with 0 syntax failures, 25 HTML pages, 0 missing local references, 0 broken anchors, 125 calendar events / 125 unique UIDs, `.nojekyll`, the 62-lesson v16.3 instructional system, 24 labs, 262 CETa objectives, 78 Career objectives, and the 2,790 / 2,790 CETa/Career balance. The final mobile repair changes presentation/deployment files only and does not alter those protected instructional identities.
