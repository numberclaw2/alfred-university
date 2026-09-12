(()=>{
const D=window.ALFRED_ASSESSMENT||{}, E=window.ALFRED_EVENTS||[], W=window.ALFRED_WEEKS||[], $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='alfred-u-progress-v2', SYNC_KEY='alfred-u-sync-config-v1';
const params=new URLSearchParams(location.search), type=params.get('type')||'lesson', id=params.get('id')||'1';
function load(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch{return {}}}
function normalize(p){p.events=p.events||{};p.weeks=p.weeks||{};p.readiness=p.readiness||{};p.recordTimes=p.recordTimes||{};return p}
function weekObj(v){return typeof v==='string'?{mastery:v,assessments:{},labs:{}}:{...(v||{}),mastery:v?.mastery||'',assessments:v?.assessments||{},labs:v?.labs||{}}}
function def(){if(type==='lesson')return D.lessonQuizzes.find(x=>String(x.id)===String(id));if(type==='lab')return D.labQuizzes.find(x=>x.id===id);if(type==='week')return D.weeklyTests.find(x=>String(x.id)===String(id));if(type==='major')return D.majorAssessments.find(x=>x.id===id);}
const A=def(); if(!A){document.querySelector('main').innerHTML='<section class="section shell"><h1>Assessment not found.</h1><p><a href="assessments.html">Return to Assessment Center</a></p></section>';return;}
function priorAssessment(){const p=normalize(load());if(type==='lesson')return p.events?.[id]?.assessments?.lesson||{attempts:[],attemptCount:0};const w=A.week|| (type==='major'?(id==='ceta-mock'?23:id==='career-screen'?30:31):1);return weekObj(p.weeks?.[w]).assessments?.[`${type}:${id}`]||{attempts:[],attemptCount:0}}
const prior=priorAssessment();
const attemptNo=Math.max(Number(prior.attemptCount||0),...(prior.attempts||[]).map(x=>Number(x.form||0)),(prior.attempts||[]).length)+1;
function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function shuffle(arr,seed){let a=arr.slice(),x=seed||1;for(let i=a.length-1;i>0;i--){x=(Math.imul(x,1664525)+1013904223)>>>0;const j=x%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
function isScopeQuestion(q){const p=q.prompt||'';return p.startsWith('Which activity most directly demonstrates CETa competency')||p.startsWith('You are building a study/checklist item for CETa')||p.startsWith('Which action best demonstrates career standard')||p.startsWith('A technician wants evidence for C')||p.startsWith('Which behavior is most aligned with C')||p.startsWith('Which choice would best satisfy the bridge-role expectation')}
function select(track,n,codes){if(!n)return[];let pool=D.questions.filter(q=>q.track===track && (!codes?.length || q.standards.some(s=>codes.includes(s.replace(/^CETA:|^CAREER:/,'')))));const seed=hash(`${type}:${id}:${attemptNo}:${track}`);const applied=shuffle(pool.filter(q=>!isScopeQuestion(q)),seed),scope=shuffle(pool.filter(isScopeQuestion),seed^0x9e3779b9);pool=[...applied,...scope];const out=[],usedStandards=new Map();for(const q of pool){const key=q.standards[0]||q.id,used=usedStandards.get(key)||0;if(used<2||out.length>n-4){out.push(q);usedStandards.set(key,used+1)}if(out.length===n)break}if(out.length<n){for(const q of pool){if(out.some(x=>x.id===q.id))continue;out.push(q);if(out.length===n)break}}return out}
const mix=A.mix||{CETa:A.track==='CETa'?A.count:0,Career:A.track==='Career'?A.count:0};
let questions=[...select('CETa',mix.CETa||0,A.ceta),...select('Career',mix.Career||0,A.career)];questions=shuffle(questions,hash(`${type}:${id}:${attemptNo}:combined`));
const answers={};let started=Date.now();
function title(){return A.title.replace(/^W\d+\s*[•|]\s*/,'')}
$('#quiz-eyebrow').textContent=`${type==='lesson'?'Lesson Quiz':type==='lab'?'Lab Knowledge Check':type==='week'?'Weekly Mastery Test':'Major Assessment'} · Form ${attemptNo}`;$('#quiz-title').textContent=title();
$('#quiz-meta').innerHTML=`<span>${questions.length} questions</span><span>${mix.CETa||0} CETa</span><span>${mix.Career||0} career</span><span>${A.target||80}% Alfred target</span>${A.officialThreshold?`<span>${A.officialThreshold}% ETA pass threshold</span>`:''}${A.timeMinutes?`<span>${A.timeMinutes} min suggested limit</span>`:''}`;
function render(){
 $('#quiz-form').innerHTML=questions.map((q,i)=>`<fieldset class="quiz-question" data-q="${q.id}"><legend><span>${i+1}</span>${esc(q.prompt)}</legend><div class="question-standard-row">${q.track==='CETa'?'<span class="track-ceta">CETa</span>':'<span class="track-career">Career</span>'}${q.standards.map(s=>`<span>${esc(s.replace(/^CETA:|^CAREER:/,''))}</span>`).join('')}<span>${esc(q.difficulty)}</span><span>${esc(q.skill||'Unclassified')}</span></div><div class="quiz-options">${q.choices.map((c,j)=>`<label><input type="radio" name="${q.id}" value="${j}"><span>${String.fromCharCode(65+j)}. ${esc(c)}</span></label>`).join('')}</div></fieldset>`).join('');
 $$('input[type=radio]').forEach(x=>x.onchange=()=>{answers[x.name]=Number(x.value);updateProgress()});updateProgress();
}
function updateProgress(){const done=Object.keys(answers).length;$('#answer-progress').textContent=`${done} / ${questions.length} answered`;$('#quiz-progress-bar').style.width=`${done/questions.length*100}%`;}
function gradeLetter(p){return p>=90?'A':p>=80?'B':p>=70?'C':p>=60?'D':'F'}
function standardSummary(results){const m={};results.forEach(r=>r.q.standards.forEach(s=>{m[s]??={c:0,t:0};m[s].t++;if(r.correct)m[s].c++}));return Object.entries(m).map(([s,v])=>({id:s,c:v.c,t:v.t,pct:Math.round(v.c/v.t*100)})).sort((a,b)=>a.pct-b.pct||a.id.localeCompare(b.id));}
function blankAnalytics(){return {v:1,q:[0,0],sec:0,r:{},k:{},d:{},s:{},trend:[],firstAt:0,lastAt:0}}
function pairAdd(map,key,c,t){const x=map[key]||[0,0];x[0]+=c;x[1]+=t;map[key]=x}
function standardAdd(map,id,c,t,at){const x=map[id]||[0,0,0,0,0,0,0];x[0]+=c;x[1]+=t;x[2]+=1;x[3]=c;x[4]=t;x[5]=at;x[6]=c===t?Number(x[6]||0)+1:0;map[id]=x}
function ensureAnalytics(a){
 if(a?.analytics?.v===1){const x=a.analytics;x.q=x.q||[0,0];x.r=x.r||{};x.k=x.k||{};x.d=x.d||{};x.s=x.s||{};x.trend=x.trend||[];x.sec=Number(x.sec||0);x.firstAt=Number(x.firstAt||0);x.lastAt=Number(x.lastAt||0);return x;}
 const x=blankAnalytics();
 [...(a?.attempts||[])].sort((u,v)=>Date.parse(u.at||0)-Date.parse(v.at||0)).forEach(at=>{
   const ts=Date.parse(at.at||'')||0,c=Number(at.correct||0),t=Number(at.total||0);
   x.q[0]+=c;x.q[1]+=t;x.sec+=Number(at.seconds||0);if(ts){x.firstAt=x.firstAt||ts;x.lastAt=Math.max(x.lastAt,ts);x.trend.push([ts,Number(at.pct||0)]);}
   (at.s||[]).forEach(row=>{const sid=row[0],sc=Number(row[1]||0),st=Math.max(1,Number(row[2]||1));standardAdd(x.s,sid,sc,st,ts)});
 });
 if(a)a.analytics=x;return x;
}
function addLifetimeEvidence(a,results,compact,now){
 const x=ensureAnalytics(a),correct=results.filter(r=>r.correct).length;
 x.q[0]+=correct;x.q[1]+=results.length;x.sec+=Number(compact.seconds||0);x.firstAt=x.firstAt||now;x.lastAt=now;x.trend=[...(x.trend||[]),[now,compact.pct]].slice(-6);
 const std={};
 results.forEach(r=>{
   pairAdd(x.r,r.q.track,r.correct?1:0,1);
   pairAdd(x.k,r.q.skill||'Unclassified',r.correct?1:0,1);
   pairAdd(x.d,r.q.difficulty||'Unclassified',r.correct?1:0,1);
   r.q.standards.forEach(s=>{const v=std[s]||(std[s]=[0,0]);v[1]++;if(r.correct)v[0]++;});
 });
 Object.entries(std).forEach(([sid,v])=>standardAdd(x.s,sid,v[0],v[1],now));
 a.analytics=x;return x;
}
function saveAttempt(results,pct){let p=normalize(load()), now=Date.now(), week=A.week||(type==='major'?(id==='ceta-mock'?23:id==='career-screen'?30:31):1);const stdAgg={},skillAgg={},diffAgg={},trackAgg={};results.forEach(r=>{r.q.standards.forEach(s=>{const x=stdAgg[s]||(stdAgg[s]=[0,0]);x[1]++;if(r.correct)x[0]++;});const k=r.q.skill||'Unclassified',d=r.q.difficulty||'Unclassified',tr=r.q.track;for(const [map,key] of [[skillAgg,k],[diffAgg,d],[trackAgg,tr]]){const x=map[key]||(map[key]=[0,0]);x[1]++;if(r.correct)x[0]++;}});const compact={at:new Date(now).toISOString(),pct,correct:results.filter(r=>r.correct).length,total:questions.length,seconds:Math.round((now-started)/1000),form:attemptNo,s:Object.entries(stdAgg).map(([sid,v])=>[sid,v[0],v[1]]),q:results.map(r=>`${parseInt(r.q.id.replace(/^CQ/,''),10).toString(36)}${r.chosen+(r.correct?4:0)}`).join('.'),b:D.meta?.version||'14.1'};let recordKey,value;
 function finishRecord(a){ensureAnalytics(a);addLifetimeEvidence(a,results,compact,now);const priorAttempts=(a.attempts||[]).map(old=>{if(!old||typeof old!=='object')return old;const copy={...old};delete copy.q;delete copy.b;return copy;});a.attempts=[...priorAttempts,compact].slice(-3);a.attemptCount=Math.max(Number(a.attemptCount||0),attemptNo);a.bestPct=Math.max(Number(a.bestPct||0),pct);a.lastPct=pct;a.analyticsVersion=1;return a;}
 if(type==='lesson'){
  p.events[id]=p.events[id]||{status:'not-started',outcomes:{},review:{},notes:''};p.events[id].assessments=p.events[id].assessments||{};const a=finishRecord(p.events[id].assessments.lesson||{attempts:[],attemptCount:0});p.events[id].assessments.lesson=a;recordKey=`event:${id}`;value=p.events[id];
 }else{
  const wo=weekObj(p.weeks[week]);wo.assessments=wo.assessments||{};const k=`${type}:${id}`,a=finishRecord(wo.assessments[k]||{attempts:[],attemptCount:0});wo.assessments[k]=a;p.weeks[week]=wo;recordKey=`week:${week}`;value=wo;
 }
 p.recordTimes[recordKey]=now;p.updatedAt=new Date(now).toISOString();localStorage.setItem(KEY,JSON.stringify(p));push(recordKey,value,now);return compact;
}
async function push(key,value,updatedAt){try{const c=JSON.parse(localStorage.getItem(SYNC_KEY)||'{}');if(!c.connected||!navigator.onLine)return;let api=String(c.apiUrl||'').trim().replace(/\/+$/,'').replace(/\/(?:health|sync)$/i,'');const sk=String(c.studentKey||'').trim().toUpperCase();if(!/^https:\/\//.test(api)||!/^AU-(?:[A-F0-9]{4}-){9}[A-F0-9]{4}$/.test(sk))return;await fetch(api+'/sync',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+sk},body:JSON.stringify({protocol:2,deviceId:c.deviceId||'assessment-page',deviceName:c.deviceName||'Assessment Page',records:[{key,value,updatedAt,deviceId:c.deviceId||'assessment-page'}]})})}catch{}}
$('#quiz-submit').onclick=()=>{if(Object.keys(answers).length<questions.length){const missing=questions.find(q=>answers[q.id]==null);document.querySelector(`[data-q="${missing.id}"]`).scrollIntoView({behavior:'smooth',block:'center'});$('#quiz-warning').textContent=`Answer all ${questions.length} questions before submitting.`;return;}$('#quiz-warning').textContent='';const results=questions.map(q=>({q,chosen:answers[q.id],correct:answers[q.id]===q.answer})),correct=results.filter(r=>r.correct).length,pct=Math.round(correct/questions.length*100),letter=gradeLetter(pct),target=A.target||80;saveAttempt(results,pct);const std=standardSummary(results),weak=std.filter(x=>x.pct<80);$('#quiz-results').classList.remove('hidden');$('#quiz-results').innerHTML=`<div class="result-hero ${pct>=target?'pass':'repair'}"><div><span>${pct>=target?'Mastery target met':'Repair required'}</span><strong>${pct}% · ${letter}</strong><p>${correct} of ${questions.length} correct. ${A.officialThreshold?`ETA's published pass threshold is ${A.officialThreshold}%; Alfred's readiness target for this mock is ${target}%.`:`Alfred mastery target: ${target}%.`}</p></div><div><a class="button green" href="quiz.html?type=${type}&id=${encodeURIComponent(id)}">New Form / Retake</a><a class="button outline-green" href="standards.html">Open Standards & Retention</a></div></div><section class="result-section"><h2>Standards needing the most repair</h2>${weak.length?`<div class="weak-standard-grid">${weak.slice(0,12).map(x=>`<div><strong>${esc(x.id.replace(/^CETA:|^CAREER:/,''))}</strong><span>${x.pct}% on this form</span></div>`).join('')}</div>`:'<p>No standard scored below 80% on this form.</p>'}</section><section class="result-section"><h2>Question review</h2>${results.map((r,i)=>`<article class="review-question ${r.correct?'correct':'incorrect'}"><h3>${i+1}. ${esc(r.q.prompt)}</h3><p><strong>Your answer:</strong> ${esc(r.q.choices[r.chosen])}</p>${!r.correct?`<p><strong>Correct answer:</strong> ${esc(r.q.choices[r.q.answer])}</p>`:''}<p>${esc(r.q.explanation)}</p><div>${r.q.standards.map(s=>`<span>${esc(s)}</span>`).join('')}</div></article>`).join('')}</section>`;$('#quiz-results').scrollIntoView({behavior:'smooth'});};
render();
})();
