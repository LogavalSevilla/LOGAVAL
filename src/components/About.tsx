import type { Dictionary } from "@/i18n/translations";

export default function About({ dict }: { dict: Dictionary }) {
  const { about, nav } = dict;
  return (
    <section id="about" className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-sm font-semibold tracking-[0.3em] text-gold">
          {nav.about.toUpperCase()}
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl text-cream sm:text-4xl">
          {about.title}
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-cream/80">
          {about.body}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {about.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl text-gold">{stat.value}</p>
              <p className="mt-2 text-sm tracking-wide text-cream/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {about.countries.map((country) => (
            <span
              key={country}
              className="rounded-full border border-cream/25 px-4 py-1.5 text-sm text-cream/85"
            >
              {country}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
