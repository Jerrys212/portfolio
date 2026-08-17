import path from "node:path";

import nodemailer from "nodemailer";

import { buildContactNotificationEmail, CONTACT_ILLUSTRATION_CID } from "@/adapters/contact-email-template";
import { env } from "@/lib/env";
import type { ContactInput } from "@/lib/validations/contact";

const isEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value);

const CONTACT_ILLUSTRATION_PATH = path.join(process.cwd(), "public", "email", "contact-illustration.png");

let transporter: nodemailer.Transporter | null = null;

const getTransporter = () => {
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
};

export const sendContactEmail = async (data: ContactInput) => {
    const to = env.CONTACT_TO_EMAIL ?? env.SMTP_FROM;
    const { subject, html, text } = buildContactNotificationEmail(data);

    await getTransporter().sendMail({
        from: `"Portafolio — Gerardo García" <${env.SMTP_FROM}>`,
        to,
        replyTo: isEmail(data.contact) ? data.contact : undefined,
        subject,
        text,
        html,
        attachments: [
            {
                filename: "contact-illustration.png",
                path: CONTACT_ILLUSTRATION_PATH,
                cid: CONTACT_ILLUSTRATION_CID,
            },
        ],
    });
};
