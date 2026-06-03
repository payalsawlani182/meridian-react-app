import { useState, useEffect, useRef } from "react";

function Reveal({ children, delay = 0, direction = 'up', style = {} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const from = direction === 'up' ? 'translateY(40px)' : direction === 'left' ? 'translateX(-40px)' : 'translateX(40px)';
  return (
    <div ref={ref} style={{
      transform: vis ? 'none' : from,
      opacity: vis ? 1 : 0,
      transition: `transform 0.9s var(--ease) ${delay}ms, opacity 0.9s ease ${delay}ms`,
      ...style
    }}>
      {children}
    </div>
  );
}

export default Reveal;
