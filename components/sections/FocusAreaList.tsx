import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { FocusArea } from "@/lib/types";

/**
 * Focus areas as alternating editorial rows rather than a card grid, so
 * seven areas do not read as seven identical boxes.
 */
export function FocusAreaList({ areas, shaped = false }: { areas: FocusArea[]; /** Redesigned rows: leaf-shaped images, outlined numerals. */ shaped?: boolean }) {
  return (
    <div className="flex flex-col">
      {areas.map((area, i) => {
        const flip = i % 2 === 1;
        return (
          <Reveal as="article" key={area.slug} id={area.slug} className={`scroll-mt-28 border-t border-line py-10 lg:py-16 ${shaped ? "first:border-t-0 first:pt-0" : ""}`}>
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
              <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                <div className="flex flex-col gap-5">
                  <div className={`flex gap-4 sm:gap-5 ${shaped ? "items-center" : "items-baseline"}`}>
                    {shaped ? (
                      <span className="tnum font-display text-[40px] font-extrabold leading-none tracking-[-0.05em] text-transparent [-webkit-text-stroke:1.5px_var(--color-green-600)] lg:text-[52px]">
                        {area.number}
                      </span>
                    ) : (
                      <span className="tnum font-display text-[15px] font-bold text-green-600">{area.number}</span>
                    )}
                    <h3 className="m-0 font-display text-[24px] font-bold leading-[1.15] tracking-[-0.025em] text-ink-950 sm:text-[28px] lg:text-[34px]">
                      {area.title}
                    </h3>
                  </div>
                  <p className="m-0 max-w-[54ch] text-[16px] leading-[1.7] text-ink-600 lg:text-[17px]">
                    {area.summary}
                  </p>
                  <ul className="m-0 mt-1 grid list-none grid-cols-1 gap-x-8 gap-y-2.5 p-0 sm:grid-cols-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.55] text-ink-800">
                        <span aria-hidden="true" className="mt-[9px] size-1.5 flex-none rounded-full bg-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                <ImagePlaceholder
                  note={area.imageNote}
                  ratio="landscape"
                  rounded={shaped ? (flip ? "leaf-alt" : "leaf") : "image"}
                  className="max-lg:aspect-[16/9]"
                />
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/** Quick links to each area, so a reader can jump straight to their priority. */
export function FocusAreaNav({ areas, label }: { areas: FocusArea[]; label: string }) {
  return (
    <Reveal as="nav" aria-label={label} className="mb-12 lg:mb-16">
      <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
        {areas.map((area) => (
          <li key={area.slug}>
            <a
              href={`#${area.slug}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-paper px-4 text-[14px] font-medium text-ink-800 transition-[background-color,border-color,color,translate] duration-(--motion-fast) ease-organic hover:-translate-y-0.5 hover:border-green-600 hover:bg-green-50 hover:text-green-700"
            >
              <span className="tnum font-display text-[12px] font-bold text-green-600">{area.number}</span>
              {area.title}
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
