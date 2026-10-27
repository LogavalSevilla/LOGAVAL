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
};

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

  const sectionsMap = new Map<
    string,
    { marca: string; logo: string | null; items: Documento[] }[]
  >();
  for (const [marca, items] of byBrand) {
    const info = marcaInfo.get(marca);
    const categoria =
      (info?.categoria && info.categoria.trim()) ||
      defaultCategoryFor(marca) ||
      "Other";
    if (!sectionsMap.has(categoria)) sectionsMap.set(categoria, []);
    sectionsMap.get(categoria)!.push({
      marca,
      logo: info?.logo_url ?? null,
      items,
    });
  }
  for (const brands of sectionsMap.values()) {
    brands.sort((a, b) => a.marca.localeCompare(b.marca));
  }
  const orderedCategories = [...CATEGORIES, "Other"].filter((c) =>
    sectionsMap.has(c)
  );
  const sections = orderedCategories.map((categoria) => ({
    categoria,
    brands: sectionsMap.get(categoria)!,
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
