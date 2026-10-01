# AU-ESET 301 — v16.3.90-H3 Week 3 Direct-Entry Runtime QA

**Date:** 2026-10-01  
**Scope:** Week 3 readiness/runtime integrity only  
**Baseline inspected:** exact GitHub Pages H2 artifact from commit `8f6f23232804eb84af547262bb7d6f035bcbfc1e` / Pages run `36819589355`  
**Cloud Sync:** protocol 2 unchanged  
**Status:** H3 INTERNAL/SOURCE QA PASS — deployment and real-client acceptance still required

## Why H3 was necessary

The H2 data model itself passed internal execution, but a deeper direct-entry test found a real runtime architecture gap.

When the deployed H2 `quiz.html` / `assessments.html` static script stack was executed **without service-worker HTML injection**, Week 3 still exposed the pre-H2 assessment definitions:

- Week 3 mastery: **12 questions, 9 CETa / 3 Career**
- LAB-003 knowledge check: **5 questions, 4 CETa / 1 Career**

The H2 compatibility layer was being supplied to those pages by the service worker, not by their own static HTML. A controlled client eventually received the correct state, but a fresh/direct/uncontrolled navigation was not self-sufficient.

A second direct-entry test found the same architectural dependency on `labs.html`: the static page did not load the Week 3 remediation/H2 compatibility layers, so the 10-checkpoint LAB-003 evidence gate was not guaranteed on the first uncontrolled page load.

This violated the project's fresh-client/runtime acceptance standard even though the H2 artifact and controlled-path data were correct.

The internal artifact review also found that the H2 upload package's five-line `SHA256SUMS.txt` had replaced the repository-wide checksum ledger. H3 restores the root checksum file as a complete repository manifest and adds a permanent governance rule preventing package-only hashes from overwriting the root ledger again.

## H3 repair

### Direct-entry static loaders

`quiz.html` and `assessments.html` now statically load, before assessment selection:

1. `week3-remediation-v16.3.81.js?v=16.3.81`
2. `week3-final-acceptance-v16.3.83.js?v=16.3.90-H3`

`labs.html` now statically loads the same Week 3 remediation + compatibility pair before lab rendering.

The service worker still performs compatibility injection/normalization as a fallback, but it is no longer the sole owner of required Week 3 assessment/lab state.

### Service-worker/cache transition

- cache identity bumped to `alfred-u-v16-3-90-h3-week3-direct-loader-integrity-20261001`
- H3 compatibility query added to the precache set
- navigational HTML normalizes the Week 3 compatibility query to `v=16.3.90-H3`
- build-info decoration reports the H3 build/release state
- old Alfred caches remain deleted only after the new cache installs successfully
- Cloud Sync protocol remains 2

### Build metadata

`build-info.json` and service-worker decorated build info now report:

- build: `v16.3.90-H3-week3-direct-loader-integrity-20261001`
- release status: `week3-h3-direct-entry-runtime-integrity-repaired`
- Week 3 static direct-entry status: `SELF_SUFFICIENT`
- Week 3 mastery contract: 14 / 7 CETa / 7 Career
- LAB-003 contract: 6 / 3 CETa / 3 Career / 10 evidence checkpoints

## Internal execution results

### Exact deployed H2 artifact — full Week 3 stack

Before making H3, the exact deployed H2 artifact was executed in Node VM in the real Learn script order through the Week 3 compatibility layer and current assessment engine.

Result: **PASS**

- Week 3 H2 status: `VERIFIED_PASS`
- CETa source-authentic visual pages: **8 / 8**
- Career source-authentic visual pages: **8 / 8**
- Week 3 mastery selector: **14 / 7 CETa / 7 Career**
- LAB-003 selector: **6 / 3 CETa / 3 Career**
- Week 2 regression: **12 / 6 CETa / 6 Career**
- active duplicate question IDs: **0**
- C3.8: absent Week 3 and Week 6, preserved as Week 20 target
- H2 internal final status: `VERIFIED_PASS`

This proved the H2 content/assessment model was sound; the defect was direct-entry loading, not H2 question/visual logic.

### Fresh/direct static-route tests after H3

The final H3 HTML script stacks were parsed and executed directly, without service-worker decoration.

| Route | Result |
|---|---|
| Learn → Week 3 full instructional stack | PASS |
| `quiz.html` fresh/direct Week 3 mastery | **14 / 7+7 PASS** |
| `quiz.html` fresh/direct LAB-003 | **6 / 3+3 PASS** |
| `assessments.html` fresh/direct Week 3 selection | **14 / 7+7 PASS** |
| `labs.html` fresh/direct LAB-003 evidence gate | **10 checkpoints PASS** |
| virtual/physical truth boundary | PASS |

The assessment-only pages still execute three legacy governance scripts that throw partial-context console exceptions because those scripts expect full curriculum context. These are pre-existing, non-blocking script-level errors: the browser continues to later script tags and the H3 canonical assessment layer plus selector execute successfully. H3 does not widen scope into rewriting those older governance modules because they do not prevent the Week 3/Week 2 assessment routes from launching correctly.

### Service-worker navigation decoration

The real H3 `service-worker.js` navigation decorator was executed against:

- `quiz.html`
- `assessments.html`
- `labs.html`
- `learn.html`

For every route:

- exactly one H3 Week 3 compatibility tag remained
- exactly one Week 3 remediation tag remained
- no duplicate compatibility layer was introduced

Result: **PASS**

### Service-worker install integrity

Parsed CORE/precache entries: **206**  
Missing local targets after stripping query strings: **0**

Result: **PASS**

### Build-info decorator

The real service-worker `decorateBuildInfo()` function was executed against the final H3 `build-info.json`.

Verified:

- runtime patch remains `16.3.90`
- H3 build identity is returned
- H3 release status is returned
- Week 3 static direct-entry status = `SELF_SUFFICIENT`
- 14 / 7+7 mastery metadata present
- 6 / 3+3 / 10-checkpoint LAB-003 metadata present
- Cloud Sync protocol = 2

Result: **PASS**

### JavaScript syntax

All top-level JavaScript files in the candidate tree were checked using Node 22 `node --check`.

- JavaScript files checked: **109**
- syntax failures: **0**

Result: **PASS**

### Assessment repeated-attempt test

The real current `assessment-engine.js` selector ran **100 attempts each** for:

- Week 2 mastery — always 12 / 6+6
- Week 3 mastery — always 14 / 7+7
- LAB-003 — always 6 / 3+3

Result: **PASS**

### Adversarial reconstruction

Controlled assessment IDs:

- Week 2: `CQ1204`–`CQ1209`
- Week 3: `CQ1196`–`CQ1203`, `CQ1210`–`CQ1214`

Each of the 19 controlled IDs was tested in two independent failure states before H2/H3 repair:

1. completely missing
2. present but corrupted (`track`, `masteryEvidence`, `minWeek`, and review status invalid)

Scenarios: **38**  
Successful reconstruction + Week 2/Week 3/LAB selector launch: **38 / 38**

Result: **PASS**

### Visual source existence check

The Week 3 source-authentic visual filenames were independently checked against Wikimedia Commons search results. The tested DMM, bench supply, oscilloscope, probe, waveform, and U.S. Navy technician/metrology files resolve as real Commons file records. Technical authority remains separate from image provenance per governance.

Result: **PASS**

### Checksum integrity

The final H3 root `SHA256SUMS.txt` is regenerated across the complete repository tree (excluding itself), not merely the H3 package files. Every listed digest is recomputed and compared before packaging.

Result: **PASS**

## Browser boundary

A Chromium binary is present in the internal execution environment, but the environment administrator blocks both localhost and `file:` navigation, so a genuine rendered-browser session could not be completed inside the container. That limitation is environmental, not a site exception.

Therefore this QA proves source/runtime/data/service-worker logic internally, but **does not replace the governance requirement for one real user-browser confirmation after H3 deployment**.

## Final H3 internal verdict

| Gate | Result |
|---|---|
| H2 content/data model | PASS |
| CETa instruction | PASS |
| Career instruction | PASS |
| CETa visuals | 8/8 PASS |
| Career visuals | 8/8 PASS |
| Week 3 direct-entry mastery | 14 / 7+7 PASS |
| LAB-003 direct-entry knowledge | 6 / 3+3 PASS |
| LAB-003 evidence | 10 checkpoints PASS |
| Week 2 regression | 12 / 6+6 PASS |
| active question-ID uniqueness | PASS |
| adversarial reconstruction | 38/38 PASS |
| service-worker decoration | PASS |
| service-worker precache targets | 206/206 PASS |
| JS syntax | 109/109 PASS |
| full repository checksum ledger | PASS |
| Cloud Sync protocol | 2 unchanged |
| deployment | PENDING H3 UPLOAD |
| real user-browser acceptance | PENDING |

**Conclusion:** H2 was not sufficiently self-contained for fresh direct entry. H3 fixes the discovered runtime gap and passes the internal code/runtime QA. Do not freeze Week 3 until H3 is uploaded, GitHub Pages is verified for the exact H3 commit, and the user's real browser confirms the Week 3 Learn/assessment/lab paths.
