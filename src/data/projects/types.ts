import { z } from "zod";
import { MediaSchema } from "@/data/types";

export const ProjectItemSchema = z.object({
  documentId: z.string(),
  title: z.string(),
  subtitle: z.string(),
  image: MediaSchema,
  repoUrl: z.url(),
  liveUrl: z.url().nullable(),
});

export type ProjectItem = z.infer<typeof ProjectItemSchema>;
