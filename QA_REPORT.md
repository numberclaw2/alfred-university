# Alfred University v15.4 Focus-Resilient Study QA

## Result

Run:

```text
node qa-v154/regression.cjs
```

The regression suite checks JavaScript syntax, routed HTML structure, local references, navigation order, academic data inventories, service-worker assets, calendar completeness, Study recovery hooks, and the current-week defaults for assessment and lab browsing.

## Manual validation still recommended after upload

The available environment does not include a runnable Chromium binary, so this report does not claim a screenshot pass. After upload, test the following at desktop and mobile widths:

1. Start a Standard Study session, advance one step, refresh, and resume it.
2. Turn Quiet Mode on and off; confirm required content remains available.
3. Open Focus Mode and close the session without marking the scheduled work complete.
4. Open Assessment Center and Lab Center; confirm current-week-first behavior and the All weeks escape hatch.
5. Verify one long Week 1 event, one lab, and one Project 1 event in Calendar Month, Week, and Agenda views.

