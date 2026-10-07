import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageNumber } from "@/components/ui/PageNumber";
import { PageHero } from "@/components/sections/PageHero";
import { FocusAreaList, FocusAreaNav } from "@/components/sections/FocusAreaList";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { LeafMark } from "@/components/ui/Leaf";
import { CrescentArc } from "@/components/ui/Crescent";
import { SUSTAINABILITY_FOCUS_AREAS, SDGS } from "@/data/content";
import { PROGRAMMES } from "@/data/programmes";

export const metadata: Metadata = {
  title: "Our Sustainability Focus",
  description:
    "Sustainability — building a resilient future. Climate action, water conservation, waste and circular economy, biodiversity restoration, sustainable communities and livelihoods.",
};

// The environmental goals from the site's existing SDG alignment list.
const ENVIRONMENTAL_SDGS = [6, 12, 13, 15];

export default function SustainabilityPage() {
  // Proof strip: the ~40% figure from the lede plus counts of content on the site.
  const interventions = SUSTAINABILITY_FOCUS_AREAS.reduce((n, a) => n + a.items.length, 0);
  const proof = [
    { value: 40, suffix: "%", label: "Strategic focus", detail: "Approximately, alongside CSR" },
    { value: SUSTAINABILITY_FOCUS_AREAS.length, label: "Focus areas", detail: "Climate to livelihoods" },
    { value: interventions, label: "Intervention types", detail: "Listed across the focus areas" },
    {
      value: PROGRAMMES.filter((p) => p.category === "Sustainability").length,
      label: "Sustainability programmes",
      detail: "Delivered with community participation",
    },
  ];
  const sdgs = SDGS.filter((s) => ENVIRONMENTAL_SDGS.includes(s.number));

  return (
    <>
      <PageHero
        variant="organic"
        number="04"
        label="Sustainability"
        title={
          <>
            Protecting the environment.
            <br />
            <span className="bg-linear-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              Strengthening communities.
            </span>
          </>
        }
        lede="Sustainability represents approximately 40% of Eco Green's strategic focus. Our initiatives complement our CSR programmes by addressing environmental challenges and promoting responsible, resilient development."
        imageNote="Sustainability — restored landscape with community participation"
        actions={
          <>
            <Button href="/programmes" withArrow size="lg">Sustainability programmes</Button>
            <Button href="/csr" variant="outline">Our CSR focus</Button>
          </>
        }
      >
        <ProofStrip items={proof} className="mt-14 lg:mt-20" />
      </PageHero>

      {/* 01 — PHILOSOPHY: deep-green statement with the logo's crescent and leaf */}
      <section className="on-dark relative overflow-hidden bg-green-900 py-section-lg text-on-dark">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 -left-32 size-[520px] rounded-full bg-[radial-gradient(circle,rgb(146_198_12/0.16),transparent_70%)]"
        />
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-8">
              <div className="flex flex-col gap-10">
                <PageNumber number="01" label="Our philosophy" tone="dark" />
                <blockquote className="m-0">
                  <p className="m-0 max-w-[20ch] font-display text-h1 font-bold">
                    Sustainability is not only about protecting the environment.
                  </p>
                  <p className="m-0 mt-8 max-w-[44ch] text-[17px] leading-[1.7] text-on-dark-muted sm:text-[18px] lg:text-[22px]">
                    It is about creating a future where{" "}
                    <span className="font-semibold text-green-500">people, communities and nature</span> can thrive
                    together.
                  </p>
                </blockquote>
              </div>
            </Reveal>
            {/* Decorative: crescent embracing a leaf, as in the logo */}
            <div aria-hidden="true" className="relative hidden aspect-square lg:col-span-4 lg:block">
              <CrescentArc className="absolute inset-0 size-full opacity-60" strokeWidth={14} from="var(--color-green-500)" to="var(--color-teal-500)" />
              <div className="absolute inset-[28%]">
                <div className="leaf-drift size-full" style={{ animationDuration: "15s" }}>
                  <LeafMark className="size-full text-green-500" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — FOCUS AREAS */}
      <Section tone="white">
        <SectionHeading
          number="02"
          label="Sustainability focus areas"
          title="Six areas of environmental and resilient development."
          lede="Each area is delivered with community participation and measured on what remains functional after handover, not on what was installed."
        />
        <FocusAreaNav areas={SUSTAINABILITY_FOCUS_AREAS} label="Sustainability focus areas" />
        <FocusAreaList areas={SUSTAINABILITY_FOCUS_AREAS} shaped />
      </Section>

      {/* 03 — SDG CONNECTIONS: from the site's existing SDG alignment */}
      <section className="bg-green-50 py-section">
        <Container>
          <SectionHeading
            number="03"
            label="Global goals"
            title="Where this work meets the SDGs."
            lede="The environmental goals our sustainability programmes contribute to, each with the connection stated."
          />
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sdgs.map((s) => (
              <article
                key={s.number}
                className="card-lift relative flex h-full flex-col gap-4 overflow-hidden rounded-(--radius-card) border border-line bg-surface p-7 shadow-rest"
              >
                <LeafMark className="card-leaf pointer-events-none absolute -right-5 -top-5 size-20 text-green-600 opacity-[0.10]" strokeWidth={3} />
                <span className="tnum font-display text-[44px] font-extrabold leading-none tracking-[-0.05em] text-teal-600">
                  {String(s.number).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-display text-[18px] font-bold leading-[1.25] tracking-[-0.015em] text-ink-950">
                  {s.title}
                </h3>
                <p className="m-0 text-[14px] leading-[1.6] text-ink-600">{s.relevance}</p>
              </article>
            ))}
          </Stagger>
        </Container>
      </section>

      <CtaSection
        number="04"
        title="Environmental programmes that are still working in year three."
        body="Tell us the theme and the geography, and we will tell you what can realistically be sustained there."
        secondaryHref="/impact"
        secondaryLabel="Our impact framework"
      />
    </>
  );
}
