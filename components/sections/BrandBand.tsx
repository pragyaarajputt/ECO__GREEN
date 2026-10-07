import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { CrescentArc } from "@/components/ui/Crescent";

/**
 * Dark section in navy or deep leaf green, with the logo's crescent
 * faintly behind the content. Used to break the rhythm of light sections.
 */
export function BrandBand({
  id,
  tone = "navy",
  children,
}: {
  id?: string;
  tone?: "navy" | "green";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`on-dark relative scroll-mt-24 overflow-hidden py-section-lg text-on-dark ${tone === "green" ? "bg-green-900" : "bg-ink-950"}`}
    >
      <CrescentArc
        className="pointer-events-none absolute -right-40 -top-24 w-[560px] opacity-[0.10] max-md:hidden"
        strokeWidth={20}
        from="var(--color-green-500)"
        to="var(--color-teal-500)"
      />
      <Container className="relative">{children}</Container>
    </section>
  );
}
