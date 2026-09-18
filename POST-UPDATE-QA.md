# AU-ESET 301 v16.3.18 — Deployment Page Durability Upgrade QA

**Date:** September 18, 2026  
**Scope:** Step 8 — Deployment only, plus release/build/cache bookkeeping required by the permanent Release Notes policy.

## Purpose decision

- PASS — Deployment still has a unique administrative/maintenance job and remains a permanent page.
- PASS — release-specific v16.3.7 integration prose has been removed from permanent deployment guidance.
- PASS — Release Notes remain the owner of release history and exceptional migration instructions.

## Live build verification

- PASS — Deployment no longer hard-codes a current runtime/build/status value in its permanent prose.
- PASS — the live status block reads `courseRelease`, `runtimePatch`, `evidenceRevision`, `cloudSyncProtocol`, `releaseStatus`, and `build` from `build-info.json` using `cache: 'no-store'`.
- PASS — metadata-load failure instructs the maintainer to verify the Pages deployment and open `build-info.json` directly rather than assuming a version.
- PASS — Deployment explicitly explains that `build-info.json` is network-fetched by the service worker and is not trusted from the offline cache.

## Durable operations guidance

- PASS — repository source, GitHub Pages deployment, browser/local state, and optional Worker/D1 Cloud Sync are documented as separate layers.
- PASS — Cloud Sync documentation matches current `progress.js`: local progress first, configured HTTPS Worker root, Student Sync/Recovery Key, device identity, `/health` checks, D1 binding/schema checks, protocol compatibility, and timestamped-record merging.
- PASS — service-worker documentation matches current `service-worker.js`: network-first navigation/application code, offline cache fallback, versioned Alfred cache namespace, old-cache cleanup on activation, and direct network fetch for `build-info.json`.
- PASS — maintenance guidance preserves Progress export, Recovery Key protection, exact Pages/build-marker verification, origin awareness, and the existing rule not to clear site data as a routine refresh step.
- PASS — no Worker endpoint, D1 schema, Cloud Sync protocol, service-worker fetch strategy, or progress storage behavior was changed.

## Static / runtime checks

- PASS — inline Deployment metadata script, `release-notes-current.js`, and `service-worker.js` pass JavaScript syntax validation.
- PASS — `build-info.json` parses and reports runtime **v16.3.18**.
- PASS — service-worker cache advances to `alfred-u-v16-3-18-deployment-durable-operations-20260918`.
- PASS — Release Notes includes v16.3.18 first and records the exact file manifest.

## Scope boundary

This release does **not** modify Home/global navigation, About, Study, Practice, Classroom, Calendar, Progress behavior, Mastery, Labs, Assessments, Projects, Search, Course Overview, compatibility routes, curriculum, Teaching Media, Worker/D1 infrastructure, or Cloud Sync protocol.

Step 9 (Home + Navigation final cleanup) must not begin until this release is uploaded, deployed, and accepted.
