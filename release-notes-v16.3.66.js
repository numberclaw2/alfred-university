(()=>{
  const entry={
    version:'v16.3.66',
    date:'September 26, 2026',
    title:'Ahead-of-Calendar Mastery Support + Current CETa Errata',
    type:'Pacing Model / Study / Calendar Completion / CETa Study Guide',
    request:'Keep the existing healthy calendar unchanged while allowing the learner to move ahead of it, keep resume/study behavior aligned with actual work, prevent false overdue prep status, and complete the current official ETA sixth-edition errata mapping.',
    changes:[
      'Preserved every existing calendar date, event ID, schedule record, and iCalendar UID. January acceleration is intentionally not encoded into the schedule.',
      'Clarified throughout Classroom, Home, Calendar, and Study that the Calendar is the sustainable baseline pace while mastery/evidence determine actual learning progress.',
      'Kept ahead-of-calendar Classroom work as the learning resume authority; the scheduled baseline remains separately visible as a fallback pace.',
      'Expanded Study week selection so a week that has been started ahead of schedule remains selectable, while Study still exposes only teaching sections actually reached in Classroom.',
      'Prevented the required Week 1 prep item from becoming falsely overdue after the Week 1 practical/application evidence is already complete.',
      'Added the five official ETA sixth-edition errata items missing from Alfred’s structured map: printed pages 23, 47, 48, 74, and 78, while preserving the five previously mapped corrections.',
      'Preserved lessons, assessments, labs, mastery thresholds, progress identities, Teaching Media assignments, Study Guide page disposition, Cloud Sync protocol 2, and the full original academic calendar.'
    ],
    filesAdded:['release-notes-v16.3.66.js','AU-ESET-301-v16.3.66-Ahead-of-Calendar-and-Errata-QA.md','UPLOAD_README_v16.3.66.txt'],
    filesModified:['ceta-study-guide-map.js','site.js','study.js','study.html','learn.js','learn.html','patch-notes.html','build-info.json','service-worker.js','SHA256SUMS.txt'],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
