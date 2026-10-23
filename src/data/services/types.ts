import { z } from "zod";

export const ServiceSchema = z.object({
    documentId: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.enum(["code", "server", "rocket"]),
    order: z.number(),
});

export type Service = z.infer<typeof ServiceSchema>;
