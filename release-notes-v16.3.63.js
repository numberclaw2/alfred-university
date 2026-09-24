(()=>{
  const entry={
    version:'v16.3.63',
    date:'September 24, 2026',
    title:'Calendar Completion Truth Repair',
    type:'Calendar / Progress State / Resume Navigation',
    request:'Fix completed Week 1 work appearing overdue on the Calendar after LAB-001 and Weekly Mastery were already completed.',
    changes:[
      'Repaired the shared stage-completion helper so Lab / Application and Weekly Mastery use their authoritative evidence instead of requiring ordinary learning.completed flags that those stages do not use.',
      'Lab / Application now resolves from the recorded physical/virtual lab route plus a required lab knowledge-check score of at least 80% when the week has a lab.',
      'Weekly Mastery now resolves from the recorded weekly assessment score at the course target plus all safety-critical lesson checks required by that week.',
      'Calendar event status now uses the same derived Application/Mastery evidence, so a past event is not labeled Overdue after its required evidence is complete.',
      'Resume Learning and whole-week completion now use the same shared completion truth, preventing completed Lab/Mastery work from sending the learner back to an already-finished stage.',
      'No learner scores, lab records, assessment attempts, Classroom completion data, or Cloud Sync records are rewritten or synthesized by this repair.'
    ],
    filesAdded:['release-notes-v16.3.63.js'],
    filesModified:['site.js','build-info.json','service-worker.js','patch-notes.html','SHA256SUMS.txt'],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
