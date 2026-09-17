import { Container } from "@/components/ui/Container";
import { PageNumber } from "@/components/ui/PageNumber";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-paper py-24 lg:py-40">
      <Container>
        <div className="flex max-w-[24ch] flex-col gap-8">
          <PageNumber number="404" label="Page not found" />
          <h1 className="m-0 font-display text-[36px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[48px] lg:text-[64px]">
            That page does not exist.
          </h1>
          <p className="m-0 max-w-[46ch] text-[17px] leading-[1.7] text-ink-600 lg:text-[19px]">
            The link may be out of date. Start from our programmes, or get in touch and we will point you to the right
            place.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/programmes" withArrow>
              Our programmes
            </Button>
            <Button href="/contact" variant="outline">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
