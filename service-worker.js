const CACHE='alfred-u-v16-3-16-student-services-retirement-20260918';
const CORE=[
  './','index.html','engineering.html','course.html','calendar.html','progress.html','resources.html','projects.html','documents.html','student-services.html','about.html','deployment.html','404.html','offline.html',
  'study.html','learn.html','search.html','week.html','practice.html','labs.html','assessments.html','quiz.html','standards.html','analytics.html','knowledge.html','patch-notes.html','academic-state.js',
  'styles.css','study-v2.css','practice-v2.css','site.js','progress.js','study.js','practice.js','learn.js','curriculum-data.js','teaching-media-overrides.js','teaching-media-self-reliance.js','teaching-media-content-completion.js','week1-beginner-teaching-media.js','course-data.js','academic-content.js','practical-completion.js','academic.js','assessment-data.js','assessment-completion.js','semantic-repair.js','week1-instructional-depth.js','assessment-policy.js','assessment-engine.js','readiness.js','assessment.js','quiz.js','standards.js','analytics.js','search.js','release-notes.js','release-notes-current.js','release-change-ledger.js','patch-notes.js','manifest.webmanifest',
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
  'AU-ESET-301-Release-Notes-Policy.md',
  'w01-bench-sequence.svg','w01-dc-quantities.svg','w02-fault-boundary.svg','w02-kcl-kvl-divider.svg','w03-instrument-connections.svg','w03-measurement-plan.svg','w04-filter-response.svg','w04-rc-rl-response.svg','w05-model-selection.svg','w05-troubleshooting-loop.svg','w06-frequency-sweep.svg','w06-reactance-phasor.svg','w07-relay-driver.svg','w07-transformer-relay.svg','w08-low-side-switch.svg','w08-semiconductor-roles.svg','w09-power-supply-blocks.svg','w09-power-tree.svg','w10-opamp-amplifier.svg','w10-signal-budget.svg','w11-digital-logic.svg','w11-pullup-debounce.svg','w12-solder-rework.svg','w12-traceable-repair.svg','w13-hypothesis-tree.svg','w13-signal-flow.svg','w14-build-computer.svg','w14-c-memory.svg','w15-register-gpio.svg','w15-state-machine.svg','w16-bringup-ladder.svg','w16-mcu-architecture.svg','w17-python-serial.svg','w17-uart-frame.svg','w18-i2c-spi.svg','w18-peripheral-stack.svg','w19-harness-test.svg','w19-media-opto.svg','w20-rf-system.svg','w20-spectrum-handoff.svg','w21-model-router.svg','w21-tech-decision-tree.svg','w22-repair-map.svg','w22-requirement-trace.svg','w23-project-baseline.svg','w23-readiness-gate.svg','w24-bringup-dependencies.svg','w24-safe-power.svg','w25-conversion-chain.svg','w25-vertical-slice.svg','w26-firmware-layers.svg','w26-state-memory.svg','w27-data-integrity.svg','w27-hw-test-loop.svg','w28-fault-report.svg','w28-service-procedure.svg','w29-evidence-map.svg','w29-workmanship-evidence.svg','w30-career-greenlight.svg','w30-mixed-retention.svg','w31-career-feedback.svg','w31-retention-loop.svg',
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
