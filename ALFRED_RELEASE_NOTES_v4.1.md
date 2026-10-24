# Alfred University — v4.1 Persistent Cloud Sync Connection Monitor

Date: 2026-10-24
Scope: Website connectivity visibility and safe connection recovery, **not** a certification or curriculum revision.

## What changed

1. Added a compact persistent connection indicator inside the sticky academic header. The status is visible on all 16 principal routes, including narrow mobile layouts and focus mode. It links directly to `progress.html#cloud-sync`.
2. Status is **NOT CONNECTED** when no saved Cloud Sync configuration exists; a config flag alone never triggers the green **CONNECTED** label.
3. When configured and online, the browser performs an authenticated **read-only** protocol-2 POST to the existing Cloudflare Worker `/sync` endpoint, with `records: []`. A successful HTTP response containing a real `records` array is required before presenting **CONNECTED**. No records are written by the heartbeat.
4. Network failure, rejected credentials, and offline state have visibly distinct states. The client checks on opening the page, returning to the tab, browser network changes and approximately every two minutes while visible.
5. Restored a safe `Connect to your existing Alfred Cloud Sync` interface in Learning Record. It accepts the **existing** HTTPS Worker URL and private existing Student Sync Key, verifies the key without a progress upload, and only then saves the connection in the established browser storage entry `alfred-u-sync-config-v1`.
6. `Sync CETa progress now` remains an **explicit user action**. During manual sync, the indicator reflects the operation and any reported failure.
7. Bumped the service-worker cache to `alfred-ceta-v4.1-connection-monitor-20261024` so browsers load the new script and styles.

## Source and data preservation

Unchanged: course.js, course.json, the 30-module curriculum, all 373 teaching pages, 200 new mock-exam questions, historical assessments, progress schema, localStorage keys, Cloud Sync protocol 2, all stored learner progress, PDF book, Grizzlies identity and lesson files.

The recovery key is **never embedded** in uploaded files, rendered in the indicator, or added to backup exports. It remains client-side in browser storage as in previous Alfred versions, and is sent exclusively to the HTTPS Worker URL the learner configures.

## Semantic limitations

- **Connected** means the Worker accepted a read-only authenticated request **now**. It does *not* mean every private draft, score-history entry or local object has been uploaded, nor that another device has received progress.
- Historical v4.0 sync transfers module-level CETa records via `week:N`. It does not yet sync every independent record type, e.g. local exam draft sessions, personal PDF or unrelated client-only fields.
- A device-local PDF is not uploaded by Cloud Sync. Full bundled study-guide PDF is not service-worker cached.
- A status check can fail due to local network problems, browser privacy policies/CORS, server downtime, or invalid credentials. Do not rely on status alone to replace regular JSON backups.
- Live authenticated access to the user's actual Worker and real multi-device acceptance remain outstanding. Browser simulation is not a real-account connection proof.

## Deployment

Upload all replacement files from this ZIP to the repository root. Do not upload the study guide again. After Pages deploys, open Learning Record, export a progress backup, and follow the new Cloud Sync instructions. Verify from each device; keep your private key out of screenshots and GitHub.
