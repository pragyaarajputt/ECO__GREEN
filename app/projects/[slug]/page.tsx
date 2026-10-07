import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CASE_STUDIES, CASE_STUDY_SECTIONS } from "@/data/programmes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) return { title: "Case study not found" };
  return {
    title: study.title,
    description: `Case study framework — ${study.title}. Project details to be published.`,
    robots: { index: false, follow: true },
  };
}

const BENEFICIARY_FIELDS = ["Number of people", "Communities", "Women", "Children", "Youth", "Other groups"];

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) notFound();

  const others = CASE_STUDIES.filter((s) => s.slug !== study.slug);
  const facts = [
    { label: "Location", value: study.location },
    { label: "Duration", value: study.duration },
    { label: "Partner", value: study.partner },
    { label: "Sector", value: study.sector },
  ];

  return (
    <>
      <PageHero
        variant="organic"
        number={study.number}
        label="Case study"
        title={study.title}
        lede="This page shows the case study structure. Project details, results and photography are published once the programme is delivered and measured."
        imageNote={study.imageNote}
        total="08"
        actions={
          <>
            <Button href="/partnerships" withArrow size="lg">Discuss a similar project</Button>
            <Button href="/projects" variant="outline">All case studies</Button>
          </>
        }
      >
        {/* Project facts — placeholders until the project is delivered */}
        <dl className="m-0 mt-14 grid grid-cols-2 overflow-hidden rounded-(--radius-image) border border-line/80 bg-surface shadow-rest lg:mt-20 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col gap-2 p-5 sm:p-6 lg:p-7 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i >= 2 ? "border-t border-line lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">{f.label}</dt>
              <dd className="m-0 font-display text-[18px] font-bold tracking-[-0.02em] text-ink-950 lg:text-[20px]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section tone="white">
        <div className="flex flex-col">
          {CASE_STUDY_SECTIONS.map((s, i) => (
            <Reveal
              key={s.number}
              delay={i * 40}
              className="grid grid-cols-1 gap-5 border-t border-line py-9 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-12 lg:py-12"
            >
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4 sm:gap-5">
                  <span className="tnum font-display text-[36px] font-extrabold leading-none tracking-[-0.05em] text-transparent [-webkit-text-stroke:1.5px_var(--color-green-600)] lg:text-[44px]">
                    {s.number}
                  </span>
                  <h2 className="m-0 font-display text-[21px] font-bold leading-[1.15] tracking-[-0.025em] text-ink-950 lg:text-[28px]">
                    {s.title}
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-5 lg:col-span-8">
                <p className="m-0 max-w-[64ch] text-[17px] leading-[1.75] text-ink-600">{s.body}</p>

                {s.title === "Beneficiaries" && (
                  <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3">
                    {BENEFICIARY_FIELDS.map((f) => (
                      <li key={f} className="flex flex-col gap-2 rounded-(--radius-card) border border-line bg-paper p-5">
                        <span className="tnum font-display text-[22px] font-bold text-ink-400/60">XX+</span>
                        <span className="text-[13px] leading-[1.4] text-ink-400">{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.title === "Photographs" && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {["Before", "During", "After"].map((stage) => (
                      <div key={stage} className="flex flex-col gap-2">
                        <ImagePlaceholder note={`${stage} — photography to be supplied`} ratio="square" rounded={stage === "During" ? "leaf-alt" : stage === "After" ? "leaf" : "card"} />
                        <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-400">{stage}</span>
                      </div>
                    ))}
                  </div>
                )}

                {s.title === "Impact Numbers" && (
                  <p className="m-0 rounded-(--radius-card) border border-green-600/20 bg-green-50 p-5 text-[15px] leading-[1.6] text-ink-600">
                    Figures are published with the definition and measurement method behind each, once the endline
                    assessment is complete.
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-green-50 py-section">
        <Container>
          <SectionHeading number="—" label="More case studies" title="Other project templates." />
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {others.map((s) => (
              <CaseStudyCard key={s.slug} study={s} />
            ))}
          </Stagger>
        </Container>
      </section>

      <CtaSection
        number="10"
        title="Let's create meaningful impact together."
        body="Tell us what you want to achieve and where, and we will show you what a programme would look like."
        secondaryHref="/projects"
        secondaryLabel="All case studies"
      />
    </>
  );
}
