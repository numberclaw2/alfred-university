AU-ESET 301 — v16.3.76 Week 2 Trainer Evidence-Gate & Mastery-Route Hotfix

Upload every file in this package to the repository root and replace matching files.

Why this exists
Post-upload testing of v16.3.75 found two final logic defects:
1. the interactive trainers could technically be passed by guessing before enough evidence was collected;
2. cumulative mastery question CQ1088 still used the retired Week 1 route ID concept-2 instead of the current stable DMM teaching-section ID.

What changes
- Boundary trainer: collect the required number of measurements and measure both claimed boundary points before Alfred will accept the answer.
- Decision trainer: Alfred will not accept a diagnosis while more than one hypothesis still fits the evidence.
- Mastery repair: CQ1088 now routes to the current Week 1 Career DMM section; all 12 Week 2 mastery routes resolve.

What does NOT change
- Week 2 teaching/media content
- Week 2 6 CETa / 6 Career mastery mix
- return-to-question mechanism
- Study Guide
- LAB-002
- Week 3
- calendar/pacing
- Cloud Sync

After upload, verify build-info.json reports runtimePatch 16.3.76.
