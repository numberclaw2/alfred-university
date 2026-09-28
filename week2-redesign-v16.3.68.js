/* AU-ESET 301 — v16.3.68 Week 2 focused instructional redesign
   Scope: Week 2 only. Load after the existing curriculum/media/Study Guide repair layers.
   Goals: beginner-first teaching, coherent section flow, reduced extraneous load,
   section-specific Teaching Media, exact Study Guide slicing, and preserved progress IDs.
*/
(()=>{
  const C=window.ALFRED_CURRICULUM;
  if(!C?.modules?.length)return;
  const W=C.modules.find(m=>Number(m.week)===2);
  if(!W?.lessons?.length)return;
  const ceta=W.lessons[0],career=W.lessons[1];
  const originalWeek2SemanticTasks=[...((ceta.semanticTeaching?.length?ceta.semanticTeaching:ceta.integrated?.semanticTasks)||[])].map(task=>({...task}));

  // ---------------------------------------------------------------------------
  // 1) Week 2 learner-facing curriculum: one coherent DC-network story.
  // ---------------------------------------------------------------------------
  ceta.title='DC resistor networks: series, parallel, KCL/KVL, and voltage dividers';
  ceta.objectives=[
    'Identify true series and parallel relationships from nodes and current paths, not drawing shape.',
    'Calculate equivalent resistance, branch current, and resistor voltage drops in DC networks.',
    'Use KCL and KVL as conservation checks and as tools for solving unknown circuit quantities.',
    'Reduce a mixed series/parallel network step by step and redraw after each simplification.',
    'Derive an unloaded voltage divider, then predict how a connected load changes the output.'
  ];
  ceta.sections=[
    {title:'Read the circuit before touching the math',teach:'Series and parallel are connection relationships, not drawing styles. A node is every point joined by ideal wire, even when the wire bends or stretches across the page. A branch is one path between nodes. Two components are truly in series only when the same current is forced through both with no branch that lets current split between them. Two components are truly in parallel only when both of their terminals connect to the same two nodes. Start every network problem by labeling nodes and tracing paths before choosing a formula.',remember:'Topology first: prove series by one shared current path; prove parallel by the same two nodes.'},
    {title:'Series circuits: one path means one current',teach:'In a series path there is nowhere for current to split, so the same current passes through every resistor. The equivalent resistance is the sum of the resistor values because each resistor adds another opposition along that one path. Once total current is known, Ohm’s law gives each individual voltage drop. Those drops must add back to the source voltage; that is the first built-in reality check.',remember:'Series: same current; resistances add; individual voltage drops add to the source.'},
    {title:'Parallel circuits: the same two nodes mean the same voltage',teach:'Parallel branches begin and end at the same two nodes, so every branch has the same voltage across it. Current can split among the branches according to their resistance, then recombine. The equivalent resistance must be lower than the smallest individual branch resistance because the source has gained additional current paths. If your calculated parallel equivalent is larger than the smallest branch, stop and repair the calculation before continuing.',remember:'Parallel: same voltage; branch currents add; equivalent resistance is smaller than the smallest branch.'},
    {title:'KCL: current cannot disappear at a node',teach:'Kirchhoff’s Current Law is conservation of charge written as a circuit rule. In steady operation, charge does not continually pile up at an ordinary node, so the total current entering must equal the total current leaving. Begin with the physical question before writing an equation: if 5 mA arrives at a junction and 2 mA leaves through one branch, the remaining outgoing branches must account for the other 3 mA. The compact algebraic form is ΣI = 0 when entering and leaving currents use opposite signs.',remember:'KCL asks one question at a junction: where did all of the current go?'},
    {title:'KVL: every voltage rise and drop is accounted for around a loop',teach:'Kirchhoff’s Voltage Law is conservation of energy around a closed electrical path. If a source raises electric potential by 12 V, the component voltage drops around that complete loop must account for the same 12 V. Choose a loop direction, mark each polarity, and keep one sign convention. A negative calculated value does not mean the circuit is impossible; it usually means the real polarity or current direction is opposite the direction you assumed.',remember:'KVL asks one question around a loop: do the signed rises and drops return to the starting voltage?'},
    {title:'Mixed networks: simplify, redraw, solve, and work backward',teach:'A mixed network becomes manageable when you reduce only one obvious series or parallel group at a time. First label the nodes. Second, identify one subnetwork whose relationship is certain. Third, replace that group with its equivalent resistance. Fourth, redraw the circuit instead of trying to hold the changed topology in your head. Repeat until the source sees one equivalent resistance. Solve total current, then work backward through your reductions to recover branch currents and component voltages. Finish with KCL and KVL checks.',remember:'Do not solve the whole drawing at once. Collapse one proven relationship, redraw, and repeat.'},
    {title:'Voltage dividers: learn the ideal case before adding the load',teach:'A voltage divider is two series resistors used to create a predictable fraction of an input voltage. Derive the divider instead of memorizing it: add the two resistors, use Ohm’s law to find the common series current, then use V = IR across the lower resistor. This gives Vout = Vin × Rbottom/(Rtop + Rbottom). That result assumes essentially no current leaves the output node. When a load is connected from Vout to ground, the load is in parallel with the lower resistor. Recalculate that parallel combination first, then solve the divider again. A meter, sensor input, or following circuit can therefore become part of the network being measured.',remember:'Ideal divider first; then replace the lower leg with Rbottom || Rload and recalculate.'}
  ];

  const cetaTeaching=[
    {
      sectionId:'w02-topology-before-math',
      title:'Read the circuit before touching the math',
      buildOn:'Week 1: voltage is measured between two points, current flows through a path, and resistance relates voltage to current.',
      text:'Before calculating anything, decide what is actually connected to what. A node is every point joined by ideal wire. A wire may bend, stretch, or cross the page without changing the electrical node. A branch is one path between nodes.\n\nTwo components are truly in series only when the same current is forced through both. If current can split at the point between them, they are not a simple series pair. Two components are truly in parallel only when both terminals of one component connect to the same two nodes as the other component.\n\nThis is why circuit analysis begins with topology, not appearance. A drawing can make two parts look side by side even when they are not parallel, or look end to end even when a branch prevents them from being series. Label the nodes first; the formulas become much easier after the structure is correct.',
      remember:'Prove series by one shared current path. Prove parallel by the same two nodes.',
      figure:{type:'table',number:'Source-grounded technical model',title:'How to prove the relationship',columns:['Relationship','Topology test','Shared quantity','Fast reality check'],rows:[['Series','No branch lets current split between the components','Current','Removing one component breaks the only path'],['Parallel','Both terminals connect to the same two nodes','Voltage','Each branch sees the same node-to-node voltage']],caption:'Use connectivity rather than drawing shape. This table follows the definitions used in OpenStax §10.2 and Khan Academy circuit-analysis instruction.',source:'OpenStax University Physics Vol. 2 §10.2; Khan Academy electrical engineering',sourceUrl:'https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel',provenance:'source-grounded'}
    },
    {
      sectionId:'w02-series-one-path',
      title:'Series circuits: one path means one current',
      buildOn:'You can now prove that a set of resistors is truly in series.',
      text:'In a series path there is nowhere for current to split, so the same current passes through every resistor. Each resistor adds opposition along that single path, which is why series resistances add: RT = R1 + R2 + … .\n\nDo not stop at the equivalent resistance. Once you know total current, use V = IR on each resistor to predict its voltage drop. Larger resistance produces a larger drop when the current is the same. Then add the drops. They must equal the source voltage in a simple loop.\n\nExample: a 12 V source drives 2 kΩ in series with 4 kΩ. RT = 6 kΩ, so I = 12 V / 6 kΩ = 2 mA. The 2 kΩ resistor drops 4 V and the 4 kΩ resistor drops 8 V. The check is immediate: 4 V + 8 V = 12 V.',
      remember:'Series: same current. RT grows by addition. Voltage drops divide according to resistance.',
      figure:{type:'table',number:'Worked structure',title:'Series reasoning in one view',columns:['Question','Relationship','12 V example'],rows:[['What is shared?','Current','2 mA through both resistors'],['Equivalent resistance','RT = R1 + R2','6 kΩ'],['Voltage drops','V = IR','4 V and 8 V'],['Check','Σ drops = source','4 V + 8 V = 12 V']],caption:'The arithmetic follows the topology. Use the final row as a built-in error detector.',source:'OpenStax University Physics Vol. 2 §10.2',sourceUrl:'https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel',provenance:'source-grounded'}
    },
    {
      sectionId:'w02-parallel-same-nodes',
      title:'Parallel circuits: the same two nodes mean the same voltage',
      buildOn:'You can already identify nodes and distinguish a true branch from a drawing that only looks parallel.',
      text:'Parallel branches begin and end at the same two nodes. Because voltage is a difference between nodes, every parallel branch has the same voltage across it. Current can divide among the branches, and each branch current follows Ohm’s law for that branch.\n\nFor parallel resistors, 1/RT = 1/R1 + 1/R2 + … . For two resistors you may also use RT = (R1 × R2)/(R1 + R2). The most important sanity check is not the formula: RT must be smaller than the smallest individual branch resistance because adding a current path makes it easier for the source to deliver current.\n\nIf 1 kΩ and 2 kΩ are in parallel, the equivalent cannot be 3 kΩ and it cannot be larger than 1 kΩ. The exact value is about 667 Ω. That quick check catches many calculator and reciprocal mistakes.',
      remember:'Parallel: same voltage. Branch currents divide and recombine. RT must be lower than the smallest branch.',
      figure:{type:'table',number:'Source-grounded technical model',title:'Parallel network checks',columns:['Observation','What it means'],rows:[['Same two end nodes','The components are parallel'],['Same branch voltage','Expected because the node pair is shared'],['Different branch currents','Normal when branch resistances differ'],['RT below the smallest branch resistance','The equivalent-resistance result is physically reasonable']],caption:'Use these checks before trusting the calculator result.',source:'OpenStax University Physics Vol. 2 §10.2',sourceUrl:'https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel',provenance:'source-grounded'}
    },
    {
      sectionId:'w02-kcl-conservation-charge',
      title:'KCL: current cannot disappear at a node',
      buildOn:'Parallel circuits already showed current splitting and recombining at junctions.',
      text:'Kirchhoff’s Current Law turns conservation of charge into a diagnostic rule. In steady operation, charge does not continually accumulate at an ordinary node. The total current entering therefore equals the total current leaving.\n\nStart with the story before the symbols. If 8 mA enters a node and one outgoing branch carries 3 mA, the other outgoing branch must carry 5 mA. Only after that physical reasoning should you write the compact form ΣI = 0, using opposite signs for currents you define as entering and leaving.\n\nKCL is useful twice: first to solve unknown branch current, and later to check your work. If your branch currents do not recombine to the current feeding the junction, either the arithmetic or the assumed current directions need repair.',
      remember:'At a node, account for every current path. Entering current equals leaving current.',
      figure:{type:'flow',number:'Source-grounded technical model',title:'KCL is conservation at a junction',steps:[{title:'Count what enters',body:'Example: 8 mA enters the node.'},{title:'Count what already leaves',body:'One branch carries 3 mA away.'},{title:'Account for the remainder',body:'The remaining branch must carry 5 mA away.'},{title:'Check',body:'8 mA in = 3 mA + 5 mA out.'}],caption:'The equation follows the physical conservation statement; do not memorize ΣI = 0 without knowing what it describes.',source:'Khan Academy — Kirchhoff’s current law; OpenStax §10.3',sourceUrl:'https://www.khanacademy.org/science/ap-physics-2/x0e2f5a2c%3Aelectric-circuits/x0e2f5a2c%3Acircuits-oms-kirchhoffs-laws/v/ee-kirchhoffs-current-law',provenance:'source-grounded'}
    },
    {
      sectionId:'w02-kvl-conservation-energy',
      title:'KVL: every voltage rise and drop is accounted for around a loop',
      buildOn:'The Week 1 idea of voltage between two points now becomes a whole-loop accounting rule.',
      text:'Kirchhoff’s Voltage Law says the signed voltage changes around any closed loop sum to zero. Physically, when you return to the node where you started, you must also return to the same electric potential.\n\nFor a 12 V source with two series drops of 4 V and 8 V, choose a direction around the loop and write +12 V − 4 V − 8 V = 0. You may travel the other way instead; the signs reverse consistently and the law still works.\n\nThis is why sign discipline matters. Label polarity before substituting numbers. If the answer is negative, do not erase it automatically. A negative result often tells you the real polarity or current direction is opposite the reference direction you chose. KVL is therefore both a solver and a consistency check.',
      remember:'Pick a loop direction, keep one sign convention, and make sure the signed rises and drops return to zero.',
      figure:{type:'table',number:'Source-grounded technical model',title:'KVL sign discipline',columns:['Move through the loop','Example sign'],rows:[['Across a source from − to +','+12 V rise'],['Across a resistor from + to −','−4 V drop'],['Across the next resistor from + to −','−8 V drop'],['Return to start','+12 − 4 − 8 = 0']],caption:'You can start anywhere and travel either direction; consistency matters more than the chosen direction.',source:'Khan Academy — Kirchhoff’s voltage law',sourceUrl:'https://www.khanacademy.org/science/ap-physics-2/x0e2f5a2c%3Aelectric-circuits/x0e2f5a2c%3Acircuits-oms-kirchhoffs-laws/v/ee-kirchhoffs-voltage-law',provenance:'source-grounded'}
    },
    {
      sectionId:'w02-mixed-reduce-redraw',
      title:'Mixed networks: simplify, redraw, solve, and work backward',
      buildOn:'You now know the tests for series and parallel and can check currents and voltages with KCL/KVL.',
      text:'A mixed network looks difficult when several relationships are drawn at once. Do not try to solve the whole picture in one jump. Reduce one certain subnetwork at a time.\n\nStep 1: label the nodes. Step 2: circle one obvious series or parallel group. Step 3: replace that group with its equivalent resistance. Step 4: redraw the circuit. Step 5: repeat until the source sees one equivalent resistance. Step 6: solve total current. Step 7: work backward through your redraws to recover the original branch currents and voltage drops.\n\nRedrawing is not busywork. It lowers working-memory load and makes the next topology relationship visible. At the end, use KCL at important junctions and KVL around the loops you solved. Those checks tell you whether your reconstructed branch values are internally consistent.',
      remember:'Collapse one proven relationship, redraw the simpler circuit, then repeat. Work backward only after the total network is solved.',
      figure:{type:'flow',number:'Source-grounded problem-solving sequence',title:'Reduce a mixed resistor network without losing the topology',steps:[{title:'Label nodes',body:'Prove which components are actually series or parallel.'},{title:'Reduce one group',body:'Replace only one certain subnetwork with its equivalent.'},{title:'Redraw',body:'Make the simpler topology visible before the next calculation.'},{title:'Solve total',body:'Find equivalent resistance and source current.'},{title:'Work backward',body:'Recover original branch currents and voltage drops.'},{title:'Check',body:'Use KCL and KVL to verify the reconstructed values.'}],caption:'This stepwise strategy follows the method demonstrated in Khan Academy’s “Simplifying resistor networks” and OpenStax §10.2.',source:'Khan Academy — Simplifying resistor networks; OpenStax §10.2',sourceUrl:'https://www.khanacademy.org/science/ap-physics-2/x0e2f5a2c%3Aelectric-circuits/x0e2f5a2c%3Acompound-circuits/v/ee-simplifying-resistor-networks',provenance:'source-grounded'}
    },
    {
      sectionId:'w02-divider-ideal-then-loaded',
      title:'Voltage dividers: learn the ideal case before adding the load',
      buildOn:'A voltage divider is a series network, so the same current flows through both divider resistors.',
      text:'A voltage divider is simply two series resistors used to create a predictable fraction of an input voltage. Derive the relationship instead of treating it as a magic formula. First add the resistors. Next find the common series current: I = Vin/(Rtop + Rbottom). Then use V = IR across the lower resistor. Substitution gives Vout = Vin × Rbottom/(Rtop + Rbottom).\n\nNow change one thing: connect a load from Vout to ground. That load is parallel with Rbottom, so the lower leg is no longer just Rbottom. Replace it with Rbottom || Rload and solve the divider again. This is why an input circuit or measuring instrument can change a high-resistance divider.\n\nExample: 12 V with 3.3 kΩ on top and 2.2 kΩ on bottom gives 4.8 V unloaded. Add a 2.2 kΩ load: the lower leg becomes 1.1 kΩ, so the output becomes 3.0 V. The source did not fail—the network changed.',
      remember:'Derive the ideal divider from series current. When a load is added, combine Rbottom || Rload before recalculating Vout.',
      figure:{type:'table',number:'Source-grounded technical model',title:'Ideal divider versus loaded divider',columns:['Case','Lower leg used in calculation','What happens'],rows:[['Unloaded','Rbottom','Vout follows the ideal divider ratio'],['Loaded','Rbottom || Rload','Effective lower resistance decreases'],['Very heavy load','Rload much smaller than Rbottom','Vout can sag dramatically'],['High-input-resistance meter','Rmeter much larger than divider resistances','Measurement usually disturbs Vout only slightly']],caption:'Loading is not a separate mystery; it is a parallel-resistance change at the output node.',source:'Khan Academy — Voltage divider',sourceUrl:'https://www.khanacademy.org/science/grade-10-physics-snc-aligned/x502b86fa259f0088%3Aelectrical-current/x502b86fa259f0088%3Apotential-dividers/v/ee-voltage-divider',provenance:'source-grounded'}
    }
  ];
  ceta.integrated.purpose='Week 2 teaches one focused skill chain: read a DC resistor network correctly, predict what its nodes and branches should do, then use KCL, KVL, equivalent resistance, and divider reasoning to check the prediction.';
  ceta.integrated.prereq='Bring forward only the Week 1 essentials: V = IR, power basics, SI prefixes, voltage is measured between two points, current flows through a path, and a reference node gives voltage measurements meaning.';
  ceta.integrated.teaching=cetaTeaching;
  ceta.integrated.visualId=null; // Remove the old synthetic pseudo-schematic; source-grounded figures live inside the exact teaching sections.
  ceta.integrated.workedExamples=[
    {
      problem:'A 12 V source feeds 2 kΩ in series with 4 kΩ. Find total current and both voltage drops, then prove the answer with KVL.',
      steps:['Prove the topology first: there is one path, so the resistors are in series and carry the same current.','RT = 2 kΩ + 4 kΩ = 6 kΩ.','I = 12 V / 6 kΩ = 2 mA.','V2k = 2 mA × 2 kΩ = 4 V.','V4k = 2 mA × 4 kΩ = 8 V.','KVL check: +12 V − 4 V − 8 V = 0.'],
      answer:'The current is 2 mA; the drops are 4 V and 8 V.',
      meaning:'The calculation is not finished until the topology and conservation check agree with the arithmetic.'
    },
    {
      problem:'A 12 V divider uses 3.3 kΩ on top and 2.2 kΩ on bottom. Find unloaded Vout, then attach a 2.2 kΩ load from Vout to ground and find the new output.',
      steps:['Unloaded divider: Vout = 12 × 2.2/(3.3 + 2.2) = 4.8 V.','The load is in parallel with the lower resistor: 2.2 kΩ || 2.2 kΩ = 1.1 kΩ.','Rebuild the divider mentally with 3.3 kΩ over 1.1 kΩ.','Loaded Vout = 12 × 1.1/(3.3 + 1.1) = 3.0 V.','Explain the change: the load lowered the effective bottom resistance; the source did not suddenly become weaker.'],
      answer:'4.8 V unloaded and 3.0 V loaded.',
      meaning:'A measurement or downstream input can become part of the network and change the node you are trying to measure.'
    }
  ];
  ceta.integrated.misconceptions=[
    {mistake:'“They are drawn one after another, so they must be in series.”',why:'Drawing order is visual, but series is an electrical constraint: the same current must be forced through both components.',repair:'Label the node between the components. If another current path leaves that node, the pair is not a simple series pair.'},
    {mistake:'“Parallel resistance should be R1 + R2 because there are two resistors.”',why:'Adding a parallel branch gives current another path, so the source sees less opposition, not more.',repair:'Use the sanity check before the formula: parallel RT must be lower than the smallest branch resistance.'},
    {mistake:'“KCL and KVL are extra formulas I memorize after Ohm’s law.”',why:'That encourages equation hunting without a circuit model.',repair:'Say the conservation statement first: KCL accounts for charge at a node; KVL accounts for voltage changes around a loop. Then write the equation.'},
    {mistake:'“The ideal voltage-divider formula still works after I connect any load.”',why:'The load is electrically parallel with the lower divider resistor and changes the network.',repair:'Replace the lower leg with Rbottom || Rload, then recalculate the divider.'}
  ];
  ceta.integrated.guidedPractice=[
    'I do → topology: Alfred shows a node-labeled network. Before calculating, say which components are truly series, which are parallel, and the node/path evidence that proves it.',
    'We do → series/KVL: a 10 V source feeds 1 kΩ and 1 kΩ in series. Predict midpoint voltage, calculate current and both drops, then verify +10 − V1 − V2 = 0.',
    'We do → KCL: 5 mA enters a node while 1.5 mA and 2.0 mA leave through two branches. Find the third branch current and state its direction before writing ΣI = 0.',
    'We do → mixed network: reduce one obvious subnetwork, redraw the circuit, then identify the next reducible group. Do not skip the redraw step.',
    'You do → loading: a 5 V divider uses 10 kΩ over 10 kΩ. Predict the ideal output, then recalculate after a 10 kΩ load is connected from midpoint to ground. Explain the change in words.'
  ];
  ceta.integrated.independentScenario='A 9 V source feeds R1 = 1 kΩ in series with a parallel pair R2 = 2 kΩ and R3 = 2 kΩ. Without prompts: label the nodes, reduce the network, find source current, find the voltage across the parallel pair, calculate each branch current, and use both KCL and KVL to check the result. Then describe one measurement that would immediately look wrong if R3 were open.';
  ceta.integrated.connection='This is the point where circuit math becomes technician reasoning. A schematic gives expected node voltages and branch currents; those predictions become the reference for real measurements. The same habits later appear when a sensor divider feeds an ADC, a pull-up network serves a digital bus, or a hardware test technician must decide whether a measured node is correct before replacing anything.';
  ceta.integrated.teachBack='Using one labeled resistor network, explain how you prove series versus parallel, why KCL is true at a node, why KVL is true around a loop, how you simplify a mixed network, and why adding a load can pull a divider output away from its ideal value.';
  ceta.integrated.checks=[
    {type:'mcq',prompt:'Two resistors connect to the same two nodes. Which statement must be true?',choices:['They carry the same current','They have the same voltage','They have equal resistance','They dissipate equal power'],answer:1,explanation:'Sharing both end nodes defines a parallel connection, so both resistors have the same node-to-node voltage.',reviewSectionId:'w02-parallel-same-nodes'},
    {type:'mcq',prompt:'A parallel calculation gives RT = 1.6 kΩ for branches of 1 kΩ and 2 kΩ. What should you do first?',choices:['Accept it because 1.6 kΩ lies between the two values','Reject it because parallel RT must be below 1 kΩ','Double it to account for two branches','Use KVL instead of equivalent resistance'],answer:1,explanation:'Adding a parallel current path must reduce equivalent resistance below the smallest individual branch.',reviewSectionId:'w02-parallel-same-nodes'},
    {type:'short',prompt:'Why can connecting a meter or downstream input change a high-resistance voltage divider?',answer_text:'Its finite input resistance appears in parallel with the lower divider leg, changing the effective resistance and therefore the divider ratio.',reviewSectionId:'w02-divider-ideal-then-loaded'}
  ];
  const focusedSemantic={
    taskId:'SEM-4-02-017',
    title:'DC resistor networks, KCL/KVL, and divider reasoning',
    prompt:'Analyze a DC resistor network from topology through verification. Explain how you know what is series or parallel, solve at least one branch quantity, use KCL or KVL as a conservation check, and explain what changes when a divider output is loaded.',
    required:['Identify true series/parallel topology from nodes and current paths','Calculate equivalent resistance and at least one voltage/current quantity with correct units','Use KCL and KVL as physical conservation rules, not only memorized formulas','Use a reasonableness check such as parallel RT < the smallest branch','Explain loaded-divider behavior as Rbottom in parallel with the load','Connect the prediction to a measurement or troubleshooting boundary'],
    codes:['4.1','4.2','4.3','4.4','4.10','4.17','9.1','9.3'],
    reviewSectionIds:['w02-topology-before-math','w02-kcl-conservation-charge','w02-kvl-conservation-energy','w02-divider-ideal-then-loaded']
  };
  ceta.integrated.semanticTasks=[focusedSemantic];
  ceta.semanticTeaching=[focusedSemantic]; // Preserve the focused Week 2 task ID so saved DC-network evidence remains valid.
  // Nine broad CETa tasks were historically forced into Week 2 solely to close course-wide
  // semantic coverage gaps. Keep their exact records for later-week re-homing, but do not
  // present them as Week 2 teaching or completion gates. This avoids deleting curriculum
  // provenance while protecting the learner from unrelated future-topic overload.
  ceta.deferredSemanticTasks=originalWeek2SemanticTasks.filter(task=>task.taskId!==focusedSemantic.taskId).map(task=>({...task,deferredFromWeek2:true,deferReason:'v16.3.68 coherence repair — re-home with the future week that actually teaches this topic.'}));
  ceta.knowledgeCheck={
    prompt:'Two resistors share exactly the same two nodes. What fact is guaranteed?',
    choices:['They carry the same current','They have the same voltage','Their resistances are equal','Their power ratings are equal'],
    answer:1,
    correct:'Correct. Same two end nodes means the resistors are parallel and therefore share the same voltage.',
    retry:'Ignore the drawing shape. Trace both endpoints of each resistor; identical endpoint nodes prove a parallel relationship.',
    critical:false,
    reviewSectionId:'w02-parallel-same-nodes'
  };

  // ---------------------------------------------------------------------------
  // 2) Career lesson: prediction -> fault signature -> boundary -> decision -> verify.
  // ---------------------------------------------------------------------------
  career.title='Troubleshoot from expected values instead of guessing';
  career.objectives=[
    'Turn a schematic into a short expected-versus-actual measurement plan before probing.',
    'Recognize common open, short, wrong-value, loading, and reference-error signatures.',
    'Use the last-good / first-bad boundary to narrow a fault region.',
    'Choose a measurement because its possible results separate competing hypotheses.',
    'Change one variable, retest the original symptom, and document the evidence.'
  ];
  career.sections=[
    {title:'Predict before measuring',teach:'Mark the source, reference node, important branches, and useful test points. Calculate or estimate the voltage/current you expect at each important point before connecting the meter. A measurement only becomes diagnostic when you already know what “normal” should look like.',remember:'Random probing collects numbers. Prediction-based probing answers questions.'},
    {title:'Learn the signatures of common faults',teach:'An open in a series path often drives current toward zero and can place nearly the full source across the break. A short across a component can force its voltage near zero and increase current elsewhere. A wrong resistor value shifts ratios rather than always making the circuit completely dead. A heavy load pulls a divider node away from its unloaded prediction. A bad reference connection can make several otherwise-correct nodes appear wrong at the same time.',remember:'A useful hypothesis predicts a measurement signature before you take the measurement.'},
    {title:'Find the last good point and the first bad point',teach:'Follow the known signal or power path in order. If node A matches its expected value and the immediately downstream node B does not, stop wandering around the board. The likely fault region lies between A and B or is caused by the load/reference attached to B. This boundary is more informative than ten unrelated measurements.',remember:'Last known good = upstream boundary. First known bad = downstream boundary.'},
    {title:'Choose one measurement that separates hypotheses',teach:'Suppose Vout is wrong and three causes are plausible: an open upper resistor, a shorted output node, or an upstream source-path fault. Do not choose the easiest place to probe. Choose the point where those causes predict different results. Write the expected outcome for each hypothesis before measuring. That makes the test discriminating: one reading eliminates whole groups of causes.',remember:'The best next test is the one whose possible outcomes mean different things.'},
    {title:'Change one thing, verify the repair, and preserve the evidence',teach:'Record the original symptom, expected values, actual measurements, instrument setup, and your hypothesis. Change one variable at a time so the cause of improvement remains knowable. After the repair, repeat the exact test that originally failed, then perform one nearby regression check. A circuit that merely “seems to work now” is not yet a verified repair.',remember:'A repair is complete when the original failure is gone, nearby behavior is still correct, and the evidence explains why.'}
  ];
  const careerTeaching=[
    {
      sectionId:'career-w02-predict-before-measuring',
      title:'Predict before measuring',
      buildOn:'The CETa lesson gave you the node voltages, branch currents, KCL/KVL checks, and divider behavior needed to define “normal.”',
      text:'Treat the schematic as a map of expected behavior. Mark the source, the reference node, important branches, and the few test points that divide the circuit into meaningful sections. Before touching the meter, write an expected value or range for each important node.\n\nA simple expected-versus-actual table turns troubleshooting into controlled comparison. If the source should be 10 V, the midpoint should be 5 V, and the load node should be 5 V, each measurement has a job. A correct source with a wrong midpoint tells you something different from a wrong source with every downstream node low.\n\nThis is the difference between collecting numbers and collecting evidence. Random probing asks “what number is here?” Prediction-based probing asks “which explanation survives this result?”',
      remember:'Write the expectation first. A measurement without an expectation is usually just a number.',
      figure:{type:'table',number:'Technician evidence model',title:'Expected-versus-actual measurement plan',columns:['Test point','Expected','Actual','Match?','Decision value'],rows:[['Supply','10 V','10.0 V','Yes','Source is present'],['Node A','5 V','5.1 V','Yes','Upstream divider path is behaving'],['Node B','5 V','0.2 V','No','Fault/load region begins after A']],caption:'The table tells a story: where behavior is still correct, where it first becomes wrong, and what to test next.',source:'Alfred University technician workflow grounded in ETA troubleshooting practice and Week 2 circuit analysis',provenance:'alfred-model'}
    },
    {
      sectionId:'career-w02-fault-signatures',
      title:'Learn the signatures of common faults',
      buildOn:'You now have expected values, so a mismatch can be interpreted instead of merely noticed.',
      text:'Different faults tend to disturb a DC resistor network in different ways. An open in a series path usually drives current toward zero and can place a large voltage across the break. A short across a component pushes the voltage across that component toward zero and can raise current elsewhere.\n\nA wrong resistor value often leaves the circuit alive but shifts the expected ratios. A heavy load can look like a wrong divider resistor because it lowers the effective resistance at the node. A reference/ground problem can make several unrelated nodes appear wrong together because the measurement baseline itself is wrong.\n\nThese are patterns, not magic guarantees. Use them to create hypotheses, then choose a measurement that distinguishes the hypotheses.',
      remember:'Fault signatures narrow possibilities; a discriminating measurement confirms which possibility fits the evidence.',
      figure:{type:'table',number:'Technician fault-pattern guide',title:'Common DC fault signatures',columns:['Fault','Likely signature','High-value follow-up'],rows:[['Open series path','Current near zero; large voltage can appear across the break','Measure on both sides of the suspected break, then test continuity power-off'],['Short across component/node','Voltage near zero at the shorted node; current may rise','Power down and check resistance to reference'],['Wrong resistor value','Circuit works but node ratios shift','Compare measured resistance/value to the schematic'],['Unexpected load','Divider/output sags under connection','Disconnect/isolate the load and compare'],['Reference error','Several otherwise-correct nodes look wrong together','Verify probe reference/ground first']],caption:'Always respect the actual circuit and safety boundary; these are reasoning patterns, not permission to probe energized circuits blindly.',source:'ETA Associate CET Study Guide, Sixth Edition, Chapter 4 troubleshooting examples; Alfred technician reasoning model',provenance:'source-grounded'}
    },
    {
      sectionId:'career-w02-last-good-first-bad',
      title:'Find the last good point and the first bad point',
      buildOn:'Fault signatures give candidate causes; ordered measurements locate the region where the circuit stops matching the model.',
      text:'Trace the intended path in order. If the source is correct, node A is correct, and node B is wrong, node A is the last known good point and node B is the first known bad point. The most useful fault region is therefore between A and B or at the load/reference connected to B.\n\nThis boundary method scales. In a power rail it may be regulator output → connector → board rail. In an analog chain it may be amplifier input → output → filter. In an embedded system it may even cross domains: sensor voltage correct → ADC pin wrong → firmware value wrong.\n\nOnce you have a boundary, stop collecting unrelated measurements. Work inward from that boundary until one hypothesis remains.',
      remember:'Last known good is upstream. First known bad is downstream. The boundary tells you where to concentrate the next test.',
      figure:{type:'flow',number:'Alfred troubleshooting model',title:'Follow the path until expected behavior first breaks',steps:[{title:'Source confirmed',body:'The supply/reference conditions match the prediction.'},{title:'Node A — last known good',body:'This point still matches the model.'},{title:'Node B — first known bad',body:'This is the first point that no longer matches the model.'},{title:'Test the boundary',body:'Concentrate on the path between A and B, plus any load or reference connected at B.'}],caption:'Do not label a good node as the first bad point. The fault region begins after the last known good and at/before the first known bad.',source:'Alfred University technician reasoning model, reinforced by ETA Chapter 4 troubleshooting examples',provenance:'alfred-model'}
    },
    {
      sectionId:'career-w02-discriminating-measurement',
      title:'Choose one measurement that separates hypotheses',
      buildOn:'You have narrowed the region; now select the smallest test that gives the most information.',
      text:'A discriminating measurement is chosen because different hypotheses predict different outcomes. Suppose a divider output is 0 V. Possible causes include an open upper resistor, a short from output to ground, or loss of the source connection.\n\nBefore probing, write what each hypothesis predicts at the source side of the upper resistor, at the output side, and in a safe power-off resistance check. Then choose the single measurement whose possible results split those hypotheses most cleanly.\n\nThis prevents “measurement wandering.” You are not trying to measure everything. You are trying to make the next result change your decision.',
      remember:'Before the test, write: “If hypothesis A is true, I expect __. If B is true, I expect __.”'
    },
    {
      sectionId:'career-w02-change-one-verify',
      title:'Change one thing, verify the repair, and preserve the evidence',
      buildOn:'A diagnosis becomes defensible only when the repair and retest match the predicted cause.',
      text:'Record the original symptom, expected value, actual value, instrument mode/range, and the hypothesis that motivated the repair. Change only one variable when practical. If you rewire several connections and replace multiple components at once, a successful result no longer tells you which change fixed the problem.\n\nAfter the repair, repeat the exact measurement or behavior that originally failed. Then make one nearby regression check so you know the repair did not create a second problem.\n\nGood technician documentation is short but causal: symptom → prediction → measurement → conclusion → change → verification. That record is useful to you, to a teammate, and later in a portfolio or interview because it proves how you reasoned.',
      remember:'Do not stop at “it works.” Retest the original failure and one nearby condition, then record the evidence.'
    }
  ];
  career.integrated.purpose='Use the Week 2 circuit model as a troubleshooting instrument: predict normal node behavior, recognize fault signatures, locate the last-good / first-bad boundary, choose a discriminating measurement, and verify one controlled repair.';
  career.integrated.prereq='Bring forward the focused Week 2 CETa lesson: topology, series/parallel relationships, KCL/KVL, mixed-network reduction, divider loading, and expected node values.';
  career.integrated.teaching=careerTeaching;
  career.integrated.workedExamples=[
    {
      problem:'A 10 V divider uses two 10 kΩ resistors, so the midpoint should be 5 V. You measure 10.0 V at the source, 0 V at the midpoint, and nearly 0 Ω from midpoint to ground with power removed.',
      steps:['Write the normal prediction first: midpoint ≈ 5 V.','The 10.0 V source measurement keeps the supply path plausible.','0 V at the midpoint is a strong mismatch.','Near-zero midpoint-to-ground resistance with power removed is inconsistent with the intended 10 kΩ lower leg.','Inspect for a short, solder bridge, or wiring path to ground before replacing both divider resistors.'],
      answer:'The evidence points first to a midpoint-to-ground short or wiring error.',
      meaning:'One powered voltage check plus one safe power-off resistance check separated a source problem from a grounded-node problem.'
    },
    {
      problem:'A 12 V divider should produce 4 V from 2 kΩ over 1 kΩ. You measure 12 V at the input and 0 V at the output. The lower resistor measures correctly near 1 kΩ with power removed.',
      steps:['Expected divider current is 12/(2 kΩ + 1 kΩ) = 4 mA and expected Vout = 4 V.','0 V at the output could still be caused by an open upper path, a grounded output, or an upstream wiring fault.','Because the lower resistor is confirmed, measure the source side and output side of the upper resistor under the approved safe powered route.','12 V on the source side and 0 V on the output side points toward an open upper resistor/trace; 0 V on both sides sends you upstream toward the source connection.'],
      answer:'Choose the upper-resistor boundary because its possible readings separate the main hypotheses.',
      meaning:'The measurement is valuable because the result changes the next decision.'
    }
  ];
  career.integrated.misconceptions=[
    {mistake:'Replace the component closest to the bad reading',why:'Electrical cause follows connectivity, not physical distance on the board.',repair:'Use expected node relationships and the last-good / first-bad boundary to define the fault region.'},
    {mistake:'Take many measurements first and interpret them later',why:'Without predictions, the numbers are difficult to rank and may not separate any competing causes.',repair:'Write two or three hypotheses and what each predicts, then choose the measurement with the highest decision value.'},
    {mistake:'The circuit works after my change, so the repair is proven',why:'Multiple changes or an intermittent condition can make a symptom disappear without proving root cause.',repair:'Repeat the original failing test and one nearby regression check; document the before/after evidence.'}
  ];
  career.integrated.guidedPractice=[
    'I do → expected-value table: for a 5 V source feeding 1 kΩ over 1 kΩ, list source, midpoint, ground, expected current, and a reasonable tolerance before measuring.',
    'We do → fault signatures: the midpoint is 1.0 V instead of 2.5 V. Name an incorrect resistor value, an unexpected load, and a reference problem; state what each would tend to change.',
    'We do → boundary: source and node A are correct, node B is wrong. State the last known good point, first known bad point, and the region that deserves the next test.',
    'You do → discriminating test: choose one measurement that separates an open upper resistor from a shorted output node. Write the expected result for each hypothesis before taking the measurement.',
    'You do → verification: after the repair, identify the original failing test and one nearby regression check you would repeat.'
  ];
  career.integrated.independentScenario='A 9 V source feeds R1 = 1 kΩ from the source to node A. R2 = 1 kΩ goes from A to ground. R3 = 2 kΩ goes from A to an unloaded connector pin, so the connector pin should be nearly the same voltage as node A. The connector pin instead reads 0.4 V. Build a short troubleshooting record with: normal predictions, three competing hypotheses (open R3, connector-side short/load, bad reference), one discriminating measurement, the meaning of each possible result, and the exact verification you would perform after the repair.';
  career.integrated.connection='Hardware test, validation, electronics technician, and embedded-hardware roles all reward this same reasoning pattern. The value is not merely finding a bad part; it is being able to explain why a test point was chosen, what result was expected, what the instrument actually showed, which hypotheses were eliminated, and how the repair was verified.';
  career.integrated.teachBack='A divider output is wrong. Explain the path from symptom → expected value → two or three hypotheses → last-good/first-bad boundary → one discriminating measurement → repair → verification. State what each possible measurement result would mean before you take it.';
  career.integrated.checks=[
    {type:'mcq',prompt:'Node A matches its expected value and the immediately downstream node B does not. What is the strongest next conclusion?',choices:['Everything upstream is permanently proven perfect','The likely fault region is between A and B or associated with B’s load/reference','Replace the power supply','Measure ten unrelated nodes before forming a hypothesis'],answer:1,explanation:'The last-good / first-bad boundary narrows the region while still allowing loading/reference effects at B.',reviewSectionId:'career-w02-last-good-first-bad'},
    {type:'short',prompt:'What makes a troubleshooting measurement discriminating?',answer_text:'Different hypotheses predict different outcomes at that test point, so the result eliminates or supports causes instead of merely adding another number.',reviewSectionId:'career-w02-discriminating-measurement'}
  ];
  career.knowledgeCheck={
    prompt:'What should happen before the first diagnostic probe on a simple DC network?',
    choices:['Replace the most suspicious component','Write the symptom and expected values, then verify source/reference conditions','Measure random nodes until one looks strange','Rebuild the entire circuit from memory'],
    answer:1,
    correct:'Correct. A defined symptom, expected values, and verified source/reference make later measurements interpretable.',
    retry:'Troubleshooting begins with a model. Define what should happen before deciding what a measured number means.',
    critical:false,
    reviewSectionId:'career-w02-predict-before-measuring'
  };

  // Preserve the existing high-level Week 2 practical identity, but make the evidence loop explicit.
  if(W.integration){
    W.integration.title='Predict, build, load, fault, diagnose, and verify a DC resistor network';
    W.integration.brief='Calculate expected values first, build or simulate the network, compare predicted versus measured values, add a defined load, then introduce one safe reversible fault and diagnose it from the first mismatch.';
    W.integration.guided=[
      'Label nodes and prove each series/parallel relationship before calculating.',
      'Create an expected-value table for source, important nodes, branch currents, and divider output.',
      'Measure the unloaded network and explain any prediction-versus-measurement difference before changing the circuit.',
      'Add the defined load, predict the new divider output first, then measure and explain the loading effect.',
      'Introduce one safe reversible fault. Record one hypothesis and one discriminating measurement at a time.',
      'Repair the fault, repeat the original failing test, and perform one nearby regression check.'
    ];
    W.integration.independent='Given an unfamiliar three-resistor network, produce a one-page prediction and troubleshooting plan: topology, expected node values, first three high-information test points, fault hypotheses, and what each possible reading would mean.';
    W.integration.evidence='Annotated schematic/node map, calculations, expected-versus-actual table, loaded/unloaded results, fault hypothesis log, first-bad boundary, repair, and verification.';
    W.integration.practiceCheck='If Vout is correct unloaded but collapses after a load is connected, explain why the evidence points first to loading/network impedance rather than a failed source.';
  }

  // ---------------------------------------------------------------------------
  // 3) Week 2 Teaching Media: remove old W2 placements, keep future-week reuse,
  //    then add a small set of teacher-led, section-specific resources.
  // ---------------------------------------------------------------------------
  const R=C.teachingResourceIntegration;
  const A=C.teachingMediaArchitecture;
  const O=C.outsideLiteratureIntegration;
  const mediaItem=(source,role,use,watchFor,gap)=>({source,role,use,watchFor,gap});
  const ensureMedia=item=>{
    W.integration.media=W.integration.media||[];
    const i=W.integration.media.findIndex(x=>x.source===item.source);
    if(i>=0)W.integration.media[i]={...W.integration.media[i],...item};else W.integration.media.push(item);
  };
  const newSources={
    khanSeriesParallelW2:{title:'Series and parallel circuits',org:'Khan Academy · Mahesh Shenoy',kind:'Beginner video lesson',url:'https://www.khanacademy.org/science/hs-physics-tx/x52b5e54e482d5bbe%3Acircuits-and-electromagnetics/x52b5e54e482d5bbe%3Avoltage-current-resistance/v/electric-circuits-part-2'},
    khanKclW2:{title:'Kirchhoff’s current law',org:'Khan Academy · Willy McAllister',kind:'Focused video lesson · 6:03',url:'https://www.khanacademy.org/science/ap-physics-2/x0e2f5a2c%3Aelectric-circuits/x0e2f5a2c%3Acircuits-oms-kirchhoffs-laws/v/ee-kirchhoffs-current-law'},
    khanKvlW2:{title:'Kirchhoff’s voltage law',org:'Khan Academy · Willy McAllister',kind:'Focused video lesson',url:'https://www.khanacademy.org/science/ap-physics-2/x0e2f5a2c%3Aelectric-circuits/x0e2f5a2c%3Acircuits-oms-kirchhoffs-laws/v/ee-kirchhoffs-voltage-law'},
    khanSimplifyNetworksW2:{title:'Simplifying resistor networks',org:'Khan Academy · Willy McAllister',kind:'Focused video lesson · 8:05',url:'https://www.khanacademy.org/science/ap-physics-2/x0e2f5a2c%3Aelectric-circuits/x0e2f5a2c%3Acompound-circuits/v/ee-simplifying-resistor-networks'},
    khanVoltageDividerW2:{title:'Voltage divider',org:'Khan Academy · Willy McAllister',kind:'Focused video lesson',url:'https://www.khanacademy.org/science/grade-10-physics-snc-aligned/x502b86fa259f0088%3Aelectrical-current/x502b86fa259f0088%3Apotential-dividers/v/ee-voltage-divider'},
    litKhanKirchhoffW2:{title:'Kirchhoff’s laws — written reference',org:'Khan Academy',kind:'Written circuit-analysis article',url:'https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-dc-circuit-analysis/a/w/a/ee-kirchhoffs-laws'},
    litKhanVoltageDividerW2:{title:'Voltage divider — derivation and loading',org:'Khan Academy · Willy McAllister',kind:'Written circuit-analysis article',url:'https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-resistor-circuits/a/ee-voltage-divider'}
  };
  Object.assign(C.sources,newSources);
  ensureMedia(mediaItem('khanSeriesParallelW2','Required · Focused teacher video','Use one concise visual explanation to reinforce topology before formulas.','Watch the full lesson. Listen specifically for: series = one chain/same current; parallel = same two points/same voltage. The lesson stays on this exact Week 2 concept; stop when the platform begins the next lesson.','Alfred supplies the explicit node-labeling procedure, calculations, sanity checks, and technician transfer.'));
  ensureMedia(mediaItem('khanKclW2','Required · Focused teacher video','Use Willy McAllister’s dedicated KCL explanation after Alfred introduces conservation of charge.','Watch the full 6:03. It stays on KCL and current at a node; focus on why charge cannot pile up and how the current equation follows.','Alfred supplies the guided arithmetic, retrieval prompt, and troubleshooting use.'));
  ensureMedia(mediaItem('khanKvlW2','Required · Focused teacher video','Use Willy McAllister’s dedicated KVL explanation after Alfred introduces loop accounting.','Watch the full KVL lesson. Focus on voltage rise/drop language, starting at any node, and keeping signs consistent. Stop when the platform autoplays another topic.','Alfred supplies the worked 12 V example, sign-repair guidance, and technician checks.'));
  ensureMedia(mediaItem('khanSimplifyNetworksW2','Study · Alternate explanation','Use only if the reduce/redraw method still feels abstract.','Watch the full 8:05. It is specifically about collapsing series/parallel groups one step at a time. Focus on the redraw-after-each-reduction strategy.','Alfred keeps the required path shorter and adds KCL/KVL verification plus technician prediction.'));
  ensureMedia(mediaItem('khanVoltageDividerW2','Study · Alternate explanation','Use if you want another visual derivation of the ideal divider before loaded-divider practice.','Watch the full dedicated voltage-divider lesson. Focus on deriving Vout from the common series current. Stop when the platform moves to the next lesson.','Alfred adds the explicit loaded-divider recalculation and measurement-loading connection.'));
  ensureMedia(mediaItem('litKhanKirchhoffW2','Study · Written companion','Use the exact KCL or KVL subsection when you want a written second explanation.','Read only the subsection named on the lesson card; do not turn the whole article into extra homework.','Alfred remains the first-pass teacher and supplies the Week 2 examples and practice.'));
  ensureMedia(mediaItem('litKhanVoltageDividerW2','Study · Written companion','Use the derivation/loading portions as a written second explanation.','Read the ideal divider derivation first; use the loaded-divider portion only after Alfred introduces the load.','Alfred provides the beginner sequence and exact Week 2 calculations.'));
  // Reuse the already verified OpenStax OER source, but promote it from generic Study reading to a bounded required written companion.
  ensureMedia(mediaItem('litOpenstaxSeriesParallel','Required · Written companion','Use OpenStax §10.2 for the formal series/parallel definitions and one mixed-network example.','Read only the assigned subsections on the lesson cards. Do not continue into capacitor-combination material for Week 2.','Alfred supplies the slower node-first teaching, divider loading, troubleshooting, and retrieval sequence.'));

  const approvedW2=new Set(['khanSeriesParallelW2','khanKclW2','khanKvlW2','khanSimplifyNetworksW2','khanVoltageDividerW2','litOpenstaxSeriesParallel','litKhanKirchhoffW2','litKhanVoltageDividerW2']);
  if(R?.placements){
    // Remove every old learner-facing Week 2 media placement; placements targeting later weeks remain untouched.
    R.placements=R.placements.filter(p=>Number(p.targetWeek)!==2);
  }
  const place=(source,lesson,segment,{requirement='supporting',mediaType='video',presentationRole='reinforcement',display='compact',relationship='Another explanation',afterAction='Return to Alfred and explain the same idea without copying the source wording.'}={})=>({assignmentWeek:2,source,targetWeek:2,lesson,segment,relationship,presentationRole,display,inline:true,requirement,mediaType,afterAction,reason:'v16.3.68 Week 2 focused instructional redesign — section-specific resource placement.'});
  const newPlacements=[
    place('khanSeriesParallelW2',0,'w02-topology-before-math',{requirement:'required',presentationRole:'demonstration',display:'primary',relationship:'Reinforces topology',afterAction:'Close the video and prove one series relationship and one parallel relationship from nodes/current paths before moving on.'}),
    place('litOpenstaxSeriesParallel',0,'w02-topology-before-math',{requirement:'required',mediaType:'literature',presentationRole:'core',display:'primary',relationship:'Written companion',afterAction:'State the series and parallel definitions without using drawing shape as evidence.'}),
    place('litOpenstaxSeriesParallel',0,'w02-series-one-path',{requirement:'supporting',mediaType:'literature',presentationRole:'reference',relationship:'Use exact subsection',afterAction:'Explain why the same current passes through every true series resistor, then verify one voltage-drop sum.'}),
    place('litOpenstaxSeriesParallel',0,'w02-parallel-same-nodes',{requirement:'supporting',mediaType:'literature',presentationRole:'reference',relationship:'Use exact subsection',afterAction:'Explain why parallel branches share voltage and why RT must fall below the smallest branch resistance.'}),
    place('khanKclW2',0,'w02-kcl-conservation-charge',{requirement:'required',presentationRole:'demonstration',display:'primary',relationship:'Focused KCL explanation',afterAction:'Before continuing, solve one node-current balance in words first and then with ΣI = 0.'}),
    place('litKhanKirchhoffW2',0,'w02-kcl-conservation-charge',{requirement:'supporting',mediaType:'literature',presentationRole:'reference',relationship:'Written KCL subsection',afterAction:'Read only the KCL subsection, then state the conservation statement in one sentence.'}),
    place('khanKvlW2',0,'w02-kvl-conservation-energy',{requirement:'required',presentationRole:'demonstration',display:'primary',relationship:'Focused KVL explanation',afterAction:'Write one loop equation with labeled polarity and explain why a negative answer can be meaningful.'}),
    place('litKhanKirchhoffW2',0,'w02-kvl-conservation-energy',{requirement:'supporting',mediaType:'literature',presentationRole:'reference',relationship:'Written KVL subsection',afterAction:'Read only the KVL subsection, then explain rises, drops, and loop direction without notes.'}),
    place('khanSimplifyNetworksW2',0,'w02-mixed-reduce-redraw',{requirement:'supporting',presentationRole:'review',relationship:'Optional worked visual',afterAction:'Copy only the strategy: identify one reducible group, replace it, redraw, and repeat on an Alfred problem.'}),
    place('litOpenstaxSeriesParallel',0,'w02-mixed-reduce-redraw',{requirement:'supporting',mediaType:'literature',presentationRole:'reference',relationship:'OpenStax worked example',afterAction:'Jump to Example 10.5 “Combining Series and Parallel Circuits”; compare its stepwise reduction with Alfred’s redraw method.'}),
    place('khanVoltageDividerW2',0,'w02-divider-ideal-then-loaded',{requirement:'supporting',presentationRole:'review',relationship:'Optional divider derivation',afterAction:'Derive Vout once from series current before using the compact divider formula.'}),
    place('litKhanVoltageDividerW2',0,'w02-divider-ideal-then-loaded',{requirement:'supporting',mediaType:'literature',presentationRole:'reference',relationship:'Written divider derivation/loading',afterAction:'Read the ideal derivation first, then the loaded-divider section; explain why the load behaves like a parallel resistor.'})
  ];
  if(R?.placements)R.placements.push(...newPlacements);

  // Architecture assignments for new / promoted resources. Keep old Week 2 assignments intact for later-week reuse,
  // but Week 2 rendering will ignore any source that no longer has a Week 2 placement.
  if(A?.assignments){
    const mk=(source,destination,requirement,studyCategory='',track='ceta',meta=null)=>({key:`2:${source}`,assignmentWeek:2,source,destination,requirement,studyWeek:2,studyCategory,libraryCategory:'',track,requiredMeta:meta,originalRequirement:requirement,originalRole:destination==='classroom'?(requirement==='required'?'Required':'Supporting'):'Study',placements:newPlacements.filter(p=>p.source===source)});
    A.assignments['2:khanSeriesParallelW2']=mk('khanSeriesParallelW2','classroom','required','', 'ceta',{scope:'Full focused series/parallel concept lesson',minutes:8,why:'A clear visual second representation from a teacher-led source.',focus:'One chain/same current; same two nodes/same voltage.',ignore:'Anything the platform autoplays after this lesson.',after:'Prove topology from nodes before using formulas.',completion:'You can identify true series/parallel relationships without using drawing shape.'});
    A.assignments['2:khanKclW2']=mk('khanKclW2','classroom','required','', 'ceta',{scope:'Full 6:03 KCL lesson',minutes:6,why:'KCL benefits from seeing charge-conservation reasoning animated at a junction.',focus:'Why current entering and leaving must balance.',ignore:'Platform autoplay after the KCL lesson.',after:'Solve one node-current balance from the physical story first.',completion:'You can state and use KCL without equation hunting.'});
    A.assignments['2:khanKvlW2']=mk('khanKvlW2','classroom','required','', 'ceta',{scope:'Full dedicated KVL lesson',minutes:7,why:'KVL sign/rise/drop reasoning benefits from a focused visual walkthrough.',focus:'Voltage rises, drops, loop direction, and returning to the starting potential.',ignore:'Platform autoplay after the KVL lesson.',after:'Write one signed loop equation and explain every sign.',completion:'You can traverse a loop consistently and verify the total returns to zero.'});
    A.assignments['2:litOpenstaxSeriesParallel']=mk('litOpenstaxSeriesParallel','classroom','required','', 'ceta',{scope:'§10.2 opening definitions + Resistors in Series + Resistors in Parallel; later use Example 10.5 only when the mixed-network page is reached',minutes:15,why:'OpenStax supplies a reputable OER written representation and proper circuit figures.',focus:'Topology definitions, shared current/voltage, equivalent resistance, and reasonableness checks.',ignore:'Capacitor-combination comparisons and unrelated later material for Week 2.',after:'Explain series and parallel from connectivity, then use one OpenStax example as a check against Alfred’s reasoning.',completion:'You can state the topology rule and one equivalent-resistance sanity check without reopening the reading.'});
    A.assignments['2:khanSimplifyNetworksW2']=mk('khanSimplifyNetworksW2','classroom','supporting','Alternate Explanation','ceta');
    A.assignments['2:khanVoltageDividerW2']=mk('khanVoltageDividerW2','classroom','supporting','Alternate Explanation','ceta');
    A.assignments['2:litKhanKirchhoffW2']=mk('litKhanKirchhoffW2','classroom','supporting','Written Companion','ceta');
    A.assignments['2:litKhanVoltageDividerW2']=mk('litKhanVoltageDividerW2','classroom','supporting','Written Companion','ceta');
    // The only All About Circuits item still parked in the Week 2 Study shelf has no future-week placement.
    // Remove it from the Week 2 learner experience in accordance with the user's source preference.
    if(A.assignments['2:aacSeries1']){
      A.assignments['2:aacSeries1'].destination='removed';
      A.assignments['2:aacSeries1'].requirement='removed';
      A.assignments['2:aacSeries1'].studyCategory='';
    }
    // Refresh placement arrays on every pre-existing assignment so future-week reuse stays correct after W2 placements were removed.
    Object.values(A.assignments).forEach(a=>{if(a&&a.source)a.placements=(R?.placements||[]).filter(p=>Number(p.assignmentWeek)===Number(a.assignmentWeek)&&p.source===a.source);});
  }

  // Rebuild resource placement indexes used by Classroom cards.
  if(R?.placements){
    R.byTargetWeek={};R.bySource={};R.byAssignment={};
    R.placements.forEach(p=>{
      (R.byTargetWeek[p.targetWeek]||(R.byTargetWeek[p.targetWeek]=[])).push(p);
      (R.bySource[p.source]||(R.bySource[p.source]=[])).push(p);
      const k=`${p.assignmentWeek}:${p.source}`;(R.byAssignment[k]||(R.byAssignment[k]=[])).push(p);
    });
    R.week2RedesignRevision='2026-09-27-v16.3.68-focused-teaching-media';
    R.week2ApprovedSourceIds=[...approvedW2];
  }

  // ---------------------------------------------------------------------------
  // 4) Written literature metadata: exact subsection instructions, no AAC priority.
  // ---------------------------------------------------------------------------
  if(O){
    O.sources=O.sources||{};O.byPlacement=O.byPlacement||{};O.bySource=O.bySource||{};
    O.sources.litKhanKirchhoffW2={title:newSources.litKhanKirchhoffW2.title,org:'Khan Academy',author:'Willy McAllister / Khan Academy',kind:'Written circuit-analysis article',url:newSources.litKhanKirchhoffW2.url,access:'Free online',literatureType:'Companion Reading',provenance:'Khan Academy electrical-engineering circuit analysis; selected for concise written KCL/KVL sections.',verified:'2026-09-27'};
    O.sources.litKhanVoltageDividerW2={title:newSources.litKhanVoltageDividerW2.title,org:'Khan Academy',author:'Willy McAllister',kind:'Written circuit-analysis article',url:newSources.litKhanVoltageDividerW2.url,access:'Free online',literatureType:'Companion Reading',provenance:'Khan Academy voltage-divider derivation/loading article; selected for direct alignment to the Week 2 divider section.',verified:'2026-09-27'};
    const existingOpen=O.sources.litOpenstaxSeriesParallel||{title:'Resistors in Series and Parallel — University Physics Volume 2',org:'OpenStax',author:'OpenStax',kind:'Open textbook section',url:C.sources.litOpenstaxSeriesParallel?.url||'https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel',access:'Free / OER',literatureType:'Companion Reading',provenance:'Open university physics textbook.',verified:'2026-09-27'};
    O.sources.litOpenstaxSeriesParallel={...existingOpen,verified:'2026-09-27'};
    C.sources.litOpenstaxSeriesParallel={...(C.sources.litOpenstaxSeriesParallel||{}),...O.sources.litOpenstaxSeriesParallel};
    C.sources.litKhanKirchhoffW2={...newSources.litKhanKirchhoffW2,author:'Willy McAllister / Khan Academy',access:'Free online'};
    C.sources.litKhanVoltageDividerW2={...newSources.litKhanVoltageDividerW2,author:'Willy McAllister',access:'Free online'};

    // Remove stale W2 literature placements (including AAC/SparkFun) while preserving all other weeks.
    O.literaturePlacements=(O.literaturePlacements||[]).filter(p=>Number(p.targetWeek)!==2);
    const litMeta=(p,{readUse,focus,afterReading,why,literatureType='Companion Reading'})=>({...p,literatureType,readUse,focus,afterReading,why,realWorld:false,meta:O.sources[p.source]||C.sources[p.source]||{}});
    const litRows=[
      litMeta(newPlacements.find(p=>p.source==='litOpenstaxSeriesParallel'&&p.segment==='w02-topology-before-math'),{readUse:'Read the §10.2 opening through the definitions of series and parallel. Stop before deep worked calculations if you have not reached the next lesson pages yet.',focus:'How OpenStax defines series by one current path and parallel by the same node-to-node voltage.',afterReading:'Close the page and identify one series and one parallel relationship from node connectivity.',why:'A reputable OER second representation reinforces the exact topology language Alfred just taught.'}),
      litMeta(newPlacements.find(p=>p.source==='litOpenstaxSeriesParallel'&&p.segment==='w02-series-one-path'),{readUse:'Jump directly to “Resistors in Series.” Read the derivation and the major-features summary.',focus:'Same current, resistance addition, and voltage drops summing to the source.',afterReading:'Apply those three statements to Alfred’s 12 V / 2 kΩ / 4 kΩ example.',why:'The written derivation provides a formal check after Alfred’s plain-language explanation.'}),
      litMeta(newPlacements.find(p=>p.source==='litOpenstaxSeriesParallel'&&p.segment==='w02-parallel-same-nodes'),{readUse:'Jump directly to “Resistors in Parallel.” Read through the equivalent-resistance result and the summary.',focus:'Same voltage, current splitting, and why equivalent resistance is lower than every branch resistance.',afterReading:'Without recalculating, explain why a 1 kΩ || 2 kΩ answer above 1 kΩ must be wrong.',why:'OpenStax supplies the formal derivation and a strong reasonableness check.'}),
      litMeta(newPlacements.find(p=>p.source==='litKhanKirchhoffW2'&&p.segment==='w02-kcl-conservation-charge'),{readUse:'Read only the “Kirchhoff’s Current Law” subsection.',focus:'Current balance at a node as conservation of charge.',afterReading:'State KCL in words first, then write one signed current equation.',why:'This is a short written second explanation from the same high-quality circuit-analysis teaching sequence.'}),
      litMeta(newPlacements.find(p=>p.source==='litKhanKirchhoffW2'&&p.segment==='w02-kvl-conservation-energy'),{readUse:'Read only the “Kirchhoff’s Voltage Law” subsection.',focus:'Loop direction, signed voltage changes, and why the algebraic sum returns to zero.',afterReading:'Write +Vs − V1 − V2 = 0 for one Alfred series loop and explain each sign.',why:'The subsection is tightly aligned to Alfred’s KVL page and avoids unrelated reading.'}),
      litMeta(newPlacements.find(p=>p.source==='litOpenstaxSeriesParallel'&&p.segment==='w02-mixed-reduce-redraw'),{readUse:'Jump to Example 10.5, “Combining Series and Parallel Circuits,” and its significance note.',focus:'Reduce one group at a time and check whether each equivalent resistance is reasonable.',afterReading:'Use Alfred’s redraw-after-each-reduction method on a different mixed network.',why:'The worked example gives a formal written model without adding a new topic.'}),
      litMeta(newPlacements.find(p=>p.source==='litKhanVoltageDividerW2'),{readUse:'Read the ideal divider derivation first. After Alfred introduces loading, continue to the loaded-divider section. Stop before unrelated navigation or follow-on lessons.',focus:'Derive Vout from the common series current, then see the load as a resistor in parallel with R2.',afterReading:'Recalculate Alfred’s 12 V divider with the 2.2 kΩ load and explain the drop from 4.8 V to 3.0 V.',why:'Willy McAllister’s written derivation matches Alfred’s ideal-first, loaded-second sequence.'})
    ].filter(Boolean);
    O.literaturePlacements.push(...litRows);
    O.byPlacement={};O.bySource={};
    const key=p=>`${p.assignmentWeek}:${p.source}:${p.targetWeek}:${p.lesson}:${p.segment}`;
    O.literaturePlacements.forEach(p=>{O.byPlacement[key(p)]=p;(O.bySource[p.source]||(O.bySource[p.source]=[])).push(p);});
    O.sourceIds=[...new Set([...Object.keys(O.sources),...Object.keys(O.bySource)])];
    O.placementCount=O.literaturePlacements.length;O.uniqueSourceCount=O.sourceIds.length;
    O.week2RedesignRevision='2026-09-27-v16.3.68-no-aac-primary-week2';
  }

  // ---------------------------------------------------------------------------
  // 5) CETa Study Guide: keep one weekly obligation, but slice exact pages into
  //    the lesson sections where they belong. Context slices share one completion ID.
  // ---------------------------------------------------------------------------
  const SG=window.ALFRED_CETA_STUDY_GUIDE;
  if(SG?.records){
    const parent=SG.records.find(r=>r.id==='sg-w02-ch04-p027-031');
    if(parent){
      parent.estimatedMinutes=22;
      parent.purpose='Week 2 Study Guide path: use the exact Chapter 4 slice attached to each Alfred lesson page instead of reading pp.27–31 as one undifferentiated block.';
      parent.focus='Printed pp.27–31 only for series, parallel, KCL/KVL, mixed-network reduction, and voltage-divider material.';
      parent.after='Use the contextual cards inside the Week 2 lesson. The same Week 2 completion state is shared across the slices.';
      parent.placements=[];
      parent.safelySkim='On printed p.31, stop when “Maximum Power Transfer” begins. That topic is not part of Week 2.';
      parent.completionGroup='sg-w02-ch04-network-path';
      parent.studyCategory='Required Week 2 Path';
    }
    SG.records=SG.records.filter(r=>!String(r.id||'').startsWith('sg-w02-v16368-'));
    const slice=(id,pages,focus,after,placements,{estimatedMinutes=4,purpose='Use this exact Study Guide slice immediately after Alfred teaches the same concept.',safelySkim='',studyCategory='Contextual CETa Reinforcement'}={})=>({id,week:2,chapter:4,pageGroups:pages,classification:'required',contextOnly:true,completionGroup:'sg-w02-ch04-network-path',estimatedMinutes,purpose,focus,after,studyCategory,track:'ceta',placements,keywords:'week 2 dc network series parallel KCL KVL voltage divider troubleshooting',competencyDomains:['4','9'],safelySkim,authorityNote:'',errataIds:[],crossovers:[],role:'required',notes:'v16.3.68 contextual slice; shares one Week 2 Study Guide completion identity.'});
    SG.records.push(
      slice('sg-w02-v16368-p027-series',[[27,27]],'Read the “Series Circuits” portion: one path/same current, total series resistance, voltage drops, ground/reference, and the KVL statement.','Explain why the 12 V / 2 kΩ / 4 kΩ Alfred example must have the same current through both resistors and why the drops add to 12 V.',[{week:2,lesson:0,segment:'w02-series-one-path',relationship:'Exact Study Guide slice'},{week:2,lesson:0,segment:'w02-kvl-conservation-energy',relationship:'Reuse the KVL portion only'}],{estimatedMinutes:5}),
      slice('sg-w02-v16368-p028-parallel',[[28,28]],'Read the “Parallel Circuits” portion: branch current, same branch voltage, KCL, and parallel equivalent resistance.','Without notes, explain why branch currents can differ while branch voltages remain the same.',[{week:2,lesson:0,segment:'w02-parallel-same-nodes',relationship:'Exact Study Guide slice'},{week:2,lesson:0,segment:'w02-kcl-conservation-charge',relationship:'Reuse the KCL portion only'}],{estimatedMinutes:5}),
      slice('sg-w02-v16368-p029-030-mixed',[[29,30]],'Read only the series-parallel reduction examples through the point where the text transitions into “Voltage Dividers.” Focus on simplifying the most interior/obvious group and reducing in steps.','Reduce one Alfred mixed network by one group at a time and redraw after every reduction.',[{week:2,lesson:0,segment:'w02-mixed-reduce-redraw',relationship:'Exact Study Guide worked examples'}],{estimatedMinutes:7,safelySkim:'Stop when the “Voltage Dividers” heading begins; the divider gets its own lesson slice.'}),
      slice('sg-w02-v16368-p030-031-divider',[[30,31]],'Begin at the “Voltage Dividers” heading near the end of p.30 and continue through the voltage-divider formula/example on p.31.','Derive the divider from series current, then compare the book’s example with Alfred’s loaded-divider example.',[{week:2,lesson:0,segment:'w02-divider-ideal-then-loaded',relationship:'Exact Study Guide divider slice'}],{estimatedMinutes:6,safelySkim:'STOP on p.31 when “Maximum Power Transfer” begins. Do not read that section for Week 2.'}),
      slice('sg-w02-v16368-p032-033-troubleshoot',[[32,33]],'Start at the “Troubleshooting” heading on printed p.32. Read the series-open and parallel-open examples through the end of the troubleshooting example on p.33.','For each fault example, identify the expected normal value, the observed signature, and the last-good / first-bad reasoning Alfred would use.',[{week:2,lesson:1,segment:'career-w02-fault-signatures',relationship:'Troubleshooting examples'},{week:2,lesson:1,segment:'career-w02-last-good-first-bad',relationship:'Troubleshooting reuse'}],{estimatedMinutes:7,purpose:'Bring the Study Guide’s Chapter 4 troubleshooting examples into the exact Week 2 Career pages where they are useful.',safelySkim:'Ignore maximum-power-transfer text that appears before the Troubleshooting heading; begin at “Troubleshooting.”'}),
      slice('sg-w02-v16368-p034-quiz',[[34,34]],'Use only Chapter 4 quiz questions 4, 5, 6, and 7 as a short retrieval check for parallel resistance and DC fault/circuit reasoning.','Answer before checking p.223. For every miss, return to the smallest Alfred lesson page that teaches the underlying idea.',[{week:2,lesson:1,segment:'checks',relationship:'Targeted CETa retrieval check'}],{estimatedMinutes:5,purpose:'Use selected Chapter 4 questions as retrieval practice without importing unrelated maximum-power-transfer material.',safelySkim:'Do questions 4, 5, 6, and 7 only. Skip questions 1–3 if they are basic review you already know, and skip questions 8–9 because maximum power transfer is not Week 2.'})
    );
    // Rebuild helper behavior while keeping one canonical Required Path card in Stage 4.
    SG.requiredForWeek=week=>SG.records.filter(r=>Number(r.week)===Number(week)&&r.classification==='required'&&!r.contextOnly);
    SG.studyForWeek=week=>SG.records.filter(r=>Number(r.week)===Number(week)&&r.classification!=='required');
    SG.recordsForSegment=(week,lesson,segment)=>SG.records.filter(r=>(r.placements||[]).some(p=>Number(p.week)===Number(week)&&Number(p.lesson)===Number(lesson)&&String(p.segment)===String(segment)));
    SG.primaryPlacement=record=>(record.placements||[])[0]||null;
    SG.week2RedesignRevision='2026-09-27-v16.3.68-contextual-page-slices';
  }

  // ---------------------------------------------------------------------------
  // 6) Assessment metadata: keep the proven question bank, narrow the visible
  //    Week 2 framing to the content actually taught here.
  // ---------------------------------------------------------------------------
  const AS=window.ALFRED_ASSESSMENT;
  if(AS){
    const test=(AS.weeklyTests||[]).find(x=>Number(x.week)===2);
    if(test){
      test.title='Week 02 Mastery — DC Resistor Networks, KCL/KVL, Dividers & Troubleshooting';
      test.alignment='Required Week 2 mastery gate after focused DC-network teaching, guided practice, LAB-002/application, and troubleshooting transfer. The bank may retrieve already-taught Week 1 Ohm/power/safety/measurement facts, but Week 2 does not require future AC, resonance, PLL, motor/generator, filter, or piezoelectric content.';
      test.week2FocusedScope=['series/parallel topology','equivalent resistance','branch current and voltage','KCL','KVL','mixed DC resistor networks','unloaded/loaded voltage dividers','expected-versus-actual troubleshooting'];
    }
  }

  W.week2InstructionalRevision='2026-09-27-v16.3.68-focused-dc-network-redesign';
  W.week2TeachingModel='Topology → physical meaning → equation → worked model → retrieval → application → troubleshooting.';
  C.meta.week2InstructionalRevision=W.week2InstructionalRevision;
  C.meta.week2DeferredSemanticTaskCount=ceta.deferredSemanticTasks.length;
  C.meta.week2DeferredSemanticRealignment='Nine unrelated future-topic CETa competency tasks are preserved as deferred metadata and removed from the Week 2 completion gate. Re-home them during the focused audits of their natural future weeks.';
})();
