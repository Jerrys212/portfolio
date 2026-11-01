import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getGlobal } from "@/data/global/get-global";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { env } from "@/lib/env";
import { ogLocales, resolveSeo } from "@/lib/seo";
import { palette } from "@/lib/theme";
import "../globals.css";

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: palette.background,
  colorScheme: "dark",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const global = await getGlobal(lang);
  const { seo } = getDictionary(lang);
  const { title, description } = resolveSeo(global, seo);

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
    title,
    description,
    keywords: [global.fullName, global.role, ...seo.keywords],
    authors: [{ name: global.fullName, url: global.linkedinUrl }],
    creator: global.fullName,
    publisher: global.fullName,
    applicationName: global.fullName,
    category: "technology",
    formatDetection: { telephone: false, address: false, email: false },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}`])),
        "x-default": `/${defaultLocale}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${lang}`,
      type: "profile",
      siteName: global.fullName,
      locale: ogLocales[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocales[l]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(env.GOOGLE_SITE_VERIFICATION && {
      verification: { google: env.GOOGLE_SITE_VERIFICATION },
    }),
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang}>
      <head>
        <link
          rel="preload"
          href="/fonts/montserrat-latin-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background sm:px-28 lg:px-20 px-9">{children}</body>
    </html>
  );
}
