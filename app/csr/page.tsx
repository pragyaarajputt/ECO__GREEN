import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FocusAreaList, FocusAreaNav } from "@/components/sections/FocusAreaList";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LeafMark } from "@/components/ui/Leaf";
import { CrescentArc } from "@/components/ui/Crescent";
import { CSR_PROCESS, CSR_FOCUS_AREAS } from "@/data/content";
import { PROGRAMMES } from "@/data/programmes";

export const metadata: Metadata = {
  title: "Our CSR Focus",
  description:
    "CSR — creating measurable social impact. Education, healthcare, livelihood, women's empowerment, youth development, rural development and social inclusion.",
};

export default function CsrPage() {
  // Proof strip: counts of content already on the site, not outcome claims.
  const interventions = CSR_FOCUS_AREAS.reduce((n, a) => n + a.items.length, 0);
  const proof = [
    { value: CSR_FOCUS_AREAS.length, label: "Focus areas", detail: "Education to social inclusion" },
    { value: interventions, label: "Intervention types", detail: "Listed across the focus areas" },
    { value: PROGRAMMES.filter((p) => p.category === "CSR").length, label: "CSR programmes", detail: "Ready to adapt to your priority" },
    { value: CSR_PROCESS.length, label: "Delivery stages", detail: "From commitment to reporting" },
  ];

  return (
    <>
      <PageHero
        variant="organic"
        number="03"
        label="Our CSR focus"
        title={
          <>
            CSR —{" "}
            <span className="bg-linear-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              creating measurable social impact.
            </span>
          </>
        }
        lede="We help organisations move from CSR commitments to well-designed programmes that deliver measurable social outcomes."
        imageNote="CSR — community programme delivery in progress"
        actions={
          <>
            <Button href="/partnerships" withArrow size="lg">Partner With Us</Button>
            <Button href="/sustainability" variant="outline">Our sustainability focus</Button>
          </>
        }
      >
        <ProofStrip items={proof} className="mt-14 lg:mt-20" />
      </PageHero>

      {/* 01 — PROCESS: navy band, the seven stages as one connected track */}
      <section className="on-dark relative overflow-hidden bg-ink-950 py-section-lg text-on-dark">
        <CrescentArc
          className="pointer-events-none absolute -right-40 -top-24 w-[560px] opacity-[0.10] max-md:hidden"
          strokeWidth={20}
          from="var(--color-green-500)"
          to="var(--color-teal-500)"
        />
        <Container className="relative">
          <SectionHeading
            number="01"
            label="How a programme takes shape"
            tone="dark"
            title="From commitment to continuous improvement."
            lede="Seven stages, in sequence. The order matters — need assessment precedes programme design, and measurement precedes reporting rather than being assembled for it."
          />
          <ProcessTimeline steps={CSR_PROCESS.slice(0, 4)} tone="dark" />
          <div className="mt-12 lg:mt-20">
            <ProcessTimeline steps={CSR_PROCESS.slice(4)} tone="dark" />
          </div>
        </Container>
      </section>

      {/* 02 — FOCUS AREAS */}
      <Section tone="white">
        <SectionHeading
          number="02"
          label="CSR focus areas"
          title="Seven areas where we design and deliver."
          lede="Each area covers a defined set of interventions. Where a corporate partner has a board-approved thematic priority, we map it to the relevant area at proposal stage."
        />
                <FocusAreaNav areas={CSR_FOCUS_AREAS} label="CSR focus areas" />
        <FocusAreaList areas={CSR_FOCUS_AREAS} shaped />
      </Section>

      {/* 03 — COMPLIANCE: soft green trust band */}
      <section className="relative overflow-hidden bg-green-50 py-section-sm">
        <Container>
          <Reveal>
            <div className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-(--radius-image) border border-green-600/20 bg-surface p-8 shadow-rest lg:grid-cols-12 lg:p-12">
              <LeafMark className="pointer-events-none absolute -bottom-10 -right-6 size-44 text-green-600 opacity-[0.07]" strokeWidth={3} />
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6 lg:col-span-8">
                <span className="flex size-14 flex-none items-center justify-center rounded-2xl bg-green-600 text-white shadow-cta">
                  <ShieldCheck size={26} strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="m-0 font-display text-h3 font-bold text-ink-950">
                    Statutory registration and compliance
                  </h3>
                  <p className="m-0 mt-4 max-w-[62ch] text-[16px] leading-[1.7] text-ink-600">
                    Corporate CSR funding in India is subject to statutory requirements for implementing agencies. Our
                    registration details, certificates and governance documents are published in full on the transparency
                    page as they are confirmed.
                  </p>
                </div>
              </div>
              <div className="relative lg:col-span-4 lg:justify-self-end">
                <Button href="/reports" variant="outline">View transparency &amp; reports</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        number="04"
        title="Let's turn CSR investment into lasting impact."
        body="Tell us your thematic priority and geography, and we will come back with what is deliverable there."
        secondaryHref="/programmes"
        secondaryLabel="See our programmes"
      />
    </>
  );
}
