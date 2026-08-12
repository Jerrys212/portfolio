"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { sendMessage } from "@/actions/contact/send-message";
import { ContactSchema, type ContactInput } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const fieldClassName =
  "h-11 rounded-lg border-ghost-white/15 bg-ghost-white/8 px-3.5 text-ghost-white placeholder:text-ghost-white/40 focus-visible:border-periwinkle focus-visible:ring-periwinkle/30";

export function ContactForm() {
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", contact: "", subject: "", message: "" },
  });

  const onSubmit = handleSubmit(async (data) => {
    setStatus(null);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("contact", data.contact);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    const result = await sendMessage({ success: false }, formData);

    if (result.success) {
      setStatus({
        type: "success",
        message:
          result.message ?? "Tu mensaje se envió correctamente.",
      });
      reset();
      return;
    }

    setStatus({
      type: "error",
      message:
        result.message ?? "Revisa los campos marcados e intenta de nuevo.",
    });
  });

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name" className="text-ghost-white/80">
            Nombre
          </Label>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClassName}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-300">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact" className="text-ghost-white/80">
            Correo o teléfono
          </Label>
          <Input
            id="contact"
            autoComplete="email"
            aria-invalid={!!errors.contact}
            aria-describedby={errors.contact ? "contact-error" : undefined}
            className={fieldClassName}
            {...register("contact")}
          />
          {errors.contact && (
            <p id="contact-error" className="text-xs text-red-300">
              {errors.contact.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="subject" className="text-ghost-white/80">
          Asunto
        </Label>
        <Input
          id="subject"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={fieldClassName}
          {...register("subject")}
        />
        {errors.subject && (
          <p id="subject-error" className="text-xs text-red-300">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message" className="text-ghost-white/80">
          Mensaje
        </Label>
        <Textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClassName, "h-auto min-h-32 py-3")}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-300">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
        {status && (
          <p
            aria-live="polite"
            className={cn(
              "text-sm",
              status.type === "success" ? "text-periwinkle" : "text-red-300",
            )}
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
