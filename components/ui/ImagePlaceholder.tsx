import { ImageIcon } from "lucide-react";

/**
 * Photography placeholder. States what belongs in the slot, so a
 * placeholder can never be mistaken for evidence of work already done.
 */
export function ImagePlaceholder({
  note,
  ratio = "landscape",
  className = "",
  rounded = "image",
}: {
  note: string;
  ratio?: "landscape" | "portrait" | "square" | "wide" | "fill";
  className?: string;
  rounded?: "image" | "card" | "none";
}) {
  const aspect = {
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    wide: "aspect-[16/9]",
    fill: "h-full",
  }[ratio];

  const radius =
    rounded === "image" ? "rounded-(--radius-image)" : rounded === "card" ? "rounded-(--radius-card)" : "";

  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${note}`}
      className={`relative flex ${aspect} w-full items-end overflow-hidden border border-line bg-paper-2 ${radius} ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent,transparent_14px,rgba(15,163,75,0.05)_14px,rgba(15,163,75,0.05)_28px)]"
      />
      <div className="relative flex w-full items-start gap-3 p-5 sm:p-6">
        <ImageIcon size={18} strokeWidth={1.5} className="mt-0.5 flex-none text-green-600" aria-hidden="true" />
        <span className="text-[12px] leading-[1.5] text-ink-400 sm:text-[13px]">{note}</span>
      </div>
    </div>
  );
}
