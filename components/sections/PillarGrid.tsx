import { Handshake, Lightbulb, Sprout, Users, type LucideIcon } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Stagger } from "@/components/ui/Reveal";
import { PILLARS } from "@/data/content";

const ICONS: Record<string, LucideIcon> = {
  Inclusion: Users,
  Collaboration: Handshake,
  Sustainability: Sprout,
  Innovation: Lightbulb,
};

/** Four approach pillars: photograph, icon chip, then the principle. */
export function PillarGrid() {
  return (
    <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PILLARS.map((p) => {
        const Icon = ICONS[p.title] ?? Sprout;
        return (
          <article
            key={p.number}
            className="flex h-full flex-col rounded-(--radius-card) border border-line/80 bg-surface p-3 shadow-rest"
          >
            <ImagePlaceholder note={p.imageNote} ratio="landscape" rounded="card" />
            <div className="flex flex-1 flex-col gap-3 px-3 pb-4">
              <span className="relative -mt-7 flex size-14 items-center justify-center rounded-full bg-green-600 text-white ring-[6px] ring-surface">
                <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="tnum mt-1 font-display text-[13px] font-bold text-green-700">{p.number}</span>
              <h3 className="m-0 font-display text-h3 font-bold text-ink-950">{p.title}</h3>
              <p className="m-0 text-[15px] leading-[1.65] text-ink-600">{p.body}</p>
            </div>
          </article>
        );
      })}
    </Stagger>
  );
}
