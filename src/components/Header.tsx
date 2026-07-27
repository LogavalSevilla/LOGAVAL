import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#nosotros", label: "Sobre nosotros" },
  { href: "#proceso", label: "Proceso" },
  { href: "#productos", label: "Productos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link href="#inicio">
          <Image
            src="/images/logo.png"
            alt="LOGAVAL Export Trading"
            width={630}
            height={184}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-navy transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden rounded-sm bg-navy px-5 py-2.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-gold md:inline-block"
        >
          Solicitar información
        </a>
      </div>
    </header>
  );
}
