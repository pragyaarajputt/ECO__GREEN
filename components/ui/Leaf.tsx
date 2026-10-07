import type { CSSProperties } from "react";

/** The leaf from the logo, reduced to an outline and a centre vein. */
const LEAF_PATH = "M50 4C79 22 90 58 50 96 10 58 21 22 50 4Z";
const VEIN_PATH = "M50 18V88";

export function LeafMark({ className = "", strokeWidth = 7 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" focusable="false" className={className}>
      <path d={LEAF_PATH} fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d={VEIN_PATH} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

const LEAVES: { className: string; style: CSSProperties }[] = [
  { className: "right-[6%] top-[14%] size-40 rotate-[24deg] text-green-600 opacity-[0.10]", style: { animationDuration: "17s" } },
  { className: "right-[28%] top-[62%] size-20 -rotate-[18deg] text-teal-600 opacity-[0.09]", style: { animationDuration: "13s", animationDelay: "-5s" } },
  { className: "-right-6 bottom-[6%] size-28 rotate-[58deg] text-green-500 opacity-[0.14]", style: { animationDuration: "19s", animationDelay: "-9s" } },
];

/**
 * Background leaves for hero areas: very low opacity, slow sway, purely
 * decorative. Hidden on small screens, where they would crowd the text.
 */
export function LeafDrift() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      {LEAVES.map((leaf, i) => (
        <div key={i} className={`absolute ${leaf.className}`}>
          <div className="leaf-drift size-full" style={leaf.style}>
            <LeafMark className="size-full" strokeWidth={3} />
          </div>
        </div>
      ))}
    </div>
  );
}
