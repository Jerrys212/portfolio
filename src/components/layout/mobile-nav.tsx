"use client";

import { useState } from "react";
import { Download, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";

export const MobileNav = ({ cvUrl }: { cvUrl: string | null }) => {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Abrir menú de navegación" className="min-[860px]:hidden">
                    <Menu aria-hidden="true" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:max-w-xs">
                <SheetHeader>
                    <SheetTitle>Menú</SheetTitle>
                </SheetHeader>
                <nav aria-label="Navegación principal" className="flex flex-col gap-1 px-4">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-2 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-twilight-indigo"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                {cvUrl && (
                    <div className="mt-auto px-4 pb-4">
                        <Button asChild className="w-full">
                            <a href={cvUrl} download target="_blank" rel="noopener noreferrer">
                                <Download aria-hidden="true" />
                                Descargar CV
                            </a>
                        </Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};
