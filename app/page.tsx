import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageNumber } from "@/components/ui/PageNumber";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { ImpactDashboard } from "@/components/sections/ImpactDashboard";
import { ProgrammeCard } from "@/components/sections/ProgrammeCard";
import { ImpactStoryCard } from "@/components/sections/ImpactStoryCard";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { PROGRAMMES, CASE_STUDIES } from "@/data/programmes";
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
  { t: "Governance", d: "Board, advisory and leadership structure" },
  { t: "Legal & registration", d: "Statutory registrations and certificates" },
  { t: "Financial transparency", d: "Audited statements and utilisation reports" },
  { t: "Policies", d: "Safeguarding, conduct and accountability" },
];

export default function HomePage() {
  const featured = PROGRAMMES.filter((p) => ["01", "03", "08", "09"].includes(p.number));

  return (
    <>
      {/* 01 — HERO */}
      <section className="border-b border-line bg-paper pb-14 pt-8 lg:pb-20 lg:pt-14">
        <Container>
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <div className="flex flex-col gap-7">
                <PageNumber number="01" label="People · Planet · Impact" total="11" />
                <h1 className="m-0 font-display text-[40px] font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-[58px] lg:text-[80px]">
                  People.
                  <br />
                  Planet.
                  <br />
                  <span className="text-green-600">Impact.</span>
                </h1>
                <p className="m-0 max-w-[46ch] text-[17px] leading-[1.65] text-ink-600 sm:text-[18px] lg:text-[20px]">
                  {SITE.positioning}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button href="/partnerships" withArrow>
                    Partner With Us
                  </Button>
                  <Button href="/programmes" variant="outline">
                    Explore our programmes
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-5">
              <div className="flex gap-3 sm:gap-4">
                <ImagePlaceholder note="Hero — community programme in the field" ratio="portrait" className="flex-1" />
                <div className="flex w-[38%] flex-col gap-3 sm:gap-4">
                  <ImagePlaceholder note="Environmental restoration" ratio="square" />
                  <ImagePlaceholder note="Education programme" ratio="square" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 02 — WHO WE ARE */}
      <Section tone="paper">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ImagePlaceholder note="Who we are — programme team with community members" ratio="portrait" />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            <div className="flex flex-col gap-7">
              <PageNumber number="02" label="Who we are" total="11" />
              <h2 className="m-0 max-w-[20ch] font-display text-[28px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[36px] lg:text-[48px]">
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

      {/* 03 — OUR APPROACH */}
      <Section tone="paper2">
        <SectionHeading
          number="03"
          label="Our approach"
          title="Four principles that shape every programme."
          lede="Not values on a wall. Each one changes how a programme is designed, who decides what it does, and what happens after we leave."
        />
        <PillarGrid />
      </Section>

      {/* 04 — CSR + SUSTAINABILITY */}
      <section className="on-dark bg-ink-950 py-20 text-on-dark lg:py-32">
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
                className="group flex h-full flex-col gap-6 rounded-(--radius-image) border border-line-dark p-8 transition-colors duration-300 hover:border-green-600 lg:p-10"
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
                  <span className="border-b-2 border-green-600 pb-0.5">Our CSR focus</span>
                  <ArrowUpRight size={16} strokeWidth={2.2} className="text-green-500" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>

            <Reveal delay={80} className="flex items-center justify-center lg:col-span-2">
              <div className="flex flex-row items-center gap-4 py-2 text-center lg:flex-col lg:gap-3 lg:py-6">
                <span className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-green-500">People</span>
                <span aria-hidden="true" className="h-px w-8 bg-line-dark lg:h-10 lg:w-px" />
                <span className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-green-500">Planet</span>
                <span aria-hidden="true" className="h-px w-8 bg-line-dark lg:h-10 lg:w-px" />
                <span className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-green-500">Impact</span>
              </div>
            </Reveal>

            <Reveal delay={160} className="lg:col-span-5">
              <Link
                href="/sustainability"
                className="group flex h-full flex-col gap-6 rounded-(--radius-image) border border-line-dark p-8 transition-colors duration-300 hover:border-green-600 lg:p-10"
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
                  <span className="border-b-2 border-green-600 pb-0.5">Our sustainability focus</span>
                  <ArrowUpRight size={16} strokeWidth={2.2} className="text-green-500" aria-hidden="true" />
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProgrammeCard key={p.slug} programme={p} />
          ))}
        </div>
      </Section>

      {/* 06 — IMPACT */}
      <Section tone="paper2">
        <SectionHeading
          number="06"
          label="Our impact"
          title="Impact that can be seen, measured and sustained."
          lede="Figures are published once verified, each with a definition and basis of calculation. We would rather show a placeholder than a number nobody can substantiate."
          aside={<div className="mt-6"><TextLink href="/impact">See our impact framework</TextLink></div>}
        />
        <ImpactDashboard columns={3} />
      </Section>

      {/* 07 — IMPACT STORIES */}
      <Section tone="paper">
        <SectionHeading
          number="07"
          label="Impact stories"
          title="Every number begins as someone's changed circumstance."
          lede="Our stories follow one structure: the problem, the intervention, the community, the outcome, and the impact that remained."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STORY_SLOTS.map((s, i) => (
            <ImpactStoryCard key={s.number} {...s} delay={i * 90} />
          ))}
        </div>
      </Section>

      {/* 08 — CORPORATE PARTNERSHIPS */}
      <Section tone="paper2">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="flex flex-col gap-7">
              <PageNumber number="08" label="Corporate partnerships" total="11" />
              <h2 className="m-0 max-w-[18ch] font-display text-[28px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[36px] lg:text-[48px]">
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
            <ImagePlaceholder note="Corporate partnership — programme review with partner team" ratio="landscape" />
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>
      </Section>

      {/* 10 — TRANSPARENCY */}
      <Section tone="paper2">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-7">
              <PageNumber number="10" label="Transparency" total="11" />
              <h2 className="m-0 font-display text-[28px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[36px] lg:text-[44px]">
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
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-(--radius-image) border border-line bg-line sm:grid-cols-2">
              {TRANSPARENCY_TILES.map((x) => (
                <div key={x.t} className="flex flex-col gap-2 bg-surface p-7">
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
