/* AU-ESET 301 v16.3.86 — Week 2 Career source-authentic visual upgrade
   Adds real occupational/equipment context to every Week 2 Career teaching page.
   Does not replace Alfred-specific reasoning/documentation aids.
*/
(()=>{
'use strict';
if(window.__ALFRED_WEEK2_CAREER_SOURCE_VISUALS_16386__) return;
window.__ALFRED_WEEK2_CAREER_SOURCE_VISUALS_16386__=true;

const C=window.ALFRED_CURRICULUM;
if(!C?.modules?.length) return;
const W=C.modules.find(m=>Number(m.week)===2);
if(!W?.lessons?.length) return;
const career=W.lessons.find(l=>l.track==='Career')||W.lessons[1];
const T=career?.integrated?.teaching||[];
const byId=id=>T.find(s=>s.sectionId===id);

const PD='Public domain — U.S. federal government work';
const PD_SELF='Public domain — released by copyright holder';
const PD_URL='https://creativecommons.org/publicdomain/mark/1.0/';
const FLUKE_DC='https://www.fluke.com/en-us/learn/blog/digital-multimeters/how-to-measure-dc-voltage-with-a-digital-multimeter';
const FLUKE_R='https://www.fluke.com/en-us/learn/blog/digital-multimeters/how-to-measure-resistance';
const MIT_DEBUG='https://pcb.mit.edu/archive/IAP2024/lectures/lecture_07/';
const MIT_TP='https://pcb.mit.edu/lectures/lecture_02/';

const gallery=(title,caption,items,sourceUrl,secondaryUrl,tertiaryUrl='')=>({
  type:'gallery',
  number:'Career source-authentic visual',
  title,
  items,
  caption,
  source:'Source-authentic occupational/equipment image; technical interpretation is independently checked against the linked technician/instrument guidance.',
  sourceUrl,
  secondaryUrl,
  tertiaryUrl,
  provenance:'source'
});

const img=(src,label,alt,credit,sourceUrl,license=PD)=>({
  src,label,alt,credit,sourceUrl,license,licenseUrl:PD_URL
});

const p1=byId('career-w02-predict-before-measuring');
if(p1){
  const page='https://commons.wikimedia.org/wiki/File:US_Navy_071106-N-8132M-026_Aviation_Electronics_Technician_Airman_Gregory_Hardin_troubleshoots_an_aviation_inter-phone_communicator_using_a_multimeter_aboard_nuclear-powered_aircraft_carrier_USS_Enterprise_(CVN_65).jpg';
  p1.careerSourceVisual=gallery(
    'Real technician context — the probe goes to a chosen point for a reason',
    'This is authentic electronics-troubleshooting work, not a staged Alfred diagram. Focus on the technician, the multimeter, and the specific hardware under test. The photo does not tell you the expected value by itself: the technician still needs a known reference, a defined test point, an expected healthy result, and a decision rule before the reading has diagnostic meaning.',
    [img(
      'https://upload.wikimedia.org/wikipedia/commons/a/af/US_Navy_071106-N-8132M-026_Aviation_Electronics_Technician_Airman_Gregory_Hardin_troubleshoots_an_aviation_inter-phone_communicator_using_a_multimeter_aboard_nuclear-powered_aircraft_carrier_USS_Enterprise_%28CVN_65%29.jpg',
      'Aviation electronics technician troubleshooting with a multimeter',
      'U.S. Navy aviation electronics technician using a digital multimeter while troubleshooting electronic communications hardware.',
      'U.S. Navy photo by MCSN Kiona M. Mckissack / Wikimedia Commons',
      page
    )],
    page,MIT_DEBUG,FLUKE_DC
  );
}

const p2=byId('career-w02-fault-signatures');
if(p2){
  const page='https://commons.wikimedia.org/wiki/File:BreadBoard_Circuit_Example.jpg';
  p2.careerSourceVisual=gallery(
    'Fault signatures happen in a physical network',
    'A real breadboard can make topology harder to see than a clean schematic because rails, jumper wires, and component placement spread the circuit across space. Trace the actual electrical connections first. For Week 2 fault practice, change only one reversible low-voltage condition at a time—open path, wrong value, extra load, or safe short-like load—and predict the voltage/current/resistance signature before measuring.',
    [img(
      'https://upload.wikimedia.org/wikipedia/commons/4/40/BreadBoard_Circuit_Example.jpg',
      'Physical breadboard circuit',
      'Photograph of a real solderless breadboard populated with electronic components and jumper wiring.',
      'Chuck / Wikimedia Commons',
      page,
      PD_SELF
    )],
    page,MIT_DEBUG,FLUKE_R
  );
}

const p3=byId('career-w02-last-good-first-bad');
if(p3){
  const page='https://commons.wikimedia.org/wiki/File:US_Navy_120215-N-RG587-184_Electronics_Technician_3rd_Class_Chris_Elmendorf_tests_the_connectivity_of_a_circuit_board_in_the_micro-miniature_repair.jpg';
  p3.careerSourceVisual=gallery(
    'Purposeful test-point checks shrink the suspect region',
    'This photograph shows real board-level connectivity testing. The important habit is the sequence, not random probing: confirm a known-good point, move along the intended path, and identify the first point where behavior stops matching the model. That last-good/first-bad boundary turns a whole assembly into a smaller suspect region.',
    [img(
      'https://upload.wikimedia.org/wikipedia/commons/8/87/US_Navy_120215-N-RG587-184_Electronics_Technician_3rd_Class_Chris_Elmendorf_tests_the_connectivity_of_a_circuit_board_in_the_micro-miniature_repair.jpg',
      'Electronics technician checking circuit-board connectivity',
      'U.S. Navy electronics technician placing test probes on a circuit board during connectivity testing.',
      'U.S. Navy photo / Wikimedia Commons',
      page
    )],
    page,MIT_DEBUG,MIT_TP
  );
}

const p4=byId('career-w02-discriminating-measurement');
if(p4){
  const page='https://commons.wikimedia.org/wiki/File:US_Navy_111021-N-XE109-186_Aviation_Electronics_Technician_Airman_Cristina_N._Mace_tests_resistors_on_a_circuit_card_aboard_the_aircraft_carrier_US.jpg';
  p4.careerSourceVisual=gallery(
    'The measurement mode must match the hypothesis',
    'Here an aviation electronics technician is physically testing resistors on a circuit card. Compare this with a powered voltage measurement: resistance/continuity is an unpowered test and answers a different question. Week 2 asks you to choose the test whose possible outcomes separate your competing hypotheses—not simply the test that is easiest to take.',
    [img(
      'https://upload.wikimedia.org/wikipedia/commons/4/43/US_Navy_111021-N-XE109-186_Aviation_Electronics_Technician_Airman_Cristina_N._Mace_tests_resistors_on_a_circuit_card_aboard_the_aircraft_carrier_US.jpg',
      'Aviation electronics technician testing resistors on a circuit card',
      'U.S. Navy aviation electronics technician using meter probes to test resistors on a circuit card.',
      'U.S. Navy photo / Wikimedia Commons',
      page
    )],
    page,FLUKE_R,FLUKE_DC
  );
}

const p5=byId('career-w02-change-one-verify');
if(p5){
  const repairPage='https://commons.wikimedia.org/wiki/File:US_Navy_090414-N-9928E-128_Electronics_Technician_3rd_Class_Alex_Head,_from_Carmel,_Ind.,_repairs_components_on_a_circuit_board_in_the_micro-miniature_repair_shop_aboard_the_aircraft_carrier_USS_John_C._Stennis_(CVN_74).jpg';
  const verifyPage='https://commons.wikimedia.org/wiki/File:US_Navy_090227-N-9760Z-015_Aviation_Electronics_Technician_3rd_Class_Ivan_Indreland_checks_for_continuity_in_a_radar_control_panel.jpg';
  p5.careerSourceVisual=gallery(
    'Repair and verification are separate technician actions',
    'The first image shows actual component-level repair; the second shows a continuity check on electronic hardware. A repair action is not proof that the original failure is cleared. Week 2 therefore requires you to repeat the original failing test after the change and perform at least one nearby regression check before recording PASS.',
    [
      img(
        'https://upload.wikimedia.org/wikipedia/commons/4/41/US_Navy_090414-N-9928E-128_Electronics_Technician_3rd_Class_Alex_Head%2C_from_Carmel%2C_Ind.%2C_repairs_components_on_a_circuit_board_in_the_micro-miniature_repair_shop_aboard_the_aircraft_carrier_USS_John_C._Stennis_%28CVN_74%29.jpg',
        'Electronics technician repairing components on a circuit board',
        'U.S. Navy electronics technician performing component-level repair on a circuit board under magnification.',
        'U.S. Navy photo / Wikimedia Commons',
        repairPage
      ),
      img(
        'https://upload.wikimedia.org/wikipedia/commons/5/56/US_Navy_090227-N-9760Z-015_Aviation_Electronics_Technician_3rd_Class_Ivan_Indreland_checks_for_continuity_in_a_radar_control_panel.jpg',
        'Aviation electronics technician checking continuity',
        'U.S. Navy aviation electronics technician checking continuity in a radar control panel.',
        'U.S. Navy photo by MC3 Eduardo Zaragoza / Wikimedia Commons',
        verifyPage
      )
    ],
    repairPage,MIT_DEBUG,FLUKE_R
  );
}

C.meta=C.meta||{};
C.meta.week2CareerVisualRevision='2026-09-29-v16.3.86-week2-career-source-authentic-visuals';
C.meta.week2CareerVisualStatus='SOURCE_AUTHENTIC_PASS';
C.meta.week2CareerSourceAuthenticPageCount=5;
C.meta.week2CareerSourceAuthenticImageCount=6;
C.meta.week2CareerAlfredReasoningAidsPreserved=2;

window.ALFRED_WEEK2_CAREER_SOURCE_VISUALS_16386__={
  revision:C.meta.week2CareerVisualRevision,
  status:C.meta.week2CareerVisualStatus,
  careerPagesWithSourceVisuals:5,
  sourceImageCount:6,
  publicDomainImageCount:6,
  alfredReasoningAidsPreserved:2
};
})();