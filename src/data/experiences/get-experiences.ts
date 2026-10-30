import { apiFetch } from "@/data/client";
import { CollectionResponseSchema } from "@/data/types";
import type { Locale } from "@/i18n/config";
import { ExperienceItemSchema } from "./types";

export async function getExperiences(locale: Locale) {
  const { data } = await apiFetch(
    `/experiences?locale=${locale}&sort=order:asc&populate=tags&pagination[pageSize]=100`,
    CollectionResponseSchema(ExperienceItemSchema),
  );
  return data;
}
