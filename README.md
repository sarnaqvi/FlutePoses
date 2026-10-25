# Flute Pose Tracking & Interactive Audio Processing

System that tracks flute-playing postures in real time using MediaPipe, processes gesture features through Wekinator, and controls live audio processing in Max/MSP. Data flows locally via OSC messages (open sound control) over standard UDP ports. 



## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173 in a browser with webcam access.

## Architecture

```
Browser (Vite dev server :5173)
  └─ webcam → @mediapipe/tasks-vision (WASM)
  └─ landmarks → WebSocket (/ws) → Node server (:3001)
                                      └─ OSC UDP → configurable host:port
```

## Production Build

```bash
npm run build   # builds client to client/dist, compiles server
npm run start   # runs the server (serves client/dist at :3001)
```