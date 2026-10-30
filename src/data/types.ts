import { z } from "zod";
import { env } from "@/lib/env";

export const SingleResponseSchema = <T extends z.ZodType>(data: T) => z.object({ data });

export const CollectionResponseSchema = <T extends z.ZodType>(item: T) =>
  z.object({ data: z.array(item) });

export const MediaSchema = z
  .object({
    url: z.string().min(1),
    alternativeText: z.string().nullable(),
  })
  .transform((media) => ({ ...media, url: new URL(media.url, env.STRAPI_URL).toString() }));

export const SectionHeaderSchema = z.object({
  eyebrow: z.string().nullable(),
  heading: z.string(),
  description: z.string().nullable(),
});

export type SectionHeader = z.infer<typeof SectionHeaderSchema>;

export const TagSchema = z.object({ name: z.string() });
