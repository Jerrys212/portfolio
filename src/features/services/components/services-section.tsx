import { Code2, Rocket, Server, type LucideIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/features/services/components/service-card";
import { Reveal } from "@/components/reveal";
import type { ServicesBlock } from "@/data/home-page/types";
import type { Service } from "@/data/services/types";

const ICONS: Record<Service["icon"], LucideIcon> = {
    code: Code2,
    server: Server,
    rocket: Rocket,
};

export const ServicesSection = ({ block, services }: { block: ServicesBlock; services: Service[] }) => {
    const { header, illustration, cta } = block;

    return (
        <section
            id="servicios"
            aria-labelledby={header.heading ? "servicios-heading" : undefined}
            aria-label={header.heading ? undefined : header.eyebrow}
            className="scroll-mt-20 bg-space-indigo px-6 py-16 md:px-10 md:py-24"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                    <Reveal>
                        <p className="text-xs font-semibold tracking-[0.15em] text-periwinkle uppercase">{header.eyebrow}</p>
                        {header.heading && (
                            <h2 id="servicios-heading" className="mt-3 text-3xl font-bold text-ghost-white md:text-4xl">
                                {header.heading}
                            </h2>
                        )}
                    </Reveal>

                    {illustration && (
                        <Reveal delay={75} className="hidden md:block">
                            <Image
                                src={illustration.url}
                                alt=""
                                aria-hidden="true"
                                width={960}
                                height={807}
                                className="mx-auto h-auto w-full max-w-xs"
                            />
                        </Reveal>
                    )}
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {services.map((service, index) => (
                        <Reveal key={service.documentId} delay={index * 75} className="h-full">
                            <ServiceCard icon={ICONS[service.icon]} title={service.title} description={service.description} />
                        </Reveal>
                    ))}
                </div>

                {cta && (
                    <Reveal delay={225} className="mt-10">
                        <Button asChild variant={cta.variant === "outline" ? "outline" : "default"} size="lg">
                            <a href={cta.href}>{cta.label}</a>
                        </Button>
                    </Reveal>
                )}
            </div>
        </section>
    );
};
