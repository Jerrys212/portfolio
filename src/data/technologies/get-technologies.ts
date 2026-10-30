import { apiFetch } from "@/data/client";
import { CollectionResponseSchema } from "@/data/types";
import { TechnologySchema } from "./types";

export async function getTechnologies() {
  const { data } = await apiFetch(
    "/technologies?sort=order:asc&populate=icon&pagination[pageSize]=100",
    CollectionResponseSchema(TechnologySchema),
  );
  return data;
}
