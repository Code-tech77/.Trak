import React from 'react';
import { Heart, User, CheckCircle2, ShieldCheck, Target, Award, BookOpen } from 'lucide-react';

export default function MayaStoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backdropFilter: 'blur(8px)'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="maya-dialog-title"
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '85vh',
          overflowY: 'auto',
          border: '2px solid var(--lilly-red)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="lilly-logo-badge">Lilly</span>
            <h2 id="maya-dialog-title" style={{ margin: 0 }}>
              CodeForAll 2026 — Track 1: Blind / Low Vision
            </h2>
          </div>
          <button className="tool-btn" onClick={onClose} aria-label="Close story modal">
            ✕
          </button>
        </div>

        {/* Challenge Persona Header */}
        <div style={{ background: 'var(--bg-input)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--border-color)', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <User color="var(--lilly-red)" size={24} />
            <h3 style={{ margin: 0, fontSize: '1.3rem' }}>The User: Maya, 34</h3>
          </div>
          <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Maya is blind / low vision. She uses a screen reader on her phone and laptop for everything — work, shopping, managing her health. She is confident with technology but regularly hits physical walls that sighted users never encounter.
          </p>
        </div>

        {/* The Barrier */}
        <div style={{ background: 'rgba(227, 24, 55, 0.1)', borderLeft: '5px solid var(--lilly-red)', padding: '1.25rem', borderRadius: '12px', marginBottom: '1.25rem' }}>
          <h4 style={{ margin: 0, color: 'var(--lilly-red)', fontSize: '1.1rem' }}>The Barrier</h4>
          <p style={{ margin: '0.4rem 0 0 0', lineHeight: 1.5 }}>
            "Many medication packs carry braille, but the paper patient information leaflet inside the box does not. This leaflet is where side effect information, dosing instructions, and warnings actually live. Maya cannot access this content independently, so she has no reliable way to check side effects or instructions without asking someone to read it to her."
          </p>
        </div>

        {/* Brief & Solution Alignment */}
        <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Target color="var(--accent-green)" /> How .Trak Solves This Brief
        </h4>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--bg-input)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <strong style={{ color: 'var(--accent-blue)', display: 'block', marginBottom: '0.3rem' }}>
              1. 100% Sighted-Free Operation
            </strong>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Real-time spatial audio cues guide Maya's camera over paper leaflets without needing anyone else present.
            </span>
          </div>

          <div style={{ background: 'var(--bg-input)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <strong style={{ color: 'var(--accent-amber)', display: 'block', marginBottom: '0.3rem' }}>
              2. Structured Speech Chunking
            </strong>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Instead of reading wall-of-text PDFs, .Trak categorizes Dosing, Side Effects, and Warnings into instant audio jump points.
            </span>
          </div>

          <div style={{ background: 'var(--bg-input)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <strong style={{ color: 'var(--accent-green)', display: 'block', marginBottom: '0.3rem' }}>
              3. Dignity & Independence
            </strong>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Aligned with Eli Lilly's research on patient autonomy — empowering users to take control of their health in private.
            </span>
          </div>

          <div style={{ background: 'var(--bg-input)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <strong style={{ color: 'var(--lilly-red)', display: 'block', marginBottom: '0.3rem' }}>
              4. Strict Compliance Safeguard
            </strong>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Presents official leaflet facts accurately without diagnosing or giving unauthorized medical advice.
            </span>
          </div>
        </div>

        <button
          className="btn-play-primary"
          onClick={onClose}
          style={{ width: '100%', borderRadius: '12px', height: '50px', fontSize: '1rem', fontWeight: 700 }}
        >
          Return to .Trak Assistant
        </button>
      </div>
    </div>
  );
}
