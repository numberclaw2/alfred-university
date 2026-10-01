(()=>{
const hotfixH4={
version:'v16.3.90-H4',
date:'October 1, 2026',
title:'Week 3 Multimodal Content Quality Pass',
type:'Week 3 / CETa-Career Content / Teaching Media / Reading',
request:'Prioritize Week 3 content quality over cosmetic UX and give every CETa and Career teaching page a purposeful mix of Alfred instruction, visuals, video/demonstration, reading/reference, and retrieval/application.',
changes:[
'Adds a dedicated Week 3 H4 content layer after the accepted H3 runtime layer without changing Week 3 assessment identities, lab identities, saved progress, calendar identities, or Cloud Sync protocol 2.',
'Gives all 8 CETa pages and all 8 Career pages exactly one deliberate point-of-use video/demonstration plus one deliberate written reading/reference in addition to the existing substantive Alfred teaching and source-authentic visual layer.',
'Replaces the prior uneven Week 3 external-media distribution—where most point-of-use media sat on CETa—with 32 explicit section-level placements: 16 video/demonstration and 16 reading/reference placements across 16 pages.',
'Reuses strong accepted Fluke, Tektronix, Keysight, All About Circuits, Afrotechmods, and U.S. Navy sources where they are semantically exact instead of adding filler resources.',
'Adds focused Tektronix probe-compensation and probe-loading sources, Keysight CV/CC and metrology/calibration sources, and NIST measurement-uncertainty/traceability references for the Career metrology pages.',
'Keeps specialist-instrument breadth such as spectrum analyzers, ESR/LCR meters, signal generators, decade boxes, electronic loads, and variable line-level AC out of the Week 3 core learner path.',
'Preserves Week 3 mastery at 14 questions (7 CETa + 7 Career), LAB-003 at 6 questions (3+3) with 10 evidence checkpoints, Week 2 mastery at 12 questions (6+6), H3 static direct-entry integrity, and Cloud Sync protocol 2.'
],
filesAdded:['week3-media-quality-v16.3.90-h4.js','AU-ESET-301-v16.3.90-H4-Week-3-Multimodal-Content-QA.md','UPLOAD README v16.3.90-H4.txt','PACKAGE_SHA256SUMS.txt'],
filesModified:['learn.html','service-worker.js','build-info.json','release-notes-v16.3.90.js','ALFRED PROJECT GOVERNANCE.md','SHA256SUMS.txt'],
filesRemoved:[]
};
const hotfixH3={
version:'v16.3.90-H3',
date:'October 1, 2026',
title:'Week 3 Direct-Entry Runtime Integrity Repair',
type:'Week 3 / Direct Navigation / Assessment / Lab / Cache Integrity',
request:'Run the deployed Week 3 code internally and verify it is actually self-sufficient, not merely correct after service-worker injection.',
changes:[
'Internal execution of the exact deployed artifact confirmed the H2 data model itself passes, but also exposed a direct-entry gap: quiz.html and assessments.html still assembled the old Week 3 9 CETa / 3 Career form, and LAB-003 still exposed the old 4/1 knowledge form until the service worker injected H2.',
'Adds the Week 3 remediation and H2 compatibility layer directly to quiz.html and assessments.html before assessment selection, so a fresh/direct page load is canonical without requiring prior service-worker control.',
'Adds the Week 3 remediation and H2 compatibility layer directly to labs.html before lab rendering, so the 10-checkpoint evidence gate and physical-versus-simulation boundary are present on a fresh/direct lab load.',
'Bumps the service-worker cache identity and normalizes the Week 3 compatibility-script query to the H3 cache-busted route while retaining network-first behavior and Cloud Sync protocol 2.',
'Restores repository checksum integrity by regenerating the full repository SHA256SUMS.txt; package-only hashes are no longer allowed to replace the repository-wide checksum ledger.',
'Updates build metadata so the deployed runtime identifies the H3 Week 3 direct-entry integrity repair.',
'Preserves H2 Week 3 content, 8/8 CETa visuals, 8/8 Career visuals, 14-question 7/7 weekly mastery, 6-question 3/3 LAB-003 knowledge gate, Week 2 12-question 6/6 form, stable progress/event identities, and Cloud Sync protocol 2.'
],
filesAdded:['AU-ESET-301-v16.3.90-H3-Week-3-Direct-Entry-QA.md','UPLOAD README v16.3.90-H3.txt'],
filesModified:['quiz.html','assessments.html','labs.html','service-worker.js','build-info.json','release-notes-v16.3.90.js','ALFRED PROJECT GOVERNANCE.md','SHA256SUMS.txt'],
filesRemoved:[]
};
const hotfixH2={
version:'v16.3.90-H2',
date:'September 30, 2026',
title:'Week 3 Readiness — Source Visuals + Assessment Identity Repair',
type:'Week 3 / CETa-Career Parity / Assessment Runtime / Visual Teaching',
request:'Bring Week 3 up to the current post-Week-2 governance standard without rebuilding already-accepted instruction.',
changes:[
'Applies the current source-authentic-first visual policy to all eight Week 3 CETa teaching pages and all eight Week 3 Career teaching pages; Career receives its own occupational/equipment visuals instead of being treated as a CETa afterthought.',
'Replaces default Alfred technical redraws with public-domain/CC0 real equipment, real waveform, probe, and technician/metrology visuals where an equal-or-better reusable source was found.',
'Retains the exact CV/CC transition model only as a transparently labeled Alfred reasoning aid after source search, paired with a real CC0 bench-power-supply photograph and Keysight technical authority.',
'Repairs a course-global assessment-ID collision: Week 3 v16.3.81 had reused CQ1204–CQ1208, IDs now canonically owned by Week 2 Career. Week 2 keeps CQ1204–CQ1209; Week 3 meter/metrology additions now use unique CQ1210–CQ1214.',
'Reconstructs Week 3 questions CQ1196–CQ1203 on assessment-only surfaces so the real browser selector no longer depends on learn-only week3-redesign-v16.3.71.js for those question objects.',
'Corrects the Week 3 weekly mastery declaration to the actual balanced form: 14 questions, 7 CETa + 7 Career, 80% target.',
'Corrects the LAB-003 knowledge-gate declaration to the actual balanced form: 6 questions, 3 CETa + 3 Career, 80% target.',
'Preserves the stronger LAB-003 evidence gate: 10 evidence checkpoints, known-reference validation, measurement-capability decision, DUT-vs-test-system isolation, and the physical-versus-simulation proficiency truth boundary.',
'Preserves C3.8 outside Week 3/6 with Week 20 as its future specialization target.',
'Uses the already-loaded week3-final-acceptance-v16.3.83.js filename as an explicit compatibility hook so the current Learn static loader and current service-worker injection path both receive the repair without an HTML or service-worker migration.',
'Cloud Sync protocol 2, calendar identities, saved progress identities, Week 1/2 teaching, and Week 2 canonical 6/6 assessment remain unchanged.'
],
filesAdded:['AU-ESET-301-v16.3.90-H2-Week-3-Readiness-QA.md','UPLOAD README v16.3.90-H2.txt'],
filesModified:['week3-final-acceptance-v16.3.83.js','release-notes-v16.3.90.js','ALFRED PROJECT GOVERNANCE.md'],
filesRemoved:[]
};
const hotfixH1={
version:'v16.3.90-H1',
date:'September 30, 2026',
title:'Mobile Cloud Progress Truth Hotfix',
type:'Cloud Sync / Mobile / Home Progress',
request:'Repair the mobile site showing stale 0% completion when the synchronized student record is already at a higher current completion percentage.',
changes:[
'Identified that global cloud-sync-status.js only verified server health; actual protocol-2 progress pull/merge ran only after opening Student Progress.',
'Adds protocol-2 progress pull/merge to the global Cloud Sync runtime on connected non-Progress pages while preserving per-record timestamps so newer local work cannot be overwritten by older cloud data.',
'Prevents untouched/default local shells from being uploaded as progress records.',
'Rerenders the Home progress summary immediately after a successful cloud merge and when synchronized progress changes.',
'Corrects the Home “Course Completion” percentage to use the same 31-week classroom completion model as Student Progress instead of calendar-event completion percentage.',
'Preserves the existing Student Progress sync owner on progress.html, Cloud Sync protocol 2, student recovery key, event/week IDs, assessment history, calendar, and all accepted Week 2 runtime behavior.'
],
filesAdded:['AU-ESET-301-v16.3.90-H1-Mobile-Cloud-Sync-QA.md','UPLOAD README v16.3.90-H1.txt'],
filesModified:['cloud-sync-status.js','release-notes-v16.3.90.js','ALFRED PROJECT GOVERNANCE.md'],
filesRemoved:[]
};
const entry={
version:'v16.3.90',
date:'September 30, 2026',
title:'Week 2 Canonical Six-Question Assessment Repair',
type:'Assessment Runtime / Browser / CETa-Career Parity',
request:'Repair the persistent Week 2 browser failure after v16.3.89 reported “Insufficient reviewed Career questions” and showed repair count 5.',
changes:[
'Uses the browser diagnostic to identify that status-only repair was insufficient: one or more of the six Career objects could still be missing or fail track/mastery/minWeek eligibility.',
'Adds a uniquely versioned canonical Week 2 Career assessment layer that rebuilds CQ1204–CQ1209 as complete eligible Career mastery objects after all legacy/governance scripts run and before assessment selection.',
'Adds an independent quiz-side eligibility check immediately before selection; if any of the six are missing, wrong-track, non-mastery, wrong-status, or wrong-week, the canonical six are rebuilt again.',
'Reasserts the intended Week 2 weekly mastery contract at 12 questions: 6 CETa + 6 Career.',
'If selection ever fails again, the learner-facing diagnostic now prints each of the six Career items’ presence, track, review status, mastery flag, and minWeek instead of only a repair count.',
'QA deliberately removes or corrupts every one of the six Career questions individually and proves the canonical layer restores the 12-question 6/6 form.',
'Preserves existing Week 2 teaching, Career/CETa parity, question wording/answers, Guided Practice v16.3.87 repair, calendar, saved progress IDs, and Cloud Sync protocol 2.'
],
filesAdded:['week2-career-assessment-canonical-v16.3.90.js','release-notes-v16.3.90.js','AU-ESET-301-v16.3.90-Week-2-Canonical-Assessment-QA.md'],
filesModified:['quiz.js','quiz.html','assessments.html','service-worker.js','build-info.json','patch-notes.html','ALFRED PROJECT GOVERNANCE.md','SHA256SUMS.txt'],
filesRemoved:[]
};
const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
const versions=new Set([hotfixH4.version,hotfixH3.version,hotfixH2.version,hotfixH1.version,entry.version]);
window.ALFRED_RELEASES=[hotfixH4,hotfixH3,hotfixH2,hotfixH1,entry,...existing.filter(x=>x&&!versions.has(x.version))];
})();
