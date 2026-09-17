/**
 * Editorial section marker: green two-digit number, hairline, section name.
 * Opens every major section, so the site reads as one numbered document
 * rather than a stack of unrelated blocks.
 */
export function PageNumber({
  number,
  label,
  total,
  tone = "light",
}: {
  number: string;
  label?: string;
  total?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-wrap items-center gap-4">
      <span
        className={`tnum font-display text-[13px] font-bold tracking-[0.02em] ${dark ? "text-green-500" : "text-green-600"}`}
      >
        {number}
        {total && <span className={dark ? "text-on-dark-muted" : "text-ink-400"}>{` / ${total}`}</span>}
      </span>
      <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-on-dark-muted/40" : "bg-line"}`} />
      {label && (
        <span
          className={`text-[12px] font-semibold uppercase tracking-[0.14em] ${dark ? "text-on-dark-muted" : "text-ink-400"}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
