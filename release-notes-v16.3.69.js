(()=>{
  const entry={
    version:'v16.3.69',
    date:'September 27, 2026',
    title:'Week 2 All About Circuits Optional Study Shelf',
    type:'Study / Teaching Media / Week 2',
    request:'Keep the redesigned Week 2 required path focused, but restore the All About Circuits resources that were useful to the learner as optional Study material rather than required coursework.',
    changes:[
      'Restored six Week 2 All About Circuits resources to the Study section as optional/supporting material: series circuits, series voltage divider, parallel circuits, combined KCL/KVL, voltmeter loading, and series/parallel troubleshooting.',
      'Kept all six resources out of Week 2 Required Teaching Media and out of the mastery gate; the v16.3.68 required Khan/OpenStax path remains unchanged.',
      'Added clear Study categories so the resources appear as Alternate Explanation, Divider Reinforcement, Kirchhoff Reinforcement, Measurement Loading, or Troubleshooting Help rather than as undifferentiated extra homework.',
      'Rewrote the Study-card guidance so each source says when to use it and exactly what concept to focus on.',
      'Preserved the Week 2 seven-page CETa redesign, five-page Career redesign, Study Guide slicing, LAB-002, calendar, progress identities, mastery thresholds, and Cloud Sync protocol 2.'
    ],
    filesAdded:['week2-study-aac-v16.3.69.js','release-notes-v16.3.69.js','AU-ESET-301-v16.3.69-Week-2-AAC-Study-Shelf-QA.md','UPLOAD_README_v16.3.69.txt'],
    filesModified:['learn.html','study.html','practice.html','progress.html','resources.html','search.html','patch-notes.html','build-info.json','service-worker.js','README.md','SHA256SUMS.txt'],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
