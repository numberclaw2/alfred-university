# Alfred v3.4 · Editorial and Functional QA

**Source baseline:** `c9ac007e656295c43979136154c2215df1c5b9bf`, v3.3. **Academic verdict:** page-topic review completed; full book technical acceptance / independent readiness not complete.

### Audited reading records

- 20 of 20 inherited required reading records checked against the user's scanned Sixth Edition PDF (234 pages) by printed-page text plus selected page-image review.
- One incorrect user-visible page citation corrected; three other inherited point-of-use lesson positions corrected. All reading IDs retained.
- Per-reading task, topic-fit evidence, status and explicit limitations added to course data and Library-linked audit artifact.

### Reproducible checks

- **modules** — PASS
- **page_identity** — PASS
- **page_content** — PASS
- **questions** — PASS
- **candidate_questions** — PASS
- **read_ids** — PASS
- **labs** — PASS
- **pdf_preserved** — PASS
- **coursejs_json** — PASS
- **assignments_topic_checked** — PASS
- **gap_ids** — PASS
- **key_consistency** — PASS
- **reading_routes** — PASS
- **corrected_M22** — PASS
- **no_approved_independent_readiness** — PASS
- **precache_urls_all_exist** — PASS
- 420 virtual-document renderer checks: PASS (all 373 Learn pages, 30 Start pages, publisher chapter routes, both 100-question rehearsals, other major routes).
- `node --check` on ceta.js, course.js and service-worker.js: PASS.
- GitHub-ready ZIP CRC, member path and file-hash check: PASS (performed after archive is generated).
- Actual browser, iPhone, offline-update and remote Cloud Sync: NOT RUN / NOT VERIFIED.

- Recorded 60 of 262 ETA objectives with no current tagged scored-question evidence in a standalone teaching/remediation register.

### Guardrails

- Chapter/passage *topic fit* ≠ correctness of each statement in the historical textbook.
- Legacy practice and M29/M30 rehearsals cannot grant independently validated readiness.
- Privacy and hosting permissions of the user's owned book remain independent of repository metadata.

## Corrected reading route diff

- M07 sg-w04-ch03-p019-022: lesson 3 → 9; book pp. 19–22 → 19–22
- M14 sg-w10-ch12-selected: lesson 7 → 12; book pp. 91;95–96;98 → 91;95–96;98
- M22 sg-w19-ch13-p108-109: lesson 5 → 2; book pp. 108–109 → 109–110
- M26 sg-w20-ch13-p104-107: lesson 1 → 4; book pp. 104–107 → 104–107
