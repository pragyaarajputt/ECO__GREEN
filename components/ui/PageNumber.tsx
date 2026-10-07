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
      <span
        aria-hidden="true"
        className={`grow-line h-0.5 w-10 rounded-full bg-linear-to-r ${dark ? "from-green-500 to-teal-500" : "from-green-600 to-teal-600"}`}
      />
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
