import { apiFetch } from "@/data/client";
import { StackGroupSchema } from "@/data/stack-groups/types";
import { CollectionResponseSchema } from "@/data/types";

export const getStackGroups = async () => {
    const { data } = await apiFetch(
        "/stack-groups?sort=order:asc&populate[primary]=true&populate[secondary]=true&pagination[pageSize]=100",
        CollectionResponseSchema(StackGroupSchema),
    );
    return data;
};
