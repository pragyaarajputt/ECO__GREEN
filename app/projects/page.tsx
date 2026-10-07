import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { BrandBand } from "@/components/sections/BrandBand";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Stagger } from "@/components/ui/Reveal";
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
        variant="organic"
        number="08"
        label="Projects & case studies"
        title={
          <>
            Real projects.
            <br />
            <span className="bg-linear-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Real communities.</span>
          </>
        }
        lede="Our case study framework is built and ready. Project details, photography and measured results are published as programmes complete — we do not publish a case study before the work exists."
        imageNote="Projects — completed community programme site"
        actions={
          <>
            <Button href="/partnerships" withArrow size="lg">Discuss a project</Button>
            <Button href="/programmes" variant="outline">Our programmes</Button>
          </>
        }
      />

      {/* 01 — LIBRARY */}
      <Section tone="white">
        <SectionHeading
          number="01"
          label="Case study library"
          title="Templates ready for real project data."
          lede="Each entry below shows the structure a completed project will use. Location, duration, partner and results are marked as placeholders until supplied."
        />
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </Stagger>
      </Section>

      {/* 02 — FRAMEWORK: navy band */}
      <BrandBand>
        <SectionHeading
          number="02"
          label="The framework"
          tone="dark"
          title="Nine sections every case study follows."
          lede="A consistent structure means a corporate partner can compare two projects without re-learning the format each time."
        />
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDY_SECTIONS.map((s) => (
            <FeatureCard key={s.number} number={s.number} outlineNumber title={s.title} body={s.body} tone="dark" />
          ))}
        </Stagger>
      </BrandBand>

      <CtaSection
        number="03"
        title="Your programme could be the first case study here."
        body="Every project we deliver is documented to this standard, including the parts that underperformed."
        secondaryHref="/impact"
        secondaryLabel="How we measure"
      />
    </>
  );
}
