import { technologies } from "@/data/profile";

export default function LogoWall() {
  return (
    <div className="relative overflow-x-hidden py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20"></div>

      <div className="flex animate-scroll w-max will-change-transform">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 pr-12 md:pr-20 group transition-all duration-300"
            aria-hidden={index >= technologies.length ? "true" : "false"}
          >
            <img
              src={`/svg/${tech.icon}.svg`}
              alt={tech.name}
              className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60"
              width="30"
              height="30"
              loading={index < technologies.length ? "eager" : "lazy"}
              decoding="async"
            />
            <span className="text-lg font-medium text-icon whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
