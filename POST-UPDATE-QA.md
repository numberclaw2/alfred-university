# POST-UPDATE QA — v16.3.27 Native Visual QA Repair

## Baseline
- Based on the exact deployed v16.3.26 GitHub Pages artifact.
- v16.3.26 artifact digest: `sha256:98534cea8775a6cac9db9ce2a5812ad0aa0f04551cbeb5fa97e6db1c550d67b6`.
- Original v16.3.26 whole-site UX system was visually rendered before repair.

## Native render checks
- Home rendered at 1440px and 390px.
- Study rendered at 1440px and 390px.
- Week 1 Classroom rendered at desktop and 390px mobile.
- Course and Projects rendered at desktop and 390px mobile.
- Progress rendered at desktop and 390px mobile.
- Shared reference surfaces inspected structurally for the same UX runtime behavior.

## Findings repaired
### Vocabulary Study
- Reproduced 390px child-width expansion to ~484px inside a 366px Study section shell.
- Confirmed right-side clipping despite no document-level horizontal scrollbar.
- Added `minmax(0,1fr)` and zero-min-width grid child hardening.
- Post-repair section shell is 366px; Vocabulary Study child surfaces are <=366px.
- Filter-grid/Start-button inner width is ~335px after control padding.
- Scope pills retain intentional `overflow-x:auto` only.

### Long-page navigation
- Reproduced oversized mobile Course `On this page` block with eight visible links.
- Converted to a `details`-based progressive disclosure control.
- Desktop starts expanded.
- <=700px starts collapsed.
- Section count is visible while collapsed.
- Mobile destination selection collapses the control after navigation.
- Breakpoint changes resynchronize desktop/mobile default state.

## Static checks
- JavaScript syntax must pass for `site.js`, `ux-system.js`, `release-notes-current.js`, and `service-worker.js`.
- `build-info.json` must parse and report runtimePatch `16.3.27`.
- Service worker cache namespace must be `alfred-u-v16-3-27-native-visual-qa-20260918`.
- Release Notes must contain v16.3.27.
- UX loader marker must be v16.3.27.
- No protected course-data files are included in the upload package.

## Browser acceptance after upload
1. On a phone-width browser, open Study and scroll to Vocabulary Study Lab. Verify no right-side clipping.
2. Horizontally swipe the vocabulary scope pills; only that pill strip should scroll horizontally.
3. Open Course Overview on mobile. Verify `On this page · N sections +` is collapsed by default.
4. Expand it and select a section. Verify the page scrolls/focuses to the target and the mobile disclosure collapses.
5. Open Course on desktop. Verify the On-this-page list starts expanded.
6. Verify Home/Search/Menu/Continue Week and Classroom behavior remain as in v16.3.26.

## Protected systems
Curriculum, glossary data/definitions, Vocabulary Study scheduling, Teaching Media, calendar, assessments/scoring, mastery, labs, projects, Progress identities, Cloud Sync, and branding remain unchanged.
