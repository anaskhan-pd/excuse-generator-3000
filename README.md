# Excuse Generator 3000

> *"my bad generator."*  
> A tiny, funny website designed to generate dangerously convincing or completely unhinged excuses.

---

## ⚡ Tech Stack

- **HTML5** (semantic markup, accessible roles)
- **CSS3** (custom properties, neo-brutalist dark aesthetic, reduced-motion support, fluid responsive grid)
- **Vanilla JavaScript** (zero build step, zero dependencies, 100% client-side & offline-capable)

No React, no frameworks, no npm dependencies, no backend, no external APIs, and no API keys required.

---

## 🚀 How to Run Locally

You can run this project in two ways:

### Option 1: Direct File Open
Simply double-click [`index.html`](file:///home/anaskhan/EXCUSE/excuse-generator-3000/index.html) or open it directly in any browser:
```bash
xdg-open index.html   # Linux
open index.html       # macOS
start index.html      # Windows
```

### Option 2: Local Static Server (Recommended)
From the project directory, run:
```bash
python3 -m http.server 8000
```
Then navigate to [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🎯 Features

1. **8 Situations**:
   - *Skipped the gym*
   - *Didn't study*
   - *Missed a deadline*
   - *Arrived late*
   - *Ignored a message*
   - *Cancelled plans*
   - *Forgot something*
   - *Custom situation...* (with XSS sanitization & live character counter)

2. **4 Defense Counsel Personalities**:
   - **Corporate**: *HR has entered the chat.*
   - **Bollywood**: *Background music intensifies.*
   - **Unhinged**: *Your lawyer has advised silence.*
   - **Scientific**: *Peer review is unlikely.*

3. **Context-Aware "Make It Worse" (Escalation Mode)**:
   - Builds directly on the **existing excuse's premise** with increasingly absurd consequences, plummeting the credibility score into the single digits.

4. **"Surprise Me" (Randomizer)**:
   - Randomizes both situation and personality simultaneously.

5. **Share & Copy Alibi**:
   - **Share**: Uses native Web Share API where available, with automatic fallback to copying formatted alibi text (`"... " — via Excuse Generator 3000`).
   - **Copy**: 1-click clipboard copy with graceful fallback and emoji-free, dry status toasts (*"COPIED. DENIAL IS NOW OFFICIALLY IN WRITING."*, *"EXCUSE ACQUIRED. CONSEQUENCES PENDING."*).

6. **Subtle Interface Details**:
   - Rotating system status indicator (*"DENIAL MODE ACTIVE"*, *"LEGAL TEAM: NOT FOUND"*, *"ETHICS MODULE: TEMPORARILY OFFLINE"*).
   - Dynamic Generate button state: updates to *"TRY ANOTHER EXCUSE"* after the first generation.
   - Fictional Credibility Gauge (1–100%) with dry verdicts.

7. **Fully Responsive Layout**:
   - Tested and verified at 320px, 375px, 390px, 430px, 768px, 1024px, and 1366px+ viewports with zero horizontal overflow.
   - 4-column layout on desktop, 2-column on tablet, and fluid touch-friendly controls on mobile.
   - Respects `prefers-reduced-motion: reduce`.
