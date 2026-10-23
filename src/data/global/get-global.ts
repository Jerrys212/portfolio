import { apiFetch } from "@/data/client";
import { GlobalSchema } from "@/data/global/types";
import { SingleResponseSchema } from "@/data/types";

export const getGlobal = async () => {
    const { data } = await apiFetch("/global?populate=*", SingleResponseSchema(GlobalSchema));
    return data;
};
