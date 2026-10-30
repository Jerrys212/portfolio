"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(200),
  message: z.string().trim().min(10).max(5000),
});

export type ContactInput = z.infer<typeof ContactSchema>;

const SmtpEnvSchema = z.object({
  SMTP_HOST: z.string().min(1),
  SMTP_PORT: z.coerce.number().int().positive(),
  SMTP_USER: z.string().min(1),
  SMTP_PASS: z.string().min(1),
  SMTP_FROM: z.email(),
  CONTACT_TO_EMAIL: z.email().optional().or(z.literal("")),
});

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

  const env = SmtpEnvSchema.safeParse(process.env);
  if (!env.success) {
    console.error("Missing SMTP configuration:", z.prettifyError(env.error));
    return { ok: false };
  }

  const { name, email, message } = parsed.data;
  const smtp = env.data;
  const transporter = nodemailer.createTransport({
    host: smtp.SMTP_HOST,
    port: smtp.SMTP_PORT,
    secure: smtp.SMTP_PORT === 465,
    auth: { user: smtp.SMTP_USER, pass: smtp.SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: { name: "Portafolio", address: smtp.SMTP_FROM },
      to: smtp.CONTACT_TO_EMAIL || smtp.SMTP_FROM,
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
