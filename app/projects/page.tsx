import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES, CASE_STUDY_SECTIONS } from "@/data/programmes";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Real projects. Real communities. Real impact. The Eco Green case study framework — challenge, approach, activities, beneficiaries, results, impact and community story.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        number="08"
        label="Projects & case studies"
        title={<>Real projects.<br />Real communities.</>}
        lede="Our case study framework is built and ready. Project details, photography and measured results are published as programmes complete — we do not publish a case study before the work exists."
        imageNote="Projects — completed community programme site"
        actions={
          <>
            <Button href="/partnerships" withArrow>Discuss a project</Button>
            <Button href="/programmes" variant="outline">Our programmes</Button>
          </>
        }
      />

      <Section tone="paper">
        <SectionHeading
          number="01"
          label="Case study library"
          title="Templates ready for real project data."
          lede="Each entry below shows the structure a completed project will use. Location, duration, partner and results are marked as placeholders until supplied."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>
      </Section>

      <Section tone="paper2">
        <SectionHeading
          number="02"
          label="The framework"
          title="Nine sections every case study follows."
          lede="A consistent structure means a corporate partner can compare two projects without re-learning the format each time."
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-(--radius-image) border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDY_SECTIONS.map((s, i) => (
            <Reveal key={s.number} delay={i * 40} className="flex flex-col gap-3 bg-surface p-7 lg:p-8">
              <span className="tnum font-display text-[13px] font-bold text-green-600">{s.number}</span>
              <h3 className="m-0 font-display text-[18px] font-bold leading-[1.25] tracking-[-0.02em] text-ink-950 lg:text-[19px]">
                {s.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-ink-600">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Your programme could be the first case study here."
        body="Every project we deliver is documented to this standard, including the parts that underperformed."
        secondaryHref="/impact"
        secondaryLabel="How we measure"
      />
    </>
  );
}
