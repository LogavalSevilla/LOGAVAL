const STEPS = [
  {
    number: "01",
    title: "Selección y control de calidad",
    body: "Trabajamos con fabricantes cerámicos seleccionados en origen, verificando cada lote en acabado, tono y resistencia antes de su envío.",
  },
  {
    number: "02",
    title: "Gestión comercial y logística",
    body: "Coordinamos documentación, transporte y logística internacional para que la mercancía llegue en el plazo y las condiciones acordadas.",
  },
  {
    number: "03",
    title: "Asesoramiento post-venta",
    body: "Acompañamos a cada distribuidor durante toda la operación, resolviendo incidencias y garantizando su satisfacción.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div className="rounded-sm bg-gradient-to-br from-navy via-navy-light to-gold/40" />
        <div>
          <p className="text-sm font-semibold tracking-[0.3em] text-gold">
            NUESTRO PROCESO
          </p>
          <h2 className="mt-4 font-serif text-3xl text-navy sm:text-4xl">
            De la fábrica al distribuidor, con garantía en cada etapa
          </h2>
          <div className="mt-10 space-y-8">
            {STEPS.map((step) => (
              <div key={step.number} className="border-t border-navy/15 pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-xl text-gold">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 leading-relaxed text-navy/75">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
