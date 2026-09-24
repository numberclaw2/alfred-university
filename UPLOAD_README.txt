AU-ESET 301 v16.3.60 — COMBINED MULTIMODAL QA REPAIR

NO WORKFLOW IS REQUIRED.

UPLOAD TO THE REPOSITORY ROOT.

REPLACE:
- v16.3.56-runtime-placement-hotfix.js
- reading-library-integration.js
- resources.html
- build-info.json
- patch-notes.html
- service-worker.js
- SHA256SUMS.txt

ADD:
- release-notes-v16.3.60.js

WHAT THE AUDIT FOUND
- 5 Classroom/Required assignments had no Required contextual use.
- 2 Required assignments were scheduled in a week where the source had no Required contextual use.
- 2 Required contextual placements pointed to sources that were only Study assignments.
- 19 sources have mixed Classroom / Study / Engineering Library roles, but the v16.3.59 centralized index flattened each source to one status.
- The centralized index only guaranteed contextual literature; it did not guarantee Study/Library-only written resources would appear.

WHAT v16.3.60 REPAIRS
- Required assignments: 251 -> 247
- Study assignments: 77 -> 81
- Engineering Library assignments: stays 19
- Total assignments: stays 347
- Unique assignment source IDs: stays 322
- Canonical source identities: stays 319
- Contextual placements: stays 1,021
- Literature placements: stays 515
- Required dual-channel section coverage is preserved.
- All Required contextual sources now have a Classroom assignment.
- All Classroom/Required assignments now have Required contextual use.
- Required assignment weeks align with actual contextual use.
- Centralized reading index now includes all 152 unique literature assignment sources,
  including Study-only and Engineering-Library-only written resources.
- Mixed-role sources show all applicable roles and match every applicable status filter.
- CETa Study Guide remains 62 mapped records and is not remapped by this release.

VALIDATION COMPLETED BEFORE PACKAGING
- JavaScript syntax: PASS
- build-info.json parse: PASS
- Reading-index union/mixed-role smoke test: PASS
- Audit simulation on current v16.3.59 repo:
    347 total assignments
    247 Classroom after repair
    81 Study after repair
    19 Engineering Library after repair
    322 unique source IDs
    319 canonical source identities
    0 phantom Required assignments after repair
    0 Required-context / assignment-role contradictions after repair
    0 Required-week misalignments after repair
- v16.3.60 hotfix contains fail-closed runtime assertions for those invariants.

After upload, tell ChatGPT:
uploaded v16.3.60
