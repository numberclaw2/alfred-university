/* v15.1: lossless compatibility helpers. No new backend record types. */
(() => {
  const key = 'alfred-u-progress-v2';
  const editorialFixes = [
    [/\bABOUTELECTRONICS\b/gi,'ABOUT ELECTRONICS'],
    [/\bAFTERTODAY\b/gi,'AFTER TODAY'],
    [/\bREQUIREDLEARNINGOUTCOMES\b/gi,'REQUIRED LEARNING OUTCOMES'],
    [/\bACTIONCHECKLIST\b/gi,'ACTION CHECKLIST'],
    [/\bCOVERAGEAUDIT\b/gi,'COVERAGE AUDIT'],
    [/\bSYSTEMRULES\b/gi,'SYSTEM RULES'],
    [/\bTHISWEEK'SRESOURCES\b/gi,"THIS WEEK'S RESOURCES"],
    [/\bTHISWEEK\b/gi,'THIS WEEK'],
    [/\bEMBEDDEDPURPOSE\b/gi,'EMBEDDED PURPOSE'],
    [/\bMASTERYGATE\b/gi,'MASTERY GATE'],
    [/\bCETaSCOPE\b/g,'CETa SCOPE'],
    [/\bCETacompetencies\b/g,'CETa competencies'],
    [/\bETACETa\b/g,'ETA CETa'],
    [/\btheCETa\b/g,'the CETa'],
    [/\bComputerArchitecture\b/g,'Computer Architecture'],
    [/\bComputerApplications\b/g,'Computer Applications'],
    [/\bCumulativeRepair\b/g,'Cumulative Repair'],
    [/\bInterfaceIntegration\b/g,'Interface Integration'],
    [/\bAutomatedLogger\b/g,'Automated Logger'],
    [/\bTestReport\b/g,'Test Report'],
    [/\bRoleProof\b/g,'Role Proof'],
    [/\bInterviewGreen-Light\b/g,'Interview Green-Light'],
    [/\bFeedbackLoop\b/g,'Feedback Loop'],
    [/\bMasteryCheck\b/g,'Mastery Check'],
    [/\bGeneratorTutorial\b/g,'Generator Tutorial'],
    [/\bDeveloperZone\b/g,'Developer Zone'],
    [/\bRadioFundamentals\b/g,'Radio Fundamentals'],
    [/\bStateMachines\b/g,'State Machines'],
    [/\bSolderingTutorial\b/g,'Soldering Tutorial'],
    [/\bLectureSeries\b/g,'Lecture Series'],
    [/\bHowDo\b/g,'How Do'],
    [/\bHowDoes\b/g,'How Does'],
    [/\btoModulation\b/g,'to Modulation'],
    [/\bexplainTTL\b/g,'explain TTL'],
    [/\bwhileCETa\b/g,'while CETa'],
    [/\bBeej’sGuide\b/g,"Beej’s Guide"],
    [/\bBNCConnector\b/g,'BNC Connector'],
    [/\bnoChristmas-Eve\b/gi,'no Christmas Eve'],
    [/\bCortex-Mbasics\b/g,'Cortex-M basics'],
    [/\bMCUDeveloper\b/g,'MCU Developer'],
    [/\bafloating-input\b/gi,'a floating-input'],
    [/\bbasiclogic-analyzer\b/gi,'basic logic-analyzer'],
    [/\bbasiccomputer\b/gi,'basic computer'],
    [/\bmalformedresponse\b/gi,'malformed response'],
    [/\bspacedreview\b/gi,'spaced review'],
    [/\bspacedrecall\b/gi,'spaced recall'],
    [/\brawdata\b/gi,'raw data'],
    [/\bhandledisconnect\b/gi,'handle disconnect'],
    [/\bisinterpretable\b/gi,'is interpretable'],
    [/\banddocumented\b/gi,'and documented'],
    [/\bandautomatically\b/gi,'and automatically'],
    [/\bandbandwidth\b/gi,'and bandwidth'],
    [/\banddiagnostic\b/gi,'and diagnostic'],
    [/\baredemonstrable\b/gi,'are demonstrable'],
    [/\basappropriate\b/gi,'as appropriate'],
    [/\basjustification\b/gi,'as justification'],
    [/\bassociatedegree\b/gi,'associate degree'],
    [/\batechnician-work\b/gi,'a technician-work'],
    [/\bbeforerunning\b/gi,'before running'],
    [/\bbeforemeasuring\b/gi,'before measuring'],
    [/\bbeforethe\b/gi,'before the'],
    [/\bcalculatereactance\b/gi,'calculate reactance'],
    [/\bCETacomputer-application\b/g,'CETa computer-application'],
    [/\bCETacramming\b/g,'CETa cramming'],
    [/\bCircuitsPlaylist\b/g,'Circuits Playlist'],
    [/\bcommitphotos\b/gi,'commit photos'],
    [/\bcontinuetargeted\b/gi,'continue targeted'],
    [/\berrataapplied\b/gi,'errata applied'],
    [/\bescalationand\b/gi,'escalation and'],
    [/\bescalationchoices\b/gi,'escalation choices'],
    [/\bETAcompetency\b/g,'ETA competency'],
    [/\bETAElectronics\b/g,'ETA Electronics'],
    [/\bexam-heavyweeks\b/gi,'exam-heavy weeks'],
    [/\bexpected-vs-actualmeasurements\b/gi,'expected-vs-actual measurements'],
    [/\bexplainpropagation\b/gi,'explain propagation'],
    [/\bfloatinginputs\b/gi,'floating inputs'],
    [/\bformulasfrom\b/gi,'formulas from'],
    [/\bfreshcalculations\b/gi,'fresh calculations'],
    [/\bgenuineelectronics\b/gi,'genuine electronics'],
    [/\bidentifycable\b/gi,'identify cable'],
    [/\bidentifydevices\b/gi,'identify devices'],
    [/\bidentifypeak\b/gi,'identify peak'],
    [/\bidentifyrectifier\b/gi,'identify rectifier'],
    [/\bidentifyunfamiliar\b/gi,'identify unfamiliar'],
    [/\binductivebehavior\b/gi,'inductive behavior'],
    [/\bInductorsPlaylist\b/g,'Inductors Playlist'],
    [/\bintentionallymiswired\b/gi,'intentionally miswired'],
    [/\binterfaceplan\b/gi,'interface plan'],
    [/\bMatplotlibQuick\b/g,'Matplotlib Quick'],
    [/\bmemorysummary\b/gi,'memory summary'],
    [/\bmintechnical\b/gi,'min technical'],
    [/\bminutesmapping\b/gi,'minutes mapping'],
    [/\bmissesdocumented\b/gi,'misses documented'],
    [/\bnon-examwork\b/gi,'non-exam work'],
    [/\boperationsand\b/gi,'operations and'],
    [/\boptionalperfection\b/gi,'optional perfection'],
    [/\boutputcontrol\b/gi,'output control'],
    [/\bplusdocumentation\b/gi,'plus documentation'],
    [/\bpower-upchecklist\b/gi,'power-up checklist'],
    [/\bpredictionvs\b/gi,'prediction vs'],
    [/\bproduceacceptable\b/gi,'produce acceptable'],
    [/\bquestionswhen\b/gi,'questions when'],
    [/\bquestionswithout\b/gi,'questions without'],
    [/\breacheshardware\b/gi,'reaches hardware'],
    [/\bresourcesalready\b/gi,'resources already'],
    [/\bresumedefensible\b/gi,'resume-defensible'],
    [/\broot-causenote\b/gi,'root-cause note'],
    [/\bschematicanalysis\b/gi,'schematic analysis'],
    [/\bshowingprototype\b/gi,'showing prototype'],
    [/\bsignaltracing\b/gi,'signal tracing'],
    [/\bsimplefilter\b/gi,'simple filter'],
    [/\bsupportstechnician\b/gi,'supports technician'],
    [/\btakespriority\b/gi,'takes priority'],
    [/\bthreerequirements\b/gi,'three requirements'],
    [/\busebreakpoints\b/gi,'use breakpoints'],
    [/\buseone-change-at-a-time\b/gi,'use one-change-at-a-time'],
    [/\bweakcompetency\b/gi,'weak competency'],
    [/\bweek'sresources\b/gi,"week's resources"],
    [/\bwiretermination\b/gi,'wire termination'],
    [/\bwithprofessional\b/gi,'with professional'],
    [/\bwithreproduce\b/gi,'with reproducible'],
    [/\bStartteach\b/g,'Start teach'],
    [/\bamissed\b/gi,'a missed'],
    [/\bfirst10\b/gi,'first 10'],
    [/\bthisweek\b/gi,'this week'],
    [/\bresourcesalready\b/gi,'resources already'],
    [/\bresourcestied\b/gi,'resources tied'],
    [/\btothis\b/gi,'to this'],
    [/\bweek’scompetencies\b/gi,'week’s competencies'],
    [/\brecallprompts\b/gi,'recall prompts'],
    [/\bofficialformula\b/gi,'official formula'],
    [/\bBuild\/measure\/debugthe\b/gi,'Build/measure/debug the'],
    [/\bPhotographor\b/gi,'Photograph or'],
    [/\bdocumentexpected\b/gi,'document expected'],
    [/\bexpectedvsactual\b/gi,'expected vs actual'],
    [/\bandcommit\b/gi,'and commit'],
    [/\bCompletionrequires\b/gi,'Completion requires'],
    [/\bnotwatching\b/gi,'not watching'],
    [/\bApplythe\b/gi,'Apply the'],
    [/\bPredictresults\b/gi,'Predict results'],
    [/\bresultsbefore\b/gi,'results before'],
    [/\bdeliberatelycreate\b/gi,'deliberately create'],
    [/\bwhensafe\b/gi,'when safe'],
    [/\bStudyonlythe\b/gi,'Study only the'],
    [/\bsummaryand\b/gi,'summary and'],
    [/\bWorkfresh\b/gi,'Work fresh'],
    [/\bwithoutnotes\b/gi,'without notes'],
    [/\bmissgets\b/gi,'miss gets'],
    [/\beachnon-exam\b/gi,'each non-exam'],
    [/\bnon-exam studyblock\b/gi,'non-exam study block'],
    [/\bNeveruse\b/gi,'Never use'],
    [/\bmissedsession\b/gi,'missed session'],
    [/\bmake-upmarathon\b/gi,'make-up marathon'],
    [/\bportfoliobased\b/gi,'portfolio based'],
    [/\brequestedskills\b/gi,'requested skills'],
    [/\bjobfilter\b/gi,'job filter'],
    [/\bgenuineelectronics\b/gi,'genuine electronics'],
    [/\boptionalperfection\b/gi,'optional perfection'],
    [/\bstarteach\b/gi,'start each'],
    [/\btoembedded\b/gi,'to embedded'],
    [/\bwitha\b/gi,'with a'],
    [/\bonlythe\b/gi,'only the'],
    [/\bfromolder\b/gi,'from older'],
    [/\btheconcept\b/gi,'the concept'],
    [/\bandfault\b/gi,'and fault'],
    [/\binspectjoints\b/gi,'inspect joints'],
    [/\bissueand\b/gi,'issue and'],
    [/\bissuelist\b/gi,'issue list'],
    [/\bfortoday\b/gi,'for today'],
    [/\bthetopic\b/gi,'the topic'],
    [/\bitappears\b/gi,'it appears'],
    [/\bitscorrection\b/gi,'its correction'],
    [/\bvsactual\b/gi,'vs actual'],
    [/\btheweek\b/gi,'the week'],
    [/\bcomponentsymbols\b/gi,'component symbols'],
    [/\bembeddedmomentum\b/gi,'embedded momentum'],
    [/\bETAElectronics\b/g,'ETA Electronics'],
    [/\bfull-timehardware\b/gi,'full-time hardware'],
    [/\blow-overlapmaterial\b/gi,'low-overlap material'],
    [/\bnew-year’s-evesession\b/gi,'New Year’s Eve session'],
    [/\bone-pagesummary\b/gi,'one-page summary'],
    [/\bonecalculate\b/gi,'one calculation'],
    [/\boscillatorsand\b/gi,'oscillators and'],
    [/\brailmeasurements\b/gi,'rail measurements'],
    [/\brecognitionquestions\b/gi,'recognition questions'],
    [/\bscheduledend\b/gi,'scheduled end'],
    [/\bsignal-generatorawareness\b/gi,'signal-generator awareness'],
    [/\btargetedweak-area\b/gi,'targeted weak-area'],
    [/\bthanksgiving-adjustedworkload\b/gi,'Thanksgiving-adjusted workload'],
    [/\btransformerstep-up\b/gi,'transformer step-up'],
    [/\btroubleshootingstories\b/gi,'troubleshooting stories'],
    [/\bunhealthymake-up\b/gi,'unhealthy make-up'],
    [/\bwatchingalone\b/gi,'watching alone'],
    [/\bwithoutcorrupting\b/gi,'without corrupting'],
    [/\bwrittencorrection\b/gi,'written correction'],
    [/\bxreinforcement\b/gi,'× reinforcement'],
    [/\bzenerregulation\b/gi,'Zener regulation'],
    [/\bCircuitsplaylist\b/gi,'Circuits playlist'],
    [/\bInductorsplaylist\b/gi,'Inductors playlist'],
    [/\bMatplotlibQuick\b/gi,'Matplotlib Quick'],
    [/\bETAelectronics\b/gi,'ETA electronics'],
    [/\bareasare\b/gi,'areas are'],
    [/\bascope\b/gi,'a scope'],
    [/\batransistor\b/gi,'a transistor'],
    [/\bbasicrework\b/gi,'basic rework'],
    [/\bCommoncore\b/gi,'Common core'],
    [/\bdocumentone\b/gi,'document one'],
    [/\bexplainedat\b/gi,'explained at'],
    [/\bfailureor\b/gi,'failure or'],
    [/\bkeepsthe\b/gi,'keeps the'],
    [/\bmaterialand\b/gi,'material and'],
    [/\bminutesof\b/gi,'minutes of'],
    [/\bnetworkwith\b/gi,'network with'],
    [/\bratingsand\b/gi,'ratings and'],
    [/\bsectionquiz\b/gi,'section quiz'],
    [/\bskillsand\b/gi,'skills and'],
    [/\bStudythis\b/gi,'Study this'],
    [/\bSWDDebug\b/g,'SWD Debug'],
    [/\bchoosetest\b/gi,'choose test'],
    [/\btestpoints\b/gi,'test points'],
    [/\bUselearn\b/gi,'Use learn'],
    [/\bactualmeasurements\b/gi,'actual measurements'],
    [/\beverymiss\b/gi,'every miss'],
    [/\btargetedHardware\b/g,'targeted Hardware'],
    [/\bstories;readiness\b/gi,'stories; readiness'],
    [/\b5-mintechnical\b/gi,'5-min technical'],
    [/\b12\.3reinforcement\b/g,'12.3 reinforcement'],
    [/\b13\.12reinforcement\b/g,'13.12 reinforcement'],
    [/\b8\.12reinforcement\b/g,'8.12 reinforcement'],
    [/\b10min\b/gi,'10 min'],
    [/\bProject1Design\b/g,'Project 1 Design'],
    [/\b5Vrail\b/g,'5 V rail'],
    [/\bismeasured\b/gi,'is measured']
  ];
  function cleanEditorialText(value) {
    if (value == null) return value;
    const held = [];
    let text = String(value).replace(/https?:\/\/[^\s<]+/g, match => `\uE000${held.push(match)-1}\uE001`);
    const productTerms = ['pySerial','YouTube','GitHub','CubeIDE','CubeMX','CubeHAL','FreeRTOS','SparkFun','LTspice'];
    productTerms.forEach(term => {text=text.replace(new RegExp(`\\b${term}\\b`,'g'), match => `\uE002${held.push(match)-1}\uE003`)});
    editorialFixes.forEach(([pattern,replacement]) => {text=text.replace(pattern,replacement)});
    text=text
      .replace(/:(?=\uE000)/g,': ')
      .replace(/([,;:!?+])(?=[A-Za-z])/g,'$1 ')
      .replace(/;(?=\d)/g,'; ')
      .replace(/\.(?=[A-Z][a-z])/g,'. ')
      .replace(/—(?=[A-Za-z])/g,'— ')
      .replace(/([a-z])([A-Z])/g,'$1 $2')
      .replace(/[ \t]{2,}/g,' ')
      .replace(/ *\n */g,'\n');
    text=text.replace(/[\uE000\uE002](\d+)[\uE001\uE003]/g,(_,i)=>held[Number(i)]||'');
    return text.trim();
  }
  (window.ALFRED_EVENTS || []).forEach(event => {
    ['summary','description','today','focus'].forEach(field => {if(event[field]!=null)event[field]=cleanEditorialText(event[field])});
    if(Array.isArray(event.outcomes))event.outcomes=event.outcomes.map(cleanEditorialText);
  });
  (window.ALFRED_WEEKS || []).forEach(week => {
    ['topic','summary','focus'].forEach(field => {if(week[field]!=null)week[field]=cleanEditorialText(week[field])});
    if(Array.isArray(week.outcomes))week.outcomes=week.outcomes.map(cleanEditorialText);
  });
  function normalizeEvent(value) {
    const v = {...(value || {})};
    const flagged = Object.entries(v.review || {}).filter(([, flag]) => flag).map(([i]) => Number(i));
    if (v.status === 'review' || flagged.length) {
      if (!v.studyReview) v.studyReview = {due:'1970-01-01T00:00:00.000Z',interval:0,lastRating:'red',source:'legacy-review',outcomeIndices:flagged};
      else if (flagged.length) v.studyReview = {...v.studyReview,outcomeIndices:[...new Set([...(v.studyReview.outcomeIndices || []),...flagged])]};
    }
    if (v.status === 'review') v.status = 'in-progress';
    if(v.status&&!['not-started','in-progress','complete'].includes(v.status))v.status='not-started';
    delete v.review;
    return v;
  }
  function currentWeek(events=window.ALFRED_EVENTS||[],when=new Date(),weeks=window.ALFRED_WEEKS||[]){
    const day=new Date(when);day.setHours(0,0,0,0);
    const starts=weeks.filter(w=>w.week&&w.start).sort((a,b)=>a.week-b.week);
    if(starts.length){let n=Number(starts[0].week)||1;starts.forEach(w=>{if(new Date(w.start+'T00:00:00')<=day)n=Math.max(n,Number(w.week)||1)});return n;}
    let n=1;events.filter(e=>e.week&&e.type!=='Equipment').forEach(e=>{const t=new Date(e.start);t.setHours(0,0,0,0);if(t<=day)n=Math.max(n,Number(e.week)||1)});return n;
  }
  function migrate(p, legacyStudy = {}) {
    p.events = p.events || {}; p.recordTimes = p.recordTimes || {};
    Object.entries(p.events).forEach(([id,v]) => {p.events[id] = normalizeEvent(v);});
    Object.entries(legacyStudy.reviews || {}).forEach(([id,review]) => {
      if (p.events[id]?.studyReview) return;
      p.events[id] = {...(p.events[id] || {}),studyReview:review,studyConfidence:legacyStudy.sessionConfidence?.[id] || review.lastRating};
      p.recordTimes['event:'+id] = Math.max(Number(p.recordTimes['event:'+id] || 0),Date.parse(review.updatedAt || '') || Date.now());
    });
    return p;
  }
  window.AlfredState = {normalizeEvent,migrate,currentWeek,cleanEditorialText};
  try {
    const raw = localStorage.getItem(key) || localStorage.getItem('alfred-u-progress-v1');
    const legacyStudy = JSON.parse(localStorage.getItem('alfred-u-study-v13') || '{}');
    if (raw || Object.keys(legacyStudy.reviews || {}).length) {
      const next = JSON.stringify(migrate(JSON.parse(raw || '{}'),legacyStudy));
      if (next !== localStorage.getItem(key)) localStorage.setItem(key,next);
    }
  } catch (error) { console.warn('Alfred compatibility migration could not run.',error); }
})();
