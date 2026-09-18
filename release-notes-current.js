(() => {
  const entries = [
    {
      "version": "v16.3.10",
      "date": "September 18, 2026",
      "title": "Release Notes Completeness — Permanent Change Ledger",
      "type": "Documentation / Maintenance / Change-Control Update",
      "request": "Make Release Notes mandatory for every website change going forward and backfill the site so small edits, additions, removals, and repository uploads are no longer lost inside major-version summaries.",
      "changes": [
        "Established a permanent release-logging rule: every future website update, no matter how small, must include a Release Notes entry before the upload package is delivered.",
        "Future entries must record the request/reason, every meaningful behavior/content/design change, every addition and subtraction, and the exact files added, modified, or removed.",
        "Audited the existing human-readable history and retained all 42 unique release records spanning v1.x through v16.3.9; no prior narrative release entry was deleted or rewritten out of history.",
        "Added release-change-ledger.js with a historical ledger of all 63 GitHub commits from the original September 11 repository build through the v16.3.9 baseline, including 10 upload commits whose repository tree did not change.",
        "The Release Notes page now searches both narrative releases and the repository ledger, displays line additions/deletions for historical commits, and links each ledger row to the exact GitHub commit diff for file-by-file verification.",
        "Added optional Added / Modified / Removed file sections to the Release Notes renderer. v16.3.10 is the first release required to use this exact-file format; future releases will continue it.",
        "Corrected current-release ordering so v16.3.10, v16.3.9, v16.3.8, v16.3.7, v16.3.6, and v16.3.5 display in true newest-to-oldest order before the historical release file.",
        "Added a permanent AU-ESET-301-Release-Notes-Policy.md record describing the logging contract and the self-reference rule: the historical commit ledger is backfilled through v16.3.9, while v16.3.10 and later releases record exact changed files directly in their release entry so a release never requires an endless follow-up commit merely to record its own SHA.",
        "No curriculum, Week 1 instruction, Teaching Media, assessments, labs, projects, calendar identities, progress data, mastery rules, Cloud Sync protocol, or course-learning behavior is changed by this release."
      ],
      "filesAdded": [
        "release-change-ledger.js",
        "AU-ESET-301-Release-Notes-Policy.md",
        "POST-UPDATE-QA.md",
        "UPLOAD_README.txt",
        "SHA256SUMS.txt"
      ],
      "filesModified": [
        "patch-notes.html",
        "patch-notes.js",
        "release-notes-current.js",
        "build-info.json",
        "service-worker.js"
      ],
      "filesRemoved": []
    },
    {
      "version": "v16.3.9",
      "date": "September 18, 2026",
      "title": "Week 1 Beginner-Teacher YouTube Clarity Layer",
      "type": "Teaching Media / Week 1 Learning-Support Update",
      "request": "Add Week 1 videos from instructors who are especially effective at making introductory electricity concepts click for struggling beginners, while preserving the verified Teaching Media coverage already accepted for the course.",
      "changes": [
        "Added week1-beginner-teaching-media.js after teaching-media-content-completion.js. The new layer is additive and Week-1-only: it prepends a beginner-clarity path without deleting, replacing, or weakening any previously verified Teaching Media card.",
        "Added seven public YouTube resources: Math and Science/Jason Gibson for the first-pass voltage-current-resistance mental model; Afrotechmods for current/amps, voltage, resistance/Ohm's law, power/watts, and multimeter use; and The Organic Chemistry Tutor for worked basic-circuit, Ohm's-law, charge, and power problems.",
        "Ordered the additions by learning job rather than authority alone: START HERE concept bridge -> current -> voltage -> resistance/Ohm's law -> power -> worked practice -> bench/multimeter bridge.",
        "Kept the accepted All About Circuits, Fluke, OSHA, Keysight, NASA/ESD, simulation, and other Week 1 resources in place behind the new beginner layer so technical rigor, safety, and audit coverage remain available.",
        "Rechecked source identity and mapped instructional content on September 18, 2026 using public YouTube metadata and creator/source pages where available. The Afrotechmods multimeter card explicitly notes that the exact meter shown is discontinued; the course uses it for measurement concepts, not current purchasing guidance.",
        "Updated resource-verification notes, build metadata, load order, and service-worker cache for v16.3.9. No Week 2-31 media, written curriculum, labs, projects, assessments, calendar identities, progress keys, Cloud Sync protocol, or Week 1 Subject 2 lesson data are changed."
      ]
    },
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
  const currentOrder = ['v16.3.10','v16.3.9','v16.3.8','v16.3.7','v16.3.6','v16.3.5'];
  entries.sort((a,b)=>currentOrder.indexOf(a.version)-currentOrder.indexOf(b.version));
  const historical = Array.isArray(window.ALFRED_RELEASES) ? window.ALFRED_RELEASES : [];
  const currentVersions = new Set(entries.map(entry=>entry.version));
  window.ALFRED_RELEASES = [...entries, ...historical.filter(item=>item && !currentVersions.has(item.version))];
})();
