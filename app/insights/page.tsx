import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Stagger } from "@/components/ui/Reveal";
import { LeafMark } from "@/components/ui/Leaf";
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
        variant="organic"
        number="—"
        label="Insights"
        title={
          <>
            What we have learned,{" "}
            <span className="bg-linear-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">written down.</span>
          </>
        }
        lede="Practical material on CSR practice, impact measurement and sustainability delivery. Most of it is useful whether or not you ever work with us."
        imageNote="Insights — programme review and analysis session"
        total="—"
        actions={<Button href="/contact" withArrow size="lg">Ask us something</Button>}
      />

      <Section tone="white">
        <SectionHeading
          number="01"
          label="Articles"
          title="Recent writing."
          lede="On baselines, employee volunteering and counting what survives after handover."
        />
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {INSIGHTS.map((r) => (
              <Link
                key={r.slug}
                href={`/insights/${r.slug}`}
                className="card-lift group flex h-full w-full flex-col rounded-(--radius-image) border border-line/80 bg-surface shadow-rest hover:border-green-600 focus-visible:border-green-600"
              >
                <div className="overflow-hidden rounded-t-[27px]">
                  <div className="card-zoom">
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
                  <span className="mt-auto flex items-center gap-2 pt-3 text-[14px] font-semibold text-ink-950">
                    <span className="link-grow">Read</span>
                    <ArrowUpRight size={15} strokeWidth={2.2} className="card-icon text-green-600" aria-hidden="true" />
                    <LeafMark className="card-leaf ml-auto size-5 text-green-600" />
                  </span>
                </div>
              </Link>
          ))}
        </Stagger>
      </Section>

      <CtaSection
        number="02"
        title="Questions about your own CSR position?"
        body="We are happy to talk through programme design or measurement even where there is no engagement in it for us."
        secondaryHref="/insights"
        secondaryLabel="All insights"
      />
    </>
  );
}
