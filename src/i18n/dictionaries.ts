import type { ProjectId } from "@/data/profile";
import type { Locale } from "./config";

export type SkillCategory = "frontend" | "backend" | "devops";

export interface Dictionary {
  meta: { title: string; description: string; ogAlt: string };
  nav: {
    home: string;
    experience: string;
    projects: string;
    contact: string;
    switchLabel: string;
    switchAria: string;
  };
  hero: {
    greeting: string;
    titleTop: string;
    titleBottom: string;
    taglineStart: string;
    taglineHighlight: string;
    taglineEnd: string;
    cv: string;
  };
  skills: {
    title: string;
    categories: { id: SkillCategory; name: string; items: string[] }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: {
      company: string;
      role: string;
      period: string;
      description: string;
      tags: string[];
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    code: string;
    preview: string;
    more: string;
    items: Record<ProjectId, { title: string; status: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    locationLabel: string;
    location: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: { rights: string; templateBy: string; distributedBy: string };
}

const es: Dictionary = {
  meta: {
    title: "Gerardo García | Portafolio",
    description:
      "Gerardo García Medina, Desarrollador Full Stack con mayor fortaleza en el frontend: aplicaciones web escalables con React, Next.js, Node.js y .NET.",
    ogAlt: "Gerardo García, Desarrollador Full Stack",
  },
  nav: {
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    switchLabel: "EN",
    switchAria: "View in English",
  },
  hero: {
    greeting: "Hola, soy Gerardo García",
    titleTop: "Desarrollador",
    titleBottom: "Full Stack",
    taglineStart:
      "Construyo aplicaciones web escalables y orientadas al usuario, con especial fortaleza en el desarrollo",
    taglineHighlight: "frontend",
    taglineEnd: ".",
    cv: "Descargar CV",
  },
  skills: {
    title: "¿Qué hago?",
    categories: [
      {
        id: "frontend",
        name: "Desarrollo Frontend",
        items: [
          "Apps con Next.js, App Router y Server Components",
          "Interfaces accesibles con shadcn/ui y Radix UI",
          "Pruebas con React Testing Library y Playwright",
        ],
      },
      {
        id: "backend",
        name: "Desarrollo Backend",
        items: [
          "APIs REST con Node.js, Express y NestJS",
          "Microservicios con .NET Core 8 y SQL Server",
          "Tiempo real con WebSockets y Socket.io",
        ],
      },
      {
        id: "devops",
        name: "DevOps y Despliegue",
        items: [
          "Despliegues en Vercel con entornos de preview",
          "Monorepos con Docker",
          "Servidores VPS con NGINX, PM2 y SSL",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "Trayectoria",
    title: "Experiencia",
    items: [
      {
        company: "XDEVELOP",
        role: "Desarrollador Frontend",
        period: "Abr 2026 – Actualidad",
        description:
          "Proyectos de consultoría para distintos clientes con Next.js 16, App Router y Server Components. Interfaces accesibles con shadcn/ui y Radix UI, pruebas con RTL y Playwright, despliegues en Vercel y APIs con NestJS cuando el proyecto lo requiere.",
        tags: ["Next.js", "shadcn/ui", "Playwright", "NestJS", "Docker", "Vercel"],
      },
      {
        company: "Telo",
        role: "Desarrollador Front End",
        period: "Sep 2023 – Ene 2025",
        description:
          "Web Components reutilizables en Angular y React con Angular Material y MUI, integración de APIs REST y WebSockets en tiempo real, y APIs RESTful con .NET Core 8 y SQL Server sobre Azure DevOps.",
        tags: ["Angular", "React", "MUI", ".NET Core 8", "SQL Server", "Azure DevOps"],
      },
      {
        company: "Petco",
        role: "Desarrollador Full Stack",
        period: "Nov 2022 – Jun 2023",
        description:
          "Prototipos en Figma y frontends con React y Vue, APIs RESTful con Express y Node.js sobre MySQL y MongoDB, y despliegues en VPS con NGINX, PM2 y SSL.",
        tags: ["React", "Vue.js", "Node.js", "Express", "MongoDB", "NGINX"],
      },
      {
        company: "Ids Comercial",
        role: "Becario CELLS",
        period: "May 2022 – Sep 2022",
        description:
          "Web Components con el framework CELLS para proyectos internos, trabajando con SCRUM, Jira Cloud, Bitbucket y GitLab.",
        tags: ["CELLS", "Web Components", "SCRUM", "Jira"],
      },
    ],
  },
  projects: {
    eyebrow: "Mi trabajo",
    title: "Proyectos",
    code: "Código",
    preview: "Ver en vivo",
    more: "Más proyectos en",
    items: {
      pos: { title: "Dulce Atardecer POS", status: "Punto de venta · Next.js 16" },
      api: { title: "Dulce Atardecer API", status: "API REST · .NET Core" },
      cms: { title: "Portfolio CMS", status: "CMS headless · Strapi 5" },
    },
  },
  contact: {
    eyebrow: "Hablemos",
    title: "Contacto",
    intro:
      "¿Tienes una pregunta o un proyecto en mente? Escríbeme y te responderé lo antes posible.",
    locationLabel: "Ubicación:",
    location: "México",
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    submit: "Enviar",
    sending: "Enviando...",
    success: "✅ ¡Gracias por tu mensaje! Te responderé pronto.",
    error: "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    templateBy: "Plantilla por",
    distributedBy: "Distribuida por",
  },
};

const en: Dictionary = {
  meta: {
    title: "Gerardo García | Portfolio",
    description:
      "Gerardo García Medina, Full Stack Developer with a strong focus on frontend: scalable web applications with React, Next.js, Node.js and .NET.",
    ogAlt: "Gerardo García, Full Stack Developer",
  },
  nav: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    switchLabel: "ES",
    switchAria: "Ver en español",
  },
  hero: {
    greeting: "Hi, I'm Gerardo García",
    titleTop: "Full Stack",
    titleBottom: "Developer",
    taglineStart:
      "I build scalable, user-focused web applications, with a particular strength in",
    taglineHighlight: "frontend",
    taglineEnd: " development.",
    cv: "Download CV",
  },
  skills: {
    title: "What I do?",
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        items: [
          "Apps with Next.js, App Router and Server Components",
          "Accessible interfaces with shadcn/ui and Radix UI",
          "Testing with React Testing Library and Playwright",
        ],
      },
      {
        id: "backend",
        name: "Backend Development",
        items: [
          "REST APIs with Node.js, Express and NestJS",
          "Microservices with .NET Core 8 and SQL Server",
          "Real-time features with WebSockets and Socket.io",
        ],
      },
      {
        id: "devops",
        name: "DevOps & Deployment",
        items: [
          "Vercel deployments with preview environments",
          "Monorepos with Docker",
          "VPS servers with NGINX, PM2 and SSL",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "Career",
    title: "Experience",
    items: [
      {
        company: "XDEVELOP",
        role: "Frontend Developer",
        period: "Apr 2026 – Present",
        description:
          "Consulting projects for different clients with Next.js 16, App Router and Server Components. Accessible interfaces with shadcn/ui and Radix UI, testing with RTL and Playwright, Vercel deployments and NestJS APIs when the project needs them.",
        tags: ["Next.js", "shadcn/ui", "Playwright", "NestJS", "Docker", "Vercel"],
      },
      {
        company: "Telo",
        role: "Front End Developer",
        period: "Sep 2023 – Jan 2025",
        description:
          "Reusable Web Components in Angular and React with Angular Material and MUI, REST API and real-time WebSocket integrations, and RESTful APIs with .NET Core 8 and SQL Server on Azure DevOps.",
        tags: ["Angular", "React", "MUI", ".NET Core 8", "SQL Server", "Azure DevOps"],
      },
      {
        company: "Petco",
        role: "Full Stack Developer",
        period: "Nov 2022 – Jun 2023",
        description:
          "Figma prototypes and frontends with React and Vue, RESTful APIs with Express and Node.js on MySQL and MongoDB, and VPS deployments with NGINX, PM2 and SSL.",
        tags: ["React", "Vue.js", "Node.js", "Express", "MongoDB", "NGINX"],
      },
      {
        company: "Ids Comercial",
        role: "CELLS Intern",
        period: "May 2022 – Sep 2022",
        description:
          "Web Components with the CELLS framework for internal projects, working with SCRUM, Jira Cloud, Bitbucket and GitLab.",
        tags: ["CELLS", "Web Components", "SCRUM", "Jira"],
      },
    ],
  },
  projects: {
    eyebrow: "My work",
    title: "Projects",
    code: "Source code",
    preview: "Live preview",
    more: "More projects on",
    items: {
      pos: { title: "Dulce Atardecer POS", status: "Point of sale · Next.js 16" },
      api: { title: "Dulce Atardecer API", status: "REST API · .NET Core" },
      cms: { title: "Portfolio CMS", status: "Headless CMS · Strapi 5" },
    },
  },
  contact: {
    eyebrow: "Let's talk",
    title: "Contact",
    intro:
      "Have a question or a project in mind? Feel free to reach out and I'll get back to you as soon as possible.",
    locationLabel: "Location:",
    location: "Mexico",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Submit",
    sending: "Sending...",
    success: "✅ Thank you for your message! I'll get back to you soon.",
    error: "There was a problem sending your message. Please try again.",
  },
  footer: {
    rights: "All rights reserved.",
    templateBy: "Template by",
    distributedBy: "Distributed by",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
