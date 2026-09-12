ALFRED UNIVERSITY v15.1 - CUMULATIVE REPLACEMENT FILES

This package includes the v15 consolidation and the v15.1 quality patch.
Use this ZIP instead of the earlier v15 package. It upgrades the existing
v14.2 or v15 website; it is not a standalone copy of the whole repository.

1. Before updating, export a Progress backup and keep your recovery key safe.
2. Extract the ZIP. Upload the website files to the ROOT of your existing
   alfred-university repository, replacing files with the same names.
   Do not upload the ZIP itself as the website.
3. Keep all existing files and directories that are absent from this package.
   No repository deletion, Worker deployment, D1 migration, or key reset is needed.
4. UPLOAD_README.txt and QA_REPORT.md are instructions; uploading those is optional.
5. Wait for GitHub Pages deployment to complete. Close other Alfred tabs and
   reopen the site online so the new service worker can install its cache.
   Do not clear website data: that can erase unsynced local progress.

QUICK POST-UPLOAD CHECK
- More > Release Notes, or About > Site Administration > Release Notes, shows v15.1 at the top.
- Main navigation: Home / Study / Week / Calendar / Practice / Progress / Mastery.
- Practice opens both Lab Center and Assessment Center.
- Your saved progress, scores, notes, and lab records remain present.
- Mastery's Review in Study action adds the selected competency to Study.
- Search finds Academic System Guide and labels the old binder ARCHIVED.
- The Lab Manual cover says Revision 2.0 - v15.1.
- After one complete online load, try a Week or Quiz deep link offline.

Cloud Sync remains on the existing production Worker and protocol 2.
The advanced server field now has Save Server & Reconnect. Only change it
when you control and trust the replacement server.

See QA_REPORT.md for verified checks and the browser-testing limitation.
