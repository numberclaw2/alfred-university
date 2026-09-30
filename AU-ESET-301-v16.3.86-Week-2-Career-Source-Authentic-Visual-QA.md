# AU-ESET 301 — v16.3.86 Week 2 Career Source-Authentic Visual QA

## Objective

Apply the source-authentic-first visual standard to the **Career track**, not just the Week 2 CETa lesson.

The update deliberately keeps two kinds of visual separate:

1. **Source-authentic occupational/equipment imagery** — what real technician work and hardware look like.
2. **Alfred reasoning/documentation aids** — how the learner should organize a diagnostic decision or repair record.

Those serve different teaching purposes and should not replace each other.

## Learner-facing Career map

1. `career-w02-predict-before-measuring`
   - authentic U.S. Navy aviation-electronics technician using a multimeter
   - reinforces prediction, reference, test-point and expected-value discipline

2. `career-w02-fault-signatures`
   - real public-domain solderless-breadboard circuit
   - reinforces the difference between physical layout and electrical topology and supports reversible fault-injection practice

3. `career-w02-last-good-first-bad`
   - authentic U.S. Navy circuit-board connectivity test
   - reinforces deliberate sequential checks and shrinking the suspect region

4. `career-w02-discriminating-measurement`
   - authentic U.S. Navy resistor testing on a circuit card
   - reinforces matching test mode to the hypothesis
   - existing Alfred decision matrix is preserved

5. `career-w02-change-one-verify`
   - authentic U.S. Navy component-level board repair
   - authentic U.S. Navy continuity check
   - reinforces that repair and verification are separate actions
   - existing Alfred repair-record table is preserved

## Rights / provenance

All six Career image items are explicitly public-domain sources:

- five U.S. Navy works created as part of official federal duties
- one breadboard photograph released into the public domain by its copyright holder

The image source page and public-domain status are shown with each visual.

## Independent technical grounding

The occupational photo itself is not treated as the technical authority.

- Fluke DC-voltage guidance supports correct meter/test-point/reference interpretation.
- Fluke resistance guidance supports power-off resistance/continuity practice and the effect of parallel paths.
- MIT PCB debugging material supports model-first debugging, deliberate measurement, probing at meaningful points, repair, and verification.
- MIT PCB test-point instruction supports designing/using accessible diagnostic points.

## Renderer behavior

v16.3.86 adds `careerSourceVisual` as a separate learner-facing visual field.

`learn.js` renders it inside the Career page enhancements **without replacing `section.figure`**. This is required so:

- source-authentic technician imagery can appear,
- the existing Alfred decision matrix remains,
- the existing Alfred repair-record table remains.

## Automated acceptance checks

Required for PASS:

- 5/5 Week 2 Career teaching pages receive a source-authentic `careerSourceVisual`.
- Total source-authentic Career image items = 6.
- All six images declare Public Domain status and link to their source page.
- All five `careerSourceVisual` objects have `provenance === "source"`.
- p4 discriminating-measurement Alfred decision matrix remains intact.
- p5 repair-record Alfred table remains intact.
- both retained Alfred aids remain `provenance === "alfred-model"` after v16.3.85.
- `learn.js` renders `careerSourceVisual` separately from the existing `figure`.
- Week 2 Career teaching IDs and task content are not rewritten.
- Week 2 CETa v16.3.85 visual layer remains loaded.
- Week 3 final acceptance remains loaded.
- Cloud Sync protocol remains 2.

## External-image reliability boundary

Like the Week 2 CETa v16.3.85 source visuals, these images use the source host rather than copied binary assets. If a remote image is temporarily unavailable, the complete Alfred text lesson, alt text, caption, image-source link and technical-source links remain available.

## Status before deployment

Package/source QA: PASS.

Production acceptance still requires repository upload and GitHub Pages artifact verification.
