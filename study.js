(()=>{
const E=window.ALFRED_EVENTS||[],W=window.ALFRED_WEEKS||[],A=window.ALFRED_ACADEMIC||{},D=window.ALFRED_ASSESSMENT||{};
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const STUDY_KEY='alfred-u-study-v13', PROGRESS_KEY='alfred-u-progress-v2', QUIET_KEY='alfred-u-quiet-mode', SYNC_KEY='alfred-u-sync-config-v1';
const now=()=>new Date();
const startOfDay=d=>new Date(d.getFullYear(),d.getMonth(),d.getDate());
const addDays=(d,n)=>{const x=new Date(d);x.setDate(x.getDate()+n);return x;};
const fmtDate=(v,o={weekday:'short',month:'short',day:'numeric'})=>new Intl.DateTimeFormat('en-US',o).format(new Date(v));
const cleanTitle=e=>String(e?.summary||'').replace(/^AU-ESET 301 \| /,'');
const css=document.createElement('link');css.rel='stylesheet';css.href='study-v2.css';document.head.appendChild(css);

function defaultState(){return {version:16,defaultMode:'standard',reviews:{},parking:[],history:[],sessionConfidence:{},session:null};}
function load(){try{return {...defaultState(),...(JSON.parse(localStorage.getItem(STUDY_KEY)||'null')||{})};}catch{return defaultState();}}
let state=load();
if(state.session&&!Array.isArray(state.session.conceptIds))state.session=null;
function save(){localStorage.setItem(STUDY_KEY,JSON.stringify({version:16,defaultMode:state.defaultMode,parking:state.parking||[],history:(state.history||[]).slice(0,100),session:state.session||null}));}
function progress(){try{return JSON.parse(localStorage.getItem(PROGRESS_KEY)||'null')||{events:{},weeks:{},readiness:{},recordTimes:{}};}catch{return {events:{},weeks:{},readiness:{},recordTimes:{}};}}
function currentWeek(){const requested=Number(new URLSearchParams(location.search).get('week')||0);if(requested&&W.some(w=>Number(w.week)===requested))return requested;return window.AlfredState?.currentWeek?.()||1;}
function weekData(n){return W.find(w=>Number(w.week)===Number(n))||{};}
function eventStatus(id){const status=progress().events?.[String(id)]?.status;return status==='review'?'in-progress':status||'not-started';}
function targetEvent(){
  const params=new URLSearchParams(location.search),q=params.get('event');if(q){const hit=E.find(e=>String(e.id)===q);if(hit)return hit;}
  const week=currentWeek(), incomplete=e=>eventStatus(e.id)!=='complete';
  const inWeek=E.filter(e=>Number(e.week)===week&&e.type!=='Equipment').sort((a,b)=>new Date(a.start)-new Date(b.start));
  return inWeek.find(incomplete)||inWeek[0]||E.filter(incomplete).sort((a,b)=>new Date(a.start)-new Date(b.start))[0]||null;
}
let target=targetEvent(),step=0,activeMode=state.defaultMode||'standard',reviewedThisBlock=0,reviewLimit=3;

function weekRecord(p,week){const raw=p.weeks?.[week]??p.weeks?.[String(week)];return typeof raw==='string'?{mastery:raw}:{...(raw||{})};}
function classroomStage(week){
  const w=weekRecord(progress(),week),l=w.learning||{},order=['orientation','ceta-lesson','career-lesson','media','practice','application','mastery'];
  if(l.currentStage&&order.includes(l.currentStage)&&!l.completed?.[l.currentStage])return l.currentStage;
  const next=order.find(id=>!l.completed?.[id]);return next==='orientation'?'ceta-lesson':next||'mastery';
}
const stageLabels={orientation:'Start Here','ceta-lesson':'Subject 1 · CETa lesson','career-lesson':'Subject 2 · Career lesson',media:'Teaching Media',practice:'Guided Practice',application:'Lab / Application',mastery:'Weekly Mastery'};

const WEEK1=[
 {id:'voltage',name:'Voltage',prompt:'Without notes: what is voltage physically, and why is a voltage measurement always between two points?',repair:'Voltage is electric potential difference: an energy-per-charge difference between two locations. Voltage does not flow. A meter reports the difference between its two probes, so every voltage value has an explicit or implied reference node.',formula:'1 V = 1 J/C',practice:'A node is labeled 3.3 V. What information is missing if no reference node has been stated?',answer:'The reference point is missing. “3.3 V” means 3.3 volts relative to some other node, commonly circuit common/ground.',keywords:'voltage potential difference reference node'},
 {id:'current',name:'Current',prompt:'Without notes: what does current measure, what is one ampere, and why is current described as going through a path?',repair:'Current is the rate at which electric charge passes a point. One ampere is one coulomb per second. Because it describes charge passing through a path, current is measured through a branch rather than across two nodes.',formula:'1 A = 1 C/s',practice:'If 3 coulombs of charge pass a point in 2 seconds, what is the average current? Explain the unit.',answer:'I = 3 C / 2 s = 1.5 A. The ampere means coulombs per second.',keywords:'current ampere charge flow'},
 {id:'resistance',name:'Resistance + Ohm’s law',prompt:'At a fixed voltage, what should happen to current if resistance doubles? Explain why before using an equation.',repair:'Resistance limits current for a given applied voltage. For an ohmic resistor, V = IR, so I = V/R. Holding V constant while doubling R makes the current half as large. Predicting this direction before calculating is a powerful error check.',formula:'V = IR · I = V/R · R = V/I',practice:'A 6 V source is across 2 kΩ. Predict the rough current first, then calculate it.',answer:'A few volts across a few kilohms should produce a few milliamps. I = 6 V / 2000 Ω = 0.003 A = 3 mA.',keywords:'resistance ohms law resistor'},
 {id:'prefixes',name:'SI prefixes + conversion',prompt:'Explain what kilo, milli, and micro actually mean as multipliers. Then convert 2.2 kΩ to Ω and 15 mA to A.',repair:'Prefixes are powers-of-ten multipliers attached to units. kilo k = 10³ = ×1000; milli m = 10⁻³ = ×0.001; micro µ = 10⁻⁶ = ×0.000001. “Move the decimal” is only the visible effect of multiplying or dividing by these factors.',formula:'k = 10³ · m = 10⁻³ · µ = 10⁻⁶',practice:'Convert 4700 Ω to kΩ and 250 µA to mA. State why each numerical value gets larger or smaller.',answer:'4700 Ω = 4.7 kΩ. 250 µA = 0.250 mA. When you express the same quantity in a larger unit, the numerical count becomes smaller.',keywords:'metric prefixes kilo milli micro conversion'},
 {id:'power',name:'Electrical power',prompt:'What does electrical power tell you physically, and why does multiplying voltage by current produce watts?',repair:'Power is the rate of energy transfer. Voltage is joules per coulomb and current is coulombs per second, so V × I gives joules per second, which is watts.',formula:'P = VI · 1 W = 1 J/s',practice:'A 5 V branch carries 20 mA. Find power in watts and milliwatts.',answer:'20 mA = 0.020 A. P = 5 V × 0.020 A = 0.100 W = 100 mW.',keywords:'power watts voltage current'},
 {id:'path',name:'Closed, open, and short paths',prompt:'Explain the difference between a closed circuit, an open circuit, and a short circuit. Why can a short produce very large current?',repair:'A closed circuit provides a complete path for steady current. An open breaks the path, so steady branch current falls essentially to zero. A short is an unintended very-low-resistance path; with the same source voltage, low resistance can allow very large current.',formula:'I = V/R explains why very low R can create high I',practice:'A switch opens a series circuit. What happens to branch current, and can voltage still exist across the open switch?',answer:'The steady branch current falls to essentially zero, but a voltage difference can still appear across the open switch.',keywords:'closed circuit open circuit short circuit'}
];

function requestedStandardConcept(){
  const id=new URLSearchParams(location.search).get('standard');if(!id)return null;
  const all=[...(D.cetaStandards||[]),...(D.careerStandards||[])],s=all.find(x=>String(x.id)===String(id));if(!s)return null;
  return {id:`standard-${s.id}`,name:s.categoryTitle||s.id,prompt:`Without notes, explain this competency: ${s.text}`,repair:s.text,formula:'',practice:`Give one concrete example, calculation, measurement, or troubleshooting action that would demonstrate ${s.id}.`,answer:'A strong answer should directly demonstrate the stated competency with a technically specific example or evidence route.',standardId:s.id,keywords:s.text};
}
function genericConcepts(week){
  return (A.knowledge||[]).filter(k=>(k.weeks||[]).map(Number).includes(Number(week))).map((k,i)=>({
    id:`kb-${String(k.term||i).toLowerCase().replace(/[^a-z0-9]+/g,'-')}`,name:k.term||`Concept ${i+1}`,
    prompt:`Without notes, explain ${k.term}. What does it mean physically or technically, and how would you recognize or use it?`,
    repair:[k.summary,k.deeper].filter(Boolean).join(' '),formula:k.formula||'',
    practice:`Apply ${k.term} to one Week ${week} example: make a prediction, calculation, measurement plan, or troubleshooting decision and explain why it is reasonable.`,
    answer:k.deeper||k.summary||`Your answer should correctly define and apply ${k.term}.`,keywords:k.keywords||k.term
  }));
}
function conceptPool(week){
  const requested=requestedStandardConcept();
  const base=Number(week)===1?WEEK1:genericConcepts(week);
  if(requested)return [requested,...base.filter(x=>x.id!==requested.id)];
  if(base.length)return base;
  const outcomes=weekData(week).outcomes||[];
  return outcomes.map((x,i)=>({id:`outcome-${i}`,name:`Outcome ${i+1}`,prompt:`Without notes, explain: ${x}`,repair:x,formula:'',practice:`Give one concrete example showing you can use this outcome, not just repeat it.`,answer:`A strong response should accurately explain and apply: ${x}`,keywords:x}));
}
function latestConceptRatings(week){
  const out={};for(const h of state.history||[]){if(Number(h.week)!==Number(week)||!h.ratings)continue;for(const [id,r] of Object.entries(h.ratings))if(!(id in out))out[id]=r;}return out;
}
function dueConceptIds(week){
  const w=weekRecord(progress(),week),out=[];
  for(const [id,r] of Object.entries(w.reviewQueue||{}))if(r?.source==='study-session-v2'&&Date.parse(r.due||0)<=Date.now())out.push(String(r.conceptId||id).replace(/^study:w\d+:/,''));
  return out;
}
function chooseConcepts(week,mode){
  const pool=conceptPool(week),limit=mode==='quick'?3:mode==='deep'?6:5,latest=latestConceptRatings(week),due=new Set(dueConceptIds(week));
  return pool.slice().sort((a,b)=>{
    const score=x=>due.has(x.id)?0:latest[x.id]==='red'?1:latest[x.id]==='yellow'?2:latest[x.id]==='green'?4:3;
    return score(a)-score(b);
  }).slice(0,Math.min(limit,pool.length));
}
function conceptById(id,week=state.session?.week||currentWeek()){return conceptPool(week).find(x=>x.id===id);}

function renderRecommendation(){
  const box=$('#recommended-session'),start=$('#start-study-session');if(!box)return;
  const week=currentWeek(),stage=classroomStage(week),concepts=conceptPool(week);
  const next=window.AlfredNextAction?.get?.()||null;
  const due=Math.max(dueConceptIds(week).length,Number(next?.due||0));
  const classroomFirst=next?.kind==='classroom'&&!due&&!state.session;
  const reviewFirst=next?.reason==='due-review'&&!state.session;
  const routeFirst=classroomFirst||reviewFirst;
  target=targetEvent();
  const eventText=target?`Next scheduled item: ${cleanTitle(target)}`:'No incomplete scheduled event is driving this session.';
  const fieldset=$('.study-start-controls fieldset'),note=$('.study-start-controls .small-note');
  if(start){start.disabled=routeFirst?false:!concepts.length;start.dataset.routeHref=routeFirst?next.href:'';start.textContent=routeFirst?next.label:'Start Study Session';}
  if(fieldset)fieldset.classList.toggle('hidden',routeFirst);
  if(note)note.textContent=classroomFirst?'New required material comes before diagnostic retrieval. Alfred will bring you back to Study when review is due or a saved Study session needs to be resumed.':reviewFirst?'Clear the due retrievals first. Review is capped in small blocks; after that Alfred returns you to the required course path.':'Choose the amount of retrieval you can do well. The session is task-based, not timer-driven, and it never marks required course work complete.';
  if(classroomFirst){
    box.innerHTML=`<div class="recommended-label">Week ${String(week).padStart(2,'0')} · ${esc(stageLabels[stage]||'Required Classroom work')}</div><h2>Learn the next required section before retrieval.</h2><p>${esc(next.detail||'Classroom instruction is the next required action.')} Study will become the primary action when spaced review is due or a saved Study session needs attention.</p><div class="recommended-meta"><span>${esc(eventText)}</span><span>Classroom first · Study follows instruction</span></div>`;
    return;
  }
  if(reviewFirst){
    box.innerHTML=`<div class="recommended-label">Spaced Review · ${due} due</div><h2>${esc(next.label)}</h2><p>Clear a small due-review block before starting new diagnostic work. Weak answers return sooner; strong answers spread farther apart.</p><div class="recommended-meta"><span>${esc(eventText)}</span><span>Review first · then return to the required course path</span></div>`;
    return;
  }
  box.innerHTML=`<div class="recommended-label">Week ${String(week).padStart(2,'0')} · ${esc(stageLabels[stage]||'Current learning')}</div><h2>${state.session?'Resume the diagnostic you already started':'Check what actually stuck before moving on'}</h2><p>Study will test a small set of concepts, identify weak spots, repair only those gaps, and finish with fresh practice and teach-back.</p><div class="recommended-meta"><span>${esc(eventText)}</span><span>${concepts.length} concept${concepts.length===1?'':'s'} available</span></div>`;
}
function renderWeeklyPlan(){
  const out=$('#weekly-plan');if(!out)return;const week=currentWeek(),wd=weekData(week),list=E.filter(e=>Number(e.week)===Number(week)),mins=list.filter(e=>e.type!=='Equipment').reduce((a,e)=>{const s=new Date(e.start),en=new Date(e.end);return a+Math.max(0,Math.round((en-s)/60000));},0),lab=list.find(e=>e.type==='Lab'||e.type==='Project');
  const link=$('#open-week-module');if(link){link.href=`learn.html?week=${week}`;link.textContent='Open complete Classroom →';}
  out.innerHTML=`<article class="weekly-plan-main"><div class="week-kicker">Week ${String(week).padStart(2,'0')}</div><h3>${esc(wd.topic||'Current Week')}</h3><p><strong>Scheduled course time:</strong> ${Math.round(mins/60*10)/10} hours</p><div class="three-priorities">${(wd.outcomes||[]).slice(0,3).map((x,i)=>`<div><span>${i+1}</span><p>${esc(x)}</p></div>`).join('')}</div></article><article class="weekly-plan-side"><h3>Study does not replace Classroom</h3><p>Use this tab to expose and repair weak recall. Use Classroom for the authoritative teaching sequence and completion gates.</p>${lab?`<div class="weekly-lab"><strong>Hands-on block</strong><span>${esc(cleanTitle(lab))}</span></div>`:''}<div class="mastery-readout"><strong>Need evidence?</strong> <a href="analytics.html">Open Mastery →</a></div></article>`;
}

function sessionStageNames(){return ['Retrieve','Diagnose','Repair','Practice','Teach Back','Next Move'];}
function sessionConcepts(){return (state.session?.conceptIds||[]).map(id=>conceptById(id,state.session.week)).filter(Boolean);}
function weakConcepts(){const s=state.session||{},cs=sessionConcepts();return cs.filter(c=>s.ratings?.[c.id]!=='green');}
function practiceConcepts(){const s=state.session||{},weak=weakConcepts(),all=sessionConcepts(),limit=s.mode==='quick'?1:s.mode==='deep'?3:2;return [...weak,...all.filter(x=>!weak.some(w=>w.id===x.id))].slice(0,Math.min(limit,all.length));}
function renderRetrieve(){
  const s=state.session,cs=sessionConcepts();return `<div class="study-stage-intro"><strong>Rule:</strong> answer before you look anything up. Speaking aloud is fine; the text box is optional scratch space. Then rate the retrieval, not your confidence.</div><div class="retrieval-grid">${cs.map(c=>`<article class="retrieval-card" data-concept="${esc(c.id)}"><span>${esc(c.name)}</span><h4>${esc(c.prompt)}</h4><textarea rows="4" maxlength="1800" data-retrieval-response placeholder="Write your answer, calculation, or notes here if useful.">${esc(s.responses?.[c.id]||'')}</textarea><div class="evidence-rating" aria-label="Rate retrieval for ${esc(c.name)}"><button type="button" class="${s.ratings?.[c.id]==='green'?'active':''}" data-retrieval-rate="green">Got it</button><button type="button" class="${s.ratings?.[c.id]==='yellow'?'active':''}" data-retrieval-rate="yellow">Partial</button><button type="button" class="${s.ratings?.[c.id]==='red'?'active':''}" data-retrieval-rate="red">Missed</button></div></article>`).join('')}</div>`;
}
function renderDiagnose(){
  const cs=sessionConcepts(),s=state.session,strong=cs.filter(c=>s.ratings?.[c.id]==='green'),weak=cs.filter(c=>s.ratings?.[c.id]!=='green');
  return `<div class="diagnosis-summary"><article class="diagnosis-card strong"><span>Holding</span><strong>${strong.length}</strong><p>${strong.length?strong.map(c=>esc(c.name)).join(' · '):'No concept has been demonstrated cleanly yet.'}</p></article><article class="diagnosis-card weak"><span>Repair targets</span><strong>${weak.length}</strong><p>${weak.length?weak.map(c=>esc(c.name)).join(' · '):'No repair target from this retrieval round.'}</p></article></div><section class="diagnosis-explain"><h4>What Alfred will do next</h4><p>${weak.length?'Only the Partial/Missed concepts move into targeted repair. Strong concepts stay out of the way unless they are needed for transfer practice.':'You recalled the selected concepts cleanly. The session will skip repair and use fresh application problems to check transfer.'}</p></section>`;
}
function renderRepair(){
  const s=state.session,weak=weakConcepts();if(!weak.length)return `<div class="study-pass-card"><strong>No targeted repair needed from this retrieval round.</strong><p>Move to Practice. Fresh application is a stronger check than rereading material you already recalled.</p></div>`;
  return `<div class="repair-stack">${weak.map(c=>`<article class="repair-card" data-repair-id="${esc(c.id)}"><div class="repair-card-head"><span>Repair target</span><h4>${esc(c.name)}</h4></div><p>${esc(c.repair)}</p>${c.formula?`<div class="repair-formula">${esc(c.formula)}</div>`:''}<div class="repair-actions"><a class="button outline-green" href="learn.html?week=${s.week}">Open Classroom if this still does not click</a><a class="text-link" href="search.html?q=${encodeURIComponent(c.keywords||c.name)}">Find another verified explanation →</a></div><label class="repair-check"><input type="checkbox" data-repair-complete="${esc(c.id)}"${s.repairs?.[c.id]?' checked':''}><span>I reworked this concept and can state the rule in my own words.</span></label></article>`).join('')}</div>`;
}
function renderPractice(){
  const s=state.session,items=practiceConcepts();return `<div class="study-stage-intro"><strong>Fresh problem:</strong> predict the direction or rough size first when the problem allows it. Then solve and compare with the model.</div><div class="practice-ladder">${items.map((c,i)=>{const rec=s.practice?.[c.id]||{};return `<article class="practice-card" data-practice-id="${esc(c.id)}"><span>Practice ${i+1} · ${esc(c.name)}</span><h4>${esc(c.practice)}</h4><textarea rows="4" maxlength="1800" data-practice-response placeholder="Show the prediction, reasoning, units, or troubleshooting logic.">${esc(rec.response||'')}</textarea><details class="practice-model"><summary>Reveal model after you attempt it</summary><p>${esc(c.answer)}</p></details><div class="evidence-rating"><button type="button" class="${rec.rating==='green'?'active':''}" data-practice-rate="green">Correct / solid</button><button type="button" class="${rec.rating==='yellow'?'active':''}" data-practice-rate="yellow">Partial</button><button type="button" class="${rec.rating==='red'?'active':''}" data-practice-rate="red">Missed</button></div></article>`}).join('')}</div>`;
}
function teachBackConfig(){
  const cs=sessionConcepts();if(Number(state.session?.week)===1)return {prompt:'Teach this chain without notes: charge → current → voltage → resistance → Ohm’s law → power. Include one SI-prefix conversion and one prediction about what changes when resistance changes.',checks:['I distinguished voltage from current.','I explained at least one cause-and-effect relationship.','I used a unit/prefix correctly.','I connected the explanation to a real circuit or measurement.']};
  return {prompt:`Teach back the selected Week ${state.session?.week} concepts as one connected explanation: ${cs.map(c=>c.name).join(', ')}. Explain how at least two of them connect and give one application or measurement example.`,checks:['I explained the concepts without copying definitions.','I connected at least two ideas together.','I included a concrete application, calculation, measurement, or troubleshooting example.']};
}
function renderTeachBack(){
  const s=state.session,t=teachBackConfig(),tb=s.teachBack||{text:'',checks:{},aloud:false};return `<section class="teachback-card"><span>Teach-back</span><h4>${esc(t.prompt)}</h4><textarea id="teachback-text" rows="7" maxlength="4000" placeholder="Write your explanation here—or check the aloud option below after you say it without notes.">${esc(tb.text||'')}</textarea><label class="teachback-aloud"><input type="checkbox" id="teachback-aloud"${tb.aloud?' checked':''}><span>I completed the teach-back aloud without reading the lesson.</span></label><div class="teachback-checks">${t.checks.map((x,i)=>`<label><input type="checkbox" data-teach-check="${i}"${tb.checks?.[i]?' checked':''}><span>${esc(x)}</span></label>`).join('')}</div></section>`;
}
function finalRating(c){const p=state.session?.practice?.[c.id]?.rating;return p||state.session?.ratings?.[c.id]||'red';}
function readinessSummary(){
  const cs=sessionConcepts(),finals=Object.fromEntries(cs.map(c=>[c.id,finalRating(c)])),red=cs.filter(c=>finals[c.id]==='red'),yellow=cs.filter(c=>finals[c.id]==='yellow'),green=cs.filter(c=>finals[c.id]==='green');
  const tb=state.session?.teachBack||{},t=teachBackConfig(),teachDone=(String(tb.text||'').trim().length>=60||tb.aloud===true)&&t.checks.every((_,i)=>tb.checks?.[i]);
  return {red,yellow,green,teachDone,continueReady:red.length===0&&teachDone};
}
function renderNextMove(){
  const s=state.session,r=readinessSummary(),stage=classroomStage(s.week),weak=[...r.red,...r.yellow];
  return `<div class="next-move-grid"><article class="next-move-result ${r.continueReady?'ready':'repair'}"><span>${r.continueReady?'Ready to continue':'One more repair pass'}</span><h4>${r.continueReady?'The retrieval and transfer check support moving forward.':'The session still shows a specific gap.'}</h4><p>${r.red.length?`Missed: ${r.red.map(c=>esc(c.name)).join(', ')}. `:''}${r.yellow.length?`Partial: ${r.yellow.map(c=>esc(c.name)).join(', ')}. `:''}${!r.teachDone?'Teach-back is not complete yet.':''}</p></article><article class="next-move-result"><span>Important boundary</span><h4>Study does not mark course work complete.</h4><p>This session schedules review and guides your next move. Classroom, Lab Center, and assessments remain the evidence/completion authorities.</p></article></div><div class="session-close-actions"><a class="button green" href="learn.html?week=${s.week}">${stage==='mastery'?'Return to weekly mastery':'Continue the saved Classroom stage'}</a>${weak.length?'<button type="button" class="button outline-green" id="run-focused-repair">Run another focused repair</button>':''}<a class="button outline-green" href="analytics.html">Open Mastery evidence</a></div>`;
}
function renderStageBody(){return [renderRetrieve,renderDiagnose,renderRepair,renderPractice,renderTeachBack,renderNextMove][step]?.()||'';}

function persistSession(){save();}
function setRating(id,rating){state.session.ratings=state.session.ratings||{};state.session.ratings[id]=rating;persistSession();renderSession();}
function setPracticeRating(id,rating){state.session.practice=state.session.practice||{};state.session.practice[id]={...(state.session.practice[id]||{}),rating};persistSession();renderSession();}
function validateStage(){
  const s=state.session||{};
  if(step===0){const missing=sessionConcepts().filter(c=>!s.ratings?.[c.id]);if(missing.length){alert(`Rate each retrieval first. Still unrated: ${missing.map(c=>c.name).join(', ')}`);return false;}}
  if(step===2){const missing=weakConcepts().filter(c=>!s.repairs?.[c.id]);if(missing.length){alert(`Finish the targeted repair check for: ${missing.map(c=>c.name).join(', ')}`);return false;}}
  if(step===3){const missing=practiceConcepts().filter(c=>!s.practice?.[c.id]?.rating);if(missing.length){alert(`Rate each fresh practice attempt before moving on.`);return false;}}
  if(step===4){const t=teachBackConfig(),tb=s.teachBack||{};const enough=String(tb.text||'').trim().length>=60||tb.aloud===true;const checks=t.checks.every((_,i)=>tb.checks?.[i]);if(!enough||!checks){alert('Complete the teach-back aloud or in writing, then confirm every checklist item that is truly present.');return false;}}
  return true;
}
function renderSession(){
  const s=state.session;if(!s)return;const names=sessionStageNames();step=Math.max(0,Math.min(Number(s.step)||0,names.length-1));
  $('#session-title').textContent=`Week ${String(s.week).padStart(2,'0')} · Active Study`;$('#session-kicker').textContent=`${s.mode==='quick'?'Quick check':s.mode==='deep'?'Deep diagnostic':'Standard diagnostic'} · ${stageLabels[classroomStage(s.week)]||'Current stage'}`;
  $('#session-meta').textContent='Retrieve first. Repair only the misses. Practice with fresh problems. Finish by teaching it back.';
  $('#session-step-tabs').innerHTML=names.map((n,i)=>`<button type="button" class="${i===step?'active':''}" aria-current="${i===step?'step':'false'}" data-study-step="${i}"><span>${i+1}</span>${esc(n)}</button>`).join('');
  $('#session-progress-bar').style.width=`${((step+1)/names.length)*100}%`;$('#session-step-content').innerHTML=`<div class="step-number">Step ${step+1} of ${names.length}</div><h3>${esc(names[step])}</h3>${renderStageBody()}`;
  $('#session-prev').disabled=step===0;$('#session-next').textContent=step===names.length-1?'Close Study Session':'Next Step';
  const note=$('#session-note');if(note){note.value=s.note||'';note.oninput=()=>{state.session.note=note.value;persistSession();};}
  $$('[data-study-step]').forEach(b=>b.onclick=()=>{const dest=Number(b.dataset.studyStep);if(dest>step&&!validateStage())return;step=dest;state.session.step=step;persistSession();renderSession();});
  $$('[data-retrieval-rate]').forEach(b=>b.onclick=()=>setRating(b.closest('[data-concept]').dataset.concept,b.dataset.retrievalRate));
  $$('[data-retrieval-response]').forEach(t=>t.oninput=()=>{const id=t.closest('[data-concept]').dataset.concept;state.session.responses=state.session.responses||{};state.session.responses[id]=t.value;persistSession();});
  $$('[data-repair-complete]').forEach(c=>c.onchange=()=>{state.session.repairs=state.session.repairs||{};state.session.repairs[c.dataset.repairComplete]=c.checked;persistSession();});
  $$('[data-practice-response]').forEach(t=>t.oninput=()=>{const id=t.closest('[data-practice-id]').dataset.practiceId;state.session.practice=state.session.practice||{};state.session.practice[id]={...(state.session.practice[id]||{}),response:t.value};persistSession();});
  $$('[data-practice-rate]').forEach(b=>b.onclick=()=>setPracticeRating(b.closest('[data-practice-id]').dataset.practiceId,b.dataset.practiceRate));
  const tb=$('#teachback-text');if(tb)tb.oninput=()=>{state.session.teachBack=state.session.teachBack||{checks:{}};state.session.teachBack.text=tb.value;persistSession();};
  const aloud=$('#teachback-aloud');if(aloud)aloud.onchange=()=>{state.session.teachBack=state.session.teachBack||{checks:{}};state.session.teachBack.aloud=aloud.checked;persistSession();};
  $$('[data-teach-check]').forEach(c=>c.onchange=()=>{state.session.teachBack=state.session.teachBack||{checks:{}};state.session.teachBack.checks=state.session.teachBack.checks||{};state.session.teachBack.checks[c.dataset.teachCheck]=c.checked;persistSession();});
  $('#run-focused-repair')?.addEventListener('click',()=>{const weak=[...readinessSummary().red,...readinessSummary().yellow];startSession({forcedIds:weak.map(c=>c.id),mode:'quick'});});
}
function startSession({forcedIds=null,mode=null}={}){
  const week=currentWeek();activeMode=mode||$('input[name="session-mode"]:checked')?.value||'standard';state.defaultMode=activeMode;
  const chosen=forcedIds?.length?forcedIds.map(id=>conceptById(id,week)).filter(Boolean):chooseConcepts(week,activeMode);
  if(!chosen.length)return;
  state.session={version:2,week,eventId:target?.id||null,mode:activeMode,step:0,startedAt:new Date().toISOString(),conceptIds:chosen.map(c=>c.id),ratings:{},responses:{},repairs:{},practice:{},teachBack:{text:'',checks:{},aloud:false},note:''};step=0;save();
  $('#resume-session-section')?.classList.add('hidden');$('#session-workspace')?.classList.remove('hidden');document.body.classList.add('focus-mode');$('#focus-mode-toggle')?.setAttribute('aria-pressed','true');renderSession();$('#session-workspace')?.scrollIntoView({behavior:'smooth',block:'start'});
}
function renderResumeSession(){
  const box=$('#resume-session-section'),s=state.session;if(!box)return;if(!s?.conceptIds?.length){box.classList.add('hidden');return;}
  box.classList.remove('hidden');$('#resume-session-title').textContent=`Resume Week ${String(s.week).padStart(2,'0')} study`;$('#resume-session-copy').textContent=`You stopped at ${sessionStageNames()[Number(s.step)||0]}. Resume the diagnostic, or discard it and start a fresh concept set.`;
  $('#resume-session-button').onclick=()=>{$('#session-workspace').classList.remove('hidden');document.body.classList.add('focus-mode');$('#focus-mode-toggle').setAttribute('aria-pressed','true');step=Number(s.step)||0;renderSession();$('#session-workspace').scrollIntoView({behavior:'smooth',block:'start'});};
  $('#discard-session-button').onclick=()=>{state.session=null;save();renderResumeSession();renderRecommendation();};
}

function ratingInterval(r,old){if(r==='red')return 1;if(r==='yellow')return old?Math.max(2,Math.round(old*.6)):2;const ladder=[7,14,30,60,90];return ladder.find(x=>x>(old||0))||90;}
function saveWeekReview(week,id,review){
  const p=progress();p.weeks=p.weeks||{};p.recordTimes=p.recordTimes||{};const w=weekRecord(p,week);w.reviewQueue={...(w.reviewQueue||{}),[id]:review};p.weeks[week]=w;const stamp=Date.now();p.recordTimes[`week:${week}`]=stamp;p.updatedAt=new Date(stamp).toISOString();localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));pushProgressRecord(`week:${week}`,w,stamp);
}
function scheduleSessionReviews(){
  const s=state.session;if(!s)return;const oldW=weekRecord(progress(),s.week),oldQ=oldW.reviewQueue||{};
  for(const c of sessionConcepts()){
    const rating=finalRating(c),key=`study:w${s.week}:${c.id}`,old=oldQ[key]||{},interval=ratingInterval(rating,Number(old.interval||0));
    saveWeekReview(s.week,key,{standardId:null,conceptId:c.id,title:c.name,prompt:c.prompt,source:'study-session-v2',interval,lastRating:rating,due:addDays(startOfDay(now()),interval).toISOString(),updatedAt:new Date().toISOString()});
  }
}
function finishSession(){
  if(!state.session)return;scheduleSessionReviews();const r=readinessSummary();state.history.unshift({week:state.session.week,eventId:state.session.eventId,mode:state.session.mode,ratings:Object.fromEntries(sessionConcepts().map(c=>[c.id,finalRating(c)])),teachBack:r.teachDone,finished:true,at:new Date().toISOString()});state.history=state.history.slice(0,100);state.session=null;save();
  $('#session-workspace')?.classList.add('hidden');document.body.classList.remove('focus-mode');$('#focus-mode-toggle')?.setAttribute('aria-pressed','false');renderResumeSession();renderRecommendation();renderReviews();$('#start-session-section')?.scrollIntoView({behavior:'smooth'});
}

function hydrateReviewsFromProgress(){const p=progress();state.reviews={};state.sessionConfidence={};Object.entries(p.events||{}).forEach(([id,v])=>{if(v?.studyReview)state.reviews[id]={...v.studyReview,eventId:Number(id)};if(v?.studyConfidence)state.sessionConfidence[id]=v.studyConfidence;});}
function saveEventStudyMeta(id,confidence,review){const p=progress();p.events=p.events||{};p.recordTimes=p.recordTimes||{};const key=String(id),stamp=Date.now();p.events[key]={...(p.events[key]||{}),studyConfidence:confidence,studyReview:review};p.recordTimes[`event:${key}`]=stamp;p.updatedAt=new Date(stamp).toISOString();localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));pushProgressRecord(`event:${key}`,p.events[key],stamp);}
function reviewDue(){const t=Date.now();return Object.values(state.reviews||{}).filter(r=>Date.parse(r.due)<=t).sort((a,b)=>Date.parse(a.due)-Date.parse(b.due));}
function renderReviews(){
  const out=$('#review-queue'),eventDue=reviewDue(),conceptDue=[];if(!out)return;
  Object.entries(progress().weeks||{}).forEach(([week,w])=>Object.entries(w?.reviewQueue||{}).forEach(([id,r])=>{if(Date.parse(r.due)<=Date.now())conceptDue.push({week,id,...r});}));conceptDue.sort((a,b)=>Date.parse(a.due)-Date.parse(b.due));
  const all=[...conceptDue.map(x=>({...x,kind:'concept'})),...eventDue.map(x=>({...x,kind:'event'}))];$('#review-count').textContent=`${all.length} due`;
  if(reviewedThisBlock>=reviewLimit){out.innerHTML='<p class="review-empty">Review block complete. Continue the course, or open three more retrievals when you have capacity.</p><button type="button" class="button outline-green" id="more-reviews">Review up to 3 more</button>';$('#more-reviews').onclick=()=>{reviewLimit+=3;renderReviews();};return;}
  if(!all.length){out.innerHTML='<div class="review-empty"><strong>Nothing due right now.</strong><span>Study will schedule concepts automatically after active sessions. Mastery can also send standards here for review.</span></div>';return;}
  out.innerHTML=all.slice(0,Math.max(0,reviewLimit-reviewedThisBlock)).map(r=>r.kind==='concept'?`<article class="review-item" data-week-review="${esc(r.id)}" data-review-week="${esc(r.week)}"><span>${r.source==='study-session-v2'?'Study concept':'Competency review'} · Week ${String(r.week).padStart(2,'0')}</span><h3>${esc(r.title||r.id)}</h3><p><strong>From memory:</strong> ${esc(r.prompt||'Explain this without notes.')}</p><div><button type="button" data-week-review-rate="green">Got it</button><button type="button" data-week-review-rate="yellow">Shaky</button><button type="button" data-week-review-rate="red">Needs work</button>${r.source==='study-session-v2'?`<button type="button" class="repair-now" data-review-concept="${esc(r.conceptId||'')}">Repair now</button>`:''}</div></article>`:`<article class="review-item" data-event-review="${esc(r.eventId)}"><span>Scheduled review · Week ${String(r.week||'').padStart(2,'0')}</span><h3>${esc(r.title||'Review')}</h3><p><strong>From memory:</strong> ${esc(r.prompt||r.title||'Explain what you learned.')}</p><div><button type="button" data-event-review-rate="green">Got it</button><button type="button" data-event-review-rate="yellow">Shaky</button><button type="button" data-event-review-rate="red">Needs work</button></div></article>`).join('');
  $$('[data-week-review-rate]').forEach(b=>b.onclick=()=>{const card=b.closest('[data-week-review]'),id=card.dataset.weekReview,week=card.dataset.reviewWeek,r=weekRecord(progress(),week).reviewQueue?.[id];if(!r)return;const interval=ratingInterval(b.dataset.weekReviewRate,Number(r.interval||0));saveWeekReview(week,id,{...r,interval,lastRating:b.dataset.weekReviewRate,due:addDays(startOfDay(now()),interval).toISOString(),updatedAt:new Date().toISOString()});reviewedThisBlock++;renderReviews();});
  $$('[data-review-concept]').forEach(b=>b.onclick=()=>startSession({forcedIds:[b.dataset.reviewConcept],mode:'quick'}));
  $$('[data-event-review-rate]').forEach(b=>b.onclick=()=>{const card=b.closest('[data-event-review]'),key=card.dataset.eventReview,old=state.reviews[key];if(!old)return;old.interval=ratingInterval(b.dataset.eventReviewRate,Number(old.interval||0));old.lastRating=b.dataset.eventReviewRate;old.due=addDays(startOfDay(now()),old.interval).toISOString();old.updatedAt=new Date().toISOString();state.sessionConfidence[key]=b.dataset.eventReviewRate;saveEventStudyMeta(key,b.dataset.eventReviewRate,old);reviewedThisBlock++;renderReviews();});
}

function renderParking(){const out=$('#parking-list');if(!out)return;const list=state.parking||[];if(!list.length){out.innerHTML='<div class="review-empty"><strong>Parking lot is empty.</strong><span>Save side questions or site-improvement ideas here instead of leaving the required learning path.</span></div>';return;}out.innerHTML=list.slice().reverse().map(x=>{const site=x.kind==='site';return `<article class="parking-item${site?' site-issue-item':''}" data-parking-id="${esc(x.id)}"><div><span class="parking-kind">${site?'Site issue · fix later':'Curiosity · explore later'}</span><strong>${esc(x.text)}</strong><span>Saved ${esc(fmtDate(x.at))}${x.week?` · Week ${x.week}`:''}</span></div><div>${site?'<span class="parked-builder-note">Parked for Builder Mode</span>':`<a href="search.html?q=${encodeURIComponent(x.text)}">Explore later →</a>`}<button type="button" data-remove-parking>Done</button></div></article>`}).join('');$$('[data-remove-parking]').forEach(b=>b.onclick=()=>{const id=b.closest('[data-parking-id]').dataset.parkingId;state.parking=state.parking.filter(x=>x.id!==id);save();renderParking();});}
function park(text,kind='curiosity'){const t=String(text||'').trim();if(!t)return;state.parking.push({id:crypto.randomUUID?.()||String(Date.now())+Math.random(),text:t,kind,week:currentWeek(),at:new Date().toISOString()});save();renderParking();}
function installSiteIssueParking(){
  const form=$('#parking-form'),panel=form?.closest('.study-panel');if(!panel||$('#site-issue-form'))return;
  const wrap=document.createElement('div');wrap.className='site-issue-parking';wrap.innerHTML='<div class="site-issue-parking-head"><strong>Park a site issue</strong><span>Improving Alfred is not today’s coursework unless the issue blocks learning.</span></div><form id="site-issue-form"><label for="site-issue-input">Website improvement or defect to handle later</label><div><input id="site-issue-input" type="text" maxlength="500" placeholder="Example: Week 3 figure feels too small"><button class="button outline-green" type="submit">Park for Builder Mode</button></div></form>';
  panel.insertBefore(wrap,$('#parking-list'));
  $('#site-issue-form')?.addEventListener('submit',e=>{e.preventDefault();const input=$('#site-issue-input');park(input?.value,'site');if(input)input.value='';});
}
let stuckReturnFocus=null;
function openStuck(){
  stuckReturnFocus=document.activeElement;const week=state.session?.week||currentWeek(),weak=state.session?weakConcepts():[],topic=weak[0]?.name||weekData(week).topic||'current topic';$('#stuck-topic').textContent=`Current repair target: ${topic}`;
  $('#stuck-options').innerHTML=`${state.session?'<button type="button" id="jump-repair"><strong>1. Jump to targeted repair</strong><span>Go directly to the smallest gap this session identified.</span></button>':''}<a href="learn.html?week=${week}"><strong>${state.session?'2':'1'}. Return to Classroom</strong><span>Use the full lesson and worked examples when the short repair is not enough.</span></a><a href="search.html?q=${encodeURIComponent(topic)}"><strong>${state.session?'3':'2'}. Find another verified explanation</strong><span>Search the course’s verified resource layers for this exact concept.</span></a><a href="analytics.html"><strong>${state.session?'4':'3'}. Check Mastery evidence</strong><span>See whether the issue is isolated or part of a wider competency weakness.</span></a><button type="button" id="park-current-topic"><strong>${state.session?'5':'4'}. Park the side question</strong><span>Save it and return to the required objective.</span></button>`;
  const modal=$('#stuck-modal');modal.inert=false;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';$('#jump-repair')?.addEventListener('click',()=>{step=2;state.session.step=2;save();closeStuck();renderSession();});$('#park-current-topic').onclick=()=>{park(topic);closeStuck();};requestAnimationFrame(()=>$('.modal-close',modal)?.focus());
}
function closeStuck(){const m=$('#stuck-modal');if(!m)return;m.inert=true;m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow='';stuckReturnFocus?.focus();}

function stillConnected(cfg){try{const current=JSON.parse(localStorage.getItem(SYNC_KEY)||'{}');return current.connected&&current.apiUrl===cfg.apiUrl&&current.studentKey===cfg.studentKey;}catch{return false;}}
async function pushProgressRecord(key,value,updatedAt){try{const cfg=JSON.parse(localStorage.getItem(SYNC_KEY)||'null')||{};if(!cfg.connected||!navigator.onLine||!cfg.apiUrl||!cfg.studentKey)return;let api=String(cfg.apiUrl).trim().replace(/\/+$/,'').replace(/\/(?:health|sync)$/i,'');const sk=String(cfg.studentKey).trim().toUpperCase();if(!/^https:\/\//i.test(api)||!/^AU-(?:[A-F0-9]{4}-){9}[A-F0-9]{4}$/.test(sk))return;await fetch(api+'/sync',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer '+sk},body:JSON.stringify({protocol:2,deviceId:cfg.deviceId||'study-page',deviceName:cfg.deviceName||'Study Page',records:[{key,value,updatedAt,deviceId:cfg.deviceId||'study-page'}]})});}catch{}}
async function syncProgressFromCloud(){try{const cfg=JSON.parse(localStorage.getItem(SYNC_KEY)||'null')||{};if(!cfg.connected||!navigator.onLine||!cfg.apiUrl||!cfg.studentKey)return;let api=String(cfg.apiUrl).trim().replace(/\/+$/,'').replace(/\/(?:health|sync)$/i,'');const sk=String(cfg.studentKey).trim().toUpperCase();if(!/^https:\/\//i.test(api)||!/^AU-(?:[A-F0-9]{4}-){9}[A-F0-9]{4}$/.test(sk))return;let p=progress(),records=[],did=cfg.deviceId||'study-page';const add=(key,value)=>{const updatedAt=Number(p.recordTimes?.[key]||0);if(updatedAt>0)records.push({key,value,updatedAt,deviceId:did});};Object.entries(p.events||{}).forEach(([id,v])=>add(`event:${id}`,v));Object.entries(p.weeks||{}).forEach(([w,v])=>add(`week:${w}`,v));const res=await fetch(api+'/sync',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer '+sk},body:JSON.stringify({protocol:2,deviceId:did,deviceName:cfg.deviceName||'Study Page',records})});if(!res.ok)return;const data=await res.json();if(!stillConnected(cfg))return;p=progress();p.events=p.events||{};p.weeks=p.weeks||{};p.recordTimes=p.recordTimes||{};(data.records||[]).forEach(r=>{const lt=Number(p.recordTimes[r.key]||0),ct=Number(r.updatedAt||0);if(ct<lt)return;if(r.key.startsWith('event:'))p.events[r.key.slice(6)]=window.AlfredState?.normalizeEvent?.(r.value)||r.value||{};else if(r.key.startsWith('week:'))p.weeks[r.key.slice(5)]=r.value;else return;p.recordTimes[r.key]=ct;});p.updatedAt=new Date().toISOString();localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));hydrateReviewsFromProgress();renderRecommendation();renderWeeklyPlan();renderReviews();}catch{}}

function applyQuiet(){const on=localStorage.getItem(QUIET_KEY)==='1';document.body.classList.toggle('quiet-mode',on);$('#quiet-mode-toggle')?.setAttribute('aria-pressed',String(on));}
function toggleQuiet(){const on=localStorage.getItem(QUIET_KEY)!=='1';localStorage.setItem(QUIET_KEY,on?'1':'0');applyQuiet();}
function toggleFocus(){const on=!document.body.classList.contains('focus-mode');if(on&&$('#session-workspace')?.classList.contains('hidden')){const next=window.AlfredNextAction?.get?.();if(!state.session&&(next?.kind==='classroom'||next?.reason==='due-review')){location.href=next.href;return;}startSession();return;}document.body.classList.toggle('focus-mode',on);$('#focus-mode-toggle')?.setAttribute('aria-pressed',String(on));if(on)$('#session-workspace')?.scrollIntoView({behavior:'smooth'});}
function rewriteStaticCopy(){
  const h=$('.study-hero h1'),p=$('.study-hero p');if(h)h.textContent='Find the gap. Repair it. Prove it.';if(p)p.textContent='Study is the active-recall layer of AU-ESET 301. It tests what actually stuck, targets weak concepts, gives fresh practice, and schedules retrieval without duplicating the Classroom.';
  const legend=$('.study-start-controls legend');if(legend)legend.textContent='How much should this session test?';
  const modes=$$('.session-mode');const copy=[['Quick','3 retrieval checks · one repair target'],['Standard','5 retrieval checks · targeted practice'],['Deep Work','full concept sweep · multiple transfer problems']];modes.forEach((m,i)=>{const strong=$('strong',m),small=$('small',m);if(strong)strong.textContent=copy[i][0];if(small)small.textContent=copy[i][1];});
  const note=$('.study-start-controls .small-note');if(note)note.textContent='Choose the amount of retrieval you can do well. The session is task-based, not timer-driven, and it never marks required course work complete.';
  const panel=$('#study-support-area .panel-intro');if(panel)panel.textContent='Review up to three due concepts. Weak answers return sooner; strong answers spread farther apart. Ratings schedule review only and never inflate Mastery.';
}

hydrateReviewsFromProgress();rewriteStaticCopy();installSiteIssueParking();renderRecommendation();renderWeeklyPlan();renderReviews();renderParking();renderResumeSession();applyQuiet();syncProgressFromCloud();
window.addEventListener('online',syncProgressFromCloud);window.addEventListener('storage',e=>{if(e.key===PROGRESS_KEY){hydrateReviewsFromProgress();renderRecommendation();renderReviews();}if(e.key===STUDY_KEY){state=load();renderResumeSession();renderParking();}});
$$('input[name="session-mode"]').forEach(r=>{r.checked=r.value===activeMode});
$('#start-study-session')?.addEventListener('click',e=>{const href=e.currentTarget?.dataset?.routeHref;if(href){location.href=href;return;}startSession();});$('#quiet-mode-toggle')?.addEventListener('click',toggleQuiet);$('#focus-mode-toggle')?.addEventListener('click',toggleFocus);$('#leave-focus')?.addEventListener('click',()=>{document.body.classList.remove('focus-mode');$('#focus-mode-toggle')?.setAttribute('aria-pressed','false');});
$('#session-prev')?.addEventListener('click',()=>{if(step>0){step--;state.session.step=step;save();renderSession();}});$('#session-next')?.addEventListener('click',()=>{const names=sessionStageNames();if(step<names.length-1){if(!validateStage())return;step++;state.session.step=step;save();renderSession();}else finishSession();});
$('#session-help')?.addEventListener('click',openStuck);$('#parking-form')?.addEventListener('submit',e=>{e.preventDefault();park($('#parking-input')?.value);if($('#parking-input'))$('#parking-input').value='';});
if($('#stuck-modal'))$('#stuck-modal').inert=true;$$('[data-close-stuck]').forEach(x=>x.onclick=closeStuck);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#stuck-modal')?.classList.contains('open'))closeStuck();});
})();
