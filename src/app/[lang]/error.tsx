"use client";

import { useParams } from "next/navigation";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { lang } = useParams<{ lang: string }>();
  const { error } = getDictionary(isLocale(lang) ? lang : defaultLocale);

  return (
    <section className="min-h-screen flex items-center justify-center text-light">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-medium">{error.title}</h1>
        <p className="text-icon">{error.description}</p>
        <button
          type="button"
          onClick={reset}
          className="px-4 py-2 bg-surface text-light border border-icon-tr rounded-lg hover:bg-icon-tr transition duration-300 ease-in-out"
        >
          {error.retry}
        </button>
      </div>
    </section>
  );
}
