import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "dark" | "onDark";

const STYLES: Record<Variant, string> = {
  primary: "bg-green-600 text-white shadow-cta hover:bg-green-700 border border-transparent",
  outline: "bg-transparent text-ink-950 border border-ink-950/20 hover:border-ink-950 hover:bg-ink-950 hover:text-white",
  dark: "bg-ink-950 text-white border border-transparent hover:bg-ink-800 hover:shadow-(--shadow-card)",
  onDark: "bg-transparent text-on-dark border border-on-dark/30 hover:border-on-dark hover:bg-on-dark hover:text-ink-950",
};

export function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  /** lg is reserved for the one primary action of a hero */
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-(--radius-chip) font-semibold ${size === "lg" ? "min-h-14 px-8 text-[16px]" : "min-h-13 px-7 text-[15px]"} tracking-[-0.01em] transition-[color,background-color,border-color,box-shadow,translate,scale] duration-300 ease-organic hover:-translate-y-px active:translate-y-0 active:scale-[0.98] active:duration-150 ${STYLES[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowUpRight
          size={17}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-300 ease-organic group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
