import { apiFetch } from "@/data/client";
import { ExperienceSchema } from "@/data/experiences/types";
import { CollectionResponseSchema } from "@/data/types";

export const getExperiences = async () => {
    const { data } = await apiFetch("/experiences?sort=order:asc&pagination[pageSize]=100", CollectionResponseSchema(ExperienceSchema));
    return data;
};
