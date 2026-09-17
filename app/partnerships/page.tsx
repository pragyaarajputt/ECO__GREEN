import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
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
        number="07"
        label="Corporate CSR partnerships"
        title={<>Your CSR commitment.<br />Our implementation expertise.</>}
        lede="We work with corporate teams from understanding CSR priorities through to programme design, implementation, monitoring, impact measurement and transparent reporting."
        imageNote="Partnership — corporate and foundation teams reviewing a programme"
        actions={
          <>
            <Button href="/contact" withArrow>Discuss your CSR requirement</Button>
            <Button href="/reports" variant="outline">Transparency &amp; reports</Button>
          </>
        }
      />

      <Section tone="paper2" size="sm">
        <Reveal>
          <div className="flex flex-col gap-6">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-400">Who we work with</span>
            <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
              {AUDIENCES.map((a) => (
                <li key={a} className="rounded-(--radius-chip) border border-line bg-surface px-5 py-2.5 text-[15px] font-medium text-ink-800">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <Section tone="paper">
        <SectionHeading
          number="01"
          label="How we work with corporates"
          title="Seven stages from priority to reporting."
          lede="The sequence is deliberate. Need assessment precedes programme design, and impact measurement precedes reporting rather than being assembled to fill it."
        />
        <ProcessTimeline steps={CORPORATE_PROCESS.slice(0, 4)} />
        <div className="mt-12 lg:mt-20">
          <ProcessTimeline steps={CORPORATE_PROCESS.slice(4)} />
        </div>
      </Section>

      <Section tone="paper2">
        <SectionHeading
          number="02"
          label="Partnership models"
          title="Eight ways to work together."
          lede="Most partnerships begin with a single defined programme and extend once the working relationship and the data model are established."
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-(--radius-image) border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERSHIP_MODELS.map((m, i) => (
            <Reveal key={m.number} delay={i * 50} className="flex flex-col gap-4 bg-surface p-7 lg:p-8">
              <span className="tnum font-display text-[13px] font-bold text-green-600">{m.number}</span>
              <h3 className="m-0 font-display text-[18px] font-bold leading-[1.25] tracking-[-0.02em] text-ink-950">
                {m.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-ink-600">{m.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              number="03"
              label="Why partner with us"
              title="What you get beyond delivery."
              lede="These are the things a CSR committee and a statutory auditor actually ask about."
            />
            <Reveal delay={120}>
              <ImagePlaceholder note="Partnership — field visit with corporate partner team" ratio="landscape" />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {WHY_PARTNER.map((w, i) => (
                <Reveal key={w.title} delay={i * 60} className="flex flex-col gap-3 border-t border-line py-7 first:border-t-0 first:pt-0">
                  <h3 className="m-0 font-display text-[19px] font-bold leading-[1.25] tracking-[-0.025em] text-ink-950 lg:text-[20px]">
                    {w.title}
                  </h3>
                  <p className="m-0 max-w-[58ch] text-[16px] leading-[1.7] text-ink-600">{w.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Let's turn CSR investment into lasting impact."
        body="Tell us your obligation, your thematic priority and your geography. We will be straightforward about what is deliverable."
        primaryLabel="Discuss Your CSR Requirement"
        secondaryHref="/programmes"
        secondaryLabel="Explore programmes"
      />
    </>
  );
}
