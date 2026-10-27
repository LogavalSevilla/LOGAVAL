import type { Metadata } from "next";
import { sql, ensureSchema } from "@/lib/db";
import { CATEGORIES, defaultCategoryFor } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Catalogs | LOGAVAL",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type Marca = { nombre: string; logo_url: string | null; categoria: string | null };
type Documento = {
  id: string;
  marca: string;
  nombre: string;
  url: string;
  size: number;
  fecha: string;
};

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default async function CatalogosPage() {
  await ensureSchema();
  const [marcasRows, docsRows] = await Promise.all([
    sql`SELECT nombre, logo_url, categoria FROM marcas`,
    sql`SELECT id, marca, nombre, url, size, fecha FROM documentos ORDER BY marca ASC, nombre ASC`,
  ]);
  const marcas = marcasRows as unknown as Marca[];
  const docs = docsRows as unknown as Documento[];

  const marcaInfo = new Map(marcas.map((m) => [m.nombre, m]));
  const byBrand = new Map<string, Documento[]>();
  for (const d of docs) {
    const key = d.marca || "Other";
    if (!byBrand.has(key)) byBrand.set(key, []);
    byBrand.get(key)!.push(d);
  }

  const sections = new Map<string, [string, Documento[]][]>();
  for (const [marca, items] of byBrand) {
    const info = marcaInfo.get(marca);
    const categoria =
      (info?.categoria && info.categoria.trim()) ||
      defaultCategoryFor(marca) ||
      "Other";
    if (!sections.has(categoria)) sections.set(categoria, []);
    sections.get(categoria)!.push([marca, items]);
  }
  for (const brands of sections.values()) {
    brands.sort((a, b) => a[0].localeCompare(b[0]));
  }
  const orderedCategories = [...CATEGORIES, "Other"].filter((c) =>
    sections.has(c)
  );

  return (
    <main className="min-h-screen bg-cream px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl text-navy">Catalogs</h1>
        <p className="mt-2 text-navy/60">
          Click on a brand to see its available catalogs.
        </p>

        {orderedCategories.length === 0 ? (
          <p className="mt-10 text-sm text-navy/50">
            No catalogs available yet.
          </p>
        ) : (
          <div className="mt-10 space-y-10">
            {orderedCategories.map((categoria) => (
              <div key={categoria}>
                <h2 className="text-xs font-semibold tracking-[0.25em] text-gold">
                  {categoria.toUpperCase()}
                </h2>
                <div className="mt-4 space-y-4">
                  {sections.get(categoria)!.map(([marca, items]) => {
                    const logo = marcaInfo.get(marca)?.logo_url;
                    return (
                      <details
                        key={marca}
                        className="group rounded-sm border border-navy/15 bg-white open:shadow-sm"
                      >
                        <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-4">
                          {logo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={logo}
                              alt={marca}
                              className="h-12 w-12 shrink-0 rounded-sm object-contain"
                            />
                          ) : (
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy/10 text-sm font-semibold text-navy">
                              {marca.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                          <span className="font-serif text-lg text-navy">
                            {marca}
                          </span>
                          <span className="ml-auto text-navy/40 transition-transform group-open:rotate-180">
                            ▾
                          </span>
                        </summary>
                        <ul className="divide-y divide-navy/10 border-t border-navy/10">
                          {items.map((doc) => (
                            <li
                              key={doc.id}
                              className="flex items-center justify-between gap-4 px-6 py-3"
                            >
                              <div className="min-w-0">
                                <p className="truncate text-sm text-navy">
                                  {doc.nombre}
                                </p>
                                <p className="text-xs text-navy/40">
                                  {formatSize(doc.size)}
                                </p>
                              </div>
                              <a
                                href={`/d/${doc.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 rounded-sm border border-navy/20 px-3 py-1 text-sm text-navy transition-colors hover:border-gold hover:text-gold"
                              >
                                Open
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
