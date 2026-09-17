import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Programme } from "@/lib/types";

export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <Link
      href={`/programmes/${programme.slug}`}
      className="group flex h-full flex-col gap-5 rounded-(--radius-image) border border-line bg-surface p-4 transition-colors duration-300 hover:border-green-600"
    >
      <div className="overflow-hidden rounded-[18px]">
        <div className="transition-transform duration-500 group-hover:scale-[1.03]">
          <ImagePlaceholder note={programme.imageNote} ratio="landscape" rounded="none" className="border-0" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-3 pb-4">
        <div className="flex items-center gap-3">
          <span className="tnum font-display text-[13px] font-bold text-green-600">{programme.number}</span>
          <span className="rounded-(--radius-chip) bg-green-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-green-700">
            {programme.category}
          </span>
        </div>
        <h3 className="m-0 font-display text-[20px] font-bold leading-[1.2] tracking-[-0.025em] text-ink-950">
          {programme.title}
        </h3>
        <p className="m-0 text-[15px] leading-[1.6] text-ink-600">{programme.summary}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-3 text-[14px] font-semibold text-ink-950">
          <span className="border-b-2 border-green-600 pb-0.5">View programme</span>
          <ArrowUpRight
            size={15}
            strokeWidth={2.2}
            aria-hidden="true"
            className="text-green-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
