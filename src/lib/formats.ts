import type { Locale } from "@/i18n/config";

const intlLocales: Record<Locale, string> = { es: "es-MX", en: "en-US" };

const formatMonth = (locale: Locale, isoDate: string) => {
  const text = new Intl.DateTimeFormat(intlLocales[locale], {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatPeriod = (
  locale: Locale,
  startDate: string,
  endDate: string | null,
  presentLabel: string,
) => `${formatMonth(locale, startDate)} – ${endDate ? formatMonth(locale, endDate) : presentLabel}`;
