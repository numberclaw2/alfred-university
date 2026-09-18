# AU-ESET 301 v16.3.3 — Teaching Media Patch

Baseline verified before staging:
`3f8a69d8c842f9689afc11405b60c204ae5e9be3`

## Scope
This patch changes only the Stage 4 Teaching Media layer. It does not alter:
- lesson text or instructional objectives
- labs, assessments, mastery thresholds, standards mappings, or study-guide assignments
- calendar dates/UIDs
- progress storage or Cloud Sync
- module sequencing or visual lesson diagrams

## Files
1. `teaching-media-overrides.js` — new runtime media/source overlay.
2. `learn.html.patch` — loads the overlay immediately after `curriculum-data.js`.
3. `service-worker.js.patch` — caches the new overlay and bumps the cache key.
4. `build-info.json.patch` — marks the release as runtime patch v16.3.3.

## Weeks intentionally changed
7, 8, 13, 14, 16, 17, 18.

Other weeks were audited but left unchanged when the existing source was already appropriately instructional/reference-oriented or when adding a video would only pad the course.

## Validation completed
- JavaScript syntax check: PASS.
- Runtime mock test: PASS.
- Changed-week isolation: PASS.
- Every new media item resolves to a source object: PASS.
- Every new media item includes `use`, `role`, `watchFor`, and `gap`: PASS.
- Sampled unaffected weeks remain untouched: PASS.

## Deployment note
The connected GitHub integration has read access but returned HTTP 403 for branch creation and file creation, so these changes were staged without mutating `main`.
