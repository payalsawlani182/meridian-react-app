import { useState } from "react";
import Reveal from "./Reveal";

const SERVICES = [
  { id: '01', title: 'M&A Advisory', sub: 'Cross-border deal origination and execution', desc: 'We identify transformative acquisition targets and guide clients through every stage of complex cross-border transactions — from origination to close.', tags: ['Origination', 'Due Diligence', 'Structuring', 'Negotiation'] },
  { id: '02', title: 'Capital Markets', sub: 'Debt & equity placement globally', desc: 'Deep relationships with sovereign wealth funds, family offices, and institutional investors power our bespoke capital-raising mandates across public and private markets.', tags: ['IPO', 'Private Placement', 'Debt Structuring', 'Block Trades'] },
  { id: '03', title: 'Restructuring', sub: 'Operational and financial transformation', desc: 'When complexity threatens continuity, our restructuring practice delivers clear-headed analysis and decisive action to preserve and unlock enterprise value.', tags: ['Distressed Assets', 'Creditor Advisory', 'Turnaround', 'Carve-outs'] },
  { id: '04', title: 'Strategic Intelligence', sub: 'Geopolitical and market research', desc: 'Proprietary research combining quantitative models and on-the-ground intelligence networks across 34 markets — giving clients an edge before markets move.', tags: ['Macro Research', 'Sector Analysis', 'Political Risk', 'Scenario Planning'] },
  { id: '05', title: 'Family Office', sub: 'Multi-generational wealth stewardship', desc: 'Confidential, conflict-free advisory for ultra-high-net-worth families navigating succession, portfolio construction, and philanthropic legacy.', tags: ['Succession', 'Asset Allocation', 'Tax Efficiency', 'Legacy Planning'] },
];

function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" style={{ padding: '120px 0', background: 'var(--ink2)', position: 'relative' }}>
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px',
        background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)'
      }} />

      <div style={{ padding: '0 48px', marginBottom: 80 }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: 16, textTransform: 'uppercase' }}>02 — Services</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 300, color: 'var(--mist)', lineHeight: 1.1 }}>
            Where Expertise<br /><em>Meets Execution</em>
          </h2>
        </Reveal>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 0 }}>
        <div style={{ borderRight: '1px solid var(--border)' }}>
          {SERVICES.map((s, i) => (
            <div key={i} onClick={() => setActive(i)} data-hover style={{
              padding: '28px 48px', cursor: 'none',
              borderBottom: '1px solid var(--border2)',
              background: active === i ? 'var(--gold-dim)' : 'transparent',
              borderLeft: active === i ? '2px solid var(--gold)' : '2px solid transparent',
              transition: 'all 0.3s'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', marginBottom: 6 }}>{s.id}</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 500, color: active === i ? 'var(--gold)' : 'var(--mist)' }}>{s.title}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'rgba(244,240,232,0.4)', marginTop: 2 }}>{s.sub}</div>
                </div>
                <div style={{ color: active === i ? 'var(--gold)' : 'rgba(244,240,232,0.2)', fontSize: 20, transition: 'all 0.3s' }}>→</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '48px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div key={active} style={{ animation: 'fadeSlide 0.4s var(--ease)' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 300, color: 'var(--mist)', marginBottom: 24, lineHeight: 1.2 }}>
              {SERVICES[active].title}
            </div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 18, color: 'rgba(244,240,232,0.6)', lineHeight: 1.8, marginBottom: 40 }}>
              {SERVICES[active].desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {SERVICES[active].tags.map((t, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em',
                  padding: '6px 14px', border: '1px solid var(--border)',
                  color: 'rgba(244,240,232,0.5)', textTransform: 'uppercase'
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeSlide { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }`}</style>
    </section>
  );
}

export default Services;
