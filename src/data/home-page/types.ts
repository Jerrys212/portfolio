import { z } from "zod";

import { MediaSchema } from "@/data/types";

export const SectionHeaderSchema = z.object({
    eyebrow: z.string(),
    heading: z.string().nullable(),
    description: z.string().nullable(),
});

export type SectionHeader = z.infer<typeof SectionHeaderSchema>;

export const LinkSchema = z.object({
    label: z.string(),
    href: z.string(),
    variant: z.enum(["primary", "outline"]),
});

export type Link = z.infer<typeof LinkSchema>;

export const HeroSchema = z.object({
    eyebrow: z.string(),
    title: z.string(),
    bio: z.string(),
    photo: MediaSchema,
    photoAlt: z.string(),
    ctas: z.array(LinkSchema),
});

export type Hero = z.infer<typeof HeroSchema>;

export const AboutSchema = z.object({
    header: SectionHeaderSchema,
    paragraphs: z.array(z.object({ id: z.number(), text: z.string() })),
    illustration: MediaSchema.nullable(),
    highlights: z.array(z.object({ id: z.number(), number: z.string(), text: z.string() })),
});

export type About = z.infer<typeof AboutSchema>;

export const ServicesBlockSchema = z.object({
    header: SectionHeaderSchema,
    illustration: MediaSchema.nullable(),
    cta: LinkSchema.nullable(),
});

export type ServicesBlock = z.infer<typeof ServicesBlockSchema>;

export const ContactBlockSchema = z.object({
    header: SectionHeaderSchema,
    illustration: MediaSchema.nullable(),
});

export type ContactBlock = z.infer<typeof ContactBlockSchema>;

export const HomePageSchema = z.object({
    hero: HeroSchema.nullable(),
    about: AboutSchema.nullable(),
    stack: SectionHeaderSchema.nullable(),
    experience: SectionHeaderSchema.nullable(),
    services: ServicesBlockSchema.nullable(),
    projects: SectionHeaderSchema.nullable(),
    contact: ContactBlockSchema.nullable(),
});

export type HomePage = z.infer<typeof HomePageSchema>;
