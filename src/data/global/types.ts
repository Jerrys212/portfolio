import { z } from "zod";

import { MediaSchema } from "@/data/types";

export const GlobalSchema = z.object({
    name: z.string(),
    fullName: z.string(),
    role: z.string(),
    email: z.string(),
    phone: z.string(),
    linkedinUrl: z.string(),
    cv: MediaSchema.nullable(),
    seo: z.object({ metaTitle: z.string(), metaDescription: z.string() }).nullable(),
});

export type Global = z.infer<typeof GlobalSchema>;
