AU-ESET 301 v16.3.58 — Semantic Media Integrity Repair

EXPECTED MAIN HEAD
566d8c15bb4a45cab26b3c780c1bbf2a33e7f229

USE THE EXISTING ALFRED MAINTENANCE WORKFLOW
1. GitHub > Actions > Alfred University Maintenance > Run workflow.
2. patch_b64: paste all of AU-ESET-301-v16.3.58-patch-b64.txt
3. expected_head: 566d8c15bb4a45cab26b3c780c1bbf2a33e7f229
4. commit_message: Apply AU-ESET 301 v16.3.58 semantic media integrity repair
5. Run workflow.

FILES
- v16.3.58-semantic-media-repair.js — standalone/archive repair logic.
- AU-ESET-301-v16.3.58-maintenance.patch — unified workflow patch.
- AU-ESET-301-v16.3.58-patch-b64.txt — ready-to-paste workflow input.
- UPLOAD_README_v16.3.58.txt — these instructions.

The workflow patch appends the repair logic to the already-loaded
v16.3.56-runtime-placement-hotfix.js so the existing runtime acceptance test
executes the semantic repair before committing.

PROTECTED COUNTS
31 modules; 491 live sections; 1,020 contextual placements; 515 literature
placements; 347 canonical assignments; 251 Classroom; 77 Study; 19 Engineering
Library; 321 unique assignment source IDs; 262 CETa standards; 81 Career
standards; 24 labs; Cloud Sync protocol 2.

Validation completed before packaging:
- node --check semantic repair: PASS
- git apply --check maintenance patch: PASS
