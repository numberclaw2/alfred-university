/* AU-ESET 301 v16.3.33 — Career beginner-first instructional depth layer
   Policy: Career may build on material Alfred already taught, but new career-only
   tools, workflows, software concepts, and professional vocabulary are taught
   before they are used. Teaching-section counts/titles remain stable so existing
   lesson progress and semantic-task review links remain compatible. */
(() => {
  'use strict';
  const C=window.ALFRED_CURRICULUM;
  if(!C?.modules?.length || window.__ALFRED_CAREER_DEPTH_1633__) return;
  window.__ALFRED_CAREER_DEPTH_1633__=true;
  const REV='2026-09-19-career-beginner-first-all-31-weeks';
  const PATCHES={
  "1": {
    "prereq": "Use only what Alfred has already taught in the Week 1 CETa lesson: voltage, current, resistance, power, circuit reference, and the Week 1 safety boundaries. No prior electronics-bench experience is assumed. This Career lesson introduces the bench power supply, DMM workflow, rails, current limiting, first-power/bring-up language, and the technician sequence before it asks you to use them.",
    "sections": [
      {
        "index": 0,
        "intro": "Before the procedure, build a picture of the bench. A bench power supply is an adjustable source used to energize a circuit under controlled conditions. Its voltage setting is the target electrical potential difference it tries to maintain; its current-limit setting is a ceiling that tells the supply to reduce voltage rather than allow current to rise beyond that boundary. The output can normally be enabled or disabled without changing the settings. A digital multimeter (DMM) is a separate measuring instrument. One lead normally goes to COM; the other goes to a voltage/resistance jack for voltage, resistance, or continuity, or to a current jack only when measuring current. A power rail is simply a named conductor or node that distributes a supply voltage, such as a 3.3 V rail. 'Rail-to-ground' means the electrical relationship between that supply rail and the circuit's declared reference/common node. With those objects identified, the pre-power checklist below has a concrete meaning rather than being a list of unexplained bench words.",
        "buildOn": "Week 1 CETa already established voltage, current, resistance, power, reference nodes, and safety. This section adds the physical bench tools and names used in technician work.",
        "remember": "Supply sets/limits energy; DMM observes it; a rail distributes a supply voltage; the circuit reference tells you what a voltage is measured against.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "What is on the bench?",
          "steps": [
            {
              "title": "Bench supply",
              "body": "Controlled source: voltage target, current ceiling, output on/off."
            },
            {
              "title": "Circuit / board",
              "body": "The load being powered. Identify rails, polarity, and reference/common."
            },
            {
              "title": "DMM",
              "body": "Measurement tool: COM + correct jack/mode before touching the circuit."
            },
            {
              "title": "Evidence",
              "body": "Expected value first, then measured value, then a stop/continue decision."
            }
          ],
          "caption": "Know what each object does before following the first-power sequence.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      },
      {
        "index": 1,
        "intro": "A DMM does not have one universal connection. In voltage mode it compares two points, so it is placed across them and its high input resistance is intended to disturb the circuit very little. In current mode the meter becomes part of the path so the circuit current flows through it; that is why the current jack and low internal resistance can create a dangerous short if placed directly across a source. Continuity mode is a power-off convenience check that uses the meter's own small test signal to report a low-resistance path. Resistance mode also belongs on a de-energized circuit. Think 'what quantity am I measuring?' first, then choose mode, jack, and placement.",
        "buildOn": "Builds directly on the Week 1 CETa distinction between voltage across two points and current through a path.",
        "remember": "Quantity first → mode → jack → placement → expected range → connect."
      },
      {
        "index": 7,
        "intro": "Two power-supply states matter during bring-up. In constant-voltage (CV) operation, the load is drawing less than the current limit, so the supply can hold the requested voltage. In constant-current (CC) operation, the load is trying to draw more than the current limit, so the supply lowers its output voltage to keep current near the ceiling. CC is therefore not merely a warning light; it is diagnostic evidence that the load and the plan disagree. 'First power' or 'bring-up' means the first controlled energization of a new or changed circuit while watching for those clues and honoring a predeclared stop condition.",
        "buildOn": "Builds on the bench-supply model introduced at the start of this Career lesson and on Ohm's-law reasoning from Week 1 CETa.",
        "remember": "CV: voltage is being held. CC: current is being held and the rail may collapse. During first power, CC when you expected light load means stop and investigate."
      }
    ]
  },
  "2": {
    "prereq": "Use Week 2 CETa circuit analysis: nodes, branch current, expected voltage, divider/KCL/KVL reasoning, and meter loading. This Career lesson does not assume prior troubleshooting experience; it introduces the technician ideas of a measurement plan, fault signature, functional boundary, hypothesis, and evidence sequence before applying them.",
    "sections": [
      {
        "index": 0,
        "intro": "A schematic becomes useful for troubleshooting when you treat it as a map of predictions. A node is a place where you can state an expected voltage relative to a reference; a branch is a path where you can state an expected current. A measurement plan is a short ordered list of places to test and what each result would tell you. A fault signature is the pattern of values produced by a particular failure mechanism. You are not trying to 'check everything.' You are choosing measurements that separate plausible explanations. Start by marking input, intermediate boundaries, output, and the expected value at each boundary.",
        "buildOn": "Week 2 CETa supplies the circuit equations. This section translates those equations into a troubleshooting map.",
        "remember": "Expected value + actual value + interpretation is stronger than a meter reading by itself.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Prediction-to-fault workflow",
          "steps": [
            {
              "title": "Model",
              "body": "Label input, nodes, branches, and expected values."
            },
            {
              "title": "Hypotheses",
              "body": "Name a few failures that could create the symptom."
            },
            {
              "title": "Boundary test",
              "body": "Measure where the hypotheses predict different results."
            },
            {
              "title": "Decision",
              "body": "Keep the hypotheses supported by evidence; reject the others."
            }
          ],
          "caption": "Troubleshooting is controlled elimination, not random probing.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "3": {
    "prereq": "Use the CETa DMM/oscilloscope connection rules and Week 1 bench safety. No prior professional measurement-planning experience is assumed. This Career lesson introduces the technician workflow of question → instrument → setup → uncertainty/loading check → reproducible evidence.",
    "sections": [
      {
        "index": 0,
        "intro": "Before choosing an instrument, state the question in measurable form. 'Is the supply bad?' is vague. 'Does the 3.3 V rail remain within tolerance while the load turns on?' tells you the quantity, point, condition, and evidence you need. Instrument choice follows the question: a DMM is strong for stable numeric values; an oscilloscope is strong for behavior that changes with time. Accuracy describes closeness to the true value, resolution is the smallest displayed/changeable step, repeatability is how consistently the same setup reproduces a result, and loading is the change your instrument causes in the circuit. You do not need metrology specialization here; you need to know which limitation could change your conclusion.",
        "buildOn": "Builds on the CETa instrument rules already taught; this adds the professional planning vocabulary and decision order.",
        "remember": "Write the measurement question first. Then choose the tool, connection, range/timebase, loading check, and evidence to save.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Plan a measurement",
          "steps": [
            {
              "title": "Question",
              "body": "What exact quantity, point, and condition must be known?"
            },
            {
              "title": "Instrument",
              "body": "Choose DMM/scope/tool because of the question, not habit."
            },
            {
              "title": "Setup",
              "body": "Range, reference, probe, bandwidth/timebase, loading."
            },
            {
              "title": "Evidence",
              "body": "Save value/waveform plus settings and context so someone else can repeat it."
            }
          ],
          "caption": "A reproducible measurement includes the setup that made the number or waveform meaningful.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "4": {
    "prereq": "Use the Week 4 CETa RC/RL time-domain and filter model plus Week 3 scope setup. This Career lesson introduces characterization, sweep planning, transfer ratio, and fault-signature comparison before asking you to use them.",
    "sections": [
      {
        "index": 1,
        "intro": "Characterization means measuring how a circuit behaves across a defined set of conditions rather than taking one isolated reading. A frequency sweep changes input frequency in planned steps while holding the other test conditions controlled. At each point, record both the input and output so you can form a transfer ratio such as Vout/Vin; that prevents a changing source amplitude from being mistaken for a filter effect. A response curve is simply those measurements organized so trends, cutoff behavior, peaks, or unexpected shifts can be seen. Decide the start/stop frequencies and denser measurement region before you sweep.",
        "buildOn": "Week 4 CETa taught the circuit response. This section teaches how a technician turns that model into a repeatable characterization test.",
        "remember": "Sweep one controlled variable, normalize output to input when appropriate, and record enough settings that the curve can be reproduced.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Characterize a filter",
          "steps": [
            {
              "title": "Model",
              "body": "Predict the shape/cutoff from CETa theory."
            },
            {
              "title": "Sweep plan",
              "body": "Choose frequencies and controlled conditions."
            },
            {
              "title": "Measure",
              "body": "Record Vin, Vout, phase/time evidence as required."
            },
            {
              "title": "Compare",
              "body": "Plot/tabulate response and compare shape to prediction/fault signatures."
            }
          ],
          "caption": "A curve is many controlled measurements tied to one model.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "5": {
    "prereq": "Use earlier Alfred circuit predictions and safe measurement skills. This Career lesson assumes no formal troubleshooting-method training; it introduces symptom statements, hypotheses, fault space, discriminating tests, root cause, verification, and regression in order.",
    "sections": [
      {
        "index": 0,
        "intro": "A troubleshooting loop begins by separating what you observed from what you think caused it. The symptom is the observable failure: for example, 'output remains near 0 V when the enable input is high.' A hypothesis is a specific possible cause that predicts additional evidence. The fault space is the set of plausible causes still consistent with what you know. A discriminating test is valuable because different hypotheses predict different outcomes. Root cause is the mechanism that actually produced the symptom, supported by evidence; verification repeats the original requirement after correction, and regression checks nearby behavior to make sure the fix did not create a new fault.",
        "buildOn": "Builds on Weeks 1-4 circuit and measurement skills; this section supplies the career-specific troubleshooting language and logic.",
        "remember": "Symptom ≠ diagnosis. Hypothesis predicts evidence. Root cause needs a causal chain and a successful verification after correction.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Complete troubleshooting loop",
          "steps": [
            {
              "title": "Observe",
              "body": "Write the failure without guessing the cause."
            },
            {
              "title": "Hypothesize",
              "body": "List specific mechanisms and what each predicts."
            },
            {
              "title": "Test",
              "body": "Choose the safest high-information measurement."
            },
            {
              "title": "Correct + verify",
              "body": "Change one supported cause, repeat the original test, then regression-check neighbors."
            }
          ],
          "caption": "Each loop should shrink uncertainty.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "6": {
    "prereq": "Use CETa reactance/impedance/phase/resonance plus the Week 3 measurement-planning and Week 4 sweep concepts. This Career lesson introduces characterization plans, baselines, controlled variables, and response-shape diagnosis; no prior lab-characterization experience is assumed.",
    "sections": [
      {
        "index": 0,
        "intro": "A technician characterization plan states what will be varied, what will be held constant, what will be measured, and what result is expected. The independent variable is the condition you deliberately change, such as frequency. The measured response is the dependent evidence, such as amplitude and phase. A baseline is a known-good or predicted response used for comparison. Real components and instruments can shift the result, so record source amplitude, loading, probe configuration, and component values rather than treating the theoretical curve as the only possible correct shape.",
        "buildOn": "Builds on the Week 4 sweep idea and Week 6 CETa AC model.",
        "remember": "Characterization = controlled conditions + planned sweep + recorded response + comparison to a model/baseline.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Characterization plan",
          "steps": [
            {
              "title": "Define",
              "body": "Variable to change, conditions to hold, expected response."
            },
            {
              "title": "Baseline",
              "body": "Prediction or known-good unit/reference."
            },
            {
              "title": "Measure",
              "body": "Collect amplitude/phase and setup context."
            },
            {
              "title": "Interpret",
              "body": "Use error shape to choose the next test or fault hypothesis."
            }
          ],
          "caption": "The shape of the error can be more informative than one out-of-tolerance point.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "7": {
    "prereq": "Use the CETa component/relay concepts and earlier current/power calculations. No prior professional datasheet-reading experience is assumed. This Career lesson first teaches datasheet structure and rating language, then applies it to the relay/inductive-load interface.",
    "sections": [
      {
        "index": 0,
        "intro": "A datasheet is not meant to be read like a novel. Start by identifying the exact part number and revision, then use the block diagram/pinout to learn what the pins do. Separate absolute-maximum ratings ('do not exceed; damage may occur') from recommended operating conditions ('normal intended use') and from electrical characteristics ('what behavior is guaranteed or typical under stated conditions'). Note the test conditions attached to every important number. A 'typical' value is not automatically a guaranteed design limit. For a relay interface, the questions are concrete: coil voltage/current, driver current/voltage stress, contact rating, pinout, and the transient created when coil current is interrupted.",
        "buildOn": "Builds on CETa component behavior; this section teaches the career skill of extracting the right facts from a datasheet.",
        "remember": "Exact part → pinout → operating conditions → guaranteed characteristics → stress/absolute max → test conditions.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Read a datasheet by question",
          "steps": [
            {
              "title": "Identify",
              "body": "Exact part number, package, revision."
            },
            {
              "title": "Locate",
              "body": "Pinout/block diagram and recommended operating range."
            },
            {
              "title": "Extract",
              "body": "Guaranteed/typical values with their test conditions."
            },
            {
              "title": "Design check",
              "body": "Compare circuit voltage/current/power/transient stress to the relevant limits."
            }
          ],
          "caption": "Numbers without their conditions can be misleading.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "8": {
    "prereq": "Use CETa semiconductor roles and Week 7 inductive-load protection. This Career lesson assumes the transistor device concepts have already been taught; it adds the system-level mental model of a low-side switch stage, design budget, pre-power checks, and diagnostic nodes.",
    "sections": [
      {
        "index": 0,
        "intro": "Treat a low-side switch as a small system with distinct jobs. The load connects to the positive supply; the transistor sits between the load and return/reference; the control signal commands the transistor; and a protection element may absorb inductive energy. Design starts from the load because its required current and voltage determine what the switch must survive. The control side then has to drive the switch strongly enough for the intended operating state. Finally, protection and wiring must handle switching transients. This system picture keeps 'pick a MOSFET' from becoming the whole design.",
        "buildOn": "Builds on Week 8 CETa semiconductor behavior and Week 7 protection; no transistor physics is repeated here.",
        "remember": "Load requirement → switch stress → control drive → transient protection → pre-power verification.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Low-side switch as a system",
          "steps": [
            {
              "title": "Load",
              "body": "What voltage/current must be controlled?"
            },
            {
              "title": "Switch",
              "body": "Can the transistor carry/block the required stress?"
            },
            {
              "title": "Control",
              "body": "Does the logic drive create the intended on/off state?"
            },
            {
              "title": "Protection + evidence",
              "body": "Clamp inductive energy; then measure control node, switch node, and load current."
            }
          ],
          "caption": "Diagnose the stage by measuring each role, not by replacing the transistor first.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "9": {
    "prereq": "Use the CETa supply-block model and Week 3 measurement discipline. This Career lesson introduces power-tree, rail, upstream/downstream dependency, staged rail bring-up, and known-good current/voltage evidence before applying them.",
    "sections": [
      {
        "index": 0,
        "intro": "A power rail is a named supply node such as 12 V, 5 V, or 3.3 V. A power tree is a map showing where those rails come from and which later rails/loads depend on earlier ones. 'Upstream' means closer to the source; 'downstream' means dependent on an earlier source or regulator. If a downstream rail is missing, first prove the input feeding its regulator before blaming the regulator itself. During bring-up, record expected rail voltage, allowed tolerance, expected current range, sequence/dependency, and a stop condition. That turns power-up into a chain of proofs rather than a one-shot event.",
        "buildOn": "Builds on CETa supply blocks and the Week 1 bench-supply/current-limit model.",
        "remember": "Power problems are followed through the power tree: source → protection → conversion/regulation → rail → load.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Rail-by-rail bring-up",
          "steps": [
            {
              "title": "Map",
              "body": "List rails and dependencies in the power tree."
            },
            {
              "title": "Pre-power",
              "body": "Resistance/short checks and supply/current-limit setup."
            },
            {
              "title": "Energize",
              "body": "Watch total current and prove the first rail."
            },
            {
              "title": "Advance",
              "body": "Only proceed downstream after the upstream dependency is known-good."
            }
          ],
          "caption": "A missing downstream rail is not enough evidence to blame that rail's regulator.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "10": {
    "prereq": "Use the CETa amplifier lesson and Week 3 oscilloscope discipline. This Career lesson introduces signal-chain, signal-budget, bias/headroom, and stage-boundary reasoning before using them for troubleshooting.",
    "sections": [
      {
        "index": 0,
        "intro": "A signal chain is the ordered path a signal follows through functional stages: source/sensor, conditioning, gain/filtering, conversion, output, or whatever applies to the design. A signal budget is a written prediction of what the signal should look like at important boundaries—DC bias, amplitude, gain, frequency content, and available headroom. Bias is the DC operating level around which an AC signal moves; headroom is the remaining room before a stage clips or saturates. Write those expectations before probing so each waveform either supports or contradicts the model.",
        "buildOn": "Builds on CETa amplifier behavior; this section adds the technician's stage-by-stage evidence model.",
        "remember": "For each stage boundary: expected DC level + expected signal size/shape + actual measurement + interpretation.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Signal-chain troubleshooting",
          "steps": [
            {
              "title": "Budget",
              "body": "Predict bias, gain, amplitude, and headroom at key nodes."
            },
            {
              "title": "Stimulus",
              "body": "Apply a known input."
            },
            {
              "title": "Probe boundaries",
              "body": "Find the first stage where actual behavior departs from the budget."
            },
            {
              "title": "Change one condition",
              "body": "Use load/frequency/amplitude changes to separate mechanisms."
            }
          ],
          "caption": "The first bad boundary narrows the fault to the stage between the last good and first bad evidence.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "11": {
    "prereq": "Use the CETa logic-level/truth-table/timing lesson. This Career lesson does not reteach binary logic; it teaches how real digital inputs get a defined default state and how mechanical bounce becomes a timing problem at the electrical/software boundary.",
    "sections": [
      {
        "index": 1,
        "intro": "A digital input pin does not create a default 0 or 1 by itself. If no circuit drives it, leakage and noise can leave it floating. A pull-up resistor weakly connects the node to the positive logic rail so the default is high; a pull-down resistor weakly connects it to reference so the default is low. 'Weakly' means the resistor is large enough that another intended driver can override it without excessive current. The resistor therefore establishes a known idle state while still allowing a switch or output to change the node.",
        "buildOn": "Week 11 CETa already taught logic-level thresholds. This section explains the career-specific hardware that keeps an input from floating.",
        "remember": "A pull resistor gives an otherwise undriven digital input a defined default voltage without preventing a real driver from changing it.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Real digital input",
          "steps": [
            {
              "title": "Default path",
              "body": "Pull-up or pull-down establishes the idle voltage."
            },
            {
              "title": "External action",
              "body": "Switch/sensor/driver overrides the weak pull."
            },
            {
              "title": "Thresholds",
              "body": "Input voltage must land inside valid logic ranges."
            },
            {
              "title": "Timing",
              "body": "If the source is mechanical, debounce prevents one press from becoming many transitions."
            }
          ],
          "caption": "A logical state depends on the electrical node and time behavior, not just the word HIGH or LOW.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      },
      {
        "index": 2,
        "intro": "A mechanical switch does not usually change state once in a perfect step. Contacts physically bounce, creating several rapid transitions before settling. Debounce is any method that converts those unwanted transitions into one intended event. Hardware can use an RC network or Schmitt-trigger behavior; software can require the input to remain stable for a defined time. The important point is to choose a time rule based on measured/expected bounce and system response—not to assume a magic universal delay.",
        "buildOn": "Builds on the pull-resistor/default-state model immediately above and CETa timing concepts.",
        "remember": "Debounce is a time-domain filter for an imperfect mechanical transition."
      }
    ]
  },
  "12": {
    "prereq": "Use the CETa solder/rework lesson and the earlier rule that engineering evidence must be reproducible. No Git or version-control knowledge is assumed. This Career lesson introduces version control, repository, working tree, tracked/untracked files, status, diff, commit, branch, tag, and known-good baseline before using Git for hardware traceability.",
    "sections": [
      {
        "index": 1,
        "intro": "Version control exists because technical files change and you need to know what changed, why, when, and how to recover an earlier known-good state. Git is a version-control tool. A repository is the project history plus the files Git is managing. The working tree (or working directory) is the copy you are actively editing. A file can be tracked (Git already knows about it) or untracked (present on disk but not yet part of the recorded project). `git status` answers 'what is different or untracked right now?' A diff shows line-by-line changes. A commit is a named snapshot of a coherent set of changes plus a message explaining the decision. A branch is a movable line of development that lets work diverge without destroying the main history. A tag is a fixed name for a particular commit, useful for a release or known-good baseline. You do not need advanced Git internals here; you need this model before the workflow advice below makes sense.",
        "buildOn": "This is new Career-track knowledge. It builds on the course idea of reproducible evidence, not on assumed software experience.",
        "remember": "Working tree = what you are editing now. Commit = recorded snapshot/decision. Branch = line of work. Tag = fixed label on a specific commit.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Git mental model",
          "steps": [
            {
              "title": "Working tree",
              "body": "Files as they exist while you work."
            },
            {
              "title": "Status + diff",
              "body": "What changed? What is new? What exactly differs?"
            },
            {
              "title": "Commit",
              "body": "Record one coherent decision with a message."
            },
            {
              "title": "Branch / tag",
              "body": "Branch work safely; tag a fixed known-good/release point."
            }
          ],
          "caption": "Inspect before you commit; a commit is evidence of a decision, not a daily file dump.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      },
      {
        "index": 5,
        "intro": "Before committing, Git gives you a chance to inspect the boundary of the record. `status` tells you which files are modified/staged/untracked. `diff` lets you inspect content changes. The goal is a coherent commit: files that belong to one technical decision and nothing else. Generated build output, editor caches, credentials, private keys, recovery secrets, and unrelated experiments do not become good evidence simply because they are in the folder. A `.gitignore` file is commonly used to tell Git which recurring generated/local files should stay untracked; secrets still require proper secret handling rather than merely relying on ignore rules.",
        "buildOn": "Builds on the repository/working-tree/commit model taught earlier in this lesson.",
        "remember": "Review status and diff before every meaningful commit. Record the decision, not every file that happened to change."
      }
    ]
  },
  "13": {
    "prereq": "Use the CETa diagram/signal-flow lesson and Week 5 troubleshooting loop. This Career lesson introduces competing hypotheses, hypothesis trees, information gain, and functional-boundary tests; no statistical or formal diagnostic training is assumed.",
    "sections": [
      {
        "index": 0,
        "intro": "A hypothesis is useful only when it predicts evidence that could be different from another hypothesis. A hypothesis tree is simply an organized list of plausible mechanisms, often grouped by functional block: source, power, control, signal path, load, software/configuration, connection, and so on. 'Information gain' here is plain-language: prefer a safe test whose result rules out the most possibilities. Testing at a functional boundary is powerful because one measurement can tell you whether the problem is before or after that boundary. You do not need probability math to use the method—only explicit predictions.",
        "buildOn": "Builds on Week 5's troubleshooting loop and Week 13 CETa signal-flow diagrams.",
        "remember": "Write competing causes and their predicted evidence before probing. Choose the test that most cleanly separates them.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "High-information fault isolation",
          "steps": [
            {
              "title": "Symptom",
              "body": "Observable failure only."
            },
            {
              "title": "Hypothesis tree",
              "body": "Specific mechanisms grouped by functional block."
            },
            {
              "title": "Boundary test",
              "body": "Choose evidence that splits the tree."
            },
            {
              "title": "Root-cause chain",
              "body": "Show how the supported mechanism produced the symptom and verify after correction."
            }
          ],
          "caption": "A good test changes what you believe about several hypotheses at once.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "14": {
    "prereq": "Use only the CETa build-stage model plus binary/hex basics. No prior C programming is assumed. This Career lesson introduces what source code/compiler/build mean, then statements, variables, types, assignment/expressions, control flow, functions, parameters/return values, arrays, and finally the pointer/memory concepts needed by the existing embedded-C instruction.",
    "sections": [
      {
        "index": 0,
        "intro": "Start from zero. C is a programming language: a structured way to write instructions as source code that humans can read and a compiler can translate into object/machine code for a target. A statement is one complete instruction, often ending with `;`. A variable is a named place to store a value; its data type tells C how that stored bits should be interpreted and what operations/range make sense. Assignment stores a value into a variable; an expression combines values/operators to produce another value. Control flow decides which statements run: `if/else` chooses a path and loops such as `for` or `while` repeat work while a condition says to continue. A function gives a name to a reusable operation. Its parameters are the inputs named by the function; its return value is the result it gives back. These basics are the foundation for the type/function advice in this section—not assumed background knowledge.",
        "buildOn": "New Career-track programming foundation. CETa Week 14 explains the build pipeline; this section explains the C language pieces that flow through it.",
        "remember": "Source code → compiler/build → executable/firmware. In C: variables hold typed values, expressions compute, control flow chooses/repeats, and functions package behavior.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "From C text to behavior",
          "steps": [
            {
              "title": "Source",
              "body": "Declarations, statements, expressions, functions."
            },
            {
              "title": "Compile/build",
              "body": "Compiler checks/translates C; linker combines required pieces."
            },
            {
              "title": "Run",
              "body": "Program follows control flow and changes data/I/O state."
            },
            {
              "title": "Debug",
              "body": "Use warnings and observed state to find where expected and actual behavior diverge."
            }
          ],
          "caption": "Programming becomes debuggable when you can predict both data values and control flow.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      },
      {
        "index": 1,
        "intro": "An array is a fixed sequence of same-type elements stored next to each other. If `int samples[4]` exists, valid elements are indexed 0 through 3; index 4 is already outside the array. A pointer is a variable whose value is a memory address. `&x` means 'the address of x'; if `p` contains that address, `*p` means 'the object stored at the address p points to.' To dereference a pointer means to follow that stored address and access the pointed-to object; in C, `*p` performs that dereference when p is valid. Many C expressions automatically turn an array name into a pointer to its first element, which is why arrays and pointers often appear together, but they are not the same object. C does not automatically stop out-of-bounds access, so you must track the valid element count. A C string is an array of characters terminated by a zero byte (`'\\0'`). Learn this concrete memory picture before pointer arithmetic or peripheral-register pointers.",
        "buildOn": "Builds on variables/types/functions introduced immediately before this section.",
        "remember": "Array = owned sequence of elements. Pointer = stored address. Always know what object the pointer may access and how many elements are valid.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Array and pointer picture",
          "steps": [
            {
              "title": "Array object",
              "body": "Contiguous elements with a valid index range."
            },
            {
              "title": "Address",
              "body": "&object produces where the object lives."
            },
            {
              "title": "Pointer",
              "body": "Stores an address and has a pointed-to type."
            },
            {
              "title": "Dereference",
              "body": "*pointer accesses the object at that valid address; bounds/lifetime are your responsibility."
            }
          ],
          "caption": "C exposes memory relationships that higher-level languages often hide.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "15": {
    "prereq": "Use the C foundations Alfred taught in Week 14 and the Week 15 CETa register/bit-field model. This Career lesson introduces the forever-loop/state-machine/time model, blocking vs nonblocking work, polling vs interrupts, ISR/shared-state vocabulary, and the narrow meaning of volatile before using them.",
    "sections": [
      {
        "index": 0,
        "intro": "Most small embedded firmware does not 'finish' like a desktop script; after initialization it often runs a loop indefinitely. A blocking operation keeps the processor inside one activity so other work cannot progress until it returns. A nonblocking design does a small bounded amount of work, remembers its current state, and returns to the main loop quickly. A state machine is simply named states plus rules for moving between them—for example IDLE → WAITING → COMPLETE/ERROR. Time is usually represented by a tick counter or hardware timer so code can ask 'has enough time elapsed?' instead of sleeping blindly. This mental model comes before the implementation patterns below.",
        "buildOn": "Builds on Week 14 functions/control flow and Week 15 CETa registers/GPIO.",
        "remember": "Embedded loop: observe inputs/time → update state → perform bounded outputs → repeat. State and time replace long blocking waits.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Nonblocking embedded loop",
          "steps": [
            {
              "title": "Initialize",
              "body": "Configure clocks/peripherals/state once."
            },
            {
              "title": "Observe",
              "body": "Read inputs/events and current time."
            },
            {
              "title": "Update state",
              "body": "Decide transitions using explicit conditions."
            },
            {
              "title": "Act + return",
              "body": "Do bounded work, update outputs, return quickly to the loop."
            }
          ],
          "caption": "Responsiveness comes from making time and state explicit.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      },
      {
        "index": 1,
        "intro": "An interrupt is a hardware-supported event that temporarily redirects execution to a small interrupt service routine (ISR), then returns to the interrupted code. It is useful when an event should be noticed promptly without constant polling. If an ISR and the main program both access the same variable, that value is shared state. `volatile` tells the C compiler that the object may change in ways not visible in the current code sequence, so it must not optimize away required reads/writes. It does not make a multi-step operation atomic, does not prevent race conditions, and is not a lock. Atomicity means an operation cannot be observed halfway through; a critical section is a deliberately protected region used when shared access must not be interrupted.",
        "buildOn": "Builds on the Week 14 memory/variable model and this week's event/time model.",
        "remember": "Interrupt = asynchronous event handler. volatile = compiler visibility rule. Atomic/critical-section protection is a separate concurrency problem."
      }
    ]
  },
  "16": {
    "prereq": "Use the MCU architecture lesson, Week 1 bench setup, and Week 15 embedded-C model. No STM32 development-tool experience is assumed. This Career lesson introduces project/toolchain, generated configuration, build, flash, reset, SWD/debug probe, breakpoint, and register/memory inspection before the bring-up workflow uses them.",
    "sections": [
      {
        "index": 0,
        "intro": "An STM32 'project' is a collection of source files, startup/configuration files, build settings, and metadata that describe firmware for a specific MCU/board. The toolchain is the set of programs that preprocess/compile, assemble, link, and produce the firmware image. STM32Cube tools can generate configuration/startup code from selected clocks and peripherals; generated code saves setup time but is still part of the system you must understand enough to verify. 'Build' means translate/link the project into a firmware image. 'Flash' means program that image into nonvolatile memory on the MCU. 'Reset' restarts the MCU so the firmware begins from its reset path. Those words are different operations and different failure layers.",
        "buildOn": "Builds on CETa's MCU architecture and Week 14 build model; STM32-specific tooling is introduced here rather than assumed.",
        "remember": "Project describes the firmware; toolchain builds it; flash programs it; reset runs it from the beginning.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "STM32 bring-up ladder",
          "steps": [
            {
              "title": "Project/config",
              "body": "Exact MCU/board, clocks, pins, generated settings."
            },
            {
              "title": "Build",
              "body": "Compiler/linker produce firmware image with no unresolved errors."
            },
            {
              "title": "Flash + reset",
              "body": "Debug probe programs the MCU and starts a known image."
            },
            {
              "title": "Observe",
              "body": "Prove one simple behavior independently before adding complexity."
            }
          ],
          "caption": "Bring-up is a ladder: do not troubleshoot application logic until lower layers are proved.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      },
      {
        "index": 1,
        "intro": "SWD (Serial Wire Debug) is a common ARM microcontroller debug/programming interface. A debug probe sits between the computer and MCU and can usually program flash, halt/run the core, set breakpoints, inspect memory/registers, and sometimes observe trace features. A breakpoint is a deliberate stop at a code location so you can inspect program state. The program counter identifies the current instruction location; peripheral registers expose hardware state/configuration. Debug evidence is strongest when paired with independent electrical evidence such as a pin waveform or rail measurement, because successful debugger connection alone does not prove the external circuit behaves correctly.",
        "buildOn": "Builds on the STM32 project/build/flash definitions in this lesson and CETa MCU register concepts.",
        "remember": "SWD/debugger proves software/core state; a meter/scope/logic analyzer proves external electrical behavior. Use both when the fault could cross layers."
      }
    ]
  },
  "17": {
    "prereq": "Use the UART electrical/framing model and the Week 14 C/build ideas. No Python knowledge is assumed. This Career lesson introduces Python script/interpreter/import/variable/function/control-flow/exception basics, then the serial-port and bytes/text model needed for a host-side UART test.",
    "sections": [
      {
        "index": 0,
        "intro": "Python is a programming language commonly used for test and automation because a script can be written and run quickly on a host computer. A `.py` file is source code. The Python interpreter reads/runs that code. `import` loads a module so your script can use code provided elsewhere, such as a serial library. Variables name values; strings hold text; integers/floats hold numbers; `if/else` chooses a path; `for`/`while` repeat; and a `def` statement creates a function with parameters and an optional return value. Exceptions are Python's way of reporting runtime errors or unusual conditions; `try/except` lets you handle expected failures deliberately instead of crashing without context. You only need these fundamentals here—enough to read, modify, and reason about a serial test script.",
        "buildOn": "New Career-track host-software foundation. UART itself was taught in CETa; Python is introduced here rather than assumed.",
        "remember": "Python script = host-side source run by the interpreter. Imports provide libraries; variables/control flow/functions express the test; exceptions preserve error context.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Host serial-test path",
          "steps": [
            {
              "title": "Python script",
              "body": "Configure port/test values and call serial-library functions."
            },
            {
              "title": "Serial library",
              "body": "Opens the OS serial port and reads/writes bytes."
            },
            {
              "title": "UART link",
              "body": "Host adapter + target exchange framed bits electrically."
            },
            {
              "title": "Parser/log",
              "body": "Validate bytes, convert to meaning, record both success and failure evidence."
            }
          ],
          "caption": "Separate transport bytes from the meaning your application assigns to them.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      },
      {
        "index": 1,
        "intro": "Serial APIs move bytes. Text is an interpretation layered on top. In Python, a `bytes` object is raw byte values; a `str` is Unicode text. If a device sends ASCII/UTF-8 text, the received bytes must be decoded before text parsing, and outbound text must be encoded before transmission. Numeric protocols may never become text at all; they may use fixed binary fields. Parsing means converting a validated byte/text format into structured values. Treat message length, delimiters, numeric range, checksum/CRC if used, timeout, and malformed input as explicit validation boundaries. A serial-port object also has configuration—port name, baud rate, data bits/parity/stop bits, and timeout—that must match the target protocol.",
        "buildOn": "Builds on the Python basics just introduced and the CETa UART framing model.",
        "remember": "Receive bytes first; validate framing/application format; only then convert into text/numbers/fields. Log invalid data rather than silently discarding it."
      }
    ]
  },
  "18": {
    "prereq": "Use the CETa UART/I2C/SPI electrical/protocol models plus STM32 bring-up and measurement planning. This Career lesson assumes those bus fundamentals are known; it introduces the software/datasheet workflow of turning a peripheral datasheet into a wiring/transaction contract, driver call, capture, and layered diagnosis.",
    "sections": [
      {
        "index": 0,
        "intro": "Before writing driver code, translate the peripheral datasheet into a transaction contract. Write the physical facts (supply/reference, signal pins, pull-ups or chip-select behavior, voltage compatibility), the addressing/register facts, and the exact byte/bit sequence required for one smallest useful operation. A driver is software that turns a higher-level request such as 'read register 0x0F' into the peripheral/bus operations required to perform it. A logic analyzer records digital line states over time; a protocol decoder labels likely I2C/SPI fields for convenience, but the capture is still electrical evidence you must interpret against the datasheet and bus rules.",
        "buildOn": "Builds on CETa's interface mechanics. This section adds the career workflow from datasheet requirement to software transaction and capture.",
        "remember": "Write the transaction on paper first. Then wire, configure, execute one minimal operation, capture it, and compare each layer to the contract.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Datasheet-to-wire integration",
          "steps": [
            {
              "title": "Datasheet contract",
              "body": "Voltage, pins, address/registers, timing, transaction sequence."
            },
            {
              "title": "Wiring + config",
              "body": "Physical connection and controller peripheral settings."
            },
            {
              "title": "Driver transaction",
              "body": "Software issues the smallest meaningful read/write."
            },
            {
              "title": "Capture + compare",
              "body": "Use analyzer/scope and returned data to isolate physical, protocol, or application faults."
            }
          ],
          "caption": "A decoder label is a hint; the datasheet and captured electrical sequence remain the evidence.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "19": {
    "prereq": "Use the CETa media/connector lesson, Week 12 workmanship/traceability, and Week 13 fault isolation. This Career lesson introduces termination-workflow language such as contact/crimp, strain relief, continuity, pin-to-pin mapping, and sectional isolation only as needed for technician evidence.",
    "sections": [
      {
        "index": 0,
        "intro": "A termination is the prepared end of a wire/cable/fiber placed into a connector/contact system so electrical or optical continuity and mechanical retention are controlled. For copper harness work, a crimp contact is mechanically formed around the conductor using the correct terminal/tool/die; strain relief keeps normal cable movement from loading the electrical joint. A continuity test answers whether a low-resistance path exists from the intended end to the intended end, but it does not by itself prove correct pin mapping, insulation between adjacent conductors, mechanical retention, or signal integrity. A sectional test splits a path at accessible connectors/test points so you can isolate which section contains the failure.",
        "buildOn": "Builds on CETa connector/media concepts; this section adds the technician work-instruction and evidence vocabulary.",
        "remember": "Termination quality requires correct identity/orientation, mechanical workmanship, intended continuity, unintended-isolation checks, and traceable evidence.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Connection evidence",
          "steps": [
            {
              "title": "Inspect",
              "body": "Correct contact, orientation, conductor prep, strain relief."
            },
            {
              "title": "Map",
              "body": "Verify intended pin-to-pin identity before measuring."
            },
            {
              "title": "Test",
              "body": "Continuity/end-to-end plus adjacent/isolation checks as appropriate."
            },
            {
              "title": "Isolate + record",
              "body": "Split sections if needed; record exact connector/pin/reference and result."
            }
          ],
          "caption": "A beep proves only the path you actually tested.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "20": {
    "prereq": "Use the CETa RF/telecom model and Week 3 measurement planning. This Career lesson introduces the technician meaning of a measurement procedure, spectrum-analyzer settings/markers, and technical handoff before it asks you to interpret or report them.",
    "sections": [
      {
        "index": 0,
        "intro": "A measurement procedure is a controlled recipe that lets another qualified person reproduce the same test conditions: instrument/model, connections, frequency range, reference level, attenuation/preamp state where relevant, resolution/video bandwidth or equivalent settings, detector/sweep assumptions, calibration/reference step, and pass/fail/observation criteria. On a spectrum analyzer, center frequency/span (or start/stop) determines what frequency region you see; reference level sets the top of the display and helps keep the signal in a useful instrument range; resolution bandwidth affects how finely nearby spectral content can be separated and also affects sweep/noise behavior; a marker reports frequency/amplitude at a selected point. You do not need RF-design specialization to follow and document those settings safely.",
        "buildOn": "Builds on CETa's RF concepts and Week 3's general instrument planning; this adds the RF-instrument procedure vocabulary.",
        "remember": "A spectrum screenshot without the relevant setup/settings and measurement question is incomplete evidence.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Controlled RF measurement",
          "steps": [
            {
              "title": "Question",
              "body": "What frequency/amplitude/feature must be checked?"
            },
            {
              "title": "Setup",
              "body": "Connections, safe boundary, frequency range, level, bandwidth/settings."
            },
            {
              "title": "Acquire",
              "body": "Capture trace/markers with stable, documented conditions."
            },
            {
              "title": "Handoff",
              "body": "Separate observation, interpretation, requirement status, and escalation."
            }
          ],
          "caption": "Procedure quality is what lets another technician reproduce the evidence.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "21": {
    "prereq": "Use the troubleshooting, instrumentation, datasheet, embedded-interface, and documentation skills taught in Weeks 1-20. This week introduces no new hardware domain; it teaches rapid triage, bounded decision trees, escalation boundaries, and concise technical communication.",
    "sections": [
      {
        "index": 0,
        "intro": "Technician fluency is not memorizing every fact. It is being able to classify a problem quickly, choose a safe next action, and know when the evidence is insufficient. Triage means deciding priority and first path from limited information. A bounded decision tree is a small sequence of yes/no or measured-result branches tied to known failure classes; it is deliberately smaller than a giant checklist. A decision boundary is the point where your training, tools, authorization, or evidence no longer supports the next action and escalation becomes the correct choice.",
        "buildOn": "Builds on all prior technical skills; this section names the career-level decision process that combines them.",
        "remember": "Fast does not mean guessing. Classify → choose high-value evidence → act within the boundary → communicate what remains unknown.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Rapid technician decision",
          "steps": [
            {
              "title": "Classify",
              "body": "Power? signal? interface? software? connection? safety?"
            },
            {
              "title": "Check boundary",
              "body": "Is the task safe/authorized and is the required tool available?"
            },
            {
              "title": "High-value action",
              "body": "Take the smallest measurement/test that changes the decision."
            },
            {
              "title": "Communicate/escalate",
              "body": "State observation, interpretation, action taken, and unresolved boundary."
            }
          ],
          "caption": "Speed comes from organized decision rules, not skipping evidence.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "22": {
    "prereq": "Use the embedded bring-up, interface, measurement, Git, and documentation lessons already completed. No formal requirements-engineering knowledge is assumed. This Career lesson introduces requirement ID, observable requirement, acceptance criterion, verification method, traceability matrix, validation, characterization, and basic command-line/project-note context before using them.",
    "sections": [
      {
        "index": 0,
        "intro": "A project idea is not yet a requirement. A requirement states observable behavior under stated conditions in a form that can be checked. Give each requirement a stable ID (for example REQ-001) so tests, design notes, and results can point to the same item even if wording changes later. An acceptance criterion is the measurable boundary that decides whether the requirement is met. A verification method says how you will check it—inspection, analysis, demonstration, measurement/test, or another defined method. Avoid words such as 'fast,' 'good,' or 'low power' unless the condition and measurable threshold are stated.",
        "buildOn": "New Career-track project/requirements foundation. It builds on earlier measurement and documentation evidence but assumes no requirements-engineering background.",
        "remember": "ID + observable behavior + conditions + measurable acceptance criterion + verification method.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Requirement-to-evidence chain",
          "steps": [
            {
              "title": "Requirement",
              "body": "Stable ID and observable behavior under conditions."
            },
            {
              "title": "Verification plan",
              "body": "Method, setup, stimulus, expected/acceptance result."
            },
            {
              "title": "Evidence",
              "body": "Recorded result tied to the exact configuration."
            },
            {
              "title": "Traceability",
              "body": "Matrix/link shows which test/evidence proves each requirement."
            }
          ],
          "caption": "A requirement is useful only when you can point to evidence that answers it.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      },
      {
        "index": 2,
        "intro": "Traceability is the ability to follow a requirement to the design/work that implements it and to the test/evidence that verifies it. A traceability matrix is simply a table that keeps those links explicit: requirement ID, implementation/design location, verification method/test ID, result/evidence pointer, and status. It controls scope because every planned feature should have a requirement and every requirement should have a planned verification. 'Validation' asks whether the built thing solves the intended user/use problem; 'verification' asks whether it meets the specified requirement. 'Characterization' measures behavior without necessarily declaring pass/fail; troubleshooting finds and corrects faults.",
        "buildOn": "Builds on the requirement/acceptance-criterion model taught earlier in this lesson.",
        "remember": "Traceability prevents orphan requirements and orphan tests: every requirement has a reason, implementation path, and evidence path."
      },
      {
        "index": 3,
        "intro": "The command line is a text interface for asking the operating system or development tools to perform actions. A shell accepts commands; a prompt shows it is ready. You only need a small working model here: know your current directory, list files, change directory, and run the documented build/test/version-control commands for the project. A README is the human entry point for the repository: what the project is, prerequisites, exact setup/build/run steps, important folder structure, and where evidence/results live. The command line is not a separate career goal in this course; it is a reproducibility tool.",
        "buildOn": "Builds on Week 12 Git/repository knowledge and this week's requirement/traceability model.",
        "remember": "If another technician cannot find the right directory, run the documented command, and identify the evidence, the project is not yet reproducible."
      }
    ]
  },
  "23": {
    "prereq": "Use Week 22 requirements/test planning and Week 12 Git concepts. This Career lesson assumes no project-configuration-management background. It introduces baseline, BOM, toolchain/dependency version, repository structure, clean checkout/build, known-good build, and recovery path before first hardware power.",
    "sections": [
      {
        "index": 0,
        "intro": "A controlled project baseline is a recoverable description of exactly what you intend to build/test: hardware revision and populated parts, firmware/source revision, toolchain and important dependency versions, configuration files, required assets, and the instructions needed to reproduce the build. A repository is only one part of that baseline. Repository structure means placing source, documentation, tests, configuration, and evidence in predictable locations with a README explaining the path. A clean checkout means starting from a fresh copy of the recorded repository state rather than a developer's working folder full of unrecorded local changes. A clean build proves the recorded project can be rebuilt from that state.",
        "buildOn": "Builds on Week 12 Git and Week 22 requirements; configuration-management vocabulary is introduced here rather than assumed.",
        "remember": "Baseline = exact recoverable hardware/software/tool/config state, not merely 'the folder that works on my computer.'",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Controlled project baseline",
          "steps": [
            {
              "title": "Identify",
              "body": "Hardware revision + BOM + required tools/dependencies."
            },
            {
              "title": "Record",
              "body": "Repository revision/tag + config files + README/build steps."
            },
            {
              "title": "Reproduce",
              "body": "Fresh checkout and clean build on the documented toolchain."
            },
            {
              "title": "Recover",
              "body": "Known-good image/config and steps to return to it after an experiment."
            }
          ],
          "caption": "You are ready for hardware bring-up when the state can be reconstructed, not merely remembered.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      },
      {
        "index": 1,
        "intro": "A BOM (bill of materials) identifies the parts required to build the hardware. A useful BOM resolves ambiguity: manufacturer/part number where needed, value/specification, package/footprint, quantity, and approved substitutions/notes. Toolchain version means the exact compiler/build/debug tool release used to produce the firmware; a dependency/library/package version identifies reusable software your project relies on. Compatibility problems can appear even when source code is unchanged, which is why versions belong in the baseline. A hash is a calculated fingerprint of data; it can help identify whether a file/image is exactly the expected one, but it does not explain whether the file is correct for the project by itself.",
        "buildOn": "Builds on the baseline definition above.",
        "remember": "Parts and software dependencies need identities precise enough that 'same project' means the same thing to another person."
      }
    ]
  },
  "24": {
    "prereq": "Use Week 23's controlled baseline, Week 1 first-power concepts, and current CETa power/instrument review. This Career lesson assumes the vocabulary of baseline/test case has now been taught and focuses on staged execution and known-good electrical evidence.",
    "sections": [
      {
        "index": 3,
        "intro": "Treat first power as a test case, not a ceremony. A test case states preconditions (correct baseline, visual/power-off checks complete), stimulus/action (enable the controlled supply), expected observations (input current, rail values, sequence, temperature/behavior), stop criteria, and the evidence to record. A known-good electrical baseline is the set of measured values/waveforms that demonstrate the board is healthy enough to become the reference for later changes. It is specific to a named hardware/software configuration.",
        "buildOn": "Builds directly on Week 23 configuration baseline and Week 1 current-limited first power.",
        "remember": "Preconditions → controlled energization → expected observations → stop/continue decision → record the known-good evidence.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "First power as a test case",
          "steps": [
            {
              "title": "Preconditions",
              "body": "Correct hardware/software baseline and power-off checks."
            },
            {
              "title": "Stimulus",
              "body": "Enable current-limited source in the planned sequence."
            },
            {
              "title": "Observe",
              "body": "Current, rails, reset/clock/basic behavior, temperature clues."
            },
            {
              "title": "Baseline",
              "body": "Save values/waveforms plus configuration identity for future comparison."
            }
          ],
          "caption": "A known-good baseline is evidence tied to a known configuration.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "25": {
    "prereq": "Use the Project 1 known-good baseline and Week 18 peripheral-integration workflow. This Career lesson introduces the vertical-slice concept, checkpoints, independent evidence, and fault-injection role before using them.",
    "sections": [
      {
        "index": 0,
        "intro": "A vertical slice is one thin but complete end-to-end feature that crosses all required layers. Instead of partially implementing five peripherals, prove one path from physical device → electrical bus → driver → application state → observable output/log. A checkpoint is a place where you can independently prove one layer before blaming the next. Independent evidence means two observations that do not depend on the same assumption—for example, a logic-analyzer transaction plus the firmware's parsed value. A vertical slice reduces integration risk because it proves the architecture and tool path with the smallest meaningful feature.",
        "buildOn": "Builds on Week 18 bus integration and Week 23-24 known-good baseline.",
        "remember": "One complete path is more diagnostic than many half-built paths.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Vertical slice",
          "steps": [
            {
              "title": "Physical",
              "body": "Known-good power/wiring and device identity."
            },
            {
              "title": "Bus/driver",
              "body": "One smallest valid transaction captured and checked."
            },
            {
              "title": "Application",
              "body": "Parsed data changes the intended program state."
            },
            {
              "title": "Evidence",
              "body": "Observable output/log plus checkpoints that isolate future faults."
            }
          ],
          "caption": "Add breadth only after one path works end to end.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "26": {
    "prereq": "Use the Week 25 vertical slice, Week 14-15 C/embedded architecture, and Week 18 interface layering. This Career lesson introduces driver/application/diagnostic/recovery responsibilities and test seams; no formal software-architecture background is assumed.",
    "sections": [
      {
        "index": 0,
        "intro": "Software architecture here means deciding which part of the program owns which responsibility. A driver is the layer that directly knows how to operate a hardware peripheral or bus/register interface. Application logic decides what the product/test should do using that service. Diagnostics expose useful state/errors without becoming the control logic. Recovery code defines what happens after a timeout, invalid response, or reset-worthy condition. A test seam is a boundary where one layer can be exercised or observed without requiring the entire system. Separation is useful because a fault in one responsibility is easier to isolate when the responsibilities are not tangled together.",
        "buildOn": "Builds on the vertical-slice path and prior C/MCU instruction; the architecture vocabulary itself is introduced here.",
        "remember": "Driver = hardware access; application = decision/purpose; diagnostics = evidence; recovery = bounded response to failure.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Firmware responsibility layers",
          "steps": [
            {
              "title": "Driver",
              "body": "Registers/bus transactions and hardware-specific details."
            },
            {
              "title": "Application",
              "body": "State/decisions using driver services."
            },
            {
              "title": "Diagnostics",
              "body": "Logs/status/counters that expose what happened."
            },
            {
              "title": "Recovery",
              "body": "Timeout/retry/reset/safe-state policy with explicit limits."
            }
          ],
          "caption": "Clean boundaries create test seams and make failure location visible.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "27": {
    "prereq": "Use Python serial/logging from Week 17, measurement planning, requirements, and the Project 1 baseline/vertical slice. This Career lesson introduces the automated-test lifecycle, fixture, configuration/source-of-truth, verdict semantics, exception/cleanup pattern, and data-integrity expectations before asking you to design a maintainable test.",
    "sections": [
      {
        "index": 4,
        "intro": "An automated hardware test is a program that controls a repeatable test sequence around real hardware. Setup puts instruments/fixture/device into a known starting state. Stimulus applies the input or command being tested. Acquisition collects measurements/data. Evaluation compares that evidence to explicit acceptance rules. Cleanup returns outputs/instruments/files to a safe, known state even when the test fails. A test fixture is the physical/electrical arrangement that connects and controls the unit under test. In Python, `try/finally` is a useful pattern because the `finally` block runs during normal completion and most exceptions, making it a good place to disable outputs, close ports/files, or return instruments to a safe state. An exception is not automatically a product FAIL; it may mean the test could not obtain valid evidence.",
        "buildOn": "Builds on Week 17 Python and Week 22 verification planning. The automated-test lifecycle is new Career knowledge taught here.",
        "remember": "Setup → stimulus → acquisition → evaluation → cleanup. Cleanup must happen even when the test aborts.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Automated hardware test lifecycle",
          "steps": [
            {
              "title": "Setup",
              "body": "Identify DUT/config, open instruments/ports, establish safe initial state."
            },
            {
              "title": "Stimulus + acquire",
              "body": "Apply controlled input and collect raw evidence with context."
            },
            {
              "title": "Evaluate",
              "body": "Compare evidence to explicit requirement/tolerance rules."
            },
            {
              "title": "Cleanup + record",
              "body": "Return safe state and save verdict plus raw/context data even on error."
            }
          ],
          "caption": "Automation does not remove engineering judgment; it makes the judgment rules repeatable and inspectable.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      },
      {
        "index": 5,
        "intro": "Use verdict words consistently. PASS means valid evidence met the defined acceptance criteria. FAIL means valid evidence was obtained and the requirement was not met. ERROR means the test process itself could not produce trustworthy evidence—for example a disconnected instrument, script exception, or corrupt configuration. INCONCLUSIVE means some evidence exists but it is insufficient or contradictory, so neither pass nor fail is justified. These categories stop infrastructure problems from being misreported as product failures and stop missing data from becoming accidental passes.",
        "buildOn": "Builds on Week 22 acceptance criteria and the test lifecycle introduced above.",
        "remember": "PASS/FAIL judge the requirement using valid evidence. ERROR/INCONCLUSIVE describe evidence/test-process limitations."
      },
      {
        "index": 6,
        "intro": "A configuration file stores values that should change without editing test logic—port names, instrument addresses, limits, timing, part/revision IDs, calibration/equipment references, and similar parameters. 'One source of truth' means each important setting has one authoritative location rather than being copied into several scripts where values can diverge. Record the configuration revision/hash or exact file alongside the result so another run can reconstruct the same conditions. Keep secrets out of ordinary repositories/config evidence unless the approved secret-management method explicitly provides for them.",
        "buildOn": "Builds on Week 12 Git, Week 23 baseline/version concepts, and the automated-test lifecycle.",
        "remember": "Test result = code revision + configuration identity + DUT identity + raw/context evidence + verdict rule."
      }
    ]
  },
  "28": {
    "prereq": "Use the automated-test lesson, troubleshooting loop, service-record concepts, and Project 1 baseline. This Career lesson introduces controlled fault injection, reversal, regression, and report reasoning before using them as evidence.",
    "sections": [
      {
        "index": 0,
        "intro": "Fault injection means deliberately introducing a controlled, safe, reversible fault or abnormal condition so you can prove the detection/diagnostic path reacts as intended. Start from a known-good baseline. Change one variable whose expected effect is understood. Capture the resulting evidence. Then remove/reverse the fault and confirm the original healthy behavior returns. That reversal is powerful because it links cause and symptom more directly than a one-time coincidence. Regression testing then repeats nearby functions after the correction to show the fix did not break something else.",
        "buildOn": "Builds on Week 5 root-cause logic, Week 23-24 baseline control, and Week 27 automation.",
        "remember": "Known-good → inject one controlled fault → observe predicted signature → reverse → recover baseline → regression-check neighbors.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Controlled fault evidence",
          "steps": [
            {
              "title": "Baseline",
              "body": "Prove the healthy state and named configuration."
            },
            {
              "title": "Inject",
              "body": "One safe reversible fault with predicted effect."
            },
            {
              "title": "Detect/diagnose",
              "body": "Capture evidence and verify the expected fault signature/path."
            },
            {
              "title": "Reverse + regress",
              "body": "Remove fault, recover baseline, test adjacent behavior."
            }
          ],
          "caption": "A fault-injection result is strongest when the symptom appears and disappears with the controlled cause.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "29": {
    "prereq": "Use all prior project, test, lab, Git, and troubleshooting evidence. No prior portfolio-building knowledge is assumed. This Career lesson introduces dossier, artifact, evidence claim, scope statement, and evidence hierarchy before asking you to assemble employer-facing proof.",
    "sections": [
      {
        "index": 0,
        "intro": "A role-proof dossier is an organized set of artifacts that lets an employer see evidence of tasks relevant to the job. An artifact is a concrete work product: schematic excerpt, test procedure, waveform/capture, code excerpt, Git history, fault report, lab photo, measurement table, or similar evidence. An evidence claim is a sentence saying what skill the artifact demonstrates and under what scope. A scope statement prevents exaggeration—for example, 'implemented and tested the UART logging path on the course STM32 project' is stronger and more truthful than 'expert embedded engineer.' Evidence hierarchy means preferring direct, inspectable work over unsupported adjectives: measured result/code/report > precise description of your contribution > generic claim.",
        "buildOn": "Builds on the technical evidence already created; portfolio vocabulary and selection logic are introduced here.",
        "remember": "Claim → artifact → your contribution → result → limitation/scope.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Employer-facing evidence",
          "steps": [
            {
              "title": "Job task",
              "body": "What does the target technician role actually need someone to do?"
            },
            {
              "title": "Claim",
              "body": "One precise skill statement tied to that task."
            },
            {
              "title": "Artifact",
              "body": "Code/test/waveform/report/photo that lets the claim be inspected."
            },
            {
              "title": "Context + scope",
              "body": "Your contribution, result, tools, and what you are not claiming."
            }
          ],
          "caption": "Organize by employer task, not by course week.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "30": {
    "prereq": "Use the Week 29 role-proof dossier and all technical evidence already produced. This Career lesson assumes no professional resume/interview-writing background; it introduces evidence-first resume bullets, transition narrative, and layered technical explanation before applying them to bridge roles.",
    "sections": [
      {
        "index": 0,
        "intro": "A resume bullet is a compressed evidence claim. A useful structure is action + technical object/task + tool/method + measurable/observable result or purpose. 'Worked on electronics' gives the reader nothing to verify; 'Built a Python serial test that logged malformed UART frames and preserved failure evidence for troubleshooting' names the task and proof. Do not invent metrics. If the result is qualitative, state the technical outcome precisely. Tailor the first words toward the task language in the target role while keeping the claim true to the artifact you can defend. Practice explaining the same artifact at three layers: a 30 seconds summary, a 2 minutes explanation, and then technical depth; the facts stay the same while the amount of detail increases.",
        "buildOn": "Builds on Week 29 claim-to-artifact mapping; resume conventions are introduced here rather than assumed.",
        "remember": "Every strong bullet should survive the question: 'Show me the artifact and explain exactly what you did.'",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Evidence-first application story",
          "steps": [
            {
              "title": "Job task",
              "body": "Select a real task/requirement from the role."
            },
            {
              "title": "Proof",
              "body": "Choose the strongest truthful artifact/experience match."
            },
            {
              "title": "Resume/interview claim",
              "body": "State action, technical method, and result at the right depth."
            },
            {
              "title": "Defend",
              "body": "Explain the same work in 30 seconds, 2 minutes, then technical depth without changing the facts."
            }
          ],
          "caption": "Different explanation lengths should reveal more detail, not different stories.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  },
  "31": {
    "prereq": "Use the role-proof dossier, application/interview package, bridge-role scorecard, and Project 1 evidence. This final Career lesson introduces an application pipeline, role filter, feedback variable, and narrow repair loop; it does not require prior recruiting analytics knowledge.",
    "sections": [
      {
        "index": 0,
        "intro": "Treat applications as a pipeline with stages you can observe: role found → role passes your filter → application submitted → recruiter response → technical screen/interview → next step/offer/rejection. A role filter is a short set of criteria applied before you spend effort—technical task match, required education/experience, location/schedule, pay floor, safety/travel constraints, and whether the job moves you toward the technician experience you want. Tracking stage outcomes helps you identify where the process is weak without turning every rejection into a judgment about you. A feedback variable is one thing you can change and evaluate, such as target-role selection, resume evidence, interview explanation, or portfolio clarity.",
        "buildOn": "Builds on Week 30 application materials; the pipeline/feedback model is introduced here.",
        "remember": "Filter first, track stages, diagnose the weak stage, change one controllable variable, then gather new evidence.",
        "figure": {
          "type": "flow",
          "number": "Career mental model",
          "title": "Application feedback loop",
          "steps": [
            {
              "title": "Filter",
              "body": "Apply only where role/tasks/constraints are plausible enough to justify effort."
            },
            {
              "title": "Submit",
              "body": "Use evidence-first materials matched to the role."
            },
            {
              "title": "Observe stage",
              "body": "Track response/screen/interview outcomes."
            },
            {
              "title": "Narrow repair",
              "body": "Change one weak controllable variable, then return to the market and measure again."
            }
          ],
          "caption": "Use the process to learn which evidence and role targets are working.",
          "source": "Alfred University instructional model using the existing accepted course source layer"
        }
      }
    ]
  }
};
  const stop=new Set('the a an and or but if then else of to in on at by for from with without into through over under is are was were be been being as it its this that these those you your we our they their what why how when where which who do does did can could should would may might will not no one two three before after during each every same other more less only than use using used'.split(/\s+/));
  const terms=value=>{
    const words=String(value||'').toLowerCase().replace(/[^a-z0-9+#./_-]+/g,' ').split(/\s+/).filter(w=>w.length>2&&!stop.has(w));
    return [...new Set(words)];
  };
  function questionText(q){return [q?.prompt,q?.answer_text,q?.explanation,q?.correct,q?.retry,...(q?.choices||[])].filter(Boolean).join(' ');}
  function bestTeachingTitle(lesson,q){
    const qs=terms(questionText(q)),sections=lesson?.integrated?.teaching||[];let best=null,bestScore=-1;
    sections.forEach((s,i)=>{
      const title=new Set(terms(s.title)),body=new Set(terms(`${s.text||''} ${s.remember||''} ${s.buildOn||''}`));
      let score=0;qs.forEach(t=>{if(title.has(t))score+=5;if(body.has(t))score+=1;});
      if(score>bestScore){bestScore=score;best=s;}
    });
    return best?.title||sections[0]?.title||'';
  }
  for(const module of C.modules){
    const p=PATCHES[module.week],lesson=module.lessons?.[1],d=lesson?.integrated;
    if(!p||!lesson||!d||d.careerInstructionalDepthRevision===REV) continue;
    d.prereq=p.prereq;
    d.purpose=`${d.purpose||''} Beginner-first career rule: Alfred assumes only concepts already taught in earlier required instruction; new career-only tools, software, workflow, and professional vocabulary are explained before application.`;
    for(const sPatch of p.sections||[]){
      const s=(d.teaching||[])[Number(sPatch.index)]; if(!s) continue;
      s.text=`${String(sPatch.intro||'').trim()}

${String(s.text||'').trim()}`;
      if(sPatch.buildOn)s.buildOn=sPatch.buildOn;
      if(sPatch.remember)s.remember=sPatch.remember;
      if(sPatch.figure)s.figure=sPatch.figure;
      s.careerInstructionalDepthRevision=REV;
    }
    (d.teaching||[]).forEach((s,i)=>{
      if(!s.buildOn) s.buildOn=i===0?d.prereq:`Use the preceding Career section, “${d.teaching[i-1]?.title||'prior section'},” plus the earlier Alfred instruction named in the lesson prerequisite.`;
    });
    (d.checks||[]).forEach(q=>{q.reviewSectionTitle=bestTeachingTitle(lesson,q);});
    if(lesson.knowledgeCheck)lesson.knowledgeCheck.reviewSectionTitle=bestTeachingTitle(lesson,lesson.knowledgeCheck);
    d.careerInstructionalDepthRevision=REV;
    d.instructionalAssumptionPolicy='Only previously taught Alfred knowledge may be assumed; new Career knowledge is taught before use.';
  }
  C.meta=C.meta||{};
  C.meta.careerInstructionalDepthRevision=REV;
  C.meta.careerInstructionalDepthPolicy='Career lessons build on previously taught CETa/Career knowledge and explicitly teach new career-only concepts before use.';
})();
