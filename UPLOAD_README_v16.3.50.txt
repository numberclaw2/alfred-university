AU-ESET 301 v16.3.50 — TEACHING MEDIA ARCHITECTURE / WORKLOAD CALIBRATION
======================================================================

BASELINE
GitHub main / v16.3.49 Teaching Media Filters
Verified baseline commit: c3eef84eb3e623bfc36d89a8336e7887bd49c2e9

PURPOSE
Implements the approved 31-week Teaching Media workload audit. Classroom becomes Required-only; alternate/remedial resources move to Study; professional manuals/courses/specifications move to Engineering Library; route-specific media becomes conditional; known duplicate/stale/toolchain defects are repaired. Core curriculum remains v16.3.

UPLOAD
Upload/replace every file in this ZIP at the repository root. This is a changed-files-only flat package.

IMPORTANT
The ChatGPT GitHub connector was read-only for refs/writes (403), so this package was not committed or deployed automatically. Local runtime QA passed; live-site/browser verification must occur after upload.

AFTER UPLOAD
1. Confirm build-info.json reports runtimePatch 16.3.50 and build v16.3.50-teaching-media-architecture-20260921.
2. Hard refresh once so service-worker cache alfred-u-v16-3-50-teaching-media-architecture-20260921 activates.
3. Week 1 > Teaching Media: confirm exactly 3 universal Required cards (injury response, multimeter, bounded CV/CC).
4. Week 2 > Teaching Media: confirm the page explicitly says no external Teaching Media is required.
5. Week 6 > Teaching Media: confirm LTspice is labeled Route-specific and states Simulation route.
6. Week 12: confirm Adafruit is universal Required and soldering/wick are Route-specific.
7. Week 18: confirm NXP I2C is universal Required and Saleae STM32 I2C is Route-specific.
8. Study > Study Media: confirm migrated resources appear with Search / Need / Format / Track filtering after relevant teaching sections are reached.
9. Engineering Library: confirm migrated professional references/courses appear alongside the existing deep-resource library.
10. Smoke-test mobile width and desktop for Classroom Teaching Media, Study Media, and Engineering Library.
11. Confirm progress, Cloud Sync, glossary click behavior, labs, Project Center, Calendar, and assessments still operate normally.

QA
See AU-ESET-301-v16.3.50-Teaching-Media-Architecture-QA.md and AU-ESET-301-v16.3.50-31-Week-Teaching-Media-Architecture.csv.
