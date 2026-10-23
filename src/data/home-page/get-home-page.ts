import { apiFetch } from "@/data/client";
import { HomePageSchema } from "@/data/home-page/types";
import { SingleResponseSchema } from "@/data/types";

const HOME_PAGE_QUERY = [
    "populate[hero][populate]=*",
    "populate[about][populate]=*",
    "populate[services][populate]=*",
    "populate[contact][populate]=*",
    "populate[stack]=true",
    "populate[experience]=true",
    "populate[projects]=true",
].join("&");

export const getHomePage = async () => {
    const { data } = await apiFetch(`/home-page?${HOME_PAGE_QUERY}`, SingleResponseSchema(HomePageSchema));
    return data;
};
