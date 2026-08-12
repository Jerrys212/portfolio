import { UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PlusMark } from "@/components/decorative-shapes";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section
      aria-label="Presentación"
      className="relative overflow-hidden px-6 pt-12 pb-20 md:px-10 md:pt-16 md:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal className="order-1 md:order-2">
          <p className="text-xs font-semibold tracking-[0.15em] text-twilight-indigo uppercase">
            Full Stack Developer
          </p>
          <h1 className="mt-3 text-4xl leading-tight font-bold text-jet-black md:text-5xl">
            Gerardo García Medina
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-jet-black/75">
            Desarrollador Full Stack especializado en Node.js y en el
            ecosistema React/Next.js. Construyo interfaces con shadcn/ui y
            Radix UI, las cubro con pruebas en RTL y Playwright, y las
            despliego en Vercel y arquitecturas de monorepos con Docker.
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
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-twilight-indigo/60">
              <UserRound aria-hidden="true" className="size-16" strokeWidth={1.25} />
              <span className="text-sm font-medium">Foto de Gerardo</span>
            </div>
          </div>
          <PlusMark className="mt-4 ml-4 size-6 text-jet-black md:ml-2" />
        </Reveal>
      </div>
    </section>
  );
}
