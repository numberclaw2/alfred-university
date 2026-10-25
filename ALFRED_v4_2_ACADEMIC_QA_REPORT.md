# Alfred University v4.2 — Academic-focused verification and honest limitations

**Baseline**: deployed v4.1, commit `7eaa75e381e65670bf913b043c5f4270749dd596`; local curriculum files checked by SHA-1 Git blob against that commit's deployed files.

**Authority**: 2025 ETA CETa competency requirements: https://www.etai.org/comps/CETa_comps.pdf ; Sixth Edition official errata: https://www.etai.org/6thEdASTErrataSheet.pdf ; formula sheet: https://www.etai.org/Common_Formulas.pdf . Original scanned book is image-only: seven risk pages visually inspected (printed pp 23, 47, 48, 74, 138, 202, 224).

## Completed review

- **53** substantive lesson addenda, directly rendered in existing instructional pages across 28 modules.
- **262** mapped competency records, each with teaching section/pages and distinct lists for existing scored tags, new mock question tags and diagnostic tags.
- **162** official objectives absent from both new 100-question mock forms, because the forms sample the same 100 objective IDs. **48** objectives lacking either older scored or fresh-mock tags. Treat these as coverage weaknesses, not proofs of completely absent teaching.
- Restored precision around distinctions likely to cause incorrect exam answers: CAT meter safety; fire class and ESD vs shock; reactance/phasors; loaded divider; RMS; resonance and Q; thyristor family; rectifier ripple; feedback gain; logic polarity; RF tuning and service documentation.

## Verified preservation

- Exactly 30 modules and 373 teaching pages with unchanged per-module page IDs and order.
- Exactly 635 original scored-question placements, unchanged prompts, options, answer keys and IDs.
- Two 100-item newly-authored practice forms preserved without rewriting their answer keys.
- Existing candidate diagnostics, readings, labs, module identifiers, old progress storage keys, Cloud Sync implementation, and original bundled 234-page PDF preserved; PDF not duplicated in release ZIP.
- Unit checks explicitly cross-validated resonance examples, phase/impedance arithmetic, dB power vs voltage ratios, loaded divider and reactive impedance.
- JavaScript `node --check` on newly generated `course.js` PASS; 36 principal Chromium route/viewport renders PASS (mobile 390px, desktop 1280px; no JS exceptions or horizontal overflow); **53/53 newly revised lessons individually rendered at mobile width** with all new headings visible and no JavaScript errors or overflow.

## Limitations

- Passing browser rendering proves presentation, not technical correctness of all teaching statements.
- Only selected book pages were visually inspected. The full 234-page scanned Sixth Edition has not undergone exhaustive passage-level content verification in this revision.
- External independent subject-matter review of all 200 fresh mock questions and 60 diagnostic questions is still pending.
- The official ETA competency categories are not necessarily distributed proportionally in the actual 100-question examination; no unauthorized exam blueprint weights were assumed.
- No live Cloudflare, iPhone Safari or authenticated cross-device tests were attempted; that is deliberately outside this academic-focused scope.
- Printed page 47's apparent inverted formula was independently noticed; it is *not* listed as an official errata correction and remains an explicitly labeled editorial concern, backed by dimensional analysis.
