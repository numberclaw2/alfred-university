/* AU-ESET 301 — v16.3.61 built-in private-repository CETa Study Guide
   Replaces the former device-import flow with the learner-owned bundled PDF.
   Existing lesson/page mappings remain authoritative; printed-page -> PDF-page offset stays +10.
*/
(()=>{
  'use strict';

  const GUIDE_FILE='Associate_CET_Study_Guide_Sixth_Edition.pdf';
  const GUIDE_NAME='Associate CET Study Guide, Sixth Edition';
  const VERIFIED_OFFSET=Number(window.ALFRED_CETA_STUDY_GUIDE?.privateCopy?.verifiedCopyPdfPageOffset??10);

  const builtInState=()=>({
    connected:true,
    bundled:true,
    name:GUIDE_NAME,
    file:GUIDE_FILE,
    offset:VERIFIED_OFFSET,
    storage:'private-repository bundled static asset',
    cloudIntegration:'allowed; not configured by this module'
  });

  async function state(){
    return builtInState();
  }

  function hideControl(el){
    if(!el)return;
    el.hidden=true;
    el.setAttribute('aria-hidden','true');
    if('disabled' in el)el.disabled=true;
  }

  async function refreshControls(){
    document.querySelectorAll('[data-private-guide-state]').forEach(el=>{
      el.textContent='Built-in Study Guide ready';
    });

    document.querySelectorAll('[data-private-guide-open]').forEach(el=>{
      el.hidden=false;
      el.removeAttribute('aria-hidden');
      if('disabled' in el)el.disabled=false;
      if(/connect|upload|choose|import/i.test(el.textContent||''))el.textContent='Open Study Guide';
      el.setAttribute('title','Open the built-in private Study Guide copy');
    });

    document.querySelectorAll('[data-private-guide-choose],[data-private-guide-forget]').forEach(hideControl);

    document.querySelectorAll('.study-guide-private-controls').forEach(wrapper=>{
      const visible=[...wrapper.children].some(child=>!child.hidden);
      if(!visible)wrapper.hidden=true;
    });
  }

  function guideUrlForPrintedPage(printedPage){
    const printed=Math.max(1,Number(printedPage)||1);
    const pdfPage=printed+VERIFIED_OFFSET;
    const url=new URL(GUIDE_FILE,window.location.href);
    url.hash=`page=${pdfPage}`;
    return url.toString();
  }

  async function openPrintedPage(printedPage){
    const url=guideUrlForPrintedPage(printedPage);
    const popup=window.open(url,'_blank');
    if(popup)popup.opener=null;
    else window.location.href=url;
    return true;
  }

  // Backward-compatible no-op methods. Existing callers may still invoke them,
  // but there is no import/remove workflow in bundled mode.
  async function connect(){
    await refreshControls();
    return true;
  }
  async function forget(){
    await refreshControls();
    return false;
  }

  document.addEventListener('click',async event=>{
    const choose=event.target.closest?.('[data-private-guide-choose]');
    if(choose){
      event.preventDefault();
      event.stopPropagation();
      await refreshControls();
      return;
    }

    const forgetBtn=event.target.closest?.('[data-private-guide-forget]');
    if(forgetBtn){
      event.preventDefault();
      event.stopPropagation();
      await refreshControls();
      return;
    }

    const open=event.target.closest?.('[data-private-guide-open]');
    if(open){
      event.preventDefault();
      event.stopPropagation();
      await openPrintedPage(open.dataset.printedPage||open.getAttribute('data-printed-page')||1);
    }
  });

  document.addEventListener('DOMContentLoaded',refreshControls,{once:true});
  window.addEventListener('pageshow',refreshControls);

  window.AlfredPrivateCetaGuide={
    state,connect,forget,openPrintedPage,refreshControls,guideUrlForPrintedPage,
    bundled:true,
    file:GUIDE_FILE,
    storage:'private-repository bundled static asset',
    cloudIntegration:'allowed; not configured by this module',
    serviceWorkerCached:true
  };
})();

/* Preserve v16.3.59 Study Guide context parity on the Study surface. */
(()=>{
  'use strict';
  const SG=window.ALFRED_CETA_STUDY_GUIDE||{};
  if(document.body?.dataset?.page!=='study'||!Array.isArray(SG.records))return;

  const normalize=s=>String(s||'').replace(/\s+/g,' ').trim();
  const esc=s=>String(s??'').replace(/[&<>\"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[ch]));
  const titleFor=r=>`Associate CET Study Guide · Chapter ${r.chapter} · ${SG.pageLabel?.(r)||''}`;

  function recordForCard(card){
    const title=normalize(card.querySelector('h4')?.textContent);
    return SG.records.find(r=>normalize(titleFor(r))===title)||null;
  }

  function enhance(){
    document.querySelectorAll('.study-media-card.study-guide-card').forEach(card=>{
      if(card.dataset.cetaContextEnhanced==='16.3.61')return;
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
        p.innerHTML=`<strong>After reading:</strong> ${esc(r.after)}`;
        const before=card.querySelector('.study-guide-authority,.study-guide-errata,.study-guide-private-controls');
        if(before)before.insertAdjacentElement('beforebegin',p);else card.appendChild(p);
      }

      card.dataset.cetaContextEnhanced='16.3.61';
    });

    const head=document.querySelector('.study-library-head > div');
    if(head&&!document.querySelector('[data-reading-index-link]')){
      const p=document.createElement('p');
      p.className='small-note';
      p.dataset.readingIndexLink='true';
      p.innerHTML='<a class="text-link" href="resources.html#course-reading-index">Browse the centralized outside-reading + CETa Study Guide index →</a>';
      head.appendChild(p);
    }

    window.AlfredPrivateCetaGuide?.refreshControls?.();
  }

  const start=()=>{
    enhance();
    const root=document.querySelector('#study-material-content')||document.body;
    if(typeof MutationObserver==='function')new MutationObserver(enhance).observe(root,{childList:true,subtree:true});
  };

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();
