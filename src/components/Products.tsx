import Image from "next/image";
import type { Dictionary } from "@/i18n/translations";

const IMAGES: Record<number, string> = {
  0: "/images/ceramica-nightlux-03.jpg",
};
const GRADIENTS = [
  "from-navy to-navy-light",
  "from-gold to-gold-light",
  "from-navy-light to-navy",
  "from-gold-light to-gold",
];

export default function Products({ dict }: { dict: Dictionary }) {
  const { products, nav } = dict;
  return (
    <section id="products" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-sm font-semibold tracking-[0.3em] text-gold">
          {nav.products.toUpperCase()}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {products.items.map((item, i) => {
            const image = IMAGES[i];
            return (
              <div
                key={item.name}
                className={`group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-sm p-6 ${
                  image ? "" : `bg-gradient-to-br ${GRADIENTS[i]}`
                }`}
              >
                {image && (
                  <Image
                    src={image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                <h3 className="relative font-serif text-2xl text-cream">
                  {item.name}
                </h3>
                <p className="relative mt-2 max-w-sm text-sm text-cream/85">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
