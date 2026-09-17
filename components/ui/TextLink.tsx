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
      <span className="border-b-2 border-green-600 pb-0.5 transition-colors duration-200 group-hover:border-green-700">
        {children}
      </span>
      <ArrowRight
        size={16}
        strokeWidth={2}
        aria-hidden="true"
        className="text-green-600 transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}
