"use client";

import { useEffect, useRef, useState } from "react";
import type { ImpactMetric } from "@/lib/types";

/**
 * Impact figure. When value is null — the case for every metric until Eco
 * Green supplies verified data — it renders the XX+ placeholder and no
 * counter runs. Once a real number is set the counter animates once on
 * entry, and not at all under prefers-reduced-motion.
 */
export function ImpactStat({
  metric,
  tone = "light",
  size = "md",
}: {
  metric: ImpactMetric;
  tone?: "light" | "dark";
  size?: "md" | "lg";
}) {
  const dark = tone === "dark";
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState<number | null>(metric.value === null ? null : 0);

  useEffect(() => {
    if (metric.value === null) return;
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(metric.value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const target = metric.value as number;
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [metric.value]);

  const figure = display === null ? "XX+" : `${display.toLocaleString("en-IN")}${metric.suffix ?? "+"}`;

  return (
    <div ref={ref} className={`flex flex-col gap-3 border-t pt-5 lg:pt-6 ${dark ? "border-white/15" : "border-line"}`}>
      <span
        className={`tnum m-0 font-display font-bold leading-[0.9] tracking-[-0.04em] ${
          size === "lg" ? "text-[38px] sm:text-[52px] lg:text-[72px]" : "text-[32px] sm:text-[42px] lg:text-[56px]"
        } ${display === null ? (dark ? "text-green-500/70" : "text-ink-400/60") : dark ? "text-green-500" : "text-green-600"}`}
      >
        {figure}
      </span>
      <span
        className={`text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.12em] lg:text-[13px] ${
          dark ? "text-on-dark-muted" : "text-ink-400"
        }`}
      >
        {metric.label}
      </span>
    </div>
  );
}
