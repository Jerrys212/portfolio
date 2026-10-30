import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { palette } from "@/lib/theme";

export const alt = `${profile.fullName} · Full Stack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { hero } = getDictionary(isLocale(lang) ? lang : "es");

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
          {profile.githubUrl.replace("https://", "")}
        </div>
      </div>
    ),
    size,
  );
}
