/* Alfred v15.7: a shared, deterministic selector for reviewed practice. */
(()=>{
function hash(s){let h=2166136261;for(const ch of String(s)){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function shuffle(a,seed){a=a.slice();let x=seed||1;for(let i=a.length-1;i>0;i--){x=(Math.imul(x,1664525)+1013904223)>>>0;const j=x%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
function eligible(D,A){const ids=new Set(A.questionIds||[]);return D.questions.filter(q=>ids.has(q.id)&&q.masteryEvidence!==false&&q.audit?.status==='editorially-reviewed'&&q.minWeek<=A.week)}
function spread(pool,n,seed){const buckets=new Map();for(const q of shuffle(pool,seed)){const key=q.family||q.standards[0];if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(q)}const out=[];while(out.length<n){let added=0;for(const b of buckets.values()){if(b.length&&out.length<n){out.push(b.shift());added++}}if(!added)break}return out}
function select(D,A,attempt=1){if(A.noQuiz)return[];const pool=eligible(D,A),seed=hash(`${A.id}:${A.title}:${attempt}`);let out=[];
 if(A.blueprint){for(const [cat,n] of Object.entries(A.blueprint)){const p=pool.filter(q=>q.track==='CETa'&&q.standards[0].split(':')[1].split('.')[0]===cat);const picked=spread(p,n,seed^hash(cat));if(picked.length!==n)throw Error(`Insufficient reviewed domain ${cat} questions`);out.push(...picked)}}
 else{for(const track of ['CETa','Career']){const n=A.mix?.[track]||0,picked=spread(pool.filter(q=>q.track===track),n,seed^hash(track));if(picked.length!==n)throw Error(`Insufficient reviewed ${track} questions`);out.push(...picked)}}
 if(out.length!==A.count)throw Error('Assessment definition count mismatch');
 return shuffle(out,seed).map(q=>{const choices=shuffle(q.choices.map((text,index)=>({text,index})),seed^hash(q.id));return {...q,choices:choices.map(x=>x.text),answer:choices.findIndex(x=>x.index===q.answer),choiceOrder:choices.map(x=>x.index)}})
}
window.AlfredAssessmentEngine={hash,shuffle,eligible,select};
})();
