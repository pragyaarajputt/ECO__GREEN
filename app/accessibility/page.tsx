import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "This site should work for everyone.",
  description: "This site should work for everyone.",
};

const SECTIONS = [
        {
                "heading": "Our target",
                "body": [
                        "This website is built to meet WCAG 2.2 Level AA — covering colour contrast, keyboard operation, screen reader compatibility, text resizing to 200%, and respecting reduced-motion preferences."
                ]
        },
        {
                "heading": "What we have done",
                "body": [
                        "Every interactive element is reachable and operable by keyboard, with a visible focus indicator. Navigation can be skipped with a link at the top of every page.",
                        "Scroll animations and number counters are disabled entirely when the operating system requests reduced motion.",
                        "We do not use auto-rotating carousels, auto-playing media, or content that depends on hover."
                ]
        },
        {
                "heading": "Known limitations",
                "body": [
                        "Photography is currently represented by labelled placeholders. Real images will carry descriptive alternative text when supplied.",
                        "Downloadable documents will be checked for screen reader tagging before publication."
                ]
        },
        {
                "heading": "Reporting a problem",
                "body": [
                        "If something on this site is difficult to use, tell us through the contact form and we will fix it."
                ]
        }
];

export default function Page() {
  return (
    <LegalPage
      number="—"
      label="Accessibility"
      title="This site should work for everyone."
      updated="Last reviewed September 2026"
      imageNote="Accessibility — inclusive design"
      sections={SECTIONS}
    />
  );
}
