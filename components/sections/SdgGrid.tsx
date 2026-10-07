import { Stagger } from "@/components/ui/Reveal";
import { LeafMark } from "@/components/ui/Leaf";
import { SDGS } from "@/data/content";

// Goals served by the environmental focus areas; the rest are social.
const ENVIRONMENTAL = new Set([6, 12, 13, 15]);

/**
 * SDG alignment. Only goals genuinely connected to the stated thematic
 * areas appear, and each states the connection rather than showing a
 * wall of logos. Green marks social goals, teal environmental ones.
 */
export function SdgGrid() {
  return (
    <>
      <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-ink-600">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-green-600" />
          Social
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-teal-600" />
          Environmental
        </span>
      </div>
      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {SDGS.map((s) => {
          const env = ENVIRONMENTAL.has(s.number);
          return (
            <article
              key={s.number}
              className={`card-lift relative flex h-full flex-col gap-3 overflow-hidden rounded-(--radius-card) border border-line bg-surface p-6 shadow-rest before:absolute before:inset-x-0 before:top-0 before:h-1 ${
                env ? "before:bg-teal-600" : "before:bg-green-600"
              }`}
            >
              <LeafMark
                className={`card-leaf pointer-events-none absolute -right-4 -top-4 size-16 opacity-[0.10] ${env ? "text-teal-600" : "text-green-600"}`}
                strokeWidth={3}
              />
              <span
                className={`tnum font-display text-[36px] font-extrabold leading-none tracking-[-0.05em] ${
                  env ? "text-teal-600" : "text-green-600"
                }`}
              >
                {String(s.number).padStart(2, "0")}
              </span>
              <h3 className="m-0 font-display text-[16px] font-bold leading-[1.25] tracking-[-0.015em] text-ink-950">
                {s.title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.55] text-ink-600">{s.relevance}</p>
              <span className="sr-only">{env ? "Environmental goal" : "Social goal"}</span>
            </article>
          );
        })}
      </Stagger>
    </>
  );
}
