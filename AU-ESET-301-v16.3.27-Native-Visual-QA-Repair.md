# AU-ESET 301 v16.3.27 — Native Visual QA Repair

## Purpose
This release follows the v16.3.26 whole-site UX system with a native visual acceptance pass against the exact GitHub Pages artifact produced from the deployed v16.3.26 commit. The goal was to inspect the rendered interface rather than infer appearance only from source.

## Production artifact verified
- Source: GitHub Pages workflow artifact from the successful v16.3.26 Pages deployment.
- Workflow artifact name: `github-pages`.
- Artifact digest reported by GitHub: `sha256:98534cea8775a6cac9db9ce2a5812ad0aa0f04551cbeb5fa97e6db1c550d67b6`.
- Build marker inside artifact: `v16.3.26-whole-site-ux-system-20260918`.
- The artifact was unpacked and rendered with Chromium using the artifact's own HTML/CSS/JavaScript/assets.

## Native visual surfaces inspected
Desktop and/or 390px-mobile rendered views were checked for:
- Home
- Study
- Classroom / Week 1
- Course Overview
- Projects
- Student Progress
- Glossary and other reference surfaces through structural/native checks

The native pass confirmed that the main v16.3.26 design direction is strong: task hierarchy, persistent search/current-week affordances, Home CTA ordering, Classroom composition, desktop Study hierarchy, Progress composition, mobile brand/search/menu layout, and desktop long-page navigation all remained coherent.

## Defect 1 — Vocabulary Study intrinsic-width overflow
### Evidence
At a 390px viewport the Study page itself reported no document-level horizontal scroll, but DOM geometry showed the Vocabulary Study grid's children expanding to roughly 484px. This clipped the right side of:
- the vocabulary reference card,
- 2-column vocabulary statistics,
- scope pills,
- Course week / category / session-size selects,
- Start Vocabulary Session,
- supporting copy and reset action.

### Root cause
`.vocab-study-shell` used an implicit grid track whose automatic minimum was influenced by child min-content width. The section shell stayed narrow, but the grid track expanded internally, so the overflow was visually clipped rather than expressed as normal page scrolling.

### Repair
- Explicitly set the Vocabulary Study grid to `minmax(0,1fr)`.
- Set direct grid children to `min-width:0` / `max-width:100%`.
- Added mobile width constraints for the intro, stats, controls, filter grid, selects, and Start button.
- Preserved horizontal scrolling only for the intentionally scrollable scope-pill row.

### Post-repair geometry
At 390px:
- section shell: 366px wide inside normal 12px gutters,
- Vocabulary Study shell: 366px,
- intro/stats/controls: 366px,
- filter area: ~335px inside control padding,
- Start Vocabulary Session: ~335px,
- no unintended Vocabulary Study overflow remains.

## Defect 2 — Mobile long-page navigation dominance
### Evidence
The new v16.3.26 `On this page` navigation was useful on desktop, but on mobile reference pages it could consume most of the first screen after the hero. Course Overview, for example, exposed eight links before the learner reached course facts/content.

### Repair
The navigation now uses responsive progressive disclosure:
- Desktop: expanded by default.
- <=700px: collapsed by default.
- Mobile summary shows `On this page`, section count, and a clear plus/minus affordance.
- Users can expand it at any time.
- Selecting a mobile in-page destination collapses the control again after navigation.
- Crossing the mobile/desktop breakpoint resynchronizes the default state.
- Existing anchors, keyboard semantics, focus transfer, hash history, and reduced-motion behavior remain intact.

## Native post-repair acceptance
The repaired composition was rendered again in Chromium.

### PASS
- Home desktop/mobile: no page overflow; primary CTA hierarchy retained.
- Study desktop/mobile: no page overflow; Vocabulary Study controls fully visible.
- Classroom desktop/mobile: existing layout remains coherent; no shared-UX regression observed.
- Course desktop: On-this-page navigation remains expanded and scannable.
- Course mobile: navigation is compact by default (`On this page · 8 sections +`).
- Projects mobile: same progressive-disclosure behavior applies through the shared runtime.
- Progress desktop/mobile: shared UX layer does not disturb the portal layout.
- Mobile Search/Menu/brand header continues to fit the compact header.

## Protected systems
No curriculum, lesson wording, glossary data/definitions, Vocabulary Study scheduling logic, Teaching Media, calendar identities, assessment/scoring logic, mastery formulas, labs, projects, Progress record identities, Cloud Sync protocol, or branding assets are changed by v16.3.27.
