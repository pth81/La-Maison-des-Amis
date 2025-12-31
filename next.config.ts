import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",

    // Trailing slashes to match current URL structure
    trailingSlash: true,

    // Image optimization disabled for static export
    images: {
        unoptimized: true,
    },

    // Redirects will be handled by vercel.json for static export
};

export default nextConfig;
