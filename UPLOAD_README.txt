AU-ESET 301 v16.3.42 — FINAL TRACEABILITY / LEARNER-ROUTING / INDEPENDENT ACCEPTANCE REPAIR

UPLOAD TARGET
Apply this changed-files-only package on top of the currently deployed v16.3.41 site.

WHAT THIS RELEASE FIXES
- Reconciles all 81 Career standards to one authoritative first-introduction / substantive-teaching / practice / application / reinforcement / mastery timeline.
- Gives every Career teaching section a stable semantic ID and routes every current Career question/task to those IDs.
- Executes 93/93 Career question review actions and 43/43 semantic remediation buttons through the production learner-facing handler in Chromium.
- Corrects Week 17 visible Python escape-sequence teaching and validates runnable Python/C examples.
- Places the Week 14 pointer and Week 17 serial pipeline visuals after their prerequisites.
- Removes remaining Week 12 crimp-procedure dependence and early hidden MCU vocabulary assumptions.
- Rebuilds the standards provenance matrix, 31-week map, and dependency graph from the actual runtime truth.
- Preserves all 262 official CETa competency records and the accepted site aesthetics.

UPLOAD
1. Upload every file in the ZIP to the website root.
2. Replace matching files when prompted.
3. Do not delete unrelated existing site files.
4. Hard-refresh once after upload so the v16.3.42 service-worker cache replaces v16.3.41.

VERIFY
1. Open build-info.json and confirm runtimePatch = 16.3.42.
2. Open Career lessons and use Review on a missed question; it should return to the exact teaching section and offer Back to question.
3. Spot-check Week 12, Week 14, Week 17, Week 18, Week 20, and Week 30.
4. Confirm Standards still shows 81 Career standards and CETa remains unchanged.
5. Confirm the CETa/Career colors and overall site appearance are unchanged.

INTERNAL ACCEPTANCE
Chromium learner-facing traversal: 31/31 Career lessons passed.
Question review clicks: 93/93 passed (62 integrated checks + 31 required gates).
Semantic remediation clicks: 43/43 passed across 17 Career semantic tasks.
Career standards: 81/81 with homes/provenance/evidence.
Official CETa rows: 262/262 unchanged.
Blind adversarial acceptance: PASS with zero blocking findings after repairs.

BROWSER ENVIRONMENT NOTE
Chromium 144 launched successfully. Direct localhost/file navigation is blocked by the container policy, so the acceptance harness loads the real learn.html and production scripts into Chromium and exercises the real production handlers in a fresh page per week.

SERVICE WORKER CACHE
alfred-u-v16-3-42-final-traceability-routing-acceptance-20260921
