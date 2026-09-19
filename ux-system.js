/* AU-ESET 301 v16.3.28 — Whole-site UX system · native UX audit round-2 repair
   Purpose: improve task orientation, search discoverability, interaction hierarchy,
   long-page navigation, mobile affordance, and accessibility without changing course logic. */
(() => {
  'use strict';
  if (window.__ALFRED_UX_1628__) return;
  window.__ALFRED_UX_1628__ = true;

  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const filePage=(location.pathname.split('/').pop()||'index.html').replace(/\.html?$/,'')||'index';
  const pageKey=document.body?.dataset.page||filePage;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const svg=(name)=>({
    search:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.35-4.35m2.35-5.15a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"/></svg>',
    play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7 8 5-8 5V7Z"/></svg>',
    up:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 14 6-6 6 6"/></svg>',
    close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4v-9Z"/></svg>',
    book:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Zm16 0A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></svg>',
    calendar:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4v3m14-3v3M4 9h16M5 6h14a2 2 0 0 1 2 2v11H3V8a2 2 0 0 1 2-2Z"/></svg>',
    check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4 10-10"/></svg>',
    flask:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6m-4 0v6l-6 10h14L13 9V3"/></svg>',
    target:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>'
  }[name]||'');

  function currentWeek(){
    try{return Number(window.AlfredState?.currentWeek?.(window.ALFRED_EVENTS||[],new Date(),window.ALFRED_WEEKS||[]))||1;}catch{return 1;}
  }

  function ensureMainTarget(){
    const main=$('main');
    if(main&&!main.id) main.id='main-content';
    return main;
  }

  function enhanceMobileMenuButton(){
    const b=$('.nav-toggle');
    if(!b||b.dataset.uxEnhanced) return;
    b.dataset.uxEnhanced='true';
    b.innerHTML='<span class="ux-menu-glyph" aria-hidden="true">☰</span><span class="ux-menu-label">Menu</span>';
  }

  function installHeaderUtility(){
    const row=$('.brand-row');
    if(!row||$('.ux-header-tools',row)) return;
    const week=currentWeek();
    const tools=document.createElement('div');
    tools.className='ux-header-tools';
    const desktopSearch=document.createElement('form');
    desktopSearch.className='ux-header-search-form';
    desktopSearch.setAttribute('role','search');
    desktopSearch.action='search.html';
    desktopSearch.method='get';
    desktopSearch.innerHTML=`<label class="ux-visually-hidden" for="ux-header-search">Search the course</label><span class="ux-header-search-icon">${svg('search')}</span><input id="ux-header-search" name="q" type="search" autocomplete="off" placeholder="Search course…" aria-keyshortcuts="Control+K Meta+K"><button type="submit" aria-label="Search">Search</button><kbd class="ux-key-hint">${/Mac|iPhone|iPad/.test(navigator.platform)?'⌘K':'Ctrl K'}</kbd>`;
    const mobileSearch=document.createElement('button');
    mobileSearch.className='ux-header-search-trigger';mobileSearch.type='button';
    mobileSearch.innerHTML=`${svg('search')}<span>Search</span>`;
    mobileSearch.setAttribute('aria-label','Search the course');
    const continueLink=document.createElement('a');
    continueLink.className='ux-header-continue';
    continueLink.href=`study.html?week=${week}`;
    continueLink.innerHTML=`${svg('play')}<span>Continue Week ${String(week).padStart(2,'0')}</span>`;
    tools.append(desktopSearch,mobileSearch,continueLink);
    const toggle=$('.nav-toggle',row);
    row.insertBefore(tools,toggle||null);
    mobileSearch.addEventListener('click',()=>openSearchSheet(mobileSearch));

    desktopSearch.addEventListener('submit',e=>{
      const input=$('input[name="q"]',desktopSearch);if(!input?.value.trim()){e.preventDefault();input?.focus();}
    });
  }

  let searchSheet=null,lastSearchTrigger=null;
  function installSearchSheet(){
    if(searchSheet) return searchSheet;
    searchSheet=document.createElement('div');searchSheet.className='ux-search-sheet';searchSheet.hidden=true;
    searchSheet.innerHTML=`<div class="ux-search-backdrop" data-ux-search-close></div><section class="ux-search-dialog" role="dialog" aria-modal="true" aria-labelledby="ux-search-title"><div class="ux-search-head"><div><div class="ux-eyebrow">Find anything in AU-ESET 301</div><h2 id="ux-search-title">Search the course</h2></div><button class="ux-icon-button" type="button" data-ux-search-close aria-label="Close search">${svg('close')}</button></div><form class="ux-search-form" action="search.html" method="get" role="search"><label for="ux-search-input">What are you looking for?</label><div><span>${svg('search')}</span><input id="ux-search-input" name="q" type="search" autocomplete="off" placeholder="Try ‘Ohm’s law’, ‘UART’, ‘Week 18’, or ‘soldering’"><button type="submit">Search</button></div></form><div class="ux-quick-destinations" aria-label="Quick destinations"><a href="study.html">${svg('target')}<span><strong>Study</strong><small>Next action & reviews</small></span></a><a href="learn.html">${svg('book')}<span><strong>Classroom</strong><small>Lessons & teaching</small></span></a><a href="calendar.html">${svg('calendar')}<span><strong>Calendar</strong><small>Dates & deadlines</small></span></a><a href="practice.html">${svg('flask')}<span><strong>Practice</strong><small>Guided work & repair</small></span></a><a href="progress.html">${svg('check')}<span><strong>Progress</strong><small>Completion & records</small></span></a><a href="glossary.html">${svg('book')}<span><strong>Glossary</strong><small>Terms & definitions</small></span></a></div></section>`;
    document.body.append(searchSheet);
    searchSheet.addEventListener('click',e=>{if(e.target.closest('[data-ux-search-close]'))closeSearchSheet();});
    searchSheet.querySelector('.ux-search-dialog').addEventListener('keydown',e=>{
      if(e.key!=='Tab')return;const focusable=$$('button,input,a[href]',searchSheet).filter(x=>!x.disabled&&x.offsetParent!==null);if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    });
    return searchSheet;
  }
  function openSearchSheet(trigger=document.activeElement){
    installSearchSheet();lastSearchTrigger=trigger instanceof HTMLElement?trigger:null;searchSheet.hidden=false;document.body.classList.add('ux-search-open');requestAnimationFrame(()=>$('#ux-search-input',searchSheet)?.focus());
  }
  function closeSearchSheet(){
    if(!searchSheet||searchSheet.hidden)return;searchSheet.hidden=true;document.body.classList.remove('ux-search-open');lastSearchTrigger?.focus?.();
  }
  function installSearchShortcuts(){
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'&&searchSheet&&!searchSheet.hidden){e.preventDefault();closeSearchSheet();return;}
      const target=e.target,typing=target&&/INPUT|TEXTAREA|SELECT/.test(target.tagName)||target?.isContentEditable;
      const commandK=(e.key.toLowerCase()==='k'&&(e.ctrlKey||e.metaKey));
      const slash=(e.key==='/'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!typing);
      if(!commandK&&!slash)return;
      e.preventDefault();
      const headerInput=$('#ux-header-search');
      if(window.matchMedia('(min-width:1051px)').matches&&headerInput){headerInput.focus();headerInput.select();}
      else openSearchSheet(document.activeElement);
    });
  }

  function makeSlug(text){return String(text||'section').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,64)||'section';}
  function installPageTOC(){
    const excluded=new Set(['index','home','study','learn','calendar','practice','progress','glossary','search','quiz','offline','404','knowledge','week','student-services','engineering','patch-notes']);
    if(excluded.has(pageKey)||$('.ux-page-toc')) return;
    const main=ensureMainTarget();if(!main)return;
    const headings=$$('h2',main).filter(h=>h.offsetParent!==null&&!h.closest('.site-footer,.ux-page-toc')&&!/Learning & Practice|Course & Administration/i.test(h.textContent||''));
    if(headings.length<3)return;
    const used=new Set();
    headings.forEach((h,i)=>{if(!h.id){let id=makeSlug(h.textContent);let n=2;while(document.getElementById(id)||used.has(id))id=`${makeSlug(h.textContent)}-${n++}`;h.id=id;}used.add(h.id);});
    const nav=document.createElement('nav');nav.className='ux-page-toc shell';nav.setAttribute('aria-label','On this page');
    const details=document.createElement('details');details.className='ux-page-toc-details';
    const mobileQuery=matchMedia('(max-width:700px)');details.open=!mobileQuery.matches;
    details.innerHTML=`<summary><span class="ux-page-toc-label">On this page</span><span class="ux-page-toc-count">${headings.length} sections</span></summary><div class="ux-page-toc-links">${headings.map(h=>`<a href="#${esc(h.id)}"><span aria-hidden="true">#</span>${esc(h.textContent.trim())}</a>`).join('')}</div>`;
    nav.append(details);
    const syncDisclosure=e=>{details.open=!e.matches;};
    mobileQuery.addEventListener?.('change',syncDisclosure);
    const hero=main.querySelector(':scope > .study-hero,:scope > .academic-hero,:scope > .page-hero,:scope > .progress-hero,:scope > .engineering-hero,:scope > .project-page-hero,:scope > .quiz-hero');
    if(hero)hero.after(nav);else main.insertBefore(nav,main.firstChild);
    nav.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const target=document.getElementById(decodeURIComponent(a.hash.slice(1)));if(!target)return;e.preventDefault();target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});history.pushState(null,'',a.hash);target.setAttribute('tabindex','-1');target.focus({preventScroll:true});if(mobileQuery.matches)details.open=false;});
  }

  function installStudyShortcuts(){
    if(pageKey!=='study'||$('.ux-study-shortcuts'))return;
    const hero=$('.study-hero');if(!hero)return;
    const items=[['start-session-section','Today’s plan','Recommended next action'],['review-queue','Reviews','Due retrieval'],['vocabulary-study-section','Vocabulary','Active recall'],['weekly-plan-section','Week plan','Three priorities']].filter(([id])=>document.getElementById(id));
    if(items.length<2)return;
    const nav=document.createElement('nav');nav.className='ux-study-shortcuts shell';nav.setAttribute('aria-label','Study page shortcuts');nav.innerHTML=items.map(([id,label,sub])=>`<a href="#${id}"><strong>${label}</strong><small>${sub}</small></a>`).join('');hero.after(nav);
  }

  function prioritizeHomeHero(){
    if(!['index','home'].includes(pageKey))return;
    const actions=$('.hero-actions');if(!actions)return;
    const study=actions.querySelector('a[href^="study.html"]'),learn=actions.querySelector('a[href^="learn.html"]');
    if(study){study.classList.add('gold');study.classList.remove('outline-light');study.dataset.uxPrimary='true';study.innerHTML=`${svg('play')}<span>Start today’s study</span>`;const week=currentWeek();study.href=`study.html?week=${week}`;actions.insertBefore(study,actions.firstChild);}
    if(learn){learn.classList.remove('gold');learn.classList.add('outline-light');learn.innerHTML=`${svg('book')}<span>Open classroom</span>`;}
  }

  function markNestedNavCurrent(){
    const current=$('.nav-more-menu a.active,.nav-more-menu a[aria-current="page"]');
    if(current){const b=$('.nav-more-button');b?.classList.add('has-current');b?.setAttribute('aria-label',`More sections; current section ${current.textContent.trim()}`);}
  }

  function enhanceExternalLinks(){
    $$('main a[target="_blank"]').forEach(a=>{
      if(a.querySelector('.ux-external-mark')||/↗/.test(a.textContent||''))return;
      const mark=document.createElement('span');mark.className='ux-external-mark';mark.setAttribute('aria-hidden','true');mark.textContent='↗';a.append(mark);
    });
  }

  function installBackToTop(){
    if(new Set(['index','home','study','learn','quiz','calendar','offline','404']).has(pageKey)||$('#ux-back-to-top'))return;
    const b=document.createElement('button');b.id='ux-back-to-top';b.className='ux-back-top';b.type='button';b.setAttribute('aria-label','Back to top');b.innerHTML=`${svg('up')}<span>Top</span>`;document.body.append(b);
    const update=()=>{const useful=document.documentElement.scrollHeight>innerHeight*1.7;b.classList.toggle('show',useful&&scrollY>Math.max(650,innerHeight*.75));};
    addEventListener('scroll',update,{passive:true});addEventListener('resize',update,{passive:true});update();
    b.addEventListener('click',()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
  }

  function enhanceActionSemantics(){
    $$('main .button').forEach(b=>{if(!b.dataset.uxRole)b.dataset.uxRole=b.classList.contains('gold')||b.classList.contains('green')?'prominent':'secondary';});
    $$('main .portal-card[href],main a.resource-card,main a.document-card').forEach(a=>a.classList.add('ux-action-card'));
  }

  function init(){
    document.documentElement.classList.add('ux-system-ready');
    ensureMainTarget();
    enhanceMobileMenuButton();
    if(!['offline','404'].includes(pageKey)){
      installHeaderUtility();
      installSearchSheet();
      installSearchShortcuts();
    }
    installPageTOC();
    installStudyShortcuts();
    prioritizeHomeHero();
    markNestedNavCurrent();
    enhanceExternalLinks();
    installBackToTop();
    enhanceActionSemantics();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0),{once:true});else setTimeout(init,0);
})();
