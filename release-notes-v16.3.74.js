(()=>{
  const entry={
    version:'v16.3.74',
    date:'September 28, 2026',
    title:'Week 2 Career Remediation — Coequal Technician Instruction',
    type:'Career Curriculum / Teaching Media / Practice / Assessment / UX',
    request:'Reopen Week 2 Career after final acceptance and bring it to the same instructional standard as CETa: demonstrations, point-of-use media and literature, immediate practice, two-way CETa↔Career handoffs, and career-equal mastery evidence.',
    changes:[
      'Keeps the five Week 2 Career concepts but turns every Career page into a complete technician lesson with an Alfred demonstration, immediate Career Skill Drill, and a two-way CETa↔Career handoff.',
      'Adds three bounded Required Career resources: Keysight real-board troubleshooting context, MIT PCB Design debugging lecture notes, and RealPars practical open/short DMM troubleshooting.',
      'Adds four optional-but-contextual Study resources directly on the Career pages: AAC open/short troubleshooting, AAC troubleshooting strategies, AAC series-parallel troubleshooting, and the AAC Basic Troubleshooting Strategies worksheet.',
      'Extends the lesson resource renderer so explicitly flagged Study resources can appear inline under the relevant Career page without becoming Required coursework.',
      'Adds page-level practice for prediction, fault signatures, last-good/first-bad plus split-half isolation, discriminating-measurement selection, and one-variable repair/verification/documentation.',
      'Adds a final unknown-fault Career Skill Drill with separate conceptual/simulation versus physical proficiency boundaries.',
      'Adds CETa→Career and Career→CETa handoff cards to all seven Week 2 CETa teaching pages and all five Career pages so analysis and technician evidence reinforce one another.',
      'Rebalances Week 2 weekly mastery from 10 CETa / 2 Career to 6 CETa / 6 Career and adds six original troubleshooting questions covering the five Career pages.',
      'Preserves all existing Week 2 CETa teaching, the Week 2 Study Guide mappings, the formal lab/practical identity, calendar/pacing, Week 3, Cloud Sync protocol 2, and saved progress keys.'
    ],
    filesAdded:['week2-career-remediation-v16.3.74.js','week2-career-assessment-v16.3.74.js','release-notes-v16.3.74.js','AU-ESET-301-v16.3.74-Week-2-Career-Remediation-QA.md','UPLOAD_README_v16.3.74.txt'],
    filesModified:['learn.js','styles.css','learn.html','study.html','practice.html','progress.html','resources.html','search.html','quiz.html','assessments.html','patch-notes.html','build-info.json','service-worker.js','README.md','SHA256SUMS.txt'],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
