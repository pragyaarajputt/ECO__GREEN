import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "dark" | "onDark";

const STYLES: Record<Variant, string> = {
  primary: "bg-green-600 text-white hover:bg-green-700 border border-transparent",
  outline: "bg-transparent text-ink-950 border border-ink-950/20 hover:border-ink-950 hover:bg-ink-950 hover:text-white",
  dark: "bg-ink-950 text-white border border-transparent hover:bg-ink-800",
  onDark: "bg-transparent text-on-dark border border-on-dark/30 hover:border-on-dark hover:bg-on-dark hover:text-ink-950",
};

export function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-13 items-center justify-center gap-2 rounded-(--radius-chip) px-7 text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${STYLES[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowUpRight
          size={17}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
