import { z } from "zod";
import { SectionHeaderSchema } from "@/data/types";

export const HeroSchema = z.object({
  greeting: z.string(),
  titleTop: z.string(),
  titleBottom: z.string(),
  taglineStart: z.string(),
  taglineHighlight: z.string().nullable(),
  taglineEnd: z.string().nullable(),
});

export const ContactSectionSchema = z.object({
  header: SectionHeaderSchema,
  location: z.string().nullable(),
});

export const HomePageSchema = z.object({
  hero: HeroSchema,
  skills: SectionHeaderSchema,
  experience: SectionHeaderSchema,
  projects: SectionHeaderSchema,
  contact: ContactSectionSchema,
});

export type Hero = z.infer<typeof HeroSchema>;
export type ContactSection = z.infer<typeof ContactSectionSchema>;
export type HomePage = z.infer<typeof HomePageSchema>;
