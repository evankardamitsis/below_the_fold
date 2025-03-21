import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "videos.ctfassets.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Ensure proper routing
  trailingSlash: false,
  skipMiddlewareUrlNormalize: true,
  // Configure external packages
  serverExternalPackages: [],
};

export default nextConfig;
