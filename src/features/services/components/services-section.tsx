import { Code2, Rocket, Server } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/features/services/components/service-card";
import { Reveal } from "@/components/reveal";
import { SERVICES } from "@/lib/constants";

const ICONS = [Code2, Server, Rocket];

export const ServicesSection = () => {
    return (
        <section id="servicios" aria-labelledby="servicios-heading" className="scroll-mt-20 bg-space-indigo px-6 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                    <Reveal>
                        <p className="text-xs font-semibold tracking-[0.15em] text-periwinkle uppercase">Servicios</p>
                        <h2 id="servicios-heading" className="mt-3 text-3xl font-bold text-ghost-white md:text-4xl">
                            En qué puedo ayudarte
                        </h2>
                    </Reveal>

                    <Reveal delay={75} className="hidden md:block">
                        <Image
                            src="/illustrations/problem-solving.svg"
                            alt=""
                            aria-hidden="true"
                            width={960}
                            height={807}
                            className="mx-auto h-auto w-full max-w-xs"
                        />
                    </Reveal>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {SERVICES.map((service, index) => (
                        <Reveal key={service.title} delay={index * 75} className="h-full">
                            <ServiceCard icon={ICONS[index]} title={service.title} description={service.description} />
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={225} className="mt-10">
                    <Button asChild size="lg">
                        <a href="#contacto">Hablemos de tu proyecto</a>
                    </Button>
                </Reveal>
            </div>
        </section>
    );
};
