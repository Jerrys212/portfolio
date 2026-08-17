import { ExperienceItem } from "@/features/experience/components/experience-item";
import { Reveal } from "@/components/reveal";
import { EXPERIENCE } from "@/lib/constants";

export const ExperienceSection = () => {
    return (
        <section id="experiencia" aria-labelledby="experiencia-heading" className="scroll-mt-20 bg-periwinkle/25 px-6 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <p className="text-xs font-semibold tracking-[0.15em] text-twilight-indigo uppercase">Experiencia</p>
                    <h2 id="experiencia-heading" className="mt-3 text-3xl font-bold text-jet-black md:text-4xl">
                        Trayectoria profesional
                    </h2>
                </Reveal>

                <div className="mt-10 flex flex-col gap-10">
                    {EXPERIENCE.map((job, index) => (
                        <Reveal key={job.company} delay={index * 75}>
                            <ExperienceItem
                                company={job.company}
                                role={job.role}
                                date={job.date}
                                description={job.description}
                                isLast={index === EXPERIENCE.length - 1}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
