import type { Dictionary } from "@/i18n/translations";
import { sql, ensureSchema } from "@/lib/db";

type Marca = { nombre: string; logo_url: string | null };

function ManufacturerCard({
  name,
  logoUrl,
}: {
  name: string;
  logoUrl?: string;
}) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-lg border border-navy/10 bg-white px-5 py-4 shadow-sm">
      {logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logoUrl} alt={name} className="h-9 w-9 shrink-0 rounded-sm object-contain" />
      ) : (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/10 text-xs font-semibold text-navy">
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="whitespace-nowrap font-semibold text-navy">{name}</span>
    </div>
  );
}

export default async function Origin({ dict }: { dict: Dictionary }) {
  const { origin, nav } = dict;
  const manufacturers = [...origin.spainManufacturers, ...origin.italyManufacturers];

  let logoByName = new Map<string, string>();
  try {
    await ensureSchema();
    const rows = (await sql`SELECT nombre, logo_url FROM marcas`) as unknown as Marca[];
    logoByName = new Map(
      rows
        .filter((r) => r.logo_url)
        .map((r) => [r.nombre.trim().toLowerCase(), r.logo_url as string])
    );
  } catch {
    // DB unavailable; fall back to plain text chips
  }

  return (
    <section id="manufacturers" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-10 lg:px-10 lg:pt-14 lg:pb-14">
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

        <div className="mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {[...manufacturers, ...manufacturers].map((name, i) => (
              <ManufacturerCard
                key={`${name}-${i}`}
                name={name}
                logoUrl={logoByName.get(name.trim().toLowerCase())}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
