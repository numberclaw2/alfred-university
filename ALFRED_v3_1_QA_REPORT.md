# Alfred University AU-ESET 301 · v3.1 Academic Primary-Source Integration QA

**Date:** October 24, 2026 (America/New_York)  
**Source baseline:** `numberclaw2/alfred-university`, GitHub `main` commit `7bee837663160bb199a53ddc8a68e5ea439f4b77` (fully matched to local v3.0 Package 2 Git blob fingerprints before editing).  
**Intended delivery:** direct root-level replacement files, not an installer or generator. No GitHub commits or live website mutations were performed in generating this package.

## Independent primary source verification

- ETA's **©2025 Associate CETa Competency Requirements** was inspected on its own etai.org URL: https://www.etai.org/comps/CETa_comps.pdf. These requirements control the syllabus and the questions Alfred should prepare the learner to answer; local teaching-metadata quality is not thereby proven.
- ETA's CETa certification page confirms 100 questions, 2 hours, 75% passing: https://www.etai.org/electronics.html. Alfred's two 85% internal readiness practice target is an additional target, not an official requirement.
- ETA's Sixth Edition Study Guide remains the publisher-directed learning reference, not redistributed. The 2025 official competency document cites the Sixth Edition **Fifth Printing, 2024**. The full user-owned book is **not available for chapter-page verification** in this task. No book passage was reclassified as verified.
- ETA's **public two-page Sixth Edition errata** was actually read and visually inspected: https://www.etai.org/6thEdASTErrataSheet.pdf. Eleven topic- and question-specific corrections were placed at appropriate on-page learning checkpoints; none retroactively verifies unreviewed book content.
- ETA's **©2025 Common Formulas Sheet** was inspected at https://www.etai.org/Common_Formulas.pdf and remains an authoritative supplementary formula reference.

## Website regression and counts

| Invariant | Old v3.0 P2 | New v3.1 | Result |
|---|---:|---:|---|
| Modules | 30 | 30 | Identical identifiers |
| Instructional teaching pages | 373 | 373 | Identical page records and order |
| Official objective entries (local provisional) | 262 | 262 | Same objective data |
| Original scored question placements | 635 | 635 | Identical question IDs, prompts, choices and answer keys |
| Unscored practice candidates | 60 | 60 | Identical records |
| Inherited publisher-book reading records | 20 | 20 | Identical assignments; still provisional |
| Archived study-guide index records | 62 | 62 | Preserved |
| Instructional modules without inherited reading card | 10 | 10 | Now receive visibly provisional companion checkpoints |
| ETA publisher errata notice placements | 0 | 11 | New verified-public-errata content |
| New publisher alignment crosswalk | 0 | 262 objective entries | New editorial/export aid |
| Existing media placements | 12 figure references / 3 videos | Unchanged | No loss |
| Learner progress schema and Cloud Sync | v1 + protocol 2 | Unchanged | No storage clear/migration |

## Executable checks

- `node --check`: `ceta.js`, `course.js`, `service-worker.js` — **PASS**.
- Full `course.js` data payload equals `course.json` after decoding — **PASS**.
- Executable JavaScript VM renderer: **20/20 test assertions PASS** covering all 373 page outputs, all 373 ETA competency ribbons, all ten supplemental Study Guide checkpoints, all eleven ETA errata placements, all 30 Start module authority panels, the 28-module Library study path, sixth-edition private reader and calibration context, official source links, all 100 questions in both M29/M30 practice forms, no false readiness/master credit, release-document links and source-mapping metadata.
- Source-content invariants from v3.0 P2 (`sections`, `objectives`, `pages`, scored `questions`, `readings`, `labs`, 60 candidates) compared for every module — **PASS**.
- New files referenced in PWA `STATIC` manifest are included. Non-new paths resolve to source repository files — **PASS**.
- ZIP integrity (`ZipFile.testzip`) — **PASS**.

## Not verified — do not mark academic acceptance complete

1. **Full Sixth Edition chapter passages and chapter-quiz content**: the copyright-protected owned copy was not accessible. Twenty inherited reading citations and seven archived proposed ranges remain explicitly unverified. Three modules have no reliable specific page candidate and prompt a book-index search instead. These are study aids, **not newly certified Required assignments**.
2. **Full 2025 ETA framework editorial fidelity**: the actual authoritative PDF was reviewed, but a line-by-line independent check of all 262 local objective titles/IDs against the source, and a subject-matter review of teaching accuracy across the 373 pages, remains incomplete. Local tag counts do not prove mastery.
3. **Two independent 100-item mock banks**: M29 and M30 remain reused-instructional bank rehearsals with overlap. Their scores correctly cannot confer readiness status. Passing Alfred practice does not grant ETA certification.
4. **Real Chromium/site navigation**: a `file://` navigation smoke test returned `ERR_BLOCKED_BY_ADMINISTRATOR` in this environment. The 20/20 result is actual JS rendering/validation rather than a live browser assertion.
5. **Live GitHub Pages caching, iPhone access, source URLs from the user's network, Cloud Sync round trip and hands-on competence**: not directly tested.

**Verdict:** READY FOR GITHUB UPLOAD as a larger academic governance and Study Guide UX correction. **NOT A CLAIM OF COMPLETE ETA EXAM ALIGNMENT** until the original guide, independently validated fresh exams, and real-device tests satisfy their respective gates.
