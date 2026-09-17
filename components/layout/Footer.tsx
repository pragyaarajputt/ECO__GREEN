import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FOOTER_COLUMNS, LEGAL_LINKS, SOCIALS, SITE, COPYRIGHT } from "@/data/site";

export function Footer() {
  return (
    <footer className="on-dark bg-ink-950 text-on-dark">
      <Container>
        {/* Prominent closing CTA carried by the footer itself */}
        <div className="grid grid-cols-1 items-end gap-10 border-b border-line-dark py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-8">
            <h2 className="m-0 max-w-[16ch] font-display text-[30px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[42px] lg:text-[56px]">
              Let&apos;s create meaningful impact together.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center gap-2 rounded-(--radius-chip) bg-green-600 px-8 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-green-700"
            >
              Partner With Us
              <ArrowUpRight
                size={17}
                strokeWidth={2.2}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <span className="font-display text-[19px] font-extrabold leading-[1.3] tracking-[-0.03em] text-on-dark">
              {SITE.name}
            </span>
            <p className="m-0 max-w-[34ch] text-[14px] leading-[1.7] text-on-dark-muted">{SITE.disciplines}</p>
            <p className="m-0 max-w-[34ch] text-[14px] leading-[1.7] text-on-dark-muted">{SITE.positioning}</p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4 lg:col-span-2">
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-green-500">
                {col.heading}
              </span>
              {col.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="min-h-8 text-[15px] text-on-dark-muted transition-colors hover:text-on-dark"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-4 lg:col-span-4">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-green-500">Contact</span>
            <p className="m-0 max-w-[36ch] text-[15px] leading-[1.7] text-on-dark-muted">
              Contact details are published once confirmed. Use the enquiry form and we will respond directly.
            </p>
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-fit items-center gap-2 border-b-2 border-green-600 pb-0.5 text-[15px] font-semibold text-on-dark"
            >
              Send an enquiry
            </Link>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="min-h-9 text-[14px] text-on-dark-muted transition-colors hover:text-on-dark"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line-dark py-7 md:flex-row md:items-center md:justify-between">
          <span className="text-[13px] text-on-dark-muted">{COPYRIGHT}</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] text-on-dark-muted transition-colors hover:text-on-dark"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
