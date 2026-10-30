import { z } from "zod";
import { MediaSchema } from "@/data/types";

export const TechnologySchema = z.object({
  documentId: z.string(),
  name: z.string(),
  icon: MediaSchema,
});

export type Technology = z.infer<typeof TechnologySchema>;
