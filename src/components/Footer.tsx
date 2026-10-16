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

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
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
};

export default function Footer({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const { footer } = dict;
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-16 lg:px-10 lg:pt-14 lg:pb-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <Logo variant="dark" />

          <div className="space-y-1.5 text-sm text-cream/80">
            <p>{COMPANY.name}</p>
            <p>{COMPANY.address}</p>
            <p>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-gold">
                {COMPANY.email}
              </a>
              {" · "}
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {COMPANY.phone}
              </a>
            </p>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <a
                href={`https://${COMPANY.website}`}
                className="inline-flex items-center gap-1.5 hover:text-gold"
              >
                <GlobeIcon />
                {COMPANY.website}
              </a>
              <a
                href="https://instagram.com/logaval_spain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-gold"
              >
                <InstagramIcon />
                {COMPANY.instagram}
              </a>
            </p>
          </div>

          <div className="flex gap-6 text-sm text-cream/80">
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

        <div className="mt-10 border-t border-cream/15 pt-6 text-xs text-cream/60">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
