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



/* v16.3.91: Week 4 controlled delta. Appended to the existing v15.1 state helper
   without altering the pre-existing bytes above this marker. */
(()=>{
  'use strict';
  if(window.__ALFRED_WEEK4_16391__) return;
  const D={"revision":"2026-10-07-v16.3.91-week4-controlled-redesign","cetaObjectives":["Read and calculate amplitude, peak, peak-to-peak, period, frequency, duty cycle, and sine-wave RMS at the assigned foundation depth.","Explain why capacitor voltage and inductor current cannot change instantaneously in the ideal first-order model.","Predict RC and RL step response using the time constant and the 63.2% / 36.8% landmarks.","Recognize first-order low-pass and high-pass behavior from topology and time-domain evidence without moving into Week 6 impedance/resonance mathematics.","Connect every calculation to a waveform or measurement you could verify with the Week 3 oscilloscope workflow."],"careerObjectives":["Capture and document waveform evidence with a prediction, reference, setup, manual measurement and conclusion.","Measure an RC time constant from the 63.2% point and compare predicted versus measured timing.","Use low-pass/high-pass time-domain behavior to distinguish expected filtering from a component or setup fault.","Produce a reproducible Week 4 artifact containing calculations, scope/simulator captures, test conditions and fault-isolation reasoning."],"cetaPages":[{"sectionId":"w04-waveform-language","title":"Read waveform amplitude and timing before trusting automatic measurements","buildOn":"Week 3 taught how to obtain a stable trace. Now the trace becomes quantitative evidence.","text":"Start with the axes. Vertical divisions represent voltage after the probe factor is accounted for; horizontal divisions represent time. One complete repeating pattern is a cycle. If one cycle spans 4 divisions at 0.5 ms/div, T = 2.0 ms and f = 1/T = 500 Hz. For a centered sine wave that reaches +4 V and -4 V, Vpk = 4 V, Vpp = 8 V, and Vrms = 4/√2 ≈ 2.83 V. For a pulse, duty cycle = pulse width/period × 100%. Phase is introduced only as relative timing between periodic signals; detailed phase/frequency-domain calculation waits for Week 6. Always calculate at least one quantity manually before accepting an oscilloscope automatic readout.","remember":"Amplitude answers “how much”; period/frequency answer “how fast”; duty cycle answers “how long in one state.”","figure":{"type":"gallery","number":"Week 4 source-authentic waveform","title":"Real oscilloscope waveforms are voltage-versus-time evidence","items":[{"src":"https://commons.wikimedia.org/wiki/Special:Redirect/file/Oscilloscope%20sine%20square.jpg","label":"Measured waveforms on an oscilloscope","alt":"Real oscilloscope display showing periodic waveforms.","credit":"Xato / Wikimedia Commons","sourceUrl":"https://commons.wikimedia.org/wiki/File:Oscilloscope%20sine%20square.jpg","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"},{"src":"https://commons.wikimedia.org/wiki/Special:Redirect/file/Digital%20oscilloscope.jpg","label":"Digital oscilloscope waveform display","alt":"Real digital oscilloscope displaying a measured waveform.","credit":"premek.v / Wikimedia Commons","sourceUrl":"https://commons.wikimedia.org/wiki/File:Digital%20oscilloscope.jpg","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}],"caption":"Identify the reference, count divisions, apply scale factors, calculate period/frequency, then compare with automatic measurements.","source":"Source-authentic public-domain/Creative Commons visual; interpretation cross-checked against linked technical material.","sourceUrl":"https://commons.wikimedia.org/wiki/File:Oscilloscope%20sine%20square.jpg","secondaryUrl":"https://www.tek.com/en/documents/primer/setting-and-using-oscilloscope","tertiaryUrl":"","provenance":"source"}},{"sectionId":"w04-capacitor-voltage-storage","title":"Capacitor voltage is a stored-state variable","buildOn":"Waveform language lets you describe a voltage changing over time. Now explain why a capacitor creates that shape.","text":"A capacitor stores energy in an electric field. In the ideal model, capacitor voltage cannot change discontinuously because changing voltage requires charge to move. When a source is applied through resistance, an initially discharged capacitor begins at 0 V and rises toward the source while current starts high and then decays. During discharge, capacitor voltage falls toward the new final value. The resistor controls how quickly charge can move, which is why resistance and capacitance together set response time. Treat polarized-capacitor orientation and voltage rating as real physical constraints even when the mathematics is simple.","remember":"The capacitor opposes sudden voltage change because changing its stored charge takes current over time.","figure":{"type":"table","number":"Source-grounded technical model","title":"Capacitor time-domain mental model","columns":["Moment","Capacitor voltage","Circuit meaning"],"rows":[["Just after a step","Cannot instantly jump to the final value","Largest difference remains, so charging current is greatest"],["During the transition","Moves toward the final value","Stored electric-field energy is changing"],["Long after the step","Near the final DC value","Charging current has decayed toward zero"]],"source":"All About Circuits — Electric Fields and Capacitance","sourceUrl":"https://www.allaboutcircuits.com/textbook/direct-current/chpt-13/electric-fields-capacitance/","caption":"Time-domain foundation only; detailed construction families and frequency-dependent analysis remain in their later teaching homes.","provenance":"source-grounded"}},{"sectionId":"w04-inductor-current-storage","title":"Inductor current is a stored-state variable","buildOn":"Capacitor voltage demonstrated one kind of energy-storage inertia. An inductor is the complementary current-domain case.","text":"Current through a conductor creates a magnetic field; a coil concentrates that field. An inductor stores energy in the magnetic field, and its current cannot change discontinuously in the ideal model. When a circuit tries to change current, the changing field produces an induced voltage that opposes the change. When energized through resistance, current rises toward its final value instead of jumping there instantly. When the path is opened, the collapsing field can generate a large voltage in an attempt to keep current flowing. Week 4 stays with this time response; Week 6 owns the deeper frequency-domain relationships.","remember":"Capacitor: voltage resists sudden change. Inductor: current resists sudden change.","figure":{"type":"gallery","number":"Week 4 source-authentic inductor model","title":"Current creates stored magnetic-field energy","items":[{"src":"https://commons.wikimedia.org/wiki/Special:Redirect/file/Basic%20Inductor%20with%20B-field.svg","label":"Inductor and magnetic field","alt":"Public-domain diagram showing current through a coil and its magnetic field.","credit":"Inductiveload / Wikimedia Commons","sourceUrl":"https://commons.wikimedia.org/wiki/File:Basic%20Inductor%20with%20B-field.svg","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}],"caption":"Follow current through the coil and the magnetic field it creates. The stored field explains why current change produces induced voltage.","source":"Source-authentic public-domain/Creative Commons visual; interpretation cross-checked against linked technical material.","sourceUrl":"https://commons.wikimedia.org/wiki/File:Basic%20Inductor%20with%20B-field.svg","secondaryUrl":"https://www.allaboutcircuits.com/textbook/direct-current/chpt-15/magnetic-fields-and-inductance/","tertiaryUrl":"","provenance":"source"}},{"sectionId":"w04-first-order-time-response","title":"Use τ to predict RC/RL transients and preview first-order filters","buildOn":"The component pages explained what cannot change instantly. The time constant tells you how quickly the change occurs.","text":"For RC, τ = RC. For RL, τ = L/R. After one time constant, a rising first-order response has completed about 63.2% of the total move toward its final value; a falling response has about 36.8% of the original difference remaining. After about five time constants, the response is close enough to settled for most technician work. Example: R = 10 kΩ and C = 10 µF gives τ = 0.10 s. A 0→5 V step therefore reaches about 3.16 V at 0.10 s. For L = 100 mH and R = 100 Ω, τ = 1 ms. Repeating the step as a square wave reveals whether the circuit has enough time to settle. That same time behavior previews why a simple RC topology can smooth rapid changes or emphasize transitions; Week 6 later supplies deeper filter mathematics.","remember":"Predict τ first, predict waveform shape second, then measure.","figure":{"type":"gallery","number":"Week 4 source-authentic first-order filter topology","title":"A real RC topology turns time response into selective waveform behavior","items":[{"src":"https://commons.wikimedia.org/wiki/Special:Redirect/file/RC%20lowpass%20filter.svg","label":"First-order RC low-pass filter","alt":"CC0 schematic of a first-order RC low-pass filter.","credit":"Wikimedia Commons contributor / Wikimedia Commons","sourceUrl":"https://commons.wikimedia.org/wiki/File:RC%20lowpass%20filter.svg","license":"CC0 1.0 Universal","licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/"},{"src":"https://commons.wikimedia.org/wiki/Special:Redirect/file/RC%20High-pass%20filter.svg","label":"First-order RC high-pass filter","alt":"Schematic, response and waveform context for a first-order RC high-pass filter.","credit":"Peo / Wikimedia Commons","sourceUrl":"https://commons.wikimedia.org/wiki/File:RC%20High-pass%20filter.svg","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"}],"caption":"Identify input, output and which component the output is taken across. Predict from charging/discharging before deeper Week 6 analysis.","source":"Source-authentic public-domain/Creative Commons visual; interpretation cross-checked against linked technical material.","sourceUrl":"https://commons.wikimedia.org/wiki/File:RC%20lowpass%20filter.svg","secondaryUrl":"https://www.allaboutcircuits.com/textbook/direct-current/chpt-16/voltage-current-calculations/","tertiaryUrl":"https://www.allaboutcircuits.com/textbook/alternating-current/chpt-8/low-pass-filters/","provenance":"source"}}],"careerPages":[{"sectionId":"career-w04-waveform-evidence","title":"Turn a stable trace into a reproducible waveform record","buildOn":"Week 3 established safe setup, triggering and measurement validity; CETa Week 4 supplies waveform quantities.","text":"A technician record must let another person reproduce what you saw. Before connecting the probe, write the node/test point, reference, operating condition and expected waveform. Configure probe factor, coupling, volts/div, time/div and trigger so the waveform is readable. Measure at least one amplitude and timing quantity manually from divisions, then compare with automatic measurements. Record both the setup and result. If automatic and manual values disagree materially, investigate setup, trigger, noise or waveform shape before treating either number as fact.","remember":"Prediction + setup + raw trace + manual check + conclusion.","occupationalTask":"Characterize a periodic low-voltage waveform and create a reproducible oscilloscope record.","careerDemo":{"scenario":"A 3.3 V test point is expected to show a 1 kHz periodic waveform.","steps":["Write expected amplitude/frequency and reference.","Configure probe/channel/timebase/trigger.","Capture a stable trace.","Measure Vpp and period manually.","Compare with automatic values and record the result."],"decision":"Accept the waveform only when setup and measurements support expected behavior."},"careerPractice":{"prompt":"Create one waveform record another technician could reproduce.","required":["test point/reference","operating condition","probe/channel settings","manual amplitude/timing calculation","raw capture","conclusion"],"physical":"Simulation can prove interpretation; physical proficiency requires real probe/reference handling."},"physicalBoundary":"Do not infer safe physical probe placement from a simulator. Stay within the course low-voltage bench boundary.","evidenceSpec":"Annotated waveform capture + setup table + manual calculation + expected-versus-actual conclusion.","occupationalBenchmarkIds":["onetTech","blsTech"],"trackHandoff":{"fromCeta":["2.12.1","2.12.2"],"toCareer":["C3.3","C3.4","C3.6"],"rule":"CETa names/calculates waveform quantities; Career preserves them as reproducible technician evidence."},"careerSourceVisual":{"type":"gallery","number":"Career source-authentic waveform evidence","title":"The screenshot is not enough without setup and reference context","items":[{"src":"https://commons.wikimedia.org/wiki/Special:Redirect/file/Digital%20oscilloscope.jpg","label":"Digital oscilloscope waveform display","alt":"Real digital oscilloscope displaying a measured waveform.","credit":"premek.v / Wikimedia Commons","sourceUrl":"https://commons.wikimedia.org/wiki/File:Digital%20oscilloscope.jpg","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"},{"src":"https://commons.wikimedia.org/wiki/Special:Redirect/file/Oscilloscope%20sine%20square.jpg","label":"Measured waveforms on an oscilloscope","alt":"Real oscilloscope display showing periodic waveforms.","credit":"Xato / Wikimedia Commons","sourceUrl":"https://commons.wikimedia.org/wiki/File:Oscilloscope%20sine%20square.jpg","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}],"caption":"Use a real oscilloscope display to practice reading the evidence another technician would need to reproduce.","source":"Source-authentic public-domain/Creative Commons visual; interpretation cross-checked against linked technical material.","sourceUrl":"https://commons.wikimedia.org/wiki/File:Digital%20oscilloscope.jpg","secondaryUrl":"https://www.tek.com/en/blog/basic-time-and-amplitude-measurements-tbs2000-oscilloscope-part-3-3-xyzs-series","tertiaryUrl":"","provenance":"source"}},{"sectionId":"career-w04-transient-evidence","title":"Measure τ from a step response instead of guessing from the curve","buildOn":"CETa predicts the RC/RL response; this page turns the prediction into a measurable criterion.","text":"For an RC step test, calculate τ before measuring and calculate the expected 63.2% voltage from known initial and final values. Capture input and capacitor output using the same time reference. Trigger on the input transition, then use cursors or the horizontal scale to find when output first reaches the calculated 63.2% point. Compare measured τ with predicted RC and record component tolerances and obvious measurement-system effects. If the difference is large, do not immediately declare the capacitor bad: verify actual resistor/capacitor values, output/test-point choice, probe factor, source resistance and loading assumptions.","remember":"The curve becomes evidence when you test a predicted landmark.","occupationalTask":"Verify a first-order time constant from an oscilloscope/simulator capture and explain discrepancies.","careerDemo":{"scenario":"R = 1.0 kΩ and C = 0.10 µF on a 0→5 V step.","steps":["Predict τ = 100 µs.","Calculate 63.2% of the 5 V move = 3.16 V.","Trigger on the input edge.","Measure time from the edge to Vout = 3.16 V.","Compare with 100 µs and investigate mismatch."],"decision":"A defensible result compares a measured landmark to the predicted model under known test conditions."},"careerPractice":{"prompt":"Measure one charging and one discharging transient and preserve predicted and measured τ.","required":["calculated τ","63.2/36.8 target","input reference","two captures","measured τ","difference explanation"],"physical":"Falstad/LTspice can satisfy the academic evidence path; real-scope evidence is required only when physical proficiency is claimed."},"physicalBoundary":"Use only approved low-voltage RC/RL setups. Stored energy and inductive kick can create hazards outside the course boundary.","evidenceSpec":"Calculation sheet + input/output capture + cursor/scale timing + predicted-versus-measured table.","occupationalBenchmarkIds":["onetTech","blsTech"],"trackHandoff":{"fromCeta":["9.1"],"toCareer":["C3.3","C3.4","C5.1"],"rule":"CETa predicts τ; Career verifies the predicted landmark with controlled evidence."},"careerSourceVisual":{"type":"gallery","number":"Career source-authentic first-order topology","title":"Measure the response at the intended output node","items":[{"src":"https://commons.wikimedia.org/wiki/Special:Redirect/file/RC%20lowpass%20filter.svg","label":"First-order RC low-pass filter","alt":"CC0 schematic of a first-order RC low-pass filter.","credit":"Wikimedia Commons contributor / Wikimedia Commons","sourceUrl":"https://commons.wikimedia.org/wiki/File:RC%20lowpass%20filter.svg","license":"CC0 1.0 Universal","licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/"}],"caption":"The topology makes the test point explicit. Connect the predicted 63.2% time landmark to a measured response.","source":"Source-authentic public-domain/Creative Commons visual; interpretation cross-checked against linked technical material.","sourceUrl":"https://commons.wikimedia.org/wiki/File:RC%20lowpass%20filter.svg","secondaryUrl":"https://www.allaboutcircuits.com/textbook/direct-current/chpt-16/capacitor-transient-response/","tertiaryUrl":"","provenance":"source"}},{"sectionId":"career-w04-filter-evidence","title":"Use low-pass/high-pass behavior as a three-condition characterization test","buildOn":"Transient response showed what one step does. Repeated waveforms reveal whether the network follows, smooths or emphasizes change.","text":"For a first-order RC network, identify topology and output node before naming it. A low-pass output taken across the capacitor follows slow changes more completely and attenuates rapid changes. A high-pass output taken across the resistor emphasizes transitions and rejects steady or very slow content. Characterize the network at three deliberately separated input rates: slow relative to τ, around the transition region, and fast relative to τ. Keep input amplitude and reference constant. Record Vin and Vout waveforms and describe attenuation and shape rather than importing Week 6 complex analysis early.","remember":"Topology + output node first; three controlled input rates second; deeper frequency math comes later.","occupationalTask":"Characterize first-order RC low-pass/high-pass behavior using controlled input conditions.","careerDemo":{"scenario":"A 1 kΩ / 0.1 µF RC network is driven with the same-amplitude square wave at three rates.","steps":["Identify low-pass or high-pass output node.","Keep amplitude/offset constant.","Capture slow, transition-region and fast cases.","Compare Vin/Vout amplitude and shape.","State observed pass/attenuate behavior without overclaiming deeper analysis."],"decision":"Evidence should match the time-domain prediction created from τ and topology."},"careerPractice":{"prompt":"Build both low-pass and high-pass versions and create a three-condition comparison table.","required":["schematic/topology","constant input amplitude","three input rates","Vin/Vout captures","behavior summary"],"physical":"Simulation is academically valid; physical bench work adds probe/source-loading experience."},"physicalBoundary":"If using real hardware, verify generator output/load assumptions and scope reference before changing frequency.","evidenceSpec":"Two topology sketches + three-condition table + representative Vin/Vout captures + interpretation.","occupationalBenchmarkIds":["onetTech","blsTech"],"trackHandoff":{"fromCeta":["2.12.1"],"toCareer":["C3.3","C3.6","C5.1"],"rule":"CETa provides waveform/time-response language; Career performs controlled characterization."},"careerSourceVisual":{"type":"gallery","number":"Career source-authentic filter comparison","title":"Output node changes observed behavior","items":[{"src":"https://commons.wikimedia.org/wiki/Special:Redirect/file/RC%20lowpass%20filter.svg","label":"First-order RC low-pass filter","alt":"CC0 schematic of a first-order RC low-pass filter.","credit":"Wikimedia Commons contributor / Wikimedia Commons","sourceUrl":"https://commons.wikimedia.org/wiki/File:RC%20lowpass%20filter.svg","license":"CC0 1.0 Universal","licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/"},{"src":"https://commons.wikimedia.org/wiki/Special:Redirect/file/RC%20High-pass%20filter.svg","label":"First-order RC high-pass filter","alt":"Schematic, response and waveform context for a first-order RC high-pass filter.","credit":"Peo / Wikimedia Commons","sourceUrl":"https://commons.wikimedia.org/wiki/File:RC%20High-pass%20filter.svg","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"}],"caption":"Compare RC low-pass and high-pass topologies. Keep detailed frequency-domain formulas for Week 6; here, use topology and measured waveform shape.","source":"Source-authentic public-domain/Creative Commons visual; interpretation cross-checked against linked technical material.","sourceUrl":"https://commons.wikimedia.org/wiki/File:RC%20lowpass%20filter.svg","secondaryUrl":"https://www.allaboutcircuits.com/textbook/alternating-current/chpt-8/low-pass-filters/","tertiaryUrl":"","provenance":"source"}},{"sectionId":"career-w04-fault-isolation","title":"Separate a component fault from a measurement/setup fault","buildOn":"The first three pages establish expected waveform, τ and filter behavior. Use those expectations to choose a discriminating next test.","text":"When measured response is wrong, preserve the symptom before changing parts. First verify Vin and the measurement chain so a generator, probe, reference or scale error is not mistaken for a DUT fault. Then compare actual R and C values with intended values and inspect topology/output node. An open capacitor, shorted capacitor, wrong resistor, wrong output node or unexpected source/load resistance produces different evidence. Choose the next measurement that separates at least two hypotheses, record what each possible result means, make only one controlled change, and repeat the original failing test. The repair is not complete until the original test passes and one nearby condition still behaves correctly.","remember":"Preserve → verify source/setup → compare expected/actual → discriminate → change one thing → retest.","occupationalTask":"Isolate a first-order RC response fault with the fewest useful measurements and preserve pre/post evidence.","careerDemo":{"scenario":"The supposed low-pass output looks almost identical to Vin at every tested rate.","steps":["Verify output node is actually across C.","Verify Vin at circuit input.","Measure/confirm R and C identities/values with power removed as appropriate.","Check for an open/short or wiring bypass.","Repeat the same three-condition test after one correction."],"decision":"The first bad boundary and discriminating measurement matter more than random part replacement."},"careerPractice":{"prompt":"Inject or simulate one wrong-value/open/short/setup fault and isolate it without random replacement.","required":["preserved symptom","two hypotheses","discriminating measurement","single controlled change","original-test retest","nearby regression check"],"physical":"Simulation may be used for the academic fault-injection path; physical fault work remains low-voltage and de-energized for resistance/continuity changes."},"physicalBoundary":"Never create a deliberate short on an energized physical circuit. Inject faults only by approved simulation or de-energized component/wiring changes.","evidenceSpec":"Before/after captures + hypothesis table + discriminating measurement + correction + verification result.","occupationalBenchmarkIds":["onetTech","blsTech"],"trackHandoff":{"fromCeta":["9.1"],"toCareer":["C5.1","C5.2","C5.3"],"rule":"CETa supplies the expected first-order model; Career uses model-versus-measurement differences to isolate faults."},"careerSourceVisual":{"type":"gallery","number":"Career source-authentic technician context","title":"Troubleshooting is evidence collection, not part swapping","items":[{"src":"https://commons.wikimedia.org/wiki/Special:Redirect/file/US%20Navy%20090227-N-9760Z-015%20Aviation%20Electronics%20Technician%203rd%20Class%20Ivan%20Indreland%20checks%20for%20continuity%20in%20a%20radar%20control%20panel.jpg","label":"Electronics technician collecting circuit evidence","alt":"U.S. Navy aviation electronics technician checking electronic hardware.","credit":"U.S. Navy photo by MC3 Eduardo Zaragoza / Wikimedia Commons","sourceUrl":"https://commons.wikimedia.org/wiki/File:US%20Navy%20090227-N-9760Z-015%20Aviation%20Electronics%20Technician%203rd%20Class%20Ivan%20Indreland%20checks%20for%20continuity%20in%20a%20radar%20control%20panel.jpg","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}],"caption":"The real technician context reinforces the workflow: expected behavior plus targeted measurements isolate the problem, then the original test verifies the correction.","source":"Source-authentic public-domain/Creative Commons visual; interpretation cross-checked against linked technical material.","sourceUrl":"https://commons.wikimedia.org/wiki/File:US%20Navy%20090227-N-9760Z-015%20Aviation%20Electronics%20Technician%203rd%20Class%20Ivan%20Indreland%20checks%20for%20continuity%20in%20a%20radar%20control%20panel.jpg","secondaryUrl":"https://www.allaboutcircuits.com/video-lectures/troubleshooting-strategies/","tertiaryUrl":"","provenance":"source"}}],"sources":{"w4AacSineVideo":{"title":"Characteristics of Sinusoidal Signals","org":"All About Circuits","kind":"Instructional video tutorial","url":"https://www.allaboutcircuits.com/video-tutorials/characteristics-of-sinusoidal-signals/"},"w4AacWaveformReading":{"title":"AC Waveforms","org":"All About Circuits","kind":"Open electronics textbook chapter","url":"https://www.allaboutcircuits.com/textbook/alternating-current/chpt-1/ac-waveforms/"},"w4AacCapVideo":{"title":"Capacitors (Part 1)","org":"All About Circuits / North Seattle Community College","kind":"Instructional video lecture","url":"https://www.allaboutcircuits.com/video-lectures/capacitors-part-1/"},"w4AacCapReading":{"title":"Electric Fields and Capacitance","org":"All About Circuits","kind":"Open electronics textbook chapter","url":"https://www.allaboutcircuits.com/textbook/direct-current/chpt-13/electric-fields-capacitance/"},"w4AacIndVideo":{"title":"Inductors (Part 1)","org":"All About Circuits / North Seattle Community College","kind":"Instructional video lecture","url":"https://www.allaboutcircuits.com/video-lectures/inductors-part-1/"},"w4AacIndReading":{"title":"Magnetic Fields and Inductance","org":"All About Circuits","kind":"Open electronics textbook chapter","url":"https://www.allaboutcircuits.com/textbook/direct-current/chpt-15/magnetic-fields-and-inductance/"},"w4AacRc1Video":{"title":"RC Time Constants (Part 1) — Pulse Circuit Response","org":"All About Circuits / North Seattle Community College","kind":"Instructional video lecture","url":"https://www.allaboutcircuits.com/video-lectures/rc-time-constants-pulse-circuit-response/"},"w4AacTauReading":{"title":"Voltage and Current Calculations — RC and L/R Time Constants","org":"All About Circuits","kind":"Open electronics textbook chapter","url":"https://www.allaboutcircuits.com/textbook/direct-current/chpt-16/voltage-current-calculations/"},"w4TekCursorVideo":{"title":"2 Series MSO — Cursors and Measurements","org":"Tektronix","kind":"Manufacturer oscilloscope how-to video","url":"https://www.tek.com/en/video/how-to/2-series-mso---cursors-and-measurements"},"w4TekMeasureReading":{"title":"Basic Time and Amplitude Measurements with a TBS2000 Oscilloscope","org":"Tektronix","kind":"Manufacturer measurement article","url":"https://www.tek.com/en/blog/basic-time-and-amplitude-measurements-tbs2000-oscilloscope-part-3-3-xyzs-series"},"w4AacRc2Video":{"title":"RC Time Constants (Part 2) — Circuit Waveforms","org":"All About Circuits / North Seattle Community College","kind":"Instructional video lecture","url":"https://www.allaboutcircuits.com/video-lectures/rc-time-constants-part-2-circuit-waveforms/"},"w4AacTransientReading":{"title":"Capacitor Transient Response","org":"All About Circuits","kind":"Open electronics textbook chapter","url":"https://www.allaboutcircuits.com/textbook/direct-current/chpt-16/capacitor-transient-response/"},"w4AacRcRlVideo":{"title":"RC and RL Circuits","org":"All About Circuits / North Seattle Community College","kind":"Instructional video lecture · bounded time-domain/filter preview","url":"https://www.allaboutcircuits.com/video-lectures/rc-and-rl-circuits/"},"w4AacLowpassReading":{"title":"Low-pass Filters","org":"All About Circuits","kind":"Open electronics textbook chapter · first-order RC portions only","url":"https://www.allaboutcircuits.com/textbook/alternating-current/chpt-8/low-pass-filters/"},"w4AacTroubleVideo":{"title":"Troubleshooting Strategies","org":"All About Circuits / North Seattle Community College","kind":"Technician troubleshooting video lecture","url":"https://www.allaboutcircuits.com/video-lectures/troubleshooting-strategies/"},"w4AacTroubleReading":{"title":"Electrical Transients","org":"All About Circuits","kind":"Open electronics textbook chapter","url":"https://www.allaboutcircuits.com/textbook/direct-current/chpt-16/electrical-transients/"}},"placements":[["w4AacSineVideo",0,"w04-waveform-language","video","Calculate amplitude and timing from one example without automatic measurements."],["w4AacWaveformReading",0,"w04-waveform-language","literature","Write period-frequency and peak/Vpp/RMS relationships in your own words."],["w4AacCapVideo",0,"w04-capacitor-voltage-storage","video","Explain why ideal capacitor voltage cannot jump instantly."],["w4AacCapReading",0,"w04-capacitor-voltage-storage","literature","Trace how charge/current changes stored electric-field energy during charge and discharge."],["w4AacIndVideo",0,"w04-inductor-current-storage","video","Explain why ideal inductor current cannot jump instantly and what changing current induces."],["w4AacIndReading",0,"w04-inductor-current-storage","literature","Connect current-created magnetic field to stored energy and induced voltage."],["w4AacRc1Video",0,"w04-first-order-time-response","video","Calculate τ for one RC and one RL example and identify the 1τ landmark."],["w4AacTauReading",0,"w04-first-order-time-response","literature","Use τ=RC and τ=L/R to predict the 63.2/36.8 landmark before measuring."],["w4TekCursorVideo",1,"career-w04-waveform-evidence","video","Create a reproducible cursor/manual waveform measurement record."],["w4TekMeasureReading",1,"career-w04-waveform-evidence","literature","List setup context another technician needs to reproduce the measurement."],["w4AacRc2Video",1,"career-w04-transient-evidence","video","Measure the predicted time landmark on a captured RC waveform."],["w4AacTransientReading",1,"career-w04-transient-evidence","literature","Explain initial/final conditions and one likely cause of measured-versus-predicted mismatch."],["w4AacRcRlVideo",1,"career-w04-filter-evidence","video","Use only the time-domain/filter applications portion and defer deeper AC analysis to Week 6."],["w4AacLowpassReading",1,"career-w04-filter-evidence","literature","Identify topology/output node and predict slow-versus-fast behavior."],["w4AacTroubleVideo",1,"career-w04-fault-isolation","video","Write two hypotheses and one discriminating measurement for a wrong RC waveform."],["w4AacTroubleReading",1,"career-w04-fault-isolation","literature","Use initial/final transient behavior to explain why a response can be wrong before replacing a component."]],"questions":[["CQ1215","CETa",["CETA:2.12.1"],"A centered sine wave measures 10 V peak-to-peak. What is its peak voltage?",["5 V","10 V","14.14 V","20 V"],0,"For a centered sine wave, Vpp = 2Vpk, so Vpk = 5 V.","Calculation","w04-waveform-language","Read waveform amplitude and timing before trusting automatic measurements"],["CQ1216","CETa",["CETA:2.12.1"],"One cycle spans 4 divisions at 0.5 ms/div. What are period and frequency?",["2 ms and 500 Hz","0.5 ms and 2 kHz","4 ms and 250 Hz","2 s and 0.5 Hz"],0,"T = 4 × 0.5 ms = 2 ms; f = 1/0.002 s = 500 Hz.","Calculation","w04-waveform-language","Read waveform amplitude and timing before trusting automatic measurements"],["CQ1217","CETa",["CETA:9.1"],"Which statement best describes an ideal capacitor immediately after a requested sudden voltage change?",["Its voltage cannot jump instantly; current flows while stored charge changes","Its voltage jumps instantly with zero current","Its current can never change","It permanently becomes a short circuit"],0,"Ideal capacitor voltage is continuous because changing stored charge requires current over time.","Understanding","w04-capacitor-voltage-storage","Capacitor voltage is a stored-state variable"],["CQ1218","CETa",["CETA:9.1"],"Which statement best describes an ideal inductor during a sudden circuit change?",["Its current cannot jump instantly, and changing current creates an opposing induced voltage","Its current instantly becomes any requested value with no voltage","Its voltage can never change","It stores energy only as heat"],0,"An inductor stores magnetic-field energy; ideal current is continuous and changing current induces an opposing voltage.","Understanding","w04-inductor-current-storage","Inductor current is a stored-state variable"],["CQ1219","CETa",["CETA:9.1"],"R = 10 kΩ and C = 10 µF. What is the RC time constant?",["0.10 s","1.0 s","0.001 s","100 s"],0,"τ = RC = 10,000 × 10×10⁻⁶ = 0.10 s.","Calculation","w04-first-order-time-response","Use τ to predict RC/RL transients and preview first-order filters"],["CQ1220","CETa",["CETA:9.1"],"A 0→5 V first-order RC charging response is observed at exactly one time constant. Approximately what capacitor voltage is expected?",["3.16 V","1.84 V","5.00 V","2.50 V"],0,"After one time constant a rising first-order response has completed about 63.2% of the move: 0.632×5 V ≈ 3.16 V.","Application","w04-first-order-time-response","Use τ to predict RC/RL transients and preview first-order filters"],["CQ1221","Career",["CAREER:C3.3","CAREER:C3.6"],"Which record is strongest evidence for a 1 kHz waveform measurement?",["Test point/reference, operating condition, probe/channel/timebase/trigger settings, raw trace, manual period check, and conclusion","A screenshot with no setup information","Only the oscilloscope automatic frequency number","A note saying waveform looks good"],0,"A technician record must preserve enough setup and raw evidence to reproduce and check the conclusion.","Application","career-w04-waveform-evidence","Turn a stable trace into a reproducible waveform record"],["CQ1222","Career",["CAREER:C3.3","CAREER:C5.1"],"For a predicted RC τ of 100 µs on a 0→5 V step, what measurement best verifies the model?",["Measure time from the input edge to Vout ≈ 3.16 V","Measure only the final 5 V level","Increase frequency until the trace disappears","Replace the capacitor before measuring"],0,"The 63.2% landmark gives a direct time-domain measurement of the predicted time constant.","Application","career-w04-transient-evidence","Measure τ from a step response instead of guessing from the curve"],["CQ1223","Career",["CAREER:C5.1"],"An RC time constant measures 18% slower than predicted. What is the best next step?",["Verify actual R/C values, source/load assumptions, output node and probe setup before declaring a failed component","Declare the capacitor failed immediately","Raise supply voltage until timing matches","Ignore the input waveform"],0,"A mismatch is evidence of a different effective circuit or setup, not proof of one failed part.","Troubleshooting","career-w04-transient-evidence","Measure τ from a step response instead of guessing from the curve"],["CQ1224","Career",["CAREER:C3.6","CAREER:C5.1"],"Which Week 4 test best characterizes a first-order RC filter without pulling Week 6 analysis forward?",["Keep input amplitude constant and compare Vin/Vout at slow, transition-region, and fast rates relative to τ","Calculate full complex impedance and resonance Q","Measure only one arbitrary frequency","Change amplitude and frequency together"],0,"Three controlled input-rate conditions show time-domain/filter behavior while keeping variables interpretable.","Application","career-w04-filter-evidence","Use low-pass/high-pass behavior as a three-condition characterization test"],["CQ1225","Career",["CAREER:C5.1","CAREER:C5.2"],"A supposed low-pass output looks identical to Vin at every tested rate. What should be verified first?",["The output node, Vin stimulus, measurement setup, and actual R/C topology/values","Replace every component","Assume the oscilloscope is correct and the design is impossible","Move directly to resonance calculations"],0,"Verify source/setup/topology before making a component verdict; the symptom could be a wrong test point or bypassed network.","Troubleshooting","career-w04-fault-isolation","Separate a component fault from a measurement/setup fault"],["CQ1226","Career",["CAREER:C5.2","CAREER:C5.3"],"After correcting one identified RC wiring fault, what proves the repair?",["Repeat the original failing test and one nearby regression condition, then preserve the passing evidence","The circuit powers on","The changed part is new","The waveform looks different once"],0,"Verification repeats the original acceptance condition and checks nearby behavior after the controlled change.","Troubleshooting","career-w04-fault-isolation","Separate a component fault from a measurement/setup fault"]]};
  const REV=D.revision;
  const C=window.ALFRED_CURRICULUM;
  const A=window.ALFRED_ASSESSMENT;
  const AC=window.ALFRED_ACADEMIC;
  const SG=window.ALFRED_CETA_STUDY_GUIDE;
  const add=(arr,v)=>{arr=Array.isArray(arr)?arr:[];return arr.includes(v)?arr:[...arr,v];};

  if(C?.modules?.length){
    const W=C.modules.find(m=>Number(m.week)===4);
    if(W?.lessons?.length){
      const ceta=W.lessons.find(l=>l.track==='CETa')||W.lessons[0];
      const career=W.lessons.find(l=>l.track==='Career')||W.lessons[1];

      if(ceta){
        ceta.title='Waveform language and energy-storage behavior';
        ceta.objectives=[...D.cetaObjectives];
        ceta.integrated=ceta.integrated||{};
        Object.assign(ceta.integrated,{
          version:'16.3.91',
          prereq:'Use Week 3 oscilloscope language, safe probing, volts/div, time/div and triggering. Week 4 teaches the new waveform, energy-storage and first-order timing ideas from zero.',
          purpose:'Build a time-domain mental model of AC waveforms, capacitors, inductors, and first-order response before Week 6 adds deeper frequency-domain analysis.',
          connection:'Career immediately turns the same predictions into oscilloscope evidence, filter observations, and fault-isolation decisions.',
          teaching:D.cetaPages,
          workedExamples:[
            {problem:'A sine wave is 8 Vpp at 500 Hz. Find Vpk, Vrms and period.',steps:['Vpk = Vpp/2 = 4 V.','Vrms = Vpk/√2 ≈ 2.83 V for a sine wave.','T = 1/f = 1/500 = 2 ms.'],answer:'4 Vpk, 2.83 Vrms, 2 ms period.',meaning:'Those numbers should agree with scale and timing visible on the scope.'},
            {problem:'R = 10 kΩ and C = 10 µF on a 0→5 V step. Predict the 1τ point.',steps:['τ = RC = 10,000 × 10×10⁻⁶ = 0.10 s.','At 1τ, a rising response has completed about 63.2% of the move.','0.632 × 5 V = 3.16 V.'],answer:'At about 0.10 s, Vc should be about 3.16 V.',meaning:'The 63.2% crossing gives a measurable time-domain check of the RC model.'},
            {problem:'L = 100 mH and R = 100 Ω. Predict the RL time constant.',steps:['Convert 100 mH to 0.100 H.','τ = L/R = 0.100/100.'],answer:'τ = 0.001 s = 1 ms.',meaning:'Current needs several milliseconds to settle after a step.'}
          ],
          guidedPractice:[
            'A waveform spans 5 horizontal divisions at 200 µs/div. Calculate period and frequency.',
            'A centered sine wave measures 6 Vpp. Calculate Vpk and sine-wave Vrms.',
            'For R = 4.7 kΩ and C = 22 µF, calculate τ and the expected 1τ voltage for a 0→3.3 V step.',
            'Explain why ideal capacitor voltage cannot jump instantly and why ideal inductor current cannot jump instantly.',
            'Given low-pass and high-pass RC schematics, identify the output node and predict which one smooths a rapid square-wave edge.'
          ],
          independentScenario:'A 0→5 V square wave drives an RC network. Predict τ, sketch capacitor-voltage response for a period much longer than 5τ and again for a period shorter than 2τ, then state what oscilloscope measurements would confirm the prediction.',
          teachBack:'Without notes, explain the chain: waveform measurement → capacitor/inductor stored state → time constant → predicted transient → measured evidence.',
          semanticTasks:[
            {taskId:'SEM-W04-CETA-WAVE-16391',title:'Waveform arithmetic from a real trace',track:'CETa',codes:['2.12.1','2.12.2','9.1'],teach:'Use the Week 4 waveform page.',prompt:'For a given scope trace, calculate Vpk/Vpp, period/frequency and duty cycle where applicable, and explain what each number describes.',required:['correct scale use','period-frequency reciprocal','peak versus peak-to-peak','sine RMS when requested','units'],reviewSectionIds:['w04-waveform-language'],reviewRouteVersion:'16.3.91'},
            {taskId:'SEM-W04-CETA-TRANSIENT-16391',title:'First-order transient prediction',track:'CETa',codes:['9.1'],teach:'Use Week 4 energy-storage and time-response pages.',prompt:'Predict one RC and one RL step response from initial condition through approximately 5τ and explain which state variable cannot jump instantly.',required:['RC τ','RL τ','63.2/36.8 landmark','capacitor-voltage rule','inductor-current rule'],reviewSectionIds:['w04-capacitor-voltage-storage','w04-inductor-current-storage','w04-first-order-time-response'],reviewRouteVersion:'16.3.91'}
          ]
        });
        ceta.sections=D.cetaPages.map(s=>({title:s.title,teach:s.text,remember:s.remember}));
      }

      if(career){
        career.title='Turn time-domain measurements into filter and fault evidence';
        career.objectives=[...D.careerObjectives];
        career.integrated=career.integrated||{};
        Object.assign(career.integrated,{
          version:'16.3.91',
          prereq:'Use Week 3 instrument validity/probing workflow plus the four Week 4 CETa pages. No deeper Week 6 analysis is assumed.',
          purpose:'Convert Week 4 first-order circuit theory into evidence a hardware/electronics technician could use during characterization and troubleshooting.',
          connection:'This evidence discipline feeds the Week 5 foundation gate and Week 6 characterization work.',
          teaching:D.careerPages,
          workedExamples:[
            {problem:'A 1 kΩ / 0.1 µF RC step response crosses 3.16 V at 118 µs instead of the predicted 100 µs.',steps:['Preserve capture and test conditions.','Verify the step really moves 0→5 V.','Check actual R/C tolerances/values and source resistance.','Verify probe factor/output node.','Retest before replacing parts.'],answer:'118 µs is evidence of a slower effective time constant, not proof by itself that the capacitor failed.',transfer:'Use measured-versus-predicted differences to choose the next test, not to jump to a component verdict.'}
          ],
          guidedPractice:[
            'Write a complete waveform-record header before taking a screenshot.',
            'Calculate the RC 63.2% target and mark it on a captured response.',
            'Create a slow / transition / fast comparison table for a low-pass RC network.',
            'Given one wrong waveform, write two competing hypotheses and one measurement that separates them.'
          ],
          independentScenario:'A first-order RC board should smooth a fast square wave but output is nearly unchanged. Create a technician plan that proves stimulus, verifies the measurement path, checks topology/component values, selects one discriminating test, and specifies evidence required after repair.',
          teachBack:'Explain to another technician how you would go from predicted τ to measured response, then from mismatch to a defensible fault-isolation decision.',
          semanticTasks:[
            {taskId:'SEM-W04-CAREER-EVIDENCE-16391',title:'Transient/filter technician evidence package',track:'Career',codes:['C3.3','C3.4','C3.6','C5.1','C5.2','C5.3'],teach:'Use all four Week 4 Career pages.',prompt:'Create a reproducible RC characterization and fault-isolation record from prediction through verification.',required:['setup/reference','predicted τ','measured 63.2% landmark','three-condition filter evidence','hypothesis/discriminating test','post-change retest'],reviewSectionIds:['career-w04-waveform-evidence','career-w04-transient-evidence','career-w04-filter-evidence','career-w04-fault-isolation'],reviewRouteVersion:'16.3.91'}
          ]
        });
        career.sections=D.careerPages.map(s=>({title:s.title,teach:s.text,remember:s.remember}));
      }

      W.title='AC Waveforms, Capacitors, Inductors & Time Response';
      W.week4Revision=REV;
      W.week4SequenceBoundary={
        current:'Waveform language, time-domain capacitor/inductor behavior, RC/RL time constants, first-order filter preview and technician evidence.',
        week6:'Deeper frequency-dependent opposition, combined opposition, phase calculation, resonance, Q and formal filter-response analysis.',
        week11:'Binary/hex, Boolean logic, gates/truth tables and digital-system fundamentals.'
      };
      W.standards=W.standards||{};
      W.standards.ceta=add(add(W.standards.ceta,'2.12.1'),'2.12.2');
      C.meta=C.meta||{};
      C.meta.week4InstructionalRevision=REV;
      C.meta.week4PatchVersion='16.3.91';
      C.meta.week4Scope='controlled-delta-only';
      C.meta.week3Status='FROZEN_ACCEPTED_BASELINE';

      C.sources=C.sources||{};
      Object.assign(C.sources,D.sources);
      W.integration=W.integration||{};
      W.integration.media=Array.isArray(W.integration.media)?W.integration.media:[];
      const mediaBySource=new Map(W.integration.media.map(x=>[x?.source,x]).filter(([id])=>id));
      Object.keys(D.sources).forEach(source=>{
        const sourceMeta=D.sources[source];
        mediaBySource.set(source,{...(mediaBySource.get(source)||{}),source,role:'Required · Week 4 page-specific resource',use:'Use only the portion assigned on the current Week 4 page.',watchFor:'The exact concept or technician behavior named on the page.',gap:'Alfred performs the prediction, practice and evidence step after the resource.'});
      });
      W.integration.media=[...mediaBySource.values()];

      const placements=D.placements.map(([source,lesson,segment,mediaType,afterAction])=>({
        assignmentWeek:4,source,targetWeek:4,lesson,segment,
        relationship:'Required reinforcement for this exact Week 4 page',
        presentationRole:'core',display:'primary',inline:true,requirement:'required',mediaType,afterAction,
        reason:'v16.3.91 Week 4 page-specific resource map; no whole-video repetition; all lesson-level written reading is Required.'
      }));
      const R=C.teachingResourceIntegration||{};
      const all=[...(R.placements||[]).filter(p=>Number(p.targetWeek)!==4),...placements];
      const byTargetWeek={},bySource={},byAssignment={};
      for(const p of all){
        (byTargetWeek[p.targetWeek] ||= []).push(p);
        (bySource[p.source] ||= []).push(p);
        (byAssignment[p.assignmentWeek+':'+p.source] ||= []).push(p);
      }
      C.teachingResourceIntegration={...R,revision:REV,placements:all,byTargetWeek,bySource,byAssignment,week4MediaRevision:REV,week4PointOfUsePlacementCount:placements.length};

      const O=C.outsideLiteratureIntegration||{};
      const readingIds=placements.filter(p=>p.mediaType==='literature').map(p=>p.source);
      const sourceMeta={...(O.sources||{})};
      for(const id of readingIds) sourceMeta[id]={
        ...(sourceMeta[id]||{}),...C.sources[id],author:C.sources[id]?.org,access:'Free/open online',
        literatureType:'Required · Week 4 page-specific technical reading',
        provenance:'v16.3.91 Week 4 required reading; publisher/authority named in source record.',
        verified:'2026-10-07'
      };
      const litRows=placements.filter(p=>p.mediaType==='literature').map(p=>({
        ...p,literatureType:'Required · Week 4 page-specific technical reading',
        readUse:'Read the bounded section needed for this page.',focus:'Use the page prompt to focus the reading.',afterReading:p.afterAction,
        why:'Required written reinforcement for this exact Week 4 page; optional reading remains in Study/Library.',
        realWorld:true,meta:sourceMeta[p.source]
      }));
      const allLit=[...(O.literaturePlacements||[]).filter(p=>Number(p.targetWeek)!==4),...litRows];
      const byPlacement={},byLitSource={};
      for(const p of allLit){
        byPlacement[[p.assignmentWeek,p.source,p.targetWeek,p.lesson,p.segment].join(':')]=p;
        (byLitSource[p.source] ||= []).push(p);
      }
      C.outsideLiteratureIntegration={...O,revision:REV,sources:sourceMeta,literaturePlacements:allLit,byPlacement,bySource:byLitSource,sourceIds:Object.keys(sourceMeta),placementCount:allLit.length,uniqueSourceCount:new Set(allLit.map(p=>p.source)).size,week4MediaRevision:REV};
    }
  }

  if(SG?.records){
    const r=SG.records.find(x=>x?.id==='sg-w04-ch03-p019-022');
    if(r){
      Object.assign(r,{
        classification:'required',role:'required',contextOnly:false,studyCategory:'Required CETa Reading',
        purpose:'Required Week 4 companion for waveform measures, capacitance/inductance behavior and first-order timing.',
        focus:'Use pp.19–22 for peak/RMS/period/frequency, capacitance and RC timing, plus qualitative inductance/time-response context. Detailed frequency-dependent C/L opposition and phase calculation are deferred to Week 6.',
        after:'Explain one waveform calculation, one capacitor/inductor stored-state rule, and the 63.2% time-constant landmark without looking back.',
        safelySkim:'Skim repeated resistor basics and defer detailed frequency-dependent opposition/phase calculation to Week 6; do not use this Week 4 placement to pull later mastery forward.',
        placements:[
          {week:4,lesson:0,segment:'w04-waveform-language',relationship:'Required first assignment — waveform measures'},
          {week:4,lesson:0,segment:'w04-capacitor-voltage-storage',relationship:'Previously assigned — reuse capacitor/time-response portion if needed'},
          {week:4,lesson:0,segment:'w04-inductor-current-storage',relationship:'Previously assigned — reuse qualitative inductance portion if needed'},
          {week:4,lesson:0,segment:'w04-first-order-time-response',relationship:'Previously assigned — reuse timing portion if needed'}
        ],
        notes:'v16.3.91 Week 4 scope repair: first assignment remains Required; later page mappings are reuse/backlinks, not duplicate reading load.',
        completionEvidence:'Read the bounded pp.19–22 slice once, then complete mapped Week 4 waveform/time-response retrieval and application.',
        completionPolicy:'Required reading is complete after the bounded first assignment plus its mapped Alfred action; later reuse does not create a second reading obligation.'
      });
    }
    SG.week4RequiredReadingRevision=REV;
    SG.completionEvidenceByWeek=SG.completionEvidenceByWeek||{};
    SG.completionEvidenceByWeek[4]='Bounded Chapter 3 pp.19–22 reading + Week 4 waveform/time-response application.';
  }

  if(A?.questions){
    const raw=D.questions.map(r=>({id:r[0],track:r[1],standards:r[2],prompt:r[3],choices:r[4],answer:r[5],explanation:r[6],skill:r[7],section:r[8],title:r[9]}));
    const build=r=>({
      id:r.id,track:r.track,standards:[...r.standards],prompt:r.prompt,choices:[...r.choices],answer:r.answer,explanation:r.explanation,
      difficulty:'Foundation',kind:'MCQ',skill:r.skill,questionClass:'substantive',masteryEvidence:true,evidenceWeight:0.65,
      sourceRef:'Alfred Week 4 controlled redesign',minWeek:4,family:'v16391-'+r.id,reviewWeek:4,reviewLessonIndex:r.track==='Career'?1:0,
      reviewSectionId:r.section,reviewSectionTitle:r.title,reviewStandardCodes:r.standards.map(s=>s.replace(/^CETA:|^CAREER:/,'')),
      reviewConcept:r.title,reviewRouteVersion:'16.3.91',
      audit:{status:'editorially-reviewed',date:'2026-10-07',reviewRevision:REV,note:'Canonical Week 4 item aligned to active Week 4 teaching route; not an official ETA exam item.',sources:[{title:'Alfred Week 4 controlled redesign',url:'',locator:r.section}]}
    });
    const ids=new Set(raw.map(x=>x.id));
    A.questions=A.questions.filter(q=>q&&!ids.has(q.id));
    A.questions.push(...raw.map(build));
    const w4=(A.weeklyTests||[]).find(x=>Number(x.week)===4||String(x.id)==='4');
    if(w4){
      Object.assign(w4,{
        title:'Week 04 Mastery — Waveforms, Energy Storage, Time Response & Technician Evidence',
        questionIds:raw.map(x=>x.id),count:12,mix:{CETa:6,Career:6},target:80,optional:false,reviewRouteVersion:'16.3.91',
        alignment:'Balanced Week 4 mastery: waveform arithmetic, capacitor/inductor stored-state behavior, RC/RL time constants, 63.2% landmark, reproducible waveform evidence, first-order filter characterization and fault isolation.'
      });
    }
    const lab=(A.labQuizzes||[]).find(x=>x.id==='LAB-004');
    if(lab) Object.assign(lab,{
      title:'LAB-004 Gate — RC Time Constant + Filter Response Evidence',
      questionIds:['CQ1216','CQ1219','CQ1220','CQ1222','CQ1224','CQ1226'],
      count:6,mix:{CETa:3,Career:3},target:80,optional:false,reviewRouteVersion:'16.3.91',
      alignment:'Balanced practical gate: manual timing, τ calculation, 63.2% criterion, measured transient evidence, controlled filter comparison and verification after correction.'
    });
    A.meta=A.meta||{};
    A.meta.week4AssessmentRevision=REV;
    A.meta.week4WeeklyMasteryMix={CETa:6,Career:6};
    A.meta.week4LabGateMix={CETa:3,Career:3};
  }

  const patchLab=root=>{
    const seen=new Set();
    const walk=v=>{
      if(!v||typeof v!=='object'||seen.has(v)) return null;
      seen.add(v);
      if(v.id==='LAB-004') return v;
      for(const k of Object.keys(v)){const f=walk(v[k]);if(f)return f;}
      return null;
    };
    const lab=walk(root);
    if(!lab) return false;
    const procedure=[
      'Calculate τ = RC and expected 63.2% charging / 36.8% discharging landmarks before opening the instrument or simulator.',
      'Apply a step or square wave and capture Vin plus capacitor output with a shared time reference.',
      'Measure the 1τ landmark manually with cursors/divisions and compare predicted versus measured timing.',
      'Configure first-order RC low-pass and high-pass topologies; keep input amplitude constant and compare slow, transition-region and fast input rates.',
      'Inject or simulate one approved wrong-value/open/short/setup fault; preserve the symptom, write two hypotheses and choose one discriminating measurement.',
      'Correct one cause, repeat the original failing test and one nearby regression condition, then write the final conclusion.'
    ];
    const evidence='Calculation sheet + annotated Vin/Vout transient capture + measured-versus-predicted τ table + low/high-pass three-condition comparison + fault hypothesis/discriminating-test record + post-correction verification.';
    Object.assign(lab,{
      title:'RC Time Constant + First-Order Filter Evidence',
      objective:'Predict, capture and explain first-order RC time response; compare low-pass/high-pass behavior; isolate one controlled fault using reproducible evidence.',
      equipment:'Oscilloscope + function generator + breadboard + R/C components, or Falstad CircuitJS for the full academic simulation route.',
      procedure,evidence,
      career:'Produces a technician-style waveform characterization and troubleshooting artifact rather than a screenshot-only lab.',
      pathRule:'Choose one route for the scheduled lab. Simulation earns full academic completion; it does not establish physical oscilloscope/probe handling. Physical proficiency is claimed only with real equipment evidence.',
      week4Revision:REV
    });
    if(lab.virtual) Object.assign(lab.virtual,{tool:'Falstad CircuitJS',links:[['Open Falstad','https://www.falstad.com/circuit/']],procedure:[...procedure],evidence,completion:'Full academic completion',verification:'Physical probe/reference handling, generator loading and component inspection remain optional later unless physical proficiency is claimed.'});
    if(lab.physical) Object.assign(lab.physical,{procedure:[...procedure],evidence,completion:'Full academic completion'});
    return true;
  };
  const labPatched=AC?patchLab(AC):false;

  if(Array.isArray(window.ALFRED_EVENTS)){
    for(const e of window.ALFRED_EVENTS.filter(e=>Number(e.week)===4)){
      e.week4Revision=REV;
      e.outcomes=[
        'Read waveform amplitude/timing and calculate period, frequency, duty cycle and sine RMS at assigned depth.',
        'Explain capacitor-voltage and inductor-current continuity in the first-order model.',
        'Predict and verify RC/RL time response using τ and the 63.2% / 36.8% landmarks.',
        'Use first-order filter behavior and targeted measurements to create technician evidence without pulling Week 6 analysis forward.'
      ];
      if(e.labId==='LAB-004'||String(e.summary||'').includes('LAB-004')) e.completionEvidence='LAB-004 calculation sheet, transient capture, predicted-versus-measured τ, filter comparison and fault-isolation verification are complete; Week 04 mastery is ≥80% with safety-critical requirements satisfied.';
    }
  }

  if(C?.modules?.length){
    const W=C.modules.find(m=>Number(m.week)===4);
    const ceta=W?.lessons?.find(l=>l.track==='CETa')||W?.lessons?.[0];
    const career=W?.lessons?.find(l=>l.track==='Career')||W?.lessons?.[1];
    const expectedC=['w04-waveform-language','w04-capacitor-voltage-storage','w04-inductor-current-storage','w04-first-order-time-response'];
    const expectedK=['career-w04-waveform-evidence','career-w04-transient-evidence','career-w04-filter-evidence','career-w04-fault-isolation'];
    const cetaIds=(ceta?.integrated?.teaching||[]).map(s=>s?.sectionId);
    const careerIds=(career?.integrated?.teaching||[]).map(s=>s?.sectionId);
    const exact=(a,b)=>a.length===b.length&&a.every((x,i)=>x===b[i]);
    const ps=(C.teachingResourceIntegration?.placements||[]).filter(p=>Number(p.targetWeek)===4);
    const videos=ps.filter(p=>p.mediaType==='video'), readings=ps.filter(p=>p.mediaType==='literature');
    const videoUrls=videos.map(p=>C.sources?.[p.source]?.url).filter(Boolean);
    const readingUrls=readings.map(p=>C.sources?.[p.source]?.url).filter(Boolean);
    const allText=JSON.stringify([ceta?.integrated?.teaching||[],career?.integrated?.teaching||[]]).toLowerCase();
    const bannedDigital=/binary|boolean|truth table/.test(allText);
    const deepWeek6=/\bcomplex impedance\b|\bresonance q\b|\bquality factor\b/.test(allText);
    const guide=SG?.records?.find(r=>r?.id==='sg-w04-ch03-p019-022');
    const perPage=[...expectedC.map(id=>({lesson:0,id})),...expectedK.map(id=>({lesson:1,id}))].map(x=>{
      const rows=ps.filter(p=>p.lesson===x.lesson&&p.segment===x.id);
      return {...x,videos:rows.filter(p=>p.mediaType==='video').length,readings:rows.filter(p=>p.mediaType==='literature').length};
    });
    const assessmentIds=new Set((A?.questions||[]).map(q=>q?.id));
    const expectedQ=['CQ1215','CQ1216','CQ1217','CQ1218','CQ1219','CQ1220','CQ1221','CQ1222','CQ1223','CQ1224','CQ1225','CQ1226'];
    const assessmentGood=expectedQ.every(id=>assessmentIds.has(id));
    const good=exact(cetaIds,expectedC)&&exact(careerIds,expectedK)&&ps.length===16&&videos.length===8&&readings.length===8&&new Set(videoUrls).size===8&&new Set(readingUrls).size===8&&readings.every(p=>p.requirement==='required')&&perPage.every(p=>p.videos===1&&p.readings===1)&&!bannedDigital&&!deepWeek6&&guide?.classification==='required'&&assessmentGood;
    C.week4ContentQuality={
      revision:REV,status:good?'VERIFIED_CONTENT_STRUCTURE':'FAILED_CONTENT_STRUCTURE',
      cetaPageCount:cetaIds.length,careerPageCount:careerIds.length,cetaSectionIds:cetaIds,careerSectionIds:careerIds,
      mediaPlacements:ps.length,videoPlacements:videos.length,readingPlacements:readings.length,
      uniqueVideoUrls:new Set(videoUrls).size,uniqueReadingUrls:new Set(readingUrls).size,
      allLessonReadingsRequired:readings.every(p=>p.requirement==='required'),
      studyGuideRequired:guide?.classification==='required',
      binaryBooleanLeak:bannedDigital,week6DepthLeak:deepWeek6,
      assessmentQuestionCount:expectedQ.filter(id=>assessmentIds.has(id)).length,
      lab004AcademicPatched:labPatched,pageResourceAudit:perPage,week3Touched:false,cloudSyncProtocol:2
    };
  }

  window.ALFRED_WEEK4_16391__={
    revision:REV,scope:'Week 4 only',cetaPages:4,careerPages:4,requiredVideos:8,requiredReadings:8,
    studyGuideRecord:'sg-w04-ch03-p019-022',
    assessmentIds:['CQ1215','CQ1216','CQ1217','CQ1218','CQ1219','CQ1220','CQ1221','CQ1222','CQ1223','CQ1224','CQ1225','CQ1226'],
    labId:'LAB-004',week3Frozen:true,
    week6Boundary:'deeper frequency-domain opposition/phase/resonance/filter analysis',
    week11Boundary:'binary/hex/Boolean/digital logic'
  };
})();
