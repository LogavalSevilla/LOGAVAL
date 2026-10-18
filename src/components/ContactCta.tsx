"use client";

import type { FormEvent } from "react";
import type { Dictionary } from "@/i18n/translations";

const EMAIL = "carlos@logaval.es";
const WHATSAPP = "34699094559";
const PHONE = "+34699094559";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9.3c.3-.7 1-1.5 1.6-1.5.3 0 .6.1.9.8.3.6.8 1.9.8 2 .1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.4.4-.2.8.3.5 1.2 1.7 2.5 2.3.5.2.7.2.9 0 .2-.2.6-.7.8-.9.2-.2.4-.2.6-.1.3.1 1.6.8 1.9 1 .3.1.5.2.5.4 0 .2 0 1-.5 1.5-.5.6-1.6.9-2.3.9-1.5 0-3.4-.9-4.7-2.1-1.6-1.4-2.6-3.1-2.8-4.5-.1-.7.1-1.4.4-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
      <path
        d="M6.6 4h3l1.4 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.4v3a2 2 0 0 1-2.1 2A17 17 0 0 1 4.6 6.1 2 2 0 0 1 6.6 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactCta({ dict }: { dict: Dictionary }) {
  const { cta, about } = dict;
  const countryOptions = [...about.countries, cta.form.other];
  const clientTypeOptions = [...cta.form.clientTypeOptions, cta.form.other];
  const projectTypeOptions = [...cta.form.projectTypeOptions, cta.form.other];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `${cta.form.name}: ${data.get("name")}`,
      `${cta.form.country}: ${data.get("country")}`,
      `${cta.form.clientType}: ${data.get("clientType")}`,
      `${cta.form.projectType}: ${data.get("projectType")}`,
      "",
      String(data.get("message") ?? ""),
    ];
    const subject = encodeURIComponent(`${cta.title} — ${data.get("name") ?? ""}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "w-full border-b border-cream/30 bg-transparent py-2 text-sm text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none";

  return (
    <section id="contact" className="bg-navy text-cream">
      <div className="mx-auto max-w-2xl px-6 pt-10 pb-10 lg:px-10 lg:pt-14 lg:pb-14">
        <h2 className="font-serif text-2xl text-cream sm:text-3xl">
          {cta.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-cream/80">{cta.body}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-sm border border-cream/25 px-4 py-2 text-sm text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <MailIcon />
            {cta.channels.email}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-cream/25 px-4 py-2 text-sm text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <WhatsAppIcon />
            {cta.channels.whatsapp}
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-sm border border-cream/25 px-4 py-2 text-sm text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <PhoneIcon />
            {cta.channels.call}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              name="name"
              placeholder={cta.form.name}
              required
              className={inputClasses}
            />
            <select
              name="country"
              required
              defaultValue=""
              className={inputClasses}
            >
              <option value="" disabled>
                {cta.form.country}
              </option>
              {countryOptions.map((option) => (
                <option key={option} value={option} className="text-navy">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <select
              name="clientType"
              required
              defaultValue=""
              className={inputClasses}
            >
              <option value="" disabled>
                {cta.form.clientType}
              </option>
              {clientTypeOptions.map((option) => (
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
              {projectTypeOptions.map((option) => (
                <option key={option} value={option} className="text-navy">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="message"
            placeholder={cta.form.message}
            rows={3}
            className={`${inputClasses} resize-none`}
          />

          <button
            type="submit"
            className="rounded-sm bg-gold px-6 py-2.5 text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-cream"
          >
            {cta.button}
          </button>
        </form>
      </div>
    </section>
  );
}
