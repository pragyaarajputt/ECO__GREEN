import type { ReactNode } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";

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
      <Reveal className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
        <ImagePlaceholder note={imageNote} ratio={ratio} />
      </Reveal>
      <Reveal delay={100} className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
        {children}
      </Reveal>
    </div>
  );
}
