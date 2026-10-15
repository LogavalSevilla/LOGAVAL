import Image from "next/image";

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
          <div className="relative col-span-2 row-span-3 overflow-hidden rounded-sm">
            <Image
              src="/images/ceramica-nightlux-02.jpg"
              alt="Baño revestido en cerámica LOGAVAL, colección Nightlux"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative row-span-2 overflow-hidden rounded-sm">
            <Image
              src="/images/ceramica-nightlux-01.jpg"
              alt="Detalle de cerámica LOGAVAL en baño con bañera"
              fill
              sizes="(min-width: 1024px) 220px, 45vw"
              className="object-cover"
            />
          </div>
          <TileSwatch className="bg-gold" />
        </div>
      </div>
    </section>
  );
}
