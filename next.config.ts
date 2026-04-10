import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/new_Skape",
  assetPrefix: "/new_Skape/",
};

export default nextConfig;