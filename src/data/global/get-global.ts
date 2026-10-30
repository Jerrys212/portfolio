import { apiFetch } from "@/data/client";
import { SingleResponseSchema } from "@/data/types";
import type { Locale } from "@/i18n/config";
import { GlobalSchema } from "./types";

export async function getGlobal(locale: Locale) {
  const { data } = await apiFetch(
    `/global?locale=${locale}&populate=*`,
    SingleResponseSchema(GlobalSchema),
  );
  return data;
}
