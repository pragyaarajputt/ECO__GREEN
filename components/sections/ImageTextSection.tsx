import type { ReactNode } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal, STAGGER_MS } from "@/components/ui/Reveal";

/** Editorial split — 5/7 asymmetric, image on either side. */
export function ImageTextSection({
  imageNote,
  flip = false,
  children,
  ratio = "portrait",
}: {
  imageNote: string;
  flip?: boolean;
  children: ReactNode;
  ratio?: "portrait" | "landscape" | "square";
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
      {/* Text leads when stacked; the image follows at a shorter landscape ratio. */}
      <Reveal className={`order-2 lg:col-span-5 ${flip ? "lg:order-2" : "lg:order-1"}`}>
        <ImagePlaceholder note={imageNote} ratio={ratio} className="max-lg:aspect-[4/3]" />
      </Reveal>
      <Reveal delay={STAGGER_MS} className={`order-1 lg:col-span-7 ${flip ? "lg:order-1" : "lg:order-2"}`}>
        {children}
      </Reveal>
    </div>
  );
}
