# AU-ESET 301 v16.3.47 — Final Teaching Media Regression Report

**Date:** September 21, 2026  
**Baseline audited:** v16.3.46  
**Final repair build:** v16.3.47

## Result

**PASS — no Teaching Media-related regression defect identified in the final source/runtime audit.**

## Systems intentionally changed

- Teaching Media requirement/status presentation
- Lesson resource grouping / required-resource visibility
- Teaching Media exact-section backlink routing
- Read-only reference preview routing
- Course-wide resource integration map (FOA broad index disposition)
- Retirement of the superseded v16.3.45 video-only integration layer
- Build/cache/release metadata

## Systems not modified

No curriculum, assessment, lab, glossary-data, calendar, Study, mastery, progress, Cloud Sync, parking-lot, Career reconstruction, semantic routing, question routing, or instructional-visual data file is modified by v16.3.47.

## Regression checks

- 31/31 course weeks have retained Teaching Media cards with valid instructional relationships.
- 0 orphan retained assignments.
- 0 invalid lesson/section IDs.
- 0 missing source IDs.
- 0 missing assignment mappings.
- 0 Required/Optional contradictions.
- Required sources are rendered outside optional/collapsible disclosure.
- Optional/supporting sources retain progressive disclosure.
- Exact Teaching Media → lesson URLs include origin week, target week, stage, lesson, and section.
- Cross-week future-section links use read-only reference preview and do not advance the saved resume point.
- Lesson → Teaching Media links resolve back to a rendered canonical/alias-safe card.
- Lazy YouTube iframes still begin without `src`; the production handler checks `getAttribute('src')` before assigning the privacy-enhanced embed URL.
- Inline video controls expose `aria-expanded` and `aria-controls`.
- Static Learn HTML has no duplicate IDs.
- Relevant JavaScript files pass `node --check`.
- `build-info.json` parses.
- CSS braces reconcile.
- Service-worker CORE paths resolve in the reconstructed current baseline and v16.3.47 cache identifiers are unique.
- The obsolete video-only placement layer is no longer loaded or cached; its retained source file is an explicit retired compatibility marker with no library-only decisions.

## Browser/deployment constraint

Headless Chromium is installed and was launched through its DevTools endpoint, but this execution environment enforces an organization policy that replaces localhost navigation with **“127.0.0.1 is blocked — Your organization doesn’t allow you to view this site.”** The public GitHub Pages candidate was also unavailable through the web retrieval tool. Therefore no claim of a live post-upload browser deployment was fabricated. Responsive/accessibility acceptance below is source/DOM-contract based, and deployment activation is the only post-upload smoke check remaining.

## Responsive/accessibility source acceptance

The final CSS keeps resource cards fluid, uses 16:9 responsive video wrappers, changes action grids to a single column on narrow screens, allows long course-location links to wrap, and makes reference-preview navigation single-column on mobile. Required resources are non-collapsible; supporting resources use native `<details>/<summary>`. Controls are semantic buttons/links, iframe titles remain present, focus-visible styling remains global, and course-location links use descriptive relationship + lesson labels rather than “click here.” No accessibility blocker was identified in the source-level final pass.
