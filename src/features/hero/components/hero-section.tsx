import Image from "next/image";

import { Button } from "@/components/ui/button";
import { PlusMark } from "@/components/decorative-shapes";
import { Reveal } from "@/components/reveal";

export const HeroSection = () => {
    return (
        <section aria-label="Presentación" className="relative overflow-hidden px-6 pt-12 pb-20 md:px-10 md:pt-16 md:pb-28">
            <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
                <Reveal className="order-1 md:order-2">
                    <p className="text-xs font-semibold tracking-[0.15em] text-twilight-indigo uppercase">Full Stack Developer</p>
                    <h1 className="mt-3 text-4xl leading-tight font-bold text-jet-black md:text-5xl">Gerardo García Medina</h1>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-jet-black/75">
                        Desarrollador Full Stack con sólida experiencia en el desarrollo de aplicaciones web escalables y orientadas al usuario, con
                        especialización y mayor fortaleza en el frontend. He colaborado en proyectos de consultoría para distintos clientes,
                        adaptándome con rapidez a diferentes stacks, arquitecturas y flujos de trabajo según las necesidades de cada proyecto. Me
                        caracterizo por mi capacidad de aprendizaje acelerado y mi disposición a enfrentar nuevos retos tecnológicos sin temor a la
                        curva de aprendizaje que estos representan; entiendo la tecnología como un campo en constante evolución y busco mantenerme
                        siempre a la vanguardia. Comprometido con la calidad del código, las buenas prácticas y la satisfacción del cliente, busco
                        formar parte de proyectos desafiantes donde pueda seguir creciendo técnicamente y aportando valor real a los equipos con los
                        que trabajo.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button asChild size="lg">
                            <a href="#contacto">Hablemos</a>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <a href="#proyectos">Ver proyectos</a>
                        </Button>
                    </div>
                </Reveal>

                <Reveal delay={100} className="order-2 md:order-1">
                    <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-periwinkle md:mx-0 mx-auto">
                        <Image
                            src="/hero.avif"
                            alt="Foto de Gerardo García Medina"
                            fill
                            priority
                            sizes="(min-width: 768px) 448px, 100vw"
                            className="object-cover"
                        />
                    </div>
                    {/* <PlusMark className="mt-4 ml-4 size-6 text-jet-black md:ml-2" /> */}
                </Reveal>
            </div>
        </section>
    );
};
