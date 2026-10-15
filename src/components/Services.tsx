import type { Dictionary } from "@/i18n/translations";

export default function Services({ dict }: { dict: Dictionary }) {
  const { services, nav } = dict;
  return (
    <section id="services" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-sm font-semibold tracking-[0.3em] text-gold">
          {nav.services.toUpperCase()}
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl text-navy sm:text-4xl">
          {services.title}
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <div key={item.title} className="border-t border-navy/15 pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-navy">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 leading-relaxed text-navy/75">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
