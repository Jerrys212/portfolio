import { z } from "zod";
import { MediaSchema } from "@/data/types";

export const GlobalSchema = z.object({
  name: z.string(),
  fullName: z.string(),
  role: z.string(),
  email: z.email(),
  githubUrl: z.url(),
  linkedinUrl: z.url(),
  cv: MediaSchema.nullable(),
  seo: z
    .object({
      metaTitle: z.string(),
      metaDescription: z.string(),
      ogImageAlt: z.string().nullable(),
    })
    .nullable(),
});

export type Global = z.infer<typeof GlobalSchema>;
