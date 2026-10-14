# ZenSlide 🪵🟥

A sleek, calming offline sliding block (unblock) puzzle game built with pure vanilla web technologies (HTML5 Canvas, CSS3, JavaScript) and Capacitor Android.

Slide horizontal and vertical blocks across the 6x6 grid to carve a clear escape route for the glowing crimson key block to reach the exit portal.

[![CI](https://github.com/OfferPk/zenslide/actions/workflows/ci.yml/badge.svg)](https://github.com/OfferPk/zenslide/actions/workflows/ci.yml)
[![Pages](https://github.com/OfferPk/zenslide/actions/workflows/pages.yml/badge.svg)](https://offerpk.github.io/zenslide/)
[![Android](https://github.com/OfferPk/zenslide/actions/workflows/android.yml/badge.svg)](https://github.com/OfferPk/zenslide/actions/workflows/android.yml)

---

## ✨ Features

- **100% Offline & Private**: Zero network dependencies, zero telemetry, zero advertisements. All move metrics, stars, and unlocked levels are stored locally on your device.
- **40 Curated & BFS-Verified Levels**: 4 progressive difficulty packs with computed shortest-path solutions:
  - **Starter**: 10 gentle warm-up puzzles (3 to 6 optimal moves)
  - **Classic**: 10 balanced challenges testing spatial planning (3 to 6 moves)
  - **Challenger**: 10 intricate sliding block puzzles requiring clever backtracking (3 to 6 moves)
  - **Master**: 10 deep multi-step brain-teasers (3 to 10 moves)
- **Tactile Procedural Audio**: Standard Web Audio synthesizer creating realistic wooden/stone sliding thuds and clicks, exit portal chimes, and rewarding victory fanfares.
- **Optimal Move Scoring**:
  - ⭐️⭐️⭐️ 3 Stars: Solved in exact minimal moves!
  - ⭐️⭐️ 2 Stars: Solved in within 1.5x of target moves.
  - ⭐️ 1 Star: Cleared!
- **Smart Hint Assistant**: Powered by a real-time Breadth-First Search (BFS) graph solver that instantly computes and highlights the next optimal move from any current board state.
- **Full Player Tools**: Multi-move undo, instant board reset, level browser with star trackers, and celebration confetti.
- **PWA & Native Android**: Installable as a Progressive Web App in any browser or packaged natively for Android via Capacitor.

---

## 🎮 Play Live

- **Web Demo**: [https://offerpk.github.io/zenslide/](https://offerpk.github.io/zenslide/)
- **Android APK**: Download the latest build from [GitHub Actions artifacts](https://github.com/OfferPk/zenslide/actions/workflows/android.yml) (`zenslide-apk`) or Releases.

---

## 📸 Screenshots

| Puzzle Arena | Level Selector | Victory Screen |
|:---:|:---:|:---:|
| *(6x6 Grid & Key Block)* | *(4 Difficulty Packs)* | *(3-Star Optimal Clear)* |

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js (v20+ recommended)
- npm

### Setup & Testing
```bash
# Clone repository
git clone https://github.com/OfferPk/zenslide.git
cd zenslide

# Install dependencies
npm ci

# Run unit tests (Node test runner)
npm test

# Build production web assets into www/
npm run build
```

### Android Native Build
```bash
# Add Android project (already configured)
npx cap add android

# Build and sync
npm run build
npx cap sync android

# Open in Android Studio
npx cap open android
```

---

## 📄 License

MIT License. Free and open source casual gaming by [OfferPk](https://github.com/OfferPk).
