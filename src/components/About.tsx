import type { Dictionary, Locale } from "@/i18n/translations";

export default function About({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const { about, nav } = dict;
  const countryList = new Intl.ListFormat(locale, {
    style: "long",
    type: "conjunction",
  }).format(about.countries);

  return (
    <section id="about" className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-10 lg:py-20">
        <p className="text-sm font-semibold tracking-[0.3em] text-gold">
          {nav.about.toUpperCase()}
        </p>

        <div className="mx-auto max-w-3xl">
          <h2 className="mt-3 font-serif text-3xl text-cream sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-4 leading-relaxed text-cream/80">
            {about.body}
            {countryList}.
          </p>

          <div className="mt-8 grid grid-cols-4 gap-3 sm:gap-6">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-cream/15 bg-cream/5 px-2 py-4 text-center sm:px-4 sm:py-6"
              >
                <p className="font-serif text-2xl text-gold sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] leading-snug tracking-wide text-cream/80 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
