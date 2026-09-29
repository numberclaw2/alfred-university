(()=>{
  const entry={
    version:'v16.3.75',
    date:'September 29, 2026',
    title:'Week 2 Final Career UX — Interactive Troubleshooting + Exact Mastery Repair',
    type:'Career Instruction / Interactive Practice / Assessment Repair Routing',
    request:'Close the final Week 2 gaps found in the post-remediation audit: make last-good/first-bad and discriminating-measurement practice genuinely interactive, and route every Week 2 mastery miss to the exact teaching section with a return path to the saved question review.',
    changes:[
      'Adds a native measurement-counted fault-boundary trainer to Career Page 3. The learner reveals actual node measurements, identifies last-known-good and first-known-bad points, and receives an efficiency comparison against the target number of tests.',
      'Adds a second split-half boundary challenge so divide-and-conquer is performed rather than only described.',
      'Adds a native branching Troubleshooting Decision Trainer to Career Page 4. A hidden fault is selected from open upper resistor, output short, or missing source; each chosen test returns a simulated reading and eliminates hypotheses according to the result.',
      'The decision trainer counts measurements, exposes low-information repeated measurements, enforces the power-off boundary on resistance testing in the test label/instructions, and scores diagnosis efficiency.',
      'Adds exact review metadata to all 12 Week 2 mastery questions, including cumulative Week 1 DMM/Ohm-law retrieval questions.',
      'Weekly mastery results now show a Repair this exact concept action on missed questions. The link opens the correct CETa/Career teaching page without moving saved lesson progress backward.',
      'Quiz review state is saved in session storage so the teaching page can provide Back to mastery question and restore the exact prior question, answer, correct answer, explanation, sources, and standards.',
      'Preserves Week 2 CETa content, Career media/literature, Study Guide scope, 6 CETa / 6 Career mastery balance, LAB-002 identity, Week 3, Cloud Sync protocol 2, and the calendar.'
    ],
    filesAdded:['week2-final-career-ux-v16.3.75.js','release-notes-v16.3.75.js','AU-ESET-301-v16.3.75-Week-2-Final-Career-UX-QA.md','UPLOAD_README_v16.3.75.txt'],
    filesModified:['learn.js','quiz.js','styles.css','learn.html','quiz.html','assessments.html','study.html','practice.html','progress.html','resources.html','search.html','patch-notes.html','build-info.json','service-worker.js','README.md','SHA256SUMS.txt'],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
