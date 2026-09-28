/* AU-ESET 301 — v16.3.71 Week 3 focused instructional redesign
   Scope: Week 3 only. Load after the Week 2 acceptance layers.
   Goal: make Week 3 a beginner-first measurement course centered on the three
   core bench tools: DMM, current-limited DC bench supply, and oscilloscope.
*/
(()=>{
  const C=window.ALFRED_CURRICULUM;
  if(!C?.modules?.length)return;
  const W=C.modules.find(m=>Number(m.week)===3);
  if(!W?.lessons?.length)return;
  const ceta=W.lessons[0], career=W.lessons[1];
  const originalCetaTasks=[...((ceta.semanticTeaching?.length?ceta.semanticTeaching:ceta.integrated?.semanticTasks)||[])].map(t=>({...t,codes:[...(t.codes||[])]}));

  // -------------------------------------------------------------------------
  // 1) CETa lesson — seven deliberate pages, one measurement story.
  // -------------------------------------------------------------------------
  ceta.title='Core bench measurement: DMM, current-limited supply, and oscilloscope';
  ceta.objectives=[
    'Choose a core bench instrument from the measurement question instead of probing at random.',
    'Configure a DMM safely for voltage, resistance/continuity, and current measurements.',
    'Use bench-supply voltage setting, current limit, and CV/CC state as diagnostic evidence.',
    'Configure an oscilloscope probe, reference, vertical scale, timebase, coupling, and trigger for a known low-voltage waveform.',
    'Calculate peak-to-peak voltage, period, and frequency from the graticule and recognize common setup errors.',
    'Explain how loading, bandwidth, resolution, accuracy, reference choice, and attenuation can change or misrepresent a measurement.'
  ];
  ceta.sections=[
    {title:'Start with the question, not the instrument',teach:'A useful measurement begins with a fact you need to know. State the quantity, test point, reference, operating condition, expected healthy result, and what decision the result will support. Then choose the simplest instrument that can make the event visible. A DMM is excellent for slow or steady electrical quantities; the bench supply controls power and exposes current demand; an oscilloscope is needed when voltage changes over time matter.',remember:'Question → expected result → instrument → setup → measurement → decision.'},
    {title:'DMM modes are different measurement circuits',teach:'Voltage, resistance/continuity, and current modes do not use the meter the same way. Voltage is measured across two points with the lead in the V/Ω input. Resistance/continuity uses the meter’s internal test source, so the circuit must be de-energized. Current mode routes circuit current through the meter, so the path is opened and the meter is inserted in series using the correct current input. After current measurement, return the lead to the V/Ω jack.',remember:'Voltage: parallel. Resistance: power off. Current: break the path and insert the meter in series.'},
    {title:'Bench supply: voltage setting plus current limit',teach:'A current-limited supply has two active boundaries. In constant-voltage mode it holds the set voltage while load current stays below the limit. If the load tries to draw more than the configured limit, the supply enters constant-current operation and reduces output voltage as necessary. That CV/CC state is evidence: unexpected CC during bring-up may indicate an intentionally low limit, an excessive load, wiring error, or short.',remember:'Set voltage and current limit before connection; read CV/CC as part of the diagnosis.'},
    {title:'Oscilloscope: turn voltage over time into a readable picture',teach:'The scope’s vertical axis represents voltage and its horizontal axis represents time. Volts/div changes how much voltage each vertical division represents; time/div changes how much time each horizontal division represents. Start with a known low-voltage waveform, fit it comfortably on screen, then calculate amplitude and timing manually before trusting automatic measurements.',remember:'Vertical scale answers “how much voltage?”; timebase answers “how much time?”'},
    {title:'Probe and reference discipline',teach:'The probe is part of the measurement system. Connect the probe tip to the test point and the reference lead only to an approved circuit reference. On a conventional earth-referenced bench oscilloscope, the probe ground is not an arbitrary floating lead. Match the probe attenuation switch to the channel setting, compensate a passive probe when appropriate, and choose DC or AC coupling deliberately. A wrong probe factor can create a clean-looking trace with the wrong amplitude.',remember:'Before believing the trace: reference, probe factor, compensation, coupling, and rating must make sense.'},
    {title:'Trigger: make the event repeat in the same place',teach:'A repeating waveform can appear to slide because successive acquisitions begin at different points. Triggering defines the event that anchors each acquisition. Choose the source to say which channel matters, the level to say which voltage crossing matters, and the slope to say whether the crossing must be rising or falling. Adjust trigger only after the signal is within a visible vertical and horizontal range.',remember:'Trigger source + level + slope define the event that stabilizes the display.'},
    {title:'Measurements can change or misrepresent the circuit',teach:'An instrument is connected to the circuit, so it can affect what it measures. A finite meter or probe input impedance can load a high-impedance node. Bandwidth limits which changes an instrument can reproduce. Resolution is the smallest displayed or digitized change; accuracy is how close a specified measurement is to the true value. A trustworthy result records the instrument setup and checks whether the tool could have hidden, loaded, clipped, filtered, or rescaled the phenomenon.',remember:'A precise-looking number is not automatically an accurate or non-invasive measurement.'}
  ];

  const localFigure=(src,title,alt,caption,source,sourceUrl)=>({
    type:'gallery',number:'Source-grounded technical visual',title,
    items:[{label:title,src,alt,credit:'Alfred technical redraw grounded in the cited manufacturer guidance',sourceUrl,license:'Instructional redraw; source concepts credited'}],
    caption,source,sourceUrl,provenance:'source-grounded'
  });

  const cetaTeaching=[
    {
      sectionId:'w03-question-before-instrument',
      title:'Start with the question, not the instrument',
      buildOn:'Weeks 1–2 gave you expected values and safe low-voltage measurement habits. Week 3 turns those expectations into a deliberate instrument plan.',
      text:'A technician does not begin by touching a random probe to the board. Begin by writing the question in measurable form. “Is the power bad?” is vague. “Does the 3.3 V rail remain between 3.20 V and 3.40 V while the board starts?” tells you the quantity, node, operating condition, expected range, and decision boundary.\n\nNext choose the simplest tool that can make the evidence visible. Use a DMM when the important fact is a slow or steady voltage, resistance/continuity on an unpowered circuit, or a deliberately arranged current measurement. Use the bench supply when you need controlled energy and evidence about load current or current limiting. Use an oscilloscope when time matters: ripple, pulses, startup dips, repetitive waveforms, or brief events a DMM may average away.\n\nBefore measuring, predict what healthy behavior should look like. The prediction gives the reading meaning. A number with no expected range is only a number.',
      remember:'Write the question and expected healthy result first. The instrument exists to answer that question.',
      figure:{type:'table',number:'Technician decision model',title:'Choose the tool from the evidence you need',columns:['Question','Best first tool','Why'],rows:[['Is this rail about 5 V right now?','DMM','Fast, accurate scalar DC measurement'],['Is the board demanding too much current?','Current-limited bench supply','The supply reports current and CV/CC state while controlling energy'],['Is the rail dipping for 20 µs?','Oscilloscope','The event is time-dependent and may be averaged away by a DMM'],['Is this resistor near its stated value?','DMM, circuit de-energized','Resistance mode uses the meter’s internal test source']],caption:'Instrument choice follows the measurement question, not habit.',source:'Fluke DMM guidance; Keysight Bench Power Supply Basics; Tektronix oscilloscope primers',sourceUrl:'https://www.fluke.com/en-us/learn/online-courses/digital-multimeter-basics-online-course',provenance:'source-grounded'}
    },
    {
      sectionId:'w03-dmm-modes-connections',
      title:'DMM modes are different measurement circuits',
      buildOn:'You already know voltage, current, and resistance are different physical quantities. The DMM must connect differently because it is asking the circuit a different question in each mode.',
      text:'In DC-voltage mode, place the black lead in COM and the red lead in the V/Ω input, then touch the probes across the two points whose potential difference you want. The meter is connected in parallel with the part of the circuit being observed.\n\nResistance and continuity are different. The meter supplies a small internal test stimulus, so turn circuit power off and discharge stored energy where applicable before measuring. In-circuit parallel paths can also change the resistance you read.\n\nCurrent mode changes the circuit most dramatically. Current must pass through the meter’s internal shunt and fuse. Open the intended current path and insert the meter in series using the correct A or mA/µA input and range. Never place a current-configured meter directly across a low-impedance source as though it were a voltmeter. After a current measurement, move the red lead back to the V/Ω jack before the next voltage check. That reset habit prevents one of the most common bench mistakes.',
      remember:'Voltage = across/parallel. Resistance = power off. Current = break the path and insert the meter in series.',
      figure:localFigure('w03-dmm-connections.svg','DMM connection rules','Three-panel diagram showing voltage mode in parallel, current mode in series, and resistance mode on a de-energized circuit.','Use this as a pre-measurement checklist. The connection changes with the quantity being measured.','Fluke — DC Voltage and Resistance Measurement guidance','https://www.fluke.com/en-us/learn/blog/digital-multimeters/how-to-measure-dc-voltage-with-a-digital-multimeter')
    },
    {
      sectionId:'w03-supply-cv-cc',
      title:'Bench supply: voltage setting plus current limit',
      buildOn:'Week 1 introduced current-limited first power. Now learn what the supply is actually doing when the CV or CC indicator changes.',
      text:'Set both voltage and current limit before connecting the circuit. Suppose you want 5 V and choose a 100 mA startup current limit. While the load needs less than 100 mA, the supply can maintain 5 V and operates in constant-voltage (CV) mode.\n\nIf the load tries to draw more than 100 mA, the supply reaches the current boundary. It enters constant-current (CC) operation and reduces output voltage until current is held near the configured limit. Therefore, a display of 1.8 V when the setpoint is 5 V is not enough to conclude that the supply failed. If the CC indicator is active, the load/current-limit interaction is the first clue to investigate.\n\nTreat CC as evidence. Check whether the limit was intentionally conservative, whether the load is expected to draw that much, and whether a wiring error or short could explain the demand. Do not simply increase the limit until the voltage “looks right.”',
      remember:'CV holds voltage until the current limit is reached; CC holds current and allows voltage to fall.',
      figure:localFigure('w03-cv-cc.svg','How a current-limited supply moves between CV and CC','Flow diagram showing a 5 V, 100 mA supply remaining in CV below the current limit and moving to CC when load demand exceeds the limit.','Read the mode indicator as part of the measurement. CC can be a diagnostic symptom, not an inconvenience to override.','Keysight — Bench Power Supply Basics, Lesson 4: Constant Voltage and Constant Current Modes','https://www.keysight.com/us/en/learn/course.bench-power-supply-basics.html')
    },
    {
      sectionId:'w03-scope-voltage-over-time',
      title:'Oscilloscope: turn voltage over time into a readable picture',
      buildOn:'A DMM reduces a changing electrical signal to a number. The oscilloscope lets you see how voltage changes with time.',
      text:'Think of the scope screen as graph paper. Vertically, each division represents a voltage set by volts/div. Horizontally, each division represents a time interval set by time/div. Vertical position moves the zero/reference location on the screen; it does not change the physical signal.\n\nLearn on a known waveform before troubleshooting an unknown circuit. If a square wave spans 4 vertical divisions at 0.5 V/div, its peak-to-peak amplitude is 4 × 0.5 V = 2.0 Vpp. If one cycle spans 5 horizontal divisions at 200 µs/div, the period is 1000 µs = 1 ms, so frequency is 1/T = 1 kHz.\n\nCalculate these quantities manually first, then compare with the scope’s automatic measurements. Automatic readouts are useful, but manual interpretation lets you notice when scaling, triggering, probe configuration, or signal visibility makes the automatic answer suspicious.',
      remember:'Vpp = vertical divisions × volts/div. Period = horizontal divisions × time/div. Frequency = 1/period.',
      figure:localFigure('w03-scope-graticule.svg','Read amplitude and time from the graticule','Annotated square-wave graticule showing 0.5 V/div, 200 µs/div, 2 Vpp, 1 ms period, and 1 kHz frequency.','Use the grid to calculate the waveform before checking an automatic measurement.','Tektronix — oscilloscope setup and XYZs guidance','https://www.tek.com/en/documents/primer/setting-and-using-oscilloscope')
    },
    {
      sectionId:'w03-probe-reference-discipline',
      title:'Probe and reference discipline',
      buildOn:'The trace only means what you think it means when the probe, reference, and channel configuration match the physical connection.',
      text:'Connect the probe tip to the test point and the reference/ground lead only to an approved circuit reference. On a conventional earth-referenced bench oscilloscope, the probe ground clip is tied through the instrument to protective earth. It is not a freely floating second probe tip. Stay within the low-voltage lab configurations Alfred specifies; do not defeat protective earth or improvise measurements on line-powered circuitry.\n\nNext verify attenuation. A passive probe may be set to 1× or 10×, and the oscilloscope channel must know the same factor. If a 3.3 V node reads about 0.33 V on the scope while a DMM reads about 3.29 V, a factor-of-ten probe/channel mismatch is a much better first hypothesis than “the circuit suddenly lost 90% of its voltage.”\n\nWhen using a compensatable passive probe, check compensation on the scope’s known reference waveform. Finally choose coupling deliberately: DC coupling preserves the DC level and variations riding on it; AC coupling blocks the DC component so a small variation can be viewed more easily. Record which you used.',
      remember:'Safe reference first; then attenuation, compensation, coupling, and scale.',
      figure:{type:'flow',number:'Probe setup sequence',title:'Make the measurement system known-good before diagnosing the circuit',steps:[{title:'Reference',body:'Connect only to the approved low-voltage circuit reference.'},{title:'Attenuation',body:'Match the probe switch and the channel probe-factor setting.'},{title:'Compensation',body:'Check the passive probe on a known square-wave reference when applicable.'},{title:'Coupling',body:'Start with DC when absolute level matters; use AC only when you intentionally want to remove DC.'},{title:'Record',body:'Save the probe factor and coupling with the measurement.'}],caption:'A clean-looking trace can still be quantitatively wrong when probe or channel configuration is wrong.',source:'Tektronix — Setting and Using an Oscilloscope; ABCs of Probes',sourceUrl:'https://www.tek.com/en/documents/primer/setting-and-using-oscilloscope',provenance:'source-grounded'}
    },
    {
      sectionId:'w03-trigger-stable-display',
      title:'Trigger: make the event repeat in the same place',
      buildOn:'Once the signal is visible at a sensible scale, triggering makes repeated acquisitions line up on the same event.',
      text:'A periodic waveform may appear to drift or roll because the oscilloscope begins each acquisition at a different point in the cycle. Triggering supplies a repeatable starting condition.\n\nTrigger source answers “which signal should define the event?” Trigger level answers “at what voltage crossing?” Trigger slope answers “on a rising crossing or a falling crossing?” For a 0-to-3.3 V square wave, a reasonable first edge trigger might use that channel as the source, a level near the midpoint around 1.6 V, and rising slope.\n\nDo not use trigger controls to rescue a signal that is not yet visible. First put the waveform within the vertical range and choose a timebase that shows useful cycles. Then set the trigger. Once the trace is stable, change one control at a time and say what changed on screen. That makes the control meaningful instead of turning setup into button memorization.',
      remember:'Visible signal first. Then choose trigger source, level, and slope to anchor the event.',
      figure:{type:'flow',number:'Trigger reasoning',title:'Why the trace becomes stable',steps:[{title:'Source',body:'Choose the channel whose event should anchor the acquisition.'},{title:'Level',body:'Choose the voltage crossing that represents the event.'},{title:'Slope',body:'Choose rising or falling crossing.'},{title:'Stable repetition',body:'Successive acquisitions begin from the same defined event.'}],caption:'Triggering aligns repeated acquisitions; it does not repair a bad probe connection or invisible signal.',source:'Tektronix — The Basics of an Oscilloscope Trigger',sourceUrl:'https://www.tek.com/en/video/the-basics-of-an-oscilloscope-trigger',provenance:'source-grounded'}
    },
    {
      sectionId:'w03-measurement-limits',
      title:'Measurements can change or misrepresent the circuit',
      buildOn:'You can now connect the tools. The final skill is deciding whether the reading itself is trustworthy.',
      text:'No real instrument is perfectly invisible. A DMM or scope probe has finite input impedance, so connecting it to a high-impedance node can change the node voltage. A probe and scope also have finite bandwidth, so very fast changes may be attenuated or distorted. Leads and probing geometry can add noise or unwanted coupling.\n\nSeparate resolution from accuracy. Resolution is the smallest change the display or converter can show. Accuracy is how close a specified measurement is expected to be to the true value under stated conditions. A display showing 5.0000 V therefore does not prove the actual voltage is accurate to 0.0001 V.\n\nA trustworthy technician record contains enough context to reproduce the result: test point and reference, operating condition, instrument and relevant mode, probe factor, coupling, scale/timebase/trigger when applicable, expected range, measured result, and tolerance or limitation. If the tool could have loaded, filtered, averaged, clipped, or rescaled the event, say so.',
      remember:'Ask two questions: “What did I measure?” and “What could my measurement system have changed or hidden?”',
      figure:{type:'table',number:'Measurement-quality checks',title:'A believable reading needs more than digits',columns:['Risk','Example symptom','Check'],rows:[['Loading','High-impedance node sags when probed','Consider meter/probe input impedance'],['Bandwidth','Fast edge looks slower or smaller','Check probe/scope bandwidth and settings'],['Attenuation mismatch','Amplitude wrong by a clean factor such as 10','Match probe and channel factor'],['Resolution ≠ accuracy','Many displayed digits create false confidence','Use instrument accuracy/tolerance specification'],['Time averaging','DMM misses a brief dip','Use an oscilloscope when event duration matters']],caption:'Instrument limitations are part of the measurement model.',source:'Fluke and Tektronix manufacturer measurement guidance',sourceUrl:'https://www.tek.com/en/documents/whitepaper/abcs-probes-primer',provenance:'source-grounded'}
    }
  ];

  const taskMeter=originalCetaTasks.find(t=>t.taskId==='SEM-8-03-033')||{};
  const taskScope=originalCetaTasks.find(t=>t.taskId==='SEM-8-03-036')||{};
  const activeMeter={
    ...taskMeter,
    taskId:'SEM-8-03-033',
    title:'DMM safety, connection, care, and loading',
    track:'CETa',codes:['8.3','8.4','8.6'],
    teach:'Use the Week 3 DMM and measurement-limit pages. Historical analog-meter operation/construction requirements are preserved for later CETa breadth review rather than forced into this beginner bench sequence.',
    prompt:'For three measurements—5 V rail voltage, resistance of an unpowered resistor, and branch current—state the DMM mode, jack, circuit connection, power state, and one loading/safety precaution for each.',
    required:['Correct voltage-mode parallel connection','Resistance/continuity only on a de-energized circuit','Current measurement inserted in series with correct current input','Lead/jack reset after current measurement','One meter-loading or lead-care precaution'],
    reviewSectionIds:['w03-dmm-modes-connections','w03-measurement-limits'],reviewRouteVersion:'16.3.71'
  };
  const activeScope={
    ...taskScope,
    taskId:'SEM-8-03-036',
    title:'Oscilloscope use and front-panel control reasoning',
    track:'CETa',codes:['8.12','8.12.1'],
    teach:'Use the Week 3 oscilloscope, probe/reference, trigger, and measurement-limit pages. Spectrum-analyzer use (8.13) is preserved for later RF/spectrum instruction.',
    prompt:'Configure a conventional bench oscilloscope for a known 0–3.3 V, 1 kHz square wave. Explain the probe/reference connection, attenuation, volts/div, time/div, coupling, trigger source/level/slope, and how you would calculate Vpp and frequency manually.',
    required:['Safe low-voltage reference connection','Probe/channel attenuation match','Sensible vertical and horizontal scale','Trigger source/level/slope','Manual amplitude and period/frequency reasoning'],
    reviewSectionIds:['w03-scope-voltage-over-time','w03-probe-reference-discipline','w03-trigger-stable-display'],reviewRouteVersion:'16.3.71'
  };

  ceta.integrated={...(ceta.integrated||{}),version:'16.3.71',purpose:'Beginner-first core bench measurement: question-first instrument choice, safe DMM connection, current-limited supply operation, oscilloscope setup, trigger, and measurement-system limits.',prereq:'Use only the low-voltage safety, electrical-quantity, and expected-value reasoning taught in Weeks 1–2.',teaching:cetaTeaching,
    workedExamples:[
      {problem:'A square wave spans 4 vertical divisions at 0.5 V/div. One cycle spans 5 horizontal divisions at 200 µs/div.',steps:['Vpp = 4 × 0.5 V = 2.0 V.','T = 5 × 200 µs = 1000 µs = 1 ms.','f = 1/T = 1/0.001 s = 1 kHz.','Verify the probe/channel attenuation factor before accepting the amplitude.'],answer:'2.0 Vpp and 1 kHz.',meaning:'Manual graticule reasoning lets you judge whether automatic measurements are believable.'},
      {problem:'A 3.3 V digital output reads 3.29 V on the DMM but only 0.33 V on the oscilloscope.',steps:['The DMM says the DC node is close to its expected 3.3 V level.','The scope discrepancy is almost exactly a factor of ten.','Before touching the circuit, compare the probe attenuation switch with the scope channel probe-factor setting.','Also verify reference connection and DC coupling.'],answer:'Investigate a 10× probe/channel attenuation mismatch before diagnosing the circuit.',meaning:'Instrument configuration can create a false fault symptom.'},
      {problem:'A bench supply is set to 5.0 V with a 100 mA current limit. After connection it displays about 1.8 V, 100 mA, and CC.',steps:['The supply is not maintaining the requested 5 V because the current boundary is active.','The connected load is attempting to draw more than the configured 100 mA.','Do not simply raise the limit. Remove or reduce power and inspect whether the load, wiring, or limit is appropriate.','Reapply power only after the hypothesis and stop condition are clear.'],answer:'The supply is current-limiting; investigate load demand/current-limit choice before calling the supply faulty.',meaning:'CV/CC status is diagnostic evidence.'}
    ],
    misconceptions:[
      'A DMM can measure every quantity by touching the same two points. — False: voltage, resistance, and current modes connect differently.',
      'A supply set to 5 V must always output 5 V. — False: current limiting can force the output voltage lower.',
      'A stable oscilloscope trace must be quantitatively correct. — False: probe factor, reference, coupling, and loading can still be wrong.',
      'More displayed digits automatically mean more accuracy. — False: resolution and accuracy are different specifications.',
      'Trigger fixes any bad waveform. — False: first make the signal safely connected and visible.'
    ],
    guidedPractice:[
      'I DO — Follow Alfred’s three-mode DMM connection model and explain why each connection is different before making any measurement.',
      'WE DO — A 5 V board enters CC at 80 mA with the voltage falling to 2.4 V. Decide what evidence the supply is giving and name the next safe check.',
      'WE DO — Configure a known 0–3.3 V, 1 kHz square wave: choose initial probe factor, volts/div, time/div, coupling, and a reasonable edge trigger.',
      'YOU DO — A board resets briefly every 200 ms. Decide what a DMM can establish first, then design a scope setup capable of capturing a short supply dip.'
    ],
    independentScenario:'A low-voltage sensor board has a correct 5 V average reading but sometimes resets during startup. Create a measurement plan using only the DMM, current-limited bench supply, and oscilloscope. State the expected result for each measurement, safe reference/connection, starting settings, stop condition, and what evidence would distinguish excessive current demand from a brief voltage dip.',
    connection:'These three instruments become the common evidence tools for later filters, semiconductor circuits, MCU bring-up, hardware validation, and fault isolation. Specialist instruments are learned when the circuit concepts that make their readings meaningful are taught.',
    teachBack:'Without looking at the page, explain when to choose the DMM, supply, or scope; then demonstrate the safe connection/configuration logic for one measurement with each.',
    visualId:'w03-dmm-connections',
    checks:[
      {type:'mcq',prompt:'You want to measure the resistance of a resistor on a board. What should happen first?',choices:['Turn power off and discharge stored energy where applicable','Put the red lead in the A jack and bridge the resistor','Switch the scope to AC coupling','Increase the bench-supply current limit'],answer:0,explanation:'Resistance mode uses the meter’s internal test stimulus, so the circuit must be de-energized.',reviewSectionTitle:'DMM modes are different measurement circuits',reviewSectionId:'w03-dmm-modes-connections',reviewStandardCodes:['8.3','8.4'],reviewConcept:'safe resistance measurement',reviewRouteVersion:'16.3.71'},
      {type:'mcq',prompt:'A 5 V supply is showing 1.7 V while the CC indicator is active. What is the strongest first interpretation?',choices:['The load is attempting to exceed the configured current limit','The scope trigger must be wrong','The voltage display proves the supply is broken','The DMM must be in resistance mode'],answer:0,explanation:'CC means the current limit is controlling, so voltage can fall below the setpoint.',reviewSectionTitle:'Bench supply: voltage setting plus current limit',reviewSectionId:'w03-supply-cv-cc',reviewStandardCodes:['8.3'],reviewConcept:'CV/CC interpretation',reviewRouteVersion:'16.3.71'},
      {type:'short',prompt:'A repeating scope trace drifts horizontally. Name the three trigger choices you should reason about.',answer_text:'Trigger source, trigger level, and trigger slope.',reviewSectionTitle:'Trigger: make the event repeat in the same place',reviewSectionId:'w03-trigger-stable-display',reviewStandardCodes:['8.12.1'],reviewConcept:'oscilloscope trigger controls',reviewRouteVersion:'16.3.71'}
    ],
    semanticTasks:[activeMeter,activeScope],objectives:ceta.objectives,substantiveWordCount:0
  };
  ceta.integrated.substantiveWordCount=cetaTeaching.reduce((n,s)=>n+String(s.text||'').trim().split(/\s+/).filter(Boolean).length,0);
  ceta.semanticTeaching=[activeMeter,activeScope];
  ceta.worked=ceta.integrated.workedExamples[0];
  ceta.knowledgeCheck={prompt:'A periodic trace is visible but slides horizontally. Which controls define the event that should stabilize the display?',choices:['Trigger source, level, and slope','Only volts/div','Only probe attenuation','Only screen brightness'],answer:0,correct:'Correct. The source, level, and slope define the trigger event.',retry:'First make the signal visible, then use source, level, and slope to align acquisitions.',critical:false};
  ceta.deferredSemanticTasks=originalCetaTasks.filter(t=>['SEM-8-03-034','SEM-8-03-035','SEM-8-03-037'].includes(t.taskId)).map(t=>({...t,deferredFromWeek3:true,deferReason:'v16.3.71 coherence repair — preserve and re-home with the later component, digital, RF, or service-tool week that actually teaches this instrument.'}));
  ceta.deferredCompetencies=[
    {codes:['8.1','8.2'],title:'Analog/digital meter operation and meter construction',fromTaskId:'SEM-8-03-033',deferReason:'Preserved for later CETa breadth review; Week 3 first-pass teaching focuses on modern DMM setup, safety, care, and loading.'},
    {codes:['8.13'],title:'Spectrum analyzer uses and operation',fromTaskId:'SEM-8-03-036',deferReason:'Preserved for the later RF/spectrum week where frequency-domain concepts are taught.'}
  ];

  // -------------------------------------------------------------------------
  // 2) Career lesson — keep the good measurement-planning model, remove overlap.
  // -------------------------------------------------------------------------
  career.title='Question-first measurement planning and reproducible bench evidence';
  career.objectives=[
    'Convert a vague symptom into a measurable question with an expected result and decision rule.',
    'Choose only among instruments already taught and configure them to make the needed evidence observable.',
    'Use a known waveform to separate oscilloscope setup problems from circuit problems.',
    'Account for reference, grounding, loading, bandwidth, resolution, and accuracy before trusting the result.',
    'Design measurements that separate competing hypotheses rather than collect random numbers.',
    'Record enough setup and uncertainty information for another technician to reproduce the result.'
  ];
  const careerTeaching=[
    {sectionId:'career-w03-question-first-selection',title:'Start with a measurable question and choose only a tool you understand',buildOn:'Week 2 prediction-before-probing troubleshooting.',text:'Translate the symptom into a quantity, test point, reference, operating condition, expected healthy result, and decision rule. “The board resets” becomes “Does the 3.3 V rail fall below the acceptable minimum during the reset event?” Only then choose the instrument. Use the DMM for stable/slow quantities, the supply for controlled power and load-current evidence, and the scope when timing or brief events matter. Do not reach for a specialist tool just because it exists; a technician should understand what the instrument is doing to the circuit and what its reading means.',remember:'A tool is justified by the hypothesis it can test.'},
    {sectionId:'career-w03-static-evidence',title:'Use the DMM and supply for slow or static evidence first',buildOn:'The CETa pages taught the safe DMM connections and CV/CC supply behavior.',text:'Before capturing complicated waveforms, establish the slow facts. Verify the supply setpoint and current limit. Record the actual current draw and whether the supply is in CV or CC. Use the DMM to verify stable rails and de-energized resistance/continuity where appropriate. These measurements create the baseline for the scope. If the board is already current-limited or the DC rail is grossly wrong, that evidence may change the next step before you probe a waveform.',remember:'Establish the baseline before chasing the transient.'},
    {sectionId:'career-w03-known-waveform-first',title:'Learn the scope on a known waveform before troubleshooting an unknown one',buildOn:'The CETa scope pages taught volts/div, time/div, probe factor, coupling, and trigger.',text:'Use a known low-voltage square wave to prove that the measurement chain is configured correctly. Connect the approved reference, confirm probe attenuation, fit the signal vertically and horizontally, stabilize it with a deliberate trigger, then calculate Vpp, period, and frequency manually. Compare those values with the scope’s automatic readings. When the known signal behaves as expected, you have removed several setup errors from the troubleshooting problem. Only then move to the unknown board signal.',remember:'Known-good signal first; unknown circuit second.'},
    {sectionId:'career-w03-reference-loading-bandwidth',title:'Reference, grounding, loading, and bandwidth can change the result',buildOn:'A trustworthy trace depends on both the circuit and the measurement system.',text:'A measurement can be wrong even when the instrument is functioning normally. The reference point may be inappropriate, the probe may load a high-impedance node, the measurement bandwidth may suppress a fast edge, or the selected coupling may remove the DC component you actually need to know. Treat the probe and instrument as part of the circuit model. Stay within the low-voltage lab configurations taught here, and do not assume a conventional bench-scope ground clip is floating.',remember:'If the measurement setup can change the signal, include that possibility in the diagnosis.'},
    {sectionId:'career-w03-discriminating-measurements',title:'WE DO → YOU DO: choose measurements that separate hypotheses',buildOn:'Week 2 taught last-good/first-bad reasoning. Week 3 adds time-dependent evidence.',text:'Suppose a board resets when a motor starts. Two plausible hypotheses are excessive current demand that drags down the rail, or a reset event unrelated to the power rail. First record supply current/CV-CC behavior. Then use the scope to watch the rail around the event and, if available within the taught low-voltage setup, the reset signal. Choose trigger/timebase settings that make the event visible. Each measurement should eliminate or strengthen a specific hypothesis. Avoid an unexplained motor-current waveform measurement unless a safe, taught current-sensing method is part of the setup.',remember:'Every measurement should be able to change your diagnosis.'},
    {sectionId:'career-w03-reproducible-evidence',title:'Preserve settings, uncertainty, and context so another technician can reproduce the result',buildOn:'A correct measurement that cannot be reconstructed is weak engineering evidence.',text:'Record the board/circuit revision, operating condition, supply voltage and current limit, test point and reference, instrument/mode, probe attenuation, coupling, vertical scale, timebase, trigger, measured value, expected value, and tolerance or limitation that matters. A screenshot is useful only after that context exists. Separate resolution from accuracy and note whether probe loading, bandwidth, noise, or lead resistance could explain a small deviation. The goal is not to make the record look impressive; it is to make the result auditable and repeatable.',remember:'A screenshot without setup, expectation, and reference is decoration—not reproducible evidence.'}
  ];
  const careerTask={...((career.integrated?.semanticTasks||[]).find(t=>t.taskId==='SEM-C3-03-1640A')||{}),taskId:'SEM-C3-03-1640A',title:'Career integration: question-first DMM, supply, and oscilloscope measurement',track:'Career',codes:['C3.1','C3.2','C3.3','C3.4','C3.6'],teach:'Use the six Week 3 Career measurement pages.',prompt:'For a low-voltage board that intermittently resets during startup, write a measurement plan using the bench supply, DMM, and oscilloscope only. State the hypothesis, expected result, reference, setup, stop condition, and what each possible result would imply.',required:['Question and expected result before probing','Correct DMM and supply evidence','Safe scope reference/probe/scale/timebase/trigger plan','One measurement that separates competing hypotheses','Reproducible record with relevant uncertainty/limitations'],reviewSectionIds:['career-w03-question-first-selection','career-w03-discriminating-measurements','career-w03-reproducible-evidence'],reviewRouteVersion:'16.3.71'};
  career.sections=careerTeaching.map(s=>({title:s.title,teach:s.text,remember:s.remember}));
  career.integrated={...(career.integrated||{}),version:'16.3.71',purpose:'Turn core bench instruments into a question-first technician measurement workflow.',prereq:'Weeks 1–2 safe measurement and expected-value troubleshooting plus the Week 3 CETa instrument pages.',teaching:careerTeaching,
    workedExamples:[
      {problem:'A 100 mV ripple rides on a 5 V rail, but the trace is off-screen at the vertical sensitivity needed to see the ripple.',steps:['Start in DC coupling to confirm the absolute 5 V level and signal range.','Keep the reference on the approved circuit ground.','Use vertical position/offset or, after the DC level is known, AC coupling to inspect the small ripple.','If you use AC coupling, record that the DC component is intentionally removed.'],answer:'Establish the DC rail first; then isolate the ripple with documented settings.',meaning:'The setup determines what information the trace contains.'},
      {problem:'A known 0-to-3.3 V, 1 kHz square wave appears nearly flat.',steps:['Verify safe reference and probe attenuation.','Choose a volts/div setting that can display 3.3 V without clipping.','Choose a timebase near the expected 1 ms period so several cycles are visible.','Set an edge trigger near the mid-level and confirm the trace stabilizes.','Only after the known signal is observable should you diagnose an unknown circuit.'],answer:'Make the expected waveform observable before blaming the circuit.',meaning:'Known-waveform onboarding separates setup error from circuit behavior.'}
    ],
    misconceptions:['More measurements are automatically better. — False: high-information measurements that distinguish hypotheses are better.','A scope screenshot is evidence by itself. — False: the setup, reference, conditions, expectation, and limitations must accompany it.','A DMM reading can rule out every fast power problem. — False: brief events can be averaged or missed.'],
    guidedPractice:['Write one complete measurement-plan row for a 3.3 V rail during startup: hypothesis, expected range, instrument, connection/reference, and stop condition.','A DMM repeatedly reads 4.998 V on a nominal 5 V rail. Explain what the displayed digits prove and what they do not prove without the instrument accuracy specification.','A suspected event lasts about 20 µs. Explain why a DMM may miss it and choose starting oscilloscope timebase/trigger reasoning that would make the event observable.'],
    independentScenario:'Design a measurement plan for a low-voltage board that intermittently resets when a motor starts. Include the supply rail and reset event. For every measurement, state the hypothesis, expected healthy result, instrument/setup, and evidence that would change your diagnosis. Do not use a logic analyzer or an unexplained current probe; those measurement methods are taught later or require explicit setup.',
    connection:'This becomes the evidence workflow reused throughout hardware test, validation, and embedded bring-up.',teachBack:'Explain how you would prove that a measurement setup is known-good before using its result to blame a circuit.',visualId:'w03-measurement-plan',
    checks:[
      {type:'mcq',prompt:'Which measurement record is strongest?',choices:['A cropped trace with no labels','A trace plus test point/reference, probe factor, scales, trigger, operating condition, expected value, and result','Only an automatic frequency readout','A photo of the bench'],answer:1,explanation:'Reproducible evidence includes where, how, under what conditions, and compared with what expectation.',reviewSectionTitle:'Preserve settings, uncertainty, and context',reviewSectionId:'career-w03-reproducible-evidence',reviewStandardCodes:['C3.3','C3.4'],reviewConcept:'reproducible evidence',reviewRouteVersion:'16.3.71'},
      {type:'short',prompt:'Differentiate resolution from accuracy in one sentence each.',answer_text:'Resolution is the smallest displayed or digitized change; accuracy is how close the specified measurement is expected to be to the true value.',reviewSectionTitle:'Preserve settings, uncertainty, and context',reviewSectionId:'career-w03-reproducible-evidence',reviewStandardCodes:['C3.4'],reviewConcept:'resolution versus accuracy',reviewRouteVersion:'16.3.71'}
    ],semanticTasks:[careerTask],objectives:career.objectives,substantiveWordCount:0,
    careerInstructionalDepthRevision:'2026-09-27-v16.3.71-week3-measurement-workflow'
  };
  career.integrated.substantiveWordCount=careerTeaching.reduce((n,s)=>n+String(s.text||'').trim().split(/\s+/).filter(Boolean).length,0);
  career.semanticTeaching=[careerTask];
  career.worked=career.integrated.workedExamples[0];
  career.knowledgeCheck={prompt:'What makes a scope screenshot reproducible evidence?',choices:['A colorful trace alone','The measured value plus test point/reference, probe factor, scales/timebase/trigger, operating condition, and expected behavior','Only the automatic measurement readout','A phone photo with no labels'],answer:1,correct:'Correct. Context and settings let another person reconstruct and judge the measurement.',retry:'A trace is part of a test record. Include where, how, under what conditions, and compared with what expectation.',critical:false};

  // Week integration / practical identity.
  W.integration=W.integration||{};
  W.integration.title='Predict, configure, measure, compare, and document with the core bench trio';
  W.integration.brief='Use the DMM, current-limited supply, and oscilloscope to answer defined low-voltage questions. Predict first, configure safely, measure, compare with the expected result, and record enough setup information to reproduce the evidence.';
  W.integration.guided=[
    'Complete a pre-measurement checklist: question, expected result, instrument, mode/jack/reference, safe range, and stop condition.',
    'Demonstrate DMM voltage, resistance/continuity, and current connection logic; reset the current lead to V/Ω afterward.',
    'Configure a low-voltage bench supply with a justified current limit and interpret CV/CC behavior.',
    'Use a known waveform to verify probe/reference, attenuation, scale, timebase, coupling, and trigger.',
    'Calculate Vpp, period, and frequency manually before comparing with automatic measurements.',
    'Record expected versus measured values and one limitation that could affect each result.'
  ];
  W.integration.independent='Given a low-voltage board with an intermittent reset, design a DMM/supply/scope measurement sequence that separates excessive load current from a brief rail dip and produces a reproducible evidence record.';
  W.integration.evidence='Pre-power/measurement checklist, DMM connection evidence, CV/CC observation, annotated known waveform, manual Vpp/period/frequency calculation, predicted-versus-measured table, instrument settings, limitations, and conclusion.';
  W.integration.practiceCheck='A DMM shows 5.00 V but the board still resets for a very brief event. Explain why the reading does not rule out a transient rail dip and what scope evidence you would collect next.';

  // -------------------------------------------------------------------------
  // 3) Teaching Media — four Required resources; broad/specialist tools to Study.
  // -------------------------------------------------------------------------
  const R=C.teachingResourceIntegration;
  const A=C.teachingMediaArchitecture;
  const O=C.outsideLiteratureIntegration;
  C.sources=C.sources||{};
  const newSources={
    litFlukeDcVoltageW3:{title:'How to Measure DC Voltage with a Digital Multimeter',org:'Fluke',kind:'Manufacturer how-to article',url:'https://www.fluke.com/en-us/learn/blog/digital-multimeters/how-to-measure-dc-voltage-with-a-digital-multimeter'},
    litFlukeResistanceW3:{title:'How to Measure Resistance with a Digital Multimeter',org:'Fluke',kind:'Manufacturer how-to article',url:'https://www.fluke.com/en-us/learn/blog/digital-multimeters/how-to-measure-resistance'},
    keysightCvCcW3:{title:'Bench Power Supply Basics — Lesson 4: Constant Voltage and Constant Current Modes',org:'Keysight',kind:'Manufacturer lesson',url:'https://www.keysight.com/us/en/learn/course.bench-power-supply-basics.html'},
    tekTriggerW3:{title:'The Basics of an Oscilloscope Trigger',org:'Tektronix',kind:'Focused beginner video · 4:31',url:'https://www.tek.com/en/video/the-basics-of-an-oscilloscope-trigger'},
    tekScopeWebinarW3Study:{title:'How to Get the Most Out of Your Oscilloscope',org:'Tektronix',kind:'Optional deep-dive webinar · 46:26',url:C.sources.tekScopeWebinar?.url||'https://www.tek.com/en/video/webinar/how-to-get-the-most-out-of-your-oscilloscope'},
    afrotechScopePart2W3:{title:'Oscilloscope Tutorial Part 2 — Basic Usage',org:'Afrotechmods',kind:'Optional alternate explanation video',url:'https://www.youtube.com/watch?v=hUIgAu3QQWQ'}
  };
  Object.assign(C.sources,newSources);

  const media=(source,role,use,watchFor,gap)=>({source,role,use,watchFor,gap});
  W.integration.media=[
    media('litFlukeDcVoltageW3','Required · DMM manufacturer reading','Use this after Alfred teaches DMM voltage mode to reinforce COM/VΩ jacks and parallel connection.','Read only the DC-voltage setup/connection steps and the warning about leaving a lead in a current input. Focus on why voltage is measured across two points.','Alfred remains the primary teacher for resistance/continuity, current-mode series insertion, loading, and the complete three-mode connection model.'),
    media('keysightCvCcW3','Required · Focused bench-supply lesson','Use Keysight Lesson 4 only after Alfred explains CV and CC.','Open Bench Power Supply Basics and use Lesson 4: “Using & Understanding Constant Voltage and Constant Current Modes.” Focus on what determines the transition from CV to CC and what happens to output voltage. Ignore unrelated lessons for this Week 3 requirement.','Alfred supplies the low-voltage startup scenario, diagnostic interpretation, and safe stop-condition reasoning.'),
    media('tekScopeSetup','Required · Bounded oscilloscope setup reading','Use the Tektronix step-by-step setup chapter for the physical sequence after Alfred introduces the scope.','Read only the portions on Proper Grounding, Setting Controls, Connecting Probes, Compensating Probes, and basic Oscilloscope Measurement Techniques. Do not turn the rest of the Tek site into Week 3 homework.','Alfred supplies the known-waveform calculation, attenuation-mismatch scenario, and page-by-page beginner sequence.'),
    media('tekTriggerW3','Required · Focused trigger video','Use this dedicated trigger lesson at the trigger page.','Watch the full 4:31. Focus on source, level, slope, and why repeated acquisitions become stable. Stop when the player moves to unrelated content.','Alfred supplies the specific 0–3.3 V square-wave setup and retrieval practice.'),
    media('litFlukeResistanceW3','Study · DMM help','Use when resistance/continuity setup still feels uncertain.','Read the power-off/discharge guidance, V/Ω jack setup, and note about parallel paths affecting an in-circuit resistance reading.','Optional reinforcement only; no Week 3 completion requirement.'),
    media('tekScopeWebinarW3Study','Study · Deep oscilloscope explanation','Use if you want a longer walkthrough after completing the required scope pages.','This is a 46:26 broad webinar covering horizontal/acquisition controls, vertical controls, triggering, and probing. Do not treat the entire video as required; revisit the topic you need help with.','Alfred’s seven-page sequence and the short trigger lesson are the required path.'),
    media('afrotechScopePart2W3','Study · Alternate explanation','Use if you want a conversational second explanation of probes, vertical/horizontal scaling, and coupling.','Focus on probes, vertical/horizontal controls, and DC/AC coupling. This is older instructional media, so Alfred/Tektronix current manufacturer guidance controls modern safety and instrument-specific setup.','Optional alternate explanation; no completion obligation.'),
    media('litTekXyzScopes','Study · Broad oscilloscope primer','Use as a broad reference if you want more depth after the focused lesson.','Use only the section relevant to your current question; the full primer is not a Week 3 requirement.','Alfred and the bounded Tek setup chapter remain the first-pass path.'),
    media('bkVariableIsolatedAc','Study · Future service-bench breadth','Preserve this CETa breadth source for later service/safety review, not beginner bench operation.','Do not use line-level isolation/variation work as a Week 3 hands-on task. Review only when Alfred explicitly re-homes the competency.','Not Required in Week 3; low-voltage bench work remains the current practical boundary.'),
    media('digiKeyEsr70','Study · Future component-test breadth','Preserve ESR-meter awareness for later component troubleshooting.','Use only as optional breadth now. Do not treat ESR measurement as a Week 3 core-instrument requirement.','Re-home with capacitor/component diagnostics.'),
    media('digiKeyLcrMeter','Study · Future component-test breadth','Preserve LCR-meter awareness for later reactive-component work.','Use only as optional breadth now. Do not make inductance/capacitance meter operation a Week 3 requirement.','Re-home after capacitance, inductance, reactance, and impedance are taught.'),
    media('neetsTestEquipment','Study · Test-equipment breadth','Use as a broad reference only if you want additional historical/test-equipment context.','Read only the instrument family relevant to your current question.','Not Required.'),
    media('tekSignalGenerator','Study · Future stimulus tool','Use as optional awareness of what a signal generator does.','Do not treat signal-generator setup as a Week 3 completion task.','Re-home when source/stimulus characterization is needed.'),
    media('ietDecadeBoxes','Study · Future substitution tool','Use as optional awareness only.','Do not make substitution boxes part of the Week 3 core bench sequence.','Re-home with component substitution/troubleshooting.'),
    media('keysightElectronicLoadBasics','Study · Future load-testing tool','Use as optional awareness of controlled electronic loads.','Focus only on the concept of a controllable load; do not add advanced load modes to Week 3.','Re-home with power-supply characterization.'),
    media('litAdiGroundingAgain','Study · Deeper grounding reading','Use only if you need more background after the low-voltage reference/grounding lesson.','Keep the current Week 3 practical boundary: ordinary low-voltage bench circuits and manufacturer-approved reference connections.','Advanced grounding nuance is optional Study.'),
    media('stacoVariableTransformer','Engineering Library · Professional reference','Keep variable-AC transformer documentation in the professional library rather than beginner coursework.','Reference only; no Week 3 hands-on use.','Not part of the required learner path.')
  ];

  // Remove every old targetWeek=3 placement. Future uses of the same original source stay intact.
  if(R?.placements) R.placements=R.placements.filter(p=>Number(p.targetWeek)!==3);
  const place=(source,lesson,segment,{requirement='supporting',mediaType='literature',presentationRole='reinforcement',display='compact',relationship='Supports this concept',afterAction='Return to Alfred and explain the concept without the source open.'}={})=>({assignmentWeek:3,source,targetWeek:3,lesson,segment,relationship,presentationRole,display,inline:true,requirement,mediaType,afterAction,reason:'v16.3.71 Week 3 focused instructional redesign — exact point-of-use placement.'});
  const w3Placements=[
    place('litFlukeDcVoltageW3',0,'w03-dmm-modes-connections',{requirement:'required',presentationRole:'core',display:'primary',afterAction:'Close the article and explain why voltage uses COM + V/Ω and a parallel connection, then name the danger of leaving the lead in a current jack.'}),
    place('keysightCvCcW3',0,'w03-supply-cv-cc',{requirement:'required',mediaType:'video',presentationRole:'demonstration',display:'primary',afterAction:'Explain in your own words why a 5 V setpoint can produce less than 5 V when the current limit is controlling.'}),
    place('tekScopeSetup',0,'w03-probe-reference-discipline',{requirement:'required',presentationRole:'core',display:'primary',afterAction:'Use the setup sequence to verify grounding/reference, probe connection, compensation, and basic controls on a known waveform.'}),
    place('tekTriggerW3',0,'w03-trigger-stable-display',{requirement:'required',mediaType:'video',presentationRole:'demonstration',display:'primary',afterAction:'Without replaying the video, define trigger source, level, and slope and choose them for a 0–3.3 V square wave.'}),
    place('litFlukeResistanceW3',0,'w03-dmm-modes-connections',{requirement:'supporting',presentationRole:'review',relationship:'Optional resistance-mode help',afterAction:'State why resistance mode requires a de-energized circuit and why parallel paths can change the reading.'}),
    place('afrotechScopePart2W3',0,'w03-scope-voltage-over-time',{requirement:'supporting',mediaType:'video',presentationRole:'reinforcement',relationship:'Optional alternate explanation',afterAction:'Return to Alfred and identify which control changes vertical scale, horizontal scale, and coupling.'}),
    place('tekScopeWebinarW3Study',0,'w03-measurement-limits',{requirement:'supporting',mediaType:'video',presentationRole:'review',relationship:'Optional deep explanation',afterAction:'Use only the portion that answers your current scope question, then return to the Week 3 page.'}),
    place('litTekXyzScopes',0,'w03-measurement-limits',{requirement:'supporting',presentationRole:'review',relationship:'Optional broad primer',afterAction:'Use the primer as reference, then explain the specific instrument limitation you were checking.'})
  ];
  if(R?.placements)R.placements.push(...w3Placements);

  if(A?.assignments){
    const mk=(source,destination,requirement,studyCategory='',track='ceta',meta=null)=>({key:`3:${source}`,assignmentWeek:3,source,destination,requirement,studyWeek:3,studyCategory,libraryCategory:'',track,requiredMeta:meta,originalRequirement:requirement,originalRole:destination==='classroom'?(requirement==='required'?'Required':'Supporting'):(destination==='library'?'Engineering Library':'Study'),placements:w3Placements.filter(p=>p.source===source)});
    const reqMeta={
      litFlukeDcVoltageW3:{scope:'Fluke DC-voltage setup only: COM/VΩ jacks, parallel measurement, current-jack warning.',why:'Manufacturer-grounded DMM setup reinforces Alfred’s connection model.',focus:'DC-voltage jack and connection discipline.',after:'Explain the voltage-mode connection without the article open.',completion:'Read the bounded assigned portion once.'},
      keysightCvCcW3:{scope:'Keysight Bench Power Supply Basics — Lesson 4 only.',why:'Dedicated manufacturer lesson directly teaches CV/CC behavior.',focus:'How load demand and current limit determine CV versus CC operation.',after:'Interpret one Alfred current-limit scenario in your own words.',completion:'Complete Lesson 4 only; other course lessons are not Week 3 requirements.'},
      tekScopeSetup:{scope:'Proper Grounding; Setting Controls; Connecting Probes; Compensating Probes; basic Measurement Techniques.',why:'Manufacturer step-by-step setup directly supports safe scope onboarding.',focus:'Reference/ground, probe connection/compensation, and first controls.',after:'Configure a known low-voltage waveform and record the setup.',completion:'Read only the bounded subsections listed on the Week 3 card.'},
      tekTriggerW3:{scope:'Full 4:31 focused trigger lesson.',why:'Short dedicated lesson isolates the trigger concept instead of assigning a long general webinar.',focus:'Trigger source, level, slope, and display stability.',after:'Choose a trigger for a 0–3.3 V, 1 kHz square wave.',completion:'Watch the focused lesson once.'}
    };
    A.assignments['3:litFlukeDcVoltageW3']=mk('litFlukeDcVoltageW3','classroom','required','', 'ceta',reqMeta.litFlukeDcVoltageW3);
    A.assignments['3:keysightCvCcW3']=mk('keysightCvCcW3','classroom','required','', 'ceta',reqMeta.keysightCvCcW3);
    A.assignments['3:tekTriggerW3']=mk('tekTriggerW3','classroom','required','', 'ceta',reqMeta.tekTriggerW3);
    // Keep the existing canonical Tek setup source required because it also has legitimate later reuse.
    A.assignments['3:tekScopeSetup']={...(A.assignments['3:tekScopeSetup']||mk('tekScopeSetup','classroom','required','', 'ceta',reqMeta.tekScopeSetup)),destination:'classroom',requirement:'required',studyCategory:'',track:'ceta',requiredMeta:reqMeta.tekScopeSetup,placements:w3Placements.filter(p=>p.source==='tekScopeSetup')};

    const studyDefs={
      litFlukeResistanceW3:['DMM Help','ceta'],tekScopeWebinarW3Study:['Deep Oscilloscope Explanation','ceta'],afrotechScopePart2W3:['Alternate Explanation','ceta'],litTekXyzScopes:['Broad Oscilloscope Primer','ceta'],bkVariableIsolatedAc:['Future Service-Bench Breadth','ceta'],digiKeyEsr70:['Future Component-Test Breadth','ceta'],digiKeyLcrMeter:['Future Component-Test Breadth','ceta'],neetsTestEquipment:['Tool / Reference','ceta'],tekSignalGenerator:['Future Stimulus Tool','ceta'],ietDecadeBoxes:['Future Substitution Tool','ceta'],keysightElectronicLoadBasics:['Future Load-Testing Tool','ceta'],litAdiGroundingAgain:['Deeper Grounding','career']
    };
    for(const [source,[cat,track]] of Object.entries(studyDefs)){
      const old=A.assignments[`3:${source}`];
      A.assignments[`3:${source}`]={...(old||mk(source,'study','supporting',cat,track)),key:`3:${source}`,assignmentWeek:3,source,destination:'study',requirement:'supporting',studyWeek:3,studyCategory:cat,libraryCategory:'',track,requiredMeta:null,originalRequirement:'supporting',originalRole:'Study',placements:w3Placements.filter(p=>p.source===source)};
    }
    // Professional library stays library-only.
    if(A.assignments['3:stacoVariableTransformer']) A.assignments['3:stacoVariableTransformer']={...A.assignments['3:stacoVariableTransformer'],destination:'library',requirement:'supporting',placements:[]};
    // Sources with legitimate future required placements retain their canonical architecture role. They are simply absent from Week 3 integration/media.
    for(const source of ['rsSpectrumBasics','tekScopeWebinar','litTekAbcProbes']){
      if(A.assignments[`3:${source}`])A.assignments[`3:${source}`].placements=(R?.placements||[]).filter(p=>Number(p.assignmentWeek)===3&&p.source===source);
    }
    Object.values(A.assignments).forEach(a=>{if(a&&Number(a.assignmentWeek)===3&&a.source)a.placements=(R?.placements||[]).filter(p=>Number(p.assignmentWeek)===3&&p.source===a.source);});
  }

  if(R?.placements){
    R.byTargetWeek={};R.bySource={};R.byAssignment={};
    R.placements.forEach(p=>{
      (R.byTargetWeek[p.targetWeek]||(R.byTargetWeek[p.targetWeek]=[])).push(p);
      (R.bySource[p.source]||(R.bySource[p.source]=[])).push(p);
      const k=`${p.assignmentWeek}:${p.source}`;(R.byAssignment[k]||(R.byAssignment[k]=[])).push(p);
    });
    R.week3RedesignRevision='2026-09-27-v16.3.71-core-bench-measurement';
    R.week3RequiredSourceIds=['litFlukeDcVoltageW3','keysightCvCcW3','tekScopeSetup','tekTriggerW3'];
  }

  // Exact literature instructions for the two Required articles and optional resistance helper.
  if(O){
    O.sources=O.sources||{};
    O.sources.litFlukeDcVoltageW3={title:newSources.litFlukeDcVoltageW3.title,org:'Fluke',author:'Fluke',kind:'Manufacturer how-to article',url:newSources.litFlukeDcVoltageW3.url,access:'Free online',literatureType:'Required Manufacturer Reading',provenance:'Current Fluke DMM measurement guidance.',verified:'2026-09-27'};
    O.sources.litFlukeResistanceW3={title:newSources.litFlukeResistanceW3.title,org:'Fluke',author:'Fluke',kind:'Manufacturer how-to article',url:newSources.litFlukeResistanceW3.url,access:'Free online',literatureType:'Optional Study Reading',provenance:'Current Fluke resistance-measurement guidance.',verified:'2026-09-27'};
    O.sources.tekScopeSetup={...(O.sources.tekScopeSetup||C.sources.tekScopeSetup||{}),title:C.sources.tekScopeSetup?.title||'How to Use an Oscilloscope and Probe — Step-by-Step Tutorial',org:'Tektronix',url:C.sources.tekScopeSetup?.url,verified:'2026-09-27'};
    O.literaturePlacements=(O.literaturePlacements||[]).filter(p=>Number(p.targetWeek)!==3);
    const asLit=(p,meta)=>p?({...p,...meta,meta:O.sources[p.source]||C.sources[p.source]||{}}):null;
    const rows=[
      asLit(w3Placements.find(p=>p.source==='litFlukeDcVoltageW3'),{literatureType:'Required Manufacturer Reading',readUse:'Read the DC-voltage setup steps only: COM and V/Ω inputs, selecting DC volts, and placing probes across the two test points. Also read the warning about trying to measure voltage with the lead left in an A/mA input.',focus:'Why voltage mode connects in parallel and why jack selection is a safety decision.',afterReading:'Close the article and describe a safe 5 V rail measurement from memory.',why:'A short manufacturer procedure reinforces Alfred’s DMM connection model without adding a second course.'}),
      asLit(w3Placements.find(p=>p.source==='tekScopeSetup'),{literatureType:'Required Manufacturer Primer',readUse:'Use only these named portions: Proper Grounding, Setting Controls, Connecting Probes, Compensating Probes, and basic Oscilloscope Measurement Techniques.',focus:'The physical setup sequence from safe reference through probe compensation and first measurements.',afterReading:'Configure a known low-voltage waveform and record probe factor, coupling, volts/div, time/div, and trigger.',why:'The bounded Tek chapter gives authentic instrument setup without requiring a full oscilloscope textbook.'}),
      asLit(w3Placements.find(p=>p.source==='litFlukeResistanceW3'),{literatureType:'Optional Study Reading',readUse:'Read the power-off/discharge guidance, V/Ω input setup, and note explaining how parallel circuit paths can affect in-circuit resistance.',focus:'Why resistance mode needs a de-energized circuit and why an in-circuit reading may not equal the component value.',afterReading:'Explain one case where you would lift a component lead or otherwise isolate the part before trusting resistance.',why:'Optional manufacturer reinforcement for a common beginner meter mistake.'})
    ].filter(Boolean);
    O.literaturePlacements.push(...rows);
    O.byPlacement={};O.bySource={};
    const lk=p=>`${p.assignmentWeek}:${p.source}:${p.targetWeek}:${p.lesson}:${p.segment}`;
    O.literaturePlacements.forEach(p=>{O.byPlacement[lk(p)]=p;(O.bySource[p.source]||(O.bySource[p.source]=[])).push(p);});
    O.sourceIds=[...new Set([...Object.keys(O.sources),...Object.keys(O.bySource)])];
    O.placementCount=O.literaturePlacements.length;O.uniqueSourceCount=O.sourceIds.length;
    O.week3RedesignRevision='2026-09-27-v16.3.71-bounded-reading-path';
  }

  // -------------------------------------------------------------------------
  // 4) CETa Study Guide — Chapter 19 becomes point-of-use Study, not one block.
  // -------------------------------------------------------------------------
  const SG=window.ALFRED_CETA_STUDY_GUIDE||C.cetaStudyGuide;
  if(SG?.records){
    const parent=SG.records.find(r=>r.id==='sg-w03-ch19-p165-175');
    if(parent){
      parent.estimatedMinutes=28;
      parent.purpose='Optional Chapter 19 breadth map. Use the exact Week 3 contextual slices at the lesson page; do not read pp.165–175 as one undifferentiated assignment.';
      parent.focus='Core Week 3: test-equipment purpose/categories, selected DMM/loading material, and oscilloscope/probe/trigger material. Specialist analyzers and line-level service tools remain future/reference breadth.';
      parent.after='Use the contextual lesson cards first. Return to the broader chapter only when you deliberately want CETa breadth review.';
      parent.safelySkim='Printed p.175 is NOT a Week 3 quiz assignment. It mixes analog-meter, transistor/inductor-test, isolation-transformer, and other material Alfred has not made part of the focused Week 3 path.';
      parent.placements=[];
      parent.studyCategory='Chapter 19 Breadth Map';
      parent.notes='v16.3.71: context slices teach the current week; the parent remains optional Study/reference.';
    }
    SG.records=SG.records.filter(r=>!String(r.id||'').startsWith('sg-w03-v16371-'));
    const slice=(id,pages,focus,after,placements,{minutes=5,safelySkim='',purpose='Use this exact Study Guide slice only after Alfred teaches the same concept.'}={})=>({id,week:3,chapter:19,pageGroups:pages,classification:'study',contextOnly:true,estimatedMinutes:minutes,purpose,focus,after,studyCategory:'Contextual CETa Study',track:'ceta',placements,keywords:'week 3 test equipment DMM voltmeter loading oscilloscope probe trigger measurement',competencyDomains:['8'],safelySkim,authorityNote:'Current manufacturer documentation controls modern instrument safety, ratings, grounding, and model-specific operation.',errataIds:[],crossovers:[],role:'study',notes:'v16.3.71 contextual Study slice; no separate completion obligation.'});
    SG.records.push(
      slice('sg-w03-v16371-p165-purpose',[[165,165]],'Read the Chapter 19 opening on the purpose and categories of test equipment. Focus on measurement versus stimulus/component-test roles—not the specialist tools themselves.','Name the measurement question first, then choose DMM, supply, or scope from the evidence needed.',[{week:3,lesson:0,segment:'w03-question-before-instrument',relationship:'Test-equipment purpose/context'}],{minutes:4}),
      slice('sg-w03-v16371-p167-169-dmm',[[167,169]],'Read only the portions on voltmeters, meter loading/input resistance, ohmmeters/ammeters, and digital multimeters.','Explain one loading error and the correct DMM connection for voltage, resistance, and current.',[{week:3,lesson:0,segment:'w03-dmm-modes-connections',relationship:'DMM and loading companion'},{week:3,lesson:0,segment:'w03-measurement-limits',relationship:'Reuse loading/limits portion'}],{minutes:9,safelySkim:'Skim or defer deep analog meter-movement/multiplier calculations and construction details; those are preserved for later CETa breadth review.'}),
      slice('sg-w03-v16371-p172-173-scope',[[172,173]],'Begin where the “Oscilloscopes” section starts on printed p.172 and continue through basic oscilloscope operation on p.173.','Relate the book’s scope controls to Alfred’s volts/div, time/div, known-waveform, and manual Vpp/period/frequency model.',[{week:3,lesson:0,segment:'w03-scope-voltage-over-time',relationship:'Oscilloscope fundamentals'}],{minutes:8,safelySkim:'Do not turn the spectrum-analyzer comparison into a Week 3 requirement; that competency is deferred to the later RF/spectrum week.'}),
      slice('sg-w03-v16371-p173-probe-trigger',[[173,173]],'Use only the p.173 portions on scope loading, ×10 probe behavior, triggering, and basic operation.','Explain why a ×10 probe can reduce loading, why the scope channel must match the probe factor, and what the trigger does.',[{week:3,lesson:0,segment:'w03-probe-reference-discipline',relationship:'Probe/loading companion'},{week:3,lesson:0,segment:'w03-trigger-stable-display',relationship:'Trigger companion'}],{minutes:6,safelySkim:'Skip the spectrum-analyzer comparison for now. Printed p.175 is not assigned as a Week 3 quiz.'})
    );
    const oldStudy=SG.studyForWeek?.bind(SG);
    SG.studyForWeek=week=>Number(week)===3?SG.records.filter(r=>Number(r.week)===3&&r.classification!=='required'&&!r.contextOnly):(oldStudy?oldStudy(week):SG.records.filter(r=>Number(r.week)===Number(week)&&r.classification!=='required'));
    SG.recordsForSegment=(week,lesson,segment)=>SG.records.filter(r=>(r.placements||[]).some(p=>Number(p.week)===Number(week)&&Number(p.lesson)===Number(lesson)&&String(p.segment)===String(segment)));
    SG.week3RedesignRevision='2026-09-27-v16.3.71-contextual-ch19-study';
  }

  // -------------------------------------------------------------------------
  // 5) Assessments — make Week 3 prove instrument decisions, not mostly Ohm-law drills.
  // -------------------------------------------------------------------------
  const AS=window.ALFRED_ASSESSMENT;
  if(AS?.questions){
    const sourceAudit=(locator,sources=[])=>({status:'week3-v16.3.71-reviewed',date:'2026-09-27',note:'Original Alfred scenario reviewed for prerequisite stage, keyed answer, distractors, and direct Week 3 instructional alignment. Not an official ETA exam item.',sources:[...sources,{title:'Alfred Week 3 focused instructional redesign',url:'',locator}]});
    const q=(id,track,standards,prompt,choices,answer,explanation,skill,reviewSectionId,reviewSectionTitle,sourceRef)=>({id,track,standards,prompt,choices,answer,explanation,difficulty:'Foundation',kind:'MCQ',skill,questionClass:'substantive',masteryEvidence:true,evidenceWeight:0.55,sourceRef,minWeek:3,family:`v16371-${id}`,reviewSectionId,reviewSectionTitle,reviewStandardCodes:standards.map(s=>s.replace(/^CETA:|^CAREER:/,'')),reviewConcept:reviewSectionTitle,reviewRouteVersion:'16.3.71',audit:sourceAudit(sourceRef)});
    const additions=[
      q('CQ1196','CETa',['CETA:8.3','CETA:8.4'],'You need to measure a resistor’s resistance on a board. Which setup is appropriate?',['Remove power, discharge stored energy where applicable, use COM and V/Ω, then measure the component/path','Leave the board powered and use the A jack','Place the meter in series while in voltage mode','Short the resistor with the current input first'],0,'Resistance/continuity mode uses the meter’s internal test source; the circuit should be de-energized and stored energy handled safely.','Application','w03-dmm-modes-connections','DMM modes are different measurement circuits','Fluke resistance measurement guidance'),
      q('CQ1197','CETa',['CETA:8.3','CETA:8.4'],'How should a DMM normally be connected to measure branch current?',['Open the branch and insert the meter in series using the correct current input/range','Place the current input directly across the power supply','Leave the red lead in V/Ω and touch only one node','Use resistance mode on the powered branch'],0,'Current must flow through the meter shunt, so the meter becomes part of the series path.','Application','w03-dmm-modes-connections','DMM modes are different measurement circuits','Week 3 DMM current-measurement model'),
      q('CQ1198','CETa',['CETA:8.12','CETA:8.12.1'],'A square wave spans 4 vertical divisions at 0.5 V/div and 5 horizontal divisions per cycle at 200 µs/div. What are Vpp and frequency?',['2.0 Vpp and 1 kHz','8.0 Vpp and 5 kHz','2.0 Vpp and 200 Hz','0.5 Vpp and 1 MHz'],0,'Vpp = 4×0.5 V = 2 V. T = 5×200 µs = 1 ms, so f = 1/T = 1 kHz.','Calculation','w03-scope-voltage-over-time','Oscilloscope: turn voltage over time into a readable picture','Tektronix oscilloscope measurement techniques'),
      q('CQ1199','CETa',['CETA:8.12.1'],'A 3.3 V node reads about 3.29 V on a DMM but 0.33 V on the oscilloscope. What should you check before changing the circuit?',['Whether the probe attenuation switch and scope channel probe factor disagree by 10×','Whether the bench supply is set to exactly 33 V','Whether the resistor color code changed','Whether the screen brightness is too low'],0,'A clean factor-of-ten amplitude error strongly suggests probe/channel attenuation mismatch.','Troubleshooting','w03-probe-reference-discipline','Probe and reference discipline','Tektronix probe setup and compensation guidance'),
      q('CQ1200','CETa',['CETA:8.12.1'],'What is the main purpose of compensating an adjustable passive oscilloscope probe on the scope’s reference square wave?',['Match the probe’s frequency response to the oscilloscope input so waveform shape is not distorted','Increase the circuit supply voltage','Make the ground clip electrically floating','Convert every probe to 1× attenuation'],0,'Probe compensation adjusts the probe/scope input response so a known square wave is represented correctly.','Understanding','w03-probe-reference-discipline','Probe and reference discipline','Tektronix probe compensation guidance'),
      q('CQ1201','CETa',['CETA:8.12.1'],'When is AC coupling useful on an oscilloscope in this Week 3 context?',['After the DC level is understood, when you intentionally want to block the DC component to inspect a small AC variation such as ripple','Whenever you need the absolute DC rail voltage','To make the probe ground float from protective earth','To measure resistance on an energized circuit'],0,'AC coupling removes the DC component from the displayed channel, so it can help inspect small ripple but no longer shows the absolute rail level.','Understanding','w03-probe-reference-discipline','Probe and reference discipline','Tektronix oscilloscope coupling guidance'),
      q('CQ1202','CETa',['CETA:8.12'],'A board resets because the 3.3 V rail may dip for only 20 µs. Which instrument is the best first tool for observing that brief event?',['Oscilloscope','DMM in resistance mode','Ohmmeter on the powered rail','A decade resistance box'],0,'A brief time-domain dip can be averaged or missed by a DMM; an oscilloscope is designed to display voltage versus time.','Application','w03-question-before-instrument','Start with the question, not the instrument','Week 3 instrument-selection model'),
      q('CQ1203','Career',['CAREER:C3.4'],'A DMM display shows 5.0000 V. Which statement is valid?',['The extra digits show resolution, but accuracy still depends on the instrument specification and conditions','The voltage is proven accurate to 0.0001 V','The meter cannot load any circuit','No expected tolerance is needed because the display has five digits'],0,'Resolution is the smallest displayed change; accuracy describes closeness to the true value within specification.','Understanding','career-w03-reproducible-evidence','Preserve settings, uncertainty, and context','Week 3 measurement-quality model')
    ];
    const ids=new Set(additions.map(x=>x.id));
    AS.questions=AS.questions.filter(x=>!ids.has(x.id));
    AS.questions.push(...additions);
    if(AS.meta){
      AS.meta.questionCount=AS.questions.length;
      AS.meta.cetaQuestionCount=AS.questions.filter(x=>x.track==='CETa').length;
      AS.meta.careerQuestionCount=AS.questions.filter(x=>x.track==='Career').length;
      AS.meta.gradedQuestionCount=AS.questions.filter(x=>x.questionClass==='substantive').length;
      AS.meta.orientationQuestionCount=AS.questions.filter(x=>x.questionClass!=='substantive').length;
    }
    const test=(AS.weeklyTests||[]).find(x=>Number(x.week)===3);
    if(test){
      test.title='Week 03 Mastery — DMM, Current-Limited Supply & Oscilloscope';
      test.ceta=['8.3','8.4','8.6','8.12','8.12.1'];
      test.career=['C3.1','C3.2','C3.3','C3.4','C3.6'];
      test.count=12;test.mix={CETa:8,Career:4};test.target=80;
      test.questionIds=['CQ1088','CQ1196','CQ1197','CQ1154','CQ1155','CQ1198','CQ1199','CQ1090','CQ1156','CQ1089','CQ1202','CQ1203'];
      test.alignment='Focused Week 3 mastery: safe DMM setup, CV/CC supply reasoning, scope setup/measurement/trigger, loading/limitations, and technician evidence. Specialist instruments are not Week 3 mastery requirements.';
      test.optional=true;
    }
    const labQuiz=(AS.labQuizzes||[]).find(x=>x.id==='LAB-003');
    if(labQuiz){
      labQuiz.title='LAB-003 Check — Safe Core Bench Setup';
      labQuiz.ceta=['8.3','8.4','8.12','8.12.1'];labQuiz.career=['C3.1','C3.2','C3.3'];
      labQuiz.count=5;labQuiz.mix={CETa:3,Career:2};labQuiz.target=80;
      labQuiz.questionIds=['CQ1197','CQ1154','CQ1155','CQ1200','CQ1156'];
      labQuiz.alignment='Practical setup check for current-mode insertion/lead reset, supply current limiting, passive-probe compensation, and safe conventional-scope reference discipline.';
      labQuiz.optional=true;
    }
  }

  // -------------------------------------------------------------------------
  // 6) LAB-003 — prediction → setup → measurement → comparison → evidence.
  // -------------------------------------------------------------------------
  const AC=window.ALFRED_ACADEMIC;
  if(AC?.labs){
    const lab=AC.labs.find(x=>x.id==='LAB-003');
    if(lab){
      lab.objective='Use a DMM, current-limited bench supply, and oscilloscope safely to make predicted, reproducible low-voltage measurements; distinguish conceptual mastery from physical instrument proficiency.';
      lab.equipment='DMM, low-voltage bench supply, oscilloscope, passive probe, known low-voltage waveform source or scope compensation output, resistive load/components as specified by the lab.';
      const physical=[
        'Inspect the DMM leads, oscilloscope probe/reference lead, supply leads, ratings, and physical condition. Identify COM, V/Ω, current inputs, probe attenuation switch, and the approved circuit reference.',
        'Create a prediction table before power: expected DC voltages, one de-energized resistance/continuity result, expected current range, and known-waveform Vpp/period/frequency.',
        'Measure DC voltage with the DMM using COM + V/Ω and a parallel connection. Compare predicted versus measured value and record tolerance/limitation.',
        'With circuit power removed, demonstrate resistance/continuity measurement. Explain why the circuit is de-energized and how parallel paths could affect the reading.',
        'Demonstrate a safe low-current measurement by opening the specified path and inserting the DMM in series with the correct current input/range. Afterward, return the red lead to the V/Ω jack and record that reset on the checklist.',
        'Configure the bench supply to the specified low voltage and a justified startup current limit before connection. Power the load, record voltage/current and CV status, then use the lab’s defined safe load condition to reach CC intentionally. Explain why voltage changes in CC and restore the normal condition.',
        'Connect the oscilloscope to a known low-voltage waveform using the approved reference. Match probe attenuation/channel factor and compensate/check the passive probe if the equipment supports it.',
        'Fit the known waveform with deliberate volts/div and time/div settings. Stabilize it with an edge trigger and record source, level, and slope.',
        'Calculate Vpp, period, and frequency manually from the graticule before comparing with automatic scope measurements.',
        'Complete the evidence record: expected result, measured result, instrument/mode, test point/reference, probe factor, coupling, scales/timebase/trigger, one relevant limitation, conclusion, and one safe stop condition.'
      ];
      lab.procedure=[...physical];
      lab.evidence='Pre-measurement checklist + predicted-versus-measured table + DMM current-mode/lead-reset evidence + CV/CC observation + compensated/known waveform + annotated scope capture + manual Vpp/period/frequency calculation + settings/limitations/conclusion.';
      lab.career='Direct preparation for electronics technician, hardware test, validation, and bench bring-up work: choose the measurement from the question and preserve reproducible evidence.';
      lab.physical={...(lab.physical||{}),equipment:lab.equipment,procedure:[...physical],evidence:lab.evidence,completion:'Full academic completion + physical core-instrument proficiency evidence'};
      lab.virtual={...(lab.virtual||{}),tool:'Tinkercad Circuits + Falstad',equipment:'Web browser; virtual low-voltage circuits and waveform source.',procedure:[
        'Create the same prediction table used by the physical route before opening the virtual instruments.',
        'Use Tinkercad/Falstad to practice voltage, resistance/continuity reasoning, and the difference between voltage-mode and current-mode connection. Do not claim physical jack/lead proficiency from simulation.',
        'Simulate current limiting or a current-constrained source/load condition and explain the CV/CC concept in writing.',
        'Use a virtual scope on a known waveform. Choose vertical scale/timebase, stabilize or align the waveform as the simulator allows, and calculate Vpp, period, and frequency manually.',
        'Change one source parameter, predict the new waveform first, then verify it in the simulator.',
        'Submit the predicted-versus-observed table, annotated waveform, calculations, and a checklist naming the physical skills that remain unverified: lead placement, jack selection, probe compensation, safe reference attachment, and bench-control handling.'
      ],evidence:'Prediction table + virtual-instrument screenshots + annotated waveform + manual calculations + physical-skill gap checklist.',completion:'Full academic/concept completion',verification:'Simulation does not establish physical DMM lead/jack handling, bench-supply control handling, passive-probe compensation, or real probe/reference technique. Add physical evidence when equipment is available.'};
      lab.pathRule='Choose one route for scheduled academic completion. Simulation can prove conceptual planning and interpretation; only the physical route can establish hands-on DMM lead/jack, supply-control, and oscilloscope probe/reference proficiency.';
      lab.week3Revision='2026-09-27-v16.3.71-predict-configure-measure-compare-document';
    }
  }

  // -------------------------------------------------------------------------
  // 7) Release metadata / scope accounting.
  // -------------------------------------------------------------------------
  W.week3InstructionalRevision='2026-09-27-v16.3.71-core-bench-measurement-redesign';
  W.week3TeachingModel='Question → expectation → instrument → safe setup → known-good check → measurement → limitation check → decision → reproducible record.';
  C.meta=C.meta||{};
  C.meta.week3InstructionalRevision=W.week3InstructionalRevision;
  C.meta.week3PrimaryCetaTeachingSectionCount=7;
  C.meta.week3CareerTeachingSectionCount=6;
  C.meta.week3RequiredTeachingMediaCount=4;
  C.meta.week3StudyGuideContextSliceCount=4;
  C.meta.week3ActiveSemanticTaskCount=2;
  C.meta.week3DeferredSemanticTaskCount=ceta.deferredSemanticTasks.length;
  C.meta.week3DeferredCompetencyFragments=ceta.deferredCompetencies;
  C.meta.week3CalendarDatesChanged=false;
  C.meta.week3CurriculumScope='DMM setup/safety/loading, current-limited bench supply CV/CC, oscilloscope scale/probe/reference/trigger, waveform measurement, and measurement-system limitations.';
  C.meta.week3RedesignVerdict='Focused Week 3 path teaches the three core bench tools deeply; specialist instruments remain preserved for Study or later natural weeks.';
})();
