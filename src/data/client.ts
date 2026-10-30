import type { z } from "zod";
import { env } from "@/lib/env";

const REVALIDATE_SECONDS = 300;

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly path: string,
    public readonly body: string,
  ) {
    super(`Strapi responded ${status} on ${path}`);
    this.name = "ApiError";
  }
}

export async function apiFetch<T>(path: string, schema: z.ZodType<T>): Promise<T> {
  const res = await fetch(`${env.STRAPI_URL}/api${path}`, {
    headers: { Authorization: `Bearer ${env.STRAPI_API_TOKEN}` },
    next: { revalidate: REVALIDATE_SECONDS, tags: ["strapi"] },
  });

  if (!res.ok) {
    const error = new ApiError(res.status, path, await res.text());
    console.error(error.message, error.body);
    throw error;
  }

  const json: unknown = await res.json();
  const parsed = schema.safeParse(json);

  if (!parsed.success) {
    console.error(`Strapi response out of contract on ${path}:`, parsed.error);
    throw parsed.error;
  }

  return parsed.data;
}
