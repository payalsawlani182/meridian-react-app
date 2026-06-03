import { useState, useEffect } from "react";
import Reveal from "./Reveal";

const TICKERS = [
  { sym: 'SPX', val: 5248.32, chg: 0.62 }, { sym: 'FTSE', val: 8142.15, chg: -0.18 },
  { sym: 'DAX', val: 18321.44, chg: 0.44 }, { sym: 'NIKKEI', val: 38947.00, chg: 1.12 },
  { sym: 'XAU/USD', val: 2318.50, chg: 0.31 }, { sym: 'WTI', val: 81.42, chg: -0.22 },
  { sym: 'EUR/USD', val: 1.0834, chg: 0.08 }, { sym: 'BTC/USD', val: 68421.00, chg: 2.14 },
  { sym: 'HSI', val: 18432.12, chg: -0.44 }, { sym: 'BRENT', val: 85.62, chg: -0.11 },
];

const INSIGHTS = [
  { id: 'A', sector: 'Macro', title: 'Fed Pivot Signals Realignment of EM Capital Flows', date: 'Jun 2025', read: '8 min', blurb: 'Rate divergence between G10 economies is creating asymmetric opportunities in frontier debt markets — particularly across Southeast Asia and West Africa.' },
  { id: 'B', sector: 'Equities', title: 'Semiconductor Supply Chain: The New Geopolitical Fault Line', date: 'May 2025', read: '12 min', blurb: 'TSMC dependency ratios and the CHIPS Act incentive stack are reshaping FDI decisions at the sovereign level.' },
  { id: 'C', sector: 'Commodities', title: 'Critical Minerals Demand Surge: Lithium, Cobalt & the Energy Transition', date: 'May 2025', read: '10 min', blurb: 'Long-term supply contracts are being repriced as battery manufacturers compete with national stockpiling programs.' },
  { id: 'D', sector: 'Fixed Income', title: 'GCC Sovereign Bonds: Yield Premium vs Oil Correlation', date: 'Apr 2025', read: '6 min', blurb: 'Fiscal break-even analysis across Saudi, UAE, and Qatari sovereign issuances reveals embedded optionality below current market pricing.' },
  { id: 'E', sector: 'FX', title: 'Renminbi Internationalisation: Belt & Road Settlement Shifts', date: 'Apr 2025', read: '9 min', blurb: 'CNY-denominated trade settlement has crossed 30% in bilateral corridors, creating structural demand dynamics for offshore yuan.' },
  { id: 'F', sector: 'Private Equity', title: 'Mid-Market European Buyouts: Vintage Timing in a Rate Reset', date: 'Mar 2025', read: '11 min', blurb: 'Compressed entry multiples and stubborn exit valuations define the current vintage — a thesis for patient capital with operational focus.' },
];

const FILTERS = ['All', 'Macro', 'Equities', 'Fixed Income', 'Commodities', 'FX', 'Private Equity'];

function Intelligence() {
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState(null);
  const [prices, setPrices] = useState(TICKERS);

  useEffect(() => {
    const t = setInterval(() => {
      setPrices(p => p.map(t => ({
        ...t,
        val: +(t.val * (1 + (Math.random() - 0.5) * 0.0008)).toFixed(t.val > 1000 ? 2 : t.val > 10 ? 4 : 4),
        chg: +(t.chg + (Math.random() - 0.5) * 0.05).toFixed(2)
      })));
    }, 2000);
    return () => clearInterval(t);
  }, []);

  const visible = filter === 'All' ? INSIGHTS : INSIGHTS.filter(i => i.sector === filter);

  return (
    <section id="intelligence" style={{ padding: '120px 0', background: 'var(--ink)' }}>
      <div style={{ padding: '0 48px', marginBottom: 48 }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: 16, textTransform: 'uppercase' }}>03 — Market Intelligence</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 300, color: 'var(--mist)', lineHeight: 1.1 }}>
            Proprietary Research.<br /><em>Actionable Signal.</em>
          </h2>
        </Reveal>
      </div>

      {/* Ticker */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '14px 0', marginBottom: 64, background: 'var(--ink2)', position: 'relative' }}>
        <div style={{ display: 'flex', gap: 48, animation: 'scroll 30s linear infinite', width: 'max-content' }}>
          {[...prices, ...prices].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--gold)', letterSpacing: '0.08em' }}>{t.sym}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mist)' }}>{t.val.toLocaleString()}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: t.chg >= 0 ? '#4caf84' : '#e05555' }}>
                {t.chg >= 0 ? '▲' : '▼'} {Math.abs(t.chg).toFixed(2)}%
              </span>
              <span style={{ color: 'var(--border)', fontSize: 10 }}>|</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div style={{ padding: '0 48px', display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
        {FILTERS.map(f => (
          <button key={f} onClick={() => setFilter(f)} data-hover style={{
            cursor: 'none', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em',
            textTransform: 'uppercase', padding: '7px 18px',
            background: filter === f ? 'var(--gold)' : 'transparent',
            color: filter === f ? 'var(--ink)' : 'rgba(244,240,232,0.4)',
            border: `1px solid ${filter === f ? 'var(--gold)' : 'var(--border)'}`,
            transition: 'all 0.25s'
          }}>{f}</button>
        ))}
      </div>

      {/* Cards */}
      <div style={{ padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 1, border: '1px solid var(--border)' }}>
        {visible.map((ins) => (
          <div key={ins.id} onClick={() => setExpanded(expanded === ins.id ? null : ins.id)} data-hover
            style={{
              padding: '32px', cursor: 'none', background: 'var(--ink2)',
              borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
              transition: 'background 0.3s',
              position: 'relative', overflow: 'hidden'
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.12em',
                textTransform: 'uppercase', padding: '4px 10px',
                background: 'var(--gold-dim)', color: 'var(--gold)', border: '1px solid var(--border)'
              }}>{ins.sector}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(244,240,232,0.3)' }}>{ins.read} read</span>
            </div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 400, color: 'var(--mist)', lineHeight: 1.35, marginBottom: 12 }}>{ins.title}</h3>
            <div style={{
              overflow: 'hidden', maxHeight: expanded === ins.id ? '200px' : '0',
              transition: 'max-height 0.5s var(--ease)', marginBottom: expanded === ins.id ? 16 : 0
            }}>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: 'rgba(244,240,232,0.5)', lineHeight: 1.7 }}>{ins.blurb}</p>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderTop: '1px solid var(--border2)', paddingTop: 12, marginTop: 12
            }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(244,240,232,0.3)' }}>{ins.date}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', transition: 'transform 0.3s', display: 'inline-block', transform: expanded === ins.id ? 'rotate(90deg)' : 'none' }}>→</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

export default Intelligence;
