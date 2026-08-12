import Image from "next/image";

import { HighlightCard } from "@/features/about/components/highlight-card";
import { Reveal } from "@/components/reveal";
import { HIGHLIGHTS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-heading"
      className="scroll-mt-20 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.15em] text-twilight-indigo uppercase">
            Sobre mí
          </p>
          <h2
            id="sobre-mi-heading"
            className="mt-3 text-3xl font-bold text-jet-black md:text-4xl"
          >
            Del diseño a la producción
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-jet-black/75">
            <p>
              Tengo experiencia integrando tecnologías para crear soluciones
              escalables, eficientes y orientadas al usuario. Actualmente
              colaboro en proyectos de consultoría como desarrollador
              frontend con Next.js, adaptándome a distintos stacks y
              librerías de UI según las necesidades de cada cliente.
            </p>
            <p>
              Complemento el trabajo con pruebas automatizadas (RTL,
              Playwright), despliegues en Vercel, arquitecturas de monorepos
              con Docker, y herramientas de IA como Claude Code y Claude
              Design para optimizar el proceso de desarrollo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="flex flex-col justify-center gap-6">
          <Image
            src="/illustrations/design-system.svg"
            alt=""
            aria-hidden="true"
            width={960}
            height={479}
            className="h-auto w-full"
            priority={false}
          />
          {HIGHLIGHTS.map((highlight) => (
            <HighlightCard
              key={highlight.number}
              number={highlight.number}
              text={highlight.text}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
