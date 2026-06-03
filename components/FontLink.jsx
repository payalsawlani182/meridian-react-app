const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400&family=Syne:wght@400;500;700;800&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --ink: #0a0a0f;
      --ink2: #1a1a24;
      --gold: #c9a84c;
      --gold2: #e8c97a;
      --gold-dim: rgba(201,168,76,0.12);
      --mist: #f4f0e8;
      --mist2: #ede9df;
      --smoke: rgba(255,255,255,0.06);
      --smoke2: rgba(255,255,255,0.03);
      --border: rgba(201,168,76,0.18);
      --border2: rgba(255,255,255,0.07);
      --serif: 'Cormorant Garamond', Georgia, serif;
      --sans: 'Syne', sans-serif;
      --mono: 'DM Mono', monospace;
      --ease: cubic-bezier(0.16, 1, 0.3, 1);
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--ink);
      color: var(--mist);
      font-family: var(--sans);
      overflow-x: hidden;
      cursor: none;
    }

    ::selection { background: var(--gold); color: var(--ink); }

    ::-webkit-scrollbar { width: 2px; }
    ::-webkit-scrollbar-track { background: var(--ink); }
    ::-webkit-scrollbar-thumb { background: var(--gold); }

    .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); }
  `}</style>
);

export default FontLink;
