(()=>{
  const DB_NAME='alfred-private-ceta-guide-v1';
  const STORE='files';
  const GUIDE_KEY='associate-cet-sixth-edition';
  const VERIFIED_OFFSET=Number(window.ALFRED_CETA_STUDY_GUIDE?.privateCopy?.verifiedCopyPdfPageOffset??10);
  let cachedState=null;

  function openDb(){return new Promise((resolve,reject)=>{const req=indexedDB.open(DB_NAME,1);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORE))db.createObjectStore(STORE,{keyPath:'id'});};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
  async function getRecord(){try{const db=await openDb();return await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly'),req=tx.objectStore(STORE).get(GUIDE_KEY);req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>reject(req.error);});}catch{return null;}}
  async function putRecord(value){const db=await openDb();return await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(value);tx.oncomplete=()=>resolve(true);tx.onerror=()=>reject(tx.error);});}
  async function deleteRecord(){try{const db=await openDb();return await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).delete(GUIDE_KEY);tx.oncomplete=()=>resolve(true);tx.onerror=()=>reject(tx.error);});}catch{return false;}}
  async function state(){if(cachedState)return cachedState;const r=await getRecord();cachedState={connected:!!r,name:r?.name||'',offset:Number(r?.offset??VERIFIED_OFFSET),size:Number(r?.size||0)};return cachedState;}
  async function refreshControls(){const s=await state();document.querySelectorAll('[data-private-guide-state]').forEach(el=>{el.textContent=s.connected?`Private copy connected on this device${s.name?` · ${s.name}`:''}`:'Private copy not connected on this device';});document.querySelectorAll('[data-private-guide-open]').forEach(el=>{el.hidden=!s.connected;el.disabled=!s.connected;});document.querySelectorAll('[data-private-guide-forget]').forEach(el=>{el.hidden=!s.connected;});document.querySelectorAll('[data-private-guide-choose]').forEach(el=>{el.textContent=s.connected?'Replace private PDF on this device':'Connect private PDF on this device';});}
  function chooseFile(){return new Promise(resolve=>{const input=document.createElement('input');input.type='file';input.accept='application/pdf,.pdf';input.hidden=true;document.body.appendChild(input);input.addEventListener('change',()=>{const file=input.files?.[0]||null;input.remove();resolve(file);},{once:true});input.addEventListener('cancel',()=>{input.remove();resolve(null);},{once:true});input.click();});}
  async function connect(){const file=await chooseFile();if(!file)return false;if(file.type&&file.type!=='application/pdf'&&!/\.pdf$/i.test(file.name||''))return false;await putRecord({id:GUIDE_KEY,name:file.name||'Associate CET Study Guide.pdf',size:file.size||0,type:file.type||'application/pdf',offset:VERIFIED_OFFSET,blob:file,updatedAt:new Date().toISOString(),private:true});cachedState=null;await refreshControls();return true;}
  async function forget(){await deleteRecord();cachedState=null;await refreshControls();}
  async function openPrintedPage(printedPage){const popup=window.open('about:blank','_blank');const record=await getRecord();if(!record?.blob){popup?.close();cachedState=null;await refreshControls();return false;}const pdfPage=Math.max(1,Number(printedPage)||1)+Number(record.offset??VERIFIED_OFFSET);const url=URL.createObjectURL(record.blob)+`#page=${pdfPage}`;if(popup){popup.opener=null;popup.location.replace(url);}else window.location.href=url;setTimeout(()=>URL.revokeObjectURL(url.split('#')[0]),120000);return true;}
  document.addEventListener('click',async event=>{const choose=event.target.closest('[data-private-guide-choose]');if(choose){event.preventDefault();choose.disabled=true;try{await connect();}finally{choose.disabled=false;}return;}const forgetBtn=event.target.closest('[data-private-guide-forget]');if(forgetBtn){event.preventDefault();await forget();return;}const open=event.target.closest('[data-private-guide-open]');if(open){event.preventDefault();await openPrintedPage(open.dataset.printedPage);}});
  document.addEventListener('DOMContentLoaded',refreshControls,{once:true});
  window.addEventListener('pageshow',refreshControls);
  window.AlfredPrivateCetaGuide={state,connect,forget,openPrintedPage,refreshControls,storage:'IndexedDB device-local only',cloudSynced:false,serviceWorkerCached:false};
})();

/* v16.3.59 — Study Guide context parity on the Study surface.
   Classroom already shows estimated time and after-reading action. Study now does too.
*/
(()=>{
  const SG=window.ALFRED_CETA_STUDY_GUIDE||{};
  if(document.body?.dataset?.page!=='study'||!Array.isArray(SG.records))return;
  const normalize=s=>String(s||'').replace(/\s+/g,' ').trim();
  const titleFor=r=>`Associate CET Study Guide · Chapter ${r.chapter} · ${SG.pageLabel?.(r)||''}`;

  function recordForCard(card){
    const title=normalize(card.querySelector('h4')?.textContent);
    return SG.records.find(r=>normalize(titleFor(r))===title)||null;
  }

  function enhance(){
    document.querySelectorAll('.study-media-card.study-guide-card').forEach(card=>{
      if(card.dataset.cetaContextEnhanced==='16.3.59')return;
      const r=recordForCard(card);
      if(!r)return;
      const small=card.querySelector('small');
      if(Number(r.estimatedMinutes)>0&&!card.querySelector('.study-guide-time')){
        const p=document.createElement('p');
        p.className='study-guide-time';
        p.innerHTML=`<strong>Estimated time:</strong> ~${Number(r.estimatedMinutes)} min`;
        small?.insertAdjacentElement('afterend',p);
      }
      if(r.after&&!card.querySelector('.study-guide-after')){
        const p=document.createElement('p');
        p.className='study-guide-after';
        p.innerHTML=`<strong>After reading:</strong> ${String(r.after).replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]))}`;
        const before=card.querySelector('.study-guide-authority,.study-guide-errata,.study-guide-private-controls');
        if(before)before.insertAdjacentElement('beforebegin',p);else card.appendChild(p);
      }
      card.dataset.cetaContextEnhanced='16.3.59';
    });
    const head=document.querySelector('.study-library-head > div');
    if(head&&!document.querySelector('[data-reading-index-link]')){
      const p=document.createElement('p');
      p.className='small-note';
      p.dataset.readingIndexLink='true';
      p.innerHTML='<a class="text-link" href="resources.html#course-reading-index">Browse the centralized outside-reading + CETa Study Guide index →</a>';
      head.appendChild(p);
    }
  }

  const start=()=>{enhance();const root=document.querySelector('#study-material-content')||document.body;new MutationObserver(enhance).observe(root,{childList:true,subtree:true});};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
