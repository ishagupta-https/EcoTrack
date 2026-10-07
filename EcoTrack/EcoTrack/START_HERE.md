# EcoTrack — Complete Source Code

Prepared for Isha Gupta, SY IT A, Roll 55.
This is the latest source snapshot, including the login/register UI update.

## What is included
- React / TypeScript dashboard, responsive neon theme, charts and impact simulator.
- Electricity, transport and waste assessment forms; history and CSV export.
- Profile, registration onboarding, login-state checks and sign-out controls.
- Sorting game, memory puzzles and driving game, each with 100-level progression.
- Achievements, community totals, level maps and calculation logic.
- Server API routes, Cloudflare D1 database schema and SQL migrations.
- Build scripts, dependency lockfile, static assets and the original framework README.

## Open in VS Code
1. Extract this ZIP fully. Do not run files inside the ZIP viewer.
2. Open the extracted EcoTrack folder in VS Code.
3. Open Terminal > New Terminal in that folder.
4. Install Node.js satisfying package.json (Node >=22.13.0; use Node 24 if available).
5. Install the pinned package manager, then project dependencies:

```sh
npm install -g pnpm@11.25.0
pnpm install --frozen-lockfile
```

This source uses pnpm-lock.yaml. Avoid mixing npm and pnpm installs.
The first installation downloads dependencies; node_modules is not in this ZIP.
For Windows, these commands can be run in PowerShell or the VS Code terminal.

## Prepare the local database (first setup only)
Build once to generate the local Worker configuration:

```sh
pnpm run build
```

Apply these schema migrations in order to a NEW local database:

```sh
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_true_the_professor.sql
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0001_busy_zemo.sql
```

Do not rerun these raw CREATE TABLE migrations against an already initialized database.
Local database records are separate from hosted records.

## Start development

```sh
pnpm run dev
```

Open the localhost URL printed by the terminal (normally http://localhost:5173).
The clean exported checkout defaults to the portable execution profile.
On loopback development only, the included framework provides a simulated sign-in
account for testing. It is not a real user login and is not production authentication.
See README.md for details. Complete the household profile after the simulated sign-in.

Optional checks and build:

```sh
pnpm exec tsc --noEmit
pnpm run build
```

## Main files
| Path | Purpose |
|---|---|
| app/dashboard.tsx | Main dashboard, profile and activity forms |
| app/globals.css | Theme, responsive styling and animations |
| app/overview-chart.tsx | Trend and source-comparison graphs |
| app/impact-lab.tsx | What-if simulator and insights |
| app/eco-game.tsx | Sorting missions and achievements |
| app/arcade-games.tsx | Memory puzzles and car game |
| app/drive-engine.ts | Driving simulation and collisions |
| app/level-config.ts | 100-level difficulty settings |
| app/level-map.tsx | Chapter and level selection |
| app/account-controls.tsx | Login, user name, register and sign-out UI |
| app/register/page.tsx | Registration/profile onboarding page |
| app/session-server.ts | Server-verified session state |
| app/api/session/route.ts | Session status endpoint |
| app/api/data/route.ts | Profile and assessment API |
| app/api/game/route.ts | Saved sorting progress API |
| app/chatgpt-auth.ts | Hosted identity-provider integration |
| db/schema.ts | Tables: profiles, assessments, game_stats |
| drizzle/ | SQL migrations and schema metadata |
| .openai/hosting.json | Existing Site identity and DB binding |
| vite.config.ts | Framework and Worker configuration |

## Hosting and authentication
This is a full-stack Vinext / React / Cloudflare Worker project, not a plain HTML site.
Uploading this source directly to GitHub Pages will not run the backend, database,
or account system. Moving to another host requires compatible Worker hosting and
configuration of database bindings and authentication. The existing hosted sign-in
is provided by the Sites platform; registration creates a linked EcoTrack profile,
not a separate password database. Do not fake identity headers in a public deployment.

The Site manifest retains the existing project ID for provenance. It is not a password.
The archive contains no authentication tokens, environment secrets, hosted database
records, browser cookies, node_modules, .git history or disposable runtime caches.

## Data and calculations
Carbon factors are illustrative educational estimates, documented inside the app.
Sorting progress is saved to the account for signed-in visitors; guest sorting,
driving unlocks and puzzle unlocks use browser storage as labelled in the interface.
Sample dashboard data is clearly marked.

## Verification
The included source passed its hosted build and TypeScript checks. Game progression
and driving logic checks were run, along with signed-in/guest/loading account UI checks.
The complete browser sign-in round trip and installation on your own computer have
not been verified. Setup commands above follow the included project configuration.
