import { z } from "zod";

import { NamedItemSchema } from "@/data/types";

export const StackGroupSchema = z.object({
    documentId: z.string(),
    title: z.string(),
    order: z.number(),
    primary: z.array(NamedItemSchema),
    secondary: z.array(NamedItemSchema),
});

export type StackGroup = z.infer<typeof StackGroupSchema>;
