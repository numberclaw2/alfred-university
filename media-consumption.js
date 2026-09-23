(()=>{
  const PROGRESS_KEY='alfred-u-progress-v2';
  const SYNC_KEY='alfred-u-sync-config-v1';
  const DEVICE='media-consumption-v16-3';
  const boundRoots=new WeakSet();
  const esc=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

  function load(){
    try{return JSON.parse(localStorage.getItem(PROGRESS_KEY)||'{}')||{};}catch{return {};}
  }
  function weekRecord(p,week){
    const raw=p.weeks?.[week]??p.weeks?.[String(week)];
    return typeof raw==='string'?{mastery:raw,assessments:{},labs:{},learning:{}}:{...(raw||{}),assessments:raw?.assessments||{},labs:raw?.labs||{},learning:raw?.learning||{}};
  }
  function aliasMap(){return window.ALFRED_CURRICULUM?.teachingResourceIntegration?.canonicalAliases||{};}
  function canonicalSource(source){
    const aliases=aliasMap(),seen=new Set();let current=String(source||'unknown');
    while(aliases[current]&&!seen.has(current)){seen.add(current);current=String(aliases[current]);}
    return current;
  }
  function equivalentMediaIds(id){
    const m=String(id||'').match(/^media:(\d+):(.+)$/);if(!m)return [String(id||'')];
    const week=Number(m[1])||0,canonical=canonicalSource(m[2]),ids=[`media:${week}:${canonical}`];
    Object.keys(aliasMap()).forEach(alias=>{if(canonicalSource(alias)===canonical)ids.push(`media:${week}:${alias}`);});
    return [...new Set(ids)];
  }
  function state(week,id){
    const p=load(),w=weekRecord(p,week),rows=w.learning?.mediaConsumption||{};
    for(const candidate of equivalentMediaIds(id)){const row=rows[candidate];if(row&&row.done===true)return row;}
    return null;
  }
  function label(kind,done=false){
    const k=String(kind||'reference').toLowerCase();
    const pair=k==='video'?['Mark watched','Watched']:k==='reading'||k==='study-guide'||k==='literature'?['Mark read','Read']:k==='interactive'?['Mark used','Used']:['Mark reviewed','Reviewed'];
    return pair[done?1:0];
  }
  function mediaId(assignmentWeek,source){return `media:${Number(assignmentWeek)||0}:${canonicalSource(source)}`;}
  function guideId(recordId){return `guide:${String(recordId||'unknown')}`;}
  function controlHTML({week,id,kind='reference',compact=false}={}){
    const done=!!state(week,id),text=label(kind,done);
    return `<label class="media-consumption-check${done?' is-done':''}${compact?' compact':''}" data-media-consumption-control><input type="checkbox" data-media-consumption-toggle data-media-week="${esc(Number(week)||0)}" data-media-id="${esc(id)}" data-media-kind="${esc(kind)}"${done?' checked':''}><span><strong>${done?'✓ ':''}${esc(text)}</strong>${compact?'':`<small>Resource tracking only · mastery is checked separately.</small>`}</span></label>`;
  }
  function summaryHTML(week,ids){
    const encoded=encodeURIComponent(JSON.stringify(ids||[]));
    return `<div class="media-consumption-summary" data-media-consumption-summary data-media-week="${esc(Number(week)||0)}" data-media-consumption-ids="${esc(encoded)}" aria-live="polite"></div>`;
  }
  async function pushWeek(week,w,updatedAt){
    try{
      const config=JSON.parse(localStorage.getItem(SYNC_KEY)||'{}');
      if(!config.connected||!navigator.onLine)return;
      let api=String(config.apiUrl||'').trim().replace(/\/+$/,'').replace(/\/(?:health|sync)$/i,'');
      const studentKey=String(config.studentKey||'').trim().toUpperCase();
      if(!/^https:\/\//.test(api)||!/^AU-(?:[A-F0-9]{4}-){9}[A-F0-9]{4}$/.test(studentKey))return;
      const deviceId=config.deviceId||DEVICE;
      await fetch(api+'/sync',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+studentKey},body:JSON.stringify({protocol:2,deviceId,deviceName:config.deviceName||'Alfred Media Checklist',records:[{key:`week:${week}`,value:w,updatedAt,deviceId}]})});
    }catch{}
  }
  function set(week,id,kind,done){
    const p=load();p.weeks=p.weeks||{};p.recordTimes=p.recordTimes||{};
    const w=weekRecord(p,week),learning={...(w.learning||{})},rows={...(learning.mediaConsumption||{})};
    const now=Date.now(),iso=new Date(now).toISOString();
    equivalentMediaIds(id).forEach(candidate=>delete rows[candidate]);
    if(done)rows[id]={done:true,kind:String(kind||'reference'),updatedAt:iso};
    learning.mediaConsumption=rows;learning.updatedAt=iso;w.learning=learning;p.weeks[week]=w;p.recordTimes[`week:${week}`]=now;p.updatedAt=iso;
    try{localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));}catch{return false;}
    pushWeek(week,w,now);
    window.dispatchEvent(new CustomEvent('alfred-media-consumption-updated',{detail:{week:Number(week),id,kind,done:!!done}}));
    refresh(document);
    window.dispatchEvent(new CustomEvent('alfred-progress-updated'));
    return true;
  }
  function refresh(root=document){
    root.querySelectorAll?.('[data-media-consumption-toggle]').forEach(input=>{
      const week=Number(input.dataset.mediaWeek),id=input.dataset.mediaId,kind=input.dataset.mediaKind||'reference',done=!!state(week,id);
      input.checked=done;
      const labelEl=input.closest('[data-media-consumption-control]');
      labelEl?.classList.toggle('is-done',done);
      const strong=labelEl?.querySelector('strong');if(strong)strong.textContent=`${done?'✓ ':''}${label(kind,done)}`;
    });
    root.querySelectorAll?.('[data-media-consumption-summary]').forEach(box=>{
      let ids=[];try{ids=JSON.parse(decodeURIComponent(box.dataset.mediaConsumptionIds||'%5B%5D'));}catch{}
      const week=Number(box.dataset.mediaWeek),done=ids.filter(id=>state(week,id)).length,total=ids.length;
      box.innerHTML=total?`<strong>${done} of ${total} resource${total===1?'':'s'} marked watched/read/reviewed</strong><span>${done===total?'✓ Checklist caught up.':'Use these check marks as your consumption tracker; mastery remains separate.'}</span>`:'<strong>No resources to track this week.</strong>';
      box.classList.toggle('is-complete',total>0&&done===total);
    });
  }
  function bind(root=document){
    if(!root||boundRoots.has(root))return;boundRoots.add(root);
    root.addEventListener('change',event=>{
      const input=event.target.closest?.('[data-media-consumption-toggle]');if(!input)return;
      const ok=set(Number(input.dataset.mediaWeek),input.dataset.mediaId,input.dataset.mediaKind,input.checked);
      if(!ok){input.checked=!input.checked;refresh(root);}
    });
    refresh(root);
  }
  window.AlfredMediaConsumption={mediaId,guideId,state,label,controlHTML,summaryHTML,set,refresh,bind};
})();
