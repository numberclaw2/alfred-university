const fs=require('fs'),vm=require('vm'),path=require('path');
const root=process.argv[2]||'.';
const ctx={window:{},console,structuredClone:global.structuredClone};ctx.window.window=ctx.window;vm.createContext(ctx);
const load=['course-data.js','curriculum-data.js','assessment-data.js','assessment-completion.js','semantic-repair.js','week1-instructional-depth.js','career-instructional-depth.js','career-curriculum-reconstruction.js','career-traceability-routing.js','week2-redesign-v16.3.68.js','week2-study-aac-v16.3.69.js','week2-final-acceptance-v16.3.70.js','week3-redesign-v16.3.71.js','week3-final-acceptance-v16.3.72.js','week2-career-remediation-v16.3.74.js','week2-final-career-ux-v16.3.75.js','week2-trainer-evidence-gate-v16.3.76.js','career-occupational-governance-v16.3.77.js','ceta-career-tandem-governance-v16.3.78.js','ceta-career-tandem-timing-repair-v16.3.79.js','ceta-instructional-authority-v16.3.80.js'];
for(const f of load)vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx,{filename:f});
const C=ctx.window.ALFRED_CURRICULUM,A=ctx.window.ALFRED_ASSESSMENT,T=ctx.window.ALFRED_TANDEM_GOVERNANCE,G=ctx.window.ALFRED_WEEK_ACCEPTANCE;
const fail=[];const ok=(x,m)=>{if(!x)fail.push(m)};
ok(A.cetaStandards.length===262,'CETa standards != 262');
ok(A.careerStandards.length===95,'Career standards != 95');
ok(C.coverageMatrix.length===357,'canonical coverage != 357');
ok(T.cetaInstructionalAuthority.length===262,'authority rows != 262');
const authCodes=T.cetaInstructionalAuthority.map(r=>r.code);ok(new Set(authCodes).size===262,'duplicate CETa authority codes');
const active=T.cetaInstructionalAuthority.filter(r=>r.routeAuthorityStatus==='ACTIVE_SEMANTIC_ROUTE');
const pending=T.cetaInstructionalAuthority.filter(r=>r.routeAuthorityStatus==='ROUTE_REHOME_REQUIRED');
const by=new Map(T.cetaInstructionalAuthority.map(r=>[r.code,r]));
ok(active.length===219,`active CETa routes ${active.length} != 219`);ok(pending.length===43,`pending CETa routes ${pending.length} != 43`);
ok(pending.every(r=>Number.isInteger(r.rehomeTargetWeek)&&r.rehomeTargetWeek>=1&&r.rehomeTargetWeek<=31),'pending route missing valid rehome target');
ok(T.cetaAuthoritySummary.legacyVsLiveAssignmentMismatchCount===41,`legacy/live mismatch count ${T.cetaAuthoritySummary.legacyVsLiveAssignmentMismatchCount} != 41`);
// Independent learner-facing route proof: a verified CETa route must terminate in a visible
// current lesson teaching section, not merely in a standards row or semantic assessment task.
let liveCetaTaskCount=0; const liveCetaTaskCodes=new Set(); const liveRouteFailures=[];
for(const m of (C.modules||[])){
  const lesson=(m.lessons||[]).find(l=>l.track==='CETa')||(m.lessons||[])[0];
  if(!lesson) continue;
  const tasks=(lesson.semanticTeaching?.length?lesson.semanticTeaching:(lesson.integrated?.semanticTasks||[]));
  const sections=(lesson.integrated?.teaching||[]).filter(x=>!x.hiddenFromLesson);
  for(const task of tasks){
    liveCetaTaskCount++;
    let mapped=[];
    if((task.reviewSectionIds||[]).length){
      mapped=(task.reviewSectionIds||[]).map(id=>sections.find(s=>s.sectionId===id)).filter(Boolean);
      if(mapped.length!==(task.reviewSectionIds||[]).length) liveRouteFailures.push(`${task.taskId}: missing review section id`);
    } else {
      const exact=sections.find(s=>s.title===task.title); if(exact)mapped=[exact];
      else liveRouteFailures.push(`${task.taskId}: no visible exact-title teaching section`);
    }
    if(mapped.some(s=>String(s.text||'').trim().length<100)) liveRouteFailures.push(`${task.taskId}: mapped teaching section is too thin/empty`);
    for(const code of (task.codes||[])){
      liveCetaTaskCodes.add(code);
      const a=by.get(code);
      if(a?.confirmedTeachingWeek==null || a.confirmedTeachingWeek>Number(m.week)) liveRouteFailures.push(`${task.taskId}:${code} authority week mismatch`);
    }
  }
}
ok(liveCetaTaskCount===62,`live CETa semantic task count ${liveCetaTaskCount} != 62`);
ok(liveCetaTaskCodes.size===219,`learner-facing CETa code routes ${liveCetaTaskCodes.size} != 219`);
ok(liveRouteFailures.length===0,`learner-facing CETa route failures: ${liveRouteFailures.join(' | ')}`);
ok(active.every(r=>liveCetaTaskCodes.has(r.code)),'verified CETa authority includes a code without a learner-facing teaching route');
ok(pending.every(r=>!liveCetaTaskCodes.has(r.code)),'pending CETa authority contains a code with a learner-facing semantic route');
const cetaRows=C.coverageMatrix.filter(r=>r.track==='CETa');ok(cetaRows.length===262,'CETa coverage rows != 262');
ok(cetaRows.filter(r=>r.routeStatus==='CETA_ACTIVE_ROUTE_VERIFIED').length===219,'CETa verified coverage route count != 219');
ok(cetaRows.filter(r=>r.routeStatus==='CETA_ROUTE_REHOME_REQUIRED').length===43,'CETa pending coverage route count != 43');
const relCodes=new Set();ok(T.careerRelationships.length===95,'relationship rows != 95');
for(const r of T.careerRelationships){
 ok(!relCodes.has(r.careerCode),'duplicate relationship '+r.careerCode);relCodes.add(r.careerCode);
 const all=[...(r.allSupportCetaCodes||[])], verified=[...(r.verifiedSupportCetaCodes||[])], pendingSupport=[...(r.pendingSupportCetaCodes||[])];
 ok(JSON.stringify([...new Set([...verified,...pendingSupport])].sort())===JSON.stringify([...new Set(all)].sort()),'verified/pending support partition mismatch '+r.careerCode);
 ok(verified.every(c=>by.get(c)?.routeAuthorityStatus==='ACTIVE_SEMANTIC_ROUTE'),'unverified code in verified support '+r.careerCode);
 ok(pendingSupport.every(c=>by.get(c)?.routeAuthorityStatus==='ROUTE_REHOME_REQUIRED'),'verified code in pending support '+r.careerCode);
 if(r.relationshipType!=='CAREER_EXTENSION')ok(verified.length>0,'no verified CETa support '+r.careerCode);
 const pre=r.prerequisiteCetaCodes||[],con=r.concurrentCetaCodes||[],lat=r.laterCetaReinforcementCodes||[],w=Number(r.careerFirstTargetWeek);
 const union=[...new Set([...pre,...con,...lat])].sort();ok(JSON.stringify(union)===JSON.stringify([...new Set(verified)].sort()),'timing partition != verified supports '+r.careerCode);
 for(const c of pre)ok(by.get(c)?.confirmedTeachingWeek<w,`future/nonprior prerequisite ${r.careerCode}:${c}`);
 for(const c of con)ok(by.get(c)?.confirmedTeachingWeek===w,`nonconcurrent ${r.careerCode}:${c}`);
 for(const c of lat)ok(by.get(c)?.confirmedTeachingWeek>w,`nonlater ${r.careerCode}:${c}`);
}
ok(T.weekAcceptance.length===31,'week acceptance rows != 31');
const w2=T.weekAcceptance.find(w=>w.week===2);ok((w2.cetaRouteBacklogCodes||[]).length===0,'Week 2 has CETa route backlog');
const w2expected=['4.1','4.2','4.3','4.4','4.10','4.17','9.1','9.3'].sort();ok(JSON.stringify([...(w2.activeCetaCodes||[])].sort())===JSON.stringify(w2expected),'Week 2 active CETa authority set mismatch');
const w2eval=G.evaluateWeek(2);ok(w2eval.pass,'Week 2 combined gate no longer passes');
for(const w of T.weekAcceptance.filter(x=>x.week!==2))ok(G.evaluateWeek(w.week).status==='REMEDIATION_REQUIRED',`Week ${w.week} incorrectly passes`);
const output={pass:!fail.length,cetaStandards:262,careerStandards:95,canonicalRows:357,activeCetaRoutes:active.length,cetaRoutesRehomeRequired:pending.length,legacyVsLiveAssignmentMismatches:T.cetaAuthoritySummary.legacyVsLiveAssignmentMismatchCount,liveCetaTeachingTasks:liveCetaTaskCount,learnerFacingVerifiedCetaCodes:liveCetaTaskCodes.size,careerRelationships:T.careerRelationships.length,week2:w2eval.status,verifiedWeeks:T.weekAcceptance.filter(w=>G.evaluateWeek(w.week).pass).map(w=>w.week),failures:fail};
console.log(JSON.stringify(output,null,2));if(fail.length)process.exit(1);
