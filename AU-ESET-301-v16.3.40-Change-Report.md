# AU-ESET 301 v16.3.40 — Change Report

## Release purpose

v16.3.40 is the corrective implementation produced after the independent native acceptance test found that v16.3.39 still contained future-concept leakage, premature mastery routes, an incomplete standards reconstruction, a week-level rather than concept-level dependency artifact, and insufficient beginner scaffolding in Python/interface sequencing.

## Curriculum and lesson-content changes

- Week 3: removed UART/SPI-dependent examples and the premature logic-analyzer performance requirement; logic-analyzer configuration is deferred to Week 18.
- Week 13: rebuilt examples/checks as protocol-neutral hardware fault isolation and explicitly deferred formal fault injection to Week 28.
- Week 15: replaced serial-dependent concurrency examples with GPIO/timing/state evidence and deferred later communications/ADC work.
- Week 16: added prerequisite-complete timer/event and ADC known-input teaching/evidence after the GPIO/SWD baseline.
- Week 17: expanded to a 13-step Python-from-zero teaching ladder before serial communication.
- Week 18: rebuilt as a strict I²C-first complete integration path before SPI comparison and UART reactivation.
- Week 19/28/31: made the actual instructional homes for C4.3/C5.5/C13.6 explicit in mastery routing.

## Career standards changes

Final Career standard inventory: **81**.

- KEEP: 49
- REWRITE: 22
- MOVE: 4
- SPLIT: 3
- ADD: 3

New standards:
- C6.7 — value/address/pointer/lifetime reasoning.
- C8.7 — STM32 ADC known-input proof.
- C12.7 — branch/tag/known-good-baseline configuration control.

Split standards:
- C6.3 no longer hides pointer/address reasoning.
- C8.4 no longer hides ADC inside a timer/ADC/interrupt bundle.
- C12.1 no longer hides branch/tag baseline control inside basic Git history.

Moved standards:
- C3.5 → Week 18.
- C4.3 → Week 19.
- C5.5 → Week 28.
- C13.6 → Week 31.

## Assessment / evidence changes

Seven premature Career aggregate semantic routes were replaced by eleven prerequisite-correct routes. Total semantic tasks are now **91** (74 CETa + 17 Career). All 81 Career standards have a required topic-specific semantic/performance route.

## Provenance / dependency changes

- Added an 81-row Career Standards & Curriculum Provenance Matrix with dedicated prerequisite, instructional-home, first-use, mastery-week, and evidence-route fields.
- Added a **concept-level dependency graph** containing CETa activation nodes, cross-track bridge nodes, and all 81 Career standard nodes.
- Rebuilt the 31-week woven map to show current standard locations and source basis.

## CETa preservation

The official CETa inventory remains **262 rows**, and the runtime CETa standard data is byte-for-byte semantically identical to the v16.3.39 runtime comparison used in QA. No official ETA competency wording or identity was rewritten by this release.

## Visual / aesthetic scope

No broad aesthetic redesign was performed. `styles.css` and `ux-system.css` are SHA-256 identical to v16.3.39. No color system, CETa/Career lesson color distinction, fonts, card styling, branding assets, navigation design, or layout system was changed. HTML modifications are limited to cache-busting/runtime delivery and the Document Center's current-version links/text.

## Runtime / deployment changes

- Career reconstruction cache-buster advanced to `v=16.3.40`.
- Service-worker namespace advanced to `alfred-u-v16-3-40-native-acceptance-repair-20260920`.
- `build-info.json` identifies runtime patch `16.3.40`.
- Standards provenance link and Document Center current artifacts now point to v16.3.40.
- Release Notes now place v16.3.40 before v16.3.39.

## QA

Native production-runtime QA: **62/62 PASS, 0 FAIL**.

The installed Chromium binary in this container failed to initialize even for a trivial headless page, so browser-render acceptance is not claimed. The runtime QA executes the production JavaScript in V8, compares v16.3.39/v16.3.40 state, scans reconstructed lesson content, validates metadata/routes, and checks unchanged aesthetic assets.
