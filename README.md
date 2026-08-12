# Portafolio — Gerardo García

Sitio de portafolio personal construido con Next.js. Presenta secciones de
introducción, sobre mí, stack técnico, experiencia, servicios, proyectos y un
formulario de contacto que envía correos por SMTP (Brevo).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui + Radix UI
- React Hook Form + Zod
- Nodemailer (envío de correos del formulario de contacto)

## Requisitos

- Node.js
- pnpm

## Cómo correrlo

```bash
pnpm install
pnpm dev
```

El sitio queda disponible en [http://localhost:3001](http://localhost:3001).

### Variables de entorno

El formulario de contacto necesita credenciales SMTP para enviar correos.
Copiá `.env.example` a `.env` y completá los valores:

```bash
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
CONTACT_TO_EMAIL=   # opcional, correo destino si es distinto de SMTP_FROM
```

## Otros comandos

| Comando                  | Descripción                    |
| ------------------------ | ------------------------------- |
| `pnpm build`              | Build de producción             |
| `pnpm start`              | Corre el build de producción    |
| `pnpm lint`               | Corre ESLint                    |
| `pnpm exec tsc --noEmit`  | Type-check sin generar archivos |
