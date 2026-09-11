# Alfred University

Static GitHub Pages frontend for the fictional Alfred University independent-study environment.

## Hosting

The website itself is hosted on GitHub Pages from the repository root. `index.html` must remain at the repository root.

GitHub Pages hosts the HTML, CSS, JavaScript, images, PDFs, calendar file, and installable web-app manifest.

## Student Progress and Cloud Sync

The Student Progress Portal works offline-first using browser storage.

Optional cross-device sync uses a separate Cloudflare Worker + Cloudflare D1 backend. The frontend remains static on GitHub Pages; the Cloudflare backend stores synchronized progress records when the user explicitly connects it from the Progress page.

There is no conventional username/password account system. Cross-device sync uses a private Alfred University Student Sync Key.
The Student Sync Key authenticates access, but synchronized D1 record contents are not end-to-end encrypted. Avoid storing sensitive secrets in Personal Notes.

> Alfred University is a fictional independent-study environment for personal learning and is not an accredited institution.
