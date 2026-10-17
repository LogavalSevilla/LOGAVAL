import type { Dictionary } from "@/i18n/translations";
import { sql, ensureSchema } from "@/lib/db";

type Marca = { nombre: string; logo_url: string | null };

function ManufacturerChip({
  name,
  logoUrl,
}: {
  name: string;
  logoUrl?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-sm border border-navy/15 bg-white px-3 py-1.5 text-sm text-navy/80">
      {logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logoUrl} alt={name} className="h-5 w-5 object-contain" />
      ) : null}
      {name}
    </span>
  );
}

export default async function Origin({ dict }: { dict: Dictionary }) {
  const { origin, nav } = dict;

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-sm border border-navy/15 p-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">
              {origin.spainLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {origin.spainManufacturers.map((name) => (
                <ManufacturerChip
                  key={name}
                  name={name}
                  logoUrl={logoByName.get(name.trim().toLowerCase())}
                />
              ))}
            </div>
          </div>
          <div className="rounded-sm border border-navy/15 p-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">
              {origin.italyLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {origin.italyManufacturers.map((name) => (
                <ManufacturerChip
                  key={name}
                  name={name}
                  logoUrl={logoByName.get(name.trim().toLowerCase())}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
