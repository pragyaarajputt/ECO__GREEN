import { Container } from "@/components/ui/Container";
import { PageNumber } from "@/components/ui/PageNumber";
import { Button } from "@/components/ui/Button";
import { CrescentArc } from "@/components/ui/Crescent";
import { LeafMark } from "@/components/ui/Leaf";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-paper py-section-lg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[600px] rounded-full bg-[radial-gradient(circle,rgb(146_198_12/0.16),rgb(1_129_141/0.08)_45%,transparent_70%)]"
      />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="hero-seq flex flex-col gap-8 lg:col-span-7">
            <PageNumber number="404" label="Page not found" />
            <h1 className="m-0 max-w-[16ch] font-display text-h1 font-bold">
              That page{" "}
              <span className="bg-linear-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">does not exist.</span>
            </h1>
            <p className="m-0 max-w-[46ch] text-lede text-ink-600">
              The link may be out of date. Start from our programmes, or get in touch and we will point you to the right
              place.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/programmes" withArrow size="lg">
                Our programmes
              </Button>
              <Button href="/contact" variant="outline">
                Contact us
              </Button>
            </div>
          </div>
          {/* Decorative: the logo's crescent around a drifting leaf */}
          <div aria-hidden="true" className="relative hidden aspect-square max-w-[420px] lg:col-span-5 lg:block lg:justify-self-end lg:w-full">
            <CrescentArc className="absolute inset-0 size-full opacity-40" strokeWidth={12} from="var(--color-green-600)" to="var(--color-teal-600)" />
            <div className="absolute inset-[28%]">
              <div className="leaf-drift size-full" style={{ animationDuration: "15s" }}>
                <LeafMark className="size-full text-green-600" strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
