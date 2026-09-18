# AU-ESET 301 v16.3.9 — Week 1 Beginner-Teacher Video Sources

**Scope:** Week 1 Teaching Media only  
**Date:** September 18, 2026  
**Media revision:** `2026-09-18-beginner-teacher-youtube-layer`

## Selection rule

This update adds a **beginner-teaching layer**, not a replacement for the previously verified Teaching Media pathway. Selection used two separate checks:

1. learner-feedback discovery: prioritize instructors repeatedly recommended by learners who struggled with introductory circuits/electricity;
2. source/content verification: independently confirm the public source identity and that the actual video teaches the Week 1 concept assigned to it.

The existing authoritative/industry/university resources remain in the course. These additions are deliberately optimized for explanation quality, intuitive analogies, stepwise buildup, worked examples, and beginner accessibility.

## Added public videos

### 1. START HERE — Voltage, current, resistance
- **Video:** *Lesson 1 - Voltage, Current, Resistance (Engineering Circuit Analysis)*
- **Creator:** Math and Science (Jason Gibson)
- **URL:** https://www.youtube.com/watch?v=OGa_b26eK2c
- **Week 1 job:** first-pass mental model for a closed circuit, voltage, current, resistance, amperes, and small current units before denser formal material.
- **Verification:** public YouTube metadata rechecked September 18, 2026; title/channel matched and description explicitly states that the lesson teaches voltage, current, and resistance in a typical circuit.

### 2. Current / amperes
- **Video:** *Basic Electricity - What is an amp?*
- **Creator:** Afrotechmods
- **URL:** https://www.youtube.com/watch?v=8gvJzrjwjds
- **Week 1 job:** physical meaning of electrical current and amperes.
- **Verification:** YouTube metadata and Afrotechmods' creator site rechecked September 18, 2026; source is presented as a beginner Basic Electricity lesson about current and amps.

### 3. Voltage
- **Video:** *Basic Electricity - What is voltage?*
- **Creator:** Afrotechmods
- **URL:** https://www.youtube.com/watch?v=TBt-kxYfync
- **Week 1 job:** intuitive meaning of voltage, volts, coulombs, joules, and power-supply behavior.
- **Verification:** YouTube metadata and creator page rechecked September 18, 2026; public description explicitly covers volts, coulombs, joules, power supplies, and what voltage does.

### 4. Resistance and Ohm's law
- **Video:** *Basic Electricity - Resistance and Ohm's law*
- **Creator:** Afrotechmods
- **URL:** https://www.youtube.com/watch?v=NfcgA1axPLo
- **Week 1 job:** connect resistance and a real resistor to the voltage-current-resistance relationship, then show the relationship in a simple resistor/LED circuit.
- **Verification:** creator page and indexed video metadata rechecked September 18, 2026; both identify resistance, resistors, Ohm's law, the V-I-R relationship, and the simple LED circuit.

### 5. Electrical power / watts
- **Video:** *Basic Electricity - Power and watts*
- **Creator:** Afrotechmods
- **URL:** https://www.youtube.com/watch?v=VSpB3HivkhY
- **Week 1 job:** make power/watts concrete and connect power calculation to actual measurement/component sizing.
- **Verification:** YouTube metadata and creator materials rechecked September 18, 2026; source explicitly covers electrical power/watts, light-bulb power measurement, and resistor sizing.

### 6. Worked circuit problems
- **Video:** *Electric Current & Circuits Explained, Ohm's Law, Charge, Power, Physics Problems, Basic Electricity*
- **Creator:** The Organic Chemistry Tutor
- **URL:** https://www.youtube.com/watch?v=r-SCyD7f_zI
- **Week 1 job:** turn the concepts into calculation fluency through worked examples after the mental model is established.
- **Verification:** public YouTube metadata rechecked September 18, 2026; verified channel description explicitly lists DC circuits, current, voltage, resistance, Ohm's law, charge, power, equations, units, and practice problems.

### 7. Multimeter bridge
- **Video:** *THE BEST Multimeter tutorial (HD)*
- **Creator:** Afrotechmods
- **URL:** https://www.youtube.com/watch?v=bF3OyQ3HwfU
- **Week 1 job:** connect voltage/current/resistance/continuity concepts to actual meter modes, jacks, and measurement placement before the required bench work.
- **Verification:** YouTube metadata and creator site rechecked September 18, 2026; source explicitly demonstrates voltage, current, resistance, and continuity. **The exact meter model shown is discontinued.** Alfred uses this video for measurement concepts only; current safety procedure remains controlled by Alfred's retained Fluke/safety resources and the Week 1 lab instructions.

## Runtime behavior

`week1-beginner-teaching-media.js` loads **after** `teaching-media-content-completion.js` and prepends these seven cards to Week 1. It de-duplicates its own source IDs and then retains every pre-existing Week 1 Teaching Media card in its original relative order. Weeks 2–31 are untouched.
