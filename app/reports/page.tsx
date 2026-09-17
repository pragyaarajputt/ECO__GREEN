import type { Metadata } from "next";
import { FileText, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageNumber } from "@/components/ui/PageNumber";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
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

export default function ReportsPage() {
  return (
    <>
      <PageHero
        number="09"
        label="Transparency & accountability"
        title={<>Trust through transparency.<br />Accountability through action.</>}
        lede="Every stakeholder has the right to understand how resources are used and what impact is being created."
        imageNote="Transparency — programme documentation and financial review"
        actions={
          <>
            <Button href="/contact" withArrow>Request documentation</Button>
            <Button href="/impact" variant="outline">Our impact framework</Button>
          </>
        }
      />

      <Section tone="paper2" size="sm">
        <Reveal>
          <div className="flex flex-col gap-4 rounded-(--radius-image) border border-green-600 bg-green-50 p-7 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <Lock size={18} strokeWidth={1.8} className="text-green-700" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-green-700">
                Publication status
              </span>
            </div>
            <p className="m-0 max-w-[72ch] text-[16px] leading-[1.7] text-ink-800">
              The structure below is live and ready to hold real documents. Registration numbers, certificates,
              audited statements and reports are published here as they are confirmed. Nothing on this page claims a
              document exists before it does — for a foundation handling other organisations&apos; funds, an
              unverifiable claim is worse than an empty slot.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="paper">
        <SectionHeading
          number="01"
          label="Governance"
          title="Who is accountable, and how decisions are made."
          lede="Board composition is a due diligence item. Corporate partners check for related-party concerns before funds are released."
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-(--radius-image) border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {GOVERNANCE_STRUCTURE.map((g, i) => (
            <Reveal key={g.title} delay={i * 60} className="flex flex-col gap-3 bg-surface p-7 lg:p-8">
              <h3 className="m-0 font-display text-[18px] font-bold leading-[1.25] tracking-[-0.02em] text-ink-950 lg:text-[19px]">
                {g.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-ink-600">{g.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper2">
        <SectionHeading
          number="02"
          label="Legal & registration"
          title="Statutory registration and certificates."
          lede="Each entry is published with its number and downloadable certificate once confirmed. Corporate CSR funding is subject to statutory requirements for implementing agencies."
        />
        <dl className="m-0 grid grid-cols-1 gap-px overflow-hidden rounded-(--radius-image) border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {REGISTRATIONS.map((r, i) => (
            <Reveal key={r.label} delay={i * 40} className="flex flex-col gap-3 bg-surface p-7">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-green-600">{r.label}</dt>
              <dd className="m-0 text-[15px] leading-[1.6] text-ink-400">{r.note}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <section className="on-dark bg-ink-950 py-20 text-on-dark lg:py-32">
        <Container>
          <SectionHeading
            number="03"
            label="Financial & programme transparency"
            tone="dark"
            title="The report archive."
            lede="A searchable, downloadable archive by year and type. Entries appear as documents are finalised and audited."
          />
          <div className="flex flex-col gap-10 lg:gap-12">
            {REPORT_GROUPS.map((group) => {
              const items = REPORTS.filter((r) => r.type === group.key);
              if (items.length === 0) return null;
              return (
                <div key={group.key} className="flex flex-col gap-5">
                  <PageNumber number={group.tag} label={group.title} tone="dark" />
                  <ul className="m-0 flex list-none flex-col gap-px overflow-hidden rounded-(--radius-card) bg-line-dark p-0">
                    {items.map((r) => (
                      <li
                        key={`${r.year}-${r.title}`}
                        className="flex flex-col gap-3 bg-ink-950 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                      >
                        <div className="flex items-center gap-4">
                          <FileText size={18} strokeWidth={1.6} className="flex-none text-green-500" aria-hidden="true" />
                          <span className="text-[16px] font-semibold text-on-dark lg:text-[17px]">
                            {r.title} {r.year}
                          </span>
                        </div>
                        <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-on-dark-muted">
                          Document pending
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Section tone="paper">
        <SectionHeading
          number="04"
          label="Policies"
          title="Eleven policies governing how we operate."
          lede="Published in full as each is formally adopted by the board. Safeguarding and child protection apply to every programme involving children."
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-(--radius-image) border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {POLICIES.map((p, i) => (
            <Reveal key={p.title} delay={i * 30} className="flex flex-col gap-2.5 bg-surface p-7">
              <h3 className="m-0 font-display text-[17px] font-bold leading-[1.3] tracking-[-0.02em] text-ink-950">
                {p.title}
              </h3>
              <p className="m-0 text-[14px] leading-[1.6] text-ink-600">{p.summary}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Conducting due diligence on Eco Green?"
        body="Contact us directly and we will provide whatever documentation your compliance or vendor onboarding process requires."
        primaryLabel="Request Documentation"
        secondaryHref="/partnerships"
        secondaryLabel="Partnership models"
      />
    </>
  );
}
