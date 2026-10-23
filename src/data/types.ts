import { z } from "zod";

import { env } from "@/lib/env";

export const SingleResponseSchema = <T extends z.ZodType>(data: T) => z.object({ data });

export const CollectionResponseSchema = <T extends z.ZodType>(item: T) => z.object({ data: z.array(item) });

export const MediaSchema = z
    .object({
        url: z.string().min(1),
        alternativeText: z.string().nullable(),
        width: z.number().nullable(),
        height: z.number().nullable(),
        mime: z.string(),
    })
    .transform((media) => ({ ...media, url: new URL(media.url, env.STRAPI_URL).toString() }));

export type Media = z.infer<typeof MediaSchema>;

export const NamedItemSchema = z.object({ id: z.number(), name: z.string() });
