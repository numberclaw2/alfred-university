# AU-ESET 301 v16.3.14 — Engineering Page Retirement QA

**Date:** September 18, 2026  
**Scope:** Step 4 — Engineering only, plus the minimum Course Overview edit required to preserve the useful career-pathway and engineering-philosophy content.

## Purpose decision

- PASS — Engineering no longer has a unique enough job to justify an independent program page.
- PASS — its four technical pillars are already represented more concretely by the six course phases, Classroom, Lab Center, and Project Center.
- PASS — its lab philosophy is already owned by Classroom Application and Lab Center.
- PASS — its employer-facing engineering-evidence purpose is already owned by Projects and Progress.
- PASS — the bridge-role-to-engineering-destination ladder and the concise engineering philosophy were the two useful ideas worth explicitly preserving.

## Merge / retirement behavior

- PASS — Course Overview now contains the bridge-role pathway: R&D Engineering Lab, Hardware Test / Validation, Hardware Integration / Test, then Embedded Systems Engineering as the long-term destination.
- PASS — Course Overview explicitly cautions that role titles are not guarantees; actual duties and evidence-building value determine fit.
- PASS — Course Overview mastery copy now preserves the engineering loop: understand it, measure or build it, debug it, and explain the evidence.
- PASS — `engineering.html` is now a compatibility route rather than a duplicate school/program page.
- PASS — compatibility routing points to Course Overview, Lab Center, Project Center, and Progress career readiness.
- PASS — no lab procedure, project requirement, or readiness record was duplicated or moved unnecessarily.

## Intentional deferral

- PASS — global More-menu/footer references to Engineering are intentionally not removed in this release. Step 9 owns final Home + Navigation cleanup.
- PASS — until Step 9, those legacy links land on the compatibility page rather than duplicated program content.

## Static / runtime checks

- PASS — `release-notes-current.js` and `service-worker.js` pass JavaScript syntax validation.
- PASS — `build-info.json` parses and reports runtime **v16.3.14**.
- PASS — service-worker cache advances to `alfred-u-v16-3-14-engineering-retirement-20260918`.
- PASS — Engineering retirement introduces no new progress key, assessment identity, lab identity, project identity, or Cloud Sync record type.
- PASS — Release Notes records the retirement, preserved content, intentional deferral, and exact file manifest.

## Scope boundary

This release does **not** redesign Study, Practice, the Week Overview compatibility route, Knowledge Base, Student Services, Home/navigation globally, Calendar behavior/data, labs, projects, assessments, mastery formulas, Progress, Cloud Sync, lesson content, or Teaching Media.

Step 5 (Knowledge Base) must not begin until this release is uploaded, deployed, and accepted.
