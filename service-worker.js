const CACHE='alfred-u-v16-3-34-authoritative-visual-learning-layer-20260919';
const CORE=[
  './','index.html','engineering.html','course.html','calendar.html','progress.html','resources.html','projects.html','documents.html','student-services.html','about.html','deployment.html','404.html','offline.html',
  'study.html','learn.html','glossary.html','search.html','week.html','practice.html','labs.html','assessments.html','quiz.html','standards.html','analytics.html','knowledge.html','patch-notes.html','academic-state.js',
  'styles.css','ux-system.css','ux-system.css?v=16.3.30','glossary.css','study-v2.css','vocabulary-study.css','practice-v2.css','site.js','ux-system.js','ux-system.js?v=16.3.30','progress.js','study.js','vocabulary-study.js','practice.js','learn.js','glossary-data.js','glossary-data.js?v=16.3.29','glossary.js','glossary.js?v=16.3.29','curriculum-data.js','career-instructional-depth.js','instructional-visuals.js','teaching-media-overrides.js','teaching-media-self-reliance.js','teaching-media-content-completion.js','week1-beginner-teaching-media.js','course-data.js','academic-content.js','practical-completion.js','academic.js','assessment-data.js','assessment-completion.js','semantic-repair.js','week1-instructional-depth.js','assessment-policy.js','assessment-engine.js','readiness.js','assessment.js','quiz.js','standards.js','analytics.js','search.js','release-notes.js','release-notes-current.js','release-change-ledger.js','patch-notes.js','manifest.webmanifest',
  'crest.webp','seal.webp','icon-180.png','icon-192.png','icon-512.png',
  'syllabus-cover.png','resource-manual-cover.png','assignment-lab-cover.png','binder-index-cover.png','certificate-cover.png',
  'Alfred University - AU-ESET 301 - Syllabus and Student Handbook.pdf',
  'Alfred University - AU-ESET 301 - Learning Resource Manual.pdf',
  'Alfred University - AU-ESET 301 - Assignment and Lab Manual.pdf',
  'Alfred University - AU-ESET 301 - Student Course Binder Index.pdf',
  'Alfred University - AU-ESET 301 - Certificate of Course Completion.pdf',
  'Alfred University - AU-ESET 301 - Academic System Guide.pdf',
  'AU-ESET-301-v16.3-Curriculum-and-Instruction-Plan.docx',
  'AU-ESET-301-v16.3-Lesson-Depth-Audit.csv',
  'AU-ESET-301-v16.3-Semantic-Coverage-Matrix.csv',
  'AU-ESET-301-v16.3-Semantic-Coverage-Matrix.json',
  'AU-ESET-301-v16.3-Final-Lesson-Acceptance-Report.md',
  'AU-ESET-301-v16.3.2-Final-Runtime-Acceptance-Report.md',
  'AU-ESET-301-v16.3-Resource-Verification.md',
  'AU-ESET-301-v16.3.7-Whole-System-Audit-Repair-Report.md',
  'AU-ESET-301-Release-Notes-Policy.md','AU-ESET-301-v16.3.22-Glossary-Source-Verification.md','AU-ESET-301-v16.3.23-Glossary-UX-Verification.md','AU-ESET-301-v16.3.24-Vocabulary-Study-and-Glossary-Highlighting-Verification.md','AU-ESET-301-v16.3.25-Glossary-Deduplication-Verification.md','AU-ESET-301-v16.3.26-Whole-Site-UX-Audit.md','AU-ESET-301-v16.3.27-Native-Visual-QA-Repair.md','AU-ESET-301-v16.3.28-Native-UX-Round2-Repair.md','AU-ESET-301-v16.3.29-Glossary-Coverage-and-Section-Highlighting-Verification.md','ADHD_AUTISM_AUDIT_REPORT.md','AU-ESET-301-v16.3.30-Executive-Function-Study-Flow-Verification.md','AU-ESET-301-v16.3.31-Lesson-Review-Navigation-and-Question-Backlinks-Verification.md','AU-ESET-301-v16.3.32-Study-Library-and-Week1-Safety-Scaffolding-Verification.md','AU-ESET-301-v16.3.33-Career-Beginner-First-Instructional-Depth-Verification.md','AU-ESET-301-v16.3.34-Authoritative-Visual-Learning-Verification.md','VISUAL-SOURCES.md',
  'Embedded Career Transition Readiness Checklist.pdf',
  'Alfred University - AU-ESET 301 - Simplified Course Calendar.ics'
];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(async cache=>{
    const essential=CORE.filter(path=>!(/\.(pdf|png|webp|ics|docx|csv|json|md)$/i.test(path)));
    await cache.addAll(essential);
    await Promise.allSettled(CORE.filter(path=>!essential.includes(path)).map(path=>cache.add(path)));
  }).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('alfred-u-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  if(url.pathname.endsWith('/build-info.json')){
    event.respondWith(fetch(event.request,{cache:'no-store'}));
    return;
  }
  const isNavigation=event.request.mode==='navigate';
  const cacheKey=isNavigation?new URL(url.pathname,self.location.origin).href:event.request;
  const networkFirst=isNavigation || /\.(?:html|css|js|webmanifest)$/.test(url.pathname);
  if(networkFirst){
    event.respondWith(fetch(event.request).then(response=>{
      if(response.status>=500)throw new Error('Temporary host failure');
      if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(cacheKey,copy)).catch(()=>{}));}
      return response;
    }).catch(async()=>{
      const hit=await caches.match(cacheKey);if(hit)return hit;
      if(isNavigation)return (await caches.match(event.request,{ignoreSearch:true})) || (await caches.match('offline.html')) || Response.error();
      return Response.error();
    }));
    return;
  }
  event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{}));}
    return response;
  })));
});
