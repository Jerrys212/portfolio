import Image from "next/image";

import { HighlightCard } from "@/features/about/components/highlight-card";
import { Reveal } from "@/components/reveal";
import type { About } from "@/data/home-page/types";

export const AboutSection = ({ about }: { about: About }) => {
    const { header, paragraphs, illustration, highlights } = about;

    return (
        <section
            id="sobre-mi"
            aria-labelledby={header.heading ? "sobre-mi-heading" : undefined}
            aria-label={header.heading ? undefined : header.eyebrow}
            className="scroll-mt-20 px-6 py-10 md:px-10 md:py-14"
        >
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
                <Reveal>
                    <p className="text-xs font-semibold tracking-[0.15em] text-twilight-indigo uppercase">{header.eyebrow}</p>
                    {header.heading && (
                        <h2 id="sobre-mi-heading" className="mt-3 text-3xl font-bold text-jet-black md:text-4xl">
                            {header.heading}
                        </h2>
                    )}
                    <div className="mt-5 space-y-4 text-base leading-relaxed text-jet-black/75">
                        {paragraphs.map((paragraph) => (
                            <p key={paragraph.id}>{paragraph.text}</p>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={100} className="flex flex-col justify-center gap-6">
                    {illustration && <Image src={illustration.url} alt="" aria-hidden="true" width={960} height={479} className="h-auto w-full" />}
                    {highlights.map((highlight) => (
                        <HighlightCard key={highlight.id} number={highlight.number} text={highlight.text} />
                    ))}
                </Reveal>
            </div>
        </section>
    );
};
