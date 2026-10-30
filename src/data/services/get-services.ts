import { apiFetch } from "@/data/client";
import { CollectionResponseSchema } from "@/data/types";
import type { Locale } from "@/i18n/config";
import { ServiceSchema } from "./types";

export async function getServices(locale: Locale) {
  const { data } = await apiFetch(
    `/services?locale=${locale}&sort=order:asc&populate=items`,
    CollectionResponseSchema(ServiceSchema),
  );
  return data;
}
