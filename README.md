# Alfred University — AU-ESET 301 v16.3

AU-ESET 301 is a fictional, university-style independent-study environment built around two equal goals:

1. Prepare for the current ETA Associate Certified Electronics Technician (CETa) competency scope.
2. Build demonstrable electronics, hardware-test, and embedded-systems skill for an electronics / embedded career transition while continuing school.

It is not an accredited university, an ETA-endorsed course, an official exam, or a guarantee of certification or employment.

## Current production state — v16.3.52 Direct lesson/practice navigation

The accepted instructional curriculum remains **v16.3**. Runtime patch **v16.3.52** preserves the accepted v16.3.50 Teaching Media architecture and the v16.3.51 source-health hotfix, then adds direct page navigation inside CETa/Career lessons and Guided Practice.

Current production markers:

- Course release: `16.3`
- Runtime patch: `16.3.52`
- Objective evidence revision: `16.2`
- Cloud Sync protocol: `2`
- Build: `v16.3.52-direct-section-navigation-20260922`
- Service-worker cache: `alfred-u-v16-3-52-direct-section-navigation-20260922`

### v16.3.52 direct lesson & Guided Practice navigation

- CETa and Career lessons now provide **Previous/Next**, a named section selector, **Page X of Y**, and direct numeric page entry.
- First-pass learners may jump backward among completed/unlocked pages but cannot skip forward past the normal instructional gate.
- A lesson that was already passed before later content reconstruction opens all of its current pages for review while preserving the old pass and official resume point.
- Guided Practice is divided into selectable pages while keeping one shared notebook and the existing completion/evidence gate.
- Navigation controls do not create new curriculum requirements and do not alter assessment, lab, Project 1, progress-ID, Calendar, glossary, or Cloud Sync semantics.

### v16.3.51 post-upload source hotfix

- Preserves the v16.3.50 Teaching Media workload calibration.
- Replaces one stale Week 17 Microsoft configuration Study link with Microsoft's current stable Windows configuration documentation hub.
- No Teaching Media counts or instructional assignments changed.

### v16.3.50 Teaching Media workload calibration

- Classroom remains Required-only: **20 universal Required functions + 7 route/task-specific conditionals**.
- Strong alternates/remediation remain in Study; deep professional references remain in Engineering Library.
- The separate CETa Study Guide recommended-page integration phase remains out of scope.

## v16.3.7 whole-system audit repair

The completed Parts 1–8 acceptance audit found zero blockers and three bounded material defects. v16.3.7 resolves them without reopening passed curriculum/media systems: CETa readiness now requires independent second-source evidence; the mastery engine no longer depends on nonexistent higher-difficulty CETa items and explicitly surfaces thin bank breadth as Evidence Limited; and Project 2 is canonically Automated Hardware Validation / HIL across the Project Center and Career Readiness materials.

## Teaching Media architecture

The accepted load order is:

1. `curriculum-data.js` — accepted v16.3 curriculum/source registry.
2. `teaching-media-overrides.js` — earlier targeted Teaching Media layer.
3. `teaching-media-self-reliance.js` — v16.3.5 independent-path attempt retained for provenance and existing assignments.
4. `teaching-media-content-completion.js` — v16.3.6 accepted content-completion and metadata-correction layer.

The v16.3.6 overlay uses append/de-duplicate behavior for missing instruction and narrowly patches inaccurate media-card claims. The first post-repair audit triggered a corrective pass for Week 1 ESD, Week 7 semiconductor sequencing, Week 12 Git metadata, Week 27 test-workflow sourcing, and Week 28 productivity/project planning; the final re-audit accepted all 31 weeks. It does not rewrite the accepted Alfred lessons.

Teaching Media is intended to provide the explanatory preparation layer. It does **not** replace required labs, projects, measurements, soldering/rework practice, coding, debugging, controlled troubleshooting/fault work, assessments, mastery gates, or physical evidence.

## What v16.3.7 does not change

This release does not change:

- the 62 primary Alfred lessons;
- the 24 labs or practical evidence rules;
- instructional objectives or standards mappings;
- CETa/Career 50/50 program balance;
- assessment question identities and answers;
- weekly/lab score thresholds and safety-critical 100% gates;
- Study Guide assignments;
- calendar dates, event IDs, or iCalendar UIDs;
- progress keys, saved progress, or assessment history;
- Cloud Sync protocol 2 or Student Sync Key behavior;
- module sequencing;
- lesson SVGs or the accepted mobile visual system.

## Files of record for v16.3.7

- `curriculum-data.js` — accepted v16.3 curriculum/source.
- `teaching-media-overrides.js` — earlier targeted media overlay.
- `teaching-media-self-reliance.js` — v16.3.5 media layer retained.
- `teaching-media-content-completion.js` — accepted v16.3.6 content-completion layer.
- `learn.html` — Classroom load order.
- `AU-ESET-301-v16.3-Resource-Verification.md` — final v16.3.6 Teaching Media acceptance record.
- `AU-ESET-301-v16.3.7-Whole-System-Audit-Repair-Report.md` — current whole-system repair record.
- `release-notes.js` + `release-notes-current.js` — historical/current release record.
- `build-info.json` — deployment marker.
- `service-worker.js` — offline/cache behavior.

## Deployment rule

Upload every file in the v16.3.7 whole-system-audit-repair package to the repository root, replacing matching files. No Worker/D1 migration, progress reset, calendar re-import, or Cloud Sync change is required.

Production Cloud Sync endpoint remains unchanged:

`https://alfred-university-sync.totallywill13.workers.dev`


### Final Week 20 closure
The final semantic re-audit added direct POTS loop-start instruction for tip/ring, off-hook current, dial tone, and ringing. v16.3.6 is accepted at 31/31 PASS after that correction.
