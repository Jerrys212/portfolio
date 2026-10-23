import { apiFetch } from "@/data/client";
import { ServiceSchema } from "@/data/services/types";
import { CollectionResponseSchema } from "@/data/types";

export const getServices = async () => {
    const { data } = await apiFetch("/services?sort=order:asc&pagination[pageSize]=100", CollectionResponseSchema(ServiceSchema));
    return data;
};
