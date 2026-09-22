# AU-ESET 301 v16.3.53 — CETa Study Guide Integration Implementation Report

## Baseline discovered during mandatory pre-audit

- Production baseline: **v16.3.52** (`v16.3.52-direct-section-navigation-20260922`).
- GitHub `main`: commit `2538b6f9e233cfd990ae73e75da7ac5bb99ab7ad`.
- GitHub Pages deployment: run **#114** completed successfully for that exact commit.
- Exact deployed Pages artifact was downloaded and used as the implementation source.
- No commits newer than the completed Study Guide audit baseline existed, so no newer feature branch or runtime work had to be reconciled.
- Baseline invariants: 31 modules, 62 primary lessons, 24 labs, Cloud Sync protocol 2, 20 universal + 7 conditional calibrated Teaching Media resources.
- Actual current timed Calendar total is **222.75 hours**. This differs by one hour from the older ~221.75 audit shorthand; the deployed Calendar was treated as authoritative and was not changed.

## Implementation

The Study Guide integration is additive and metadata-driven. Alfred remains the primary teacher. `ceta-study-guide-map.js` is the single source of truth for lesson Related Learning, Teaching Media, Study, Search, errata, page disposition, cross-track reuse, and remediation.

The map accounts for all **224 printed pages** of the Associate CET Study Guide, Sixth Edition:

- **64 Required** printed pages.
- **133 Study / Review** printed pages.
- **27 Reference / Historical** printed pages.
- Required reading occurs in **14 of 31 weeks**; **17 weeks** receive no new universal Required Study Guide reading.
- Audit-approved Required time remains approximately **221–260 minutes** across the course.

## Learner-facing changes

- Added compact **Related Learning** blocks at exact lesson pages. Required reinforcement is visible; optional/review material is collapsed.
- Existing point-of-use videos/literature/professional sources are presented in the same Related Learning hierarchy rather than a competing second resource block.
- Teaching Media now includes the Required Study Guide in the **Required Path** and a separate **Weekly Resource Map** covering the week's Study Guide map, active videos/literature/professional references, and lesson diagrams.
- Study includes reached optional Study Guide material alongside existing on-demand media with need/format/track filtering.
- Search Everything indexes Study Guide metadata only, not copyrighted book content.
- Active Recall repair can route a weak concept to an exact Study Guide page range plus its exact Alfred teaching page.
- No per-page “I opened the PDF” completion checkbox was added. Opening a locator/private copy is not mastery; existing practice/application/mastery evidence remains authoritative.

## Private-copy handling

The copyrighted/private Study Guide PDF is **not included** in the public site, ZIP, service worker, GitHub files, or Cloud Sync. Locator mode always shows edition/chapter/printed-page information. A learner may explicitly connect a legitimately owned PDF on one device; that blob is stored only in device-local IndexedDB and may be forgotten/replaced. The verified private copy uses printed-page → PDF-page offset **+10**.

## Week 4 sequencing repair

The misplaced Week 4 `Number systems and Boolean algebra` teaching record remains in underlying curriculum data for compatibility, but `ceta-study-guide-map.js` marks it `hiddenFromLesson`. The learner-facing Week 4 AC/transient sequence now skips it. Existing Week 11 digital instruction remains the authoritative home rather than duplicating the content.

A saved-progress migration handles old Week 4 page numbering. Pages after the removed learner page shift by one; completion recorded specifically on the removed page is dropped rather than being transferred to the next page. Historical completed-stage passes remain intact under the existing v16.3.52 prior-pass review behavior.

## Errata and authority

Structured official ETA errata is attached to mapped pages 68, 102, 138, 202, and 224. Page 138 is on the Required path, so its correction appears directly with the card. Current ETA competency, formula, certification, manufacturer, safety, and medical sources remain controlling where Study Guide material is dated.

Historical/current-context metadata is applied to old certification administration, safety caveats, legacy cellular material, older instrumentation context, older service-business framing, Appendix B, and the book formula sheet.

## Preserved systems

The implementation did not modify the curriculum owner, lab/project definitions, assessment owner, Calendar, glossary, instructional visual owner, Teaching Media calibration layer, Engineering Library owner, Cloud Sync, or Project 1 data. The existing v16.3.52 Page X of Y and Guided Practice navigation remain in place.

## Version

Runtime patch: **v16.3.53 — CETa Study Guide Instructional Integration**.
