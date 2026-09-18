# AU-ESET 301 v16.3.10.1 — Release Notes Manifest Correction QA

**Date:** September 18, 2026  
**Scope:** release-note file classification only

## Why this correction exists

Post-deployment verification of v16.3.10 against GitHub commit `2f9b63814939577bb5accf6f902f626b5fe29db1` found one bookkeeping defect: the release entry marked `POST-UPDATE-QA.md`, `UPLOAD_README.txt`, and `SHA256SUMS.txt` as Added even though those filenames already existed and GitHub correctly reported them as Modified.

## Verified v16.3.10 commit classification

**Added**
- `AU-ESET-301-Release-Notes-Policy.md`
- `release-change-ledger.js`

**Modified**
- `POST-UPDATE-QA.md`
- `SHA256SUMS.txt`
- `UPLOAD_README.txt`
- `build-info.json`
- `patch-notes.html`
- `patch-notes.js`
- `release-notes-current.js`
- `service-worker.js`

**Removed**
- None

## Historical integrity

- PASS — v16.3.10 deployment itself succeeded.
- PASS — GitHub Pages build/deploy/status jobs all completed successfully for commit `2f9b63814939577bb5accf6f902f626b5fe29db1`.
- PASS — historical ledger remains 63 commits from the original repository build through the v16.3.9 baseline.
- PASS — 10 no-tree-change upload commits remain preserved.
- PASS — historical line statistics remain 90,815 additions and 42,486 deletions.
- PASS — 43 narrative release records existed after v16.3.10; v16.3.10.1 becomes the 44th.

## Scope boundary

This correction changes only Release Notes bookkeeping, build metadata, the service-worker cache namespace, and this QA record. It changes no instructional or course-learning system.
