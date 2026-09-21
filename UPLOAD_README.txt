AU-ESET 301 v16.3.41 — FINAL ADVERSARIAL ACCEPTANCE REPAIR

UPLOAD TARGET
Apply this changed-files-only package on top of the currently deployed v16.3.40 site.

WHAT THIS RELEASE FIXES
- Learner-facing semantic tasks now use the canonical prerequisite-correct assessment routes.
- Week 12 now teaches CLI navigation plus lab-note/report/handoff structure before mastery.
- Week 14 now explicitly teaches AND/OR/XOR/shifts/masks before bitwise mastery.
- Week 17 invalid Python conditional example is corrected.
- Week 11 no longer requires the logic analyzer before Week 18 onboarding.
- C13.1-C13.5 no longer depend on the Week 31 feedback-loop node.
- Duplicate repair-layer teaching blocks are removed from Weeks 10, 22, 24, and 25.
- C1.5 and C11/C12 traceability metadata are corrected.
- Git provenance uses GitHub Skills Introduction to Git.

UPLOAD
1. Upload every file in the ZIP to the website root.
2. Replace matching files when prompted.
3. Do not delete unrelated existing site files.
4. Hard-refresh once after upload so the v16.3.41 service-worker cache replaces v16.3.40.

VERIFY
1. Open build-info.json and confirm runtimePatch = 16.3.41.
2. Open a Career lesson and confirm the lesson loads normally.
3. Spot-check Week 12 (CLI/Git), Week 14 (bitwise), Week 17 (Python), and Week 18 (logic analyzer / I2C-first path).
4. Confirm the Standards page still shows 81 Career standards with provenance.
5. Confirm the CETa/Career colors and overall site appearance are unchanged.

INTERNAL ACCEPTANCE
Fresh adversarial runtime suite: 28/28 passed.
Official CETa rows: 262 unchanged.
Career standards: 81.
Browser-render caveat: Chromium would not initialize inside the build container even for about:blank, so browser rendering is not claimed as passed by the internal test.

SERVICE WORKER CACHE
alfred-u-v16-3-41-final-adversarial-acceptance-repair-20260920
