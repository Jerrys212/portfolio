import { Mail, Phone } from "lucide-react";
import Image from "next/image";

import { ContactForm } from "@/features/contact/components/contact-form";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/constants";

export function ContactSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="scroll-mt-20 bg-space-indigo px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.15em] text-periwinkle uppercase">
            Contacto
          </p>
          <h2
            id="contacto-heading"
            className="mt-3 text-3xl font-bold text-ghost-white md:text-4xl"
          >
            Hablemos de tu proyecto
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ghost-white/70">
            Cuéntame qué necesitas y te responderé lo antes posible para
            revisar cómo puedo ayudarte.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm font-medium text-ghost-white/85 transition-colors hover:text-ghost-white"
              >
                <Mail aria-hidden="true" className="size-4 text-periwinkle" />
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-3 text-sm font-medium text-ghost-white/85 transition-colors hover:text-ghost-white"
              >
                <Phone aria-hidden="true" className="size-4 text-periwinkle" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-ghost-white/85 transition-colors hover:text-ghost-white"
              >
                <LinkedinIcon className="size-4 text-periwinkle" />
                LinkedIn
              </a>
            </li>
          </ul>

          <Image
            src="/illustrations/contact.svg"
            alt=""
            aria-hidden="true"
            width={646}
            height={800}
            className="mx-auto mt-8 hidden h-auto w-full max-w-[220px] md:block"
          />
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
