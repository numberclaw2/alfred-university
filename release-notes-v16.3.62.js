(()=>{
  const entry={
    version:'v16.3.62',
    date:'September 24, 2026',
    title:'Study Week Selector',
    type:'Study Library / Navigation / Learner Experience',
    request:'Add a clear way to change which course week is being studied from inside the Study section.',
    changes:[
      'Added an accessible Study week selector directly to the Study Library header.',
      'The selector lists weeks that already have reached Study material and always keeps the current course week available; unreached future weeks are not exposed through the selector.',
      'Changing the Study week preserves the active Study mode while resetting per-week Review/Flashcard position so the newly selected week starts cleanly.',
      'Changing the Study week does not alter Classroom completion, mastery, weekly progression, resume position, Cloud Sync protocol, or assessment evidence.',
      'Saved Active Recall work is preserved when changing weeks; if it belongs to another week, Study explains that it remains saved there.',
      'The existing study.html?week=N routing remains the single week-selection mechanism rather than introducing a second competing state model.'
    ],
    filesAdded:['release-notes-v16.3.62.js'],
    filesModified:['study.js','study.html','study-v2.css','build-info.json','service-worker.js','patch-notes.html','SHA256SUMS.txt'],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
