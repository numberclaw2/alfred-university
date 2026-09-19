(()=>{
'use strict';
const G=Array.isArray(window.ALFRED_GLOSSARY)?window.ALFRED_GLOSSARY:[];
const root=document.querySelector('#vocabulary-study-section');
if(!root||!G.length)return;
const $=(s,r=root)=>r.querySelector(s), $$=(s,r=root)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='alfred-u-vocabulary-study-v1';
const DAY=86400000;
const todayKey=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
const todayStart=()=>{const d=new Date();d.setHours(0,0,0,0);return d.getTime();};
const addDays=(n)=>todayStart()+n*DAY;
const currentWeek=()=>{const q=Number(new URLSearchParams(location.search).get('week')||0);if(q>=1&&q<=31)return q;return Number(window.AlfredState?.currentWeek?.()||1);};
const defaultState=()=>({version:1,terms:{},lastScope:'recommended',lastSize:10,lastWeek:currentWeek(),lastCategory:'',sessions:[]});
function load(){try{return {...defaultState(),...(JSON.parse(localStorage.getItem(KEY)||'null')||{})};}catch{return defaultState();}}
let state=load();
function save(){localStorage.setItem(KEY,JSON.stringify({...state,sessions:(state.sessions||[]).slice(-40)}));}
function rec(e){return state.terms[e.slug]||null;}
function ensureRec(e){return state.terms[e.slug]||(state.terms[e.slug]={attempts:0,again:0,hard:0,got:0,successDates:[],streak:0,due:todayStart(),lastRating:'',lastSeen:0});}
function isRetained(r){return Boolean(r&&(r.successDates||[]).length>=3&&r.lastRating==='got');}
function isDue(r){return Boolean(r&&Number(r.due||0)<=todayStart());}
function shuffle(a){const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}
function unique(arr){return [...new Map(arr.map(e=>[e.slug,e])).values()];}
function termWeeks(e){return Array.isArray(e.weeks)?e.weeks.map(Number).filter(Boolean):[];}
function statusCounts(){
  const seen=G.filter(e=>rec(e));
  return {
    due:seen.filter(e=>isDue(rec(e))).length,
    currentNew:G.filter(e=>termWeeks(e).includes(currentWeek())&&!rec(e)).length,
    developing:seen.filter(e=>!isRetained(rec(e))).length,
    retained:seen.filter(e=>isRetained(rec(e))).length,
    studied:seen.length
  };
}
const categories=[...new Set(G.map(e=>e.category).filter(Boolean))].sort();
const weekSel=$('#vocab-week'),catSel=$('#vocab-category'),sizeSel=$('#vocab-size');
weekSel.innerHTML=Array.from({length:31},(_,i)=>i+1).map(w=>`<option value="${w}">Week ${w}</option>`).join('');
catSel.innerHTML='<option value="">All categories</option>'+categories.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');
weekSel.value=String(Math.min(31,Math.max(1,Number(state.lastWeek||currentWeek()))));
catSel.value=categories.includes(state.lastCategory)?state.lastCategory:'';
sizeSel.value=['5','10','20'].includes(String(state.lastSize))?String(state.lastSize):'10';
let scope=['recommended','needs','week','category','all'].includes(state.lastScope)?state.lastScope:'recommended';
let session=null;

function updateStats(){
  const s=statusCounts();
  $('#vocab-stat-due').textContent=s.due;
  $('#vocab-stat-new').textContent=s.currentNew;
  $('#vocab-stat-developing').textContent=s.developing;
  $('#vocab-stat-retained').textContent=s.retained;
  $('#vocab-coverage').textContent=`${s.studied} of ${G.length} course terms studied`;
}
function scopePool(){
  const cw=currentWeek(),seen=G.filter(e=>rec(e)),due=seen.filter(e=>isDue(rec(e)));
  if(scope==='recommended'){
    const currentNew=G.filter(e=>termWeeks(e).includes(cw)&&!rec(e));
    const currentDeveloping=G.filter(e=>termWeeks(e).includes(cw)&&rec(e)&&!isRetained(rec(e))&&!isDue(rec(e)));
    return unique([...shuffle(due),...shuffle(currentNew),...shuffle(currentDeveloping)]);
  }
  if(scope==='needs')return seen.filter(e=>isDue(rec(e))||!isRetained(rec(e))).sort((a,b)=>Number(rec(a)?.due||0)-Number(rec(b)?.due||0)||a.term.localeCompare(b.term));
  if(scope==='week')return shuffle(G.filter(e=>termWeeks(e).includes(Number(weekSel.value))));
  if(scope==='category')return shuffle(G.filter(e=>!catSel.value||e.category===catSel.value));
  return shuffle(G);
}
function scopeLabel(){
  if(scope==='recommended')return `Due reviews + Week ${currentWeek()} vocabulary`;
  if(scope==='needs')return 'Terms still developing';
  if(scope==='week')return `Week ${weekSel.value} vocabulary`;
  if(scope==='category')return catSel.value||'All categories';
  return 'All course vocabulary';
}
function updateScopeUI(){
  $$('.vocab-scope-tabs button').forEach(b=>{const on=b.dataset.scope===scope;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
  $('#vocab-week-control').hidden=scope!=='week';
  $('#vocab-category-control').hidden=scope!=='category';
  const pool=scopePool();
  $('#vocab-selection-note').textContent=`${scopeLabel()} · ${pool.length} available term${pool.length===1?'':'s'}. Sessions are shuffled so you practice retrieval instead of memorizing card order.`;
  $('#vocab-start').disabled=!pool.length;
  state.lastScope=scope;state.lastWeek=Number(weekSel.value);state.lastCategory=catSel.value;state.lastSize=Number(sizeSel.value);save();
}
function promptFor(e){
  const hasNotation=Boolean(e.notation);
  return `Without looking at the answer, explain <strong>${esc(e.term)}</strong> in your own words${hasNotation?' and say what its notation or abbreviation means':''}. Then connect it to something you would measure, build, test, or troubleshoot in this course.`;
}
function cardHTML(e){
  const r=rec(e),weeks=termWeeks(e);
  return `<div class="vocab-card-kicker"><span class="vocab-chip">${esc(e.category)}</span>${weeks.slice(0,4).map(w=>`<span class="vocab-chip gold">Week ${w}</span>`).join('')}${r?`<span class="vocab-chip">${isRetained(r)?'Retained':'Developing'}</span>`:'<span class="vocab-chip">New</span>'}</div>
  <h4>${esc(e.term)}</h4>${e.pronunciation?`<div class="vocab-pron">${esc(e.pronunciation)}</div>`:''}
  <p class="vocab-prompt">${promptFor(e)}</p>
  <button class="vocab-reveal" id="vocab-reveal" type="button">Reveal answer</button>
  <div class="vocab-answer" id="vocab-answer" hidden>
    <p class="plain"><strong>Plain-English definition:</strong> ${esc(e.definition)}</p>
    <p class="technical"><strong>Technical definition:</strong> ${esc(e.technical)}</p>
    <div class="vocab-answer-meta">${e.notation?`<span><strong>Notation:</strong> ${esc(e.notation)}</span>`:''}${e.aliases?.length?`<span><strong>Also:</strong> ${e.aliases.map(esc).join(', ')}</span>`:''}${e.sourceDetail?.name?`<span><strong>Basis:</strong> ${esc(e.sourceDetail.name)}</span>`:''}</div>
    <div class="vocab-answer-actions"><a href="glossary.html#${encodeURIComponent(e.slug)}">Open full Glossary entry →</a>${weeks.length?`<a href="learn.html?week=${weeks[0]}">Open Week ${weeks[0]} Classroom →</a>`:''}</div>
    <div class="vocab-rating" aria-label="Rate this retrieval">
      <button class="again" type="button" data-rating="again"><strong>1 · Again</strong><small>I could not explain it yet. Show it again later in this session.</small></button>
      <button class="hard" type="button" data-rating="hard"><strong>2 · Hard</strong><small>I mostly had it, but it took effort or I missed an important part.</small></button>
      <button class="got" type="button" data-rating="got"><strong>3 · Got it</strong><small>I explained the essential meaning before revealing the answer.</small></button>
    </div>
  </div>`;
}
function renderCard(){
  if(!session)return;
  if(session.index>=session.queue.length){finishSession();return;}
  const slug=session.queue[session.index],e=G.find(x=>x.slug===slug);
  if(!e){session.index++;renderCard();return;}
  $('#vocab-session-title').textContent=scopeLabel();
  $('#vocab-session-meta').textContent=`Card ${session.index+1} of ${session.queue.length} · ${session.originalCount} selected${session.requeues?' · difficult cards re-enter the queue':''}`;
  $('#vocab-card').innerHTML=cardHTML(e);
  $('#vocab-progress-bar').style.width=`${Math.min(100,session.index/Math.max(1,session.queue.length)*100)}%`;
  $('#vocab-reveal').addEventListener('click',reveal);
  $$('#vocab-card [data-rating]').forEach(b=>b.addEventListener('click',()=>rate(e,b.dataset.rating)));
  $('#vocab-reveal').focus({preventScroll:true});
}
function reveal(){const a=$('#vocab-answer'),b=$('#vocab-reveal');if(!a||!b)return;a.hidden=false;b.hidden=true;const first=a.querySelector('[data-rating]');if(first)first.focus({preventScroll:true});}
function scheduleFor(r,rating){
  const day=todayKey();
  r.attempts=(r.attempts||0)+1;r.lastSeen=Date.now();r.lastRating=rating;
  if(rating==='again'){
    r.again=(r.again||0)+1;r.streak=0;r.due=todayStart();
    return;
  }
  if(rating==='hard'){
    r.hard=(r.hard||0)+1;r.streak=Math.max(0,Number(r.streak||0));r.due=addDays(1);
    return;
  }
  r.got=(r.got||0)+1;r.streak=Number(r.streak||0)+1;
  r.successDates=Array.isArray(r.successDates)?r.successDates:[];
  if(!r.successDates.includes(day))r.successDates.push(day);
  r.successDates=r.successDates.slice(-12);
  const n=r.successDates.length;
  const interval=n<=1?2:n===2?4:n===3?7:n===4?14:30;
  r.due=addDays(interval);
}
function rate(e,rating){
  const r=ensureRec(e);scheduleFor(r,rating);
  session.results[rating]=(session.results[rating]||0)+1;
  session.rated.add(e.slug);
  if(rating==='again'){
    const n=session.requeueCount[e.slug]||0;
    if(n<2){session.queue.push(e.slug);session.requeueCount[e.slug]=n+1;session.requeues++;}
  }
  save();updateStats();session.index++;renderCard();
}
function startSession(){
  const pool=scopePool();if(!pool.length)return;
  const size=Math.min(Number(sizeSel.value)||10,pool.length);
  const chosen=pool.slice(0,size);
  session={queue:chosen.map(e=>e.slug),index:0,originalCount:chosen.length,results:{again:0,hard:0,got:0},rated:new Set(),requeueCount:{},requeues:0,started:Date.now()};
  $('#vocab-session').hidden=false;$('#vocab-session-summary').hidden=true;$('#vocab-card-wrap').hidden=false;$('#vocab-session-nav').hidden=false;
  root.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  renderCard();
}
function finishSession(){
  const elapsed=Math.max(1,Math.round((Date.now()-session.started)/60000));
  const result={date:Date.now(),scope,selected:session.originalCount,again:session.results.again,hard:session.results.hard,got:session.results.got,minutes:elapsed};
  state.sessions=Array.isArray(state.sessions)?state.sessions:[];state.sessions.push(result);save();
  $('#vocab-progress-bar').style.width='100%';$('#vocab-card-wrap').hidden=true;$('#vocab-session-nav').hidden=true;
  const s=statusCounts();
  const box=$('#vocab-session-summary');box.hidden=false;box.innerHTML=`<h3>Vocabulary session complete</h3><p>You practiced active recall before checking the Glossary answer. Difficult terms stay in rotation; successful terms return after a spacing interval.</p><div class="vocab-summary-grid"><div class="vocab-summary-item"><strong>${session.results.got}</strong><span>Got it</span></div><div class="vocab-summary-item"><strong>${session.results.hard}</strong><span>Hard</span></div><div class="vocab-summary-item"><strong>${session.results.again}</strong><span>Again</span></div><div class="vocab-summary-item"><strong>${s.due}</strong><span>Due now</span></div></div><button class="vocab-start" id="vocab-study-another" type="button">Study another set</button><p class="vocab-study-note"><strong>Retained</strong> requires successful retrieval on at least three separate study dates; one good flip does not count as durable learning.</p>`;
  $('#vocab-study-another').addEventListener('click',startSession);session=null;updateStats();updateScopeUI();
}
function resetProgress(){
  if(!confirm('Reset only Vocabulary Study history? This does not change the Glossary, Classroom, assessments, or course progress.'))return;
  state=defaultState();weekSel.value=String(currentWeek());catSel.value='';sizeSel.value='10';scope='recommended';save();updateStats();updateScopeUI();$('#vocab-session').hidden=true;
}
$$('.vocab-scope-tabs button').forEach(b=>b.addEventListener('click',()=>{scope=b.dataset.scope;updateScopeUI();}));
[weekSel,catSel,sizeSel].forEach(el=>el.addEventListener('change',()=>{updateScopeUI();}));
$('#vocab-start').addEventListener('click',startSession);
$('#vocab-end-session').addEventListener('click',()=>{if(session&&confirm('End this vocabulary session? Ratings already submitted are saved.')){session.index=session.queue.length;finishSession();}});
$('#vocab-reset').addEventListener('click',resetProgress);
document.addEventListener('keydown',ev=>{
  if(!session||$('#vocab-session').hidden||/INPUT|TEXTAREA|SELECT|BUTTON|A/.test(document.activeElement?.tagName||''))return;
  const answer=$('#vocab-answer');
  if((ev.key===' '||ev.key==='Enter')&&answer?.hidden){ev.preventDefault();reveal();return;}
  if(answer&&!answer.hidden&&['1','2','3'].includes(ev.key)){
    ev.preventDefault();const map={'1':'again','2':'hard','3':'got'},e=G.find(x=>x.slug===session.queue[session.index]);if(e)rate(e,map[ev.key]);
  }
});
updateStats();updateScopeUI();
})();
