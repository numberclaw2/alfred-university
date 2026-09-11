const CACHE='alfred-u-v7';
const CORE=[
  './','index.html','engineering.html','course.html','calendar.html','progress.html','resources.html','projects.html','documents.html','student-services.html','about.html','deployment.html','404.html',
  'styles.css','site.js','progress.js','course-data.js','manifest.webmanifest',
  'crest.webp','seal.webp','icon-180.png','icon-192.png','icon-512.png',
  'syllabus-cover.png','resource-manual-cover.png','assignment-lab-cover.png','binder-index-cover.png','certificate-cover.png',
  'Alfred University - AU-ESET 301 - Syllabus and Student Handbook.pdf',
  'Alfred University - AU-ESET 301 - Learning Resource Manual.pdf',
  'Alfred University - AU-ESET 301 - Assignment and Lab Manual.pdf',
  'Alfred University - AU-ESET 301 - Student Course Binder Index.pdf',
  'Alfred University - AU-ESET 301 - Certificate of Course Completion.pdf',
  'Embedded Career Transition Readiness Checklist.pdf',
  'Alfred University - AU-ESET 301 - Simplified Course Calendar.ics'
];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(CORE))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;

  const fresh =
    event.request.mode==='navigate' ||
    /\.(?:html|css|js|webmanifest)$/.test(url.pathname);

  if(fresh){
    event.respondWith(
      fetch(event.request)
        .then(response=>{
          if(response.ok){
            const copy=response.clone();
            caches.open(CACHE).then(cache=>cache.put(event.request,copy));
          }
          return response;
        })
        .catch(()=>caches.match(event.request).then(hit=>hit||caches.match('index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(hit=>{
      if(hit) return hit;
      return fetch(event.request).then(response=>{
        if(response.ok){
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(event.request,copy));
        }
        return response;
      });
    })
  );
});
