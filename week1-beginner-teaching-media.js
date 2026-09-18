/* Alfred University AU-ESET 301 — v16.3.9 Week 1 Beginner-Teacher Media Layer.
   Scope: Week 1 Teaching Media only.
   Purpose: add a beginner-first explanation path using learner-recommended public YouTube
   instructors while preserving every previously verified Week 1 media card.
   Load after teaching-media-content-completion.js so this layer can prepend the clarity path
   without altering the accepted v16.3.6 Teaching Media composition underneath it.
*/
(() => {
  const C = window.ALFRED_CURRICULUM;
  if (!C || !Array.isArray(C.modules)) return;

  C.sources = C.sources || {};
  C.meta = C.meta || {};
  C.meta.week1TeachingMediaRevision = '2026-09-18-beginner-teacher-youtube-layer';

  Object.assign(C.sources, {
    mathScienceVoltageCurrentResistance: {
      title: 'Lesson 1 - Voltage, Current, Resistance (Engineering Circuit Analysis)',
      org: 'Math and Science (Jason Gibson)',
      kind: 'Beginner YouTube engineering lecture',
      url: 'https://www.youtube.com/watch?v=OGa_b26eK2c'
    },
    afrotechmodsWhatIsAmp: {
      title: 'Basic Electricity - What is an amp?',
      org: 'Afrotechmods',
      kind: 'Beginner YouTube electronics tutorial',
      url: 'https://www.youtube.com/watch?v=8gvJzrjwjds'
    },
    afrotechmodsWhatIsVoltage: {
      title: 'Basic Electricity - What is voltage?',
      org: 'Afrotechmods',
      kind: 'Beginner YouTube electronics tutorial',
      url: 'https://www.youtube.com/watch?v=TBt-kxYfync'
    },
    afrotechmodsResistanceOhmsLaw: {
      title: "Basic Electricity - Resistance and Ohm's law",
      org: 'Afrotechmods',
      kind: 'Beginner YouTube electronics tutorial with practical circuit demo',
      url: 'https://www.youtube.com/watch?v=NfcgA1axPLo'
    },
    afrotechmodsPowerWatts: {
      title: 'Basic Electricity - Power and watts',
      org: 'Afrotechmods',
      kind: 'Beginner YouTube electronics tutorial with practical measurement demo',
      url: 'https://www.youtube.com/watch?v=VSpB3HivkhY'
    },
    organicChemTutorBasicCircuits: {
      title: "Electric Current & Circuits Explained, Ohm's Law, Charge, Power, Physics Problems, Basic Electricity",
      org: 'The Organic Chemistry Tutor',
      kind: 'YouTube worked-example physics tutorial',
      url: 'https://www.youtube.com/watch?v=r-SCyD7f_zI'
    },
    afrotechmodsMultimeter: {
      title: 'THE BEST Multimeter tutorial (HD)',
      org: 'Afrotechmods',
      kind: 'Beginner YouTube multimeter demonstration',
      url: 'https://www.youtube.com/watch?v=bF3OyQ3HwfU'
    }
  });

  const week1 = C.modules.find(item => Number(item.week) === 1);
  if (!week1 || !week1.integration) return;

  const beginnerPath = [
    {
      source: 'mathScienceVoltageCurrentResistance',
      role: 'START HERE · Beginner concept bridge',
      use: 'Watch this before the denser Week 1 technical media. Use it to build one mental picture of a closed circuit and of voltage, current, resistance, amps, milliamps, and microamps before formal equation work.',
      watchFor: 'Listen for the everyday physical analogies, the closed-loop requirement, the difference between voltage/current/resistance, and the move from amps to smaller metric-prefixed current units.',
      gap: 'Alfred still supplies the exact Week 1 dependency sequence, formal SI-prefix conversion method, safety gates, required practice, and mastery checks.',
      verifiedEvidence: 'Public YouTube metadata rechecked 2026-09-18: Math and Science, title matched, beginner circuit-analysis lesson; the description states that it teaches voltage, current, and resistance in a typical circuit.'
    },
    {
      source: 'afrotechmodsWhatIsAmp',
      role: 'CLARITY · Current and amperes',
      use: 'Use this when current still feels like just a letter I in an equation. Focus on what moving charge means and what an ampere represents physically.',
      watchFor: 'Connect amperes to rate of charge flow, keep conventional-current language separate from electron motion, and say current goes through a path rather than across it.',
      gap: 'Alfred remains the controlling source for the exact Week 1 wording, unit-conversion method, circuit predictions, and assessed terminology.',
      verifiedEvidence: 'YouTube and the creator site were rechecked 2026-09-18. Afrotechmods identifies this as the first Basic Electricity lesson and explicitly teaches electrical current and amps.'
    },
    {
      source: 'afrotechmodsWhatIsVoltage',
      role: 'CLARITY · Voltage',
      use: 'Use this immediately after current so voltage becomes an understandable physical idea instead of a number that appears in formulas.',
      watchFor: 'Connect volts to energy per charge, distinguish voltage from current, and notice that voltage is always a difference between two points even when a reference node is implied.',
      gap: 'Alfred supplies the formal two-point/reference-node language, required examples, safety framing, and the course-specific prediction/measurement workflow.',
      verifiedEvidence: 'YouTube and the creator site were rechecked 2026-09-18. The public description explicitly covers volts, coulombs, joules, power supplies, and what voltage does.'
    },
    {
      source: 'afrotechmodsResistanceOhmsLaw',
      role: "CLARITY · Resistance and Ohm's law",
      use: 'Watch after current and voltage. Use the resistor/LED example to connect resistance to a real component and then connect voltage, current, and resistance through Ohm\'s law.',
      watchFor: 'Predict direction first: at fixed voltage, more resistance means less current. Then connect that physical relationship to V = IR instead of treating the formula as isolated memorization.',
      gap: 'Alfred supplies the complete Week 1 algebra/rearrangement method, SI-prefix conversions, rating checks, and required practice problems.',
      verifiedEvidence: 'Creator page and indexed video metadata rechecked 2026-09-18: tutorial covers resistance, resistors, Ohm\'s law, the V-I-R relationship, and a simple resistor + LED circuit.'
    },
    {
      source: 'afrotechmodsPowerWatts',
      role: 'CLARITY · Electrical power and watts',
      use: 'Use this after Ohm\'s law to give watts a physical meaning and to see why component power ratings matter in an actual circuit.',
      watchFor: 'Connect power to the rate of energy transfer, relate P = VI to measured voltage/current, and notice how a resistor can be electrically correct in ohms yet undersized in watts.',
      gap: 'Alfred supplies the exact Week 1 power-equation set, worked rating example, safety boundaries, and mastery requirements.',
      verifiedEvidence: 'YouTube and creator materials rechecked 2026-09-18: the tutorial covers electrical power/watts, a practical light-bulb power measurement, and resistor-size calculation.'
    },
    {
      source: 'organicChemTutorBasicCircuits',
      role: 'WORKED PRACTICE · Charge, Ohm’s law, and power',
      use: 'Use this after the concepts make sense. Work along with the examples instead of watching passively, pausing before each calculation to predict the relationship and units.',
      watchFor: 'Practice V = IR, P = VI, Q = It, current as coulombs per second, conventional current versus electron flow, and dimensional/unit checks.',
      gap: 'The video also reaches examples beyond the Week 1 target. Alfred determines what is required this week and supplies the course-specific practice/mastery sequence.',
      verifiedEvidence: 'Public YouTube metadata rechecked 2026-09-18: the verified channel description explicitly lists DC circuits, voltage/current/resistance, Ohm\'s law, charge, power, equations, units, and worked problems.'
    },
    {
      source: 'afrotechmodsMultimeter',
      role: 'BENCH BRIDGE · Multimeter fundamentals',
      use: 'Use this after you can predict voltage, current, and resistance conceptually. Connect the quantities to what a real meter measures before the Week 1 bench workflow.',
      watchFor: 'Notice mode/range selection, probe jacks, voltage measured across two points, current measured through a circuit path, de-energized resistance/continuity checks, and the consequences of using the current jack incorrectly.',
      gap: 'The specific meter shown is old and its shopping advice is not part of the course. Alfred and the retained Fluke/safety resources control present-day measurement safety and the required hands-on procedure.',
      verifiedEvidence: 'YouTube and creator site rechecked 2026-09-18: tutorial explicitly demonstrates voltage, current, resistance, and continuity measurement; the creator notes that the exact meter model is discontinued.'
    }
  ];

  const existing = Array.isArray(week1.integration.media) ? week1.integration.media : [];
  const newIds = new Set(beginnerPath.map(card => card.source));
  week1.integration.media = [
    ...beginnerPath,
    ...existing.filter(card => card && !newIds.has(card.source))
  ];
  week1.sourceIds = [...new Set([
    ...(week1.sourceIds || []),
    ...beginnerPath.map(card => card.source)
  ])];
})();
