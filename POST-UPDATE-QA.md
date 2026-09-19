# POST-UPDATE QA — v16.3.28 Native UX Audit Round 2 Repair

## Baseline
- Base artifact: exact GitHub Pages artifact deployed for v16.3.27 / commit `204e2ff1be4a609b7a7ca95656947807a33d7fe7`.
- Change scope: UX presentation/runtime only.

## Static verification
- `build-info.json` parses and reports runtimePatch `16.3.28`.
- `site.js` loads `ux-system.css?v=16.3.28` and `ux-system.js?v=16.3.28` with v16.3.28 loader guards.
- `ux-system.js` internal runtime guard is v16.3.28.
- Release Notes contains the v16.3.28 exact-file manifest.
- Service worker namespace is `alfred-u-v16-3-28-native-ux-round2-20260918`.
- Service worker includes cache-busted v16.3.28 UX CSS/JS requests and this verification report.
- JavaScript syntax passed for `site.js`, `ux-system.js`, `service-worker.js`, and `release-notes-current.js`.

## Native Chromium regression
- 20 user-facing pages × 6 viewport widths = 120 native render combinations.
- Viewports: 1440×1000, 1024×900, 768×900, 430×900, 390×844, 360×800.
- Fatal renders: 0.
- No targeted v16.3.28 regression flags remained.

### Previously failing findings now passing
- Release Notes mobile release-list/card min-content clipping: PASS at 430/390/360.
- Release Notes generic 63-section `On this page` control: absent as intended.
- Home 360px course-packet statistic overflow: PASS.
- Home Back-to-top overlap risk: control suppressed on Home.
- Home 360px ALFRED UNIVERSITY wordmark: full name remains visible; optional subtitle is hidden first.
- Calendar previous/next period controls: 44px wide at phone widths.

## Mobile interaction regression
Representative pages: Home, Study, Learn, Calendar, Course, Release Notes.
Viewport widths: 430, 390, 360.
- Menu open + Escape close: 18/18 PASS.
- Search open + input focus + Escape close: 18/18 PASS.
- Total interaction checks: 36/36 PASS.

## Visual spot checks
- Home 360px native screenshot inspected.
- Release Notes 390px top and release-card screenshots inspected.
- Calendar 390px native screenshot inspected.
- No new visual regression identified in these repaired surfaces.

## Protected systems
No curriculum, lesson wording, Study sequencing, Classroom stages, glossary data, vocabulary scheduling, Teaching Media, calendar dates/identities, assessment scoring, mastery formulas, labs, projects, Progress records, Cloud Sync protocol, or branding artwork changed.
