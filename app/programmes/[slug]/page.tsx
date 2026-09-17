import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ProgrammeCard } from "@/components/sections/ProgrammeCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
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

  return (
    <>
      <PageHero
        number={programme.number}
        label={`${programme.category} programme`}
        title={programme.title}
        lede={programme.summary}
        imageNote={programme.imageNote}
        total="11"
        actions={
          <>
            <Button href="/partnerships" withArrow>Fund this programme</Button>
            <Button href="/programmes" variant="outline">All programmes</Button>
          </>
        }
      />

      <Section tone="paper">
        <div className="flex flex-col">
          {BLOCKS.map((b, i) => (
            <Reveal
              key={b.number}
              delay={i * 50}
              className="grid grid-cols-1 gap-5 border-t border-line py-9 lg:grid-cols-12 lg:gap-12 lg:py-14"
            >
              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-4 sm:gap-5">
                  <span className="tnum font-display text-[13px] font-bold text-green-600">{b.number}</span>
                  <h2 className="m-0 font-display text-[22px] font-bold leading-[1.15] tracking-[-0.025em] text-ink-950 lg:text-[30px]">
                    {b.title}
                  </h2>
                </div>
              </div>
              <div className="lg:col-span-8">
                {b.body && (
                  <p className="m-0 max-w-[64ch] text-[17px] leading-[1.75] text-ink-600 lg:text-[18px]">{b.body}</p>
                )}
                {b.list && (
                  <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
                    {b.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[16px] leading-[1.6] text-ink-800">
                        <span aria-hidden="true" className="mt-[10px] size-1.5 flex-none rounded-full bg-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="paper2">
          <SectionHeading
            number="07"
            label="Related programmes"
            title={`More ${programme.category === "CSR" ? "CSR" : "sustainability"} programmes.`}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProgrammeCard key={p.slug} programme={p} />
            ))}
          </div>
        </Section>
      )}

      <CtaSection
        title="Bring this programme to your community or your CSR portfolio."
        body="We will share the full programme note and discuss what delivery would look like in your geography."
        secondaryHref="/projects"
        secondaryLabel="Case study framework"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
