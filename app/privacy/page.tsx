import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "How we handle your data.",
  description: "How we handle your data.",
};

const SECTIONS = [
        {
                "heading": "What we collect",
                "body": [
                        "When you submit an enquiry we collect your name, email address, and whatever else you choose to tell us — typically your organisation, designation, phone number, location and the detail of your enquiry.",
                        "We collect analytics data about how the site is used, but only after you consent. No analytics or marketing script runs before consent is given."
                ]
        },
        {
                "heading": "Why we collect it",
                "body": [
                        "To respond to your enquiry, and to maintain a record of the conversation if it becomes a partnership.",
                        "To send occasional updates, but only where you have explicitly asked for them."
                ]
        },
        {
                "heading": "What we do not do",
                "body": [
                        "We do not sell your data, share it with third parties for their own marketing, or add you to a mailing list because you submitted an unrelated enquiry."
                ]
        },
        {
                "heading": "How long we keep it",
                "body": [
                        "Enquiry records are retained for three years from the last contact, then deleted. Partnership records are retained in line with statutory record-keeping requirements."
                ]
        },
        {
                "heading": "Your rights",
                "body": [
                        "You can ask us what data we hold about you, ask us to correct it, or ask us to delete it. Use the contact form and we will respond within 30 days.",
                        "This policy is designed to meet the requirements of the Digital Personal Data Protection Act 2023."
                ]
        }
];

export default function Page() {
  return (
    <LegalPage
      number="—"
      label="Privacy"
      title="How we handle your data."
      updated="Last reviewed September 2026"
      imageNote="Privacy \u2014 data handling and records"
      sections={SECTIONS}
    />
  );
}
