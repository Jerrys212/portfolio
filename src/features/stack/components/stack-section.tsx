import { StackCard } from "@/features/stack/components/stack-card";
import { RotatedSquare } from "@/components/decorative-shapes";
import { Reveal } from "@/components/reveal";
import { STACK } from "@/lib/constants";

export function StackSection() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="relative scroll-mt-20 overflow-hidden px-6 py-16 md:px-10 md:py-24"
    >
      <RotatedSquare className="absolute top-8 right-10 hidden size-14 md:block" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.15em] text-twilight-indigo uppercase">
            Stack
          </p>
        </Reveal>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map((group, index) => (
            <Reveal key={group.title} delay={index * 75} className="h-full">
              <StackCard
                title={group.title}
                primary={group.primary}
                secondary={group.secondary}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
