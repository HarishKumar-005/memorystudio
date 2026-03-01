# MemoryStudio / MemoryRoom

Agent-guided 360° WebXR memory experience for Creative Apps — Agents League.

## Purpose

MemoryStudio demonstrates a polished, mobile-first 360° memory room where users can explore an immersive scene, interact with meaningful hotspots, and talk to a local on-device agent. The project is intentionally reliable for demos: no API keys, no external LLM dependency, and deterministic fallback behavior.

## Final Scope (Submission Build)

- 360° A-Frame panorama scene
- 2 interactive hotspots: **Birthday Cake** and **Handwritten Note**
- Rule-based local agent for typed/voice prompts
- Browser TTS narration for responses and hotspot highlights
- Ambient procedural audio toggle
- Optional deterministic `/api/author-room` serverless stub with client fallback

## Features

- **Immersive Scene:** 360° environment using `a-sky` in `index.html`
- **Hotspot Interactions:** tap hotspot to open image + caption card and trigger narration
- **Agent Chat:** deterministic replies from `js/agent.js` for cake/note intents
- **Speech Support:** Web Speech API input when available, typed fallback always works
- **Audio Control:** ambient audio starts only after user interaction and can be toggled
- **Auto-Author Demo:** attempts `/api/author-room`, falls back to local room spec if unavailable

## Project Structure

- `index.html` — scene, UI overlays, interaction wiring
- `styles.css` — responsive mobile-first styles
- `js/hotspot-component.js` — hotspot behavior component
- `js/agent.js` — rule-based on-device agent logic
- `js/audio-ambient.js` — procedural ambient audio engine
- `api/author-room.js` — deterministic serverless room JSON stub
- `assets/` — panorama and hotspot card images
- `screenshots/` — Copilot usage screenshots
- `.github/ISSUE_SUBMISSION.md` — issue text template for Agents League
- `demo-recording-instructions.txt` — demo capture checklist

## Required Assets (Current Implementation)

Place these exact files in `assets/`:

- `panorama.png` (2:1 equirectangular, optimized for mobile)
- `photo1.png` (cake card image)
- `photo3.png` (letter card image)

Optional extras (not required by current runtime):

- `click.wav`
- `ambient_loop_hint.mp3`

## How to Run

### Option A: Python static server

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

### Option B: npm script

```bash
npm install
npm run dev
```

Open `http://localhost:4173`.

## How to Use the App

1. Open the app and tap **Play Demo**.
2. Look around the room and tap the **cake** and **letter** hotspots.
3. Use chat input (or **Speak** if supported) to ask about memories.
4. Toggle **Audio: On/Off** for ambient sound.
5. Tap **Auto-Author (demo)** to load serverless room config or local fallback.

## Button Behavior (Judge-Friendly)

- **Play Demo:** hides onboarding overlay and unlocks browser audio context after user gesture.
- **Audio Toggle:** turns ambient procedural audio on/off.
- **Speak:** starts speech recognition when browser/device supports it.
- **Auto-Author (demo):** fetches `/api/author-room`; if unavailable, applies local deterministic room spec.

## Deployment Notes

### Vercel (recommended)

- Deploy repository directly.
- `api/author-room.js` is available at `/api/author-room`.


## Manual Test Plan

### Mobile (Chrome)

1. Verify panorama loads quickly and interactions remain smooth.
2. Tap **Play Demo** and confirm overlay hides.
3. Tap both hotspots and verify card + narration.
4. Type `tell me about the cake` and verify deterministic response + TTS.
5. Test **Speak** (if supported/permission granted).
6. Toggle **Audio** on/off and verify behavior.
7. Tap **Auto-Author (demo)** and verify endpoint/fallback message.

### Desktop (Chrome)

1. Verify hotspot interactions and overlay behavior.
2. Verify typed chat and narration.
3. Verify speech fallback behavior when recognition is unavailable.

## Acceptance Criteria Mapping

- **AC1:** `index.html` renders panorama + 2 clickable hotspots.
- **AC2:** `tell me about the cake` returns programmed rule-based response and speaks it.
- **AC3:** Demo video includes room entry, 2 hotspot interactions, agent question, and audio toggle.
- **AC4:** Repository includes clear README, Copilot usage evidence, and submission instructions.

## Copilot Usage Evidence

### 1) Image analysis + hotspot placement

![Copilot analyzing image and defining AR/hotspot position](screenshots/copilot-analysing-image-and-defining-ar-position.png)

### 2) Implementation planning

![Copilot drafted implementation plan](screenshots/Copilot-drafted-implementation-plan.png)

### 3) Guided implementation

![Copilot implementing the plan](screenshots/copilot-implementing-plan.png)

## Security & Privacy

- No API keys or secrets are committed.
- No external LLM calls are required.
- Author-room endpoint returns deterministic sample JSON only.


