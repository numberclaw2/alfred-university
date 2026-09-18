# AU-ESET 301 v16.3.17 — About Page Durability Upgrade QA

**Date:** September 18, 2026  
**Scope:** Step 7 — About only, plus release/build/cache bookkeeping required by the permanent Release Notes policy.

## Purpose decision

- PASS — About still has a unique job and remains a permanent administrative page.
- PASS — it explains the fictional institutional framing, the real learning purpose, and the non-accredited/no-credit disclosure without duplicating learner workflow pages.
- PASS — release-specific audit history is no longer embedded in permanent About prose.

## Accuracy / durability behavior

- PASS — the stale hard-coded `v16.3.7` runtime claim is removed from About.
- PASS — About no longer hard-codes a current runtime number anywhere in its permanent narrative.
- PASS — Current Platform Status reads `courseRelease`, `runtimePatch`, `cloudSyncProtocol`, and `build` from `build-info.json` using `cache: 'no-store'`.
- PASS — metadata-load failure produces a Release Notes fallback rather than a fabricated or stale version.
- PASS — the page explicitly distinguishes fictional institution/branding/documents from real electronics learning, practice, linked resources, assessments, projects, evidence-building, and career-transition work.
- PASS — Release Notes and Deployment Notes are identified as the owners of change history and technical maintenance guidance respectively.
- PASS — the institutional disclosure remains explicit: fictional, non-accredited, no degrees, no academic credit, no official credentials.

## Static / runtime checks

- PASS — inline About metadata script, `release-notes-current.js`, and `service-worker.js` pass JavaScript syntax validation.
- PASS — `build-info.json` parses and reports runtime **v16.3.17**.
- PASS — service-worker cache advances to `alfred-u-v16-3-17-about-dynamic-runtime-disclosure-20260918`.
- PASS — Release Notes includes v16.3.17 first and records the exact file manifest.
- PASS — no new storage key, progress identity, assessment/lab/project identity, or Cloud Sync record type is introduced.

## Scope boundary

This release does **not** modify Deployment page content, global Home/navigation cleanup, Study, Practice, Classroom, Calendar, Progress, Mastery, Labs, Assessments, Projects, Search, Course Overview, compatibility-route behavior, curriculum, Teaching Media, or Cloud Sync protocol.

Step 8 (Deployment) must not begin until this release is uploaded, deployed, and accepted.
