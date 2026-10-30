import type { Global } from "@/data/global/types";
import type { Hero } from "@/data/home-page/types";
import type { Service } from "@/data/services/types";
import type { Technology } from "@/data/technologies/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { palette } from "@/lib/theme";
import LetterGlitch from "./LetterGlitch";
import LogoWall from "./LogoWall";
import SkillsList from "./SkillsList";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "./SocialIcons";

const socialLinkClass =
  "text-icon hover:text-white transition duration-300 ease-in-out border border-icon-tr p-3 rounded-xl bg-surface hover:bg-icon-tr";

interface HomeProps {
  global: Global;
  hero: Hero;
  skillsTitle: string;
  services: Service[];
  technologies: Technology[];
  dict: Dictionary["hero"];
}

export default function Home({ global, hero, skillsTitle, services, technologies, dict }: HomeProps) {
  return (
    <section className="text-light mt-12 md:mt-0" id="home">
      <div className="max-w-5xl mx-auto space-y-8 md:py-36 pb-14">
        <div className="text-left space-y-4">
          <p className="md:text-lg text-icon">{hero.greeting}</p>
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 md:gap-4">
            <h1 className="text-light text-5xl md:text-6xl font-medium text-pretty leading-none lg:shrink-0">
              {hero.titleTop} <br /> {hero.titleBottom}
            </h1>
            <p className="md:text-2xl text-icon">
              {hero.taglineStart}{" "}
              {hero.taglineHighlight && <span className="text-sec shiny-sec">{hero.taglineHighlight}</span>}
              {hero.taglineEnd}
            </p>
          </div>
          <div className="flex flex-wrap justify-start gap-2 pt-3 md:pt-6">
            <a target="_blank" rel="noopener noreferrer" href={global.githubUrl} aria-label="GitHub" className={socialLinkClass}>
              <GitHubIcon className="size-8" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={global.linkedinUrl} aria-label="LinkedIn" className={socialLinkClass}>
              <LinkedInIcon className="size-8" />
            </a>
            <a href={`mailto:${global.email}`} aria-label="Email" className={socialLinkClass}>
              <EmailIcon />
            </a>
            {global.cv && (
              <a href={global.cv.url} target="_blank" rel="noopener noreferrer" className={`${socialLinkClass} flex items-center gap-2 px-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                  <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
                </svg>
                <span className="md:text-lg">{dict.cv}</span>
              </a>
            )}
          </div>
        </div>

        {technologies.length > 0 && <LogoWall technologies={technologies} />}

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <SkillsList title={skillsTitle} services={services} />
          <div className="flex justify-center md:w-full md:h-[292px] size-[290px] pt-3 md:pt-9 md:ml-16">
            <LetterGlitch
              glitchColors={[palette.glitchMid, palette.sec, palette.glitchDark]}
              glitchSpeed={33}
              centerVignette={false}
              outerVignette={true}
              smooth={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
