import type { Locale } from "./config";

export interface Dictionary {
  nav: {
    home: string;
    experience: string;
    projects: string;
    contact: string;
    switchLabel: string;
    switchAria: string;
  };
  hero: { cv: string };
  experience: { present: string };
  projects: { code: string; preview: string; more: string };
  contact: {
    locationLabel: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: { rights: string; templateBy: string; distributedBy: string };
  error: { title: string; description: string; retry: string };
}

const es: Dictionary = {
  nav: {
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    switchLabel: "EN",
    switchAria: "View in English",
  },
  hero: { cv: "Descargar CV" },
  experience: { present: "Actualidad" },
  projects: { code: "Código", preview: "Ver en vivo", more: "Más proyectos en" },
  contact: {
    locationLabel: "Ubicación:",
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
  error: {
    title: "No pudimos cargar el contenido",
    description: "Algo falló al cargar esta página. Intenta de nuevo en unos segundos.",
    retry: "Reintentar",
  },
};

const en: Dictionary = {
  nav: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    switchLabel: "ES",
    switchAria: "Ver en español",
  },
  hero: { cv: "Download CV" },
  experience: { present: "Present" },
  projects: { code: "Source code", preview: "Live preview", more: "More projects on" },
  contact: {
    locationLabel: "Location:",
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
  error: {
    title: "We couldn't load the content",
    description: "Something went wrong while loading this page. Please try again in a few seconds.",
    retry: "Try again",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
