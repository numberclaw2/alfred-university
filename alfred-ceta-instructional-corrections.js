/* Alfred University AU-ESET 301 — Instructional Review Batches 01–18 (2026-10-28)
   Forty-six source-verified correction targets: additive instruction plus one guarded terminology repair.
   Requires completed academic closure before ceta.js; no questions/keys/IDs,
   storage, learner history, styling, navigation or sync changes. */
(function () {
  'use strict';
  const revision = 'ALFRED-CETA-INSTRUCTIONAL-B19-20261028';
  const data = window.ALFRED_CETA_DATA;
  const patches = [
    {
      module: 'M01',
      page: 'L01-0-07',
      expectedTitle: 'Field safety: fire, ladders and service vehicles',
      paragraphs: [
        ['Select extinguishers by the actual fuel and electrical hazard',
          'The five U.S. fire classes in ETA CETa 1.13 correspond to different extinguishing agents. Class A (wood, paper, fabric): a listed water or multipurpose ABC extinguisher may be appropriate. Class B (flammable liquids): use an agent specifically rated B, such as an appropriate foam, carbon dioxide or dry-chemical unit. Class C means energized electrical equipment: use a C-rated nonconductive agent such as an appropriate CO2 or dry-chemical unit; never apply an ordinary water stream to energized equipment. Once an authorized person has removed electrical energy, the remaining burning fuel determines the applicable class. Class D involves combustible metals and requires a special agent approved for the specific metal; ordinary ABC powder is not a Class D substitute. Class K covers commercial cooking oils/fats and requires a suitable Class K wet-chemical extinguisher. Read the actual extinguisher label: one device is not automatically suitable for every fire. Evacuation, alarm and emergency response take precedence; only a trained person should consider fighting a small contained fire with a clear escape route.'],
        ['Worked classification: energized cabinet versus metal fire',
          'Case 1: a small fire involves an energized electronic cabinet. The energized condition invokes Class C precautions; a trained responder would consider only a listed C-rated agent, while others evacuate and summon help. An untrained learner must not open the cabinet or approach it to disconnect power. Case 2: burning magnesium shavings are Class D; choosing a multipurpose ABC extinguisher just because it has the letter C would be wrong. The metal-specific approved agent and emergency plan govern. Case 3: an unattended kitchen deep-fat fryer has ignited. Class K protection is relevant, not a Class A water extinguisher.'],
        ['Independent check: extinguisher matching',
          'For each scenario, classify first, then name the agent category and safety boundary: (a) paper in an ordinary bin is Class A; (b) a live distribution panel is treated as Class C until confirmed de-energized; (c) burning combustible metal is Class D; (d) heated cooking fat is Class K. Appropriate labeled extinguisher examples include water/ABC for A, suitable C-rated CO2 or dry chemical for C, an approved metal-specific D agent for D, and approved wet chemical for K. Extinguisher selection does not override evacuation or training requirements.'],
        ['Service vehicle restraints and protective barriers',
          'ETA CETa 1.12 explicitly addresses equipment becoming a projectile inside a service vehicle. Verify that heavy tools, cylinders, spares, batteries and ladders are restrained by rated and inspected vehicle-mounted systems. Cargo carried in the occupant compartment may require a suitable fixed partition, load barrier or driver/passenger protective screen—not merely careful stacking. Check the vehicle manufacturer and employer requirements. Inspect ladder racks and positive locking restraints before travel; elastic cords alone can fail or loosen. Keep cargo out of sight lines, maintain vehicle condition and stop transport when the load is not secure.'],
        ['Worked transport decision and independent check',
          'A service van carries an extension ladder on an external rack, but its only restraint is an aging elastic bungee; a heavy tool case sits unsecured behind the front seats. The correct decision is no departure: inspect and use approved secure ladder restraints, contain the tool case, and confirm a protective barrier arrangement suitable for the load and vehicle. Transfer question: would a securely latched ladder rack alone prevent a loose toolbox from becoming a projectile in a crash? No. External ladder security and occupant-area cargo containment are separate controls.']
      ]
    },
    {
      module: 'M02',
      page: 'L02-0-03',
      expectedTitle: 'Matter, atoms, and the origin of electric charge',
      paragraphs: [
        ['Atomic structure, shells and the limits of the Bohr model',
          'An atom has protons (+) and neutrons (no net charge) in its nucleus and electrons (−) occupying quantum energy states around the nucleus. The atomic number equals the number of protons. In a neutral atom, the number of electrons equals the number of protons; gaining or losing electrons makes a negative or positive ion, respectively. ETA practice questions use the simplified Bohr shell model: electrons are grouped into shells or energy levels surrounding the nucleus. These shells are a useful beginner picture, not literal circular planetary tracks. The electrons in the outer occupied shell are called valence electrons; their availability and bonding help explain how materials behave electrically.'],
        ['Why conductors, semiconductors and insulators differ',
          'In a metallic conductor such as copper, electrons can move through available energy states, allowing relatively easy conduction. An insulator such as dry glass or sound insulating plastic has very few mobile charge carriers under ordinary conditions and strongly opposes current. A semiconductor such as silicon has conductivity between those broad extremes and can be controlled by doping, temperature, illumination and applied electric fields. Its behavior is not simply a metal with a larger resistor value: electrons and holes, energy bands and junction behavior matter in later lessons. Conditions and material construction determine real conductivity, so the categories are not absolute claims that an insulator can never carry any current.'],
        ['Worked reasoning: from atoms to an electronics component',
          'Start with a neutral silicon atom, atomic number 14. It has 14 protons and 14 electrons; a common introductory shell arrangement is 2, 8, 4, so its outer shell has four valence electrons. In a silicon crystal these participate in covalent bonds. Adding appropriate impurity atoms can increase available electrons (n-type) or holes (p-type), enabling semiconductor devices. Compare copper: its available conduction electrons make it useful for circuit traces, whereas an insulating coating limits unintended contact. The shell model helps explain the basic distinction but not the complete quantum band theory.'],
        ['Independent check: unfamiliar transfer, not memorized options',
          '1. A neutral atom has 8 protons: how many electrons? Eight; its atomic number is eight. 2. If it gains one electron, what is its net sign? Negative, because electrons carry negative charge. 3. Identify a conductor, a semiconductor and an insulator in an electronic assembly: copper trace, silicon diode body and insulating polymer jacket. 4. Why can semiconductor conductivity be engineered while ordinary insulation is selected to block charge movement? Doping and charge-carrier behavior can alter semiconductor conduction; insulating materials generally lack many mobile carriers under the stated operating conditions.']
      ]
    },
    {
  "module": "M03",
  "page": "L02-0-03",
  "expectedTitle": "Reading resistor markings and tolerance bands",
  "paragraphs": [
    [
      "Color-code reference: read any unfamiliar first or second band",
      "For the standard axial resistor code, the ten digit colors are black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, gray 8 and white 9. First identify the starting end and any separated tolerance band. In a three-band resistor the first two bands are digits and the third is the decimal multiplier; with no tolerance band an older conventional resistor is often treated as ±20%, but verify its marking standard. In a four-band resistor the first two are significant digits, the third multiplier, and the fourth tolerance. A multiplier color means a power of ten (for example, brown ×10; red ×100; orange ×1000); gold ×0.1 and silver ×0.01 can be multipliers where marked. This lets the learner decode colors they have not seen as a worked example."
    ],
    [
      "Worked calculation: the supplied CETa practice test transfers the color rule",
      "On the supplied AST Practice examination, Q14 specifies a resistor with red, brown and brown bands. First digit red = 2, second digit brown = 1, multiplier brown = ×10. Therefore the nominal resistance is 21 × 10 = 210 Ω, not 21 Ω or 2100 Ω. For a different unknown combination, blue–gray–orange–gold decodes to 68 × 1000 = 68,000 Ω = 68 kΩ with ±5% tolerance, giving 64.6 to 71.4 kΩ. Explain each step, then verify that the answer has a plausible prefix and units. This is a general decoding method; do not memorize the practice key as the rule."
    ],
    [
      "Four-band, contemporary five-band and historical reliability markings",
      "Five-band resistors are not all interpreted identically. In the widely used contemporary precision color code, bands 1–3 are significant digits, band 4 is the multiplier and band 5 is tolerance. Example: brown–black–black–red–brown = 100 × 100 = 10,000 Ω = 10 kΩ ±1%. The supplied Sixth Edition guide also discusses a historical fifth *reliability/failure-rate* band added to a conventional four-band pattern. Identify the device family, spacing, tolerance indicator and manufacturer documentation rather than blindly treating every fifth band as a third digit or as reliability. The value and rating must be confirmed when identification is uncertain."
    ],
    [
      "Independent check: three-band and five-band transfer",
      "Without referring to the prior example, decode orange–orange–brown in a three-band convention: 33 × 10 = 330 Ω. Decode yellow–violet–red–gold using the conventional four-band code: 47 × 100 = 4700 Ω ±5%; its limits are 4465 and 4935 Ω. Decode brown–black–black–orange–brown in the contemporary five-band code: 100 × 1000 = 100 kΩ ±1%. If a five-band device instead has a historical reliability marker, which evidence settles the interpretation? The device marking standard or manufacturer datasheet—not assumptions from band count alone."
    ]
  ]
},
    {
  "module": "M03",
  "page": "L02-0-06",
  "expectedTitle": "Thermistors, variable resistors and component choice",
  "paragraphs": [
    [
      "Potentiometer versus rheostat: different terminal connections",
      "A potentiometer normally has three accessible terminals: the two ends of a resistive track plus a moving wiper. When both ends are connected across a voltage and the wiper is the output, the pot functions as an adjustable voltage divider. A rheostat is typically a two-terminal variable-resistance connection, using the wiper and one end of a resistive track; a suitable three-terminal potentiometer may also be wired this way within its wiper-current and power limits. The rheostat changes series resistance and current instead of providing an independently defined divider voltage. Check the specific component’s rated current, dissipation, wiper reliability and manufacturer wiring instructions."
    ],
    [
      "Worked reasoning: a variable divider is not the same as a series rheostat",
      "Paper example A: a 10 kΩ linear pot has both ends connected across an isolated 5 V source. If the wiper is at 30% of track resistance above the return end and no load is connected, its nominal voltage is 5 × 0.30 = 1.5 V; the source sees the full 10 kΩ track (0.5 mA). Paper example B: a device wired as a two-terminal rheostat varies from 1 kΩ to 4 kΩ in series with a fixed 1 kΩ load on an ideal 5 V source. The total current changes from 5/(1000+1000) = 2.5 mA to 5/(4000+1000) = 1.0 mA. One connection adjusts a voltage ratio; the other adjusts branch resistance and current. These are model examples, not authorization to wire power equipment."
    ],
    [
      "Independent check: choose the correct two- or three-terminal application",
      "A calibrated signal control needs an adjustable fraction of a reference voltage for a high-input-impedance circuit: choose the three-terminal potentiometer-as-divider connection and consider load effects. A low-energy circuit needs an adjustable series resistance within a specified component rating: choose a properly rated two-terminal rheostat connection. If the wiper goes open, neither design should be assumed fail-safe; the manufacturer instructions and circuit hazard analysis determine a protective arrangement. A thermistor differs from both: its resistance responds to temperature rather than manual shaft position."
    ]
  ]
},
    {
      "module": "M04",
      "page": "L02-1-01",
      "expectedTitle": "Open-circuit and short-circuit faults produce different signatures",
      "paragraphs": [
        [
          "A four-case DC divider model for fault isolation",
          "Start with a paper-only isolated ideal 9.0 V source, Rtop = 1.0 kΩ from +9 V to node B, and Rbottom = 1.0 kΩ from B to the 0 V return. Assume a high-input-resistance voltmeter so that the instrument does not appreciably load B; assume no other loads, bypasses or feedback. Normally Itotal = 9/2000 = 4.5 mA and B = 4.5 V relative to return. A fault signature is meaningful only with those node labels, instrument reference and model assumptions. With a real energized apparatus, qualified work controls and a safe test method are required; do not create faults in hardware for this exercise."
        ],
        [
          "Worked table without guessing: opens versus shorts",
          "Normal: total current 4.5 mA; B = 4.5 V. Rtop OPEN: with Rbottom intact, the circuit has no source-to-return path, current approaches zero and Rbottom holds B near 0 V; nearly the full 9 V appears across the open top position. Rbottom OPEN: with Rtop intact, current approaches zero and B rises toward +9 V; nearly 9 V appears across the lower open position. Rbottom SHORTED: B is clamped to 0 V and Rtop carries about 9/1000 = 9 mA. Rtop SHORTED: B is clamped near +9 V and Rbottom carries about 9 mA. These are steady-state idealized signatures, not promises for an unknown real circuit: a current-limited source, parallel loads, a meter, protective trips or a wiring error can change readings."
        ],
        [
          "Independent fault transfer: compare at least two measurements",
          "New case: an ideal 12 V source feeds 3.0 kΩ on top and 1.0 kΩ on bottom. Predict the healthy node: I = 12/4000 = 3 mA and B = 3 V. If B is near 12 V, consider a bottom open or an upper short; inspect total current and the actual input under a qualified low-energy test plan. A bottom open would make total current approach zero, whereas an upper short would leave about 12 mA through the 1.0 kΩ bottom branch. If B is near 0 V, a top open or bottom short are distinct hypotheses; source current and voltage across the top element help separate them. Always choose a measurement that discriminates competing causes rather than replacing a part from one low reading."
        ]
      ]
    },
    {
      "module": "M05",
      "page": "L13-0-03",
      "expectedTitle": "Symbols, net connections and identifiers",
      "paragraphs": [
        [
          "Recognize graphical shapes, not just reference letters",
          "A schematic component symbol depicts electrical behavior; an R reference designator is only its name. In widely used ANSI-style drawings a fixed resistor may appear as a zigzag; in IEC drawings it commonly appears as a rectangle. A fixed nonpolarized capacitor appears as two separated parallel plates; a polarized capacitor may add a polarity mark or use a curved-plate convention. An inductor is drawn as a series of loops, often with core lines for a magnetic core. A diode uses an anode-to-cathode junction symbol: the cathode is indicated by a bar, and LED symbols add light-emission arrows pointing outward. Compare actual drawing legends because symbol conventions vary. A ground-reference symbol is not universally identical to protective-earth or chassis-ground symbols."
        ],
        [
          "Identify switching and semiconductor control points before probing",
          "For a bipolar transistor, locate its base, collector and emitter connections; the arrow belongs to the emitter and points OUT for NPN, IN for PNP. A relay schematic usually shows the coil separately from normally-open and normally-closed contacts, so the contacts shown are in the stated normal, unenergized condition. An integrated circuit rectangle or amplifier triangle may list logical pin names, not physical pin order. Test points often carry TP labels; a connector J designator is only an identifier until its pin numbering, orientation and mating-face convention are verified. Symbols tell you which circuit function to analyze, but a package outline, voltage rating and pin mapping require a matching manufacturer datasheet."
        ],
        [
          "Independent transfer: read a novel symbolic circuit",
          "Imagine the schematic text says +5 V → R12 → node TP3, with C4 from TP3 to return and D2 from TP3 toward another node. Identify R12 as a current-limiting/filter resistance, C4 as a charge-storing branch and D2 as a polarity-dependent junction; do not claim signal direction or clipping threshold until D2 orientation and device type are known. For a second exercise, one transistor symbol has an emitter arrow pointing OUT and a second points IN: label them NPN and PNP respectively. If two lines cross with no junction dot and no matching net label, do not merge them without checking the drawing legend. Explain which information would require a schematic, which would require a layout and which would require a datasheet."
        ]
      ]
    }

,
    {
      "module": "M05",
      "page": "L03-0-03",
      "expectedTitle": "Analog and digital meters: accuracy, burden and protection",
      "expectedOpening": "A digital voltmeter commonly has input impedance around 10 MΩ",
      "paragraphs": [
        [
          "Analog voltmeter sensitivity is range-dependent: derive ohms-per-volt",
          "Many traditional unamplified analog DC voltmeters specify sensitivity in ohms per volt (Ω/V), not a single fixed input resistance. The movement requires a particular full-scale current; a higher voltage range adds more series resistance to limit that current. Calculate R_meter = (specified Ω/V sensitivity) × (selected full-scale DC voltage range). A 20,000 Ω/V meter on its 10 V range has 200,000 Ω input resistance; on a 50 V range, it has 1,000,000 Ω. These are different circuit loads even though the pointer movement is the same. These values apply to that meter and range, not every analog meter: electronic analog voltmeters may have buffered high-impedance inputs, and AC sensitivity or instrument specifications can differ. Match the range to the expected voltage and the instrument rating before measuring; choosing an unsuitable range is not a safe loading solution."
        ],
        [
          "Worked comparison: identical divider, two different meter inputs",
          "Paper-only network: an ideal 10.0 V DC source with R_top = 100 kΩ and R_bottom = 100 kΩ. Without a meter the midpoint is V_out = 10 × 100/(100+100) = 5.00 V. The 20,000 Ω/V analog voltmeter on a suitable 10 V DC range has R_meter = 200 kΩ. Measuring between midpoint and return places this meter in PARALLEL with R_bottom: 100 kΩ || 200 kΩ = 66.67 kΩ. Therefore V_indicated ≈ 10 × 66.67/(100+66.67) = 4.00 V, an approximately 20% loading error relative to 5.00 V. A 10 MΩ DMM on the same node makes R_bottom,eff = 100 kΩ || 10,000 kΩ ≈ 99.01 kΩ and indicates about 4.975 V (roughly 0.5% low). The specific numbers demonstrate loading; neither instrument is automatically accurate without checking its calibration, mode and specifications."
        ],
        [
          "Independent transfer: read the meter scale, then solve the altered network",
          "An unfamiliar unamplified analog DC voltmeter is rated 10,000 Ω/V and is set to its 10 V range. (1) Compute input resistance: 100 kΩ. (2) In a separate 10 V divider with two 50 kΩ resistors, the unloaded node is 5 V. Adding the meter across the bottom resistor gives 50 kΩ || 100 kΩ = 33.33 kΩ. (3) The indicated voltage is 10 × 33.33/(50+33.33) = 4.00 V. Compare this with a 10 MΩ DMM on the same node: 50 kΩ || 10,000 kΩ ≈ 49.751 kΩ, so V_out ≈ 4.9875 V. Why do the readings differ? The measuring devices changed the electrical load, not merely the displayed resolution. Do not run this as a hazardous-voltage experiment: it is a low-energy paper calculation."
        ]
      ]
    },
    {
  "module": "M06",
  "page": "L03-0-09",
  "expectedTitle": "Measure a pulse width and duty cycle",
  "expectedOpening": "Period T is the interval between matching edges.",
  "paragraphs": [
    [
      "Measure width on the scope graticule before calculating duty cycle",
      "First identify the voltage threshold that defines a rising and falling edge (often the 50% level for a clean logic pulse). Keep the oscilloscope horizontal TIME/DIV setting fixed for the whole measurement. Count the horizontal divisions from the rising threshold crossing to the falling crossing: t_high = divisions_high × time/div. Count from one rising crossing to the next rising crossing for the period: T = divisions_period × time/div. Then compute duty cycle = t_high/T × 100% and frequency = 1/T. Never use the vertical VOLTS/DIV scale for pulse width, and do not confuse a single high interval with the full period."
    ],
    [
      "Worked unfamiliar scope trace: horizontal divisions, time, frequency",
      "An approved low-voltage oscilloscope shows a repeating pulse at 0.40 ms/div. Its high state spans 3.5 horizontal divisions, and its rising edge to next rising edge spans 8.0 divisions. Step 1: t_high = 3.5 × 0.40 = 1.40 ms. Step 2: T = 8.0 × 0.40 = 3.20 ms. Step 3: D = 1.40/3.20 × 100% = 43.75%. Step 4: f = 1/0.00320 s = 312.5 Hz. The waveform's amplitude is not needed for these timing calculations once the threshold crossings can be read reliably. A high-time measurement alone does not determine duty cycle without the period."
    ],
    [
      "Independent transfer: new scale and edge selection",
      "A different low-voltage trace is set to 50 µs/div. The high part covers 2.4 divisions, and the interval between successive rising threshold crossings covers 10 divisions. Calculate t_high = 120 µs, T = 500 µs, f = 2 kHz, and D = 24%. Explain why measuring from rising edge to falling edge estimates high time, while rising edge to the next rising edge estimates period. If ringing crosses the threshold more than once, document the threshold and choose a stable measurement method instead of treating an ambiguous auto-readout as proof."
    ]
  ]
},
    {
  "module": "M07",
  "page": "L07-0-05",
  "expectedTitle": "Coils, cores, coupling and saturation",
  "expectedOpening": "Adding turns generally increases inductance when geometry and material are held constant",
  "paragraphs": [
    [
      "Turns-squared law: translate coil geometry into a prediction",
      "For a simplified coil with the SAME magnetic core material, winding length, area and flux path, L ≈ µN²A/length. Here N is the number of turns. This means L_new/L_old ≈ (N_new/N_old)² when the other factors are controlled: doubling the turns ideally multiplies inductance by four; halving turns ideally yields one quarter. This proportionality is what an unfamiliar turns-squared question is testing, not a claim that all physical coils follow the ratio exactly."
    ],
    [
      "Worked and independent turns-ratio calculations",
      "Worked paper example: a 50-turn air-core winding measures approximately 2.0 mH in the assumed unchanged geometry. With 100 turns and otherwise identical magnetic path, predicted L = 2.0 mH × (100/50)² = 8.0 mH. Independent transfer: if the turns increase from 50 to 75, predicted L = 2.0 mH × (75/50)² = 4.5 mH. Both results are MODEL predictions. Actual rewinding can change coil length, winding spacing, core permeability and saturation, so measure the real coil and consult its operating-current rating before making a component-selection claim."
    ]
  ]
},
    {
      "module": "M08",
      "page": "L06-0-03",
      "expectedTitle": "Series RLC response changes with frequency",
      "expectedOpening": "Compute X_L and X_C at the signal frequency",
      "paragraphs": [
        [
          "Mixed series-and-parallel AC networks: reduce topology before calculating",
          "The same inductor and capacitor give different circuit behavior when connected in parallel rather than in series. In a paper-only sine-wave steady-state problem, first find each reactance at the specified frequency: ZL = +jXL and ZC = −jXC. For a parallel L and C branch, calculate admittance Yp = 1/ZL + 1/ZC and then Zp = 1/Yp; do not add XL and XC as positive scalars. If a resistor is in series with that entire branch, add Ztotal = R + Zp as complex numbers. Calculate RMS source current from |Ztotal|, and branch voltage from |I Zp|. The voltage is common across parallel L and C, while their currents lead or lag it in opposite directions. Phase, current and voltage arithmetic must use one consistent reference and RMS convention. This ideal reduction assumes no coupling, series coil resistance, dielectric loss or significant source/load parasitics."
        ],
        [
          "Worked mixed-network calculation: a resistor feeding parallel L and C",
          "Assume a 20 Vrms sinusoidal source feeds an ideal 160 Ω resistor in series with a parallel LC branch. At that specific frequency, the ideal inductor has ZL=+j60 Ω and capacitor ZC=−j120 Ω. Convert impedances to admittances: 1/ZL=−j/60 S and 1/ZC=+j/120 S, so Yp=−j/120 S and Zp=+j120 Ω. Add the series resistor: Ztotal=160+j120 Ω, |Ztotal|=√(160²+120²)=200 Ω. The source current magnitude is 20/200=0.10 Arms; the parallel branch voltage magnitude is 0.10×120=12 Vrms, NOT 20 V because the resistor takes part of the source voltage in a different phase. The inductor current magnitude is 12/60=0.20 Arms and the capacitor current is 12/120=0.10 Arms. Their reactive phasors oppose, so the net branch current is 0.10 Arms inductive—not 0.30 Arms. The overall displacement power factor is 160/200=0.80 lagging, and real power in the resistor is I²R=1.6 W. Check that the 16 V resistor drop and 12 V reactive drop combine vectorially to 20 V."
        ],
        [
          "Independent transfer: find component voltage without copying a familiar answer",
          "Try a different paper-only sine-wave circuit: a 120 Ω resistor is in series with a parallel ideal coil of XL=80 Ω and capacitor of XC=160 Ω. The applied voltage is 20 Vrms at the stated frequency. Predict the RMS voltage across EACH parallel element and explain whether source current leads or lags. Solution after attempting: Yp=(−j/80)+(j/160)=−j/160 S, so Zp=+j160 Ω. Ztotal=120+j160 Ω has magnitude 200 Ω; I=20/200=0.10 Arms, and each LC branch sees |Vp|=0.10×160=16 Vrms. The resistor drop is 12 V and √(12²+16²)=20 V. The inductive branch takes 16/80=0.20 Arms and the capacitive branch 16/160=0.10 Arms in opposite reactive directions, leaving net 0.10 Arms lagging. A value-only sum or treating the branch as a series LC circuit would give a different, incorrect answer."
        ]
      ]
    },
    {
        "module": "M09",
        "page": "L06-0-04",
        "expectedTitle": "Select a relay or transformer by ratings",
        "expectedOpening": "For a relay verify coil voltage, drive current, contact configuration",
        "paragraphs": [
            [
                "Transformer VA is a limit on RMS voltage and current, not only on watts",
                "For an AC transformer secondary, apparent power S in volt-amperes is approximately rated RMS secondary voltage times rated RMS current at the declared rating conditions: S = Vrms × Irms. If the load is resistive, real power P in watts is approximately S. For an inductive or capacitive load, current and voltage are phase-shifted; for sinusoidal steady state with a linear load, P = Vrms × Irms × cos(φ), where cos(φ) is displacement power factor. Reactive power is not interchangeable with heat or useful output power, but the same RMS current still heats the winding by I²R. A lower watt reading therefore does NOT authorize exceeding the transformer’s VA/current rating. The label must also match frequency, insulation, thermal, enclosure and duty requirements."
            ],
            [
                "Worked selection: apparent versus real power on a transformer",
                "Paper-only example: a secondary is marked 24 Vrms at 2 Arms, rated 48 VA under stated conditions. Load A draws 2 Arms at a lagging 0.60 displacement power factor. Its apparent demand is S = 24 × 2 = 48 VA, while its real input power is P = 48 × 0.60 = 28.8 W. The winding still carries 2 Arms at the rated current limit. Load B draws 3 Arms at the same power factor: S = 24 × 3 = 72 VA and P = 72 × 0.60 = 43.2 W. Although 43.2 W is LESS than the numerical 48 VA marking, 72 VA exceeds the nominal 48 VA rating and 3 A exceeds the 2 A secondary current limit. Do not approve Load B from watts alone. Treat rated voltage/load regulation, power factor effects and thermal specifications as product-dependent."
            ],
            [
                "Independent transformer-rating transfer",
                "Try this separate case before reading the answer: a single 12 Vrms secondary is rated 1.5 Arms. A sinusoidal inductive load draws 1.2 Arms at PF = 0.75. Calculate apparent VA, real watts and whether current exceeds the rating. Answer: S=12×1.2=14.4 VA, P=14.4×0.75=10.8 W, and 1.2 A is below the 1.5 A current limit; nominal secondary capability is 18 VA. This arithmetic does NOT alone establish suitability: consult regulation, inrush, winding temperature, duty, and protection limits before making a physical selection."
            ]
        ]
    },
    {
        "module": "M10",
        "page": "L11-0-06",
        "expectedTitle": "Piezoelectric crystals: mechanical resonance becomes timing",
        "expectedOpening": "With a properly designed sustaining circuit, a crystal resonates mechanically",
        "paragraphs": [
            [
                "Competency 4.16: what piezoelectricity physically means",
                "Piezoelectric materials couple mechanical strain and electrical polarization. In the DIRECT piezoelectric effect, deforming certain crystals produces a measurable electrical charge or voltage at appropriately placed electrodes; in the CONVERSE effect, an applied electric field produces a small mechanical deformation. An oscillator uses both effects: the active circuit applies an alternating electrical drive, the quartz resonator deforms and vibrates at its favored mechanical frequency, and the vibrating crystal generates a corresponding electrical response that the active circuit sustains. The resonance is mechanical, but it is read and driven electrically. A quartz crystal alone is passive: connecting it to a DC battery does not make a stable clock."
            ],
            [
                "Worked device reasoning: a quartz resonator and clock period",
                "A designed oscillator circuit uses an 8 MHz quartz crystal specified for a particular load capacitance. Its nominal clock period is T = 1/f = 1/(8,000,000 s⁻¹) = 125 ns. A 100 ppm frequency difference at 8 MHz corresponds to 8,000,000×(100/1,000,000)=800 Hz difference from nominal, under the specified operating definition. The manufacturer’s load-capacitance and temperature conditions matter: resonator frequency can shift from nominal when the circuit loading changes. The crystal is not the power source, and even a crystal marked 8 MHz needs a sustaining circuit and appropriate clock measurement before claiming the clock is present."
            ],
            [
                "Independent transfer: mechanical-to-electrical chain, frequency and uncertainty",
                "Explain in words, without copying a diagram, why squeezing a piezoelectric sensor can produce a signal and why driving a quartz crystal at resonance helps an oscillator select one frequency. Then solve a new case: a nominal 12 MHz clock has period 1/12,000,000 s ≈83.3 ns; a 50 ppm frequency shift corresponds to 12,000,000×50/1,000,000=600 Hz. Identify what you would verify before blaming the quartz for drift: actual load capacitance, temperature, circuit supply and measured clock timing. The source-guide’s crystal mentions are not a substitute for the two-way physical-effect explanation required by ETA 4.16."
            ]
        ]
    },
    {
        "module": "M12",
        "page": "L08-0-02",
        "expectedTitle": "MOSFET gates are capacitive controls",
        "expectedOpening": "An enhancement MOSFET gate is insulated, so steady DC gate current is small",
        "paragraphs": [
            [
                "Why the MOSFET has four structural terminals",
                "An ordinary MOSFET structure has gate (G), source (S), drain (D) and body or substrate (B). The insulated gate sets up an electric field that controls a conductive channel between source and drain. The body forms semiconductor junctions with source and drain and influences threshold voltage and parasitic conduction. In many discrete three-lead power MOSFETs the body is internally tied to the source; this does not mean the body is physically absent. Some IC transistors have a separately accessible body. The device symbol and datasheet identify body connections and the intrinsic body diode; the diode orientation matters when blocking a reverse current. A four-terminal structural description does not imply that a packaged device exposes four user pins."
            ],
            [
                "Contrast FET input impedance with BJT base current",
                "An insulated MOS gate ideally draws no steady DC conduction current through its oxide, though gate leakage is finite and rapid switching needs transient charge. A BJT in forward-active conduction requires continuous base-emitter injection current. That explains the high DC input resistance of an insulated-gate FET relative to a comparably biased BJT; it does not mean infinite impedance at high frequency, because the FET gate has capacitance and the driver must charge it. A JFET uses a normally reverse-biased gate junction rather than an oxide-insulated gate. In either device, read actual input/leakage/gate-charge specifications before deciding a signal source can drive it."
            ],
            [
                "Worked and independent MOSFET structure/drive transfer",
                "Worked model: a three-lead enhancement NMOS has an internally source-tied body; the four physical regions remain G, D, S and B. With VGS=0 it is normally off, while raising VGS above a *specified on-resistance* test point (not merely the threshold) can establish low-resistance conduction. Independent case: a sensor output has high output resistance and needs to drive a switch. Explain why a MOS gate causes little steady DC load, why it still demands transition current, and why VGS(th)=2 V alone does NOT prove 3.3 V switching suitability. Check body-diode direction and the RDS(on) rating at the actual drive."
            ]
        ]
    },
    {
        "module": "M12",
        "page": "L10-0-00",
        "expectedTitle": "Common-emitter and source amplifiers",
        "expectedOpening": "Common-emitter BJT and common-source FET amplifiers typically offer voltage gain",
        "paragraphs": [
            [
                "Common-base current gain alpha versus common-emitter beta",
                "In a forward-active BJT, conventional emitter current is the sum of collector and base current magnitudes: IE = IC + IB. The common-base current transfer ratio alpha is α = IC/IE. Because some emitter current flows into the base, α is normally positive but less than 1 in forward-active operation. The more familiar common-emitter current gain is β = IC/IB; rearranging the current identity gives α = β/(β+1) and β = α/(1−α). A common-base stage can have voltage gain even when its CURRENT gain is below one. Do not confuse gain in amperes per ampere with voltage gain, power gain or a switching device’s forced beta."
            ],
            [
                "Worked current gains with explicit reference currents",
                "Consider a transistor operating in its active region with emitter current IE=10.0 mA, collector current IC=9.8 mA and base current IB=0.2 mA. First check Kirchhoff current balance: 9.8+0.2=10.0 mA. Common-base α=IC/IE=9.8/10=0.98 (less than 1). Common-emitter β=IC/IB=9.8/0.2=49. The numerical values describe the assumed operating condition, not guaranteed datasheet constants over all temperature and current. The base is AC-common in a common-base stage, unlike a common-emitter stage."
            ],
            [
                "Independent transfer: distinguish configurations and gains",
                "A second active-region BJT has IC=19.6 mA and IB=0.4 mA. Find IE, α and β before checking: IE=20.0 mA; α=19.6/20.0=0.98 and β=19.6/0.4=49. The numbers reinforce the relationship, but the key test is conceptual: common-base current gain α<1 despite possible voltage gain, whereas a common-collector emitter follower has approximately unity voltage transfer while acting as a current buffer. Identify the input, output and common terminal before selecting any gain definition."
            ]
        ]
    },
    {
        "module": "M12",
        "page": "L10-0-06",
        "expectedTitle": "Darlington, IGBT and CMOS context",
        "expectedOpening": "A Darlington pair offers high current gain but generally has greater VBE",
        "paragraphs": [
            [
                "Unijunction transistor: one junction is not a BJT",
                "The supplied 100-question AST practice exam Q58 includes a unijunction transistor (UJT), which is not otherwise taught explicitly in this lesson. A conventional UJT has ONE PN junction and three terminals: emitter E and base electrodes B1 and B2 along a resistive semiconductor bar. It is not a three-layer BJT with an ordinary emitter-base-collector amplifier current gain and must not be confused with the four-layer SCR. A bias between B2 and B1 establishes a potential along the bar. When the emitter voltage reaches its trigger condition, carrier injection can produce a negative-resistance section in its emitter characteristic. This historically made UJTs useful in relaxation oscillators and triggering circuits."
            ],
            [
                "Worked classification across semiconductor device families",
                "For a device specified as a conventional UJT, count the PN junctions: one. Its terminals are E, B1 and B2; this does NOT mean it has only one electrical lead or that a PN junction has only one side. Compare a conventional BJT: two coupled PN junctions and E/B/C terminals. Compare an SCR: a PNPN four-layer structure with three PN junctions and gate-triggered latching action. The UJT uses a bias-dependent trigger and negative-resistance behavior; it does not automatically act like a normal BJT current amplifier or latched SCR."
            ],
            [
                "Independent transfer: identify structure rather than memorize names",
                "Choose the correct device in a paper-only classification: (a) one PN junction, terminals E/B1/B2 and an emitter trigger characteristic = UJT; (b) two coupled junctions, terminals emitter/base/collector = BJT; (c) four PNPN layers with anode/cathode/gate and latching = conventional SCR; (d) insulated gate controlling a source-drain channel with a body region = MOSFET. State the physical clue and one limitation. The 2025 CETa competency 3.5 covers transistor types broadly, while the guide scan does not explicitly discuss a UJT; Q58 provides the direct practice-exam reason for this short supplementary distinction."
            ]
        ]
    },
    {
        "module": "M13",
        "page": "L09-1-05",
        "expectedTitle": "Power tree troubleshooting",
        "expectedOpening": "A power tree maps dependency:",
        "paragraphs": [
            [
                "Multiple outputs are distinct rails, not one output with many labels",
                "A multiple-output supply deliberately provides two or more rated output voltages, such as +12 V and +5 V, using separate transformer secondaries/taps, controlled converter paths, post-regulators, or a combination. A common return may be shared, but not every multi-output supply uses the same return or provides galvanic isolation between rails. Each rail has its own polarity, voltage tolerance, current limit and permissible load; a +12 V rail at 0.4 A can deliver 4.8 W, while a +5 V rail at 1.2 A can deliver 6.0 W, making 10.8 W combined OUTPUT power in this ideal accounting, before conversion losses. Check whether a rail is referenced to the same circuit common before making a voltage measurement."
            ],
            [
                "Worked fault tree: independent versus cascaded rails",
                "Paper-only analysis: input power is present; +12 V is in range but +5 V reads 0 V. First consult the supply block diagram. If +12 V and +5 V have independent regulation branches from a common upstream source, the working +12 V points toward a +5 V branch, enable, local protection or load fault. If +5 V is generated from +12 V by a downstream buck regulator, a correct +12 V reading moves the next check to the buck enable, input-to-output behavior and +5 V load. Reverse the case: loss of upstream +12 V can also cause the dependent +5 V rail to disappear. Current limiting or a shared fault may make multiple rails collapse. No single voltage reading proves a particular component has failed."
            ],
            [
                "Independent transfer: calculate a two-rail budget and isolate dependency",
                "A separate hypothetical regulator supplies +9 V at 0.30 A and +3.3 V at 0.50 A. Calculate output powers before revealing: 9×0.30=2.70 W and 3.3×0.50=1.65 W; total 4.35 W. Next assume the +3.3 V rail is made from the +9 V rail. If both disappear, identify which upstream nodes and protections to evaluate first; if +9 V remains normal but +3.3 V drops only under load, what extra measurements distinguish local current limit, shorted load, bad enable and converter failure? Record each probe reference and defined load. The source study guide illustrates multiple PC rail ratings but does not provide this full dependency exercise."
            ]
        ]
    },
    {
        "module": "M14",
        "page": "L10-0-04",
        "expectedTitle": "Signal levels, loading and impedance",
        "expectedOpening": "Sources have finite output impedance, and amplifier inputs draw some current.",
        "paragraphs": [
            [
                "How amplifier stages are coupled and why the choice matters",
                "Coupling means transferring a wanted signal from one amplifier stage to the next while setting what DC bias and frequency components are passed. Direct coupling connects stages electrically, so DC offset and bias errors can propagate as well as signals. RC or capacitive coupling uses a series capacitor and downstream resistance to block DC while forming a high-pass corner; a simplified corner is fc≈1/(2πRC) using the effective resistance seen by that capacitor. Transformer coupling uses changing magnetic flux to transfer AC energy and can offer impedance transformation or rated isolation, but blocks steady DC, has frequency/core limits and does not automatically guarantee safe isolation. Impedance coupling uses a frequency-dependent reactive load (for instance a choke) to develop signal voltage while limiting DC loss, with bandwidth and saturation tradeoffs. These techniques are not interchangeable merely because each passes a signal."
            ],
            [
                "Worked coupling selection: distinguish DC bias, signal and load",
                "Suppose a sensor amplifier has a +2 V DC output offset and a 100 Hz small-signal variation. A direct connection passes both offset and signal into the next stage, possibly disturbing its bias. With a series 1 µF coupling capacitor and an effective 10 kΩ return/input resistance, fc≈1/(2π×10,000×0.000001)=15.9 Hz, so a 100 Hz signal lies above the nominal corner, but slow/DC offset is attenuated. The simple high-pass model assumes compatible source impedance and load; another topology alters effective R. A properly selected signal transformer offers a different isolation/impedance tradeoff, not an automatic replacement for every RC stage."
            ],
            [
                "Independent selection: reconcile guide and supplied practice wording",
                "Try a new case: a 0.47 µF coupling capacitor sees 20 kΩ effective resistance. Calculate fc≈1/(2π×20,000×0.47×10^-6)=16.9 Hz. Predict whether a 5 Hz versus 1 kHz component is relatively attenuated, and why neither is enough to establish a complete amplifier frequency response. Then distinguish four labels in supplied practice Q85: direct, RC, impedance, transformer. The supplied Sixth Edition guide Chapter 12 physically lists THREE common stage couplings (direct, capacitor, transformer) on PDF pp. 163–164; the practice exam additionally distinguishes impedance coupling. That discrepancy is documented, not concealed or treated as a quote from the book."
            ]
        ]
    },
    {
        "module": "M14",
        "page": "L10-0-09",
        "expectedTitle": "Inverting amplifier calculation",
        "expectedOpening": "The inverting configuration sends input through Rin to the inverting node",
        "paragraphs": [
            [
                "Difference amplifier is not the same as a single-input inverting stage",
                "A four-resistor difference amplifier uses two input signals: V1 at the inverting side and V2 at the non-inverting side. Under ideal negative-feedback, valid common-mode input and output ranges, and correctly matched resistor ratios, it amplifies their difference while rejecting a signal common to both inputs. With R2/R1=R4/R3=k in the standard matched difference-amplifier topology, Vout=k(V2−V1). The subtraction order and sign depend on which signal is wired to each input. This is not the same as the single-input inverting formula Vout=−(Rf/Rin)Vin, nor does an unbalanced four-resistor arrangement automatically reject common mode."
            ],
            [
                "Worked difference-amplifier calculation with assumptions",
                "Draw a matched four-resistor difference stage where R1=R3=10 kΩ and R2=R4=30 kΩ, with V1=0.5 V applied to the inverting path and V2=1.5 V to the non-inverting path. The matching ratio is 30k/10k=3. Subtract INPUTS before multiplying: V2−V1=1.0 V; predicted Vout=3×1.0=+3.0 V. If both inputs rise by +0.4 V, the difference stays 1.0 V so ideal output stays +3.0 V. Confirm the chosen op amp can accommodate input common-mode voltage, output load and +3 V output without clipping; real resistor mismatch and finite common-mode rejection change the result."
            ],
            [
                "Independent difference-stage transfer and common-mode trap",
                "New paper example: same resistor ratios k=3, but V1=1.4 V and V2=0.8 V. Compute ΔV=−0.6 V; Vout=−1.8 V if the supply supports negative swing. If the op amp has only a 0–5 V single supply, −1.8 V may be physically impossible: the ideal equation predicts a demanded output, not guaranteed actual hardware behavior. Change both inputs by +0.5 V and prove the ideal differential output is unchanged. Explain why resistor-ratio mismatch undermines common-mode rejection. The practice exam Q86 tests this exact FORM of differential calculation; the guide Chapter 12 PDF pp. 163–164 discusses generic inverting/non-inverting stages but does not provide a full matched difference-stage derivation."
            ]
        ]
    }
,
    {
      "module": "M15",
      "page": "L12-0-00",
      "expectedTitle": "Workshop safety and ESD are separate protections",
      "expectedOpening": "Electrostatic discharge can harm sensitive semiconductors",
      "paragraphs": [
        [
          "Safety model: fumes and lead do not share one exposure pathway",
          "ETA 2025 competency 5.2 asks for both the CAUSE of solder fumes and the health effects of lead. When flux and surface contaminants are heated, flux constituents and decomposition products can become airborne and irritate or sensitize respiratory pathways; use process-appropriate local fume extraction rather than trusting a nearby open window. Lead in conventional tin-lead solder is a separate toxic metal hazard: lead residue on hands, benches, food or smoking materials can be ingested or transferred to the mouth. Standard soldering temperatures do not imply that the visible flux smoke is mainly vaporized lead. Handle lead-containing waste per applicable controls, keep food/drink out of the area, and wash hands after handling solder and before eating. Work only at approved low-voltage training stations with suitable ventilation, fire controls and eye protection."
        ],
        [
          "Worked safety discrimination: three observations, three precautions",
          "Paper-only workshop case: a student sees a visible wisp at a rosin-flux joint, has gray contamination on fingertips after handling a leaded spool, and finds an iron unattended near paper. The airborne wisp calls for suitable local fume capture and evaluation of the specific flux SDS; contaminated hands call for hygiene and controlled cleaning to prevent lead ingestion; the hot unattended tip creates burn and ignition risk, so return it to the approved stable stand and correct the workspace. These controls are complementary rather than substitutions. An ESD strap cannot solve any of these exposure or fire issues."
        ],
        [
          "Independent decision: choose controls from the hazard source",
          "Given an ESD-sensitive IC, a rosin-cored tin-lead solder spool and a powered iron at an approved de-energized practice station, state one separate safeguard for (1) latent ESD damage, (2) flux decomposition fumes, (3) lead surface contamination, and (4) contact burns/fire. Sample reasoning: verified ESD-protected work surface and personnel grounding for the IC; appropriate extraction for flux fumes; no eating and handwashing after lead handling; inspected iron/stand, eye protection and fire-clear workspace for heat. Before any physical activity, follow the facility safety plan and SDS."
        ]
      ]
    },
    {
      "module": "M15",
      "page": "L29-0-02",
      "expectedTitle": "Solder alloys, melting and application",
      "expectedOpening": "Solder alloys differ in melting range",
      "paragraphs": [
        [
          "Eutectic 63/37 and non-eutectic 60/40 are different",
          "Tin-lead 63/37 by mass means 63% tin and 37% lead. It is the eutectic Sn-Pb composition and changes between solid and liquid at approximately 183°C (361°F), instead of passing through a broad pasty range. Traditional 60/40 tin-lead solder begins melting near 183°C but finishes melting at a somewhat higher temperature; disturbed cooling while pasty can compromise a joint. The supplied Sixth Edition guide physical PDF p.304 calls 63/37 eutectic and prints an approximate 355–365°F span, whereas the supplied practice exam Q84 selects 361°F. Teach the physically meaningful eutectic point 183°C ≈361°F, while acknowledging that actual station setpoint must be higher than alloy liquidus and depends on thermal transfer, part ratings and process approval."
        ],
        [
          "Worked alloy and temperature conversion",
          "Suppose a labeled 20 g sample is Sn63/Pb37. By mass it contains 0.63×20 = 12.6 g tin and 0.37×20 = 7.4 g lead; this designation does not mean 63°F or a ratio of melting temperatures. Convert the nominal eutectic point: (183×9/5)+32 = 361.4°F, approximately 361°F. A soldering station display of 361°F is NOT necessarily adequate for a real joint: thermal losses, board mass and specified workmanship process determine the tip setting. A lead-free SAC alloy normally has a different liquidus and is not an interchangeable process without evaluating assembly specifications."
        ],
        [
          "Independent transfer: select and explain an alloy",
          "A different training job specifies a lead-free assembly. Should the technician substitute Sn63/Pb37 because it melts at about 183°C? No: the alloy, process and environmental/customer requirements control selection. If an exam asks for eutectic tin-lead melt point, calculate 183×9/5+32≈361°F; if an engineering repair task asks for an iron setting, use the approved process documentation and real heat-transfer conditions instead of setting the iron to 361°F. Explain why a non-eutectic alloy has a pasty interval but eutectic composition does not."
        ]
      ]
    },
    {
      "module": "M15",
      "page": "L12-0-04",
      "expectedTitle": "Surface-mount handling and orientation",
      "expectedOpening": "SMT components often lack visible leads",
      "paragraphs": [
        [
          "ETA 5.8.2: classify copper-damage repairs by what failed",
          "A lifted surface-mount pad is damage to the component land and its connection to a trace or via; a broken exposed trace is a discontinuity in an otherwise identifiable conductor; a damaged plated-through hole (PTH) can lose both its annular-ring land and its conductive barrel between layers. A BGA pad or inner-layer via often cannot be inspected or restored by ordinary hand soldering, and gold-plated connector fingers are controlled contact surfaces rather than generic solderable pads. First compare the schematic/netlist with the physical board, identify which feature is damaged and whether a hidden-layer connection is involved, then apply only the repair method allowed by the assembly authority and workmanship standard."
        ],
        [
          "Worked inspection: a lifted land and a broken trace are distinct",
          "On a de-energized training PCB, the resistor is removed and one pad has lifted but the adjoining copper route is still visible. Document the missing land, inspect nearby mask and laminate, and compare net endpoints using the schematic. An authorized repair may require a specifically approved replacement land or conductor reconstruction with suitable mechanical anchoring; blindly bridging with a loose solder blob does not restore pad adhesion. Now change the evidence: the pad is mechanically intact but a trace is visibly severed downstream. That is a trace-continuity defect with a different potential authorized jumper/reconstruction method. For PTH damage also verify the inner-layer barrel connection; an apparent top-side continuity fix may miss it. Record acceptance evidence before any energized function test."
        ],
        [
          "Independent rework triage: choose the next verification",
          "Classify three hypothetical, safely isolated PCB findings: (A) SOT-23 solder land detached from laminate, (B) copper track severed but its pads remain attached, (C) through-hole barrel fractured between top and bottom. Expected: A = pad/land reconstruction approval and adhesion checks; B = trace continuity restoration planning after matching net identity; C = PTH/multilayer interconnection inspection and specialist-approved remediation. State at least one de-energized verification and one stop-work condition for each. Never attempt BGA, inner-layer or gold-finger reconstruction without qualified process documentation."
        ]
      ]
    }
,
    {
      "module": "M17",
      "page": "L11-0-01",
      "expectedTitle": "Logic gates as real electronic building blocks",
      "expectedOpening": "An electronic logic gate uses transistors to produce output voltage ranges",
      "paragraphs": [
        [
          "Read a discrete diode–transistor circuit from current paths",
          "A gate can be built from individual components instead of drawn as an AND/OR symbol. In an NPN common-emitter switching stage, the output at the collector is pulled HIGH through a resistor when the transistor is OFF; enough base current turns the transistor ON and pulls the collector LOW. That collector stage inverts the logical state of its base-control node. Diodes ahead of the base can combine input conditions: diodes with anodes at positive-going inputs and cathodes at a common control node conduct from any suitable HIGH input, while a pull-down establishes a LOW node when none conducts. First determine diode forward-bias states, then whether the base is driven, then whether the collector resistor pulls the output up or the transistor pulls it down. The truth table comes from these three physical steps, not from guessing the label of a transistor symbol. Actual component values, supplies, threshold margins and the base-current-limiting network control whether this approximation is valid."
        ],
        [
          "Worked three-input switching-network classification",
          "Consider a hypothetical low-voltage training network: three positively driven inputs P, Q and R each feed a diode (anode at the input, cathode toward a properly current-limited common NPN base-control node). A resistor holds the control node LOW with no active inputs. The NPN emitter is at circuit return and its collector output Y has a pull-up resistor. For P=0,Q=0,R=0: no forward-biased input diode, NPN OFF, output pulled HIGH (Y=1). For P=0,Q=1,R=0: Q provides base drive, NPN ON, output LOW (Y=0). Any other combination containing at least one HIGH similarly makes Y=0. Thus the stage performs Y=NOT(P OR Q OR R) in the ideal logic model, not ordinary OR just because the diodes combine inputs. The inversion occurs at the collector. Do not build or probe this circuit on mains-connected equipment."
        ],
        [
          "Independent transfer: recognize the opposite diode condition",
          "In a separate paper-only network, a pull-up biases an NPN base-control node HIGH and each input connects through a diode whose anode is at that node and cathode at its input. Any input LOW can clamp the common node; with appropriate level shifting and device thresholds, that clamp must hold the transistor OFF, while only all inputs HIGH permit adequate base drive. With collector pull-up, the output is LOW only when all inputs are HIGH, giving a NAND-like truth relationship under valid drive assumptions. Check the four two-input cases: 00→1, 01→1, 10→1, 11→0. Explain why moving the diodes and bias resistor changes the front-end function and why the collector inverts it; a transistor symbol alone never identifies the gate."
        ]
      ]
    },
    {
      "module": "M17",
      "page": "L11-0-03",
      "expectedTitle": "Truth tables as a test plan",
      "expectedOpening": "A truth table lists every input combination and the output expected for each",
      "paragraphs": [
        [
          "Read input bubbles and multi-gate connections before making a truth table",
          "A small circle (bubble) on a gate INPUT means that particular input is logically inverted before it participates in that gate. A circle on the OUTPUT means the whole gate result is inverted. These have different effects: an AND gate with inputs A and an inverted B computes A·NOT B, while an ordinary AND followed by an output bubble computes NOT(A·B). In a multi-gate drawing, trace each gate output to the next stage and use a labeled intermediate variable; a wire crossing is connected only when the diagram uses its specified junction mark (normally a solid dot). Confirm the symbol convention instead of assuming every crossing connects. Only after the correct topology and inversions are recorded should you fill the truth table."
        ],
        [
          "Worked multi-stage bubble trace with three inputs",
          "Suppose an OR gate receives two AND-gate outputs, X1=(NOT A)·B and X2=A·C. Write Y=X1+X2. For A=0,B=1,C=0: X1=1 and X2=0, so Y=1. For A=1,B=1,C=0: X1=0 and X2=0, so Y=0. For A=1,B=0,C=1: X1=0 and X2=1, so Y=1. For A=0,B=0,C=1: both paths are zero, so Y=0. These answers depend on which input bears the inversion bubble and which wires really connect; swapping a bubble or treating a crossing as a junction changes the function."
        ],
        [
          "Independent transfer: different network, different truth table",
          "Analyze the two-branch network F=(A·B)+(NOT A·NOT B). First write intermediate outputs U=A·B and V=(NOT A)·(NOT B). For the pairs 00,01,10,11, compute (U,V,F) as (0,1,1), (0,0,0), (0,0,0), (1,0,1). The final function is XNOR (equal-input detector), not XOR. State exactly where the two input bubbles appear and why the final OR has no output bubble; then explain how an output bubble would invert all four results. This is a new transfer network rather than the provided practice-test diagram."
        ]
      ]
    },
    {
      "module": "M17",
      "page": "L11-0-09",
      "expectedTitle": "Counters turn clocks into state sequences",
      "expectedOpening": "A binary counter is a collection of state elements that progress through a sequence",
      "paragraphs": [
        [
          "Counter modulus is the number of distinct states",
          "The MODULUS (mod-N) of a counter is the number N of distinct counts before the sequence repeats, not the largest displayed count. A full binary counter with n independent binary stages has 2^n possible states, from decimal 0 to 2^n−1. Thus a three-stage counter has eight states (000 through 111): its modulus is 8, while its maximum unsigned count is 7. Four stages produce 16 states and maximum count 15. After that last state the sequence returns to zero. This is different from the number of clock cycles needed to produce a single output toggle at one flip-flop stage, and it assumes no custom reset/truncation changes the sequence."
        ],
        [
          "Worked state count, roll-over and truncation",
          "Consider an ideal three-stage binary up-counter initialized at 000: the states are 000, 001, 010, 011, 100, 101, 110, 111, then 000 again. Count them: eight unique states, so mod-8. The last binary word 111 is decimal 7, NOT the modulus. A four-stage natural counter is mod-16; if a deliberate decoder resets it whenever it reaches decimal 10 (1010), its intended stable sequence can be 0 through 9, giving a decade or mod-10 counter. The device has four physical stages but only ten used states in that modified design. The reset method and glitches matter in actual hardware."
        ],
        [
          "Independent transfer: infer capacity from stages",
          "An otherwise unmodified six-stage binary counter has 2^6=64 possible states, decimal 0 through 63, then wraps: modulus 64 and maximum unsigned count 63. A seven-stage one has 2^7=128 states and maximum count 127. If a six-stage design deliberately resets after count 49, ask for its observed intended state sequence before naming the modulus; the bare flip-flop count no longer proves all 64 states are used. For exam-style questions distinguish stages, modulus, maximum count and clock-edge timing explicitly."
        ]
      ]
    },
    {
      "module": "M19",
      "page": "L18-0-04",
      "expectedTitle": "An interface is a complete agreement",
      "expectedOpening": "An electronic interface is more than a connector shape.",
      "paragraphs": [
        [
          "Three interfaces named by ETA 12.5 do not share one physical transport",
          "USB, I²C and Zigbee are three distinct interface approaches, not interchangeable labels. USB is a wired connection with defined electrical signalling, device/host roles and an enumeration/protocol system; a cable and connector by themselves do not prove compatible USB capability. I²C is a short-board/inter-board, usually two-wire open-drain serial bus with SDA data, SCL clock, suitable pull-ups and device addressing. Zigbee is a low-power wireless network protocol family built on IEEE 802.15.4 radio, commonly operating in the 2.4 GHz band, with other regional bands. Zigbee uses configured network joining and logical addressing and can use coordinator, router and end-device roles. A Zigbee radio cannot be wired straight into SDA/SCL or a USB data pair: the link needs compatible radio hardware and protocol support. The supplied Sixth Edition guide mentions legacy serial/USB interfaces but does not substantively teach Zigbee; ETA 2025 competency 12.5 expressly includes it."
        ],
        [
          "Worked interface choice: how a battery-powered sensor reaches a gateway",
          "A battery sensor must report room temperature to a gateway four metres away, with no suitable cable installed. First identify that the signal must travel over the air, not as voltage transitions along two copper nets. If the system specifies Zigbee, both sensor and gateway need compatible Zigbee-capable radios, appropriate power and antenna arrangements, and a permitted network join; then test device discovery, radio/link quality and application message delivery in that order. An I²C temperature-sensor chip directly attached to a controller could deliver readings over local SDA/SCL, but that local I²C bus does not become the four-metre radio path. USB instead requires compatible wired USB endpoints and protocol roles. A correct technician records the endpoint function, physical medium, addresses, voltage supply and expected message before claiming an interface fault."
        ],
        [
          "Independent transfer: classify the link and find the first fault",
          "Case A: a digital temperature IC sits on the same board as an MCU with a shared safe 3.3 V reference, SDA and SCL and specified pull-ups; classify that local bus as I²C and investigate supply, idle HIGH and addressing if it fails. Case B: a battery motion sensor sends reports to a network coordinator across a room; if the specified product is Zigbee, validate radio/network association, supported profile and correct power before looking for a nonexistent copper TX wire. Case C: a peripheral connects through a laptop USB port; verify USB-compatible cable, roles and device enumeration rather than applying UART RS-232 voltages. The transfer skill is to select the physically correct interface and its distinctive first diagnostic measurement, not to memorize a slogan."
        ]
      ]
    },
    {
      "module": "M19",
      "page": "L17-0-07",
      "expectedTitle": "UART, RS-232 and USB are not interchangeable",
      "expectedOpening": "A UART peripheral formats serial bits with start, data, optional parity and stop intervals.",
      "paragraphs": [
        [
          "UART logic and traditional RS-232 use opposite electrical conventions",
          "An MCU logic-level UART typically idles at logical HIGH, e.g. near its 3.3 V supply, and a start bit is LOW. A traditional bipolar RS-232 DATA receiver instead interprets a sufficiently NEGATIVE voltage (typically −3 V or below, within the allowed range) as mark/logical 1 and a sufficiently POSITIVE voltage (typically +3 V or above) as space/logical 0; the intermediate −3 V to +3 V region is not guaranteed. In other words, RS-232 data polarity and magnitude are different from an ordinary MCU UART pin, and RS-232 driver output ratings need the actual device standard/datasheet. A properly rated transceiver maps between these electrical levels. USB has its own signalling and protocol and cannot be made into UART or RS-232 by matching connector pins. This detail extends the older guide PDF pp.255–256 COM/USB comparison; the 2025 ETA 12.1 and 12.5 requirements make correct electrical interpretation important."
        ],
        [
          "Worked 8-N-1 UART versus RS-232 trace on paper",
          "Suppose a 3.3 V MCU uses 9600 bit/s, eight data bits, no parity and one stop bit. The ordinary UART idle is around 3.3 V (1). At the beginning of a frame, the start bit drives about 0 V (0), then eight data bits follow least-significant bit first, then the stop interval returns HIGH. One bit duration is 1/9600 s ≈ 104.17 µs. A standard ten-bit 8-N-1 frame occupies about 1.0417 ms before any gap. After a suitable RS-232 transceiver, that same idle mark is a negative bipolar voltage, while the start-space is a positive voltage; a UART idle level of 3.3 V is not an RS-232 compliant negative mark. The information bits have not been magically changed; the transceiver translates and inverts the physical voltage convention. Never join a conventional RS-232 driver directly to a non-tolerant MCU input."
        ],
        [
          "Independent transfer: diagnose inverted serial levels rather than wrong baud",
          "A logic-level UART TX idles at 3.3 V and uses 19200 bit/s, 8-N-1. Its bit interval is 1/19200 ≈ 52.08 µs and a ten-bit frame lasts about 520.8 µs. A conventional RS-232 receiver expects negative voltage for idle mark, not positive 3.3 V. Therefore a direct connection fails the electrical-level/polarity check before any baud mismatch diagnosis. Add a specified voltage-compatible UART-to-RS-232 transceiver, verify safe common/isolated reference as appropriate, then compare framing and measured timing. If an observed RS-232 DATA line idles near −8 V with a start pulse near +8 V, those signs are expected for the conventional bipolar format; they do not mean an inverted firmware setting by themselves."
        ]
      ]
    },
    {
      "module": "M20",
      "page": "L14-0-04",
      "expectedTitle": "PLC fundamentals and industrial control",
      "expectedOpening": "A programmable logic controller is built for industrial input/output, rugged operation",
      "paragraphs": [
        [
          "How a controller uses feedback and a setpoint",
          "ETA competency 15.5 requires the purpose and uses of programmable logic controls. A PLC reads conditioned input signals from sensors or switches, evaluates programmed conditions, and commands output devices through correctly rated output modules and external actuators. For a tank-level or temperature process, the measured value is the process variable; the target is the setpoint; the relay, motor drive or valve is the controlled element. Open-loop control issues a command without using a measurement of the achieved result. Closed-loop control reads the result and adjusts its command from feedback. These terms describe the control decision, not whether a PLC alone constitutes an approved safety function. Other non-safety applications include batching sequences, packaging conveyors, pump sequencing and environmental regulation."
        ],
        [
          "Worked feedback example: prevent rapid relay cycling with hysteresis",
          "A simple on/off heater should maintain approximately 80 °F. If the heater switches every time a noisy measurement crosses exactly 80 °F, it can chatter, wearing the contactor. Choose two thresholds: turn the heater ON when temperature falls below 78 °F and turn it OFF when temperature rises above 82 °F. Between 78 °F and 82 °F, retain the previous command rather than switching at 80 °F. The 4 °F deadband is 82 − 78 = 4 °F. At 77 °F command heating ON; at 80 °F keep the prior heating state; at 83 °F command OFF. This is a conceptual control example from the study guide, not permission to modify a real heater or bypass independent over-temperature protection."
        ],
        [
          "Independent application: reason from a new control range",
          "A demonstration incubator uses an ordinary non-safety temperature control with heater-on threshold 19 °C and heater-off threshold 21 °C. Determine its nominal midpoint and deadband: (19 + 21)/2 = 20 °C; width = 21 − 19 = 2 °C. If the recorded state is ON at 19.5 °C, keep it ON until temperature reaches the OFF threshold; if the state is OFF at 20.5 °C, keep it OFF until temperature falls to the ON threshold. On a real machine, the choice of input filtering, scan time, output contact ratings and independent protective cutouts must be validated by qualified personnel. Explain why a single threshold without stored state can chatter under sensor noise."
        ]
      ]
    },
    {
      "module": "M20",
      "page": "L15-0-05",
      "expectedTitle": "Memory hierarchy and power loss",
      "expectedOpening": "CPU registers hold immediate working state; RAM is generally volatile",
      "paragraphs": [
        [
          "How memory technologies actually hold a bit",
          "ETA competency 15.4 asks not only for memory names but how storage occurs. A common SRAM cell uses a transistor latch to retain a logic 0 or 1 while power is applied; it normally needs no periodic refresh. A DRAM cell stores charge on a tiny capacitor and therefore requires repeated refresh to compensate for leakage. Mask ROM stores a fixed pattern determined during manufacture. PROM is programmed after manufacture (usually once). UV-erasable EPROM and electrically erasable EEPROM use nonvolatile transistor charge-storage mechanisms so data can persist without ordinary supply power; flash memory is a related electrically erasable technology, typically erased/programmed in blocks or pages rather than like a single RAM byte. Precise cell construction, retention and endurance depend on the device family."
        ],
        [
          "Study guide and practice-test vocabulary: EAROM versus EEPROM",
          "The supplied practice examination asks what EAROM means: Electrically Alterable Read-Only Memory. EAROM is an older designation for nonvolatile memory that can be changed electrically; EEPROM means Electrically Erasable Programmable Read-Only Memory. Neither word means the memory behaves like unlimited-endurance SRAM. The Sixth Edition study guide physical PDF p.251 lists RAM, ROM, PROM, EPROM, EEPROM and flash; the supplied practice question 79 uniquely tests the EAROM expansion. Treat the expansion as terminology and learn the physical distinction: data in volatile cells is normally lost with removed power, whereas an EEPROM/flash nonvolatile storage mechanism retains a programmed state subject to retention, write/erase limits and proper power-fail handling."
        ],
        [
          "Worked storage decision and unfamiliar transfer",
          "A measurement logger samples once each second but should preserve calibration through power loss. Keep short-lived sample buffers in RAM and calibration/settings in nonvolatile EEPROM or flash, with a deliberate validated write policy. Writing calibration once during setup is very different from writing a high-endurance log every second: at one write per second there are 86,400 writes in a day, compared with one write per day. For a new circuit, suppose a 512-byte RAM buffer loses power while a separately committed 16-byte EEPROM configuration survives. Predict that the buffer disappears but the 16 configured bytes remain, assuming successful writes and specified retention. If the nonvolatile write was interrupted, verify integrity before trusting that data. Explain why DRAM refresh is not an appropriate substitute for nonvolatile storage."
        ]
      ]
    }
,
    {
      "module": "M21",
      "page": "L17-0-08",
      "expectedTitle": "Classify software and hardware faults by evidence",
      "expectedOpening": "Errors can arise during boot, program installation, file loading",
      "paragraphs": [
        [
          "Surge damage and malicious software have different physical causes",
          "ETA competency 16.7 specifies BOTH power-line surges and computer viruses. A surge is a brief overvoltage/transient caused by switching, lightning coupling or a power-system event; it can stress a power supply, insulation and interface protection. A virus is malicious code that propagates by infecting other files/programs; other malware includes ransomware and spyware. Neither a surge suppressor nor a software scanner can replace the other. For a service workstation, identify manufacturer-approved surge protection, correct protective earthing, an appropriate UPS where shutdown continuity matters, and a verified backup; do not assume an ordinary power strip is a surge protector. Separately restrict unauthorized software, use supported security updates, least-privilege accounts and trusted downloads, and use appropriate endpoint protection and offline/versioned backups. These measures reduce risks but do not guarantee immunity."
        ],
        [
          "Worked fault comparison: destructive transient versus infected file",
          "Case A: a workstation unexpectedly shuts down during a power event, then will not boot. After safe power isolation, a trained technician first checks supply/adapter status, documented surge event, device diagnostics and manufacturer service guidance; do not assume malware caused hardware failure. Case B: the computer powers on normally, but multiple documents become unreadable after opening an untrusted attachment. Preserve evidence, disconnect affected equipment from shared networks under the organization incident plan, notify the responsible security team and use approved recovery rather than reinstalling a random executable. A lightning-associated power fault and an unauthorized program execution demand different tests and containment."
        ],
        [
          "Service utilities and unfamiliar independent classification",
          "Common service utilities have distinct jobs: an event log records errors and reset/shutdown history; a task/process monitor reveals CPU/RAM resource use; a storage-health/SMART tool reports supported disk health indicators; an update/driver manager checks approved software versions; anti-malware tools detect specified threats; backup/restore tools verify recoverability. None alone determines the root cause. Transfer problem: a PC loses its network connection but continues computing normally immediately after a switch power-cycle. Is that evidence of malware or a local power-supply failure? Neither follows without testing: check link and switch power/event history, then IP configuration and physical cable. Transfer problem: a second PC repeatedly launches an unknown program after login despite a stable line voltage. Investigate software persistence and endpoint telemetry under the approved security process, not merely a larger surge protector."
        ]
      ]
    },
    {
      "module": "M21",
      "page": "L17-0-02",
      "expectedTitle": "Network symptoms identify their failing layer",
      "expectedOpening": "Link light, IP address, gateway, name resolution and application service",
      "paragraphs": [
        [
          "Reach the Internet by tracing every necessary service",
          "ETA competency 16.8 requires knowing how a computer reaches Internet services AND safe operating practices. A client first needs a functioning wired or Wi-Fi link, suitable IP addressing and subnet information (often learned from DHCP), a default gateway or route to outside networks, working DNS to translate names, and a reachable remote application service using an appropriate protocol such as HTTPS. DHCP gives configuration; DNS answers name lookups; the gateway routes outside the local subnet. A browser may display a secure TLS connection but that does not prove the page content is trustworthy. On a standalone computer a local application may function without a network, whereas remote software updates, licensing, backups and cloud services depend on both correct networking and authorization."
        ],
        [
          "Worked network diagnosis with independent decision points",
          "Assume a workstation has IP address 192.168.10.42/24 and gateway 192.168.10.1. If an approved diagnostic tool reaches the gateway and 203.0.113.20 (a documentation-only example address used here strictly for reasoning), but a valid intended domain lookup fails, first verify DNS resolver configuration/status rather than replace the Ethernet adapter. If DNS returns an address yet the HTTPS service is unavailable, examine the specific destination, port, certificate/time state, firewall policy, service status and credentials. A successful ping establishes only the reachability of one ICMP endpoint, not the health of a particular remote application. No network diagnostic step justifies disabling endpoint controls to make the symptom disappear."
        ],
        [
          "Cybersecurity practices and a transfer question",
          "Safe Internet use includes verifying genuine publisher/download domains, applying supported security updates, using unique passwords and multi-factor authentication where available, least-privilege accounts, backups with test restores, and skepticism toward links/attachments. A service technician should never install a remote-support program or accept a certificate warning without approved authorization. Transfer: a laptop opens offline calibration software, joins the Wi-Fi network, receives an IP address and resolves its cloud-license hostname, but the license check returns “unauthorized.” Hardware link, IP and DNS appear functional; next inspect account/entitlement or service response and recorded error, not assume a bad Wi-Fi card. This does not prove the server itself is healthy, only that the observed fault is farther along the service chain."
        ]
      ]
    },
    {
      "module": "M22",
      "page": "L19-0-04",
      "expectedTitle": "Copper pair, coaxial and optical signal paths",
      "expectedOpening": "Balanced twisted pairs reduce pickup by enabling differential receivers",
      "paragraphs": [
        [
          "Coaxial anatomy: the dielectric is part of the electrical design",
          "A coaxial cable consists of a center conductor, a dielectric insulator surrounding it, an outer conductor or braid/foil shield forming the signal return, and an insulating protective jacket. In the supplied practice question 28, the labeled dielectric is not the center conductor or the external jacket. The geometry and dielectric properties create distributed inductance and capacitance, hence a characteristic impedance Z0. In standard applications 50 Ω coax is used for many RF/network instrument interfaces while 75 Ω coax is common for TV/video distribution; verify actual equipment ratings and terminations. Never infer 50 Ω or 75 Ω merely from the outside appearance or physical length. This teaches the anatomy behind practice questions 28, 42 and 82 rather than relying on labeled-answer memorization."
        ],
        [
          "Propagation velocity, permeability and the velocity factor",
          "An electromagnetic signal propagates along the line through the field supported by its dielectric, not by individual electrons traveling at light speed down the metal. For a uniform low-loss TEM coaxial line, wave speed v ≈ 1/√(με), where μ is effective magnetic permeability and ε is absolute permittivity of the dielectric; relative to free space, velocity factor VF = v/c ≈ 1/√(μr εr). Most ordinary coax dielectrics have μr near 1, so εr dominates. Compare with Z0 ≈ √(L′/C′): characteristic impedance and propagation speed are related to distributed line properties but are different specifications. The supplied AST practice question 43 refers to dielectric constant and permeability. Read manufacturer velocity factor for the actual cable rather than assuming every cable has the same value."
        ],
        [
          "Worked propagation calculation and independent transfer",
          "Example 1: suppose a coax dielectric has εr = 2.25 and μr ≈ 1. Then VF≈1/√2.25 = 2/3 ≈0.667. With c≈3.0×10^8 m/s, v≈2.0×10^8 m/s. A 100 m signal path therefore adds roughly 100/(2.0×10^8)=5×10^-7 s=0.50 µs one-way delay. Example 2: for unfamiliar cable with manufacturer VF=0.80 and length 60 m, velocity≈2.4×10^8 m/s and delay≈60/(2.4×10^8)=0.25 µs. If a TDR returns a reflected pulse after 0.50 µs on that cable, estimated discontinuity distance is v×time/2=60 m; divide by two for the round trip. Limitations: temperature, actual dielectric, dispersion and termination affect precise tests. This calculation does not use cable impedance as a substitute for velocity factor."
        ]
      ]
    },
    {
      "module": "M23",
      "page": "L03-0-04",
      "expectedTitle": "Generators, counters and substitution boxes",
      "expectedOpening": "A signal generator supplies a defined waveform within amplitude",
      "paragraphs": [
        [
          "Why the frequency counter gate time matters",
          "A basic direct-count frequency counter counts N qualified input transitions during a known gate interval Tg, so its estimated frequency is f=N/Tg. At an exactly 1 s gate, one extra or missed transition represents 1 Hz of quantization uncertainty; at 0.1 s, one count represents 10 Hz. The timebase oscillator also introduces accuracy error, so a longer gate improves direct-count resolution but does not repair an inaccurate reference. In a real signal the counter needs sufficient amplitude, suitable trigger threshold, bandwidth and relatively clean periodic transitions. Noise can create extra crossings and jitter can disturb the count. A reciprocal or period-measuring counter may be better at low frequencies; it measures timing against its reference rather than merely counting signal cycles in a short fixed gate."
        ],
        [
          "Worked gate-time comparison: same signal, different resolution",
          "Assume an ideal 60 Hz source and a direct counter using its known accurate gate. At Tg=0.1 s, the expected number of transitions is approximately 60×0.1=6; one count is 1/0.1=10 Hz, or roughly 16.7% of 60 Hz. At Tg=1 s, approximately 60 events are counted and one count corresponds to 1 Hz, roughly 1.67%. A longer 10 s gate corresponds to 0.1 Hz per count but may respond more slowly to changes. The ±one-count comparison illustrates counting resolution, not a full uncertainty budget or a promise of those exact errors for every instrument."
        ],
        [
          "Independent transfer: choose the counter measurement",
          "A different oscillator yields 12,000 qualified cycles over a 2 s direct-count gate. Calculate f=12,000/2=6,000 Hz=6 kHz. One count would change the indication by 1/2=0.5 Hz. If the result flickers when the source amplitude drops below the trigger level, do not assume the oscillator frequency is actually changing: check trigger threshold, counter input rating and waveform with a properly connected scope. Explain why the period-measurement mode could be preferable for a 0.4 Hz signal: direct counting in 1 s produces zero or one cycle, whereas timed-period/reciprocal methods measure the interval more effectively."
        ]
      ]
    },
    {
      "module": "M23",
      "page": "L03-0-06",
      "expectedTitle": "Oscilloscope controls and spectrum fundamentals",
      "expectedOpening": "Timebase determines time per division",
      "paragraphs": [
        [
          "Operate a spectrum analyzer: span, reference, RBW and VBW",
          "A spectrum analyzer plots measured signal level versus frequency, not voltage versus time. Center and span define the region being scanned. Reference level and input attenuation must accommodate the largest expected signal without overloading the front end; too much attenuation may hide a small spur in the noise. Resolution bandwidth (RBW) sets the filter selectivity and practical ability to separate nearby spectral components; narrower RBW generally lowers displayed noise and lengthens measurement time. Video bandwidth (VBW) smooths the detected display, but reducing VBW does NOT improve the analyzer’s fundamental separation of close frequencies. Compare markers in a defined reference such as dBm (absolute power relative to 1 mW) or dBc (relative to a measured carrier), recording bandwidth and detector settings."
        ],
        [
          "Worked spectral separation and false-harmonic check",
          "A source may produce tones at 1.0000 MHz and 1.0008 MHz; their separation is 0.0008 MHz=800 Hz. With an RBW around 3 kHz, they may merge into one broad response. With an appropriately configured RBW near 100 Hz, adequate frequency-point density, sweep time and signal-to-noise ratio, they are more likely to be separately resolved. This does not mean setting RBW to exactly the spacing guarantees resolution; filter shape and amplitude difference matter. To see whether a 2 MHz marker is the source’s genuine second harmonic of 1 MHz or an analyzer overload artifact, increase safe input attenuation and look for a consistent relative response rather than immediately condemning the device under test."
        ],
        [
          "Independent interpretation: a new spectrum problem",
          "Two signals lie at 2.400 GHz and 2.402 GHz, 2 MHz apart. Choose a span wide enough to show both and an RBW substantially smaller than 2 MHz as a starting point; do not choose 5 MHz RBW if the aim is separating the peaks. If narrowing VBW produces a smoother trace without revealing two distinct peaks, explain that VBW is display smoothing rather than frequency selectivity. If peaks move or disappear with attenuation changes, first check analyzer overload and noise-floor limitations. Use a rated input, attenuator and coupling arrangement; never connect an unknown high-power RF output straight to a spectrum analyzer."
        ]
      ]
    },
    {
      "module": "M23",
      "page": "L03-0-07",
      "expectedTitle": "Loads, isolation transformers and variable sources",
      "expectedOpening": "A dummy load safely simulates a specified impedance",
      "paragraphs": [
        [
          "Size a rheostat, isolation transformer and variable AC source by different ratings",
          "A rheostat places a variable resistance in series with a load; it dissipates electrical power as heat, so both its resistance range and power/current rating matter. Use P=I²R and check the worst permissible adjustment and ventilation. An isolation transformer has separate windings in an appropriate design; its output is still an energized circuit, and the transformer’s volt-ampere (VA), voltage, frequency, inrush and protective ratings must suit the equipment. A typical Variac is a variable autotransformer with a common winding, NOT an isolation device. Its output current/VA rating, input voltage/frequency, output range and protection limit the safe load; twisting its knob does not make exposed terminals touch-safe. Qualified personnel must control work on mains-supplied equipment."
        ],
        [
          "Worked rating estimates: VA is not watts and watts are not VA",
          "Consider a hypothetical 120 V AC device rated 2 A RMS. Its nominal apparent load is S=VI=120×2=240 VA. A properly specified transformer must cover at least this continuous apparent load plus appropriate manufacturer-defined margin and startup/inrush conditions; 240 VA does not guarantee adequate selection if the device surges at startup. If a 20 Ω rheostat carries 0.50 A, it dissipates I²R=(0.50)²×20=5 W, so a rheostat rated only 2 W is unsuitable and thermal/derating margins still matter. A variable source rated only 1 A output cannot safely drive the same 2 A load regardless of knob position without a supported lower-current test plan."
        ],
        [
          "Independent transfer and safety distinction",
          "A separate low-voltage circuit needs a rated 24 V AC, 3 A supply: its nominal apparent requirement is 24×3=72 VA, before permitted inrush and design margin. A different resistor handles 0.25 A through 80 Ω: P=(0.25)²×80=5 W. Explain why a 5 W nameplate at the edge of the calculated dissipation may not be a conservative continuous-duty choice. Distinguish the desired functions: a variable AC autotransformer adjusts voltage, a properly rated isolation transformer separates the supplied circuit from a directly shared mains winding, and a rheostat introduces variable resistance/dissipation. None authorizes unqualified energized probing."
        ]
      ]
    },

    {
      "module": "M24",
      "page": "L19-0-08",
      "expectedTitle": "Signal conflicts, grounding and interface levels",
      "expectedOpening": "Hum, clipping, noise and intermittent audio are symptoms, not diagnoses.",
      "paragraphs": [
        [
          "ETA 17.9: level references and what a connector does not tell you",
          "Audio level is a measured voltage, not a property guaranteed by a plug. Decibels are logarithmic and need a reference: dBV = 20 log10(Vrms / 1 Vrms), whereas dBu = 20 log10(Vrms / 0.775 Vrms). A typical microphone-level signal can be only a few millivolts; nominal consumer line level is often −10 dBV (about 0.316 Vrms) and nominal professional line level is commonly +4 dBu (about 1.23 Vrms). These are useful reference examples, not universal maximum ratings or a guarantee about every device. Speaker outputs deliver far higher voltage/current and must never be connected straight into a microphone input. Confirm the actual device specification, balanced/unbalanced wiring, input impedance and allowable maximum level; a passive plug adapter is not an amplifier or attenuator."
        ],
        [
          "Worked levels: microphone to consumer line input",
          "Suppose the microphone output is −50 dBV. Use Vrms = 10^(dBV/20) × 1 V, so 10^(−50/20)=0.003162 V≈3.16 mVrms. A nominal −10 dBV line input corresponds to 10^(−10/20)=0.3162 Vrms. Their voltage ratio is 0.3162/0.003162≈100, so the nominal voltage gain needed is 20 log10(100)=40 dB, assuming adequate headroom, low noise and correct impedance. Plugging an unamplified microphone into that input may yield a very quiet signal; excessively boosting a downstream stage can amplify noise. A suitable microphone preamp performs gain before line-level processing."
        ],
        [
          "Independent level check and symptom isolation",
          "A different output measures 0.775 Vrms: calculate its level as 0 dBu but approximately −2.21 dBV. Another output measures 1.228 Vrms: 20 log10(1.228/0.775)≈+4 dBu. State why 0 dBu is not the same as 0 dBV. Transfer diagnosis: a 120 Hz hum appears only after two grounded audio devices are interconnected; compare shield, signal-reference and balanced connection before selecting an approved signal isolator—do not remove protective earth. If instead a waveform becomes flat-topped when the input is increased, identify clipping/overdrive, not automatically a ground loop."
        ]
      ]
    },
    {
      "module": "M24",
      "page": "L19-0-14",
      "expectedTitle": "Output transducers convert energy",
      "expectedOpening": "A speaker coil produces force in a magnetic field;",
      "paragraphs": [
        [
          "How a moving-coil loudspeaker converts current to sound",
          "A common dynamic speaker contains a permanent magnet and magnetic gap, a lightweight voice coil attached to a cone or diaphragm, a flexible surround and spider that center the assembly, and a frame. Alternating audio current through the voice coil experiences electromagnetic force in the magnetic field; the cone pushes and pulls air, creating pressure variations. The spider and surround allow axial motion while controlling alignment. Speaker impedance is a frequency-dependent AC load, not simply the copper coil resistance indicated by an ohmmeter. Crossovers direct selected frequency bands to suitable drivers. Applying excessive low-frequency energy to a tweeter, prolonged clipping, excessive power or DC offset can overheat the voice coil or cause destructive excursion."
        ],
        [
          "Worked voltage-power comparison: 8 ohms versus 4 ohms",
          "Assume the same clean 8.0 Vrms sinusoidal amplifier output across an approximately resistive nominal load for illustration. With 8 Ω, I=V/R=8/8=1.0 Arms and P=V²/R=64/8=8 W. With 4 Ω at the same voltage, I=8/4=2.0 Arms and P=64/4=16 W, twice the current and power in this simplified comparison. That demand can overheat or current-limit an amplifier rated for minimum 8 Ω; the true speaker impedance changes with frequency. Always obey the amplifier minimum load, speaker power/thermal limits and specified hookup, rather than assuming the amplifier can sustain the ideal calculated output."
        ],
        [
          "Independent speaker-construction and safety transfer",
          "A different low-voltage AC amplifier produces 6 Vrms into an 8 Ω rated resistive dummy load: I=6/8=0.75 Arms and P=36/8=4.5 W. With the same voltage into 6 Ω, the idealized current is 1 Arms and power 6 W; first verify the amplifier is rated for 6 Ω. Identify the cone as the air mover, voice coil as the current-carrying motor element, magnet as the static field source, spider/surround as suspension, and crossover as a frequency-selective network. If a speaker distorts only when driven loudly, test whether the amplifier clips under a known rated load before declaring the speaker defective."
        ]
      ]
    },
    {
      "module": "M25",
      "page": "L19-0-09",
      "expectedTitle": "Seven-segment, LCD and OLED displays",
      "expectedOpening": "Seven-segment LEDs illuminate selected diode segments;",
      "paragraphs": [
        [
          "CRT versus LCD versus OLED: distinguish how the picture is formed",
          "A historical CRT (kinescope) forms a picture by accelerating and steering an electron beam from an electron gun toward phosphor on the screen. The video signal controls beam current/intensity at the cathode or control electrode, so variations in video amplitude produce brightness variations. Deflection positions the beam; it is not ordinary visible light emitted by a backlight. This is the principle needed for the supplied AST practice question 96 (beam current intensity versus amplitude of the received signal), not a statement that beam frequency is the brightness control. A conventional LCD instead modulates a backlight through liquid crystals and polarizers; an OLED emits light in each activated pixel. CRT servicing can involve lethal high voltages and stored energy; this is conceptual teaching only, not an invitation to open a CRT."
        ],
        [
          "Seven-segment LED polarity and the common-anode decision",
          "Each seven-segment numeral uses individually controlled LED segments with a forward voltage and current limit. In a common-anode assembly the anodes share a positive supply; one segment illuminates when its individual cathode is driven sufficiently LOW through an appropriate current-limiting path. In a common-cathode assembly the cathodes share the return; a segment illuminates when its anode is driven HIGH. Practice Q100 describes common-anode operation. For a 5 V supply and ~2 V red segment at 10 mA, a simple segment resistor is (5−2)/0.010=300 Ω before standard-value selection and driver-voltage allowances. Multiplexing also requires checking duty cycle and per-pin/total-current constraints rather than assuming the static resistor calculation guarantees safe peak current."
        ],
        [
          "Independent display transfer: predict mechanism and logic state",
          "A seven-segment display is marked common anode. Its common pin is connected to a suitable +5 V supply through the approved design and a segment cathode is held at +5 V: the LED has nearly zero forward bias, so it remains OFF. With the cathode driven low through a rated driver and resistor, it turns ON. For a common-cathode type the drive polarity reverses. A different symptom: a TFT LCD shows a faint image under a flashlight but not normally; suspect the backlight/driver before the entire image-data path. In a CRT a changing video-amplitude signal changes beam intensity; in an OLED the pixel itself emits light."
        ]
      ]
    },
    {
      "module": "M25",
      "page": "L19-0-10",
      "expectedTitle": "Photocells, photodiodes and photovoltaic sources",
      "expectedOpening": "A light-dependent resistor changes resistance with illumination;",
      "paragraphs": [
        [
          "Read photo-device schematic symbols by the actual energy direction",
          "A photodiode symbol resembles a diode but is accompanied by arrows pointing TOWARD the junction to indicate incoming light; an LED symbol has arrows pointing AWAY because it emits light. A photoresistor or LDR shows a resistor element with incident-light arrows (symbol outline varies by drawing convention). A phototransistor is a transistor with light arrows aimed at its photosensitive junction; its collector and emitter still need bias and an appropriate load. Some schematics omit arrows or use functional blocks, so use the legend and manufacturer datasheet to confirm identification. A photovoltaic cell may be drawn as an illuminated cell/diode with polarity; identify it from the circuit function and terminal labeling, not arrows alone. Never assume a photo-device symbol means the component can absorb arbitrary optical power or voltage."
        ],
        [
          "Worked circuit: why an LDR divider responds to light",
          "Take a nonhazardous 5.0 V divider with 10 kΩ from +5 V to a midpoint and an LDR from midpoint to 0 V. If the LDR is 20 kΩ in dim light, Vout=5×20/(10+20)=3.33 V. If stronger illumination reduces the LDR to 5 kΩ, Vout=5×5/(10+5)=1.67 V. Therefore with the LDR in the lower branch, brighter light LOWERS the sensed voltage. Moving the LDR into the upper branch reverses the trend. This is why a printed symbol and actual wiring position matter; the sensor resistance response alone does not determine whether the ADC code rises or falls."
        ],
        [
          "Independent optical-device and sensor calculation",
          "Identify which symbols denote emission versus detection: LED arrows outward (emitter); photodiode, phototransistor and photoresistor arrows inward (detectors). A different 3.3 V divider has a fixed 6.8 kΩ top resistor and an illuminated LDR of 3.4 kΩ at the bottom: Vout=3.3×3.4/(6.8+3.4)=1.10 V. If the LDR grows to 13.6 kΩ in the dark, Vout=3.3×13.6/(6.8+13.6)=2.20 V. Predict which condition is reported as HIGH by a comparator threshold at 1.5 V, assuming adequate noise margin. An optocoupler uses an LED and a photosensitive output for rated signal isolation; a solar cell instead supplies electrical energy under illumination."
        ]
      ]
    },
{
    "module": "M26",
    "page": "L20-0-01",
    "expectedTitle": "Modulation: how a message rides on a carrier",
    "expectedOpening": "A carrier is a periodic signal selected for transmission.",
    "paragraphs": [
        [
            "Modulation is not the same thing as multiple access",
            "Amplitude modulation (AM) varies the carrier amplitude, frequency modulation (FM) varies instantaneous carrier frequency, and phase modulation changes carrier phase. A receiver must recover the appropriate symbol or analog message and use a compatible channel bandwidth. Multiple access answers a DIFFERENT question: how several users share spectrum. FDMA gives users different frequency channels, TDMA allocates separate time slots, and CDMA distinguishes spread-spectrum transmissions by codes. These methods can coexist with modulation rather than replace it; the supplied practice exam Q95 tests the classic FDMA/TDMA/CDMA distinction. GSM historically used combinations of FDMA channel separation and TDMA time slots. Modern LTE and 5G NR use OFDM-related physical-layer and multiple-access methods rather than simply being another name for CDMA or the three historical categories."
        ],
        [
            "Worked comparison: frequency slots, time slots and codes",
            "Three users must share a hypothetical 900 kHz allocated block. For an ideal FDMA illustration, three nonoverlapping 300 kHz slices could be assigned (real systems require guard bands and signaling). For a simple TDMA illustration, each user could occupy one of three repeating equal-duration slots, so each has roughly one third of raw airtime before overhead. For a CDMA illustration, users can overlap in time and frequency while different spreading codes assist separation; interference, power control and receiver processing limit capacity. These are conceptual resource-allocation examples, not claims that any arbitrary 900 kHz radio can implement all three."
        ],
        [
            "Independent transfer: choose radio mode, then access method",
            "A 10 kHz tone amplitude-modulates a 1.00 MHz carrier: ideal single-tone double-sideband AM has spectral lines near 0.990, 1.000 and 1.010 MHz, occupying roughly 20 kHz from the lower to upper sideband. Now choose a sharing strategy: separate narrow frequency channels describes FDMA; alternating users in a common channel at assigned instants describes TDMA; distinguishing simultaneous coded spread transmissions describes CDMA. A radio tuned to the same frequency but configured for FM rather than AM will not reliably recover the original AM audio. State why receiver modulation compatibility and multiple-access coordination are separate requirements."
        ]
    ]
},
{
    "module": "M26",
    "page": "L20-0-03",
    "expectedTitle": "Propagation, polarization and path loss",
    "expectedOpening": "RF waves have electric and magnetic fields transverse to their direction",
    "paragraphs": [
        [
            "Electrostatic versus propagating electromagnetic fields",
            "An electrostatic field arises from charge distribution without requiring a time-varying wave, while magnetic fields can arise from currents or magnets. Changing electric and magnetic fields are coupled in electromagnetic radiation. In the far-field plane-wave approximation, electric field E and magnetic field H are perpendicular to one another AND to propagation direction, with energy carried along their cross-product direction. Near an antenna, reactive electric/magnetic fields can store energy and need not follow the same simple fixed E/H ratio or purely transverse model. Polarization is defined by the electric-field orientation: a vertically polarized ideal plane wave has vertical E and a transverse magnetic field, which is why practice Q97–98 refer to 90-degree orientations."
        ],
        [
            "Worked wavelength and free-space distance comparison",
            "For a 75 MHz carrier, λ≈(3.00×10^8 m/s)/(75×10^6 s^-1)=4.0 m; a first-pass free-space quarter-wavelength is 1.0 m, with actual antenna geometry and end effects modifying the result. Under an ideal far-field free-space arrangement with fixed transmit power, antenna gains and frequency, doubling separation reduces received power density to one quarter, a 6.02 dB reduction (10log10(4)). In a real path, reflections, diffraction, polarization, cable loss and antenna heights make actual received levels differ from that simple inverse-square comparison."
        ],
        [
            "Independent polarization and field reasoning",
            "A 100 MHz plane wave has free-space wavelength 3.0 m; increasing frequency to 200 MHz halves that wavelength to 1.5 m. A receiving linear antenna rotated 90° from the transmitted ideal linear polarization can have severe polarization mismatch; do not call the transmitter defective from one measurement. For propagation along +z with the electric field oriented along +y, the magnetic field must be perpendicular to both E and the propagation direction, with its sign chosen so E×H points along +z. Distinguish this traveling-wave example from static charging of a disconnected metal object, which is an electrostatic field and is not automatically an RF broadcast."
        ]
    ]
},
{
    "module": "M27",
    "page": "L20-0-02",
    "expectedTitle": "Communications networks as end-to-end systems",
    "expectedOpening": "A telecommunications system moves a message through a source, encoder/transmitter,",
    "paragraphs": [
        [
            "CETa 20.1: compare the purposes of two-way radio services",
            "Two-way radio systems permit users to transmit as well as receive; their operating rules vary by service. Land-mobile radio supports dispatch, public-safety or industrial fleets, often using designated channels, push-to-talk and repeaters. Aviation communications include airband voice coordination between aircraft and air traffic services, with internationally standardized frequency/mode practices. Maritime VHF supports ship-to-ship and ship-to-shore safety, calling and working channels. Amateur, fixed and other service categories have their own allocations and authorization. A consumer broadcast receiver is one-way reception and should not be confused with a transceiver. Exact channel allocations, priority procedures and applicable regulations must be checked for the service and jurisdiction; examples do not authorize transmission."
        ],
        [
            "Worked service diagnosis: a transmitter is not every part of a call",
            "An authorized land-mobile handheld works radio-to-radio nearby but cannot reach a remote group. Sketch microphone→modulator/transmitter→antenna→repeater receive→repeater transmit→remote receiver→speaker. First check configured repeater channel pair/offset and required access tone or code, then coverage and whether the repeater is available. An aircraft receiver instead depends on an appropriate aeronautical channel/mode, antenna and valid service authorization; a ship uses applicable maritime calling and working procedures. The common diagnostic principle is to verify the complete signal path, not infer a bad microphone just because a distant user heard nothing."
        ],
        [
            "Independent service identification and safe decision",
            "For each case select a service and likely communication path: (1) dispatch among road-maintenance vehicles: land-mobile with possible repeater; (2) pilot/air-traffic voice coordination: aeronautical service; (3) ship contacting a coastal station: maritime VHF within its authorized plan. Distinguish a broadcast FM receiver (receive only) from an FM two-way transceiver (transmit and receive, subject to authorization). If receive audio is good but local transmission fails, state separate hypotheses for microphone audio path, PTT/keying, transmit frequency/permission, antenna and remote receiver; choose documented passive or qualified low-energy diagnostic steps rather than transmitting into an unknown load."
        ]
    ]
},
{
    "module": "M27",
    "page": "L20-0-07",
    "expectedTitle": "Simplex, duplex and repeaters",
    "expectedOpening": "Simplex communication typically alternates transmit and receive on one shared channel;",
    "paragraphs": [],
    "replacements": [
        {
            "heading": "Understand the underlying model",
            "from": "Simplex communication typically alternates transmit and receive on one shared channel; full-duplex systems can transmit and receive concurrently using separate paths or sufficiently isolated channels. A repeater receives and retransmits to extend service area. Duplexing and channel isolation create additional filter and timing constraints.",
            "to": "Simplex means information travels in only one direction on a link, as in a one-way broadcast. Push-to-talk handheld radio is normally HALF-DUPLEX: both ends may transmit but not at the same time on the shared channel. FULL-DUPLEX allows concurrent transmission and reception, usually through suitably separated or isolated paths. A repeater receives and retransmits to extend coverage, and may use separate uplink and downlink channels. Keep communication direction (simplex/half/full-duplex) distinct from the role of a repeater and from a particular modulation method."
        }
    ],
    "fieldReplacements": [
        {
            "key": "text",
            "from": "Simplex communication typically alternates transmit and receive on one shared channel; full-duplex systems can transmit and receive concurrently using separate paths or sufficiently isolated channels. A repeater receives and retransmits to extend service area. Duplexing and channel isolation create additional filter and timing constraints.",
            "to": "Simplex means information travels in only one direction on a link, as in a one-way broadcast. Push-to-talk handheld radio is normally HALF-DUPLEX: both ends may transmit but not at the same time on the shared channel. FULL-DUPLEX allows concurrent transmission and reception, usually through suitably separated or isolated paths. A repeater receives and retransmits to extend coverage, and may use separate uplink and downlink channels. Keep communication direction (simplex/half/full-duplex) distinct from the role of a repeater and from a particular modulation method."
        },
        {
            "key": "remember",
            "from": "retain the distinction between simplex success and repeater-path failure.",
            "to": "retain the distinction between successful direct half-duplex contact and repeater-path failure."
        },
        {
            "key": "workedStep",
            "from": "retain the distinction between simplex success and repeater-path failure.",
            "to": "retain the distinction between successful direct half-duplex contact and repeater-path failure."
        },
        {
            "key": "workedConclusion",
            "from": "retain the distinction between simplex success and repeater-path failure.",
            "to": "retain the distinction between successful direct half-duplex contact and repeater-path failure."
        },
        {
            "key": "reflectionAnswer",
            "from": "Check the documented receive/transmit channel offset and signaling access determine whether the repeater is actually reachable retain the distinction between simplex success and repeater-path failure. A radio cannot be assumed to use the repeater merely because the display contains a repeater label.",
            "to": "Check the documented receive/transmit channel offset and signaling access; determine whether the repeater is actually reachable; retain the distinction between successful direct half-duplex contact and repeater-path failure. A radio cannot be assumed to use the repeater merely because the display contains a repeater label."
        }
    ]
},
    {
        "module": "M27",
        "page": "L20-0-08",
        "expectedTitle": "Cellular and satellite service boundaries",
        "expectedOpening": "A mobile phone connects through a radio access network",
        "paragraphs": [
            [
                "Satellite links: trace uplink, spacecraft and downlink",
                "A satellite telecommunications path uses a ground terminal or gateway to send an UPLINK toward the spacecraft; the satellite receives, filters/converts and retransmits or processes the information, and a DOWNLINK reaches another earth station or terminal. The ground segment includes antenna, RF front end, frequency conversion, modem, network connection, pointing and tracking where needed. Some modern regenerative satellites also route/process traffic in orbit. A GEO craft appears approximately fixed in the sky and offers wide coverage but a long path and noticeable delay; a LEO craft has a shorter path but moves relative to users and requires tracking/handover across a constellation. The physical link budget includes transmitter power, antenna gains, free-space path loss, atmosphere/rain fade, noise, polarization and receiver sensitivity. A registered terminal does not prove an application service is reachable."
            ],
            [
                "Worked comparison: orbital delay and loss mechanism",
                "For a simplified GEO path, take satellite altitude about 35,786 km and a terminal directly below it; one ground-to-satellite leg propagation time is at least 35,786,000 m ÷ 3.00×10^8 m/s ≈ 0.119 s. A ground→satellite→ground path involves two such legs, at least about 0.239 s one-way and 0.477 s round trip before routing or equipment delay. This is a minimum idealized geometry, not a universal GEO latency: slanted paths are longer. For an idealized 600 km LEO satellite overhead, one ground-to-space leg is ~0.002 s, but real service delay depends on route, gateways, ground network and handovers. Diagnose high latency separately from intermittent rain fade or poor pointing."
            ],
            [
                "Independent transfer: satellite fault isolation",
                "An earth terminal reports healthy modem power but loses link only during heavy rain. First compare receiver signal-to-noise ratio and fade margin, the relevant uplink/downlink weather conditions, pointing and modem alarm counters rather than blindly reinstalling software. A second terminal sees passing RF quality but its remote website fails: test IP addressing, gateway reachability and the external service independently. On an ideal 1,000 km overhead satellite leg, propagation time is approximately 1,000,000/3×10^8 = 3.33 ms; identify why this does NOT predict complete user-application latency. Never transmit on satellite frequencies without authorization or bypass antenna/RF exposure controls."
            ]
        ]
    },
    {
        "module": "M27",
        "page": "L19-0-02",
        "expectedTitle": "Analog voice service versus packet transport",
        "expectedOpening": "Traditional wired voice circuits use switched service",
        "paragraphs": [
            [
                "POTS physical operation: TIP, RING, hook switch and hybrid",
                "A traditional two-wire POTS subscriber local loop connects telephone equipment to the local exchange carrier (LEC) central office. Historically called TIP and RING, the pair carries a nominal DC battery feed while off-hook current signals that the subscriber has picked up. A ringing signal is an AC voltage superimposed/connected for an incoming alert under the actual system design. The hook switch changes the telephone load; the central office detects loop state and provides call-control signaling such as dial tone. A hybrid circuit separates the two-way speech functions while sharing one external pair; some transmit audio returns as sidetone. Dialing may use pulse interruptions or dual-tone multifrequency (DTMF), depending on equipment. Voltage, ringing and longitudinal conditions can be hazardous: do not treat a telephone pair as safe because it is called low voltage. This is a functional schematic model, not a field-connection instruction."
            ],
            [
                "Worked call path: LEC, circuit switch and packet voice",
                "Telephone A goes off-hook: the switching equipment detects loop current, supplies signaling and interprets dialed digits. In a conventional circuit-switched call, the exchange establishes a dedicated logical path through switching resources for that call; the path remains reserved through the call until disconnect, even when users are silent. LEC means LOCAL EXCHANGE CARRIER, the provider operating the local exchange/subscriber service in its area, not an equipment part or a modulation method (practice Q93). Practice Q94 tests the single established path concept, not the claim that only two physical wires can exist through the entire network. Packet voice instead encodes speech into packets routed through IP networks; call setup signaling and media routes can differ. One-way speech in VoIP is not proof that the analog earpiece is defective."
            ],
            [
                "Independent application: identify why a phone has no dial tone",
                "Imagine an analog POTS phone with a known-good handset: line idle, but going off-hook produces no audible dial tone. Draw subscriber TIP/RING pair → central-office battery/loop detector → call-control/tone generator → telephone hybrid → receiver. With approved equipment and authorization, a technician would first establish whether the loop and service are provisioned and whether the exchange detects off-hook; possible causes include an open pair, failed customer equipment or network fault. Compare a second case where an IP telephone registers but has one-way audio: packet media direction/firewall/routing should be examined rather than looking for POTS DC loop current. State which signals belong to the circuit-switched loop and which belong to an IP media path."
            ]
        ]
    },
    {
        "module": "M28",
        "page": "L28-0-03",
        "expectedTitle": "Estimates and material planning quantify uncertainty",
        "expectedOpening": "A service estimate separates labor, replacement parts",
        "paragraphs": [
            [
                "Parts cross-reference must preserve form, fit, function and safety",
                "ETA 21.3 requires technicians to locate and cross-reference replacement parts and products. Begin with the exact manufacturer part number, model, serial range, board assembly/revision and service bulletin; inspect the approved illustrated parts list, OEM catalog or authorized distributor cross-reference. A substitute is acceptable only after confirming electrical limits (voltage, current, tolerance, power, temperature, insulation), pin assignment, package/footprint, mechanical clearance and required certifications or manufacturer approval. Marking similarity, distributor search suggestions or same connector shape alone do not establish interchangeability. Record the approved substitute and source for traceability, including counterfeit/obsolete-part risk. An unapproved safety component or fuse substitution must not be used."
            ],
            [
                "Worked service estimate and cross-reference decision",
                "Suppose an approved board revision requires a 5 V regulator whose listed OEM part is unavailable; a catalog suggests a similar package. First identify the original input range, 5 V output tolerance, rated current and thermal dissipation, pin order, compensation and mounting requirements from approved data. If the candidate has reversed input/output pins or insufficient dissipation, reject it even if cost is lower. Separately price an accepted repair: $42 authorized part + 1.5 h × $60/h labor ($90) + $8 supplies = $140 subtotal before specifically applicable taxes/travel. The estimate must identify assumptions and approval before replacing parts."
            ],
            [
                "Independent parts and invoice application",
                "A distributor offers a capacitor marked 100 µF at a lower price to replace an original 100 µF, 25 V, 105 °C low-ESR part. Is capacitance alone sufficient? No: verify rated voltage, dielectric/electrolyte type, ESR at the required frequency, ripple-current/temperature endurance, polarity, lead spacing and authorized substitution. For a separate work order with 2 h at $75/h, a $65 part and $10 supplies, subtotal = $225 before authorized taxes or fees. Show distinct lines for labor, parts and consumables, and record the exact approved part/revision; do not bill for work or verification not actually performed."
            ]
        ]
    },
    {
        "module": "M28",
        "page": "L28-0-07",
        "expectedTitle": "Evidence-based work productivity",
        "expectedOpening": "Productivity is useful output per resources and time",
        "paragraphs": [
            [
                "CETa 21.5: productivity and first-pass yield measure different things",
                "A service business may calculate time utilization/productivity for a technician as billable productive hours divided by total scheduled hours in the same accounting period, multiplied by 100%. This is not the same as first-pass yield: first-pass yield = units passing on their first attempt divided by units attempted. Use definitions adopted by the employer; hours spent on mandatory training, safety stops, warranty service and documentation still matter operationally even when not invoiced. A team metric should weight by total hours or total units, not blindly average individual percentages with unequal denominators. The guide Chapter 21 describes a billable-hours-to-scheduled-hours model; ETA 21.5 asks BOTH individual and department calculations."
            ],
            [
                "Worked individual and department productivity",
                "Technician A is scheduled for 40 h and records 30 billable h: 30/40×100=75% utilization. Technician B is scheduled for 20 h and records 10 billable h: 10/20×100=50%. Department time utilization = (30+10)/(40+20)×100 = 40/60×100 ≈ 66.7%, NOT the unweighted average 62.5%. As a separate quality measure, if A repairs 8 of 10 units correctly first time, first-pass yield=80%; do not replace the 75% time-utilization figure with 80% simply because both are called performance metrics."
            ],
            [
                "Independent transfer: choose denominator and interpret cautiously",
                "In a week, technician C is scheduled 32 hours, invoices 24 productive hours, and passes 9 of 12 devices on first test. Technician D is scheduled 48 hours, invoices 36 productive hours, and passes 15 of 20. C utilization = 24/32=75%; D=36/48=75%; department utilization = (24+36)/(32+48)=60/80=75%. Combined first-pass yield = (9+15)/(12+20)=24/32=75%, coincidentally the same percentage but from DIFFERENT denominators. Explain why a safety-related stop, differing jobs and rework may make one percentage inadequate to judge real productivity."
            ]
        ]
    }, 
    {
        "module": "M30",
        "page": "L23-0-06",
        "expectedTitle": "Demand fresh evidence for the second gate",
        "expectedOpening": "The second mock should demonstrate retained competence on materially new items",
        "fieldReplacements": [
            {
                "key": "remember",
                "from": "require independent replacement item authoring and vetting before treating an 85%+ pair as verified.",
                "to": "Treat any confirmed form overlap as a limitation, but do not presume the currently validated assessment bank has such a defect."
            },
            {
                "key": "workedScenario",
                "from": "Mock A contains 100 items and Mock B 100; twenty prompts are identical. Predict the outcome before revealing the reasoning.",
                "to": "Imagine two hypothetical 100-item mock forms that contain twenty identical prompts. How would a learner interpret their scores without assuming anything about the actual Alfred assessment bank? Predict the outcome before revealing the reasoning."
            },
            {
                "key": "workedStep0",
                "from": "Mark the current two-form independence criterion as blocked",
                "to": "In this hypothetical pair, note the 20 identical items and qualify the independence claim"
            },
            {
                "key": "workedStep2",
                "from": "require independent replacement item authoring and vetting before treating an 85%+ pair as verified.",
                "to": "refer any verified actual bank defect to the established controlled correction process, without changing questions here."
            },
            {
                "key": "workedConclusion",
                "from": "require independent replacement item authoring and vetting before treating an 85%+ pair as verified.",
                "to": "refer any verified actual bank defect to the established controlled correction process, without changing questions here."
            },
            {
                "key": "reflectionAsk",
                "from": "Mock A contains 100 items and Mock B 100; twenty prompts are identical. Without referring to the worked example, explain your first conclusion, the calculation or diagnostic check, and the evidence that would change your mind.",
                "to": "Imagine two hypothetical 100-item mock forms that contain twenty identical prompts. How would a learner interpret their scores without assuming anything about the actual Alfred assessment bank? Without referring to the worked example, explain how the overlap limits independence and what evidence would be needed to establish the status of any actual exam forms."
            },
            {
                "key": "reflectionAnswer",
                "from": "Mark the current two-form independence criterion as blocked preserve existing saved results as historical practice require independent replacement item authoring and vetting before treating an 85%+ pair as verified. Do not silently upgrade a second passing score to 'certification ready' while this collision remains unresolved.",
                "to": "In this hypothetical example, twenty identical prompts represent 20% of each form, so the results are not fully independent evidence. This does not establish any overlap in Alfred's current forms. Use the existing validated assessment-closure documentation for the actual system, and distinguish internal readiness from official ETA certification."
            }
        ],
        "replacements": [
            {
                "heading": "Worked example · diagnose before you reveal",
                "from": "Use this specific situation as a model. State your prediction and decide which evidence would change it. Mock A contains 100 items and Mock B 100; twenty prompts are identical.",
                "to": "Use this hypothetical situation as a model, not a finding about the current Alfred assessment bank. Imagine two hypothetical 100-item mock forms that contain twenty identical prompts. How would a learner interpret their scores without assuming anything about the actual Alfred assessment bank?"
            },
            {
                "heading": "Common mistake and limitations",
                "from": "Do not silently upgrade a second passing score to 'certification ready' while this collision remains unresolved.",
                "to": "In the hypothetical case, overlapping prompts limit score independence; this example is not evidence of any unresolved problem in Alfred's validated assessment bank."
            }
        ],
        "paragraphs": [
            [
                "Case studies are not current assessment findings",
                "The two-form example deliberately assumes 20 shared prompts so the arithmetic and evidence-quality lesson can be learned. It is not a report that Alfred's actual forms presently share questions. A real validity conclusion would require the existing authorized assessment evidence and release status, not an illustrative scenario. Never reset scores, rewrite item IDs, reopen the completed assessment audit or make a certification-pass guarantee based on this teaching example."
            ]
        ]
    },
    {
        "module": "M30",
        "page": "L23-0-00",
        "expectedTitle": "Audit the second form's unseen status",
        "expectedOpening": "Distinct IDs can conceal duplicate question stems",
        "fieldReplacements": [
            {
                "key": "remember",
                "from": "schedule a documented assessment-bank repair with versioned score semantics.",
                "to": "Rely on verified form evidence; do not turn a hypothetical overlap into an unapproved assessment-bank repair."
            },
            {
                "key": "workedScenario",
                "from": "The current exam forms have 20 shared prompt strings with identical question IDs. Predict the outcome before revealing the reasoning.",
                "to": "In a hypothetical system, a mock-form comparison detects twenty matching prompt strings. Explain the evidence needed before declaring an actual form invalid. Predict the outcome before revealing the reasoning."
            },
            {
                "key": "workedStep0",
                "from": "Count exact duplicates and flag them in the validation report",
                "to": "In the hypothetical exercise, verify which prompt texts and form versions truly match"
            },
            {
                "key": "workedStep1",
                "from": "do not change IDs or answers in this content-only release",
                "to": "distinguish illustrative results from documented findings in the existing assessment closure"
            },
            {
                "key": "workedStep2",
                "from": "schedule a documented assessment-bank repair with versioned score semantics.",
                "to": "do not edit live questions or learner scores as part of an instructional review."
            },
            {
                "key": "workedConclusion",
                "from": "schedule a documented assessment-bank repair with versioned score semantics.",
                "to": "do not edit live questions or learner scores as part of an instructional review."
            },
            {
                "key": "reflectionAsk",
                "from": "The current exam forms have 20 shared prompt strings with identical question IDs. Without referring to the worked example, explain your first conclusion, the calculation or diagnostic check, and the evidence that would change your mind.",
                "to": "In a hypothetical system, a mock-form comparison detects twenty matching prompt strings. Explain the evidence needed before declaring an actual form invalid. Without referring to the worked example, state what would be checked and how you would avoid treating this hypothetical as an actual audit result."
            },
            {
                "key": "reflectionAnswer",
                "from": "Count exact duplicates and flag them in the validation report do not change IDs or answers in this content-only release schedule a documented assessment-bank repair with versioned score semantics. This course release improves instruction, but the forms are not independent until the overlap is fixed and retested.",
                "to": "For the hypothetical forms, confirm duplicates against both original stems, score keys and form versions and document the finding. Preserve all source questions and recorded scores; the current Alfred assessment status must be taken from previously verified closure evidence, not inferred from this hypothetical. An actual material defect would need separate approved change control."
            }
        ],
        "replacements": [
            {
                "heading": "Worked example · diagnose before you reveal",
                "from": "Use this specific situation as a model. State your prediction and decide which evidence would change it. The current exam forms have 20 shared prompt strings with identical question IDs.",
                "to": "Use an illustrative example, not a claim about the current Alfred assessment bank. In a hypothetical system, a mock-form comparison detects twenty matching prompt strings. Explain the evidence needed before declaring an actual form invalid."
            },
            {
                "heading": "Common mistake and limitations",
                "from": "This course release improves instruction, but the forms are not independent until the overlap is fixed and retested.",
                "to": "A teaching example cannot establish a defect in a completed assessment release. Any real issue requires its own independently verified evidence."
            }
        ],
        "paragraphs": [
            [
                "Evidence before interpreting the two-mock readiness gate",
                "The illustrated twenty-duplicate scenario is not a claim about the actual Alfred mock forms. Two fresh 100-question scores of at least 85% are an internal learning target, not an ETA requirement or a certified psychometric claim. If genuine overlap or invalid keys are established by the protected assessment closure, follow that documented disposition; do not infer that work is unfinished merely because a lesson discusses how to recognize duplicates. Learner records, question IDs, answers and historical scores remain untouched."
            ]
        ]
    },
    {
        "module": "M30",
        "page": "L23-0-02",
        "expectedTitle": "Credentials and transcript language must be accurate",
        "expectedOpening": "'Completed Alfred learning modules' describes participation",
        "fieldReplacements": [
            {
                "key": "workedScenario",
                "from": "A resume entry says 'Bachelor of Electronics, Alfred University' after finishing self-study pages. Predict the outcome before revealing the reasoning.",
                "to": "A learner completes Alfred's self-study program and wants to label an internal completion badge 'ETA CETa certified' before taking an authorized ETA examination. Predict the outcome before revealing the reasoning."
            },
            {
                "key": "workedStep0",
                "from": "Replace the inaccurate degree claim with a truthful self-directed electronics study description and any separately verified official certifications",
                "to": "Label the badge as self-study completion or internally verified practice performance, not an official ETA CETa certification"
            },
            {
                "key": "reflectionAsk",
                "from": "A resume entry says 'Bachelor of Electronics, Alfred University' after finishing self-study pages. Without referring to the worked example, explain your first conclusion, the calculation or diagnostic check, and the evidence that would change your mind.",
                "to": "A learner completes Alfred's self-study program and wants to label an internal completion badge 'ETA CETa certified' before taking an authorized ETA examination. Without referring to the worked example, distinguish a legitimate self-study completion status from an externally awarded CETa certification."
            },
            {
                "key": "reflectionAnswer",
                "from": "Replace the inaccurate degree claim with a truthful self-directed electronics study description and any separately verified official certifications keep the Grizzly identity as project branding, not a false institution. Attractive institutional design never authorizes misleading credential or accreditation claims.",
                "to": "A self-study completion badge records participation and can report internal verified module/mastery results; it must not say ETA CETa certified until ETA issues the certification. Alfred University is the learning-site identity, not proof of university accreditation or awarded academic credit."
            }
        ],
        "replacements": [
            {
                "heading": "Worked example · diagnose before you reveal",
                "from": "Use this specific situation as a model. State your prediction and decide which evidence would change it. A resume entry says 'Bachelor of Electronics, Alfred University' after finishing self-study pages.",
                "to": "Use this certification-accuracy scenario as a model. State your prediction and decide which evidence would change it. A learner completes Alfred's self-study program and wants to label an internal completion badge 'ETA CETa certified' before taking an authorized ETA examination."
            }
        ],
        "paragraphs": [
            [
                "Internal course status versus externally awarded CETa status",
                "The ETA-issued Certified Electronics Technician Associate (CETa) credential is not awarded by a self-paced website, the completion of Alfred modules or Alfred's internal 85% practice gates. A learner may truthfully record completed modules, practice scores and remaining competency work; only an authorized certification record establishes external CETa status. This distinction is specifically relevant to interpreting the last-week course dashboard and prevents institutional branding from being confused with official academic credit or certifier approval."
            ]
        ]
    }
  ];
  const fieldTarget = (page, key) => {
    if (key === 'text' || key === 'remember') return [page, key];
    if (key === 'workedStep') return [page.goldTeaching.worked.steps, 2];
    if (key === 'workedStep0') return [page.goldTeaching.worked.steps, 0];
    if (key === 'workedStep1') return [page.goldTeaching.worked.steps, 1];
    if (key === 'workedStep2') return [page.goldTeaching.worked.steps, 2];
    if (key === 'workedScenario') return [page.goldTeaching.worked, 'scenario'];
    if (key === 'reflectionAsk') return [page.goldTeaching.reflection, 'ask'];
    if (key === 'workedConclusion') return [page.goldTeaching.worked, 'conclusion'];
    if (key === 'reflectionAnswer') return [page.goldTeaching.reflection, 'answer'];
    throw Error('Unsupported correction field ' + key);
  };
  try {
    if (!data || !Array.isArray(data.course)) throw Error('Canonical dataset not present');
    if (window.ALFRED_CETA_CLOSURE_STATUS?.ok !== true) throw Error('Protected assessment closure not confirmed');
    if (data.course.length !== 30) throw Error('Unexpected canonical module count');
    const pageCount = data.course.reduce((sum, module) => sum + (module.pages?.length || 0), 0);
    if (pageCount !== 373) throw Error('Unexpected canonical page count');
    const targets = patches.map(p => {
      const module = data.course.find(m => m.id === p.module);
      const page = module?.pages?.find(pg => pg.id === p.page);
      if (!page || page.title !== p.expectedTitle || !Array.isArray(page.goldTeaching?.paragraphs) ||
          (p.expectedOpening && !String(page.goldTeaching.paragraphs?.[0]?.[1] || '').startsWith(p.expectedOpening) && !(p.replacements || []).some(r => String(page.goldTeaching.paragraphs?.[0]?.[1] || '').startsWith(r.to)))) {
        throw Error('Source-checked page mismatch: ' + p.module + '/' + p.page);
      }
      return page;
    });
    // Validate the entire patch before modifying any page (fail closed).
    for (let i = 0; i < patches.length; i++) {
      const page = targets[i];
      for (const change of (patches[i].fieldReplacements || [])) {
        const pair = fieldTarget(page, change.key);
        if (![change.from, change.to].includes(pair[0][pair[1]]))
          throw Error('Source-checked field correction mismatch: ' + patches[i].module + '/' + change.key);
      }
      for (const replacement of (patches[i].replacements || [])) {
        const matching = page.goldTeaching.paragraphs.filter(x => Array.isArray(x) && x[0] === replacement.heading);
        if (matching.length !== 1 || ![replacement.from, replacement.to].includes(matching[0][1]))
          throw Error('Source-checked original correction mismatch: ' + patches[i].module + '/' + patches[i].page);
      }
      for (const [heading, body] of patches[i].paragraphs) {
        if (!heading || !body || typeof heading !== 'string' || typeof body !== 'string') throw Error('Invalid instructional material');
        const existing = page.goldTeaching.paragraphs.find(x => Array.isArray(x) && x[0] === heading);
        if (existing && existing[1] !== body) throw Error('Conflicting prior instructional addition: ' + heading);
      }
    }
    for (let i = 0; i < patches.length; i++) {
      const page = targets[i];
      for (const change of (patches[i].fieldReplacements || [])) {
        const pair = fieldTarget(page, change.key);
        if (pair[0][pair[1]] === change.from) pair[0][pair[1]] = change.to;
      }
      for (const replacement of (patches[i].replacements || [])) {
        const entry = page.goldTeaching.paragraphs.find(x => x[0] === replacement.heading);
        if (entry[1] === replacement.from) entry[1] = replacement.to;
      }
      for (const pair of patches[i].paragraphs) {
        if (!page.goldTeaching.paragraphs.some(x => Array.isArray(x) && x[0] === pair[0])) {
          page.goldTeaching.paragraphs.push(pair.slice());
        }
      }
    }
    window.ALFRED_CETA_INSTRUCTIONAL_STATUS = {
      ok: true, revision, correctedPages: patches.map(p => p.page),
      addedExplanatorySections: patches.reduce((n, p) => n + p.paragraphs.length, 0),
      reviewedPagesInLedger: 373, expectedPages: 373
    };
  } catch (error) {
    window.ALFRED_CETA_INSTRUCTIONAL_STATUS = {ok: false, revision, error: String(error?.message || error)};
    console.warn('[Alfred CETa instructional corrections] Not applied:', error);
  }
})();
