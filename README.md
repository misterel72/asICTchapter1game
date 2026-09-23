# Escape the Mainframe

A self-contained AS ICT Chapter 1 revision escape-room game. Five sectors, 18 challenges and a three-stage boss encounter. Original orbital-station scenarios aligned to the supplied Chapter 1 student knowledge bank. This is a puzzle adventure with a platform-game visual theme, not a movement/jumping platformer.

## Play

Open `index.html` in a modern browser, keeping the other files alongside it, or deploy the folder as a static site. No installation, account, external font, API key, framework or build command is required. The downloaded folder runs offline. The hosted version needs internet to load; it does not install an offline cache.

Use Tab to move and Enter/Space to activate controls. Select evidence records, choose answers, connect labels and build a processing sequence. Hints, unlimited retries and an exam command-word glossary are built in. Sound is optional and off by default. No countdown or reflex penalty.

## Netlify deployment

Import this GitHub repository into your Netlify account. Select branch `main`, leave the build command blank and use `.` as the publish directory. `netlify.toml` supplies static-site settings and security headers. No environment variables or server are needed. Select an appropriate existing plan; this project does not require purchasing a plan or add-on.

The GitHub repository URL is not the student game URL. Share the published Netlify URL only after checking it on the school's devices and network. Do not enable analytics or student data collection without the school's approval.

## Teaching notes

Suggested session: 25–30 minutes, followed by a short written explanation or discussion. Pace has not yet been measured with pupils. All puzzles are untimed. Use the knowledge bank alongside the game if desired.

| Sector | Focus |
| --- | --- |
| Raw Data Vault | Data, information, context, units and labels |
| Processing Plant | Selection, checking, calculation, comparison and presentation |
| Source Labyrinth | Direct/indirect, static/dynamic and purpose |
| Investigation Chamber | Collection methods, neutral questions and sampling |
| Evidence Reactor | Relevance, reliability, bias, currency and appropriate data use |
| NULL Core | Challenging claims, corroboration and supported judgements |

XP is a game reward, not a grade: 100 per puzzle, minus 10 for each earlier unsuccessful test and 10 for a hint, minimum 50. Incomplete submissions do not count as tests. The report highlights topics to revisit and can be downloaded as plain text.

This is formative revision, not a secure baseline assessment. It checks recognition and application but not the quality of extended written answers. It cannot establish an AS grade or replace exam-style written assessment. Client-side answers can be inspected, so there is deliberately no anti-cheat claim, tab tracking or clipboard blocking.

## Privacy and saved progress

The game has no accounts, name fields, analytics, tracking scripts or remote answer submission. Progress, attempts, hints and the sound preference are saved in this browser's local storage. They do not follow a pupil between devices. Draft answers are not saved. If local storage is blocked, the current session still works but cannot resume after a reload.

On shared computers, download any wanted report, then choose Field guide > Clear my progress. This resets only this game's record, not unrelated browser data. Hosting providers may maintain their normal request logs separately from the game.

## Files and editing

- `content.js`: puzzles, answer keys, feedback and glossary. Answer indexes start at zero.
- `engine.js`: answer validation, progression, XP and saved-state validation.
- `app.js`: interface, input events, save/resume and report download.
- `style.css`: responsive layout and game artwork.
- `test.cjs`: dependency-free logic checks, run with `node --test test.cjs`.

Keep task IDs stable when changing wording to preserve progress. If changing the meaning or order of puzzles, increase the save version and storage key deliberately. Review any added content for syllabus fit and reading accessibility.

## Release checks

Seven automated logic tests pass. JavaScript syntax checks pass. Local browser visual preview was unavailable in the build environment. Before classroom release, test the published game at desktop and phone widths, play every puzzle type, reload midway, try a wrong answer and a hint, finish the boss, download a report and reset. Test with keyboard only and with the school's browser/network. No live hosting URL has yet been verified.
