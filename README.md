# Alfred University — v16.0

A university-style independent-study environment for **CETa preparation and practical electronics/test-technician skills**, supporting a longer path toward embedded-systems engineering while continuing school and employment.

This personal learning site is not an accredited university, ETA-endorsed course or guarantee of certification/employment. The green/gold/cream institutional setting is intentional: a familiar place to return to the work.

## Daily use

Open **Learn / Classroom** to be taught the current week. Resume a saved classroom stage or take the recommended next action. Study remains the daily planning and review companion. Follow the in-house lesson first; videos, university materials, simulations, PDFs, and the private booklet are additional explanations and practice, not a substitute for the lesson.

| Area | Responsibility |
| --- | --- |
| Learn / Classroom | The authoritative seven-stage teaching path, checks, practice, lab/application and weekly mastery |
| Study | Next action, guided sessions, review and local resume |
| Week | Weekly context, outcomes, lab requirements and source map |
| Calendar | Schedule and full event details |
| Practice | Lab Center and Assessment Center |
| Progress | Completion, notes, career gates, backup and Cloud Sync |
| Mastery | Current web evidence, retention and repair priorities |

More contains Course Overview, Engineering, Library, Projects, Search, Knowledge Base, Labs, Assessments, Standards, Documents, Student Services, About and Release Notes. Release Notes also remains under About. Click More; on a short screen it scrolls internally. Mobile uses a scrollable navigation drawer.

Quick, Standard and Deep Work are 20-, 60- and 120-minute plans, not forced deadlines. Classroom stages are predictable and resumable. Quiet Mode reduces decoration; Focus Mode concentrates on the active session. Save a next-action note when interrupted. Confidence schedules retrieval; explicit completion records completed work. Required lesson checks, lab checks, and weekly mastery make quizzes part of teaching; calendar-event quizzes remain supplemental. No mandatory hours log, spreadsheet gradebook or manual weekly mastery rating is required.

## Inventory and honest scope

- 24 HTML pages; 31 weeks, six phases, 62 in-house lessons and 125 calendar events.
- 24 labs with virtual/physical evidence kept distinct; 61 knowledge entries.
- 48 assigned and 99 deep-study resource listings, representing 133 normalized unique URLs.
- 262 CETa objective rows across 20 domains and 78 Alfred career standards.
- 223 active supplementary questions: 180 CETa and 43 career. The 1,195 historical/current records retain stable identifiers; they are not all active questions.
- 183 form/task definitions: 125 lesson/task entries, 24 lab checks, 31 weekly reviews and three major forms. Some entries provide task guidance instead of a quiz.
- Seven course PDFs plus the v16 Curriculum and Instruction Plan (Word). The live Classroom and that plan govern current teaching; the Academic System Guide governs platform workflow. Older binder workflow is explicitly archived.

The curriculum is deliberately source-rich and source-independent. Each week has a CETa lesson, a Career lesson, a combined application, a worked example, an embedded check with feedback, guided/independent practice, and a source-role map. The two tracks carry equal weight: 2,790 weighted minutes each across 31 weeks. The course target is 80% on weekly mastery and 100% on safety-critical checks; ETA's official exam information remains the authority for the actual credential.

The active bank directly tags 111 of 262 CETa objective rows. Use your own study booklet, current ETA competencies, errata and independent practice for full preparation. The 100-question breadth form uses five per domain and a 120-minute suggested window: Alfred's study design, not ETA's exam weighting. Forms reuse a finite bank. AI-assisted editorial answer review is not external psychometric validation.

Pre-v15.8 mixed-question aggregates are historical evidence rather than current mastery. Older scores and completed coursework remain. New required Classroom checks and current assessments build current evidence; there is no need to restart the course. Evidence indices do not predict exam passage or hiring. Low coverage may be unmeasured knowledge, not failure. Physical instrument handling, workmanship and board-debugging claims need physical evidence.

The schedule remains September 8, 2026 through April 10, 2027. This release does not generate a rolling schedule for a new cohort.

## Upload this release

Read `UPLOAD-INSTRUCTIONS.txt`. Extract the flat ZIP and upload **all 69 files together** to the existing GitHub repository root beside `index.html`. Do not upload the ZIP itself, add a wrapper folder or rename referenced files. There is no frontend build or package installation.

Keep the existing GitHub Pages branch/root setting. Assets use relative paths. A different domain is a new browser origin: back up/restore progress and configure an allowed Cloud Sync origin before changing hosts. This release does not configure a new domain or require a backend migration.

Export Progress and keep your Recovery Key separately before replacing files. After deployment, close old tabs and reopen the site. Do not routinely clear site data, which can erase local records and the stored key. The service worker replaces only its own older caches.

Unused mirror tools, old hotfix instructions and unused image files are excluded from the package. Their historical GitHub copies can remain because the app no longer loads them. No private booklet, learner backup, recovery key, backend credential, repository history or QA dependency folder belongs in the public upload.

## Architecture and records

The frontend is static HTML/CSS/JavaScript with no conventional login. Optional Cloud Sync uses Cloudflare Worker + D1 at:

`https://alfred-university-sync.totallywill13.workers.dev`

Normal setup requires a private Recovery / Student Sync Key; the server address is built in. Advanced server settings are for maintenance. The public Worker root may return 404; `/health` reports service status. Protocol 2 and existing event/week/readiness/analytics keys remain compatible. No Worker or D1 schema update is required for v16.0.

| Local key | Purpose |
| --- | --- |
| `alfred-u-progress-v2` | Canonical academic records, completion, review schedules, assessments and evidence |
| `alfred-u-study-v13` | Local session, preferences, parking lot and recent UI history |
| `alfred-u-quiet-mode` | Local Quiet Mode preference |
| `alfred-u-sync-config-v1` | Worker address, private recovery key and device/sync configuration |

Cloud records are not end-to-end encrypted. Anyone holding the Recovery Key can access that record. Do not enter unrelated secrets in notes or put the key in website files.

Export Backup contains academic progress, not the key. Import confirms local replacement and does not silently replace cloud credentials. Local reset clears academic/saved Study state and disconnects sync while preserving the key and cloud record. Reconnecting can restore cloud data. Erase Cloud Record is a separate permanent action.

Sync before switching devices and keep periodic exported backups. Avoid editing the same record simultaneously on multiple offline devices; record-level last-write-wins is not field-level conflict resolution. Frontend stale-response guards protect local reset but do not control another connected device's actions.

## Offline use

The v16.0 service worker covers all current HTML routes and app dependencies, including the Classroom curriculum, assessment policy, current Word teaching plan, documents, images and the ICS export. Essential-file failure rejects an incomplete installation; optional image/PDF failure does not block the application. Unknown offline navigation shows the offline page; temporary host failures can use cached content. External videos, publisher pages and simulators still need the internet. Browser storage limits or eviction can prevent a PDF from remaining cached. Visit needed content online before relying on it offline. Local records and caches belong to this browser/origin.

## Source map and maintenance

`curriculum-data.js` is the v16 instructional source of truth for 31 weeks, 62 lessons, checks, teaching media, applications and standards. `learn.html`/`learn.js` deliver the Classroom. `course-data.js` holds schedule/resources. `academic-content.js` holds labs, concepts and PDF search text. `assessment-data.js` holds questions and scope metadata; `assessment-engine.js` selects forms; `assessment-policy.js` defines required versus supplemental roles. `academic-state.js` provides shared compatibility/week helpers. Page scripts implement the tools; `styles.css` and `site.js` supply presentation/navigation. `release-notes.js` supplies the visible history.

Preserve record IDs when maintaining content, regenerate PDF search text after document edits, check internal references and advance the app-cache version for coherent updates. Release Notes records the detailed change history; the v16 Curriculum & Instruction Plan records the teaching rationale and maintenance limits. QA tooling is not required on the public host.
