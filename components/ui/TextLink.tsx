import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function TextLink({
  href,
  children,
  tone = "light",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center gap-2.5 text-[15px] font-semibold tracking-[-0.01em] ${
        tone === "dark" ? "text-on-dark" : "text-ink-950"
      } ${className}`}
    >
      <span className="link-grow">{children}</span>
      <ArrowRight
        size={16}
        strokeWidth={2}
        aria-hidden="true"
        className={`transition-transform duration-300 ease-organic group-hover:translate-x-1 group-focus-visible:translate-x-1 ${tone === "dark" ? "text-green-500" : "text-green-600"}`}
      />
    </Link>
  );
}
