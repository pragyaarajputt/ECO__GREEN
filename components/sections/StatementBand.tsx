import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CrescentArc } from "@/components/ui/Crescent";
import { LeafMark } from "@/components/ui/Leaf";

/**
 * Airy pause between dense sections: one large line, nothing else to
 * compete with it. Soft green tint, crescent and leaf from the logo.
 */
export function StatementBand({ eyebrow, children, note }: { eyebrow: string; children: ReactNode; note?: string }) {
  return (
    <section className="relative overflow-hidden bg-green-50 py-section">
      <CrescentArc
        className="pointer-events-none absolute -right-24 top-1/2 w-[520px] -translate-y-1/2 opacity-[0.12] max-md:hidden"
        strokeWidth={22}
        from="var(--color-green-600)"
        to="var(--color-teal-600)"
      />
      <Container className="relative">
        <Reveal className="flex flex-col gap-6">
          <span className="flex items-center gap-3 text-eyebrow font-semibold uppercase text-green-700">
            <LeafMark className="size-5 text-green-600" />
            {eyebrow}
          </span>
          <p className="m-0 max-w-[17ch] font-display text-h1 font-bold text-ink-950">{children}</p>
          {note && <span className="text-[14px] text-ink-600">{note}</span>}
        </Reveal>
      </Container>
    </section>
  );
}
