import { apiFetch } from "@/data/client";
import { SingleResponseSchema } from "@/data/types";
import type { Locale } from "@/i18n/config";
import { HomePageSchema } from "./types";

const HOME_PAGE_POPULATE = [
  "populate[hero]=true",
  "populate[skills]=true",
  "populate[experience]=true",
  "populate[projects]=true",
  "populate[contact][populate]=*",
].join("&");

export async function getHomePage(locale: Locale) {
  const { data } = await apiFetch(
    `/home-page?locale=${locale}&${HOME_PAGE_POPULATE}`,
    SingleResponseSchema(HomePageSchema),
  );
  return data;
}
