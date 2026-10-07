import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";

/**
 * The Human & Leaf mark beside a type lockup that mirrors the logo artwork:
 * navy "ECO", green "GREEN", spaced "FOUNDATION". On dark surfaces the mark
 * sits on a white disc, because the navy crescent would vanish on navy.
 */
export function Logo({ tone = "light", size = "md" }: { tone?: "light" | "dark"; size?: "md" | "lg" }) {
  const dark = tone === "dark";
  const markPx = size === "lg" ? 52 : 44;
  return (
    <Link href="/" className="group flex min-h-11 items-center gap-3" aria-label={`${SITE.name} — home`}>
      <span
        className={`flex flex-none items-center justify-center rounded-full transition-transform duration-600 ease-organic group-hover:-rotate-6 group-hover:scale-105 group-focus-visible:-rotate-6 ${
          dark ? "bg-white p-1.5" : ""
        }`}
      >
        <Image
          src="/brand/eco-green-mark.png"
          alt=""
          width={markPx}
          height={markPx}
          priority={!dark}
          style={{ width: markPx, height: markPx }}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-[0.01em] ${size === "lg" ? "text-[21px]" : "text-[17px] sm:text-[18px]"}`}
        >
          <span className={dark ? "text-on-dark" : "text-ink-950"}>ECO</span>{" "}
          <span className={dark ? "text-green-500" : "text-green-600"}>GREEN</span>
        </span>
        <span
          className={`mt-1.5 text-[9px] font-semibold uppercase tracking-[0.42em] ${dark ? "text-on-dark-muted" : "text-green-700"}`}
        >
          Foundation
        </span>
      </span>
    </Link>
  );
}
