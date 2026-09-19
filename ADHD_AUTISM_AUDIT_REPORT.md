# Alfred University AU-ESET 301
## Full ADHD / Autism Executive-Function, Focus, Study-Behavior, and Assignment-Completion Audit — v16.3.29 Baseline

**Audit date:** September 19, 2026  
**Current audited runtime:** v16.3.29  
**Audit type:** Native rendered-artifact + source-code + behavioral-flow + research synthesis  
**Site files modified:** **None**

---

# Executive conclusion

Alfred does **not** need another whole-site redesign, another productivity dashboard, more gamification, or a large collection of new ADHD features.

The current system already contains an unusually strong executive-function support foundation: a calm and predictable visual system, current-week orientation, a dedicated Study workflow, Quiet Mode, Focus Mode, spaced-review infrastructure, a Curiosity Parking Lot, explicit weekly schedules, progressive disclosure, a glossary, Teaching Media, labs, mastery evidence, and clear separation between teaching, practice, progress, and assessment.

The largest current problem is much narrower and more important:

> **The amount and sequencing of information presented inside the longest Classroom teaching stages—especially Week 1—can overwhelm the exact learner Alfred is intended to support.**

The native audit found that Week 1's CETa lesson contains approximately **6,008 words inside the classroom content**, **16 numbered teaching blocks**, **181 glossary links**, **7 figures**, and a rendered full-page height of roughly **23,900 pixels** on desktop. The first substantial learner interaction occurs roughly **17,700 pixels down the page**. Across all 31 CETa lessons, the median lesson is about **1,837 words**; Week 1 is therefore roughly **3.3 times the median**.

That is the single clearest explanation for the user's report that the material is difficult to sit through and read even though the course is technically well built.

The second major problem is **workflow sequencing**. The current Home experience makes **Start today's study** the dominant action, but the Study page is fundamentally a retrieval/diagnostic workflow and explicitly says it does not replace Classroom. On a brand-new week, Alfred can therefore direct the learner toward retrieval questions on material that has not yet been taught. The next-action system needs to become state-aware: unseen required instruction should lead to Classroom; due retrieval or a saved Study session should lead to Study.

The third major issue is a small but concrete **Focus Mode regression**. The active Study session correctly hides most of the page, but the newer Study shortcut row and Vocabulary Study Lab remain visible. This contradicts the intended promise that Focus Mode shows only the active session.

The fourth issue is **resume granularity**. Study sessions resume well, but a learner interrupted halfway through a long Classroom lesson returns to the stage, not necessarily to the precise concept segment where attention stopped. Once lessons are segmented, Alfred should remember the exact segment.

The fifth issue is behavioral rather than instructional: Alfred's builder/admin surfaces can become a productive-feeling substitute for coursework. The correct response is not a complex new bug tracker. It is a lightweight **Student Mode / Builder Mode boundary**, an issue-parking box, and a simple rule that nonblocking improvements wait for a scheduled maintenance window.

The minimum effective intervention is therefore **five targeted changes**, not a redesign:

1. Segment long Classroom lessons into small, resumable concept sections while preserving all instructional content.
2. Put a small retrieval/application action much earlier in long lessons rather than after thousands of words.
3. Make the global next action state-aware so new material routes to Classroom and due review routes to Study.
4. Repair Focus Mode so only the active Study session remains visible.
5. Separate Student Mode from Builder/Admin work and provide a one-field issue parking mechanism.

Everything else should wait until those five changes are tested in actual study use.

---

# Audit methodology

The audit used the **exact current GitHub Pages deployment artifact** rather than relying on screenshots or inferring appearance from source code.

The artifact was unpacked into the working environment and its actual HTML, CSS, JavaScript, data, images, and current runtime files were used for the visual and structural checks.

Because this execution environment blocks normal Chromium navigation to localhost and `file://` pages, pages were rendered from the exact deployment bytes in self-contained browser documents. This is the same native-artifact technique previously used in Alfred's visual acceptance audits. It bypasses the network-navigation layer, not the actual layout, CSS, JavaScript, images, or course data.

The audit included:

- current Home, Study, Classroom, Calendar, Practice, Progress, Glossary, and representative supporting pages;
- desktop and mobile Classroom views;
- all seven Week 1 Classroom stages;
- a started Study session in Focus Mode;
- source inspection of Study, Classroom, navigation, UX, calendar, progress, glossary, and related runtime logic;
- quantitative rendering of **62 lesson stages**: 31 CETa lessons and 31 Career lessons;
- current Week 1 lesson density, paragraph length, glossary anchors, visuals, controls, and interaction placement;
- current Week 1 calendar and study-plan logic;
- source-vs-render comparison.

The browser sandbox does not reproduce the live Cloud Sync backend, and direct phone operating-system behavior cannot be tested from this environment. Those areas were inspected structurally rather than claimed as full live-device tests.

---

# Research foundation

## Strongest evidence used

### Structured time management, organization, and planning

Mary Solanto's randomized trial of 88 adults with ADHD tested a 12-week metacognitive intervention specifically teaching time management, organization, and planning. This is directly relevant to Alfred: these behaviors should be explicitly scaffolded rather than assumed.

The ACCESS randomized clinical trial involved 250 college students with ADHD and combined cognitive-behavioral treatment with individual mentoring. It produced significantly greater improvements in ADHD symptoms and executive functioning than delayed treatment.

A 2026 meta-analysis of 14 randomized trials found CBT produced significant improvements in adult ADHD symptoms and executive functioning.

A 2026 pragmatic randomized trial involving adults with impaired time management associated with ADHD, autism, or other conditions found improvements in time management, organization/planning, self-efficacy, and related functioning in both active treatment conditions.

**Design implication:** Alfred should externalize planning, sequencing, time visibility, and resumption instead of making the learner supply these functions from memory.

### Retrieval practice and spacing

The contemporary learning-science literature strongly supports retrieval practice and distributed practice for durable retention.

**Design implication:** Alfred's Study review queue, active recall, mastery checks, and spaced-review direction should be preserved. The problem is not that Alfred asks the learner to retrieve; the problem is *when* retrieval is placed relative to new instruction and how long passive instruction lasts before the first active action.

### Phone distraction

A 2025 meta-analysis synthesized 27 randomized experiments involving 2,245 participants and found a medium negative effect of mobile-phone distraction on immediate recall.

**Design implication:** the deep-study workflow should primarily reduce exposure to the phone rather than attempt to fight the phone using more notifications. Device/environment changes belong outside Alfred; Alfred should offer only a light pre-study cue.

### Cognitive load and neurodivergence

A 2024 study of 231 learners reported significantly higher perceived extraneous cognitive load among neurodivergent students in online learning, with ADHD traits positively predicting extraneous load.

This is observational rather than causal, but it reinforces the importance of reducing interface and presentation burden that does not contribute to learning.

### Autism and individual variability

A review of 124 studies on executive functioning in autistic adults found substantial heterogeneity across executive-function domains and measures. A 2025 systematic review of technology for autistic university students likewise found potentially useful benefits but substantial variation in student profiles and intervention quality.

**Design implication:** do not build one rigid "autism mode." Keep supports configurable and predictable.

### Implementation intentions

A recent meta-analysis covering 642 tests found that if-then implementation intentions can improve cognitive, affective, and behavioral outcomes, with stronger effects when plans have a contingent if-then form and are rehearsed.

**Design implication:** a short pre-session rule such as "If I begin an Alfred deep-study session, my phone goes on Focus and stays outside reach until the segment is complete" is more defensible than adding constant reminders.

### Dissertation evidence used as supporting, not primary, evidence

Erik Rodriguez's dissertation on college students with ADHD is especially relevant to Alfred. Students described organizational tools and strategies that themselves created additional work. This supports Alfred's existing anti-overengineering philosophy and argues strongly against adding a complicated productivity system.

---

# What Alfred already does well

## Calm, predictable visual system — KEEP

The visual system is mature and generally well suited to a learner who benefits from predictability. The green/gold/cream system is restrained, institutional rather than game-like, and visually consistent across pages.

The previous whole-site UX work correctly rejected forced streaks, fake urgency, autoplay, excessive animation, and notification pressure. That decision should remain permanent.

## Current-week orientation — KEEP

The Classroom clearly exposes:

- current week;
- week topic;
- seven-stage structure;
- current stage;
- purpose balance;
- weekly mastery target;
- next action.

This is good externalization of state.

## Quiet Mode — KEEP

Quiet Mode is useful because it allows a calmer representation without deleting material. It should remain a preference rather than become mandatory.

## Study active-recall architecture — KEEP

The Study workflow is conceptually strong:

Retrieve → Diagnose → Repair → Practice → Teach Back → Next Move.

It prioritizes weak concepts, avoids unnecessary rereading when recall is already strong, and gives the learner an "I'm Stuck" path.

## Curiosity Parking Lot — KEEP

This is particularly well matched to the actual distraction pattern identified in this project. It gives a place to capture a thought without pursuing it immediately.

The same mechanism should be reused for **website improvement ideas**.

## Saved Study session — KEEP

An unfinished Study session persists its selected concepts, mode, current step, and an optional "Next time, start here" note. This is exactly the type of interruption-resilient scaffolding Alfred should provide.

## Spaced review / Vocabulary Study — KEEP

The course already externalizes some review scheduling rather than making the learner maintain an independent flashcard system. Preserve this.

## Calendar structure — KEEP

Week 1 currently has explicit Prep, Learn, Practice, and Lab events. The Learn block provides a minute-by-minute learning plan, and the system explicitly warns against unhealthy make-up marathons.

That is one of Alfred's strongest executive-function supports.

## Glossary depth — KEEP

The expanded 599-term glossary is valuable and should not be reversed. The problem is not that terms have definitions. The problem is how much material is simultaneously visible in a very long lesson.

## Dedicated Progress / Mastery / Practice owners — KEEP

These pages are correctly separated. Do not merge everything into a single "ADHD dashboard."

---

# Biggest current problems

## CRITICAL 1 — Long Classroom instruction is not sufficiently segmented

### Native evidence

Week 1 CETa lesson:

- classroom-content words: approximately 6,008;
- full rendered page: approximately 23,879 px on 1440×1000 desktop;
- mobile rendered height: approximately 47,284 px;
- numbered teaching blocks: 16;
- glossary anchors: 181;
- figures: 7;
- paragraphs over 80 words: 11;
- longest paragraph: roughly 193 words;
- first visible form/input interaction: approximately y=17,720 px;
- first integrated-check region: approximately y=17,534 px.

Across all 31 CETa lessons:

- minimum: ~1,226 words;
- median: ~1,837;
- mean: ~2,027;
- maximum: Week 1 at ~6,008.

Week 1 is roughly 3.3 times the median CETa lesson.

Week 2 is also large at roughly 3,923 words.

### Why this matters

The current material is well structured internally, but the browser still presents too much of it as one continuous stage.

For a learner already reporting difficulty initiating and sustaining long reading, the page communicates:

> "There is a huge amount left."

That creates a task-initiation and persistence problem even when the content itself is good.

### Correct repair

**Do not shorten the curriculum.**

Turn the existing 16 numbered teaching blocks into resumable **concept segments**. Present one or a small cluster at a time.

A segment should normally contain:

1. one explicit objective;
2. teaching explanation;
3. visual or worked example where appropriate;
4. one brief retrieval/prediction/application action;
5. a clear Continue control;
6. visible progress, such as "4 of 16";
7. exact segment-level resume.

The existing content can stay intact underneath.

### What not to do

Do not replace the lesson with a summary.

Do not hide required material permanently.

Do not make every paragraph a click-to-reveal accordion.

Do not create 16 separate HTML pages.

Use the existing lesson as one stage with progressive display.

---

# CRITICAL 2 — New instruction and Study retrieval are sequenced incorrectly at the system level

The Home UX currently emphasizes **Start today's study**.

The Study page, however, describes itself as a diagnostic/retrieval workflow and explicitly says:

> Study does not replace Classroom.

When there are no due reviews, the Study recommendation says:

> Check what actually stuck before moving on.

On a fresh week, `classroomStage()` can correctly identify that the learner is at the CETa lesson, but `renderRecommendation()` still launches a current-week retrieval set.

For Week 1, that means Alfred can ask for voltage, current, resistance, SI prefixes, and power before the from-zero Classroom instruction has been completed.

### Why this matters

Retrieval practice is powerful *after initial learning*. A learner can attempt retrieval before instruction, but that should be an intentional pretest with explicit framing—not the main first action in a beginner course.

The current routing therefore increases ambiguity at the exact moment Alfred should remove ambiguity.

### Correct repair

Make the global next-action logic state-aware.

When required instruction is unseen or incomplete:

> **Continue Classroom: Week 01 · Current and Voltage · ~12 min**

When a spaced review is due:

> **Review 3 due concepts · ~10 min**

When a saved Study session exists:

> **Resume Study · Diagnose · 6 min**

When practice/lab is next:

> **Continue Week 01 Practice**

This one state-aware engine should drive:

- Home primary CTA;
- header Continue control;
- Study recommendation;
- optionally Calendar's "Do next" cue.

Do not create multiple competing recommendation engines.

---

# HIGH 3 — Focus Mode is not currently fully focused

### Native evidence

Starting a Study session automatically enters Focus Mode, which is good.

However, the current CSS hides the site header, footer, hero, start-session section, support area, weekly plan, principles, and resume card.

It does **not** hide:

- the new `.ux-study-shortcuts` row;
- `#vocabulary-study-section`.

The native rendered active Study session therefore still displays four shortcut cards and, below the session, the entire Vocabulary Study Lab.

This contradicts the earlier accepted validation standard that Focus Mode should leave only the active session visible.

### Correct repair

When `body.focus-mode` is active, hide every non-session Study surface, including:

- `.ux-study-shortcuts`;
- `#vocabulary-study-section`;
- any future non-session sections added to the page.

Keep only:

- current Study session;
- progress within that session;
- the single "Show Full Page" / exit-focus control.

This is a tiny implementation change with a disproportionately useful effect.

---

# HIGH 4 — Classroom interruption recovery is too coarse for long lessons

Study has good saved-session behavior.

Classroom tracks stage completion and current stage, but the learner can still be interrupted halfway through a 6,000-word stage and return knowing only:

> CETa Lesson

rather than:

> Section 5 of 16 · Voltage vs. current · next: Worked Example 2.

### Correct repair

Once lesson segmentation is implemented, save:

- week;
- stage;
- segment ID;
- segment completion;
- optional scroll anchor within the current segment only if needed.

Do not attempt paragraph-by-paragraph tracking across the entire site.

Segment-level resume provides nearly all of the benefit with much less complexity.

---

# HIGH 5 — Alfred needs a Student Mode / Builder Mode boundary

The user's actual behavior makes this more important than it would be for a typical LMS.

The global More menu and footer expose:

- Deployment;
- Release Notes;
- About;
- technical/reference surfaces;
- many places that can lead back into development thinking.

These links are legitimate for a builder. They are not necessary while studying.

### Correct repair

Add a simple **Student Mode** preference that becomes the default study state.

Student Mode should:

- keep learning, practice, calendar, progress, mastery, glossary, labs, assessments, projects, resources, and search;
- hide Deployment and Release Notes from normal navigation/footer;
- optionally move About/Documents into a less prominent institutional area;
- keep all builder/admin pages accessible through a Builder/Admin entry.

Add a one-field:

> **Park a site issue**

The learner can type:

> "Week 3 figure feels too small."

and return immediately to study.

The issue is not fixed during the session.

Use this triage:

**Blocker** — prevents learning/completion now.  
**Important** — harms learning but can wait.  
**Improvement** — useful later.  
**Distraction** — low-value refinement.

Do not build Jira inside Alfred.

---

# HIGH 6 — Time estimates need to be reconciled with the expanded instructional depth

The Classroom labels Week 1's CETa lesson as approximately 45 minutes.

The Week 1 Calendar Learn event is 90 minutes and contains a sensible timed plan.

The actual current CETa lesson has expanded into roughly 6,000 words plus visuals, examples, glossary interactions, checks, and evidence tasks.

The problem is not necessarily that the calendar is too short. The problem is that **one stage now contains multiple logical study sessions while still looking like one 45-minute task**.

### Correct repair

After segmentation, estimate each segment using actual workload.

For example, instead of:

> CETa Lesson · about 45 minutes

show:

> CETa Lesson · 5 learning segments · about 70–95 minutes total  
> **Today: Segments 1–3 · about 35 minutes**

The exact numbers should be calibrated with real study use rather than calculated only from word count.

---

# Task-initiation findings

Alfred is already better than most LMSs at reducing task-initiation friction, but the first decision is still not fully solved.

The learner should not need to decide:

- Study or Learn?
- Review or new instruction?
- Which section did I stop on?
- Which calendar event matters?
- How much should I do right now?

The state-aware next-action engine is therefore more valuable than any new dashboard.

The ideal Home experience is:

> **Continue: Week 01 · Voltage & Current**  
> Segment 4 of 16 · about 12 minutes  
> Supports: Monday Learn block  
> [Continue]

Everything else can remain available underneath.

---

# Focus / distraction findings

## Keep

- restrained animation;
- calm visual language;
- Quiet Mode;
- Focus Mode concept;
- one active Study step;
- reduced-motion support;
- task-specific pages instead of one mega-dashboard.

## Modify

- make Focus Mode actually isolate the session;
- progressively segment long Classroom instruction;
- give Classroom an equivalent "Reading / Learning Focus" state during a segment;
- collapse unnecessary giant orientation content after the learner has entered the active segment.

## Do not add

- achievement fireworks;
- streak pressure;
- constantly changing motivational messages;
- persistent notification center;
- auto-playing videos;
- animated progress counters.

---

# Phone-distraction findings

The phone problem should be solved primarily at the **device/environment level**, not by adding more Alfred notifications.

For deep Classroom work:

1. use laptop/desktop when possible;
2. place phone out of arm's reach, preferably outside the immediate workspace;
3. enable the phone's Focus / Do Not Disturb;
4. block the highest-risk distraction apps for the planned session;
5. use one if-then rule:
   > If I start an Alfred deep-study segment, the phone stays parked until that segment is complete.

Alfred itself should offer, at most, a brief optional preflight:

> Phone parked? Focus/DND on? Water/tools ready?  
> [Begin 12-minute segment]

Do not turn this into a recurring checklist between every section.

Mobile Alfred should remain fully functional, but its strongest use cases should be:

- Calendar;
- quick review;
- Vocabulary;
- Glossary;
- short retrieval;
- progress check;
- resume information.

Deep 6,000-word reading should not be the workflow Alfred encourages on the same phone that creates the distraction.

---

# Reading / lesson-density findings

The issue is not simply "too many words."

The Teaching Media stage is also long, but visually it is composed of cards with short paragraphs and obvious boundaries. It feels more scannable.

The Week 1 CETa lesson is different because it combines:

- long continuous instructional flow;
- 16 technical sections;
- dense glossary highlighting;
- substantial safety content;
- equations;
- worked examples;
- misconceptions;
- practice;
- competency evidence.

This makes the page *psychologically* large.

The solution is **temporal chunking**: do not make the learner visually own the entire stage at once.

---

# Active-learning findings

Week 1 eventually contains meaningful checks, practice, examples, and teach-back.

The problem is their placement.

The learner can travel roughly 17,000 vertical pixels before reaching the first substantial form interaction.

For this learner, that is too much passive consumption before action.

### Recommended rhythm

Use existing material to create:

**Teach → Visual → Predict → Example → Retrieve → Continue**

Not every block needs a full quiz.

Often a single prompt is enough:

> Before continuing: If resistance doubles and voltage stays the same, what should happen to current?

Then immediately reveal/confirm.

This changes attention from "read the next wall" to "answer the next question."

---

# Time-management findings

Alfred's calendar is strong because it externalizes time and decomposes Week 1.

The remaining gaps are:

- stage estimates do not fully match the newly expanded lessons;
- missed-work recovery is not yet sufficiently adaptive;
- "start by" and "due by" are not always distinct in the learning UI.

### Minimum catch-up behavior

If a scheduled event is past and incomplete, Alfred should not simply show "behind."

It should show:

> **Recovery action: complete Segments 4–5 tonight · ~22 min**  
> Keep Saturday Lab block unchanged.

If several items are overdue:

> Do **one** highest-priority slice now. Alfred will recalculate after it is finished.

This is better than creating an elaborate auto-scheduler.

---

# Deadline / assignment-completion findings

Alfred already has weekly dates and event structure. The next improvement is to convert the learner's view from **deadlines** to **runways**.

A large task should communicate:

- start point;
- intermediate work;
- finish target;
- review/check;
- buffer;
- actual submission/evidence confirmation.

For the Alfred course specifically, use existing course stages rather than inventing generic milestones.

Example:

> Monday — Learn Segments 1–5  
> Wednesday — Practice / repair  
> Saturday — Lab  
> Sunday — Mastery / evidence check

If the user misses Monday, Alfred should adjust Tuesday/Wednesday's *next action*, not rewrite the entire semester.

---

# Interruption / resume findings

## Study — strong

Study already saves an unfinished active session and can restore the current step.

## Classroom — needs segment-level state

This is the important missing layer.

## Video — secondary

Where technically possible, retain media state or at least the card/resource the learner was using. Exact external YouTube time persistence may not always be reliable and should not become a major engineering project.

## Lab — preserve explicit step/evidence state

Labs should continue emphasizing the evidence artifact. If a lab has internal steps, resuming at the step is useful, but no new system is necessary unless actual testing shows loss of state.

---

# Memory / review findings

Preserve:

- Review Queue;
- Vocabulary Study;
- mastery checks;
- retrieval practice;
- spaced resurfacing;
- weak-concept prioritization.

Modify only the **ordering**:

New instruction first when not yet taught.

Then retrieval.

Then targeted repair.

Then transfer/application.

Do not create a parallel Anki-style system that the learner must maintain manually.

---

# Autism / predictability / sensory-load findings

Alfred is already strong here.

The interface:

- uses consistent page families;
- keeps navigation labels literal;
- uses stable colors and hierarchy;
- provides Quiet Mode;
- avoids manipulative animation;
- exposes explicit stages and requirements;
- gives multiple representations: prose, diagrams, video, practice, labs.

The main autism-related principle is **configurability**, not a single fixed "autism design."

Do not assume:
- all autistic learners need visuals;
- all need low stimulation;
- all need the same session duration;
- all prefer the same density.

The lesson-segment system should allow:
- Continue;
- optional expanded detail;
- diagrams;
- video alternatives;
- predictable next/previous movement;
- no surprise auto-advancement.

---

# Mobile vs. desktop findings

At 390×844, the Week 1 Classroom screen spends roughly the first viewport on:

- institutional header;
- week hero;
- week selector;
- Quiet Mode / Glossary;
- purpose balance;
- weekly status;
- next action.

This information is useful, but once the learner has intentionally chosen to continue a lesson it delays actual instruction.

### Recommended mobile behavior

When entering through **Continue lesson**, use a compact learning header:

> Week 01 · Segment 4/16  
> Voltage vs Current  
> 12 min

Then begin the segment.

The full Week overview remains one tap away.

Do not remove the full mobile site.

---

# Overengineering findings

Alfred's greatest future risk is now **feature accumulation** rather than missing capability.

Do not add:

- another dashboard;
- separate ADHD planner;
- separate autism planner;
- multiple timers;
- habit streak system;
- XP / points;
- achievement badges;
- daily inspirational prompts;
- complicated auto-scheduling;
- a second flashcard system;
- a large issue tracker;
- a second set of progress metrics.

Every additional feature should answer:

> Does this reduce the number of decisions or memories required to complete coursework?

If not, it should not be on the primary student path.

---

# Minimum effective intervention

| Priority | Action | Type | Expected effect |
|---|---|---|---|
| **1 — Critical** | Segment long Classroom lessons into resumable concept-sized units, starting with Week 1 and Week 2 | MODIFY / AUTOMATE | Reduces visual overwhelm, improves initiation, creates stopping points, enables exact resume |
| **2 — Critical** | Make next-action routing state-aware: unseen instruction → Classroom; due review/saved Study session → Study | MODIFY / AUTOMATE | Removes the Study-vs-Learn decision and prevents retrieval-before-teaching confusion |
| **3 — High** | Move retrieval/application much earlier inside long lessons using short checks between concept clusters | MODIFY | Converts passive reading into repeated attention resets and active learning |
| **4 — High** | Repair Focus Mode so shortcuts and Vocabulary Study disappear during an active session | MODIFY | Reduces competing actions during the exact period intended for focus |
| **5 — High** | Add Student Mode / Builder Mode separation plus one-field issue parking | MOVE / OPTIONALIZE | Reduces the temptation to improve Alfred instead of completing Alfred |

## Next only after those are tested

- reconcile time estimates with actual segment duration;
- add lightweight catch-up/recovery messaging for missed scheduled work;
- compact the mobile lesson-entry header;
- refine glossary visual intensity if the segmented lesson still feels noisy.

---

# Things that should be deliberately left alone

Do **not** remove or weaken:

- CETa instructional depth;
- Career content;
- labs;
- practical fault isolation;
- assessment rigor;
- mastery gates;
- Teaching Media;
- 599-term glossary coverage;
- Vocabulary Study;
- Search Everything;
- Calendar;
- Progress;
- Cloud Sync architecture;
- current institutional visual identity.

Do not reopen the whole site's navigation or visual design.

Previous native UX testing has already shown the broad interface architecture to be stable across desktop, laptop, tablet, and multiple phone widths.

The problem identified in this audit is primarily **study-flow and instructional presentation**, not the visual shell.

---

# Ideal daily Alfred study flow

## 1. Open Alfred on the study device

Laptop/desktop for deep work when possible.

Phone goes on Focus/DND and out of reach.

## 2. One state-aware action appears

Example:

> **Continue Week 01**  
> Segment 4 of 16 — Voltage vs Current  
> ~12 min  
> [Continue]

The learner does not decide between five systems.

## 3. Enter Learning Focus

Only the current teaching segment and essential navigation remain visible.

## 4. Learn one concept cluster

Teaching + visual/example.

## 5. Answer one short retrieval/application action

No long quiz unless the curriculum calls for one.

## 6. Continue or stop

At a natural stopping point, Alfred stores:

> Completed 4 of 16.  
> Next: Resistance and Ohm's Law.  
> Estimated next segment: 11 min.

## 7. If a website issue is noticed

Use:

> Park a site issue

and keep studying.

## 8. End

Alfred displays:

> Today completed: Segments 3–4  
> Next scheduled work: Thursday Practice  
> No other action required.

---

# Ideal weekly Alfred flow

The current Calendar should remain the backbone.

The learning UI should translate each scheduled block into concrete segments.

For Week 1:

**Learn block:** complete the assigned concept segments.  
**Practice block:** closed-note retrieval + Ohm/Watt/SI work.  
**Lab block:** LAB-001.  
**Mastery:** only after required teaching/practice evidence.

If a block is missed, Alfred should surface the smallest recovery action needed to protect the next major gate, not encourage a catch-up marathon.

---

# Phone / environment / habit protocol

The simplest evidence-informed deep-study protocol is:

> **If I start an Alfred learning segment, then my phone goes on Focus/DND and stays outside reach until the segment is complete.**

Use app blocking if needed for the highest-risk apps.

The reason to prefer this over more Alfred notifications is simple: Alfred cannot out-notify a phone without becoming part of the distraction problem.

---

# Student Mode vs Builder Mode recommendation

**Yes — implement the separation.**

But keep it small.

### Student Mode

Visible:
- Home
- Continue
- Study
- Learn
- Calendar
- Practice
- Progress
- Mastery
- Glossary
- Labs
- Assessments
- Projects
- Resources
- Search

De-emphasized/hidden:
- Deployment
- Release Notes
- technical QA records
- development-oriented controls

### Builder Mode

Contains:
- Release Notes
- Deployment
- build/version records
- QA reports
- site issue backlog
- development tools/links

### Study-time rule

When an issue appears:

> Is this preventing me from completing the current study task?

If **yes**, classify Blocker and stop only if necessary.

If **no**, park it and continue.

---

# Final implementation priority

## Phase 1 — Do first

1. Classroom segmentation + segment resume.
2. State-aware global next action.
3. Earlier micro-retrieval/application.
4. Focus Mode isolation repair.
5. Student/Builder boundary + issue parking.

## Phase 2 — Validate with real use

Use Alfred for at least several actual study sessions.

Measure:
- how quickly the learner starts;
- whether the first assigned segment gets finished;
- whether phone pickups decrease;
- whether the learner returns successfully after interruption;
- whether assigned work finishes before its next scheduled block;
- whether builder activity interrupts study.

Do not judge success by number of features.

## Phase 3 — Only if evidence still shows a problem

Consider:
- catch-up recalculation;
- mobile header compaction;
- time-estimate tuning;
- glossary visual-intensity preferences.

---

# Final judgment

Alfred already has most of the *right systems*.

The present weakness is that the system sometimes presents too much correct material at once and occasionally sends the learner into the wrong support workflow at the wrong moment.

The best next version should therefore be **simpler during execution**, not larger.

The target experience is:

> **One next action. One manageable chunk. One clear stopping point. Exact resume. No competing builder work.**

If Alfred achieves that while preserving its current instructional depth, retrieval system, labs, calendar, glossary, and mastery structure, it will be much better aligned with the user's stated ADHD-related difficulties without turning into a productivity app.

And the most important rule going forward should remain:

> **Alfred exists to help the learner complete the course. Improving Alfred is not the course.**

---

# Research references used

- Solanto et al., *Efficacy of meta-cognitive therapy for adult ADHD*, American Journal of Psychiatry. PMID 20231319.
- Anastopoulos et al., randomized controlled trial of ACCESS for college students with ADHD. PMID 33507774.
- 2026 meta-analysis of CBT for adult ADHD, 14 RCTs. PMID 41483880.
- 2026 pragmatic randomized trial of time-management intervention for adults with ADHD, autism, or other conditions. PMID 41527987.
- Carpenter, Pan & Butler, *The science of effective learning with spacing and retrieval practice*, Nature Reviews Psychology, 2022.
- Chen et al., *Mobile multitasking in learning: A meta-analysis of effects of mobile phone distraction on young adults' immediate recall*, Computers in Human Behavior, 2025.
- St John et al., *A review of executive functioning challenges and strengths in autistic adults*, 124-study review. PMID 34499568.
- Laronze & N'kaoua, *Technology to Support the Academic Success of Students with ASD at University: A Systematic Review*, 2025.
- Baker-Ericzén et al., College SUCCESS pilot for autistic college students, 2025. PMID 40933681.
- Sheeran, Listrom & Gollwitzer, meta-analysis of implementation intentions across 642 tests, 2024/2025.
- Suriano, *A systematic review on the association between ADHD and procrastination*, 2026. PMID 42456607.
- Rodriguez, *Time, Schedules, and the College Student with ADHD*, Syracuse University dissertation, 2020.


---

## Implementation follow-up

The targeted minimum-effective-intervention from this baseline audit was implemented in runtime v16.3.30. See `AU-ESET-301-v16.3.30-Executive-Function-Study-Flow-Verification.md` for the exact code changes and post-update QA.
