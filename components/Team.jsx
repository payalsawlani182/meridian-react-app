import { useState } from "react";
import Reveal from "./Reveal";

const TEAM = [
  { name: 'Amara Osei-Bonsu', title: 'Managing Director, M&A', region: 'EMEA', initials: 'AO', color: '#8b7355' },
  { name: 'Kenji Watanabe', title: 'Head of APAC Strategy', region: 'APAC', initials: 'KW', color: '#5a7a6b' },
  { name: 'Valentina Cruz', title: 'Partner, Capital Markets', region: 'Americas', initials: 'VC', color: '#7a5a6b' },
  { name: 'Rashid Al-Farsi', title: 'MD, GCC Sovereigns', region: 'EMEA', initials: 'RF', color: '#6b7a5a' },
  { name: 'Priya Mehta', title: 'Director, Restructuring', region: 'APAC', initials: 'PM', color: '#5a6b7a' },
  { name: 'Thomas Bergmann', title: 'Head of Family Office', region: 'EMEA', initials: 'TB', color: '#7a6b5a' },
];

function Team() {
  const [hovered, setHovered] = useState(null);
  const [filter, setFilter] = useState('All');
  const regions = ['All', 'EMEA', 'APAC', 'Americas'];
  const visible = filter === 'All' ? TEAM : TEAM.filter(t => t.region === filter);

  return (
    <section id="team" style={{ padding: '120px 0', background: 'var(--ink)' }}>
      <div style={{ padding: '0 48px', marginBottom: 64 }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: 16, textTransform: 'uppercase' }}>05 — Leadership</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 300, color: 'var(--mist)', lineHeight: 1.1 }}>
            The Principals<br /><em>Behind the Mandate</em>
          </h2>
        </Reveal>
      </div>

      <div style={{ padding: '0 48px', display: 'flex', gap: 8, marginBottom: 48 }}>
        {regions.map(r => (
          <button key={r} onClick={() => setFilter(r)} data-hover style={{
            cursor: 'none', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em',
            textTransform: 'uppercase', padding: '7px 18px',
            background: filter === r ? 'var(--gold)' : 'transparent',
            color: filter === r ? 'var(--ink)' : 'rgba(244,240,232,0.4)',
            border: `1px solid ${filter === r ? 'var(--gold)' : 'var(--border)'}`,
            transition: 'all 0.25s'
          }}>{r}</button>
        ))}
      </div>

      <div style={{ padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 1 }}>
        {visible.map((m, i) => (
          <Reveal key={m.name} delay={i * 80}>
            <div onMouseEnter={() => setHovered(m.name)} onMouseLeave={() => setHovered(null)} data-hover
              style={{
                padding: 32, border: '1px solid var(--border2)',
                background: hovered === m.name ? 'var(--ink2)' : 'transparent',
                transition: 'background 0.3s', cursor: 'none', position: 'relative'
              }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 600, color: 'rgba(244,240,232,0.9)',
                marginBottom: 20,
                filter: hovered === m.name ? 'none' : 'grayscale(100%)',
                transition: 'filter 0.4s var(--ease)'
              }}>{m.initials}</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 500, color: 'var(--mist)', marginBottom: 4 }}>{m.name}</div>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'rgba(244,240,232,0.4)', marginBottom: 16 }}>{m.title}</div>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '3px 10px', border: '1px solid var(--border)', color: 'var(--gold)'
              }}>{m.region}</span>
              {hovered === m.name && (
                <div style={{
                  position: 'absolute', bottom: 32, right: 32,
                  fontFamily: 'var(--mono)', fontSize: 18, color: 'var(--gold)'
                }}>→</div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Team;
