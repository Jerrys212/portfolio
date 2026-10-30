import { z } from "zod";

export const ServiceIconSchema = z.enum(["code", "server", "rocket"]);

export const ServiceSchema = z.object({
  documentId: z.string(),
  title: z.string(),
  icon: ServiceIconSchema,
  items: z.array(z.object({ text: z.string() })),
});

export type ServiceIcon = z.infer<typeof ServiceIconSchema>;
export type Service = z.infer<typeof ServiceSchema>;
