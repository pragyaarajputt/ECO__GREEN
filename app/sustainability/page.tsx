import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageNumber } from "@/components/ui/PageNumber";
import { PageHero } from "@/components/sections/PageHero";
import { FocusAreaList } from "@/components/sections/FocusAreaList";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SUSTAINABILITY_FOCUS_AREAS } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Sustainability Focus",
  description:
    "Sustainability — building a resilient future. Climate action, water conservation, waste and circular economy, biodiversity restoration, sustainable communities and livelihoods.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        number="04"
        label="Sustainability"
        title={<>Protecting the environment.<br />Strengthening communities.</>}
        lede="Sustainability represents approximately 40% of Eco Green's strategic focus. Our initiatives complement our CSR programmes by addressing environmental challenges and promoting responsible, resilient development."
        imageNote="Sustainability — restored landscape with community participation"
        actions={
          <>
            <Button href="/programmes" withArrow>Sustainability programmes</Button>
            <Button href="/csr" variant="outline">Our CSR focus</Button>
          </>
        }
      />

      <section className="on-dark bg-green-900 py-20 text-on-dark lg:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-10">
              <PageNumber number="01" label="Our philosophy" tone="dark" />
              <blockquote className="m-0">
                <p className="m-0 max-w-[24ch] font-display text-[28px] font-bold leading-[1.12] tracking-[-0.03em] sm:text-[40px] lg:max-w-[20ch] lg:text-[56px]">
                  Sustainability is not only about protecting the environment.
                </p>
                <p className="m-0 mt-8 max-w-[44ch] text-[17px] leading-[1.7] text-on-dark-muted sm:text-[18px] lg:text-[22px]">
                  It is about creating a future where people, communities and nature can thrive together.
                </p>
              </blockquote>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section tone="paper">
        <SectionHeading
          number="02"
          label="Sustainability focus areas"
          title="Six areas of environmental and resilient development."
          lede="Each area is delivered with community participation and measured on what remains functional after handover, not on what was installed."
        />
        <FocusAreaList areas={SUSTAINABILITY_FOCUS_AREAS} />
      </Section>

      <CtaSection
        title="Environmental programmes that are still working in year three."
        body="Tell us the theme and the geography, and we will tell you what can realistically be sustained there."
        secondaryHref="/impact"
        secondaryLabel="Our impact framework"
      />
    </>
  );
}
