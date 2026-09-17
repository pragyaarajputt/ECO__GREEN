import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { INSIGHTS } from "@/data/programmes";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical writing on CSR practice, impact measurement and community sustainability — published for the sector rather than as marketing.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        number="—"
        label="Insights"
        title="What we have learned, written down."
        lede="Practical material on CSR practice, impact measurement and sustainability delivery. Most of it is useful whether or not you ever work with us."
        imageNote="Insights — programme review and analysis session"
        total="—"
        actions={<Button href="/contact" withArrow>Ask us something</Button>}
      />

      <Section tone="paper">
        <SectionHeading number="01" label="Articles" title="Recent writing." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {INSIGHTS.map((r, i) => (
            <Reveal key={r.slug} delay={i * 80} className="flex">
              <Link
                href={`/insights/${r.slug}`}
                className="group flex h-full w-full flex-col overflow-hidden rounded-(--radius-image) border border-line bg-surface transition-colors duration-300 hover:border-green-600"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                    <ImagePlaceholder note={r.imageNote} ratio="wide" rounded="none" className="border-0" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6 lg:p-7">
                  <div className="flex items-center gap-3">
                    <span className="rounded-(--radius-chip) bg-green-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-green-700">
                      {r.category}
                    </span>
                    <span className="text-[13px] text-ink-400">{r.readingTime}</span>
                  </div>
                  <h2 className="m-0 font-display text-[20px] font-bold leading-[1.2] tracking-[-0.025em] text-ink-950">
                    {r.title}
                  </h2>
                  <p className="m-0 text-[15px] leading-[1.6] text-ink-600">{r.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-3 text-[14px] font-semibold text-ink-950">
                    <span className="border-b-2 border-green-600 pb-0.5">Read</span>
                    <ArrowUpRight size={15} strokeWidth={2.2} className="text-green-600" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Questions about your own CSR position?"
        body="We are happy to talk through programme design or measurement even where there is no engagement in it for us."
        secondaryHref="/insights"
        secondaryLabel="All insights"
      />
    </>
  );
}
