import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const languages = {
        ...Object.fromEntries(locales.map((l) => [l, absoluteUrl(`/${l}`)])),
        "x-default": absoluteUrl(`/${defaultLocale}`),
    };

    return locales.map((lang) => ({
        url: absoluteUrl(`/${lang}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: lang === defaultLocale ? 1 : 0.9,
        alternates: { languages },
    }));
}
