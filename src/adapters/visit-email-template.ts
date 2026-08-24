const COLORS = {
    ghostWhite: "#fafaff",
    jetBlack: "#30343f",
    mutedFooter: "#9aa0c9",
    spaceIndigo: "#1e2749",
    twilightIndigo: "#273469",
} as const;

export type VisitNotificationEmail = {
    subject: string;
    html: string;
    text: string;
};

export const buildVisitNotificationEmail = (): VisitNotificationEmail => {
    const subject = "[Portafolio] Alguien está viendo tu sitio";

    const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
<title>${subject}</title>
</head>
<body style="margin:0; padding:0; background-color:${COLORS.ghostWhite};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${COLORS.ghostWhite};">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" width="480" cellpadding="0" cellspacing="0" border="0" style="width:480px; max-width:480px;">
          <tr>
            <td align="center" bgcolor="${COLORS.spaceIndigo}" style="background-color:${COLORS.spaceIndigo}; border-radius:16px; padding: 36px 32px;">
              <p style="margin:0; font-family: Arial, Helvetica, sans-serif; font-size:32px; line-height:1;">
                👀
              </p>
              <h1 style="margin:18px 0 0; font-family: 'Lexend', Arial, Helvetica, sans-serif; font-size:20px; font-weight:700; color:${COLORS.ghostWhite};">
                Alguien está viendo tu sitio
              </h1>
              <p style="margin:10px 0 0; font-family: Arial, Helvetica, sans-serif; font-size:13px; line-height:1.6; color:${COLORS.mutedFooter};">
                Un visitante acaba de entrar a tu portafolio.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const text = "Alguien está viendo tu sitio.\n\nUn visitante acaba de entrar a tu portafolio.";

    return { subject, html, text };
};
