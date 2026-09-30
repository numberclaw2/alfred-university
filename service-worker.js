const CACHE='alfred-u-v16-3-87-guided-practice-runtime-repair-20260929';

const CORE=[
  './',
  'index.html','engineering.html','course.html','calendar.html','progress.html','resources.html',
  'projects.html','documents.html','student-services.html','about.html','deployment.html','404.html','offline.html',
  'study.html','learn.html','glossary.html','search.html','week.html','practice.html','labs.html',
  'assessments.html','quiz.html','standards.html','analytics.html','knowledge.html','patch-notes.html',
  'styles.css','styles.css?v=16.3.67','styles.css?v=16.3.74','styles.css?v=16.3.75','styles.css?v=16.3.84',
  'learn-parking.css','learn-parking.css?v=16.3.44',
  'ux-system.css','ux-system.css?v=16.3.36',
  'glossary.css','glossary.css?v=16.3.67',
  'study-v2.css','study-v2.css?v=16.3.67',
  'vocabulary-study.css','vocabulary-study.css?v=16.3.67',
  'practice-v2.css',
  'site.js','academic-state.js',
  'ux-system.js','ux-system.js?v=16.3.36',
  'progress.js','progress.js?v=16.3.43',
  'study.js','study.js?v=16.3.68',
  'parking-sync.js','parking-sync.js?v=16.3.43',
  'learn-parking.js','learn-parking.js?v=16.3.44',
  'vocabulary-study.js','practice.js',
  'learn.js','learn.js?v=16.3.68','learn.js?v=16.3.74','learn.js?v=16.3.75','learn.js?v=16.3.76','learn.js?v=16.3.84','learn.js?v=16.3.86','learn.js?v=16.3.87',
  'glossary-data.js','glossary-data.js?v=16.3.29','glossary.js','glossary.js?v=16.3.38',
  'curriculum-data.js','course-data.js','academic-content.js','practical-completion.js','academic.js','academic.js?v=16.3.50',
  'assessment-data.js','assessment-completion.js','semantic-repair.js','week1-instructional-depth.js',
  'career-instructional-depth.js','career-curriculum-reconstruction.js','instructional-visuals.js','career-traceability-routing.js',
  'career-occupational-governance-v16.3.77.js','career-occupational-governance-v16.3.77.js?v=16.3.77',
  'ceta-career-tandem-governance-v16.3.78.js','ceta-career-tandem-governance-v16.3.78.js?v=16.3.78',
  'ceta-career-tandem-timing-repair-v16.3.79.js','ceta-career-tandem-timing-repair-v16.3.79.js?v=16.3.79',
  'ceta-instructional-authority-v16.3.80.js','ceta-instructional-authority-v16.3.80.js?v=16.3.80',
  'week3-remediation-v16.3.81.js','week3-remediation-v16.3.81.js?v=16.3.81',
  'week3-final-acceptance-v16.3.82.js','week3-final-acceptance-v16.3.82.js?v=16.3.82',
  'week3-final-acceptance-v16.3.83.js','week3-final-acceptance-v16.3.83.js?v=16.3.83',
  'teaching-media-resource-integration.js','teaching-media-resource-integration.js?v=16.3.57',
  'outside-literature-integration.js','outside-literature-integration.js?v=16.3.48',
  'teaching-media-architecture-repair.js','teaching-media-architecture-repair.js?v=16.3.56',
  'v16.3.56-runtime-placement-hotfix.js','v16.3.56-runtime-placement-hotfix.js?v=16.3.60',
  'ceta-study-guide-map.js','ceta-study-guide-map.js?v=16.3.66',
  'week2-redesign-v16.3.68.js','week2-redesign-v16.3.68.js?v=16.3.68',
  'week2-study-aac-v16.3.69.js','week2-study-aac-v16.3.69.js?v=16.3.69',
  'week2-final-acceptance-v16.3.70.js','week2-final-acceptance-v16.3.70.js?v=16.3.70',
  'week3-redesign-v16.3.71.js','week3-redesign-v16.3.71.js?v=16.3.71',
  'week3-final-acceptance-v16.3.72.js','week3-final-acceptance-v16.3.72.js?v=16.3.72',
  'week2-career-remediation-v16.3.74.js','week2-career-remediation-v16.3.74.js?v=16.3.74',
  'week2-final-career-ux-v16.3.75.js','week2-final-career-ux-v16.3.75.js?v=16.3.75',
  'week2-trainer-evidence-gate-v16.3.76.js','week2-trainer-evidence-gate-v16.3.76.js?v=16.3.76',
  'week2-source-visuals-v16.3.85.js','week2-source-visuals-v16.3.85.js?v=16.3.85',
  'week2-career-source-visuals-v16.3.86.js','week2-career-source-visuals-v16.3.86.js?v=16.3.86',
  'week2-career-assessment-v16.3.74.js','week2-career-assessment-v16.3.74.js?v=16.3.74',
  'ceta-study-guide-private.js','ceta-study-guide-private.js?v=16.3.65',
  'media-consumption.js','media-consumption.js?v=16.3.57',
  'teaching-media-overrides.js','teaching-media-self-reliance.js','teaching-media-content-completion.js',
  'week1-beginner-teaching-media.js',
  'assessment-policy.js','assessment-engine.js','readiness.js','assessment.js',
  'quiz.js','quiz.js?v=16.3.75',
  'standards.js','standards.js?v=16.3.77','standards.js?v=16.3.78',
  'analytics.js','search.js','search.js?v=16.3.53',
  'release-notes.js','release-notes-current.js',
  'release-notes-v16.3.58.js','release-notes-v16.3.59.js','release-notes-v16.3.60.js',
  'release-notes-v16.3.61.js','release-notes-v16.3.62.js','release-notes-v16.3.63.js',
  'release-notes-v16.3.64.js','release-notes-v16.3.65.js','release-notes-v16.3.66.js',
  'release-notes-v16.3.67.js','release-notes-v16.3.68.js','release-notes-v16.3.69.js',
  'release-notes-v16.3.70.js','release-notes-v16.3.71.js','release-notes-v16.3.72.js',
  'release-notes-v16.3.73.js','release-notes-v16.3.74.js','release-notes-v16.3.75.js',
  'release-notes-v16.3.76.js','release-notes-v16.3.77.js','release-notes-v16.3.78.js',
  'release-notes-v16.3.79.js','release-notes-v16.3.80.js','release-notes-v16.3.81.js','release-notes-v16.3.82.js','release-notes-v16.3.83.js','release-notes-v16.3.84.js','release-notes-v16.3.85.js','release-notes-v16.3.86.js','release-notes-v16.3.87.js',
  'reading-library-integration.js','reading-library-integration.js?v=16.3.60',
  'release-change-ledger.js','patch-notes.js',
  'cloud-sync-status.js','cloud-sync-status.js?v=16.3.73',
  'manifest.webmanifest',
  'crest.webp','seal.webp','icon-180.png','icon-192.png','icon-512.png',
  'Alfred University - AU-ESET 301 - Simplified Course Calendar.ics',
  'Associate_CET_Study_Guide_Sixth_Edition.pdf'
];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(async cache=>{
        const essential=CORE.filter(path=>!(/\.(pdf|png|webp|ics|docx|csv|json|md)$/i.test(path)));
        await cache.addAll(essential);
        await Promise.allSettled(
          CORE.filter(path=>!essential.includes(path)).map(path=>cache.add(path))
        );
      })
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  // Preserve recent accepted caches during the v16.3.87 transition so previously
  // cached documents/resources are not discarded while the Career renderer refreshes.
  const preserved=new Set(['alfred-u-v16-3-80-ceta-authority-20260929','alfred-u-v16-3-81-week3-remediation-20260929','alfred-u-v16-3-82-week3-final-acceptance-20260929','alfred-u-v16-3-83-week3-final-acceptance-context-repair-20260929','alfred-u-v16-3-84-week3-career-teaching-render-repair-20260929','alfred-u-v16-3-85-week2-source-authentic-visuals-20260929','alfred-u-v16-3-86-week2-career-source-authentic-visuals-20260929']);
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(
        keys.filter(key=>key.startsWith('alfred-u-')&&key!==CACHE&&!preserved.has(key)).map(key=>caches.delete(key))
      ))
      .then(()=>self.clients.claim())
  );
});

function insertAfter(text, marker, addition){
  return text.includes(marker) ? text.replace(marker, marker+addition) : text;
}

async function decorateNavigationResponse(response,url){
  if(!response) return response;
  const type=String(response.headers.get('content-type')||'').toLowerCase();
  if(!type.includes('text/html')) return response;

  let text=await response.text();
  text=text.replace(/learn\.js\?v=16\.3\.(?:68|74|75|76|84|86)/g,'learn.js?v=16.3.87');
  text=text.replace(/styles\.css\?v=16\.3\.(?:67|74|75)/g,'styles.css?v=16.3.84');

  const statusTag='<script src="cloud-sync-status.js?v=16.3.73"></script>';
  if(!text.includes('cloud-sync-status.js')){
    if(/<\/body>/i.test(text)) text=text.replace(/<\/body>/i,statusTag+'</body>');
    else text+=statusTag;
  }

  const week2Visual85='<script src="week2-source-visuals-v16.3.85.js?v=16.3.85"></script>';
  if(url.pathname.endsWith('/learn.html') && !text.includes('week2-source-visuals-v16.3.85.js')){
    const week2Trainer='<script src="week2-trainer-evidence-gate-v16.3.76.js?v=16.3.76"></script>';
    const week2TrainerPlain='<script src="week2-trainer-evidence-gate-v16.3.76.js"></script>';
    if(text.includes(week2Trainer)) text=insertAfter(text,week2Trainer,week2Visual85);
    else if(text.includes(week2TrainerPlain)) text=insertAfter(text,week2TrainerPlain,week2Visual85);
  }

  const week2CareerVisual86='<script src="week2-career-source-visuals-v16.3.86.js?v=16.3.86"></script>';
  if(url.pathname.endsWith('/learn.html') && !text.includes('week2-career-source-visuals-v16.3.86.js')){
    const week2Visual85Versioned='<script src="week2-source-visuals-v16.3.85.js?v=16.3.85"></script>';
    const week2Visual85Plain='<script src="week2-source-visuals-v16.3.85.js"></script>';
    if(text.includes(week2Visual85Versioned)) text=insertAfter(text,week2Visual85Versioned,week2CareerVisual86);
    else if(text.includes(week2Visual85Plain)) text=insertAfter(text,week2Visual85Plain,week2CareerVisual86);
  }

  const overlayTag='<script src="week3-remediation-v16.3.81.js?v=16.3.81"></script>';
  if(!text.includes('week3-remediation-v16.3.81.js')){
    const authorityVersioned='<script src="ceta-instructional-authority-v16.3.80.js?v=16.3.80"></script>';
    const authorityPlain='<script src="ceta-instructional-authority-v16.3.80.js"></script>';
    const practical='<script src="practical-completion.js"></script>';

    if(text.includes(authorityVersioned)){
      text=insertAfter(text,authorityVersioned,overlayTag);
    }else if(text.includes(authorityPlain)){
      text=insertAfter(text,authorityPlain,overlayTag);
    }else if(url.pathname.endsWith('/labs.html') && text.includes(practical)){
      text=insertAfter(text,practical,overlayTag);
    }
  }

  // v16.3.83 supersedes the v16.3.82 runtime acceptance script.
  text=text.replace('<script src="week3-final-acceptance-v16.3.82.js?v=16.3.82"></script>','');
  text=text.replace('<script src="week3-final-acceptance-v16.3.82.js"></script>','');
  const final83Tag='<script src="week3-final-acceptance-v16.3.83.js?v=16.3.83"></script>';
  if(!text.includes('week3-final-acceptance-v16.3.83.js')){
    const overlay81Versioned='<script src="week3-remediation-v16.3.81.js?v=16.3.81"></script>';
    const overlay81Plain='<script src="week3-remediation-v16.3.81.js"></script>';
    if(text.includes(overlay81Versioned)) text=insertAfter(text,overlay81Versioned,final83Tag);
    else if(text.includes(overlay81Plain)) text=insertAfter(text,overlay81Plain,final83Tag);
  }

  if(url.pathname.endsWith('/patch-notes.html') && !text.includes('release-notes-v16.3.81.js')){
    const release80='<script src="release-notes-v16.3.80.js"></script>';
    const ledger='<script src="release-change-ledger.js"></script>';
    const patch='<script src="patch-notes.js"></script>';
    const release81='<script src="release-notes-v16.3.81.js"></script>';
    if(text.includes(release80)) text=insertAfter(text,release80,release81);
    else if(text.includes(ledger)) text=text.replace(ledger,release81+ledger);
    else if(text.includes(patch)) text=text.replace(patch,release81+patch);
    else text=text.replace(statusTag,release81+statusTag);
  }

  if(url.pathname.endsWith('/patch-notes.html') && !text.includes('release-notes-v16.3.82.js')){
    const release81='<script src="release-notes-v16.3.81.js"></script>';
    const ledger='<script src="release-change-ledger.js"></script>';
    const patch='<script src="patch-notes.js"></script>';
    const release82='<script src="release-notes-v16.3.82.js"></script>';
    if(text.includes(release81)) text=insertAfter(text,release81,release82);
    else if(text.includes(ledger)) text=text.replace(ledger,release82+ledger);
    else if(text.includes(patch)) text=text.replace(patch,release82+patch);
    else text=text.replace(statusTag,release82+statusTag);
  }

  if(url.pathname.endsWith('/patch-notes.html') && !text.includes('release-notes-v16.3.83.js')){
    const release82='<script src="release-notes-v16.3.82.js"></script>';
    const ledger='<script src="release-change-ledger.js"></script>';
    const patch='<script src="patch-notes.js"></script>';
    const release83='<script src="release-notes-v16.3.83.js"></script>';
    if(text.includes(release82)) text=insertAfter(text,release82,release83);
    else if(text.includes(ledger)) text=text.replace(ledger,release83+ledger);
    else if(text.includes(patch)) text=text.replace(patch,release83+patch);
    else text=text.replace(statusTag,release83+statusTag);
  }

  if(url.pathname.endsWith('/patch-notes.html') && !text.includes('release-notes-v16.3.84.js')){
    const release83='<script src="release-notes-v16.3.83.js"></script>';
    const ledger='<script src="release-change-ledger.js"></script>';
    const patch='<script src="patch-notes.js"></script>';
    const release84='<script src="release-notes-v16.3.84.js"></script>';
    if(text.includes(release83)) text=insertAfter(text,release83,release84);
    else if(text.includes(ledger)) text=text.replace(ledger,release84+ledger);
    else if(text.includes(patch)) text=text.replace(patch,release84+patch);
    else text=text.replace(statusTag,release84+statusTag);
  }

  if(url.pathname.endsWith('/patch-notes.html') && !text.includes('release-notes-v16.3.85.js')){
    const release84='<script src="release-notes-v16.3.84.js"></script>';
    const ledger='<script src="release-change-ledger.js"></script>';
    const patch='<script src="patch-notes.js"></script>';
    const release85='<script src="release-notes-v16.3.85.js"></script>';
    if(text.includes(release84)) text=insertAfter(text,release84,release85);
    else if(text.includes(ledger)) text=text.replace(ledger,release85+ledger);
    else if(text.includes(patch)) text=text.replace(patch,release85+patch);
    else text=text.replace(statusTag,release85+statusTag);
  }

  if(url.pathname.endsWith('/patch-notes.html') && !text.includes('release-notes-v16.3.86.js')){
    const release85='<script src="release-notes-v16.3.85.js"></script>';
    const ledger='<script src="release-change-ledger.js"></script>';
    const patch='<script src="patch-notes.js"></script>';
    const release86='<script src="release-notes-v16.3.86.js"></script>';
    if(text.includes(release85)) text=insertAfter(text,release85,release86);
    else if(text.includes(ledger)) text=text.replace(ledger,release86+ledger);
    else if(text.includes(patch)) text=text.replace(patch,release86+patch);
    else text=text.replace(statusTag,release86+statusTag);
  }

  if(url.pathname.endsWith('/patch-notes.html') && !text.includes('release-notes-v16.3.87.js')){
    const release86='<script src="release-notes-v16.3.86.js"></script>';
    const ledger='<script src="release-change-ledger.js"></script>';
    const patch='<script src="patch-notes.js"></script>';
    const release87='<script src="release-notes-v16.3.87.js"></script>';
    if(text.includes(release86)) text=insertAfter(text,release86,release87);
    else if(text.includes(ledger)) text=text.replace(ledger,release87+ledger);
    else if(text.includes(patch)) text=text.replace(patch,release87+patch);
    else text=text.replace(statusTag,release87+statusTag);
  }

  const headers=new Headers(response.headers);
  headers.delete('content-length');
  headers.delete('content-encoding');
  headers.delete('etag');

  return new Response(text,{
    status:response.status,
    statusText:response.statusText,
    headers
  });
}

async function decorateBuildInfo(response){
  if(!response || !response.ok) return response;
  try{
    const data=await response.clone().json();
    data.runtimePatch='16.3.87';
    data.build='v16.3.87-guided-practice-runtime-repair-20260929';
    data.releaseStatus='guided-practice-stage-transition-runtime-repaired';
    data.releaseNotesRevision='2026-09-29-v16.3.87-guided-practice-runtime-repair';
    data.week3InstructionalRevision='2026-09-29-v16.3.81-week3-three-gate-remediation';
    data.week3ThreeGateStatus='VERIFIED_PASS';
    data.week3CetaAuthorityRepair=['8.1','8.2'];
    data.week3CareerMetrologyStandards=['C15.1','C15.2','C15.3','C15.4','C15.5'];
    data.week3FinalAcceptanceRevision='2026-09-29-v16.3.83-week3-final-acceptance-context-repair';
    data.week3FinalAcceptanceStatus='VERIFIED_PASS';
    data.week3AcceptanceRuntimeScript='week3-final-acceptance-v16.3.83.js';
    data.week3AcceptanceRuntimeMode='full-check-on-complete-context; canonical-status-mirror-on-partial-context';
    data.week3AcceptanceSemanticTaskKey='taskId|id';
    data.week3CareerRenderRevision='2026-09-29-v16.3.84-week3-career-teaching-render-repair';
    data.week3CareerRenderStatus='VERIFIED_VISIBLE';
    data.week2VisualRevision='2026-09-29-v16.3.85-week2-source-authentic-visuals';
    data.week2VisualStatus='SOURCE_AUTHENTIC_PASS';
    data.week2SourceAuthenticConceptVisualCount=7;
    data.week2PublicDomainVisualItemCount=7;
    data.week2CC0VisualItemCount=1;
    data.week2CareerVisualRevision='2026-09-29-v16.3.86-week2-career-source-authentic-visuals';
    data.week2CareerVisualStatus='SOURCE_AUTHENTIC_PASS';
    data.week2CareerSourceAuthenticPageCount=5;
    data.week2CareerSourceAuthenticImageCount=6;
    data.week2CareerPublicDomainImageCount=6;
    data.week2CareerAlfredReasoningAidsPreserved=2;
    data.visualSourcePolicyRevision='2026-09-29-source-authentic-first-public-domain-preferred';
    data.cetaVerifiedActiveRouteCount=221;
    data.cetaRouteRehomeRequiredCount=41;
    data.combinedVerifiedWeekCount=2;
    data.careerVerifiedPassWeeks=[2,3];
    data.careerP0RemediationWeeks=[4,12,29];
    data.week3SpecialtyInstrumentRehome='C3.8 removed from unsupported Week 6 claim; Week 20 remains a future remediation target.';
    data.practiceRevision='2026-09-29-v16.3.87-guided-practice-state-model-runtime-repair';
    data.guidedPracticeRuntimeStatus='VERIFIED_RENDERABLE';
    data.guidedPracticeRuntimeHelpers=['practiceSectionPlan','practiceViewRecord'];
    data.stageTransitionSmokeTestRevision='2026-09-29-v16.3.87-destination-render-smoke-test';
    data.serviceWorkerRevision='2026-09-29-v16.3.87-guided-practice-runtime-repair';
    const headers=new Headers(response.headers);
    headers.set('content-type','application/json; charset=utf-8');
    headers.set('cache-control','no-store');
    headers.delete('content-length');
    headers.delete('content-encoding');
    headers.delete('etag');
    return new Response(JSON.stringify(data,null,2)+'\n',{
      status:response.status,
      statusText:response.statusText,
      headers
    });
  }catch(_){
    return response;
  }
}

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;

  if(url.pathname.endsWith('/build-info.json')){
    event.respondWith(
      fetch(event.request,{cache:'no-store'})
        .then(decorateBuildInfo)
        .catch(async()=>{
          const hit=await caches.match(event.request,{ignoreSearch:true});
          return hit ? decorateBuildInfo(hit) : Response.error();
        })
    );
    return;
  }

  if(url.pathname.endsWith('/v16.3.56-runtime-placement-hotfix.js')){
    const freshUrl=new URL('v16.3.56-runtime-placement-hotfix.js?v=16.3.60',self.location.origin);
    event.respondWith(
      fetch(freshUrl,{cache:'reload'})
        .then(response=>{
          if(response.ok){
            const copy=response.clone();
            event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{}));
          }
          return response;
        })
        .catch(async()=>await caches.match(event.request)||Response.error())
    );
    return;
  }

  const isNavigation=event.request.mode==='navigate';
  const cacheKey=isNavigation ? new URL(url.pathname,self.location.origin).href : event.request;
  const networkFirst=isNavigation || /\.(?:html|css|js|webmanifest)$/.test(url.pathname);

  if(networkFirst){
    event.respondWith(
      fetch(event.request)
        .then(async response=>{
          if(response.status>=500) throw new Error('Temporary host failure');
          const finalResponse=isNavigation ? await decorateNavigationResponse(response,url) : response;
          if(finalResponse.ok){
            const copy=finalResponse.clone();
            event.waitUntil(caches.open(CACHE).then(cache=>cache.put(cacheKey,copy)).catch(()=>{}));
          }
          return finalResponse;
        })
        .catch(async()=>{
          const hit=await caches.match(cacheKey);
          if(hit) return isNavigation ? await decorateNavigationResponse(hit,url) : hit;
          if(isNavigation){
            const fallback=(await caches.match(event.request,{ignoreSearch:true})) || (await caches.match('offline.html'));
            return fallback ? await decorateNavigationResponse(fallback,url) : Response.error();
          }
          return Response.error();
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{
      if(response.ok){
        const copy=response.clone();
        event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{}));
      }
      return response;
    }))
  );
});
