import { Section } from "@/components/ui/Section";
import { PageHero } from "./PageHero";

export function LegalPage({
  number,
  label,
  title,
  updated,
  imageNote,
  sections,
}: {
  number: string;
  label: string;
  title: string;
  updated: string;
  imageNote: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHero number={number} label={label} title={title} lede={updated} imageNote={imageNote} total="—" />
      <Section tone="paper">
        <div className="flex max-w-[68ch] flex-col gap-12">
          {sections.map((s) => (
            <div key={s.heading} className="flex flex-col gap-4">
              <h2 className="m-0 font-display text-[22px] font-bold leading-[1.2] tracking-[-0.025em] text-ink-950 lg:text-[24px]">
                {s.heading}
              </h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 40)} className="m-0 text-[17px] leading-[1.75] text-ink-600">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
