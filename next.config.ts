import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true, // Optimisation CSS pour la production
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Supprime les console.log en prod
  },
  // Optimisation des images et assets
  images: {
    domains: [],
    unoptimized: false,
  },
};

export default nextConfig;
