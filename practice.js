(()=>{
  const W=window.ALFRED_WEEKS||[],A=window.ALFRED_ACADEMIC||{},C=window.ALFRED_CURRICULUM||{};
  const MODULES=C.modules||[],KEY='alfred-u-progress-v2';
  const $=(s,r=document)=>r.querySelector(s);
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeWeek=n=>MODULES.some(m=>Number(m.week)===Number(n))?Number(n):(W.some(w=>Number(w.week)===Number(n))?Number(n):1);
  const progress=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')||{weeks:{}}}catch{return {weeks:{}}}};
  const weekState=(p,n)=>{const raw=p.weeks?.[n]??p.weeks?.[String(n)];return typeof raw==='string'?{mastery:raw,assessments:{},labs:{},learning:{}}:{assessments:{},labs:{},learning:{},...(raw||{})}};
  const moduleFor=n=>MODULES.find(m=>Number(m.week)===Number(n))||{};
  const weekInfo=n=>W.find(w=>Number(w.week)===Number(n))||{};
  const stageOrder=['orientation','ceta-lesson','career-lesson','media','practice','application','mastery'];
  const stageLabels={orientation:'Start Here', 'ceta-lesson':'Subject 1', 'career-lesson':'Subject 2', media:'Teaching Media', practice:'Guided Practice', application:'Lab / Application', mastery:'Weekly Mastery'};
  const params=new URLSearchParams(location.search);
  let week=safeWeek(Number(params.get('week')||window.AlfredState?.currentWeek?.()||1));

  function labFor(module,n){
    const id=module.integration?.labId;
    return (id&&(A.labs||[]).find(l=>String(l.id)===String(id)))||(A.labs||[]).find(l=>Number(l.week)===Number(n))||null;
  }
  function criticalDone(module,learning){return (module.lessons||[]).every((lesson,index)=>!lesson.knowledgeCheck?.critical||learning.checks?.[`lesson-${index}`]?.correct===true)}
  function snapshot(n){
    const p=progress(),w=weekState(p,n),m=moduleFor(n),learning=w.learning||{},lab=labFor(m,n);
    const labRoute=lab?!!(w.labs?.[lab.id]?.virtual||w.labs?.[lab.id]?.physical):false;
    const labScore=lab?Number(w.assessments?.[`lab:${lab.id}`]?.bestPct||0):0;
    const target=Number(m.mastery?.target||80),weekScore=Number(w.assessments?.[`week:${n}`]?.bestPct||0);
    const applicationDone=lab?labRoute&&labScore>=80:!!learning.completed?.application;
    const masteryDone=weekScore>=target&&criticalDone(m,learning);
    const semDone=index=>{const lesson=m.lessons?.[index]||{};const tasks=lesson.integrated?.semanticTasks||lesson.semanticTeaching||[];return tasks.every(t=>learning.semanticTasks?.[t.taskId]?.complete===true)};
    const complete={
      orientation:!!learning.completed?.orientation,
      'ceta-lesson':!!learning.completed?.['ceta-lesson']&&semDone(0),
      'career-lesson':!!learning.completed?.['career-lesson']&&semDone(1),
      media:!!learning.completed?.media,
      practice:!!learning.completed?.practice,
      application:applicationDone,
      mastery:masteryDone
    };
    const next=stageOrder.find(id=>!complete[id])||'complete';
    const now=Date.now(),due=[];
    for(const [id,r] of Object.entries(w.reviewQueue||{})){
      const dueAt=Date.parse(r?.due||0);if(Number.isFinite(dueAt)&&dueAt<=now)due.push({id,...r});
    }
    const weakAssess=[];
    for(const [id,a] of Object.entries(w.assessments||{})){
      const best=Number(a?.bestPct||0);if(best>0&&best<80)weakAssess.push({id,best});
    }
    return {p,w,m,learning,lab,labRoute,labScore,target,weekScore,applicationDone,masteryDone,complete,next,due,weakAssess};
  }
  function queryLink(base,n,stage){return `${base}?week=${n}${stage?`&stage=${encodeURIComponent(stage)}`:''}`}
  function actionFor(s,n){
    const early=['orientation','ceta-lesson','career-lesson','media'];
    if(early.includes(s.next))return {kind:'Not ready for independent practice yet',title:`Finish ${stageLabels[s.next]} first`,body:'Practice should not test material before the teaching sequence is complete. Continue the current Classroom stage, then come back here.',href:queryLink('learn.html',n,s.next),label:'Return to Classroom'};
    if(s.next==='practice')return {kind:'Required practice',title:'Do the guided practice before testing yourself',body:'Work the Classroom practice sequence from worked example to guided attempt to independent transfer. This is where support is intentionally removed in steps.',href:queryLink('learn.html',n,'practice'),label:'Open Guided Practice'};
    if(s.next==='application'){
      if(s.lab&&!s.labRoute)return {kind:'Application evidence',title:`Complete ${s.lab.id} · ${s.lab.title}`,body:'Choose the approved virtual or physical route and produce the required evidence before taking its knowledge check.',href:`labs.html?week=${n}#${encodeURIComponent(s.lab.id)}`,label:'Open Current Lab'};
      if(s.lab&&s.labRoute&&s.labScore<80)return {kind:'Required lab check',title:'Your lab evidence exists; now prove the lab knowledge',body:`The route is recorded, but the required lab check is ${s.labScore?`${s.labScore}%`:'not attempted'}. Reach 80% after reviewing any exact miss.`,href:`quiz.html?type=lab&id=${encodeURIComponent(s.lab.id)}&required=1`,label:s.labScore?'Retake Lab Check':'Take Lab Check'};
      return {kind:'Application evidence',title:'Complete the current application gate',body:'Use the Classroom application stage to produce the stated evidence contract before moving to weekly mastery.',href:queryLink('learn.html',n,'application'),label:'Open Application'};
    }
    if(s.next==='mastery'){
      if(s.weekScore>0&&s.weekScore<s.target)return {kind:'Repair before retest',title:`Weekly mastery is ${s.weekScore}% — repair the misses first`,body:'Do not brute-force another form. Use Study for targeted retrieval/repair, then return to a fresh weekly mastery attempt.',href:`study.html?week=${n}`,label:'Repair in Study',secondary:`quiz.html?type=week&id=${n}&required=1`,secondaryLabel:'Retake after repair'};
      return {kind:'Required mastery',title:'You are ready for the weekly mastery gate',body:`Required target: ${s.target}%. Work closed-note first. A miss becomes a repair target, not a reason to restart the whole week.`,href:`quiz.html?type=week&id=${n}&required=1`,label:'Begin Weekly Mastery'};
    }
    if(s.due.length)return {kind:'Retention due',title:`${s.due.length} concept${s.due.length===1?' is':'s are'} due for retrieval`,body:'The required week is complete. Keep it available by repairing the due concepts in Study instead of doing random extra questions.',href:`study.html?week=${n}#review-queue`,label:'Open Due Reviews'};
    return {kind:'Required work complete',title:'Nothing required needs more practice right now',body:'Do not create busywork. Use supplemental practice only if you want another example or if Mastery/Study later surfaces a weak area.',href:'assessments.html#lesson-assessments',label:'Optional Extra Practice'};
  }
  function ladderStatus(s,id,index){
    if(id==='practice')return s.complete.practice?['done','Done']:s.next==='practice'?['ready','Ready now']:stageOrder.indexOf(s.next)<stageOrder.indexOf('practice')?['locked','Teaching first']:['done','Done'];
    if(id==='application'){
      if(s.applicationDone)return ['done','Evidence complete'];
      if(s.next==='application')return s.labRoute&&s.labScore<80?['repair','Lab check needed']:['ready','Ready now'];
      return stageOrder.indexOf(s.next)<stageOrder.indexOf('application')?['locked','Not ready yet']:['ready','Open'];
    }
    if(id==='mastery'){
      if(s.masteryDone)return ['done',`Passed ${s.weekScore}%`];
      if(s.weekScore>0&&s.weekScore<s.target)return ['repair',`${s.weekScore}% · repair`];
      return s.next==='mastery'?['ready','Ready now']:['locked','Not ready yet'];
    }
    if(id==='repair')return s.due.length||s.weakAssess.length?['repair',`${s.due.length+s.weakAssess.length} signal${s.due.length+s.weakAssess.length===1?'':'s'}`]:['done','No repair due'];
    return ['locked',''];
  }
  function renderPriority(s,n){
    const a=actionFor(s,n),out=$('#practice-priority');if(!out)return;
    out.innerHTML=`<div class="priority-kicker">${esc(a.kind)} · Week ${String(n).padStart(2,'0')}</div><h3>${esc(a.title)}</h3><p>${esc(a.body)}</p><div class="practice-priority-meta"><span>Classroom stage: ${esc(stageLabels[s.next]||s.next)}</span>${s.lab?`<span>Lab: ${s.labRoute?'route saved':'route not complete'}${s.labScore?` · ${s.labScore}% check`:''}</span>`:''}<span>Weekly mastery: ${s.weekScore?`${s.weekScore}%`:'not attempted'}</span><span>Due reviews: ${s.due.length}</span></div><div class="practice-priority-actions"><a class="button gold" href="${esc(a.href)}">${esc(a.label)}</a>${a.secondary?`<a class="button outline-green" href="${esc(a.secondary)}">${esc(a.secondaryLabel)}</a>`:''}</div>`;
  }
  function renderLadder(s,n){
    const out=$('#practice-ladder');if(!out)return;
    const currentAction=actionFor(s,n),beforePractice=stageOrder.indexOf(s.next)>=0&&stageOrder.indexOf(s.next)<stageOrder.indexOf('practice'),beforeApplication=stageOrder.indexOf(s.next)>=0&&stageOrder.indexOf(s.next)<stageOrder.indexOf('application'),beforeMastery=stageOrder.indexOf(s.next)>=0&&stageOrder.indexOf(s.next)<stageOrder.indexOf('mastery');
    const items=[
      {id:'practice',num:'1',title:'Guided Practice',body:'Work examples with decreasing support, then attempt independent transfer.',href:beforePractice?currentAction.href:queryLink('learn.html',n,'practice'),link:beforePractice?'Complete teaching first':'Open Classroom Practice'},
      {id:'application',num:'2',title:s.lab?`${s.lab.id} · ${s.lab.title}`:'Lab / Application',body:s.lab?'Produce virtual or physical evidence, then pass the required lab check.':'Produce the stated application evidence before weekly mastery.',href:beforeApplication?currentAction.href:(s.lab?`labs.html?week=${n}#${encodeURIComponent(s.lab.id)}`:queryLink('learn.html',n,'application')),link:beforeApplication?'Complete prerequisite first':(s.lab?'Open Lab Center':'Open Application')},
      {id:'mastery',num:'3',title:'Weekly Mastery',body:`Closed-note evidence gate. Required target ${s.target}%; exact misses should be repaired before retesting.`,href:beforeMastery?currentAction.href:`quiz.html?type=week&id=${n}&required=1`,link:beforeMastery?'Complete prerequisite first':'Open Weekly Mastery'},
      {id:'repair',num:'4',title:'Targeted Repair',body:'Use Study for due or weak concepts. Repair the smallest gap, then return to a fresh practice/assessment item.',href:`study.html?week=${n}`,link:'Open Study Repair'}
    ];
    out.innerHTML=items.map((x,i)=>{const [cls,label]=ladderStatus(s,x.id,i);return `<article class="practice-step-card ${cls}"><span class="practice-step-number">${x.num}</span><h3>${esc(x.title)}</h3><p>${esc(x.body)}</p><span class="practice-step-status">${esc(label)}</span><br><a href="${esc(x.href)}">${esc(x.link)} →</a></article>`}).join('');
  }
  function renderRepair(s,n){
    const out=$('#practice-repair');if(!out)return;const cards=[];
    s.due.slice(0,4).forEach(r=>cards.push({title:r.title||r.standardId||r.conceptId||'Due retrieval',body:r.prompt||'This item is due for spaced retrieval.',meta:[r.source||'Review queue',r.lastRating?`Last: ${r.lastRating}`:'Due now'],href:r.standardId?`study.html?week=${n}&standard=${encodeURIComponent(r.standardId)}`:`study.html?week=${n}#review-queue`,label:'Repair in Study'}));
    s.weakAssess.slice(0,3).forEach(a=>{
      const isLab=a.id.startsWith('lab:'),isWeek=a.id.startsWith('week:');
      if(isLab){const id=a.id.slice(4);cards.push({title:`Lab check below target · ${a.best}%`,body:'Review the exact lab miss before another required check.',meta:['Assessment evidence','Below 80%'],href:`quiz.html?type=lab&id=${encodeURIComponent(id)}&required=1`,label:'Open Lab Check'});}
      else if(isWeek)cards.push({title:`Weekly mastery below target · ${a.best}%`,body:'Repair the missed concepts first; then use a fresh weekly form.',meta:['Assessment evidence',`Target ${s.target}%`],href:`study.html?week=${n}`,label:'Repair Before Retake'});
    });
    if(!cards.length){out.innerHTML='<div class="practice-repair-empty"><strong>No due repair signal for this week.</strong><p>That does not mean “mastered forever.” Study and Mastery will surface material again when retrieval is due or evidence weakens.</p></div>';return;}
    out.innerHTML=cards.map(c=>`<article class="practice-repair-card"><h3>${esc(c.title)}</h3><p>${esc(c.body)}</p><div class="repair-meta">${c.meta.map(m=>`<span>${esc(m)}</span>`).join('')}</div><a class="button outline-green" href="${esc(c.href)}">${esc(c.label)}</a></article>`).join('');
  }
  function updateLinks(s,n){
    const guided=$('#practice-guided-link'),lab=$('#practice-lab-link'),assess=$('#practice-assessment-link'),study=$('#practice-study-link'),extra=$('#practice-extra-link');
    if(guided)guided.href=queryLink('learn.html',n,'practice');
    if(lab)lab.href=s.lab?`labs.html?week=${n}#${encodeURIComponent(s.lab.id)}`:queryLink('learn.html',n,'application');
    if(assess){if(s.lab&&!s.labRoute)assess.href=`labs.html?week=${n}#${encodeURIComponent(s.lab.id)}`;else if(s.lab&&s.labRoute&&s.labScore<80)assess.href=`quiz.html?type=lab&id=${encodeURIComponent(s.lab.id)}&required=1`;else if(s.next==='mastery'||s.masteryDone)assess.href=`quiz.html?type=week&id=${n}&required=1`;else assess.href=actionFor(s,n).href;}
    if(study)study.href=`study.html?week=${n}`;
    if(extra)extra.href='assessments.html#lesson-assessments';
  }
  function render(n=week){
    week=safeWeek(n);const s=snapshot(week),wi=weekInfo(week),sel=$('#practice-week'),topic=$('#practice-week-topic');
    if(sel&&sel.options.length===0){(MODULES.length?MODULES:W).forEach(m=>sel.insertAdjacentHTML('beforeend',`<option value="${Number(m.week)}">Week ${String(m.week).padStart(2,'0')} · ${esc(m.title||m.topic||'')}</option>`));}
    if(sel)sel.value=String(week);if(topic)topic.textContent=wi.topic||s.m.title||`Week ${week}`;
    renderPriority(s,week);renderLadder(s,week);renderRepair(s,week);updateLinks(s,week);
  }
  const select=$('#practice-week');if(select)select.addEventListener('change',()=>{const n=safeWeek(Number(select.value));history.replaceState(null,'',`practice.html?week=${n}`);render(n)});
  window.addEventListener('storage',e=>{if(e.key===KEY)render(week)});window.addEventListener('alfred-progress-updated',()=>render(week));
  render(week);
})();
