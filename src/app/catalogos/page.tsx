import type { Metadata } from "next";
import { sql, ensureSchema } from "@/lib/db";
import { CATEGORIES, defaultCategoryFor } from "@/lib/categories";
import CatalogsBrowser from "@/components/CatalogsBrowser";

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
  categoria: string | null;
};

export default async function CatalogosPage() {
  await ensureSchema();
  const [marcasRows, docsRows] = await Promise.all([
    sql`SELECT nombre, logo_url, categoria FROM marcas`,
    sql`SELECT id, marca, nombre, url, size, fecha, categoria FROM documentos ORDER BY marca ASC, nombre ASC`,
  ]);
  const marcas = marcasRows as unknown as Marca[];
  const docs = docsRows as unknown as Documento[];

  const marcaInfo = new Map(marcas.map((m) => [m.nombre, m]));

  // sectionsMap: categoria -> marca -> documentos that belong in that category
  // (a brand's own documents can land in different categories depending on
  // each document's own categoria, falling back to the brand's default)
  const sectionsMap = new Map<
    string,
    Map<string, { marca: string; logo: string | null; items: Documento[] }>
  >();
  for (const d of docs) {
    const marca = d.marca || "Other";
    const info = marcaInfo.get(marca);
    const categoria =
      (d.categoria && d.categoria.trim()) ||
      (info?.categoria && info.categoria.trim()) ||
      defaultCategoryFor(marca) ||
      "Other";
    if (!sectionsMap.has(categoria)) sectionsMap.set(categoria, new Map());
    const brandsInSection = sectionsMap.get(categoria)!;
    if (!brandsInSection.has(marca)) {
      brandsInSection.set(marca, { marca, logo: info?.logo_url ?? null, items: [] });
    }
    brandsInSection.get(marca)!.items.push(d);
  }
  const sectionsBrandsMap = new Map<
    string,
    { marca: string; logo: string | null; items: Documento[] }[]
  >();
  for (const [categoria, brandsInSection] of sectionsMap) {
    const brands = Array.from(brandsInSection.values());
    brands.sort((a, b) => a.marca.localeCompare(b.marca));
    sectionsBrandsMap.set(categoria, brands);
  }
  const orderedCategories = [...CATEGORIES, "Other"].filter((c) =>
    sectionsBrandsMap.has(c)
  );
  const sections = orderedCategories.map((categoria) => ({
    categoria,
    brands: sectionsBrandsMap.get(categoria)!,
  }));

  return (
    <main className="min-h-screen bg-cream px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl text-navy">Catalogs</h1>
        <p className="mt-2 text-navy/60">
          Pick a category to see its available catalogs.
        </p>
        <CatalogsBrowser sections={sections} />
      </div>
    </main>
  );
}
