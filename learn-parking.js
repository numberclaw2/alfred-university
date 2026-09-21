(() => {
  const STUDY_KEY='alfred-u-study-v13';
  const SYNC_KEY='alfred-u-sync-config-v1';
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt=v=>{try{return new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric'}).format(new Date(v));}catch{return '';}};
  const parking=()=>window.AlfredParkingSync;
  let state=parking()?.loadLocalStorage?.()||{parking:[],parkingTombstones:{},parkingRecordTimes:{}};
  let returnFocus=null;
  let syncing=false;

  function currentWeek(){
    const selected=Number($('#classroom-week')?.value||0);
    if(selected>0)return selected;
    const query=Number(new URLSearchParams(location.search).get('week')||0);
    return query>0?query:null;
  }
  function syncConfig(){
    try{return JSON.parse(localStorage.getItem(SYNC_KEY)||'null')||{};}catch{return {};}
  }
  function validConfig(cfg){
    const api=String(cfg.apiUrl||'').trim();
    const key=String(cfg.studentKey||'').trim().toUpperCase();
    return !!(cfg.connected&&navigator.onLine&&/^https:\/\//i.test(api)&&/^AU-(?:[A-F0-9]{4}-){9}[A-F0-9]{4}$/.test(key));
  }
  function apiBase(cfg){return String(cfg.apiUrl||'').trim().replace(/\/+$/,'').replace(/\/(?:health|sync)$/i,'');}
  function stillConnected(cfg){
    const now=syncConfig();
    return now.connected&&now.apiUrl===cfg.apiUrl&&now.studentKey===cfg.studentKey;
  }
  function save(next){
    state=parking()?.saveLocalStorage?.(next)||next;
    render();
  }
  function updateCount(){
    const count=(state.parking||[]).length;
    const badge=$('#classroom-parking-count');
    if(!badge)return;
    badge.textContent=String(count);
    badge.dataset.empty=String(count===0);
    $('#classroom-parking-toggle')?.setAttribute('aria-label',count?`Open Parking Lot, ${count} saved item${count===1?'':'s'}`:'Open Parking Lot');
  }
  function render(){
    state=parking()?.loadLocalStorage?.()||state;
    updateCount();
    const out=$('#learn-parking-list');
    if(!out)return;
    const list=(state.parking||[]).slice().sort((a,b)=>Date.parse(b.updatedAt||b.at||0)-Date.parse(a.updatedAt||a.at||0));
    if(!list.length){
      out.innerHTML='<div class="learn-parking-empty"><strong>Parking lot is empty.</strong><span>Capture a side question or site issue without leaving the lesson.</span></div>';
      return;
    }
    out.innerHTML=list.map(item=>{
      const site=item.kind==='site';
      const when=fmt(item.updatedAt||item.at||item.createdAt);
      const week=item.week?` · Week ${Number(item.week)}`:'';
      return `<article class="learn-parking-item${site?' site':''}" data-parking-id="${esc(item.id)}"><div class="learn-parking-item-main"><span class="learn-parking-kind">${site?'Site issue · fix later':'Curiosity · explore later'}</span><strong>${esc(item.text)}</strong><span class="learn-parking-meta">Saved ${esc(when)}${esc(week)}</span></div><div class="learn-parking-actions">${site?'<span class="learn-parking-meta">Builder Mode</span>':`<a href="search.html?q=${encodeURIComponent(item.text)}">Explore later →</a>`}<button type="button" data-learn-parking-done>Done</button></div></article>`;
    }).join('');
    $$('[data-learn-parking-done]',out).forEach(button=>button.addEventListener('click',()=>remove(button.closest('[data-parking-id]')?.dataset.parkingId)));
  }
  async function pushRecord(record){
    const cfg=syncConfig();
    if(!record||!validConfig(cfg))return false;
    try{
      const key=String(cfg.studentKey).trim().toUpperCase();
      const res=await fetch(apiBase(cfg)+'/sync',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer '+key},body:JSON.stringify({protocol:2,deviceId:cfg.deviceId||'learn-page',deviceName:cfg.deviceName||'Classroom',records:[{...record,deviceId:cfg.deviceId||'learn-page'}]})});
      return res.ok;
    }catch{return false;}
  }
  async function syncCloud(showStatus=false){
    if(syncing)return;
    const cfg=syncConfig();
    if(!validConfig(cfg)){if(showStatus)setStatus(navigator.onLine?'Saved locally. Connect Cloud Sync to carry it across devices.':'Offline — saved on this device.');return;}
    syncing=true;if(showStatus)setStatus('Syncing parking lot…');
    try{
      state=parking()?.loadLocalStorage?.()||state;
      const did=cfg.deviceId||'learn-page';
      const records=parking()?.recordsFromState?.(state,did)||[];
      const key=String(cfg.studentKey).trim().toUpperCase();
      const res=await fetch(apiBase(cfg)+'/sync',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer '+key},body:JSON.stringify({protocol:2,deviceId:did,deviceName:cfg.deviceName||'Classroom',records})});
      if(!res.ok)throw new Error('sync failed');
      const data=await res.json();
      if(!stillConnected(cfg))return;
      const merged=parking()?.applyRecords?.(state,data.records||[]);
      if(merged?.state){state=merged.state;if(merged.changed)parking().saveLocalStorage(state);}
      render();
      if(showStatus)setStatus('Parking lot synced.');
    }catch{if(showStatus)setStatus('Saved locally. Cloud Sync will retry later.');}
    finally{syncing=false;}
  }
  function setStatus(text){const el=$('#learn-parking-status');if(el)el.textContent=text||'';}
  async function add(text,kind){
    const clean=String(text||'').trim();if(!clean)return;
    const result=parking()?.addItem?.(state,clean,kind,currentWeek());
    if(!result?.state)return;
    state=result.state;save(state);
    const input=$(kind==='site'?'#learn-parking-site-input':'#learn-parking-curiosity-input');if(input)input.value='';
    setStatus('Saved.');
    if(result.record){const ok=await pushRecord(result.record);if(ok)setStatus('Saved and synced.');else if(validConfig(syncConfig()))setStatus('Saved locally. Cloud Sync will retry later.');}
  }
  async function remove(id){
    const result=parking()?.removeItem?.(state,id);if(!result?.state)return;
    state=result.state;save(state);setStatus('Removed.');
    if(result.record){const ok=await pushRecord(result.record);if(ok)setStatus('Removed and synced.');else if(validConfig(syncConfig()))setStatus('Removed locally. Cloud Sync will retry later.');}
  }
  function openDialog(){
    const dialog=$('#learn-parking-dialog');if(!dialog)return;
    returnFocus=document.activeElement;
    render();setStatus('');
    if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');
    requestAnimationFrame(()=>$('#learn-parking-curiosity-input')?.focus());
    syncCloud(true);
  }
  function closeDialog(){
    const dialog=$('#learn-parking-dialog');if(!dialog)return;
    if(typeof dialog.close==='function'&&dialog.open)dialog.close();else dialog.removeAttribute('open');
    returnFocus?.focus?.();
  }
  function install(){
    const actions=$('.classroom-view-actions');
    if(actions&&!$('#classroom-parking-toggle')){
      const button=document.createElement('button');
      button.type='button';button.id='classroom-parking-toggle';button.className='study-tool-toggle classroom-parking-button';button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-controls','learn-parking-dialog');
      button.innerHTML='Parking Lot <span class="classroom-parking-count" id="classroom-parking-count" data-empty="true">0</span>';
      const glossary=actions.querySelector('.dictionary-button');actions.insertBefore(button,glossary||null);
      button.addEventListener('click',openDialog);
    }
    if(!$('#learn-parking-dialog')){
      const dialog=document.createElement('dialog');dialog.id='learn-parking-dialog';dialog.className='learn-parking-dialog';dialog.setAttribute('aria-labelledby','learn-parking-title');
      dialog.innerHTML=`<div class="learn-parking-shell"><header class="learn-parking-head"><div><div class="eyebrow">Stay on the lesson</div><h2 id="learn-parking-title">Parking Lot</h2><p>Capture the thought now. Return to it later without breaking the current learning path.</p></div><button class="learn-parking-close" type="button" aria-label="Close Parking Lot">×</button></header><section class="learn-parking-capture" aria-label="Add a parking-lot item"><article><h3>Curiosity</h3><p>A technical question you want to explore later.</p><form id="learn-parking-curiosity-form"><label for="learn-parking-curiosity-input">Question or side topic</label><div><input id="learn-parking-curiosity-input" maxlength="500" autocomplete="off" placeholder="Example: Why does an op-amp saturate?"><button class="button green" type="submit">Park It</button></div></form></article><article class="site"><h3>Site issue</h3><p>A website problem or improvement to handle later in Builder Mode.</p><form id="learn-parking-site-form"><label for="learn-parking-site-input">Issue or improvement</label><div><input id="learn-parking-site-input" maxlength="500" autocomplete="off" placeholder="Example: This Week 8 figure is hard to read"><button class="button outline-green" type="submit">Park Issue</button></div></form></article></section><section class="learn-parking-body"><div class="learn-parking-list-head"><h3>Parked for later</h3><span class="learn-parking-sync-note">Cloud Sync carries these across devices.</span></div><div id="learn-parking-list"></div><p class="learn-parking-status" id="learn-parking-status" role="status" aria-live="polite"></p></section></div>`;
      document.body.appendChild(dialog);
      dialog.querySelector('.learn-parking-close')?.addEventListener('click',closeDialog);
      dialog.addEventListener('click',e=>{if(e.target===dialog)closeDialog();});
      dialog.addEventListener('close',()=>returnFocus?.focus?.());
      $('#learn-parking-curiosity-form')?.addEventListener('submit',e=>{e.preventDefault();add($('#learn-parking-curiosity-input')?.value,'curiosity');});
      $('#learn-parking-site-form')?.addEventListener('submit',e=>{e.preventDefault();add($('#learn-parking-site-input')?.value,'site');});
    }
    render();
    syncCloud(false);
  }

  window.addEventListener('storage',e=>{if(e.key===STUDY_KEY){state=parking()?.loadLocalStorage?.()||state;render();}});
  window.addEventListener('alfred-parking-updated',()=>{state=parking()?.loadLocalStorage?.()||state;render();});
  window.addEventListener('online',()=>syncCloud(false));
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
})();
