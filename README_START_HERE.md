# ALFRED CETa-ONLY — ROOT-ONLY GITHUB UPLOAD (NO FOLDERS)

This is the no-folder variant of the CETa-only v1.0.1 package. It is designed to be **uploaded into the existing `ceta-only-remodel` branch**, which already has 34 base files. You do not need to delete or reupload other files outside this ZIP. Files with the same names update those currently on your branch.

## Steps in Chrome

1. **Extract** `Alfred_CETa_Flat_Files_Only_GitHub_Upload.zip` to a folder on your laptop.
2. Open the GitHub `ceta-only-remodel` branch (do NOT choose `main`).
3. Select **Add file > Upload files**. In Windows File Explorer, open the extracted folder.
4. Select all the files inside (Ctrl+A), then drag the selected **files** into the browser. Do not upload the ZIP itself. All files in this bundle have visible names; there are no hidden dotfiles or folders.
5. Commit directly to `ceta-only-remodel`.
6. Verify GitHub now lists `course.js`, `course.json`, `AUDIT_START_HERE.md`, `AUDIT_EVIDENCE.zip`, and the updated HTML/JS pages **at the repository root**. Confirm the app works on a preview before merging into `main`.

## Why there are updated existing files

The original package required `data/course.js` and `audit/AUDIT_START_HERE.md`. A no-folder deployment cannot load those paths, so the 16 relevant HTML pages, `ceta.js` and `service-worker.js` have been updated to use root-level paths. This is required, not duplicate clutter.

The `AUDIT_EVIDENCE.zip` contains the original QA and source-mapping reports for download, not for website runtime. This layout has **not** passed the original full browser/production validation suite. The locally run file/structure checks only verify that the flat references resolve. Before going live, test all 30 modules, practice scoring, PWA offline behavior, and personal progress backups.

GitHub branch rules and Pages config determine publishing; uploading to a branch doesn't automatically switch the live site.
