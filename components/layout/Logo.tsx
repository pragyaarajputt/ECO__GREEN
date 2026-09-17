import Link from "next/link";
import { SITE } from "@/data/site";

/** Geometric leaf mark in a rounded square — holds at 36px in the header. */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <Link href="/" className="flex min-h-11 items-center gap-3" aria-label={`${SITE.name} — home`}>
      <span className="flex size-9 flex-none items-center justify-center rounded-[11px] bg-green-600">
        <svg width="19" height="19" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M17 3C9 3 4 6.5 4 12a6 6 0 0 0 1.2 3.6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17 3c0 8-4.4 12-9.4 12.6L4.5 17" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[16px] font-extrabold tracking-[-0.03em] sm:text-[17px] ${dark ? "text-on-dark" : "text-ink-950"}`}
        >
          Eco Green
        </span>
        <span
          className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] ${dark ? "text-on-dark-muted" : "text-ink-400"}`}
        >
          Foundation
        </span>
      </span>
    </Link>
  );
}
