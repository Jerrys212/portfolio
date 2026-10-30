import { apiFetch } from "@/data/client";
import { CollectionResponseSchema } from "@/data/types";
import type { Locale } from "@/i18n/config";
import { ProjectItemSchema } from "./types";

export async function getProjects(locale: Locale) {
  const { data } = await apiFetch(
    `/projects?locale=${locale}&sort=order:asc&populate=image&pagination[pageSize]=100`,
    CollectionResponseSchema(ProjectItemSchema),
  );
  return data;
}
