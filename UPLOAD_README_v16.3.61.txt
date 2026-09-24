ALFRED UNIVERSITY AU-ESET 301 — v16.3.61 BUILT-IN PRIVATE CETa STUDY GUIDE

PURPOSE
Remove the per-device PDF import step now that the Alfred repository is private.
The learner-owned Associate CET Study Guide is bundled as a private repository asset.

BASELINE
Apply ONLY to the accepted v16.3.60 repository.
The patcher aborts if build-info.json does not report runtimePatch 16.3.60.

FILES IN THIS PACKAGE
- Associate_CET_Study_Guide_Sixth_Edition.pdf
- ceta-study-guide-private.js
- release-notes-v16.3.61.js
- apply_v16_3_61_builtin_study_guide.py
- AU-ESET-301-v16.3.61-Built-In-Study-Guide-QA.md
- UPLOAD_README_v16.3.61.txt

WHAT CHANGES
- Existing Study Guide buttons open the bundled PDF directly.
- Existing printed-page mappings remain unchanged.
- Printed page -> PDF page offset remains +10.
- Connect / Replace / Forget PDF controls disappear from normal learner UI.
- Existing Study-page estimated-time and after-reading context remains.
- No code in this patch blocks the Study Guide from interacting with Cloud Sync. This patch does not itself add PDF transfer/synchronization, and the guide does not affect mastery/completion.
- Runtime patch advances to v16.3.61; curriculum release remains v16.3.
- Release Notes and service-worker metadata are synchronized.

HOW TO APPLY
1. Put this package beside your local/private Alfred repository folder.
2. Run:
     python apply_v16_3_61_builtin_study_guide.py /path/to/alfred-university
3. Review the changed files.
4. Commit/push them to the PRIVATE repository.

IMPORTANT
Do not publish the bundled Study Guide from a public repository or public static host without the right to redistribute it.

EXPECTED RESULT
Clicking an existing Study Guide page button should open:
  Associate_CET_Study_Guide_Sixth_Edition.pdf#page=<printed page + 10>
No import step is required.
