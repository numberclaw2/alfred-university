(()=>{
  'use strict';
  const entries=Array.isArray(window.ALFRED_GLOSSARY)?window.ALFRED_GLOSSARY:[];
  if(!entries.length)return;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const slug=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const bySlug=new Map(entries.map(e=>[e.slug,e]));
  const variants=[];
  entries.forEach(e=>{
    if(e.auto===false)return;
    [e.term,...(e.aliases||[])].forEach(v=>{if(v&&String(v).trim().length>1)variants.push({text:String(v),entry:e});});
  });
  variants.sort((a,b)=>b.text.length-a.text.length);
  const variantMap=new Map();
  variants.forEach(v=>{const k=v.text.toLocaleLowerCase();if(!variantMap.has(k))variantMap.set(k,v.entry);});
  const regex=new RegExp('(^|[^A-Za-z0-9])('+[...variantMap.keys()].map(v=>v.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')(?![A-Za-z0-9])','gi');

  // ---- Accessible, concise in-lesson definition popover ----
  let tip=null,activeAnchor=null,openTimer=null,closeTimer=null,tipHovered=false,dismissedAnchor=null;
  function ensureTip(){
    if(tip)return tip;
    tip=document.createElement('aside');tip.className='glossary-tip';tip.hidden=true;tip.setAttribute('role','tooltip');tip.id='alfred-glossary-tip';
    tip.addEventListener('mouseenter',()=>{tipHovered=true;clearTimeout(closeTimer);});
    tip.addEventListener('mouseleave',()=>{tipHovered=false;scheduleHide(activeAnchor);});
    document.body.appendChild(tip);return tip;
  }
  function positionTip(anchor,t){
    const r=anchor.getBoundingClientRect(),tr=t.getBoundingClientRect(),gap=11;
    let left=Math.min(Math.max(12,r.left+r.width/2-tr.width/2),innerWidth-tr.width-12);
    let top=r.bottom+gap,place='bottom';
    if(top+tr.height>innerHeight-12){top=Math.max(12,r.top-tr.height-gap);place='top';}
    const arrow=Math.min(Math.max(18,r.left+r.width/2-left),tr.width-18);
    t.dataset.place=place;t.style.setProperty('--tip-arrow-left',`${arrow}px`);t.style.left=`${left}px`;t.style.top=`${top}px`;
  }
  function showTip(anchor,e){
    if(dismissedAnchor===anchor)return;
    const t=ensureTip();clearTimeout(openTimer);clearTimeout(closeTimer);activeAnchor=anchor;
    const second=e.technical&&e.technical!==e.definition?`<p class="technical"><strong>Technical:</strong> ${esc(e.technical)}</p>`:'';
    t.innerHTML=`<div class="glossary-cat">${esc(e.category)}</div><h3>${esc(e.term)}</h3>${e.pronunciation?`<div class="glossary-pron">${esc(e.pronunciation)}</div>`:''}<p><strong>Meaning:</strong> ${esc(e.definition)}</p>${second}<p class="hint">Click the term for the full Glossary entry.</p>`;
    t.hidden=false;anchor.setAttribute('aria-describedby',t.id);positionTip(anchor,t);
  }
  function scheduleShow(anchor,e,delay=170){clearTimeout(openTimer);clearTimeout(closeTimer);openTimer=setTimeout(()=>showTip(anchor,e),delay);}
  function hideTip(force=false){
    clearTimeout(openTimer);clearTimeout(closeTimer);
    if(!tip)return;
    if(!force&&(tipHovered||activeAnchor?.matches(':hover')||document.activeElement===activeAnchor))return;
    if(activeAnchor)activeAnchor.removeAttribute('aria-describedby');tip.hidden=true;activeAnchor=null;
  }
  function scheduleHide(anchor){clearTimeout(closeTimer);closeTimer=setTimeout(()=>{if(anchor===activeAnchor)hideTip(false);},140);}
  document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&tip&&!tip.hidden){dismissedAnchor=activeAnchor;hideTip(true);}});
  window.addEventListener('scroll',()=>{if(tip&&!tip.hidden&&activeAnchor)positionTip(activeAnchor,tip);},{passive:true});
  window.addEventListener('resize',()=>{if(tip&&!tip.hidden&&activeAnchor)positionTip(activeAnchor,tip);});

  function decorate(root){
    if(!root||!regex.source)return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){
      const p=node.parentElement;if(!p||!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;
      if(p.closest('a,button,input,textarea,select,option,code,pre,kbd,samp,script,style,.glossary-term,.glossary-tip,[data-no-glossary]'))return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      const text=node.nodeValue;regex.lastIndex=0;if(!regex.test(text))return;regex.lastIndex=0;
      const frag=document.createDocumentFragment();let last=0,m;
      while((m=regex.exec(text))){
        const lead=m[1]||'',raw=m[2]||'',start=m.index+lead.length;
        if(start>last)frag.appendChild(document.createTextNode(text.slice(last,start)));
        const e=variantMap.get(raw.toLocaleLowerCase());
        if(!e){frag.appendChild(document.createTextNode(raw));last=start+raw.length;continue;}
        const a=document.createElement('a');a.className='glossary-term';a.href=`glossary.html#${encodeURIComponent(e.slug)}`;a.dataset.glossary=e.slug;a.textContent=raw;
        a.addEventListener('mouseenter',()=>{dismissedAnchor=null;scheduleShow(a,e);});
        a.addEventListener('mouseleave',()=>scheduleHide(a));
        a.addEventListener('focus',()=>{dismissedAnchor=null;scheduleShow(a,e,0);});
        a.addEventListener('blur',()=>{dismissedAnchor=null;scheduleHide(a);});
        frag.appendChild(a);last=start+raw.length;
      }
      if(last<text.length)frag.appendChild(document.createTextNode(text.slice(last)));
      node.replaceWith(frag);
    });
  }

  const lesson=document.querySelector('#classroom-content');
  if(lesson){
    decorate(lesson);
    const help=document.createElement('div');help.className='glossary-inline-help';help.setAttribute('data-no-glossary','true');help.innerHTML='<span aria-hidden="true">📖</span><span><strong>Bold dotted terms are Glossary words.</strong> Hover or keyboard-focus for a quick definition; click for the full entry.</span>';
    const card=document.querySelector('#classroom-card');if(card)card.insertBefore(help,card.firstChild);
    new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1)decorate(n);else if(n.nodeType===3&&n.parentElement)decorate(n.parentElement);}))).observe(lesson,{childList:true,subtree:true});
  }

  // ---- Full academic glossary ----
  const page=document.querySelector('#glossary-list');
  if(!page)return;
  const q=document.querySelector('#glossary-query'),cat=document.querySelector('#glossary-category'),week=document.querySelector('#glossary-week'),summary=document.querySelector('#glossary-summary'),alpha=document.querySelector('#glossary-alpha'),clear=document.querySelector('#glossary-clear'),views=document.querySelector('#glossary-views'),sourcePanel=document.querySelector('#glossary-source-panel'),toolbar=document.querySelector('#glossary-toolbar');
  const cats=[...new Set(entries.map(e=>e.category))].sort();
  cat.innerHTML='<option value="">All categories</option>'+cats.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');
  week.innerHTML='<option value="">All course weeks</option>'+Array.from({length:31},(_,i)=>i+1).map(w=>`<option value="${w}">Week ${w}</option>`).join('');
  const letters=['All',...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];alpha.innerHTML=letters.map(x=>`<button type="button" data-letter="${x}" class="${x==='All'?'active':''}" aria-pressed="${x==='All'}">${x}</button>`).join('');
  const params=new URLSearchParams(location.search);let letter=params.get('letter')||'All',view=params.get('view')||'all';
  if(params.get('q'))q.value=params.get('q');if(params.get('category'))cat.value=params.get('category');if(params.get('week'))week.value=params.get('week');
  if(!letters.includes(letter))letter='All';if(!['all','acronyms','symbols','sources'].includes(view))view='all';
  alpha.querySelectorAll('button').forEach(b=>{const on=b.dataset.letter===letter;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
  const isAcronym=e=>/^[A-Z][A-Z0-9+\-/]{1,11}$/.test(e.term)||(/\b[A-Z][A-Z0-9]{1,9}\b/.test(e.notation||'')&&String(e.notation||'').length<=20);
  const isSymbol=e=>Boolean(e.notation)||['Foundations & Units','AC & Signals'].includes(e.category)&&/[Ωµμ°]/.test([e.term,e.definition,e.technical].join(' '));
  function syncUrl(){
    const u=new URL(location.href);[['view',view==='all'?'':view],['q',q.value.trim()],['category',cat.value],['week',week.value],['letter',letter==='All'?'':letter]].forEach(([k,v])=>v?u.searchParams.set(k,v):u.searchParams.delete(k));history.replaceState(null,'',u);
  }
  function related(e){
    const weeks=new Set(e.weeks||[]);
    return entries.filter(x=>x!==e&&x.category===e.category).map(x=>({x,score:(x.weeks||[]).filter(w=>weeks.has(w)).length})).sort((a,b)=>b.score-a.score||a.x.term.localeCompare(b.x.term)).slice(0,4).map(o=>o.x);
  }
  function copyEntryLink(e,button){
    const url=new URL(location.href);url.search='';url.hash=e.slug;
    const done=()=>{const old=button.textContent;button.textContent='Copied';setTimeout(()=>button.textContent=old,1200);};
    if(navigator.clipboard?.writeText)navigator.clipboard.writeText(url.href).then(done).catch(()=>{});
    else{const ta=document.createElement('textarea');ta.value=url.href;ta.style.position='fixed';ta.style.opacity='0';document.body.append(ta);ta.select();try{document.execCommand('copy');done();}catch{}ta.remove();}
  }
  function entryHTML(e){
    const rel=related(e);
    return `<article class="glossary-entry" id="${esc(e.slug)}"><div class="glossary-entry-head"><div><h2>${esc(e.term)}</h2>${e.pronunciation?`<div class="pron">${esc(e.pronunciation)}</div>`:''}</div><span class="category">${esc(e.category)}</span></div><p class="plain"><strong>Plain-English definition:</strong> ${esc(e.definition)}</p><p class="technical"><strong>Technical definition:</strong> ${esc(e.technical)}</p>${e.note?`<p class="course-note"><strong>Course note:</strong> ${esc(e.note)}</p>`:''}<div class="glossary-meta">${e.aliases?.length?`<div><strong>Also called / written</strong>${e.aliases.map(esc).join(', ')}</div>`:''}${e.notation?`<div><strong>Symbol / notation / abbreviation</strong>${esc(e.notation)}</div>`:''}${e.weeks?.length?`<div><strong>Used in course</strong><span class="week-links">${e.weeks.map(w=>`<a href="learn.html?week=${w}">Week ${w}</a>`).join(' ')}</span></div>`:''}<div><strong>Authoritative basis</strong><a href="${esc(e.sourceDetail?.url||'#')}" target="_blank" rel="noopener noreferrer">${esc(e.sourceDetail?.name||'Reference source')} ↗</a></div></div>${rel.length?`<div class="glossary-related"><strong>Related course terms</strong>${rel.map(x=>`<a href="#${esc(x.slug)}">${esc(x.term)}</a>`).join('')}</div>`:''}<div class="glossary-entry-actions"><a href="#glossary-top">Back to glossary controls ↑</a><button type="button" class="copy-glossary-link" data-copy="${esc(e.slug)}">Copy entry link</button></div></article>`;
  }
  function renderSources(query){
    const bySource=new Map();
    entries.forEach(e=>{const key=e.sourceDetail?.url||e.sourceDetail?.name||'Course reference';if(!bySource.has(key))bySource.set(key,{name:e.sourceDetail?.name||'Course reference',url:e.sourceDetail?.url||'',terms:[],cats:new Set()});const r=bySource.get(key);r.terms.push(e);r.cats.add(e.category);});
    let list=[...bySource.values()].filter(r=>!query||[r.name,...r.cats,...r.terms.slice(0,20).map(e=>e.term)].join(' ').toLowerCase().includes(query)).sort((a,b)=>b.terms.length-a.terms.length||a.name.localeCompare(b.name));
    summary.innerHTML=`Showing <strong>${list.length}</strong> authoritative source famil${list.length===1?'y':'ies'} supporting <strong>${entries.length}</strong> glossary entries`;
    sourcePanel.hidden=false;sourcePanel.innerHTML=`<div class="glossary-source-intro"><h2>Source & definition policy</h2><p>Each course definition is a concise teaching paraphrase grounded in an authoritative standards, government, academic, or manufacturer source. The linked source controls if a specialized standard uses a narrower meaning.</p></div><div class="glossary-source-grid">${list.map(r=>`<article class="glossary-source-card"><h3>${esc(r.name)}</h3><p><strong>${r.terms.length}</strong> glossary entries · ${r.cats.size} course categor${r.cats.size===1?'y':'ies'}</p><p class="source-cats">${[...r.cats].sort().map(esc).join(' · ')}</p>${r.url?`<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">Open authoritative source ↗</a>`:''}</article>`).join('')}</div>`;page.innerHTML='';
  }
  function render(){
    const query=(q.value||'').trim().toLocaleLowerCase(),category=cat.value,w=Number(week.value||0);
    views.querySelectorAll('button[data-view]').forEach(b=>{const on=b.dataset.view===view;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
    toolbar.classList.toggle('sources-mode',view==='sources');alpha.hidden=view==='sources';cat.closest('label').hidden=view==='sources';week.closest('label').hidden=view==='sources';
    if(view==='sources'){renderSources(query);syncUrl();return;} sourcePanel.hidden=true;sourcePanel.innerHTML='';
    const matched=entries.map(e=>{
      if(view==='acronyms'&&!isAcronym(e))return null;if(view==='symbols'&&!isSymbol(e))return null;
      const exactFields=[e.term,e.notation,...(e.aliases||[])].filter(Boolean).map(x=>String(x).toLocaleLowerCase());
      const hay=[e.term,e.definition,e.technical,e.category,e.notation,e.note,e.sourceDetail?.name,...(e.aliases||[])].join(' ').toLocaleLowerCase();
      const exact=!query||exactFields.includes(query);
      const shortMatch=!query?true:(query.length<=3?new RegExp(`(^|[^a-z0-9])${query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}([^a-z0-9]|$)`,'i').test(hay):hay.includes(query));
      const ok=(!query||shortMatch)&&(!category||e.category===category)&&(!w||(e.weeks||[]).includes(w))&&(letter==='All'||e.term[0].toUpperCase()===letter);
      return ok?{e,exact}:null;
    }).filter(Boolean).sort((a,b)=>(Number(b.exact)-Number(a.exact))||a.e.term.localeCompare(b.e.term));
    const list=matched.map(x=>x.e),label=view==='acronyms'?'acronym / abbreviation':view==='symbols'?'symbol / notation':'course vocabulary';
    summary.innerHTML=`Showing <strong>${list.length}</strong> ${label} entr${list.length===1?'y':'ies'}${view==='all'?` of <strong>${entries.length}</strong>`:''}`;
    page.innerHTML=list.map(entryHTML).join('')||'<div class="glossary-empty"><strong>No glossary entries match those filters.</strong><p>Clear one or more filters, try an alias or acronym, or search a broader concept.</p><button type="button" id="glossary-empty-clear">Clear filters</button></div>';
    page.querySelectorAll('button[data-copy]').forEach(b=>b.addEventListener('click',()=>copyEntryLink(bySlug.get(b.dataset.copy),b)));
    page.querySelector('#glossary-empty-clear')?.addEventListener('click',resetFilters);
    syncUrl();
    if(location.hash){const id=decodeURIComponent(location.hash.slice(1));requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({block:'start'}));}
  }
  function resetFilters(){q.value='';cat.value='';week.value='';letter='All';alpha.querySelectorAll('button').forEach(b=>{const on=b.dataset.letter==='All';b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});render();q.focus();}
  q.addEventListener('input',()=>{clearTimeout(q._t);q._t=setTimeout(render,100);});cat.addEventListener('change',render);week.addEventListener('change',render);clear.addEventListener('click',resetFilters);
  alpha.addEventListener('click',ev=>{const b=ev.target.closest('button[data-letter]');if(!b)return;letter=b.dataset.letter;alpha.querySelectorAll('button').forEach(x=>{const on=x===b;x.classList.toggle('active',on);x.setAttribute('aria-pressed',String(on));});render();});
  views.addEventListener('click',ev=>{const b=ev.target.closest('button[data-view]');if(!b)return;view=b.dataset.view;letter='All';alpha.querySelectorAll('button').forEach(x=>{const on=x.dataset.letter==='All';x.classList.toggle('active',on);x.setAttribute('aria-pressed',String(on));});render();});
  render();
})();
