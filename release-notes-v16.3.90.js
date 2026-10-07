(()=>{
const week4H1={
version:'v16.3.91-H1',
date:'October 7, 2026',
title:'Week 4 Governance Integrity Repair',
type:'Week 4 / Governance / Assessment Identity / Standards / Reference Notes',
request:'Audit the uploaded Week 4 redesign against the canonical governance file without rubber-stamping it, and keep the release/reference notes current.',
changes:[
'Preserves the v16.3.91 Week 4 instructional redesign: four CETa pages, four Career pages, eight page-specific videos, eight Required readings, required Study Guide pp.19–22, and the strengthened LAB-004 artifact.',
'Repairs a governance-breaking assessment identity collision discovered by executing the deployed artifact: CQ1215–CQ1226 already existed as retired historical identities, so Week 4 now uses new permanent IDs CQ1227–CQ1238 and leaves the historical objects untouched.',
'Repairs Week 4 standards metadata so rehomed capacitor/inductor construction, reactance/impedance, Boolean, dB, and unrelated standards are not silently claimed as Week 4 mastery. Current CETa Week 4 claims are 2.12.1, 2.12.2, 9.3, and 9.7; deeper frequency-domain work remains Week 6 and digital logic remains Week 11.',
'Corrects weekly mastery and LAB-004 standards labels to match the actual current questions and Career evidence route.',
'Adds stronger self-audit checks for global question-ID uniqueness and exact Week 4 standards metadata.',
'Completes the source-authentic visual pass by using a public-domain RC capacitor charging curve on the capacitor page, alongside the already source-authentic oscilloscope, inductor, filter, and technician-context visuals on both tracks.',
'Updates build/service-worker metadata, release/reference notes, governance, QA evidence, and repository-wide checksums while preserving Cloud Sync protocol 2 and all stable learner progress identities.'
],
filesAdded:['AU-ESET-301-v16.3.91-H1-Week-4-Governance-Audit.md','PACKAGE_SHA256SUMS.txt'],
filesModified:['academic-state.js','service-worker.js','build-info.json','release-notes-v16.3.90.js','ALFRED PROJECT GOVERNANCE.md','SHA256SUMS.txt'],
filesRemoved:[]
};
const week4={
version:'v16.3.91',
date:'October 7, 2026',
title:'Week 4 Controlled Instructional Redesign',
type:'Week 4 / CETa-Career Instruction / Teaching Media / LAB-004',
request:'Finish Week 4 with the same governance-level quality as the accepted course while making updates faster through a controlled, Week-4-only delta.',
changes:[
'Replaces the old broad Week 4 learner path with four substantive CETa pages and four substantive Career pages centered on waveform language, capacitor/inductor stored-state behavior, first-order RC/RL time response, filter evidence, and fault isolation.',
'Gives every Week 4 page one page-specific video and one Required written reading, with eight unique videos and eight unique readings across the two tracks.',
'Keeps the bounded Associate CET Study Guide pp.19–22 assignment Required on first use and treats later placements as reuse rather than duplicate homework.',
'Strengthens LAB-004 into a prediction-to-measurement-to-fault-isolation artifact with a 3 CETa / 3 Career knowledge gate and explicit physical-versus-simulation boundary.',
'Keeps reactance/impedance/resonance/deeper filter mathematics in Week 6 and binary/hex/Boolean/digital logic in Week 11.',
'Uses a controlled delta through the already-loaded academic-state.js runtime path so Week 3 stays frozen and unrelated weeks are not rebuilt.'
],
filesModified:['academic-state.js'],
filesRemoved:[]
};
const hotfixH52={
version:'v16.3.90-H5.2',
date:'October 5, 2026',
title:'Week 3 Required-Media Link Integrity Repair',
type:'Week 3 / Teaching Media / Required Link Integrity',
request:'Audit the uploaded H5.1 Week 3 repair and make sure the required teaching media actually resolve to the intended content.',
changes:[
'Confirms the deployed H5.1 media structure is otherwise correct: 16 distinct page-specific videos, 16 Required external readings, four Required Week 3 Study Guide slices with later reuse behavior, and 32 total point-of-use placements.',
'Corrects the required Keysight Out-of-Cal Instruments Cause Bad Pass/Fail Decisions video URL. H5/H5.1 used an ID that does not match the intended Keysight calibration-series source; H5.2 uses the verified Keysight YouTube video ID UsIZx00HJmE.',
'Adds a machine-readable required-link integrity guard covering both the corrected Keysight out-of-cal video and the repaired NEETS Module 16 NAVEDTRA 14188A reading.',
'Aligns Learn cache-busting, service-worker cache identity/injection, and build metadata to H5.2 so the deployed release no longer identifies the current Week 3 media layer as H4.',
'Preserves all Week 3 Alfred teaching, media placement choices, Study Guide requirements, visuals, assessments, LAB-003 evidence, stable learner IDs, and Cloud Sync protocol 2.'
],
filesAdded:['AU-ESET-301-v16.3.90-H5.2-Week-3-Media-Link-Integrity-QA.md','UPLOAD README v16.3.90-H5.2.txt'],
filesModified:['week3-media-quality-v16.3.90-h4.js','learn.html','service-worker.js','build-info.json','release-notes-v16.3.90.js','ALFRED PROJECT GOVERNANCE.md','SHA256SUMS.txt','PACKAGE_SHA256SUMS.txt'],
filesRemoved:[]
};
const hotfixH51={
version:'v16.3.90-H5.1',
date:'October 5, 2026',
title:'Week 3 Media Audit Repair — Required Study Guide + Live NEETS Source',
type:'Week 3 / Teaching Media / Required Reading / Resource Integrity',
request:'Audit the uploaded H5 Week 3 media repair and make sure it actually enforces page-specific media and required-reading policy.',
changes:[
'A targeted audit confirmed the H5 duplicate-video repair itself is structurally correct: 16 Week 3 pages use 16 distinct video source IDs/URLs plus 16 Required written sources.',
'Repairs a Study Guide policy defect found by executing the actual Learn script order: H5 filtered the four mapped Chapter 19 slices out of lessons instead of promoting them to Required.',
'Promotes all four bounded Week 3 Study Guide records to Required on first assignment. The two records reused later automatically render through existing Learn logic as “Previously assigned · reuse if needed” rather than creating a second reading obligation.',
'Updates Week 3 Study Guide required-week/page metadata so Week 3 is no longer listed as a zero-new-required-reading week.',
'Replaces the broken maritime.org NEETS Module 16 URL with the accessible NAVEDTRA 14188A public PDF mirror at casperarc.net.',
'Restores the repository-wide SHA256SUMS.txt after the H5 upload changed files without regenerating the root checksum ledger.',
'Preserves all H5 page-specific video/reading selections, Week 3 teaching/visuals/assessments/LAB-003, stable learner identities, and Cloud Sync protocol 2.'
],
filesAdded:['AU-ESET-301-v16.3.90-H5.1-Week-3-Media-Audit-Repair.md','UPLOAD README v16.3.90-H5.1.txt'],
filesModified:['week3-media-quality-v16.3.90-h4.js','ALFRED PROJECT GOVERNANCE.md','release-notes-v16.3.90.js','PACKAGE_SHA256SUMS.txt','SHA256SUMS.txt'],
filesRemoved:[]
};
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
const versions=new Set([week4H1.version,week4.version,hotfixH52.version,hotfixH51.version,hotfixH4.version,hotfixH3.version,hotfixH2.version,hotfixH1.version,entry.version]);
window.ALFRED_RELEASES=[week4H1,week4,hotfixH52,hotfixH51,hotfixH4,hotfixH3,hotfixH2,hotfixH1,entry,...existing.filter(x=>x&&!versions.has(x.version))];
})();
