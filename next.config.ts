import type { NextConfig } from "next";

const strapiUrl = process.env.STRAPI_URL ?? "http://localhost:1337";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL(`${strapiUrl}/uploads/**`)],
        dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
    },
};

export default nextConfig;
