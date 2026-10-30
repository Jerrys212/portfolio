"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { env } from "@/lib/env";

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(200),
  message: z.string().trim().min(10).max(5000),
});

export type ContactInput = z.infer<typeof ContactSchema>;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function sendContactMessage(input: ContactInput): Promise<{ ok: boolean }> {
  const parsed = ContactSchema.safeParse(input);
  if (!parsed.success) return { ok: false };

  const { name, email, message } = parsed.data;
  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: { name: "Portafolio", address: env.SMTP_FROM },
      to: env.CONTACT_TO_EMAIL || env.SMTP_FROM,
      replyTo: { name, address: email },
      subject: `[Portafolio] Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
      html: `<p><strong>Nombre:</strong> ${escapeHtml(name)}</p><p><strong>Correo:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    });
    return { ok: true };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { ok: false };
  }
}
