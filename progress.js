
(() => {
  const EVENTS = window.ALFRED_EVENTS || [];
  const WEEKS = window.ALFRED_WEEKS || [];
  const KEY = 'alfred-u-progress-v2';
  const LEGACY_KEY = 'alfred-u-progress-v1';
  const SYNC_KEY = 'alfred-u-sync-config-v1';
  const SYNC_PROTOCOL = 2;
  const STUDENT_KEY_RE = /^AU-(?:[A-F0-9]{4}-){9}[A-F0-9]{4}$/;
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmtDate=iso=>new Intl.DateTimeFormat('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'}).format(new Date(iso));
  const fmtTime=iso=>new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit'}).format(new Date(iso));

  function blankState(){
    return {events:{},weeks:{},readiness:{},recordTimes:{},updatedAt:null};
  }
  function eventHasMeaningfulData(value){
    if(!value || typeof value!=='object') return false;
    if(value.status && value.status!=='not-started') return true;
    if(String(value.notes||'').trim()) return true;
    if(Object.values(value.outcomes||{}).some(Boolean)) return true;
    if(Object.values(value.review||{}).some(Boolean)) return true;
    return false;
  }
  function migrate(parsed){
    const base={...blankState(),...(parsed||{})};
    base.events=base.events||{};
    base.weeks=base.weeks||{};
    base.readiness=base.readiness||{};
    base.recordTimes=base.recordTimes||{};
    const fallback=Date.parse(base.updatedAt||'')||Date.now();

    // Older backups did not carry per-record timestamps. Only meaningful event
    // records need a migration timestamp; untouched/default event shells do not.
    Object.entries(base.events).forEach(([k,value])=>{
      const recordKey=`event:${k}`;
      if(base.recordTimes[recordKey]==null && eventHasMeaningfulData(value)){
        base.recordTimes[recordKey]=fallback;
      }
    });
    Object.keys(base.weeks).forEach(k=>{base.recordTimes[`week:${k}`]??=fallback;});
    Object.keys(base.readiness).forEach(k=>{base.recordTimes[`readiness:${k}`]??=fallback;});
    return base;
  }
  function load(){
    try{
      const modern=JSON.parse(localStorage.getItem(KEY)||'null');
      if(modern) return migrate(modern);
      const legacy=JSON.parse(localStorage.getItem(LEGACY_KEY)||'null');
      if(legacy){
        const migrated=migrate(legacy);
        localStorage.setItem(KEY,JSON.stringify(migrated));
        return migrated;
      }
    }catch{}
    return blankState();
  }
  let state=load();
  let syncTimer=null;

  function loadSync(){
    try{return JSON.parse(localStorage.getItem(SYNC_KEY)||'null')||{};}catch{return {};}
  }
  let syncConfig=loadSync();

  function ensureDeviceId(){
    if(!syncConfig.deviceId){
      const bytes=new Uint8Array(10); crypto.getRandomValues(bytes);
      syncConfig.deviceId=[...bytes].map(b=>b.toString(16).padStart(2,'0')).join('');
      saveSyncConfig();
    }
    if(!syncConfig.deviceName){
      syncConfig.deviceName=detectDeviceName();
      saveSyncConfig();
    }
  }
  function detectDeviceName(){
    const ua=navigator.userAgent||'';
    if(/iPhone/i.test(ua)) return 'iPhone Browser';
    if(/iPad/i.test(ua)) return 'iPad Browser';
    if(/Macintosh/i.test(ua)) return 'Mac Browser';
    if(/Windows/i.test(ua)) return 'Windows Browser';
    if(/Android/i.test(ua)) return 'Android Browser';
    return 'Web Browser';
  }
  function saveSyncConfig(){
    localStorage.setItem(SYNC_KEY,JSON.stringify(syncConfig));
  }
  ensureDeviceId();

  function touch(recordKey){
    state.recordTimes[recordKey]=Date.now();
  }
  function persist({skipSync=false}={}){
    state.updatedAt=new Date().toISOString();
    localStorage.setItem(KEY,JSON.stringify(state));
    refreshAll();
    window.dispatchEvent(new CustomEvent('alfred-progress-updated'));
    if(!skipSync) scheduleCloudSync();
  }
  function eventState(id){
    const key=String(id);
    if(!state.events[key]) state.events[key]={status:'not-started',outcomes:{},review:{},notes:''};
    return state.events[key];
  }
  function currentWeek(){
    const now=new Date();
    let w=1;
    EVENTS.filter(e=>e.week).forEach(e=>{if(new Date(e.start)<=now)w=e.week});
    return w;
  }
  function metrics(){
    const totalEvents=EVENTS.length;
    let complete=0,reviewCount=0,doneOutcomes=0,totalOutcomes=0;
    EVENTS.forEach(e=>{
      const s=eventState(e.id);
      if(s.status==='complete') complete++;
      Object.values(s.review||{}).forEach(v=>{if(v)reviewCount++});
      (e.outcomes||[]).forEach((_,i)=>{
        totalOutcomes++;
        if(s.outcomes?.[i]) doneOutcomes++;
      });
    });
    const coursePct=totalEvents?Math.round((complete/totalEvents)*100):0;
    const outcomePct=totalOutcomes?Math.round((doneOutcomes/totalOutcomes)*100):0;
    return {totalEvents,complete,reviewCount,doneOutcomes,totalOutcomes,coursePct,outcomePct};
  }

  // -----------------------------
  // Cloud sync record conversion
  // -----------------------------
  function recordsFromState(){
    const records=[];
    const deviceId=syncConfig.deviceId||'unknown';

    const addRecord=(key,value)=>{
      const updatedAt=Number(state.recordTimes[key]||0);
      if(updatedAt<=0) return; // Do not upload untouched/default UI shells.
      records.push({key,value,updatedAt,deviceId});
    };

    Object.entries(state.events||{}).forEach(([id,value])=>{
      addRecord(`event:${id}`,value);
    });
    Object.entries(state.weeks||{}).forEach(([week,value])=>{
      addRecord(`week:${week}`,value);
    });
    Object.entries(state.readiness||{}).forEach(([key,value])=>{
      addRecord(`readiness:${key}`,value);
    });
    return records;
  }
  function applyCloudRecord(rec){
    const localTime=Number(state.recordTimes[rec.key]||0);
    const cloudTime=Number(rec.updatedAt||0);
    if(cloudTime < localTime) return false;
    if(rec.key.startsWith('event:')){
      const id=rec.key.slice(6);
      state.events[id]=rec.value||{};
    }else if(rec.key.startsWith('week:')){
      const week=rec.key.slice(5);
      state.weeks[week]=rec.value;
    }else if(rec.key.startsWith('readiness:')){
      const key=rec.key.slice(10);
      state.readiness[key]=!!rec.value;
    }else{
      return false;
    }
    state.recordTimes[rec.key]=cloudTime;
    return true;
  }
  function mergeCloudRecords(records){
    let changed=false;
    (records||[]).forEach(rec=>{if(applyCloudRecord(rec))changed=true;});
    if(changed) persist({skipSync:true});
  }

  // -----------------------------
  // Cloud sync network layer
  // -----------------------------
  function normalizedApiUrl(){
    let api=String(syncConfig.apiUrl||'').trim().replace(/\/+$/,'');
    // Be forgiving if a health/sync test URL was pasted instead of the Worker root.
    api=api.replace(/\/(?:health|sync)$/i,'');
    return api;
  }
  function normalizedStudentKey(){
    return String(syncConfig.studentKey||'').trim().toUpperCase();
  }
  function syncReady(){
    return /^https:\/\/.+/i.test(normalizedApiUrl()) && STUDENT_KEY_RE.test(normalizedStudentKey());
  }
  async function apiFetch(path,options={}){
    const api=normalizedApiUrl();
    if(!api) throw new Error('Cloud sync server URL is missing.');
    const headers=new Headers(options.headers||{});
    headers.set('Accept','application/json');
    if(path!='/health'){
      const key=normalizedStudentKey();
      if(!STUDENT_KEY_RE.test(key)) throw new Error('Student Sync Key format is invalid.');
      headers.set('Authorization',`Bearer ${key}`);
    }
    if(options.body && !headers.has('Content-Type')) headers.set('Content-Type','application/json');

    let response;
    try{
      response=await fetch(api+path,{...options,headers,cache:'no-store',credentials:'omit'});
    }catch{
      throw new Error('Could not reach the Cloud Sync server. Check the Worker URL, Worker deployment, and allowed GitHub origin.');
    }

    let data=null;
    try{data=await response.json();}catch{}
    if(!response.ok) throw new Error(data?.error||`Sync server returned ${response.status}.`);
    return data;
  }
  function setSyncBadge(kind,title,copy){
    const badge=$('#sync-status-badge');
    if(!badge) return;
    badge.className=`sync-status-badge ${kind}`;
    $('#sync-status-title').textContent=title;
    $('#sync-status-copy').textContent=copy;
  }
  function formatLastSync(){
    if(!syncConfig.lastSync) return 'Never';
    try{return new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}).format(new Date(syncConfig.lastSync));}
    catch{return 'Unknown';}
  }
  function maskKey(key){
    const clean=String(key||'');
    if(clean.length<12) return '—';
    return clean.slice(0,7)+'••••••••••'+clean.slice(-7);
  }
  function refreshSyncUI(){
    const connected=!!syncConfig.connected && syncReady();
    const setup=$('#sync-setup-grid');
    const summary=$('#sync-connected-summary');
    if(!setup||!summary) return;

    if(connected){
      setup.classList.add('hidden');
      summary.classList.remove('hidden');
      setSyncBadge(navigator.onLine?'connected':'offline',navigator.onLine?'Cloud Sync Active':'Offline','Changes are saved locally and will sync when the connection returns.');
    }else{
      setup.classList.remove('hidden');
      summary.classList.add('hidden');
      setSyncBadge('local','Local Only','Cloud sync has not been connected.');
    }
    $('#sync-device-name').textContent=syncConfig.deviceName||detectDeviceName();
    $('#sync-last-time').textContent=formatLastSync();
    $('#settings-server').textContent=normalizedApiUrl()||'—';
    $('#settings-device-id').textContent=syncConfig.deviceId||'—';
    $('#settings-key-mask').textContent=maskKey(syncConfig.studentKey);
    if($('#sync-api-url')) $('#sync-api-url').value=syncConfig.apiUrl||'';
    if($('#sync-key')) $('#sync-key').value=syncConfig.studentKey||'';
  }
  async function syncNow({silent=false}={}){
    if(!syncReady()){
      if(!silent) showSyncMessage('Enter a valid Worker URL and Student Sync Key first.','error');
      return false;
    }
    if(!navigator.onLine){
      setSyncBadge('offline','Offline','Progress is saved locally. Sync will resume when internet returns.');
      return false;
    }
    setSyncBadge('syncing','Syncing…','Merging this device with the Alfred University cloud record.');
    try{
      const health=await apiFetch('/health');
      if(!health?.ok) throw new Error('The sync server health check failed.');
      if(health.databaseBound===false) throw new Error('The Cloudflare Worker is not connected to the D1 database.');
      if(health.schemaReady===false) throw new Error('The D1 schema is incomplete. Run the current schema.sql in the D1 Console, then try again.');
      if(Number(health.protocol)!==SYNC_PROTOCOL){
        const workerProtocol=health.protocol==null?'older/unknown':health.protocol;
        throw new Error(`Cloud Sync version mismatch. Website protocol ${SYNC_PROTOCOL}; Worker protocol ${workerProtocol}. Update both sides from the same repair package.`);
      }
      const payload={protocol:SYNC_PROTOCOL,deviceId:syncConfig.deviceId,deviceName:syncConfig.deviceName,records:recordsFromState()};
      const result=await apiFetch('/sync',{method:'POST',body:JSON.stringify(payload)});
      mergeCloudRecords(result.records||[]);
      syncConfig.connected=true;
      syncConfig.lastSync=new Date().toISOString();
      saveSyncConfig();
      refreshSyncUI();
      setSyncBadge('connected','Cloud Sync Active','This device is synchronized with your Alfred University student record.');
      if(!silent) showSyncMessage('Sync complete. This device and the cloud record are up to date.','success');
      return true;
    }catch(err){
      setSyncBadge('error','Sync Error',err.message||'Cloud sync failed.');
      if(!silent) showSyncMessage(err.message||'Cloud sync failed.','error');
      return false;
    }
  }
  function scheduleCloudSync(){
    if(!syncConfig.connected||!syncReady()) return;
    clearTimeout(syncTimer);
    syncTimer=setTimeout(()=>syncNow({silent:true}),1100);
  }
  function showSyncMessage(message,kind=''){
    const el=$('#sync-inline-message');
    if(!el) return;
    el.className=`sync-inline-message ${kind}`;
    el.textContent=message;
  }
  function generateKey(){
    const bytes=new Uint8Array(20);
    crypto.getRandomValues(bytes);
    const hex=[...bytes].map(b=>b.toString(16).padStart(2,'0').toUpperCase()).join('');
    return 'AU-'+hex.match(/.{1,4}/g).join('-');
  }
  async function copyText(text){
    try{
      await navigator.clipboard.writeText(text);
      showSyncMessage('Recovery key copied.','success');
    }catch{
      showSyncMessage('Copy failed. Select the key manually and copy it.','error');
    }
  }

  // -----------------------------
  // Standard tracker UI
  // -----------------------------
  let trackerReturnFocus=null;
  function refreshStats(){
    const m=metrics();
    $('#hero-progress-percent').textContent=`${m.coursePct}%`;
    $('#stat-course-completion').textContent=`${m.coursePct}%`;
    $('#bar-course-completion').style.width=`${m.coursePct}%`;
    $('#stat-events-complete').textContent=`${m.complete} / ${m.totalEvents}`;
    $('#stat-outcomes-complete').textContent=`${m.outcomePct}%`;
    $('#stat-needs-review').textContent=String(m.reviewCount);

    const w=currentWeek(),weekEvents=EVENTS.filter(e=>e.week===w),done=weekEvents.filter(e=>eventState(e.id).status==='complete').length;
    const pct=weekEvents.length?Math.round((done/weekEvents.length)*100):0;
    $('#current-week-title').textContent=`Week ${String(w).padStart(2,'0')} · ${WEEKS.find(x=>x.week===w)?.topic||''}`;
    $('#current-week-bar').style.width=`${pct}%`;
    $('#current-week-meta').textContent=`${done} of ${weekEvents.length} scheduled items complete this week (${pct}%).`;
  }
  function renderEvents(){
    const weekFilter=$('#progress-week-filter').value;
    const statusFilter=$('#progress-status-filter').value;
    const list=EVENTS.filter(e=>(!weekFilter||String(e.week)===weekFilter)&&(!statusFilter||eventState(e.id).status===statusFilter));
    $('#progress-event-list').innerHTML=list.map(e=>{
      const s=eventState(e.id);
      return `<article class="progress-event-row ${esc(s.status)}">
        <span class="status-dot"></span>
        <div class="progress-event-info">
          <strong>${esc(e.summary.replace(/^AU-ESET 301 \| /,''))}</strong>
          <span>${fmtDate(e.start)} · ${fmtTime(e.start)}${e.week?` · Week ${String(e.week).padStart(2,'0')}`:''}</span>
        </div>
        <div class="progress-event-actions">
          <select data-event-status="${e.id}">
            <option value="not-started" ${s.status==='not-started'?'selected':''}>Not Started</option>
            <option value="in-progress" ${s.status==='in-progress'?'selected':''}>In Progress</option>
            <option value="complete" ${s.status==='complete'?'selected':''}>Complete</option>
            <option value="review" ${s.status==='review'?'selected':''}>Needs Review</option>
          </select>
          <button class="progress-detail-button" data-open-tracker="${e.id}">Details</button>
        </div>
      </article>`;
    }).join('');
    $$('[data-event-status]').forEach(sel=>sel.addEventListener('change',()=>{
      const id=sel.dataset.eventStatus;
      eventState(id).status=sel.value;
      touch(`event:${id}`);
      persist();
    }));
    $$('[data-open-tracker]').forEach(btn=>btn.addEventListener('click',()=>openTracker(Number(btn.dataset.openTracker))));
  }
  function renderWeeks(){
    $('#weekly-mastery-list').innerHTML=WEEKS.map(w=>{
      const status=state.weeks?.[w.week]||'';
      return `<article class="mastery-week">
        <div class="mastery-week-head">
          <div><h3>Week ${String(w.week).padStart(2,'0')} · ${esc(w.topic)}</h3><p>${w.outcomes?.length||0} cumulative learning outcomes</p></div>
        </div>
        <div class="mastery-selector" data-week="${w.week}">
          <button data-mastery="green" class="${status==='green'?'active':''}">Green</button>
          <button data-mastery="yellow" class="${status==='yellow'?'active':''}">Yellow</button>
          <button data-mastery="red" class="${status==='red'?'active':''}">Red</button>
          <button data-mastery="" class="${status===''?'active':''}">Clear</button>
        </div>
      </article>`;
    }).join('');
    $$('.mastery-selector button').forEach(btn=>btn.addEventListener('click',()=>{
      const week=btn.closest('.mastery-selector').dataset.week;
      state.weeks[week]=btn.dataset.mastery;
      touch(`week:${week}`);
      persist();
    }));
  }
  function renderReadiness(){
    $$('[data-readiness]').forEach(cb=>{
      cb.checked=!!state.readiness?.[cb.dataset.readiness];
      cb.onchange=()=>{
        state.readiness[cb.dataset.readiness]=cb.checked;
        touch(`readiness:${cb.dataset.readiness}`);
        persist();
      };
    });
    const items=['common-core','project-one','role-track','professional-package','offer-standard'];
    const count=items.filter(k=>state.readiness?.[k]).length;
    const gate=$('#career-gate-status');
    const technicalReady=['common-core','project-one','role-track','professional-package'].every(k=>state.readiness?.[k]);
    gate.className=`career-gate-status ${technicalReady?'ready':'not-ready'}`;
    gate.innerHTML=technicalReady
      ? `<strong>Application Green-Light: READY</strong><br><span>The technical/professional readiness gate is satisfied. Do not resign from your current job until an actual offer also meets the offer standard.</span>`
      : `<strong>Application Green-Light: ${count}/4 technical/professional pillars complete</strong><br><span>Complete Common Core, Project 1, one role track, and the professional package before treating the bridge-job application gate as green.</span>`;
  }
  function openTracker(id){
    const e=EVENTS.find(x=>x.id===id);if(!e)return;
    const s=eventState(id);
    const outcomes=(e.outcomes||[]).map((o,i)=>`
      <label class="outcome-check ${s.review?.[i]?'review-flag':''}">
        <input type="checkbox" data-outcome="${i}" ${s.outcomes?.[i]?'checked':''}>
        <span>${esc(o)}</span>
        <span class="outcome-actions"><button type="button" class="flag-review" data-review="${i}">${s.review?.[i]?'Remove Review Flag':'Flag for Review'}</button></span>
      </label>`).join('');
    $('#tracker-modal-content').innerHTML=`
      <div class="tracker-event-top">
        <div>
          <div class="modal-date">${fmtDate(e.start)} · ${fmtTime(e.start)}${e.week?` · Week ${String(e.week).padStart(2,'0')}`:''}</div>
          <h2 id="tracker-modal-title">${esc(e.summary.replace(/^AU-ESET 301 \| /,''))}</h2>
        </div>
        <div class="tracker-status-control">
          <label>Status</label>
          <select id="modal-event-status">
            <option value="not-started" ${s.status==='not-started'?'selected':''}>Not Started</option>
            <option value="in-progress" ${s.status==='in-progress'?'selected':''}>In Progress</option>
            <option value="complete" ${s.status==='complete'?'selected':''}>Complete</option>
            <option value="review" ${s.status==='review'?'selected':''}>Needs Review</option>
          </select>
        </div>
      </div>
      <div class="modal-section">
        <h3>Learning Outcomes</h3>
        ${outcomes||'<p>No outcome checklist is attached to this event.</p>'}
      </div>
      <div class="modal-section tracker-notes">
        <h3>Private Notes</h3>
        <textarea id="tracker-notes" placeholder="Optional: one short note about what is still weak, what failed, or what to revisit.">${esc(s.notes||'')}</textarea>
      </div>
      <div class="tracker-modal-save">
        <button class="button green" id="save-tracker-detail">Save Progress</button>
      </div>`;
    const modal=$('#tracker-modal');
    trackerReturnFocus=document.activeElement;
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
    requestAnimationFrame(()=>$('.modal-close',modal)?.focus());
    $$('[data-review]').forEach(btn=>btn.addEventListener('click',()=>{
      const i=btn.dataset.review;
      s.review[i]=!s.review[i];
      touch(`event:${id}`);
      persist();
      openTracker(id);
    }));
    $('#save-tracker-detail').onclick=()=>{
      s.status=$('#modal-event-status').value;
      $$('[data-outcome]').forEach(cb=>s.outcomes[cb.dataset.outcome]=cb.checked);
      s.notes=$('#tracker-notes').value.trim();
      touch(`event:${id}`);
      persist();
      closeTracker();
    };
  }
  function closeTracker(){
    const modal=$('#tracker-modal');
    if(!modal.classList.contains('open')) return;
    modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';
    const restore=trackerReturnFocus; trackerReturnFocus=null;
    if(restore?.focus) restore.focus();
  }
  function trapTrackerFocus(e){
    if(e.key!=='Tab') return;
    const modal=$('#tracker-modal');
    const card=$('.tracker-modal-card',modal);
    const items=$$('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',card).filter(el=>el.offsetParent!==null);
    if(!items.length) return;
    const first=items[0],last=items[items.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
  $$('[data-close-tracker-modal]').forEach(x=>x.addEventListener('click',closeTracker));
  document.addEventListener('keydown',e=>{
    if(!$('#tracker-modal')?.classList.contains('open')) return;
    if(e.key==='Escape') closeTracker(); else trapTrackerFocus(e);
  });

  function exportBackup(){
    const backup={version:3,progress:state};
    const blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    const stamp=new Date().toISOString().slice(0,10);
    a.download=`Alfred University Progress Backup ${stamp}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }
  function importBackup(file){
    const reader=new FileReader();
    reader.onload=()=>{
      try{
        const data=JSON.parse(reader.result);
        const imported=data?.progress||data;
        if(!imported||typeof imported!=='object') throw new Error('Invalid backup');
        state=migrate(imported);
        if(data?.sync?.apiUrl) syncConfig.apiUrl=data.sync.apiUrl;
        if(data?.sync?.studentKey) syncConfig.studentKey=data.sync.studentKey;
        saveSyncConfig();
        persist({skipSync:true});
        refreshSyncUI();
        alert('Progress backup imported successfully.');
      }catch{
        alert('That file could not be imported as an Alfred University progress backup.');
      }
    };
    reader.readAsText(file);
  }

  $('#export-progress').addEventListener('click',exportBackup);
  $('#import-progress').addEventListener('change',e=>{if(e.target.files?.[0])importBackup(e.target.files[0]);});
  $('#reset-progress').addEventListener('click',()=>{
    if(confirm('Reset all Alfred University progress on this device? This does not erase the cloud record unless you use Erase Cloud Record.')){
      state=blankState();persist();
    }
  });

  [...new Set(EVENTS.map(e=>e.week).filter(Boolean))].sort((a,b)=>a-b).forEach(w=>{
    $('#progress-week-filter').insertAdjacentHTML('beforeend',`<option value="${w}">Week ${String(w).padStart(2,'0')}</option>`);
  });
  $('#progress-week-filter').addEventListener('change',renderEvents);
  $('#progress-status-filter').addEventListener('change',renderEvents);

  // -----------------------------
  // Cloud Sync UI events
  // -----------------------------
  $('#generate-sync-key')?.addEventListener('click',()=>{
    syncConfig.studentKey=generateKey();
    saveSyncConfig();refreshSyncUI();
    showSyncMessage('New recovery key generated. Save a copy before connecting a second device.','success');
  });
  $('#copy-sync-key')?.addEventListener('click',()=>copyText($('#sync-key').value||syncConfig.studentKey||''));
  $('#copy-sync-key-connected')?.addEventListener('click',()=>copyText(syncConfig.studentKey||''));
  $('#toggle-sync-key')?.addEventListener('click',()=>{
    const field=$('#sync-key');
    field.type=field.type==='password'?'text':'password';
    $('#toggle-sync-key').textContent=field.type==='password'?'Show':'Hide';
  });
  $('#connect-sync')?.addEventListener('click',async()=>{
    syncConfig.apiUrl=$('#sync-api-url').value.trim();
    syncConfig.studentKey=$('#sync-key').value.trim().toUpperCase();
    saveSyncConfig();
    const ok=await syncNow();
    if(ok) refreshSyncUI();
  });
  $('#sync-now')?.addEventListener('click',()=>syncNow());
  $('#show-sync-settings')?.addEventListener('click',()=>$('#sync-settings-drawer').classList.remove('hidden'));
  $('#hide-sync-settings')?.addEventListener('click',()=>$('#sync-settings-drawer').classList.add('hidden'));
  $('#disconnect-sync')?.addEventListener('click',()=>{
    syncConfig.connected=false;
    saveSyncConfig();
    $('#sync-settings-drawer').classList.add('hidden');
    refreshSyncUI();
    showSyncMessage('This device is disconnected. Local progress is unchanged.','success');
  });
  $('#erase-cloud-record')?.addEventListener('click',async()=>{
    if(!confirm('Permanently erase the Alfred University cloud progress record for this sync key? Local progress on this device will remain.'))return;
    try{
      await apiFetch('/sync',{method:'DELETE'});
      syncConfig.connected=false;
      syncConfig.lastSync=null;
      saveSyncConfig();
      $('#sync-settings-drawer').classList.add('hidden');
      refreshSyncUI();
      showSyncMessage('Cloud record erased. Local progress remains on this device.','success');
    }catch(err){
      showSyncMessage(err.message||'Cloud record could not be erased.','error');
    }
  });

  window.addEventListener('online',()=>{refreshSyncUI();if(syncConfig.connected)syncNow({silent:true});});
  window.addEventListener('offline',refreshSyncUI);

  function refreshAll(){
    refreshStats();renderEvents();renderWeeks();renderReadiness();refreshSyncUI();
  }
  refreshAll();

  // Pull/merge automatically when the Progress page opens.
  if(syncConfig.connected&&syncReady()&&navigator.onLine){
    setTimeout(()=>syncNow({silent:true}),350);
  }
})();
