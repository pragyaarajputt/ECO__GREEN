import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LeafMark } from "@/components/ui/Leaf";
import type { CaseStudy } from "@/lib/types";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const facts = [
    { label: "Location", value: study.location },
    { label: "Duration", value: study.duration },
    { label: "Partner", value: study.partner },
    { label: "Sector", value: study.sector },
  ];

  return (
    <Link
      href={`/projects/${study.slug}`}
      className="card-lift group flex h-full flex-col rounded-(--radius-image) border border-line/80 bg-surface shadow-rest hover:border-green-600 focus-visible:border-green-600"
    >
      <div className="overflow-hidden rounded-t-[27px]">
        <div className="card-zoom">
          <ImagePlaceholder note={study.imageNote} ratio="wide" rounded="none" className="border-0" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 lg:p-7">
        <span className="tnum font-display text-[13px] font-bold text-green-600">{study.number}</span>
        <h3 className="m-0 font-display text-[21px] font-bold leading-[1.18] tracking-[-0.025em] text-ink-950">
          {study.title}
        </h3>
        <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-4">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col gap-1">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">{f.label}</dt>
              <dd className="m-0 text-[14px] font-medium text-ink-800">{f.value}</dd>
            </div>
          ))}
        </dl>
        <span className="mt-auto flex items-center gap-2 pt-3 text-[14px] font-semibold text-ink-950">
          <span className="link-grow">View case study</span>
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
