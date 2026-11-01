import type { NextConfig } from "next";

const strapiUrl = new URL(process.env.STRAPI_URL ?? "http://localhost:1337");
const isLocalStrapi = ["localhost", "127.0.0.1"].includes(strapiUrl.hostname);

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("/uploads/**", strapiUrl)],
        formats: ["image/avif", "image/webp"],
        qualities: [75],
        dangerouslyAllowLocalIP: isLocalStrapi,
    },
    experimental: {
        inlineCss: true,
    },
};

export default nextConfig;
