# AU-ESET 301 v16.3.37 — Focus Prep ADHD / Autism Verification

**Date:** September 20, 2026  
**Release:** v16.3.37 — Research-Informed Focus Preparation Gate  
**Baseline:** deployed v16.3.36 (`fa1df767538a5cc07e21acb1fed6f09d69ac7d3b`)

## Requested behavior

Add a configurable pre-work checkpoint before the parts of Alfred that require sustained attention and task completion. The learner must check every preparation item before **Begin focused work** becomes available.

The support must not spread across ordinary browsing/reference pages and must not interrupt every individual lesson section.

## Evidence used

The design preserves the conclusions of `ADHD_AUTISM_AUDIT_REPORT.md` and adds a current evidence check.

### ADHD environmental modification

NICE ADHD guidance explicitly describes environmental modifications such as changes to lighting/noise, reducing distractions, headphones where appropriate, shorter focus periods with movement breaks, and reinforcing demands with written structure. CHADD likewise recommends reducing external distraction, limiting social-media access, using checklists/timers, arranging needed materials, and taking movement breaks.

### Autism and sensory variability

NICE adult-autism guidance recommends attention to lighting and noise and notes options such as reducing external sound, earplugs/ear defenders, and environmental adaptation. Alfred therefore does **not** force one sensory profile. The checklist asks the learner to choose the light/sound condition that works for the current session.

### Phone distraction

Experimental research shows that phone notifications can disrupt performance on attention-demanding tasks. Other studies of mere phone presence are mixed, so the implementation uses the stronger practical rule already adopted by Alfred: Focus/DND plus physical distance when Alfred is not being used on that phone. Mobile Alfred gets a device-aware version rather than an impossible “put this device away” instruction.

### Executive-function externalization

Adult-ADHD CBT and metacognitive-treatment evidence supports explicit planning, organization, and time-management scaffolding. Alfred therefore asks for one clear task/finish line and one realistic focus block/break plan rather than relying on working memory.

### Exercise

Recent adult-ADHD systematic reviews/meta-analyses report beneficial acute-exercise effects on inhibitory control and some core symptoms. Because forcing exercise before every session could itself become startup friction, movement is presented as an optional reset rather than a required checkbox.

### Anti-overengineering constraint

The prior Alfred audit and dissertation evidence warned that organizational systems can become additional work. The gate is therefore limited to six concrete checks, appears once at focus entry, and never repeats between lesson sections.

## Implemented checklist

1. **Phone barrier** — Focus / Do Not Disturb; parked out of reach on desktop/laptop, or Alfred-only use when the current device is the phone.
2. **Distraction reduction** — unrelated tabs, apps, TV, and workspace clutter closed, muted, or moved away.
3. **Sensory setup** — learner chooses comfortable lighting and quiet/headphones/earplugs/steady background sound; lab copy adds the safety caveat that headphones should not hide safety cues.
4. **Materials + basic needs** — required paper/notes/calculator/lab tools within reach and water/basic needs handled.
5. **One task + finish line** — the modal states the current Week/view/stage/assessment/lab and requires acknowledgement of what “done” means for the block.
6. **Time boundary** — learner chooses a realistic focus block and knows when the next break is.

A brief optional movement-reset note is shown below the checklist.

## Where the gate appears

- **Classroom (`learn.html`)** — on entry, using the requested/saved Week and stage.
- **Study (`study.html`)** — on entry, using the Week and Study view.
- **Quiz/Test Runner (`quiz.html`)** — before weekly, lab, major, or supplemental assessment work.
- **Lab Center (`labs.html`)** — only on direct Week/lab work routes; ordinary Lab Center browsing remains ungated.

The gate intentionally does **not** auto-open on Home, Calendar, Progress, Engineering Library, Glossary, Projects, Practice Hub, Assessment Center index, release/deployment pages, or between Classroom lesson sections.

## Settings

A new **More → Focus Prep · On/Off** control opens settings.

- **Show Focus Prep before focus-required work** — default **On**.
- **Automatically turn on Alfred Quiet Mode when I begin** — default **Off**, because sensory preference varies.

The preflight itself also exposes a Quiet Mode toggle so the learner can make the sensory choice for that session.

## Friction controls

- **Begin focused work** is disabled until all six checks are complete.
- There is no “skip and continue” button. **Not starting now** leaves the focus route instead of bypassing the checklist.
- If the learner has completed the checklist and simply reloads the exact same focus route, Alfred remembers that approval for up to two hours so an accidental refresh does not create another interruption.
- The checklist is not shown between lesson sections.

## Compatibility preserved

- Course release remains **16.3**.
- Evidence revision remains **16.2**.
- Cloud Sync protocol remains **2**.
- Existing Progress, Study, Classroom, assessment, lab, Calendar, and resume keys are unchanged.
- No curriculum, lesson content, assessment questions, mastery thresholds, calendar event IDs, or ICS UIDs changed.

## Verification gates

- `site.js`, `service-worker.js`, and `release-notes-current.js` pass `node --check`.
- `build-info.json` parses as valid JSON and reports runtime patch **16.3.37**.
- Focus Prep static scan confirms the four intended focus contexts and excludes ordinary hub/reference pages.
- The gate contains six required checkboxes and a disabled-by-default Begin control.
- Focus Prep defaults to enabled; automatic Quiet Mode defaults to disabled.
- Direct Lab copy contains the headphone/safety-cue exception.
- Service-worker namespace advances to v16.3.37 and includes this verification report.
- Full-repository `SHA256SUMS.txt` verification passes after the final package is assembled.

## Research references

- NICE. *Attention deficit hyperactivity disorder: diagnosis and management* (NG87), environmental modifications.
- NICE. *Autism spectrum disorder in adults: diagnosis and management* (CG142), physical/sensory environment recommendations.
- CHADD. *Succeeding in the Workplace* and *Workplace Issues*, adult-ADHD environmental and organizational strategies.
- Stothart C, Mitchum A, Yehnert C. *The attentional cost of receiving a cell phone notification.* Journal of Experimental Psychology: Human Perception and Performance. 2015.
- Skowronek J, Seifert A, Lindberg S. *The mere presence of a smartphone reduces basal attentional performance.* Scientific Reports. 2023.
- Solanto MV et al. *Efficacy of meta-cognitive therapy for adult ADHD.* American Journal of Psychiatry. 2010.
- Knouse LE, Teller J, Brooks MA. *Meta-analysis of cognitive-behavioral treatments for adult ADHD.* Journal of Consulting and Clinical Psychology. 2017.
- Xu S, Zhao C, Hu L. *The effects of acute and chronic exercise on executive functions and core symptoms in adults with ADHD: A systematic review and meta-analysis.* Psychology of Sport and Exercise. 2026.

**Candidate status: PASS FOR UPLOAD.**
