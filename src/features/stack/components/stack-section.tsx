import { StackCard } from "@/features/stack/components/stack-card";
import { RotatedSquare } from "@/components/decorative-shapes";
import { Reveal } from "@/components/reveal";
import type { SectionHeader } from "@/data/home-page/types";
import type { StackGroup } from "@/data/stack-groups/types";

export const StackSection = ({ header, groups }: { header: SectionHeader; groups: StackGroup[] }) => {
    return (
        <section
            id="stack"
            aria-labelledby={header.heading ? "stack-heading" : undefined}
            aria-label={header.heading ? undefined : header.eyebrow}
            className="relative scroll-mt-20 overflow-hidden px-6 py-16 md:px-10 md:py-24"
        >
            <RotatedSquare className="absolute top-8 right-10 hidden size-14 md:block" />

            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <p className="text-xs font-semibold tracking-[0.15em] text-twilight-indigo uppercase">{header.eyebrow}</p>
                    {header.heading && (
                        <h2 id="stack-heading" className="mt-3 text-3xl font-bold text-jet-black md:text-4xl">
                            {header.heading}
                        </h2>
                    )}
                </Reveal>

                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {groups.map((group, index) => (
                        <Reveal key={group.documentId} delay={index * 75} className="h-full">
                            <StackCard
                                title={group.title}
                                primary={group.primary.map((item) => item.name)}
                                secondary={group.secondary.map((item) => item.name)}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
