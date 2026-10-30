import { z } from "zod";
import { TagSchema } from "@/data/types";

export const ExperienceItemSchema = z.object({
  documentId: z.string(),
  company: z.string(),
  role: z.string(),
  startDate: z.iso.date(),
  endDate: z.iso.date().nullable(),
  description: z.string(),
  tags: z.array(TagSchema),
});

export type ExperienceItem = z.infer<typeof ExperienceItemSchema>;
