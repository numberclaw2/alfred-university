# Alfred University — v4.0 Final Functional QA Evidence

**Date:** October 24, 2026  
**Baseline:** GitHub `main` commit `7612cf437b60d2e68409d1528489b51c3b19f8e1`  
**Status:** Source-verified release candidate; **not** a fully externally validated CETa readiness program.

## Scope and provenance

This release modifies `ceta.js`, `service-worker.js`, and `ALFRED PROJECT GOVERNANCE.md`; adds the release notes and this QA report. The original source course data, media and Study Guide PDF are unchanged. Existing progress localStorage keys and Cloud Sync protocol stay stable.

## Results

| Check | Result | Evidence / qualification |
|---|---|---|
| Reconstructed source exact v3.5 baseline | PASS | Local `ceta.js`, `course.js`, `course.json`, `service-worker.js`, governance SHA-1 Git blob hashes matched published v3.5 |
| Module/page/question invariants | PASS | 30 modules, 373 teaching pages, both fresh 100-question banks disjoint, historical 635 question placements retained |
| JS parser validity | PASS | Node 22 `--check` on new runtime and original course data |
| Executable app/learning-record checks | PASS | 428 cases including all 373 pages, 30 orientations, 16 route renderers, two completed 100-item forms, unfinished exam reload, idempotent backup import and simulated remote Cloud Sync reconciliation |
| Actual Chromium HTML/CSS/JS rendering | PASS (local only) | 36 combinations of 18 routes × 390px / 1280px widths; zero runtime exceptions, zero viewport horizontal overflow; glossary and exam autosave interactions |
| Service worker install/activate/offline | PASS (simulated) | 57 static assets resolved; old cache deleted; offline page served; PDF explicitly not precached |
| Study Guide PDF | PRESENT UNCHANGED | 234-page `Associate_CET_Study_Guide_Sixth_Edition.pdf` from v3.2 stays in deployed tree, not repeated in this package |
| Live GitHub Pages verification | PENDING POST-UPLOAD | The source and local renderer are tested; deployed commit and cache update require post-upload check |
| Real iPhone Safari / actual network offline / Cloudflare Worker | NOT VERIFIED | This environment cannot assert those device/network behaviors, nor perform authenticated live Worker calls |
| External technical item and study-guide full-content review | PENDING | New mocks are original and disjoint, but lack independent subject-matter and psychometric validation |

## Focused adversarial regressions

1. **Blank local record beats cloud completed record:** addressed with additive merge of `started`, `seen`, scored attempts, `apply.done` and objective evidence. Verified by a mock Worker record containing unrelated legacy data. Unrelated legacy week fields remain present in outbound records.
2. **Repeat backup import doubles scores:** exact attempt and history identities deduplicated; repeated imports tested.
3. **Backup import omits unfinished exam:** draft `M29/M30` response maps are merged and restored when the backup contains them, without changing previous graded attempts.
4. **Old incomplete schema crashes rendering:** optional collections are normalized on cold load; original valid progress is preserved.
5. **Inadvertent restart erases draft:** restart asks for explicit confirmation when an unfinished exam has saved answers; prior graded history is retained.
6. **PWA tries to auto-download 21.5 MB Guide for offline:** service worker bypass preserved; deliberate tradeoff. The optional device-local PDF remains the offline alternative.

## Acceptance decision

**GO for uploading v4.0 preservation fixes** based on available static, simulated, and isolated Chromium tests. **NO-GO for claiming independently validated CETa readiness or fully tested production sync / iPhone behavior** until external testing and technical review occur.

## Manual final-acceptance smoke test (post-upload)

From an iPhone: open Learn M01, tap glossary definitions, mark one page read; verify the reading persists after a Safari restart. Open M29, select an answer, reload and confirm it remains. Export a progress backup; import it twice and confirm prior scores don't duplicate. Turn on airplane mode after loading the website; confirm coursework loads from cache (the PDF itself may not). If Cloud Sync is enabled, export a backup before testing sync across devices; do not overwrite an older device's only copy without a separate backup.
