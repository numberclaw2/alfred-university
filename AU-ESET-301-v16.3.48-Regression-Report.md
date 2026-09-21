# AU-ESET 301 v16.3.48 — Part 2 Regression Report

**Baseline:** v16.3.47 (`be962462b5c7e8de8981e59a9e72d67e315af8f9`)

## Changed runtime surface

Only the following runtime/source files are changed by Part 2:

- - build-info.json
- learn.html
- learn.js
- outside-literature-integration.js
- release-notes-current.js
- service-worker.js
- styles.css

No curriculum-data, Career reconstruction, assessment, lab, glossary, Study, calendar, progress, parking/Cloud Sync, question-routing, semantic-routing, or instructional-visual source file is modified.

## Regression checks

- JavaScript syntax: **PASS** (`learn.js`, `outside-literature-integration.js`, `service-worker.js`, `release-notes-current.js`).
- Script order: **PASS** — accepted Teaching Media map → Part 2 literature layer → state/site → v16.3.48 lesson renderer.
- Existing video channel: **PASS** — no new source ID collides with an accepted Part 1 source ID; literature detection prevents a selected written overlay from creating a YouTube player.
- Required-resource visibility: **PASS** — the v16.3.47 required-resource group remains outside optional/supporting disclosure.
- Exact backlinks/reference-preview behavior: **PASS at source/runtime-contract level** — Part 2 uses the accepted v16.3.47 routing functions without replacing them.
- Combined lesson-resource density: **PASS** — maximum remains 7 resources in one section.
- Part 3 boundary: **PASS** — `privateGuide` / CETa Study Guide recommended-page integration is not added.
- Service-worker version/cache boundary: **PASS** — v16.3.48 cache and literature assets are explicit.
- Responsive/accessibility source contracts: **PASS** — literature cards inherit semantic links/buttons, required-status labels, native disclosure, focus behavior, and mobile single-column actions; scoped mobile rules were added without redesigning Alfred.

## Browser/deployment limitation

The environment's Chromium binary launches, but local/file execution did not provide a usable full Alfred application because the complete production dependency set is not locally materialized here; the public Cloudflare Worker URL is also inaccessible through the available web retrieval path. No live deployed-browser PASS is fabricated. Runtime integration was instead executed in Node/V8 against the accepted v16.3.47 placement model, and all source/static hard gates were rerun after implementation.

**Known Part 2 regressions:** 0.
