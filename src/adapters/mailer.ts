import nodemailer from "nodemailer";

import { env } from "@/lib/env";
import type { ContactInput } from "@/lib/validations/contact";

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_PORT === 465,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(data: ContactInput) {
  const to = env.CONTACT_TO_EMAIL ?? env.SMTP_FROM;

  await getTransporter().sendMail({
    from: `"Portfolio" <${env.SMTP_FROM}>`,
    to,
    replyTo: data.contact,
    subject: `[Portfolio] ${data.subject}`,
    text: [
      `Nombre: ${data.name}`,
      `Contacto: ${data.contact}`,
      "",
      data.message,
    ].join("\n"),
    html: [
      `<p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>`,
      `<p><strong>Contacto:</strong> ${escapeHtml(data.contact)}</p>`,
      `<p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>`,
    ].join(""),
  });
}
