# AU-ESET 301 v16.3.10 — Release Notes Completeness QA

**Date:** September 18, 2026  
**Scope:** release history, repository-change ledger, and permanent change-control policy only

## Historical reconciliation

- PASS — existing human-readable history contains 42 unique pre-v16.3.10 release records spanning v1.x through v16.3.9.
- PASS — `release-change-ledger.js` contains 63 GitHub commits from original commit `320b9bf26609c5bd806f27ffbe760ac507fa15bc` through v16.3.9 baseline commit `7694e4477d07a05f5e72bb654fe5b582fa7d9165`.
- PASS — 10 historical upload commits with no repository tree change are retained and labeled rather than omitted.
- PASS — ledger line statistics reconcile to 90,815 additions and 42,486 deletions across the 63 historical commits. Binary-file replacements may report zero textual lines in GitHub and are still represented by their commit link.
- PASS — every historical ledger row links to the exact GitHub commit page, which remains the authoritative file-by-file diff for that commit.

## Release Notes behavior

- PASS — v16.3.10 adds a permanent rule requiring Release Notes for every future website update, regardless of size.
- PASS — new release entries support explicit `filesAdded`, `filesModified`, and `filesRemoved` fields.
- PASS — empty file categories render as `None` instead of disappearing, so removals/subtractions are explicit.
- PASS — Release Notes search now covers both human-readable release entries and the historical commit ledger.
- PASS — current releases are normalized to newest-to-oldest order: v16.3.10, v16.3.9, v16.3.8, v16.3.7, v16.3.6, v16.3.5, then historical v16.3.4 and earlier entries.
- PASS — the page explains the self-reference rule: v16.3.10 and later releases record their exact changed-file manifest directly in the release entry rather than requiring an endless follow-up commit merely to record the prior commit SHA.

## Runtime integrity

- PASS — `release-notes-current.js`, `release-change-ledger.js`, and `patch-notes.js` pass JavaScript syntax validation.
- PASS — `build-info.json` parses as valid JSON and identifies runtime v16.3.10.
- PASS — service-worker cache namespace advances to `alfred-u-v16-3-10-release-notes-complete-ledger-20260918`.
- PASS — service worker includes `release-change-ledger.js` and `AU-ESET-301-Release-Notes-Policy.md` in the cached file set.
- PASS — `patch-notes.html` loads `release-change-ledger.js` before `patch-notes.js`.

## Scope boundary

No curriculum, Week 1 instruction, Teaching Media, assessment, lab, project, calendar, progress, mastery, Cloud Sync, or course-learning file is included in this upload package.

This is a documentation/change-control release only.
