ALFRED UNIVERSITY AU-ESET 301
v16.3.45 CONTEXTUAL VIDEO INTEGRATION
UPLOAD INSTRUCTIONS

BASELINE REQUIRED
- Apply this package on top of the current v16.3.44 repository/site state.
- Do not use it to replace the project from an older baseline.

WHAT THIS RELEASE DOES
- Keeps Teaching Media as the centralized video/reference library.
- Integrates 152 of the 155 current video assignments at deliberate lesson breakpoints.
- Keeps 3 assignments intentionally library-only with visible reasons.
- Adds Teaching Media links back to exact lesson sections.
- Adds lesson links back to Teaching Media.
- Uses progressive disclosure for dense media sections.
- Uses privacy-enhanced lazy YouTube playback where direct YouTube embedding is appropriate.

WHAT THIS RELEASE DOES NOT DO
- Does not add the future outside-literature phase.
- Does not add the future CETa Study Guide recommended-page phase.
- Does not redesign the website or rewrite curriculum/assessments/labs/glossary/navigation.

UPLOAD
1. Upload every file in the v16.3.45 changed-files ZIP to the repository root.
2. Overwrite files with matching names.
3. Keep the new files exactly at repository root; do not place them inside a folder.
4. After deployment, hard-refresh/reload the site so the service-worker cache moves to v16.3.45.

POST-UPLOAD CHECKS
- build-info.json should show runtimePatch: 16.3.45.
- Open Week 3 CETa lesson → Oscilloscope section. The contextual Teaching Media block should appear after Alfred's section explanation and before Pause & retrieve.
- Open Week 7 transistor-family instruction. Secondary videos should be under the expandable More media treatment rather than stacked as full cards.
- Open Week 3 Teaching Media. The oscilloscope video should include a Taught in this week link back to the exact lesson section.
- Open Week 4 Teaching Media. The binary-conversion item should show its intentional library-only explanation for Week 4.
- For a direct YouTube item, Watch inline should reveal a privacy-enhanced youtube-nocookie player only after the button is activated.

EVIDENCE FILES
- AU-ESET-301-v16.3.45-Video-Integration-Acceptance.md
- AU-ESET-301-v16.3.45-Video-Placement-Matrix.csv

EXPECTED RELEASE
- Course release: 16.3
- Runtime patch: 16.3.45
- Build: v16.3.45-contextual-video-integration-20260921
