import type { NextConfig } from "next";

// GitHub Pages serves a project site from /<repo-name>/. The deploy workflow
// sets PAGES_BASE_PATH (e.g. "/kindroot"); locally it is empty.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // GitHub Pages is static hosting: no image optimisation server.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // cacheComponents / partialPrefetching (PPR) are not supported with
  // `output: "export"`, and this single static page does not need them.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
