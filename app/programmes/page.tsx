import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Compass, Gauge, ListChecks, Plus, Target, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ProgrammeCard } from "@/components/sections/ProgrammeCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { PROGRAMMES } from "@/data/programmes";
import { Stagger } from "@/components/ui/Reveal";
import { CrescentArc } from "@/components/ui/Crescent";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "Eleven CSR and sustainability programmes — education, healthcare, women's progress, youth, livelihoods, rural development, green communities, water, waste, climate and restoration.",
};

// The six parts every programme page defines, as listed in the hero lede.
const ANATOMY = [
  { label: "Challenge", icon: Target },
  { label: "Approach", icon: Compass },
  { label: "Interventions", icon: ListChecks },
  { label: "Beneficiaries", icon: Users },
  { label: "Expected outcomes", icon: BarChart3 },
  { label: "Impact indicators", icon: Gauge },
];

export default function ProgrammesPage() {
  const csr = PROGRAMMES.filter((p) => p.category === "CSR");
  const sustainability = PROGRAMMES.filter((p) => p.category === "Sustainability");

  return (
    <>
      <PageHero
        variant="organic"
        number="05"
        label="Our programmes"
        title={
          <>
            From ideas to action.
            <br />
            <span className="bg-linear-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              From action to impact.
            </span>
          </>
        }
        lede="These are our actual programmes, not service categories. Each has a defined challenge, approach, intervention set, beneficiary group, expected outcomes and impact indicators."
        imageNote="Programmes — delivery underway at a community site"
        actions={
          <>
            <Button href="/partnerships" withArrow size="lg">Fund a programme</Button>
            <Button href="#csr-programmes" variant="outline">Browse {PROGRAMMES.length} programmes</Button>
          </>
        }
      >
        {/* What every programme page defines — the lede, made visible */}
        <div className="mt-14 rounded-(--radius-image) border border-line/80 bg-surface p-6 shadow-rest sm:p-8 lg:mt-20">
          <p className="m-0 text-eyebrow font-semibold uppercase text-ink-400">Every programme defines</p>
          <Stagger className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
            {ANATOMY.map(({ label, icon: Icon }, i) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex size-10 flex-none items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <Icon size={19} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="tnum font-display text-[11px] font-bold text-green-600">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[14px] font-bold leading-[1.25] text-ink-950">{label}</span>
                </span>
              </div>
            ))}
          </Stagger>
        </div>
      </PageHero>

      {/* A — CSR PROGRAMMES */}
      <Section id="csr-programmes" tone="white">
        <SectionHeading
          number="A"
          label="CSR programmes"
          title="Six programmes creating social impact."
          lede="Education, healthcare, women's empowerment, youth development, livelihoods and rural community development."
        />
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {csr.map((p) => (
            <ProgrammeCard key={p.slug} programme={p} />
          ))}
        </Stagger>
      </Section>

      {/* B — SUSTAINABILITY PROGRAMMES: deep-green band */}
      <section id="sustainability-programmes" className="on-dark relative scroll-mt-24 overflow-hidden bg-green-900 py-section-lg text-on-dark">
        <CrescentArc
          className="pointer-events-none absolute -right-40 -top-24 w-[560px] opacity-[0.12] max-md:hidden"
          strokeWidth={20}
          from="var(--color-green-500)"
          to="var(--color-teal-500)"
        />
        <Container className="relative">
          <SectionHeading
            number="B"
            label="Sustainability programmes"
            tone="dark"
            title="Five programmes building environmental resilience."
            lede="Green communities, water security, waste and circularity, climate resilience and ecosystem restoration."
          />
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sustainability.map((p) => (
              <ProgrammeCard key={p.slug} programme={p} />
            ))}
            {/* Fills the sixth slot: the "new need" route from the closing call to action */}
            <Link
              href="/contact"
              className="card-lift group flex h-full min-h-72 flex-col justify-between gap-6 rounded-(--radius-image) border-2 border-dashed border-white/25 p-8 hover:border-green-500 focus-visible:border-green-500"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-green-500 text-green-900">
                <Plus size={22} strokeWidth={2.4} aria-hidden="true" />
              </span>
              <span className="flex flex-col gap-3">
                <span className="font-display text-h3 font-bold text-on-dark">A need we have not addressed yet?</span>
                <span className="text-[15px] leading-[1.6] text-on-dark-muted">
                  Some partnerships begin there. Tell us the theme and the geography, and we will design it with you.
                </span>
                <span className="mt-2 inline-flex items-center gap-2 text-[14px] font-semibold text-on-dark">
                  <span className="link-grow">Design one with us</span>
                  <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" className="card-icon text-green-500" />
                </span>
              </span>
            </Link>
          </Stagger>
        </Container>
      </section>

      <CtaSection
        number="C"
        title="Support a programme, or design one with us."
        body="Most partnerships begin with an existing programme in a new geography. Some begin with a need we have not addressed yet."
        secondaryHref="/impact"
        secondaryLabel="How we measure impact"
      />
    </>
  );
}
