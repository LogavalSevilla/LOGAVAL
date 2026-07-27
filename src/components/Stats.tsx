const STATS = [
  { value: "+15", label: "Años de experiencia" },
  { value: "+30", label: "Países de destino" },
  { value: "+200", label: "Distribuidores" },
  { value: "+500", label: "Contenedores exportados" },
];

export default function Stats() {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <p className="max-w-2xl text-lg leading-relaxed text-cream/85">
          Sabemos que tu negocio depende de la fiabilidad del suministro. Por
          eso cuidamos la planificación del stock, la agilidad logística y un
          trato directo para resolver cualquier necesidad con rapidez.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl text-gold">{stat.value}</p>
              <p className="mt-2 text-sm tracking-wide text-cream/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <a
          href="#contacto"
          className="mt-10 inline-block border-b border-gold pb-1 text-sm font-semibold tracking-[0.2em] text-gold transition-colors hover:text-cream hover:border-cream"
        >
          CONTÁCTANOS
        </a>
      </div>
    </section>
  );
}
