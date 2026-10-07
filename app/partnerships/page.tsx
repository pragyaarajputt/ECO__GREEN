import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { BrandBand } from "@/components/sections/BrandBand";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal, Stagger, STAGGER_MS } from "@/components/ui/Reveal";
import { PageNumber } from "@/components/ui/PageNumber";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CORPORATE_PROCESS, PARTNERSHIP_MODELS, WHY_PARTNER } from "@/data/content";

export const metadata: Metadata = {
  title: "Corporate CSR Partnerships",
  description:
    "Your CSR commitment, our implementation expertise, shared impact. Partnership models, implementation approach, monitoring, impact measurement and reporting.",
};

const AUDIENCES = ["CSR Heads", "ESG Heads", "Corporate Affairs", "HR", "Sustainability Teams", "Corporate Foundations"];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        variant="organic"
        number="07"
        label="Corporate CSR partnerships"
        title={
          <>
            Your CSR commitment.
            <br />
            <span className="bg-linear-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              Our implementation expertise.
            </span>
          </>
        }
        lede="We work with corporate teams from understanding CSR priorities through to programme design, implementation, monitoring, impact measurement and transparent reporting."
        imageNote="Partnership — corporate and foundation teams reviewing a programme"
        actions={
          <>
            <Button href="/contact" withArrow size="lg">Discuss your CSR requirement</Button>
            <Button href="/reports" variant="outline">Transparency &amp; reports</Button>
          </>
        }
      >
        {/* Who we work with — moved into the hero so it reads as the audience, not a stray band */}
        <Reveal className="mt-14 flex flex-col gap-5 rounded-(--radius-image) border border-line/80 bg-surface p-6 shadow-rest sm:p-8 lg:mt-20 lg:flex-row lg:items-center lg:gap-8">
          <span className="flex-none text-eyebrow font-semibold uppercase text-ink-400">Who we work with</span>
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {AUDIENCES.map((a) => (
              <li key={a} className="rounded-(--radius-chip) border border-line bg-paper px-4 py-2 text-[14px] font-medium text-ink-800">
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </PageHero>

      {/* 01 — PROCESS */}
      <BrandBand>
        <SectionHeading
          number="01"
          label="How we work with corporates"
          tone="dark"
          title="Seven stages from priority to reporting."
          lede="The sequence is deliberate. Need assessment precedes programme design, and impact measurement precedes reporting rather than being assembled to fill it."
        />
        <ProcessTimeline steps={CORPORATE_PROCESS.slice(0, 4)} tone="dark" />
        <div className="mt-12 lg:mt-20">
          <ProcessTimeline steps={CORPORATE_PROCESS.slice(4)} tone="dark" />
        </div>
      </BrandBand>

      {/* 02 — MODELS */}
      <Section tone="white">
        <SectionHeading
          number="02"
          label="Partnership models"
          title="Eight ways to work together."
          lede="Most partnerships begin with a single defined programme and extend once the working relationship and the data model are established."
        />
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERSHIP_MODELS.map((m) => (
            <FeatureCard key={m.number} number={m.number} outlineNumber title={m.title} body={m.body} />
          ))}
        </Stagger>
      </Section>

      {/* 03 — WHY PARTNER: soft green */}
      <section className="bg-green-50 py-section">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              {/* Stacked heading: the shared SectionHeading splits into columns, too tight at 5/12 */}
              <Reveal className="mb-10 flex flex-col gap-7">
                <PageNumber number="03" label="Why partner with us" />
                <h2 className="m-0 max-w-[16ch] font-display text-h2 font-bold text-ink-950">What you get beyond delivery.</h2>
                <p className="m-0 max-w-[44ch] text-[16px] leading-[1.7] text-ink-600 lg:text-[17px]">
                  These are the things a CSR committee and a statutory auditor actually ask about.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <ImagePlaceholder note="Partnership — field visit with corporate partner team" ratio="landscape" rounded="leaf" />
              </Reveal>
            </div>
            <ul className="m-0 flex list-none flex-col gap-4 p-0 lg:col-span-7">
              {WHY_PARTNER.map((w, i) => (
                <Reveal
                  as="li"
                  key={w.title}
                  delay={Math.min(i, 6) * STAGGER_MS}
                  className="flex gap-5 rounded-(--radius-card) border border-line bg-surface p-6 shadow-rest lg:p-7"
                >
                  <span className="flex size-9 flex-none items-center justify-center rounded-full bg-green-600 text-white">
                    <Check size={18} strokeWidth={2.6} aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="m-0 font-display text-[19px] font-bold leading-[1.25] tracking-[-0.025em] text-ink-950 lg:text-[20px]">
                      {w.title}
                    </h3>
                    <p className="m-0 max-w-[58ch] text-[16px] leading-[1.7] text-ink-600">{w.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaSection
        number="04"
        title="Let's turn CSR investment into lasting impact."
        body="Tell us your obligation, your thematic priority and your geography. We will be straightforward about what is deliverable."
        primaryLabel="Discuss Your CSR Requirement"
        secondaryHref="/programmes"
        secondaryLabel="Explore programmes"
      />
    </>
  );
}
