import { useState, useEffect } from "react";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['home', 'services', 'intelligence', 'presence', 'team', 'cases', 'contact'];

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '12px 48px' : '24px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.4s var(--ease)'
      }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 600, letterSpacing: '0.02em', color: 'var(--gold)' }}>
          MERIDIAN
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: 'none', border: 'none', cursor: 'none',
              fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: active === l ? 'var(--gold)' : 'rgba(244,240,232,0.5)',
              transition: 'color 0.3s', padding: '4px 0',
              borderBottom: active === l ? '1px solid var(--gold)' : '1px solid transparent'
            }}>{l}</button>
          ))}
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          nav > div:last-child { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default Nav;
