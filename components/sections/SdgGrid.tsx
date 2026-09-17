import { Reveal } from "@/components/ui/Reveal";
import { SDGS } from "@/data/content";

/**
 * SDG alignment. Only goals genuinely connected to the stated thematic
 * areas appear, and each states the connection rather than showing a
 * wall of logos.
 */
export function SdgGrid() {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-(--radius-image) border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
      {SDGS.map((s, i) => (
        <Reveal key={s.number} delay={i * 40} className="flex flex-col gap-3 bg-surface p-6">
          <span className="tnum font-display text-[28px] font-bold leading-none tracking-[-0.03em] text-green-600">
            {String(s.number).padStart(2, "0")}
          </span>
          <h3 className="m-0 font-display text-[16px] font-bold leading-[1.25] tracking-[-0.015em] text-ink-950">
            {s.title}
          </h3>
          <p className="m-0 text-[13px] leading-[1.55] text-ink-400">{s.relevance}</p>
        </Reveal>
      ))}
    </div>
  );
}
