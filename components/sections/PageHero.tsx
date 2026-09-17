import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PageNumber } from "@/components/ui/PageNumber";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Interior page hero — editorial split rather than a centred title on a
 * band. Number and label sit with the headline; a tall image column
 * anchors the page visually.
 */
export function PageHero({
  number,
  label,
  title,
  lede,
  imageNote,
  actions,
  total = "10",
}: {
  number: string;
  label: string;
  title: ReactNode;
  lede?: string;
  imageNote: string;
  actions?: ReactNode;
  total?: string;
}) {
  return (
    <section className="border-b border-line bg-paper pb-14 pt-10 lg:pb-24 lg:pt-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="flex flex-col gap-7">
              <PageNumber number={number} label={label} total={total} />
              <h1 className="m-0 max-w-[16ch] font-display text-[34px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[48px] lg:text-[64px]">
                {title}
              </h1>
              {lede && <p className="m-0 max-w-[52ch] text-[17px] leading-[1.7] text-ink-600 lg:text-[19px]">{lede}</p>}
              {actions && <div className="mt-2 flex flex-wrap items-center gap-3">{actions}</div>}
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <ImagePlaceholder note={imageNote} ratio="portrait" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
