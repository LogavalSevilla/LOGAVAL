import Image from "next/image";
import Link from "next/link";
import { locales, type Dictionary, type Locale } from "@/i18n/translations";
import MobileMenu from "./MobileMenu";

const LOCALE_LABELS: Record<Locale, string> = { en: "EN", es: "ES", it: "IT" };

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const navItems = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#manufacturers", label: dict.nav.manufacturers },
    { href: "#products", label: dict.nav.products },
    { href: "#markets", label: dict.nav.markets },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-10">
        <Link href={`/${locale}#inicio`} className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="LOGAVAL Export Trading"
            width={630}
            height={184}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-navy transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1.5 text-xs font-semibold tracking-wide text-navy/70 lg:flex">
            {locales.map((loc, i) => (
              <span key={loc} className="flex items-center gap-1.5">
                <Link
                  href={`/${loc}`}
                  className={loc === locale ? "text-gold" : "hover:text-gold"}
                >
                  {LOCALE_LABELS[loc]}
                </Link>
                {i < locales.length - 1 && <span className="text-navy/30">·</span>}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-sm bg-navy px-5 py-2.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-gold lg:inline-block"
          >
            {dict.nav.contact}
          </a>
          <MobileMenu
            navItems={navItems}
            contactLabel={dict.nav.contact}
            locales={locales}
            localeLabels={LOCALE_LABELS}
            currentLocale={locale}
          />
        </div>
      </div>
    </header>
  );
}
