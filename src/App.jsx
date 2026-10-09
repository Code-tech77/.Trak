import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import AudioPlayerBar from './components/AudioPlayerBar';
import LeafletViewer from './components/LeafletViewer';
import ScannerModal from './components/ScannerModal';
import MayaStoryModal from './components/MayaStoryModal';
import { SAMPLE_MEDICATIONS } from './data/medications';
import { Camera, Sparkles, Volume2, ShieldCheck, Heart, Info, RefreshCw, Mic, HelpCircle, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [selectedMedication, setSelectedMedication] = useState(SAMPLE_MEDICATIONS[0]);
  const [theme, setTheme] = useState('default'); // 'default' | 'high-contrast-dark' | 'high-contrast-light' | 'soft-warm'
  const [fontSize, setFontSize] = useState('normal'); // 'normal' | 'large' | 'xlarge' | 'giant'
  const [audioTones, setAudioTones] = useState(true);
  const [selectedLang, setSelectedLang] = useState('en-US');

  // Scanner & Modal States
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  // Audio Playback States
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSectionTitle, setCurrentSectionTitle] = useState('');
  const [activeSectionId, setActiveSectionId] = useState(null);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [voiceListening, setVoiceListening] = useState(false);
  const [spokenCommandFeedback, setSpokenCommandFeedback] = useState('');

  const synthRef = useRef(window.speechSynthesis);
  const audioCtxRef = useRef(null);

  // Apply theme & font size attributes to body/html
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [theme, fontSize]);

  // Play audio beep tone for accessibility
  const playAudioTone = (freq = 440, type = 'sine') => {
    if (!audioTones) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {
      // AudioContext fallback
    }
  };

  // Speech Synthesizer engine
  const speakText = (text, sectionId = null, title = '') => {
    if (!synthRef.current) return;

    synthRef.current.cancel(); // Stop any ongoing speech
    playAudioTone(520, 'triangle');

    if (!text) {
      setIsPlaying(false);
      setActiveSectionId(null);
      setCurrentSectionTitle('');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = playbackRate;
    utterance.lang = selectedLang;

    // Pick voice if available
    const voices = synthRef.current.getVoices();
    const matchedVoice = voices.find(v => v.lang.startsWith(selectedLang.slice(0, 2))) || voices[0];
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setActiveSectionId(sectionId);
      setCurrentSectionTitle(title || `Reading ${selectedMedication.brand}`);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setActiveSectionId(null);
      setCurrentSectionTitle('Finished reading section');
      playAudioTone(660, 'sine');
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      setIsPlaying(false);
    };

    synthRef.current.speak(utterance);
  };

  const handlePause = () => {
    if (synthRef.current && isPlaying) {
      synthRef.current.pause();
      setIsPlaying(false);
      playAudioTone(350);
    }
  };

  const handlePlay = () => {
    if (synthRef.current && synthRef.current.paused) {
      synthRef.current.resume();
      setIsPlaying(true);
      playAudioTone(580);
    } else {
      // Read entire medication
      const fullText = `${selectedMedication.brand} by ${selectedMedication.company}. ${selectedMedication.summary}. ${selectedMedication.dosing.audioText} ${selectedMedication.sideEffects.audioText} ${selectedMedication.warnings.audioText}`;
      speakText(fullText, 'all', `Full Leaflet: ${selectedMedication.brand}`);
    }
  };

  const handleStop = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsPlaying(false);
      setActiveSectionId(null);
      setCurrentSectionTitle('');
      playAudioTone(300);
    }
  };

  const handleReadSection = (sectionKey) => {
    if (sectionKey === 'all') {
      const fullText = `${selectedMedication.brand} by ${selectedMedication.company}. ${selectedMedication.summary}. ${selectedMedication.dosing.audioText} ${selectedMedication.sideEffects.audioText} ${selectedMedication.warnings.audioText}`;
      speakText(fullText, 'all', `Full Leaflet: ${selectedMedication.brand}`);
    } else if (sectionKey === 'dosing') {
      speakText(selectedMedication.dosing.audioText, 'dosing', `${selectedMedication.brand} - Dosing Instructions`);
    } else if (sectionKey === 'sideEffects') {
      speakText(selectedMedication.sideEffects.audioText, 'sideEffects', `${selectedMedication.brand} - Side Effects`);
    } else if (sectionKey === 'warnings') {
      speakText(selectedMedication.warnings.audioText, 'warnings', `${selectedMedication.brand} - Safety Warnings`);
    } else if (sectionKey === 'storage') {
      speakText(selectedMedication.storage.audioText, 'storage', `${selectedMedication.brand} - Storage Guide`);
    }
  };

  const handleJumpToSection = (sectionKey) => {
    handleReadSection(sectionKey);
    const elem = document.getElementById(`section-${sectionKey}`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Keyboard Navigation Shortcuts for Maya
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        if (isPlaying) handlePause();
        else handlePlay();
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        setIsScannerOpen(true);
      } else if (e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        handleJumpToSection('dosing');
      } else if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
        handleJumpToSection('sideEffects');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, selectedMedication]);

  // Voice command simulation / Web Speech Recognition toggle
  const toggleVoiceAssistant = () => {
    playAudioTone(700);
    setVoiceListening(true);
    setSpokenCommandFeedback('Listening for command (e.g. "Read Dosing", "Side Effects")...');
    speakText('Voice Assistant listening. Say a command like Read Dosing or Side Effects.');

    // Simulated voice command selection
    setTimeout(() => {
      const commands = ['dosing', 'sideEffects', 'warnings'];
      const randomCmd = commands[Math.floor(Math.random() * commands.length)];
      setSpokenCommandFeedback(`Recognized command: "Read ${randomCmd.toUpperCase()}"`);
      handleJumpToSection(randomCmd);
      setVoiceListening(false);
    }, 2500);
  };

  // Celebrate successful leaf scan
  const handleMedicationSelect = (med) => {
    setSelectedMedication(med);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E31837', '#FFFFFF', '#38BDF8']
    });
  };

  return (
    <div className="app-container" role="main">
      {/* Header Bar */}
      <Header
        theme={theme}
        setTheme={setTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
        audioTones={audioTones}
        setAudioTones={setAudioTones}
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
        onOpenPersonaModal={() => {
          playAudioTone(500);
          setIsStoryOpen(true);
        }}
      />

      {/* Main Scanner Hero Banner */}
      <div
        className="glass-panel"
        style={{
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-input) 100%)',
          display: 'flex',
          justify-content: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          borderLeft: '6px solid var(--lilly-red)'
        }}
      >
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--lilly-red-glow)', color: 'var(--lilly-red)', padding: '0.35rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            <Sparkles size={16} /> CodeForAll Hackathon Solution
          </div>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.5rem' }}>
            Independent Leaflet Reading for Maya
          </h2>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1.1rem', maxWidth: '650px' }}>
            Point your camera at any paper medication insert. <strong>.Trak</strong> auto-positions the leaflet using spatial voice cues and speaks side effects and dosing instructions clearly.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            className="btn-play-primary"
            onClick={() => {
              playAudioTone(600);
              setIsScannerOpen(true);
            }}
            style={{ borderRadius: '14px', height: '54px', padding: '0 1.5rem', fontSize: '1.1rem', fontWeight: 700 }}
            aria-label="Launch Leaflet Camera Scanner (Keyboard shortcut: S)"
          >
            <Camera size={22} style={{ marginRight: '8px' }} />
            <span>Scan New Leaflet (Press S)</span>
          </button>

          <button
            className={`tool-btn ${voiceListening ? 'active' : ''}`}
            onClick={toggleVoiceAssistant}
            style={{ padding: '0 1.25rem', height: '54px', borderRadius: '14px', fontSize: '1rem' }}
            aria-label="Activate Voice Assistant Command"
          >
            <Mic size={20} color="var(--accent-green)" />
            <span>{voiceListening ? 'Listening...' : 'Voice Assistant'}</span>
          </button>
        </div>
      </div>

      {spokenCommandFeedback && (
        <div className="spatial-guidance-banner" style={{ marginBottom: '1.5rem', background: 'var(--bg-card)', border: '1px solid var(--accent-green)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Mic size={22} color="var(--accent-green)" />
            <span>{spokenCommandFeedback}</span>
          </div>
        </div>
      )}

      {/* Audio Player Control Bar */}
      <AudioPlayerBar
        isPlaying={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
        onStop={handleStop}
        currentSectionTitle={currentSectionTitle}
        playbackRate={playbackRate}
        setPlaybackRate={setPlaybackRate}
        onJumpToSection={handleJumpToSection}
        activeSectionId={activeSectionId}
      />

      {/* Medication Leaflet Detailed Reader */}
      <LeafletViewer
        medication={selectedMedication}
        activeSectionId={activeSectionId}
        onReadSection={handleReadSection}
        speakText={speakText}
      />

      {/* Hackathon Compliance & Autonomy Banner */}
      <div className="disclaimer-banner">
        <ShieldCheck size={24} color="var(--accent-amber)" style={{ flexShrink: 0 }} />
        <div>
          <strong>Eli Lilly Accessibility Standard:</strong> .Trak strictly processes patient leaflets on-device without storing personal health data. It presents official package insert text directly and does not make clinical decisions or provide unverified medical advice.
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-bar" role="contentinfo">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="lilly-logo-badge" style={{ fontSize: '1.1rem', padding: '0.2rem 0.6rem' }}>
            Lilly
          </div>
          <span>CodeForAll Hackathon 2026 — Track 1 Solution: <strong>.Trak</strong></span>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="tool-btn" onClick={() => setIsStoryOpen(true)} style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
            <Heart size={14} color="var(--lilly-red)" /> Maya's Brief
          </button>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Keyboard Shortcuts: [Space] Play/Pause | [S] Scan | [D] Dosing | [E] Effects
          </span>
        </div>
      </footer>

      {/* Modals */}
      <ScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onSelectMedication={handleMedicationSelect}
        speakText={speakText}
      />

      <MayaStoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />
    </div>
  );
}
