AU-ESET 301 v16.3.5 — REFERENCE / VERSION SYNC

Upload EVERY file in this ZIP to the ROOT of the GitHub repository.
Replace matching files and add release-notes-current.js.

This corrects the documentation/version-sync omission from the initial
v16.3.5 Teaching Media upload.

IMPORTANT:
- Keep teaching-media-overrides.js. Do not delete it.
- Keep learn.html from the prior v16.3.5 upload; it already loads
  teaching-media-self-reliance.js after teaching-media-overrides.js.
- Do not upload the ZIP itself.
- Do not create a wrapper folder.
- No Cloudflare Worker or D1 changes are required.
- No progress reset or calendar re-import is required.
