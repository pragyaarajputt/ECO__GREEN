import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    // Previous route names, preserved so existing links keep working.
    return [
      { source: "/csr-focus", destination: "/csr", permanent: true },
      { source: "/sustainability-focus", destination: "/sustainability", permanent: true },
      { source: "/corporate-csr-partnerships", destination: "/partnerships", permanent: true },
      { source: "/transparency", destination: "/reports", permanent: true },
      { source: "/knowledge", destination: "/insights", permanent: true },
      { source: "/knowledge/:slug", destination: "/insights/:slug", permanent: true },
      { source: "/team-governance", destination: "/reports", permanent: true },
      { source: "/get-involved", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
