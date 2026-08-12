"use server";

import { flattenError } from "zod";

import { sendContactEmail } from "@/adapters/mailer";
import { ContactSchema, type ContactInput } from "@/lib/validations/contact";

export type ContactState = {
  success: boolean;
  message?: string;
  errors?: Partial<Record<keyof ContactInput, string[]>>;
};

export async function sendMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = ContactSchema.safeParse({
    name: formData.get("name"),
    contact: formData.get("contact"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: flattenError(parsed.error).fieldErrors,
    };
  }

  try {
    await sendContactEmail(parsed.data);
  } catch (error) {
    console.error("Error al enviar mensaje de contacto:", error);
    return {
      success: false,
      message:
        "No pudimos enviar tu mensaje. Intenta de nuevo en unos minutos.",
    };
  }

  return {
    success: true,
    message: "Tu mensaje se envió correctamente. Te responderé pronto.",
  };
}
