# AU-ESET 301 — v16.3.79 CETa ↔ Career Tandem Timing Governance

## Authority
This document supersedes v16.3.78 for cross-track **timing classification and acceptance QA**. v16.3.77 remains the Career occupational-performance authority. CETa content itself is unchanged.

## Why v16.3.79 exists
Post-deployment verification of v16.3.78 found that the dependency graph checked whether referenced CETa codes existed but did not enforce the CETa teaching week when classifying a code as prerequisite, concurrent, or later reinforcement. That allowed **54 support relationships** to be labeled prerequisites even though the corresponding CETa material is taught later.

The v16.3.79 rule is mechanical and non-negotiable:

- **Prerequisite CETa**: CETa teaching week `<` Career first-target week.
- **Concurrent CETa**: CETa teaching week `=` Career first-target week.
- **Later reinforcement/formalization**: CETa teaching week `>` Career first-target week.

No manually assigned prerequisite is accepted if it violates that timing rule.

## Relationship-type derivation
After timing partitioning:

1. A genuine `CAREER_EXTENSION` remains an extension.
2. Otherwise, if same-week CETa support exists → `CONCURRENT_SHARED`.
3. Otherwise, if earlier CETa support exists → `CETA_TO_CAREER`.
4. Otherwise → `CAREER_TO_CETA_FORMALIZATION`.

`CETA_ONLY_BREADTH` remains a CETa-side policy classification rather than a Career dependency-row type.

## Permanent acceptance rule
A week may be `VERIFIED_PASS` only when **all three gates pass**:

- CETa Gate
- Career Gate
- Tandem Gate

The Tandem Gate must validate every active Career relationship against the authoritative CETa week map, not merely code existence.

## Evidence non-substitution
CETa objective mastery never proves physical Career competence. Career performance never replaces CETa certification mastery.

## Scope preservation
This release changes governance/timing classification only. It does not redesign Week 3 or any other lesson, lab, calendar item, or Cloud Sync protocol.

## Repair metrics
- Canonical universe: **357** = 262 CETa + 95 Career
- Career dependency rows: **95/95**
- Relationship partitions corrected: **64** Career rows affected
- Relationship types reclassified for semantic consistency: **34** rows
- Future prerequisite leaks after repair: **0**
- Combined verified weeks remain: **Week 2 only**
