const CATEGORIES = [
  {
    name: "Cerámica",
    description: "Pavimentos y revestimientos cerámicos para proyectos residenciales y comerciales.",
    gradient: "from-navy to-navy-light",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    name: "Muebles de Baño",
    description: "Mobiliario de baño funcional y de diseño para todo tipo de espacios.",
    gradient: "from-gold to-gold-light",
    span: "",
  },
  {
    name: "SPC Click",
    description: "Suelos SPC de instalación rápida, resistentes al agua y al desgaste.",
    gradient: "from-navy-light to-navy",
    span: "",
  },
  {
    name: "Mosaico Vítreo",
    description: "Mosaicos de vidrio para revestimientos decorativos de alta gama.",
    gradient: "from-gold-light to-gold",
    span: "",
  },
  {
    name: "Terracota",
    description: "Piezas de terracota con acabado natural para interior y exterior.",
    gradient: "from-navy to-gold",
    span: "",
  },
];

export default function Products() {
  return (
    <section id="productos" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-sm font-semibold tracking-[0.3em] text-gold">
          NUESTRO CATÁLOGO
        </p>
        <h2 className="mt-4 font-serif text-3xl text-navy sm:text-4xl">
          Cerámica, revestimientos y mobiliario en un solo proveedor
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <div
              key={category.name}
              className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-sm bg-gradient-to-br p-6 ${category.gradient} ${category.span}`}
            >
              <div className="absolute inset-0 bg-navy/10 transition-colors group-hover:bg-navy/0" />
              <h3 className="relative font-serif text-2xl text-cream">
                {category.name}
              </h3>
              <p className="relative mt-2 max-w-xs text-sm text-cream/85">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
