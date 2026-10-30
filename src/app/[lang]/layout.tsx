import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGlobal } from "@/data/global/get-global";
import { isLocale, locales } from "@/i18n/config";
import { env } from "@/lib/env";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const global = await getGlobal(lang);
  const title = global.seo?.metaTitle ?? `${global.fullName} | ${global.role}`;
  const description = global.seo?.metaDescription ?? global.role;

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
    title,
    description,
    icons: { icon: { url: "/favicon.png", type: "image/png" } },
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title,
      description,
      url: `/${lang}`,
      type: "website",
      siteName: global.fullName,
      locale: lang === "es" ? "es_MX" : "en_US",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const global = await getGlobal(lang);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: global.fullName,
    url: env.NEXT_PUBLIC_SITE_URL,
    sameAs: [global.githubUrl, global.linkedinUrl],
    jobTitle: global.role,
    description: global.seo?.metaDescription ?? global.role,
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-background sm:px-28 lg:px-20 px-9">{children}</body>
    </html>
  );
}
