# Project Requirements Document (PRD)
Project name: MemoryStudio / MemoryRoom
Repository: agentsleague-memorystudio

## 1. Vision & Summary
MemoryStudio is an agent-guided 360° WebXR experience that allows users to step into an immersive memory room, interact with hotspots (photos, stories, audio), and ask an on-device agent (text or voice) to narrate, highlight, or modify the room. It demonstrates creative multimodal UX and GitHub Copilot-assisted development workflows.

## 2. Primary goals
- Deliver a polished, demoable A-Frame 360° experience that works on Chrome for Android (Samsung S21 FE).
- Demonstrate meaningful GitHub Copilot usage and document the Copilot-assisted steps.
- Ensure the demo works offline / without API keys (rule-based local agent).
- Provide optional MCP/Copilot-CLI authoring stub (api/author-room.js) to show agentic authoring.

## 3. Scope (MVP)
- A-Frame scene (index.html) with a 360° panorama background.
- 3 interactive hotspots that open overlay cards with images + captions.
- Rule-based agent (js/agent.js) supporting typed chat + Web Speech API speech recognition + speech synthesis fallback.
- Ambient procedural audio using WebAudio / Tone.js (audio-ambient.js).
- Minimal optional serverless stub (api/author-room.js) returning JSON room specs for a sample prompt (no LLM calls).
- README with Copilot usage log screenshots placeholders, demo video link, and submission instructions.

## 4. Non-Goals
- Full LLM integration or including API keys inside repo.
- Heavy 3D modelling beyond simple hotspot transforms.
- Long form audio generation or high-quality music composition (we include short procedural loops only).

## 5. UX / User flow
- Landing overlay: "How to use" with big Play Demo button.
- Tap to enter 360 room. Hotspots glow on gaze/tap. Tap opens card and triggers agent narration.
- Chat overlay at bottom: type question or press Speak. Agent replies with text + speech.
- Optional "Auto-Author" button that shows serverless stub generated room (example).

## 6. Functional requirements
- FR1: Scene loads on mobile and desktop.
- FR2: Hotspots respond to taps and open image/caption overlays.
- FR3: Agent accepts typed input and outputs a reply using rule-based NLU.
- FR4: Speech recognition works on Chrome/Android; typed fallback works when speech unavailable.
- FR5: Ambient audio loop toggles on/off; audio respects device mute rules.
- FR6: README documents Copilot usage (screenshots placeholders).

## 7. Non-functional requirements
- NFR1: Mobile-first layout and responsive UI.
- NFR2: Performance: first meaningful paint < 3s on mobile with compressed panorama (~2–3 MB recommended).
- NFR3: No secrets or keys committed.

## 8. Acceptance criteria
- AC1: When opening index.html, panorama appears and 3 hotspots are visible and clickable.
- AC2: Typing "tell me about the cake" triggers the pre-programmed agent response and plays TTS.
- AC3: Demo video shows: entering room, clicking 2 hotspots, asking an agent question, and toggling audio.
- AC4: Repo includes README with Copilot usage log and submission instructions.

## 9. Assets (place in /assets)
- panorama.jpg — 2–4K equirectangular 2:1 image (approx 2048x1024 to 4096x2048), optimize to ~1–3 MB.
- photo1.jpg, photo2.jpg, photo3.jpg — 1920x1080 or 1280x720, compressed webp preferred.
- small-thumbnail1.webp — 512x512 for UI thumbnails.
- click.wav — short UI click sound (~30 KB).
- ambient_loop_hint.mp3 — optional short ambient loop (~100–500 KB).
- README should list exact filenames.

## 10. Test plan
- Manual mobile test: Chrome, Samsung S21 FE. Test hotspots, agent type, speech recognition, TTS, audio toggle.
- Desktop test: Chrome desktop with microphone test.
- Performance: ensure panorama compressed and lazy loaded if necessary.

## 11. Delivery & timeline (8 hours)
- Hour 0–0.5: Repo + PRD + README scaffold.
- Hour 0.5–2.5: A-Frame scene + hotspots.
- Hour 2.5–4.0: Agent (rule-based) + chat UI + speech synthesis.
- Hour 4.0–5.0: Ambient audio + UI polish.
- Hour 5.0–6.0: Demo recording + README Copilot screenshots.
- Hour 6.0–7.0: Testing and bug fixes.
- Hour 7.0–8.0: Prepare submission issue + final checks and submit.

## 12. Success metrics
- Working demo (ACs met).
- README documents Copilot usage with at least two Copilot screenshots and a short explanation.
- Submission issue opened in microsoft/agentsleague with demo link and repo link.

## 13. Privacy & Safety
- Do not commit personal or sensitive data. All data stored locally in browser; serverless stub returns sample JSON only.

## 14. Post-mortem / Future enhancements
- Replace rule-based agent with optional LLM integration behind env var.
- Add MCP server to auto-author room from text prompts using Copilot/MCP.

End of PRD.