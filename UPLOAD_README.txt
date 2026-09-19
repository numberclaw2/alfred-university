AU-ESET 301 v16.3.28 — NATIVE UX AUDIT ROUND 2 TARGETED REPAIR
================================================================

Baseline: verified deployed v16.3.27 GitHub Pages artifact.
Upload every file in this ZIP directly to the GitHub repository root, replacing same-named files.

NEW
- AU-ESET-301-v16.3.28-Native-UX-Round2-Repair.md

REPLACE / UPDATE
- POST-UPDATE-QA.md
- SHA256SUMS.txt
- UPLOAD_README.txt
- build-info.json
- release-notes-current.js
- service-worker.js
- site.js
- ux-system.css
- ux-system.js

WHAT THIS REPAIRS
1. Release Notes clipping on 430/390/360px phones.
2. Removes the generic 63-section Release Notes On-this-page TOC.
3. Home course-packet statistic overflow at 360px.
4. Back-to-top overlap risk on Home.
5. Full ALFRED UNIVERSITY wordmark preservation at 360px.
6. Calendar previous/next arrows widened to the 44px control target.

NATIVE QA
- 120/120 repaired page/viewport renders completed without fatal errors.
- 36/36 representative mobile Menu/Search interaction checks passed.

PROTECTED
No curriculum, lessons, Study sequencing, Classroom stages, glossary data,
Vocabulary Study scheduling, Teaching Media, calendar data, assessment scoring,
mastery logic, labs, projects, Progress records, Cloud Sync, or branding artwork changed.
