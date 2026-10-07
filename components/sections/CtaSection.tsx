import { Container } from "@/components/ui/Container";
import { PageNumber } from "@/components/ui/PageNumber";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LeafDrift } from "@/components/ui/Leaf";

export function CtaSection({
  number = "11",
  label = "Partner with us",
  title,
  body,
  primaryHref = "/contact",
  primaryLabel = "Partner With Us",
  secondaryHref,
  secondaryLabel,
}: {
  number?: string;
  label?: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-brand-band py-section-lg text-on-dark">
      <LeafDrift />
      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-8">
            <PageNumber number={number} label={label} tone="dark" />
            <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="flex flex-col gap-6 lg:col-span-8">
                <h2 className="m-0 max-w-[18ch] font-display text-[30px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[40px] lg:text-[54px]">
                  {title}
                </h2>
                <p className="m-0 max-w-[56ch] text-[17px] leading-[1.7] text-on-dark-muted lg:text-[19px]">{body}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-self-end">
                <Button href={primaryHref} withArrow>
                  {primaryLabel}
                </Button>
                {secondaryHref && secondaryLabel && (
                  <Button href={secondaryHref} variant="onDark">
                    {secondaryLabel}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
