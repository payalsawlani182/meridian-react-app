function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px', background: 'var(--ink)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 600, color: 'var(--gold)', marginBottom: 16 }}>MERIDIAN</div>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: 'rgba(244,240,232,0.3)', lineHeight: 1.8, maxWidth: 260 }}>
            Capital intelligence and strategic advisory for institutions operating at the sovereign and ultra-HNW tier.
          </p>
        </div>
        {[
          { title: 'Services', items: ['M&A Advisory', 'Capital Markets', 'Restructuring', 'Strategic Intelligence', 'Family Office'] },
          { title: 'Offices', items: ['London', 'Dubai', 'New York', 'Singapore', 'Hong Kong', 'Zurich'] },
          { title: 'Legal', items: ['Regulatory Disclosures', 'Privacy Policy', 'Terms of Use', 'Modern Slavery Act'] },
        ].map((col, i) => (
          <div key={i}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>{col.title}</div>
            {col.items.map(item => (
              <div key={item} style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'rgba(244,240,232,0.3)', marginBottom: 10, cursor: 'none' }}>{item}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--border2)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(244,240,232,0.2)' }}>© 2025 Meridian Capital Advisory. All rights reserved. Authorised and regulated by the FCA.</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(244,240,232,0.2)' }}>EST. 2004 — LONDON</div>
      </div>
    </footer>
  );
}

export default Footer;
