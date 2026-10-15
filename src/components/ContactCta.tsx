"use client";

import type { FormEvent } from "react";
import type { Dictionary } from "@/i18n/translations";

const EMAIL = "carlos@logaval.es";
const WHATSAPP = "34699094559";

export default function ContactCta({ dict }: { dict: Dictionary }) {
  const { cta } = dict;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `${cta.form.name}: ${data.get("name")}`,
      `${cta.form.company}: ${data.get("company")}`,
      `${cta.form.country}: ${data.get("country")}`,
      `${cta.form.clientType}: ${data.get("clientType")}`,
      `${cta.form.projectType}: ${data.get("projectType")}`,
      `${cta.form.volume}: ${data.get("volume") || "-"}`,
      "",
      String(data.get("message") ?? ""),
    ];
    const subject = encodeURIComponent(`${cta.title} — ${data.get("company") ?? ""}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "w-full border-b border-cream/30 bg-transparent py-2.5 text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none";

  return (
    <section id="contact" className="bg-navy text-cream">
      <div className="mx-auto max-w-3xl px-6 pt-10 pb-10 lg:px-10 lg:pt-14 lg:pb-14">
        <h2 className="font-serif text-3xl text-cream sm:text-4xl">
          {cta.title}
        </h2>
        <p className="mt-6 leading-relaxed text-cream/80">{cta.body}</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              name="name"
              placeholder={cta.form.name}
              required
              className={inputClasses}
            />
            <input
              name="company"
              placeholder={cta.form.company}
              required
              className={inputClasses}
            />
            <input
              name="country"
              placeholder={cta.form.country}
              required
              className={inputClasses}
            />
            <input
              name="volume"
              placeholder={cta.form.volume}
              className={inputClasses}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <select
              name="clientType"
              required
              defaultValue=""
              className={inputClasses}
            >
              <option value="" disabled>
                {cta.form.clientType}
              </option>
              {cta.form.clientTypeOptions.map((option) => (
                <option key={option} value={option} className="text-navy">
                  {option}
                </option>
              ))}
            </select>
            <select
              name="projectType"
              required
              defaultValue=""
              className={inputClasses}
            >
              <option value="" disabled>
                {cta.form.projectType}
              </option>
              {cta.form.projectTypeOptions.map((option) => (
                <option key={option} value={option} className="text-navy">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="message"
            placeholder={cta.form.message}
            rows={4}
            className={`${inputClasses} resize-none`}
          />

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="submit"
              className="rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-cream"
            >
              {cta.button}
            </button>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cream/80 underline-offset-4 hover:text-gold hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
