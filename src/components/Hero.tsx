function TileSwatch({ className = "" }: { className?: string }) {
  return <div className={`rounded-sm ${className}`} />;
}

export default function Hero() {
  return (
    <section id="inicio" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
        <div>
          <p className="text-sm font-semibold tracking-[0.3em] text-gold">
            ASESORÍA COMERCIAL Y EXPORTACIÓN
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Material cerámico español, exportado con garantía a todo el mundo
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/80">
            LOGAVAL Export Trading conecta a fabricantes de cerámica,
            mobiliario de baño, SPC click, mosaico vítreo y terracota con
            distribuidores internacionales, ofreciendo asesoramiento
            comercial integral en cada operación de exportación.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-sm bg-navy px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-gold"
            >
              Solicita información
            </a>
            <a
              href="#productos"
              className="rounded-sm border border-navy/20 px-7 py-3.5 text-sm font-semibold tracking-wide text-navy transition-colors hover:border-gold hover:text-gold"
            >
              Ver catálogo
            </a>
          </div>
        </div>

        <div className="grid h-[420px] grid-cols-3 grid-rows-3 gap-3">
          <TileSwatch className="col-span-2 row-span-2 bg-navy" />
          <TileSwatch className="bg-gold" />
          <TileSwatch className="bg-navy-light" />
          <TileSwatch className="bg-gold-light" />
          <TileSwatch className="col-span-2 bg-navy/80" />
          <TileSwatch className="bg-gold" />
        </div>
      </div>
    </section>
  );
}
