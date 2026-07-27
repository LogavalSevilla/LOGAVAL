const inputClasses =
  "w-full border-b border-navy/25 bg-transparent py-2.5 text-navy placeholder:text-navy/45 focus:border-gold focus:outline-none";

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div>
          <p className="text-sm font-semibold tracking-[0.3em] text-gold">
            CONTACTA CON NOSOTROS
          </p>
          <h2 className="mt-4 font-serif text-3xl text-navy sm:text-4xl">
            Cuéntanos qué necesitas
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-navy/75">
            Ya seas fabricante buscando exportar o distribuidor buscando
            proveedor, escríbenos y nuestro equipo te responderá en menos de
            24-48 horas.
          </p>

          <div className="mt-10 space-y-3 text-navy/80">
            <p>
              <span className="font-semibold text-navy">Email: </span>
              info@logaval.es
            </p>
            <p>
              <span className="font-semibold text-navy">Ubicación: </span>
              Sevilla, España
            </p>
          </div>
        </div>

        <form className="space-y-6" action="#" method="post">
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre*"
              required
              className={inputClasses}
            />
            <input
              type="text"
              name="empresa"
              placeholder="Empresa*"
              required
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className={inputClasses}
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono*"
              required
              className={inputClasses}
            />
          </div>

          <select name="categoria" required className={inputClasses}>
            <option value="">Selecciona un producto de interés *</option>
            <option value="ceramica">Cerámica</option>
            <option value="muebles-bano">Muebles de baño</option>
            <option value="spc-click">SPC Click</option>
            <option value="mosaico-vitreo">Mosaico vítreo</option>
            <option value="terracota">Terracota</option>
            <option value="otro">Otro</option>
          </select>

          <textarea
            name="mensaje"
            placeholder="¿Qué necesitas?"
            rows={4}
            className={`${inputClasses} resize-none`}
          />

          <label className="flex items-start gap-3 text-sm text-navy/75">
            <input type="checkbox" required className="mt-1" />
            He leído y acepto la{" "}
            <a href="#" className="text-gold underline">
              política de privacidad
            </a>
            .
          </label>

          <button
            type="submit"
            className="rounded-sm bg-navy px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-gold"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
