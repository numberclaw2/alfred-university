# AU-ESET 301 v16.3.87 — Guided Practice Runtime Repair QA

## Verdict

**PACKAGE QA PASS — deployment verification pending user upload.**

This release repairs the learner-facing Classroom failure encountered when Week 2 advances from Teaching Media to Guided Practice. The repair is runtime-wide because the same Stage 5 renderer is shared by all 31 weeks.

## Audited deployed baseline

- Repository: `numberclaw2/alfred-university`
- Baseline GitHub Pages head SHA inspected: `3648935c00a3a7afbadf4264ea1b0137b40eaad9`
- Pages workflow run: `36651868344` / run 172 / success
- Baseline Pages artifact ID: `11071220655`
- Baseline artifact digest: `sha256:5b67dbfdb768e40f355d1c39730584fae7d840f6093a00f4b586e6962a4cbccc`
- Baseline runtime: v16.3.86

## Root cause

The Classroom navigation button was functioning. After Teaching Media was complete, the shared `#classroom-next` handler correctly advanced to Stage 5.

The failure occurred inside the Guided Practice destination renderer. `renderPractice()` and the Practice navigation handlers referenced two helpers that were not defined in the shipped `learn.js`:

- `practiceSectionPlan()`
- `practiceViewRecord()`

Because JavaScript syntax remains valid when an unresolved identifier appears inside a function body, `node --check` could pass even though the learner hit a runtime `ReferenceError` when Stage 5 actually executed.

## Repair

v16.3.87 restores both missing helpers.

### `practiceSectionPlan()`

The Practice plan is derived from the current week’s actual CETa and Career lesson records rather than duplicating curriculum content in the runtime. It assembles:

1. CETa worked-example review
2. Career worked-example review
3. CETa guided tasks
4. Career guided tasks
5. CETa independent transfer
6. Career independent transfer
7. oral checkpoint / finish

The function is data-driven and safely omits a page only if the corresponding source lesson does not contain that category. Under the current 31-week curriculum, every week resolves to the intended seven-page plan.

### `practiceViewRecord(plan)`

The view state:

- restores the saved zero-based Practice page;
- clamps stale/out-of-range saved values safely;
- preserves one shared Practice notebook;
- preserves existing Practice completion;
- preserves oral-checkpoint reveal state;
- does not mark pages complete merely because the learner navigates among them.

## Runtime smoke tests

A Node VM harness loaded the current deployed curriculum/overlay stack, instrumented the repaired `learn.js` without changing production code, and executed the real destination renderer/state functions.

### Week 2 expected plan

**PASS — 7 pages**

`review, review, guided, guided, independent, independent, checkpoint`

The plan includes both CETa and Career pages.

### Teaching Media → Guided Practice transition

**PASS**

Starting with Week 2 Teaching Media recorded complete, the harness executed the same `goTo(4, false)` path used by Classroom stage navigation. Stage 5 rendered successfully as `Practice page 1 of 7` with no `ReferenceError`, and the saved `currentStage` became `practice`.

### Saved-state regression

**PASS**

With a pre-existing learner record containing:

- Practice complete = true
- Practice page = 7 of 7
- checkpoint revealed = true
- an existing shared Practice notebook

the repaired Stage 5 renderer restored page 7 and retained all four states unchanged.

### All-week destination render

**PASS — 31/31 weeks**

Every Week 1–31 Practice plan was generated and every Stage 5 destination renderer executed without a runtime exception. Current curriculum result: 7 Practice pages for each of the 31 weeks.

## Static/build checks

**PASS:**

- `learn.js` JavaScript syntax
- `service-worker.js` JavaScript syntax
- `release-notes-v16.3.87.js` JavaScript syntax
- `build-info.json` JSON parse
- exactly one `practiceSectionPlan()` definition
- exactly one `practiceViewRecord()` definition
- `learn.html` uses `learn.js?v=16.3.87`
- service worker rewrites older supported Learn cache-bust versions through v16.3.86 to v16.3.87
- service worker caches `learn.js?v=16.3.87`
- Release Notes loads `release-notes-v16.3.87.js`
- Cloud Sync protocol remains 2

## Regression scope

This patch does **not** change:

- Week 2 CETa content
- Week 2 Career content
- Week 3 CETa/Career content
- source-authentic visual overlays
- assessments
- labs
- standards IDs
- calendar events/dates
- Study Guide mapping
- Teaching Media classification/content
- glossary behavior
- saved progress key/record format
- Cloud Sync protocol

## QA governance repair

The project governance now explicitly requires an affected stage transition and destination renderer to execute in a runtime smoke test whenever Learn/stage routing changes. JavaScript syntax success alone is no longer sufficient acceptance evidence for an interactive Classroom release.

## Environment limitation

A fresh graphical Chromium browser was not available in this environment. Therefore this QA certifies the actual JavaScript state model, Stage 5 destination rendering, all-week runtime execution, syntax, static wiring, and package integrity. Post-upload GitHub commit/Pages artifact/service-worker/live-runtime verification remains required before v16.3.87 is frozen as deployed.
