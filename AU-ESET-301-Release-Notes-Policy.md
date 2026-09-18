# AU-ESET 301 — Release Notes & Change-Control Policy

**Effective:** September 18, 2026  
**Effective runtime:** v16.3.10 and later  
**Applies to:** every Alfred University website upload, patch, repair, content change, visual change, file addition, file replacement, file removal, and maintenance change.

## Permanent rule

No website update is considered ready for delivery unless its Release Notes are updated in the same package.

This applies regardless of size. A one-line wording correction, link replacement, visual swap, renamed file, deleted file, cache change, instructional update, assessment fix, calendar edit, documentation adjustment, or large system rebuild must be recorded.

## Every future release entry must contain

1. **Version and date.**
2. **Title and change type.**
3. **The request/reason that caused the change.**
4. **What changed**, including small behavioral, instructional, visual, technical, and documentation changes.
5. **What was added.**
6. **What was changed/replaced.**
7. **What was removed or retired.** If nothing was removed, record an empty removal list rather than silently omitting the category.
8. **Exact files added.**
9. **Exact files modified.**
10. **Exact files removed.**
11. **Protected systems that were intentionally left unchanged** when scope boundaries matter.
12. **QA or verification performed** before the package is delivered.
13. **Build/service-worker revision** when runtime files or cached website assets change.

## Required file-change fields

Beginning with v16.3.10, each new `window.ALFRED_RELEASES` entry should use these fields in addition to the normal narrative fields:

```js
filesAdded: [],
filesModified: [],
filesRemoved: []
```

The Release Notes page renders these lists when present.

## Historical backfill

The human-readable release history already contains **42 unique release records from v1.x through v16.3.9**. Those narrative entries remain part of the permanent record.

A separate `release-change-ledger.js` backfills **all 63 GitHub commits from the original September 11, 2026 repository build through the v16.3.9 baseline**. This includes upload commits whose repository tree did not change. Each ledger entry preserves the commit SHA, timestamp, line additions/deletions, and a direct link to the exact GitHub diff.

Historical release summaries and the repository ledger serve different purposes:

- **Release summaries** explain why the site changed and what the change means.
- **Repository ledger entries** preserve the exact Git history and provide a path to the file-by-file diff.

## Self-reference rule

A release cannot know the Git commit SHA that will be created when its own upload is committed. Requiring a second commit solely to record that SHA would create an endless bookkeeping loop.

Therefore:

- The historical repository ledger is frozen/backfilled through the **v16.3.9 baseline**.
- Beginning with **v16.3.10**, the release entry itself is the authoritative pre-deployment file manifest through `filesAdded`, `filesModified`, and `filesRemoved`.
- GitHub remains the authoritative post-deployment commit/diff record.
- A later release may update the historical ledger when useful, but no follow-up commit is required merely to record the SHA of the release that just added a ledger entry.

## Deletions and subtractions

Removal must be explicit. If a resource, file, feature, diagram, lesson item, video, document, route, cache entry, or other site element is deleted, replaced, retired, or intentionally stopped from loading, the Release Notes must say so.

A replacement should name both sides when practical—for example: **“Removed X; replaced with Y.”**

## Scope discipline

Release Notes must distinguish between:

- what changed,
- what did not change,
- what was deliberately deferred.

This is especially important for week-by-week instructional updates so a Week 1 change does not imply that Weeks 2–31 were also rewritten.

## Packaging rule

Every future upload package produced for this site must include the updated Release Notes files required by that change. If the package changes runtime/cache behavior, it must also include the synchronized build metadata and service-worker cache revision.

This policy is part of the website maintenance contract going forward.
