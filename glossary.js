(()=>{
  'use strict';
  const entries=Array.isArray(window.ALFRED_GLOSSARY)?window.ALFRED_GLOSSARY:[];
  if(!entries.length)return;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
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
  let tip=null, hideTimer=null;
  function ensureTip(){
    if(tip)return tip;
    tip=document.createElement('aside');tip.className='glossary-tip';tip.hidden=true;tip.setAttribute('role','tooltip');tip.id='alfred-glossary-tip';document.body.appendChild(tip);return tip;
  }
  function showTip(anchor,e){
    const t=ensureTip();clearTimeout(hideTimer);
    const aliases=(e.aliases||[]).slice(0,4);
    t.innerHTML=`<div class="glossary-tip-head"><div><div class="glossary-cat">${esc(e.category)}</div><h3>${esc(e.term)}</h3><div class="glossary-pron">${esc(e.pronunciation||'')}</div></div></div><p><strong>Meaning:</strong> ${esc(e.definition)}</p><p class="technical"><strong>Technical:</strong> ${esc(e.technical)}</p>${aliases.length?`<p><strong>Also:</strong> ${aliases.map(esc).join(', ')}</p>`:''}${e.notation?`<p><strong>Notation:</strong> ${esc(e.notation)}</p>`:''}<p class="source">Authoritative basis: ${esc(e.sourceDetail?.name||'course source')}</p><p class="hint">Click the term to open its full Dictionary entry.</p>`;
    t.hidden=false;anchor.setAttribute('aria-describedby',t.id);
    const r=anchor.getBoundingClientRect(), tr=t.getBoundingClientRect(), gap=10;
    let left=Math.min(Math.max(12,r.left),innerWidth-tr.width-12);
    let top=r.bottom+gap;
    if(top+tr.height>innerHeight-12)top=Math.max(12,r.top-tr.height-gap);
    t.style.left=`${left}px`;t.style.top=`${top}px`;
  }
  function hideTip(anchor){clearTimeout(hideTimer);hideTimer=setTimeout(()=>{if(tip)tip.hidden=true;anchor?.removeAttribute('aria-describedby');},80);}
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
        const lead=m[1]||'', raw=m[2]||'', start=m.index+lead.length;
        if(start>last)frag.appendChild(document.createTextNode(text.slice(last,start)));
        const e=variantMap.get(raw.toLocaleLowerCase());
        if(!e){frag.appendChild(document.createTextNode(raw));last=start+raw.length;continue;}
        const a=document.createElement('a');a.className='glossary-term';a.href=`glossary.html#${encodeURIComponent(e.slug)}`;a.dataset.glossary=e.slug;a.textContent=raw;a.title=`${e.term}: ${e.definition}`;a.addEventListener('mouseenter',()=>showTip(a,e));a.addEventListener('mouseleave',()=>hideTip(a));a.addEventListener('focus',()=>showTip(a,e));a.addEventListener('blur',()=>hideTip(a));frag.appendChild(a);last=start+raw.length;
      }
      if(last<text.length)frag.appendChild(document.createTextNode(text.slice(last)));
      node.replaceWith(frag);
    });
  }
  const lesson=document.querySelector('#classroom-content');
  if(lesson){
    decorate(lesson);
    const help=document.createElement('div');help.className='glossary-inline-help';help.setAttribute('data-no-glossary','true');help.innerHTML='<span aria-hidden="true">📖</span><span><strong>Bold dotted terms are Dictionary words.</strong> Hover/focus for an instant definition; click for the full entry.</span>';
    const card=document.querySelector('#classroom-card');if(card)card.insertBefore(help,card.firstChild);
    new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1)decorate(n);else if(n.nodeType===3&&n.parentElement)decorate(n.parentElement);}))).observe(lesson,{childList:true,subtree:true});
  }
  const page=document.querySelector('#glossary-list');
  if(page){
    const q=document.querySelector('#glossary-query'),cat=document.querySelector('#glossary-category'),summary=document.querySelector('#glossary-summary'),alpha=document.querySelector('#glossary-alpha');
    const cats=[...new Set(entries.map(e=>e.category))].sort();
    cat.innerHTML='<option value="">All categories</option>'+cats.map(c=>`<option>${esc(c)}</option>`).join('');
    const letters=['All',...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];alpha.innerHTML=letters.map(x=>`<button type="button" data-letter="${x}" class="${x==='All'?'active':''}">${x}</button>`).join('');
    let letter='All';
    function render(){
      const query=(q.value||'').trim().toLocaleLowerCase(),category=cat.value;
      const matched=entries.map(e=>{
        const exactFields=[e.term,e.notation,...(e.aliases||[])].filter(Boolean).map(x=>String(x).toLocaleLowerCase());
        const hay=[e.term,e.definition,e.technical,e.category,e.notation,e.note,...(e.aliases||[])].join(' ').toLocaleLowerCase();
        const exact=!query||exactFields.includes(query);
        const shortMatch=!query?true:(query.length<=3?new RegExp(`(^|[^a-z0-9])${query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}([^a-z0-9]|$)`,'i').test(hay):hay.includes(query));
        const ok=(!query||shortMatch)&&(!category||e.category===category)&&(letter==='All'||e.term[0].toUpperCase()===letter);
        return ok?{e,exact}:null;
      }).filter(Boolean).sort((a,b)=>(Number(b.exact)-Number(a.exact))||a.e.term.localeCompare(b.e.term));
      const list=matched.map(x=>x.e);
      summary.innerHTML=`Showing <strong>${list.length}</strong> of <strong>${entries.length}</strong> course vocabulary entries`;
      page.innerHTML=list.map(e=>`<article class="glossary-entry" id="${esc(e.slug)}"><div class="glossary-entry-head"><div><h2>${esc(e.term)}</h2><div class="pron">${esc(e.pronunciation||'')}</div></div><span class="category">${esc(e.category)}</span></div><p class="plain"><strong>Plain-English definition:</strong> ${esc(e.definition)}</p><p class="technical"><strong>Technical definition:</strong> ${esc(e.technical)}</p>${e.note?`<p><strong>Course note:</strong> ${esc(e.note)}</p>`:''}<div class="glossary-meta">${e.aliases?.length?`<div><strong>Also called / written</strong>${e.aliases.map(esc).join(', ')}</div>`:''}${e.notation?`<div><strong>Notation / abbreviation</strong>${esc(e.notation)}</div>`:''}${e.weeks?.length?`<div><strong>Course weeks</strong>${e.weeks.map(w=>`Week ${w}`).join(', ')}</div>`:''}<div><strong>Authoritative basis</strong><a href="${esc(e.sourceDetail?.url||'#')}" target="_blank" rel="noopener noreferrer">${esc(e.sourceDetail?.name||'Reference source')} ↗</a></div></div></article>`).join('')||'<div class="glossary-empty">No Dictionary entries match those filters.</div>';
      if(location.hash){const id=decodeURIComponent(location.hash.slice(1));requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({block:'center'}));}
    }
    q.addEventListener('input',render);cat.addEventListener('change',render);alpha.addEventListener('click',ev=>{const b=ev.target.closest('button[data-letter]');if(!b)return;letter=b.dataset.letter;alpha.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));render();});render();
  }
})();
