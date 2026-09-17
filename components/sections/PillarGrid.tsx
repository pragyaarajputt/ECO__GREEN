import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { PILLARS } from "@/data/content";

/** Four approach pillars as tall editorial portraits, not icon cards. */
export function PillarGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PILLARS.map((p, i) => (
        <Reveal as="article" key={p.number} delay={i * 80} className="flex flex-col gap-5">
          <ImagePlaceholder note={p.imageNote} ratio="portrait" />
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="tnum font-display text-[13px] font-bold text-green-600">{p.number}</span>
              <span aria-hidden="true" className="h-px w-6 bg-line" />
            </div>
            <h3 className="m-0 font-display text-[21px] font-bold leading-[1.18] tracking-[-0.025em] text-ink-950">
              {p.title}
            </h3>
            <p className="m-0 text-[15px] leading-[1.65] text-ink-600">{p.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
