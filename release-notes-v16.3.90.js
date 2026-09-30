(()=>{
const hotfix={
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
window.ALFRED_RELEASES=[hotfix,entry,...existing.filter(x=>x&&x.version!==hotfix.version&&x.version!==entry.version)];
})();
