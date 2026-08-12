import { ProjectCard } from "@/features/projects/components/project-card";
import { Reveal } from "@/components/reveal";
import { PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-heading"
      className="scroll-mt-20 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.15em] text-twilight-indigo uppercase">
            Proyectos
          </p>
          <h2
            id="proyectos-heading"
            className="mt-3 text-3xl font-bold text-jet-black md:text-4xl"
          >
            Trabajo reciente
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 75} className="h-full">
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
