import type { Dictionary } from "@/i18n/translations";

export default function Markets({ dict }: { dict: Dictionary }) {
  const { markets, nav } = dict;
  return (
    <section id="markets" className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-sm font-semibold tracking-[0.3em] text-gold">
          {nav.markets.toUpperCase()}
        </p>
        <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl">
          {markets.title}
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-cream/80">
          {markets.body}
        </p>
      </div>
    </section>
  );
}
