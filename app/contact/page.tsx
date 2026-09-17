import type { Metadata } from "next";
import { Mail, Phone, MapPin, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageNumber } from "@/components/ui/PageNumber";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT, SOCIALS, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact / Partner With Us",
  description:
    "Have a CSR or sustainability challenge? Let's talk. Eco Green Sustainability Foundation welcomes opportunities for collaboration with corporates, institutions and communities.",
};

export default function ContactPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "ContactPage", name: `Contact ${SITE.name}` };

  const details = [
    { Icon: Mail, label: "Email", value: CONTACT.email },
    { Icon: Phone, label: "Phone", value: CONTACT.phone },
    { Icon: MapPin, label: "Location", value: CONTACT.location },
  ];

  return (
    <>
      <section className="border-b border-line bg-paper pb-14 pt-10 lg:pb-24 lg:pt-16">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="flex flex-col gap-7">
                <PageNumber number="10" label="Contact" total="10" />
                <h1 className="m-0 max-w-[14ch] font-display text-[34px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[56px]">
                  Let&apos;s create meaningful impact together.
                </h1>
                <p className="m-0 max-w-[48ch] text-[18px] leading-[1.7] text-ink-600">
                  Have a CSR or sustainability challenge? Let&apos;s talk.
                </p>
                <p className="m-0 max-w-[52ch] text-[16px] leading-[1.75] text-ink-600">
                  Whether you are a corporate organisation looking to develop a CSR programme, an institution seeking a
                  sustainability partner, or an organisation interested in community development, Eco Green
                  Sustainability Foundation welcomes opportunities for collaboration.
                </p>

                <dl className="m-0 mt-2 flex flex-col gap-5 border-t border-line pt-8">
                  {details.map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <span className="flex size-10 flex-none items-center justify-center rounded-(--radius-chip) bg-green-50">
                        <Icon size={17} strokeWidth={1.8} className="text-green-700" aria-hidden="true" />
                      </span>
                      <div className="flex flex-col gap-1">
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">{label}</dt>
                        <dd className="m-0 text-[16px] text-ink-800">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <div className="flex flex-col gap-3 border-t border-line pt-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">Follow</span>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="min-h-9 border-b border-transparent text-[15px] text-ink-600 transition-colors hover:border-green-600 hover:text-ink-950"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7">
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <Section tone="paper2" size="sm">
        <Reveal>
          <div className="flex flex-col gap-4 rounded-(--radius-image) border border-line bg-surface p-7 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <Info size={18} strokeWidth={1.8} className="text-green-700" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                Location &amp; contact details
              </span>
            </div>
            <p className="m-0 max-w-[72ch] text-[16px] leading-[1.7] text-ink-600">
              Direct contact details and our office location will be published here once confirmed. Rather than show a
              placeholder address or an empty map, we have left the section ready and the enquiry form live — every
              submission reaches us and receives a reply.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="paper">
        <SectionHeading
          number="—"
          label="Next steps"
          title="Two ways to start the conversation."
          lede="Whichever route you take, the first conversation is with the people who would run the work."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6 rounded-(--radius-image) border border-line bg-surface p-7 sm:p-8 lg:p-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-600">For corporates</span>
            <h3 className="m-0 max-w-[20ch] font-display text-[24px] font-bold leading-[1.15] tracking-[-0.03em] text-ink-950 lg:text-[32px]">
              Looking for a trusted CSR implementation partner?
            </h3>
            <div className="mt-auto pt-2">
              <Button href="/partnerships" withArrow>Discuss Your CSR Requirement</Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="on-dark flex flex-col gap-6 rounded-(--radius-image) bg-ink-950 p-7 text-on-dark sm:p-8 lg:p-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-500">For collaborators</span>
            <h3 className="m-0 max-w-[22ch] font-display text-[24px] font-bold leading-[1.15] tracking-[-0.03em] lg:text-[32px]">
              Let&apos;s collaborate to create meaningful and measurable impact.
            </h3>
            <div className="mt-auto pt-2">
              <Button href="/programmes" variant="onDark">Explore Partnership</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
