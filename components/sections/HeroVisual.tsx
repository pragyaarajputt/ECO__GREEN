import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CrescentArc } from "@/components/ui/Crescent";
import { LeafMark } from "@/components/ui/Leaf";

/**
 * Home hero composition built from the logo: a navy crescent embraces a
 * leaf-shaped main photograph, a leaf-shaped tile rises beside it and a
 * round tile echoes the figure's head. A small card carries one real fact.
 */
export function HeroVisual({ programmeCount }: { programmeCount: number }) {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="relative aspect-[10/11] w-full">
        <CrescentArc className="absolute -left-[6%] top-[2%] w-[96%]" strokeWidth={16} />

        <div className="absolute left-[10%] top-[11%] w-[60%]">
          <ImagePlaceholder note="Hero — community programme in the field" ratio="portrait" rounded="leaf" className="shadow-rest" />
        </div>

        <div className="absolute right-0 top-[4%] w-[34%]">
          <ImagePlaceholder note="Environmental restoration" ratio="square" rounded="leaf-alt" className="shadow-rest" />
        </div>

        <div className="absolute bottom-[10%] right-[3%] w-[33%]">
          <ImagePlaceholder note="Education programme" ratio="square" rounded="none" className="rounded-full shadow-rest" />
        </div>
      </div>

      {/* Beside the photographs from sm up; below them on phones so it never covers a caption */}
      <div className="mt-4 flex w-fit items-center gap-3 sm:absolute sm:bottom-[1%] sm:left-0 sm:mt-0 sm:max-w-[64%] rounded-2xl border border-line/80 bg-surface/95 p-3 pr-5 shadow-card backdrop-blur sm:p-4 sm:pr-6">
        <span className="flex size-10 flex-none items-center justify-center rounded-full bg-green-50 sm:size-12">
          <LeafMark className="size-5 text-green-600 sm:size-6" />
        </span>
        <span className="flex flex-col">
          <span className="font-display text-[15px] font-extrabold leading-tight text-ink-950 sm:text-[17px]">
            {programmeCount} programmes
          </span>
          <span className="text-[12px] leading-snug text-ink-600 sm:text-[13px]">across CSR and sustainability</span>
        </span>
      </div>
    </div>
  );
}
