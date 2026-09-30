# ALFRED PROJECT GOVERNANCE
## Canonical living source of truth for Alfred University AU-ESET 301

**Purpose:** Durable project memory for all future ChatGPT work on the Alfred University AU-ESET 301 website/course.  
**Audience:** Primarily ChatGPT / future project sessions. Human readability is secondary to completeness and retrieval efficiency.  
**Update rule:** Every future website update package must include the current version of this exact file, with any new user requirements, reversals, complaints, accepted decisions, or future ideas added before handoff.  
**Filename:** `ALFRED PROJECT GOVERNANCE.md`  
**Current governance compilation date:** 2026-09-29  
**Current site runtime at compilation:** v16.3.89  
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

Future Week 3 visual work must apply the new Week 2 source-authentic visual standard to both tracks.

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
- state that limitation
- do not infer the website is broken
- use artifact/static/runtime harness instead
- do not falsely certify graphical QA

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

Before handoff:
- build
- syntax check
- functional/static harness
- regression check
- package
- integrity check
- disclose unverified environment limits

Never knowingly hand off a fixable defect.

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
- verify regressions
- provide replacement files/package

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
- current runtime at this governance compile = v16.3.89

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
- over-audit trivial polish after a clear GO
- claim deployment without checking deployment
- assume GitHub upload means live site
- treat a passing Pages artifact or Node/static harness as proof that the user’s active browser has actually received the new runtime; client service-worker/cache transition behavior is part of deployment correctness
- hand off files that were not internally tested
- treat JavaScript syntax success as proof that an interactive stage transition works; destination renderers must actually execute
- treat an assessment definition’s listed question IDs or declared CETa/Career mix as proof that the assessment can launch; the selector’s eligibility contract (including canonical review status) must be executed
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

Before handoff:

- [ ] JS syntax checks.
- [ ] Data/load-order checks.
- [ ] relevant runtime/static harness.
- [ ] if Learn/stage routing changed, execute the affected stage transition and destination renderer (not only syntax-check it).
- [ ] if assessment data/selector/review status changed, execute the affected quiz selector and confirm the requested form assembles with the intended CETa/Career mix.
- [ ] regression check.
- [ ] build-info/service-worker revision.
- [ ] Cloud Sync protocol preserved.
- [ ] current `ALFRED PROJECT GOVERNANCE.md` included in package.
- [ ] package contains correct root filenames.
- [ ] disclose environment-limited graphical/runtime checks.
- [ ] do not call accepted until CETa + Career both pass.

After user upload:

- [ ] verify latest main commit
- [ ] verify exact files
- [ ] verify Pages run for exact commit
- [ ] verify artifact
- [ ] inspect runtime artifact
- [ ] verify service worker/cache/build-info
- [ ] verify relevant learner-facing behavior
- [ ] if the user reports a real browser failure that contradicts artifact/static/harness QA, treat the browser failure as authoritative evidence that acceptance is incomplete; investigate client cache/service-worker/update state rather than freezing the release.
- [ ] only then freeze/accept

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

Recommended change entry format:

`YYYY-MM-DD | AREA | ADD / MODIFY / SUPERSEDE / DEFER | concise rule`

This keeps Git history as the change log while this file remains the current compact truth.

---

# 32. GOVERNANCE CHANGE LOG

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

**Alfred must function like a real beginner-first electronics university course that teaches both CETa knowledge and technician job performance with equal seriousness, authentic evidence, strong source-grounded media/visuals, stable learner UX, and rigorously verified releases—without making the user repeatedly re-explain the project.**
