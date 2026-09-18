# AU-ESET 301 v16.3.15 — Knowledge Base Retirement QA

**Date:** September 18, 2026  
**Scope:** Step 5 — Knowledge Base only, plus the minimum Search Everything edits required to preserve the useful concept-reference experience.

## Purpose decision

- PASS — the underlying concept-reference data remains useful.
- PASS — the standalone Knowledge Base page no longer has a unique enough job to justify a second search interface.
- PASS — Classroom owns full teaching; Search Everything owns retrieval; Standards & Retention owns competency/evidence detail; Engineering Library owns deeper external sources.
- PASS — `academic-content.js` remains unchanged and still contains all 61 current concept records.

## Merge / retirement behavior

- PASS — Search Everything now indexes those records as **Concept Reference** results rather than the legacy Knowledge result type.
- PASS — each Concept Reference result renders the concept summary, formula when present, deeper technician note, CETa domain, and mapped weeks directly in the result card.
- PASS — concept cards link to the first mapped Classroom week for full instruction and to Standards & Retention for competency evidence.
- PASS — Search Everything now reads `type` and `domain` query parameters in addition to `q`.
- PASS — changing the Search type/domain filters keeps those filters represented in the URL.
- PASS — `knowledge.html` is now a compatibility route rather than a second searchable concept-card page.
- PASS — old `knowledge.html?q=...&domain=...` bookmarks preserve both values when opening Search Everything's Concept Reference filter.
- PASS — no concept definition, formula, mapping, or deeper note was rewritten or discarded.

## Intentional deferral

- PASS — global More-menu/footer references to Knowledge Base are intentionally not removed in this release. Step 9 owns final Home + Navigation cleanup.
- PASS — until Step 9, those legacy links land on the compatibility route rather than a duplicate search interface.

## Static / runtime checks

- PASS — `search.js`, `release-notes-current.js`, and `service-worker.js` pass JavaScript syntax validation.
- PASS — `build-info.json` parses and reports runtime **v16.3.15**.
- PASS — service-worker cache advances to `alfred-u-v16-3-15-knowledge-base-retirement-20260918`.
- PASS — Search query compatibility was tested with `?type=Concept%20Reference&q=Voltage&domain=2` and returns the full Voltage concept-reference card rather than a link back to Knowledge Base.
- PASS — Knowledge Base retirement introduces no progress key, assessment identity, lab identity, project identity, or Cloud Sync record type.
- PASS — Release Notes records the retirement, preserved data, Search ownership change, intentional deferral, and exact file manifest.

## Scope boundary

This release does **not** redesign Study, Practice, Week Overview compatibility behavior, Engineering compatibility behavior, Student Services, Home/navigation globally, Calendar behavior/data, labs, projects, assessments, mastery formulas, Progress, Cloud Sync, Classroom lesson content, Teaching Media, or the underlying `academic-content.js` concept records.

Step 6 (Student Services) must not begin until this release is uploaded, deployed, and accepted.
