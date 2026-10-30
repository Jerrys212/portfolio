import { profile, projects } from "@/data/profile";
import type { Dictionary } from "@/i18n/dictionaries";
import { GitHubIcon } from "./SocialIcons";

const iconButtonClass =
  "size-14 flex justify-center items-center text-icon hover:text-white transition duration-300 ease-in-out border border-icon-tr p-3 rounded-xl bg-surface hover:bg-icon-tr";

export default function Projects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <section id="projects" className="py-12 border-t border-divider text-light">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg text-sec mb-2 shiny-sec">{dict.eyebrow}</h2>
        <h3 className="text-4xl md:text-5xl font-medium mb-8">{dict.title}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const { title, status } = dict.items[project.id];
            const mainUrl = project.liveUrl ?? project.repoUrl;

            return (
              <div key={project.id} className="group">
                <a href={mainUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
                    <img
                      src={project.image}
                      alt={title}
                      className="w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </a>
                <div className="flex items-center px-3">
                  <a href={mainUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex-grow">
                      <h4 className="text-2xl font-semibold">{title}</h4>
                      <span className="py-1 text-sm text-icon">{status}</span>
                    </div>
                  </a>
                  <div className="flex gap-2 ml-auto pl-2">
                    <a target="_blank" rel="noopener noreferrer" href={project.repoUrl} aria-label={dict.code} className={iconButtonClass}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                        <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" />
                      </svg>
                    </a>
                    {project.liveUrl && (
                      <a target="_blank" rel="noopener noreferrer" href={project.liveUrl} aria-label={dict.preview} className={iconButtonClass}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                          <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={profile.githubUrl}
          aria-label="GitHub"
          className="w-full flex items-center justify-center gap-2 mt-9 text-icon hover:text-white transition duration-300 ease-in-out border border-icon-tr p-3 rounded-full bg-surface hover:bg-icon-tr hover:scale-105"
        >
          <span className="md:text-lg">{dict.more}</span>
          <GitHubIcon className="size-6" />
        </a>
      </div>
    </section>
  );
}
