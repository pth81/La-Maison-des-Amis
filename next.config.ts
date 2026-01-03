import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    output: "export",

    // Trailing slashes to match current URL structure
    trailingSlash: true,

    // Image optimization disabled for static export
    images: {
        unoptimized: true,
    },

    // Set workspace root to this directory to silence lockfile warning
    outputFileTracingRoot: path.join(__dirname, "./"),
};

export default nextConfig;
