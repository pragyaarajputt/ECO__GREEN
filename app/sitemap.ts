import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { PROGRAMMES, CASE_STUDIES, INSIGHTS } from "@/data/programmes";

const STATIC_ROUTES = [
  "", "/about", "/csr", "/sustainability", "/programmes", "/impact",
  "/partnerships", "/projects", "/reports", "/insights", "/contact",
  "/privacy", "/terms", "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...PROGRAMMES.map((p) => ({
      url: `${SITE.url}/programmes/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...CASE_STUDIES.map((s) => ({
      url: `${SITE.url}/projects/${s.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...INSIGHTS.map((r) => ({
      url: `${SITE.url}/insights/${r.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
