/* AU-ESET 301 — v16.3.75 Week 2 final Career UX remediation
   Scope: Week 2 only.
   Purpose:
   1) turn Career Pages 3–4 from text-described demonstrations into native interactive troubleshooting trainers;
   2) add exact review-route metadata for every question in the Week 2 mastery form so quiz misses can jump to the exact CETa/Career section and back.
*/
(()=>{
  const C=window.ALFRED_CURRICULUM;
  const AS=window.ALFRED_ASSESSMENT;

  if(C?.modules?.length){
    const W=C.modules.find(m=>Number(m.week)===2);
    const career=W?.lessons?.[1];
    const T=career?.integrated?.teaching||[];
    const byId=id=>T.find(s=>s.sectionId===id);

    const p3=byId('career-w02-last-good-first-bad');
    if(p3){
      p3.careerInteractive={
        type:'boundary',
        title:'Interactive trainer — isolate the fault boundary with as few measurements as possible',
        intro:'Measure test points in any order. Compare each reading with the expected value, then identify the last-known-good and first-known-bad points. The measurement counter makes inefficient wandering visible.',
        challenges:[
          {
            id:'short-path',
            label:'Challenge 1 · Four-point path',
            efficientAt:2,
            nodes:[
              {id:'S',expected:'12.0 V',actual:'12.0 V',match:true},
              {id:'A',expected:'9.0 V',actual:'9.1 V',match:true},
              {id:'B',expected:'6.0 V',actual:'1.0 V',match:false},
              {id:'C',expected:'3.0 V',actual:'0.9 V',match:false}
            ],
            lastGood:'A',firstBad:'B',
            feedback:'A is the last-known-good point and B is the first-known-bad point. The strongest immediate suspect region is between A and B plus anything connected at B.'
          },
          {
            id:'split-half',
            label:'Challenge 2 · Split-half extension',
            efficientAt:3,
            nodes:[
              {id:'A',expected:'12.0 V',actual:'12.0 V',match:true},
              {id:'B',expected:'10.5 V',actual:'10.5 V',match:true},
              {id:'C',expected:'9.0 V',actual:'9.1 V',match:true},
              {id:'D',expected:'7.5 V',actual:'7.5 V',match:true},
              {id:'E',expected:'6.0 V',actual:'1.2 V',match:false},
              {id:'F',expected:'4.5 V',actual:'1.1 V',match:false},
              {id:'G',expected:'3.0 V',actual:'1.0 V',match:false},
              {id:'H',expected:'1.5 V',actual:'0.9 V',match:false}
            ],
            lastGood:'D',firstBad:'E',
            feedback:'D is last-known-good and E is first-known-bad. On a long path, testing near the middle of the unexplored region can discard a large fraction of the possibilities before you walk every node.'
          }
        ],
        physical:'This is a reasoning trainer. Physical proficiency still requires safe probe placement and real meter handling on an approved low-voltage circuit.'
      };
    }

    const p4=byId('career-w02-discriminating-measurement');
    if(p4){
      p4.careerInteractive={
        type:'hypothesis',
        title:'Troubleshooting Decision Trainer — choose the measurement that changes the diagnosis',
        intro:'One of three hidden faults is active. Select tests, read the simulated result, and watch hypotheses get eliminated. Repeating a test whose outcomes are identical under every hypothesis costs a measurement but gives you almost no information.',
        hypotheses:[
          {id:'open',label:'Upper resistor open'},
          {id:'short',label:'Output shorted to ground'},
          {id:'missing',label:'Source missing'}
        ],
        tests:[
          {id:'vout',label:'Measure Vout again',mode:'powered DC voltage',results:{open:'0.0 V',short:'0.0 V',missing:'0.0 V'},note:'Low information: all three hypotheses predict the same result.'},
          {id:'source',label:'Measure source-side voltage',mode:'powered DC voltage',results:{open:'12.1 V',short:'12.1 V',missing:'0.0 V'},note:'High information for the missing-source hypothesis.'},
          {id:'rout',label:'Power OFF → measure Vout-to-ground resistance',mode:'de-energized resistance',results:{open:'2.0 kΩ',short:'0.6 Ω',missing:'2.0 kΩ'},note:'High information for the output-short hypothesis. Power must be removed first.'},
          {id:'r1drop',label:'Measure voltage across the upper resistor',mode:'powered DC voltage',results:{open:'12.1 V',short:'12.1 V',missing:'0.0 V'},note:'Useful, but here it separates the same hypothesis set as measuring the source.'}
        ],
        efficientAt:2,
        physical:'The readings are simulated. In physical work, resistance checks require a de-energized circuit, and all powered measurements must stay within the approved low-voltage Week 2 setup.'
      };
    }

    W.week2CareerInteractiveRevision='2026-09-29-v16.3.75-interactive-boundary-and-decision-trainers';
    C.meta=C.meta||{};
    C.meta.week2CareerInteractiveTrainerCount=2;
    C.meta.week2CareerInteractiveTrainerSections=['career-w02-last-good-first-bad','career-w02-discriminating-measurement'];
    C.meta.week2CareerMasteryReviewRouting='exact-section + return-to-question';
  }

  if(AS?.questions){
    const map={
      CQ1067:{week:2,lesson:0,section:'w02-kcl-conservation-charge',title:'KCL: current cannot disappear at a node'},
      CQ1068:{week:2,lesson:0,section:'w02-kvl-conservation-energy',title:'KVL: every voltage rise and drop is accounted for around a loop'},
      CQ0312:{week:2,lesson:0,section:'w02-parallel-same-nodes',title:'Parallel circuits: the same two nodes mean the same voltage'},
      CQ0316:{week:2,lesson:0,section:'w02-divider-ideal-then-loaded',title:'Voltage dividers: learn the ideal case before adding the load'},
      CQ1088:{week:1,lesson:1,section:'concept-2',title:'Voltage, resistance, and current modes are different circuits'},
      CQ0290:{week:1,lesson:0,section:'concept-8',title:'Ohm’s law connects the three quantities you already understand'},
      CQ1204:{week:2,lesson:1,section:'career-w02-predict-before-measuring',title:'Predict before measuring'},
      CQ1205:{week:2,lesson:1,section:'career-w02-fault-signatures',title:'Learn the signatures of common faults'},
      CQ1206:{week:2,lesson:1,section:'career-w02-last-good-first-bad',title:'Find the last good point and the first bad point'},
      CQ1207:{week:2,lesson:1,section:'career-w02-discriminating-measurement',title:'Choose one measurement that separates hypotheses'},
      CQ1208:{week:2,lesson:1,section:'career-w02-change-one-verify',title:'Change one thing, verify the repair, and preserve the evidence'},
      CQ1209:{week:2,lesson:1,section:'career-w02-change-one-verify',title:'Change one thing, verify the repair, and preserve the evidence'}
    };
    Object.entries(map).forEach(([id,r])=>{
      const q=AS.questions.find(x=>x.id===id); if(!q)return;
      q.reviewWeek=r.week;
      q.reviewLessonIndex=r.lesson;
      q.reviewSectionId=r.section;
      q.reviewSectionTitle=r.title;
      q.reviewRouteVersion='16.3.75';
    });
    const test=(AS.weeklyTests||[]).find(x=>Number(x.week)===2);
    if(test){
      test.reviewRouting='Every Week 2 mastery question has an exact teaching-section route; misses can open the section and return to the saved question review.';
      test.reviewRouteVersion='16.3.75';
    }
  }
})();
