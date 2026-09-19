# POST-UPDATE QA — v16.3.26 Whole-Site UX System

## Baseline integrity
- Production baseline verified as runtime v16.3.25 before modification.
- Latest audited production commit: `8797cfd23a503e8d642c6b736c575bf845847b04`.
- The exact pre-v16.3.26 `site.js` portion hashes to Git blob `193cb491b0b318a1f907af7f4759f7235704ebc9`, matching current production before the loader is appended.
- No curriculum, glossary-data, assessment-data, lesson-data, Teaching Media, calendar-data, project-data, Progress, or Cloud Sync file is included in this patch.

## Research/architecture checks
- 26 HTML surfaces audited.
- Shared site runtime, five CSS layers, and interaction-dense task surfaces reviewed.
- Existing skip-link, context trail, grouped More menu, mobile navigation/focus trap, reduced-motion behavior, Quiet Mode, Focus Mode, and task ownership preserved.
- Search enhancement routes into existing Search Everything; no duplicate search engine/index created.
- Generic in-page ToC explicitly excluded from task screens that already have local workflow navigation.

## Implemented UX checks
- `ux-system.js` and `ux-system.css` exist and are loaded by `site.js`.
- Desktop header Search field exists on normal pages with a brand row.
- Compact header Search trigger opens an accessible modal sheet.
- Search supports Ctrl/Cmd+K and `/` shortcuts.
- Mobile Search dialog supports Escape dismissal, focus trapping, and focus restoration.
- Quick-destination icons are paired with visible text labels.
- Desktop Continue Week action resolves through current course-week state.
- Home promotes Start today’s study as the first primary hero CTA while preserving Classroom as a secondary action.
- Long reference pages receive On-this-page navigation only when at least three meaningful H2 sections are present.
- Study receives internal shortcuts to Today’s plan, Reviews, Vocabulary, and Week plan.
- Mobile menu displays a visible Menu label with the hamburger symbol.
- More receives current nested-section treatment when appropriate.
- New-tab external links receive a supplemental external indicator if one is not already present.
- Conditional Back to top is suppressed on Study, Learn, Quiz, Calendar, Offline, and 404 task/recovery surfaces.
- UX CSS preserves reduced-motion behavior.
- Primary action/form controls use comfortable target sizing; compact specialist controls are not indiscriminately inflated.
- Mobile/form text is kept at 16px where browser auto-zoom would otherwise be a concern.
- Focus treatment uses a two-tone ring suitable for light and dark site surfaces.

## Executed syntax/data checks
- `node --check site.js` — PASS.
- `node --check ux-system.js` — PASS.
- `node --check service-worker.js` — PASS.
- `node --check release-notes-current.js` — PASS.
- `python -m json.tool build-info.json` — PASS.

## Executed browser-engine interaction checks
A local representative DOM harness was executed in headless Chromium through Playwright using the exact existing shared runtime plus the v16.3.26 UX layer. It passed:

1. Existing runtime Skip to main content remains installed.
2. Desktop Search appears.
3. Continue Week appears.
4. Mobile Menu contains visible text label.
5. Home Study CTA moves to first position and receives primary styling/label.
6. External new-tab indicator is added once.
7. Desktop Search target meets the intended size.
8. Ctrl+K focuses the header search field.
9. Compact Search trigger is visible and at least 44×44 px.
10. Mobile Search sheet opens.
11. Search input receives initial focus.
12. Escape closes the Search sheet.
13. Focus returns to the compact Search trigger.
14. Reference-page On-this-page navigation is generated with correct anchor count.
15. Nested More current state is exposed.
16. Study shortcut navigation is generated with four destinations.
17. Generic ToC is not added to Study.
18. Back-to-top exists on an eligible long reference page.
19. Back-to-top is suppressed on Study.
20. Offline installs neither global Search sheet nor back-to-top.

Result: `PLAYWRIGHT_QA_PASS`.

## Offline/cache checks
- Service-worker namespace advanced to `alfred-u-v16-3-26-whole-site-ux-20260918`.
- `ux-system.css` and `ux-system.js` are in CORE.
- UX loader references plain cached filenames (no query-string mismatch), preserving offline cache lookup.
- UX audit record is included in the optional service-worker cache set.

## Release-control checks
- `build-info.json` reports runtime patch `16.3.26`.
- `release-notes-current.js` contains v16.3.26 as the newest release.
- Release entry records request, behavior changes, files added/modified, protected systems, and research basis.
- No files are removed.

## Required live post-upload checks
1. Confirm GitHub `main` contains the exact package files.
2. Confirm GitHub Pages deploys the same upload commit successfully.
3. Hard refresh once and confirm the v16.3.26 service worker is active.
4. Desktop: verify header Search + Continue Week fit without colliding with Alfred branding.
5. Home: verify Start today’s study is visually primary and Open classroom secondary.
6. Course/Projects/Mastery/Assessments/Standards/Resources/About/Deployment: inspect On-this-page navigation where eligible.
7. Study: verify shortcut row lands on Today’s plan, Reviews, Vocabulary, and Week plan.
8. Compact/mobile: verify Search and Menu remain easy to tap and the Search dialog fits the viewport.
9. Keyboard: Tab through header tools; open Search with Ctrl/Cmd+K, close with Escape, verify focus return.
10. Confirm Learn/Study/Quiz/Calendar did not receive intrusive generic ToC/back-to-top controls.
11. Confirm Search Everything, Progress, Mastery, Glossary, assessments, labs, and Cloud Sync behavior remain unchanged.

## Protected systems
Curriculum, glossary definitions/data, Vocabulary Study data, Teaching Media, calendar identities/schedule, assessments/scoring, mastery rules, labs, projects, Progress identities, Cloud Sync protocol, and branding assets remain unchanged.
