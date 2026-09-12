(()=>{
const D=window.ALFRED_ASSESSMENT||{}, $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='alfred-u-progress-v2', SYNC_KEY='alfred-u-sync-config-v1';
const params=new URLSearchParams(location.search), type=params.get('type')||'lesson', id=params.get('id')||'1';
const STD=new Map([...(D.cetaStandards||[]),...(D.careerStandards||[])].map(s=>[s.id,s]));
function load(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch{return {}}}
function normalize(p){p.events=p.events||{};p.weeks=p.weeks||{};p.readiness=p.readiness||{};p.analytics=p.analytics||{};p.recordTimes=p.recordTimes||{};return p}
function weekObj(v){return typeof v==='string'?{mastery:v,assessments:{},labs:{}}:{...(v||{}),mastery:v?.mastery||'',assessments:v?.assessments||{},labs:v?.labs||{}}}
function def(){if(type==='lesson')return D.lessonQuizzes.find(x=>String(x.id)===String(id));if(type==='lab')return D.labQuizzes.find(x=>x.id===id);if(type==='week')return D.weeklyTests.find(x=>String(x.id)===String(id));if(type==='major')return D.majorAssessments.find(x=>x.id===id);}
const A=def();if(!A){document.querySelector('main').innerHTML='<section class="section shell"><h1>Assessment not found.</h1><p><a href="assessments.html">Return to Assessment Center</a></p></section>';return;}
function priorAssessment(){const p=normalize(load());if(type==='lesson')return p.events?.[id]?.assessments?.lesson||{attempts:[],attemptCount:0};const w=A.week||(type==='major'?(id==='ceta-mock'?23:id==='career-screen'?30:31):1);return weekObj(p.weeks?.[w]).assessments?.[`${type}:${id}`]||{attempts:[],attemptCount:0}}
const prior=priorAssessment();
const attemptNo=Math.max(Number(prior.attemptCount||0),...(prior.attempts||[]).map(x=>Number(x.form||0)),(prior.attempts||[]).length)+1;
function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function shuffle(arr,seed){let a=arr.slice(),x=seed||1;for(let i=a.length-1;i>0;i--){x=(Math.imul(x,1664525)+1013904223)>>>0;const j=x%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
function evidenceQuestion(q){return q?.masteryEvidence!==false&&q?.difficulty!=='Orientation'}
function pickBalanced(pool,n,seed){
 if(!n)return[];const buckets={Advanced:[],Intermediate:[],Foundation:[]};pool.forEach(q=>(buckets[q.difficulty]||buckets.Foundation).push(q));Object.keys(buckets).forEach((k,i)=>buckets[k]=shuffle(buckets[k],seed^(0x9e3779b9*(i+1))));
 const target={Advanced:Math.max(1,Math.round(n*.10)),Intermediate:Math.round(n*.45)};target.Foundation=Math.max(0,n-target.Advanced-target.Intermediate);const out=[],used=new Map();
 function takeFrom(list,count){for(const q of list){if(count<=0)break;if(out.some(x=>x.id===q.id))continue;const key=q.standards?.[0]||q.id,usedN=used.get(key)||0;if(usedN>=2&&out.length<n-4)continue;out.push(q);used.set(key,usedN+1);count--}return count}
 for(const k of ['Advanced','Intermediate','Foundation'])target[k]=takeFrom(buckets[k],target[k]);let remaining=n-out.length;const fallback=shuffle([...buckets.Advanced,...buckets.Intermediate,...buckets.Foundation],seed^0x85ebca6b).sort((a,b)=>(b.evidenceWeight||0)-(a.evidenceWeight||0));remaining=takeFrom(fallback,remaining);if(remaining>0){for(const q of fallback){if(out.some(x=>x.id===q.id))continue;out.push(q);if(--remaining<=0)break}}return out.slice(0,n);
}
function select(track,n,codes){if(!n)return[];const pool=D.questions.filter(q=>evidenceQuestion(q)&&q.track===track&&(!codes?.length||q.standards.some(s=>codes.includes(s.replace(/^CETA:|^CAREER:/,'')))));const out=pickBalanced(pool,n,hash(`${type}:${id}:${attemptNo}:${track}`));if(out.length<n)console.error(`Alfred v14.2: insufficient substantive ${track} pool for ${type}:${id}`,{needed:n,available:pool.length});return out}
const mix=A.mix||{CETa:A.track==='CETa'?A.count:0,Career:A.track==='Career'?A.count:0};
function presentQuestion(q,seed){const items=shuffle(q.choices.map((choice,originalIndex)=>({choice,originalIndex,correct:originalIndex===q.answer})),seed);return {...q,choices:items.map(x=>x.choice),answer:items.findIndex(x=>x.correct),choiceOrder:items.map(x=>x.originalIndex)}}
let questions=[...select('CETa',mix.CETa||0,A.ceta),...select('Career',mix.Career||0,A.career)];questions=shuffle(questions,hash(`${type}:${id}:${attemptNo}:combined`)).map(q=>presentQuestion(q,hash(`${type}:${id}:${attemptNo}:${q.id}:choices`)));
const answers={};let started=Date.now();
function title(){return A.title.replace(/^W\d+\s*[•|]\s*/,'')}
$('#quiz-eyebrow').textContent=`${type==='lesson'?'Lesson Quiz':type==='lab'?'Lab Knowledge Check':type==='week'?'Weekly Mastery Test':'Major Assessment'} · Form ${attemptNo}`;$('#quiz-title').textContent=title();
$('#quiz-meta').innerHTML=`<span>${questions.length} questions</span><span>${mix.CETa||0} CETa</span><span>${mix.Career||0} career</span><span>${A.target||80}% Alfred target</span>${A.officialThreshold?`<span>${A.officialThreshold}% ETA pass threshold</span>`:''}${A.timeMinutes?`<span>${A.timeMinutes} min suggested limit</span>`:''}`;
function render(){
 $('#quiz-form').innerHTML=questions.map((q,i)=>`<fieldset class="quiz-question" data-q="${q.id}"><legend><span>${i+1}</span>${esc(q.prompt)}</legend><div class="question-standard-row">${q.track==='CETa'?'<span class="track-ceta">CETa</span>':'<span class="track-career">Career</span>'}${q.standards.map(s=>`<span>${esc(s.replace(/^CETA:|^CAREER:/,''))}</span>`).join('')}<span>${esc(q.difficulty)}</span><span>${esc(q.skill||'Unclassified')}</span></div><div class="quiz-options">${q.choices.map((c,j)=>`<label><input type="radio" name="${q.id}" value="${j}"><span>${String.fromCharCode(65+j)}. ${esc(c)}</span></label>`).join('')}</div></fieldset>`).join('');
 $$('input[type=radio]').forEach(x=>x.onchange=()=>{answers[x.name]=Number(x.value);updateProgress()});updateProgress();
}
function updateProgress(){const done=Object.keys(answers).length;$('#answer-progress').textContent=`${done} / ${questions.length} answered`;$('#quiz-progress-bar').style.width=`${done/questions.length*100}%`}
function gradeLetter(p){return p>=90?'A':p>=80?'B':p>=70?'C':p>=60?'D':'F'}
function standardSummary(results){const m={};results.filter(r=>evidenceQuestion(r.q)).forEach(r=>r.q.standards.forEach(s=>{m[s]??={c:0,t:0};m[s].t++;if(r.correct)m[s].c++}));return Object.entries(m).map(([s,v])=>({id:s,c:v.c,t:v.t,pct:Math.round(v.c/v.t*100)})).sort((a,b)=>a.pct-b.pct||a.id.localeCompare(b.id))}

// -----------------------------
// Compact analytics storage
// -----------------------------
// Assessment records keep score/type/skill/difficulty summaries and only the latest three
// standard-level attempt summaries. Lifetime competency evidence is stored once in small
// category/domain shards (analytics:ceta:<category> / analytics:career:<domain>) so the
// same standard evidence is not duplicated across many lesson/week records.
function blankAssessmentAnalytics(){return {v:2,q:[0,0],legacyQ:[0,0],sec:0,r:{},k:{},d:{},trend:[],firstAt:0,lastAt:0}}
function pairAdd(map,key,c,t){const x=map[key]||[0,0];x[0]+=Number(c||0);x[1]+=Number(t||0);map[key]=x}
function shardFor(sid){const s=STD.get(sid);return s?`${s.track==='CETa'?'ceta':'career'}:${s.category}`:null}
function ensureShard(p,shard){p.analytics=p.analytics||{};const x=p.analytics[shard]||(p.analytics[shard]={v:2,s:{},l:{}});x.v=2;x.s=x.s||{};x.l=x.l||{};return x}
function mergeGlobalRow(row,c,t,sessions,lastC,lastT,lastAt,streak,wc,wt,high){const x=row||[0,0,0,0,0,0,0,0,0,0];x[0]+=Number(c||0);x[1]+=Number(t||0);x[2]+=Number(sessions||0);if(Number(lastAt||0)>=Number(x[5]||0)){x[3]=Number(lastC||0);x[4]=Number(lastT||0);x[5]=Number(lastAt||0);x[6]=Number(streak||0)}x[7]+=Number(wc||0);x[8]+=Number(wt||0);x[9]+=Number(high||0);return x}
function migrateAssessmentAnalytics(a,p,changed){
 const old=a?.analytics;if(old?.v===2&&!old.s)return old;
 if(old?.v===2&&old.s){ // Defensive migration for pre-release v14.2 test builds.
   Object.entries(old.s).forEach(([sid,row])=>{const shard=shardFor(sid);if(!shard)return;const sh=ensureShard(p,shard);sh.s[sid]=mergeGlobalRow(sh.s[sid],row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9]);changed.add(shard)});
   const x={...old};delete x.s;x.v=2;x.legacyQ=x.legacyQ||[0,0];x.r=x.r||{};x.k=x.k||{};x.d=x.d||{};x.trend=x.trend||[];a.analytics=x;return x;
 }
 const x=blankAssessmentAnalytics();
 if(old?.v===1){
   x.q=[Number(old.q?.[0]||0),Number(old.q?.[1]||0)];x.legacyQ=[...x.q];x.sec=Number(old.sec||0);x.trend=[...(old.trend||[])].slice(-8);x.firstAt=Number(old.firstAt||0);x.lastAt=Number(old.lastAt||0);
   Object.entries(old.s||{}).forEach(([sid,row])=>{const t=Number(row[1]||0),shard=shardFor(sid);if(!shard||!t)return;const sh=ensureShard(p,shard);sh.l[sid]=Number(sh.l[sid]||0)+t;changed.add(shard)});
 }else{
   [...(a?.attempts||[])].sort((u,v)=>Date.parse(u.at||0)-Date.parse(v.at||0)).forEach(at=>{const ts=Date.parse(at.at||'')||0,c=Number(at.correct||0),t=Number(at.total||0);x.q[0]+=c;x.q[1]+=t;x.legacyQ[0]+=c;x.legacyQ[1]+=t;x.sec+=Number(at.seconds||0);if(ts){x.firstAt=x.firstAt||ts;x.lastAt=Math.max(x.lastAt,ts);x.trend.push([ts,Number(at.pct||0)])}if(Array.isArray(at.s))at.s.forEach(row=>{const sid=row?.[0],n=Number(row?.[2]||0),shard=shardFor(sid);if(!sid||!n||!shard)return;const sh=ensureShard(p,shard);sh.l[sid]=Number(sh.l[sid]||0)+n;changed.add(shard)})});x.trend=x.trend.slice(-8);
 }
 a.analytics=x;return x;
}
function addAssessmentSummary(a,p,changed,results,compact,now){const x=migrateAssessmentAnalytics(a,p,changed),valid=results.filter(r=>evidenceQuestion(r.q)),correct=valid.filter(r=>r.correct).length;x.q[0]+=correct;x.q[1]+=valid.length;x.sec+=Number(compact.seconds||0);x.firstAt=x.firstAt||now;x.lastAt=now;x.trend=[...(x.trend||[]),[now,compact.pct]].slice(-8);valid.forEach(r=>{pairAdd(x.r,r.q.track,r.correct?1:0,1);pairAdd(x.k,r.q.skill||'Unclassified',r.correct?1:0,1);pairAdd(x.d,r.q.difficulty||'Unclassified',r.correct?1:0,1)});a.analytics=x;return x}
function addGlobalEvidence(p,results,now,changed){const grouped={};results.filter(r=>evidenceQuestion(r.q)).forEach(r=>{const w=Number(r.q.evidenceWeight||1),high=['Intermediate','Advanced'].includes(r.q.difficulty)?1:0;r.q.standards.forEach(sid=>{const v=grouped[sid]||(grouped[sid]={c:0,t:0,wc:0,wt:0,high:0});v.t++;v.wt+=w;v.high+=high;if(r.correct){v.c++;v.wc+=w}})});Object.entries(grouped).forEach(([sid,v])=>{const shard=shardFor(sid);if(!shard)return;const sh=ensureShard(p,shard),old=sh.s[sid]||[0,0,0,0,0,0,0,0,0,0],streak=v.c===v.t?Number(old[6]||0)+1:0;sh.s[sid]=mergeGlobalRow(old,v.c,v.t,1,v.c,v.t,now,streak,v.wc,v.wt,v.high);changed.add(shard)})}
function saveAttempt(results,pct){
 let p=normalize(load()),now=Date.now(),week=A.week||(type==='major'?(id==='ceta-mock'?23:id==='career-screen'?30:31):1),changedShards=new Set(),stdAgg={};const valid=results.filter(r=>evidenceQuestion(r.q));
 valid.forEach(r=>r.q.standards.forEach(s=>{const x=stdAgg[s]||(stdAgg[s]={c:0,t:0});x.t++;if(r.correct)x.c++}));
 const compact={at:new Date(now).toISOString(),pct,correct:valid.filter(r=>r.correct).length,total:valid.length,seconds:Math.round((now-started)/1000),form:attemptNo,s:Object.entries(stdAgg).map(([sid,v])=>[sid,v.c,v.t]),q:valid.map(r=>`${parseInt(r.q.id.replace(/^CQ/,''),10).toString(36)}${(r.q.choiceOrder?.[r.chosen]??r.chosen)+(r.correct?4:0)}`).join('.'),b:D.meta?.version||'14.2'};
 let recordKey,value;
 function finishRecord(a){addAssessmentSummary(a,p,changedShards,results,compact,now);addGlobalEvidence(p,results,now,changedShards);const priorAttempts=(a.attempts||[]).map(old=>{if(!old||typeof old!=='object')return old;const copy={...old};delete copy.q;delete copy.b;delete copy.s;return copy});a.attempts=[...priorAttempts,compact].slice(-3);a.attemptCount=Math.max(Number(a.attemptCount||0),attemptNo);a.bestPct=Math.max(Number(a.bestPct||0),pct);a.lastPct=pct;a.analyticsVersion=2;return a}
 if(type==='lesson'){p.events[id]=p.events[id]||{status:'not-started',outcomes:{},review:{},notes:''};p.events[id].assessments=p.events[id].assessments||{};const a=finishRecord(p.events[id].assessments.lesson||{attempts:[],attemptCount:0});p.events[id].assessments.lesson=a;recordKey=`event:${id}`;value=p.events[id]}
 else{const wo=weekObj(p.weeks[week]);wo.assessments=wo.assessments||{};const k=`${type}:${id}`,a=finishRecord(wo.assessments[k]||{attempts:[],attemptCount:0});wo.assessments[k]=a;p.weeks[week]=wo;recordKey=`week:${week}`;value=wo}
 p.recordTimes[recordKey]=now;const records=[{key:recordKey,value,updatedAt:now}];changedShards.forEach(shard=>{const key=`analytics:${shard}`;p.recordTimes[key]=now;records.push({key,value:p.analytics[shard],updatedAt:now})});p.updatedAt=new Date(now).toISOString();localStorage.setItem(KEY,JSON.stringify(p));push(records);return compact;
}
async function push(records){try{const c=JSON.parse(localStorage.getItem(SYNC_KEY)||'{}');if(!c.connected||!navigator.onLine)return;let api=String(c.apiUrl||'').trim().replace(/\/+$/,'').replace(/\/(?:health|sync)$/i,'');const sk=String(c.studentKey||'').trim().toUpperCase();if(!/^https:\/\//.test(api)||!/^AU-(?:[A-F0-9]{4}-){9}[A-F0-9]{4}$/.test(sk))return;const deviceId=c.deviceId||'assessment-page';await fetch(api+'/sync',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+sk},body:JSON.stringify({protocol:2,deviceId,deviceName:c.deviceName||'Assessment Page',records:records.map(r=>({...r,deviceId}))})})}catch{}}

$('#quiz-submit').onclick=()=>{if(Object.keys(answers).length<questions.length){const missing=questions.find(q=>answers[q.id]==null);document.querySelector(`[data-q="${missing.id}"]`).scrollIntoView({behavior:'smooth',block:'center'});$('#quiz-warning').textContent=`Answer all ${questions.length} questions before submitting.`;return}$('#quiz-warning').textContent='';const results=questions.map(q=>({q,chosen:answers[q.id],correct:answers[q.id]===q.answer})),correct=results.filter(r=>r.correct).length,pct=Math.round(correct/questions.length*100),letter=gradeLetter(pct),target=A.target||80;saveAttempt(results,pct);const std=standardSummary(results),weak=std.filter(x=>x.pct<80);$('#quiz-results').classList.remove('hidden');$('#quiz-results').innerHTML=`<div class="result-hero ${pct>=target?'pass':'repair'}"><div><span>${pct>=target?'Mastery target met':'Repair required'}</span><strong>${pct}% · ${letter}</strong><p>${correct} of ${questions.length} correct. ${A.officialThreshold?`ETA's published pass threshold is ${A.officialThreshold}%; Alfred's readiness target for this mock is ${target}%.`:`Alfred mastery target: ${target}%.`}</p></div><div><a class="button green" href="quiz.html?type=${type}&id=${encodeURIComponent(id)}">New Form / Retake</a><a class="button outline-green" href="standards.html">Open Standards & Retention</a></div></div><section class="result-section"><h2>Standards needing the most repair</h2>${weak.length?`<div class="weak-standard-grid">${weak.slice(0,12).map(x=>`<div><strong>${esc(x.id.replace(/^CETA:|^CAREER:/,''))}</strong><span>${x.pct}% on this form</span></div>`).join('')}</div>`:'<p>No standard scored below 80% on this form.</p>'}</section><section class="result-section"><h2>Question review</h2>${results.map((r,i)=>`<article class="review-question ${r.correct?'correct':'incorrect'}"><h3>${i+1}. ${esc(r.q.prompt)}</h3><p><strong>Your answer:</strong> ${esc(r.q.choices[r.chosen])}</p>${!r.correct?`<p><strong>Correct answer:</strong> ${esc(r.q.choices[r.q.answer])}</p>`:''}<p>${esc(r.q.explanation)}</p><div>${r.q.standards.map(s=>`<span>${esc(s)}</span>`).join('')}</div></article>`).join('')}</section>`;$('#quiz-results').scrollIntoView({behavior:'smooth'})};
render();
})();
