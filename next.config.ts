import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/new_Skape" : undefined,
  assetPrefix: isProd ? "/new_Skape/" : undefined,
};

export default nextConfig;
