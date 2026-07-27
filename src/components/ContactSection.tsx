const WHATSAPP_NUMBER = "34600000000";
const EMAIL = "info@logaval.es";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.37-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.95 9.95 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.15c-1.7 0-3.28-.5-4.6-1.36l-.33-.2-3.02.79.8-2.94-.22-.34a8.13 8.13 0 0 1-1.28-4.4c0-4.5 3.66-8.15 8.15-8.15 4.5 0 8.15 3.66 8.15 8.15 0 4.5-3.66 8.15-8.15 8.15Z"
      />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10 lg:py-28">
        <p className="text-sm font-semibold tracking-[0.3em] text-gold">
          CONTACTA CON NOSOTROS
        </p>
        <h2 className="mt-4 font-serif text-3xl text-navy sm:text-4xl">
          Cuéntanos qué necesitas
        </h2>
        <p className="mt-6 leading-relaxed text-navy/75">
          Ya seas fabricante buscando exportar o distribuidor buscando
          proveedor, escríbenos y nuestro equipo te responderá en menos de
          24-48 horas.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-navy px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-gold"
          >
            <MailIcon />
            Escríbenos por email
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-navy/20 px-8 py-3.5 text-sm font-semibold tracking-wide text-navy transition-colors hover:border-gold hover:text-gold"
          >
            <WhatsAppIcon />
            Escríbenos por WhatsApp
          </a>
        </div>

        <div className="mt-10 space-y-2 text-navy/80">
          <p>
            <span className="font-semibold text-navy">Email: </span>
            {EMAIL}
          </p>
          <p>
            <span className="font-semibold text-navy">Ubicación: </span>
            Sevilla, España
          </p>
        </div>
      </div>
    </section>
  );
}
