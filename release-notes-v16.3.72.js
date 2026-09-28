(()=>{
  const entry={
    version:'v16.3.72',
    date:'September 27, 2026',
    title:'Week 3 Final Acceptance — Current-Mode Safety & Study Guide Scope',
    type:'Curriculum QA / Week 3 / Safety / CETa Study Guide',
    request:'Run the post-deployment final acceptance audit of the Week 3 redesign against the same teaching, UX, media, Study Guide, assessment, lab, and beginner-first standards used to close Week 2.',
    changes:[
      'Production-verifies the v16.3.71 seven-page CETa lesson, six-page Career lesson, four-item Required media path, contextual Chapter 19 placement, focused mastery set, strengthened LAB-003, and unchanged calendar/pacing baseline.',
      'Makes DMM current-mode insertion/removal safety explicit: de-energize before opening the path or moving the lead, use the correctly rated current input/range, verify before energizing, de-energize before removal, then return the lead to V/Ω.',
      'Tightens CETa Study Guide pp.172–173 scope so the learner uses the useful oscilloscope/loading/probe/trigger material while skipping legacy CRT/Z-axis construction detail and not treating the old AC-coupling startup sentence as a universal modern rule.',
      'Keeps current Tektronix/manufacturer guidance and Alfred’s low-voltage lab procedure authoritative for modern grounding, coupling, probe configuration, ratings, and model-specific operation.',
      'Preserves the v16.3.71 Required media count of four, all deferred specialist-instrument competencies, LAB-003 identity, progress/mastery architecture, Cloud Sync protocol 2, and the original calendar.'
    ],
    filesAdded:['week3-final-acceptance-v16.3.72.js','release-notes-v16.3.72.js','AU-ESET-301-v16.3.72-Week-3-Final-Acceptance-QA.md','UPLOAD_README_v16.3.72.txt'],
    filesModified:['learn.html','study.html','practice.html','progress.html','resources.html','search.html','patch-notes.html','build-info.json','service-worker.js','README.md','SHA256SUMS.txt'],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
