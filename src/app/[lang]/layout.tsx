import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { profile } from "@/data/profile";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
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
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(profile.siteUrl),
    title: meta.title,
    description: meta.description,
    icons: { icon: { url: "/favicon.png", type: "image/png" } },
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${lang}`,
      type: "website",
      siteName: profile.fullName,
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
  const { meta } = getDictionary(lang);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    url: profile.siteUrl,
    sameAs: [profile.githubUrl, profile.linkedinUrl],
    jobTitle: "Full Stack Developer",
    description: meta.description,
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
