# AU-ESET 301 v16.3.50 — Change Manifest

## Scope

Teaching Media architecture/workload calibration only. Core curriculum remains v16.3.

## Added runtime file

- `teaching-media-architecture-repair.js` — additive post-v16.3.48 architecture overlay; preserves source IDs/provenance while assigning Classroom / Study / Engineering Library / Removed roles, bounded Required metadata, conditional-route metadata, source repairs, and known duplicate removals.

## Modified runtime/UI files

- `learn.js` — Classroom Required-only filtering, conditional labels, bounded scope/time/stopping-point display, zero-external-media state, simplified filters, progress-safe media completion behavior.
- `learn.html` — loads v16.3.50 architecture overlay and v16.3.50 Learn/CSS versions.
- `study.js` — Study-only Teaching Media retrieval plus Search / Need / Format / Track filtering; respects reached-material gating.
- `study.html` — loads final Teaching Media/literature/architecture layers; updates Study Media navigation copy.
- `study-v2.css` — responsive Study Media filter styling.
- `academic.js` — merges Architecture-classified professional Teaching Media into the existing Engineering Library with source/URL deduplication.
- `resources.html` — loads full Teaching Media architecture before Engineering Library rendering and clarifies professional-reference role.
- `styles.css` — Required/route-specific metadata styling and simplified responsive Classroom media filter grid.
- `service-worker.js` — cache bump to v16.3.50; caches architecture overlay, v16.3.50 UI assets, and new evidence files.

## Modified metadata/release files

- `build-info.json` — runtimePatch/build/revision/counts/filter categories/final acceptance markers updated to v16.3.50.
- `release-notes-current.js` — adds v16.3.50 Teaching Media Architecture / Workload Calibration release entry.
- `README.md` — updates current production-state markers and describes the new Teaching Media hierarchy.
- `SHA256SUMS.txt` — hashes for the changed-files-only v16.3.50 upload package.

## Added verification/operations files

- `AU-ESET-301-v16.3.50-Teaching-Media-Architecture-QA.md`
- `AU-ESET-301-v16.3.50-31-Week-Teaching-Media-Architecture.csv`
- `AU-ESET-301-v16.3.50-Implementation-Report.md`
- `AU-ESET-301-v16.3.50-Change-Manifest.md`
- `UPLOAD_README_v16.3.50.txt`

## Explicitly not modified

No curriculum/lab/project/assessment/calendar/glossary/progress/Cloud-Sync data owner was modified for this release. The implementation is additive/reclassification-oriented rather than a curriculum rewrite.
