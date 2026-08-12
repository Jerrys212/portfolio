import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre completo."),
  contact: z
    .string()
    .trim()
    .min(5, "Ingresa un correo o teléfono válido."),
  subject: z
    .string()
    .trim()
    .min(3, "Cuéntame brevemente el asunto."),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export type ContactInput = z.infer<typeof ContactSchema>;
