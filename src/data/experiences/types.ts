import { z } from "zod";

export const ExperienceSchema = z.object({
    documentId: z.string(),
    company: z.string(),
    role: z.string(),
    startDate: z.iso.date(),
    endDate: z.iso.date().nullable(),
    description: z.string(),
    order: z.number(),
});

export type Experience = z.infer<typeof ExperienceSchema>;
