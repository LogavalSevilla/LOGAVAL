import type { Dictionary } from "@/i18n/translations";

export default function Origin({ dict }: { dict: Dictionary }) {
  const { origin, nav } = dict;
  return (
    <section id="manufacturers" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-sm font-semibold tracking-[0.3em] text-gold">
          {nav.manufacturers.toUpperCase()}
        </p>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-serif text-2xl text-navy">
              {origin.spainTitle}
            </h3>
            <p className="mt-3 leading-relaxed text-navy/75">
              {origin.spainBody}
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-navy">
              {origin.italyTitle}
            </h3>
            <p className="mt-3 leading-relaxed text-navy/75">
              {origin.italyBody}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-sm border border-navy/15 p-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">
              {origin.spainLabel}
            </p>
            <p className="mt-4 leading-relaxed text-navy/80">
              {origin.spainManufacturers.join(" · ")}
            </p>
          </div>
          <div className="rounded-sm border border-navy/15 p-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">
              {origin.italyLabel}
            </p>
            <p className="mt-4 leading-relaxed text-navy/80">
              {origin.italyManufacturers.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
