# AU-ESET 301 — v16.3.85 Week 2 Source-Authentic Visual QA

## Objective

Replace Week 2's Alfred-generated/source-grounded concept diagrams with real source-authentic visuals wherever the lesson is teaching a physical/circuit concept.

This release does **not** rewrite the Week 2 curriculum. It changes the visual evidence layer and establishes the new permanent sourcing policy.

## Source / license audit

The following source files were independently checked on their Wikimedia Commons description pages:

- `Resistors in Series and Parallel.svg` — Public domain
- `Resistors in Series.svg` — Public domain
- `Resistors in Parallel.svg` — Public domain
- `Kirchhoff's Current Law.svg` — Public domain
- `KVL.svg` — Public domain
- `Combo3.png` — CC0 1.0 Universal
- `Voltage divider.svg` — Public domain
- `Voltage divider-loaded eq.svg` — Public domain

Technical meaning is verified separately:

- OpenStax University Physics Volume 2 §10.2 — series, parallel, equivalent resistance
- OpenStax University Physics Volume 2 §10.3 — junction/KCL and loop/KVL rules
- MIT OCW 6.071J — voltage-divider derivation
- MIT OCW Practical Electronics — measured divider loading

## Learner-facing Week 2 replacement map

1. `w02-topology-before-math` → real PD series/parallel comparison
2. `w02-series-one-path` → real PD series-resistor schematic
3. `w02-parallel-same-nodes` → real PD parallel-resistor schematic
4. `w02-kcl-conservation-charge` → real PD KCL node diagram
5. `w02-kvl-conservation-energy` → real PD KVL loop diagram
6. `w02-mixed-reduce-redraw` → real CC0 mixed resistor network
7. `w02-divider-ideal-then-loaded` → two-image PD comparison: unloaded + loaded divider

Each caption now explicitly tells the learner what to inspect first and why the visual matters.

## Alfred-created visuals retained

Only two Week 2 Career visuals remain Alfred-created:

- discriminating-measurement decision matrix
- technician repair/documentation record

These are not circuit representations. They are course-specific reasoning/documentation aids and are explicitly labeled `alfred-model`.

## Automated acceptance checks

The test harness requires:

- 7/7 Week 2 CETa teaching sections have `figure.type === "gallery"`.
- 7/7 use `provenance === "source"`.
- Every source image has a Wikimedia source page and an explicit Public Domain/CC0 license label.
- No Week 2 CETa concept figure remains a synthetic `table` or `flow`.
- Career decision/documentation aids remain present but are labeled `alfred-model`.
- Week 2 teaching text, objectives, assessments, semantic task IDs, LAB-002, and acceptance state are untouched.
- Week 3 acceptance scripts/load order remain intact.
- Cloud Sync protocol remains 2.

## Offline note

The accepted source images are intentionally loaded from Wikimedia's hosted originals, consistent with Alfred's existing `VISUAL-SOURCES.md` policy. The lesson text remains complete if an external image is temporarily unavailable. A future asset-localization pass may copy only those source images whose reuse status has been separately verified.

## Acceptance recommendation

After repository upload and GitHub Pages deployment verification, v16.3.85 should become the Week 2 visual baseline.
