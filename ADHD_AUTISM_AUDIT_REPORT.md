# Alfred University ADHD/Autism-Informed UX Audit — v15.4

## Scope

This was a focused quality and flow audit of the existing AU-ESET 301 site. The goal was not to flatten the course, remove technical depth, or make the interface childish. The goal was to reduce avoidable executive-function work while preserving the Alfred University presentation, CETa preparation, embedded-systems career transition, labs, assessments, calendar, Cloud Sync, and evidence-based mastery system.

The audit used the learner profile supplied for this project: ADHD and autism, difficulty initiating and sustaining attention, benefit from explicit structure, and a need for a believable university-style environment that creates external scaffolding.

## Research basis

W3C's cognitive-accessibility guidance explicitly covers ADHD, autism, memory, attention, language, and processing differences. It recommends clear content, task focus, headings and signposts for restoring context after distraction, processes that do not rely on memory, personalization, and testing with people who have cognitive and learning disabilities. [W3C, *Making Content Usable for People with Cognitive and Learning Disabilities*](https://www.w3.org/TR/coga-usable/)

U.S. Section 508 guidance recommends manageable sections, consistent layouts, plain language, predictable navigation, clear feedback, readable type, sufficient spacing, and avoiding distracting animation. [Section508.gov, *Designing Digital Content for Users With Cognitive Disabilities*](https://www.section508.gov/design/digital-content-users-with-cognitive-disabilities/)

A Longwood University master's thesis examining ADHD students and visual distraction found that the least organized, most cluttered environment produced the lowest on-task time in its small sample. The result should not be generalized as a universal rule, but it supports the existing restrained institutional visual system and the decision to keep new cues organized rather than decorative. [Harris, Longwood University, 2006](https://digitalcommons.longwood.edu/etd/78/)

Recent accessibility analysis of digital learning platforms identifies long task lists, layered instructions, multiple tabs, and missing visual chunking as executive-function barriers for learners with ADHD. That supports showing a smaller current-week slice first while retaining an explicit route to the full record. [*Accessibility Barriers in K–12 Digital Learning Platforms for Students with ADHD*, 2025](https://pressbooks.pub/alttexts2025/chapter/accessibility-barriers-in-k-12-digital-learning-platforms-for-students-with-adhd/)

These sources are design guidance, not a clinical treatment plan. Neurodivergent needs vary; the strongest next validation step is testing the interface with the actual learner and, if possible, another ADHD/autistic learner.

## Main findings

### 1. The Study page had a strong concept but weak interruption recovery

The page already had the right basic model: one recommended action, Quick/Standard/Deep Work, a Review Queue, a Curiosity Parking Lot, an "I'm Stuck" path, and Focus/Quiet controls. The main gap was that an unfinished guided session was held only in the current page state. Refreshing or leaving the page could force the learner to reconstruct the task and remember where they stopped.

### 2. Some controls relied on the learner already knowing what they meant

Quiet Mode and Focus Mode were visually attractive, but their labels did not state the difference. A learner should not have to remember or experiment to discover that Quiet Mode reduces visual noise and Focus Mode hides the rest of the page during the active session.

### 3. The assessment and lab inventories were correct but initially broad

Lesson quizzes and labs are valuable, but showing the whole inventory first creates a long scan before the learner can act. The current week is the most useful default for the daily task. The full inventory remains one selection away through All weeks.

### 4. The final Study step contained an avoidable completion ambiguity

The workflow had both a close-session action and a separate official completion action. That distinction is academically valid, but the wording could make a learner think closing automatically records completion. The copy now states the distinction literally: close the session when finished; mark scheduled work complete only when the assigned work was actually done.

## v15.4 changes

- Added an interruption-resilient saved-session record in the existing Study local state. The saved event, mode, and step are restored without changing Progress or Cloud Sync schemas.
- Added a visible Resume Session card when an unfinished session exists, with Resume Session and Start Fresh actions.
- Added explicit descriptions for Quiet Mode and Focus Mode, including tooltips and a visible note.
- Added the one-line sequence: choose a mode, follow the steps in order, rate confidence, then mark scheduled work complete.
- Added current-step semantics (`aria-current="step"`) and descriptive labels to guided Study tabs.
- Changed the final guided-session navigation label from “Finish Session” to “Close Session.”
- Clarified the difference between closing a session and marking the scheduled academic work complete.
- Made Assessment Center lesson quizzes open to the current week by default, with a clear All weeks route.
- Made Lab Center open to the current week by default, with a clear All weeks route.
- Preserved the green/gold/cream institutional design, restrained motion, readable measures, full inventories, complete calendar, and progressive-disclosure patterns.

## Deliberate non-changes

- No academic event, date, event ID, resource, outcome, lab, assessment, mastery standard, or career gate was removed.
- No new streak, punishment, forced timer, or gamification system was added.
- No medical claim is made that one setting will work for every ADHD/autistic learner.
- No new login, tracker, or backend schema was introduced.
- Quiet Mode remains a preference rather than a mandatory visual theme; personalization is safer than assuming one sensory setting fits everyone.

## Validation questions after upload

1. Start a Standard session, advance to Step 2, refresh, and confirm Resume Session returns to Step 2.
2. Turn on Quiet Mode and confirm the page becomes calmer without losing required content.
3. Start Focus Mode and confirm only the active session remains visible.
4. Open Assessment Center and Lab Center; confirm the current week is shown first and All weeks reveals the full inventory.
5. Close a session without marking work complete; confirm the event remains incomplete in Progress.

