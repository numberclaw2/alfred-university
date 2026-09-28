# AU-ESET 301 — v16.3.73 Global Cloud Sync Status QA

**Date:** September 28, 2026  
**Release:** v16.3.73  
**Cloud Sync protocol:** 2  
**Production Worker baseline:** 2026-09-27-r4

## Verdict

**PASS — global Cloud Sync visibility added without changing the sync protocol, Recovery Key contract, D1 records, or course progress data.**

## Acceptance checks

- PASS — a compact Cloud Sync status indicator is injected into every navigated Alfred HTML page by the service worker.
- PASS — normal pages use the shared Alfred header; utility pages without that header use a fixed-corner fallback.
- PASS — supported states are **Local**, **Checking**, **Active**, **Offline**, and **Issue**.
- PASS — connected/online health verification uses the configured Worker `/health` endpoint.
- PASS — health verification checks `ok`, `databaseBound`, `syncTableReady`, `limiterTableReady`, `schemaReady`, and protocol `2`.
- PASS — the global status component does not read or expose `studentKey` / the Recovery Key.
- PASS — the indicator links to `progress.html#cloud-sync`.
- PASS — on the Progress page, the global indicator observes the existing authoritative sync badge and propagates sync-error state.
- PASS — Worker r4 remains unchanged.
- PASS — Parking Lot `parking:*` synchronization remains enabled.
- PASS — assessment analytics `analytics:ceta:*` and `analytics:career:*` remain supported by Worker r4.
- PASS — no curriculum, assessment, lab, calendar, or learning-state schema changes are included.
- PASS — service-worker cache identity is bumped so the update replaces the v16.3.72 cache.
- PASS — release-note loading is injected into the Release Notes page before `patch-notes.js` renders.

## Expected learner behavior

After upload and service-worker activation, every Alfred page should show a Cloud status pill near the header. On smaller screens the label is shortened to preserve header space.

A newly updated device may need one reload to install/activate the new service worker and a second reload/navigation before the global pill appears.
