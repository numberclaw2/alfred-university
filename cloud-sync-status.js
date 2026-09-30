(() => {
  'use strict';

  const CONFIG_KEY = 'alfred-u-sync-config-v1';
  const RUNTIME_KEY = 'alfred-u-sync-health-v1';
  const PROGRESS_KEY = 'alfred-u-progress-v2';
  const LEGACY_PROGRESS_KEY = 'alfred-u-progress-v1';
  const EXPECTED_PROTOCOL = 2;
  const STUDENT_KEY_RE = /^AU-(?:[A-F0-9]{4}-){9}[A-F0-9]{4}$/;
  const HEALTH_INTERVAL_MS = 5 * 60 * 1000;
  const GLOBAL_SYNC_INTERVAL_MS = 30 * 1000;
  const LOCAL_REFRESH_MS = 5000;
  const REQUEST_TIMEOUT_MS = 7000;

  let badge = null;
  let stateNode = null;
  let currentHealth = 'idle';
  let currentDetail = '';
  let lastHealthAt = 0;
  let lastGlobalSyncAt = 0;
  let lastGlobalSyncSuccessAt = 0;
  let globalSyncPromise = null;

  const currentPath = () => (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isProgressPage = () => currentPath() === 'progress.html';

  function readJson(key){
    try{
      const value = JSON.parse(localStorage.getItem(key) || 'null');
      return value && typeof value === 'object' ? value : {};
    }catch{
      return {};
    }
  }

  function writeJson(key,value){
    try{
      localStorage.setItem(key,JSON.stringify(value || {}));
      return true;
    }catch{
      return false;
    }
  }

  function readConfig(){ return readJson(CONFIG_KEY); }
  function readRuntime(){ return readJson(RUNTIME_KEY); }
  function writeRuntime(value){ writeJson(RUNTIME_KEY,value); }

  function apiRoot(config){
    return String(config?.apiUrl || '')
      .trim()
      .replace(/\/+$/,'')
      .replace(/\/(?:health|sync)$/i,'');
  }

  function normalizedStudentKey(config){
    return String(config?.studentKey || '').trim().toUpperCase();
  }

  function syncReady(config){
    return !!config?.connected &&
      /^https:\/\//i.test(apiRoot(config)) &&
      STUDENT_KEY_RE.test(normalizedStudentKey(config));
  }

  function lastSyncText(config){
    const value = Date.parse(String(config?.lastSync || ''));
    if(!Number.isFinite(value)) return 'No successful sync recorded on this device yet.';
    try{
      return `Last successful sync: ${new Intl.DateTimeFormat('en-US',{
        month:'short',day:'numeric',hour:'numeric',minute:'2-digit'
      }).format(new Date(value))}.`;
    }catch{
      return `Last successful sync: ${new Date(value).toLocaleString()}.`;
    }
  }

  function installStyle(){
    if(document.getElementById('alfred-cloud-sync-status-style')) return;
    const style = document.createElement('style');
    style.id = 'alfred-cloud-sync-status-style';
    style.textContent = `
      .alfred-cloud-sync-status{
        --cloud-status-color:#6b756f;
        display:inline-flex;align-items:center;gap:.48rem;min-height:2.15rem;
        padding:.42rem .7rem;border:1px solid rgba(11,61,46,.18);border-radius:999px;
        background:rgba(255,255,255,.95);color:#153f34;font-size:.78rem;font-weight:800;
        line-height:1;text-decoration:none;white-space:nowrap;box-shadow:0 2px 10px rgba(20,45,37,.08);
        flex:0 0 auto;margin-left:auto;margin-right:.65rem;
        transition:border-color .15s ease,background .15s ease,transform .15s ease
      }
      .alfred-cloud-sync-status:hover{transform:translateY(-1px);border-color:rgba(11,61,46,.34);background:#fff;text-decoration:none}
      .alfred-cloud-sync-status:focus-visible{outline:3px solid rgba(184,145,39,.42);outline-offset:2px}
      .alfred-cloud-sync-dot{width:.58rem;height:.58rem;border-radius:50%;flex:0 0 auto;background:var(--cloud-status-color)}
      .alfred-cloud-sync-status[data-state="active"]{--cloud-status-color:#1d9562}
      .alfred-cloud-sync-status[data-state="checking"]{--cloud-status-color:#3979a8}
      .alfred-cloud-sync-status[data-state="offline"]{--cloud-status-color:#b47a16}
      .alfred-cloud-sync-status[data-state="issue"]{--cloud-status-color:#ba4040}
      .alfred-cloud-sync-status[data-state="local"]{--cloud-status-color:#6b756f}
      .alfred-cloud-sync-status.alfred-cloud-sync-fallback{position:fixed;right:1rem;bottom:1rem;z-index:9997;margin:0}
      @media(max-width:700px){
        .alfred-cloud-sync-status{min-height:2rem;padding:.4rem .58rem;gap:.4rem;margin-right:.45rem;font-size:.74rem}
        .alfred-cloud-sync-prefix{display:none}
      }
      @media(max-width:420px){
        .alfred-cloud-sync-status{padding:.36rem .48rem}
        .alfred-cloud-sync-dot{width:.52rem;height:.52rem}
      }
    `;
    document.head.appendChild(style);
  }

  function mount(){
    if(badge && document.documentElement.contains(badge)) return badge;
    installStyle();
    badge = document.createElement('a');
    badge.className = 'alfred-cloud-sync-status';
    badge.href = 'progress.html#cloud-sync';
    badge.setAttribute('aria-live','polite');
    badge.setAttribute('aria-atomic','true');
    badge.innerHTML = '<span class="alfred-cloud-sync-dot" aria-hidden="true"></span><span><span class="alfred-cloud-sync-prefix">Cloud </span><span class="alfred-cloud-sync-state">Local</span></span>';
    stateNode = badge.querySelector('.alfred-cloud-sync-state');

    const row = document.querySelector('.brand-row');
    const toggle = row?.querySelector('.nav-toggle');
    if(row){
      if(toggle) row.insertBefore(badge,toggle);
      else row.appendChild(badge);
    }else{
      badge.classList.add('alfred-cloud-sync-fallback');
      document.body.appendChild(badge);
    }
    return badge;
  }

  function render(kind,label,detail=''){
    const node = mount();
    if(!node) return;
    const config = readConfig();
    node.dataset.state = kind;
    if(stateNode) stateNode.textContent = label;
    const description = `${detail ? detail + ' ' : ''}${lastSyncText(config)}`;
    node.title = `Alfred Cloud Sync — ${label}. ${description}`;
    node.setAttribute('aria-label',`Alfred Cloud Sync: ${label}. ${description} Open Cloud Sync settings.`);
  }

  function remember(kind,detail=''){
    writeRuntime({state:kind,detail,at:new Date().toISOString()});
  }

  function blankProgress(){
    return {events:{},weeks:{},readiness:{},analytics:{},recordTimes:{},updatedAt:null};
  }

  function readProgress(){
    const hasModern = localStorage.getItem(PROGRESS_KEY) !== null;
    const modern = hasModern ? readJson(PROGRESS_KEY) : null;
    const source = hasModern ? (modern || {}) : readJson(LEGACY_PROGRESS_KEY);
    return {
      ...blankProgress(),
      ...source,
      events:source.events || {},
      weeks:source.weeks || {},
      readiness:source.readiness || {},
      analytics:source.analytics || {},
      recordTimes:source.recordTimes || {}
    };
  }

  function meaningfulEvent(value){
    if(!value || typeof value !== 'object') return false;
    if(value.status && value.status !== 'not-started') return true;
    if(String(value.notes || '').trim()) return true;
    if(Object.values(value.outcomes || {}).some(Boolean)) return true;
    if(Object.values(value.review || {}).some(Boolean)) return true;
    if(value.assessments && Object.keys(value.assessments).length) return true;
    if(value.studyReview || value.studyConfidence) return true;
    return false;
  }

  function ensureRecordTimes(progress){
    const fallback = Date.parse(progress.updatedAt || '') || 0;
    if(!fallback) return progress;
    progress.recordTimes = progress.recordTimes || {};
    Object.entries(progress.events || {}).forEach(([id,value])=>{
      const key = `event:${id}`;
      if(progress.recordTimes[key] == null && meaningfulEvent(value)) progress.recordTimes[key] = fallback;
    });
    Object.keys(progress.weeks || {}).forEach(week=>{ progress.recordTimes[`week:${week}`] ??= fallback; });
    Object.keys(progress.readiness || {}).forEach(key=>{ progress.recordTimes[`readiness:${key}`] ??= fallback; });
    Object.keys(progress.analytics || {}).forEach(key=>{ progress.recordTimes[`analytics:${key}`] ??= fallback; });
    return progress;
  }

  function recordsFromProgress(progress,deviceId){
    ensureRecordTimes(progress);
    const records = [];
    const add = (key,value) => {
      const updatedAt = Number(progress.recordTimes?.[key] || 0);
      if(updatedAt <= 0) return;
      records.push({key,value,updatedAt,deviceId:deviceId || 'unknown'});
    };
    Object.entries(progress.events || {}).forEach(([id,value])=>add(`event:${id}`,value));
    Object.entries(progress.weeks || {}).forEach(([week,value])=>add(`week:${week}`,value));
    Object.entries(progress.readiness || {}).forEach(([key,value])=>add(`readiness:${key}`,value));
    Object.entries(progress.analytics || {}).forEach(([key,value])=>add(`analytics:${key}`,value));
    return records;
  }

  function mergeCloudProgress(records){
    const progress = ensureRecordTimes(readProgress());
    let changed = false;
    for(const rec of records || []){
      if(!rec || typeof rec.key !== 'string') continue;
      const cloudTime = Number(rec.updatedAt || 0);
      const localTime = Number(progress.recordTimes?.[rec.key] || 0);
      if(cloudTime <= 0 || cloudTime < localTime) continue;

      if(rec.key.startsWith('event:')){
        progress.events[rec.key.slice(6)] = rec.value || {};
      }else if(rec.key.startsWith('week:')){
        progress.weeks[rec.key.slice(5)] = rec.value || {};
      }else if(rec.key.startsWith('readiness:')){
        progress.readiness[rec.key.slice(10)] = !!rec.value;
      }else if(rec.key.startsWith('analytics:')){
        progress.analytics[rec.key.slice(10)] = rec.value || {v:2,s:{},l:{}};
      }else{
        continue;
      }
      progress.recordTimes[rec.key] = cloudTime;
      changed = true;
    }

    if(changed){
      progress.updatedAt = new Date().toISOString();
      writeJson(PROGRESS_KEY,progress);
      window.dispatchEvent(new CustomEvent('alfred-progress-updated',{detail:{source:'cloud-sync-status'}}));
    }
    return changed;
  }

  async function fetchJson(url,options={},timeoutMs=REQUEST_TIMEOUT_MS){
    const controller = new AbortController();
    const timeout = setTimeout(()=>controller.abort(),timeoutMs);
    try{
      const response = await fetch(url,{
        ...options,
        cache:'no-store',
        credentials:'omit',
        headers:{'Accept':'application/json',...(options.headers || {})},
        signal:controller.signal
      });
      let data = null;
      try{ data = await response.json(); }catch{}
      if(!response.ok) throw new Error(data?.error || `Cloud Sync returned ${response.status}.`);
      return data;
    }finally{
      clearTimeout(timeout);
    }
  }

  async function checkHealth({force=false}={}){
    const config = readConfig();
    if(!config.connected){
      currentHealth='idle';currentDetail='';
      render('local','Local','Cloud Sync is not connected on this device.');
      return false;
    }
    const api = apiRoot(config);
    if(!/^https:\/\//i.test(api)){
      currentHealth='issue';currentDetail='The saved Cloud Sync server address is invalid.';
      remember('issue',currentDetail);render('issue','Issue',currentDetail);return false;
    }
    if(!STUDENT_KEY_RE.test(normalizedStudentKey(config))){
      currentHealth='issue';currentDetail='The saved Student Sync Key is invalid.';
      remember('issue',currentDetail);render('issue','Issue',currentDetail);return false;
    }
    if(!navigator.onLine){
      render('offline','Offline','This device is offline; local progress remains available.');
      return false;
    }
    const now = Date.now();
    if(!force && now-lastHealthAt<HEALTH_INTERVAL_MS) return currentHealth === 'active';
    lastHealthAt = now;
    render('checking','Checking','Checking Cloud Sync server health.');
    try{
      const data = await fetchJson(`${api}/health`);
      if(!data?.ok) throw new Error('The Cloud Sync health endpoint did not report healthy.');
      if(data.databaseBound===false || data.syncTableReady===false || data.limiterTableReady===false || data.schemaReady===false){
        throw new Error('The Cloud Sync database is not ready.');
      }
      if(Number(data.protocol)!==EXPECTED_PROTOCOL){
        throw new Error(`Cloud Sync protocol ${data.protocol??'unknown'} does not match Alfred protocol ${EXPECTED_PROTOCOL}.`);
      }
      const serverDetail=data.version ? `Server healthy · Worker ${data.version} · protocol ${EXPECTED_PROTOCOL}.` : `Server healthy · protocol ${EXPECTED_PROTOCOL}.`;
      if(!isProgressPage() && syncReady(config) && !lastGlobalSyncSuccessAt){
        currentHealth='checking';
        currentDetail=`${serverDetail} Waiting for progress synchronization.`;
        remember('checking',currentDetail);
        render('checking','Syncing',currentDetail);
      }else{
        currentHealth='active';
        currentDetail=(!isProgressPage() && lastGlobalSyncSuccessAt)
          ? 'Progress synchronized with the Alfred University student record.'
          : serverDetail;
        remember('active',currentDetail);
        render('active','Active',currentDetail);
      }
      return true;
    }catch(error){
      currentHealth='issue';
      currentDetail=error?.name==='AbortError' ? 'Cloud Sync health check timed out.' : (error?.message || 'Cloud Sync health could not be verified.');
      remember('issue',currentDetail);render('issue','Issue',currentDetail);return false;
    }
  }

  async function globalSync({force=false}={}){
    if(isProgressPage()) return false; // progress.js owns the full sync UI on this page.
    const config = readConfig();
    if(!syncReady(config) || !navigator.onLine) return false;
    const now = Date.now();
    if(!force && now-lastGlobalSyncAt<GLOBAL_SYNC_INTERVAL_MS) return false;
    if(globalSyncPromise) return globalSyncPromise;
    lastGlobalSyncAt = now;

    globalSyncPromise = (async()=>{
      const api = apiRoot(config);
      const key = normalizedStudentKey(config);
      const progress = readProgress();
      const payload = {
        protocol:EXPECTED_PROTOCOL,
        deviceId:config.deviceId || 'unknown',
        deviceName:config.deviceName || 'Web Browser',
        records:recordsFromProgress(progress,config.deviceId || 'unknown')
      };
      try{
        render('checking','Syncing','Merging this device with the Alfred University cloud record.');
        const result = await fetchJson(`${api}/sync`,{
          method:'POST',
          headers:{'Authorization':`Bearer ${key}`,'Content-Type':'application/json'},
          body:JSON.stringify(payload)
        });
        if(Number(result?.protocol ?? EXPECTED_PROTOCOL)!==EXPECTED_PROTOCOL){
          throw new Error(`Cloud Sync response protocol ${result?.protocol??'unknown'} does not match Alfred protocol ${EXPECTED_PROTOCOL}.`);
        }
        mergeCloudProgress(result?.records || []);
        lastGlobalSyncSuccessAt=Date.now();
        const latestConfig = readConfig();
        latestConfig.connected = true;
        latestConfig.lastSync = new Date().toISOString();
        writeJson(CONFIG_KEY,latestConfig);
        currentHealth='active';
        currentDetail='Progress synchronized with the Alfred University student record.';
        remember('active',currentDetail);
        render('active','Active',currentDetail);
        return true;
      }catch(error){
        currentHealth='issue';
        currentDetail=error?.name==='AbortError' ? 'Cloud Sync timed out.' : (error?.message || 'Cloud Sync could not merge progress.');
        remember('issue',currentDetail);
        render('issue','Issue',currentDetail);
        return false;
      }finally{
        globalSyncPromise = null;
      }
    })();
    return globalSyncPromise;
  }

  function ensureCurriculum(){
    if(window.ALFRED_CURRICULUM?.modules?.length) return Promise.resolve(true);
    if(document.querySelector('script[data-alfred-global-curriculum]')){
      return new Promise(resolve=>{
        const started=Date.now();
        const timer=setInterval(()=>{
          if(window.ALFRED_CURRICULUM?.modules?.length){clearInterval(timer);resolve(true);}
          else if(Date.now()-started>5000){clearInterval(timer);resolve(false);}
        },50);
      });
    }
    return new Promise(resolve=>{
      const script=document.createElement('script');
      script.src='curriculum-data.js?v=16.3.90-H1';
      script.async=true;
      script.dataset.alfredGlobalCurriculum='true';
      script.onload=()=>resolve(!!window.ALFRED_CURRICULUM?.modules?.length);
      script.onerror=()=>resolve(false);
      document.head.appendChild(script);
    });
  }

  function courseCompletionMetrics(progress){
    const modules = window.ALFRED_CURRICULUM?.modules || [];
    if(!modules.length) return null;
    let classroomDone=0;
    let masteredWeeks=0;
    const classroomTotal=modules.length*7;
    modules.forEach(module=>{
      const raw=progress.weeks?.[module.week];
      const week=typeof raw==='string'?{mastery:raw,assessments:{},labs:{},learning:{}}:(raw||{});
      const learning=week.learning||{};
      ['orientation','ceta-lesson','career-lesson','media','practice'].forEach(stage=>{
        if(learning.completed?.[stage]) classroomDone++;
      });
      const labId=module.integration?.labId;
      const applicationDone=labId
        ? !!(week.labs?.[labId]?.virtual||week.labs?.[labId]?.physical) && Number(week.assessments?.[`lab:${labId}`]?.bestPct||0)>=80
        : !!learning.completed?.application;
      if(applicationDone) classroomDone++;
      const criticalDone=(module.lessons||[]).every((lesson,index)=>!lesson.knowledgeCheck?.critical||learning.checks?.[`lesson-${index}`]?.correct===true);
      const masteryDone=Number(week.assessments?.[`week:${module.week}`]?.bestPct||0)>=Number(module.mastery?.target||80)&&criticalDone;
      if(masteryDone){classroomDone++;masteredWeeks++;}
    });
    return {
      coursePct:classroomTotal?Math.round(classroomDone/classroomTotal*100):0,
      classroomDone,classroomTotal,masteredWeeks,totalWeeks:modules.length
    };
  }

  async function renderHomeProgress(){
    if(!document.getElementById('home-progress-summary')) return;
    await ensureCurriculum();
    const progress = readProgress();
    const metrics = courseCompletionMetrics(progress);
    let completeSessions=0,review=0;
    const events=window.ALFRED_EVENTS||[];
    events.forEach(event=>{
      const state=progress.events?.[String(event.id)]||{};
      if(state.status==='complete') completeSessions++;
      if(state.studyReview?.due && Date.parse(state.studyReview.due)<=Date.now()) review++;
    });
    Object.values(progress.weeks||{}).forEach(week=>{
      Object.values(week?.reviewQueue||{}).forEach(item=>{
        if(item?.due && Date.parse(item.due)<=Date.now()) review++;
      });
    });
    const pct=metrics?.coursePct ?? (events.length?Math.round(completeSessions/events.length*100):0);
    const pctNode=document.getElementById('home-progress-percent');
    const eventNode=document.getElementById('home-progress-events');
    const reviewNode=document.getElementById('home-progress-review');
    if(pctNode) pctNode.textContent=`${pct}%`;
    if(eventNode) eventNode.textContent=`${completeSessions} / ${events.length}`;
    if(reviewNode) reviewNode.textContent=String(review);
  }

  function observeProgressBadge(){
    const progressBadge=document.getElementById('sync-status-badge');
    if(!progressBadge) return;
    const inspect=()=>{
      const title=document.getElementById('sync-status-title')?.textContent?.trim()||'';
      const copy=document.getElementById('sync-status-copy')?.textContent?.trim()||'';
      const classes=progressBadge.classList;
      if(classes.contains('error')||/sync error/i.test(title)){
        const detail=copy||title||'Cloud Sync reported an error.';
        currentHealth='issue';currentDetail=detail;remember('issue',detail);render('issue','Issue',detail);
      }else if(classes.contains('connected')||/cloud sync active/i.test(title)){
        currentHealth='active';currentDetail=copy||'This device is synchronized with the Alfred University student record.';
        remember('active',currentDetail);render('active','Active',currentDetail);
      }else if(classes.contains('offline')||/offline/i.test(title)){
        render('offline','Offline',copy||'This device is offline.');
      }
    };
    inspect();
    new MutationObserver(inspect).observe(progressBadge,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
  }

  function refresh({health=false,force=false,sync=false}={}){
    const config=readConfig();
    if(!config.connected){
      render('local','Local','Cloud Sync is not connected on this device.');
    }else if(!navigator.onLine){
      render('offline','Offline','This device is offline; local progress remains available.');
    }
    renderHomeProgress();
    if(health) checkHealth({force});
    if(sync) globalSync({force});
  }

  function start(){
    mount();
    observeProgressBadge();
    renderHomeProgress();
    refresh({health:true,force:true,sync:true});

    window.addEventListener('online',()=>refresh({health:true,force:true,sync:true}));
    window.addEventListener('offline',()=>refresh());
    window.addEventListener('focus',()=>refresh({health:true,sync:true}));
    window.addEventListener('storage',event=>{
      if(event.key===CONFIG_KEY||event.key===RUNTIME_KEY){
        refresh({health:true,force:true,sync:true});
      }else if(event.key===PROGRESS_KEY||event.key===LEGACY_PROGRESS_KEY){
        renderHomeProgress();
      }
    });
    window.addEventListener('alfred-progress-updated',()=>{
      renderHomeProgress();
      if(!isProgressPage()) globalSync();
    });
    document.addEventListener('visibilitychange',()=>{
      if(document.visibilityState==='visible') refresh({health:true,sync:true});
    });
    window.setInterval(()=>refresh(),LOCAL_REFRESH_MS);
    window.setInterval(()=>{
      if(document.visibilityState==='visible') refresh({health:true,sync:true});
    },HEALTH_INTERVAL_MS);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();
