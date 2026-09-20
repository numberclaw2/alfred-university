AU-ESET 301 v16.3.36 — SPLIT RESUME LEARNING / RESUME STUDY

Upload every file in the changed-files-only ZIP to the GitHub repository root, replacing files with the same names. The verification Markdown file is new and should be added.

WHAT CHANGED
The prior shared return-to-work action is now two independent controls everywhere that action was surfaced:
- Resume Learning → returns to the saved Classroom week/stage/lesson section.
- Resume Study → returns to the saved Study week/view/index or unfinished Active Recall step.

No curriculum, assessments, Calendar identities, or Cloud Sync protocol changed.

After GitHub Pages deploys:
1. Hard refresh the Home page.
2. Confirm build-info.json reports runtimePatch 16.3.36.
3. Confirm the Home hero shows both Resume Learning and Resume Study.
4. On desktop, confirm the header shows both buttons.
5. Open Calendar and confirm the current-week dashboard shows both buttons.
6. Enter Classroom, move to a saved learning point, then enter Study and move to a different Study view/week. Return Home and confirm each button independently returns to its own saved location.
7. Start an Active Recall session, leave it unfinished, and confirm Resume Study returns to that exact session while Resume Learning still returns to Classroom.

CHANGED-FILES-ONLY PACKAGE
Files in ZIP: 11
- AU-ESET-301-v16.3.36-Split-Resume-Learning-Study-Verification.md
- build-info.json
- index.html
- release-notes-current.js
- service-worker.js
- SHA256SUMS.txt
- site.js
- study.js
- ux-system.css
- ux-system.js
- UPLOAD_README.txt
