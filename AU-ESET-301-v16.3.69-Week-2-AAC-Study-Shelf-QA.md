# AU-ESET 301 — v16.3.69 Week 2 AAC Study Shelf QA

**Scope:** Week 2 only

## Acceptance verdict

**PASS — static integration QA.** The v16.3.68 required Week 2 teaching path is unchanged. Six All About Circuits resources are restored as optional Study resources only.

## Study resources restored

1. `aacSeries1` — Alternate Explanation
2. `aacSeriesDivider` — Divider Reinforcement
3. `aacParallel` — Alternate Explanation
4. `aacKclKvl` — Kirchhoff Reinforcement
5. `aacMeterLoading` — Measurement Loading
6. `aacTroubleshootSeriesParallel` — Troubleshooting Help

## Required-path protection

- Week 2 Required Teaching Media remains the four-resource v16.3.68 Khan/OpenStax path.
- No All About Circuits resource receives a Week 2 Classroom placement.
- All restored AAC assignment records use `destination = study` and `requirement = supporting`.
- No restored AAC resource is added to a mastery/completion gate.

## Regression protections

- 7 Week 2 CETa teaching pages preserved.
- 5 Week 2 Career teaching pages preserved.
- Study Guide contextual slicing unchanged.
- LAB-002 unchanged.
- Calendar files unchanged.
- Cloud Sync protocol remains 2.

## Static QA

- New hotfix JavaScript syntax: PASS.
- Six intended HTML surfaces load the hotfix after `week2-redesign-v16.3.68.js`: PASS.
- Service-worker CORE includes both raw and versioned v16.3.69 hotfix paths: PASS.
- Release Notes include v16.3.69: PASS.
- Week 2 AAC Classroom placements added by this patch: 0.
- Week 2 AAC Study resources restored by this patch: 6.

A production graphical/browser check should still be performed after GitHub Pages deploys.
