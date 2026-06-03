import { useState } from "react";
import Reveal from "./Reveal";

const OFFICES = [
  { city: 'London', country: 'United Kingdom', region: 'EMEA', x: 47, y: 28, focus: 'Capital Markets, M&A', team: 42, tz: 'GMT+1' },
  { city: 'Dubai', country: 'UAE', region: 'EMEA', x: 57, y: 40, focus: 'GCC Sovereigns, Real Assets', team: 28, tz: 'GMT+4' },
  { city: 'Singapore', country: 'Singapore', region: 'APAC', x: 74, y: 52, focus: 'ASEAN, Private Credit', team: 31, tz: 'GMT+8' },
  { city: 'New York', country: 'United States', region: 'Americas', x: 21, y: 33, focus: 'Restructuring, Leveraged Finance', team: 55, tz: 'GMT-5' },
  { city: 'Hong Kong', country: 'China SAR', region: 'APAC', x: 77, y: 42, focus: 'China Cross-Border, IPO', team: 24, tz: 'GMT+8' },
  { city: 'Zurich', country: 'Switzerland', region: 'EMEA', x: 49, y: 27, focus: 'Family Office, Private Wealth', team: 18, tz: 'GMT+2' },
  { city: 'São Paulo', country: 'Brazil', region: 'Americas', x: 29, y: 68, focus: 'LatAm M&A, Infrastructure', team: 22, tz: 'GMT-3' },
  { city: 'Mumbai', country: 'India', region: 'APAC', x: 63, y: 44, focus: 'India Growth, Fintech', team: 29, tz: 'GMT+5.5' },
];

function Presence() {
  const [selected, setSelected] = useState(null);
  const [regionFilter, setRegionFilter] = useState('All');
  const regions = ['All', 'EMEA', 'APAC', 'Americas'];

  return (
    <section id="presence" style={{ padding: '120px 0', background: 'var(--ink2)' }}>
      <div style={{ padding: '0 48px', marginBottom: 64 }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: 16, textTransform: 'uppercase' }}>04 — Global Presence</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 300, color: 'var(--mist)', lineHeight: 1.1 }}>
            Embedded Across<br /><em>Eight Financial Capitals</em>
          </h2>
        </Reveal>
      </div>

      <div style={{ padding: '0 48px', display: 'flex', gap: 8, marginBottom: 40 }}>
        {regions.map(r => (
          <button key={r} onClick={() => { setRegionFilter(r); setSelected(null); }} data-hover style={{
            cursor: 'none', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em',
            textTransform: 'uppercase', padding: '7px 18px',
            background: regionFilter === r ? 'var(--gold)' : 'transparent',
            color: regionFilter === r ? 'var(--ink)' : 'rgba(244,240,232,0.4)',
            border: `1px solid ${regionFilter === r ? 'var(--gold)' : 'var(--border)'}`,
            transition: 'all 0.25s'
          }}>{r}</button>
        ))}
      </div>

      {/* Map */}
      <div style={{ padding: '0 48px', marginBottom: 0 }}>
        <div style={{
          position: 'relative', background: 'var(--ink)', border: '1px solid var(--border)',
          overflow: 'hidden', height: 420
        }}>
          {/* Grid lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{
              position: 'absolute', left: `${(i + 1) * 12.5}%`, top: 0, bottom: 0,
              borderLeft: '1px solid rgba(201,168,76,0.04)'
            }} />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={{
              position: 'absolute', top: `${(i + 1) * 16.67}%`, left: 0, right: 0,
              borderTop: '1px solid rgba(201,168,76,0.04)'
            }} />
          ))}

          {/* Office pins */}
          {OFFICES.map((o, i) => {
            const isVis = regionFilter === 'All' || o.region === regionFilter;
            return (
              <div key={i} onClick={() => setSelected(selected?.city === o.city ? null : o)} data-hover
                style={{
                  position: 'absolute', left: `${o.x}%`, top: `${o.y}%`,
                  transform: 'translate(-50%, -50%)', cursor: 'none',
                  opacity: isVis ? 1 : 0.15, transition: 'opacity 0.3s',
                  zIndex: selected?.city === o.city ? 10 : 1
                }}>
                <div style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: selected?.city === o.city ? 'var(--gold)' : 'rgba(201,168,76,0.6)',
                  border: `1px solid var(--gold)`,
                  boxShadow: selected?.city === o.city ? '0 0 16px var(--gold)' : '0 0 6px rgba(201,168,76,0.3)',
                  transition: 'all 0.3s',
                  animation: `pulse 2s ease-in-out ${i * 0.3}s infinite`
                }} />
                <div style={{
                  position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
                  fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--gold)',
                  whiteSpace: 'nowrap', letterSpacing: '0.08em', textTransform: 'uppercase',
                  opacity: 0.7
                }}>{o.city}</div>
              </div>
            );
          })}

          {/* Selected panel */}
          {selected && (
            <div style={{
              position: 'absolute', right: 0, top: 0, bottom: 0, width: 300,
              background: 'rgba(10,10,15,0.95)', borderLeft: '1px solid var(--border)',
              padding: 32, backdropFilter: 'blur(20px)',
              animation: 'slideIn 0.3s var(--ease)'
            }}>
              <button onClick={() => setSelected(null)} data-hover style={{
                position: 'absolute', top: 16, right: 16, background: 'none', border: 'none',
                color: 'rgba(244,240,232,0.4)', cursor: 'none', fontSize: 18
              }}>×</button>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', marginBottom: 8, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{selected.region}</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 300, color: 'var(--mist)', marginBottom: 4 }}>{selected.city}</h3>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: 'rgba(244,240,232,0.4)', marginBottom: 32 }}>{selected.country}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                {[['Team', selected.team + ' people'], ['Timezone', selected.tz]].map(([k, v], i) => (
                  <div key={i} style={{ background: 'var(--smoke)', padding: '12px 16px' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(244,240,232,0.3)', textTransform: 'uppercase', marginBottom: 4 }}>{k}</div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--mist)' }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(244,240,232,0.3)', textTransform: 'uppercase', marginBottom: 8 }}>Focus Areas</div>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: 'rgba(244,240,232,0.6)', lineHeight: 1.6 }}>{selected.focus}</div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{box-shadow:0 0 6px rgba(201,168,76,0.3)} 50%{box-shadow:0 0 16px rgba(201,168,76,0.6)} }
        @keyframes slideIn { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:none} }
      `}</style>
    </section>
  );
}

export default Presence;
