# AU-ESET 301 v16.3.11 — Study Tab Rebuild QA

**Date:** September 18, 2026  
**Scope:** Study tab only

## Purpose decision

- PASS — Study still has a unique job and is retained.
- PASS — next-action routing, unfinished-session recovery, quiet/focus modes, review queue, curiosity parking lot, weekly orientation, stuck recovery, and spaced retrieval remain part of Study.
- PASS — the obsolete part was the generic timer/session wrapper, not the entire tab.

## New Study Session model

The active session is now:

1. **Retrieve** — answer selected concepts without notes and rate the retrieval as Got it / Partial / Missed.
2. **Diagnose** — separate concepts that held from concepts requiring repair.
3. **Repair** — show only the weak concepts, with a concise corrective explanation and a route back to Classroom/search if needed.
4. **Practice** — solve fresh transfer problems; missed concepts are prioritized first.
5. **Teach Back** — explain the concepts as a connected model rather than rating vague confidence.
6. **Next Move** — decide whether evidence supports continuing the saved Classroom stage or another focused repair pass.

## Week 1 implementation

- PASS — Week 1 has six purpose-built study concepts: voltage, current, resistance/Ohm's law, SI prefixes/unit conversion, electrical power, and open/closed/short circuit paths.
- PASS — Standard mode selects five retrieval concepts and two fresh practice items.
- PASS — Quick mode uses three retrieval concepts and one practice item.
- PASS — Deep mode can use the full six-concept Week 1 set and up to three practice items.
- PASS — later weeks use the existing Academic Knowledge entries as a safe fallback until their Study experience is refined through actual use.

## Interaction tests

Browser interaction harness using Chromium:

- PASS — all-green Standard flow renders five retrieval cards.
- PASS — all-green retrieval produces zero repair targets and skips unnecessary repair content.
- PASS — Standard flow renders two fresh practice items.
- PASS — completed practice + teach-back reaches **READY TO CONTINUE**.
- PASS — one missed concept becomes exactly one targeted repair card.
- PASS — the missed concept is prioritized first in the subsequent practice ladder.
- PASS — a repaired concept can reach **READY TO CONTINUE** after fresh successful practice and teach-back.
- PASS — no page errors occurred in either tested interaction path.

## Completion / mastery boundary

- PASS — the old Study-session **Mark Scheduled Work Complete** behavior is removed.
- PASS — `study.js` contains no code that sets an event status to `complete` as a consequence of finishing a Study session.
- PASS — Study ratings schedule retrieval only. They do not create assessment scores or mastery evidence.
- PASS — Classroom, Lab Center, Assessment Center, Progress, and Mastery remain the authorities for learning completion/evidence.

## Review and persistence

- PASS — existing event-level Study review records are still read from Progress.
- PASS — existing Mastery/standard reviewQueue records remain supported.
- PASS — new concept-level Study reviews use the already-supported week `reviewQueue` record and therefore use the existing Progress/Cloud Sync mechanism.
- PASS — historical v15 Study sessions without the new concept structure are safely discarded rather than resumed through an incompatible renderer.
- PASS — curiosity parking-lot data remains on the existing Study storage key.

## Runtime / package

- PASS — `study.js`, `release-notes-current.js`, and `service-worker.js` pass JavaScript syntax validation.
- PASS — `build-info.json` parses as valid JSON and identifies runtime **v16.3.11**.
- PASS — service-worker cache namespace advances to `alfred-u-v16-3-11-study-active-retrieval-rebuild-20260918`.
- PASS — `study-v2.css` is included in the service-worker core cache list.
- PASS — Release Notes records the Study rebuild, every behavioral addition/subtraction, exact files added/modified/removed, and the scope boundary.

## Scope boundary

This release does **not** modify Practice, Week Overview, Engineering, Knowledge Base, Student Services, Classroom lesson content, Teaching Media, calendar data, labs, assessment bank, mastery formulas, projects, or any other cleanup-roadmap tab.

Step 1 is intentionally isolated. Step 2 (Practice) must not begin until this Study release is uploaded, deployed, and accepted.
