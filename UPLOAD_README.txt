AU-ESET 301 v16.3.37 — RESEARCH-INFORMED FOCUS PREP GATE

Upload every file in the changed-files-only ZIP to the GitHub repository root, replacing files with the same names. The verification Markdown file is new and should be added.

WHAT CHANGED
Focus Prep is now a default-on setting for actual focus-required work.

Before Classroom, Study, a direct Lab session, or the Quiz/Test Runner, Alfred opens a six-item preparation checklist covering:
- phone Focus/DND + distraction distance;
- unrelated tabs/apps/TV/workspace clutter;
- individualized lighting/sound/headphone/earplug setup;
- needed materials + water/basic needs;
- one explicit task + finish line;
- a realistic focus block + next break.

Begin focused work stays disabled until every checkbox is complete.

The checklist does NOT appear between lesson sections or across ordinary reference/browsing pages.

SETTINGS
Open More → Focus Prep · On/Off.
- Focus Prep is ON by default.
- Automatic Quiet Mode is OFF by default and can be enabled in Focus Prep settings.

LAB SAFETY
The lab-specific sensory item explicitly says not to use headphones if they could hide a safety cue.

After GitHub Pages deploys:
1. Hard refresh the site.
2. Confirm build-info.json reports runtimePatch 16.3.37.
3. Open More and confirm the Focus Prep control reports On.
4. Enter Classroom. Confirm six unchecked items appear and Begin focused work is disabled.
5. Check all six; confirm Begin focused work enables and closes the gate.
6. Reload the same Classroom route; confirm the gate does not immediately repeat after the approved reload.
7. Navigate away and enter Study; confirm a fresh Focus Prep gate appears for Study.
8. Open a direct lab route such as labs.html?week=1#LAB-001 and confirm the lab-specific headphone/safety wording.
9. Open any quiz.html route and confirm the assessment preflight appears.
10. Browse Home, Calendar, Glossary, Practice Hub, Assessment Center, or the generic Lab Center and confirm no automatic Focus Prep gate appears.
11. Open More → Focus Prep settings and confirm the gate can be turned off and optional auto-Quiet-Mode can be turned on.

CHANGED-FILES-ONLY PACKAGE
Files in ZIP: 8
- AU-ESET-301-v16.3.37-Focus-Prep-ADHD-Autism-Verification.md
- build-info.json
- release-notes-current.js
- service-worker.js
- SHA256SUMS.txt
- site.js
- styles.css
- UPLOAD_README.txt
