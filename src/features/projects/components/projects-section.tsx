import { ProjectCard } from "@/features/projects/components/project-card";
import { Reveal } from "@/components/reveal";
import type { SectionHeader } from "@/data/home-page/types";
import type { Project } from "@/data/projects/types";

export const ProjectsSection = ({ header, projects }: { header: SectionHeader; projects: Project[] }) => {
    return (
        <section
            id="proyectos"
            aria-labelledby={header.heading ? "proyectos-heading" : undefined}
            aria-label={header.heading ? undefined : header.eyebrow}
            className="scroll-mt-20 px-6 py-16 md:px-10 md:py-24"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <p className="text-xs font-semibold tracking-[0.15em] text-twilight-indigo uppercase">{header.eyebrow}</p>
                    {header.heading && (
                        <h2 id="proyectos-heading" className="mt-3 text-3xl font-bold text-jet-black md:text-4xl">
                            {header.heading}
                        </h2>
                    )}
                </Reveal>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <Reveal key={project.documentId} delay={index * 75} className="h-full">
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
