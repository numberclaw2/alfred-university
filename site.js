
(() => {
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const EVENTS=window.ALFRED_EVENTS||[];
  try{ if(localStorage.getItem('alfred-u-quiet-mode')==='1') document.body.classList.add('quiet-mode'); }catch{}
  const WEEKS=window.ALFRED_WEEKS||[];
  const RESOURCES=window.ALFRED_RESOURCES||[];
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const linkify=s=>esc(s).replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>');
  const calendarCopyReplacements=[
    [/\bresourcesalready\b/gi,'resources already'],
    [/\bresourcestied\b/gi,'resources tied'],
    [/\btothis\b/gi,'to this'],
    [/\bthisweek’s\b/gi,'this week’s'],
    [/\bweek’scompetencies\b/gi,'week’s competencies'],
    [/\bFirst10\b/gi,'First 10'],
    [/\bFirst10min\b/gi,'First 10 min'],
    [/\brecallprompts\b/gi,'recall prompts'],
    [/\bfreshcalculations\b/gi,'fresh calculations'],
    [/\bofficialformula\b/gi,'official formula'],
    [/\bETAcompetency\b/gi,'ETA competency'],
    [/\bBuild\/measure\/debugthe\b/gi,'Build/measure/debug the'],
    [/\bPhotographor\b/gi,'Photograph or'],
    [/\bdocumentexpected\b/gi,'document expected'],
    [/\bexpectedvsactual\b/gi,'expected vs actual'],
    [/\bandcommit\b/gi,'and commit'],
    [/\bCompletionrequires\b/gi,'Completion requires'],
    [/\bnotwatching\b/gi,'not watching'],
    [/\bApplythe\b/gi,'Apply the'],
    [/\bPredictresults\b/gi,'Predict results'],
    [/\bresultsbefore\b/gi,'results before'],
    [/\bdeliberatelycreate\b/gi,'deliberately create'],
    [/\bwhensafe\b/gi,'when safe'],
    [/\bStudyonlythe\b/gi,'Study only the'],
    [/\bsummaryand\b/gi,'summary and'],
    [/\bWorkfresh\b/gi,'Work fresh'],
    [/\bwithoutnotes\b/gi,'without notes'],
    [/\bmissgets\b/gi,'miss gets'],
    [/\bStart eachnon-exam\b/gi,'Start each non-exam'],
    [/\bnon-exam studyblock\b/gi,'non-exam study block'],
    [/\bNeveruse\b/gi,'Never use'],
    [/\bmissedsession\b/gi,'missed session'],
    [/\bmake-upmarathon\b/gi,'make-up marathon'],
    [/\bportfoliobased\b/gi,'portfolio based'],
    [/\brequestedskills\b/gi,'requested skills'],
    [/\bjobfilter\b/gi,'job filter'],
    [/\bgenuineelectronics\b/gi,'genuine electronics'],
    [/\boptionalperfection\b/gi,'optional perfection'],
    [/\bstarteach\b/gi,'start each'],
    [/\btoembedded\b/gi,'to embedded'],
    [/\bwitha\b/gi,'with a'],
    [/\bonlythe\b/gi,'only the'],
    [/\bfromolder\b/gi,'from older'],
    [/\btheconcept\b/gi,'the concept'],
    [/\basappropriate\b/gi,'as appropriate'],
    [/\bandfault\b/gi,'and fault'],
    [/\bthisweek\b/gi,'this week'],
    [/\binspectjoints\b/gi,'inspect joints'],
    [/\bissueand\b/gi,'issue and'],
    [/\bformulasfrom\b/gi,'formulas from'],
    [/\binterfaceplan\b/gi,'interface plan'],
    [/\bissuelist\b/gi,'issue list'],
    [/\bfortoday\b/gi,'for today'],
    [/\bthetopic\b/gi,'the topic'],
    [/\bitappears\b/gi,'it appears'],
    [/\bitscorrection\b/gi,'its correction'],
    [/\bvsactual\b/gi,'vs actual'],
    [/\btheweek\b/gi,'the week'],
    [/\bFeedbackLoop\b/gi,'Feedback Loop'],
    [/\bAutomatedLogger\b/gi,'Automated Logger'],
    [/\bTestReport\b/gi,'Test Report']
  ];
  function tidyCalendarLine(value){
    let line=String(value??'').replace(/\u00a0/g,' ').trim();
    if(!line||/^https?:\/\//i.test(line)) return line;
    calendarCopyReplacements.forEach(([re,replacement])=>{line=line.replace(re,replacement)});
    line=line.replace(/([.!?])(?=[A-Z])/g,'$1 ');
    line=line.replace(/\s{2,}/g,' ');
    return line;
  }
  function tidyCalendarText(value){
    return String(value??'').replace(/\r/g,'').split('\n').map(tidyCalendarLine).join('\n').replace(/\n{3,}/g,'\n\n').trim();
  }
  function eventDescriptionLines(e){return tidyCalendarText(e.description||'').split('\n');}
  function findCalendarLine(lines,pattern){return lines.find(line=>pattern.test(line))||'';}
  function valueAfterLabel(line,label){return line.replace(label,'').trim();}
  function tidyFocusTitle(value){
    let title=tidyCalendarLine(value).toLowerCase();
    title=title.charAt(0).toUpperCase()+title.slice(1);
    return title.replace(/\bceta\b/gi,'CETa').replace(/\bi2c\b/gi,'I2C').replace(/\bspi\b/gi,'SPI').replace(/\buart\b/gi,'UART').replace(/\bgpio\b/gi,'GPIO').replace(/\bstm32\b/gi,'STM32').replace(/\brf\b/gi,'RF').replace(/\brms\b/gi,'RMS').replace(/\bdmm\b/gi,'DMM').replace(/\br\/c\/l\b/gi,'R/C/L');
  }
  function parseFocusLine(line){
    const match=line.match(/^WEEK\s+(\d+)\s+FOCUS:\s*(.+)$/i);
    if(!match)return null;
    const parts=match[2].split(/\s*:\s*/);
    return {week:match[1],title:tidyFocusTitle(parts.shift()),topics:parts.join(' · ').replace(/\s*\+\s*/g,' · ').replace(/\s+/g,' ').trim()};
  }
  function labeledLinks(text){
    const links=[];
    const re=/(?:^|\n)\s*[•-]?\s*([^:\n]+):\s*(https?:\/\/[^\s<]+)/g;
    let match;
    while((match=re.exec(text))){
      const label=tidyCalendarLine(match[1]);
      const url=match[2].replace(/[),.;]+$/,'');
      if(!links.some(x=>x.url===url)) links.push({label,url});
    }
    return links;
  }
  function renderCalendarLinks(text){
    const links=labeledLinks(text);
    if(!links.length)return '';
    return `<ul class="event-reference-links">${links.map(x=>`<li><a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.label)} <span aria-hidden="true">↗</span></a></li>`).join('')}</ul>`;
  }
  function eventContext(e){
    const lines=eventDescriptionLines(e), raw=tidyCalendarText(e.description||'');
    const focus=parseFocusLine(findCalendarLine(lines,/^WEEK\s+\d+\s+FOCUS:/i));
    const scopeLine=findCalendarLine(lines,/^ETA\/CETa SCOPE/i);
    const purposeLine=findCalendarLine(lines,/^CAREER\/EMBEDDED PURPOSE:/i);
    const careerLine=findCalendarLine(lines,/^CAREER CONNECTION:/i);
    const masteryLine=findCalendarLine(lines,/^MASTERY GATE:/i);
    const whyLine=findCalendarLine(lines,/^WHY THIS STARTS HERE:/i);
    const pathLine=findCalendarLine(lines,/^START FROM ZERO/i);
    const notes=renderCalendarLinks(raw);
    return {
      raw,
      focus,
      scope:scopeLine?valueAfterLabel(scopeLine,/^ETA\/CETa SCOPE(?:\s+—[^:]+)?:\s*/i):'',
      purpose:purposeLine?valueAfterLabel(purposeLine,/^CAREER\/EMBEDDED PURPOSE:\s*/i):'',
      career:careerLine?valueAfterLabel(careerLine,/^CAREER CONNECTION:\s*/i):'',
      mastery:masteryLine?valueAfterLabel(masteryLine,/^MASTERY GATE:\s*/i):'',
      why:whyLine?valueAfterLabel(whyLine,/^WHY THIS STARTS HERE:\s*/i):'',
      path:pathLine?pathLine.replace(/\s+—\s+SESSION\s+\d+$/i,'').trim():'',
      links:notes,
      linkCount:labeledLinks(raw).length
    };
  }
  function textBlock(value,empty='No additional steps are listed for this calendar item.'){
    const text=tidyCalendarText(value);
    return `<div class="event-body-copy">${text?linkify(text):esc(empty)}</div>`;
  }
  window.AlfredCalendarCopy={tidy:tidyCalendarText};
  const fmtDate=(iso,opts={weekday:'short',month:'short',day:'numeric',year:'numeric'})=>new Intl.DateTimeFormat('en-US',opts).format(new Date(iso));
  const fmtTime=iso=>new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit'}).format(new Date(iso));
  const sameDay=(a,b)=>a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();
  const startOfDay=d=>new Date(d.getFullYear(),d.getMonth(),d.getDate());
  const weekTopic=w=>WEEKS.find(x=>x.week===w)?.topic||`Week ${w}`;
  function eventDisplayParts(e){
    const summary=String(e.summary||'').replace(/^AU-ESET 301 \| /,'').trim();
    const match=summary.match(/^W(\d+)\s+•\s+(.+?)\s+—\s+(.+)$/);
    if(!match)return {summary,short:summary,week:'',activity:'',topic:summary};
    return {summary,week:match[1],activity:match[2].trim(),topic:match[3].trim(),short:`${match[2].trim()} · ${match[3].trim()}`};
  }
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

  // v15.2 orientation and access layer.  The course has many legitimate
  // destinations, so give users a short memory aid without changing the
  // underlying URL architecture.
  const filePage=(location.pathname.split('/').pop()||'index.html').replace(/\.html?$/,'')||'index';
  const pageKey=document.body?.dataset.page||filePage;
  const pageLabels={
    index:'Home',home:'Home',study:'Study',learn:'Classroom',week:'Week Overview',calendar:'Academic Calendar',
    practice:'Practice',progress:'Student Progress',analytics:'Mastery',
    'au-eset-301':'Course Overview',course:'Course Overview',engineering:'Engineering',
    resources:'Engineering Library',projects:'Projects',search:'Search Everything',glossary:'Glossary',
    knowledge:'Knowledge Base',labs:'Lab Center',assessments:'Assessment Center',
    standards:'Standards & Retention',documents:'Documents','student-services':'Student Services',
    about:'About','patch-notes':'Release Notes',deployment:'Deployment Notes',quiz:'Assessment'
  };
  const parentMap={
    learn:['Course Overview','course.html'],
    week:['Classroom','learn.html'],
    engineering:['Course Overview','course.html'],
    projects:['Course Overview','course.html'],
    resources:['Course Overview','course.html'],
    knowledge:['Search Everything','search.html'],
    labs:['Practice','practice.html'],
    assessments:['Practice','practice.html'],
    standards:['Mastery','analytics.html'],
    documents:['Course Overview','course.html'],
    deployment:['About','about.html'],
    'patch-notes':['About','about.html'],
    quiz:['Practice','practice.html']
  };

  function installSkipLink(){
    const main=$('main');
    if(!main||document.getElementById('main-content')) return;
    main.id='main-content';
    const skip=document.createElement('a');
    skip.className='skip-link';
    skip.href='#main-content';
    skip.textContent='Skip to main content';
    document.body.insertBefore(skip,document.body.firstChild);
  }

  function addContextTrail(){
    if(['home','index','offline','404'].includes(pageKey)) return;
    const label=pageLabels[pageKey];
    const hero=$('.study-hero .shell,.academic-hero .shell,.page-hero .shell,.progress-hero .shell,.engineering-hero .shell,.project-page-hero .shell,.quiz-hero .shell');
    if(!label||!hero||$('.context-trail',hero)) return;
    const trail=document.createElement('nav');
    trail.className='context-trail';
    trail.setAttribute('aria-label','You are here');
    const home=document.createElement('a');
    home.href='index.html'; home.textContent='Home';
    trail.append(home);
    const parent=parentMap[pageKey];
    if(parent){
      const divider=document.createElement('span'); divider.setAttribute('aria-hidden','true'); divider.textContent='/';
      const parentLink=document.createElement('a'); parentLink.href=parent[1]; parentLink.textContent=parent[0];
      trail.append(divider,parentLink);
    }
    const divider=document.createElement('span'); divider.setAttribute('aria-hidden','true'); divider.textContent='/';
    const current=document.createElement('span'); current.setAttribute('aria-current','page'); current.textContent=label;
    trail.append(divider,current);
    const heroContentHost=hero.matches('.about-grid')
      ? hero.querySelector(':scope > div:last-child')
      : hero.matches('.progress-hero-grid,.engineering-hero-grid,.project-page-grid,.study-hero-grid')
        ? hero.querySelector(':scope > div:first-child')
        : null;
    const trailHost=heroContentHost||hero;
    trailHost.insertBefore(trail,trailHost.firstElementChild);
  }

  function installGlossaryNavigation(){
    const links=$('#primary-navigation .nav-links');
    if(links){
      // Remove any legacy/duplicate Glossary link from More before creating the first-class tab.
      $$('.nav-more-menu a[href="glossary.html"]',links).forEach(a=>a.remove());
      let glossary=$(':scope > a[href="glossary.html"]',links);
      if(!glossary){
        glossary=document.createElement('a');
        glossary.href='glossary.html';
        glossary.textContent='Glossary';
        const more=$(':scope > .nav-more',links);
        links.insertBefore(glossary,more||null);
      }
      if(pageKey==='glossary'){
        $$(':scope > a',links).forEach(a=>{a.classList.remove('active');a.removeAttribute('aria-current');});
        glossary.classList.add('active');glossary.setAttribute('aria-current','page');
      }
    }
    // Keep the glossary discoverable in the global Learning & Practice footer too.
    const learningHeading=$$('.site-footer h3').find(h=>/Learning\s*&\s*Practice/i.test(h.textContent||''));
    const footerCol=learningHeading?.parentElement;
    if(footerCol&&!$('a[href="glossary.html"]',footerCol)){
      const a=document.createElement('a');a.href='glossary.html';a.textContent='Course Glossary';
      const classroom=$('a[href="learn.html"]',footerCol);classroom?.after(a);
    }
  }

  function groupMoreMenu(){
    const menu=$('.nav-more-menu');
    if(!menu||menu.dataset.grouped==='true') return;
    const groups=[
      {label:'Course & Reference',links:['course.html','resources.html','projects.html','search.html']},
      {label:'Practice & Mastery',links:['labs.html','assessments.html','standards.html']},
      {label:'Administration',links:['documents.html','about.html','deployment.html','patch-notes.html']}
    ];
    const links=$$('a',menu);
    menu.replaceChildren();menu.id='more-navigation-menu';
    groups.forEach(group=>{
      const section=document.createElement('div');section.className='nav-menu-group';section.setAttribute('role','group');section.setAttribute('aria-label',group.label);
      const heading=document.createElement('div');heading.className='nav-menu-heading';heading.textContent=group.label;section.append(heading);
      links.filter(link=>group.links.includes((link.getAttribute('href')||'').split('#')[0])).forEach(link=>section.append(link));
      if(section.querySelector('a'))menu.append(section);
    });
    const button=$('.nav-more-button');button?.setAttribute('aria-controls',menu.id);button?.removeAttribute('aria-haspopup');
    menu.dataset.grouped='true';
  }

  installSkipLink();
  installGlossaryNavigation();
  addContextTrail();
  groupMoreMenu();

  const toggle=$('.nav-toggle');
  const nav=$('.main-nav');
  const more=$('.nav-more');
  const moreButton=$('.nav-more-button');

  if(nav){
    const menu=$('.nav-more-menu');
    let backdrop=$('.nav-backdrop');if(!backdrop){backdrop=document.createElement('div');backdrop.className='nav-backdrop';document.body.append(backdrop);}
    const mobile=()=>window.innerWidth<=1050;
    const fitMenu=()=>{if(menu&&!mobile()){const bottom=moreButton.getBoundingClientRect().bottom;menu.style.setProperty('--more-menu-max-height',Math.max(0,Math.floor(window.innerHeight-bottom-15))+'px');}};
    const closeMore=(restore=false)=>{const open=more?.classList.contains('open');more?.classList.remove('open');moreButton?.setAttribute('aria-expanded','false');if(menu)menu.inert=!mobile();if(open&&restore)moreButton.focus();};
    const closeNav=(restore=false)=>{const open=nav.classList.contains('open');nav.classList.remove('open');document.body.classList.remove('nav-open');toggle?.setAttribute('aria-expanded','false');nav.inert=mobile();if(open&&restore)toggle?.focus();};
    const openNav=()=>{nav.inert=false;nav.classList.add('open');document.body.classList.add('nav-open');toggle?.setAttribute('aria-expanded','true');if(menu)menu.inert=false;requestAnimationFrame(()=>$('a',nav)?.focus());};
    closeNav();closeMore();fitMenu();
    toggle?.addEventListener('click',()=>nav.classList.contains('open')?closeNav(true):openNav());
    backdrop.addEventListener('click',()=>closeNav(true));
    $$('a',nav).forEach(link=>link.addEventListener('click',()=>closeNav()));
    moreButton?.addEventListener('click',e=>{if(mobile())return;e.stopPropagation();const open=!more.classList.contains('open');closeMore();if(open){fitMenu();more.classList.add('open');moreButton.setAttribute('aria-expanded','true');menu.inert=false;}});
    document.addEventListener('click',e=>{if(more&&!more.contains(e.target))closeMore();});
    more?.addEventListener('focusout',e=>{if(!more.contains(e.relatedTarget))closeMore();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMore(true);closeNav(true);}else if(nav.classList.contains('open')&&mobile())trapFocus(e,nav,toggle?[toggle]:[]);});
    window.addEventListener('resize',()=>{closeNav();closeMore();fitMenu();});
    window.addEventListener('scroll',fitMenu,{passive:true});
  }

  function courseInfo(now=new Date()){
    if(!EVENTS.length) return null;
    const sorted=[...EVENTS].sort((a,b)=>new Date(a.start)-new Date(b.start));
    const future=sorted.filter(e=>new Date(e.start)>=now);
    const next=future[0]||null;
    const finalEvent=sorted[sorted.length-1];
    const complete=now>new Date(finalEvent.end||finalEvent.start);
    const same=sorted.find(e=>sameDay(new Date(e.start),now));
    const currentWeek=window.AlfredState?.currentWeek(EVENTS,now,WEEKS)||1;
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
        <a class="button gold" href="learn.html?week=${w}">Continue Week ${String(w).padStart(2,'0')} Classroom</a>
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
    const ctx=eventContext(e);
    const outcomes=e.outcomes?.length?`<div class="modal-section event-outcomes"><h3>After Today — Required Learning Outcomes</h3><p class="section-lede">By the end of this item, you should be able to explain or demonstrate:</p><ul>${e.outcomes.map(x=>`<li>${esc(tidyCalendarLine(x))}</li>`).join('')}</ul></div>`:'';
    const today=`<div class="modal-section event-today"><h3>Today’s work</h3>${textBlock(e.today)}</div>`;
    const glance=[];
    if(ctx.scope)glance.push(`<div class="event-glance-card"><span class="event-glance-label">CETa scope</span><strong>${esc(ctx.scope)}</strong></div>`);
    if(ctx.purpose)glance.push(`<div class="event-glance-card"><span class="event-glance-label">Why it matters</span><strong>${esc(ctx.purpose)}</strong></div>`);
    if(ctx.career)glance.push(`<div class="event-glance-card"><span class="event-glance-label">Career connection</span><strong>${esc(ctx.career)}</strong></div>`);
    const focus=ctx.focus?`<div class="event-glance-card event-focus"><span class="event-glance-label">Week ${esc(ctx.focus.week)} focus</span><strong>${esc(ctx.focus.title)}</strong>${ctx.focus.topics?`<span>${esc(ctx.focus.topics)}</span>`:''}</div>`:ctx.path?`<div class="event-glance-card event-focus"><span class="event-glance-label">Session focus</span><strong>${esc(ctx.path)}</strong></div>`:'';
    const glanceHTML=focus||glance.length?`<div class="event-at-a-glance">${focus}${glance.join('')}</div>`:'';
    const why=ctx.why?`<div class="modal-section event-note"><h3>Why this comes here</h3><p>${esc(ctx.why)}</p></div>`:'';
    const mastery=ctx.mastery?`<div class="modal-section event-mastery"><h3>Mastery gate</h3><p>${esc(ctx.mastery)}</p></div>`:'';
    const references=ctx.links?`<details class="event-reference"><summary>Open reference links <span>${ctx.linkCount} linked resource${ctx.linkCount===1?'':'s'}</span></summary>${ctx.links}</details>`:'';
    const completion=`<div class="modal-section event-completion"><h3>Completion check</h3><p>Complete today’s work, then test each outcome. If one is not yet explainable or demonstrable, carry that single concept into the next review block. No spreadsheet logging is required.</p></div>`;
    return `
      <div class="modal-date">${fmtDate(e.start)} · ${fmtTime(e.start)}${e.week?` · Week ${String(e.week).padStart(2,'0')}`:''}</div>
      <h2 id="event-modal-title">${esc(e.summary.replace(/^AU-ESET 301 \| /,''))}</h2>
      <p class="event-modal-intro">The calendar tells you when and what. The Classroom teaches it. Start with the required Classroom path, then use this event’s outcomes and timing as the finish line.</p>
      ${glanceHTML}${today}${outcomes}${mastery}${why}${completion}
      <div class="modal-section event-quiz-cta"><h3>Required teaching and mastery path</h3><p>Open the complete Week ${String(e.week||1).padStart(2,'0')} lesson sequence: original teaching, expert media, worked examples, required checks, guided practice, lab/application, and weekly mastery.</p><a class="button green" href="learn.html?week=${e.week||1}">Continue in Classroom →</a> <a class="text-link" href="quiz.html?type=lesson&id=${e.id}">Open extra practice only if needed →</a></div>
      ${references}
      <details class="event-reference event-full-notes"><summary>Open full event notes <span>Source record</span></summary><div class="raw-desc">${linkify(ctx.raw)}</div></details>`;
  }
  function openEvent(id){
    const e=EVENTS.find(x=>x.id===Number(id)); if(!e||!modal) return;
    modalReturnFocus=document.activeElement;
    $('#event-modal-content').innerHTML=eventDetailHTML(e);
    modal.inert=false;modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    requestAnimationFrame(()=>$('.modal-close',modal)?.focus());
  }
  function closeModal(){
    if(!modal||!modal.classList.contains('open')) return;
    modal.inert=true;modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow='';
    const restore=modalReturnFocus; modalReturnFocus=null;
    if(restore?.focus) restore.focus();
  }
  if(modal){modal.inert=true;const requested=new URLSearchParams(location.search).get('event');if(requested)openEvent(requested);}
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
    let focusDate=new Date(today);
    const firstEvent=EVENTS[0]?new Date(EVENTS[0].start):today;
    const lastEvent=EVENTS.length?new Date(EVENTS[EVENTS.length-1].start):today;
    if(today<firstEvent||today>lastEvent) focusDate=new Date(firstEvent);

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
          ${dayEvents.map((e,index)=>{const p=eventDisplayParts(e);return `<button class="month-event type-${esc(e.type)}${index>=3?' month-event-extra hidden':''}" data-event-id="${e.id}">${fmtTime(e.start)} · ${esc(p.short)}</button>`}).join('')}
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
          <div class="week-day-events">${dayEvents.length?dayEvents.map(e=>{const p=eventDisplayParts(e);return `<button type="button" class="week-event" data-event-id="${e.id}" aria-label="Open ${esc(p.summary)}"><strong>${fmtTime(e.start)}</strong><span>${esc(p.short)}</span></button>`}).join(''):'<span class="week-empty">No scheduled work</span>'}</div>
        </div>`);
      }
      weekView.innerHTML=`<div class="week-calendar">${days.join('')}</div>`;
      $$('[data-event-id]',weekView).forEach(b=>b.addEventListener('click',()=>openEvent(b.dataset.eventId)));
    }
    function renderAgenda(){
      const events=filteredEvents();
      $('#calendar-summary').innerHTML=`<span class="summary-chip">${events.length} scheduled items</span>${wf.value?`<span class="summary-chip">Week ${String(wf.value).padStart(2,'0')}</span>`:''}${tf.value?`<span class="summary-chip">${esc(tf.value)}</span>`:''}`;
      $('#calendar-list').innerHTML=events.map(e=>{const p=eventDisplayParts(e);return `<article class="calendar-event">
        <div class="event-date-block"><strong>${esc(fmtDate(e.start))}</strong><span>${esc(fmtTime(e.start))} – ${esc(fmtTime(e.end))}</span>${e.week?`<span> · Week ${String(e.week).padStart(2,'0')}</span>`:''}</div>
        <div class="event-main"><div class="event-top"><div>${p.week?`<span class="event-kicker">Week ${esc(p.week)} · ${esc(p.activity)}</span>`:''}<h3>${esc(p.topic)}</h3></div><span class="event-badge">${esc(e.type)}</span></div>
        <div class="event-actions"><button class="event-toggle" data-event-id="${e.id}" aria-label="Open ${esc(p.summary)} assignment and outcomes">Open assignment &amp; outcomes</button></div></div>
      </article>`}).join('');
      $$('[data-event-id]',$('#calendar-list')).forEach(b=>b.addEventListener('click',()=>openEvent(b.dataset.eventId)));
    }
    function render(){
      periodLabel(); renderMonth(); renderWeek(); renderAgenda();
      monthView.classList.toggle('hidden',activeView!=='month');
      weekView.classList.toggle('hidden',activeView!=='week');
      agenda.classList.toggle('hidden',activeView!=='agenda');
      $$('.view-button').forEach(b=>{const active=b.dataset.calendarView===activeView;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
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
    navigator.serviceWorker
      .register('service-worker.js',{updateViaCache:'none'})
      .then(registration=>registration.update())
      .catch(()=>{});
  }
})();
