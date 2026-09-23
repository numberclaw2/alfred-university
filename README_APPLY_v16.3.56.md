# AU-ESET 301 v16.3.56 Hotfix — Apply Instructions

This package repairs the runtime-placement defects found during the final verification of v16.3.55.

## What is already verified

The included overlay was executed against the exact current `main` runtime composition before packaging.

Final result:
- 491 live teaching sections
- 1,020 contextual placements
- 0 broken/orphan section targets
- 0 live sections missing Required video
- 0 live sections missing Required written literature
- 515/515 contextual literature placements indexed as readings

## Preferred application

1. Download and unzip this package.
2. Put the unzipped folder next to (or anywhere accessible from) your local `alfred-university` repository.
3. From a terminal, run:

   `python apply_v16_3_56_patch.py /path/to/alfred-university`

4. Review the changed files.
5. Commit/push them to `main`.
6. Wait for the GitHub Pages `pages build and deployment` workflow to complete successfully.
7. Reopen the deployed site. You should not need to erase progress or browser site data.

## Why this package exists

The connected GitHub integration in this ChatGPT session can read and verify the repository, but GitHub returned HTTP 403 for both Git Data writes and Contents API writes. No partial repository mutation occurred.

## Files added by the patch

- `v16.3.56-runtime-placement-hotfix.js`
- `AU-ESET-301-v16.3.56-Post-Deployment-Runtime-Placement-Verification.md`

The patcher also makes small cache/build/release-marker edits to:
- `learn.html`
- `study.html`
- `resources.html`
- `service-worker.js`
- `build-info.json`
- `release-notes-current.js`
- `SHA256SUMS.txt`

No CSS/layout/navigation redesign is included.
