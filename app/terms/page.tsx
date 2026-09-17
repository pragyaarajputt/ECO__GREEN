import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms governing this website.",
  description: "Terms governing this website.",
};

const SECTIONS = [
        {
                "heading": "About this site",
                "body": [
                        "This website is operated by Eco Green Sustainability Foundation. Entity and registration details are published on the transparency page as they are confirmed."
                ]
        },
        {
                "heading": "Accuracy of content",
                "body": [
                        "Impact figures shown as XX+ are placeholders. No figure is published until it has been verified, and each will carry its definition and basis of calculation.",
                        "Content on this site is provided for information. It is not legal, financial or tax advice, and should not be relied on as a substitute for advice from your own advisers on your CSR obligations."
                ]
        },
        {
                "heading": "Use of our material",
                "body": [
                        "Our published material may be used and adapted with attribution. Our name, logo and photography may not be used without written permission."
                ]
        },
        {
                "heading": "Links to other sites",
                "body": [
                        "Where we link to external sites, we do not control their content and are not responsible for it."
                ]
        }
];

export default function Page() {
  return (
    <LegalPage
      number="—"
      label="Terms"
      title="Terms governing this website."
      updated="Last reviewed September 2026"
      imageNote="Terms \u2014 website use"
      sections={SECTIONS}
    />
  );
}
