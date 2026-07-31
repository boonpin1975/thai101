# 🇹🇭 Thai 101 - Learn the 44 Thai Consonants!

A fun, gamified, vibrant, and interactive web application designed for beginners and children to master all **44 Thai Consonants** (*Kor Kai* to *Hor Nok-huk*).

![Thai Consonant Learning App](https://raw.githubusercontent.com/boonpin1975/thai101/main/public/favicon.svg)

---

## 🎨 Features & Highlights

- 🎴 **The 44 Consonant Interactive Grid**: Includes every Thai consonant with:
  - Prominent Thai symbol display
  - Cartoon SVG illustrations representing traditional Thai vocabulary words (*Kor Kai* for Chicken 🐓, *Khor Khai* for Egg 🥚, *Chor Chang* for Elephant 🐘, etc.)
  - Phonetic RTGS transliteration & English translation
  - Consonant Class tags (**Mid Class / กลาง**, **High Class / สูง**, **Low Class / ต่ำ**)
  - Obsolete tags for historical letters (ฃ, ฅ)
- 🔄 **3D Card Flip Mechanics**: Click or hover cards to flip and reveal initial/final phonetic sounds, tone class tips, mnemonic fun facts, and tracing guides.
- 🔊 **Native Thai Speech & Sound FX**: Real-time Thai audio pronunciation powered by the browser's `SpeechSynthesis` API with custom Web Audio API sound effects (card flip whoosh, happy match dings, quiz feedback, celebration fanfares).
- 🗺️ **Winding Journey Map View**: Switch between standard flashcard grid and a continuous learning roadmap connecting all 44 consonants sequentially.
- ✍️ **Interactive Letter Tracing Canvas**: Draw over letter outlines with custom brush colors, stroke width controls, and instant audio feedback.
- 🎮 **Matching Mini-Game**: Gamified matching section pairing Thai letters to their cartoon illustrations with streak counters, score tracking, and confetti celebrations.
- 👂 **Audio Listening Quiz**: Interactive ear-training quiz playing spoken Thai sounds where learners choose the correct letter among choices.
- 🏆 **Progress Tracker & Achievement Badges**: Tracks mastered consonants and favorites saved in `localStorage`, unlocking milestone badges as progress increases.

---

## 🚀 Quick Start & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/boonpin1975/thai101.git
cd thai101
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Run Production Server (Port 5000 & Custom Host)
To run the server on port `5000` bound to `0.0.0.0` with support for `thai.natkitchen.shop`:
```bash
npm run start
```
Open your browser at `http://localhost:5000` or via your proxy URL `http://thai.natkitchen.shop`.

---

## 🛠️ Project Structure

```text
learnthai/
├── index.html              # Entry HTML with Google Fonts (Fredoka, Mali, Prompt)
├── vite.config.js          # Vite configuration & server settings (Port 5000, allowedHosts)
├── package.json            # Scripts & dependencies
├── src/
│   ├── main.jsx            # React root application entry
│   ├── App.jsx             # Main container, tab switcher, local storage state
│   ├── index.css           # Tailwind v4, custom 3D card flip styles & animations
│   ├── data/
│   │   └── consonants.jsx  # Complete 44 Consonant dataset & custom SVG illustrations
│   ├── utils/
│   │   └── audio.js        # Web Audio synthesizer & Web Speech TTS helper
│   └── components/
│       ├── Header.jsx           # Bouncy top header with sound toggle & badges trigger
│       ├── ProgressTracker.jsx  # Animated progress bar & statistics chips
│       ├── FilterBar.jsx        # Search input, class filters & view mode switcher
│       ├── ConsonantCard.jsx    # 3D flip card with soundwaves & details
│       ├── ConsonantGrid.jsx    # Responsive grid & Journey Map layout
│       ├── TracingModal.jsx     # Interactive HTML5 Canvas letter tracing modal
│       ├── MatchingGame.jsx     # Card-to-cartoon matching mini-game
│       ├── AudioQuizGame.jsx    # Audio listening quiz game
│       └── AchievementsModal.jsx# Badge unlocks modal
```

---

## 🌐 Host & Deployment Configuration

The app is pre-configured in `vite.config.js` to allow external traffic from:
- `thai.natkitchen.shop`
- `.natkitchen.shop`
- `localhost`

Running `npm run start` launches Vite with `--host 0.0.0.0 --port 5000`.

---

## 📄 License

MIT License © 2026 boonpin1975. Created for Thai Language Learners worldwide! 🇹🇭
