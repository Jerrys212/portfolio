"use client";

import { useEffect } from "react";
import "./globals.css";

import { Button } from "@/components/ui/button";

const GlobalError = ({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) => {
    useEffect(() => {
        console.error("Error al renderizar el layout:", error);
    }, [error]);

    return (
        <html lang="es">
            <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
                <h1 className="text-2xl font-bold text-jet-black md:text-3xl">El sitio no está disponible</h1>
                <p className="max-w-md text-sm leading-relaxed text-jet-black/70">
                    No pudimos cargar el portafolio en este momento. Intenta de nuevo en unos segundos.
                </p>
                <Button size="lg" onClick={() => retry()}>
                    Reintentar
                </Button>
            </body>
        </html>
    );
};

export default GlobalError;
