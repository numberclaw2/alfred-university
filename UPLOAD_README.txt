AU-ESET 301 v16.3.21 — TRANSPARENT BRANDING ASSET SWEEP

UPLOAD EVERY FILE IN THIS ZIP DIRECTLY TO THE GITHUB REPOSITORY ROOT.
Replace matching files when prompted. Do not create a wrapper folder.

WHY THE PREVIOUS TWO-FILE UPLOAD DID NOT CHANGE THE WEBSITE
- The visible pages use crest.webp and seal.webp.
- alfred-university-crest.png and alfred-university-seal.png are source assets and are not the direct runtime images used by the current HTML/CSS.
- This package replaces BOTH the source PNGs and every actual runtime crest/seal/icon file.

FILES ADDED
- None

FILES MODIFIED
- alfred-university-crest.png
- alfred-university-seal.png
- crest.webp
- seal.webp
- icon-180.png
- icon-192.png
- icon-512.png
- site.js
- release-notes-current.js
- build-info.json
- service-worker.js
- POST-UPDATE-QA.md
- UPLOAD_README.txt
- SHA256SUMS.txt

FILES REMOVED
- None

INTENTIONALLY NOT CHANGED
- syllabus-cover.png
- resource-manual-cover.png
- assignment-lab-cover.png
- binder-index-cover.png
- certificate-cover.png
These are document/page thumbnails; their white/light backgrounds are part of the document artwork rather than a removable logo rectangle.

ALSO NOT CHANGED
- HTML page image paths
- manifest icon paths
- curriculum / lessons / Teaching Media
- calendar / assessments / mastery
- labs / projects
- Progress / Cloud Sync data model or protocol
- page layout / navigation architecture

EXPECTED RUNTIME
runtimePatch: 16.3.21
build: v16.3.21-transparent-branding-assets-20260918
releaseStatus: transparent-branding-assets
cache: alfred-u-v16-3-21-transparent-branding-assets-20260918

AFTER UPLOAD
- GitHub Pages should deploy the v16.3.21 commit.
- Reload the site once after deployment. The new service-worker registration forces an update check and the new cache namespace retires the previous image cache.
