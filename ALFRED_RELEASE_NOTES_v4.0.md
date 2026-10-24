# Alfred University AU-ESET 301 — v4.0 Functional Integrity & QA Candidate

**Date:** October 24, 2026  
**Source:** exact deployed `main` v3.5 snapshot `7612cf437b60d2e68409d1528489b51c3b19f8e1`  
**Purpose:** final functional hardening without changing the learner-facing course, historical scores, exam item banks or institution branding.

## Fixes included

1. **Loss-resistant backup imports.** Progress imports combine completed starts, marked-read teaching pages, existing application completion, valid attempt histories, objective diagnostics and saved personal review notes without allowing an empty local record to overwrite earlier completion. Reimporting the same backup does not duplicate scored attempts or history.
2. **Recover unfinished practice exams.** Local backup imports restore the draft response map for 100-question forms (while maintaining a current local attempt when appropriate). Already-completed scores are preserved separately; the learner can safely restart an unfinished attempt with confirmation before erasing draft answers.
3. **Cloud Sync reconciliation.** The existing protocol-2 client uses a durable module-field merge and retains unrelated server legacy-week fields in the read–reconcile–write workflow. This addresses a verified scenario where an empty local field would otherwise supersede a completed remote field. It is not an atomic cross-device conflict-resolution guarantee.
4. **Cold-start compatibility.** Older `schemaVersion: 1` snapshots with missing optional collections are normalized in memory. Existing storage keys and old progress data are retained.
5. **Offline-cache update.** PWA cache `alfred-ceta-v4-final-qa-20261024` includes the v4.0 release and QA files, preserving offline course assets. The copyrighted large Study Guide PDF remains outside automatic precaching.
6. **Transparency.** Two newly authored 100-question forms, the 60 provisional diagnostics and ETA outline remain as in v3.5. No unreviewed practice score qualifies as independently validated CETa readiness.

## Compatibility and unchanged invariants

- 30 ETA-focused modules; 373 original page identities; 635 original score-bearing question placements.
- 60 provisional scored objective diagnostics; two distinct 100-item original editorial mock forms; preserved archived rehearsal banks.
- Original Grizzly visual design, creed, local progress key and protocol-2 Cloud Sync configuration.
- Bundled 234-page private Study Guide PDF already on the site; it is not included again in this replacement ZIP.

## QA status

**PASS:** JavaScript syntax; 428 deterministic renderer/state checks including both full 100-question form completions; 36 real-Chromium document/viewport renders (390px and 1280px), no horizontal overflow or script exceptions; mocked service-worker install, cache activation and offline navigation; file-reference existence and Git-root ZIP integrity.

**NOT CLAIMED:** live navigation on deployed GitHub Pages; manual iPhone Safari approval; actual offline pages after airplane-mode/OS termination; authenticated real Cloudflare Worker sync, concurrency and quota testing; external technical question approval; passage-by-passage expert editorial audit of all book pages.

**Learner notice:** A partially completed exam will survive an exported backup only if the file was exported after those answers were saved. Cross-device draft syncing through the remote Worker is not independently verified.
