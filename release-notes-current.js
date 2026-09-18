(() => {
  const entries = [
    {
      "version": "v16.3.8",
      "date": "September 18, 2026",
      "title": "Week 1 From-Zero Teaching + Source-Backed Visuals",
      "type": "Week 1 Instructional Depth Update",
      "request": "Improve Week 1 as the learner actually experiences it: teach technical concepts from zero, make prerequisite connections explicit, explain SI prefixes/conversions before using them, and integrate credible source visuals. Keep the change strictly scoped to Week 1 and avoid reopening Weeks 2–31.",
      "changes": [
        "Added a Week-1 Subject-1-only instructional overlay loaded after the preserved semantic-repair layer; Week 1 Subject 2, Weeks 2–31 lesson data, assessments, calendar identities, progress keys, Cloud Sync, and Teaching Media assignments are not rewritten by this update.",
        "Rebuilt Subject 1 in dependency order: charge → current → voltage → closed circuit path → resistance → SI prefixes/powers of ten → unit conversion → Ohm’s law → proportional reasoning → power → predict-before-measure workflow.",
        "Removed the assumption that the learner already understands metric prefixes or scientific notation. The lesson now explains kilo, mega, milli, micro, nano, pico, powers of ten, decimal movement as a consequence of multiplication/division, symbol capitalization, and conversion reasonableness checks.",
        "Expanded worked reasoning from two examples to four progressive examples covering prefix conversion, forward Ohm’s-law calculation, reverse solving for resistance, and power-rating evaluation.",
        "Removed the homemade Subject 1 Week 1 lesson diagram from the Classroom presentation and suppresses the old shared Week 1 concept-map graphic. Added textbook-style credited source figures from OpenStax/UCF Pressbooks for charge transfer, meter placement/Ohm’s-law measurement, and the voltage-current graph, plus a source-derived SI-prefix reference table grounded in NIST and OpenStax data.",
        "Added visible Builds on callouts so each new concept names the prerequisite idea it extends instead of repeatedly restarting the explanation.",
        "Kept the existing Week 1 safety teaching, safety-critical gates, semantic competency tasks, knowledge checks, and the complete Subject 2 lesson data intact. Subject 2 is deliberately deferred until the learner reaches and evaluates it.",
        "Updated the Classroom renderer only to support source figures/tables and Week 1 concept-dependency callouts; other weeks receive no new figure data or lesson rewrite."
      ]
    },
    {
      "version": "v16.3.7",
      "date": "September 18, 2026",
      "title": "Whole-System Acceptance Audit Repair — Readiness, Mastery & Portfolio Coherence",
      "type": "Assessment / Mastery / Portfolio Coherence Repair",
      "request": "Resolve the three material defects identified by the completed Parts 1–8 whole-system acceptance audit without reopening curriculum, Teaching Media, calendar, labs, Cloud Sync, or other systems that already passed.",
      "changes": [
        "Replaced the misleading two-Alfred-mock independence claim with a dual-source CETa readiness gate: one current full-length 100-question Alfred run at 85% or higher plus one separate current independent CETa practice assessment at 85% or higher from outside the Alfred question bank. Repeat Alfred mocks remain useful retrieval practice but no longer count as independent evidence.",
        "Repaired automatic mastery progression without fabricating difficulty: Foundation questions are not relabeled as Intermediate/Advanced. Automatic status now uses validated accuracy, repeated sessions, retention streak, recency, and distinct reviewed-bank breadth. Standards with fewer than two distinct current reviewed items surface as Evidence Limited and cannot automatically claim Mastered until the bank expands.",
        "Synchronized the Competency Dashboard with the Standards page so both use the same evidence model and no longer demand nonexistent intermediate/advanced CETa bank evidence.",
        "Made the Career Readiness definition canonical in the Project Center: Project 2 is Automated Hardware Validation / HIL, Project 3 is the Custom PCB strong differentiator, and the former Embedded Control System concept is preserved as an optional long-term extension rather than conflicting with Project 2.",
        "Preserved course release v16.3, evidence revision v16.2, the accepted 31/31 Teaching Media pathway, all 62 lessons, 24 labs, calendar dates/event IDs/UIDs, Study Guide assignments, progress identities/history, Cloud Sync protocol 2, and the CETa/Career architecture.",
        "Post-repair static/runtime QA passed for JavaScript syntax, JSON validity, old-defect string removal, cross-page policy consistency, project-identity consistency, and service-worker/version synchronization."
      ]
    },
    {
      "version": "v16.3.5",
      "date": "September 17, 2026",
      "title": "Teaching Media Self-Reliance — Independent Instructional Pathway",
      "type": "Teaching Media / Academic Resource Revision",
      "request": "Make the existing Teaching Media pathway capable of independently teaching the course explanation layer across all 31 modules—enough to support CETa preparation, electronics understanding, associated troubleshooting/lab readiness, and hardware-oriented embedded progression—without changing the written curriculum, labs, assessments, calendar, progress identities, or Cloud Sync.",
      "changes": [
        "Introduced teaching-media-self-reliance.js after teaching-media-overrides.js and attempted a 31-week independent Teaching Media explanation path.",
        "Preserved all 62 primary lessons, 24 labs, assessment identities and mastery thresholds, study-guide assignments, calendar dates/event IDs/UIDs, progress identities, Cloud Sync protocol 2, module sequencing, and the 50/50 CETa/Career architecture.",
        "A later adversarial semantic-coverage audit found that the v16.3.5 self-reliance acceptance claim was too broad: structural 31-week coverage did not independently teach every subject represented by the full v16.3 semantic coverage matrix. v16.3.6 supersedes that acceptance claim while retaining v16.3.5 as release history."
      ]
    },
    {
      "version": "v16.3.6",
      "date": "September 18, 2026",
      "title": "Teaching Media Content Completion — Final 31-Week Standalone Acceptance",
      "type": "Teaching Media / Academic Resource Repair",
      "request": "Repair every verified Teaching Media gap found by the adversarial v16.3.5 audit so the external media pathway can be tested against the complete v16.3 semantic/standards map as a standalone explanation path, while preserving the accepted curriculum and all protected runtime identities.",
      "changes": [
        "Added teaching-media-content-completion.js after the existing v16.3.5 self-reliance overlay. The new layer appends missing instruction and narrowly corrects overclaimed card metadata without replacing the accepted curriculum.",
        "Targeted all previously identified blocker/material-defect weeks while leaving prior substantive-PASS weeks unchanged by the content-completion additions.",
        "Closed verified gaps in safety/work procedures, waveform generation, technician test equipment, component/device breadth, power supplies, amplifiers, digital breadth, advanced repair literacy, PLC/computer topics, embedded state/nonblocking design, computer support, USB/Zigbee/interfacing, AV/photoelectronics, RF/telecom, technical workflow/configuration control, invalid/stale sensor handling, hardware-test automation, controlled fault injection/service procedures, and technical project defense.",
        "Corrected specific metadata overclaims: NPTEL is no longer treated as full RF/telecom instruction; the private CETa Study Guide remains available but is excluded from Teaching Media standalone-sufficiency evidence; GitHub Skills is narrowed to the introductory collaboration workflow it actually teaches; generic Saleae support navigation is not counted as fault-injection instruction.",
        "Preserved the v16.3 curriculum, 62 lessons, 24 labs, assessments/mastery, calendar dates and UIDs, progress identities/history, Study Guide assignments, Cloud Sync protocol 2, module sequencing, visual design, and CETa/Career 50/50 architecture.",
        "The first post-repair acceptance audit executed the actual GitHub production composition and found residual defects rather than rubber-stamping the candidate: Week 1 lacked direct ESD-control teaching; Week 7 taught several of its mapped semiconductor families one week late; Week 12 still overclaimed GitHub Skills; the Week 27 NI card linked to a free-trial page instead of the claimed workflow tutorial; and Week 28 still lacked explicit productivity calculation and project-planning instruction.",
        "The corrective candidate adds NASA ESD instruction to Week 1; assigns the verified semiconductor-family resources directly to Week 7; narrows the Week 12 GitHub Skills card; replaces the Week 27 NI link with the actual Setup/Main/Cleanup stimulus-profile tutorial; and adds explicit field-service utilization plus NASA technical-planning/project-management instruction to Week 28.",
        "A second semantic pass found one final Week 20 material defect: the existing POTS splitter resource taught voice/data frequency separation but did not itself teach tip/ring loop-start behavior, off-hook loop current, dial-tone response, and ringing.",
        "The final POTS correction assigns Cisco Voice Network Signaling and Control directly to Week 20 for tip/ring, loop-start, off-hook current flow, dial-tone response, and ringing while retaining the splitter resource for DSL/voice coexistence.",
        "The final re-audit executed the exact corrected GitHub production composition and accepted all 31 weeks: 31/31 PASS, zero BLOCKER, zero MATERIAL DEFECT. The four subject-level questions—CETa preparation, electronics theory, technician/troubleshooting conceptual preparation, and hardware-oriented embedded preparation—are all YES for the Teaching Media explanation layer. Required labs, projects, measurements, soldering/rework, coding, debugging, troubleshooting demonstrations, assessments and physical evidence remain required and are not replaced by media.",
        "Final acceptance-sync cleanup removed the stale WORKING DRAFT / DO NOT DEPLOY header from teaching-media-content-completion.js so the production source comment now agrees with the accepted v16.3.6 runtime, Release Notes, build metadata, and Resource Verification record. This cleanup changes no curriculum, media assignment, assessment, calendar, progress, or Cloud Sync behavior."
      ]
    }
  ];
  const releases = window.ALFRED_RELEASES = Array.isArray(window.ALFRED_RELEASES) ? window.ALFRED_RELEASES : [];
  entries.forEach(entry => {
    if (!releases.some(item => item && item.version === entry.version)) releases.unshift(entry);
  });
})();
