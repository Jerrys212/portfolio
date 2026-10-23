import { apiFetch } from "@/data/client";
import { ProjectSchema } from "@/data/projects/types";
import { CollectionResponseSchema } from "@/data/types";

export const getProjects = async () => {
    const { data } = await apiFetch(
        "/projects?sort=order:asc&populate[tags]=true&populate[image]=true&pagination[pageSize]=100",
        CollectionResponseSchema(ProjectSchema),
    );
    return data;
};
