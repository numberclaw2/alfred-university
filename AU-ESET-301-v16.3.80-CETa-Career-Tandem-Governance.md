# AU-ESET 301 — v16.3.80 CETa ↔ Career Tandem Governance

## Governing purpose

This release repairs the source-of-truth problem discovered during post-deployment verification of v16.3.79.

The prior tandem model used the legacy `coverageMatrix.week` field to decide whether a CETa competency was a prerequisite, concurrent competency, or later reinforcement. That field survived multiple focused lesson redesigns. It therefore no longer reliably represents the **current live teaching sequence**.

v16.3.80 establishes a stricter rule:

> **Only a current active CETa semantic teaching route may establish verified prerequisite/concurrent/later timing.**

A legacy coverage row may preserve history and traceability, but it cannot establish sequencing authority by itself.

---

## Current governing standards universe

- CETa standards: **262**
- Career standards: **95**
- Total governing standards: **357**

The CETa requirements remain aligned to ETA International's current Associate CET (CETa) competency document (© 2025 ETA International):
- https://etai.org/comps/CETa_comps.pdf
- https://www.etai.org/electronics.html

No CETa competency is deleted by this release.

---

## CETa instructional authority states

Every CETa row now has one of two explicit authority states.

### `ACTIVE_SEMANTIC_ROUTE`
The competency appears in a current, active CETa semantic teaching task after all live lesson patches are applied.

This is the only status that may establish a verified CETa sequencing claim in the Tandem graph.

Current count: **219**.

### `ROUTE_REHOME_REQUIRED`
The competency remains part of the official 262-standard universe, but its previously claimed route is not present in the current active semantic teaching path.

It may have:
- an old legacy coverage row;
- an old module assignment;
- content fragments elsewhere;
- a planned target week.

None of those is sufficient to claim the competency is currently and reliably taught.

Current count: **43**.

These 43 rows are retained in a dedicated re-home backlog with a proposed logical target week. A future lesson/week may not claim CETa completeness until the required route is actually rebuilt and re-audited.

---

## Why this was necessary

Post-deployment cross-checking found:

- **41** CETa standards where the legacy coverage week disagrees with the earliest current live assignment;
- focused Week 2 and Week 3 redesigns had removed or deferred broad topics while older coverage metadata still claimed those topics were taught there;
- v16.3.79 therefore could pass its own timing test while using a stale timing authority.

Example: the old coverage system still associated Week 2 with unrelated magnetics/oscillator/filter competencies even though the current Week 2 learner path is deliberately restricted to DC resistor networks, series/parallel reasoning, KCL/KVL, and voltage dividers.

v16.3.80 no longer allows that historical metadata to establish a prerequisite.

---

## Current Week 2 CETa authority

Week 2 is now governed by the live focused semantic set only:

- `4.1`
- `4.2`
- `4.3`
- `4.4`
- `4.10`
- `4.17`
- `9.1`
- `9.3`

This matches the actual learner-facing Week 2 redesign.

The stale unrelated Week 2 assignments are moved to the route-rehome backlog instead of being treated as completed Week 2 instruction.

Week 2 remains the only current combined `VERIFIED_PASS` because:
- its active CETa route is coherent;
- its Career gate is verified;
- its Tandem gate is verified;
- no route-rehome backlog is assigned to Week 2.

---

## Tandem relationship rule

Each Career standard may contain two distinct classes of CETa support.

### Verified support
A CETa code with an `ACTIVE_SEMANTIC_ROUTE`.

Only verified support can be partitioned into:
- prerequisite CETa;
- concurrent CETa;
- later CETa reinforcement.

### Pending support
A CETa code whose route is `ROUTE_REHOME_REQUIRED`.

Pending support:
- remains visible for traceability;
- cannot count as a prerequisite;
- cannot count as concurrent teaching;
- cannot establish a timing-based PASS;
- must be repaired/re-homed before it can become verified support.

This prevents a stale or incomplete CETa route from silently legitimizing a Career sequence.

---

## Relationship types

The five cross-track relationship types remain:

1. `CETA_TO_CAREER`
2. `CAREER_TO_CETA_FORMALIZATION`
3. `CONCURRENT_SHARED`
4. `CAREER_EXTENSION`
5. `CETA_ONLY_BREADTH`

For Career relationships, type derivation now uses **verified live CETa support only**.

---

## Permanent three-gate week acceptance

A week can receive `VERIFIED_PASS` only when all three independent gates pass.

### Gate A — CETa
- active CETa codes have verified current teaching routes;
- no unresolved CETa re-home item is assigned to that week;
- assessment does not precede teaching;
- certification mastery remains separate from Career evidence.

### Gate B — Career
- v16.3.77 occupational acceptance rubric passes;
- procedural skills include demonstration, learner action, and evidence;
- physical skill is not substituted by reading/video/simulation.

### Gate C — Tandem
- every active Career standard has a valid relationship record;
- only verified CETa routes establish timing;
- prerequisites are earlier than Career first use;
- concurrent CETa is same-week;
- later reinforcement is later;
- pending CETa support never masquerades as prerequisite knowledge;
- CETa and Career evidence remain non-substitutable.

If any gate fails, the week status is `REMEDIATION_REQUIRED`.

---

## CETa route re-home backlog

43 CETa standards remain in the official standards universe but need route repair/re-homing.

Planned target-week distribution:

- Week 1: 6
- Week 3: 2
- Week 4: 2
- Week 6: 10
- Week 7: 13
- Week 9: 3
- Week 10: 1
- Week 11: 4
- Week 20: 2

The full row-level plan is in:

`AU-ESET-301-v16.3.80-CETa-Route-Rehome-Backlog.csv`

These targets are governance targets, **not claims that the competencies are already taught there**.

---

## Non-substitution rules

The following are permanent:

1. CETa objective mastery cannot prove Career physical competence.
2. Career physical evidence cannot replace CETa objective mastery.
3. Legacy coverage metadata cannot establish teaching timing.
4. Module assignment alone cannot establish an accepted current CETa route.
5. Pending/re-home CETa standards cannot become prerequisites until their active teaching route is rebuilt and verified.
6. A later lab cannot compensate for prerequisite teaching that never occurred.
7. Certification-only breadth may remain certification-only when it has no useful occupational artifact.
8. Career-only extensions may exceed CETa scope without being forced into false equivalence.

---

## Current acceptance truth

- Week 2: **VERIFIED_PASS**
- Weeks 1 and 3–31: **REMEDIATION_REQUIRED**
- CETa standards universe: **262**
- CETa active verified routes: **219**
- CETa route re-home backlog: **43**
- Career standards: **95**
- Canonical standards universe: **357**

This is intentionally stricter than the previous reporting model. The course is no longer allowed to call a standard “covered” merely because a historical matrix row exists.
