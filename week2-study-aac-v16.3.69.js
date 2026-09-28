/* AU-ESET 301 — v16.3.69 Week 2 All About Circuits Study Shelf
   Scope: Week 2 only. Keep the v16.3.68 required path unchanged while restoring the
   previously useful All About Circuits resources as optional Study material.
*/
(()=>{
  const C=window.ALFRED_CURRICULUM;
  if(!C?.modules?.length)return;
  const W=C.modules.find(m=>Number(m.week)===2);
  const A=C.teachingMediaArchitecture;
  const R=C.teachingResourceIntegration;
  if(!W||!A?.assignments)return;

  const defs={
    aacSeries1:{category:'Alternate Explanation',track:'ceta',role:'Study · Optional series explanation',use:'Use this when you want a second explanation of series topology, shared current, total resistance, voltage drops, and power.',watchFor:'Focus on the single current path first. Treat the arithmetic as a consequence of the topology, not the definition of series.',gap:'Optional review only. Alfred’s redesigned Week 2 lesson remains the required teaching path.'},
    aacSeriesDivider:{category:'Divider Reinforcement',track:'ceta',role:'Study · Optional voltage-divider explanation',use:'Use this after Alfred’s ideal-divider lesson if you want another derivation of the divider relationship.',watchFor:'Follow the derivation from common series current to individual resistor voltage drops rather than memorizing the ratio by itself.',gap:'Use Alfred’s loaded-divider section for the required load-effect and measurement-loading reasoning.'},
    aacParallel:{category:'Alternate Explanation',track:'ceta',role:'Study · Optional parallel-circuit explanation',use:'Use this when you want another explanation of parallel topology, shared voltage, branch current, equivalent resistance, and power.',watchFor:'Decide what is parallel from the shared two nodes, not from how the drawing looks.',gap:'Optional review only. Alfred and OpenStax remain the required Week 2 path.'},
    aacKclKvl:{category:'Kirchhoff Reinforcement',track:'ceta',role:'Study · Optional KCL/KVL reinforcement',use:'Use this after Alfred’s separate KCL and KVL pages when you want one combined tutorial that works both conservation laws together.',watchFor:'Write the signed KCL or KVL relationship before substituting numbers. Notice which law applies to a node and which applies to a closed loop.',gap:'Because the tutorial combines several laws, use it for reinforcement rather than as the first required explanation.'},
    aacMeterLoading:{category:'Measurement Loading',track:'ceta',role:'Study · Optional loaded-divider reading',use:'Use this after the loaded-divider page when you want a quantitative example of how a voltmeter changes the circuit being measured.',watchFor:'Replace the loaded divider leg with the correct parallel equivalent first, then recalculate Vout and compare the before/after values.',gap:'Optional deepening. Alfred supplies the required beginner sequence and lab connection.'},
    aacTroubleshootSeriesParallel:{category:'Troubleshooting Help',track:'career',role:'Study · Optional troubleshooting tutorial',use:'Use this when you want another worked example of troubleshooting a series/parallel network from expected versus measured values.',watchFor:'Write expected values first, then choose test points that reduce the number of plausible fault locations instead of probing randomly.',gap:'Optional technician reinforcement. Alfred’s five-page Career lesson remains the required troubleshooting sequence.'}
  };

  W.integration=W.integration||{};
  W.integration.media=W.integration.media||[];
  const ensureMedia=(source,d)=>{
    const i=W.integration.media.findIndex(x=>x.source===source);
    const next={source,role:d.role,use:d.use,watchFor:d.watchFor,gap:d.gap};
    if(i>=0)W.integration.media[i]={...W.integration.media[i],...next};
    else W.integration.media.push(next);
  };

  Object.entries(defs).forEach(([source,d])=>{
    ensureMedia(source,d);
    const key=`2:${source}`;
    const existing=A.assignments[key]||{key,assignmentWeek:2,source};
    A.assignments[key]={
      ...existing,
      key,
      assignmentWeek:2,
      source,
      destination:'study',
      requirement:'supporting',
      studyWeek:2,
      studyCategory:d.category,
      libraryCategory:'',
      track:d.track,
      originalRequirement:'supporting',
      originalRole:'Study',
      placements:(R?.placements||[]).filter(p=>Number(p.assignmentWeek)===2&&p.source===source)
    };
  });

  if(R){
    R.week2OptionalStudySourceIds=Object.keys(defs);
    R.week2AllAboutCircuitsStudyRevision='2026-09-27-v16.3.69-optional-study-shelf';
  }
})();
