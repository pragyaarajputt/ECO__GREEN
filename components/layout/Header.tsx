"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PRIMARY_NAV } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

/**
 * Sticky, visually light header. Logo left, nav right, primary CTA far
 * right. Ten nav items is a lot, so the bar sits at 14px and collapses to
 * a full-screen drawer below xl — the CTA stays in the mobile bar rather
 * than being buried inside the menu.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled ? "border-b border-line bg-paper/90 backdrop-blur-md" : "border-b border-transparent bg-paper"
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex 2xl:gap-6">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative flex min-h-11 items-center text-[14px] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                isActive(item.href) ? "text-ink-950" : "text-ink-600 hover:text-ink-950"
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-green-600 transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group hidden min-h-11 items-center gap-2 rounded-(--radius-chip) bg-green-600 px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-green-700 sm:inline-flex"
          >
            Partner With Us
            <ArrowUpRight
              size={15}
              strokeWidth={2.2}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 cursor-pointer items-center justify-center rounded-(--radius-chip) border border-line bg-transparent text-ink-950 transition-colors hover:border-ink-950 xl:hidden"
          >
            {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-18 z-40 overflow-y-auto overscroll-contain bg-paper lg:top-20 xl:hidden"
        >
          <Container className="flex flex-col py-6">
            <nav aria-label="Primary mobile" className="flex flex-col">
              {PRIMARY_NAV.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-16 items-center justify-between border-b border-line font-display text-[24px] font-bold tracking-[-0.02em] sm:text-[26px] ${
                    isActive(item.href) ? "text-green-600" : "text-ink-950"
                  }`}
                >
                  {item.label}
                  <span className="tnum text-[12px] font-semibold text-green-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-(--radius-chip) bg-green-600 px-7 text-[15px] font-semibold text-white"
            >
              Partner With Us
              <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
