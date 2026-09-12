(()=>{
const D=window.ALFRED_ASSESSMENT||{}, $=(s,r=document)=>r.querySelector(s), esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='alfred-u-progress-v2';function load(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch{return {}}}function weekObj(v){return typeof v==='string'?{mastery:v,assessments:{}}:{mastery:v?.mastery||'',assessments:v?.assessments||{}}}
function allRecords(){const p=load(),out=[];Object.values(p.events||{}).forEach(e=>{if(e?.assessments?.lesson)out.push(e.assessments.lesson)});Object.values(p.weeks||{}).forEach(raw=>{const w=weekObj(raw);Object.values(w.assessments||{}).forEach(a=>out.push(a))});return out}
function evidence(){
 const m={};
 const get=id=>m[id]??=( {id,total:0,correct:0,sessions:0,last:null,lastCorrect:0,lastTotal:0,history:[]} );
 const absorbRecent=a=>(a?.attempts||[]).forEach(at=>{const ts=Date.parse(at.at||'')||0;(at.s||[]).forEach(row=>{const id=row[0],c=Number(row[1]||0),t=Math.max(1,Number(row[2]||1)),x=get(id);x.history.push({ok:c===t,at:ts,c,t});});});
 allRecords().forEach(a=>{
   const x=a?.analytics;
   if(x?.v===1&&x.s){Object.entries(x.s).forEach(([id,row])=>{const z=get(id),c=Number(row[0]||0),t=Number(row[1]||0),sessions=Number(row[2]||0),lastC=Number(row[3]||0),lastT=Number(row[4]||0),lastAt=Number(row[5]||0);z.correct+=c;z.total+=t;z.sessions+=sessions;if(lastAt&&(!z.last||lastAt>z.last)){z.last=lastAt;z.lastCorrect=lastC;z.lastTotal=lastT;}});}else{
     (a?.attempts||[]).forEach(at=>{const ts=Date.parse(at.at||'')||0;(at.s||[]).forEach(row=>{const id=row[0],c=Number(row[1]||0),t=Math.max(1,Number(row[2]||1)),z=get(id);z.correct+=c;z.total+=t;z.sessions+=1;if(ts&&(!z.last||ts>z.last)){z.last=ts;z.lastCorrect=c;z.lastTotal=t;}});});
   }
   absorbRecent(a);
 });
 Object.values(m).forEach(x=>{
   x.pct=x.total?Math.round(x.correct/x.total*100):0;x.history.sort((a,b)=>a.at-b.at);
   let streak=0;for(let i=x.history.length-1;i>=0;i--){if(x.history[i].ok)streak++;else break}x.streak=streak;
   const lastSession=x.history.length?x.history[x.history.length-1]:null;if(lastSession){x.last=lastSession.at;x.lastCorrect=lastSession.c;x.lastTotal=lastSession.t;}
   const lastOk=x.lastTotal>0&&x.lastCorrect===x.lastTotal,days=lastOk?(x.streak>=3?45:x.streak===2?21:7):2;x.due=x.last?new Date(x.last+days*86400000):null;
 });
 return m;
}
const ev=evidence();
function confidence(x){if(!x||!x.total)return 0;const accuracy=x.correct/x.total,evidence=Math.min(1,x.total/12)*.65+Math.min(1,x.sessions/4)*.35,age=x.last?Math.max(0,(Date.now()-x.last)/86400000):999,recency=age<=7?1:age<=21?.9:age<=45?.75:age<=90?.55:.35,consistency=Math.min(1,(x.streak||0)/3);return Math.round(100*(accuracy*.55+evidence*.20+recency*.10+consistency*.15))}
function status(s){const x=ev[s.id];if(!x)return 'Not Introduced';if(x.due&&x.due<=new Date())return 'Retention Due';const cf=confidence(x);if(x.total<3||x.sessions<2)return 'Learning';if(cf>=85&&x.pct>=85&&x.streak>=3&&x.sessions>=3)return 'Mastered';if(cf>=72&&x.pct>=80&&x.sessions>=2)return 'Proficient';return 'Developing'}
function cls(x){return x.toLowerCase().replace(/\s+/g,'-')}
function renderSummary(){const all=[...D.cetaStandards,...D.careerStandards],counts={};all.forEach(s=>counts[status(s)]=(counts[status(s)]||0)+1);$('#standards-kpis').innerHTML=`<div><strong>${D.cetaStandards.length}</strong><span>CETa competency rows</span></div><div><strong>${D.careerStandards.length}</strong><span>career standards</span></div><div><strong>${counts.Mastered||0}</strong><span>mastered</span></div><div><strong>${counts['Retention Due']||0}</strong><span>retention due</span></div>`}
function render(){const track=$('#standard-track').value,cat=$('#standard-category').value,st=$('#standard-status').value,q=$('#standard-search').value.toLowerCase().trim(),base=track==='CETa'?D.cetaStandards:track==='Career'?D.careerStandards:[...D.cetaStandards,...D.careerStandards];const list=base.filter(s=>(!cat||s.category===cat)&&(!st||status(s)===st)&&(!q||`${s.code} ${s.text} ${s.categoryTitle}`.toLowerCase().includes(q)));$('#standard-count').textContent=`${list.length} standards shown`;$('#standard-list').innerHTML=list.map(s=>{const x=ev[s.id],z=status(s),cf=confidence(x);return `<article class="standard-row"><div class="standard-code"><span>${esc(s.track)}</span><strong>${esc(s.code)}</strong></div><div class="standard-body"><div class="standard-title-row"><h3>${esc(s.categoryTitle)}</h3><span class="mastery-pill ${cls(z)}">${esc(z)}</span></div><p>${esc(s.text)}</p><div class="standard-evidence"><span>${esc(s.sourceChapter||'')}</span>${x?`<span>${x.correct}/${x.total} correct · ${x.pct}%</span><span>${x.sessions} assessment session${x.sessions===1?'':'s'}</span><span>Confidence ${cf}/100</span><span>Last ${new Date(x.last).toLocaleDateString()}</span><span>Next retrieval ${x.due.toLocaleDateString()}</span>`:'<span>No assessment evidence yet</span>'}</div></div></article>`}).join('')||'<p class="empty-state">No standards match.</p>';}
function fillCats(){const sel=$('#standard-category');D.cetaCategories.forEach(c=>sel.insertAdjacentHTML('beforeend',`<option value="${c.id}" data-track="CETa">CETa ${c.id}.0 · ${esc(c.title)}</option>`));D.careerDomains.forEach(c=>sel.insertAdjacentHTML('beforeend',`<option value="${c.id}" data-track="Career">Career ${c.id} · ${esc(c.title)}</option>`));}
function renderCetaOutline(){const host=$('#ceta-outline-grid');if(!host)return;host.innerHTML=D.cetaCategories.map(c=>`<button class="ceta-outline-card" type="button" data-cat="${esc(c.id)}"><span>${esc(c.id)}.0</span><strong>${esc(c.title)}</strong><small>${c.count} competency row${c.count===1?'':'s'}</small></button>`).join('');host.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{$('#standard-track').value='CETa';$('#standard-category').value=b.dataset.cat;render();document.querySelector('.standards-filter')?.scrollIntoView({behavior:'smooth',block:'start'});});}
fillCats();renderCetaOutline();['#standard-track','#standard-category','#standard-status','#standard-search'].forEach(s=>$(s).oninput=render);renderSummary();render();
$('#source-evidence').innerHTML=D.meta.sources.map(s=>`<article><strong>${esc(s.title)}</strong><span>${esc(s.kind)}</span><p>${esc(s.note)}</p><a href="${esc(s.url)}" target="_blank" rel="noopener">Open source ↗</a></article>`).join('');
})();
