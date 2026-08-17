import type { ContactInput } from "@/lib/validations/contact";

const COLORS = {
    jetBlack: "#30343f",
    ghostWhite: "#fafaff",
    periwinkle: "#e4d9ff",
    periwinkleTint: "#f4f0ff",
    twilightIndigo: "#273469",
    spaceIndigo: "#1e2749",
    mutedLabel: "#75798a",
    mutedFooter: "#9aa0c9",
} as const;

export const CONTACT_ILLUSTRATION_CID = "contact-illustration";

const escapeHtml = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const isEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value);

export type ContactNotificationEmail = {
    subject: string;
    html: string;
    text: string;
};

export const buildContactNotificationEmail = (data: ContactInput): ContactNotificationEmail => {
    const safeName = escapeHtml(data.name);
    const safeContact = escapeHtml(data.contact);
    const safeSubject = escapeHtml(data.subject);
    const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");
    const contactHref = isEmail(data.contact) ? `mailto:${data.contact}` : `tel:${data.contact.replace(/[^\d+]/g, "")}`;

    const subject = `[Portafolio] ${data.subject}`;

    const html = `<!doctype html>
<html lang="es" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
<title>${safeSubject}</title>
<!--[if mso]>
<style>
  table, td { font-family: Arial, Helvetica, sans-serif !important; }
</style>
<![endif]-->
<style>
  @media (max-width: 620px) {
    .container { width: 100% !important; }
    .px { padding-left: 20px !important; padding-right: 20px !important; }
  }
</style>
</head>
<body style="margin:0; padding:0; background-color:${COLORS.ghostWhite};">
  <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">
    Nuevo mensaje de ${safeName} a través de tu portafolio.
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${COLORS.ghostWhite};">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px;">
          <!-- Header -->
          <tr>
            <td align="center" bgcolor="${COLORS.spaceIndigo}" style="background-color:${COLORS.spaceIndigo}; border-radius:16px 16px 0 0; padding: 32px 32px 28px;" class="px">
              <img
                src="cid:${CONTACT_ILLUSTRATION_CID}"
                width="72"
                alt=""
                style="display:block; width:72px; max-width:72px; height:auto; margin:0 auto; border-radius:999px;"
              />
              <p style="margin:18px 0 0; font-family: 'Lexend', Arial, Helvetica, sans-serif; font-size:19px; font-weight:700; color:${COLORS.ghostWhite};">
                Gerardo García
              </p>
              <p style="margin:6px 0 0; font-family: Arial, Helvetica, sans-serif; font-size:11px; font-weight:600; letter-spacing:2px; color:${COLORS.periwinkle}; text-transform:uppercase;">
                Portafolio
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td align="center" bgcolor="#ffffff" style="background-color:#ffffff; padding: 32px 32px 8px;" class="px">
              <p style="margin:0; font-family: Arial, Helvetica, sans-serif; font-size:12px; font-weight:700; letter-spacing:1.5px; color:${COLORS.twilightIndigo}; text-transform:uppercase;">
                Nuevo mensaje de contacto
              </p>
              <h1 style="margin:10px 0 0; font-family: 'Lexend', Arial, Helvetica, sans-serif; font-size:22px; line-height:1.35; font-weight:700; color:${COLORS.jetBlack};">
                ${safeSubject}
              </h1>
              <p style="margin:10px 0 0; font-family: Arial, Helvetica, sans-serif; font-size:13px; color:${COLORS.mutedLabel};">
                De <strong style="color:${COLORS.jetBlack};">${safeName}</strong> ·
                <a href="${contactHref}" style="color:${COLORS.twilightIndigo}; text-decoration:none;">${safeContact}</a>
              </p>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td bgcolor="#ffffff" style="background-color:#ffffff; padding: 24px 32px 32px;" class="px">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${COLORS.periwinkleTint}" style="background-color:${COLORS.periwinkleTint}; border-radius:12px;">
                <tr>
                  <td style="padding: 20px 24px; font-family: Arial, Helvetica, sans-serif; font-size:14px; line-height:1.7; color:${COLORS.jetBlack}; text-align:left;">
                    ${safeMessage}
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td bgcolor="${COLORS.twilightIndigo}" style="border-radius:999px; background-color:${COLORS.twilightIndigo};">
                          <a href="${contactHref}" style="display:inline-block; padding:13px 28px; border-radius:999px; font-family: Arial, Helvetica, sans-serif; font-size:14px; font-weight:600; color:${COLORS.ghostWhite}; text-decoration:none;">
                            Contactar a ${safeName}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" bgcolor="${COLORS.spaceIndigo}" style="background-color:${COLORS.spaceIndigo}; border-radius:0 0 16px 16px; padding: 22px 32px;" class="px">
              <p style="margin:0; font-family: Arial, Helvetica, sans-serif; font-size:12px; line-height:1.6; color:${COLORS.mutedFooter};">
                Este mensaje se envió automáticamente desde el formulario de contacto de tu portafolio.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const text = [
        "Nuevo mensaje de contacto",
        "",
        `Nombre: ${data.name}`,
        `Contacto: ${data.contact}`,
        `Asunto: ${data.subject}`,
        "",
        data.message,
    ].join("\n");

    return { subject, html, text };
};
