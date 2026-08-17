import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const ProjectCard = ({ title, description, tags, image }: { title: string; description: string; tags: readonly string[]; image: string }) => {
    return (
        <Card className="h-full gap-0 overflow-hidden rounded-2xl border-border p-0">
            <div className="relative aspect-video shrink-0 overflow-hidden bg-periwinkle/30 p-6">
                <Image src={image} alt="" aria-hidden="true" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain" />
                <Badge className="absolute top-3 right-3 h-auto rounded-full bg-jet-black/80 px-2.5 py-1 text-[0.65rem] font-medium tracking-wide text-ghost-white uppercase">
                    Próximamente
                </Badge>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-base font-bold text-jet-black">{title}</h3>
                <p className="text-sm leading-relaxed text-jet-black/70">{description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="h-auto rounded-full bg-periwinkle px-3 py-1 text-xs font-medium text-jet-black"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </Card>
    );
};
