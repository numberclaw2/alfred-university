# AU-ESET 301 — v16.3.72 Week 3 Final Acceptance QA

**Scope:** Week 3 only  
**Production baseline audited:** deployed v16.3.71 GitHub Pages artifact from commit `59828b87b7651ac9cab535cb5b81e509bd61bf74`  
**Calendar:** unchanged

## Final verdict

**PASS after two final acceptance corrections.**

The deployed v16.3.71 artifact satisfies the requested Week 3 redesign: seven focused CETa teaching pages, six Career/technician pages, four Required external resources, four contextual CETa Study Guide slices, a focused 12-question mastery set, an expanded ten-step LAB-003 physical route, preserved future-topic competency records, and unchanged calendar/pacing files.

Two subtle issues were corrected in v16.3.72 before closure:

1. **DMM current-mode physical safety was correct in concept but not explicit enough at insertion/removal.** The final wording now requires source/supply output OFF before opening the path, inserting/removing the ammeter connection, or moving the current lead; the learner verifies the rated input/range before energizing and returns the lead to V/Ω afterward.
2. **The Sixth Edition Study Guide pp.172–173 mix useful oscilloscope fundamentals with legacy CRT/Z-axis detail and an old “start AC-coupled” setup sentence.** The contextual cards now explicitly bound the useful material and state that coupling is chosen from the measurement question; DC coupling is used when absolute DC level matters. Current Tektronix/manufacturer guidance and Alfred’s low-voltage procedure remain authoritative.

## Acceptance matrix

- Beginner-first instrument scope: PASS
- Question-first teaching sequence: PASS
- Seven CETa pages: PASS
- Six Career pages: PASS
- DMM voltage/resistance/current connection logic: PASS
- DMM current insertion/removal power-off safety: FIXED / PASS
- Bench-supply CV/CC reasoning: PASS
- Known-waveform-first scope onboarding: PASS
- Probe/reference/attenuation/compensation/coupling: PASS
- Dedicated trigger teaching: PASS
- Manual Vpp/period/frequency worked example: PASS
- Measurement loading/bandwidth/resolution/accuracy: PASS
- Worked model → retrieval → guided transfer → independent transfer: PASS
- Required media count: 4
- Required long/broad webinar burden: PASS — none
- Fluke DMM article scope: PASS
- Keysight Lesson 4 CV/CC scope: PASS
- Tektronix bounded setup chapter: PASS
- Tektronix focused trigger video: PASS
- Afrotechmods alternate explanation: optional Study only
- Specialist tools: not Week 3 Required; preserved for Study/later re-homing
- CETa Study Guide point-of-use placement: PASS
- Study Guide pp.172–173 legacy/AC-coupling ambiguity: FIXED / PASS
- Study Guide p.175 wholesale quiz: not assigned
- Weekly mastery set: 12 questions, 8 CETa / 4 Career, focused on Week 3 skills
- LAB-003 physical route: 10 steps; concept vs physical proficiency boundary explicit
- Calendar/course pacing: unchanged
- Cloud Sync protocol: unchanged

## Production/runtime verification performed

The GitHub Pages run for the v16.3.71 upload completed successfully. The deployed Pages artifact was downloaded and audited directly. A data-runtime harness loaded the production curriculum/media/assessment layers through `week3-redesign-v16.3.71.js` and confirmed:

- 7 CETa section IDs
- 6 Career section IDs
- 4 live Required Week 3 media assignments
- 4 contextual Study Guide records
- 12 mastery question IDs with the intended 8/4 track mix
- 2 active Week 3 semantic tasks
- 3 deferred semantic task records plus explicitly preserved competency fragments
- LAB-003 ten-step physical procedure

The service-worker CORE list resolves locally with zero missing files. `course-data.js` and the course `.ics` file are byte-for-byte unchanged from the v16.3.70 deployed artifact.

## Source verification

Current public source checks confirm the assigned Fluke DC-voltage and resistance guidance, Keysight Bench Power Supply Basics Lesson 4 (CV/CC), Tektronix step-by-step scope/probe setup chapter, Tektronix 4:31 trigger lesson, and the optional Afrotechmods scope tutorial are reachable and aligned to the stated Week 3 use.

## Visual/UX note

The three Week 3 source-grounded technical redraws were raster-rendered and inspected. Text is readable, labels do not overlap, the DMM connection model distinguishes voltage/current/resistance modes, the CV/CC diagram exposes the operating-state transition, and the scope graticule correctly represents 2.0 Vpp and 1 kHz. They follow Alfred’s accepted source-grounded visual taxonomy and cite the authoritative manufacturer concept source.

A routed graphical browser acceptance test is not claimed because local browser navigation remains blocked by the environment administrator. This final acceptance therefore rests on the production artifact, executed data runtime, direct visual renders, source checks, and static asset/reference checks.
