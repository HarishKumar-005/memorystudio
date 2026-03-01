# MemoryStudio / MemoryRoom

Agent-guided 360° WebXR memory experience for Creative Apps — Agents League.

## What this is

MemoryStudio is a mobile-first A-Frame experience where users enter a 360° memory room, tap hotspots, and interact with an on-device rule-based agent using typed chat or voice input. Ambient procedural audio can be toggled on/off, and an optional serverless demo endpoint can auto-author a deterministic room JSON.

## MVP Features

- 360° panorama room using `assets/panorama.jpg`
- 3 interactive hotspots with image + caption overlay cards
- Rule-based local agent (`js/agent.js`) with deterministic intent replies
- Typed chat + Web Speech API voice input (graceful fallback)
- Speech synthesis narration using browser `speechSynthesis`
- Procedural ambient audio toggle (`js/audio-ambient.js`)
- Optional deterministic authoring stub (`api/author-room.js`) with no external API calls
- No API keys, no secrets

## Tech Stack

- HTML/CSS/JavaScript
- A-Frame (WebXR scene framework)
- Web Speech API (speech recognition where supported)
- Speech Synthesis API (TTS)
- Web Audio API (ambient loop)

## Project Structure

- `PRD.md`
- `README.md`
- `index.html`
- `styles.css`
- `js/agent.js`
- `js/hotspot-component.js`
- `js/audio-ambient.js`
- `api/author-room.js`
- `_redirects`
- `package.json`
- `demo-recording-instructions.txt`
- `.github/ISSUE_SUBMISSION.md`
- `LICENSE`

## Required Assets

Add these files to `assets/`:

- `panorama.jpg` (2:1 equirectangular, ~2048x1024 to 4096x2048, optimized ~1–3 MB)
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `small-thumbnail1.webp`
- `click.wav`
- `ambient_loop_hint.mp3` (optional reference asset)

## Local Run

### Option A: Python static server

```bash
python -m http.server 8080
```

Open: `http://localhost:8080`

### Option B: npm script

```bash
npm install
npm run dev
```

Open: `http://localhost:4173`

## Deploy

### Vercel (recommended)

- Deploy repo as-is.
- `api/author-room.js` is served as a serverless function at `/api/author-room`.

### Netlify

- Static UI deploys directly.
- `_redirects` includes SPA fallback and `/api/*` passthrough rule.
- If no function exists on Netlify, `Auto-Author (demo)` gracefully falls back to built-in local deterministic JSON.

## Manual Test Plan

### Mobile (Chrome on Samsung S21 FE)

1. Open app and verify panorama renders.
2. Tap `Play Demo`.
3. Tap each of the 3 hotspots and verify card + narration.
4. Type: `tell me about the cake` and verify deterministic response + TTS.
5. Tap `Speak` and test voice input (if permission/support available).
6. Toggle `Audio` on/off and verify ambient behavior.
7. Tap `Auto-Author (demo)` and verify endpoint response or local fallback message.

### Desktop (Chrome)

1. Verify scene interaction and hotspot clicks.
2. Verify typed chat and TTS.
3. Verify microphone prompt and speech fallback behavior.

## Acceptance Criteria Mapping

- AC1: Opening `index.html` shows panorama and 3 clickable hotspots.
- AC2: Input `tell me about the cake` returns pre-programmed agent response and speaks it.
- AC3: Demo video includes room entry, 2 hotspot interactions, agent question, and audio toggle.
- AC4: Repo includes README with Copilot usage log and submission instructions.

## Copilot Usage Log (Required)

Add screenshots and short notes from your implementation workflow.

- `docs/copilot-screenshot-1.png` — Prompt for A-Frame scene + hotspots
- `docs/copilot-screenshot-2.png` — Prompt for rule-based agent logic
- `docs/copilot-screenshot-3.png` — Prompt for audio fallback/refinement (optional)

Template:

1. **Prompt goal:**
2. **Copilot suggestion summary:**
3. **What you accepted/edited and why:**
4. **Outcome:**

## Suggested Commit Sequence

- `feat: scaffold MemoryStudio core WebXR scene and overlays`
- `feat: add hotspot interactions, rule-based agent, and ambient audio toggle`
- `feat: add deterministic author-room serverless stub with fallback`
- `docs: add README, test plan, copilot usage log placeholders, and submission template`
- `chore: add license and optional local dev scripts`

## Security & Privacy

- No API keys or secrets are included.
- No personal data is persisted server-side.
- Authoring endpoint returns deterministic sample JSON only.

## Demo Recording Checklist

See `demo-recording-instructions.txt`.

## Submission

Use `.github/ISSUE_SUBMISSION.md` as the exact issue text to paste into `microsoft/agentsleague`.
