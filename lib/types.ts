export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

/** Impact figures are placeholders until Eco Green supplies verified data. */
export interface ImpactMetric {
  id: string;
  label: string;
  value: number | null;
  suffix?: string;
  group: "social" | "environmental" | "both";
}

export interface Pillar {
  number: string;
  title: string;
  body: string;
  imageNote: string;
}

export interface FocusArea {
  number: string;
  slug: string;
  title: string;
  summary: string;
  items: string[];
  imageNote: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface Programme {
  slug: string;
  number: string;
  category: "CSR" | "Sustainability";
  title: string;
  summary: string;
  imageNote: string;
  challenge: string;
  approach: string;
  interventions: string[];
  beneficiaries: string[];
  outcomes: string[];
  indicators: string[];
}

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  sector: "CSR" | "Sustainability";
  location: string;
  duration: string;
  partner: string;
  imageNote: string;
}

export interface Sdg {
  number: number;
  title: string;
  relevance: string;
}

export interface PolicyItem {
  title: string;
  summary: string;
}

export interface ReportItem {
  year: string;
  title: string;
  type: "Annual report" | "Financial statement" | "Utilisation report" | "Impact assessment";
}

export interface Registration {
  label: string;
  note: string;
}

export interface Insight {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  excerpt: string;
  body: string[];
  imageNote: string;
}

export interface PartnershipModel {
  number: string;
  title: string;
  body: string;
}
