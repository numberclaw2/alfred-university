ALFRED UNIVERSITY v15.3 — CALENDAR READABILITY PATCH

Upload the files in Alfred_University_v15_3_Calendar_Readability_Files.zip over the current Alfred University repository.

This is a cumulative replacement package. It includes the current v15.2 baseline plus the calendar-focused v15.3 changes.

Calendar-specific changes:
- Task-first event details: Today’s work, required outcomes, mastery/career context, then references.
- Week Focus is separated into a short focus title and readable topic line.
- Resource links and full event notes are expandable instead of appearing as one uninterrupted wall of text.
- Month, Week, and Agenda labels are shorter while full event identity remains available to assistive technology and the modal.
- Week and Agenda event controls are keyboard-friendly and have descriptive labels.
- Common display-only spacing glitches in older copy are repaired without changing course-data records.

The service-worker cache is v15.3. After uploading, refresh once online so the new calendar JavaScript and CSS replace the cached v15.2 layer.

The authoritative calendar data is preserved: 125 events, event IDs, dates, times, resource URLs, labs, milestones, mastery gates, Project 1/career work, and required outcomes.

QA files included separately:
- CALENDAR_AUDIT_REPORT.md
- QA_REPORT.md
- regression.cjs
- package.py
