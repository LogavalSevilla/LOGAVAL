import Image from "next/image";
import type { Dictionary } from "@/i18n/translations";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="inicio" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
        <div>
          <h1 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
            {dict.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/80">
            {dict.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-sm bg-navy px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-gold"
            >
              {dict.hero.ctaPrimary}
            </a>
            <a
              href="#products"
              className="rounded-sm border border-navy/20 px-7 py-3.5 text-sm font-semibold tracking-wide text-navy transition-colors hover:border-gold hover:text-gold"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="grid h-[420px] grid-cols-3 grid-rows-3 gap-3">
          <div className="relative col-span-2 row-span-3 overflow-hidden rounded-sm">
            <Image
              src="/images/hero-luxury-vanity.jpg"
              alt="LOGAVAL luxury ceramic tiling and marble vanity"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative row-span-2 overflow-hidden rounded-sm">
            <Image
              src="/images/ceramica-nightlux-01.jpg"
              alt="LOGAVAL ceramic tile detail"
              fill
              sizes="(min-width: 1024px) 220px, 45vw"
              className="object-cover"
            />
          </div>
          <div className="rounded-sm bg-gold" />
        </div>
      </div>
    </section>
  );
}
