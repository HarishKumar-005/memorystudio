Title: Creative Apps Submission — MemoryStudio / MemoryRoom

Repository URL:
https://github.com/<your-username>/agentsleague-memorystudio

Demo Video URL:
<PASTE_VIDEO_LINK>

Category:
Creative Apps — Agents League

## Summary
MemoryStudio / MemoryRoom is a mobile-first, A-Frame 360° WebXR memory experience with:
- 3 interactive hotspots (image + caption overlays)
- on-device rule-based agent (typed chat + speech where available)
- browser TTS narration
- procedural ambient audio toggle
- optional deterministic serverless authoring stub (`/api/author-room`)

The project is designed for reliable demo behavior without API keys or external LLM dependencies.

## What was built
- 360 panorama scene using `assets/panorama.jpg`
- Hotspot interaction component (`js/hotspot-component.js`)
- Rule-based offline-safe agent (`js/agent.js`)
- Ambient audio module (`js/audio-ambient.js`)
- Optional serverless stub (`api/author-room.js`) returning deterministic room JSON

## Copilot Usage
I used GitHub Copilot to accelerate implementation and refinement:
1. Scene + hotspot scaffold generation
2. Rule-based intent logic and fallback handling
3. Audio/toggle UX improvements and cleanup

Screenshots/notes are included in README under "Copilot Usage Log".

## Acceptance Criteria Check
- [x] AC1: Panorama appears and 2 hotspots are visible/clickable
- [x] AC2: "tell me about the cake" triggers programmed response + TTS
- [x] AC3: Demo video includes room entry, hotspot interactions, agent question, and audio toggle
- [x] AC4: README includes Copilot usage log and submission instructions

## Testing
- Mobile: Chrome on Samsung S21 FE
- Desktop: Chrome with microphone test
- Verified typed fallback when speech recognition is unavailable

## Notes
- No secrets/API keys are committed.
- Serverless endpoint is deterministic and does not call external models.
