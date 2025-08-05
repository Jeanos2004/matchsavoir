import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: false,
  },
};

export default nextConfig;
