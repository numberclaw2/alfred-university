# AU-ESET 301 v16.3.2 — Final Mobile Visual Acceptance Repair

**Date:** September 15, 2026  
**Course release:** v16.3 Final Instructional Depth  
**Runtime patch:** v16.3.2 (unchanged)  
**Objective evidence revision:** 16.2 (unchanged)  
**Cloud Sync protocol:** 2 (unchanged)

## Scope

This is a presentation-only final acceptance repair. The final adversarial audit found that the 62 lesson SVGs were valid instructional diagrams, but the previous mobile rule scaled a roughly 1000 px diagram to the phone content width. Dense 14–17 px SVG labels could therefore become only about 5–7 CSS pixels. The old `.lesson-visual{overflow:hidden}` treatment also prevented a learner from preserving readable diagram scale and panning across it.

No curriculum, standard mapping, assessment question, lab, calendar event, progress identity, Cloud Sync record, Worker/D1 contract, DOCX, or SVG source file is changed by this repair.

## Repair

- `learn.js` wraps each lesson SVG in a keyboard-focusable, touch-scroll inspection viewport.
- At phone widths (`<=760px`), the diagram is held at a 900 px inspection width instead of being compressed to the card width. The learner can swipe left/right to inspect every label.
- A phone-only instruction explicitly tells the learner to swipe horizontally.
- Every lesson visual now has an **Open full-size diagram ↗** link as a redundant fallback.
- Desktop and tablet behavior remains fit-to-card; the 460 px desktop visual-height cap remains.
- Focus-visible outlines are supplied for the scroll viewport and full-size link.
- The service-worker cache is bumped to `alfred-u-v16-3-2-mobile-visual-final` so stale CSS/JS cannot preserve the rejected mobile behavior.
- `build-info.json` keeps runtimePatch 16.3.2 and adds the non-sensitive `presentationPatch` marker `mobile-visual-readability-final`.

## Acceptance checks

- 62 SVG files remain present and unchanged.
- The generic Classroom renderer supplies the repaired visual treatment to all 62 lessons; there is no per-lesson exception path.
- At <=760 px, CSS resolves the diagram to 900 px with `max-width:none` inside `overflow-x:auto`, eliminating the forced ~35–39% label shrink that caused the audit failure.
- At >760 px, the diagram remains `width:100%`, `max-height:460px`, and `object-fit:contain`.
- The full-size SVG link points to the same authoritative visual ID used by the lesson image.
- JavaScript syntax, static references, anchors, duplicate IDs, manifest assets, service-worker assets, calendar identities, assessment files, and Cloud Sync/progress files are regression-checked after packaging.

## Disposition

This repair addresses the sole material blocker from the final adversarial acceptance audit: mobile instructional-visual readability. It intentionally does not reopen any instructional or platform subsystem that already passed.
