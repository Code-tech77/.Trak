import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, FastForward, Rewind, Volume2, ShieldAlert, Pill, AlertTriangle, Box, Sparkles, Mic } from 'lucide-react';

export default function AudioPlayerBar({
  isPlaying,
  onPlay,
  onPause,
  onStop,
  currentSectionTitle,
  playbackRate,
  setPlaybackRate,
  onJumpToSection,
  activeSectionId
}) {
  return (
    <div className="audio-bar-panel" role="region" aria-label="Audio reader controls">
      {/* Left: Play/Pause/Stop controls */}
      <div className="audio-controls-cluster">
        <button
          className="btn-play-primary"
          onClick={isPlaying ? onPause : onPlay}
          aria-label={isPlaying ? 'Pause reading aloud' : 'Play reading aloud'}
          title={isPlaying ? 'Pause reading aloud' : 'Play reading aloud'}
        >
          {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: '4px' }} />}
        </button>

        <button
          className="tool-btn"
          onClick={onStop}
          aria-label="Stop playback"
          title="Stop playback"
          style={{ width: '44px', height: '44px', borderRadius: '50%', padding: 0, justifyContent: 'center' }}
        >
          <Square size={18} />
        </button>

        <div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {isPlaying ? 'Currently Reading Aloud' : 'Voice Assistant Ready'}
          </div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
            {currentSectionTitle || 'Press Play to read entire leaflet'}
          </div>
        </div>
      </div>

      {/* Middle: Sound Wave Animation */}
      <div className="audio-waves-container" aria-hidden="true">
        {[14, 24, 18, 30, 20, 10, 26, 16, 28, 12, 22].map((height, i) => (
          <div
            key={i}
            className={`wave-bar ${isPlaying ? 'playing' : ''}`}
            style={{
              animationDelay: `${(i % 5) * 0.15}s`,
              height: isPlaying ? undefined : `${height * 0.4}px`
            }}
          />
        ))}
      </div>

      {/* Right: Quick Jump Buttons & Speed */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
        {/* Quick jump pills */}
        <button
          className={`tool-btn ${activeSectionId === 'dosing' ? 'active' : ''}`}
          onClick={() => onJumpToSection('dosing')}
          title="Jump to Dosing Instructions"
          aria-label="Jump to Dosing Instructions"
        >
          <Pill size={16} />
          <span>Dosing</span>
        </button>

        <button
          className={`tool-btn ${activeSectionId === 'sideEffects' ? 'active' : ''}`}
          onClick={() => onJumpToSection('sideEffects')}
          title="Jump to Side Effects"
          aria-label="Jump to Side Effects"
        >
          <AlertTriangle size={16} />
          <span>Side Effects</span>
        </button>

        <button
          className={`tool-btn ${activeSectionId === 'warnings' ? 'active' : ''}`}
          onClick={() => onJumpToSection('warnings')}
          title="Jump to Warnings"
          aria-label="Jump to Warnings"
        >
          <ShieldAlert size={16} />
          <span>Warnings</span>
        </button>

        {/* Speed Selector */}
        <select
          value={playbackRate}
          onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
          className="tool-btn"
          aria-label="Playback speech rate"
          style={{ cursor: 'pointer', padding: '0.5rem' }}
        >
          <option value={0.8}>0.8x Speed</option>
          <option value={1.0}>1.0x Normal</option>
          <option value={1.25}>1.25x Fast</option>
          <option value={1.5}>1.5x Rapid</option>
        </select>
      </div>
    </div>
  );
}
