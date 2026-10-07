import type { Metadata } from "next";
import { Mail, Phone, MapPin, Info, Building2, Handshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageNumber } from "@/components/ui/PageNumber";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";
import { Reveal, STAGGER_MS } from "@/components/ui/Reveal";
import { CrescentArc } from "@/components/ui/Crescent";
import { LeafMark } from "@/components/ui/Leaf";
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
      <section className="relative overflow-hidden bg-paper pb-section pt-hero-top">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 size-[600px] rounded-full bg-[radial-gradient(circle,rgb(146_198_12/0.16),rgb(1_129_141/0.08)_45%,transparent_70%)]"
        />
        <Container className="relative">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="hero-seq flex flex-col gap-7">
                <PageNumber number="10" label="Contact" total="10" />
                <h1 className="m-0 max-w-[14ch] font-display text-h1 font-bold">
                  Let&apos;s create{" "}
                  <span className="bg-linear-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                    meaningful impact
                  </span>{" "}
                  together.
                </h1>
                <p className="m-0 max-w-[48ch] text-lede text-ink-600">
                  Have a CSR or sustainability challenge? Let&apos;s talk.
                </p>
                <p className="m-0 max-w-[52ch] text-[16px] leading-[1.75] text-ink-600">
                  Whether you are a corporate organisation looking to develop a CSR programme, an institution seeking a
                  sustainability partner, or an organisation interested in community development, Eco Green
                  Sustainability Foundation welcomes opportunities for collaboration.
                </p>

                <div className="flex flex-col gap-6 rounded-(--radius-image) border border-line/80 bg-surface p-6 shadow-rest sm:p-7">
                  <dl className="m-0 flex flex-col gap-5">
                    {details.map(({ Icon, label, value }) => (
                      <div key={label} className="flex items-start gap-4">
                        <span className="flex size-11 flex-none items-center justify-center rounded-xl bg-green-50">
                          <Icon size={18} strokeWidth={1.9} className="text-green-700" aria-hidden="true" />
                        </span>
                        <div className="flex flex-col gap-1">
                          <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">{label}</dt>
                          <dd className="m-0 text-[16px] text-ink-800">{value}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>

                  <div className="flex flex-col gap-3 border-t border-line pt-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">Follow</span>
                    <div className="flex flex-wrap gap-2">
                      {SOCIALS.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-[14px] font-medium text-ink-600 transition-[background-color,border-color,color] duration-(--motion-fast) ease-organic hover:border-green-600 hover:bg-green-50 hover:text-green-700"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Reveal delay={120} className="lg:col-span-7">
              <div className="relative">
                <CrescentArc
                  className="pointer-events-none absolute -right-[10%] -top-[8%] w-[46%] opacity-[0.18] max-lg:hidden"
                  strokeWidth={10}
                  from="var(--color-green-600)"
                  to="var(--color-teal-600)"
                />
                <div className="relative">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Placeholder notice for contact details */}
      <section className="bg-green-50 py-section-sm">
        <Container>
          <Reveal className="flex flex-col gap-5 sm:flex-row sm:gap-6">
            <span className="flex size-12 flex-none items-center justify-center rounded-2xl bg-surface text-green-700 shadow-rest">
              <Info size={22} strokeWidth={1.9} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-3">
              <span className="text-eyebrow font-semibold uppercase text-green-700">Location &amp; contact details</span>
              <p className="m-0 max-w-[62ch] text-[16px] leading-[1.7] text-ink-800">
                Direct contact details and our office location will be published here once confirmed. Rather than show a
                placeholder address or an empty map, we have left the section ready and the enquiry form live — every
                submission reaches us and receives a reply.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section tone="white">
        <SectionHeading
          number="—"
          label="Next steps"
          title="Two ways to start the conversation."
          lede="Whichever route you take, the first conversation is with the people who would run the work."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="card-lift relative flex flex-col gap-6 overflow-hidden rounded-(--radius-image) border border-line bg-linear-to-br from-green-50 to-surface p-7 shadow-rest sm:p-8 lg:p-12">
            <LeafMark className="pointer-events-none absolute -bottom-8 -right-6 size-40 text-green-600 opacity-[0.08]" strokeWidth={3} />
            <span className="flex size-12 items-center justify-center rounded-2xl bg-green-600 text-white">
              <Building2 size={22} strokeWidth={2} aria-hidden="true" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-700">For corporates</span>
            <h3 className="m-0 max-w-[20ch] font-display text-h3 font-bold text-ink-950">
              Looking for a trusted CSR implementation partner?
            </h3>
            <div className="relative mt-auto pt-2">
              <Button href="/partnerships" withArrow>Discuss Your CSR Requirement</Button>
            </div>
          </Reveal>

          <Reveal
            delay={STAGGER_MS}
            className="on-dark card-lift relative flex flex-col gap-6 overflow-hidden rounded-(--radius-image) bg-ink-950 p-7 text-on-dark sm:p-8 lg:p-12"
          >
            <CrescentArc
              className="pointer-events-none absolute -bottom-24 -right-20 w-[320px] opacity-[0.14]"
              strokeWidth={18}
              from="var(--color-green-500)"
              to="var(--color-teal-500)"
            />
            <span className="flex size-12 items-center justify-center rounded-2xl bg-green-500 text-green-900">
              <Handshake size={22} strokeWidth={2} aria-hidden="true" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-500">For collaborators</span>
            <h3 className="m-0 max-w-[22ch] font-display text-h3 font-bold">
              Let&apos;s collaborate to create meaningful and measurable impact.
            </h3>
            <div className="relative mt-auto pt-2">
              <Button href="/programmes" variant="onDark">Explore Partnership</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
