import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1] ?? "";
  if (isLocale(firstSegment)) return;

  const preferred = request.headers
    .get("accept-language")
    ?.toLowerCase()
    .startsWith("en")
    ? "en"
    : defaultLocale;

  request.nextUrl.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
