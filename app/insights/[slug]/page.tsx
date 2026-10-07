import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { LeafMark } from "@/components/ui/Leaf";
import { INSIGHTS } from "@/data/programmes";
import { SITE } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INSIGHTS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = INSIGHTS.find((r) => r.slug === slug);
  if (!insight) return { title: "Not found" };
  return { title: insight.title, description: insight.excerpt };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = INSIGHTS.find((r) => r.slug === slug);
  if (!insight) notFound();

  const related = INSIGHTS.filter((r) => r.slug !== insight.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    author: { "@type": "NGO", name: SITE.name },
    publisher: { "@type": "NGO", name: SITE.name },
  };

  return (
    <>
      <PageHero
        variant="organic"
        number="—"
        label={`${insight.category} · ${insight.readingTime}`}
        title={insight.title}
        lede={insight.excerpt}
        imageNote={insight.imageNote}
        total="—"
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="flex max-w-[66ch] flex-col gap-6 lg:col-span-8">
            {insight.body.map((p, i) => (
              <p
                key={p.slice(0, 40)}
                className={`m-0 leading-[1.8] ${
                  i === 0 ? "font-display text-[20px] font-semibold leading-[1.6] text-ink-950 lg:text-[23px]" : "text-[17px] text-ink-600 lg:text-[19px]"
                }`}
              >
                {p}
              </p>
            ))}
          </article>
          <aside className="lg:col-span-4">
            <div className="relative flex flex-col gap-5 overflow-hidden rounded-(--radius-card) border border-green-600/20 bg-green-50 p-7 lg:sticky lg:top-28">
              <LeafMark className="pointer-events-none absolute -bottom-6 -right-6 size-32 text-green-600 opacity-[0.08]" strokeWidth={3} />
              <span className="w-fit rounded-(--radius-chip) bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-green-700">
                {insight.category}
              </span>
              <span className="text-[14px] text-ink-600">{insight.readingTime}</span>
              <div className="relative border-t border-green-600/20 pt-5">
                <TextLink href="/partnerships">How we work with corporate partners</TextLink>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading number="—" label="More reading" title="Related insights." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 80} className="card-lift relative flex flex-col gap-4 overflow-hidden rounded-(--radius-image) border border-line bg-surface p-7 shadow-rest lg:p-8">
              <span className="w-fit rounded-(--radius-chip) bg-green-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-green-700">
                {r.category}
              </span>
              <h3 className="m-0 font-display text-[20px] font-bold leading-[1.2] tracking-[-0.025em] text-ink-950">
                {r.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-ink-600">{r.excerpt}</p>
              <div className="mt-2">
                <TextLink href={`/insights/${r.slug}`}>Read</TextLink>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        number="—"
        title="Let's create meaningful impact together."
        body="If something here is relevant to a programme you are planning, we are glad to talk it through."
        secondaryHref="/insights"
        secondaryLabel="All insights"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
