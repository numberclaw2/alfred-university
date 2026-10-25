# Alfred University v4.9 — Actual academic regression tests and limits

**Source baseline:** deployed v4.8, GitHub commit `877b3d118690b23b225d05a6646719edd5801cab`. Inputs were v4.8 exact ZIP-reconstructed course.js, course.json, ceta.js and service worker.

## Passed checks

- Parsed new `course.json` and its JS serialization: strict dataset identity. Node `--check` syntax of `course.js` and `service-worker.js` passed.
- Structural invariants: 30 modules, 373 preserved page IDs, exactly 262 old ETA objective IDs and titles, 682 prior scored-question placements, original 200 fresh-mock items and answer keys unchanged.
- Preserved all prior `readings` and `labs` records, external reference library and glossary. No progress key or Cloud Sync runtime modification; old learner history was not accessed.
- Exactly 17 new question IDs added, each appended to a unique instructional module's mastery list. Exactly 17 teaching-page `goldTeaching.paragraphs` received one added technical explanation. No existing goldTeaching content deleted.
- Precisely 11 page section corrections and three objective-home corrections registered. After the changes, every objective in every teaching module still has at least one instructional page under its assigned section.
- Independent numerical recomputation of six answer values: **6 / 6 PASS**. More general factual claims were spot checked against ETA, original scanned pages and manufacturer technical references; this is not a complete external SME review.
- Actual Chromium DOM checks: **100 PASS**, 390 px and 1280 px: 32 primary route renders, 34 updated instructional pages, 34 complete module-mastery attempts with original correct options selected; zero uncaught page errors and no horizontal layout overflow.
- PWA service-worker cache version bumped to ensure new educational dataset replaces old cached version; no changes to the Worker API, private key logic, saved progress or connection status indicator.
- Exact release ZIP read-back comparison and CRC integrity verified.

## Not certified

- Passage-by-passage technical accuracy of all 234 scanned publisher pages or 373 teaching pages.
- Psychometric properties, exam difficulty and independent instructor validation of new or original assessments.
- ETA actual examination item content or predictive certainty of passing. No source supports near-guarantee.
- Actual iPhone Safari, live authenticated Cloud Sync or extensive offline acceptance. Out of scope per learner priority.

**Disposition:** targeted remediation **PASS**; course-wide CETa academic sign-off **OPEN**.
