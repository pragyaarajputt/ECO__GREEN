import { Camera } from "lucide-react";
import { LeafMark } from "./Leaf";

/**
 * Photography placeholder. Art-directed in the brand palette so a page
 * reads as finished while it waits for real photography, yet a caption
 * always says what belongs here, so a slot is never mistaken for
 * evidence of work already done.
 */
export function ImagePlaceholder({
  note,
  ratio = "landscape",
  className = "",
  rounded = "image",
  tone = "light",
}: {
  note: string;
  ratio?: "landscape" | "portrait" | "square" | "wide" | "fill";
  className?: string;
  rounded?: "image" | "card" | "none" | "leaf" | "leaf-alt";
  tone?: "light" | "dark";
}) {
  const aspect = {
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    wide: "aspect-[16/9]",
    fill: "h-full",
  }[ratio];

  const radius = {
    image: "rounded-(--radius-image)",
    card: "rounded-(--radius-card)",
    none: "",
    leaf: "shape-leaf",
    "leaf-alt": "shape-leaf-alt",
  }[rounded];

  const dark = tone === "dark";

  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${note}`}
      className={`@container relative flex ${aspect} w-full items-end overflow-hidden ${radius} ${
        dark
          ? "bg-[radial-gradient(120%_90%_at_20%_10%,rgb(146_198_12/0.22),transparent_60%),linear-gradient(160deg,var(--color-ink-800),var(--color-green-900))]"
          : "bg-[radial-gradient(110%_80%_at_85%_10%,rgb(146_198_12/0.28),transparent_55%),radial-gradient(90%_70%_at_0%_100%,rgb(1_129_141/0.16),transparent_60%),linear-gradient(160deg,var(--color-green-50),var(--color-paper-2))]"
      } ${className}`}
    >
      {/* Logo motif: crescent arc and leaf, very faint */}
      <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute -right-[12%] -top-[14%] w-[78%] opacity-60" fill="none">
        <path
          d="M150 30a85 85 0 1 0 20 118"
          stroke={dark ? "rgb(146 198 12 / 0.22)" : "rgb(0 42 73 / 0.07)"}
          strokeWidth="14"
          strokeLinecap="round"
        />
      </svg>
      <LeafMark
        className={`absolute bottom-[18%] right-[14%] w-[28%] rotate-[24deg] ${dark ? "text-green-500/40" : "text-green-600/25"}`}
        strokeWidth={3}
      />
      {/* Leaf frames curve away at one bottom corner; keep the caption clear of it. */}
      <div
        className={`relative flex w-full min-w-0 p-4 sm:p-5 @max-[160px]:p-2.5 @max-[130px]:p-1.5 ${rounded === "leaf" ? "pr-[14%] sm:pr-[24%] @max-[160px]:pr-2.5" : rounded === "leaf-alt" ? "pl-[12%] sm:pl-[20%] @max-[160px]:pl-2.5 @max-[130px]:pl-1.5" : ""}`}
      >
        <span
          className={`inline-flex min-w-0 max-w-full items-start gap-2 rounded-2xl px-3 py-2 text-[12px] leading-[1.45] backdrop-blur-sm sm:text-[13px] @max-[160px]:px-2 @max-[160px]:text-[11px] @max-[130px]:px-1.5 @max-[130px]:text-[10px] ${
            dark ? "bg-ink-950/45 text-on-dark" : "bg-white/75 text-ink-600"
          }`}
        >
          <Camera
            size={14}
            strokeWidth={1.8}
            aria-hidden="true"
            className={`mt-[3px] flex-none @max-[160px]:hidden ${dark ? "text-green-500" : "text-green-600"}`}
          />
          <span className="min-w-0 break-words">{note}</span>
        </span>
      </div>
    </div>
  );
}
