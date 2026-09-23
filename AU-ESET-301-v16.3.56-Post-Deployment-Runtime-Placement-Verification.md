# AU-ESET 301 v16.3.56 — Post-Deployment Runtime Placement Verification

**Date:** September 23, 2026  
**Verdict:** PASS

## Scope

This hotfix is a runtime/content-placement correction only. It does not redesign the site, change CSS/layout/navigation, rewrite assessments/labs/projects, or remove the CETa Study Guide integration.

## Defects found in v16.3.55

1. Five long Career section IDs did not match the composed live IDs, leaving 11 contextual placements orphaned.
2. Two live substantive sections were absent from the v16.3.55 placement blueprint:
   - Week 13 Career — **Choose the representation that answers the troubleshooting question**
   - Week 27 Career — **Summaries and plots answer a hardware question**
3. The legacy Week 4 **Number systems and Boolean algebra** section was still visible despite the accepted move to Week 11 digital instruction.
4. The v16.3.55 outside-literature rebuild cleared `byPlacement` without rebuilding it, so lesson-level written companions could be treated as generic references.
5. Learn, Study, and Engineering Library still requested the architecture script with the old `v=16.3.51` cache key.

## Verified repair result

The v16.3.56 overlay was executed against the exact current `main` runtime composition and audited after all existing curriculum/assessment/resource scripts loaded.

- **31** modules
- **491** live teaching sections
- **1,020** contextual placements
- **515** contextual literature placements
- **0** contextual placements targeting a nonexistent live section
- **0** live teaching sections missing Required video support
- **0** live teaching sections missing Required written-literature support
- **0** contextual literature placements missing reading metadata

Canonical architecture remains:
- **251** Required assignments
- **77** Study assignments
- **19** Engineering Library assignments
- **347** total canonical assignments
- **321** unique source IDs

## Protected systems

The hotfix does not intentionally alter CETa Study Guide integration, media-consumption controls, saved progress identities, labs, assessments, projects, Cloud Sync protocol, glossary behavior, or visual design.
