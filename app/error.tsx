"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

const ErrorPage = ({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) => {
    useEffect(() => {
        console.error("Error al renderizar la página:", error);
    }, [error]);

    return (
        <section aria-labelledby="error-heading" className="flex flex-col items-center gap-4 px-6 py-24 text-center">
            <h1 id="error-heading" className="text-2xl font-bold text-jet-black md:text-3xl">
                No pudimos cargar el contenido
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-jet-black/70">
                Hubo un problema al obtener la información del portafolio. Intenta de nuevo en unos segundos.
            </p>
            <Button size="lg" onClick={() => retry()}>
                Reintentar
            </Button>
        </section>
    );
};

export default ErrorPage;
