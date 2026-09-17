import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FocusAreaList } from "@/components/sections/FocusAreaList";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CSR_PROCESS, CSR_FOCUS_AREAS } from "@/data/content";

export const metadata: Metadata = {
  title: "Our CSR Focus",
  description:
    "CSR — creating measurable social impact. Education, healthcare, livelihood, women's empowerment, youth development, rural development and social inclusion.",
};

export default function CsrPage() {
  return (
    <>
      <PageHero
        number="03"
        label="Our CSR focus"
        title={<>CSR — creating measurable social impact.</>}
        lede="We help organisations move from CSR commitments to well-designed programmes that deliver measurable social outcomes."
        imageNote="CSR — community programme delivery in progress"
        actions={
          <>
            <Button href="/partnerships" withArrow>Partner With Us</Button>
            <Button href="/sustainability" variant="outline">Our sustainability focus</Button>
          </>
        }
      />

      <Section tone="paper2">
        <SectionHeading
          number="01"
          label="How a programme takes shape"
          title="From commitment to continuous improvement."
          lede="Seven stages, in sequence. The order matters — need assessment precedes programme design, and measurement precedes reporting rather than being assembled for it."
        />
        <ProcessTimeline steps={CSR_PROCESS.slice(0, 4)} />
        <div className="mt-12 lg:mt-20">
          <ProcessTimeline steps={CSR_PROCESS.slice(4)} />
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading
          number="02"
          label="CSR focus areas"
          title="Seven areas where we design and deliver."
          lede="Each area covers a defined set of interventions. Where a corporate partner has a board-approved thematic priority, we map it to the relevant area at proposal stage."
        />
        <FocusAreaList areas={CSR_FOCUS_AREAS} />
      </Section>

      <Section tone="paper2" size="sm">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-8 rounded-(--radius-image) border border-line bg-surface p-8 lg:grid-cols-12 lg:p-12">
            <div className="lg:col-span-8">
              <h3 className="m-0 font-display text-[21px] font-bold leading-[1.25] tracking-[-0.025em] text-ink-950 lg:text-[26px]">
                Statutory registration and compliance
              </h3>
              <p className="m-0 mt-4 max-w-[62ch] text-[16px] leading-[1.7] text-ink-600">
                Corporate CSR funding in India is subject to statutory requirements for implementing agencies. Our
                registration details, certificates and governance documents are published in full on the transparency
                page as they are confirmed.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Button href="/reports" variant="outline">View transparency &amp; reports</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaSection
        title="Let's turn CSR investment into lasting impact."
        body="Tell us your thematic priority and geography, and we will come back with what is deliverable there."
        secondaryHref="/programmes"
        secondaryLabel="See our programmes"
      />
    </>
  );
}
