import type { ExperienceItem } from "@/data/experiences/types";
import type { Global } from "@/data/global/types";
import type { Technology } from "@/data/technologies/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { env } from "@/lib/env";

export const absoluteUrl = (path = "/") => new URL(path, env.NEXT_PUBLIC_SITE_URL).toString();

export const resolveSeo = (global: Global, seo: Dictionary["seo"]) => ({
  title: global.seo?.metaTitle ?? `${global.fullName} | ${seo.title}`,
  description: global.seo?.metaDescription ?? seo.description,
});

export const ogLocales: Record<Locale, string> = { es: "es_MX", en: "en_US" };

const education = {
  school: "Tecnológico de Estudios Superiores de Cuautitlán Izcalli",
  degree: "Ingeniería en Tecnologías de la Información y Comunicaciones",
};

const coreSkills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Angular",
  "Vue.js",
  "Node.js",
  "NestJS",
  "Express",
  ".NET Core",
  "Tailwind CSS",
  "shadcn/ui",
  "Radix UI",
  "React Testing Library",
  "Playwright",
  "Docker",
  "Vercel",
  "MongoDB",
  "MySQL",
  "SQL Server",
  "WebSockets",
  "REST APIs",
  "Web Accessibility",
];

interface ProfileJsonLdInput {
  lang: Locale;
  global: Global;
  title: string;
  description: string;
  experiences: ExperienceItem[];
  technologies: Technology[];
}

export function buildProfileJsonLd({
  lang,
  global,
  title,
  description,
  experiences,
  technologies,
}: ProfileJsonLdInput) {
  const personId = absoluteUrl("/#person");
  const websiteId = absoluteUrl("/#website");
  const pageUrl = absoluteUrl(`/${lang}`);
  const currentJob = experiences.find((job) => job.endDate === null);
  const knowsAbout = [
    ...new Set([
      ...coreSkills,
      ...technologies.map((tech) => tech.name),
      ...experiences.flatMap((job) => job.tags.map((tag) => tag.name)),
    ]),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl("/"),
        name: global.fullName,
        inLanguage: ["es", "en"],
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: lang,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: global.fullName,
        alternateName: global.name,
        url: pageUrl,
        email: `mailto:${global.email}`,
        jobTitle: global.role,
        description,
        sameAs: [global.githubUrl, global.linkedinUrl],
        address: { "@type": "PostalAddress", addressCountry: "MX" },
        ...(currentJob && {
          worksFor: { "@type": "Organization", name: currentJob.company },
        }),
        alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: education.degree,
        },
        hasOccupation: {
          "@type": "Occupation",
          name: global.role,
          occupationLocation: { "@type": "Country", name: "México" },
          skills: knowsAbout.join(", "),
        },
        knowsAbout,
      },
    ],
  };
}

export const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
