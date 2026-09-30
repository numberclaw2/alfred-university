(()=>{const entry={
version:'v16.3.89',
date:'September 30, 2026',
title:'Browser Assessment Cache-Path and Source-Contract Repair',
type:'Runtime / Assessment / Service Worker / Client Recovery',
request:'Repair the user-visible Week 2 “Practice could not load” failure that persisted in the browser after the v16.3.88 deployed artifact itself passed selector QA.',
changes:[
'Moves the Week 2 Career review-status repair into the authoritative v16.3.74 Career assessment source so the six Career questions are canonical at source instead of depending on a later overlay.',
'Adds a defensive Week 2 status normalization inside quiz.js before assessment selection, so known legacy cached question objects self-heal rather than crashing.',
'Changes the generic quiz failure screen to expose the real selector diagnostic and runtime repair revision instead of incorrectly claiming release files are incomplete.',
'Cache-busts the repaired Week 2 Career assessment source and quiz runtime in quiz.html and assessments.html.',
'Changes the service worker to clear older Alfred caches after the current cache installs, force cache reload for release-sensitive HTML/JS requests, and rewrite stale assessment script references to v16.3.89.',
'Adds a one-release assessment-page controller-change reload so a browser already sitting on the failed quiz page refreshes when the v16.3.89 service worker takes control.',
'Preserves the intended Week 2 12-question mastery form at 6 CETa + 6 Career, all existing question IDs/answers, Cloud Sync protocol 2, and v16.3.87 Guided Practice repair.',
'Adds a governance rule that a user-visible browser failure overrides artifact/harness acceptance until the client update/cache path is repaired and reverified.'
],
filesAdded:['release-notes-v16.3.89.js','AU-ESET-301-v16.3.89-Browser-Assessment-Cache-Repair-QA.md'],
filesModified:['week2-career-assessment-v16.3.74.js','quiz.js','quiz.html','assessments.html','site.js','service-worker.js','build-info.json','patch-notes.html','ALFRED PROJECT GOVERNANCE.md','SHA256SUMS.txt'],
filesRemoved:[]
};const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];window.ALFRED_RELEASES=[entry,...existing.filter(x=>x&&x.version!==entry.version)];})();
