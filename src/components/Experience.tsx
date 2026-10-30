import type { ExperienceItem } from "@/data/experiences/types";
import type { SectionHeader } from "@/data/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatPeriod } from "@/lib/formats";

interface ExperienceProps {
  lang: Locale;
  header: SectionHeader;
  items: ExperienceItem[];
  dict: Dictionary["experience"];
}

export default function Experience({ lang, header, items, dict }: ExperienceProps) {
  return (
    <section id="experience" className="py-12 border-t border-divider text-light">
      <div className="max-w-5xl mx-auto">
        {header.eyebrow && <h2 className="text-lg text-sec mb-2 shiny-sec">{header.eyebrow}</h2>}
        <h3 className="text-4xl md:text-5xl font-medium mb-8">{header.heading}</h3>

        <ol className="space-y-4">
          {items.map((job) => (
            <li
              key={job.documentId}
              className="bg-surface border border-icon-tr rounded-2xl p-6"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <h4 className="text-2xl font-semibold">{job.company}</h4>
                <span className="text-sm text-icon">
                  {formatPeriod(lang, job.startDate, job.endDate, dict.present)}
                </span>
              </div>
              <p className="text-sec mt-1">{job.role}</p>
              <p className="text-icon mt-4">{job.description}</p>
              {job.tags.length > 0 && (
                <ul className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((tag) => (
                    <li
                      key={tag.name}
                      className="px-3 py-1 text-xs text-icon border border-icon-tr rounded-full"
                    >
                      {tag.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
