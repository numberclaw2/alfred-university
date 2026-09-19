# AU-ESET 301 v16.3.29 — Glossary Coverage & Section-Scoped Highlighting Verification

## Purpose
v16.3.29 expands Alfred's in-house vocabulary support so field-specific language can be understood without leaving the lesson, while keeping the Classroom visually readable. The learner requested two simultaneous behaviors:

1. substantially more electrical/electronics/physics/signals/embedded/test vocabulary should have definitions; and
2. a term should appear as a glossary link only once inside a numbered instructional section, but may be highlighted again when a later numbered section introduces or uses that concept in a new context.

This is a vocabulary-support/runtime change. It does not rewrite the curriculum or change completion, assessment, mastery, calendar, Progress, or Cloud Sync rules.

## Glossary coverage expansion
- Previous glossary: **282 entries**.
- v16.3.29 glossary: **599 entries**.
- Net expansion: **317 additional canonical technical concepts**.
- Categories retained: **15**.
- Stable canonical slugs: **599 / 599 unique**.
- Entries missing a plain-English definition: **0**.
- Entries missing a technical definition: **0**.
- Entries missing pronunciation: **0**.
- Entries missing source provenance: **0**.
- Entries missing course-week mapping: **0**.
- Alias-to-canonical collisions after final cleanup: **0**.

The source scan started from the actual AU-ESET 301 curriculum/lesson runtime rather than a generic electronics word list. It identified roughly **353 additional technical-looking candidate terms/phrases** not represented in the prior glossary. Candidates were manually filtered for specialized instructional value. After expansion, the residual candidate set was reduced to roughly **32**, dominated by generic English/software words (for example task, priority, list, variable, function, graph, and similar terms) or concepts already represented by a more precise glossary entry.

### Examples added for the early electrical-foundations lessons
The expansion now covers concepts visible in the learner's Week 1 material such as:
- atom, proton, neutron, electron
- positive charge, negative charge, charge carrier
- coulomb, joule
- conductor, insulator, wire
- electron drift / electron motion
- conventional current
- electric potential and electrical potential difference
- reference node, circuit common, terminal
- battery, electrical component, electrical load
- SI unit and SI prefix vocabulary
- kilo, mega, milli, micro, nano, pico
- closed circuit, return path, circuit loop

This means sentences like those in the Week 1 Current and Voltage sections can expose substantially more unique technical vocabulary without repeatedly decorating every occurrence of the same word.

### Later-course coverage
The expansion also adds or broadens vocabulary across:
- circuit analysis and networks
- passive and active components
- AC, waveforms, filters, resonance, noise, distortion, clipping, damping
- measurement and instrumentation
- semiconductors and transistor behavior
- power conversion, regulation, efficiency, derating, UVLO
- digital logic and number systems
- microcontrollers, firmware, memory, state machines, scheduling
- UART, I²C, SPI, CAN, LIN, USB and related interface concepts
- PCB layout, DRC/ERC, clearance, creepage and assembly/workmanship
- RF, modulation, channel, spectrum and antenna concepts
- troubleshooting, fault isolation, substitution testing and validation
- hardware-test automation and supporting software vocabulary

## Definition/source policy
New entries follow the accepted Alfred Glossary architecture: concise teaching paraphrases are used inside Alfred, with authoritative source provenance attached to the entry. Source families include IEC Electropedia, NIST SI and measurement references, OSHA, IPC, Arm, STMicroelectronics, NXP, FCC, Python documentation, and NIST cybersecurity terminology where appropriate.

The source link remains the controlling reference when a formal standard uses a narrower definition than Alfred's plain-English teaching explanation.

## New Classroom highlighting boundary
The previous runtime selected at most one anchor per canonical glossary concept across the complete rendered lesson stage. That avoided repetition, but it was too restrictive: once a term appeared in an early section, later sections could not offer the learner another convenient definition link.

v16.3.29 changes the unit of deduplication to the numbered instructional section (`.integrated-teaching-block`):

- **Inside one numbered section:** one highlighted occurrence maximum per canonical glossary concept.
- **When the next numbered section begins:** the same canonical concept becomes eligible again.
- **Inside the new section:** Alfred again chooses only one best occurrence.
- **When a page does not contain numbered instructional blocks:** the complete content root remains the fallback scope.

Example: `electric charge`, `electric current`, and `circuit` may each receive one glossary anchor in Section 2 and one again in Section 3, while repeated uses inside either individual section remain ordinary text.

## Placement discernment retained
The larger glossary does not mean every dictionary match is automatically decorated. Within each section Alfred still evaluates candidate quality before creating an anchor. The runtime:

- prefers direct explanatory or definitional prose;
- prefers fuller self-disambiguating technical phrases when they are present;
- can use a shorter valid technical alias when the fuller phrase does not occur in that section;
- excludes headings, buttons, form controls, existing links, code/preformatted text, hidden content and glossary UI;
- deprioritizes question/quiz/prompt-like surfaces and recap/aside surfaces when stronger teaching prose exists;
- uses a minimum quality threshold, so a term can remain unhighlighted if there is no good instructional placement.

## Inflection and false-positive safeguards
### Conservative plural matching
Canonical technical nouns can match common textbook plurals (for example electron/electrons, terminal/terminals, wire/wires). Plural generation is intentionally limited to canonical terms rather than arbitrary aliases so ordinary verbs cannot be manufactured into false matches.

### Acronym case safety
Uppercase acronym/protocol variants require the expected written capitalization. This prevents ordinary English words such as `can` or `am` from becoming links to CAN bus or AM modulation.

### Common-word context gating
Technical terms that can also appear in ordinary English are subject to nearby technical-context evidence. Examples include load, source, terminal, signal, filter, noise, trigger, frame, address, buffer, channel, component, switch, loop, network, driver, range, instrument, specification and substitution.

Generic aliases that created unnecessary risk were also tightened. For example, RX/TX no longer auto-match bare ordinary verbs `receive` and `transmit`; more technical phrases such as `receive signal` and `transmit signal` are used instead.

## Native Classroom verification
The actual Week 1 Classroom composition was rendered in headless Chromium using the v16.3.29 candidate files, not a simplified string-only mock.

Results:
- actual Week 1 CETa lesson rendered successfully;
- **16 numbered instructional blocks** were present;
- **0 page JavaScript errors**;
- **0 duplicate canonical glossary slugs inside any single numbered block**;
- `electric current`, `electric charge`, and `circuit` were all allowed to reappear as glossary anchors in later numbered sections;
- uppercase acronym safeguards prevented ordinary `can` from becoming CAN bus;
- RX/TX alias cleanup prevented ordinary `receive/receives` text from becoming RX;
- early sections exposed substantially more distinct technical vocabulary than v16.3.28.

Representative later-course native renders were also tested:

| Week | Area sampled | Teaching blocks | JS errors | Duplicate glossary slugs inside a block | Common-word false-match guard |
|---|---|---:|---:|---:|---:|
| 8 | Semiconductors | 6 | 0 | 0 | PASS |
| 11 | Digital logic | 10 | 0 | 0 | PASS |
| 18 | I²C / SPI interfaces | 8 | 0 | 0 | PASS |
| 20 | RF / communications | 13 | 0 | 0 | PASS |
| 27 | Computer/test workflow | 6 | 0 | 0 | PASS |

## Full Glossary page verification
The complete `glossary.html` surface was rendered natively with the expanded dataset.

- Rendered glossary cards: **599**.
- Summary count: **599 / 599**.
- Page JavaScript errors: **0**.
- Search for `conductor`: returned the conductor entry as expected.
- Acronyms & Abbreviations view: functional.
- Sources view: functional and grouped by authoritative source family.

## Study and Search integration
The Glossary remains the single vocabulary source of truth.

- Study → Vocabulary Study Lab loads the same `ALFRED_GLOSSARY` array and reports **599 available course terms** in the All Course scope.
- Search Everything loads the same dataset and returns expanded Glossary Term results, including new entries such as `conductor`.
- No second/duplicated vocabulary database was introduced.

## Cache/deployment integration
- Classroom loads `glossary-data.js?v=16.3.29` and `glossary.js?v=16.3.29`.
- Glossary, Study and Search load the cache-busted expanded glossary data.
- Service-worker cache namespace advances to `alfred-u-v16-3-29-glossary-expansion-section-highlighting-20260919`.
- Build metadata reports runtime patch `16.3.29`.

## Protected systems
No changes were made to:
- curriculum wording or lesson sequence;
- Teaching Media assignments;
- assessment questions, scoring or readiness policy;
- mastery formulas;
- lab/project requirements;
- calendar dates, event IDs or UIDs;
- Progress identities/history;
- Cloud Sync protocol;
- global v16.3.28 UX architecture;
- branding artwork.

The patch changes vocabulary coverage and glossary-link placement only.
