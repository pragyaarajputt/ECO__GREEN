import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, STAGGER_MS } from "@/components/ui/Reveal";
import { PageNumber } from "@/components/ui/PageNumber";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LeafMark } from "@/components/ui/Leaf";
import { CrescentArc } from "@/components/ui/Crescent";
import { CSR_FOCUS_AREAS, SUSTAINABILITY_FOCUS_AREAS } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are, what we believe, how we work and why it matters — Eco Green Sustainability Foundation's approach to CSR and sustainability programmes.",
};

const BELIEFS = [
  { number: "01", title: "Communities know their own priorities", body: "A programme designed in an office and delivered to a village is a transaction. A programme designed with the village is a partnership, and it is the one still running three years later." },
  { number: "02", title: "Measurement is not paperwork", body: "Without a baseline there is no way to show what changed. We establish the starting position before delivery begins, and agree the method in writing with the partner." },
  { number: "03", title: "Social and environmental work belong together", body: "Water scarcity is a livelihoods problem. Waste is a health problem. Splitting CSR from sustainability makes reporting tidier and programmes weaker." },
  { number: "04", title: "The exit is part of the design", body: "Local ownership is named in the first month, not negotiated in the last. What we build should keep working after our involvement ends." },
];

// Restates the "Why it matters" copy below as a side-by-side contrast.
const ACTIVITY = ["Sessions held", "Materials distributed", "Saplings planted"];
const OUTCOME = ["Designed against assessed need", "Measured against a real baseline", "Reported honestly — what worked and what did not"];

const bodyText = "m-0 max-w-[58ch] text-[17px] leading-[1.75] text-ink-600 lg:text-[18px]";

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="organic"
        number="02"
        label="About"
        title={
          <>
            People, planet and{" "}
            <span className="bg-linear-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              the work that connects them.
            </span>
          </>
        }
        lede="Eco Green Sustainability Foundation partners with businesses, communities and institutions to design and implement programmes that create measurable social impact and build environmental resilience."
        imageNote="About — programme team in conversation with community members"
        actions={
          <>
            <Button href="/partnerships" withArrow size="lg">Partner With Us</Button>
            <Button href="/programmes" variant="outline">Our programmes</Button>
          </>
        }
      />

      {/* 01 — WHO WE ARE */}
      <Section tone="white">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <ImagePlaceholder note="Who we are — field team at a programme site" ratio="portrait" rounded="leaf-alt" className="max-lg:aspect-[4/3]" />
          </Reveal>
          <Reveal delay={STAGGER_MS} className="order-1 lg:order-2 lg:col-span-7">
            <div className="flex flex-col gap-7">
              <PageNumber number="01" label="Who we are" total="05" />
              <h2 className="m-0 max-w-[20ch] font-display text-h2 font-bold">
                A foundation that works where CSR and sustainability meet.
              </h2>
              <p className={bodyText}>
                We design and implement programmes across education, health, livelihoods, women&apos;s empowerment,
                youth development, rural development and social inclusion — alongside climate, water, waste,
                biodiversity and sustainable livelihoods work.
              </p>
              <p className={bodyText}>
                We work with corporate partners meeting their CSR commitments, with institutions seeking a delivery
                partner, and with communities defining what they actually need. Approximately 40% of our strategic focus
                sits in sustainability, complementing the social programmes rather than sitting apart from them.
              </p>

              {/* Focus balance: the ~40% figure above, plus the real focus-area lists */}
              <div className="rounded-(--radius-image) border border-line bg-paper p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-4 text-[13px] font-semibold uppercase tracking-[0.12em]">
                  <span className="text-ink-950">Social development</span>
                  <span className="text-teal-600">Sustainability · ~40%</span>
                </div>
                <div
                  className="mt-3 flex h-3 overflow-hidden rounded-full bg-paper-2"
                  role="img"
                  aria-label="Strategic focus: about 60% social development, about 40% sustainability"
                >
                  <span className="h-full w-[60%] bg-linear-to-r from-green-700 to-green-600" />
                  <span className="h-full w-[40%] border-l-2 border-surface bg-linear-to-r from-teal-600 to-teal-500" />
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {[
                    { heading: `${CSR_FOCUS_AREAS.length} social focus areas`, items: CSR_FOCUS_AREAS, dot: "bg-green-600" },
                    { heading: `${SUSTAINABILITY_FOCUS_AREAS.length} environmental focus areas`, items: SUSTAINABILITY_FOCUS_AREAS, dot: "bg-teal-600" },
                  ].map((group) => (
                    <div key={group.heading} className="flex flex-col gap-3">
                      <span className="font-display text-[15px] font-bold text-ink-950">{group.heading}</span>
                      <ul className="m-0 flex list-none flex-col gap-2 p-0">
                        {group.items.map((area) => (
                          <li key={area.title} className="flex items-center gap-2.5 text-[14px] leading-[1.4] text-ink-600">
                            <span aria-hidden="true" className={`size-1.5 shrink-0 rounded-full ${group.dot}`} />
                            {area.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 02 — WHAT WE BELIEVE: navy band for contrast */}
      <section className="on-dark relative overflow-hidden bg-ink-950 py-section-lg text-on-dark">
        <CrescentArc
          className="pointer-events-none absolute -left-40 top-10 w-[560px] opacity-[0.10] max-md:hidden"
          strokeWidth={20}
          from="var(--color-green-500)"
          to="var(--color-teal-500)"
        />
        <Container className="relative">
          <SectionHeading
            number="02"
            label="What we believe"
            tone="dark"
            title="Four convictions that shape how we work."
            lede="Each of these changes something concrete about programme design — who decides, what gets measured, and what happens at the end."
          />
          <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {BELIEFS.map((b, i) => (
              <article
                key={b.number}
                className={`card-lift group relative flex h-full flex-col gap-5 overflow-hidden rounded-(--radius-image) border border-white/10 p-8 hover:border-green-500 lg:p-10 ${
                  i % 3 === 0 ? "bg-linear-to-br from-white/[0.08] to-transparent" : "bg-linear-to-br from-green-600/25 to-transparent"
                }`}
              >
                <LeafMark className="card-leaf pointer-events-none absolute -right-6 -top-6 size-28 text-green-500 opacity-[0.12]" strokeWidth={3} />
                <span className="font-display text-[56px] font-extrabold leading-none tracking-[-0.05em] text-transparent [-webkit-text-stroke:1.5px_var(--color-green-500)] lg:text-[72px]">
                  {b.number}
                </span>
                <h3 className="m-0 max-w-[22ch] font-display text-h3 font-bold text-on-dark">{b.title}</h3>
                <p className="m-0 text-[16px] leading-[1.7] text-on-dark-muted">{b.body}</p>
              </article>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 03 — HOW WE WORK */}
      <Section tone="paper">
        <SectionHeading
          number="03"
          label="How we work"
          title="Inclusion, collaboration, sustainability, innovation."
          lede="Our four operating principles, and what each means in the field rather than on a values page."
        />
        <PillarGrid />
      </Section>

      {/* 04 — WHY IT MATTERS: soft green pause */}
      <section className="relative overflow-hidden bg-green-50 py-section">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <div className="flex flex-col gap-7">
                <PageNumber number="04" label="Why it matters" total="05" />
                <h2 className="m-0 max-w-[20ch] font-display text-h2 font-bold">
                  Corporate responsibility spending only counts if something changes.
                </h2>
                <p className={bodyText}>
                  Considerable resources flow into community development every year. A great deal of it is reported as
                  activity — sessions held, materials distributed, saplings planted — because activity is easy to count and
                  requires nothing to have been measured beforehand.
                </p>
                <p className={bodyText}>
                  We exist to close that gap: to design programmes against assessed need, measure them against a real
                  baseline, and report honestly on what worked and what did not.
                </p>
              </div>
            </Reveal>
            <Reveal delay={STAGGER_MS} className="lg:col-span-6">
              <div className="flex flex-col gap-4">
                <ImagePlaceholder
                  note="Why it matters — community members at a completed programme site"
                  ratio="wide"
                  rounded="image"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-3 rounded-(--radius-card) border border-line bg-surface/70 p-5">
                    <span className="text-eyebrow font-semibold uppercase text-ink-400">Often reported</span>
                    <ul className="m-0 flex list-none flex-col gap-2 p-0">
                      {ACTIVITY.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-[14px] leading-[1.45] text-ink-600">
                          <Minus size={16} className="mt-0.5 shrink-0 text-ink-400" aria-hidden="true" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 rounded-(--radius-card) border border-green-600/30 bg-surface p-5 shadow-rest">
                    <span className="text-eyebrow font-semibold uppercase text-green-700">How we work</span>
                    <ul className="m-0 flex list-none flex-col gap-2 p-0">
                      {OUTCOME.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-[14px] leading-[1.45] text-ink-950">
                          <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-green-600" aria-hidden="true" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Let's create meaningful impact together."
        body="Tell us what you are trying to achieve and where. We will be straightforward about what is deliverable."
        secondaryHref="/reports"
        secondaryLabel="Transparency & reports"
        number="05"
      />
    </>
  );
}
