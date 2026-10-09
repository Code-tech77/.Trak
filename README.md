# .Trak — Accessible Patient Information Leaflet AI Assistant

> **Eli Lilly CodeForAll 2026 Hackathon Prototype**  
> *Track 1 Solution: Empowering Blind & Low-Vision Patients Through Hands-Free Voice Navigation*

![Project Status](https://img.shields.io/badge/Hackathon-Eli%20Lilly%20CodeForAll%202026-E31837?style=for-the-badge)
![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AAA-10B981?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-38BDF8?style=for-the-badge)

---

## 📌 Executive Summary

Paper patient information leaflets inside medication packages present severe accessibility barriers for blind and low-vision individuals. Standard paper inserts lack braille, audio cues, or screen-reader-friendly structures, forcing patients to rely on sighted assistance for critical health information like dosage, side effects, and storage conditions.

**.Trak** is a minimalist, voice-guided web application designed to restore **sighted independence**. With hands-free speech recognition, personalized user memory, spatial camera alignment guidance, and AAA-compliant high-contrast themes, `.Trak` converts dense medical inserts into clear, bite-sized audible summaries.

---

## 👤 User Persona & Problem Statement

### **Maya, 34 (Blind / Low Vision)**
* **Challenge**: Maya manages weekly subcutaneous injections. She needs to independently verify dosing steps, serious side effects, and refrigeration rules without depending on family members or external sighted apps.
* **Solution with `.Trak`**: 
  1. Opens `.Trak` hands-free with active voice recognition.
  2. `.Trak` greets Maya by name (*"Welcome back, Maya!"*).
  3. Maya speaks `"Read Dosing"` or `"Side Effects"`, receiving instant, professional audio feedback.
  4. Maya downloads an accessible `.txt` summary or exports directly to Google Drive for her personal health records.

---

## ✨ Key Features

### 🎙️ 1. Continuous Hands-Free Speech Navigation
* Integrated Web Speech API recognition operates seamlessly from the moment the app opens.
* Built-in **TTS Microphone Echo Lock** (`isTTSSpeaking`) prevents the microphone from picking up system voice output.
* Voice commands include: `Scan`, `Read Dosing`, `Side Effects`, `Warnings`, `Storage`, `Download`, `Cloud`, `Contrast`, `Text Size`, `Play`, and `Stop`.

### 👤 2. Personalized Onboarding & Memory
* Memorizes patient name (stored locally in `localStorage`).
* Enforces a **strict 10-character limit** and single-word formatting (`slice(0, 10)`).
* Completely overwrites previous entries without appending residual data.
* Greets the user naturally without repeating prompt questions.

### 📷 3. Vision Camera Reader & Spatial Guidance
* Simulated laser scan frame for camera positioning.
* Spatial audio prompts assist low-vision users in aligning the physical leaflet under the camera lens.

### 👁️ 4. AAA Contrast & Dynamic Typography
* **3 Accessible Themes**:
  * **Obsidian Dark** (Default AAA contrast)
  * **Light Clean**
  * **High-Contrast Yellow** (`#FFFF00` on `#000000`)
* **Font Scaling**: Normal (18px), Large (21px), Giant (25px) using Google Fonts *Atkinson Hyperlegible* and *Outfit*.

### 💾 5. Multi-Channel Document Export
* **Local Machine Download (`[L]`)**: Instant text summary (`.txt`) generator with timestamp and personalized header.
* **Cloud Storage Integration (`[G]`)**: One-click export modal supporting Google Drive and Microsoft OneDrive.

---

## ⌨️ Shortcut & Spoken Command Reference

### Keyboard Shortcuts
| Key | Action | Description |
| :---: | :--- | :--- |
| `[Space]` | **Play / Pause** | Toggle full audio playback |
| `[V]` | **Toggle Mic** | Mute / Unmute speech recognition microphone |
| `[S]` | **Scan Camera** | Open vision camera reader modal |
| `[L]` | **Download File** | Save `.txt` document summary to machine |
| `[G]` | **Cloud Export** | Open Google Drive / OneDrive export modal |
| `[D]` | **Read Dosing** | Read section 1: Dosing instructions |
| `[E]` | **Read Side Effects** | Read section 2: Side effects summary |
| `[W]` | **Read Warnings** | Read section 3: Safety warnings |
| `[R]` | **Read Storage** | Read section 4: Storage guide |
| `[T]` | **Theme Toggle** | Cycle Obsidian Dark ➔ Light ➔ High-Contrast Yellow |
| `[A]` | **Text Scale** | Cycle font sizes: Normal ➔ Large ➔ Giant |

### Spoken Voice Commands
```text
🗣️ "Scan" / "Camera"         ➔ Opens vision scanner
🗣️ "Read Dosing"             ➔ Narrates dosing instructions
🗣️ "Side Effects"            ➔ Narrates side effects
🗣️ "Warnings"                ➔ Narrates safety warnings
🗣️ "Storage"                 ➔ Narrates storage guide
🗣️ "Download"                ➔ Saves .txt summary to local machine
🗣️ "Google Drive" / "Cloud"  ➔ Opens cloud export modal
🗣️ "Contrast" / "Theme"      ➔ Switches visual contrast mode
🗣️ "Stop" / "Pause"          ➔ Halts speech playback
```

---

## 🛠️ Technology Stack

* **Core**: HTML5, Vanilla JavaScript (ES6+), Web Speech API (`SpeechSynthesis` & `SpeechRecognition`).
* **Styling**: Vanilla CSS3 (CSS Variables, Glassmorphism, Responsive Grid, Smooth Animations).
* **Typography**: *Atkinson Hyperlegible* (Braille Institute designed font) & *Outfit*.
* **Architecture**: Standalone Zero-Dependency Single Page Application (SPA).

---

## 🚀 Running the Project Locally

### Prerequisites
* Any modern web browser (Google Chrome, Microsoft Edge, Safari) supporting Web Speech API.
* Python 3.x (or any standard static HTTP web server).

### Quick Start (Port 3001)

1. Clone or navigate to the project directory:
   ```bash
   cd /path/to/trak-lilly-app
   ```

2. Start the local server on **Port 3001**:
   ```bash
   python3 -m http.server 3001 --bind 127.0.0.1
   ```

3. Open your browser and navigate to:
   ```text
   http://127.0.0.1:3001
   ```

---

## ⚠️ Prototype & Compliance Disclaimer

* **Hackathon Prototype**: This software was created as a proof-of-concept prototype for the **Eli Lilly CodeForAll 2026 Hackathon**.
* **Generic Medication Figures**: In compliance with hackathon submission guidelines, all medication prescriptions are represented using generic labels (**Medication Figure X**, **Medication Figure Y**, **Medication Figure Z**).
* **Medical Advice**: This prototype is for demonstration purposes only and does not constitute official medical advice or diagnostic services.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

*Developed with ❤️ for CodeForAll 2026 Hackathon — Track 1 Solution.*
