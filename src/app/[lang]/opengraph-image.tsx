import { ImageResponse } from "next/og";
import { getGlobal } from "@/data/global/get-global";
import { getHomePage } from "@/data/home-page/get-home-page";
import { defaultLocale, isLocale } from "@/i18n/config";
import { palette } from "@/lib/theme";

const size = { width: 1200, height: 630 };

export async function generateImageMetadata({ params }: { params: { lang: string } }) {
  const global = await getGlobal(isLocale(params.lang) ? params.lang : defaultLocale);
  return [
    {
      id: "default",
      alt: global.seo?.ogImageAlt ?? `${global.fullName} · ${global.role}`,
      size,
      contentType: "image/png",
    },
  ];
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const [global, { hero }] = await Promise.all([getGlobal(locale), getHomePage(locale)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: palette.background,
        }}
      >
        <div style={{ fontSize: 32, color: palette.whiteIcon }}>{hero.greeting}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 104,
            lineHeight: 1.05,
            marginTop: 24,
            color: palette.white,
          }}
        >
          <span>{hero.titleTop}</span>
          <span>{hero.titleBottom}</span>
        </div>
        <div style={{ marginTop: 40, fontSize: 30, color: palette.sec }}>
          {global.githubUrl.replace("https://", "")}
        </div>
      </div>
    ),
    size,
  );
}
