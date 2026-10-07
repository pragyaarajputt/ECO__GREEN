import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LeafMark } from "@/components/ui/Leaf";
import type { Programme } from "@/lib/types";

export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <Link
      href={`/programmes/${programme.slug}`}
      className="card-lift group flex h-full flex-col gap-5 rounded-(--radius-image) border border-line/80 bg-surface shadow-rest p-4 hover:border-green-600 focus-visible:border-green-600"
    >
      <div className="overflow-hidden rounded-[18px]">
        <div className="card-zoom">
          <ImagePlaceholder note={programme.imageNote} ratio="landscape" rounded="none" className="border-0" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-3 pb-4">
        <div className="flex items-center gap-3">
          <span className="tnum font-display text-[13px] font-bold text-green-600">{programme.number}</span>
          <span
            className={`rounded-(--radius-chip) px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] ${
              programme.category === "CSR" ? "bg-green-50 text-green-700" : "bg-teal-600/10 text-[#01656E]"
            }`}
          >
            {programme.category}
          </span>
        </div>
        <h3 className="m-0 font-display text-[20px] font-bold leading-[1.2] tracking-[-0.025em] text-ink-950">
          {programme.title}
        </h3>
        <p className="m-0 text-[15px] leading-[1.6] text-ink-600">{programme.summary}</p>
        <span className="mt-auto flex items-center gap-2 pt-3 text-[14px] font-semibold text-ink-950">
          <span className="link-grow">View programme</span>
          <ArrowUpRight
            size={15}
            strokeWidth={2.2}
            aria-hidden="true"
            className="card-icon text-green-600"
          />
          <LeafMark className="card-leaf ml-auto size-5 text-green-600" />
        </span>
      </div>
    </Link>
  );
}
