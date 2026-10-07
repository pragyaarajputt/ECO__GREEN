import { CountUp } from "@/components/ui/CountUp";
import { Stagger } from "@/components/ui/Reveal";

export type ProofItem = { value: number; suffix?: string; label: string; detail: string };

/**
 * Trust strip built only from facts already on the site (counts of real
 * programmes, focus areas, stages and goals), never from invented
 * outcome figures. Outcome numbers live in IMPACT_METRICS and stay
 * placeholders until verified.
 */
export function ProofStrip({ items, className = "" }: { items: ProofItem[]; className?: string }) {
  return (
    <Stagger
      className={`grid grid-cols-2 overflow-hidden rounded-(--radius-image) border border-line/80 bg-surface shadow-rest lg:grid-cols-4 ${className}`}
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          className={`flex flex-col gap-2 p-5 sm:p-7 lg:p-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${
            i >= 2 ? "border-t border-line lg:border-t-0" : ""
          } ${i === 2 ? "lg:border-l" : ""}`}
        >
          <span className="font-display text-[40px] font-extrabold leading-none tracking-[-0.04em] text-green-600 sm:text-[52px]">
            <CountUp value={item.value} suffix={item.suffix} />
          </span>
          <span className="font-display text-[15px] font-bold leading-[1.3] text-ink-950 sm:text-[16px]">{item.label}</span>
          <span className="text-[13px] leading-[1.5] text-ink-600 sm:text-[14px]">{item.detail}</span>
        </div>
      ))}
    </Stagger>
  );
}
