import type { Metadata } from "next";
import { Check, Sprout, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ImpactDashboard } from "@/components/sections/ImpactDashboard";
import { ImpactStoryCard } from "@/components/sections/ImpactStoryCard";
import { SdgGrid } from "@/components/sections/SdgGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal, STAGGER_MS } from "@/components/ui/Reveal";
import { CrescentArc } from "@/components/ui/Crescent";
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

// How a figure reaches the dashboard, restating the hero lede. Only the first stage is complete today.
const PUBLISH_PATH = [
  { title: "Framework built and in use", detail: "Indicators defined for every programme", done: true },
  { title: "Programme completes measurement", detail: "Against the baseline set at design stage", done: false },
  { title: "Figure verified", detail: "Able to withstand independent assessment", done: false },
  { title: "Published with its basis", detail: "Definition and calculation shown alongside", done: false },
];

const AREAS = [
  { key: "social", eyebrow: "Social impact", title: "People, opportunity and inclusion", chips: SOCIAL, icon: Users, accent: "green" },
  { key: "environmental", eyebrow: "Environmental impact", title: "Resources, ecosystems and resilience", chips: ENVIRONMENTAL, icon: Sprout, accent: "teal" },
] as const;

export default function ImpactPage() {
  return (
    <>
      <PageHero
        variant="organic"
        number="06"
        label="Our impact"
        title={
          <>
            Impact that can be seen.
            <br />
            <span className="bg-linear-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Measured. Sustained.</span>
          </>
        }
        lede="Our impact framework is built and in use. Verified figures are published as programmes complete measurement, each with the definition and basis of calculation behind it."
        imageNote="Impact — measurement and community feedback session"
        actions={
          <>
            <Button href="/projects" withArrow size="lg">Case study framework</Button>
            <Button href="/reports" variant="outline">Reports &amp; governance</Button>
          </>
        }
      >
        {/* How a figure gets published — honest about which stage is complete */}
        <ol className="m-0 mt-14 grid list-none grid-cols-1 overflow-hidden rounded-(--radius-image) border border-line/80 bg-surface p-0 shadow-rest sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {PUBLISH_PATH.map((step, i) => (
            <li
              key={step.title}
              className={`flex gap-4 p-5 sm:p-6 lg:p-7 ${i > 0 ? "border-t border-line sm:border-t-0" : ""} ${
                i % 2 === 1 ? "sm:border-l" : ""
              } ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <span
                className={`flex size-9 flex-none items-center justify-center rounded-full font-display text-[13px] font-bold ${
                  step.done ? "bg-green-600 text-white" : "border-2 border-dashed border-line-strong text-ink-600"
                }`}
              >
                {step.done ? <Check size={17} strokeWidth={2.6} aria-hidden="true" /> : i + 1}
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-display text-[15px] font-bold leading-[1.3] text-ink-950">{step.title}</span>
                <span className="text-[13px] leading-[1.5] text-ink-600">{step.detail}</span>
                <span className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${step.done ? "text-green-700" : "text-ink-400"}`}>
                  {step.done ? "Complete" : "As programmes complete"}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </PageHero>

      {/* 01 — DASHBOARD */}
      <section className="on-dark relative overflow-hidden bg-ink-950 py-section-lg text-on-dark">
        <CrescentArc
          className="pointer-events-none absolute -right-40 -top-24 w-[600px] opacity-[0.10] max-md:hidden"
          strokeWidth={20}
          from="var(--color-green-500)"
          to="var(--color-teal-500)"
        />
        <Container className="relative">
          <SectionHeading
            number="01"
            label="Impact dashboard"
            tone="dark"
            title="Nine measures, published once verified."
            lede="Placeholders stand where figures will go. We would rather show XX+ than publish a number that cannot be substantiated when a partner's independent assessor asks."
          />
          <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[13px] text-on-dark-muted lg:mb-14">
            <span aria-hidden="true" className="size-2 rounded-full bg-green-500" />
            <span>
              <strong className="font-semibold text-on-dark">XX+</strong> marks a figure awaiting verified data
            </span>
          </div>
          <ImpactDashboard tone="dark" columns={3} size="lg" />
        </Container>
      </section>

      {/* 02 — IMPACT BY AREA */}
      <Section tone="white">
        <SectionHeading
          number="02"
          label="Impact by area"
          title="Social and environmental, reported separately and together."
          lede="Each area carries its own indicators. Where a programme contributes across both, the contribution is reported in each without double-counting the beneficiary."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {AREAS.map(({ key, eyebrow, title, chips, icon: Icon, accent }, i) => {
            const teal = accent === "teal";
            return (
              <Reveal
                key={key}
                delay={i * STAGGER_MS}
                className={`relative flex flex-col gap-7 overflow-hidden rounded-(--radius-image) border border-line bg-linear-to-b to-surface to-40% p-7 shadow-rest sm:p-8 lg:p-12 ${
                  teal ? "from-teal-600/[0.07]" : "from-green-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex size-12 flex-none items-center justify-center rounded-2xl text-white ${teal ? "bg-teal-600" : "bg-green-600"}`}
                  >
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className={`text-eyebrow font-semibold uppercase ${teal ? "text-[#01656E]" : "text-green-700"}`}>{eyebrow}</span>
                </div>
                <h3 className="m-0 font-display text-h3 font-bold text-ink-950">{title}</h3>
                <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
                  {chips.map((s) => (
                    <li key={s} className="rounded-(--radius-chip) border border-line bg-surface px-4 py-2 text-[14px] font-medium text-ink-800">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 border-t border-line pt-6">
                  <ImpactDashboard metrics={IMPACT_METRICS.filter((m) => m.group === key)} columns={2} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 03 — SDG ALIGNMENT */}
      <section className="bg-green-50 py-section">
        <Container>
          <SectionHeading
            number="03"
            label="SDG alignment"
            title="Ten goals genuinely connected to our work."
            lede="Only the goals our stated thematic areas actually contribute to. Each states the connection, rather than presenting a wall of logos."
          />
          <SdgGrid />
        </Container>
      </section>

      {/* 04 — STORIES */}
      <Section tone="paper">
        <SectionHeading
          number="04"
          label="Impact stories"
          title="Problem, intervention, community, outcome, impact."
          lede="The five-stage structure every Eco Green story follows. Stories, photography and video are published as programmes complete."
        />
        {/* Story cards run their own reveal, so they take a delay rather than a Stagger wrapper */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STORY_SLOTS.map((s, i) => (
            <ImpactStoryCard key={s.number} {...s} delay={i * STAGGER_MS} />
          ))}
        </div>
      </Section>

      <CtaSection
        number="05"
        title="Measurement designed to withstand independent scrutiny."
        body="If you need impact assessment for your own reporting, our baselines and data trails are built to support it."
        secondaryHref="/partnerships"
        secondaryLabel="Corporate partnerships"
      />
    </>
  );
}
