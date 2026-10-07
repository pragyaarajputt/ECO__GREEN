"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A real number that counts up once when it scrolls into view. The server
 * renders the final value, so it is correct without JavaScript, and a
 * number already on screen at load is left alone rather than flashing to 0.
 * Tabular figures with a reserved width keep the layout from shifting.
 */
export function CountUp({ value, suffix = "", className = "" }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = node.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return;

    setDisplay(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1200;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={`tnum inline-block ${className}`} style={{ minWidth: `${String(value).length + suffix.length}ch` }}>
      {display}
      {suffix}
    </span>
  );
}
