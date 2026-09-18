AU-ESET 301 v16.3.6 — FINAL-AUDIT RELEASE CANDIDATE

THIS PACKAGE IS FOR FINAL ACCEPTANCE QA. DO NOT TREAT IT AS THE ACCEPTED PRODUCTION RELEASE YET.

Candidate integration rules:
- Keep curriculum-data.js unchanged as the accepted v16.3 curriculum.
- Keep teaching-media-overrides.js.
- Keep teaching-media-self-reliance.js.
- Add teaching-media-content-completion.js after teaching-media-self-reliance.js.
- Use the supplied learn.html so the Classroom loads the new overlay in that exact order.
- Use the supplied service-worker.js so the new overlay is cached and the old Alfred caches are retired normally.
- build-info.json identifies runtime candidate 16.3.6 while course release remains 16.3 and evidence revision remains 16.2.
- No Cloudflare Worker or D1 changes are required.
- No progress reset is required.
- No calendar re-import is required.
- Do not clear browser site data as a normal deployment step.

Final production upload instructions will be issued only after the 31-week standalone-media audit and final regression pass.
