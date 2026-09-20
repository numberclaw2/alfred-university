/* AU-ESET 301 v16.3.34 — authoritative visual-learning layer.
   Purpose: retire legacy synthetic lesson SVGs from the active learner path,
   add source-grounded technical visuals where they improve understanding,
   and label provenance so the learner can distinguish source media from
   Alfred-authored instructional models. */
(() => {
  const C = window.ALFRED_CURRICULUM;
  if (!C?.modules) return;

  const moduleFor = week => C.modules.find(m => Number(m.week) === Number(week));
  const lessonFor = (week, track) => moduleFor(week)?.lessons?.find(l => l.track === track);
  const teaching = (week, track) => lessonFor(week, track)?.integrated?.teaching || [];
  const figAt = (week, track, index, figure) => {
    const section = teaching(week, track)[index];
    if (section) section.figure = figure;
  };
  const flow = (title, steps, source, sourceUrl, caption, provenance='source-grounded', extra={}) => ({
    type:'flow', number: provenance === 'alfred-model' ? 'Alfred instructional model' : 'Source-grounded technical model',
    title, steps, source, sourceUrl, caption, provenance, ...extra
  });
  const table = (title, columns, rows, source, sourceUrl, caption, extra={}) => ({
    type:'table', number:'Source-grounded reference', title, columns, rows, source, sourceUrl, caption,
    provenance:'source-grounded', ...extra
  });
  const gallery = (title, items, source, sourceUrl, caption, extra={}) => ({
    type:'gallery', number:'Real equipment / workmanship', title, items, source, sourceUrl, caption,
    provenance:'source', ...extra
  });

  // ---------------------------------------------------------------------------
  // 1) Retire the 62 legacy synthetic purpose-stage SVGs from the learner path.
  //    The physical files can remain in repository history, but the runtime no
  //    longer presents them as evidence or teaching visuals.
  // ---------------------------------------------------------------------------
  C.modules.forEach(m => (m.lessons || []).forEach(l => {
    if (l.integrated) l.integrated.visualId = null;
  }));

  // ---------------------------------------------------------------------------
  // 2) Source registry used by Search / provenance links.
  // ---------------------------------------------------------------------------
  C.sources = {...(C.sources || {}),
    flukeDMM:{title:'Digital Multimeter Essentials Online Course',org:'Fluke',kind:'Manufacturer training',url:'https://www.fluke.com/en-us/learn/online-courses/digital-multimeter-essentials-online-course'},
    openstaxKirchhoff:{title:"Kirchhoff's Rules",org:'OpenStax / Rice University',kind:'Open university textbook',url:'https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules'},
    openstaxRC:{title:'RC Circuits',org:'OpenStax / Rice University',kind:'Open university textbook',url:'https://openstax.org/books/university-physics-volume-2/pages/10-5-rc-circuits'},
    openstaxRLC:{title:'RLC Series Circuits with AC',org:'OpenStax / Rice University',kind:'Open university textbook',url:'https://openstax.org/books/university-physics-volume-2/pages/15-3-rlc-series-circuits-with-ac'},
    openstaxTransformer:{title:'Transformers',org:'OpenStax / Rice University',kind:'Open university textbook',url:'https://openstax.org/books/university-physics-volume-2/pages/15-6-transformers'},
    keysightBench:{title:'Bench Power Supply Basics',org:'Keysight Technologies',kind:'Manufacturer training',url:'https://www.keysight.com/us/en/learn/course.bench-power-supply-basics.html'},
    tekScopePrimer:{title:'Oscilloscope Basics / XYZs of Oscilloscopes',org:'Tektronix',kind:'Manufacturer primer',url:'https://www.tek.com/en/documents/primer/oscilloscope-basics'},
    tiLowSide:{title:'Low-Side MOSFET Switching Application Guidance',org:'Texas Instruments',kind:'Manufacturer application report',url:'https://www.ti.com/lit/ml/slva927a/slva927a.pdf'},
    adiOpAmpBook:{title:'Op Amp Applications Handbook',org:'Analog Devices',kind:'Manufacturer technical handbook',url:'https://www.analog.com/en/resources/technical-books/op-amp-applications-handbook.html'},
    proGit:{title:'Pro Git — Branches in a Nutshell',org:'Git project',kind:'Official open book',url:'https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell'},
    gnuCPointers:{title:'GNU C Language Introduction and Reference — Pointers',org:'GNU Project',kind:'Official language reference',url:'https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Pointers.html'},
    armCmsis:{title:'CMSIS Core Peripheral Access',org:'Arm',kind:'Official vendor documentation',url:'https://arm-software.github.io/CMSIS_6/latest/Core/group__peripheral__gr.html'},
    stNucleo:{title:'STM32 Nucleo Board User Documentation',org:'STMicroelectronics',kind:'Manufacturer board manual',url:'https://www.st.com/resource/en/user_manual/dm00231744-st-link-v2-in-circuit-debugger-programmer-for-stm8-and-stm32-stmicroelectronics.pdf'},
    nxpI2C:{title:'UM10204 I2C-bus Specification and User Manual',org:'NXP Semiconductors',kind:'Official protocol specification',url:'https://www.nxp.com/docs/en/user-guide/UM10204.pdf'},
    microchipSPI:{title:'Serial Peripheral Interface (SPI) Technical Documentation',org:'Microchip Technology',kind:'Manufacturer technical documentation',url:'https://developerhelp.microchip.com/xwiki/bin/view/applications/spi/'},
    nasaHarnessVisual:{title:'NASA-STD-8739.4 — Crimping, Interconnecting Cables, Harnesses, and Wiring',org:'NASA',kind:'Government workmanship standard',url:'https://standards.nasa.gov/standard/NASA/NASA-STD-87394'},
    nasaRVM:{title:'Requirements Verification Matrix',org:'NASA Systems Engineering Handbook',kind:'Government systems-engineering reference',url:'https://www.nasa.gov/reference/appendix-d-requirements-verification-matrix/'},
    keysightSpectrum:{title:'Spectrum Analysis Basics',org:'Keysight Technologies',kind:'Manufacturer training',url:'https://connectlp.keysight.com/Spectrum-Analysis-Basics-Download'},
    niHIL:{title:'Hardware-in-the-Loop Test System Architectures',org:'NI',kind:'Test-system architecture reference',url:'https://www.ni.com/en/solutions/transportation/hardware-in-the-loop/hardware-in-the-loop--hil--test-system-architectures.html'},
    pyserialOfficial:{title:'pySerial Short Introduction',org:'pySerial project',kind:'Official project documentation',url:'https://pyserial.readthedocs.io/en/stable/shortintro.html'}
  };

  // ---------------------------------------------------------------------------
  // 3) Mark the accepted Week 1 figures with explicit provenance.
  // ---------------------------------------------------------------------------
  teaching(1,'CETa').forEach(s => {
    if (!s.figure) return;
    s.figure.provenance = s.figure.type === 'table' ? 'source-grounded' : 'source';
    if (!s.figure.number) s.figure.number = s.figure.type === 'table' ? 'Source-grounded reference' : 'Open textbook figure';
  });

  // ---------------------------------------------------------------------------
  // 4) CETa visual layer — at least one high-value visual in every week.
  //    Physical equipment/workmanship uses real, openly licensed photographs.
  //    Abstract relationships use source-grounded tables/flows instead of
  //    synthetic pseudo-photographs.
  // ---------------------------------------------------------------------------
  figAt(2,'CETa',1,flow(
    'KCL and KVL are two views of conservation',
    [
      {title:'Junction / node',body:'Current entering a node equals current leaving it: ΣI = 0.'},
      {title:'Closed loop',body:'Voltage rises and drops around a complete loop sum to zero: ΣV = 0.'},
      {title:'Measurement prediction',body:'Use the two rules to predict node currents and loop voltages before probing.'}
    ],
    'OpenStax University Physics — Kirchhoff’s Rules','https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules',
    'KCL is conservation of charge at a junction. KVL is conservation of energy around a loop. They are not unrelated formulas; they are conservation rules applied to different circuit boundaries.'
  ));

  figAt(3,'CETa',0,gallery(
    'Recognize the instruments before learning their modes',
    [
      {label:'Digital multimeter (DMM)',src:'https://upload.wikimedia.org/wikipedia/commons/4/47/Fluke_87_multimeter.jpg',alt:'Fluke 87 digital multimeter with display, rotary selector, and input jacks',credit:'Alex P. Kok / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Fluke_87_multimeter.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'},
      {label:'Bench DC power supply',src:'https://upload.wikimedia.org/wikipedia/commons/9/90/Bench_power_supply.jpg',alt:'Bench DC power supply with voltage and current displays and output terminals',credit:'Derrick Parker / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Bench_power_supply.jpg',license:'CC0 1.0',licenseUrl:'https://creativecommons.org/publicdomain/zero/1.0/'},
      {label:'Oscilloscope display',src:'https://upload.wikimedia.org/wikipedia/commons/0/00/Triangular_wave_and_square_wave_on_oscilloscope_screen_%28cropped%29.jpg',alt:'Oscilloscope screen showing triangular and square waveforms',credit:'Wikimedia Commons contributor / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Triangular_wave_and_square_wave_on_oscilloscope_screen_(cropped).jpg',license:'CC0 1.0',licenseUrl:'https://creativecommons.org/publicdomain/zero/1.0/'}
    ],
    'Open-license equipment photographs; technical grounding: Fluke, Keysight, and Tektronix','https://www.fluke.com/en-us/learn/online-courses/digital-multimeter-essentials-online-course',
    'The three tools answer different questions: a DMM makes scalar electrical measurements, a bench supply provides controlled energy with voltage/current limits, and an oscilloscope makes voltage change over time visible.',
    {secondaryUrl:'https://www.keysight.com/us/en/learn/course.bench-power-supply-basics.html',tertiaryUrl:'https://www.tek.com/en/documents/primer/oscilloscope-basics'}
  ));

  figAt(4,'CETa',1,table(
    'RC charging landmarks',
    ['Elapsed time','Capacitor voltage while charging','What to notice'],
    [
      ['0τ','0% of final value','The capacitor voltage cannot jump instantly.'],
      ['1τ','≈63%','One time constant produces most of the first rise.'],
      ['2τ','≈86%','The remaining error shrinks exponentially.'],
      ['3τ','≈95%','The circuit is close to its final value.'],
      ['5τ','>99%','For many technician measurements, this is effectively settled.']
    ],
    'OpenStax University Physics — RC Circuits','https://openstax.org/books/university-physics-volume-2/pages/10-5-rc-circuits',
    'A time constant is not “time until done.” It is the characteristic rate of exponential change. The same idea applies to discharge in the opposite direction.'
  ));

  figAt(5,'CETa',0,flow(
    'Mixed problem model-selection loop',
    [
      {title:'Classify',body:'Decide whether the problem is about topology, Ohm’s law, power, time response, safety, or measurement.'},
      {title:'Predict',body:'State the expected direction, range, or relationship before calculating.'},
      {title:'Execute',body:'Use the appropriate law, measurement method, or safety boundary.'},
      {title:'Check',body:'Verify units, sign, magnitude, and physical plausibility.'}
    ],
    'Alfred University cumulative-learning model using the accepted Week 1–4 technical source layer','',
    'This is an Alfred reasoning model rather than a photograph or external figure. Its job is to make the hidden selection process visible.',
    'alfred-model'
  ));

  figAt(6,'CETa',1,table(
    'Impedance components and phase direction',
    ['Element','Impedance form','Frequency effect','Phase relationship'],
    [
      ['Resistor','R','Ideally constant with frequency','Voltage and current in phase'],
      ['Inductor','jXL, XL = 2πfL','Reactance rises as frequency rises','Current lags voltage'],
      ['Capacitor','−jXC, XC = 1/(2πfC)','Reactance falls as frequency rises','Current leads voltage']
    ],
    'OpenStax University Physics — RLC Series Circuits with AC','https://openstax.org/books/university-physics-volume-2/pages/15-3-rlc-series-circuits-with-ac',
    'The sign of the reactive term carries phase information. Resonance occurs when inductive and capacitive reactance cancel in the net series impedance.'
  ));

  figAt(7,'CETa',1,flow(
    'Electromagnetic energy-conversion chain',
    [
      {title:'Electrical current',body:'Current in a conductor creates a magnetic field.'},
      {title:'Changing magnetic flux',body:'Changing flux can induce voltage in another conductor.'},
      {title:'Transformer / relay / motor',body:'The same field relationships are arranged to transfer energy, move an armature, or produce torque.'},
      {title:'Generator direction',body:'Mechanical motion through magnetic flux can induce electrical voltage in the reverse energy direction.'}
    ],
    'OpenStax University Physics — Transformers and electromagnetic induction','https://openstax.org/books/university-physics-volume-2/pages/15-6-transformers',
    'Transformer, relay, motor, and generator behavior becomes easier to remember when treated as variations of electrical–magnetic energy conversion.'
  ));

  figAt(8,'CETa',3,table(
    'Semiconductor device roles are different',
    ['Device','Primary control idea','Typical technician role'],
    [
      ['Diode','Junction allows strongly asymmetric conduction','Rectification, clamping, flyback protection'],
      ['BJT','Base current controls a larger collector current','Amplification and switching'],
      ['MOSFET','Gate-to-source voltage controls channel conduction','Efficient voltage-controlled switching'],
      ['SCR / TRIAC','Triggered regenerative device can latch or control AC','Power control and switching']
    ],
    'Texas Instruments Precision Labs and accepted semiconductor source layer','https://www.ti.com/video/series/precision-labs.html',
    'Do not memorize every semiconductor as “an electronic switch.” The control variable, conduction behavior, and turn-off behavior differ.'
  ));

  figAt(9,'CETa',0,flow(
    'Recognizable power-supply blocks',
    [
      {title:'Input / source',body:'AC mains, transformer secondary, battery, or upstream DC source.'},
      {title:'Rectification / switching',body:'Convert or chop energy into the form used by the next stage.'},
      {title:'Filtering / storage',body:'Capacitors and inductors smooth or store energy between transfer events.'},
      {title:'Regulation',body:'Feedback holds the output near a target despite source/load change.'},
      {title:'Load',body:'The powered circuit determines current demand and can expose upstream weaknesses.'}
    ],
    'Analog Devices Basic Linear Design — power supply fundamentals','https://www.analog.com/media/en/training-seminars/design-handbooks/Basic-Linear-Design/Chapter9.pdf',
    'Troubleshoot a supply as a chain. If a later block is wrong, verify the block immediately before it before changing parts.'
  ));

  figAt(10,'CETa',1,flow(
    'Negative feedback closes a control loop',
    [
      {title:'Desired input',body:'The circuit receives the signal or setpoint to reproduce.'},
      {title:'Amplifier',body:'Very high open-loop gain magnifies the input-to-feedback difference.'},
      {title:'Output',body:'The amplifier drives a load within its rail, current, and bandwidth limits.'},
      {title:'Feedback network',body:'A fraction of output is returned to the input comparison point.'}
    ],
    'Analog Devices — Op Amp Applications Handbook','https://www.analog.com/en/resources/technical-books/op-amp-applications-handbook.html',
    'Negative feedback does not mean “negative voltage.” It means the returned signal acts to reduce the difference that produced the output.'
  ));

  figAt(11,'CETa',1,table(
    'Three basic logic relationships',
    ['A','B','AND','OR'],
    [['0','0','0','0'],['0','1','0','1'],['1','0','0','1'],['1','1','1','1']],
    'NPTEL / IIT digital-circuits source layer','https://nptel.ac.in/courses/108105113',
    'A truth table is a complete statement of a combinational logic relationship. NOT is unary: it simply inverts 0↔1.'
  ));

  figAt(12,'CETa',1,gallery(
    'What a properly wetted solder joint looks like',
    [
      {label:'Real PCB solder joint',src:'https://upload.wikimedia.org/wikipedia/commons/3/3e/Soldering-PCB-good.jpg',alt:'Close-up photograph of a good through-hole solder joint on a printed circuit board',credit:'Tlapicka / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Soldering-PCB-good.jpg',license:'CC BY-SA 3.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/'}
    ],
    'Open-license workmanship photograph; technical grounding: NASA workmanship standards','https://standards.nasa.gov/standard/NASA/NASA-STD-87394',
    'Use the photograph to recognize wetting and joint shape, then use the NASA workmanship source for acceptance criteria and process boundaries.'
  ));

  figAt(13,'CETa',0,table(
    'Different drawings answer different questions',
    ['Drawing','Main question it answers','Do not expect it to show'],
    [
      ['Schematic','How are electrical functions connected?','Physical wire routing or exact board placement'],
      ['Wiring / interconnect','Which conductor or connector pin goes where?','Detailed internal circuit behavior'],
      ['Block diagram','How do major functional stages interact?','Component-level implementation'],
      ['PCB/layout drawing','Where are physical parts/traces located?','A simplified conceptual signal path']
    ],
    'Accepted course diagram/drafting sources and NASA technical-documentation practices','https://www.nasa.gov/reference/systems-engineering-handbook/',
    'Choosing the wrong drawing can make troubleshooting harder even when the drawing itself is correct.'
  ));

  figAt(14,'CETa',2,flow(
    'Source code becomes executable in stages',
    [
      {title:'Source files',body:'Human-readable C expresses algorithms, data, and hardware intent.'},
      {title:'Compiler / assembler',body:'Translate source into machine-level object code for a target architecture.'},
      {title:'Linker',body:'Combine object code and libraries and resolve addresses/symbols.'},
      {title:'Executable / firmware image',body:'The resulting bytes are loaded into memory where the processor can fetch instructions.'}
    ],
    'GNU C language documentation and accepted Arm embedded-C source layer','https://www.gnu.org/software/c-intro-and-ref/manual/c-intro-and-ref.html',
    'A build error, link error, flash error, and runtime bug happen at different stages. Naming the stage narrows the fault.'
  ));

  figAt(15,'CETa',1,flow(
    'From code to a physical GPIO pin',
    [
      {title:'Peripheral clock / reset',body:'The GPIO hardware must be powered and released from reset.'},
      {title:'Configuration register bits',body:'Mode, direction, pull, speed, and alternate-function fields select behavior.'},
      {title:'Data register / peripheral function',body:'Software writes or reads the logical state.'},
      {title:'Pad / package pin',body:'The configured internal signal reaches the electrical pin and external circuit.'}
    ],
    'Arm CMSIS peripheral-access model and accepted STM32 source layer','https://arm-software.github.io/CMSIS_6/latest/Core/group__peripheral__gr.html',
    '“Set the GPIO high” crosses several layers. A failure at any earlier layer can make the final pin appear dead.'
  ));

  figAt(16,'CETa',0,gallery(
    'A real STM32 Nucleo development board',
    [
      {label:'STM32 Nucleo board',src:'https://upload.wikimedia.org/wikipedia/commons/a/af/Nucleo-board.jpg',alt:'Photograph of an STM32 Nucleo development board with microcontroller, headers, and onboard debugger section',credit:'Avandalen / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Nucleo-board.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'}
    ],
    'Open-license board photograph; technical grounding: STMicroelectronics Nucleo/ST-LINK documentation','https://www.st.com/resource/en/user_manual/dm00231744-st-link-v2-in-circuit-debugger-programmer-for-stm8-and-stm32-stmicroelectronics.pdf',
    'Identify the target MCU, header pins, USB/debug section, and board power path before treating “the board” as one undifferentiated object.'
  ));

  figAt(17,'CETa',0,table(
    'UART frame anatomy',
    ['Frame portion','Typical value / state','Purpose'],
    [
      ['Idle','Logic 1','Marks the line as inactive between frames'],
      ['Start bit','Logic 0','Lets the receiver establish the beginning of a character'],
      ['Data bits','Commonly 8 bits, LSB first','Carry the payload value'],
      ['Parity (optional)','Odd/even parity bit','Simple single-bit error detection'],
      ['Stop bit(s)','Logic 1','Provide frame ending / timing margin']
    ],
    'Accepted serial-communications source layer and pySerial documentation','https://pyserial.readthedocs.io/en/stable/shortintro.html',
    'Both endpoints must agree on framing and bit timing. Correct-looking bytes at one layer do not prove the electrical layer is correct.'
  ));

  figAt(18,'CETa',0,table(
    'I²C and SPI solve the same broad problem differently',
    ['Feature','I²C','SPI'],
    [
      ['Core wires','SDA + SCL (plus reference/power as needed)','SCLK + MOSI + MISO + chip-select(s)'],
      ['Electrical style','Shared open-drain/open-collector lines with pull-ups','Typically actively driven push-pull signals'],
      ['Device selection','Address transmitted on the shared bus','Dedicated chip-select line per target or decoder scheme'],
      ['Acknowledgment','ACK/NACK is part of the protocol','No universal protocol-level ACK'],
      ['Duplex','Direction changes over shared SDA','Full-duplex shifting is possible']
    ],
    'NXP UM10204 I²C-bus specification and Microchip SPI documentation','https://www.nxp.com/docs/en/user-guide/UM10204.pdf',
    'Do not debug I²C as though it were SPI. Pull-ups, addressing, acknowledgment, chip select, and clock-mode assumptions produce different failure signatures.',
    {secondaryUrl:'https://developerhelp.microchip.com/xwiki/bin/view/applications/spi/'}
  ));

  figAt(19,'CETa',0,gallery(
    'A wiring harness is a physical signal path',
    [
      {label:'Real wiring harness',src:'https://upload.wikimedia.org/wikipedia/commons/a/a1/Wiring_harness.jpg',alt:'Photograph of a wiring harness with bundled conductors and connectors',credit:'JackApplegarth / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Wiring_harness.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'}
    ],
    'Open-license harness photograph; technical grounding: NASA-STD-8739.4 workmanship standard','https://standards.nasa.gov/standard/NASA/NASA-STD-87394',
    'Real harness reliability depends on conductor choice, connector orientation, strain relief, crimp/termination quality, routing, and environment—not merely continuity.'
  ));

  figAt(20,'CETa',0,gallery(
    'What an RF spectrum analyzer actually shows',
    [
      {label:'Spectrum-analyzer display and noise floor',src:'https://upload.wikimedia.org/wikipedia/commons/e/ec/Spectrum_analyzer%2C_display%2C_noise_floor.jpg',alt:'Spectrum analyzer display showing a signal spectrum and visible noise floor',credit:'Wikimedia Commons / public-domain image',sourceUrl:'https://commons.wikimedia.org/wiki/File:Spectrum_analyzer,_display,_noise_floor.jpg',license:'Public domain'}
    ],
    'Public-domain instrument photograph; technical grounding: Keysight Spectrum Analysis Basics','https://connectlp.keysight.com/Spectrum-Analysis-Basics-Download',
    'A spectrum analyzer plots amplitude versus frequency. Carrier peaks, harmonics/spurs, and the noise floor are visible only within the instrument settings and dynamic range you selected.'
  ));

  figAt(21,'CETa',0,flow(
    'Mixed-domain decision router',
    [
      {title:'Identify the domain',body:'Safety, DC network, AC/time response, semiconductor, digital, interface, RF, or measurement?'},
      {title:'Choose the governing model',body:'Select the law, expected behavior, or instrument relationship that applies.'},
      {title:'State the evidence needed',body:'Name the calculation, waveform, node value, continuity result, or physical observation that would decide the question.'},
      {title:'Check transfer',body:'Explain why the same rule still applies when the values or physical context change.'}
    ],
    'Alfred University cumulative CETa integration model','',
    'This is an Alfred reasoning model. It makes model selection visible during mixed-domain review rather than pretending every mixed problem has one universal diagram.',
    'alfred-model'
  ));

  figAt(22,'CETa',0,table(
    'A requirements verification matrix connects claims to evidence',
    ['Requirement ID','Requirement / acceptance statement','Verification method','Evidence / status'],
    [
      ['REQ-01','Output remains within specified range under stated load','Test','Measured result + instrument/setup record'],
      ['REQ-02','Unsafe state cannot persist after fault condition','Test / analysis','Fault-injection evidence + recovery behavior'],
      ['REQ-03','Interface accepts defined message format','Inspection + test','Protocol capture + parser/test log']
    ],
    'NASA Systems Engineering Handbook — Requirements Verification Matrix','https://www.nasa.gov/reference/appendix-d-requirements-verification-matrix/',
    'A requirement becomes useful when it can be traced to an observable verification method and actual evidence.'
  ));

  figAt(23,'CETa',0,flow(
    'A known-good baseline is a recoverable reference point',
    [
      {title:'Known state',body:'Hardware revision, files, tool versions, configuration, and test conditions are identified.'},
      {title:'Verified behavior',body:'Required checks pass and evidence is preserved.'},
      {title:'Recorded revision',body:'A commit/tag or equivalent record makes the state identifiable later.'},
      {title:'Change from baseline',body:'Future changes can be compared against a working reference instead of memory.'}
    ],
    'Pro Git version-control model plus accepted project-readiness source layer','https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell',
    'The point of a baseline is not paperwork. It gives troubleshooting a stable “before” state.'
  ));

  figAt(24,'CETa',0,gallery(
    'Bring-up uses a controlled energy source',
    [
      {label:'Bench supply used for controlled first power',src:'https://upload.wikimedia.org/wikipedia/commons/9/90/Bench_power_supply.jpg',alt:'Bench DC power supply with voltage and current controls used for controlled power-up',credit:'Derrick Parker / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Bench_power_supply.jpg',license:'CC0 1.0',licenseUrl:'https://creativecommons.org/publicdomain/zero/1.0/'}
    ],
    'Open-license equipment photograph; technical grounding: Keysight Bench Power Supply Basics','https://www.keysight.com/us/en/learn/course.bench-power-supply-basics.html',
    'In first-power work, current limit is a protection and diagnostic boundary. The supply display becomes part of the evidence, not merely a power source.'
  ));

  figAt(25,'CETa',0,flow(
    'An interface is a chain of compatible assumptions',
    [
      {title:'Physical quantity / source',body:'Sensor, switch, analog signal, isolated domain, or upstream digital device.'},
      {title:'Electrical conditioning',body:'Level shift, filtering, protection, bias, conversion, or isolation makes the signal electrically acceptable.'},
      {title:'Conversion / protocol',body:'ADC/DAC or digital interface turns the signal into the representation the next stage expects.'},
      {title:'Software meaning',body:'Scale, units, sign, byte order, validity limits, and failure behavior turn raw data into information.'}
    ],
    'Accepted TI/Arm/manufacturer interface and conversion source layer','https://www.ti.com/video/series/precision-labs/ti-precision-labs-analog-to-digital-converters-adcs.html',
    'A correct reading requires the whole chain to agree. A single plausible number does not prove every interface boundary is correct.'
  ));

  figAt(26,'CETa',0,flow(
    'Embedded state crosses hardware and software layers',
    [
      {title:'Physical input / peripheral',body:'Pins, timers, ADCs, UARTs, sensors, or other hardware produce state.'},
      {title:'Register / driver layer',body:'Bits and low-level code expose hardware state to software.'},
      {title:'Application state',body:'The program interprets events and decides what the system should do next.'},
      {title:'Diagnostics / recovery',body:'Logs, status, timeouts, and reset paths make failure observable and recoverable.'}
    ],
    'Arm CMSIS peripheral model and accepted embedded-systems source layer','https://arm-software.github.io/CMSIS_6/latest/Core/group__peripheral__gr.html',
    'When debugging, identify which layer first becomes inconsistent with the expected state transition.'
  ));

  figAt(27,'CETa',1,table(
    'A useful automated-test record preserves context',
    ['Field','Example','Why it matters'],
    [
      ['Timestamp / run ID','2026-09-19T20:15:00 / RUN-0142','Makes results traceable'],
      ['DUT / configuration','Board rev B · FW 1.4.2','Separates behavior by tested state'],
      ['Measurement + unit','3.298 V','A number without a unit is incomplete evidence'],
      ['Limit / rule','3.20–3.40 V','Explains the verdict boundary'],
      ['Verdict','PASS / FAIL / ERROR / INCONCLUSIVE','Separates product behavior from test-system failure'],
      ['Raw evidence','CSV/log/waveform reference','Allows later review instead of trusting only the summary']
    ],
    'NI automated/HIL test architecture principles and accepted course data-integrity source layer','https://www.ni.com/en/solutions/transportation/hardware-in-the-loop/hardware-in-the-loop--hil--test-system-architectures.html',
    'Automation is valuable only when another person can reconstruct what was tested, under what conditions, and why the verdict occurred.'
  ));

  figAt(28,'CETa',0,table(
    'A test point is useful only with an expectation',
    ['Test point','Expected state','Observed state','Decision value'],
    [
      ['TP1 input rail','5.0 V ± tolerance','5.01 V','Source is present; move downstream'],
      ['TP2 regulator output','3.3 V ± tolerance','0.4 V','Fault boundary lies at/around regulator or load'],
      ['TP3 logic output','Defined toggling waveform','No transitions','Check enable/input/firmware before replacing the load']
    ],
    'Accepted troubleshooting, instrument, and technical-record source layer','https://www.nasa.gov/reference/systems-engineering-handbook/',
    'Recording “measured TP2” is not enough. The expected result is what makes the observation diagnostic.'
  ));

  figAt(29,'CETa',0,gallery(
    'Workmanship must be recognizable in real hardware',
    [
      {label:'Solder-joint evidence',src:'https://upload.wikimedia.org/wikipedia/commons/3/3e/Soldering-PCB-good.jpg',alt:'Close-up of a properly formed solder joint on a printed circuit board',credit:'Tlapicka / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Soldering-PCB-good.jpg',license:'CC BY-SA 3.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/'},
      {label:'Harness evidence',src:'https://upload.wikimedia.org/wikipedia/commons/a/a1/Wiring_harness.jpg',alt:'Photograph of a real wiring harness showing bundled wires and connectors',credit:'JackApplegarth / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Wiring_harness.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'}
    ],
    'Open-license workmanship photographs; technical grounding: NASA-STD-8739.4','https://standards.nasa.gov/standard/NASA/NASA-STD-87394',
    'Inspection and electrical verification answer different questions. A visually good connection still needs the appropriate continuity, resistance, insulation, or functional evidence.'
  ));

  figAt(30,'CETa',0,flow(
    'Retention is a closed-loop process',
    [
      {title:'Retrieve',body:'Explain or solve without looking at the answer first.'},
      {title:'Compare',body:'Check the result against the technical model, not against confidence.'},
      {title:'Repair',body:'Relearn the specific misconception or forgotten dependency.'},
      {title:'Transfer',body:'Use a changed-context problem to verify the repair actually generalized.'},
      {title:'Space',body:'Return later so the next retrieval tests retention rather than short-term familiarity.'}
    ],
    'Alfred University retention model using the accepted Study/assessment learning-science layer','',
    'This is an Alfred instructional model for how to maintain technical knowledge; it is not presented as an external scientific figure.',
    'alfred-model'
  ));

  figAt(31,'CETa',0,flow(
    'Post-course knowledge maintenance loop',
    [
      {title:'Fresh performance',body:'Use a new problem, explanation, or practical task to test current retention.'},
      {title:'Evidence review',body:'Identify which competency or dependency weakened.'},
      {title:'Targeted refresh',body:'Return to the exact teaching source instead of rereading the whole course.'},
      {title:'Revalidation',body:'Demonstrate the idea again after a delay and in a changed context.'},
      {title:'Official-source check',body:'Recheck certification/vendor information that may have changed since the course was built.'}
    ],
    'Alfred University continuing-mastery model','',
    'This is an Alfred process model. Official standards and vendor documentation remain the authority for information that can change after course completion.',
    'alfred-model'
  ));

  // ---------------------------------------------------------------------------
  // 5) Career visual corrections / augmentation.
  // ---------------------------------------------------------------------------
  // Label every pre-existing Career flow honestly as an Alfred model unless the
  // targeted replacements below provide a stronger authoritative grounding.
  C.modules.forEach(m => {
    const career = (m.lessons || []).find(l => l.track === 'Career');
    (career?.integrated?.teaching || []).forEach(s => {
      if (s.figure && !s.figure.provenance) {
        s.figure.provenance = 'alfred-model';
        s.figure.number = s.figure.number || 'Alfred instructional model';
      }
    });
  });

  figAt(1,'Career',0,gallery(
    'What the bench equipment actually looks like',
    [
      {label:'Bench DC power supply',src:'https://upload.wikimedia.org/wikipedia/commons/9/90/Bench_power_supply.jpg',alt:'Bench DC power supply with voltage and current displays, controls, and output terminals',credit:'Derrick Parker / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Bench_power_supply.jpg',license:'CC0 1.0',licenseUrl:'https://creativecommons.org/publicdomain/zero/1.0/'},
      {label:'Digital multimeter',src:'https://upload.wikimedia.org/wikipedia/commons/4/47/Fluke_87_multimeter.jpg',alt:'Fluke 87 digital multimeter showing display, rotary selector, and input jacks',credit:'Alex P. Kok / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Fluke_87_multimeter.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'}
    ],
    'Open-license equipment photographs; operating concepts grounded in Keysight and Fluke training','https://www.keysight.com/us/en/learn/course.bench-power-supply-basics.html',
    'Before following a bench procedure, recognize the actual source and meter. The supply creates controlled voltage/current boundaries; the DMM measures electrical quantities through the correct jack and mode.',
    {secondaryUrl:'https://www.fluke.com/en-us/learn/online-courses/digital-multimeter-essentials-online-course'}
  ));

  figAt(12,'Career',1,flow(
    'Git mental model: working files are not the same thing as history',
    [
      {title:'Working tree',body:'The files you are currently editing. They may be tracked, modified, or untracked.'},
      {title:'Inspect',body:'git status identifies state; git diff shows content changes that are not yet in the selected snapshot.'},
      {title:'Commit',body:'A commit records a project snapshot with parent/history relationships.'},
      {title:'Branch / tag',body:'A branch is a movable name for a line of development; a tag is normally a stable name for a specific commit.'}
    ],
    'Pro Git — official Git book','https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell',
    'This redraw follows Git’s official object/branch mental model while keeping the notation simple enough for the first Career Git lesson.'
  ));

  figAt(14,'Career',5,table(
    'Array addresses and a pointer — a concrete memory model',
    ['Expression / address','Stored value or meaning','What it tells you'],
    [
      ['0x20000000 · samples[0]','10','First integer element'],
      ['0x20000004 · samples[1]','20','Next integer element in contiguous storage'],
      ['0x20000008 · samples[2]','30','Third integer element'],
      ['p = &samples[0]','0x20000000','p stores an address, not the integer 10'],
      ['*p','10','Dereferencing reads the object at the address in p'],
      ['p + 1','0x20000004','Pointer arithmetic advances by one pointed-to object, not necessarily one byte']
    ],
    'GNU C Language Introduction and Reference — pointers and arrays','https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Pointers.html',
    'The addresses are illustrative, but the relationship is real: array elements occupy contiguous storage, a pointer stores an address, and dereferencing accesses the object at that address.',
    {secondaryUrl:'https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Arrays.html'}
  ));

  figAt(16,'Career',0,gallery(
    'Map the STM32 bring-up words onto real hardware',
    [
      {label:'STM32 Nucleo development board',src:'https://upload.wikimedia.org/wikipedia/commons/a/af/Nucleo-board.jpg',alt:'STM32 Nucleo development board showing target microcontroller, headers, and onboard debugger section',credit:'Avandalen / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Nucleo-board.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'}
    ],
    'Open-license board photograph; technical grounding: STMicroelectronics ST-LINK/Nucleo documentation','https://www.st.com/resource/en/user_manual/dm00231744-st-link-v2-in-circuit-debugger-programmer-for-stm8-and-stm32-stmicroelectronics.pdf',
    'Project, build, flash, reset, SWD, and debug are software actions connected to physical hardware. Identify the target MCU and debugger path before treating “flash the board” as one black-box step.'
  ));

  figAt(17,'Career',4,flow(
    'Python serial client: software layers from port to evidence',
    [
      {title:'Open/configure the port',body:'Choose the correct device and UART parameters before exchanging application data.'},
      {title:'Read/write bytes',body:'The serial API moves bytes; it does not automatically know your message meaning.'},
      {title:'Decode/parse/validate',body:'Convert bytes to text or fields only when framing and validity checks succeed.'},
      {title:'Log result + failure context',body:'Preserve raw input, parsed value, timestamp/configuration, and exceptions or timeout state.'}
    ],
    'pySerial official documentation plus accepted UART source layer','https://pyserial.readthedocs.io/en/stable/shortintro.html',
    'The host script should make each boundary explicit. A decode/parsing error is different from a serial-port error or an electrical UART error.'
  ));

  figAt(18,'Career',0,table(
    'Write the bus contract before writing the driver',
    ['Question','I²C example','SPI example'],
    [
      ['Who selects the device?','Address on shared bus','Chip-select line'],
      ['How is clocking defined?','SCL generated by controller; bus timing limits','SCLK plus CPOL/CPHA mode'],
      ['How does target respond?','ACK/NACK and data bytes','Returned bits during clock cycles; device-specific status'],
      ['What electrical assumption matters?','Open-drain lines require pull-ups','Actively driven lines; loading/edge rate still matter'],
      ['What must software know?','Address, register/message order, repeated-start/stop rules','Mode, bit order, chip-select timing, transaction length']
    ],
    'NXP UM10204 I²C-bus specification and Microchip SPI documentation','https://www.nxp.com/docs/en/user-guide/UM10204.pdf',
    'A driver is an implementation of a transaction contract. Write the electrical and protocol assumptions first so a logic-analyzer capture can be compared against something concrete.',
    {secondaryUrl:'https://developerhelp.microchip.com/xwiki/bin/view/applications/spi/'}
  ));

  figAt(19,'Career',0,gallery(
    'Real harness workmanship is visible before you meter it',
    [
      {label:'Wiring harness',src:'https://upload.wikimedia.org/wikipedia/commons/a/a1/Wiring_harness.jpg',alt:'Real wiring harness with bundled conductors and connectors',credit:'JackApplegarth / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Wiring_harness.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'}
    ],
    'Open-license harness photograph; technical grounding: NASA-STD-8739.4','https://standards.nasa.gov/standard/NASA/NASA-STD-87394',
    'Inspect orientation, support, routing, insulation, strain relief, and termination condition before using electrical tests to prove continuity or isolate a segment.'
  ));

  figAt(20,'Career',0,gallery(
    'A real spectrum display turns RF terms into visible evidence',
    [
      {label:'Spectrum analyzer display',src:'https://upload.wikimedia.org/wikipedia/commons/e/ec/Spectrum_analyzer%2C_display%2C_noise_floor.jpg',alt:'Spectrum analyzer display with signal peaks and noise floor',credit:'Wikimedia Commons / public-domain image',sourceUrl:'https://commons.wikimedia.org/wiki/File:Spectrum_analyzer,_display,_noise_floor.jpg',license:'Public domain'}
    ],
    'Public-domain instrument photograph; technical grounding: Keysight Spectrum Analysis Basics','https://connectlp.keysight.com/Spectrum-Analysis-Basics-Download',
    'Use the real screen to connect center/span, marker amplitude, nearby spurs, and noise floor to the measurement procedure. Instrument settings determine what evidence is visible.'
  ));

  figAt(22,'Career',1,table(
    'Requirement → verification → evidence',
    ['Requirement ID','Acceptance criterion','Verification method','Evidence artifact'],
    [
      ['REQ-01','Measured rail stays within stated limits under stated load','Bench test','Measurement table / raw log'],
      ['REQ-02','Firmware recovers from defined communication timeout','Fault injection + test','Test log / state trace'],
      ['REQ-03','Connector orientation and continuity match drawing','Inspection + continuity test','Annotated photo + continuity record']
    ],
    'NASA Systems Engineering Handbook — Requirements Verification Matrix','https://www.nasa.gov/reference/appendix-d-requirements-verification-matrix/',
    'The matrix makes traceability concrete: each claim has an ID, an observable criterion, a method, and evidence.'
  ));

  figAt(27,'Career',0,gallery(
    'Automated test still depends on real instruments and signal paths',
    [
      {label:'Logic analyzer used to capture digital evidence',src:'https://upload.wikimedia.org/wikipedia/commons/8/8a/Logic_Analyzer_%2833575587133%29.jpg',alt:'Photograph of a logic analyzer used for digital signal capture',credit:'Wolfgang Stief / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Logic_Analyzer_(33575587133).jpg',license:'CC0 1.0',licenseUrl:'https://creativecommons.org/publicdomain/zero/1.0/'}
    ],
    'Open-license instrument photograph; system architecture grounded in NI Hardware-in-the-Loop test guidance','https://www.ni.com/en/solutions/transportation/hardware-in-the-loop/hardware-in-the-loop--hil--test-system-architectures.html',
    'Automation does not remove the physical measurement chain. A test program controls instruments/fixtures, stimulates the DUT, acquires evidence, evaluates rules, and must distinguish DUT failure from test-system failure.'
  ));

  C.meta = C.meta || {};
  C.meta.visualInstructionRevision = '2026-09-19-authoritative-source-provenance-and-legacy-svg-retirement';
  C.meta.visualPolicy = 'Use real/openly-licensed or authoritative-source-grounded visuals for physical/technical recognition; reserve Alfred models for Alfred-specific reasoning and workflow.';
})();
