const CACHE='alfred-u-v3';
const CORE=['./','index.html','engineering.html','course.html','calendar.html','resources.html','projects.html','documents.html','student-services.html','about.html','assets/styles.css','assets/site.js','assets/course-data.js','assets/crest.webp','assets/seal.webp'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const copy=resp.clone();if(new URL(e.request.url).origin===location.origin)caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;}).catch(()=>caches.match('index.html'))));});
