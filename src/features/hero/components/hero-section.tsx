import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import type { Hero } from "@/data/home-page/types";

export const HeroSection = ({ hero }: { hero: Hero }) => {
    return (
        <section aria-label="Presentación" className="relative overflow-hidden px-6 pt-12 pb-20 md:px-10 md:pt-16 md:pb-28">
            <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
                <Reveal className="order-1 md:order-2">
                    <p className="text-xs font-semibold tracking-[0.15em] text-twilight-indigo uppercase">{hero.eyebrow}</p>
                    <h1 className="mt-3 text-4xl leading-tight font-bold text-jet-black md:text-5xl">{hero.title}</h1>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-jet-black/75">{hero.bio}</p>
                    {hero.ctas.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-4">
                            {hero.ctas.map((cta) => (
                                <Button key={cta.href} asChild variant={cta.variant === "outline" ? "outline" : "default"} size="lg">
                                    <a href={cta.href}>{cta.label}</a>
                                </Button>
                            ))}
                        </div>
                    )}
                </Reveal>

                <Reveal delay={100} className="order-2 md:order-1">
                    <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-periwinkle md:mx-0 mx-auto">
                        <Image
                            src={hero.photo.url}
                            alt={hero.photoAlt}
                            fill
                            preload
                            sizes="(min-width: 768px) 448px, 100vw"
                            className="object-cover"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
