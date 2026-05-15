import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Prevent GSAP from being server-side bundled
  experimental: {
    optimizePackageImports: ["gsap", "lottie-react"],
  },
};
export default config;
