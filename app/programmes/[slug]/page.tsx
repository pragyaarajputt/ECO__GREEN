import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BarChart3, Check, Gauge, ListChecks, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ProgrammeCard } from "@/components/sections/ProgrammeCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, STAGGER_MS } from "@/components/ui/Reveal";
import { CrescentArc } from "@/components/ui/Crescent";
import { LeafMark } from "@/components/ui/Leaf";
import { PROGRAMMES } from "@/data/programmes";
import { SITE } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROGRAMMES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const programme = PROGRAMMES.find((p) => p.slug === slug);
  if (!programme) return { title: "Programme not found" };
  return { title: programme.title, description: programme.summary };
}

export default async function ProgrammePage({ params }: Props) {
  const { slug } = await params;
  const programme = PROGRAMMES.find((p) => p.slug === slug);
  if (!programme) notFound();

  const related = PROGRAMMES.filter((p) => p.category === programme.category && p.slug !== programme.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: programme.title,
    description: programme.summary,
    parentOrganization: { "@type": "NGO", name: SITE.name },
  };

  const BLOCKS: { number: string; title: string; body: string | null; list: string[] | null }[] = [
    { number: "01", title: "The challenge", body: programme.challenge, list: null },
    { number: "02", title: "Our approach", body: programme.approach, list: null },
    { number: "03", title: "Our intervention", body: null, list: programme.interventions },
    { number: "04", title: "Our beneficiaries", body: null, list: programme.beneficiaries },
    { number: "05", title: "Expected outcomes", body: null, list: programme.outcomes },
    { number: "06", title: "Impact indicators", body: null, list: programme.indicators },
  ];

  const [challenge, approach, ...lists] = BLOCKS;
  const LIST_ICONS = [ListChecks, Users, BarChart3, Gauge];

  return (
    <>
      <PageHero
        variant="organic"
        number={programme.number}
        label={`${programme.category} programme`}
        title={programme.title}
        lede={programme.summary}
        imageNote={programme.imageNote}
        total="11"
        actions={
          <>
            <Button href="/partnerships" withArrow size="lg">Fund this programme</Button>
            <Button href="/programmes" variant="outline">All programmes</Button>
          </>
        }
      >
        {/* Jump links to the six parts of the programme */}
        <nav aria-label="On this page" className="mt-12 lg:mt-16">
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {BLOCKS.map((b) => (
              <li key={b.number}>
                <a
                  href={`#part-${b.number}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-[14px] font-medium text-ink-800 transition-[background-color,border-color,color,translate] duration-(--motion-fast) ease-organic hover:-translate-y-0.5 hover:border-green-600 hover:bg-green-50 hover:text-green-700"
                >
                  <span className="tnum font-display text-[12px] font-bold text-green-600">{b.number}</span>
                  {b.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {/* 01–02 — CHALLENGE AND APPROACH: problem on navy, response on green */}
      <Section tone="white">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal
            id={`part-${challenge.number}`}
            className="on-dark relative flex scroll-mt-28 flex-col gap-6 overflow-hidden rounded-(--radius-image) bg-ink-950 p-7 text-on-dark sm:p-9 lg:p-12"
          >
            <CrescentArc
              className="pointer-events-none absolute -bottom-24 -right-20 w-[320px] opacity-[0.12]"
              strokeWidth={18}
              from="var(--color-green-500)"
              to="var(--color-teal-500)"
            />
            <span className="relative tnum font-display text-[44px] font-extrabold leading-none tracking-[-0.05em] text-transparent [-webkit-text-stroke:1.5px_var(--color-green-500)]">
              {challenge.number}
            </span>
            <h2 className="relative m-0 font-display text-h3 font-bold">{challenge.title}</h2>
            <p className="relative m-0 max-w-[60ch] text-[17px] leading-[1.75] text-on-dark-muted">{challenge.body}</p>
          </Reveal>
          <Reveal
            id={`part-${approach.number}`}
            delay={STAGGER_MS}
            className="relative flex scroll-mt-28 flex-col gap-6 overflow-hidden rounded-(--radius-image) border border-green-600/20 bg-green-50 p-7 sm:p-9 lg:p-12"
          >
            <LeafMark className="pointer-events-none absolute -bottom-8 -right-6 size-40 text-green-600 opacity-[0.08]" strokeWidth={3} />
            <span className="relative tnum font-display text-[44px] font-extrabold leading-none tracking-[-0.05em] text-transparent [-webkit-text-stroke:1.5px_var(--color-green-600)]">
              {approach.number}
            </span>
            <h2 className="relative m-0 font-display text-h3 font-bold text-ink-950">{approach.title}</h2>
            <p className="relative m-0 max-w-[60ch] text-[17px] leading-[1.75] text-ink-800">{approach.body}</p>
          </Reveal>
        </div>

        {/* 03–06 — LISTS */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {lists.map((b, i) => {
            const Icon = LIST_ICONS[i];
            return (
              <Reveal
                key={b.number}
                id={`part-${b.number}`}
                delay={(i % 2) * STAGGER_MS}
                className="flex scroll-mt-28 flex-col gap-6 rounded-(--radius-image) border border-line bg-surface p-7 shadow-rest sm:p-9"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-12 flex-none items-center justify-center rounded-2xl bg-green-50 text-green-700">
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="tnum font-display text-[12px] font-bold text-green-600">{b.number}</span>
                    <h2 className="m-0 font-display text-[22px] font-bold leading-[1.15] tracking-[-0.025em] text-ink-950 lg:text-[24px]">
                      {b.title}
                    </h2>
                  </span>
                </div>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {b.list?.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] leading-[1.6] text-ink-800">
                      <Check size={18} strokeWidth={2.4} className="mt-[3px] flex-none text-green-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {related.length > 0 && (
        <section className="bg-green-50 py-section">
          <Container>
            <SectionHeading
              number="07"
              label="Related programmes"
              title={`More ${programme.category === "CSR" ? "CSR" : "sustainability"} programmes.`}
            />
            <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProgrammeCard key={p.slug} programme={p} />
              ))}
            </Stagger>
          </Container>
        </section>
      )}

      <CtaSection
        number="08"
        title="Bring this programme to your community or your CSR portfolio."
        body="We will share the full programme note and discuss what delivery would look like in your geography."
        secondaryHref="/projects"
        secondaryLabel="Case study framework"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
