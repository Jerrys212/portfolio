import { Mail, Phone } from "lucide-react";
import Image from "next/image";

import { ContactForm } from "@/features/contact/components/contact-form";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { Reveal } from "@/components/reveal";
import type { Global } from "@/data/global/types";
import type { ContactBlock } from "@/data/home-page/types";
import { toTelHref } from "@/lib/formats";

const linkClassName = "flex items-center gap-3 text-sm font-medium text-ghost-white/85 transition-colors hover:text-ghost-white";

export const ContactSection = ({ block, global }: { block: ContactBlock; global: Global }) => {
    const { header, illustration } = block;

    return (
        <section
            id="contacto"
            aria-labelledby={header.heading ? "contacto-heading" : undefined}
            aria-label={header.heading ? undefined : header.eyebrow}
            className="scroll-mt-20 bg-space-indigo px-6 py-16 md:px-10 md:py-24"
        >
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
                <Reveal>
                    <p className="text-xs font-semibold tracking-[0.15em] text-periwinkle uppercase">{header.eyebrow}</p>
                    {header.heading && (
                        <h2 id="contacto-heading" className="mt-3 text-3xl font-bold text-ghost-white md:text-4xl">
                            {header.heading}
                        </h2>
                    )}
                    {header.description && <p className="mt-4 max-w-md text-sm leading-relaxed text-ghost-white/70">{header.description}</p>}

                    <ul className="mt-8 flex flex-col gap-4">
                        <li>
                            <a href={`mailto:${global.email}`} className={linkClassName}>
                                <Mail aria-hidden="true" className="size-4 text-periwinkle" />
                                {global.email}
                            </a>
                        </li>
                        <li>
                            <a href={toTelHref(global.phone)} className={linkClassName}>
                                <Phone aria-hidden="true" className="size-4 text-periwinkle" />
                                {global.phone}
                            </a>
                        </li>
                        <li>
                            <a href={global.linkedinUrl} target="_blank" rel="noopener noreferrer" className={linkClassName}>
                                <LinkedinIcon className="size-4 text-periwinkle" />
                                LinkedIn
                            </a>
                        </li>
                    </ul>

                    {illustration && (
                        <Image
                            src={illustration.url}
                            alt=""
                            aria-hidden="true"
                            width={646}
                            height={800}
                            className="mx-auto mt-8 hidden h-auto w-full max-w-[220px] md:block"
                        />
                    )}
                </Reveal>

                <Reveal delay={100}>
                    <ContactForm />
                </Reveal>
            </div>
        </section>
    );
};
