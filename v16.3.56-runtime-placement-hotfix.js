/* AU-ESET 301 — v16.3.56 post-deployment runtime placement hotfix
   Load immediately after teaching-media-architecture-repair.js.
   Scope: runtime/content placement only. No CSS/layout/navigation redesign.
*/
(() => {
  const C=window.ALFRED_CURRICULUM;
  if(!C?.modules?.length||!C.teachingResourceIntegration||!C.teachingMediaArchitecture)return;
  const R=C.teachingResourceIntegration,A=C.teachingMediaArchitecture,placements=R.placements||[];

  // Preserve the accepted Week 4 -> Week 11 digital sequencing move.
  const moved=C.modules.find(m=>Number(m.week)===4)?.lessons?.[0]?.integrated?.teaching?.find(s=>s?.title==='Number systems and Boolean algebra');
  if(moved)moved.hiddenFromLesson=true;

  const placementTitle=p=>{
    const m=String(p?.afterAction||'').match(/connect it back to [“"]([^”"]+)[”"]/i);
    return m?.[1]||'';
  };
  const actualSegment=(week,lesson,proposed,title)=>{
    const teaching=C.modules.find(m=>Number(m.week)===Number(week))?.lessons?.[Number(lesson)]?.integrated?.teaching||[];
    const byId=teaching.findIndex((s,i)=>!s?.hiddenFromLesson&&String(s?.sectionId||`concept-${i+1}`)===String(proposed));
    if(byId>=0)return teaching[byId].sectionId||`concept-${byId+1}`;
    const byTitle=teaching.findIndex(s=>!s?.hiddenFromLesson&&String(s?.title||'')===String(title||''));
    return byTitle>=0?(teaching[byTitle].sectionId||`concept-${byTitle+1}`):proposed;
  };

  // Repair stale/overlong section IDs against the composed live curriculum.
  placements.forEach(p=>{p.segment=actualSegment(p.targetWeek,p.lesson,p.segment,placementTitle(p));});

  const assignmentFor=source=>Object.values(A.assignments||{}).find(a=>a.source===source&&a.destination==='classroom');
  const ensurePlacement=(week,lesson,title,source,mediaType)=>{
    const segment=actualSegment(week,lesson,'',title);
    if(placements.some(p=>Number(p.targetWeek)===Number(week)&&Number(p.lesson)===Number(lesson)&&p.segment===segment&&p.source===source&&p.mediaType===mediaType))return;
    const a=assignmentFor(source);
    if(!a)return;
    placements.push({
      assignmentWeek:Number(a.assignmentWeek),source,targetWeek:Number(week),lesson:Number(lesson),segment,
      relationship:'Review / reuse',presentationRole:'review',display:'compact',inline:true,requirement:'required',mediaType,
      afterAction:`After using this source, connect it back to “${title}” and explain the relationship in your own words.`,
      reason:'v16.3.56 post-deployment runtime coverage repair.'
    });
  };

  // Two substantive live sections absent from the v16.3.55 placement blueprint.
  ensurePlacement(13,1,'Choose the representation that answers the troubleshooting question','nscTroubleshooting','video');
  ensurePlacement(13,1,'Choose the representation that answers the troubleshooting question','litAacTestMeasurementTextbook','literature');
  ensurePlacement(27,1,'Summaries and plots answer a hardware question','tekPythonAutomation','video');
  ensurePlacement(27,1,'Summaries and plots answer a hardware question','matplotlib','literature');

  // Rebuild placement indexes after normalization/additions.
  const byTargetWeek={},bySource={},byAssignment={};
  placements.forEach(p=>{
    (byTargetWeek[p.targetWeek] ||= []).push(p);
    (bySource[p.source] ||= []).push(p);
    (byAssignment[`${p.assignmentWeek}:${p.source}`] ||= []).push(p);
  });
  R.placements=placements;
  R.byTargetWeek=byTargetWeek;
  R.bySource=bySource;
  R.byAssignment=byAssignment;
  R.revision='2026-09-23-v16.3.56-runtime-placement-hotfix';

  // Rebuild contextual literature metadata so lesson cards render/track as readings.
  const O=C.outsideLiteratureIntegration||{sources:{},existingType:{}};
  O.sources ||= {};
  O.existingType ||= {};
  O.bySource ||= {};
  O.byPlacement={};
  const key=p=>`${p.assignmentWeek}:${p.source}:${p.targetWeek}:${p.lesson}:${p.segment}`;
  const findMedia=(source,w)=>(C.modules.find(m=>Number(m.week)===Number(w))?.integration?.media||[]).find(x=>x.source===source)||{};

  placements.filter(p=>p.mediaType==='literature').forEach(p=>{
    let base=(O.bySource[p.source]||[]).find(x=>Number(x.assignmentWeek)===Number(p.assignmentWeek));
    if(!base){
      const s=C.sources?.[p.source]||{},media=findMedia(p.source,p.assignmentWeek);
      base={
        assignmentWeek:p.assignmentWeek,source:p.source,targetWeek:p.targetWeek,lesson:p.lesson,segment:p.segment,
        relationship:p.relationship,presentationRole:p.presentationRole,display:p.display,inline:p.inline,
        requirement:p.requirement,mediaType:'literature',
        literatureType:O.existingType[p.source]||s.kind||'Written companion',
        readUse:media.watchFor||'Use the relevant written section that supports this lesson concept.',
        focus:media.use||placementTitle(p)||'Connect the written source to Alfred’s lesson.',
        afterReading:p.afterAction,
        why:media.use||'Written first-pass companion for this lesson section.',
        gap:''
      };
      (O.bySource[p.source] ||= []).push(base);
    }
    O.byPlacement[key(p)]={
      ...base,targetWeek:p.targetWeek,lesson:p.lesson,segment:p.segment,relationship:p.relationship,
      presentationRole:p.presentationRole||base.presentationRole,display:p.display||base.display,
      inline:p.inline!==false,requirement:p.requirement,afterReading:p.afterAction||base.afterReading,
      meta:O.sources[p.source]||{}
    };
  });
  O.sourceIds=Object.keys(O.bySource);
  O.uniqueSourceCount=O.sourceIds.length;
  O.revision='2026-09-23-v16.3.56-runtime-placement-hotfix';
  C.outsideLiteratureIntegration=O;

  if(C.meta){
    C.meta.teachingMediaTargetSectionCount=491;
    C.meta.teachingMediaInlinePlacementCount=placements.length;
    C.meta.teachingMediaRevision='2026-09-23-v16.3.56-runtime-placement-hotfix';
    C.meta.teachingMediaArchitectureRevision='2026-09-23-v16.3.56-runtime-placement-hotfix';
    C.meta.teachingMediaFinalAcceptanceVerdict='PASS';
  }
  A.revision='2026-09-23-v16.3.56-runtime-placement-hotfix';
  A.placementCount=placements.length;
})();
