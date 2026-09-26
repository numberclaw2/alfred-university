/* AU-ESET 301 - v16.3.65 compact scanned CETa Study Guide
   Keeps the existing printed-page assignments while switching the bundled PDF.
   The cleaned scan uses printed-page -> PDF-page offset +9.
*/
(()=>{
  'use strict';

  const GUIDE_FILE='Associate_CET_Study_Guide_Sixth_Edition.pdf';
  const GUIDE_NAME='Associate CET Study Guide, Sixth Edition';
  const GUIDE_REV='16.3.65';
  const VERIFIED_OFFSET=9;

  // Keep shared Study Guide metadata aligned with the new scan mapping.
  if(window.ALFRED_CETA_STUDY_GUIDE){
    if(window.ALFRED_CETA_STUDY_GUIDE.source){
      window.ALFRED_CETA_STUDY_GUIDE.source.verifiedPrivateCopyPdfOffset=VERIFIED_OFFSET;
    }
    if(window.ALFRED_CETA_STUDY_GUIDE.privateCopy){
      window.ALFRED_CETA_STUDY_GUIDE.privateCopy.verifiedCopyPdfPageOffset=VERIFIED_OFFSET;
    }
  }

  const builtInState=()=>({
    connected:true,
    bundled:true,
    name:GUIDE_NAME,
    file:GUIDE_FILE,
    offset:VERIFIED_OFFSET,
    storage:'bundled static asset',
    cloudIntegration:'allowed; not configured by this module'
  });

  async function state(){ return builtInState(); }

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
      el.setAttribute('title','Open the built-in Study Guide copy');
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
    // Versioned query avoids serving the former Study Guide from an older PWA cache.
    url.searchParams.set('v',GUIDE_REV);
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

  async function connect(){ await refreshControls(); return true; }
  async function forget(){ await refreshControls(); return false; }

  document.addEventListener('click',async event=>{
    const choose=event.target.closest?.('[data-private-guide-choose]');
    if(choose){ event.preventDefault(); event.stopPropagation(); await refreshControls(); return; }

    const forgetBtn=event.target.closest?.('[data-private-guide-forget]');
    if(forgetBtn){ event.preventDefault(); event.stopPropagation(); await refreshControls(); return; }

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
    offset:VERIFIED_OFFSET,
    storage:'bundled static asset',
    cloudIntegration:'allowed; not configured by this module',
    serviceWorkerCached:true,
    revision:GUIDE_REV
  };
})();

/* Preserve Study Guide context parity on the Study surface. */
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
      if(card.dataset.cetaContextEnhanced==='16.3.65')return;
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

      card.dataset.cetaContextEnhanced='16.3.65';
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
