import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Your existing real images
      },
      {
        protocol: "https",
        hostname: "**", // Temporarily allows all other secure images
      },
      {
        protocol: "http",
        hostname: "**", // Allows the AI-generated placeholder images
      },
    ],
  },
};

export default nextConfig;
