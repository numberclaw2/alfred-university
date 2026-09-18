# AU-ESET 301 v16.3.13 — Week Overview Retirement QA

**Date:** September 18, 2026  
**Scope:** Step 3 — Week Overview only, plus the minimum owner-page edits required to preserve its one unique useful element and remove stale direct promotion.

## Purpose decision

- PASS — Week Overview no longer has a unique enough job to justify an independent weekly-content page.
- PASS — outcomes, CETa/career standards, and planned time already live in Classroom Stage 1.
- PASS — scheduled sequence/timing belongs to Calendar.
- PASS — hands-on evidence belongs to Classroom Application + Lab Center.
- PASS — required mastery belongs to Classroom Mastery + Assessment Center.
- PASS — reference depth belongs to Classroom/Engineering Library.
- PASS — the two-finish-line readiness guidance is already also rendered on Course Overview.
- PASS — the week-specific Career Translation block was the only meaningful item that needed relocation.

## Merge / retirement behavior

- PASS — Career Translation is now rendered in Classroom Stage 1 from the existing `ALFRED_ACADEMIC.careerMap` record.
- PASS — the moved block preserves capability unlock, roles-this-builds-toward, and interview prompt for each week.
- PASS — the Classroom no longer displays the dedicated Week Overview shortcut.
- PASS — `week.html` no longer renders the duplicate weekly module, resource stack, lab summary, mastery CTA, or separate readiness copy.
- PASS — `week.html` remains as a compatibility route so old bookmarks and hard-coded calendar-note links do not break.
- PASS — requested `?week=N` is preserved into Classroom and Practice links on the compatibility page.
- PASS — Course Overview no longer claims Week Overview is the schedule/source map and no longer promotes it in the main academic-sequence callout.

## Intentional deferral

- PASS — site-wide More-menu/footer references to Week Overview are intentionally NOT removed in this release. The locked roadmap assigns global Home + Navigation cleanup to Step 9.
- PASS — until Step 9, those legacy navigation links land on the compatibility bridge, not a second copy of weekly content.

## Static / runtime checks

- PASS — `learn.js`, `release-notes-current.js`, and `service-worker.js` pass JavaScript syntax validation.
- PASS — `build-info.json` parses and reports runtime **v16.3.13**.
- PASS — service-worker cache advances to `alfred-u-v16-3-13-week-overview-retirement-20260918`.
- PASS — Week Overview retirement introduces no new runtime asset, progress key, assessment identity, lab identity, or Cloud Sync record type.
- PASS — Release Notes records every addition/subtraction and the exact file manifest.

## Scope boundary

This release does **not** redesign Study, Practice, Engineering, Knowledge Base, Student Services, Home/navigation globally, Calendar behavior/data, labs, assessments, mastery formulas, projects, Progress, Cloud Sync, written lesson content, or Teaching Media.

Step 4 (Engineering) must not begin until this release is uploaded, deployed, and accepted.
