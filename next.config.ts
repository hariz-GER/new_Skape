import type { NextConfig } from "next";

// Detect production builds (used for GitHub Pages-style subpath hosting).
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Export as static HTML/CSS/JS so the site can be deployed without a Node server.
  output: "export",
  // Generate routes with a trailing slash ("/about/") for static hosting compatibility.
  trailingSlash: true,
  images: {
    // Disable Next.js Image Optimization API (not available with static export).
    unoptimized: true,
  },
  // Serve the app under "/new_Skape" only in production.
  basePath: isProd ? "/new_Skape" : undefined,
  // Prefix asset URLs in production so JS/CSS/images load from the same subpath.
  assetPrefix: isProd ? "/new_Skape/" : undefined,
};

export default nextConfig;
