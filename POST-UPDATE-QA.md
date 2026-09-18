# AU-ESET 301 v16.3.16 — Student Services Retirement QA

**Date:** September 18, 2026  
**Scope:** Step 6 — Student Services only, plus the minimum Study, Lab Center, and Progress edits required to preserve useful support guidance at the point of use.

## Purpose decision

- PASS — Student Services no longer has a unique enough job to justify an independent catch-all support page.
- PASS — Study already owns next-action support and blocked-learner recovery.
- PASS — Lab Center is the correct permanent owner for standing bench-safety guidance.
- PASS — Progress career readiness is the correct owner for job-fit screening and bridge-role guidance.
- PASS — Project Center already owns employer-facing evidence; no duplicate project/career evidence block was created.

## Merge / retirement behavior

- PASS — the complete five-part Office Hours protocol is preserved inside Study's I’m Stuck modal.
- PASS — the Office Hours protocol still requests week/assignment, expected behavior, actual evidence, attempted fixes, and diagnosis/teaching rather than only an answer.
- PASS — the Lab Manual office-hours link remains available from the moved Study guidance.
- PASS — Lab Center now contains the six standing safety rules previously isolated on Student Services.
- PASS — Lab Center explicitly defers to manufacturer/device-specific safety instructions when those are more specific.
- PASS — Progress now contains the role-fit filter and the five useful bridge-role families from Student Services.
- PASS — role-fit guidance continues to emphasize actual technical duties over job title.
- PASS — `student-services.html` is now a compatibility route rather than a miscellaneous support portal.
- PASS — compatibility cards retain `#office-hours`, `#career`, and `#lab-safety` anchors for old links and route to the new owner systems.

## Intentional deferral

- PASS — site-wide More-menu/footer references to Student Services and its legacy anchor links are intentionally not removed in this release. Step 9 owns final Home + Navigation cleanup.
- PASS — until Step 9, those links land on the compatibility route rather than duplicated support content.

## Static / runtime checks

- PASS — `release-notes-current.js` and `service-worker.js` pass JavaScript syntax validation.
- PASS — `build-info.json` parses and reports runtime **v16.3.16**.
- PASS — service-worker cache advances to `alfred-u-v16-3-16-student-services-retirement-20260918`.
- PASS — no new progress key, assessment identity, lab identity, project identity, or Cloud Sync record type is introduced.
- PASS — Study's active-learning session logic and Progress's existing readiness checkbox identities are unchanged.
- PASS — Release Notes records every moved/retired behavior and the exact file manifest.

## Scope boundary

This release does **not** redesign Study, Practice, Week Overview, Engineering, Knowledge Base, Home/navigation globally, Calendar behavior/data, lab definitions, projects, assessments, mastery formulas, Progress storage/sync logic, Classroom lesson content, or Teaching Media.

Step 7 (About) must not begin until this release is uploaded, deployed, and accepted.
