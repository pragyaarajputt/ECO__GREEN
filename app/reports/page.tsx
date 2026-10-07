import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, FileText, Landmark, Lock, Plus, ShieldCheck, Users, UsersRound, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageNumber } from "@/components/ui/PageNumber";
import { PageHero } from "@/components/sections/PageHero";
import { BrandBand } from "@/components/sections/BrandBand";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { REGISTRATIONS } from "@/data/site";
import { REPORTS, POLICIES, GOVERNANCE_STRUCTURE } from "@/data/content";

export const metadata: Metadata = {
  title: "Transparency & Accountability",
  description:
    "Trust through transparency. Governance, statutory registration, financial transparency, programme transparency, policies and the annual report archive.",
};

const REPORT_GROUPS = [
  { key: "Annual report", title: "Annual reports", tag: "AR" },
  { key: "Financial statement", title: "Financial statements", tag: "FS" },
  { key: "Utilisation report", title: "Utilisation reports", tag: "UR" },
  { key: "Impact assessment", title: "Impact assessments", tag: "IA" },
] as const;

// Icons follow the order of GOVERNANCE_STRUCTURE: board, advisory, leadership, committees.
const GOVERNANCE_ICONS = [Landmark, UsersRound, Briefcase, Users];

export default function ReportsPage() {
  return (
    <>
      <PageHero
        variant="organic"
        number="09"
        label="Transparency & accountability"
        title={
          <>
            Trust through transparency.
            <br />
            <span className="bg-linear-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              Accountability through action.
            </span>
          </>
        }
        lede="Every stakeholder has the right to understand how resources are used and what impact is being created."
        imageNote="Transparency — programme documentation and financial review"
        actions={
          <>
            <Button href="/contact" withArrow size="lg">Request documentation</Button>
            <Button href="/impact" variant="outline">Our impact framework</Button>
          </>
        }
      >
        {/* Publication status — the page's honesty statement, given the hero's weight */}
        <Reveal className="mt-14 flex flex-col gap-5 rounded-(--radius-image) border border-green-600/30 bg-surface p-6 shadow-rest sm:flex-row sm:gap-6 sm:p-8 lg:mt-20 lg:p-10">
          <span className="flex size-12 flex-none items-center justify-center rounded-2xl bg-green-600 text-white shadow-cta">
            <Lock size={22} strokeWidth={2} aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-3">
            <span className="text-eyebrow font-semibold uppercase text-green-700">Publication status</span>
            <p className="m-0 max-w-[62ch] text-[16px] leading-[1.7] text-ink-800">
              The structure below is live and ready to hold real documents. Registration numbers, certificates,
              audited statements and reports are published here as they are confirmed. Nothing on this page claims a
              document exists before it does — for a foundation handling other organisations&apos; funds, an
              unverifiable claim is worse than an empty slot.
            </p>
          </div>
        </Reveal>
      </PageHero>

      {/* 01 — GOVERNANCE */}
      <Section tone="white">
        <SectionHeading
          number="01"
          label="Governance"
          title="Who is accountable, and how decisions are made."
          lede="Board composition is a due diligence item. Corporate partners check for related-party concerns before funds are released."
        />
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GOVERNANCE_STRUCTURE.map((g, i) => (
            <FeatureCard key={g.title} icon={GOVERNANCE_ICONS[i]} title={g.title} body={g.body} />
          ))}
        </Stagger>
      </Section>

      {/* 02 — REGISTRATION: soft green */}
      <section className="bg-green-50 py-section">
        <Container>
          <SectionHeading
            number="02"
            label="Legal & registration"
            title="Statutory registration and certificates."
            lede="Each entry is published with its number and downloadable certificate once confirmed. Corporate CSR funding is subject to statutory requirements for implementing agencies."
          />
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REGISTRATIONS.map((r) => (
              <article key={r.label} className="flex h-full flex-col gap-3 rounded-(--radius-card) border border-line bg-surface p-6 shadow-rest">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="m-0 font-display text-[16px] font-bold leading-[1.3] text-ink-950">{r.label}</h3>
                  <span className="inline-flex flex-none items-center gap-1.5 rounded-full bg-paper-2 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-600">
                    <Clock size={12} strokeWidth={2.4} aria-hidden="true" />
                    Pending
                  </span>
                </div>
                <p className="m-0 text-[14px] leading-[1.6] text-ink-600">{r.note}</p>
              </article>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 03 — ARCHIVE */}
      <BrandBand>
        <SectionHeading
          number="03"
          label="Financial & programme transparency"
          tone="dark"
          title="The report archive."
          lede="A searchable, downloadable archive by year and type. Entries appear as documents are finalised and audited."
        />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {REPORT_GROUPS.map((group) => {
            const items = REPORTS.filter((r) => r.type === group.key);
            if (items.length === 0) return null;
            return (
              <Reveal key={group.key} className="flex flex-col gap-5">
                <PageNumber number={group.tag} label={group.title} tone="dark" />
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {items.map((r) => (
                    <li
                      key={`${r.year}-${r.title}`}
                      className="flex items-center gap-4 rounded-(--radius-card) border border-white/10 bg-white/[0.05] p-4 sm:p-5"
                    >
                      <span className="flex size-10 flex-none items-center justify-center rounded-xl bg-green-500/15 text-green-500">
                        <FileText size={18} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="text-[16px] font-semibold text-on-dark">{r.title}</span>
                        <span className="tnum text-[13px] text-on-dark-muted">{r.year}</span>
                      </span>
                      <span className="flex-none rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-on-dark-muted">
                        Document pending
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </BrandBand>

      {/* 04 — POLICIES */}
      <Section tone="paper">
        <SectionHeading
          number="04"
          label="Policies"
          title="Eleven policies governing how we operate."
          lede="Published in full as each is formally adopted by the board. Safeguarding and child protection apply to every programme involving children."
        />
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ...POLICIES.map((p) => <FeatureCard key={p.title} icon={ShieldCheck} title={p.title} body={p.summary} />),
            // Twelfth slot: the due-diligence route from the closing call to action
            <Link
              key="request"
              href="/contact"
              className="card-lift group flex h-full min-h-56 flex-col justify-between gap-6 rounded-(--radius-card) border-2 border-dashed border-line-strong p-7 hover:border-green-600 focus-visible:border-green-600 lg:p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-green-600 text-white">
                <Plus size={20} strokeWidth={2.4} aria-hidden="true" />
              </span>
              <span className="flex flex-col gap-2">
                <span className="font-display text-[18px] font-bold leading-[1.25] text-ink-950">Need a document for due diligence?</span>
                <span className="text-[15px] leading-[1.6] text-ink-600">
                  We will provide whatever your compliance or vendor onboarding process requires.
                </span>
                <span className="mt-2 inline-flex items-center gap-2 text-[14px] font-semibold text-ink-950">
                  <span className="link-grow">Request documentation</span>
                  <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" className="card-icon text-green-600" />
                </span>
              </span>
            </Link>,
          ]}
        </Stagger>
      </Section>

      <CtaSection
        number="05"
        title="Conducting due diligence on Eco Green?"
        body="Contact us directly and we will provide whatever documentation your compliance or vendor onboarding process requires."
        primaryLabel="Request Documentation"
        secondaryHref="/partnerships"
        secondaryLabel="Partnership models"
      />
    </>
  );
}
