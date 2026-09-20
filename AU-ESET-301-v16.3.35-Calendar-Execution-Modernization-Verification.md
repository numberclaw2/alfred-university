# AU-ESET 301 v16.3.35 — Calendar Execution Modernization Verification

**Release date:** September 20, 2026  
**Baseline:** v16.3.34 `v16.3.34-authoritative-visual-learning-layer-20260919`  
**Candidate:** v16.3.35 `v16.3.35-calendar-execution-modernization-20260920`  
**Result:** **PASS FOR UPLOAD**

## Purpose

Synchronize the accepted 31-week / 125-event Calendar with the current AU-ESET 301 learning system without reopening the accepted curriculum architecture. The Calendar is now an execution layer for the current Classroom stages rather than a legacy list of Learn / Practice / Lab notes.

## Implemented

- Preserved **125 event IDs**, **125 ICS UIDs**, **31 weeks**, calendar dates, lesson/lab/assessment identities, Progress addressing, and **Cloud Sync protocol 2**.
- Rewrote all 125 Calendar event records around the current flow: **Start Here → CETa Lesson → Career Lesson → Teaching Media/text path → Guided Practice → Lab/Application → Weekly Mastery**.
- Fixed the 10 weekless milestone/career/project checkpoints so each has explicit `contextWeek` and destination metadata. None can fall back to Week 01.
- Added explicit `advancePrep`, `prepForWeek`, and `contextWeek` semantics to seven future-week equipment reminders. Advance-prep items are excluded from the ordinary next-required-session path.
- Added a **read-only Calendar status layer** derived from existing Classroom/Progress state: Current required stage, Scheduled, Advance prep, Milestone, Complete, and Overdue. The Calendar does not create a competing completion record.
- Added explicit Calendar execution homes for **LAB-021, LAB-022, and LAB-024**. All **24/24** current Lab Center IDs now appear intentionally in the Calendar execution plan.
- Reclassified the Saturday evidence blocks in Weeks 24, 25, 26, 28, and 29 as **Project/Application** events because they are not separate Lab Center records; event IDs and ICS UIDs remain unchanged.
- Applied the audit-approved duration changes to **47 events**. The 31-week active study budget rises from **192.25 h** to **221.75 h**; the separate one-hour Week-18 Career Check remains in addition, so total timed scheduled work is **222.75 h**.
- Replaced the legacy “carry the concept forward” completion rule with the current policy: complete required stages/evidence, earn **≥80% weekly mastery**, earn **100% on safety-critical checks**, repair exact misses, and make a new attempt before the week is closed.
- Removed stale Calendar ownership of direct legacy video/resource lists. Current event notes route learners to the current Classroom Teaching Media/text path and reached-material Study Library.
- Added holiday-flex guidance for Thanksgiving, Christmas Eve / Dec. 26, and the New Year holiday weekend while preserving canonical event dates.
- Updated desktop/mobile Calendar UX with execution-status filtering, requirement/status chips, exact stage destinations, visible time budgets, missed-session guidance, and ≥44 px mobile period-arrow targets.
- Regenerated the simplified ICS from the upgraded event records while preserving the original UID set and UID order exactly.

## Static/data integrity verification

**PASS**

- JavaScript syntax: PASS for `course-data.js`, `site.js`, `release-notes-current.js`, and `service-worker.js`.
- Calendar records: **125 / 125**.
- Unique event IDs: **125 / 125**; numeric ID set remains 1–125.
- Requirement states: 107 REQUIRED, 10 MILESTONE, 7 ADVANCE PREP, 1 REQUIRED PREP.
- Advance-prep records: exactly IDs **5, 43, 60, 65, 69, 74, 110**.
- Current formal lab coverage: **24 / 24** Lab Center IDs represented, including LAB-021, LAB-022, LAB-023, and LAB-024.
- Current event descriptions containing `week.html?week=`: **0**.
- Current event descriptions containing `student-services.html#career`: **0**.
- Weekless milestone destinations that resolve to `learn.html?week=1`: **0**.
- Project/Application reclassification confirmed for IDs **100, 103, 106, 113, 117**.
- Holiday flex metadata confirmed for IDs **46, 63, 64, 68**.

## ICS verification

**PASS**

- VEVENT records: **125 / 125**.
- UIDs: **125 / 125 unique**.
- UID set versus v16.3.34: **exact match**.
- UID order versus v16.3.34: **exact match**.
- Folded ICS physical line length: maximum **73 octets**; zero lines exceed 75 octets.
- Current ICS descriptions containing legacy `week.html?week=` or `student-services.html#career`: **0**.
- The regenerated ICS uses the current stage/destination metadata and retains America/New_York calendar semantics.

## Chromium Calendar runtime verification

The execution environment blocks normal `http://localhost`, local HTTPS, and `file://` navigation. The audit therefore used the same controlled Chromium document/runtime-injection method used for prior visual/runtime QA: the **actual candidate HTML/CSS/JS files** were loaded into Chromium and executed in-browser without editing the production project files.

### Desktop — 1440 × 1000

**PASS**

- Calendar loaded with **125 events** and **31 course weeks**.
- Month, Week, and Agenda views rendered.
- Agenda rendered **125/125** event controls.
- **125/125 event modals opened successfully**.
- Modal-open failures: **0**.
- JavaScript/runtime exceptions: **0**.
- Search (`UART`) and Week-18 filtering worked.
- New execution-status filter rendered all required states.
- Advance-prep status filter returned exactly **7** events: IDs 5, 43, 60, 65, 69, 74, 110.
- Current-week dashboard displayed the **Current required stage** from the existing shared next-action logic and kept the next dated session separate.

### Milestone routing

**PASS**

Runtime-opened milestone/event IDs 22, 51, 77, 79, 80, 87, 96, 114, 118, and 122 all rendered explicit current destinations. **Zero** exposed a Week-01 fallback.

### Formal lab routing

**PASS**

Runtime-opened Calendar events explicitly contained and linked:

- ID 89 → **LAB-021 — CETa Mixed Practical Review**
- ID 92 → **LAB-022 — Project 1 Design Review**
- ID 121 → **LAB-024 — Portfolio Demonstration + Technical Defense**

### Mobile — 390 × 844

**PASS**

- Document viewport remained contained at **390 px** with no page-level horizontal overflow.
- The month grid remains intentionally horizontally scrollable inside its own container rather than widening the page.
- Event modal remained within the viewport and scrollable.
- Modal close target measured **44 px** wide.
- Calendar period arrows no longer appeared in the under-44-px touch-target scan.
- JavaScript/runtime exceptions: **0**.

## Classroom regression verification

**PASS**

The current candidate Classroom was executed across **all 31 weeks**.

- Weeks rendered: **31 / 31**.
- Current stages rendered per week: **7 / 7** for every week.
- Lab definitions available: **24**.
- Runtime exception events: **0**.
- The existing 62-lesson curriculum, beginner-first Career content, current media architecture, application/lab stage, and weekly mastery stage remained intact.

Representative stage headings remained the accepted current model:

1. Start with the destination
2. CETa Lesson
3. Career Lesson
4. Learn it from another voice—then connect it
5. Worked → guided → independent
6. Lab / Application
7. Prove the week, then repair exact gaps

## Protected systems

This release does **not** intentionally change:

- course release 16.3;
- evidence revision 16.2;
- Cloud Sync protocol 2;
- the 62 lesson bodies or lesson identities;
- CETa/Career standards mappings;
- the 24 lab definitions or Lab Center evidence rules;
- assessment answers/scoring;
- mastery thresholds or safety-critical thresholds;
- Project Center architecture;
- Teaching Media verification/selection;
- the glossary/vocabulary system;
- saved Progress record identities;
- event IDs or ICS UIDs.

## Environment limitations

The host environment prevented a native routed localhost/staging browser session, so this release does **not** claim a fresh end-to-end network test of service-worker installation, live Cloud Sync transport, or externally hosted media. Those systems were protected structurally: their protocols/keys were not changed, and the candidate passed browser execution for the affected Calendar and Classroom logic. A normal staging/public deployment should still receive the standard fresh-install / upgrade-cache / Cloud Sync smoke test after upload.

## Acceptance

**PASS FOR UPLOAD.**

v16.3.35 brings the Calendar forward to the current Alfred learning architecture without reopening the accepted curriculum. The 31-week course sequence, 125 event identities, 125 ICS UIDs, Progress identities, and Cloud Sync protocol remain stable while the Calendar now communicates the current CETa/Career teaching sequence, verified media path, guided practice, lab/project evidence, mastery/repair logic, realistic workload, milestone routing, advance-prep semantics, and progress-aware next action.
