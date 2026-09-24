# AU-ESET 301 v16.3.61 — Built-In Private CETa Study Guide QA

## Scope

Narrow learner-experience change only: replace the device-import workflow for the learner-owned Associate CET Study Guide with a bundled private-repository asset.

## Preserved invariants

- Core curriculum release remains **v16.3**.
- Cloud Sync protocol remains **2**.
- Existing Study Guide map remains authoritative.
- **64 Required / 133 Study-Review / 27 Reference-Historical** printed pages remain unchanged.
- **14 Required weeks / 17 zero-new-Required weeks** remain unchanged.
- Printed-page to PDF-page offset remains **+10**.
- Week 4 -> Week 11 number-systems sequencing remains unchanged.
- Study Guide errata and current-authority rules remain unchanged.
- Opening the PDF does not create mastery or completion evidence.

## Functional behavior

- Existing `[data-private-guide-open]` controls open the bundled PDF at the mapped page.
- `[data-private-guide-choose]` and `[data-private-guide-forget]` controls are hidden in bundled mode.
- Compatibility `connect()` and `forget()` methods remain present so older callers do not throw.
- Study-page estimated-time and after-reading enhancements are preserved.
- The Study Guide runtime does not hard-code a Cloud Sync exclusion. Cloud interaction is permitted; PDF transfer is simply not implemented by this patch.

## PDF verification

- Bundled file: `Associate_CET_Study_Guide_Sixth_Edition.pdf`
- Physical PDF page count: **425**.
- Render spot checks completed for PDF pages **1, 11, and 425**.
- PDF page 11 begins Chapter 1, consistent with the accepted **printed page + 10** locator rule.

## Deployment boundary

The repository became private before this patch was prepared, and the current GitHub connector no longer had access to the private repository. Therefore this package is intentionally a fail-closed local patch against v16.3.60 rather than a direct repository write. Post-upload repository/deployment verification should be run after the private-repo connection is restored or after the user uploads the patch.
