import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NAV_LINKS } from "@/lib/constants";

export const SiteHeader = ({ name, cvUrl }: { name: string; cvUrl: string | null }) => {
    return (
        <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20 md:px-10">
                <a href="#" className="text-lg font-bold text-jet-black">
                    {name}
                </a>

                <nav aria-label="Navegación principal" className="hidden min-[860px]:flex min-[860px]:items-center min-[860px]:gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 transition-colors hover:text-twilight-indigo"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {cvUrl && (
                    <div className="hidden min-[860px]:block">
                        <Button asChild>
                            <a href={cvUrl} download target="_blank" rel="noopener noreferrer">
                                <Download aria-hidden="true" />
                                Descargar CV
                            </a>
                        </Button>
                    </div>
                )}

                <MobileNav cvUrl={cvUrl} />
            </div>
        </header>
    );
};
