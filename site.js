
(() => {
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const EVENTS=window.ALFRED_EVENTS||[];
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

  const toggle=$('.nav-toggle');
  if(toggle){
    toggle.addEventListener('click',()=>{
      const nav=$('.main-nav'); const open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open);
    });
  }

  function courseInfo(now=new Date()){
    if(!EVENTS.length) return null;
    const sorted=[...EVENTS].sort((a,b)=>new Date(a.start)-new Date(b.start));
    const future=sorted.filter(e=>new Date(e.start)>=now);
    const next=future[0]||sorted[sorted.length-1];
    const same=sorted.find(e=>sameDay(new Date(e.start),now));
    let currentWeek=null;
    for(const e of sorted.filter(e=>e.week)){
      if(new Date(e.start)<=now) currentWeek=e.week;
    }
    if(currentWeek===null && sorted.some(e=>e.week)) currentWeek=sorted.find(e=>e.week)?.week;
    return {now,next,sameDay:same,currentWeek};
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
      if(title) title.textContent=`Week ${String(info.currentWeek||1).padStart(2,'0')} · ${weekTopic(info.currentWeek||1)}`;
      if(copy) copy.textContent=info.sameDay?`Today: ${info.sameDay.summary.replace(/^AU-ESET 301 \| /,'')}`:`Next: ${info.next.summary.replace(/^AU-ESET 301 \| /,'')}`;
      if($('#announcement-text')) $('#announcement-text').textContent=info.sameDay?`Today: ${info.sameDay.summary}`:`Next session: ${info.next.summary}`;
    }
  }
  if($('#upcoming-events')){
    const now=new Date();
    const upcoming=EVENTS.filter(e=>new Date(e.start)>=now).slice(0,3);
    $('#upcoming-events').innerHTML=upcoming.map(e=>`
      <article class="preview-event">
        <div class="date">${esc(fmtDate(e.start))} · ${esc(fmtTime(e.start))}</div>
        <h3>${esc(e.summary.replace(/^AU-ESET 301 \| /,''))}</h3>
        <p>${esc(e.today||e.outcomes?.[0]||'Open the calendar for complete assignment details.')}</p>
      </article>`).join('');
  }

  // Curriculum accordion
  if($('#curriculum-weeks')){
    $('#curriculum-weeks').innerHTML=WEEKS.map(w=>`
      <div class="week-item">
        <button class="week-button" aria-expanded="false">
          <span class="week-number">Week ${String(w.week).padStart(2,'0')}</span>
          <strong>${esc(w.topic)}</strong><span>＋</span>
        </button>
        <div class="week-detail">
          <p><strong>${esc(phaseForWeek(w.week))}</strong></p>
          ${w.start?`<p>${esc(fmtDate(w.start+'T12:00:00'))}</p>`:''}
          ${w.outcomes?.length?`<p>By the end of this week, you should be able to explain or demonstrate:</p><ul>${w.outcomes.map(o=>`<li>${esc(o)}</li>`).join('')}</ul>`:'<p>See the academic calendar for detailed assignments and outcomes.</p>'}
        </div>
      </div>`).join('');
    $$('.week-button').forEach(b=>b.addEventListener('click',()=>{
      const item=b.closest('.week-item'); const open=item.classList.toggle('open');
      b.setAttribute('aria-expanded',open); b.lastElementChild.textContent=open?'−':'＋';
    }));
  }

  // Event modal
  const modal=$('#event-modal');
  function eventDetailHTML(e){
    const outcomes=e.outcomes?.length?`<div class="modal-section"><h3>After Today — Required Learning Outcomes</h3><ul>${e.outcomes.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:'';
    const today=e.today?`<div class="modal-section"><h3>Today’s Work</h3><div class="raw">${linkify(e.today)}</div></div>`:'';
    return `
      <div class="modal-date">${fmtDate(e.start)} · ${fmtTime(e.start)}${e.week?` · Week ${String(e.week).padStart(2,'0')}`:''}</div>
      <h2 id="event-modal-title">${esc(e.summary.replace(/^AU-ESET 301 \| /,''))}</h2>
      ${today}${outcomes}
      <div class="modal-section"><h3>Complete Event Description & Resources</h3><div class="raw">${linkify(e.description)}</div></div>`;
  }
  function openEvent(id){
    const e=EVENTS.find(x=>x.id===Number(id)); if(!e||!modal) return;
    $('#event-modal-content').innerHTML=eventDetailHTML(e);
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  }
  function closeModal(){
    if(!modal) return; modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow='';
  }
  $$('[data-close-modal]').forEach(x=>x.addEventListener('click',closeModal));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

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
            <p>${info?.sameDay?`Today has ${EVENTS.filter(e=>sameDay(new Date(e.start),info.now)).length} scheduled course item(s).`:`Next scheduled session: ${esc(info?.next?.summary.replace(/^AU-ESET 301 \| /,'')||'—')}`}</p>
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
          ${dayEvents.slice(0,3).map(e=>`<button class="month-event type-${esc(e.type)}" data-event-id="${e.id}">${fmtTime(e.start)} · ${esc(e.summary.replace(/^AU-ESET 301 \| (Week \d+ \| )?/,''))}</button>`).join('')}
          ${dayEvents.length>3?`<div class="more-events">+${dayEvents.length-3} more</div>`:''}
        </div>`);
      }
      monthView.innerHTML=`<div class="month-calendar"><div class="month-weekdays">${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(x=>`<div>${x}</div>`).join('')}</div><div class="month-grid">${cells.join('')}</div></div>`;
      $$('[data-event-id]',monthView).forEach(b=>b.addEventListener('click',()=>openEvent(b.dataset.eventId)));
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

  if('serviceWorker' in navigator && location.protocol.startsWith('http')){
    navigator.serviceWorker.register('service-worker.js').catch(()=>{});
  }
})();
