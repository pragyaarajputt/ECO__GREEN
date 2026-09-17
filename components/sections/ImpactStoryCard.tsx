import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";

const CHAIN = ["Problem", "Intervention", "Community", "Outcome", "Impact"] as const;

/**
 * Impact story scaffold. The five-stage chain is the structure real
 * stories will follow; the content of each stage is supplied later.
 * Shows the framework rather than inventing a narrative.
 */
export function ImpactStoryCard({
  number,
  title,
  imageNote,
  delay = 0,
}: {
  number: string;
  title: string;
  imageNote: string;
  delay?: number;
}) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="flex h-full flex-col overflow-hidden rounded-(--radius-image) border border-line bg-surface"
    >
      <ImagePlaceholder note={imageNote} ratio="landscape" rounded="none" className="border-0 border-b border-line" />
      <div className="flex flex-1 flex-col gap-5 p-6 lg:p-7">
        <div className="flex items-center gap-4">
          <span className="tnum font-display text-[13px] font-bold text-green-600">{number}</span>
          <span aria-hidden="true" className="h-px w-6 bg-line" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">Impact story</span>
        </div>
        <h3 className="m-0 font-display text-[20px] font-bold leading-[1.2] tracking-[-0.025em] text-ink-950">
          {title}
        </h3>
        <ol className="m-0 flex list-none flex-col gap-0 p-0">
          {CHAIN.map((stage, i) => (
            <li key={stage} className="flex items-center gap-3 border-t border-line py-2.5 first:border-t-0">
              <span className="tnum w-5 flex-none text-[12px] font-semibold text-ink-400">{i + 1}</span>
              <span className="text-[14px] font-semibold text-ink-800">{stage}</span>
              <span className="ml-auto text-[13px] text-ink-400">To be supplied</span>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
