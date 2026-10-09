import React from 'react';
import { Pill, AlertTriangle, ShieldAlert, Box, Volume2, CheckCircle2, ChevronRight, HelpCircle, FileText } from 'lucide-react';

export default function LeafletViewer({ medication, activeSectionId, onReadSection, speakText }) {
  if (!medication) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Medication Summary Banner */}
      <div className="glass-panel" style={{ borderLeft: '8px solid var(--lilly-red)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <h2 style={{ margin: 0, fontSize: '2rem', color: 'var(--text-primary)' }}>
                {medication.brand}
              </h2>
              <span className="lilly-logo-badge" style={{ fontSize: '0.9rem', padding: '0.2rem 0.6rem' }}>
                Eli Lilly
              </span>
            </div>
            <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              <strong>Active Ingredient:</strong> {medication.generic} ({medication.strength})
            </div>
            <div style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              <strong>Form:</strong> {medication.form}
            </div>
          </div>

          <button
            className="tool-btn active"
            onClick={() => onReadSection('all')}
            style={{ padding: '0.75rem 1.25rem', fontSize: '1.05rem' }}
            aria-label={`Read entire ${medication.brand} leaflet aloud`}
          >
            <Volume2 size={20} />
            <span>Read Entire Leaflet</span>
          </button>
        </div>

        <div style={{ marginTop: '1.25rem', padding: '1rem', background: 'var(--bg-input)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <strong style={{ color: 'var(--lilly-red)', fontSize: '1rem' }}>Indication / Purpose:</strong>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '1.1rem', lineHeight: 1.5 }}>
            {medication.summary}
          </p>
        </div>
      </div>

      {/* Structured Sections Grid */}
      <div className="leaflet-grid">
        {/* Section 1: Dosing & How to Take */}
        <div
          id="section-dosing"
          className={`leaflet-section-card ${activeSectionId === 'dosing' ? 'active-reading' : ''}`}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="section-badge badge-dosing">
              <Pill size={16} /> Dosing & Usage
            </span>
            <button
              className="tool-btn"
              onClick={() => onReadSection('dosing')}
              aria-label="Read Dosing Instructions aloud"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}
            >
              <Volume2 size={16} />
              <span>Read Dosing</span>
            </button>
          </div>

          <h3>{medication.dosing.title}</h3>
          <ul className="bullet-list">
            {medication.dosing.steps.map((step, idx) => (
              <li key={idx} className="bullet-item">
                <CheckCircle2 size={20} className="bullet-icon" color="var(--accent-blue)" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2: Side Effects */}
        <div
          id="section-sideEffects"
          className={`leaflet-section-card ${activeSectionId === 'sideEffects' ? 'active-reading' : ''}`}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="section-badge badge-effects">
              <AlertTriangle size={16} /> Side Effects
            </span>
            <button
              className="tool-btn"
              onClick={() => onReadSection('sideEffects')}
              aria-label="Read Side Effects aloud"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}
            >
              <Volume2 size={16} />
              <span>Read Side Effects</span>
            </button>
          </div>

          <h3>{medication.sideEffects.title}</h3>
          
          <div style={{ marginTop: '0.75rem' }}>
            <strong style={{ color: 'var(--accent-amber)', fontSize: '0.95rem' }}>Common Reactions:</strong>
            <ul className="bullet-list" style={{ marginTop: '0.4rem' }}>
              {medication.sideEffects.common.map((effect, idx) => (
                <li key={idx} className="bullet-item">
                  <ChevronRight size={18} className="bullet-icon" color="var(--accent-amber)" />
                  <span>{effect}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
            <strong style={{ color: 'var(--accent-red)', fontSize: '0.95rem' }}>When to Contact a Doctor Immediately:</strong>
            <ul className="bullet-list" style={{ marginTop: '0.4rem' }}>
              {medication.sideEffects.serious.map((effect, idx) => (
                <li key={idx} className="bullet-item" style={{ color: 'var(--accent-red)' }}>
                  <AlertTriangle size={18} className="bullet-icon" color="var(--accent-red)" />
                  <span>{effect}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 3: Warnings & Contraindications */}
        <div
          id="section-warnings"
          className={`leaflet-section-card ${activeSectionId === 'warnings' ? 'active-reading' : ''}`}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="section-badge badge-warning">
              <ShieldAlert size={16} /> Safety Warnings
            </span>
            <button
              className="tool-btn"
              onClick={() => onReadSection('warnings')}
              aria-label="Read Safety Warnings aloud"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}
            >
              <Volume2 size={16} />
              <span>Read Warnings</span>
            </button>
          </div>

          <h3>{medication.warnings.title}</h3>
          <ul className="bullet-list">
            {medication.warnings.points.map((warn, idx) => (
              <li key={idx} className="bullet-item">
                <ShieldAlert size={20} className="bullet-icon" color="var(--accent-red)" />
                <span>{warn}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Storage & Handling */}
        <div
          id="section-storage"
          className={`leaflet-section-card ${activeSectionId === 'storage' ? 'active-reading' : ''}`}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="section-badge badge-storage">
              <Box size={16} /> Storage Guide
            </span>
            <button
              className="tool-btn"
              onClick={() => onReadSection('storage')}
              aria-label="Read Storage Guide aloud"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}
            >
              <Volume2 size={16} />
              <span>Read Storage</span>
            </button>
          </div>

          <h3>{medication.storage.title}</h3>
          <ul className="bullet-list">
            {medication.storage.steps.map((item, idx) => (
              <li key={idx} className="bullet-item">
                <Box size={20} className="bullet-icon" color="var(--accent-green)" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
