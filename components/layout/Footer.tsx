import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { FOOTER_COLUMNS, LEGAL_LINKS, SOCIALS, SITE, COPYRIGHT } from "@/data/site";

export function Footer() {
  return (
    <footer className="on-dark relative bg-ink-950 text-on-dark">
      {/* Leaf gradient rule: navy figure to green leaf to lime tip */}
      <div aria-hidden="true" className="h-1 bg-linear-to-r from-teal-600 via-green-600 to-green-500" />
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Logo tone="dark" size="lg" />
            <span className="font-display text-[15px] font-bold leading-[1.4] text-on-dark">{SITE.name}</span>
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
                  className="inline-flex min-h-8 w-fit items-center text-[15px] text-on-dark-muted transition-colors hover:text-green-500"
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
              className="inline-flex min-h-11 w-fit items-center gap-2 border-b-2 border-green-500 pb-0.5 text-[15px] font-semibold text-on-dark transition-colors hover:text-green-500"
            >
              Send an enquiry
            </Link>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="inline-flex min-h-9 items-center rounded-(--radius-chip) border border-line-dark px-4 text-[14px] text-on-dark-muted transition-colors hover:border-green-500 hover:text-on-dark"
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
