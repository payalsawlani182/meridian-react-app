import { useState } from "react";
import Reveal from "./Reveal";

const CASES = [
  { id: '001', sector: 'Energy', title: 'North Sea Asset Divestiture', geo: 'United Kingdom', val: '$4.2B', timeline: '8 months', type: 'Sell-side M&A', desc: 'Advised a major integrated energy group on the strategic carve-out and competitive auction of a legacy North Sea upstream portfolio at a premium to book.' },
  { id: '002', sector: 'Technology', title: 'APAC SaaS Platform Series D', geo: 'Singapore / Japan', val: '$380M', timeline: '5 months', type: 'Growth Equity', desc: 'Placed a $380M Series D round for a B2B SaaS platform, syndicating across 6 institutional investors across Tokyo, Singapore, and San Francisco.' },
  { id: '003', sector: 'Real Estate', title: 'GCC Sovereign REIT Restructuring', geo: 'UAE / Saudi Arabia', val: '$1.8B', timeline: '14 months', type: 'Restructuring', desc: 'Led creditor-side advisory on the comprehensive restructuring of a $1.8B mixed-use real estate vehicle held by a Gulf sovereign wealth fund.' },
  { id: '004', sector: 'Infrastructure', title: 'LatAm Toll Road Portfolio Acquisition', geo: 'Brazil / Chile', val: '$2.6B', timeline: '11 months', type: 'Buy-side M&A', desc: 'Originated and executed the competitive acquisition of a 9-asset toll road portfolio spanning Brazil and Chile for a pan-European infrastructure fund.' },
];

function Cases() {
  const [active, setActive] = useState(null);
  return (
    <section id="cases" style={{ padding: '120px 0', background: 'var(--ink2)' }}>
      <div style={{ padding: '0 48px', marginBottom: 80 }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: 16, textTransform: 'uppercase' }}>06 — Selected Transactions</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 300, color: 'var(--mist)', lineHeight: 1.1 }}>
            Proof of<br /><em>Precision at Scale</em>
          </h2>
        </Reveal>
      </div>

      <div style={{ padding: '0 48px' }}>
        {CASES.map((c, i) => (
          <Reveal key={c.id} delay={i * 80}>
            <div onClick={() => setActive(active === c.id ? null : c.id)} data-hover
              style={{
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                borderBottom: '1px solid var(--border)',
                padding: '32px 0', cursor: 'none', transition: 'padding 0.3s',
                paddingLeft: active === c.id ? 32 : 0,
                borderLeft: active === c.id ? '2px solid var(--gold)' : '2px solid transparent',
              }}>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 32, alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 28, color: 'rgba(201,168,76,0.2)', fontWeight: 300 }}>{c.id}</div>
                <div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 10px', background: 'var(--gold-dim)', color: 'var(--gold)', border: '1px solid var(--border)' }}>{c.sector}</span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(244,240,232,0.3)' }}>{c.type}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, color: 'var(--mist)', marginBottom: 4 }}>{c.title}</h3>
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'rgba(244,240,232,0.4)' }}>{c.geo}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 300, color: 'var(--gold)' }}>{c.val}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(244,240,232,0.3)' }}>{c.timeline}</div>
                </div>
              </div>
              <div style={{
                overflow: 'hidden', maxHeight: active === c.id ? '120px' : '0',
                transition: 'max-height 0.4s var(--ease)'
              }}>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 15, color: 'rgba(244,240,232,0.5)', lineHeight: 1.7, paddingTop: 20, paddingLeft: 112 }}>{c.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Cases;
