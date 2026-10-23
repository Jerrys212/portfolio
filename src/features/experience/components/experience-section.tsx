import { ExperienceItem } from "@/features/experience/components/experience-item";
import { Reveal } from "@/components/reveal";
import type { Experience } from "@/data/experiences/types";
import type { SectionHeader } from "@/data/home-page/types";
import { formatDateRange } from "@/lib/formats";

export const ExperienceSection = ({ header, experiences }: { header: SectionHeader; experiences: Experience[] }) => {
    return (
        <section
            id="experiencia"
            aria-labelledby={header.heading ? "experiencia-heading" : undefined}
            aria-label={header.heading ? undefined : header.eyebrow}
            className="scroll-mt-20 bg-periwinkle/25 px-6 py-16 md:px-10 md:py-24"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <p className="text-xs font-semibold tracking-[0.15em] text-twilight-indigo uppercase">{header.eyebrow}</p>
                    {header.heading && (
                        <h2 id="experiencia-heading" className="mt-3 text-3xl font-bold text-jet-black md:text-4xl">
                            {header.heading}
                        </h2>
                    )}
                </Reveal>

                <div className="mt-10 flex flex-col gap-10">
                    {experiences.map((job, index) => (
                        <Reveal key={job.documentId} delay={index * 75}>
                            <ExperienceItem
                                company={job.company}
                                role={job.role}
                                date={formatDateRange(job.startDate, job.endDate)}
                                description={job.description}
                                isLast={index === experiences.length - 1}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
