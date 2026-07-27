import Logo from "./Logo";

const COLUMNS = [
  {
    title: "LOGAVAL",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Sobre nosotros", href: "#nosotros" },
      { label: "Proceso", href: "#proceso" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Productos",
    links: [
      { label: "Cerámica", href: "#productos" },
      { label: "Muebles de baño", href: "#productos" },
      { label: "SPC Click", href: "#productos" },
      { label: "Mosaico vítreo", href: "#productos" },
      { label: "Terracota", href: "#productos" },
    ],
  },
  {
    title: "Enlaces de interés",
    links: [
      { label: "Aviso legal", href: "#" },
      { label: "Política de privacidad", href: "#" },
      { label: "Política de cookies", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:justify-between">
          <Logo variant="dark" />

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-semibold tracking-[0.25em] text-gold">
                  {column.title.toUpperCase()}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-cream/80">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="hover:text-gold">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} LOGAVAL Export Trading. Todos los
            derechos reservados.
          </p>
          <p>info@logaval.es · Sevilla, España</p>
        </div>
      </div>
    </footer>
  );
}
