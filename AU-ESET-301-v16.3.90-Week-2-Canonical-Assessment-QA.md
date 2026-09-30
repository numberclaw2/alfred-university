# AU-ESET 301 v16.3.90 — Week 2 Canonical Assessment QA

## Status
PACKAGE QA PASS — post-upload deployment and real-browser confirmation still required.

## Browser evidence that drove this repair
The user’s v16.3.89 browser diagnostic reported:
- `Insufficient reviewed Career questions`
- `Week 2 repair count 5`

That proved the browser was on the v16.3.89 quiz runtime, but at least one of CQ1204–CQ1209 still failed the assessment engine’s complete eligibility contract.

## Complete eligibility contract
For each Week 2 Career mastery item, the selector requires:
- question present in the active bank
- ID included by the Week 2 test definition
- `track === 'Career'`
- `audit.status === 'editorially-reviewed'`
- `masteryEvidence !== false`
- `minWeek <= 2`

v16.3.89 repaired review status defensively, but did not guarantee every other field/object.

## v16.3.90 repair
A new uniquely-versioned layer runs after legacy/governance layers and immediately before assessment selection. It reconstructs the full canonical objects CQ1204–CQ1209 and reasserts the 12-question 6-CETa/6-Career Week 2 test definition.

`quiz.js` independently verifies the six-item eligibility snapshot immediately before selection and invokes the canonical rebuild again if any item fails any required field.

## Adversarial QA
The test harness:
1. loads the real assessment data layers,
2. applies the v16.3.90 canonical layer,
3. verifies 10 independent Week 2 forms,
4. removes each of CQ1204–CQ1209 individually and re-applies the repair,
5. corrupts each item’s track, review status, mastery flag, minWeek, and Week 2 test membership/mix/count,
6. re-applies the repair and reruns the selector.

Results:
- healthy selector: PASS
- 10/10 forms: 12 total, 6 CETa + 6 Career
- 6/6 individual missing-question scenarios: PASS
- 6/6 full eligibility-corruption scenarios: PASS
- Cloud Sync protocol 2: preserved

## Acceptance
Do not freeze until the uploaded Pages artifact is verified and the user’s real browser successfully opens Week 2 mastery.
