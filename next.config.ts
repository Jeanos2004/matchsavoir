import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: false,
  },
  // Désactive l'optimisation CSS pour le débogage
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
