# AU-ESET 301 — v16.3.90-H2 Week 3 Readiness QA

**Scope:** Week 3 readiness retrofit only  
**Baseline runtime:** v16.3.90  
**Package status:** SOURCE QA PASS / DEPLOYMENT QA PENDING  
**Cloud Sync:** protocol 2 unchanged

## Why H2 exists

Week 3 instruction had already passed the earlier CETa/Career/tandem gates, but two later governance requirements were still open:

1. the source-authentic visual standard created during the Week 2 finalization had not yet been applied to both Week 3 tracks; and
2. a new cross-week runtime audit found that Week 3 v16.3.81 reused `CQ1204`–`CQ1208`, IDs that are now canonically owned by Week 2 Career in v16.3.90.

The second issue is material: question IDs are course-global identities. Depending on script order, one week could overwrite the other. H2 removes that ambiguity instead of treating an ID-count declaration as proof of a valid assessment.

## Package strategy

The current site already loads `week3-final-acceptance-v16.3.83.js` on Learn and the current service worker injects that same filename on partial assessment/lab contexts. H2 therefore uses that already-established filename as a documented compatibility hook. The file header explicitly states that its contents are the v16.3.90-H2 compatibility replacement.

This avoids an unnecessary HTML/service-worker migration. The current service worker is network-first for JavaScript/HTML/CSS, uses `fetch(..., {cache:'reload'})`, and updates the current cache after a successful network response. A connected navigation/reload therefore has a defined transition path to the replacement file. Final client acceptance still requires deployment verification.

## CETa visual retrofit

All **8 / 8** Week 3 CETa teaching pages receive source-authentic visuals.

Source families used:

- CC0 analog galvanometer photograph — Wikimedia Commons, `Analog Galvanometer Meters.jpg`
- CC0 real DMM photograph — Wikimedia Commons, `DT830D DIGITAL MULTIMETER.jpg`
- CC0 real bench supply photograph — Wikimedia Commons, `Bench power supply.jpg`
- CC0 oscilloscope front-panel visual — Wikimedia Commons, `Oscilloscope Clean.svg`
- public-domain real oscilloscope waveform photograph — Wikimedia Commons, `Oscilloscope sine square.jpg`
- public-domain real oscilloscope probe photograph — Wikimedia Commons, `ScopeProbe.JPG`
- public-domain real digital oscilloscope display — Wikimedia Commons, `Digital oscilloscope.jpg`

Technical interpretation is separately grounded in Fluke, Keysight, and Tektronix material rather than treating image provenance as technical authority.

### Alfred-created visual exception

The exact Week 3 CV/CC transition drawing is retained only as a clearly labeled **Alfred reasoning aid** after source search. A real CC0 bench-power-supply image is now the primary equipment visual. The Alfred aid remains because a static equipment photograph cannot show the abstract transition from constant-voltage operation to current-limited constant-current operation with equal instructional clarity. Its technical authority is explicitly Keysight Bench Power Supply Basics.

## Career visual retrofit

All **8 / 8** Week 3 Career teaching pages receive their own source-authentic occupational/equipment visual context.

The Career layer uses public-domain U.S. Navy technician/metrology photographs for:

- oscilloscope adjustment during real electronics repair,
- DMM maintenance work,
- circuit-board troubleshooting with a DMM,
- oscilloscope calibration training,
- digital-multimeter calibration,
- calibration-lab test-equipment work.

This is intentionally separate from CETa visual coverage so Career is not accepted merely because CETa has pictures.

## Assessment identity repair

### Week 2 ownership preserved

The canonical Week 2 Career IDs remain:

`CQ1204`–`CQ1209`

H2 can reconstruct those six objects on surfaces where the dedicated v16.3.90 Week 2 canonical layer is not loaded, preserving their canonical `editorially-reviewed`, Career, `minWeek: 2`, mastery-evidence contract.

### Week 3 unique identities

Existing unique Week 3 items are rebuilt as:

`CQ1196`–`CQ1203`

The five v16.3.81 additions are re-homed to unique Week 3 IDs:

- `CQ1210` — CETa 8.1 analog vs digital meter operation
- `CQ1211` — CETa 8.2 meter construction/function blocks
- `CQ1212` — Career C15.1/C15.2/C15.4 test-asset validity
- `CQ1213` — Career C15.3 measurement capability / inconclusive verdict
- `CQ1214` — Career C15.5 DUT-vs-test-system isolation

Legacy v16.3.81 `CQ1204`–`CQ1208` Week 3 objects are removed from the active bank.

## Week 3 weekly mastery

Canonical H2 form:

- count: **14**
- target: **80%**
- CETa: **7**
- Career: **7**
- optional: **false**

Actual selected IDs:

CETa:
`CQ1210`, `CQ1211`, `CQ1196`, `CQ1197`, `CQ1198`, `CQ1199`, `CQ1090`

Career:
`CQ1154`, `CQ1155`, `CQ1156`, `CQ1203`, `CQ1212`, `CQ1213`, `CQ1214`

The declared 7/7 mix was reconciled against the actual track on every selected question object.

## LAB-003 knowledge gate

Canonical H2 form:

- count: **6**
- target: **80%**
- CETa: **3**
- Career: **3**
- optional: **false**

Selected IDs:

CETa: `CQ1197`, `CQ1198`, `CQ1200`  
Career: `CQ1155`, `CQ1212`, `CQ1214`

The existing practical evidence gate is not weakened. It still requires ten checkpoints covering asset/status record, known reference, prediction, DMM connection evidence, CV/CC evidence, known waveform, manual waveform calculation, capability decision, DUT-vs-test-system isolation, and reproducible conclusion.

Simulation remains academic/concept evidence only where specified; it does not become a false physical-proficiency claim.

## Automated internal QA

### JavaScript syntax

- `week3-final-acceptance-v16.3.83.js`: **PASS** (`node --check`)
- `release-notes-v16.3.90.js`: **PASS** (`node --check`)

### Full-context runtime harness

The H2 compatibility file was executed in a Node VM against a Week 3 runtime model containing:

- the 8 CETa pages,
- the 8 Career pages,
- the v16.3.81 collision objects,
- the required base Week 3 questions,
- Week 2 and Week 3 test definitions,
- LAB-003 evidence state,
- Career/tandem governance,
- Week 3 acceptance engines.

Result: **PASS**

Verified:

- full Week 3 H2 status = `VERIFIED_PASS`
- source-authentic CETa pages = **8 / 8**
- source-authentic Career pages = **8 / 8**
- weekly mastery actual mix = **7 CETa / 7 Career**
- LAB-003 actual mix = **3 CETa / 3 Career**
- Week 2 canonical IDs remain Week 2 Career objects
- Week 3 new IDs are unique and active
- legacy v16.3.81 collision objects are absent
- C3.8 is absent from Week 3 and present as a Week 20 target
- one CV/CC Alfred reasoning aid is retained and transparently labeled

### Actual selector logic

The current repository `assessment-engine.js` selector logic was reproduced exactly for its relevant eligibility/track-selection path:

- `questionIds` membership
- `masteryEvidence !== false`
- `audit.status === 'editorially-reviewed'`
- `minWeek <= assessment.week`
- CETa/Career mix selection
- count assertion

H2 data successfully launched:

- Week 3 weekly form: **14 selected, 7 CETa / 7 Career — PASS**
- LAB-003 form: **6 selected, 3 CETa / 3 Career — PASS**

### Adversarial reconstruction

Each H2-controlled question ID was individually absent in a fresh partial-runtime test before the compatibility layer executed. H2 rebuilt the controlled contract and the Week 3 weekly selector still launched.

Targets tested: **19**  
Result: **19 / 19 PASS**

### Partial-page context

A separate assessment-only runtime without the full Career/tandem/academic registries was tested.

Result:

- canonical question/test data applied
- weekly selector launched 14 questions
- no false Week 3 curriculum failure was manufactured from missing page registries
- runtime status = `CANONICAL_DATA_APPLIED_PARTIAL_CONTEXT`

**PASS**

## Source QA verdict

| Gate | Result |
|---|---|
| CETa instruction preserved | PASS |
| Career instruction preserved | PASS |
| CETa source-authentic visuals | 8/8 PASS |
| Career source-authentic visuals | 8/8 PASS |
| Week 2 assessment identity preserved | PASS |
| Week 3 assessment identity unique | PASS |
| Week 3 weekly selector | 14 / 7+7 PASS |
| LAB-003 selector | 6 / 3+3 PASS |
| LAB-003 evidence gate preserved | PASS |
| C3.8 Week-20 truth state | PASS |
| Cloud Sync protocol | 2 unchanged |
| Static/source package | PASS |
| GitHub Pages deployment | PENDING |
| Real client fresh/stale runtime | PENDING |

## Final acceptance boundary

**Do not freeze Week 3 from this document alone.**

After the replacement files are uploaded, final Week 3 acceptance requires checking the deployed GitHub Pages artifact and a real client navigation/reload for:

1. the replacement compatibility file is actually served;
2. Week 3 CETa renders all eight source-authentic visual pages;
3. Week 3 Career renders all eight source-authentic occupational/equipment visuals;
4. weekly mastery launches 14 questions at a real 7/7 mix;
5. LAB-003 launches six questions at a real 3/3 mix;
6. Week 2 still launches its canonical 12-question 6/6 form;
7. LAB-003 evidence/physical boundary remains visible;
8. Cloud Sync remains protocol 2;
9. no stale-client/service-worker regression appears.

Until those deployed/client checks pass, H2 is **SOURCE VERIFIED / PRODUCTION VERIFICATION PENDING**.
