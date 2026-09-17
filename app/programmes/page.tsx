import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ProgrammeCard } from "@/components/sections/ProgrammeCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { PROGRAMMES } from "@/data/programmes";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "Eleven CSR and sustainability programmes — education, healthcare, women's progress, youth, livelihoods, rural development, green communities, water, waste, climate and restoration.",
};

export default function ProgrammesPage() {
  const csr = PROGRAMMES.filter((p) => p.category === "CSR");
  const sustainability = PROGRAMMES.filter((p) => p.category === "Sustainability");

  return (
    <>
      <PageHero
        number="05"
        label="Our programmes"
        title={<>From ideas to action.<br />From action to impact.</>}
        lede="These are our actual programmes, not service categories. Each has a defined challenge, approach, intervention set, beneficiary group, expected outcomes and impact indicators."
        imageNote="Programmes — delivery underway at a community site"
        actions={<Button href="/partnerships" withArrow>Fund a programme</Button>}
      />

      <Section tone="paper">
        <SectionHeading
          number="A"
          label="CSR programmes"
          title="Six programmes creating social impact."
          lede="Education, healthcare, women's empowerment, youth development, livelihoods and rural community development."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {csr.map((p) => (
            <ProgrammeCard key={p.slug} programme={p} />
          ))}
        </div>
      </Section>

      <Section tone="paper2">
        <SectionHeading
          number="B"
          label="Sustainability programmes"
          title="Five programmes building environmental resilience."
          lede="Green communities, water security, waste and circularity, climate resilience and ecosystem restoration."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sustainability.map((p) => (
            <ProgrammeCard key={p.slug} programme={p} />
          ))}
        </div>
      </Section>

      <CtaSection
        title="Support a programme, or design one with us."
        body="Most partnerships begin with an existing programme in a new geography. Some begin with a need we have not addressed yet."
        secondaryHref="/impact"
        secondaryLabel="How we measure impact"
      />
    </>
  );
}
