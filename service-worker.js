const CACHE='alfred-u-v15-3';
const CORE=[
  './','index.html','engineering.html','course.html','calendar.html','progress.html','resources.html','projects.html','documents.html','student-services.html','about.html','deployment.html','404.html','offline.html',
  'study.html','search.html','week.html','practice.html','labs.html','assessments.html','quiz.html','standards.html','analytics.html','knowledge.html','patch-notes.html','academic-state.js',
  'styles.css','site.js','progress.js','study.js','course-data.js','academic-content.js','academic.js','assessment-data.js','assessment.js','quiz.js','standards.js','analytics.js','search.js','release-notes.js','patch-notes.js','library-catalog.js','library-index.js','manifest.webmanifest',
  'crest.webp','seal.webp','icon-180.png','icon-192.png','icon-512.png',
  'syllabus-cover.png','resource-manual-cover.png','assignment-lab-cover.png','binder-index-cover.png','certificate-cover.png',
  'Alfred University - AU-ESET 301 - Syllabus and Student Handbook.pdf',
  'Alfred University - AU-ESET 301 - Learning Resource Manual.pdf',
  'Alfred University - AU-ESET 301 - Assignment and Lab Manual.pdf',
  'Alfred University - AU-ESET 301 - Student Course Binder Index.pdf',
  'Alfred University - AU-ESET 301 - Certificate of Course Completion.pdf',
  'Alfred University - AU-ESET 301 - Academic System Guide.pdf',
  'Embedded Career Transition Readiness Checklist.pdf',
  'Alfred University - AU-ESET 301 - Simplified Course Calendar.ics'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(async cache=>{
    const essential=CORE.filter(path=>!(/\.(pdf|png|webp|ics)$/i.test(path)));
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

  const isNavigation=event.request.mode==='navigate';
  const networkFirst=isNavigation || /\.(?:html|css|js|webmanifest)$/.test(url.pathname);

  if(networkFirst){
    event.respondWith(
      fetch(event.request)
        .then(response=>{
          if(response.ok){
            const copy=response.clone();
            caches.open(CACHE).then(cache=>cache.put(event.request,copy));
          }
          return response;
        })
        .catch(async()=>{
          const hit=await caches.match(event.request);
          if(hit) return hit;
          if(isNavigation) return (await caches.match(event.request,{ignoreSearch:true})) || (await caches.match('offline.html')) || Response.error();
          return Response.error();
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{
      if(response.ok){
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(event.request,copy));
      }
      return response;
    }))
  );
});
