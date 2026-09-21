(() => {
  const STUDY_KEY = 'alfred-u-study-v13';
  const PREFIX = 'parking:';

  const nowIso = ms => new Date(ms).toISOString();
  const parseTime = value => {
    const n = Date.parse(String(value || ''));
    return Number.isFinite(n) ? n : 0;
  };
  const newId = () => crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const cleanKind = value => value === 'site' ? 'site' : 'curiosity';
  const cleanWeek = value => {
    const n = Number(value);
    return Number.isFinite(n) && n > 0 ? n : null;
  };
  const same = (a,b) => {
    try{return JSON.stringify(a) === JSON.stringify(b);}catch{return false;}
  };

  function normalizeStudyState(input){
    const state = input && typeof input === 'object' && !Array.isArray(input) ? {...input} : {};
    state.parking = Array.isArray(state.parking) ? state.parking.slice() : [];
    state.parkingTombstones = state.parkingTombstones && typeof state.parkingTombstones === 'object' && !Array.isArray(state.parkingTombstones) ? {...state.parkingTombstones} : {};
    state.parkingRecordTimes = state.parkingRecordTimes && typeof state.parkingRecordTimes === 'object' && !Array.isArray(state.parkingRecordTimes) ? {...state.parkingRecordTimes} : {};

    const active=[];
    const seen=new Set();
    state.parking.forEach(raw=>{
      if(!raw || typeof raw !== 'object') return;
      const id=String(raw.id || '').trim() || newId();
      if(seen.has(id)) return;
      seen.add(id);
      const createdAt=String(raw.createdAt || raw.at || '').trim() || nowIso(Date.now());
      const updatedAt=String(raw.updatedAt || createdAt).trim() || createdAt;
      const item={...raw,id,text:String(raw.text||'').trim(),kind:cleanKind(raw.kind),week:cleanWeek(raw.week),at:String(raw.at||createdAt),createdAt,updatedAt};
      if(!item.text) return;
      const key=PREFIX+id;
      if(Number(state.parkingRecordTimes[key]||0)<=0) state.parkingRecordTimes[key]=parseTime(updatedAt)||parseTime(createdAt)||Date.now();
      active.push(item);
    });

    Object.entries(state.parkingTombstones).forEach(([rawId,raw])=>{
      const id=String(raw?.id || rawId || '').trim();
      if(!id){delete state.parkingTombstones[rawId];return;}
      const deletedAt=String(raw?.deletedAt || raw?.updatedAt || '').trim() || nowIso(Date.now());
      const updatedAt=String(raw?.updatedAt || deletedAt).trim() || deletedAt;
      if(rawId!==id) delete state.parkingTombstones[rawId];
      state.parkingTombstones[id]={id,deleted:true,deletedAt,updatedAt};
      const key=PREFIX+id;
      if(Number(state.parkingRecordTimes[key]||0)<=0) state.parkingRecordTimes[key]=parseTime(updatedAt)||Date.now();
    });

    // A local tombstone is authoritative for that ID until a newer cloud record wins.
    state.parking = active.filter(item=>!state.parkingTombstones[item.id]);
    return state;
  }

  function loadLocalStorage(){
    let raw={};
    try{raw=JSON.parse(localStorage.getItem(STUDY_KEY)||'null')||{};}catch{}
    const state=normalizeStudyState(raw);
    try{localStorage.setItem(STUDY_KEY,JSON.stringify(state));}catch{}
    return state;
  }

  function saveLocalStorage(state){
    const next=normalizeStudyState(state);
    localStorage.setItem(STUDY_KEY,JSON.stringify(next));
    try{window.dispatchEvent(new CustomEvent('alfred-parking-updated'));}catch{}
    return next;
  }

  function recordsFromState(input,deviceId='unknown'){
    const state=normalizeStudyState(input);
    const records=[];
    state.parking.forEach(item=>{
      const key=PREFIX+item.id;
      const updatedAt=Number(state.parkingRecordTimes[key]||0);
      if(updatedAt>0) records.push({key,value:item,updatedAt,deviceId});
    });
    Object.entries(state.parkingTombstones).forEach(([id,tombstone])=>{
      const key=PREFIX+id;
      const updatedAt=Number(state.parkingRecordTimes[key]||0);
      if(updatedAt>0) records.push({key,value:tombstone,updatedAt,deviceId});
    });
    return records;
  }

  function recordsFromLocalStorage(deviceId='unknown'){
    return recordsFromState(loadLocalStorage(),deviceId);
  }

  function currentRecord(state,id){
    const tomb=state.parkingTombstones?.[id];
    if(tomb) return tomb;
    return (state.parking||[]).find(item=>String(item.id)===id) || null;
  }

  function applyRecords(input,records){
    const state=normalizeStudyState(input);
    let changed=false;
    (records||[]).forEach(rec=>{
      if(!rec || typeof rec.key!=='string' || !rec.key.startsWith(PREFIX)) return;
      const id=rec.key.slice(PREFIX.length).trim();
      if(!id) return;
      const cloudTime=Number(rec.updatedAt||0);
      const localTime=Number(state.parkingRecordTimes[rec.key]||0);
      if(cloudTime<=0 || cloudTime<localTime) return;
      const value=rec.value && typeof rec.value==='object' ? rec.value : {};
      const existing=currentRecord(state,id);
      if(cloudTime===localTime && same(existing,value)) return;

      if(value.deleted===true){
        const deletedAt=String(value.deletedAt || value.updatedAt || '').trim() || nowIso(cloudTime);
        const updatedAt=String(value.updatedAt || deletedAt).trim() || deletedAt;
        state.parking=state.parking.filter(item=>String(item.id)!==id);
        state.parkingTombstones[id]={id,deleted:true,deletedAt,updatedAt};
      }else{
        const text=String(value.text||'').trim();
        if(!text) return;
        const createdAt=String(value.createdAt || value.at || '').trim() || nowIso(cloudTime);
        const updatedAt=String(value.updatedAt || '').trim() || nowIso(cloudTime);
        const item={...value,id,text,kind:cleanKind(value.kind),week:cleanWeek(value.week),at:String(value.at||createdAt),createdAt,updatedAt};
        const index=state.parking.findIndex(row=>String(row.id)===id);
        if(index>=0) state.parking[index]=item; else state.parking.push(item);
        delete state.parkingTombstones[id];
      }
      state.parkingRecordTimes[rec.key]=cloudTime;
      changed=true;
    });
    return {state:normalizeStudyState(state),changed};
  }

  function applyRecordsToLocalStorage(records){
    const before=loadLocalStorage();
    const result=applyRecords(before,records);
    if(result.changed) saveLocalStorage(result.state);
    return result;
  }

  function addItem(input,text,kind='curiosity',week=null){
    const state=normalizeStudyState(input);
    const cleanText=String(text||'').trim();
    if(!cleanText) return {state,item:null,record:null};
    const id=newId();
    const stamp=Date.now();
    const iso=nowIso(stamp);
    const item={id,text:cleanText,kind:cleanKind(kind),week:cleanWeek(week),at:iso,createdAt:iso,updatedAt:iso};
    state.parking.push(item);
    delete state.parkingTombstones[id];
    state.parkingRecordTimes[PREFIX+id]=stamp;
    return {state,item,record:{key:PREFIX+id,value:item,updatedAt:stamp}};
  }

  function removeItem(input,idValue){
    const state=normalizeStudyState(input);
    const id=String(idValue||'').trim();
    if(!id) return {state,tombstone:null,record:null};
    const existed=state.parking.some(item=>String(item.id)===id) || !!state.parkingTombstones[id];
    if(!existed) return {state,tombstone:null,record:null};
    const stamp=Date.now();
    const iso=nowIso(stamp);
    const tombstone={id,deleted:true,deletedAt:iso,updatedAt:iso};
    state.parking=state.parking.filter(item=>String(item.id)!==id);
    state.parkingTombstones[id]=tombstone;
    state.parkingRecordTimes[PREFIX+id]=stamp;
    return {state,tombstone,record:{key:PREFIX+id,value:tombstone,updatedAt:stamp}};
  }

  window.AlfredParkingSync={
    studyKey:STUDY_KEY,
    prefix:PREFIX,
    normalizeStudyState,
    loadLocalStorage,
    saveLocalStorage,
    recordsFromState,
    recordsFromLocalStorage,
    applyRecords,
    applyRecordsToLocalStorage,
    addItem,
    removeItem
  };
})();
