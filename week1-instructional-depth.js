/* Alfred University AU-ESET 301 — v16.3.8 Week 1 instructional-depth overlay.
   Scope is deliberately limited to Week 1. It leaves Weeks 2–31 and all
   assessment/progress/cloud identities untouched. */
(() => {
  const C = window.ALFRED_CURRICULUM;
  if (!C || !Array.isArray(C.modules)) return;
  const module = C.modules.find(item => Number(item.week) === 1);
  if (!module || !Array.isArray(module.lessons) || module.lessons.length < 2) return;

  C.meta = C.meta || {};
  C.meta.week1InstructionRevision = '2026-09-18-from-zero-visual-teaching';

  const ceta = module.lessons[0];
  const d = ceta.integrated || (ceta.integrated = {});

  const safetyTitles = new Set([
    'Shock physiology, emergency response, and First Aid boundaries',
    'NEC awareness, overcurrent protection, and lockout/tagout',
    'ESD, technician tool hazards, and PPE',
    'RF exposure and fiber-optic hazards',
    'Ladders, service vehicles, and fire classes'
  ]);
  const preservedSafety = (d.teaching || []).filter(section => safetyTitles.has(section.title));

  ceta.objectives = [
    'Build voltage, current, resistance, and power from the underlying ideas of charge, energy, and a closed circuit path.',
    'Read and convert common electronics prefixes—mega, kilo, milli, micro, nano, and pico—without guessing at decimal movement.',
    'Use V = IR and P = VI with units, proportional reasoning, and a reasonableness check instead of memorizing a formula triangle.',
    'Explain open, closed, and short circuits and distinguish a circuit reference node from earth ground.',
    'Connect a calculation to what a technician will later measure across or through a real circuit.'
  ];
  d.objectives = ceta.objectives.slice();
  d.version = '16.3.8-week1-depth';
  d.purpose = 'Start at zero and build the electrical model in dependency order. You will first learn what charge is, then what current measures, why voltage must be between two points, how resistance changes current, how SI prefixes scale units, and only then how Ohm’s law and power connect those ideas. The goal is understanding you can use—not vocabulary you can repeat.';
  d.prereq = 'Only basic arithmetic is assumed: addition, subtraction, multiplication, and division. You do not need prior electronics, scientific notation, metric-prefix knowledge, or algebra fluency. Powers of ten, prefixes, unit conversion, and equation rearrangement are taught here before they are required.';
  d.visualId = null;

  const sourceMeta = {
    openstaxPhysics: {
      source: 'OpenStax University Physics Volume 2 — UCF Pressbooks mirror',
      sourceUrl: 'https://pressbooks.online.ucf.edu/osuniversityphysics2/',
      license: 'CC BY 4.0 except where otherwise noted',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/'
    },
    nistPrefixes: {
      source: 'National Institute of Standards and Technology (NIST) — Metric (SI) Prefixes',
      sourceUrl: 'https://www.nist.gov/pml/owm/metric-si-prefixes',
      license: 'Source data cited from NIST; table adapted for electronics instruction',
      licenseUrl: ''
    },
    openstaxChem: {
      source: 'OpenStax Chemistry — Table 1.3 Common Unit Prefixes',
      sourceUrl: 'https://openstax.org/books/chemistry/pages/1-4-measurements',
      license: 'CC BY 4.0; electronics examples adapted for this course',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/'
    }
  };

  d.teaching = [
    {
      title: 'Start with charge: what electricity is actually moving',
      buildOn: 'Nothing specialized. This is the foundation for every electrical idea that follows.',
      text: `Matter is made of atoms. For the electrical model you need only three pieces: protons carry positive charge, electrons carry negative charge, and neutrons are electrically neutral. An object is electrically neutral when its total positive and negative charge balance. If electrons are transferred away or added, the object can have a net charge.

Electric charge is a property of matter, not the same thing as energy and not the same thing as current. The SI unit of charge is the coulomb, symbol C. One electron carries an extremely small negative charge, so ordinary circuit currents involve enormous numbers of charge carriers.

In metals such as copper, some electrons can move through the material much more easily than they can in an insulator. That ability to move is what makes a metal conductor useful in a circuit. See Figure 1.1: the figure shows charge being transferred from one material to another. The important idea is not the rubbing itself; it is that charge can be separated and transferred while total charge is conserved. We will now ask a new question: if charge moves through a wire, how fast is it moving past a point? That question creates the idea of current.`,
      remember: 'Charge is the electrical property. Current will describe the rate at which charge passes a point.',
      figure: {
        number: 'Figure 1.1',
        title: 'Charge transfer creates a net positive and negative charge',
        src: 'https://pressbooks.online.ucf.edu/app/uploads/sites/372/2021/04/CNX_UPhysics_22_01_AmberChg.jpg',
        alt: 'OpenStax illustration showing neutral amber and cloth, electron transfer while rubbed together, then amber with net negative charge and cloth with net positive charge.',
        caption: 'Both objects begin neutral. Electrons transfer during contact, leaving equal-and-opposite net charges. Use this picture to separate the idea of charge itself from the later idea of charge flowing continuously in a circuit.',
        source: sourceMeta.openstaxPhysics.source + ', Figure 5.5',
        sourceUrl: 'https://pressbooks.online.ucf.edu/osuniversityphysics2/chapter/electric-charge/',
        license: sourceMeta.openstaxPhysics.license,
        licenseUrl: sourceMeta.openstaxPhysics.licenseUrl
      }
    },
    {
      title: 'Current: charge moving through a path over time',
      buildOn: 'Section 1: charge exists and can move through a conductor.',
      text: `Electrical current tells you how quickly charge passes a point in a circuit. The symbol for current is I and the unit is the ampere, shortened to amp and written A. One ampere means one coulomb of charge passes a point each second: 1 A = 1 C/s.

That definition gives current physical meaning. If 2 coulombs pass a point in 1 second, the average current is 2 A. If the same 2 coulombs take 4 seconds, the average current is 0.5 A. More charge per second means more current.

Circuit diagrams use conventional current direction: from higher electric potential toward lower potential through the external circuit. In metal wires, the mobile electrons themselves drift in the opposite direction because electrons are negatively charged. That is not a contradiction. Conventional current was defined before electrons were understood, and engineering equations and schematics still use that convention. Unless a lesson specifically asks about electron motion, follow the conventional-current arrows shown in schematics.

Keep the language precise: current flows through a component or branch. We will soon contrast that with voltage, which is measured between two points.`,
      remember: 'Current is a rate: charge per time. In a circuit, think “current through,” not “current across.”'
    },
    {
      title: 'Voltage: an energy difference between two points',
      buildOn: 'Sections 1–2: charge can move, and current measures how much charge passes per second.',
      text: `Charge does not keep moving around a circuit merely because a wire exists. A source such as a battery or bench supply establishes an electrical potential difference between two points. The common name for electric potential difference is voltage, symbol V.

One volt means one joule of energy change per coulomb of charge: 1 V = 1 J/C. A 5 V source therefore establishes a 5-joule-per-coulomb potential difference between its terminals. You do not need to calculate joules in most Week 1 problems; the definition matters because it explains what voltage represents physically—an energy difference available to move charge or transfer energy in a circuit.

Voltage does not “flow.” Current can flow; voltage is a comparison between two locations. Saying “this node is 3.3 V” is incomplete unless a reference is understood. In electronics we often choose one node as 0 V and call it ground or circuit common, then report other node voltages relative to that point. That chosen circuit reference is not automatically connected to the earth.

This gives you a language rule that will prevent many later mistakes: current is through a path; voltage is across or between two points.`,
      remember: 'Voltage is energy difference per charge and always compares two points. It is not a substance moving through the wire.'
    },
    {
      title: 'A circuit needs a closed path',
      buildOn: 'Current needs moving charge; voltage provides an energy difference that can drive that motion.',
      text: `For steady current to continue, charge needs a complete route. A basic DC circuit therefore has a source, a conductive path, a load or component that receives energy, and a return path to the source. “Return” is not an optional afterthought—it completes the loop.

A closed circuit has a continuous path, so current can flow if a voltage difference exists. An open circuit has a break in the path. With no continuous route, steady current through that branch falls essentially to zero even though a voltage can still exist across the opening. A short circuit is an unintended very-low-resistance path that bypasses the intended load or directly connects points that should not be connected. Because the resistance is so small, current can become very large and is then limited mainly by the source and wiring.

This is why a wire placed directly across a supply is not “harmless because a wire has almost zero volts across it.” Low resistance is exactly what can make the current dangerously high. Later, Ohm’s law will give you the mathematical relationship behind that statement.`,
      remember: 'Closed path → current can flow. Open path → current stops. Unintended low-resistance path → short-circuit current can become very large.'
    },
    {
      title: 'Resistance: why the same voltage does not produce the same current everywhere',
      buildOn: 'Voltage can drive charge around a closed path; current tells how much charge moves per second.',
      text: `Different materials and components oppose charge motion by different amounts. We describe that opposition with resistance, symbol R, measured in ohms, symbol Ω (the Greek capital letter omega).

A resistor is a physical component designed to provide a useful amount of resistance. Resistance itself is the electrical property; a resistor is one device that has that property. Wires also have resistance, switches have contact resistance, and sensors can change resistance with temperature, light, force, or other conditions.

At a fixed voltage, a larger resistance allows less current; a smaller resistance allows more current. Physically, resistance depends on the material and geometry of a conductor: in the same material, a longer path generally has more resistance and a thicker path generally has less. Temperature can also change resistance. You will study those details later. For Week 1, the essential connection is cause and effect: voltage is the potential difference, resistance limits the resulting current, and current is the rate of charge flow that actually occurs.`,
      remember: 'Resistance is not current and not voltage. It is a property that changes how much current results from a given voltage.'
    },
    {
      title: 'SI prefixes are multipliers attached to units',
      buildOn: 'You now know the quantities and their base units: volts, amps, ohms, and watts. The next problem is scale.',
      text: `Electronics regularly uses values far larger or smaller than one base unit. Writing 0.000001 A or 4,700,000 Ω repeatedly is hard to read, so engineers attach SI prefixes to unit symbols. A prefix does not create a new electrical quantity; it multiplies the unit by a power of ten.

A power of ten is compact multiplication. 10³ means 10 × 10 × 10 = 1,000. A negative exponent means the reciprocal: 10⁻³ = 1/10³ = 1/1,000 = 0.001. So kilo (k) means ×1,000, while milli (m) means ×0.001. Micro (µ) means ×0.000001. The prefix belongs to the unit: 4.7 kΩ means 4.7 × 1,000 ohms, not “4.7 special ohms.”

Capitalization matters. In SI notation, kilo is lowercase k, milli is lowercase m, micro uses µ, nano uses n, while mega uses uppercase M. Confusing m and M changes a value by a factor of one billion. Figure 1.2 gives the subset you will see constantly in electronics.`,
      remember: 'Read every prefix as a multiplier first. k = 10³; M = 10⁶; m = 10⁻³; µ = 10⁻⁶; n = 10⁻⁹; p = 10⁻¹².',
      figure: {
        type: 'table',
        number: 'Figure 1.2',
        title: 'Common SI prefixes used in electronics',
        columns: ['Prefix', 'Symbol', 'Factor', 'Plain meaning', 'Electronics example'],
        rows: [
          ['mega', 'M', '10⁶', '1,000,000', '1 MΩ = 1,000,000 Ω'],
          ['kilo', 'k', '10³', '1,000', '4.7 kΩ = 4,700 Ω'],
          ['base unit', '—', '10⁰', '1', '1 A = 1 A'],
          ['milli', 'm', '10⁻³', '0.001', '15 mA = 0.015 A'],
          ['micro', 'µ', '10⁻⁶', '0.000001', '250 µA = 0.000250 A'],
          ['nano', 'n', '10⁻⁹', '0.000000001', '100 nF = 0.000000100 F'],
          ['pico', 'p', '10⁻¹²', '0.000000000001', '22 pF = 0.000000000022 F']
        ],
        caption: 'This electronics-focused subset is adapted from the SI prefix tables published by NIST and OpenStax. The powers of ten are the rule; “moving the decimal” is only a shortcut that follows from multiplying or dividing by those powers.',
        source: sourceMeta.nistPrefixes.source + '; ' + sourceMeta.openstaxChem.source,
        sourceUrl: sourceMeta.nistPrefixes.sourceUrl,
        secondaryUrl: sourceMeta.openstaxChem.sourceUrl,
        license: sourceMeta.openstaxChem.license,
        licenseUrl: sourceMeta.openstaxChem.licenseUrl
      }
    },
    {
      title: 'Convert units by using the multiplier—not by memorizing a decimal trick',
      buildOn: 'Section 6: each prefix is a known power-of-ten multiplier.',
      text: `A reliable conversion method has four steps: identify the starting prefix, replace the prefix with its multiplier, do the arithmetic, then write the result with the target unit. This works even when you forget which direction someone told you to “move the decimal.”

Example 1: 4.7 kΩ. Kilo means ×1,000, so 4.7 kΩ = 4.7 × 1,000 Ω = 4,700 Ω. The decimal appears to move three places right because multiplying by 1,000 has that effect.

Example 2: 3,300 Ω to kΩ. One kilohm contains 1,000 ohms, so divide by 1,000: 3,300 Ω ÷ 1,000 = 3.3 kΩ. The decimal appears to move left because division by 1,000 has that effect.

Example 3: 2 mA. Milli means 0.001, so 2 mA = 2 × 0.001 A = 0.002 A. Going the other direction, 0.015 A contains fifteen thousandths of an amp, so 0.015 A = 15 mA.

Example 4: 250 µA to mA. 250 µA = 250 × 10⁻⁶ A = 0.000250 A. Since 1 mA = 0.001 A, divide 0.000250 A by 0.001 A/mA to get 0.250 mA. A useful reasonableness check is that micro is a smaller unit than milli, so the numerical count should shrink when you convert 250 microamps into the larger milliamp unit.

Whenever a conversion feels uncertain, return to the factor. The factor is the reason; decimal movement is only the visible result.`,
      remember: 'Smaller unit → more of them. Larger unit → fewer of them. Prove the direction with the prefix factor instead of guessing.'
    },
    {
      title: 'Ohm’s law connects the three quantities you already understand',
      buildOn: 'Voltage is the driving potential difference, resistance opposes current, and the units can now be converted correctly.',
      text: `For an ohmic resistor under stable conditions, voltage, current, and resistance are related by V = I × R. This is Ohm’s law. It is not three unrelated formulas and you do not need a formula triangle.

If voltage and resistance are known, start with V = IR and divide both sides by R. On the left you get V/R; on the right R/R becomes 1, leaving I. Therefore I = V/R. If voltage and current are known, divide both sides by I to get R = V/I. That is ordinary “undo the multiplication” arithmetic written with symbols.

Units also tell a story. V/Ω gives A. For example, 5 V / 2,000 Ω = 0.0025 A. Because 0.0025 A = 2.5 mA, the result is 2.5 mA. You may later notice the convenient shortcut V/kΩ = mA, but now you know why it works: the 1,000 in kilohms and the 1/1,000 in milliamps cancel in the unit scaling.

See Figure 1.3. The voltmeter is connected across the resistor because voltage compares two points. The ammeter is inserted into the path because current is what passes through the branch. The picture is the physical version of the words “voltage across, current through.”`,
      remember: 'Write the relationship first, solve for the unknown second, substitute numbers with units third, and check whether the direction of change makes sense.',
      figure: {
        number: 'Figure 1.3',
        title: 'How voltage and current are measured in an Ohm’s-law experiment',
        src: 'https://pressbooks.online.ucf.edu/app/uploads/sites/372/2021/04/CNX_UPhysics_26_04_OhmsSetup.jpg',
        alt: 'OpenStax schematic of a battery and resistor with an ammeter in series and voltmeter in parallel, shown for both battery polarities.',
        caption: 'The voltmeter is across the resistor; the ammeter is in series with the current path. Reversing the source reverses current direction and measurement sign. This same placement logic carries directly into Subject 2 bench work.',
        source: sourceMeta.openstaxPhysics.source + ', Figure 9.19',
        sourceUrl: 'https://pressbooks.online.ucf.edu/osuniversityphysics2/chapter/ohms-law/',
        license: sourceMeta.openstaxPhysics.license,
        licenseUrl: sourceMeta.openstaxPhysics.licenseUrl
      }
    },
    {
      title: 'Predict the direction of change before touching the calculator',
      buildOn: 'Section 8: I = V/R is now a relationship with physical meaning.',
      text: `A calculation is more useful when you can predict its direction first. Hold resistance constant. If voltage doubles, I = V/R says current doubles. Hold voltage constant. If resistance doubles, current is cut in half. These are proportional relationships.

This gives you a powerful troubleshooting habit. Suppose a 5 V circuit with a 1 kΩ resistor should carry about 5 mA. If you accidentally install 10 kΩ instead, the resistance is ten times larger, so you should expect current to be about ten times smaller before you ever calculate the exact value. If a meter later shows 0.5 mA, that result is physically plausible. If it shows 50 mA, something about your model, wiring, component value, or measurement is wrong.

Figure 1.4 shows measured voltage versus current for an ohmic resistor. The points fall near a straight line. The slope V/I is the resistance. The graph is not a separate fact to memorize; it is Ohm’s law made visible.`,
      remember: 'Predict up/down and rough size first. Exact arithmetic comes second. A result that violates the predicted trend deserves investigation.',
      figure: {
        number: 'Figure 1.4',
        title: 'Ohm’s law made visible: voltage and current form a straight-line relationship',
        src: 'https://pressbooks.online.ucf.edu/app/uploads/sites/372/2021/04/CNX_UPhysics_26_04_OhmsResult.jpg',
        alt: 'OpenStax graph of voltage versus current for an ohmic resistor, showing an approximately straight line through the origin with resistance about 3.84 ohms.',
        caption: 'For an ohmic resistor, V and I are proportional. On this V-versus-I graph, the slope V/I is the resistance. Use the graph to connect the equation to a physical pattern rather than memorizing symbols alone.',
        source: sourceMeta.openstaxPhysics.source + ', Figure 9.20',
        sourceUrl: 'https://pressbooks.online.ucf.edu/osuniversityphysics2/chapter/ohms-law/',
        license: sourceMeta.openstaxPhysics.license,
        licenseUrl: sourceMeta.openstaxPhysics.licenseUrl
      }
    },
    {
      title: 'Power: how quickly electrical energy is transferred',
      buildOn: 'Voltage describes energy per charge; current describes charge per second. Combining them gives energy per second.',
      text: `Electrical power tells you the rate at which energy is transferred or converted. The symbol is P and the unit is the watt, W. One watt is one joule per second: 1 W = 1 J/s.

Now connect the earlier definitions. Voltage is joules per coulomb (J/C). Current is coulombs per second (C/s). Multiply them: (J/C) × (C/s) = J/s = W. That is why P = VI is physically sensible. The coulombs cancel, leaving energy per time.

For a resistor, combine P = VI with Ohm’s law. Substitute V = IR into P = VI and you get P = I²R. Or substitute I = V/R and get P = V²/R. These are not new laws; they are the same power relationship rewritten using Ohm’s law. Choose the form that uses the values you actually know.

Power matters because components convert electrical energy into heat, light, motion, radio waves, and other forms. A resistor with a 0.25 W rating is intended to dissipate no more than its rated power under specified conditions. A correct current calculation is therefore incomplete until you check the resulting power against the component and source ratings.`,
      remember: 'P = VI is the foundation. I²R and V²/R are derived shortcuts for resistors, not separate ideas.'
    },
    {
      title: 'Put the model together: predict before you measure',
      buildOn: 'All prior sections: quantity meanings, unit scale, Ohm’s law, proportional reasoning, and power.',
      text: `Take a 5 V source and a 2 kΩ resistor. Before calculating, predict: the resistance is in the thousands of ohms, so the current should be only a few milliamps, not amps. Convert 2 kΩ to 2,000 Ω. Then I = 5 V / 2,000 Ω = 0.0025 A = 2.5 mA. Power is P = VI = 5 V × 0.0025 A = 0.0125 W = 12.5 mW.

Now translate the math into a bench prediction. A voltmeter placed across the resistor should read about 5 V if the resistor is directly across an ideal 5 V source. An ammeter inserted in the branch should read about 2.5 mA. If the resistor were changed to 4 kΩ while voltage stayed 5 V, current should roughly halve. If the meter instead reported hundreds of milliamps, stop and investigate—you would have evidence that the real circuit does not match the intended model.

That sequence—understand → convert units → predict trend → calculate → predict measurement → measure → compare—is the Week 1 habit that the rest of the course will build on. We will not reteach these foundations from scratch every week. Later lessons will call them forward and add one layer at a time.`,
      remember: 'The calculation is a prediction about a physical circuit. Measurement is evidence that tests the prediction.'
    },
    ...preservedSafety
  ];

  d.workedExamples = [
    {
      problem: 'Convert 4.7 kΩ to ohms and 250 µA to milliamps.',
      known: 'k = 10³; µ = 10⁻⁶; m = 10⁻³.',
      reasoning: 'Replace each prefix with its multiplier first. Do not start with a memorized decimal-direction rule.',
      steps: [
        '4.7 kΩ = 4.7 × 10³ Ω = 4.7 × 1,000 Ω = 4,700 Ω.',
        '250 µA = 250 × 10⁻⁶ A = 0.000250 A.',
        '1 mA = 0.001 A, so 0.000250 A ÷ 0.001 A/mA = 0.250 mA.'
      ],
      answer: '4.7 kΩ = 4,700 Ω; 250 µA = 0.250 mA.',
      meaning: 'The physical quantities did not change—only the size of the unit used to express them changed.',
      sanity: 'A kilohm is larger than an ohm, so 4.7 kΩ must be thousands of ohms. A milliamp is larger than a microamp, so 250 µA must become a smaller numerical count when expressed in mA.'
    },
    {
      problem: 'A 5 V source is applied across a 2 kΩ resistor. Find current.',
      known: 'V = 5 V; R = 2 kΩ = 2,000 Ω.',
      reasoning: 'Voltage and resistance are known, so solve V = IR for I by dividing by R.',
      steps: [
        'I = V/R.',
        'I = 5 V / 2,000 Ω = 0.0025 A.',
        '0.0025 A × 1,000 mA/A = 2.5 mA.'
      ],
      answer: 'I = 2.5 mA.',
      meaning: 'A few volts across a few kilohms should produce a few milliamps. This is the same relationship used by the required lesson check.',
      sanity: 'If the resistor doubled to 4 kΩ with the same 5 V, current should halve to about 1.25 mA.'
    },
    {
      problem: 'A branch has 12 V across it and carries 6 mA. Find resistance.',
      known: 'V = 12 V; I = 6 mA = 0.006 A.',
      reasoning: 'Start with V = IR. Divide by I to isolate resistance: R = V/I.',
      steps: [
        'R = 12 V / 0.006 A.',
        'R = 2,000 Ω.',
        '2,000 Ω ÷ 1,000 Ω/kΩ = 2 kΩ.'
      ],
      answer: 'R = 2 kΩ.',
      meaning: 'The same Ohm’s-law relationship works no matter which one of the three variables is unknown.',
      sanity: '12 V across only 2 Ω would imply 6 A, not 6 mA. The milli prefix is decisive.'
    },
    {
      problem: 'A 12 V source is across a 680 Ω resistor. Find current and resistor power, then evaluate a 1/8 W rating.',
      known: 'V = 12 V; R = 680 Ω; 1/8 W = 0.125 W.',
      reasoning: 'Current comes first from I = V/R. Then power follows from P = VI.',
      steps: [
        'I = 12/680 A ≈ 0.01765 A = 17.65 mA.',
        'P = 12 V × 0.01765 A ≈ 0.212 W = 212 mW.',
        'Compare 0.212 W with the 0.125 W resistor rating.'
      ],
      answer: 'Current ≈ 17.6 mA; resistor dissipation ≈ 0.212 W. A 1/8 W resistor is undersized for that dissipation.',
      meaning: 'An Ohm’s-law answer can be numerically correct while the component choice is still unacceptable. Power rating is a second design check.',
      sanity: '212 mW is greater than 125 mW, so the rating comparison is unambiguous.'
    }
  ];

  d.misconceptions = [
    {
      mistake: 'Voltage flows through the wire.',
      why: 'Everyday language often uses “electricity” as one vague thing, so voltage and current get blended together.',
      repair: 'Say “current through” and “voltage across/between.” Voltage is an energy difference per charge; current is charge flow per time.'
    },
    {
      mistake: 'Moving the decimal is the rule for metric conversion.',
      why: 'The shortcut often works, so it can feel like the underlying reason.',
      repair: 'Replace the prefix with its power-of-ten factor first. Decimal movement is only what multiplication or division by that factor looks like.'
    },
    {
      mistake: 'm and M are basically the same prefix.',
      why: 'They differ only by capitalization on the page.',
      repair: 'milli m = 10⁻³; mega M = 10⁶. Case changes the multiplier by a factor of 10⁹, so preserve unit-symbol capitalization.'
    },
    {
      mistake: 'Ground is where electricity disappears.',
      why: 'Ground symbols are often drawn as the bottom of a schematic, which can look like a drain.',
      repair: 'Treat circuit ground/common as the chosen 0 V reference unless the diagram explicitly shows an earth connection. Current still needs a complete return path.'
    },
    {
      mistake: 'A correct Ohm’s-law number proves the circuit is safe.',
      why: 'A clean equation answer feels final.',
      repair: 'After current, check power, polarity, source capability, component ratings, and whether Ohm’s-law assumptions fit the device.'
    }
  ];

  d.guidedPractice = [
    'Without a calculator, explain why 3.3 kΩ is 3,300 Ω and why 3.3 mA is 0.0033 A. State the prefix factor each time.',
    'Convert 0.015 A to mA, 2,200 Ω to kΩ, 0.0000047 A to µA, and 100 nF to µF. For each one, say whether the numerical count should become larger or smaller before calculating.',
    'A 3.3 V source is applied to 1.5 kΩ. Predict whether current is closer to 1 mA, 10 mA, or 1 A; then calculate the exact current.',
    'A resistor carries 20 mA with 5 V across it. Find resistance and power. Keep units in every line and explain which equation rearrangement you used.',
    'Sketch a source, resistor, and return path. Mark current through the resistor, voltage across the resistor, and the chosen 0 V reference. Then explain what changes in an open circuit and in a short circuit.'
  ];

  d.independentScenario = 'A 9 V battery powers an LED branch modeled for this exercise as a 2.0 V LED drop plus one series resistor. First find the resistor voltage (battery voltage minus the modeled LED drop). Choose a resistor that gives about 10 mA, calculate resistor power, choose a sensible power rating, and explain what happens to current if the resistor is accidentally one tenth the intended value. Treat the 2.0 V LED drop as a supplied model for this exercise—not as a claim that an LED is an ohmic resistor.';
  d.connection = 'These ideas become the language of every later bench and embedded lesson. Voltage rails, GPIO thresholds, sensor outputs, pull-up resistors, current limits, ADC readings, and power budgets all depend on the same foundations. Later weeks will not restart from charge and prefixes; they will explicitly call these ideas forward and add new behavior on top of them.';
  d.teachBack = 'Teach a new student the chain charge → current → voltage → resistance → Ohm’s law → power. Then explain one prefix conversion from its power-of-ten factor and solve one resistor problem while saying what you predict before calculating.';
  d.substantiveWordCount = d.teaching.reduce((sum, section) => sum + String(section.text || '').trim().split(/\s+/).filter(Boolean).length, 0);

})();
