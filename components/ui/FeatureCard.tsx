import type { ComponentType, ReactNode } from "react";
import { LeafMark } from "./Leaf";

type IconType = ComponentType<{ size?: number; strokeWidth?: number; className?: string; "aria-hidden"?: boolean | "true" }>;

/**
 * Premium card for numbered or iconed items (models, framework steps,
 * governance, policies). Lifts on hover, with a faint leaf in the corner.
 * Use inside a Stagger grid so cards in a row stay equal height.
 */
export function FeatureCard({
  number,
  icon: Icon,
  title,
  body,
  tone = "light",
  outlineNumber = false,
  children,
}: {
  number?: string;
  icon?: IconType;
  title: ReactNode;
  body?: ReactNode;
  tone?: "light" | "dark";
  /** Large outlined numeral instead of the small label. */
  outlineNumber?: boolean;
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <article
      className={`card-lift group relative flex h-full flex-col gap-4 overflow-hidden rounded-(--radius-card) border p-7 lg:p-8 ${
        dark
          ? "border-white/10 bg-linear-to-br from-white/[0.07] to-transparent hover:border-green-500"
          : "border-line bg-surface shadow-rest hover:border-green-600/50"
      }`}
    >
      <LeafMark
        className={`card-leaf pointer-events-none absolute -right-5 -top-5 size-20 opacity-[0.10] ${dark ? "text-green-500" : "text-green-600"}`}
        strokeWidth={3}
      />
      {(Icon || number) && (
        <div className="flex items-center gap-3">
          {Icon && (
            <span
              className={`card-icon flex size-11 flex-none items-center justify-center rounded-xl ${
                dark ? "bg-green-500/15 text-green-500" : "bg-green-50 text-green-700"
              }`}
            >
              <Icon size={20} strokeWidth={2} aria-hidden="true" />
            </span>
          )}
          {number &&
            (outlineNumber ? (
              <span
                className={`tnum font-display text-[44px] font-extrabold leading-none tracking-[-0.05em] text-transparent ${
                  dark ? "[-webkit-text-stroke:1.5px_var(--color-green-500)]" : "[-webkit-text-stroke:1.5px_var(--color-green-600)]"
                }`}
              >
                {number}
              </span>
            ) : (
              <span className={`tnum font-display text-[13px] font-bold ${dark ? "text-green-500" : "text-green-600"}`}>{number}</span>
            ))}
        </div>
      )}
      <h3 className={`m-0 font-display text-[18px] font-bold leading-[1.25] tracking-[-0.02em] lg:text-[19px] ${dark ? "text-on-dark" : "text-ink-950"}`}>
        {title}
      </h3>
      {body && <p className={`m-0 text-[15px] leading-[1.6] ${dark ? "text-on-dark-muted" : "text-ink-600"}`}>{body}</p>}
      {children}
    </article>
  );
}
