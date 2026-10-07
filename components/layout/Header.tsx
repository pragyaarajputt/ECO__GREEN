"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PRIMARY_NAV, SITE } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { CrescentArc } from "@/components/ui/Crescent";
import { LeafMark } from "@/components/ui/Leaf";
import { Logo } from "./Logo";

/**
 * Floating header: a rounded glass bar that lifts off the page once you
 * scroll, with a green→teal reading-progress line along its base. The
 * current page sits in a soft green pill. Below xl the ten links move into
 * a full-screen menu; the CTA stays in the bar rather than being buried.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // Transform only, written directly so scrolling never re-renders React
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return () => {
      document.body.style.overflow = "";
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const raised = scrolled || open;

  return (
    <header className="sticky top-0 z-50 pt-2 sm:pt-3">
      <Container className="relative z-10">
        <div
          className={`relative flex h-16 items-center justify-between gap-3 rounded-full border pl-4 pr-2 transition-[background-color,border-color,box-shadow] duration-(--motion-base) ease-organic sm:pl-5 lg:h-[68px] ${
            raised
              ? "border-line/80 bg-surface/85 shadow-[0_1px_2px_rgb(0_42_73/0.05),0_14px_36px_-18px_rgb(0_42_73/0.28)] backdrop-blur-xl"
              : "border-transparent bg-surface/0"
          }`}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
            {PRIMARY_NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex min-h-10 items-center gap-1.5 rounded-full px-2.5 text-[14px] font-medium tracking-[-0.01em] transition-[background-color,color] duration-(--motion-fast) ease-organic 2xl:px-3.5 ${
                    active ? "bg-green-50 text-green-700" : "text-ink-600 hover:bg-paper-2 hover:text-ink-950"
                  }`}
                >
                  {active && <LeafMark className="size-3 flex-none text-green-600" strokeWidth={9} />}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="group hidden min-h-11 items-center gap-2 rounded-full bg-green-600 px-5 text-[14px] font-semibold text-white shadow-cta transition-[background-color,scale] duration-(--motion-base) ease-organic hover:bg-green-700 active:scale-[0.98] sm:inline-flex"
            >
              Partner With Us
              <ArrowUpRight
                size={15}
                strokeWidth={2.2}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`flex size-11 cursor-pointer items-center justify-center rounded-full border transition-colors duration-(--motion-fast) xl:hidden ${
                open ? "border-ink-950 bg-ink-950 text-white" : "border-line bg-surface text-ink-950 hover:border-green-600 hover:text-green-700"
              }`}
            >
              {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>

          {/* Reading progress, inset to the bar's straight edge */}
          <span aria-hidden="true" className="pointer-events-none absolute inset-x-8 -bottom-px h-0.5 overflow-hidden rounded-full">
            <span
              ref={progressRef}
              className={`block h-full origin-left scale-x-0 bg-linear-to-r from-green-600 to-teal-600 transition-opacity duration-(--motion-base) ${
                scrolled && !open ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="fixed inset-0 z-0 overflow-y-auto overscroll-contain bg-paper xl:hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-[radial-gradient(circle,rgb(146_198_12/0.18),rgb(1_129_141/0.08)_45%,transparent_70%)]"
          />
          <CrescentArc
            className="pointer-events-none absolute -bottom-32 -left-32 w-[420px] opacity-[0.10]"
            strokeWidth={18}
            from="var(--color-green-600)"
            to="var(--color-teal-600)"
          />
          <Container className="relative flex min-h-full flex-col pb-10 pt-28">
            <nav aria-label="Primary mobile" className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10">
              {PRIMARY_NAV.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    style={{ animationDelay: `${Math.min(i, 8) * 35}ms` }}
                    className={`group flex min-h-16 animate-[rise-in_var(--motion-base)_var(--ease-organic)_both] items-center gap-4 border-b border-line font-display text-[24px] font-bold tracking-[-0.02em] sm:text-[26px] ${
                      active ? "text-green-700" : "text-ink-950"
                    }`}
                  >
                    <span className="tnum w-6 flex-none text-[12px] font-semibold text-green-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{item.label}</span>
                    {active ? (
                      <LeafMark className="size-5 text-green-600" strokeWidth={7} />
                    ) : (
                      <ArrowUpRight
                        size={18}
                        strokeWidth={2}
                        aria-hidden="true"
                        className="text-ink-400 transition-[color,translate] duration-(--motion-fast) group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green-600"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto flex flex-col gap-5 pt-10">
              <p className="m-0 font-display text-[20px] font-bold text-ink-950">{SITE.tagline}</p>
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-green-600 px-7 text-[15px] font-semibold text-white shadow-cta"
              >
                Partner With Us
                <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
