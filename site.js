
(() => {
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const EVENTS=window.ALFRED_EVENTS||[];
  try{ if(localStorage.getItem('alfred-u-quiet-mode')==='1') document.body.classList.add('quiet-mode'); }catch{}
  const WEEKS=window.ALFRED_WEEKS||[];
  const RESOURCES=window.ALFRED_RESOURCES||[];
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const linkify=s=>esc(s).replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>');
  const fmtDate=(iso,opts={weekday:'short',month:'short',day:'numeric',year:'numeric'})=>new Intl.DateTimeFormat('en-US',opts).format(new Date(iso));
  const fmtTime=iso=>new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit'}).format(new Date(iso));
  const sameDay=(a,b)=>a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();
  const startOfDay=d=>new Date(d.getFullYear(),d.getMonth(),d.getDate());
  const weekTopic=w=>WEEKS.find(x=>x.week===w)?.topic||`Week ${w}`;
  const phaseForWeek=w=>{
    if(!w) return 'Pre-Course';
    if(w<=5) return 'Phase I · Electrical Foundations';
    if(w<=13) return 'Phase II · Electronics & Troubleshooting';
    if(w<=18) return 'Phase III · Embedded Core';
    if(w<=23) return 'Phase IV · CETa Breadth & Readiness';
    if(w<=29) return 'Phase V · Capstone & Role Proof';
    return 'Phase VI · Career Launch';
  };

  const focusableSelector='a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  function trapFocus(e,container,extra=[]){
    if(e.key!=='Tab'||!container) return;
    const items=[...extra,...$$(focusableSelector,container)].filter((el,i,arr)=>el.offsetParent!==null&&arr.indexOf(el)===i);
    if(!items.length) return;
    const first=items[0],last=items[items.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }

  const toggle=$('.nav-toggle');
  const nav=$('.main-nav');
  const more=$('.nav-more');
  const moreButton=$('.nav-more-button');

  if(nav){
    let backdrop=$('.nav-backdrop');
    if(!backdrop){
      backdrop=document.createElement('div');
      backdrop.className='nav-backdrop';
      document.body.appendChild(backdrop);
    }

    const closeNav=(restoreFocus=false)=>{
      nav.classList.remove('open');
      document.body.classList.remove('nav-open');
      toggle?.setAttribute('aria-expanded','false');
      if(restoreFocus) toggle?.focus();
    };
    const openNav=()=>{
      nav.classList.add('open');
      document.body.classList.add('nav-open');
      toggle?.setAttribute('aria-expanded','true');
      requestAnimationFrame(()=>$('.main-nav a')?.focus());
    };

    toggle?.addEventListener('click',()=>{
      nav.classList.contains('open') ? closeNav() : openNav();
    });
    backdrop.addEventListener('click',closeNav);
    $$('.main-nav a').forEach(link=>link.addEventListener('click',closeNav));

    moreButton?.addEventListener('click',(e)=>{
      if(window.matchMedia('(min-width:1051px)').matches){
        e.stopPropagation();
        const open=more.classList.toggle('open');
        moreButton.setAttribute('aria-expanded',String(open));
      }
    });

    document.addEventListener('click',(e)=>{
      if(more && !more.contains(e.target)){
        more.classList.remove('open');
        moreButton?.setAttribute('aria-expanded','false');
      }
    });

    document.addEventListener('keydown',(e)=>{
      if(e.key==='Escape'){
        const wasOpen=nav.classList.contains('open');
        closeNav(wasOpen);
        more?.classList.remove('open');
        moreButton?.setAttribute('aria-expanded','false');
      }else if(e.key==='Tab'&&nav.classList.contains('open')&&window.matchMedia('(max-width:1050px)').matches){
        trapFocus(e,nav,toggle?[toggle]:[]);
      }
    });

    window.addEventListener('resize',()=>{
      if(window.innerWidth>1050) closeNav();
    });
  }

  function courseInfo(now=new Date()){
    if(!EVENTS.length) return null;
    const sorted=[...EVENTS].sort((a,b)=>new Date(a.start)-new Date(b.start));
    const future=sorted.filter(e=>new Date(e.start)>=now);
    const next=future[0]||null;
    const finalEvent=sorted[sorted.length-1];
    const complete=now>new Date(finalEvent.end||finalEvent.start);
    const same=sorted.find(e=>sameDay(new Date(e.start),now));
    let currentWeek=null;
    for(const e of sorted.filter(e=>e.week)){
      if(new Date(e.start)<=now) currentWeek=e.week;
    }
    if(currentWeek===null && sorted.some(e=>e.week)) currentWeek=sorted.find(e=>e.week)?.week;
    return {now,next,sameDay:same,currentWeek,complete};
  }

  function weekBounds(week){
    const list=EVENTS.filter(e=>e.week===week).sort((a,b)=>new Date(a.start)-new Date(b.start));
    if(!list.length) return null;
    const first=startOfDay(new Date(list[0].start));
    const last=startOfDay(new Date(list[list.length-1].start));
    return {first,last,list};
  }

  function nextMilestone(now=new Date()){
    return EVENTS.find(e=>new Date(e.start)>=now && ['Milestone','Career'].includes(e.type))
      || EVENTS.find(e=>new Date(e.start)>=now && /gate|mastery|milestone/i.test(e.summary));
  }

  function currentWeekDashboardHTML(){
    const info=courseInfo();
    if(!info) return '';
    if(info.complete){
      return `
        <section class="week-dashboard-primary">
          <div class="week-kicker">Academic schedule complete</div>
          <h3>AU-ESET 301 scheduled course complete</h3>
          <p>All ${EVENTS.length} scheduled calendar items are now in the past. Use Student Progress for incomplete work and the Competency Dashboard for remaining mastery gaps.</p>
          <div class="week-progress"><span style="width:100%"></span></div>
          <div class="week-progress-meta"><span>Course start</span><span>100% through scheduled calendar</span><span>Course end</span></div>
        </section>
        <section class="week-dashboard-card"><h4>What to do next</h4><p>Finish incomplete sessions, complete due reviews in Study, and verify the career-readiness gate before treating the program as complete.</p></section>
        <section class="week-dashboard-card"><h4>Keep the evidence</h4><p>Preserve your project documentation, instrument captures, Git history, resume, and interview examples as your transition portfolio.</p></section>`;
    }
    const w=info.currentWeek||1;
    const bounds=weekBounds(w);
    const week=WEEKS.find(x=>x.week===w);
    const now=info.now;
    let progress=0;
    if(bounds){
      const start=bounds.first.getTime();
      const end=new Date(bounds.last.getFullYear(),bounds.last.getMonth(),bounds.last.getDate(),23,59,59).getTime();
      progress=Math.max(0,Math.min(100,((now.getTime()-start)/(end-start))*100));
    }
    const upcoming=EVENTS.filter(e=>e.week===w && new Date(e.start)>=now).slice(0,3);
    const outcomes=(week?.outcomes||[]).slice(0,4);
    const milestone=nextMilestone(now);
    return `
      <section class="week-dashboard-primary">
        <div class="week-kicker">${esc(phaseForWeek(w))}</div>
        <h3>Week ${String(w).padStart(2,'0')} · ${esc(weekTopic(w))}</h3>
        <p>${bounds?`${fmtDate(bounds.first.toISOString(),{month:'long',day:'numeric'})} – ${fmtDate(bounds.last.toISOString(),{month:'long',day:'numeric',year:'numeric'})}`:''}</p>
        <div class="week-progress"><span style="width:${progress.toFixed(0)}%"></span></div>
        <div class="week-progress-meta"><span>Week start</span><span>${progress.toFixed(0)}% through calendar week</span><span>Week end</span></div>
      </section>
      <section class="week-dashboard-card">
        <h4>Next on your calendar</h4>
        ${upcoming.length?upcoming.map(e=>`<div class="dashboard-event"><strong>${esc(e.summary.replace(/^AU-ESET 301 \| /,''))}</strong><span>${fmtDate(e.start,{weekday:'short',month:'short',day:'numeric'})} · ${fmtTime(e.start)}</span></div>`).join(''):'<p>No remaining sessions this week.</p>'}
      </section>
      <section class="week-dashboard-card">
        <h4>This week should leave you able to…</h4>
        ${outcomes.length?`<ul class="outcome-list">${outcomes.map(o=>`<li>${esc(o)}</li>`).join('')}</ul>`:'<p>Open the calendar for detailed outcomes.</p>'}
        ${milestone?`<div class="dashboard-event"><strong>Next milestone</strong><span>${fmtDate(milestone.start,{month:'short',day:'numeric'})} · ${esc(milestone.summary.replace(/^AU-ESET 301 \| /,''))}</span></div>`:''}
      </section>`;
  }

  // Home dynamic blocks
  if($('#current-week-dashboard')){
    $('#current-week-dashboard').innerHTML=currentWeekDashboardHTML();
    const info=courseInfo();
    if(info){
      const title=$('#notice-academic-title'), copy=$('#notice-academic-copy');
      if(info.complete){
        if(title) title.textContent='Scheduled course complete';
        if(copy) copy.textContent=`All ${EVENTS.length} scheduled course items are in the past. Review Student Progress for anything still open.`;
        if($('#announcement-text')) $('#announcement-text').textContent='AU-ESET 301 scheduled calendar complete · Close incomplete work in Progress and mastery gaps in Analytics.';
      }else{
        if(title) title.textContent=`Week ${String(info.currentWeek||1).padStart(2,'0')} · ${weekTopic(info.currentWeek||1)}`;
        if(copy) copy.textContent=info.sameDay?`Today: ${info.sameDay.summary.replace(/^AU-ESET 301 \| /,'')}`:`Next: ${info.next?.summary.replace(/^AU-ESET 301 \| /,'')||'No additional scheduled session'}`;
        if($('#announcement-text')) $('#announcement-text').textContent=info.sameDay?`Today: ${info.sameDay.summary}`:`Next session: ${info.next?.summary||'No additional scheduled session'}`;
      }
    }
  }
  // Event modal
  const modal=$('#event-modal');
  let modalReturnFocus=null;
  function eventDetailHTML(e){
    const outcomes=e.outcomes?.length?`<div class="modal-section"><h3>After Today — Required Learning Outcomes</h3><ul>${e.outcomes.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:'';
    const today=e.today?`<div class="modal-section"><h3>Today’s Work</h3><div class="raw">${linkify(e.today)}</div></div>`:'';
    return `
      <div class="modal-date">${fmtDate(e.start)} · ${fmtTime(e.start)}${e.week?` · Week ${String(e.week).padStart(2,'0')}`:''}</div>
      <h2 id="event-modal-title">${esc(e.summary.replace(/^AU-ESET 301 \| /,''))}</h2>
      ${today}${outcomes}
      <div class="modal-section event-quiz-cta"><h3>Lesson Quiz</h3><p>20 questions · 10 CETa + 10 career-transition questions. Take it after completing this calendar item.</p><a class="button green" href="quiz.html?type=lesson&id=${e.id}">Take this lesson quiz →</a></div>
      <div class="modal-section"><h3>Complete Event Description & Resources</h3><div class="raw">${linkify(e.description)}</div></div>`;
  }
  function openEvent(id){
    const e=EVENTS.find(x=>x.id===Number(id)); if(!e||!modal) return;
    modalReturnFocus=document.activeElement;
    $('#event-modal-content').innerHTML=eventDetailHTML(e);
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    requestAnimationFrame(()=>$('.modal-close',modal)?.focus());
  }
  function closeModal(){
    if(!modal||!modal.classList.contains('open')) return;
    modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow='';
    const restore=modalReturnFocus; modalReturnFocus=null;
    if(restore?.focus) restore.focus();
  }
  $$('[data-close-modal]').forEach(x=>x.addEventListener('click',closeModal));
  document.addEventListener('keydown',e=>{
    if(!modal?.classList.contains('open')) return;
    if(e.key==='Escape') closeModal();
    else trapFocus(e,$('.event-modal-card',modal));
  });

  // Calendar
  const monthView=$('#calendar-month-view');
  if(monthView){
    const q=$('#calendar-search'), wf=$('#week-filter'), tf=$('#type-filter');
    const agenda=$('#calendar-agenda-view'), weekView=$('#calendar-week-view');
    [...new Set(EVENTS.map(e=>e.week).filter(Boolean))].sort((a,b)=>a-b).forEach(w=>wf.insertAdjacentHTML('beforeend',`<option value="${w}">Week ${String(w).padStart(2,'0')}</option>`));
    [...new Set(EVENTS.map(e=>e.type))].sort().forEach(t=>tf.insertAdjacentHTML('beforeend',`<option value="${esc(t)}">${esc(t)}</option>`));

    let activeView='month';
    const today=new Date();
    let focusDate=new Date(today.getFullYear(),today.getMonth(),1);
    const firstEvent=EVENTS[0]?new Date(EVENTS[0].start):today;
    const lastEvent=EVENTS.length?new Date(EVENTS[EVENTS.length-1].start):today;
    if(today<firstEvent||today>lastEvent) focusDate=new Date(firstEvent.getFullYear(),firstEvent.getMonth(),1);

    function filteredEvents(){
      const query=q.value.trim().toLowerCase(), week=wf.value, type=tf.value;
      return EVENTS.filter(e=>
        (!week||String(e.week)===week)&&
        (!type||e.type===type)&&
        (!query||(e.summary+' '+e.description).toLowerCase().includes(query))
      );
    }
    function periodLabel(){
      const label=$('#calendar-period-label');
      if(activeView==='month') label.textContent=new Intl.DateTimeFormat('en-US',{month:'long',year:'numeric'}).format(focusDate);
      else if(activeView==='week'){
        const monday=new Date(focusDate); const day=(monday.getDay()+6)%7; monday.setDate(monday.getDate()-day);
        const sunday=new Date(monday); sunday.setDate(sunday.getDate()+6);
        label.textContent=`${fmtDate(monday,{month:'short',day:'numeric'})} – ${fmtDate(sunday,{month:'short',day:'numeric',year:'numeric'})}`;
      } else label.textContent='Full Course Agenda';
    }
    function renderCurrentWeek(){
      const info=courseInfo(), w=info?.currentWeek||1, bounds=weekBounds(w), list=bounds?.list||[];
      $('#calendar-current-week').innerHTML=`
        <div class="calendar-current-week-grid">
          <div>
            <div class="eyebrow">${esc(phaseForWeek(w))}</div>
            <h2>Week ${String(w).padStart(2,'0')} · ${esc(weekTopic(w))}</h2>
            <p>${info?.complete?`The scheduled AU-ESET 301 calendar is complete. Use Student Progress to close remaining work.`:info?.sameDay?`Today has ${EVENTS.filter(e=>sameDay(new Date(e.start),info.now)).length} scheduled course item(s).`:`Next scheduled session: ${esc(info?.next?.summary.replace(/^AU-ESET 301 \| /,'')||'—')}`}</p>
          </div>
          <div class="mini-stats">
            <div><strong>${list.length}</strong><span>Scheduled items</span></div>
            <div><strong>${WEEKS.find(x=>x.week===w)?.outcomes?.length||0}</strong><span>Week outcomes</span></div>
            <div><strong>${fmtDate((bounds?.last||new Date()).toISOString(),{month:'short',day:'numeric'})}</strong><span>Week endpoint</span></div>
          </div>
        </div>`;
    }
    function renderMonth(){
      const events=filteredEvents();
      const y=focusDate.getFullYear(), m=focusDate.getMonth();
      const first=new Date(y,m,1), firstDow=first.getDay();
      const gridStart=new Date(y,m,1-firstDow);
      const cells=[];
      for(let i=0;i<42;i++){
        const d=new Date(gridStart); d.setDate(gridStart.getDate()+i);
        const dayEvents=events.filter(e=>sameDay(new Date(e.start),d)).sort((a,b)=>new Date(a.start)-new Date(b.start));
        cells.push(`<div class="month-day ${d.getMonth()!==m?'outside ':''}${sameDay(d,today)?'today':''}">
          <div class="day-number">${d.getDate()}</div>
          ${dayEvents.map((e,index)=>`<button class="month-event type-${esc(e.type)}${index>=3?' month-event-extra hidden':''}" data-event-id="${e.id}">${fmtTime(e.start)} · ${esc(e.summary.replace(/^AU-ESET 301 \| (Week \d+ \| )?/,''))}</button>`).join('')}
          ${dayEvents.length>3?`<button type="button" class="more-events" data-more-events aria-expanded="false">Show ${dayEvents.length-3} more</button>`:''}
        </div>`);
      }
      monthView.innerHTML=`<div class="month-calendar"><div class="month-weekdays">${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(x=>`<div>${x}</div>`).join('')}</div><div class="month-grid">${cells.join('')}</div></div>`;
      $$('[data-event-id]',monthView).forEach(b=>b.addEventListener('click',()=>openEvent(b.dataset.eventId)));
      $$('[data-more-events]',monthView).forEach(button=>button.addEventListener('click',()=>{
        const cell=button.closest('.month-day');
        const extras=$$('.month-event-extra',cell);
        const opening=extras.some(x=>x.classList.contains('hidden'));
        extras.forEach(x=>x.classList.toggle('hidden',!opening));
        button.setAttribute('aria-expanded',String(opening));
        button.textContent=opening?'Hide extra events':`Show ${extras.length} more`;
      }));
    }
    function renderWeek(){
      const events=filteredEvents();
      const monday=new Date(focusDate); const day=(monday.getDay()+6)%7; monday.setDate(monday.getDate()-day);
      const days=[];
      for(let i=0;i<7;i++){
        const d=new Date(monday); d.setDate(monday.getDate()+i);
        const dayEvents=events.filter(e=>sameDay(new Date(e.start),d)).sort((a,b)=>new Date(a.start)-new Date(b.start));
        days.push(`<div class="week-day-column ${sameDay(d,today)?'today':''}">
          <div class="week-day-head"><strong>${fmtDate(d,{weekday:'short'})}</strong><span>${fmtDate(d,{month:'short',day:'numeric'})}</span></div>
          <div class="week-day-events">${dayEvents.length?dayEvents.map(e=>`<div class="week-event" data-event-id="${e.id}"><strong>${fmtTime(e.start)}</strong><span>${esc(e.summary.replace(/^AU-ESET 301 \| (Week \d+ \| )?/,''))}</span></div>`).join(''):'<span style="color:#9aa39f;font-size:.75rem">No scheduled work</span>'}</div>
        </div>`);
      }
      weekView.innerHTML=`<div class="week-calendar">${days.join('')}</div>`;
      $$('[data-event-id]',weekView).forEach(b=>b.addEventListener('click',()=>openEvent(b.dataset.eventId)));
    }
    function renderAgenda(){
      const events=filteredEvents();
      $('#calendar-summary').innerHTML=`<span class="summary-chip">${events.length} scheduled items</span>${wf.value?`<span class="summary-chip">Week ${String(wf.value).padStart(2,'0')}</span>`:''}${tf.value?`<span class="summary-chip">${esc(tf.value)}</span>`:''}`;
      $('#calendar-list').innerHTML=events.map(e=>`<article class="calendar-event">
        <div class="event-date-block"><strong>${esc(fmtDate(e.start))}</strong><span>${esc(fmtTime(e.start))} – ${esc(fmtTime(e.end))}</span>${e.week?`<span> · Week ${String(e.week).padStart(2,'0')}</span>`:''}</div>
        <div class="event-main"><div class="event-top"><h3>${esc(e.summary.replace(/^AU-ESET 301 \| /,''))}</h3><span class="event-badge">${esc(e.type)}</span></div>
        <div class="event-actions"><button class="event-toggle" data-event-id="${e.id}">Open assignment & outcomes</button></div></div>
      </article>`).join('');
      $$('[data-event-id]',$('#calendar-list')).forEach(b=>b.addEventListener('click',()=>openEvent(b.dataset.eventId)));
    }
    function render(){
      periodLabel(); renderMonth(); renderWeek(); renderAgenda();
      monthView.classList.toggle('hidden',activeView!=='month');
      weekView.classList.toggle('hidden',activeView!=='week');
      agenda.classList.toggle('hidden',activeView!=='agenda');
      $$('.view-button').forEach(b=>b.classList.toggle('active',b.dataset.calendarView===activeView));
    }
    $$('.view-button').forEach(b=>b.addEventListener('click',()=>{activeView=b.dataset.calendarView;render();}));
    $('#calendar-prev').addEventListener('click',()=>{
      if(activeView==='month') focusDate=new Date(focusDate.getFullYear(),focusDate.getMonth()-1,1);
      else if(activeView==='week'){focusDate=new Date(focusDate);focusDate.setDate(focusDate.getDate()-7);}
      render();
    });
    $('#calendar-next').addEventListener('click',()=>{
      if(activeView==='month') focusDate=new Date(focusDate.getFullYear(),focusDate.getMonth()+1,1);
      else if(activeView==='week'){focusDate=new Date(focusDate);focusDate.setDate(focusDate.getDate()+7);}
      render();
    });
    $('#calendar-today').addEventListener('click',()=>{focusDate=new Date(today);render();});
    q.addEventListener('input',render); wf.addEventListener('change',render); tf.addEventListener('change',render);
    renderCurrentWeek(); render();
  }

  // Resources
  const resList=$('#resource-list');
  if(resList){
    const q=$('#resource-search'), cat=$('#resource-category');
    [...new Set(RESOURCES.map(r=>r.category))].sort().forEach(c=>cat.insertAdjacentHTML('beforeend',`<option value="${esc(c)}">${esc(c)}</option>`));
    function renderRes(){
      const query=q.value.trim().toLowerCase(), c=cat.value;
      const filtered=RESOURCES.filter(r=>(!c||r.category===c)&&(!query||(r.title+' '+r.url+' '+r.category+' '+r.contexts.join(' ')).toLowerCase().includes(query)));
      $('#resource-stats').textContent=`${filtered.length} assigned web resources shown. The PDF Resource Manual contains the broader course library.`;
      const groups={}; filtered.forEach(r=>(groups[r.category]??=[]).push(r));
      resList.innerHTML=Object.keys(groups).sort().map(g=>`<section class="resource-group"><h2>${esc(g)}</h2><div class="resource-grid">${groups[g].map(r=>`<article class="resource-card"><h3>${esc(r.title||r.domain)}</h3><div class="domain">${esc(r.domain)}</div><p>${r.weeks.length?'Assigned: Week'+(r.weeks.length>1?'s ':' ')+r.weeks.join(', '):'Supporting reference'}</p><a href="${esc(r.url)}" target="_blank" rel="noopener">Open resource →</a></article>`).join('')}</div></section>`).join('');
    }
    q.addEventListener('input',renderRes); cat.addEventListener('change',renderRes); renderRes();
  }

  
  // Lightweight progress summary from the Student Progress Portal.
  if($('#home-progress-summary')){
    try{
      const ps=JSON.parse(localStorage.getItem('alfred-u-progress-v2')||localStorage.getItem('alfred-u-progress-v1')||'{}');
      let complete=0, review=0;
      EVENTS.forEach(e=>{
        const s=ps?.events?.[String(e.id)]||{};
        if(s.status==='complete') complete++;
        if(s.studyReview?.due && new Date(s.studyReview.due)<=new Date()) review++;
      });
      Object.values(ps.weeks||{}).forEach(w=>Object.values(w?.reviewQueue||{}).forEach(r=>{if(Date.parse(r.due)<=Date.now())review++;}));
      const pct=EVENTS.length?Math.round((complete/EVENTS.length)*100):0;
      $('#home-progress-percent').textContent=`${pct}%`;
      $('#home-progress-events').textContent=`${complete} / ${EVENTS.length}`;
      $('#home-progress-review').textContent=String(review);
    }catch{}
  }

  if('serviceWorker' in navigator && location.protocol.startsWith('http')){
    navigator.serviceWorker.register('service-worker.js').catch(()=>{});
  }
})();
