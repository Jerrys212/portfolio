# Portafolio — Gerardo García

Sitio de portafolio personal construido con Next.js. Presenta secciones de
introducción, sobre mí, stack técnico, experiencia, servicios, proyectos y un
formulario de contacto que envía correos por SMTP (Brevo).

Todo el contenido (textos, imágenes, CV, SEO y datos globales) se administra
desde **Strapi 5**, que funciona como CMS headless en un proyecto aparte. Así se
puede editar el portafolio desde el admin de Strapi sin volver a desplegar. Lo
único que sigue en código son los links de la navbar.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui + Radix UI
- Strapi 5 (CMS headless, contenido y archivos)
- React Hook Form + Zod
- Nodemailer (envío de correos del formulario de contacto)

## Requisitos

- Node.js
- pnpm
- Una instancia de Strapi 5 corriendo con el contenido del portafolio
  (por defecto en `http://localhost:1337`)

## Cómo correrlo

1. Levantá Strapi y creá un API token de solo lectura en
   **Settings → API Tokens** (permisos `find`/`findOne`).
2. Configurá las variables de entorno (ver abajo).
3. Instalá dependencias y arrancá el sitio:

```bash
pnpm install
pnpm dev
```

El sitio queda disponible en [http://localhost:3001](http://localhost:3001).

### Variables de entorno

Copiá `.env.example` a `.env` y completá los valores. Todas se validan con Zod
en `src/lib/env.ts`: si falta alguna, la app no arranca.

```bash
# Strapi (contenido)
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=   # token de solo lectura, nunca con prefijo NEXT_PUBLIC_

# SMTP (formulario de contacto)
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
CONTACT_TO_EMAIL=   # opcional, correo destino si es distinto de SMTP_FROM
```

## Integración con Strapi

- Las peticiones se hacen solo desde el servidor (Server Components) a través
  de `apiFetch` en `src/data/client.ts`, que agrega el header
  `Authorization: Bearer <STRAPI_API_TOKEN>`. El rol Public de Strapi no tiene
  permisos, así que el token nunca se expone al navegador.
- Cada respuesta se valida con un schema de Zod ubicado junto a su fetcher en
  `src/data/<recurso>/types.ts`.
- El contenido se cachea con ISR y se revalida cada 5 minutos (tag `strapi`).
- Si Strapi devuelve una sección como `null`, esa sección no se renderiza.
- Las imágenes se sirven desde `${STRAPI_URL}/uploads`, permitido en
  `next.config.ts`.

### Endpoints consumidos

| Endpoint            | Tipo        | Contenido                                           |
| ------------------- | ----------- | --------------------------------------------------- |
| `/api/home-page`    | Single type | Hero, sobre mí, encabezados de secciones, contacto  |
| `/api/global`       | Single type | Nombre, rol, contacto, LinkedIn, CV y SEO           |
| `/api/stack-groups` | Collection  | Grupos de tecnologías del stack                     |
| `/api/experiences`  | Collection  | Experiencia laboral                                 |
| `/api/services`     | Collection  | Servicios                                           |
| `/api/projects`     | Collection  | Proyectos con links a demo y repositorio            |

## Otros comandos

| Comando                  | Descripción                     |
| ------------------------ | ------------------------------- |
| `pnpm build`             | Build de producción             |
| `pnpm start`             | Corre el build de producción    |
| `pnpm lint`              | Corre ESLint                    |
| `pnpm exec tsc --noEmit` | Type-check sin generar archivos |
| `pnpm format`            | Formatea el código con Prettier |

> Para `pnpm build` también hace falta Strapi accesible, porque las páginas se
> generan con su contenido.
