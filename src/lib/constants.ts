export const SITE = {
  name: "Gerardo García",
  fullName: "Gerardo García Medina",
  role: "Full Stack Developer",
  email: "jerryrogers2305@gmail.com",
  phone: "(55) 4868-0612",
  linkedinUrl: "https://www.linkedin.com/in/gerardo-garcia-63209a239",
  cvUrl: "/cv-gerardo-garcia.pdf",
} as const;

export const NAV_LINKS = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const HIGHLIGHTS = [
  {
    number: "01",
    text: "Pruebas con RTL y Playwright en cada entrega.",
  },
  {
    number: "02",
    text: "De Figma o Claude Design al código, sin fricción.",
  },
  {
    number: "03",
    text: "Componentes accesibles con shadcn/ui y Radix UI.",
  },
] as const;

export const STACK = [
  {
    title: "Frontend",
    primary: ["React", "Next.js", "TypeScript"],
    secondary: ["shadcn/ui", "Radix UI", "TailwindCSS", "Vue.js", "Angular"],
  },
  {
    title: "Backend",
    primary: ["Node.js", "NestJS", "Express"],
    secondary: ["MongoDB", "MySQL", "SQL Server", ".NET Core"],
  },
  {
    title: "Testing",
    primary: ["React Testing Library"],
    secondary: ["Playwright"],
  },
  {
    title: "Infraestructura",
    primary: ["Vercel", "Docker"],
    secondary: ["Git / GitHub / GitLab", "Azure", "Monorepos", "Claude Code"],
  },
] as const;

export const EXPERIENCE = [
  {
    company: "XDEVELOP",
    role: "Desarrollador Frontend",
    date: "Abril 2026 – Actualidad",
    description:
      "Desarrollo de proyectos de consultoría con Next.js 16, App Router y Server Components, construyendo interfaces accesibles con shadcn/ui y Radix UI. Cubro cada entrega con pruebas en RTL y Playwright, despliego en Vercel y complemento el trabajo con APIs en NestJS, monorepos con Docker y herramientas de IA como Claude Code y Claude Design.",
  },
  {
    company: "Telo",
    role: "Desarrollador Front End",
    date: "Septiembre 2023 – Enero 2025",
    description:
      "Diseño y desarrollo de Web Components reutilizables en Angular y React con Angular Material y MUI, integrando APIs REST y WebSockets para funcionalidades en tiempo real. Construcción de APIs RESTful con .NET Core 8 y SQL Server, con control de versiones en Azure DevOps.",
  },
  {
    company: "Petco",
    role: "Desarrollador FullStack",
    date: "Noviembre 2022 – Junio 2023",
    description:
      "Prototipado de interfaces en Figma y desarrollo frontend con React.js y Vue.js, junto con APIs RESTful en Express y Node.js sobre MySQL y MongoDB. Despliegue en servidores VPS con NGINX, PM2 y SSL, colaborando con Git y GitLab en flujos de integración continua.",
  },
  {
    company: "Ids Comercial",
    role: "Becario Cells",
    date: "Mayo 2022 – Septiembre 2022",
    description:
      "Desarrollo de Web Components con el framework CELLS para proyectos internos, gestión ágil con Jira Cloud y control de versiones en Bitbucket y GitLab bajo metodología SCRUM.",
  },
] as const;

export const SERVICES = [
  {
    title: "Desarrollo Frontend a medida",
    description:
      "Interfaces en Next.js y React con shadcn/ui y Radix UI: accesibles, responsivas y con foco en rendimiento.",
  },
  {
    title: "Integración Full Stack",
    description:
      "APIs y servicios backend con Node.js, NestJS o .NET Core conectados a tu frontend, con pruebas automatizadas en cada entrega.",
  },
  {
    title: "Despliegue & DevOps",
    description:
      "Arquitecturas de monorepos con Docker, despliegues en Vercel y flujos listos para producción.",
  },
] as const;

// Contenido ficticio — reemplazar con proyectos reales cuando estén disponibles.
export const PROJECTS = [
  {
    title: "Plataforma de Gestión Interna",
    description:
      "Panel administrativo con autenticación, roles y reportes en tiempo real construido con Next.js y shadcn/ui.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/illustrations/documents.svg",
  },
  {
    title: "E-commerce Headless",
    description:
      "Tienda en línea desacoplada con checkout optimizado, integraciones de pago y despliegue continuo en Vercel.",
    tags: ["Next.js", "Stripe", "Docker"],
    image: "/illustrations/interaction.svg",
  },
  {
    title: "Dashboard de Analítica",
    description:
      "Visualización de métricas de negocio en tiempo real con componentes accesibles y pruebas end-to-end.",
    tags: ["React", "Radix UI", "Playwright"],
    image: "/illustrations/analytics.svg",
  },
] as const;
