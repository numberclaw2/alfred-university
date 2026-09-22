# AU-ESET 301 v16.3.52 — Change Manifest

## Purpose

Add direct page selection inside CETa/Career lesson modules and Guided Practice, with special compatibility for lessons the learner passed before later instructional reconstruction.

## Functional files modified

- `learn.js` — direct lesson page dropdown/numeric/arrows; prior-pass review compatibility; locked future-page protection; Guided Practice pagination/direct navigation; shared-state preservation.
- `styles.css` — responsive lesson/practice page-navigation UI and >=44px primary touch targets.
- `learn.html` — v16.3.52 Learn/CSS cache-busting while retaining the v16.3.51 Teaching Media source-hotfix overlay.

## Cumulative v16.3.51 hotfix files included

These files are intentionally included so this package can be uploaded directly over the current v16.3.50 GitHub state without requiring a separate v16.3.51 upload first:

- `teaching-media-architecture-repair.js`
- `study.html`
- `resources.html`

The v16.3.51 Teaching Media architecture file is byte-identical to the accepted hotfix package.

## Version / cache / release files modified

- `build-info.json`
- `service-worker.js`
- `README.md`
- `release-notes-current.js`
- `SHA256SUMS.txt`

## Added verification / operations files

- `AU-ESET-301-v16.3.52-Direct-Section-Navigation-QA.md`
- `AU-ESET-301-v16.3.52-Change-Manifest.md`
- `UPLOAD_README_v16.3.52.txt`

## Explicitly unchanged

No curriculum data, assessment data, lab definitions, Project Center data, Calendar data, glossary data/behavior, Cloud Sync protocol, Teaching Media requirement counts, Focus Prep system, instructional visuals, or career/CETa sequencing data were changed.
