import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BarChart3, FileCheck2, Landmark, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageNumber } from "@/components/ui/PageNumber";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal, Stagger, STAGGER_MS } from "@/components/ui/Reveal";
import { LeafDrift } from "@/components/ui/Leaf";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { ImpactDashboard } from "@/components/sections/ImpactDashboard";
import { ProgrammeCard } from "@/components/sections/ProgrammeCard";
import { ImpactStoryCard } from "@/components/sections/ImpactStoryCard";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { StatementBand } from "@/components/sections/StatementBand";
import { CrescentArc } from "@/components/ui/Crescent";
import { PROGRAMMES, CASE_STUDIES } from "@/data/programmes";
import { CSR_FOCUS_AREAS, SUSTAINABILITY_FOCUS_AREAS, CSR_PROCESS, SDGS } from "@/data/content";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.positioning,
};

const STORY_SLOTS = [
  { number: "01", title: "Community story — to be supplied", imageNote: "Impact story photography — to be supplied by Eco Green" },
  { number: "02", title: "Community story — to be supplied", imageNote: "Impact story photography — to be supplied by Eco Green" },
  { number: "03", title: "Community story — to be supplied", imageNote: "Impact story photography — to be supplied by Eco Green" },
];

const TRANSPARENCY_TILES = [
  { t: "Governance", d: "Board, advisory and leadership structure", icon: Landmark },
  { t: "Legal & registration", d: "Statutory registrations and certificates", icon: FileCheck2 },
  { t: "Financial transparency", d: "Audited statements and utilisation reports", icon: BarChart3 },
  { t: "Policies", d: "Safeguarding, conduct and accountability", icon: ShieldCheck },
];

export default function HomePage() {
  const featured = PROGRAMMES.filter((p) => ["01", "03", "08", "09"].includes(p.number));
  const csrCount = PROGRAMMES.filter((p) => p.category === "CSR").length;
  // Proof strip: counts of content that exists on the site, not outcome claims.
  const proof = [
    { value: PROGRAMMES.length, label: "Programmes", detail: `${csrCount} CSR and ${PROGRAMMES.length - csrCount} sustainability` },
    {
      value: CSR_FOCUS_AREAS.length + SUSTAINABILITY_FOCUS_AREAS.length,
      label: "Focus areas",
      detail: `${CSR_FOCUS_AREAS.length} social, ${SUSTAINABILITY_FOCUS_AREAS.length} environmental`,
    },
    { value: CSR_PROCESS.length, label: "Delivery stages", detail: "From CSR commitment to reporting" },
    { value: SDGS.length, label: "SDGs aligned", detail: "Each connection stated, not just a logo" },
  ];

  return (
    <>
      {/* 01 — HERO */}
      <section className="relative overflow-hidden bg-paper pb-section-sm pt-hero-top">
        {/* Soft leaf-and-teal glow, echoing the logo behind the hero imagery */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 size-[640px] rounded-full bg-[radial-gradient(circle,rgb(146_198_12/0.18),rgb(1_129_141/0.08)_45%,transparent_70%)]"
        />
        <LeafDrift />
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <div className="hero-seq flex flex-col gap-7">
                <PageNumber number="01" label="People · Planet · Prosperity" total="11" />
                <h1 className="m-0 font-display text-display font-extrabold">
                  People.
                  <br />
                  Planet.
                  <br />
                  <span className="bg-linear-to-r from-teal-600 via-green-600 to-green-600 bg-clip-text text-transparent">Prosperity.</span>
                </h1>
                <p className="m-0 max-w-[44ch] text-lede text-ink-600">
                  {SITE.positioning}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button href="/partnerships" withArrow size="lg">
                    Partner With Us
                  </Button>
                  <Button href="/programmes" variant="outline">
                    Explore our programmes
                  </Button>
                </div>
              </div>
            </div>
            <Reveal delay={4 * STAGGER_MS} className="lg:col-span-6">
              <HeroVisual programmeCount={PROGRAMMES.length} />
            </Reveal>
          </div>
          <ProofStrip items={proof} className="mt-14 lg:mt-20" />
        </Container>
      </section>

      {/* 02 — WHO WE ARE */}
      <Section tone="white">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <ImagePlaceholder note="Who we are — programme team with community members" ratio="portrait" rounded="leaf" className="max-lg:aspect-[4/3]" />
          </Reveal>
          <Reveal delay={STAGGER_MS} className="order-1 lg:order-2 lg:col-span-7">
            <div className="flex flex-col gap-7">
              <PageNumber number="02" label="Who we are" total="11" />
              <h2 className="m-0 max-w-[20ch] font-display text-h2 font-bold">
                A foundation built around communities, evidence and long-term change.
              </h2>
              <p className="m-0 max-w-[58ch] text-[17px] leading-[1.75] text-ink-600 lg:text-[18px]">
                Eco Green Sustainability Foundation works with businesses, communities and institutions to design and
                implement CSR and sustainability programmes. We work through existing local institutions rather than
                around them, and we stay long enough to understand a community&apos;s situation before proposing
                anything.
              </p>
              <p className="m-0 max-w-[58ch] text-[17px] leading-[1.75] text-ink-600 lg:text-[18px]">
                Our work spans social development and environmental action — because in the communities we work with,
                the two are rarely separable.
              </p>
              <TextLink href="/about">More about Eco Green</TextLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Brand promise — the board line from the Human & Leaf logo concept */}
      <StatementBand eyebrow="What we stand for">
        Caring for people, <span className="text-green-700">nurturing the planet.</span>
      </StatementBand>

      {/* 03 — OUR APPROACH */}
      <Section tone="paper">
        <SectionHeading
          number="03"
          label="Our approach"
          title="Four principles that shape every programme."
          lede="Not values on a wall. Each one changes how a programme is designed, who decides what it does, and what happens after we leave."
        />
        <PillarGrid />
      </Section>

      {/* 04 — CSR + SUSTAINABILITY */}
      <section className="on-dark bg-ink-950 py-section-lg text-on-dark">
        <Container>
          <SectionHeading
            number="04"
            label="Two halves of one mandate"
            tone="dark"
            title="CSR and sustainability, working as one."
            lede="Social progress and environmental resilience are treated separately in most reporting. In a village facing water scarcity and lost livelihoods, they are the same problem."
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Link
                href="/csr"
                className="card-lift group flex h-full flex-col gap-6 rounded-(--radius-image) border border-white/10 bg-linear-to-br from-white/[0.07] to-transparent p-8 hover:border-green-500 focus-visible:border-green-500 lg:p-10"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-500">CSR</span>
                <h3 className="m-0 font-display text-[26px] font-bold leading-[1.15] tracking-[-0.03em] lg:text-[34px]">
                  Social Impact
                </h3>
                <p className="m-0 text-[16px] leading-[1.7] text-on-dark-muted">
                  Education, health, livelihoods, women&apos;s empowerment, youth development, rural development and
                  social inclusion — delivered as designed programmes with measurable outcomes.
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[15px] font-semibold">
                  <span className="link-grow">Our CSR focus</span>
                  <ArrowUpRight size={16} strokeWidth={2.2} className="card-icon text-green-500" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>

            <Reveal delay={80} className="flex items-center justify-center lg:col-span-2">
              <div className="flex flex-row items-center gap-4 py-2 text-center lg:flex-col lg:gap-3 lg:py-6">
                <span className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-green-500">People</span>
                <span aria-hidden="true" className="h-px w-8 bg-line-dark lg:h-10 lg:w-px" />
                <span className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-green-500">Planet</span>
                <span aria-hidden="true" className="h-px w-8 bg-line-dark lg:h-10 lg:w-px" />
                <span className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-green-500">Prosperity</span>
              </div>
            </Reveal>

            <Reveal delay={160} className="lg:col-span-5">
              <Link
                href="/sustainability"
                className="card-lift group flex h-full flex-col gap-6 rounded-(--radius-image) border border-white/10 bg-linear-to-br from-green-600/25 to-transparent p-8 hover:border-green-500 focus-visible:border-green-500 lg:p-10"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-500">Sustainability</span>
                <h3 className="m-0 font-display text-[26px] font-bold leading-[1.15] tracking-[-0.03em] lg:text-[34px]">
                  Environmental &amp; Resilient Development
                </h3>
                <p className="m-0 text-[16px] leading-[1.7] text-on-dark-muted">
                  Climate action, water conservation, waste and circularity, biodiversity restoration, and sustainable
                  communities and livelihoods.
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[15px] font-semibold">
                  <span className="link-grow">Our sustainability focus</span>
                  <ArrowUpRight size={16} strokeWidth={2.2} className="card-icon text-green-500" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 05 — PROGRAMMES */}
      <Section tone="paper">
        <SectionHeading
          number="05"
          label="Our programmes"
          title="From ideas to action. From action to impact."
          lede="Eleven programmes across CSR and sustainability, each with a defined challenge, approach, beneficiary group and set of impact indicators."
          aside={<div className="mt-6"><TextLink href="/programmes">View all programmes</TextLink></div>}
        />
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProgrammeCard key={p.slug} programme={p} />
          ))}
        </Stagger>
      </Section>

      {/* 06 — IMPACT: deep-green emphasis band */}
      <Section tone="green" className="relative overflow-hidden">
        <CrescentArc
          className="pointer-events-none absolute -bottom-40 -right-32 w-[560px] opacity-[0.16] max-md:hidden"
          strokeWidth={20}
          from="var(--color-green-500)"
          to="var(--color-teal-500)"
        />
        <div className="relative">
          <SectionHeading
            number="06"
            label="Our impact"
            tone="dark"
            title="Impact that can be seen, measured and sustained."
            lede="Figures are published once verified, each with a definition and basis of calculation. We would rather show a placeholder than a number nobody can substantiate."
            aside={<div className="mt-6"><TextLink href="/impact" tone="dark">See our impact framework</TextLink></div>}
          />
          <ImpactDashboard columns={3} tone="dark" />
        </div>
      </Section>

      {/* 07 — IMPACT STORIES */}
      <Section tone="white">
        <SectionHeading
          number="07"
          label="Impact stories"
          title="Every number begins as someone's changed circumstance."
          lede="Our stories follow one structure: the problem, the intervention, the community, the outcome, and the impact that remained."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STORY_SLOTS.map((s, i) => (
            <ImpactStoryCard key={s.number} {...s} delay={i * STAGGER_MS} />
          ))}
        </div>
      </Section>

      {/* 08 — CORPORATE PARTNERSHIPS */}
      <Section tone="paper2">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="flex flex-col gap-7">
              <PageNumber number="08" label="Corporate partnerships" total="11" />
              <h2 className="m-0 max-w-[18ch] font-display text-h2 font-bold">
                Your CSR commitment. Our implementation expertise.
              </h2>
              <p className="m-0 max-w-[56ch] text-[17px] leading-[1.75] text-ink-600 lg:text-[18px]">
                We work with CSR and ESG teams, corporate foundations, HR and corporate affairs functions — from
                understanding your CSR priorities through to programme design, implementation, monitoring, impact
                measurement and reporting.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button href="/partnerships" withArrow>Partner With Us</Button>
                <Button href="/reports" variant="outline">Transparency &amp; reports</Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <ImagePlaceholder note="Corporate partnership — programme review with partner team" ratio="landscape" rounded="leaf-alt" />
          </Reveal>
        </div>
      </Section>

      {/* 09 — PROJECTS */}
      <Section tone="paper">
        <SectionHeading
          number="09"
          label="Projects & case studies"
          title="Real projects. Real communities. Real impact."
          lede="Our case study framework is built and ready. Project details, photography and measured results are published as programmes complete."
          aside={<div className="mt-6"><TextLink href="/projects">View the case study framework</TextLink></div>}
        />
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </Stagger>
      </Section>

      {/* 10 — TRANSPARENCY */}
      <Section tone="white">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-7">
              <PageNumber number="10" label="Transparency" total="11" />
              <h2 className="m-0 font-display text-h2 font-bold">
                Trust through transparency.
              </h2>
              <p className="m-0 max-w-[48ch] text-[17px] leading-[1.75] text-ink-600">
                Every stakeholder has the right to understand how resources are used and what impact is being created.
                Governance, registrations, financial statements and policies are published in one place.
              </p>
              <TextLink href="/reports">Transparency &amp; reports</TextLink>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {TRANSPARENCY_TILES.map((x) => (
                <div key={x.t} className="flex flex-col gap-3 rounded-(--radius-card) border border-line/80 bg-paper p-6 lg:p-7">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-green-50 text-green-700">
                    <x.icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="m-0 font-display text-[18px] font-bold tracking-[-0.02em] text-ink-950">{x.t}</h3>
                  <p className="m-0 text-[15px] leading-[1.6] text-ink-600">{x.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 11 — FINAL CTA */}
      <CtaSection
        number="11"
        label="Get started"
        title="Let's create meaningful impact together."
        body="Whether you are developing a CSR programme, seeking a sustainability partner, or exploring community development — we welcome the conversation."
        secondaryHref="/programmes"
        secondaryLabel="Explore programmes"
      />
    </>
  );
}
