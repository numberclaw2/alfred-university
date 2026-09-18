(() => {
  const entries = [
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
      "title": "Teaching Media Content Completion — Final POTS Corrective Candidate",
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
        "A second full semantic re-audit found one remaining Week 20 material defect: the assigned Cisco POTS/DSL splitter resource correctly taught voice/data frequency separation but did not teach the semantic row's required tip/ring loop-start behavior, off-hook loop current, and ringing.",
        "The final corrective candidate adds Cisco Voice Network Signaling and Control directly to Week 20 for loop-start tip/ring, loop closure/current flow, dial-tone response, and ringing, while retaining the splitter resource for DSL/voice frequency separation.",
        "This entry describes the v16.3.6 final POTS-corrective candidate. The release must not be described as 31/31 standalone PASS until the corrected GitHub runtime is uploaded and the complete final acceptance audit is rerun successfully."
      ]
    }
  ];
  const releases = window.ALFRED_RELEASES = Array.isArray(window.ALFRED_RELEASES) ? window.ALFRED_RELEASES : [];
  entries.forEach(entry => {
    if (!releases.some(item => item && item.version === entry.version)) releases.unshift(entry);
  });
})();
