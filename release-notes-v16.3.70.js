(()=>{
  const entry={
    version:'v16.3.70',
    date:'September 27, 2026',
    title:'Week 2 Final Acceptance — Retrieval Scope & Optional Study Guidance',
    type:'Curriculum QA / CETa Study Guide / Study Media',
    request:'Final acceptance check of the completed Week 2 redesign, including exact Study Guide question scope and optional All About Circuits guidance.',
    changes:[
      'Corrected the Week 2 Study Guide p.34 retrieval slice to questions 2–4 only: Q2–Q3 intentionally retrieve Week 1 current/Ohm-law foundations and Q4 checks Week 2 parallel-resistance reasoning.',
      'Explicitly skips p.34 Q5–Q7 because those questions depend on transistor-amplifier context that Alfred has not taught by Week 2, and continues to skip Q8–Q9 maximum-power-transfer material.',
      'Refined the optional All About Circuits Series Circuits Study card to prioritize series topology/current/resistance/voltage relationships and to defer to Alfred for conventional-current/passive-sign conventions.',
      'Refined the optional All About Circuits KCL/KVL Study card to use only the KCL and KVL sections and explicitly skip the unrelated electron-flow introduction, later Ohm-law review, and power sections for this Week 2 use.',
      'Updated the required Khan Academy KVL link to its current canonical AP Physics 2 route without changing the resource itself.',
      'Preserved the seven-page CETa lesson, five-page Career lesson, four-item Required Teaching Media path, six optional All About Circuits Study resources, LAB-002, calendar, progress identities, mastery thresholds, and Cloud Sync protocol 2.'
    ],
    filesAdded:['week2-final-acceptance-v16.3.70.js','release-notes-v16.3.70.js','AU-ESET-301-v16.3.70-Week-2-Final-Acceptance-QA.md','UPLOAD_README_v16.3.70.txt'],
    filesModified:['learn.html','study.html','practice.html','progress.html','resources.html','search.html','patch-notes.html','build-info.json','service-worker.js','README.md','SHA256SUMS.txt'],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
