"use client";

import { useState, type FormEvent } from "react";
import type { ContactSection } from "@/data/home-page/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { sendContactMessage } from "@/lib/contact";

const fieldClass =
  "px-4 py-2 bg-surface text-light border border-icon-tr rounded-lg focus:outline-none focus:ring-2 focus:ring-sec";

type Status = "idle" | "sending" | "sent" | "error";

interface ContactProps {
  content: ContactSection;
  dict: Dictionary["contact"];
}

export default function Contact({ content, dict }: ContactProps) {
  const { header, location } = content;
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      const { ok } = await sendContactMessage({
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        message: String(formData.get("message") ?? ""),
      });
      if (ok) form.reset();
      setStatus(ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full py-12 border-t border-divider">
      <div className="max-w-5xl mx-auto">
        {header.eyebrow && <h2 className="text-lg text-sec mb-2 shiny-sec">{header.eyebrow}</h2>}
        <h3 className="text-4xl md:text-5xl font-medium text-light mb-6">
          {header.heading}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-icon">
            {header.description && <p className="mb-4">{header.description}</p>}
            {location && (
              <div className="flex items-center gap-2">
                <span>{dict.locationLabel}</span>
                <span className="text-light">{location}</span>
              </div>
            )}
          </div>

          <div>
            <form
              id="contact-form"
              className="flex flex-col gap-4"
              style={status === "sent" ? { display: "none" } : undefined}
              onSubmit={handleSubmit}
            >
              <input type="text" name="name" placeholder={dict.name} required minLength={2} maxLength={100} className={fieldClass} />
              <input type="email" name="email" placeholder={dict.email} required maxLength={200} className={fieldClass} />
              <textarea name="message" placeholder={dict.message} rows={6} required minLength={10} maxLength={5000} className={`${fieldClass} resize-none`}></textarea>
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-4 py-2 bg-icon-tr text-light rounded-lg opacity-60 transition-opacity border border-icon-tr hover:opacity-100 hover:bg-icon-tr disabled:cursor-not-allowed disabled:hover:opacity-60"
              >
                {status === "sending" ? dict.sending : dict.submit}
              </button>
              {status === "error" && (
                <p role="alert" className="text-red-400 text-sm">
                  {dict.error}
                </p>
              )}
            </form>
            <div
              id="form-message"
              className={`${status === "sent" ? "" : "hidden "}justify-center items-center mt-4 text-light text-lg`}
            >
              {dict.success}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
