import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ImpactDashboard } from "@/components/sections/ImpactDashboard";
import { ImpactStoryCard } from "@/components/sections/ImpactStoryCard";
import { SdgGrid } from "@/components/sections/SdgGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IMPACT_METRICS } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Impact that can be seen, measured and sustained — impact dashboard, social and environmental impact areas, SDG alignment and impact stories.",
};

const SOCIAL = ["Education", "Healthcare", "Livelihood", "Women", "Youth", "Inclusion"];
const ENVIRONMENTAL = ["Water", "Waste", "Climate", "Biodiversity", "Green Communities"];

const STORY_SLOTS = [
  { number: "01", title: "Community story — to be supplied", imageNote: "Impact story photography — to be supplied by Eco Green" },
  { number: "02", title: "Community story — to be supplied", imageNote: "Impact story photography — to be supplied by Eco Green" },
  { number: "03", title: "Community story — to be supplied", imageNote: "Impact story photography — to be supplied by Eco Green" },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        number="06"
        label="Our impact"
        title={<>Impact that can be seen.<br />Measured. Sustained.</>}
        lede="Our impact framework is built and in use. Verified figures are published as programmes complete measurement, each with the definition and basis of calculation behind it."
        imageNote="Impact — measurement and community feedback session"
        actions={
          <>
            <Button href="/projects" withArrow>Case study framework</Button>
            <Button href="/reports" variant="outline">Reports &amp; governance</Button>
          </>
        }
      />

      <section className="on-dark bg-ink-950 py-20 text-on-dark lg:py-32">
        <Container>
          <SectionHeading
            number="01"
            label="Impact dashboard"
            tone="dark"
            title="Nine measures, published once verified."
            lede="Placeholders stand where figures will go. We would rather show XX+ than publish a number that cannot be substantiated when a partner's independent assessor asks."
          />
          <ImpactDashboard tone="dark" columns={3} size="lg" />
        </Container>
      </section>

      <Section tone="paper">
        <SectionHeading
          number="02"
          label="Impact by area"
          title="Social and environmental, reported separately and together."
          lede="Each area carries its own indicators. Where a programme contributes across both, the contribution is reported in each without double-counting the beneficiary."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-7 rounded-(--radius-image) border border-line bg-surface p-7 sm:p-8 lg:p-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-600">Social impact</span>
            <h3 className="m-0 font-display text-[24px] font-bold leading-[1.15] tracking-[-0.03em] text-ink-950 lg:text-[32px]">
              People, opportunity and inclusion
            </h3>
            <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
              {SOCIAL.map((s) => (
                <li key={s} className="rounded-(--radius-chip) border border-line bg-paper px-4 py-2 text-[14px] font-medium text-ink-800">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-2 border-t border-line pt-6">
              <ImpactDashboard metrics={IMPACT_METRICS.filter((m) => m.group === "social")} columns={2} />
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-7 rounded-(--radius-image) border border-line bg-surface p-7 sm:p-8 lg:p-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-600">Environmental impact</span>
            <h3 className="m-0 font-display text-[24px] font-bold leading-[1.15] tracking-[-0.03em] text-ink-950 lg:text-[32px]">
              Resources, ecosystems and resilience
            </h3>
            <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
              {ENVIRONMENTAL.map((s) => (
                <li key={s} className="rounded-(--radius-chip) border border-line bg-paper px-4 py-2 text-[14px] font-medium text-ink-800">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-2 border-t border-line pt-6">
              <ImpactDashboard metrics={IMPACT_METRICS.filter((m) => m.group === "environmental")} columns={2} />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper2">
        <SectionHeading
          number="03"
          label="SDG alignment"
          title="Ten goals genuinely connected to our work."
          lede="Only the goals our stated thematic areas actually contribute to. Each states the connection, rather than presenting a wall of logos."
        />
        <SdgGrid />
      </Section>

      <Section tone="paper">
        <SectionHeading
          number="04"
          label="Impact stories"
          title="Problem, intervention, community, outcome, impact."
          lede="The five-stage structure every Eco Green story follows. Stories, photography and video are published as programmes complete."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STORY_SLOTS.map((s, i) => (
            <ImpactStoryCard key={s.number} {...s} delay={i * 90} />
          ))}
        </div>
      </Section>

      <CtaSection
        title="Measurement designed to withstand independent scrutiny."
        body="If you need impact assessment for your own reporting, our baselines and data trails are built to support it."
        secondaryHref="/partnerships"
        secondaryLabel="Corporate partnerships"
      />
    </>
  );
}
