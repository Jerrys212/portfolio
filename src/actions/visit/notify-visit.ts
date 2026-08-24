"use server";

import { sendVisitNotificationEmail } from "@/adapters/mailer";

export const notifyVisit = async () => {
    try {
        await sendVisitNotificationEmail();
    } catch (error) {
        console.error("Error al enviar el aviso de visita:", error);
    }
};
