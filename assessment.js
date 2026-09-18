(()=>{
const D=window.ALFRED_ASSESSMENT||{}, E=window.ALFRED_EVENTS||[], W=window.ALFRED_WEEKS||[];
const $=(s,r=document)=>r.querySelector(s), esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const PKEY='alfred-u-progress-v2';
function progress(){try{return JSON.parse(localStorage.getItem(PKEY)||'{}')||{}}catch{return {}}}
function normalizeWeek(v){return typeof v==='string'?{mastery:v,assessments:{}}:{mastery:v?.mastery||'',assessments:v?.assessments||{}}}
function recordFor(kind,id,week){const p=progress();if(kind==='lesson')return p.events?.[id]?.assessments?.lesson||null;const w=week||(kind==='major'?(id==='ceta-mock'?23:id==='career-screen'?30:31):1),ws=normalizeWeek(p.weeks?.[w]);return ws.assessments?.[`${kind}:${id}`]||null}
function grade(pct){return pct>=90?'A':pct>=80?'B':pct>=70?'C':pct>=60?'D':'F'}
function currentWeek(){return window.AlfredState.currentWeek();}
function statChip(record,target=80){const attempts=record?.attempts||[];const taken=Number(record?.attemptCount||attempts.length||0);if(!taken)return '<span class="assessment-state not-started">Not attempted</span>';const best=Number(record?.bestPct??(attempts.length?Math.max(...attempts.map(a=>a.pct||0)):0));return `<span class="assessment-state ${best>=target?'passed':'needs-repair'}">Historical best ${best}% · ${grade(best)}</span>`}
function availableCount(d,track){if(d.noQuiz)return 0;return Math.min(d.mix?.[track]||0,window.AlfredAssessmentEngine.eligible(D,d).filter(q=>q.track===track).length)}
function qualifyingRuns(record,d){const evidenceRevision=String(D.meta?.evidenceRevision||D.meta?.version||'16.2');return (record?.attempts||[]).filter(at=>String(at?.b||'')===evidenceRevision&&Number(at?.total||0)>=Number(d?.count||100)&&Number(at?.pct||0)>=Number(d?.qualifyingTarget||85)).length}
function card(kind,d){
 if(d.noQuiz)return `<article class="assessment-launch-card"><h3>${esc(d.title)}</h3><p>${esc(d.guidance)}</p><a class="button outline-green" href="learn.html?week=${d.week}">Open required Classroom path →</a></article>`;
 const required=d.required===true||kind==='lab'||kind==='week',a=recordFor(kind,d.id,d.week),attempts=a?.attempts||[],taken=Number(a?.attemptCount||attempts.length||0),url=`quiz.html?type=${kind}&id=${encodeURIComponent(d.id)}${required?'&required=1':''}`,c=availableCount(d,'CETa'),r=availableCount(d,'Career'),short=c+r<d.count;
 const label=d.classification||(kind==='lesson'?'Supplemental Practice':kind==='lab'?'Required Lab Check':kind==='week'?'Required Weekly Mastery':'Cumulative Gate');
 const readiness=d.id==='ceta-mock'?`<div class="readiness-run-status"><strong>Alfred gate: ${Math.min(qualifyingRuns(a,d),d.requiredRuns||1)} of ${d.requiredRuns||1} qualifying run</strong><span>Complete one full ${d.count}-question Alfred run at ${d.qualifyingTarget||85}% or higher.</span><span>Independent gate: complete one separate current CETa practice assessment at ${d.independentRunTarget||85}% or higher from outside the Alfred question bank.</span></div><p>${esc(d.readinessRule||'')}</p>`:'';
 return `<article class="assessment-launch-card"><div class="assessment-launch-head"><span>${esc(label)}</span>${statChip(a,d.target||80)}</div><h3>${esc(d.title)}</h3><p>${c+r} questions · ${c} CETa / ${r} career${short?' · Short practice form':''}</p>${short?'<p>Some questions were retired. This shorter form is practice, not a full-length readiness test.</p>':''}${readiness}<div class="assessment-tags"><span>${(d.ceta||[]).length} CETa objectives sampled</span><span>${(d.career||[]).length} career objectives sampled</span><span>${d.target||80}% ${required?'mastery':'practice'} target</span></div><a class="button ${taken?'outline-green':'green'}" href="${url}">${taken?'Retake / New Form':'Start Assessment'} →</a></article>`
}
function init(){
  $('#assessment-kpis').innerHTML=`<div><strong>62</strong><span>required in-lesson checks</span></div><div><strong>${D.labQuizzes.length}</strong><span>required lab checks</span></div><div><strong>${D.weeklyTests.length}</strong><span>required weekly mastery gates</span></div><div><strong>${D.meta.gradedQuestionCount.toLocaleString()}</strong><span>editorially reviewed bank items</span></div>`;
  const lf=$('#lesson-week-filter');W.forEach(w=>lf.insertAdjacentHTML('beforeend',`<option value="${w.week}">Week ${String(w.week).padStart(2,'0')} · ${esc(w.topic)}</option>`));
  const requestedWeek=Number(new URLSearchParams(location.search).get('week')||0), defaultWeek=requestedWeek&&W.some(w=>w.week===requestedWeek)?requestedWeek:currentWeek(); lf.value=String(defaultWeek);
  function lessons(){const w=Number(lf.value||0),q=($('#lesson-search').value||'').toLowerCase().trim();const list=D.lessonQuizzes.filter(x=>(!w||x.week===w)&&(!q||JSON.stringify(x).toLowerCase().includes(q)));$('#lesson-assessments').innerHTML=list.map(x=>card('lesson',x)).join('')||'<p class="empty-state">No lesson quizzes match.</p>';$('#lesson-count').textContent=`${list.length} shown`;const note=$('#lesson-filter-guidance');if(note)note.textContent=w?`Showing Week ${String(w).padStart(2,'0')}. Choose “All weeks” when you want to browse the complete assessment bank.`:'Showing all 125 lesson quizzes. Choose a week to narrow the list.';}
  lf.oninput=lessons;$('#lesson-search').oninput=lessons;lessons();
  $('#lab-assessments').innerHTML=D.labQuizzes.map(x=>card('lab',x)).join('');
  $('#weekly-assessments').innerHTML=D.weeklyTests.map(x=>card('week',x)).join('');
  $('#major-assessments').innerHTML=D.majorAssessments.map(x=>card('major',x)).join('');
  $('#source-list').innerHTML=D.meta.sources.map(s=>`<article class="source-evidence"><div><span>${esc(s.kind)}</span><h3>${esc(s.title)}</h3></div><p>${esc(s.note)}</p><a href="${esc(s.url)}" target="_blank" rel="noopener">Open source ↗</a></article>`).join('');
}
init();
})();
