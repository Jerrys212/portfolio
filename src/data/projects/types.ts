import { z } from "zod";

import { MediaSchema, NamedItemSchema } from "@/data/types";

export const ProjectSchema = z.object({
    documentId: z.string(),
    title: z.string(),
    description: z.string(),
    projectStatus: z.enum(["coming-soon", "live"]),
    url: z.string().nullable(),
    repoUrl: z.string().nullable(),
    order: z.number(),
    tags: z.array(NamedItemSchema),
    image: MediaSchema.nullable(),
});

export type Project = z.infer<typeof ProjectSchema>;
