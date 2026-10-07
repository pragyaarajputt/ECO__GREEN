import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PageNumber } from "@/components/ui/PageNumber";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { CrescentArc } from "@/components/ui/Crescent";

/**
 * Interior page hero — editorial split rather than a centred title on a
 * band. Number and label sit with the headline; a tall image column
 * anchors the page visually.
 *
 * `variant="organic"` is the redesigned hero: brand glow, leaf-shaped
 * image and the logo's crescent behind it. Pages opt in one at a time.
 */
export function PageHero({
  number,
  label,
  title,
  lede,
  imageNote,
  actions,
  total = "10",
  variant = "classic",
  children,
}: {
  number: string;
  label: string;
  title: ReactNode;
  lede?: string;
  imageNote: string;
  actions?: ReactNode;
  total?: string;
  variant?: "classic" | "organic";
  /** Optional content below the split, e.g. a proof strip. */
  children?: ReactNode;
}) {
  const organic = variant === "organic";
  return (
    <section
      className={`relative overflow-hidden bg-paper pt-hero-top ${
        organic ? (children ? "pb-section-sm" : "pb-hero-bottom") : "border-b border-line pb-hero-bottom"
      }`}
    >
      {organic && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 size-[600px] rounded-full bg-[radial-gradient(circle,rgb(146_198_12/0.16),rgb(1_129_141/0.08)_45%,transparent_70%)]"
        />
      )}
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="hero-seq flex flex-col gap-7">
              <PageNumber number={number} label={label} total={total} />
              <h1 className="m-0 max-w-[16ch] font-display text-h1 font-bold">
                {title}
              </h1>
              {lede && <p className="m-0 max-w-[52ch] text-lede text-ink-600">{lede}</p>}
              {actions && <div className="mt-2 flex flex-wrap items-center gap-3">{actions}</div>}
            </div>
          </div>
          <Reveal delay={120} className="lg:col-span-5">
            {organic ? (
              <div className="relative">
                <CrescentArc
                  className="pointer-events-none absolute -bottom-[9%] -left-[11%] w-[58%] opacity-[0.22] max-lg:hidden"
                  strokeWidth={10}
                  from="var(--color-green-600)"
                  to="var(--color-teal-600)"
                />
                <ImagePlaceholder note={imageNote} ratio="portrait" rounded="leaf" className="relative max-lg:aspect-[16/10]" />
              </div>
            ) : (
              /* Portrait beside the headline; landscape when stacked, so it never outgrows the screen */
              <ImagePlaceholder note={imageNote} ratio="portrait" className="max-lg:aspect-[16/10]" />
            )}
          </Reveal>
        </div>
        {children}
      </Container>
    </section>
  );
}
