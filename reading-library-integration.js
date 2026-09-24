/* AU-ESET 301 — v16.3.59 centralized outside-reading + CETa Study Guide index */
(()=>{
  'use strict';
  const REV='2026-09-23-v16.3.59-ceta-literature-library-integration';
  const esc=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const uniq=values=>[...new Set(values.filter(v=>v!==''&&v!=null))];
  const page=document.body?.dataset?.page||'';

  function assignmentStatus(source){
    const A=window.ALFRED_CURRICULUM?.teachingMediaArchitecture?.assignments||{};
    const rows=Object.values(A).filter(a=>a?.source===source);
    if(rows.some(a=>a.destination==='classroom'))return 'Required';
    if(rows.some(a=>a.destination==='study'))return 'Study';
    if(rows.some(a=>a.destination==='library'))return 'Reference';
    return '';
  }

  function outsideItems(){
    const C=window.ALFRED_CURRICULUM||{},O=C.outsideLiteratureIntegration||{};
    let entries=Object.entries(O.bySource||{});
    if(!entries.length&&Array.isArray(O.literaturePlacements)){
      const grouped={};
      O.literaturePlacements.forEach(p=>(grouped[p.source]||=[]).push(p));
      entries=Object.entries(grouped);
    }
    return entries.map(([source,rows])=>{
      rows=Array.isArray(rows)?rows:[];
      const meta=O.sources?.[source]||C.sources?.[source]||{};
      const first=rows[0]||{};
      const weeks=uniq(rows.map(r=>Number(r.targetWeek||r.assignmentWeek)).filter(Number.isFinite)).sort((a,b)=>a-b);
      const status=assignmentStatus(source)||(
        rows.some(r=>r.requirement==='required')?'Required':
        rows.some(r=>r.requirement==='supporting')?'Study':'Reference'
      );
      const p=rows.find(r=>Number.isFinite(Number(r.targetWeek)))||first;
      const internal=p?.targetWeek?`learn.html?week=${Number(p.targetWeek)}&stage=${Number(p.lesson)===0?'ceta-lesson':'career-lesson'}&lesson=${Number(p.lesson||0)}&section=${encodeURIComponent(p.segment||'')}`:'';
      return {
        id:`lit-${source}`,type:'Outside literature',status,weeks,
        title:meta.title||C.sources?.[source]?.title||source,
        source:meta.author?`${meta.author} · ${meta.org||''}`:(meta.org||C.sources?.[source]?.org||'Verified external source'),
        subtitle:[meta.literatureType||meta.kind||'Written companion',meta.access].filter(Boolean).join(' · '),
        summary:first.why||first.readUse||meta.provenance||meta.purpose||'Written companion mapped to course instruction.',
        focus:first.focus||first.readUse||meta.purpose||'Use the mapped section that supports the Alfred concept.',
        after:first.afterReading||first.afterAction||'Return to the mapped Alfred section and apply the relationship.',
        external:meta.url||C.sources?.[source]?.url||'',internal,
        keywords:[source,meta.title,meta.org,meta.author,meta.kind,meta.literatureType,meta.provenance,first.why,first.focus,first.afterReading,weeks.join(' ')].join(' ')
      };
    }).filter(x=>x.title);
  }

  function guideItems(){
    const SG=window.ALFRED_CETA_STUDY_GUIDE||{};
    return (SG.records||[]).map(r=>{
      const classification=r.classification==='required'?'Required':r.classification==='study'?'Review':'Reference';
      const errata=SG.errataFor?.(r)||[];
      const p=SG.primaryPlacement?.(r)||(r.placements||[])[0]||null;
      return {
        id:`guide-${r.id}`,type:'CETa Study Guide',status:classification,weeks:[Number(r.week)],
        title:`Associate CET Study Guide · Chapter ${r.chapter} · ${SG.pageLabel?.(r)||''}`,
        source:'ETA International · Sixth Edition',
        subtitle:`${classification}${Number(r.estimatedMinutes)>0?` · ~${Number(r.estimatedMinutes)} min`:''} · private book locator`,
        summary:r.purpose||'CETa reinforcement mapped after Alfred teaches the concept.',
        focus:r.focus||'Use the exact printed pages mapped to this course week.',
        after:r.after||'Return to Alfred and apply the concept.',
        errata,
        internal:p?`learn.html?week=${p.week}&stage=${Number(p.lesson)===0?'ceta-lesson':'career-lesson'}&lesson=${p.lesson}&section=${encodeURIComponent(p.segment)}`:`study.html?week=${r.week}&view=media`,
        study:`study.html?week=${r.week}&view=media`,
        keywords:[r.id,r.chapter,SG.pageLabel?.(r),r.purpose,r.focus,r.after,r.studyCategory,r.authorityNote,errata.map(x=>`${x.label} ${x.correction}`).join(' ')].join(' ')
      };
    });
  }

  function buildItems(){
    return [...guideItems(),...outsideItems()];
  }

  function card(item){
    const weeks=item.weeks.map(w=>`<span>W${esc(w)}</span>`).join('');
    const errata=(item.errata||[]).map(x=>`<p class="hosting-note"><strong>⚠ ${esc(x.label)}</strong> — ${esc(x.correction)}</p>`).join('');
    return `<article class="resource-card enhanced-card" data-reading-card data-reading-type="${esc(item.type)}" data-reading-status="${esc(item.status)}" data-reading-weeks="${esc(item.weeks.join(','))}" data-reading-search="${esc([item.title,item.source,item.subtitle,item.summary,item.focus,item.after,item.keywords].join(' ').toLowerCase())}">
      <div class="resource-meta"><span>${esc(item.type)}</span><span>${esc(item.status)}</span></div>
      <h3>${esc(item.title)}</h3>
      <p class="hosting-note">${esc(item.source)}${item.subtitle?` · ${esc(item.subtitle)}`:''}</p>
      <p><strong>Why this is here:</strong> ${esc(item.summary)}</p>
      <p><strong>Focus on:</strong> ${esc(item.focus)}</p>
      <p><strong>After reading:</strong> ${esc(item.after)}</p>
      ${errata}
      <div class="resource-map">${weeks}</div>
      <div class="resource-card-foot">
        ${item.external?`<a class="text-link" href="${esc(item.external)}" target="_blank" rel="noopener">Open source ↗</a>`:''}
        ${item.internal?`<a class="text-link" href="${esc(item.internal)}">Open mapped lesson →</a>`:''}
        ${item.study?`<a class="text-link" href="${esc(item.study)}">Open in Study →</a>`:''}
      </div>
    </article>`;
  }

  function render(){
    if(page!=='resources'||document.querySelector('#course-reading-index'))return;
    const items=buildItems();
    const guideCount=items.filter(x=>x.type==='CETa Study Guide').length;
    const literatureCount=items.filter(x=>x.type==='Outside literature').length;
    const section=document.createElement('section');
    section.className='section shell';
    section.id='course-reading-index';
    section.innerHTML=`<div class="section-heading"><div><div class="eyebrow green">Course Reading Index</div><h2>Outside literature + CETa Study Guide, in one searchable place.</h2></div><p>This is a reference index, not another homework list. Required/Review/Reference labels mirror the existing Classroom and Study assignments; opening this index creates no new obligation.</p></div>
      <div class="academic-hero-stats"><div><strong>${guideCount}</strong><span>CETa Study Guide records</span></div><div><strong>${literatureCount}</strong><span>Outside written sources</span></div></div>
      <div class="resource-filters">
        <label>Search<input id="course-reading-search" type="search" placeholder="Ohm’s law, op amp, UART, troubleshooting…"></label>
        <label>Type<select id="course-reading-type"><option value="">All types</option><option>CETa Study Guide</option><option>Outside literature</option></select></label>
        <label>Status<select id="course-reading-status"><option value="">All statuses</option><option>Required</option><option>Review</option><option>Study</option><option>Reference</option></select></label>
        <label>Week<select id="course-reading-week"><option value="">All weeks</option>${Array.from({length:31},(_,i)=>`<option value="${i+1}">Week ${String(i+1).padStart(2,'0')}</option>`).join('')}</select></label>
      </div>
      <p class="small-note" id="course-reading-summary"></p>
      <div class="resource-grid enhanced" id="course-reading-results"></div>`;
    const callout=document.querySelector('main > .section.shell:last-of-type');
    if(callout)callout.insertAdjacentElement('beforebegin',section);else document.querySelector('main')?.appendChild(section);

    const q=section.querySelector('#course-reading-search'),type=section.querySelector('#course-reading-type'),status=section.querySelector('#course-reading-status'),week=section.querySelector('#course-reading-week'),results=section.querySelector('#course-reading-results'),summary=section.querySelector('#course-reading-summary');
    const update=()=>{
      const query=(q.value||'').trim().toLowerCase(),t=type.value,s=status.value,w=Number(week.value||0);
      const list=items.filter(item=>(!t||item.type===t)&&(!s||item.status===s)&&(!w||item.weeks.includes(w))&&(!query||[item.title,item.source,item.subtitle,item.summary,item.focus,item.after,item.keywords].join(' ').toLowerCase().includes(query)));
      summary.textContent=`${list.length} of ${items.length} mapped reading records shown · ${guideCount} Study Guide · ${literatureCount} outside literature`;
      results.innerHTML=list.length?list.map(card).join(''):'<p class="empty-state">No mapped readings match these filters.</p>';
    };
    [q,type,status,week].forEach(el=>el.addEventListener('input',update));
    update();
  }

  window.AlfredReadingLibraryIntegration={revision:REV,buildItems,guideItems,outsideItems,render};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(render,0),{once:true});else setTimeout(render,0);
})();
