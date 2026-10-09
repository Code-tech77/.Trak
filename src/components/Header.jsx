import React from 'react';
import { Eye, Sun, Moon, Volume2, Type, Sparkles, HeartHandshake, ShieldCheck, Globe } from 'lucide-react';

export default function Header({
  theme,
  setTheme,
  fontSize,
  setFontSize,
  audioTones,
  setAudioTones,
  onOpenPersonaModal,
  selectedLang,
  setSelectedLang
}) {
  const toggleTheme = () => {
    const modes = ['default', 'high-contrast-dark', 'high-contrast-light', 'soft-warm'];
    const nextIndex = (modes.indexOf(theme) + 1) % modes.length;
    setTheme(modes[nextIndex]);
  };

  const toggleFontSize = () => {
    const sizes = ['normal', 'large', 'xlarge', 'giant'];
    const nextIndex = (sizes.indexOf(fontSize) + 1) % sizes.length;
    setFontSize(sizes[nextIndex]);
  };

  return (
    <header className="header-nav" role="banner">
      <div className="brand-wrapper">
        <div className="lilly-logo-badge" aria-label="Eli Lilly and Company Logo">
          <span>Lilly</span>
        </div>
        <div className="trak-title-group">
          <h1 style={{ margin: 0, fontSize: '1.8rem', display: 'flex', alignItems: 'center' }}>
            <span className="trak-dot">.</span>Trak
          </h1>
          <span className="tagline">Accessible Patient Leaflet AI Assistant</span>
        </div>
      </div>

      <div className="accessibility-toolbar" role="toolbar" aria-label="Accessibility options">
        {/* CodeForAll Maya Persona Context Button */}
        <button
          className="tool-btn"
          onClick={onOpenPersonaModal}
          title="View Maya's Story & Hackathon Brief"
          aria-label="View Maya's Story & Hackathon Brief"
        >
          <HeartHandshake size={18} color="var(--lilly-red)" />
          <span>Maya's Story</span>
        </button>

        {/* Font Size Scaler */}
        <button
          className="tool-btn"
          onClick={toggleFontSize}
          title="Adjust text size for low vision"
          aria-label={`Current font size: ${fontSize}. Click to resize.`}
        >
          <Type size={18} />
          <span>Text: {fontSize.toUpperCase()}</span>
        </button>

        {/* Contrast Theme Switcher */}
        <button
          className="tool-btn"
          onClick={toggleTheme}
          title="Toggle High Contrast & Dark Modes"
          aria-label={`Current theme: ${theme}. Click to change contrast.`}
        >
          <Sun size={18} />
          <span>Contrast</span>
        </button>

        {/* Audio Feedback Tones Toggle */}
        <button
          className={`tool-btn ${audioTones ? 'active' : ''}`}
          onClick={() => setAudioTones(!audioTones)}
          title="Audio feedback cues for navigation"
          aria-label={audioTones ? 'Audio feedback enabled' : 'Audio feedback disabled'}
        >
          <Volume2 size={18} />
          <span>{audioTones ? 'Sound On' : 'Mute Tones'}</span>
        </button>

        {/* Language Selector */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <Globe size={18} style={{ color: 'var(--text-secondary)' }} />
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="tool-btn"
            style={{ padding: '0.5rem 0.75rem', cursor: 'pointer' }}
            aria-label="Select Language"
          >
            <option value="en-US">English (US)</option>
            <option value="en-GB">English (UK)</option>
            <option value="es-ES">Español</option>
            <option value="fr-FR">Français</option>
            <option value="de-DE">Deutsch</option>
            <option value="ar-SA">العربية</option>
          </select>
        </div>
      </div>
    </header>
  );
}
