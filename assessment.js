(()=>{
const D=window.ALFRED_ASSESSMENT||{}, E=window.ALFRED_EVENTS||[], W=window.ALFRED_WEEKS||[];
const $=(s,r=document)=>r.querySelector(s), esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const PKEY='alfred-u-progress-v2';
function progress(){try{return JSON.parse(localStorage.getItem(PKEY)||'{}')||{}}catch{return {}}}
function normalizeWeek(v){return typeof v==='string'?{mastery:v,assessments:{}}:{mastery:v?.mastery||'',assessments:v?.assessments||{}}}
function recordFor(kind,id,week){const p=progress();if(kind==='lesson')return p.events?.[id]?.assessments?.lesson||null;const w=week||(kind==='major'?(id==='ceta-mock'?23:id==='career-screen'?30:31):1),ws=normalizeWeek(p.weeks?.[w]);return ws.assessments?.[`${kind}:${id}`]||null}
function grade(pct){return pct>=90?'A':pct>=80?'B':pct>=70?'C':pct>=60?'D':'F'}
function currentWeek(){const now=Date.now();let week=1;E.filter(e=>e.week&&new Date(e.start).getTime()<=now).forEach(e=>{week=Math.max(week,Number(e.week)||1)});return week;}
function statChip(record){const attempts=record?.attempts||[];const taken=Number(record?.attemptCount||attempts.length||0);if(!taken)return '<span class="assessment-state not-started">Not attempted</span>';const best=Number(record?.bestPct??(attempts.length?Math.max(...attempts.map(a=>a.pct||0)):0));return `<span class="assessment-state ${best>=80?'passed':'needs-repair'}">Best ${best}% · ${grade(best)}</span>`}
function card(kind,d){const a=recordFor(kind,d.id,d.week), attempts=a?.attempts||[], taken=Number(a?.attemptCount||attempts.length||0), url=`quiz.html?type=${kind}&id=${encodeURIComponent(d.id)}`;return `<article class="assessment-launch-card"><div class="assessment-launch-head"><span>${kind==='lesson'?'Lesson Quiz':kind==='lab'?'Lab Check':kind==='week'?'Weekly Test':'Major Assessment'}</span>${statChip(a)}</div><h3>${esc(d.title)}</h3><p>${kind==='lesson'?`${d.count} questions · balanced 10 CETa / 10 career`:kind==='lab'?`${d.count} questions · lab knowledge + career application`:kind==='week'?`${d.count} questions · 20 CETa / 20 career`:`${d.count} questions${d.timeMinutes?` · ${d.timeMinutes} minutes`:''}`}</p><div class="assessment-tags"><span>${(d.ceta||[]).length} CETa standards</span><span>${(d.career||[]).length} career standards</span><span>${d.target||80}% Alfred target</span></div><a class="button ${taken?'outline-green':'green'}" href="${url}">${taken?'Retake / New Form':'Start Assessment'} →</a></article>`}
function init(){
  $('#assessment-kpis').innerHTML=`<div><strong>${D.lessonQuizzes.length}</strong><span>lesson quizzes</span></div><div><strong>${D.labQuizzes.length}</strong><span>lab checks</span></div><div><strong>${D.weeklyTests.length}</strong><span>weekly mastery tests</span></div><div><strong>${D.meta.gradedQuestionCount.toLocaleString()}</strong><span>validated graded questions</span></div>`;
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
