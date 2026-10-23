import type { z } from "zod";

import { env } from "@/lib/env";

const REVALIDATE_SECONDS = 300;

export class ApiError extends Error {
    constructor(
        public readonly status: number,
        public readonly path: string,
        public readonly body: string,
    ) {
        super(`Strapi respondió ${status} en ${path}`);
        this.name = "ApiError";
    }
}

export const apiFetch = async <T>(path: string, schema: z.ZodType<T>, init?: RequestInit): Promise<T> => {
    const res = await fetch(`${env.STRAPI_URL}/api${path}`, {
        next: { revalidate: REVALIDATE_SECONDS, tags: ["strapi"] },
        ...init,
        headers: { Authorization: `Bearer ${env.STRAPI_API_TOKEN}`, ...init?.headers },
    });

    if (!res.ok) {
        const error = new ApiError(res.status, path, await res.text());
        console.error(error.message, error.body);
        throw error;
    }

    const json: unknown = await res.json();
    const parsed = schema.safeParse(json);

    if (!parsed.success) {
        console.error(`Respuesta de Strapi fuera de contrato en ${path}:`, parsed.error);
        throw parsed.error;
    }

    return parsed.data;
};
