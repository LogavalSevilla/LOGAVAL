"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/translations";

type NavItem = { href: string; label: string };

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      {open ? (
        <path
          d="M6 6l12 12M18 6 6 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function MobileMenu({
  navItems,
  contactLabel,
  locales,
  localeLabels,
  currentLocale,
}: {
  navItems: NavItem[];
  contactLabel: string;
  locales: readonly Locale[];
  localeLabels: Record<Locale, string>;
  currentLocale: Locale;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center text-navy"
      >
        <MenuIcon open={open} />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-navy/10 bg-cream px-6 py-6 shadow-sm">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-navy transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-navy/70">
            {locales.map((loc, i) => (
              <span key={loc} className="flex items-center gap-1.5">
                <a
                  href={`/${loc}`}
                  className={loc === currentLocale ? "text-gold" : "hover:text-gold"}
                >
                  {localeLabels[loc]}
                </a>
                {i < locales.length - 1 && <span className="text-navy/30">·</span>}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-sm bg-navy px-5 py-2.5 text-center text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-gold"
          >
            {contactLabel}
          </a>
        </div>
      )}
    </div>
  );
}
