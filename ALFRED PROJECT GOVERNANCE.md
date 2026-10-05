# ALFRED PROJECT GOVERNANCE
## Canonical living source of truth for Alfred University AU-ESET 301

**Purpose:** Durable project memory for all future ChatGPT work on the Alfred University AU-ESET 301 website/course.  
**Audience:** Primarily ChatGPT / future project sessions. Human readability is secondary to completeness and retrieval efficiency.  
**Update rule:** Every future website update package must include the current version of this exact file, with any new user requirements, reversals, complaints, accepted decisions, or future ideas added before handoff.  
**Filename:** `ALFRED PROJECT GOVERNANCE.md`  
**Current governance compilation date:** 2026-10-01  
**Current site runtime at compilation:** v16.3.90  
**Repository:** `numberclaw2/alfred-university`  
**GitHub Pages:** `https://numberclaw2.github.io/alfred-university/`  
**Cloud Sync:** protocol 2  
**Current operating principle:** Treat this file as read-before-write project law. Do not make substantive Alfred decisions without consulting it plus the latest accepted runtime/QA artifacts.

**Mandatory invocation rule:** For **every request related to the Alfred website/course**, before analysis, recommendations, audits, code changes, file generation, acceptance decisions, or troubleshooting, first read the current `ALFRED PROJECT GOVERNANCE.md`. This is not optional and does not depend on whether the assistant believes it remembers the project.

**Proactive memory-capture responsibility:** The assistant is responsible for noticing when the user says something that materially changes or clarifies the project rubric. When that happens, the assistant should proactively say that the point is governance-worthy and update this file without waiting for the user to ask. The user does not expect perfect recall of every conversation, but does expect important durable requirements to be captured here when recognized.

---

# 0. AUTHORITY / PRECEDENCE

When project sources disagree, resolve in this order:

1. **Newest explicit user instruction in the current conversation.**
2. **This governance file, newest dated rule/change.**
3. **Latest accepted deployed runtime + latest accepted QA/governance artifacts in the repository.**
4. **Earlier accepted project decisions that are not superseded.**
5. **Historical audits/docs.**
6. **Old assistant claims, filenames, release notes, or package descriptions without runtime/deployment proof.**

Additional rules:

- Never assume upload = commit.
- Never assume commit = GitHub Pages deployment.
- Never assume Pages deployment = fresh service-worker/runtime state.
- Never assume data exists because a governance object says it exists; verify learner-facing rendering where relevant.
- Never rely on an old frozen document when newer accepted runtime/governance supersedes it.
- When uncertain, inspect the current files/runtime rather than asking the user to restate settled requirements.
- If two historical instructions conflict, prefer the later explicit user instruction and record the supersession here.

---

# 1. PROJECT MISSION

Alfred University AU-ESET 301 is a self-directed, asynchronous electronics/electrical-engineering-technician learning system designed to do two things at the same time:

1. Prepare the learner for **ETA Associate CET / CETa readiness**.
2. Build **real entry-level electronics/test/hardware technician capability** that can bridge into hardware-oriented electrical/embedded-systems engineering.

The website is not merely a study tracker, test-prep portal, link library, or content repository. The website itself is the course and Alfred itself is the primary teacher.

Long-term learner path:

**electrical/electronics foundations → technician/test capability → embedded/hardware capability → EE degree path → hardware-oriented Embedded Systems Engineer**

Immediate career goal is not theoretical future readiness. The Career track must help the learner become employable for roles such as:

- electronics technician
- electronics engineering technician
- test technician
- hardware test technician
- validation technician
- lab technician
- PCB technician / assembly / rework
- manufacturing test technician
- engineering technician
- avionics/electronics technician
- semiconductor technician
- robotics technician
- field/service electronics technician

Core practical skill targets include:

- schematics and circuit interpretation
- DMM
- bench power supply
- oscilloscope
- logic analyzer
- PCB/circuit-card troubleshooting
- soldering/rework
- component identification/testing
- digital electronics
- microcontrollers
- UART / I²C / SPI
- SWD / JTAG
- board bring-up
- Python test automation
- technical documentation
- fault isolation
- validation/test evidence
- reproducible technician reporting

---

# 2. CETa + CAREER = CO-EQUAL CORE TRACKS

## 2.1 Fundamental rule

CETa and Career are co-equal instructional tracks.

Career is **not**:
- an optional supplement,
- an enrichment layer,
- a later phase,
- a practical afterthought,
- a place to merely “apply CETa,”
- or a feature to revisit after CETa is complete.

In the user's immediate objective, **Career may be more important than CETa** because employment as an electronics/test technician is the near-term goal.

## 2.2 Broad-scope requests automatically apply to both tracks

Unless the user explicitly limits scope, the following requests must be interpreted as CETa **and** Career:

- “audit Week X”
- “improve the teaching”
- “improve the visuals”
- “update media”
- “add literature”
- “fix navigation”
- “make the lessons better”
- “audit the course”
- “make this more beginner-friendly”
- “make this more realistic”
- “improve practice”
- “improve assessment”
- “update diagrams/images”
- “make the course job-ready”

Do not default broad instructional work to CETa.

## 2.3 Required acceptance rule

No week may be called:
- accepted,
- frozen,
- final,
- verified,
- complete,
- ready to move on,

unless there are explicit separate results for:

- CETa
- Career
- CETa↔Career handoff/timing
- learner-facing rendering
- evidence/practical boundary
- regressions

## 2.4 Known process failure — must not repeat

Two separate project cycles exposed an assistant bias toward CETa over Career.

Most recent example:
- v16.3.85 applied the new source-authentic visual philosophy to Week 2 CETa.
- Career was noticed but only superficially checked.
- The week was about to be frozen and work moved to Week 3.
- The user had to explicitly ask whether Career received the same visual upgrade.
- v16.3.86 then added the missing Career source-authentic visual layer.

This is a governance defect, not a one-off mistake.

**Permanent safeguard:** every acceptance statement must explicitly show CETa result + Career result. If one is absent, the week remains open.

---

# 3. CURRENT COURSE ARCHITECTURE / INVARIANTS

Treat these as protected unless the user explicitly changes them:

- 31-week architecture
- 62 lessons / two primary lessons per week (CETa + Career)
- 24 labs
- 125 calendar events / stable event identities
- Cloud Sync protocol 2
- saved progress/history
- PWA/offline architecture
- stable route / task / assessment / event identities
- no login requirement
- Student Gateway / Learn / Study / Week / Calendar / Practice / Labs / Projects / Resources / Standards / Progress / Analytics / Documents architecture
- real-university presentation
- mobile-responsive behavior
- search / navigation consistency

Latest governing standards:
- 262 CETa competencies
- current Career governance expanded beyond earlier 78/81 counts; latest accepted Career-governance generation uses **95 Career standards**
- historical 78- and 81-standard counts are superseded as current governance counts, but their IDs/history may remain relevant to migrations

Historical equal-weight design:
- 2,790 weighted CETa minutes
- 2,790 weighted Career minutes

Do not destroy equal purpose even when actual weekly time varies.

Major gates have evolved across releases. The durable core includes:
- Week 5 cumulative gate
- Week 12 repair/cumulative gate
- Week 18 embedded gate
- later CETa-readiness / capstone / technical-defense gates
- Week 18 must include real embedded capability around STM32, SWD, UART, I²C/SPI, logic analyzer, fault injection rather than only theory

CETa readiness target remains:
- two fresh 100-question runs ≥85% under accepted readiness rules
- historical later repair also required an independent/outside-Alfred readiness confirmation; check latest accepted readiness implementation before changing it

---

# 4. PEDAGOGY — “ALFRED MUST ACTUALLY TEACH ME”

This is one of the oldest and most repeated user requirements.

## 4.1 Alfred is the professor

The core lesson itself must teach the subject. External resources do not compensate for weak Alfred instruction.

Never use:
- generic scaffolding in place of technical teaching
- competency labels as teaching
- links as teaching
- Study Guide references as teaching
- videos as teaching substitutes
- assessment prompts as teaching substitutes
- “coverage counts” as proof of comprehension

## 4.2 Beginner-first / assume nothing

Teach from true ground zero where needed.

Required teaching behaviors:
- define new terms before using them
- explain physical meaning
- explain why the concept exists
- explain units and prefixes
- connect equations to real physical behavior
- use predictions before formulas where appropriate
- explicitly teach prerequisites
- distinguish healthy behavior before faulted behavior
- explain tools before assuming professional use
- show cause → effect
- explain sign conventions and reference directions
- explain what a negative result physically means
- show reality checks / sanity checks
- connect new content to previously taught content

Do not assume “obvious” technician/electronics vocabulary is obvious.

## 4.3 Preferred learning sequence

Use judgment rather than rigid templating, but the default learning logic is:

**Teach → Explain → Visualize → Demonstrate → Worked Example → Guided Practice → Independent Practice → Lab/Application → Assessment → Mastery → Targeted Repair**

Also accepted:
**I do → We do → You do**

## 4.4 Evidence-based learning

Favor:
- retrieval
- spacing
- comparison
- worked examples
- fading guidance
- scenario variation
- prediction before reveal
- active problem solving
- error correction
- exact-miss repair
- teach-back
- causal reasoning
- realistic practice

The user explicitly asked that lesson writing, videos, literature, and Study Guide integration be audited together from a teaching/retention perspective.

## 4.5 Audit philosophy

For educational-fitness audits:
- focus on material learning blockers
- do not endlessly nitpick inconsequential polish
- use clear GO / NEEDS REPAIR logic
- once a week genuinely passes, move on
- do not reopen frozen material for optional cosmetic ideas unless the user explicitly wants it

However:
- pre-delivery packages must still be adversarially QA'd for fixable defects
- “avoid endless nitpicks” does not mean “skip material regressions”

---

# 5. CAREER TRACK — JOB-READINESS GOVERNANCE

## 5.1 Career pages must independently teach the technician behavior

Career may rely on CETa theory **only if that prerequisite was actually taught** through an active semantic teaching route.

Career cannot say “apply X” if X is merely planned for a later week.

Each Career teaching page should include as appropriate:

- occupational task
- beginner prerequisite
- explicit CETa→Career handoff
- technician demonstration
- immediate learner action
- real equipment/workplace context
- fault exposure where relevant
- physical vs simulation boundary
- evidence artifact
- assessment / repair
- occupational benchmark
- technician decision criteria
- documentation expectations

## 5.2 Career does not merely duplicate CETa

If CETa already teaches a concept:
- Career should not repeat the same explanation unnecessarily
- Career should transform it into a real technician decision, measurement, procedure, troubleshooting action, evidence artifact, or documentation behavior

If Career contains unique material:
- it must be taught from the ground up
- do not assume the learner knows occupational procedure simply because the theory exists

## 5.3 Career acceptance question

For every week ask:

> Does this week make the learner more capable of performing real entry-level electronics/test/hardware technician work?

If the answer is not demonstrably yes, Career is incomplete.

## 5.4 Evidence levels

Reading/video ≠ procedural performance.  
Simulation reasoning ≠ physical handling.  
CETa evidence ≠ Career evidence.

Instrument/procedure evidence must include where appropriate:
- setup validity
- expected result
- measurement evidence
- decision rule
- limitations
- equipment/status context
- repeatability/reproducibility
- safety boundary

Highest practical evidence levels require authentic artifacts / real performance where the standard demands it.

Do not claim physical proficiency until hands-on evidence exists.

---

# 6. CETa INSTRUCTIONAL AUTHORITY / PREREQUISITES

Latest accepted governance distinguishes active semantic teaching from planned/rehome coverage.

Rules:
- planned coverage does not establish a prerequisite
- a coverage matrix row alone does not establish a prerequisite
- only active semantic teaching routes count as taught prerequisites
- backward prerequisites are unacceptable
- assessment-before-instruction is unacceptable
- future-concept dependence is unacceptable unless explicitly preview-only
- CETa/Career timing must be validated semantically, not only structurally

Historical current accepted authority after Week 3 remediation:
- 262 CETa competencies
- around 221 active semantic routes / 41 rehome at the v16.3.81–83 stage
- use current runtime if later counts change

Do not silently reactivate rehomed content in earlier weeks.

---

# 7. MEDIA / VIDEO SYSTEM

## 7.1 Alfred remains primary teacher

Videos supplement Alfred; they do not substitute for missing teaching.

## 7.2 Required coverage standard

Superseded rule:
- an older “20 universal + 7 conditional” minimal-resource model was rejected as too aggressive.

Current rule:
- Required video content should collectively cover the necessary first-pass lesson concepts
- Required written/literature content should independently cover the necessary first-pass lesson concepts
- remove unnecessary same-medium redundancy only after complete coverage exists
- “complete coverage first, remove redundancy second”

Study is **not** a place to hide missing first-pass instruction.

## 7.3 Placement

Videos should be integrated contextually near the concept they support.

Maintain:
- centralized Teaching Media library
- contextual lesson placement
- bidirectional links/backlinks
- one canonical underlying resource record where possible
- progressive disclosure
- lazy loading
- mobile/desktop usability
- clear Required / Study / Library roles
- exact “why this belongs here” guidance

Avoid:
- random insertion
- walls of videos
- generic media dumping
- redundant repeated resources
- prestige over teaching clarity

## 7.6 Section-level media fit and repetition rule

Every lesson-page media placement must directly and sufficiently support the **specific subject being taught on that page**. A resource that is merely broadly related to the week or instrument family is not good enough. Do not fill a page with a generic resource simply to satisfy a media count.

Video repetition is tightly controlled:
- do **not** place the same whole short/general video on multiple lesson pages;
- do **not** repeat a video on adjacent pages simply because it mentions both topics;
- a long or deliberately structured video may be reused only when each placement assigns a **different exact timestamp/chapter/lesson segment** and tells the learner precisely what to watch there;
- if distinct pages teach distinct concepts and a suitable page-specific video exists, use distinct videos;
- before freezing a week, audit duplicate video source IDs/URLs across both CETa and Career and justify every duplicate by explicit segment slicing.

The governing standard is **topic fit + sufficient coverage + low redundancy**, not one-card-per-page count compliance.

## 7.4 Video slicing

One long high-quality video may be reused as multiple lesson segments by assigning exact timestamps when that creates clearer concept-level instruction.

## 7.5 Source preference

Use strong teachers and credible technical sources:
- universities
- manufacturers
- respected educators
- strong YouTube teachers when they genuinely explain better

Comprehension outranks prestige.

---

# 8. OUTSIDE LITERATURE

Outside literature is a third independent learning channel alongside:
1. Alfred teaching
2. video/demonstration

Desired source types:
- free/open textbooks
- university notes
- manufacturer/application notes
- practitioner explanations
- case studies
- failure analysis
- practical real-world applications
- “this made it click” resources

Rules:
- credible / trustworthy
- practical and teachable
- nonredundant
- free/open when possible
- no paywalled default resources
- no whole-manual dumping
- no orphan links
- exact lesson home
- direct backlink
- exact section/page where useful
- explain What / Why / Read-Use / Focus / After Reading
- Required / Supporting / Optional or equivalent role clarity
- canonical source records
- no literature merely to increase counts

## 8.1 Lesson-level written reading is Required

As of 2026-10-05, any written source that Alfred places **inside a lesson / Related Learning for the concept being taught is Required reading**. Do not place a newly assigned lesson-related article, manufacturer note, textbook section, government reference, or other reading under an optional “Need another explanation or reference?” bucket.

Rules:
- if a written source is important enough to support the lesson page, assign it as Required and bound it to the exact section/pages needed;
- optional/supporting reading belongs in Study or the Engineering Library, not in the lesson Related Learning panel;
- a reading already completed as Required may be linked again later as a clearly labeled reuse/review without creating a second obligation;
- do not add written sources merely to satisfy a count; the Required reading must directly and sufficiently reinforce that page’s subject.

---

# 9. CETa STUDY GUIDE

The Associate CET Study Guide, Sixth Edition is supplemental/reference material, not Alfred’s teaching engine.

Current integrated model:
- Alfred teaches first
- exact Study Guide pages/sections are woven contextually after relevant Alfred teaching
- exact page ranges
- estimated time
- focus
- after-reading action
- Required / Review / reference distinctions
- weekly Teaching Media assignment plus point-of-use placement
- avoid duplication/overload
- 64 Required pages across 14 weeks at the accepted mapping stage
- 17 weeks had no new Required Study Guide reading

Do not use the Study Guide as a loophole for missing Alfred instruction.

## 9.1 Lesson-mapped Study Guide reading is Required

As of 2026-10-04, if exact Associate CET Study Guide pages are mapped to a lesson topic because they are relevant to what the learner is being taught, those pages are **Required reading**. Do not place newly assigned, lesson-related Study Guide pages under “Need another explanation or reference?”, optional Study, or a similar secondary bucket.

The only allowed exception is **secondary reuse after Required assignment**: if the exact same Study Guide pages have already been assigned as Required earlier in the learning path, they may appear again later as “previously assigned / reuse if needed” when revisiting them is pedagogically useful. That secondary appearance does not create a new reading obligation.

Non-required Study Guide records must **never** be surfaced inside the lesson’s “Need another explanation or reference?” section. That secondary section may show Study Guide material only when the exact same record was already assigned as Required and is now being intentionally revisited.

If a Study Guide section is not useful enough to be Required for the current lesson, do not map it to the lesson merely to increase coverage. Broad chapter maps may remain reference-only when they have no lesson placement.

Study Guide handling has changed historically:
- upload/private IndexedDB model existed
- user later wanted to avoid repeated upload
- a repository-hosted copy was later discussed/used
- distribution/rights must be handled cautiously; do not assume the presence of a file automatically grants unrestricted redistribution rights
- do not reproduce copyrighted Study Guide text merely because the file is available

---

# 10. VISUALS / DIAGRAMS / IMAGES — CURRENT GOVERNING RULE

This rule was materially revised on 2026-09-29.

## 10.1 Source-authentic first — Alfred creation is a true last resort

Do not default to researching a topic and drawing Alfred’s own version of the technical diagram. Before creating any new instructional visual, make a serious, broad search for an existing visual that is at least equal in educational value and comes from a credible source. Search as widely as reasonably useful across universities, manufacturers, government/technical training material, standards/industry organizations, open textbooks/OER, public-domain archives, Wikimedia Commons with independent technical verification, and other reputable technical educators.

Priority:

1. public-domain or CC0 source-authentic visual
2. permissively licensed source-authentic visual
3. official manufacturer / university / government / credible technical-training visual as an outbound or embedded reference when reuse terms permit
4. only after the search above fails to find an equally useful or better credible visual, an Alfred-created visual may be used as the last resort

The purpose of this rule is not to ban Alfred-created visuals absolutely. If the best available online visuals are materially worse for teaching the exact concept, an Alfred-created visual is acceptable. But the burden is on Alfred to search first, not create first.

## 10.2 Separate provenance from technical authority

Two independent questions:
- Can Alfred legally/reasonably reuse the image?
- Is the technical interpretation authoritative/correct?

A public-domain image is not automatically a technical authority.

Use a two-source model when appropriate:
- visual source/license
- technical verification source

## 10.3 What should be source-authentic

Prefer real/source-authentic visuals for:
- equipment
- test setups
- circuit topologies
- instrument controls
- waveforms
- schematics
- component construction
- PCBs
- test points
- soldering/rework
- technician bench work
- fault isolation
- measurement
- repair
- verification
- physical wiring
- actual hardware

No new AI-generated educational diagrams as the default.

## 10.4 Alfred-created visuals that may remain

Alfred-created visuals are permitted only after a good-faith search fails to find an existing credible visual that is equal or better for the teaching goal. This applies even to reasoning/workflow concepts such as:
- hypothesis matrix
- question → prediction → measurement → conclusion
- last-good / first-bad workflow
- decision tree
- repair record
- evidence checklist
- documentation template

Do not assume these categories automatically justify an Alfred-made figure. Search for published technician-training, university, manufacturer, government, or other credible visuals first. If a strong existing visual teaches the same idea, use it. If no comparable source visual exists, the Alfred-created version may remain and must be transparently labeled as an Alfred reasoning/workflow aid.

## 10.5 Visual captions must teach

A visual should answer:
- What am I looking at?
- What should I notice first?
- Why does it matter?
- What beginner mistake should I avoid?
- How does this connect to the current skill?

## 10.6 BOTH TRACKS

This visual policy applies equally to CETa and Career.

Career should use real occupational/equipment visuals where appropriate rather than merely inheriting CETa schematics.

Current Week 2 baseline:
- v16.3.85 source-authentic CETa visuals
- v16.3.86 source-authentic Career visuals
- Week 2 frozen only after both tracks passed

---

# 11. GLOSSARY / VOCABULARY

The user wants a very broad technical glossary, not only a tiny curated set.

Scope:
- electronics
- electrical
- physics
- signals
- instrumentation
- embedded
- engineering
- technician terminology
- field-specific nouns/concepts beyond ordinary speech

Behavior:
- highlight technical terms with discernment
- avoid repeatedly highlighting the same word within one section/page
- re-highlight when the learner enters a new meaningful section/page
- single click = popup definition
- double click = go to glossary
- hover definitions removed
- glossary tab/page remains a full reference
- vocabulary support should serve the current lesson, not require memorizing the whole glossary
- preserve deduplication and avoid duplicate glossary records
- first meaningful occurrence emphasis is preferred
- technical words should be defined more expansively than ordinary verbs/adjectives

---

# 12. LEARN / STUDY / NAVIGATION

## 12.1 Page roles

- **Study** = “What should I do now?” / retrieval / spacing / remediation / alternate explanations / extra depth
- **Learn / Classroom** = primary teaching
- **Week Overview** = weekly purpose / destination
- **Calendar** = schedule
- **Practice / Labs / Assessments** = proof
- **Progress** = completion
- **Mastery / Standards & Retention** = what is known, weak, and why

Keep those roles distinct.

## 12.2 Resume behavior

Separate:
- Resume Learn
- Resume Study

Do not collapse them into one ambiguous resume point.

Reviewing completed material must not erase saved forward progress.

## 12.3 Direct section navigation

Accepted:
- Page X of Y
- named section selector
- numeric jump / Go / Enter
- Guided Practice page selector/jump
- preserve notebook/checkpoint/progress state
- unfinished lessons should not allow invalid forward skipping
- previously passed lessons may review all pages

## 12.4 Question review routing

Every question should link to the exact teaching section that supports it.

Required behavior:
- Review Section link
- Back to Question
- stable section IDs
- forward movement only where allowed by completion state
- no generic “go reread lesson” routing when a precise section is known

---

# 13. ADHD / AUTISM / EXECUTIVE-FUNCTION SUPPORT

User learns best with structured, stepwise, visual instruction and has explicitly requested executive-function support.

Accepted features:
- Focus Prep / environment checklist on entering Learn/Study
- clear next action
- stop/resume
- Pause & retrieve
- state-aware next action
- Focus / Quiet Mode
- Curiosity Parking Lot
- session-size choices
- time estimates
- Definitions of Done
- weekly planning
- meaningful retrieval/spacing/remediation
- compact progressive disclosure
- do not show overwhelming walls of content/resources

Quick / Standard / Deep Work:
- approximately 20 / 60 / 120 minutes
- these are study block sizes, not deadlines

Curiosity Parking Lot:
- supports side-topic capture
- historically local-only unless explicitly synced later
- do not claim cloud sync unless runtime proves it

---

# 14. CALENDAR GOVERNANCE

Protected:
- 31 weeks
- 125 events
- stable event identities / ICS UIDs
- local times/durations
- labs/projects/milestones
- progress/Cloud Sync semantics

The calendar was shifted +7 days once so the then-current week became Week 1. That was a specific accepted migration, not permission to keep moving future dates.

Current pacing rule:
- baseline calendar remains healthy fallback
- user may study ahead
- January 31, 2027 is an aggressive stretch target for CETa + technician readiness
- do **not** rewrite the official calendar just because the learner studies faster

Ahead-of-calendar rules:
- allow completing future material
- future completion credit must be accurate
- resume/overdue behavior must remain sane
- mastery/evidence gates remain hard
- the calendar is a fallback structure, not a prison

Recovery:
- use oldest meaningful incomplete prerequisite work
- do not create a punishment marathon
- completed assignments should not remain falsely overdue

Calendar titles:
- clear at a glance
- less busy/wordy
- detailed CETa/resource/career/mastery info belongs in descriptions, not overloaded titles

---

# 15. LABS / ASSESSMENTS / EVIDENCE / MASTERY

Protected core:
- 24 labs
- physical vs simulation distinction
- practical evidence
- real-world artifacts where standards require them

Mastery concepts:
- completion ≠ confidence ≠ mastery
- safety-critical checks require 100%
- standard weekly/lab mastery historically ≥80% unless later governing artifact says otherwise
- weak standards need targeted repair/retest
- thin evidence should not be overstated as mastery
- “Evidence Limited” semantics were introduced to avoid false confidence

Assessment integrity:
- objective/semantic/practical evidence must remain distinct
- do not let auto-graded MCQs substitute for performance evidence
- semantic response should require substantive subject-specific evidence
- practical claims need practical artifacts
- CETa mock/readiness should not be falsely independent if question overlap undermines independence
- assessment IDs are course-global stable identities; two different weeks/standards must never claim the same active question ID
- acceptance must validate the question object behind every selected ID (presence, track, review status, masteryEvidence, minWeek, and intended teaching route), not merely the declared ID list/count
- a declared CETa/Career mix must be reconciled against the actual tracks of the selected question objects before acceptance

Projects:
- Project identities have been repaired historically; use current canonical project records
- Project 2 was canonicalized as Automated Hardware Validation/HIL
- Project 3 as Custom PCB in an accepted audit stage
- verify current runtime before changing project numbering/identity

---

# 16. WEEK 3 CURRENT ACCEPTED INSTRUCTIONAL BASELINE

Week 3 is a useful model for current Career + CETa expectations.

Focus:
- DMM
- current-limited bench supply
- oscilloscope
- measurement validity
- no premature specialist-tool dump

Current Career teaching topics include:
- question-first instrument selection
- static evidence
- known-waveform-first scope use
- reference/loading/bandwidth
- discriminating measurements
- reproducible evidence
- test-asset validity
- measurement-capability decision

Key Career behavior:
- choose only instruments understood
- verify test asset / measurement chain before blaming DUT
- distinguish DUT vs test-system failure
- decide PASS / FAIL / inconclusive based on measurement capability
- document setup/status/uncertainty/context

Week 3 C15 metrology standards emphasize:
- asset identity/calibration/status/ratings/config
- self-test / known reference / sanity check
- accuracy / resolution / tolerance / repeatability / loading / bandwidth / uncertainty
- reject/quarantine unknown/bad equipment
- known-good/substitution/independent measurement to isolate DUT vs test path

C3.8 specialist instrumentation was removed from Week 3 and targeted later (Week 20).

v16.3.84 fixed a critical learner-facing issue:
- Career governance data was correct but old renderer hid task/handoff/demo/practice/evidence
- current rule: governance data is insufficient unless the learner can actually see/use it

Week 3 accepted state before visual-policy retrofit:
- CETa VERIFIED_PASS
- Career VERIFIED_PASS
- tandem VERIFIED_PASS
- Week overall VERIFIED_PASS
- Career learner-facing teaching VERIFIED_VISIBLE

v16.3.90-H3 Week 3 direct-entry integrity repair (internal runtime/source QA PASS; deployment/client QA required after upload):
- source-authentic-first visuals applied to all 8 CETa teaching pages
- source-authentic occupational/equipment visuals applied separately to all 8 Career teaching pages
- exact CV/CC transition drawing retained only as a transparently labeled Alfred reasoning aid after source search
- assessment-ID collision discovered and repaired: Week 2 retains canonical CQ1204–CQ1209; Week 3 v16.3.81 items no longer reuse CQ1204–CQ1208
- Week 3 meter/metrology additions use unique CQ1210–CQ1214
- Week 3 weekly mastery is defined as 14 questions with an actual 7 CETa / 7 Career mix
- LAB-003 knowledge gate is defined as 6 questions with an actual 3 CETa / 3 Career mix
- LAB-003 ten-checkpoint evidence gate and physical-vs-simulation truth boundary remain unchanged
- H2 deployment/artifact was verified at commit `8f6f23232804eb84af547262bb7d6f035bcbfc1e`; H3 was then required after internal direct-entry execution exposed that quiz/assessment/lab pages still depended on service-worker injection for canonical Week 3 state. H3 makes those routes statically self-sufficient and must be deployed/reverified before Week 3 may be frozen.


v16.3.90-H4 Week 3 multimodal content-quality candidate (internal data/runtime QA PASS; deployment + real-client content acceptance still required):
- preserves the accepted H3 Week 3 instructional structure, source-authentic visual layer, assessment balance, evidence boundary, and Cloud Sync protocol 2
- every one of the 16 Week 3 teaching pages (8 CETa + 8 Career) now has a purposeful page-level mix of substantive Alfred teaching, source-authentic visual/diagram, bounded video/demonstration, bounded written reading/reference, and retrieval/application
- exact Week 3 point-of-use external-resource placements = 32: 16 video/demonstration + 16 reading/reference
- Career is no longer allowed to pass with strong Alfred text/visuals but zero point-of-use media; H4 gives all 8 Career pages the same multimodal-quality scrutiny as the 8 CETa pages
- strong existing sources are deliberately reused when semantically exact; new sources are limited to focused manufacturer/government material from Tektronix, Keysight, and NIST rather than count-padding
- specialist-instrument breadth remains outside the Week 3 core; H4 does not reintroduce premature spectrum/ESR/LCR/variable-line-AC/signal-generator/decade-box/electronic-load instruction
- Historical H4 acceptance language originally held final freeze open for user-browser confirmation. That verification-first gate is superseded for normal content/file work by the 2026-10-01 content-first workflow; browser confirmation is required only when making a browser/runtime verification claim or troubleshooting a reported defect.

### Week 3 content freeze — 2026-10-01

Week 3 is **CONTENT_FROZEN** after a final major-issues-only instructional audit under the user's current content-first workflow.

Separate content results:
- **CETa instructional content: PASS.** Eight teaching pages cover question-first instrument selection, analog/digital meter operation and construction, DMM connection modes, CV/CC bench-supply behavior, oscilloscope voltage-versus-time interpretation, probe/reference discipline, triggering, and measurement limits. The lesson includes worked examples, guided practice, independent application, teach-back, semantic tasks, retrieval checks, and assessment routing.
- **Career instructional content: PASS.** Eight teaching pages convert the same instrument knowledge into technician planning, baseline/static evidence, known-waveform validation, loading/bandwidth awareness, discriminating measurements, reproducible records, test-asset validity, and measurement-capability decisions.
- **CETa↔Career handoff/timing: PASS for content.** Career uses only the core instruments and concepts taught in the Week 3 CETa path; specialist-instrument breadth remains deferred.
- **Teaching-media placement: PASS for major-issue threshold.** All 16 teaching pages have substantive Alfred teaching, a source-authentic visual/diagram, one bounded video/demonstration, one bounded written source, and a retrieval/application action. Reused resources are assigned for distinct page purposes rather than count padding.
- **Teaching-method mix: PASS.** Across the week the course uses explanation, source-authentic visualization, demonstration/video, written reinforcement, worked examples, I-do/we-do/you-do guided practice, prediction/retrieval, independent troubleshooting scenarios, teach-back, semantic response, LAB-003 application/evidence, and mastery assessment/repair routing.
- **Evidence/practical boundary: PASS for content.** LAB-003 retains the ten-checkpoint evidence packet and clearly distinguishes academic/simulation evidence from physical DMM lead/jack handling, supply-control handling, probe/reference handling, compensation, accessory inspection, and real status/calibration evidence.
- **Minor/non-blocking observations:** some reused external media could be sliced even more tightly with timestamps/subsections, and a few pages use adjacent rather than perfectly one-to-one supplemental media. These do not materially weaken the Alfred teaching path or leave a Week 3 concept untaught, so they do not reopen the week.

Freeze rule:
- Do not reopen Week 3 for cosmetic polish, alternate media preferences, or minor wording refinements.
- Reopen only for a later user-reported defect, a newly discovered **major** instructional omission/error, a broken/missing required resource that materially harms the lesson, or an explicit user request.
- `CONTENT_FROZEN` does not mean every browser/runtime path has been personally reverified by the user. Runtime defects may be repaired later without reopening the instructional design unless the repair changes content.

### Week 3 content freeze REOPENED — 2026-10-04

The 2026-10-01 `CONTENT_FROZEN` decision is **superseded**. During actual study, the user found a material Teaching Media defect: the same Afrotechmods multimeter video was repeated across adjacent CETa pages without distinct timestamps/segments, and the H4 design contained similar cross-page video reuse in Career. This violates the page-specific media-fit standard and means H4 should not have been frozen.

Week 3 is reopened specifically for the H5 media-placement repair. H5 must:
- replace redundant whole-video reuse with page-specific videos across all 8 CETa + 8 Career teaching pages;
- permit video reuse only with explicit, non-overlapping timestamp/chapter assignments;
- make every lesson-related written resource Required;
- promote all lesson-mapped Week 3 Study Guide slices to Required on first assignment, with optional/reference appearance allowed only as secondary reuse of already-required pages;
- preserve existing Week 3 teaching, visuals, assessments, LAB-003 evidence, stable IDs, and Cloud Sync protocol 2.

Do not treat Week 3 as content-frozen again until this repair is placed into the files. Under the content-first workflow, browser acceptance is not a default freeze gate; later user-reported defects remain authoritative triggers for repair.

### Week 3 H5.1 audit repair — 2026-10-05

A targeted post-upload audit of H5 confirmed the page-specific media repair itself worked, but found three defects that prevent H5 from being the final Week 3 content baseline:
- H5's Study Guide wrapper filtered the four mapped Chapter 19 records out because they were still classified as Study; it did **not** promote them to Required as the user explicitly required.
- the required Career NEETS Module 16 reading still pointed to a `maritime.org` PDF URL that returns 404; H5.1 replaces it with the accessible NAVEDTRA 14188A public PDF at `https://casperarc.net/library/NEETS/14188A.pdf`.
- H5 changed governed repository files without regenerating the repository-wide `SHA256SUMS.txt`, leaving three stale checksum entries. H5.1 regenerates the ledger.

H5.1 repairs only those audit findings. It preserves the H5 page-specific media map: 16 distinct Week 3 video source IDs/URLs, 16 Required written sources, and no whole-video repetition. The four bounded Study Guide records become Required on their first mapped page; the existing Learn renderer then labels later placements of the same record as **Previously assigned · reuse if needed**. Week 3 remains reopened until H5.1 is placed into the repository.

### Week 3 H5.2 required-media link integrity repair — 2026-10-05

The explicit post-upload audit requested by the user confirmed that the deployed H5.1 **structure and placement behavior are correct**, including 16 distinct page-specific videos, 16 Required external readings, four promoted Required Week 3 Study Guide slices, later Study Guide reuse/backlink behavior, and the repaired NEETS Module 16 link. The audit found one remaining material required-media defect: the H5/H5.1 Keysight **Out-of-Cal Instruments Cause Bad Pass/Fail Decisions** source used YouTube ID `wGss-Elbf8E`, while Keysight's current calibration-series listing and indexed video identify the intended 6:24 source as `UsIZx00HJmE`.

H5.2 changes only this required video target and adds a structural required-link guard for the corrected Keysight out-of-cal video plus the NEETS NAVEDTRA 14188A reading. The audit also found that the static Learn query, service-worker cache identity/injection, and build-info still identified the current Week 3 media layer as H4 even though the file contents were H5/H5.1. H5.2 aligns those cache/build identifiers to the current H5.2 media contract so release identification and cache migration are truthful. No Week 3 teaching sequence, placement identity, Study Guide assignment, assessment, LAB-003 evidence, stable learner ID, or Cloud Sync behavior is changed.

Week 3 remains reopened until the H5.2 replacement is uploaded. After H5.2 is placed in the repository, the content/media defects currently known from the H4/H5/H5.1 audit chain are resolved and Week 3 may return to `CONTENT_FROZEN` under the content/file-first workflow unless a later substantive defect is reported.

The prior instruction “Future Week 3 visual work must apply the new Week 2 source-authentic visual standard to both tracks” is satisfied at content level by the deployed H4 source-authentic CETa + Career visual layer.

---

# 17. MEDIA / RESOURCE PLACEMENT ROLES

Three-level resource architecture:

## Required / Classroom
- complete first-pass supporting coverage
- contextually placed
- bounded
- no raw link dump
- does not replace Alfred teaching

## Study
- alternate explanations
- remediation
- deeper worked examples
- optional reinforcement
- duplicate/same-concept alternate resources

## Engineering Library
- professional reference
- manuals
- deeper industry material
- long-form reference
- not the primary lesson path

Resources should have:
- purpose
- why
- focus
- after-use action
- exact lesson relationship
- backlinks
- canonical source record
- responsive/accessibility behavior

---

# 18. VISUAL / UI DESIGN SYSTEM

Visual identity:
- institutional / real-university aesthetic
- Alfred University
- School of Engineering and Applied Technology
- green / gold / cream
- grizzly identity
- crest / seal
- motto: `Discere · Aedificare · Servire`
- EST. 1998

User explicitly rejected:
- patched/photoshopped-looking branding
- broad redesign after accepted identity
- gratuitous UX/aesthetic changes during content-only updates

Current design should preserve:
- clear hierarchy
- whitespace
- compact cards
- responsive stacking
- mobile touch targets
- accessible labels
- strong Alfred content dominance
- distinct Required / Study / Library visual treatment
- mobile no-horizontal-overflow
- stable navigation

Branding asset history:
- live site uses `crest.webp` / `seal.webp` in many runtime locations
- transparent-background repairs removed outer white backgrounds but preserved internal white/cream artwork details
- document-cover whites are not automatically made transparent

No whole-site redesign unless the user explicitly asks for one.

---

# 19. NAVIGATION / MOBILE / ACCESSIBILITY

Accepted:
- desktop horizontal navigation with More dropdown
- mobile/tablet drawer
- current-page highlighting
- Progress accessible
- search discoverability
- stable sticky header
- coherent academic hierarchy

Mobile/accessibility QA should check:
- 360–390px behavior
- no horizontal overflow
- touch targets
- heading structure
- labels
- mobile search/nav
- external link protection
- offline fallback
- keyboard/assistive behavior where relevant

Known historical minor items that may recur in audits:
- Release Notes mobile clipping/TOC density
- Home 360px stat overflow
- back-to-top overlap
- preserving full wordmark on narrow mobile
- calendar-arrow width

Do not reopen these unless still present/material.

---

# 20. DOCUMENTS / COURSE PACK

Documents should feel like professionally designed university materials.

Preferred document style:
- professional cover
- TOC
- numbered chapters
- headers/footers
- readable typography
- callout boxes
- quick-reference tables
- flow diagrams where useful
- nearby screenshots with captions
- whitespace
- short paragraphs
- desktop/tablet/print readability

Document Center should reflect current site/course behavior.

Rule:
- current site/runtime wins over stale documents
- update documents when they materially misrepresent the live course
- do not rebuild documents merely for version-number churn

Historical request:
- long-term reference material should include underlying lesson plan + complete website user guide explaining every area, function, workflow, and where things are

---

# 21. RELEASE NOTES

Every substantive update requires Release Notes.

Release Notes must describe:
- what changed
- why
- scope
- important preserved systems
- new runtime/build metadata
- accepted limitations
- relevant QA

Do not let an update exist silently with no Release Notes entry.

A service-worker injection or overlay update should still be reflected in release notes.

---

# 22. GITHUB / DEPLOYMENT / RUNTIME VERIFICATION

This is a standing high-priority rule.

Never conflate:
1. local/package state
2. repository state
3. commit state
4. GitHub Actions Pages build
5. Pages artifact
6. live site
7. service worker/cache state
8. runtime behavior
9. Cloud Sync behavior

Required post-upload verification where tools allow:
- latest main commit
- exact changed files
- Pages run for exact commit
- run success
- artifact identity/digest when available
- exact Pages artifact inspection
- service-worker/build-info versions
- runtime load order
- preserved Cloud Sync protocol
- relevant internal Node/static harness
- for any change touching Learn/stage routing, execute the affected stage transition and destination renderer in a runtime smoke harness; syntax-only checks are insufficient
- for any assessment/quiz definition, question-bank, review-status, or selector change, execute the affected assessment selector/launch route with the real runtime data; matching question IDs, counts, or declared track mix alone do not prove the form can assemble
- browser runtime when environment allows

If graphical browser access is blocked by environment:
- state that limitation when graphical QA was explicitly requested
- do not infer the website is broken
- use artifact/static/runtime harness instead when an audit/verification was requested
- do not falsely certify graphical QA

## 22.1 Default verification priority — content/file-first unless audit is requested

As of 2026-10-01, the user's default workflow is **content-first and file-first, not verification-first**. Unless the user explicitly asks to audit the code, verify deployment/runtime behavior, or reports that something is not working:
- the assistant's primary responsibility is to put the requested instructional/content changes correctly into the files to the best of its ability;
- do not spend the majority of the task on GitHub Pages, artifact, service-worker, cache, browser, or live-runtime verification;
- do not ask the user to open pages, inspect the browser, confirm visuals, or perform acceptance checks after delivery;
- do not automatically run a full post-upload audit merely because files were uploaded;
- lightweight file-integrity checks that directly prevent malformed handoffs (for example syntax/parse checks, obvious missing-file checks, or package-filename checks) are still appropriate, but they must stay proportionate and secondary to content completion;
- if the user later encounters a defect, treat that report as the trigger to troubleshoot and repair it;
- if the user explicitly requests an audit/verification, then the deeper deployment/runtime/browser rules in this section become active for that audit.

This supersedes the former default assumption that every content update must be held open pending user-browser confirmation. A release may be described as **content-complete / files delivered** without browser confirmation, but do not mislabel untested runtime behavior as browser-verified.

`.nojekyll` is important to GitHub Pages root behavior and must not be omitted when required.

Service worker:
- versioned cache namespaces
- network-first for key HTML/JS/CSS where current design requires
- preserve prior accepted cache during transition when appropriate
- stale cache can make a correct upload appear broken
- verify injection/decorators, not only source file existence

---

# 23. FILE DELIVERY / UPDATE WORKFLOW

User prefers simple direct file delivery over complex workflows.

Do not default to Codex/credit workflows. User has explicitly rejected Codex/credit-heavy approaches for this project.

Package rules:
- user usually uploads replacement files manually to GitHub root
- provide correct replacement files
- canonical repo filenames must remain exact
- e.g. `service-worker.js` must remain exactly named
- do not rename canonical files merely to satisfy download naming preferences
- generated package/download names can use normal spaces where practical
- no nested wrapper folders when a flat repo-root replacement is intended
- do not upload the ZIP itself into the repo unless explicitly requested
- user extracts and uploads contained files

Historical dotfile note:
- there was an earlier temporary rule against filenames beginning with `.`, then user corrected that `.nojekyll` is allowed/needed
- current rule: preserve required dotfiles such as `.nojekyll`

Before handoff, default priority is:
- requested content is actually present in the correct files;
- canonical filenames and package shape are correct;
- basic syntax/parse/integrity checks are performed where quick and directly useful;
- Release Notes / governance updates required by scope are included;
- deeper functional/static harnesses, regression suites, deployment checks, and browser checks are **not default gates** unless the user explicitly asks for an audit/verification or the task itself is a runtime repair where a minimal focused check is necessary.

Never knowingly hand off an obvious fixable defect, but do not let broad QA work crowd out the requested content work.

---

# 24. AUDIT MODE VS CHANGE MODE

When the user asks for an audit:
- inspect actual current files/runtime
- do not modify unless explicitly told to make changes
- classify findings
- separate blocker/material/minor/optional
- distinguish package correctness from deployed correctness

When the user says “make the changes”:
- implement only the accepted scope
- preserve unrelated architecture
- prioritize putting the requested content/changes into the files correctly
- provide replacement files/package
- do **not** automatically convert change mode into a full code/runtime/deployment audit; run deeper regression/runtime verification only when explicitly requested or when the user has reported a failure that is being repaired

When user says content-only / placement-only:
- do not redesign UX, layout, aesthetic, branding, navigation, or mobile system

Week-by-week policy:
- avoid whole-site rebuilds
- work week-by-week unless explicitly directed otherwise
- Week 1 first, then subsequent weeks
- do not restart the entire course architecture each time

---

# 25. CURRENT ACCELERATED STUDY POLICY

Learner intends to move much faster than baseline schedule from late September 2026 through January 31, 2027.

Goal by Jan 31, 2027:
- CETa readiness
- job-ready electronics technician capability

This is a pacing/intensity goal, not authorization to rewrite the calendar.

Support:
- ahead-of-calendar access
- future completion credit
- accurate resume points
- no false overdue state
- hard mastery/evidence gates remain

Do not loosen learning standards merely to accelerate.

---

# 26. KNOWN HISTORICAL SUPERSESSIONS

Use this section to prevent old instructions from contaminating current decisions.

## 26.1 Career standard counts
- 78 Career standards = older baseline
- 81 Career standards = later reconstruction stage
- 95 Career standards = later accepted Career occupational-governance generation
- use current runtime/governance for live count

## 26.2 Runtime versions
- v16.3.2 was once frozen runtime baseline
- many accepted updates superseded it
- current runtime at this governance compile = v16.3.90

## 26.3 Media minimum model
- older “20 universal + 7 conditional” Required-media strategy = superseded
- current = complete concept coverage first, then remove redundancy

## 26.4 Visual model
- older Alfred-generated/source-grounded SVG/table/flow approach = superseded as default
- current = source-authentic-first, Alfred reasoning aid only where justified

## 26.5 Frozen status
- course was repeatedly “frozen” at prior milestones
- later explicit user requests reopened bounded scopes
- “frozen” means do not gratuitously change unrelated areas; it does not prohibit later explicit user-directed updates

## 26.6 Study Guide
- private upload/IndexedDB handling existed
- later user wanted a repo-hosted copy/no upload button
- treat current deployed state as source of truth while respecting copyright/distribution constraints

## 26.7 Verification-first workflow
- older governance treated post-upload deployment/artifact/runtime/browser verification as a default acceptance gate for every update
- as of 2026-10-01, that is superseded as the default workflow
- current default is content/file-first; full code/runtime/deployment/browser verification occurs when the user explicitly asks for an audit/verification or when troubleshooting a reported failure
- do not ask the user to perform routine browser acceptance checks after each update

---

# 27. USER COMPLAINTS / FAILURE MODES TO REMEMBER

These are not stylistic preferences; they indicate trust-breaking failure modes.

Do not:
- forget settled requirements after a new chat starts
- make user repeat project history
- prioritize CETa and “remember Career later”
- call a week accepted after only checking one track
- present information instead of teaching it
- use external resources to patch weak Alfred instruction
- dump links/media without context
- repeat the same whole short/general video across multiple lesson pages without distinct exact timestamp/chapter slicing; this is a material media-placement defect, not harmless redundancy
- place a video/read on a page because it is merely related to the week; the source must directly and sufficiently support that page's subject
- place newly assigned lesson-related Study Guide pages under optional “another explanation/reference”; lesson-mapped Study Guide pages are Required on first assignment
- render printable study-math as plain ASCII-style expressions when true typeset notation is available; printed formulas should visually match the clean textbook-style math used in chat
- over-audit trivial polish after a clear GO
- make verification/testing the main task when the user asked for content/file changes
- routinely ask the user to open pages or confirm browser behavior after delivery; the user will report defects when encountered
- claim deployment without checking deployment when a deployment claim is actually being made
- assume GitHub upload means live site
- treat a passing Pages artifact or Node/static harness as proof that the user’s active browser has actually received the new runtime; client service-worker/cache transition behavior is part of deployment correctness
- hand off files that were not internally tested
- treat JavaScript syntax success as proof that an interactive stage transition works; destination renderers must actually execute
- treat an assessment definition’s listed question IDs or declared CETa/Career mix as proof that the assessment can launch; the selector’s eligibility contract (including canonical review status) must be executed
- repair only one field of a known assessment eligibility contract when stale/legacy objects may exist; validate/reconstruct presence, track, review status, masteryEvidence, minWeek, and the test definition together
- silently omit Release Notes
- redesign unrelated UX during a targeted content update
- make AI/redrawn diagrams when a better real/source-authentic visual exists
- claim physical proficiency from simulation/written work
- hide Career teaching only in governance data without rendering it
- rely on filenames/old documentation instead of actual current files
- change the calendar merely because the user studies ahead

---

# 28. FUTURE / DEFERRED IDEAS THAT HAVE BEEN DISCUSSED

Treat these as ideas, not automatically authorized work.

- continue source-authentic visual retrofit beyond Week 2, starting Week 3
- source-authentic visuals should cover both CETa and Career simultaneously
- continue week-by-week lesson redesign under current pedagogy
- continue full visual audits as each week is touched
- use real university/manufacturer/government imagery where licensing permits
- use a single long video with timestamps across multiple sections where pedagogically useful
- keep improving Teaching Media placement and exact concept slicing
- preserve professional Engineering Library references
- maintain documents when live course behavior changes materially
- possible repository cleanup of retired legacy visual files only if explicitly authorized
- continue accelerated-study support without calendar rewrite
- later outside-literature/Study Guide refinements only when they add nonredundant value
- continue technician/job-readiness strengthening where Career evidence is weak

Do not implement deferred ideas merely because they appear here. User request still determines active scope.

---

# 29. CURRENT WEEK 2 VISUAL BASELINE

## v16.3.85 — CETa
Week 2 CETa concept visuals moved to public-domain/CC0 source-authentic imagery:
- series/parallel topology
- series resistors
- parallel resistors
- KCL
- KVL
- mixed network
- ideal + loaded divider

Technical meaning verified independently.

## v16.3.86 — Career
All five Week 2 Career pages received source-authentic occupational/equipment imagery:
- multimeter troubleshooting
- physical breadboard
- PCB connectivity testing
- resistor testing
- board repair
- continuity verification

Alfred decision/documentation aids were preserved where they teach reasoning rather than physical appearance.

Week 2 is considered visually complete only because **both tracks** passed.

---

# 30. MANDATORY PRE-WORK CHECKLIST FOR EVERY FUTURE ALFRED UPDATE

Before changing anything:

- [ ] Read this file.
- [ ] Identify active user scope.
- [ ] Identify latest accepted runtime/commit/QA relevant to scope.
- [ ] Determine whether request affects CETa, Career, or both.
- [ ] If broad instructional request, default to both.
- [ ] Check historical supersessions.
- [ ] Preserve stable IDs / progress / Cloud Sync / calendar unless explicitly changed.

During implementation:

- [ ] Alfred teaches first.
- [ ] Beginner prerequisites are explicit.
- [ ] CETa and Career both receive parity review.
- [ ] Career has real technician behavior/evidence.
- [ ] Visuals follow source-authentic-first policy.
- [ ] Media/literature/Study Guide do not patch missing Alfred teaching.
- [ ] Learner-facing rendering matches governance data.
- [ ] Physical/simulation boundary is honest.
- [ ] No unrelated redesign.
- [ ] Release Notes updated.

Before handoff — **default content/file mode**:

- [ ] requested content/changes are present in the correct canonical files.
- [ ] CETa + Career content parity is respected where scope is broad.
- [ ] current `ALFRED PROJECT GOVERNANCE.md` included in package when the package scope requires it.
- [ ] package contains correct root filenames.
- [ ] basic syntax/parse/integrity checks are run where quick and directly useful.
- [ ] Cloud Sync protocol / stable IDs / protected architecture are not knowingly altered outside scope.
- [ ] no routine user-browser acceptance request is made.

Only when the user explicitly asks to **audit / verify / make sure it works**, or when troubleshooting a reported failure, activate the deeper QA checklist as relevant:
- [ ] JS syntax checks.
- [ ] Data/load-order checks.
- [ ] relevant runtime/static harness.
- [ ] if Learn/stage routing changed, execute the affected stage transition and destination renderer.
- [ ] if assessment data/selector/review status changed, execute the affected selector/launch route.
- [ ] for compatibility/hotfix assessment repairs, adversarially test the repaired eligibility contract when warranted.
- [ ] regression check.
- [ ] build-info/service-worker/cache checks.
- [ ] deployment/artifact/live-runtime checks if deployment verification was requested.
- [ ] user-browser behavior is authoritative if the user reports a real failure.

After user upload in normal content/file mode:
- [ ] do not automatically start a deployment/runtime/browser audit.
- [ ] do not ask the user to test or visually confirm the update.
- [ ] move on unless the user requests verification or later reports a defect.

---

# 31. GOVERNANCE FILE MAINTENANCE RULE

This file is a living project artifact.

## 31.1 Mandatory read-before-anything rule

For **every Alfred-related user request**, the first project action is to read the current governance file.

This includes requests to:
- discuss an idea,
- audit a week,
- fix a bug,
- change a visual,
- answer a question about the current site,
- generate replacement files,
- review content,
- inspect deployment,
- recommend a future feature,
- continue prior work.

Do not skip this because the current chat is long, because the assistant believes the rules are already remembered, or because the request appears small. The file is the rubric for what the assistant is and is not allowed to do.

The user explicitly authorizes and encourages frequent back-reference to this file.

## 31.2 Proactive governance capture

The user has delegated responsibility to the assistant to identify governance-worthy statements during normal conversation.

When the user states something that materially affects:
- project purpose,
- pedagogy,
- Career/CETa priorities,
- UX behavior,
- visual/media rules,
- workflow,
- QA,
- acceptance criteria,
- future plans,
- dislikes/failure modes,
- durable preferences,

the assistant should proactively flag it and update this file.

The assistant may say, in substance: “That is important enough to preserve in governance; I’m updating the file.”

The user does **not** require perfect capture of every incidental sentence. The standard is to preserve durable requirements and decisions that would matter in a future chat.


Every future Alfred update package must include **this exact filename**:
`ALFRED PROJECT GOVERNANCE.md`

When the user:
- adds a requirement,
- dislikes something,
- approves a new standard,
- reverses an old rule,
- describes a future idea,
- changes workflow,
- identifies a repeated failure,
- clarifies project purpose,

update this file in the same release batch.

Do not create a new governance filename every release. Replace/update the same canonical file.

Governance updates are **cumulative merges**. Never generate a new governance file from an older Library/package snapshot that drops newer accepted rules. Before packaging, diff the candidate governance file against the latest deployed and latest persistent copies; any removed rule must be an explicit user-approved supersession.

Recommended change entry format:

`YYYY-MM-DD | AREA | ADD / MODIFY / SUPERSEDE / DEFER | concise rule`

This keeps Git history as the change log while this file remains the current compact truth.

---

## 31.4 Static direct-entry self-sufficiency

Required assessment, lab, and completion behavior must not depend solely on service-worker HTML injection. If a learner directly opens a critical route on a fresh/uncontrolled client, the static HTML/script stack must still load the canonical current runtime contract. Service-worker injection may remain as compatibility/fallback support, but it is not the sole owner of required Week/Career/CETa assessment or lab state.

## 31.5 Checksum scope integrity

`SHA256SUMS.txt` at repository root is the repository-wide checksum ledger. Never overwrite it with hashes for only the files in an update package. Package-only hashes must use a package-specific filename such as `PACKAGE_SHA256SUMS.txt`. When a release changes the repository checksum ledger, regenerate the complete root ledger from the final candidate tree and validate every listed digest.

---

# 32. GOVERNANCE CHANGE LOG

2026-10-05 | WEEK 3 H5.2 MEDIA LINK INTEGRITY | REPAIR | Explicit post-upload audit confirmed H5.1 structure/placement behavior but found the required Keysight Out-of-Cal pass/fail video pointed to the wrong/unverified YouTube ID and the Learn/service-worker/build metadata still identified the active media layer as H4. H5.2 switches the video to Keysight's verified `UsIZx00HJmE` source, adds a required-link integrity guard for that video plus the NEETS NAVEDTRA 14188A reading, and aligns Learn cache-busting, service-worker cache identity/injection, and build-info to H5.2. No teaching sequence, Study Guide assignment, assessment, lab, stable-ID, or Cloud Sync change. Week 3 may refreeze after H5.2 is uploaded.  
2026-10-05 | WEEK 3 H5 AUDIT | REPAIR | Targeted audit confirmed H5 fixed duplicate videos (16 distinct video IDs/URLs + 16 Required written sources) but found that mapped Chapter 19 Study Guide slices were being hidden instead of promoted to Required, the required NEETS Module 16 `maritime.org` URL returned 404, and the root SHA256SUMS ledger was stale after H5. H5.1 promotes all four mapped Week 3 Study Guide slices to Required on first assignment with later reuse/backlink behavior, replaces NEETS with the accessible NAVEDTRA 14188A PDF, and regenerates the repository checksum ledger.  
2026-10-05 | WEEK 3 H5 MEDIA PLACEMENT REPAIR | IMPLEMENT | Rebuild Week 3 lesson media across both CETa and Career after the H4 freeze failure. H5 uses 16 distinct page-specific video sources across the 16 teaching pages (no repeated whole-video source/URL), 16 page-specific Required written readings, explicit chapter/time slicing for the one long methodical-fault-finding video, and a structural duplicate-video guard. It also filters lesson Study Guide cards to Required records only; an already-Required record may reappear later only as review/backlink. Week 3 remains reopened until the H5 replacement is uploaded/accepted; this is a content repair, not a cosmetic change.  
2026-10-04 | WEEK 3 CONTENT FREEZE | SUPERSEDE / REOPEN | The 2026-10-01 Week 3 CONTENT_FROZEN decision is superseded after the user found repeated whole-video placements on adjacent CETa pages and similar H4 reuse across Career. Week 3 is reopened for H5 teaching-media placement repair; H5 must use page-specific sufficient media across both tracks and preserve existing teaching/assessment/lab architecture.  
2026-10-04 | TEACHING MEDIA / VIDEO REPETITION | ADD | A lesson-page video must directly support that page's exact topic. Do not repeat the same whole short/general video across pages. A long/structured video may be reused only when each placement specifies a different exact timestamp/chapter/segment; audit duplicate video source IDs/URLs before content freeze.  
2026-10-04 | STUDY GUIDE PLACEMENT | MODIFY | Any exact Study Guide pages mapped to lesson content are Required reading on first assignment. They may appear under optional “another explanation/reference” only as a clearly labeled secondary reuse after those exact pages were already Required. Do not map book pages merely to increase coverage.  
2026-10-01 | WEEK 3 CONTENT FREEZE | ACCEPT | Final major-issues-only content audit = PASS. Week 3 is CONTENT_FROZEN under the current content/file-first workflow: CETa PASS, Career PASS, CETa↔Career timing PASS, teaching-media placement PASS, teaching-method mix PASS, and LAB-003 evidence/practical boundary PASS. All 16 teaching pages have Alfred teaching + source-authentic visual + bounded video/demo + bounded written reinforcement + retrieval/application; the week also includes worked examples, guided practice, independent scenarios, teach-back, semantic tasks, lab evidence, and mastery/repair. Minor media-slicing or wording polish does not reopen the week. Reopen only for a later major instructional defect, materially broken/missing required resource, reported runtime defect requiring targeted repair, or explicit user request.  
2026-10-01 | WORKFLOW / QA PRIORITY | SUPERSEDE | Default Alfred work is now content-first/file-first. Unless the user explicitly requests a code/runtime/deployment audit or reports a failure, prioritize putting the requested content correctly into the files, keep verification proportionate and secondary, do not automatically perform full post-upload Pages/artifact/browser QA, and do not ask the user to open pages or confirm behavior. The user will report defects when encountered; deeper verification is explicit audit/troubleshooting mode.  
2026-10-01 | WEEK 3 H4 DEPLOYMENT | VERIFY | Main commit `e0d98390cc9e3ef1c9151c6cd2985b3766fbf00d` deployed successfully in GitHub Pages run `36879502211`. The generated Pages artifact matches all 10 H4 package files exactly; 110/110 top-level JavaScript syntax checks pass; repository checksum ledger verifies 454/454; deployed H4 runtime = `VERIFIED_PASS`; all 16 Week 3 teaching pages resolve exactly 1 video/demonstration + 1 written reading/reference with 16/16 source-authentic visuals; Week 3 mastery remains 14 = 7 CETa + 7 Career; LAB-003 remains 6 = 3+3 with 10 evidence checkpoints; Week 2 remains 12 = 6+6; H4 service-worker/cache transition passes with 208/208 precache targets and Cloud Sync protocol 2 preserved. Deployment/artifact/runtime gate = PASS; real-client Week 3 CETa + Career content-card confirmation remains required before final freeze.  
2026-10-01 | WEEK 3 H4 MULTIMODAL CONTENT | IMPLEMENT | Internal H4 candidate gives all 16 Week 3 CETa/Career teaching pages a purposeful page-level combination of Alfred teaching, source-authentic visual/diagram, bounded video/demonstration, bounded reading/reference, and retrieval/application. Exact point-of-use media = 32 placements (16 video + 16 reading); Career receives full parity. Specialist-tool breadth remains deferred. Deployment/artifact + real-client content acceptance remain required before freeze.  
2026-10-01 | WEEK 3 H3 DIRECT ENTRY | REPAIR | Internal execution of the deployed H2 artifact found that fresh/uncontrolled `quiz.html`, `assessments.html`, and `labs.html` still exposed pre-H2 Week 3 state until service-worker injection. H3 statically loads the Week 3 remediation/H2 compatibility layers on those critical routes, bumps cache/build metadata, and requires redeployment/client verification before freeze.  
2026-10-01 | STATIC DIRECT-ENTRY SELF-SUFFICIENCY | ADD | Critical assessment/lab/completion routes must be canonical from their static HTML/script stack on a fresh direct load; service-worker injection may be fallback compatibility but not the sole runtime owner.  
2026-10-01 | CHECKSUM SCOPE INTEGRITY | REPAIR | Root `SHA256SUMS.txt` is repository-wide and must never be replaced by package-only hashes. Package-only checksum manifests use a distinct package filename; root checksum updates must be fully regenerated and validated.  
2026-10-01 | WEEK 3 H2 DEPLOYMENT | VERIFY | Main commit `8f6f23232804eb84af547262bb7d6f035bcbfc1e` deployed successfully in GitHub Pages run `36819589355`. The generated Pages artifact matches the H2 package SHA-256 hashes for `week3-final-acceptance-v16.3.83.js`, `release-notes-v16.3.90.js`, `ALFRED PROJECT GOVERNANCE.md`, the H2 QA report, and the upload README. Deployment/artifact gate = PASS; real-client fresh/stale runtime acceptance remains PENDING, so Week 3 is not frozen yet.  
2026-09-30 | WEEK 3 READINESS H2 | REPAIR | Apply source-authentic visuals to both Week 3 tracks, repair the Week 2/Week 3 question-ID collision, define Week 3 mastery as actual 7 CETa / 7 Career, and define LAB-003 knowledge as actual 3 CETa / 3 Career while preserving the ten-checkpoint evidence gate. Package remains pending deployment/client QA.  
2026-09-30 | ASSESSMENT ID UNIQUENESS | ADD | Assessment IDs are course-global identities. No two different active question objects may reuse one ID; acceptance must validate the actual object behind every selected ID and reconcile declared track mix against actual question tracks.  
2026-09-30 | MOBILE CLOUD SYNC TRUTH | ADD | A connected mobile/non-Progress page must pull and merge protocol-2 cloud progress before presenting synced completion as current; server-health status alone is not proof that learner progress is synchronized. Home Course Completion must use the same classroom completion truth as Student Progress, not calendar-event status percentage.  
2026-09-30 | WEEK 2 ASSESSMENT RUNTIME | ACCEPT | v16.3.90 accepted only after deployed full-script selector verification and successful user-browser confirmation; 12-question weekly mastery form = 6 CETa + 6 Career.  
2026-09-30 | PRINT STUDY MATERIAL MATH TYPOGRAPHY | ADD | Printable Alfred study notes/PDFs must typeset equations like the chat/textbook view using real fractions, subscripts, Greek symbols, operators, and centered display math; do not degrade equations into ASCII-like inline strings unless unavoidable.  
2026-09-30 | GOVERNANCE MERGE INTEGRITY | REPAIR | v16.3.90 governance must preserve all v16.3.89 client-runtime/cache acceptance rules while adding the v16.3.90 full assessment-eligibility and adversarial-hotfix rules; new governance updates are cumulative, not replacements.  
2026-09-30 | ASSESSMENT ELIGIBILITY CONTRACT | ADD | A repaired question is not considered eligible based on review status alone; validate/reconstruct presence, track, canonical review status, masteryEvidence, minWeek, and containing test definition together.  
2026-09-30 | HOTFIX ADVERSARIAL QA | ADD | Assessment compatibility repairs must be tested against individually missing/corrupted target items, not only the healthy current artifact.  
2026-09-30 | CLIENT RUNTIME ACCEPTANCE | ADD | A user-visible browser failure overrides artifact/static/harness PASS; do not freeze until the client service-worker/cache/update path is repaired and reverified.  
2026-09-30 | ASSESSMENT SOURCE CONTRACT | REPAIR | Week 2 Career mastery questions must carry the canonical active review status at their authoritative source; overlays may provide compatibility but cannot be the sole requirement for assessment launch.  
2026-09-30 | CACHE TRANSITION QA | ADD | Service-worker releases that alter required runtime code must verify stale-client transition behavior, not only the new artifact in isolation.  
2026-09-29 | WEEK 2 ASSESSMENT RUNTIME | REPAIR | Restore CQ1204–CQ1209 to the canonical `editorially-reviewed` selector status so the intended 12-question Week 2 mastery form assembles as 6 CETa + 6 Career.  
2026-09-29 | QA / ASSESSMENT LAUNCH | ADD | Any assessment-bank, review-status, definition, or selector change must execute the affected selector/launch route with real runtime data; IDs/counts/declared mix alone are not acceptance evidence.  
2026-09-29 | GUIDED PRACTICE RUNTIME | REPAIR | Restore the missing `practiceSectionPlan()` and `practiceViewRecord()` helpers so Continue to Practice renders Stage 5 reliably; derive Practice pages from current CETa + Career lesson data and preserve saved Practice state.  
2026-09-29 | QA / STAGE TRANSITIONS | ADD | Any release touching Learn/stage routing must execute the affected transition and destination renderer in a runtime smoke test; syntax-only JavaScript checks are insufficient.  
2026-09-29 | GOVERNANCE INVOCATION | ADD | Every Alfred-related request must begin by reading the current governance file before analysis or action.  
2026-09-29 | PROACTIVE MEMORY CAPTURE | ADD | Assistant owns responsibility for identifying governance-worthy user statements and updating the file without waiting to be prompted.  
2026-09-29 | MEMORY EXPECTATION | CLARIFY | User does not require perfect recall of every past conversation; durable project requirements should be captured in governance when recognized.  
2026-09-29 | CAREER PARITY | ADD | No week can be accepted/frozen without separate CETa and Career results.  
2026-09-29 | CONTINUITY | ADD | Do not rely on chat memory alone; governance file + latest runtime/QA are required sources.  
2026-09-29 | VISUALS | SUPERSEDE | Source-authentic public-domain/CC0/permissive visuals now preferred over Alfred technical redraws.  
2026-09-29 | VISUAL LAST-RESORT RULE | MODIFY | Alfred-created instructional visuals are allowed only after a serious search fails to find an equally useful or better credible source visual; search first, create last.  
2026-09-29 | CAREER VISUALS | ADD | Source-authentic visual standard applies equally to Career; real occupational/equipment context is required where educationally useful.  
2026-09-29 | GOVERNANCE FILE | ADD | Every future update package must include the updated canonical governance file.  
2026-09-26 | PACING | ADD | Jan 31, 2027 is an acceleration goal; do not rewrite official calendar.  
2026-09-23 | WORKFLOW | MODIFY | Prefer direct replacement files/package over complex workflow/Codex approach.  
2026-09-23 | WEEKLY DEVELOPMENT | MODIFY | Week-by-week changes; avoid full-site rebuilds unless explicitly requested.  
2026-09-22 | MEDIA | SUPERSEDE | Complete Required concept coverage first; remove redundancy second.  
2026-09-22 | NAVIGATION | ADD | Page X of Y, named selector, numeric jump, Guided Practice navigation, saved progress preservation.  
2026-09-21 | QA | ADD | Every delivered package gets build→test→repair→reaudit→package/integrity verification.  
2026-09-21 | LITERATURE | ADD | Outside literature is an independent learning channel with exact purpose/placement/backlinks.  
2026-09-20 | CALENDAR | MODIFY | Calendar modernized around current CETa + Career teaching flow while preserving 31 weeks / 125 event IDs.  
2026-09-19 | GLOSSARY | MODIFY | single-click popup, double-click glossary, hover removed, broader technical vocabulary, limited repetition.  
2026-09-18 | VIDEOS | ADD | High-quality YouTube teaching allowed and should be integrated contextually.  
2026-09-15 | PEDAGOGY | ADD | “Alfred must actually teach me” / beginner-first / standalone asynchronous instruction.  
2026-09-11 | TRACKER | REMOVE | Standalone tracker chores removed; use outcomes/progress/catch-up logic instead.  
2026-09-11 | DESIGN | ADD | Real-university, no-login, mobile-responsive institutional website.  
2026-09-10 | BRANDING | ADD | Alfred University / grizzly / green-gold-cream / professional 1998 institutional identity.

---

# 33. CONTEXT AUDIT COVERAGE / LIMITATION

This governance compilation was created from:
- the current project conversation context,
- retrievable prior ChatGPT conversations related to Alfred,
- recoverable project-file context,
- accepted repository/runtime/QA facts already present in project history,
- the current Week 2/Week 3 thread.

Recovered conversation themes included:
- original university branding/site creation
- tracker removal
- curriculum rebuilds
- beginner-first teaching
- 31-week architecture
- Career/CETa parity
- labs/evidence/readiness
- media/video
- literature
- Study Guide
- glossary
- navigation
- ADHD/autism supports
- calendar
- documents
- release notes
- GitHub deployment/service worker
- direct file workflow
- Week 2/3 redesigns
- current source-authentic visual policy
- repeated Career-deprioritization failure

No system guarantees that every historical chat on the account is always retrievable in every session. Therefore this file is designed to convert recoverable conversation history into durable project state so future work does not depend on full chat retrieval.

If later conversations expose an older requirement that is missing here, add it to this file immediately and mark any superseded rule.

---

# 34. ONE-SENTENCE PROJECT LAW

**Alfred must function like a real beginner-first electronics university course that teaches both CETa knowledge and technician job performance with equal seriousness, authentic evidence, and strong source-grounded media/visuals; default development is content/file-first, with deep runtime/deployment verification performed when the user explicitly requests an audit or reports a failure, and the user should not be made to repeatedly re-explain the project.**
