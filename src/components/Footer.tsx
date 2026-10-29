import Logo from "./Logo";
import type { Dictionary, Locale } from "@/i18n/translations";

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function FacebookBadge() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1877F2]">
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          d="M15.12 8.64H13.2V7.44c0-.55.37-.72.63-.72h1.25V4.6l-1.72-.01c-1.91 0-2.35 1.43-2.35 2.34v1.71H9.6v2.52h1.41v7.44h2.19v-7.44h1.65l.27-2.52Z"
          fill="white"
        />
      </svg>
    </span>
  );
}

function InstagramBadge() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]">
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="white" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4.2" stroke="white" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="white" />
      </svg>
    </span>
  );
}

function WhatsAppBadge() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]">
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          d="M12 4a8 8 0 0 0-6.93 12.02L4 20l4.1-1.08A8 8 0 1 0 12 4Zm4.64 11.35c-.2.55-1.17 1.05-1.62 1.07-.42.02-.84.19-2.82-.58-2.38-.93-3.91-3.33-4.03-3.49-.12-.16-.96-1.28-.96-2.44 0-1.16.6-1.73.82-1.97.2-.22.44-.28.59-.28h.42c.14 0 .32-.02.5.39.2.44.66 1.53.72 1.64.06.11.1.24.02.39-.08.15-.12.24-.24.38-.12.14-.26.3-.37.4-.12.11-.25.23-.1.47.14.24.63 1.04 1.36 1.68.93.83 1.72 1.08 1.96 1.2.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.13Z"
          fill="white"
        />
      </svg>
    </span>
  );
}

function SmsBadge() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#34C759]">
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          d="M6.5 3A2.5 2.5 0 0 0 4 5.5v8A2.5 2.5 0 0 0 6.5 16h.5v3.1a.5.5 0 0 0 .8.4L11.8 16h5.7a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 17.5 3h-11Z"
          fill="white"
        />
        <circle cx="9" cy="9.5" r="1.1" fill="#34C759" />
        <circle cx="12" cy="9.5" r="1.1" fill="#34C759" />
        <circle cx="15" cy="9.5" r="1.1" fill="#34C759" />
      </svg>
    </span>
  );
}

const COMPANY = {
  name: "Logaval Export Trading, SLU",
  address: "Calle Perú, 23 · 41012 Sevilla, España",
  email: "carlos@logaval.es",
  phone: "+34 699 094 559",
  whatsapp: "34699094559",
  website: "logaval.es",
  instagram: "@logaval_spain",
  facebook: "https://www.facebook.com/Logavalexporttrading/",
};

export default function Footer({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const { footer, nav, about } = dict;
  const companyLinks = [
    { href: "#about", label: nav.about },
    { href: "#services", label: nav.services },
    { href: "#manufacturers", label: nav.manufacturers },
    { href: "#products", label: nav.products },
    { href: "#markets", label: nav.markets },
  ];

  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 lg:px-10 lg:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              {footer.tagline}
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-sm text-cream/80">
              <a
                href={`https://${COMPANY.website}`}
                className="inline-flex items-center gap-1.5 hover:text-gold"
              >
                <GlobeIcon />
                {COMPANY.website}
              </a>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-transform hover:scale-105"
              >
                <FacebookBadge />
              </a>
              <a
                href="https://instagram.com/logaval_spain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-transform hover:scale-105"
              >
                <InstagramBadge />
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="transition-transform hover:scale-105"
              >
                <WhatsAppBadge />
              </a>
              <a
                href={`sms:+${COMPANY.whatsapp}`}
                aria-label="SMS"
                className="transition-transform hover:scale-105"
              >
                <SmsBadge />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">
              {footer.companyHeading.toUpperCase()}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">
              {footer.contactHeading.toUpperCase()}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>{COMPANY.name}</li>
              <li>{COMPANY.address}</li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-gold">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">
              {footer.coverageHeading.toUpperCase()}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              {about.countries.map((country) => (
                <li key={country}>{country}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            <a href={`/${locale}/legal-notice`} className="hover:text-gold">
              {footer.legal}
            </a>
            <a href={`/${locale}/privacy-policy`} className="hover:text-gold">
              {footer.privacy}
            </a>
            <a href={`/${locale}/cookie-policy`} className="hover:text-gold">
              {footer.cookies}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
