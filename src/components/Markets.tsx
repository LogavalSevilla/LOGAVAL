import Image from "next/image";
import type { Dictionary } from "@/i18n/translations";

export default function Markets({ dict }: { dict: Dictionary }) {
  const { markets, nav } = dict;
  return (
    <section id="markets" className="bg-navy text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-20 pb-10 lg:grid-cols-2 lg:items-center lg:px-10 lg:pt-28 lg:pb-14">
        <div>
          <p className="text-sm font-semibold tracking-[0.3em] text-gold">
            {nav.markets.toUpperCase()}
          </p>
          <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl">
            {markets.title}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-cream/80">
            {markets.body}
          </p>
        </div>
        <div className="overflow-hidden rounded-sm bg-cream/5">
          <Image
            src="/images/gcc-map.webp"
            alt="GCC — Gulf Cooperation Council countries map"
            width={1536}
            height={1024}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
