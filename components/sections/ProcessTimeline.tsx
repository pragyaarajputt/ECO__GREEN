import { Reveal, STAGGER_MS } from "@/components/ui/Reveal";
import type { ProcessStep } from "@/lib/types";

/**
 * Designed process rather than a bulleted list. Connected numbered track
 * on desktop, stacking cleanly on narrow screens without shrinking type.
 */
export function ProcessTimeline({ steps, tone = "light" }: { steps: ProcessStep[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol className="m-0 grid list-none grid-cols-1 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.number} delay={i * STAGGER_MS} className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span
              className={`tnum flex size-11 flex-none items-center justify-center rounded-full font-display text-[14px] font-bold ${
                dark ? "bg-green-600 text-white" : "bg-ink-950 text-white"
              }`}
            >
              {s.number}
            </span>
            <span aria-hidden="true" className={`h-px flex-1 ${dark ? "bg-line-dark" : "bg-line"}`} />
          </div>
          <h3
            className={`m-0 font-display text-[18px] font-bold leading-[1.25] tracking-[-0.02em] lg:text-[19px] ${
              dark ? "text-on-dark" : "text-ink-950"
            }`}
          >
            {s.title}
          </h3>
          <p className={`m-0 text-[15px] leading-[1.65] ${dark ? "text-on-dark-muted" : "text-ink-600"}`}>{s.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
