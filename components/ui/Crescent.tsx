/**
 * The logo's crescent as an open arc: the Foundation's embrace. Purely
 * decorative; size and position come from the caller.
 */
export function CrescentArc({
  className = "",
  strokeWidth = 18,
  from = "var(--color-ink-950)",
  to = "var(--color-teal-600)",
}: {
  className?: string;
  strokeWidth?: number;
  from?: string;
  to?: string;
}) {
  const id = `crescent-${strokeWidth}-${from.length}-${to.length}`;
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <path d="M318 62A178 178 0 1 0 352 300" stroke={`url(#${id})`} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}
