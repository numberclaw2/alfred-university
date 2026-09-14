(()=>{
const E=window.ALFRED_EVENTS||[],W=window.ALFRED_WEEKS||[],A=window.ALFRED_ACADEMIC||{};
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const STUDY_KEY='alfred-u-study-v13', PROGRESS_KEY='alfred-u-progress-v2', QUIET_KEY='alfred-u-quiet-mode', SYNC_KEY='alfred-u-sync-config-v1';
const now=()=>new Date();
const startOfDay=d=>new Date(d.getFullYear(),d.getMonth(),d.getDate());
const addDays=(d,n)=>{const x=new Date(d);x.setDate(x.getDate()+n);return x;};
const sameDay=(a,b)=>a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();
const fmtDate=(v,o={weekday:'short',month:'short',day:'numeric'})=>new Intl.DateTimeFormat('en-US',o).format(new Date(v));
const fmtTime=v=>new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit'}).format(new Date(v));
const cleanTitle=e=>String(e?.summary||'').replace(/^AU-ESET 301 \| /,'');
function defaultState(){return {version:15,defaultMode:'standard',reviews:{},parking:[],history:[],sessionConfidence:{},session:null};}
function load(){try{return {...defaultState(),...(JSON.parse(localStorage.getItem(STUDY_KEY)||'null')||{})};}catch{return defaultState();}}
let state=load();
function save(){localStorage.setItem(STUDY_KEY,JSON.stringify({version:15,defaultMode:state.defaultMode,parking:state.parking,history:state.history,session:state.session||null}));}
function progress(){try{return JSON.parse(localStorage.getItem(PROGRESS_KEY)||'null')||{events:{},weeks:{},readiness:{},recordTimes:{}};}catch{return {events:{},weeks:{},readiness:{},recordTimes:{}};}}
function eventStatus(id){const status=progress().events?.[String(id)]?.status;return status==='review'?'in-progress':status||'not-started';}
function hydrateReviewsFromProgress(){const p=progress();state.reviews={};state.sessionConfidence={};Object.entries(p.events||{}).forEach(([id,v])=>{if(v?.studyReview)state.reviews[id]={...v.studyReview,eventId:Number(id)};if(v?.studyConfidence)state.sessionConfidence[id]=v.studyConfidence;});save();}
function saveStudyMetaToProgress(id,confidence,review){let p=progress();p.events=p.events||{};p.recordTimes=p.recordTimes||{};const key=String(id),stamp=Date.now();p.events[key]={...(p.events[key]||{}),studyConfidence:confidence,studyReview:review};p.recordTimes[`event:${key}`]=stamp;p.updatedAt=new Date().toISOString();localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));pushProgressRecord(`event:${key}`,p.events[key],stamp);}
function currentWeek(){return window.AlfredState.currentWeek();}
function targetEvent(){
  const params=new URLSearchParams(location.search),q=params.get('event');if(q){const hit=E.find(e=>String(e.id)===q);if(hit)return hit;}
  const incomplete=e=>eventStatus(e.id)!=='complete',sort=(a,b)=>new Date(a.start)-new Date(b.start),remaining=E.filter(incomplete).sort(sort),learning=remaining.filter(e=>e.type!=='Equipment');
  const requested=Number(params.get('week')||0);
  if(requested&&W.some(w=>w.week===requested))return learning.find(e=>e.week===requested)||remaining.find(e=>e.week===requested)||null;
  const week=currentWeek(),t=now();
  return learning.find(e=>e.week===week&&new Date(e.start)<=t)||learning.find(e=>e.week===week)||learning.find(e=>new Date(e.start)>=t)||learning[0]||remaining[0]||null;
}
let target=targetEvent(), step=0, activeMode=state.defaultMode||'standard';
function weekData(n){return W.find(w=>w.week===n)||{};}
function eventMinutes(e){if(!e)return 0;const s=new Date(e.start),en=new Date(e.end);return Math.max(0,Math.round((en-s)/60000));}
function modePlan(mode,e){
  const isLab=['Lab','Project','Milestone','Assessment'].includes(e?.type);
  if(mode==='quick')return [{name:'Recall',minutes:5},{name:isLab?'Prepare':'Core Concept',minutes:10},{name:'Prove',minutes:5}];
  if(mode==='deep')return [{name:'Recall',minutes:10},{name:'Learn',minutes:30},{name:isLab?'Build / Measure':'Apply / Practice',minutes:60},{name:'Prove & Close',minutes:20}];
  return [{name:'Recall',minutes:8},{name:'Learn',minutes:22},{name:isLab?'Build / Measure':'Apply / Practice',minutes:20},{name:'Prove & Close',minutes:10}];
}
function sessionResources(e){
  const wk=e.week||currentWeek(); const list=(A.deepResources||[]).filter(r=>(r.weeks||[]).includes(wk));
  const rank=p=>/CETa CORE/i.test(p)?0:/CETa \+ Career|CAREER CORE|Career Bridge/i.test(p)?1:/CETa Support/i.test(p)?2:/Verified Video|Hands-On/i.test(p)?3:4;
  return list.sort((a,b)=>rank(a.priority)-rank(b.priority)).slice(0,3);
}
function firstDomain(week){return (A.cetaDomains||[]).find(d=>(d.weeks||[]).includes(week));}
function renderRecommendation(){
  const box=$('#recommended-session');if(!box)return;if($('#session-workspace')?.classList.contains('hidden'))target=targetEvent();const start=$('#start-study-session');if(start)start.disabled=!target;if(!target){box.innerHTML='<h2>Scheduled work complete</h2><p>No incomplete work remains in this selection. Review when useful, or choose another week.</p>';return;}
  const st=eventStatus(target.id), wk=weekData(target.week);
  const when=sameDay(new Date(target.start),now())?'Today':new Date(target.start)>now()?`Next: ${fmtDate(target.start)}`:'Catch-up';
  box.innerHTML=`<div class="recommended-label">${esc(when)} · ${esc(target.type)}${target.week?` · Week ${String(target.week).padStart(2,'0')}`:''}</div><h2>${esc(cleanTitle(target))}</h2><p>${esc((target.outcomes||wk.outcomes||[])[0]||wk.topic||'Complete the next scheduled learning action.')}</p><div class="recommended-meta"><span>${target.type==='Equipment'?'Preparation reminder':eventMinutes(target)>=180?'Scheduled lab block':`${fmtTime(target.start)} scheduled`}</span><span>Progress: ${esc(st.replace('-',' '))}</span></div>`;
}
function renderWeeklyPlan(){
  const w=currentWeek(), wd=weekData(w), list=E.filter(e=>e.week===w), mins=list.filter(e=>e.type!=='Equipment').reduce((a,e)=>a+eventMinutes(e),0), lab=list.find(e=>e.type==='Lab'||e.type==='Project');
  $('#open-week-module').href=`week.html?week=${w}`;
  $('#weekly-plan').innerHTML=`<article class="weekly-plan-main"><div class="week-kicker">Week ${String(w).padStart(2,'0')}</div><h3>${esc(wd.topic||'Current Week')}</h3><p><strong>Estimated scheduled time:</strong> ${Math.round(mins/60*10)/10} hours</p><div class="three-priorities">${(wd.outcomes||[]).slice(0,3).map((x,i)=>`<div><span>${i+1}</span><p>${esc(x)}</p></div>`).join('')}</div></article><article class="weekly-plan-side"><h3>Definition of Done</h3><ul>${(wd.outcomes||[]).slice(0,5).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>${lab?`<div class="weekly-lab"><strong>Hands-on block</strong><span>${esc(cleanTitle(lab))}</span><small>${fmtDate(lab.start)} · ${fmtTime(lab.start)}</small></div>`:''}<div class="mastery-readout"><strong>Mastery is evidence-based.</strong> <a href="analytics.html">View competency evidence →</a></div></article>`;
}
function buildSteps(e,mode){
  const plan=modePlan(mode,e), wk=weekData(e.week), outcomes=e.outcomes||wk.outcomes||[], resources=sessionResources(e), domain=firstDomain(e.week);
  const tidy=window.AlfredCalendarCopy?.tidy||String;
  const reading=(e.description||'').match(/READ \/ USE:\s*([^\n]+)/)?.[1]||'';
  const taskLink=e.type==='Equipment'?(e.week&&e.week!==29?`<a href="labs.html?week=${e.week}">Open the Week ${String(e.week).padStart(2,'0')} equipment and route checklist →</a>`:'<a href="projects.html">Open Project Center for the BOM, materials, and compatibility check →</a>'):`<a href="week.html?week=${e.week}">Week ${e.week} · full instructions and resources →</a>`;
  const assignment=`<section class="study-assignment"><h4>Assigned work</h4><p>${esc(tidy(e.today||outcomes[0]||'Open the week module for this task.'))}</p>${reading?`<p><strong>Book assignment:</strong> ${esc(tidy(reading))}</p>`:''}${taskLink}</section>`;
  const recallPrompt=(outcomes[0]||wk.topic||cleanTitle(e));
  const resourceHtml=resources.length?resources.map(r=>`<a class="session-resource" href="${esc(r.url)}" target="_blank" rel="noopener"><strong>${esc(r.title)}</strong><span>${esc(r.source||r.kind||'Verified resource')} · ${esc(r.priority||'Support')}</span></a>`).join(''):'<a class="session-resource" href="week.html?week='+e.week+'"><strong>Open the Week Module</strong><span>Use the required weekly sequence.</span></a>';
  const steps=[];
  steps.push({title:`Recall · ${plan[0].minutes} min`,body:`<p class="step-directive"><strong>Before looking anything up:</strong> explain this from memory:</p><blockquote>${esc(recallPrompt)}</blockquote><p>If you cannot explain it yet, that is useful information. Do not grade yourself while recalling—just expose the gap.</p>`});
  if(mode==='quick'){
    steps.push({title:`Core Move · ${plan[1].minutes} min`,body:`<p class="step-directive">Work on one part of the assigned task below.</p>${assignment}<div class="session-resource-list"><a class="session-resource" href="week.html?week=${e.week}"><strong>Open Week ${String(e.week).padStart(2,'0')} Module</strong><span>Required outcomes and scheduled sequence</span></a>${resources[0]?`<a class="session-resource" href="${esc(resources[0].url)}" target="_blank" rel="noopener"><strong>${esc(resources[0].title)}</strong><span>${esc(resources[0].priority||'Core resource')}</span></a>`:''}</div><p class="quick-rule"><strong>Quick-session rule:</strong> use this as a 20-minute work block. Pause at a safe stopping point and save your next action. The full assignment can take several blocks.</p>`});
  }else{
    steps.push({title:`Learn · ${plan[1].minutes} min`,body:`<p class="step-directive">Use the assigned reading and task below first. The supporting links offer another explanation.</p>${assignment}<div class="session-resource-list">${resourceHtml}</div><div class="resource-layer-note"><strong>Order:</strong> CETa Core → Career Core → Help → Deep Dive. Do not browse the full library unless the required explanation is insufficient.</div>`});
    steps.push({title:`${plan[2].name} · ${plan[2].minutes} min`,body:`<p class="step-directive">Produce evidence. Watching or reading alone does not finish this step.</p><ul class="definition-list">${outcomes.slice(0,4).map(o=>`<li>${esc(o)}</li>`).join('')}</ul><div class="proof-box"><strong>Proof can be:</strong> a correct calculation, a measured value, a working circuit/code result, a truth table, a scope/logic capture, or a troubleshooting explanation.</div>${['Lab','Project'].includes(e.type)?'<a class="button green" href="labs.html?week='+e.week+'">Choose Virtual or Physical Lab</a>':''}`});
  }
  const closePlan=plan[plan.length-1];
  steps.push({title:`${closePlan.name} · ${closePlan.minutes} min`,body:`<p class="step-directive">Without notes, decide how solid this session feels.</p><div class="confidence-buttons" data-confidence><button type="button" data-rating="green"><strong>Green</strong><span>I can explain it and use it.</span></button><button type="button" data-rating="yellow"><strong>Yellow</strong><span>I understand it but need more practice.</span></button><button type="button" data-rating="red"><strong>Red</strong><span>I do not understand this yet.</span></button></div><div id="confidence-result" class="confidence-result"></div><div class="session-close-actions"><button type="button" class="button green" id="mark-session-complete">Mark Scheduled Work Complete</button><a class="button outline-green" href="quiz.html?type=lesson&id=${e.id}">Open Optional Week Practice</a><a class="button outline-green" href="progress.html">Open Full Progress Tracker</a></div><p class="small-note">Mark the scheduled work complete only after you did the assigned task. Closing this session does not mark it complete. Your confidence rating schedules retrieval practice separately.</p>`});
  return steps;
}
let steps=[];
let reviewedThisBlock=0, reviewLimit=3;
function renderSession(){
  if(!target)return; steps=buildSteps(target,activeMode); step=Math.max(0,Math.min(step,steps.length-1));
  $('#session-title').textContent=cleanTitle(target); $('#session-kicker').textContent=`Week ${String(target.week||currentWeek()).padStart(2,'0')} · ${activeMode==='deep'?'Deep Work':activeMode==='quick'?'Quick Session':'Standard Session'}`;
  $('#session-meta').textContent=`${steps.reduce((a,x)=>a+Number((x.title.match(/· (\d+)/)||[])[1]||0),0)} minute estimate · Pause or take a break when needed · Required: ${(target.outcomes||[]).length||'use the Week Module outcomes'} outcome(s)`;
  $('#session-step-tabs').innerHTML=steps.map((s,i)=>`<button aria-current="${i===step?'step':'false'}" aria-label="Step ${i+1}: ${esc(s.title.replace(/ · \d+ min/,''))}" type="button" class="${i===step?'active':''}" data-step="${i}"><span>${i+1}</span>${esc(s.title.replace(/ · \d+ min/,''))}</button>`).join('');
  $('#session-progress-bar').style.width=`${((step+1)/steps.length)*100}%`; $('#session-step-content').innerHTML=`<div class="step-number">Step ${step+1} of ${steps.length}</div><h3>${esc(steps[step].title)}</h3>${steps[step].body}`;
  $('#session-prev').disabled=step===0; $('#session-next').textContent=step===steps.length-1?'Close Session':'Next Step';
  state.session={eventId:target.id,mode:activeMode,step,note:state.session?.note||'',startedAt:state.session?.startedAt||new Date().toISOString()}; save();
  $('#session-note').value=state.session.note;
  $('#session-note').oninput=()=>{state.session.note=$('#session-note').value;save();};
  $('#session-help').onclick=openStuck;
  $$('[data-step]').forEach(b=>b.onclick=()=>{step=Number(b.dataset.step);renderSession()});
  $$('[data-stuck]').forEach(b=>b.onclick=openStuck);
  $$('[data-rating]').forEach(b=>b.onclick=()=>rateSession(b.dataset.rating));
  $('#mark-session-complete')?.addEventListener('click',markSessionComplete);
}
function renderResumeSession(){
  const box=$('#resume-session-section'), title=$('#resume-session-title'), copy=$('#resume-session-copy');
  const saved=state.session, savedEvent=saved&&E.find(e=>String(e.id)===String(saved.eventId));
  if(!box||!savedEvent){if(box)box.classList.add('hidden');return;}
  const savedStep=Math.min(Number(saved.step)||0,Math.max(0,buildSteps(savedEvent,saved.mode||'standard').length-1));
  title.textContent=`Resume ${cleanTitle(savedEvent)}`;
  copy.textContent=`You left this ${saved.mode==='quick'?'Quick':saved.mode==='deep'?'Deep Work':'Standard'} session at Step ${savedStep+1}. Resume there, or start the recommended action instead.`;
  if(saved.note)copy.textContent+=' Next time: '+saved.note;
  box.classList.remove('hidden');
  $('#resume-session-button').onclick=()=>{target=savedEvent;activeMode=saved.mode||'standard';step=savedStep;$$('input[name="session-mode"]').forEach(r=>{r.checked=r.value===activeMode});$('#session-workspace').classList.remove('hidden');renderSession();document.body.classList.add('focus-mode');$('#focus-mode-toggle').setAttribute('aria-pressed','true');$('#session-workspace').scrollIntoView({behavior:'smooth',block:'start'});};
  $('#discard-session-button').onclick=()=>{state.session=null;target=targetEvent();save();renderRecommendation();renderResumeSession();};
}
function startSession(){
  if(!target)return;
  activeMode=$('input[name="session-mode"]:checked')?.value||'standard'; state.defaultMode=activeMode; step=0; state.session={eventId:target?.id,mode:activeMode,step:0,startedAt:new Date().toISOString()}; save(); $('#resume-session-section')?.classList.add('hidden'); $('#session-workspace').classList.remove('hidden');renderSession();
  document.body.classList.add('focus-mode'); $('#focus-mode-toggle').setAttribute('aria-pressed','true'); $('#session-workspace').scrollIntoView({behavior:'smooth',block:'start'});
}
function ratingInterval(r,old){if(r==='red')return 1;if(r==='yellow')return old?Math.max(2,Math.round(old*.6)):2;const ladder=[7,14,30,60,90];return ladder.find(x=>x>(old||0))||90;}
function rateSession(rating){
  if(!target)return; const key=String(target.id), old=state.reviews[key]||{}, interval=ratingInterval(rating,Number(old.interval||0));
  state.sessionConfidence[key]=rating; state.reviews[key]={eventId:target.id,title:cleanTitle(target),week:target.week,interval,due:addDays(startOfDay(now()),interval).toISOString(),lastRating:rating,updatedAt:new Date().toISOString()}; state.history.unshift({eventId:target.id,rating,mode:activeMode,at:new Date().toISOString()});state.history=state.history.slice(0,100);save();saveStudyMetaToProgress(target.id,rating,state.reviews[key]);renderReviews();
  const msg=rating==='green'?`Good. Alfred will bring this back in ${interval} days.`:rating==='yellow'?`Scheduled for another retrieval in ${interval} days.`:`This comes back tomorrow. That is the repair plan—not a failure.`;
  $('#confidence-result').className=`confidence-result ${rating}`; $('#confidence-result').innerHTML=`<strong>${rating.toUpperCase()}</strong> · ${esc(msg)}`;
}
function reviewDue(){const t=now().getTime();return Object.values(state.reviews||{}).filter(r=>new Date(r.due).getTime()<=t).sort((a,b)=>new Date(a.due)-new Date(b.due));}
function renderReviews(){
  const list=reviewDue(); $('#review-count').textContent=`${list.length} due`; const out=$('#review-queue');
  if(reviewedThisBlock>=reviewLimit){out.innerHTML='<p class="review-empty">Review block complete. Continue your lesson, or choose another short block.</p><button type="button" class="button outline-green" id="more-reviews">Review up to 3 more</button>';$('#more-reviews').onclick=()=>{reviewLimit+=3;renderReviews();};return;}
  if(!list.length){out.innerHTML='';renderCompetencyReviews(out,0);return;}
  out.innerHTML=list.slice(0,Math.max(0,reviewLimit-reviewedThisBlock)).map(r=>{const e=E.find(x=>String(x.id)===String(r.eventId)), prompt=(r.outcomeIndices||[]).map(i=>e?.outcomes?.[i]).filter(Boolean).join(' ')||e?.outcomes?.[0]||r.title;return `<article class="review-item" data-review-id="${esc(r.eventId)}"><span>Week ${String(r.week||e?.week||'').padStart(2,'0')}</span><h3>${esc(r.title||cleanTitle(e))}</h3><p><strong>From memory:</strong> ${esc(prompt)}</p><div><button type="button" data-review-rate="green">Got it</button><button type="button" data-review-rate="yellow">Shaky</button><button type="button" data-review-rate="red">Needs work</button></div></article>`}).join('');
  $$('[data-review-rate]').forEach(b=>b.onclick=()=>{const card=b.closest('[data-review-id]'), key=card.dataset.reviewId, old=state.reviews[key], interval=ratingInterval(b.dataset.reviewRate,Number(old.interval||0));old.interval=interval;old.lastRating=b.dataset.reviewRate;old.due=addDays(startOfDay(now()),interval).toISOString();old.updatedAt=new Date().toISOString();state.sessionConfidence[key]=b.dataset.reviewRate;save();saveStudyMetaToProgress(key,b.dataset.reviewRate,old);reviewedThisBlock++;renderReviews();});
  renderCompetencyReviews(out,list.length);
}
// Standard reviews use the same Progress record and existing week sync records.
// Retrieval confidence schedules practice; it never changes assessment evidence.
function saveCompetencyReview(week,id,review){
  const p=progress();p.weeks=p.weeks||{};p.recordTimes=p.recordTimes||{};
  const raw=p.weeks[week],w=typeof raw==='string'?{mastery:raw}:{...(raw||{})};
  w.reviewQueue={...(w.reviewQueue||{}),[id]:review};p.weeks[week]=w;
  const stamp=Date.now();p.recordTimes[`week:${week}`]=stamp;p.updatedAt=new Date(stamp).toISOString();
  localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));pushProgressRecord(`week:${week}`,w,stamp);
}
function enqueueRequestedStandard(){
  const id=new URLSearchParams(location.search).get('standard');if(!id)return;
  const d=window.ALFRED_ASSESSMENT||{},s=[...(d.cetaStandards||[]),...(d.careerStandards||[])].find(s=>s.id===id);
  if(!s)return;
  const week=(A.cetaDomains||[]).find(x=>String(x.id)===String(s.category))?.weeks?.[0]||currentWeek();
  const existing=Object.entries(progress().weeks||{}).find(([,w])=>w?.reviewQueue?.[id]);
  const record=existing?.[1]?.reviewQueue?.[id]||{standardId:id,title:s.categoryTitle,prompt:s.text,source:'analytics',interval:0};
  saveCompetencyReview(existing?.[0]||week,id,{...record,due:new Date().toISOString()});
  const url=new URL(location.href);url.searchParams.delete('standard');url.hash='review-queue';history.replaceState(null,'',url);
}
function renderCompetencyReviews(out,eventCount){
  const p=progress(),due=[];
  Object.entries(p.weeks||{}).forEach(([week,w])=>Object.entries(w?.reviewQueue||{}).forEach(([id,r])=>{if(Date.parse(r.due)<=Date.now())due.push({week,id,...r});}));
  due.sort((a,b)=>Date.parse(a.due)-Date.parse(b.due));
  $('#review-count').textContent=`${eventCount+due.length} due`;
  if(!eventCount&&!due.length){out.innerHTML='<div class="review-empty"><strong>Nothing due right now.</strong><span>Use Mastery to find competencies needing attention, or return when the next review is due.</span></div>';return;}
  out.insertAdjacentHTML('beforeend',due.slice(0,Math.max(0,reviewLimit-reviewedThisBlock-Math.min(eventCount,reviewLimit-reviewedThisBlock))).map(r=>`<article class="review-item" data-standard-review="${esc(r.id)}" data-review-week="${esc(r.week)}"><span>Competency review · ${esc(r.id)}</span><h3>${esc(r.title)}</h3><p><strong>From memory:</strong> ${esc(r.prompt)}</p><p><a href="search.html?q=${encodeURIComponent(r.prompt)}">Find an explanation →</a> · <a href="assessments.html">Reassess with evidence →</a></p><p class="small-note">These ratings schedule retrieval only. Mastery changes through assessments.</p><div><button type="button" data-standard-rating="green">Got it</button><button type="button" data-standard-rating="yellow">Shaky</button><button type="button" data-standard-rating="red">Needs work</button></div></article>`).join(''));
  $$('[data-standard-rating]').forEach(b=>b.onclick=()=>{
    const c=b.closest('[data-standard-review]'),id=c.dataset.standardReview,week=c.dataset.reviewWeek;
    const r=progress().weeks?.[week]?.reviewQueue?.[id];if(!r)return;
    const interval=ratingInterval(b.dataset.standardRating,r.interval);
    saveCompetencyReview(week,id,{...r,interval,lastRating:b.dataset.standardRating,due:addDays(startOfDay(now()),interval).toISOString(),updatedAt:new Date().toISOString()});reviewedThisBlock++;renderReviews();
  });
}
function renderParking(){
  const out=$('#parking-list'); const list=state.parking||[]; if(!list.length){out.innerHTML='<div class="review-empty"><strong>Parking lot is empty.</strong><span>If a side question appears while studying, save it here instead of opening another rabbit hole.</span></div>';return;}
  out.innerHTML=list.slice().reverse().map(x=>`<article class="parking-item" data-parking-id="${esc(x.id)}"><div><strong>${esc(x.text)}</strong><span>Saved ${esc(fmtDate(x.at))}${x.week?` · Week ${x.week}`:''}</span></div><div><a href="search.html?q=${encodeURIComponent(x.text)}">Explore later →</a><button type="button" data-remove-parking>Done</button></div></article>`).join('');
  $$('[data-remove-parking]').forEach(b=>b.onclick=()=>{const id=b.closest('[data-parking-id]').dataset.parkingId;state.parking=state.parking.filter(x=>x.id!==id);save();renderParking();});
}
let stuckReturnFocus=null;
function openStuck(){
  stuckReturnFocus=document.activeElement;
  const domain=firstDomain(target?.week), topic=weekData(target?.week).topic||cleanTitle(target); $('#stuck-topic').textContent=`Current topic: ${topic}`;
  $('#stuck-options').innerHTML=`<a href="${domain?`knowledge.html?domain=${domain.id}`:'knowledge.html'}"><strong>1. Simpler concept explanation</strong><span>Open the Knowledge Base at the closest CETa domain.</span></a><a href="search.html?q=${encodeURIComponent(topic)}"><strong>2. Worked examples / another explanation</strong><span>Search every Alfred source for this exact topic.</span></a><a href="resources.html"><strong>3. Official documentation + verified videos</strong><span>Use the Engineering Library only after the core explanation is not enough.</span></a><a href="week.html?week=${target?.week||currentWeek()}"><strong>4. Return to the Week Module</strong><span>Re-read the required outcome and the sequence before adding more material.</span></a><button type="button" id="park-current-topic"><strong>5. Park the side question</strong><span>Save this topic and go back to the required task.</span></button>`;
  const modal=$('#stuck-modal');modal.inert=false;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'; $('#park-current-topic').onclick=()=>{park(topic);closeStuck();};requestAnimationFrame(()=>$('.modal-close',modal)?.focus());
}
function closeStuck(){const m=$('#stuck-modal');m.inert=true;m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow='';stuckReturnFocus?.focus();}
function park(text){const t=String(text||'').trim();if(!t)return;state.parking.push({id:(crypto.randomUUID?.()||String(Date.now())+Math.random()),text:t,week:target?.week||currentWeek(),at:new Date().toISOString()});save();renderParking();}
function markSessionComplete(){
  if(!target)return; let p=progress();p.events=p.events||{};p.recordTimes=p.recordTimes||{};const key=String(target.id), stamp=Date.now();p.events[key]={...(p.events[key]||{}),status:'complete'};p.recordTimes[`event:${key}`]=stamp;p.updatedAt=new Date().toISOString();localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));
  const btn=$('#mark-session-complete'); if(btn){btn.textContent='Session Complete ✓';btn.disabled=true;} renderRecommendation(); pushProgressRecord(`event:${key}`,p.events[key],stamp);
}
function stillConnected(cfg){try{const current=JSON.parse(localStorage.getItem(SYNC_KEY)||'{}');return current.connected&&current.apiUrl===cfg.apiUrl&&current.studentKey===cfg.studentKey;}catch{return false;}}
async function pushProgressRecord(key,value,updatedAt){
  try{const cfg=JSON.parse(localStorage.getItem(SYNC_KEY)||'null')||{};if(!cfg.connected||!navigator.onLine||!cfg.apiUrl||!cfg.studentKey)return;let api=String(cfg.apiUrl).trim().replace(/\/+$/,'').replace(/\/(?:health|sync)$/i,'');const sk=String(cfg.studentKey).trim().toUpperCase();if(!/^https:\/\//i.test(api)||!/^AU-(?:[A-F0-9]{4}-){9}[A-F0-9]{4}$/.test(sk))return;const res=await fetch(api+'/sync',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer '+sk},body:JSON.stringify({protocol:2,deviceId:cfg.deviceId||'study-page',deviceName:cfg.deviceName||'Study Page',records:[{key,value,updatedAt,deviceId:cfg.deviceId||'study-page'}]})});if(!res.ok)return;const data=await res.json();if(!stillConnected(cfg))return;const returned=(data.records||[]).find(r=>r.key===key);if(returned&&Number(returned.updatedAt)>=updatedAt){const p=progress();if(Number(p.recordTimes?.[key]||0)>Number(returned.updatedAt))return;p.events=p.events||{};p.weeks=p.weeks||{};p.recordTimes=p.recordTimes||{};if(key.startsWith('event:'))p.events[key.slice(6)]=window.AlfredState?.normalizeEvent(returned.value)||returned.value;else if(key.startsWith('week:'))p.weeks[key.slice(5)]=returned.value;p.recordTimes[key]=returned.updatedAt;p.updatedAt=new Date().toISOString();localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));}}catch{}
}
async function syncProgressFromCloud(){
  try{const cfg=JSON.parse(localStorage.getItem(SYNC_KEY)||'null')||{};if(!cfg.connected||!navigator.onLine||!cfg.apiUrl||!cfg.studentKey)return;let api=String(cfg.apiUrl).trim().replace(/\/+$/,'').replace(/\/(?:health|sync)$/i,'');const sk=String(cfg.studentKey).trim().toUpperCase();if(!/^https:\/\//i.test(api)||!/^AU-(?:[A-F0-9]{4}-){9}[A-F0-9]{4}$/.test(sk))return;let p=progress();const records=[],did=cfg.deviceId||'study-page';const add=(key,value)=>{const updatedAt=Number(p.recordTimes?.[key]||0);if(updatedAt>0)records.push({key,value,updatedAt,deviceId:did});};Object.entries(p.events||{}).forEach(([id,v])=>add(`event:${id}`,v));Object.entries(p.weeks||{}).forEach(([w,v])=>add(`week:${w}`,v));Object.entries(p.readiness||{}).forEach(([k,v])=>add(`readiness:${k}`,v));Object.entries(p.analytics||{}).forEach(([k,v])=>add(`analytics:${k}`,v));const res=await fetch(api+'/sync',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer '+sk},body:JSON.stringify({protocol:2,deviceId:did,deviceName:cfg.deviceName||'Study Page',records})});if(!res.ok)return;const data=await res.json();if(!stillConnected(cfg))return;p=progress();p.events=p.events||{};p.weeks=p.weeks||{};p.readiness=p.readiness||{};p.recordTimes=p.recordTimes||{};(data.records||[]).forEach(r=>{const lt=Number(p.recordTimes[r.key]||0),ct=Number(r.updatedAt||0);if(ct<lt)return;if(r.key.startsWith('event:'))p.events[r.key.slice(6)]=window.AlfredState?.normalizeEvent(r.value)||r.value||{};else if(r.key.startsWith('week:'))p.weeks[r.key.slice(5)]=r.value;else if(r.key.startsWith('readiness:'))p.readiness[r.key.slice(10)]=!!r.value;else if(r.key.startsWith('analytics:')){p.analytics=p.analytics||{};p.analytics[r.key.slice(10)]=r.value;}else return;p.recordTimes[r.key]=ct;});p.updatedAt=new Date().toISOString();localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));hydrateReviewsFromProgress();renderRecommendation();renderWeeklyPlan();renderReviews();}
  catch{}
}
function applyQuiet(){const on=localStorage.getItem(QUIET_KEY)==='1';document.body.classList.toggle('quiet-mode',on);$('#quiet-mode-toggle').setAttribute('aria-pressed',String(on));}
function toggleQuiet(){const on=localStorage.getItem(QUIET_KEY)!=='1';localStorage.setItem(QUIET_KEY,on?'1':'0');applyQuiet();}
function toggleFocus(){const on=!document.body.classList.contains('focus-mode');if(on&&$('#session-workspace').classList.contains('hidden')){startSession();return;}document.body.classList.toggle('focus-mode',on);$('#focus-mode-toggle').setAttribute('aria-pressed',String(on));if(on)$('#session-workspace').scrollIntoView({behavior:'smooth'});}
function finishSession(){state.history.unshift({eventId:target?.id,mode:activeMode,finished:true,at:new Date().toISOString()});state.history=state.history.slice(0,100);if(eventStatus(target?.id)==='complete')state.session=null;save();$('#session-workspace').classList.add('hidden');document.body.classList.remove('focus-mode');$('#focus-mode-toggle').setAttribute('aria-pressed','false');renderResumeSession();renderRecommendation();$('#start-session-section').scrollIntoView({behavior:'smooth'});}

enqueueRequestedStandard();hydrateReviewsFromProgress();renderRecommendation();renderWeeklyPlan();renderReviews();renderParking();renderResumeSession();applyQuiet();syncProgressFromCloud();
window.addEventListener('online',syncProgressFromCloud);
window.addEventListener('storage',event=>{if(event.key===STUDY_KEY&&!event.newValue){state=defaultState();$('#session-workspace').classList.add('hidden');document.body.classList.remove('focus-mode');$('#focus-mode-toggle').setAttribute('aria-pressed','false');renderResumeSession();renderParking();}if(event.key===PROGRESS_KEY){hydrateReviewsFromProgress();renderRecommendation();renderReviews();}});
$$('input[name="session-mode"]').forEach(r=>{r.checked=r.value===activeMode});
$('#start-study-session').onclick=startSession;$('#quiet-mode-toggle').onclick=toggleQuiet;$('#focus-mode-toggle').onclick=toggleFocus;$('#leave-focus').onclick=()=>{document.body.classList.remove('focus-mode');$('#focus-mode-toggle').setAttribute('aria-pressed','false')};
$('#session-prev').onclick=()=>{if(step>0){step--;renderSession()}};$('#session-next').onclick=()=>{if(step<steps.length-1){step++;renderSession()}else finishSession()};
$('#parking-form').onsubmit=e=>{e.preventDefault();park($('#parking-input').value);$('#parking-input').value='';};
$('#stuck-modal').inert=true;document.addEventListener('keydown',e=>{const m=$('#stuck-modal');if(e.key!=='Tab'||!m.classList.contains('open'))return;const xs=$$('a[href],button:not([disabled]),input,textarea,select',m).filter(x=>x.offsetParent!==null);if(!xs.length)return;if(e.shiftKey&&document.activeElement===xs[0]){e.preventDefault();xs.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===xs.at(-1)){e.preventDefault();xs[0].focus();}});
$$('[data-close-stuck]').forEach(x=>x.onclick=closeStuck);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#stuck-modal').classList.contains('open'))closeStuck()});
})();
