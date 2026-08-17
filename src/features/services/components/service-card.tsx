import type { LucideIcon } from "lucide-react";

export const ServiceCard = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => {
    return (
        <div className="flex h-full flex-col rounded-2xl border border-ghost-white/10 bg-ghost-white/5 p-6">
            <div className="flex size-11 items-center justify-center rounded-xl bg-periwinkle/15">
                <Icon aria-hidden="true" className="size-5 text-periwinkle" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-ghost-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ghost-white/70">{description}</p>
        </div>
    );
};
