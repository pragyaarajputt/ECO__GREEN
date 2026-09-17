import type { ReactNode } from "react";
import { PageNumber } from "./PageNumber";
import { Reveal } from "./Reveal";

export function SectionHeading({
  number,
  label,
  title,
  lede,
  tone = "light",
  aside,
}: {
  number: string;
  label: string;
  title: ReactNode;
  lede?: string;
  tone?: "light" | "dark";
  aside?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <Reveal className="mb-12 lg:mb-16">
      <div className="flex flex-col gap-7">
        <PageNumber number={number} label={label} tone={tone} />
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <h2
            className={`m-0 font-display text-[28px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-[36px] lg:col-span-7 lg:text-[46px] ${
              dark ? "text-on-dark" : "text-ink-950"
            }`}
          >
            {title}
          </h2>
          {(lede || aside) && (
            <div className="lg:col-span-5">
              {lede && (
                <p className={`m-0 text-[16px] leading-[1.7] lg:text-[17px] ${dark ? "text-on-dark-muted" : "text-ink-600"}`}>
                  {lede}
                </p>
              )}
              {aside}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
