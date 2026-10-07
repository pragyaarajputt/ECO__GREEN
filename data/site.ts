import type { NavLink, FooterColumn, Registration } from "@/lib/types";

export const SITE = {
  name: "Eco Green Sustainability Foundation",
  shortName: "Eco Green",
  tagline: "People. Planet. Prosperity.",
  positioning:
    "We partner with businesses, communities and institutions to create measurable social impact and build a more sustainable future.",
  url: "https://ecogreenfoundation.org",
  disciplines: "CSR · Sustainability · Community Development · Environmental Action",
};

/**
 * CONTACT — PLACEHOLDER.
 * No address, phone or email is published until Eco Green supplies real
 * details. A map pin on a fabricated address is worse than no map at all.
 */
export const CONTACT = {
  email: "[email address to be confirmed]",
  phone: "[phone number to be confirmed]",
  location: "[registered office to be confirmed]",
  hasVerifiedLocation: false,
};

export const SOCIALS: NavLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export const PRIMARY_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "CSR", href: "/csr" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Programmes", href: "/programmes" },
  { label: "Impact", href: "/impact" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Projects", href: "/projects" },
  { label: "Reports", href: "/reports" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Explore",
    links: [
      { label: "About Us", href: "/about" },
      { label: "CSR", href: "/csr" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Programmes", href: "/programmes" },
      { label: "Impact", href: "/impact" },
    ],
  },
  {
    heading: "Engage",
    links: [
      { label: "Partnerships", href: "/partnerships" },
      { label: "Projects", href: "/projects" },
      { label: "Insights", href: "/insights" },
      { label: "Reports", href: "/reports" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

/**
 * REGISTRATIONS — LABELS ONLY, NO NUMBERS.
 * The interface is built so real certificate numbers and PDFs drop in.
 * Publishing an invented registration number would be a serious
 * misrepresentation — a CSR committee verifies it before releasing funds.
 */
export const REGISTRATIONS: Registration[] = [
  { label: "Legal entity & registration", note: "Entity type and registration number to be confirmed" },
  { label: "CSR-1 registration", note: "CSR Registration Number to be confirmed, where applicable" },
  { label: "12A / 12AB", note: "Income tax registration to be confirmed, where applicable" },
  { label: "80G exemption", note: "Exemption certificate to be confirmed, where applicable" },
  { label: "NITI Aayog Darpan ID", note: "Darpan identifier to be confirmed" },
  { label: "PAN / TAN", note: "To be confirmed" },
];

export const COPYRIGHT = "© 2026 Eco Green Sustainability Foundation";
