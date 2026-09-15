/* Alfred v16.3.2: shared deterministic selector for reviewed mastery and practice forms.
   Question selection/order remains compatible with v16.3.1. Choice placement uses a
   separate constrained-random deterministic layout so canonical source position cannot leak into
   learner-facing answer letters or create a predictable per-form answer quota. */
(()=>{
function hash(s){let h=2166136261;for(const ch of String(s)){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function shuffle(a,seed){a=a.slice();let x=seed||1;for(let i=a.length-1;i>0;i--){x=(Math.imul(x,1664525)+1013904223)>>>0;const j=x%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
function mix32(x){x=(Number(x)>>>0)+0x9e3779b9>>>0;x=Math.imul(x^(x>>>16),0x85ebca6b)>>>0;x=Math.imul(x^(x>>>13),0xc2b2ae35)>>>0;return (x^(x>>>16))>>>0}
function rng(seed){let x=mix32(seed||1);return()=>{x=(x+0x6D2B79F5)>>>0;let t=x;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296}}
function strongShuffle(a,seed){a=a.slice();const random=rng(seed);for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function eligible(D,A){const ids=new Set(A.questionIds||[]);return D.questions.filter(q=>ids.has(q.id)&&q.masteryEvidence!==false&&q.audit?.status==='editorially-reviewed'&&q.minWeek<=A.week)}
function spread(pool,n,seed){const buckets=new Map();for(const q of shuffle(pool,seed)){const key=q.family||q.standards[0];if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(q)}const out=[];while(out.length<n){let added=0;for(const b of buckets.values()){if(b.length&&out.length<n){out.push(b.shift());added++}}if(!added)break}return out}

/* Build a deterministic but non-quota learner-facing answer-position sequence.
   Positions are generated from an independent PRNG stream, then rejected only when a
   sequence is conspicuously concentrated or contains a long same-letter run. This avoids
   both the old source-position bias and a new exploitable "exactly N of each letter" rule. */
function answerPositions(n,seed){
 const maxRun=seq=>{let last=-1,run=0,best=0;for(const x of seq){if(x===last)run++;else{last=x;run=1}best=Math.max(best,run)}return best};
 for(let salt=0;salt<512;salt++){
  const random=rng(mix32(seed^hash(`positions:${salt}`))),seq=[],counts=[0,0,0,0];
  for(let i=0;i<n;i++){const pos=Math.floor(random()*4);seq.push(pos);counts[pos]++}
  if(maxRun(seq)>3)continue;
  if(n>=5&&n<20&&Math.max(...counts)>Math.max(3,Math.ceil(n*0.40)))continue;
  if(n>=20&&Math.max(...counts)>Math.ceil(n*0.35))continue;
  if(n>=8&&Math.min(...counts)<1)continue;
  if(n>=20&&Math.min(...counts)<Math.floor(n*0.12))continue;
  return seq;
 }
 // Defensive fallback: use a strong independent shuffle of a near-even bag. This path is
 // not expected in normal four-choice forms and exists only to guarantee termination.
 const bag=[];for(let i=0;i<n;i++)bag.push(i%4);return strongShuffle(bag,mix32(seed^0x27D4EB2F));
}
function choiceLayout(q,targetPosition,seed){
 const source=(q.choices||[]).map((text,index)=>({text,index}));
 if(source.length!==4||!Number.isInteger(q.answer)||q.answer<0||q.answer>=source.length){
  const choices=strongShuffle(source,seed);
  return {choices:choices.map(x=>x.text),answer:choices.findIndex(x=>x.index===q.answer),choiceOrder:choices.map(x=>x.index)};
 }
 const correct=source[q.answer];
 const distractors=strongShuffle(source.filter(x=>x.index!==q.answer),mix32(seed^0xC2B2AE35));
 const placed=[];let d=0;
 for(let i=0;i<4;i++)placed.push(i===targetPosition?correct:distractors[d++]);
 return {choices:placed.map(x=>x.text),answer:targetPosition,choiceOrder:placed.map(x=>x.index)};
}
function select(D,A,attempt=1){if(A.noQuiz)return[];const pool=eligible(D,A),seed=hash(`${A.id}:${A.title}:${attempt}`);let out=[];
 if(A.blueprint){for(const [cat,n] of Object.entries(A.blueprint)){const p=pool.filter(q=>q.track==='CETa'&&q.standards[0].split(':')[1].split('.')[0]===cat);const picked=spread(p,n,seed^hash(cat));if(picked.length!==n)throw Error(`Insufficient reviewed domain ${cat} questions`);out.push(...picked)}}
 else{for(const track of ['CETa','Career']){const n=A.mix?.[track]||0,picked=spread(pool.filter(q=>q.track===track),n,seed^hash(track));if(picked.length!==n)throw Error(`Insufficient reviewed ${track} questions`);out.push(...picked)}}
 if(out.length!==A.count)throw Error('Assessment definition count mismatch');
 out=shuffle(out,seed); // Preserve v16.3.1 question selection/order behavior.
 const positions=answerPositions(out.length,hash(`answer-layout:${A.id}:${A.title}:${attempt}:v16.3.2`));
 return out.map((q,index)=>{const layout=choiceLayout(q,positions[index],mix32(seed^hash(`${q.id}:${attempt}:choice-order:v16.3.2`)));return {...q,...layout}})
}
window.AlfredAssessmentEngine={hash,shuffle,mix32,strongShuffle,answerPositions,eligible,select};
})();
