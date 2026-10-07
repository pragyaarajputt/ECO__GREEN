import { Section } from "@/components/ui/Section";
import { PageHero } from "./PageHero";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Legal pages: readable column with a sticky contents list beside it on
 * wide screens, so long policies are easy to scan and link into.
 */
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
      <PageHero variant="organic" number={number} label={label} title={title} lede={updated} imageNote={imageNote} total="—" />
      <Section tone="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <nav aria-label="On this page" className="lg:col-span-4">
            <div className="rounded-(--radius-card) border border-line bg-paper p-6 lg:sticky lg:top-28">
              <span className="text-eyebrow font-semibold uppercase text-ink-400">On this page</span>
              <ol className="m-0 mt-4 flex list-none flex-col gap-1 p-0">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#${slugify(s.heading)}`}
                      className="flex min-h-10 items-center gap-3 rounded-lg px-2 text-[15px] text-ink-600 transition-colors duration-(--motion-fast) hover:bg-green-50 hover:text-green-700"
                    >
                      <span className="tnum w-5 flex-none font-display text-[12px] font-bold text-green-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <div className="flex max-w-[68ch] flex-col gap-12 lg:col-span-8">
            {sections.map((s, i) => (
              <div key={s.heading} id={slugify(s.heading)} className="flex scroll-mt-28 flex-col gap-4">
                <h2 className="m-0 flex items-baseline gap-4 font-display text-[22px] font-bold leading-[1.2] tracking-[-0.025em] text-ink-950 lg:text-[24px]">
                  <span className="tnum font-display text-[14px] font-bold text-green-600">{String(i + 1).padStart(2, "0")}</span>
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
        </div>
      </Section>
    </>
  );
}
