# AU-ESET 301 — v16.3.84 Week 3 Career Teaching-Render QA

## Purpose

Repair the learner-facing Career renderer so the latest Week 3 Career objectives are **actually visible and usable in Learn**, rather than existing only in governance/acceptance data.

## Defect confirmed in v16.3.83

The Week 3 Career data contained the correct occupational-task, CETa/Career handoff, demonstration, immediate-practice, physical-boundary, evidence, and benchmark fields, but `learn.js` still expected the older v16.3.74 field shapes in several places.

Consequences included:

- `trackHandoff.fromCeta / toCareer / rule` could render as an empty handoff because the renderer expected `received / passes`.
- `careerDemo.scenario / decision` were not displayed because the renderer only consumed `title / steps / notice`.
- `careerPractice.prompt / required[]` could render no actual drill because the renderer expected `prompts[]`.
- `occupationalTask` and `evidenceSpec` passed governance but were not shown as explicit learner-facing cards.

## v16.3.84 repair

`learn.js` now:

1. Shows a **Technician Task** card from `occupationalTask`.
2. Supports both handoff schemas:
   - current: `fromCeta / toCareer / rule`
   - legacy: `received / passes`
3. Shows the complete **Technician Demonstration**:
   - scenario
   - ordered steps
   - technician decision or notice
4. Supports both practice schemas:
   - current: `prompt / required[] / physical`
   - legacy: `scenario / prompts[] / model / physical`
5. Shows an explicit **Evidence Required** card from `evidenceSpec`.
6. Shows the **Physical Proficiency Boundary** so reasoning/simulation is not presented as hands-on competence.
7. Keeps occupational benchmark IDs internal while presenting a readable occupational-alignment statement.

## First-load reliability

`learn.html` now statically loads:

- `week3-remediation-v16.3.81.js`
- `week3-final-acceptance-v16.3.83.js`
- `learn.js?v=16.3.84`
- `styles.css?v=16.3.84`

This removes the previous dependency on a second service-worker-controlled navigation before the accepted Week 3 Career content appears in Learn.

`patch-notes.html` also statically loads release notes v16.3.81 through v16.3.84 so the current history is visible on first load.

## Automated QA results

### JavaScript syntax

- `learn.js`: PASS
- `release-notes-v16.3.84.js`: PASS
- `service-worker.js`: PASS

### Actual Week 3 Career data coverage

The real Week 3 redesign + v16.3.81 remediation scripts were executed in a Node VM harness. All **8 Career teaching sections** contain:

- occupational task
- CETa/Career handoff
- technician demonstration
- immediate practice
- evidence specification
- physical/simulation boundary
- occupational benchmark mapping

Result: **8 / 8 PASS**.

### Actual Week 3 renderer output

The repaired render functions from the real `learn.js` were executed against all eight actual Week 3 Career sections.

Every page produced visible text for:

- Technician task
- Received from CETa
- Career performance target
- Technician demonstration
- Practice now
- Your task
- Required response/evidence items
- Physical proficiency boundary
- Evidence required

No empty handoff paragraphs were generated.

Result: **8 / 8 PASS**.

### Week 2 backward-compatibility regression

The real v16.3.74 Week 2 Career remediation was executed using its legacy `received / passes` and `prompts[] / model` schema. All five Week 2 Career pages retained:

- handoff text
- technician demonstration
- immediate practice
- model-reasoning reveal
- nonblank content

Result: **5 / 5 PASS**.

### Runtime metadata / Cloud Sync

- runtimePatch: `16.3.84`
- Week 3 final acceptance remains: `VERIFIED_PASS`
- Week 3 Career render status: `VERIFIED_VISIBLE`
- Cloud Sync protocol: **2 (unchanged)**

## Browser-environment note

A Chromium DOM run was attempted, but this execution environment blocks both loopback HTTP and `file:` navigation with `ERR_BLOCKED_BY_ADMINISTRATOR`. That restriction is external to Alfred. The update therefore uses direct JavaScript runtime execution of the actual curriculum/remediation objects plus the actual renderer functions as the internal acceptance harness.

## Acceptance recommendation

After repository upload and GitHub Pages deployment verification, v16.3.84 should become the frozen Week 3 Career learner-facing baseline if the deployed files match this package.
