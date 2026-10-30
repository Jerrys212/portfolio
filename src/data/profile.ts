export const profile = {
  name: "Gerardo García",
  fullName: "Gerardo García Medina",
  githubUrl: "https://github.com/Jerrys212",
  linkedinUrl: "https://www.linkedin.com/in/gerardo-garcia-63209a239",
  email: "gmgx21@outlook.com",
  cvUrl: "/cv-gerardo-garcia.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const technologies = [
  { icon: "react", name: "React" },
  { icon: "next", name: "Next.js" },
  { icon: "typeScript", name: "TypeScript" },
  { icon: "javaScript", name: "JavaScript" },
  { icon: "tailwindcss", name: "TailwindCSS" },
  { icon: "angular", name: "Angular" },
  { icon: "vue", name: "Vue.js" },
  { icon: "nodejs", name: "Node.js" },
  { icon: "nestjs", name: "NestJS" },
  { icon: "express", name: "Express" },
  { icon: "dotnet", name: ".NET" },
  { icon: "mongodb", name: "MongoDB" },
  { icon: "mysql", name: "MySQL" },
  { icon: "docker", name: "Docker" },
  { icon: "git", name: "Git" },
  { icon: "vercel", name: "Vercel" },
  { icon: "HTML5", name: "HTML5" },
  { icon: "CSS3", name: "CSS3" },
];

export type ProjectId = "pos" | "api" | "cms";

interface Project {
  id: ProjectId;
  repoUrl: string;
  liveUrl: string | null;
  image: string;
}

export const projects: Project[] = [
  {
    id: "pos",
    repoUrl: "https://github.com/Jerrys212/frontdulceatardecer",
    liveUrl: "https://frontdulceatardecer.vercel.app",
    image: "/projects/frontdulceatardecer.png",
  },
  {
    id: "api",
    repoUrl: "https://github.com/Jerrys212/DulceAtardecer",
    liveUrl: "https://dulceapi.pixelmangoweb.com/swagger",
    image: "/projects/dulceatardecer.png",
  },
  {
    id: "cms",
    repoUrl: "https://github.com/Jerrys212/portfoliocms",
    liveUrl: "https://portfoliocms.pixelmangoweb.com/admin",
    image: "/projects/portfoliocms.png",
  },
];
