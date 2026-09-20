(()=>{
  'use strict';
  const entries=Array.isArray(window.ALFRED_GLOSSARY)?window.ALFRED_GLOSSARY:[];
  if(!entries.length)return;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const slug=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const bySlug=new Map(entries.map(e=>[e.slug,e]));
  // Build matching variants from canonical terms + curated aliases. Add conservative
  // plural forms so textbook prose such as "electrons", "terminals", or
  // "voltage sources" still resolves to the same glossary concept without storing
  // every grammatical inflection as a separate glossary entry.
  function pluralVariant(value){
    const text=String(value||'').trim();
    const m=text.match(/^(.*?)([A-Za-z]+)$/);if(!m)return '';
    const stem=m[1],word=m[2];
    if(word.length<3||/s$/i.test(word)||/^[A-Z]{2,}$/.test(word))return '';
    let plural='';
    if(/[^aeiou]y$/i.test(word))plural=word.slice(0,-1)+'ies';
    else if(/(?:x|z|ch|sh)$/i.test(word))plural=word+'es';
    else plural=word+'s';
    return stem+plural;
  }
  const variants=[];
  entries.forEach(e=>{
    if(e.auto===false)return;
    [e.term,...(e.aliases||[])].forEach((v,i)=>{
      if(!v||String(v).trim().length<=1)return;
      const text=String(v);variants.push({text,entry:e,canonical:i===0});
      const plural=i===0?pluralVariant(text):'';if(plural&&plural.toLocaleLowerCase()!==text.toLocaleLowerCase())variants.push({text:plural,entry:e,canonical:false});
    });
  });
  variants.sort((a,b)=>b.text.length-a.text.length);
  const variantInfoMap=new Map();
  variants.forEach(v=>{const k=v.text.toLocaleLowerCase();if(!variantInfoMap.has(k))variantInfoMap.set(k,v);});
  const multiwordVariantsBySlug=new Map();
  variants.forEach(v=>{
    const text=String(v.text||'').trim();if(!/\s|-/.test(text))return;
    const key=v.entry.slug;if(!multiwordVariantsBySlug.has(key))multiwordVariantsBySlug.set(key,[]);
    const list=multiwordVariantsBySlug.get(key),lower=text.toLocaleLowerCase();if(!list.includes(lower))list.push(lower);
  });
  function acronymRequiresExactCase(text){
    const t=String(text||'').trim();
    return /^[A-Z]{2,}(?:[0-9²]*)$/.test(t)||/^[A-Z][0-9]+[A-Z]$/.test(t)||t==='I²C';
  }
  const variantMap=new Map([...variantInfoMap].map(([k,v])=>[k,v.entry]));
  const regex=new RegExp('(^|[^A-Za-z0-9])('+[...variantMap.keys()].map(v=>v.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')(?![A-Za-z0-9])','gi');

  // ---- Accessible, concise in-lesson definition popover ----
  // Interaction contract: one click opens the definition; a second click on the
  // same term within the double-click window opens the full Glossary entry.
  // Hover never opens or closes the definition card.
  let tip=null,activeAnchor=null,dismissedAnchor=null,lastClickAnchor=null,lastClickAt=0;
  const DOUBLE_CLICK_MS=500;
  function ensureTip(){
    if(tip)return tip;
    tip=document.createElement('aside');tip.className='glossary-tip';tip.hidden=true;tip.setAttribute('role','tooltip');tip.id='alfred-glossary-tip';
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
    const t=ensureTip();
    if(activeAnchor&&activeAnchor!==anchor)activeAnchor.removeAttribute('aria-describedby');
    activeAnchor=anchor;
    const second=e.technical&&e.technical!==e.definition?`<p class="technical"><strong>Technical:</strong> ${esc(e.technical)}</p>`:'';
    t.innerHTML=`<div class="glossary-cat">${esc(e.category)}</div><h3>${esc(e.term)}</h3>${e.pronunciation?`<div class="glossary-pron">${esc(e.pronunciation)}</div>`:''}<p><strong>Meaning:</strong> ${esc(e.definition)}</p>${second}<p class="hint">Double-click the highlighted term for the full Glossary entry.</p>`;
    t.hidden=false;anchor.setAttribute('aria-describedby',t.id);positionTip(anchor,t);
  }
  function hideTip(){
    if(!tip)return;
    if(activeAnchor)activeAnchor.removeAttribute('aria-describedby');
    tip.hidden=true;activeAnchor=null;
  }
  document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&tip&&!tip.hidden){dismissedAnchor=activeAnchor;hideTip();}});
  document.addEventListener('click',ev=>{
    if(!tip||tip.hidden)return;
    if(ev.target.closest?.('.glossary-term,.glossary-tip'))return;
    dismissedAnchor=null;hideTip();
  });
  window.addEventListener('scroll',()=>{if(tip&&!tip.hidden&&activeAnchor)positionTip(activeAnchor,tip);},{passive:true});
  window.addEventListener('resize',()=>{if(tip&&!tip.hidden&&activeAnchor)positionTip(activeAnchor,tip);});

  // ---- Deliberate in-lesson vocabulary placement ----
  // Vocabulary resets at the instructional-section level, not the entire lesson stage.
  // Each technical concept may receive one deliberate highlight inside each teaching
  // section. This preserves useful repetition when a later section reuses the concept,
  // while preventing the same word from becoming visually noisy inside one section.
  const AMBIGUOUS=new Set([
    'charge','current','power','ground','branch','mesh','bus','clock','carrier','collector','controller',
    'counter','cutoff','drain','emitter','energy','fault','feedback','flux','gain','gate','period','phase',
    'probe','register','requirement','reset','resolution','sampling','saturation','trace','validation','verification',
    'load','source','terminal','wire','signal','filter','noise','trigger','frame','address','buffer','channel',
    'component','components','switch','cell','core','risk','hazard','stack','heap','cache','thread','protocol',
    'range','instrument','limit','margin','task','priority','library','instruction','loop','network','driver','specification','substitution'
  ]);
  const TECH_CONTEXT=/\b(?:electric|electrical|electron|proton|neutron|coulomb|ampere|amps?|volts?|voltage|current|resistan|ohm|watt|power|energy|charge|circuit|node|branch|conductor|insulator|ground|GND|signal|waveform|frequency|component|device|terminal|transistor|MOSFET|BJT|diode|resistor|capacitor|inductor|PCB|board|pin|GPIO|MCU|microcontroller|processor|protocol|UART|I2C|I²C|SPI|CAN|USB|data|firmware|measurement|meter|multimeter|oscilloscope|test|load|supply|positive|negative|semiconductor|logic|clock|digital|analog|RF|antenna|solder|physical\s+property)\b/i;
  const DEFINE_CUE=/\b(?:is|are|means|refers\s+to|defined\s+as|describes|measures|represents|called|known\s+as|consists\s+of|provides|controls|stores|opposes|allows)/i;
  const DIRECT_DEFINE_AFTER=/^\s*(?:is|are|means|refers\s+to|is\s+defined\s+as|describes|measures|represents|consists\s+of)\b/i;
  const INCIDENTAL_CUE=/\b(?:not\s+the\s+same\s+thing\s+as|unrelated\s+to|rather\s+than|instead\s+of|for\s+example|such\s+as)\b/i;
  const LOW_VALUE_CONTAINER=/\b(?:question|quiz|assessment|choice|knowledge-check|check-question|practice-question|prompt|answer)\b/i;
  let lessonObserver=null,decorateTimer=null,decoratingLesson=false;

  function withoutMatchedVariant(context,raw){
    const safe=String(raw||'').replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    return String(context||'').replace(new RegExp(`(^|[^A-Za-z0-9])${safe}(?![A-Za-z0-9])`,'ig'),' ');
  }
  function technicalContextOkay(info,context){
    const key=info.text.toLocaleLowerCase();
    if(!AMBIGUOUS.has(key))return true;
    // Expanded phrases such as "electric current" or "electrical component" are
    // self-disambiguating; context gating is mainly for bare everyday-looking words.
    if(/\s|-/.test(key))return true;
    return TECH_CONTEXT.test(withoutMatchedVariant(context,info.text));
  }
  function candidateScore(node,raw,info,context,start,order,contextAt,fullerVariantAvailable){
    const p=node.parentElement,tag=p?.tagName||'',key=raw.toLocaleLowerCase(),contextMinusRaw=withoutMatchedVariant(context,raw);
    const after=context.slice(Math.min(context.length,contextAt+raw.length));
    let score=0;
    if(tag==='P')score+=8;else if(tag==='LI')score+=7;else if(tag==='DD')score+=6;else if(tag==='TD')score+=4;else score+=2;
    // Prefer the sentence that actually introduces or defines the term.
    if(DIRECT_DEFINE_AFTER.test(after))score+=12;
    else if(DEFINE_CUE.test(contextMinusRaw))score+=4;
    if(TECH_CONTEXT.test(contextMinusRaw))score+=3;
    if(context.trim().length>=55)score+=2;
    if(start<180)score+=1;
    if(INCIDENTAL_CUE.test(contextMinusRaw))score-=4;
    if(/\?\s*$/.test(context.trim()))score-=8;
    if(p?.closest('aside'))score-=3; // prefer the teaching paragraph over recap text when both exist
    let ancestor=p,surface='';for(let i=0;i<5&&ancestor;i++,ancestor=ancestor.parentElement)surface+=` ${String(ancestor.className||'')}`;
    if(LOW_VALUE_CONTAINER.test(surface))score-=12;
    const canonical=String(info.entry.term||'').toLocaleLowerCase();
    const rawWords=key.split(/\s+/).length,canonicalWords=canonical.split(/\s+/).length;
    if(key===canonical)score+=canonicalWords>1?8:3;
    if(rawWords>1)score+=5;
    // Prefer a fuller technical phrase when that phrase actually exists in this
    // section. If it does not, allow a technically valid short alias (e.g. "charge")
    // to serve as the one section-level glossary anchor.
    if(canonicalWords>1&&rawWords===1)score+=fullerVariantAvailable?-7:-1;
    if(canonicalWords===1&&rawWords>1)score+=4;
    return score-order/100000;
  }
  function stripLessonGlossary(root){
    root.querySelectorAll('a.glossary-term').forEach(a=>a.replaceWith(document.createTextNode(a.textContent||'')));
    root.normalize();
  }
  function makeTermAnchor(raw,e,score=0){
    const a=document.createElement('a');a.className='glossary-term';a.href=`glossary.html#${encodeURIComponent(e.slug)}`;a.dataset.glossary=e.slug;a.dataset.glossaryScore=String(score);a.textContent=raw;
    a.addEventListener('click',ev=>{
      ev.preventDefault();
      const now=performance.now();
      const isSecondClick=lastClickAnchor===a&&(now-lastClickAt)<=DOUBLE_CLICK_MS;
      if(isSecondClick){
        lastClickAnchor=null;lastClickAt=0;hideTip();window.location.assign(a.href);return;
      }
      lastClickAnchor=a;lastClickAt=now;dismissedAnchor=null;showTip(a,e);
    });
    a.addEventListener('dblclick',ev=>ev.preventDefault());
    a.addEventListener('focus',()=>{dismissedAnchor=null;});
    a.addEventListener('blur',()=>{dismissedAnchor=null;});
    return a;
  }
  function unwrapGlossaryAnchor(a){
    if(!a?.parentNode)return;
    a.replaceWith(document.createTextNode(a.textContent||''));
  }
  function enforceSingleGlossaryAnchor(scope){
    // Final DOM guardrail is section-scoped: one anchor per canonical concept inside
    // this teaching block, while a later teaching block may intentionally reuse it.
    const groups=new Map();
    scope.querySelectorAll('a.glossary-term[data-glossary]').forEach(a=>{
      const key=String(a.dataset.glossary||'').trim();if(!key)return;
      const score=Number(a.dataset.glossaryScore||-9999);
      const prior=groups.get(key);
      if(!prior){groups.set(key,{a,score});return;}
      if(score>prior.score){unwrapGlossaryAnchor(prior.a);groups.set(key,{a,score});}
      else unwrapGlossaryAnchor(a);
    });
    scope.normalize();
  }
  function decorateScope(scope){
    const scopeText=String(scope.textContent||'').toLocaleLowerCase();
    const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT,{acceptNode(node){
      const p=node.parentElement;if(!p||!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;
      if(p.closest('a,button,input,textarea,select,option,code,pre,kbd,samp,script,style,h1,h2,h3,h4,h5,h6,summary,.eyebrow,.glossary-term,.glossary-tip,[data-no-glossary],[hidden],.hidden,[aria-hidden="true"]'))return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    const best=new Map();let nodeOrder=0,node;
    while((node=walker.nextNode())){
      const text=node.nodeValue;nodeOrder++;regex.lastIndex=0;let m;
      while((m=regex.exec(text))){
        const lead=m[1]||'',raw=m[2]||'',at=m.index+lead.length,info=variantInfoMap.get(raw.toLocaleLowerCase());
        if(!info)continue;
        const contextStart=Math.max(0,at-180);
        const context=text.slice(contextStart,Math.min(text.length,at+raw.length+220));
        if(!technicalContextOkay(info,context))continue;
        // Uppercase protocol/device acronyms must match their written case exactly;
        // this prevents ordinary words such as "can" or "am" from becoming CAN/AM glossary links.
        if(acronymRequiresExactCase(info.text)&&raw!==info.text)continue;
        const fullerAvailable=(multiwordVariantsBySlug.get(info.entry.slug)||[]).some(v=>scopeText.includes(v));
        const score=candidateScore(node,raw,info,context,at,nodeOrder,at-contextStart,fullerAvailable);
        if(score<10)continue; // no highlight is better than a weak or awkward placement
        const prior=best.get(info.entry.slug);
        if(!prior||score>prior.score)best.set(info.entry.slug,{node,start:at,end:at+raw.length,raw,entry:info.entry,score});
      }
    }
    const byNode=new Map();
    best.forEach(c=>{if(!byNode.has(c.node))byNode.set(c.node,[]);byNode.get(c.node).push(c);});
    byNode.forEach((items,textNode)=>{
      if(!textNode.isConnected)return;
      // Longest match wins when two concepts begin at the same location; this keeps
      // "conventional current" or "electric potential" from collapsing to a shorter
      // overlapping word.
      items.sort((a,b)=>a.start-b.start||(b.end-b.start)-(a.end-a.start)||b.score-a.score);
      const text=textNode.nodeValue,frag=document.createDocumentFragment();let last=0;
      items.forEach(c=>{if(c.start<last)return;if(c.start>last)frag.appendChild(document.createTextNode(text.slice(last,c.start)));frag.appendChild(makeTermAnchor(c.raw,c.entry,c.score));last=c.end;});
      if(last<text.length)frag.appendChild(document.createTextNode(text.slice(last)));textNode.replaceWith(frag);
    });
    enforceSingleGlossaryAnchor(scope);
  }
  function lessonScopes(root){
    // The Classroom renderer uses one integrated-teaching-block for each numbered
    // instructional section. Reset glossary repetition at exactly that boundary.
    const sections=[...root.querySelectorAll('.integrated-teaching-block')].filter(x=>!x.closest('[hidden],.hidden,[aria-hidden="true"]'));
    return sections.length?sections:[root];
  }
  function decorateLesson(root){
    if(!root||!regex.source||decoratingLesson)return;
    decoratingLesson=true;lessonObserver?.disconnect();hideTip(true);stripLessonGlossary(root);
    lessonScopes(root).forEach(decorateScope);
    decoratingLesson=false;
    lessonObserver?.observe(root,{childList:true,subtree:true,characterData:true});
  }
  function scheduleLessonDecoration(root){
    clearTimeout(decorateTimer);decorateTimer=setTimeout(()=>decorateLesson(root),35);
  }

  const lesson=document.querySelector('#classroom-content');
  if(lesson){
    const help=document.createElement('div');help.className='glossary-inline-help';help.setAttribute('data-no-glossary','true');help.innerHTML='<span aria-hidden="true">📖</span><span><strong>Key Glossary terms are highlighted once per lesson section.</strong> Click once for the definition popup. Double-click the same term to open its full Glossary entry.</span>';
    const card=document.querySelector('#classroom-card');if(card)card.insertBefore(help,card.firstChild);
    lessonObserver=new MutationObserver(()=>{if(!decoratingLesson)scheduleLessonDecoration(lesson);});
    decorateLesson(lesson);
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
