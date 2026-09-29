# AU-ESET 301 — v16.3.80 CETa Instructional Authority QA

## Result

**PASS for the implementation package; production verification required after upload.**

## Defect corrected

v16.3.79 repaired timing partitions but still used the legacy `coverageMatrix.week` field as the timing source. Post-deployment adversarial verification found that this field no longer reliably matches the live patched curriculum.

The most important findings were:

- 41 CETa standards have a legacy coverage week that differs from the earliest current live assignment.
- Week 2's old metadata still carried unrelated future-topic standards that the focused Week 2 redesign no longer teaches.
- Therefore a release could report `0 future prerequisite leaks` while still using a stale definition of “taught.”

## New source-of-truth rule

Only current active CETa semantic teaching routes establish verified teaching timing.

Legacy coverage rows and module-only assignments are retained for provenance, but cannot independently establish a verified prerequisite.

## Verified invariants

- CETa standards: **262**
- Career standards: **95**
- Canonical standards rows: **357**
- CETa active semantic routes: **219**
- Live CETa teaching tasks independently checked: **62**
- Verified CETa codes terminating in visible learner-facing teaching sections: **219/219**
- Visible teaching-route mapping failures: **0**
- CETa route-rehome backlog: **43**
- Legacy-vs-live-assignment mismatches identified: **41**
- Career dependency rows: **95**
- Duplicate CETa authority codes: **0**
- Career relationships with zero verified CETa support (excluding explicit Career extensions): **0**
- Pending CETa support used as a verified prerequisite: **0**
- Future verified prerequisite leaks: **0**
- Week 2 active CETa set exactly matches the current focused DC-network route: **PASS**
- Week 2 CETa route backlog: **0**
- Week 2 combined gate: **VERIFIED_PASS**
- Other combined verified weeks: **0**

## Week 2 current active CETa codes

`4.1, 4.2, 4.3, 4.4, 4.10, 4.17, 9.1, 9.3`

## Backlog policy

The 43 route-rehome rows remain official CETa requirements. They are not deleted, retired, or declared optional. They must be rebuilt into their target weeks before Alfred can claim full CETa route completeness.

The re-home CSV records the proposed logical destination for each row and explicitly states that a target week is not proof of current instruction.

## Regression scope

This governance repair does not intentionally modify:

- learner-facing Week 2 teaching;
- learner-facing Week 3 teaching;
- Career lesson content;
- `course-data.js`;
- the simplified course calendar;
- Cloud Sync protocol 2;
- lab identities;
- CETa Study Guide asset.

## QA command

`node ceta-instructional-authority-qa-v16.3.80.cjs .`

## Local package integrity

- Service-worker CORE entries checked: **315**
- Missing CORE assets: **0**
- Local HTML `src`/`href` references checked: **1,452**
- Missing local HTML references: **0**

## Regression hashes preserved

- `course-data.js`: `6dcd0a266f789765806a914865c3cc9b37ca9635f5ea35e8b88f2007c43d91ed`
- Simplified Course Calendar ICS: `ab9c1ec20b21694e8e12fc2f0cb6eef1da846c26bfae1906c15de8603c1ecb6e`
- Week 2 redesign/runtime files: unchanged from v16.3.79 production artifact
- Week 3 redesign/runtime files: unchanged from v16.3.79 production artifact
- `cloud-sync-status.js`: unchanged from v16.3.79 production artifact
