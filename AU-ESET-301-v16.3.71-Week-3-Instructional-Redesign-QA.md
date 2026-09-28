# AU-ESET 301 — v16.3.71 Week 3 Instructional Redesign QA

**Release:** v16.3.71  
**Scope:** Week 3 only  
**Baseline:** deployed v16.3.70 GitHub Pages artifact  
**Calendar policy:** no calendar dates, event IDs, iCalendar records, or pacing rules changed

## Acceptance verdict

**PASS for the Week 3 implementation package, pending post-upload production verification.**

The redesigned Week 3 path now teaches one coherent beginner bench-measurement story:

**question → expected result → choose instrument → safe setup → known-good check → measure → check limitations → decide → preserve reproducible evidence**

The week is no longer structured as a survey of every possible test instrument. Required first-pass learning is intentionally centered on the DMM, current-limited DC bench supply, and oscilloscope.

## 1. CETa instructional structure

The prior integrated Week 3 CETa path contained 11 teaching sections and mixed the core bench trio with signal generators, frequency counters, LCR/ESR tools, logic probes/pulsers, spectrum analyzers, dummy loads, rheostats, isolation transformers/Variacs, and other specialist tools.

v16.3.71 presents **7 primary CETa teaching pages**:

1. Start with the question, not the instrument
2. DMM modes are different measurement circuits
3. Bench supply: voltage setting plus current limit
4. Oscilloscope: turn voltage over time into a readable picture
5. Probe and reference discipline
6. Trigger: make the event repeat in the same place
7. Measurements can change or misrepresent the circuit

The seven core teaching pages contain about **1,076 words of primary explanatory prose**, not counting worked examples, figures, retrieval checks, Guided Practice, Study Guide slices, or external teaching resources. This is deliberately narrower than the previous 11-section breadth while providing more explicit setup reasoning for the three core instruments.

### Beginner-first progression

- Physical question/meaning is stated before control names or equations.
- DMM voltage, resistance/continuity, and current connections are taught separately.
- CV/CC is taught as a load/supply state model before using it diagnostically.
- Scope training begins with a known low-voltage waveform rather than an unknown fault.
- Volts/div and time/div are tied directly to manual Vpp, period, and frequency calculations.
- Probe/reference/attenuation/compensation/coupling are taught before the learner is asked to trust the trace.
- Trigger source/level/slope receive a dedicated page.
- Loading, bandwidth, resolution, and accuracy are treated as measurement-system limitations rather than vocabulary to memorize.

## 2. Career / technician workflow

The prior Career path had 8 sections with useful content but some overlap. v16.3.71 keeps the substance and presents **6 stronger pages**:

1. Start with a measurable question and choose only a tool you understand
2. Use the DMM and supply for slow or static evidence first
3. Learn the scope on a known waveform before troubleshooting an unknown one
4. Reference, grounding, loading, and bandwidth can change the result
5. WE DO → YOU DO: choose measurements that separate hypotheses
6. Preserve settings, uncertainty, and context so another technician can reproduce the result

The Career lesson retains the measurement-planning philosophy and explicitly avoids asking for unexplained logic-analyzer, serial-bus, or current-probe techniques before those methods are taught.

## 3. Worked-example and retention design

The learner sees modeled examples before independent transfer, including:

- **2.0 Vpp / 1 kHz waveform:** 4 vertical divisions × 0.5 V/div and 5 horizontal divisions × 200 µs/div.
- **10× amplitude mismatch:** DMM ≈3.29 V versus scope ≈0.33 V leads first to probe/channel attenuation verification.
- **CV/CC diagnostic case:** supply set to 5 V with a current limit but displaying low voltage while CC is active is interpreted as current limiting/load demand evidence before declaring the supply faulty.
- **Known-waveform setup:** reference, probe factor, scale, timebase, coupling, and trigger are established on a predictable signal before unknown-board troubleshooting.

Guided Practice follows an I DO → WE DO → YOU DO progression and ends with a changed-context intermittent-reset measurement plan.

## 4. Semantic / CETa coverage integrity

Two Week 3 semantic tasks remain active in the focused learner gate:

- `SEM-8-03-033` → 8.3, 8.4, 8.6: DMM safety/usage, equipment/lead care, and meter loading.
- `SEM-8-03-036` → 8.12, 8.12.1: oscilloscope uses and front-panel control reasoning.

Three broad future-topic task records are preserved, not deleted:

- `SEM-8-03-034` — signal generators, frequency counters, RCL substitution, ESR equipment
- `SEM-8-03-035` — logic probes and logic pulsers
- `SEM-8-03-037` — dummy loads, rheostats, isolation transformers/Variacs, potentiometers

Two additional competency fragments are explicitly preserved for later re-homing:

- 8.1 / 8.2 — analog/digital meter operation and meter construction
- 8.13 — spectrum analyzer uses and operation

This is an instructional sequencing repair, not deletion of certification scope.

## 5. Teaching Media

### Required Week 3 path — exactly 4 sources

1. **Fluke — How to Measure DC Voltage with a Digital Multimeter**  
   Bounded to COM/VΩ setup, parallel voltage connection, and current-jack warning.
2. **Keysight — Bench Power Supply Basics, Lesson 4**  
   Bounded to constant-voltage and constant-current modes.
3. **Tektronix — How to Use an Oscilloscope and Probe: Step-by-Step Tutorial**  
   Bounded to Proper Grounding, Setting Controls, Connecting Probes, Compensating Probes, and basic measurement techniques.
4. **Tektronix — The Basics of an Oscilloscope Trigger**  
   Full focused 4:31 lesson on trigger source/level/slope and stable acquisition.

### Study / optional reinforcement

The broad 46:26 Tektronix webinar is moved to Study as a deep explanation rather than Required. Afrotechmods Oscilloscope Tutorial Part 2 is optional alternate teaching. Fluke resistance guidance is optional DMM help. The broad Tek XYZs primer and specialist test-equipment resources are Study/reference rather than required first-pass homework.

### Future placement preservation

The redesign removes old `targetWeek=3` placements but preserves legitimate future placements, including:

- Tek scope webinar → Weeks 6, 9, and 28
- Tek ABCs of Probes → Week 9
- Rohde & Schwarz spectrum analyzer source → Week 20
- Tek scope setup source → Week 29

Thus Week 3 is simplified without breaking later reuse.

## 6. CETa Study Guide Chapter 19

The prior Week 3 mapping treated printed **pp.165–175** as one broad Study record. v16.3.71 keeps that parent record as an optional Chapter 19 breadth map and adds four exact contextual Study slices:

| Week 3 context | Printed pages | Instructional use |
|---|---|---|
| Instrument purpose / categories | p.165 | Measurement versus stimulus/component-test purpose; choose the question first |
| DMM and meter loading | pp.167–169 | Selected voltmeter/loading/ohmmeter/ammeter/DMM material |
| Oscilloscope fundamentals | pp.172–173 | Begin at Oscilloscopes; core operation only |
| Probe/loading/trigger | p.173 | ×10 probe behavior, loading, trigger, basic operation |

Printed **p.175 is explicitly NOT assigned wholesale** as a Week 3 quiz because it mixes analog-meter, transistor/inductor-test, isolation-transformer, and other material outside the focused beginner Week 3 path.

Current manufacturer guidance remains authoritative for modern instrument ratings, grounding, and model-specific operation.

## 7. Week 3 assessment repair

The prior Week 3 weekly pool was heavily populated with repeated Week 1–2 Ohm/power/network arithmetic. v16.3.71 uses a curated **12-question** Week 3 mastery set with an 8 CETa / 4 Career mix.

The set now directly checks:

- DMM voltage connection
- resistance-mode de-energized setup
- current-mode series insertion
- lead/jack reset after current measurement
- CV/CC interpretation
- manual scope Vpp/period/frequency calculation
- 10× attenuation mismatch
- trigger source/level/slope
- conventional bench-scope reference/ground behavior
- meter loading
- choosing a scope for a brief transient
- resolution versus accuracy

Eight original Week 3 questions (`CQ1196`–`CQ1203`) are added to the runtime bank; no official ETA question text is copied.

LAB-003 has a separate 5-question practical setup check.

## 8. LAB-003

`LAB-003 — DMM / Bench Supply / Oscilloscope Familiarization` keeps its identity but now requires a stronger evidence sequence:

1. Inspect leads/probes/ratings and identify jacks/reference.
2. Predict expected values before measurement.
3. DMM voltage measurement.
4. De-energized resistance/continuity measurement.
5. Safe current-mode series insertion and return of the red lead to V/Ω afterward.
6. Configure voltage/current limit; observe normal CV and a defined safe CC condition.
7. Connect/check/compensate the passive probe on a known waveform when equipment supports it.
8. Set volts/div, time/div, coupling, and trigger deliberately.
9. Calculate Vpp, period, and frequency manually before comparing with automatic readings.
10. Submit a reproducible expected-versus-measured record with settings, limitations, and conclusion.

The virtual route continues to earn academic/concept completion but explicitly does **not** claim physical proficiency in DMM jack/lead handling, real bench-supply controls, passive-probe compensation, or real probe/reference technique.

## 9. Visual / UX QA

Three new source-grounded technical visuals were added and rendered for inspection:

- `w03-dmm-connections.svg` — voltage vs current vs resistance/continuity connection model
- `w03-cv-cc.svg` — CV-to-CC operating-state flow
- `w03-scope-graticule.svg` — 2 Vpp / 1 kHz graticule calculation plus control-role reminders

The SVGs parse as valid XML and were raster-rendered locally for visual inspection. Text/annotation overlap discovered in the initial CV/CC and scope-graticule drafts was corrected before packaging.

Existing one-page-at-a-time navigation, direct Page X of Y navigation, Focus Prep, glossary behavior, Study/Resume behavior, and question-review routing architecture remain intact.

## 10. Static/runtime QA

Final package checks:

- `week3-redesign-v16.3.71.js` JavaScript syntax: PASS
- `release-notes-v16.3.71.js` JavaScript syntax: PASS
- `service-worker.js` JavaScript syntax: PASS
- New SVG XML parse: PASS (3/3)
- Week 3 CETa primary teaching sections: **7**
- Week 3 Career primary teaching sections: **6**
- Required Week 3 Teaching Media assignments visible from Week 3 integration: **4**
- Study Guide contextual slices: **4**
- Active Week 3 CETa semantic tasks: **2**
- Preserved deferred Week 3 semantic task records: **3**
- Week 3 weekly mastery question IDs: **12/12 present**
- LAB-003 check question IDs: **5/5 present**
- LAB-003 physical procedure steps: **10**
- Future cross-week media placements for reused original sources: preserved
- `course-data.js` SHA-256 unchanged from v16.3.70 baseline: `6dcd0a266f789765806a914865c3cc9b37ca9635f5ea35e8b88f2007c43d91ed`
- Course calendar `.ics` SHA-256 unchanged from v16.3.70 baseline: `ab9c1ec20b21694e8e12fc2f0cb6eef1da846c26bfae1906c15de8603c1ecb6e`

- Service-worker CORE entries resolved against local files: **237 checked, 0 missing**
- Local `src` / `href` references across HTML pages: **1,366 checked, 0 missing**
- Week 3 patch script reference present exactly once on Learn, Study, Practice, Progress, Resources, and Search: **PASS**
- v16.3.71 Release Notes script included on `patch-notes.html`: **PASS**

## 11. Browser acceptance boundary

A graphical Chromium acceptance run is **not claimed** in this environment because previous local navigation attempts are blocked by the runtime administrator. This package therefore relies on data-runtime execution, source/asset integrity checks, XML/raster inspection of the new visuals, and post-upload GitHub Pages verification.

After upload, production verification must confirm the GitHub Pages run succeeds and the deployed artifact contains v16.3.71 before Week 3 is treated as deployed.
