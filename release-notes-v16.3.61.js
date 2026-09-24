(()=>{
  const entry={
    version:'v16.3.61',
    date:'September 24, 2026',
    title:'Built-In Private CETa Study Guide',
    type:'CETa Study Guide / Private Repository / Learner Experience',
    request:'Bundle the learner-owned Associate CET Study Guide in the now-private Alfred repository so the PDF no longer has to be imported separately on each device/browser.',
    changes:[
      'Added the learner-owned Associate CET Study Guide, Sixth Edition as a private-repository static asset.',
      'Replaced the device-local PDF import requirement with direct built-in access from existing Study Guide buttons and page locators.',
      'Preserved the accepted printed-page to PDF-page offset of +10, all 62 Study Guide records, 64 Required pages, 133 Study/Review pages, 27 Reference/Historical pages, errata, and week/lesson mappings.',
      'Removed the normal Connect/Replace/Forget PDF controls from the learner experience; existing compatibility methods remain harmless no-ops for older callers.',
      'The Study Guide module no longer hard-codes a Cloud Sync exclusion. Cloud interaction is permitted; this patch simply does not add a PDF-transfer mechanism. Opening the guide still does not count as mastery or lesson completion.',
      'No curriculum, assessment, lab, project, Teaching Media placement, outside-literature placement, glossary, Calendar, saved progress identity, or Cloud Sync protocol is redesigned.'
    ],
    filesAdded:[
      'Associate_CET_Study_Guide_Sixth_Edition.pdf',
      'release-notes-v16.3.61.js'
    ],
    filesModified:[
      'ceta-study-guide-private.js',
      'build-info.json',
      'service-worker.js',
      'patch-notes.html',
      'SHA256SUMS.txt'
    ],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
