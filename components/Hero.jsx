import { useState, useEffect } from "react";
import ParticleCanvas from "./ParticleCanvas";
import Counter from "./Counter";

const stats = [
  { label: 'Assets Under Advisory', val: 48, suffix: 'B+', prefix: '$' },
  { label: 'Countries', val: 34, suffix: '' },
  { label: 'Deals Closed', val: 280, suffix: '+' },
  { label: 'Years of Precision', val: 21, suffix: '' },
];

function Hero() {
  const [typed, setTyped] = useState('');
  const full = 'Capital Intelligence\nfor a Fractured World.';
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(full.slice(0, ++i));
      if (i >= full.length) clearInterval(t);
    }, 38);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <ParticleCanvas />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)'
      }} />

      <div style={{ position: 'relative', zIndex: 2, padding: '0 48px', maxWidth: 900 }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em',
          color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 32, opacity: 0.8
        }}>
          Meridian Capital Advisory — Est. 2004
        </div>

        <h1 style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(52px, 7vw, 96px)',
          fontWeight: 300, lineHeight: 1.05, color: 'var(--mist)',
          whiteSpace: 'pre-line', marginBottom: 40, minHeight: '2em'
        }}>
          {typed}
          <span style={{ opacity: Math.random() > 0.5 ? 1 : 0, color: 'var(--gold)' }}>|</span>
        </h1>

        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'rgba(244,240,232,0.55)', maxWidth: 480, lineHeight: 1.6, marginBottom: 48 }}>
          Where sovereign wealth meets strategic clarity — across EMEA, APAC, and the Americas.
        </p>

        <div style={{ display: 'flex', gap: 16 }}>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} style={{
            cursor: 'none', fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '0.12em',
            textTransform: 'uppercase', padding: '14px 32px',
            background: 'var(--gold)', color: 'var(--ink)', border: 'none',
            transition: 'all 0.3s'
          }}>Explore Services</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{
            cursor: 'none', fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '0.12em',
            textTransform: 'uppercase', padding: '14px 32px',
            background: 'transparent', color: 'var(--gold)',
            border: '1px solid var(--gold)', transition: 'all 0.3s'
          }}>Request Briefing</button>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        borderTop: '1px solid var(--border)'
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: '24px 32px',
            borderRight: i < 3 ? '1px solid var(--border)' : 'none',
            background: 'rgba(10,10,15,0.7)', backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 300, color: 'var(--gold)', marginBottom: 4 }}>
              <Counter end={s.val} suffix={s.suffix} prefix={s.prefix} />
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', color: 'rgba(244,240,232,0.4)', textTransform: 'uppercase' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
