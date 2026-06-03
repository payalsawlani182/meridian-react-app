import { useEffect, useRef } from "react";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      }
    };
    const hover = () => { if (ringRef.current) ringRef.current.style.transform += ' scale(2.2)'; };
    const leave = () => { if (ringRef.current) ringRef.current.style.transform = ringRef.current.style.transform.replace(' scale(2.2)', ''); };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', hover);
      el.addEventListener('mouseleave', leave);
    });

    let raf;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px,${ring.current.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: -4, left: -4, width: 8, height: 8,
        borderRadius: '50%', background: 'var(--gold)', pointerEvents: 'none',
        zIndex: 9999, transition: 'opacity 0.2s', mixBlendMode: 'difference'
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', top: -16, left: -16, width: 32, height: 32,
        borderRadius: '50%', border: '1px solid var(--gold)', pointerEvents: 'none',
        zIndex: 9998, transition: 'transform 0.08s var(--ease)', opacity: 0.5
      }} />
    </>
  );
}

export default Cursor;
