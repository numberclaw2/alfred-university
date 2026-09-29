(()=>{
  const entry={
    version:'v16.3.76',
    date:'September 29, 2026',
    title:'Week 2 Trainer Evidence-Gate & Mastery-Route Hotfix',
    type:'Career UX QA / Interactive Troubleshooting / Mastery Repair',
    request:'Post-upload production verification of v16.3.75 found two final logic defects: the new troubleshooting trainers could accept lucky guesses before evidence was collected, and one cumulative Week 1 DMM mastery repair route still used a retired generated section ID.',
    changes:[
      'Fault-boundary trainer now refuses a boundary answer until the learner has collected the challenge minimum number of measurements and actually measured both points named as last-known-good and first-known-bad.',
      'Four-point boundary challenge requires at least two measurements; the split-half extension requires at least three measurements.',
      'Troubleshooting Decision Trainer now refuses all diagnoses while more than one hypothesis still fits the collected readings. The learner must take discriminating measurements until exactly one hypothesis remains.',
      'CQ1088 cumulative Week 1 DMM retrieval now routes to the current stable Week 1 Career section ID rather than the retired concept-2 generated ID. Production route validation is 12/12.',
      'Existing v16.3.75 exact mastery return-to-question behavior, 6 CETa / 6 Career balance, media architecture, Study Guide, LAB-002, Week 3, calendar, and Cloud Sync remain unchanged.'
    ],
    filesAdded:['week2-trainer-evidence-gate-v16.3.76.js','release-notes-v16.3.76.js','AU-ESET-301-v16.3.76-Week-2-Trainer-Evidence-Gate-QA.md','UPLOAD_README_v16.3.76.txt'],
    filesModified:['learn.js','learn.html','study.html','practice.html','progress.html','resources.html','search.html','quiz.html','assessments.html','patch-notes.html','build-info.json','service-worker.js','README.md','SHA256SUMS.txt'],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
