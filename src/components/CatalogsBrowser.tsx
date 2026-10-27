"use client";

import { useState } from "react";

type Documento = {
  id: string;
  marca: string;
  nombre: string;
  url: string;
  size: number;
};

type Brand = {
  marca: string;
  logo: string | null;
  items: Documento[];
};

type Section = {
  categoria: string;
  brands: Brand[];
};

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function CategoryIcon({ categoria }: { categoria: string }) {
  const cls = "h-6 w-6";
  switch (categoria) {
    case "Small Size Tiles":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
          <rect x="13" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
          <rect x="4" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
          <rect x="13" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "Porcelain Tiles":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="4" y="6" width="16" height="12" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 12h16" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "Slabs":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="3" y="8" width="18" height="8" rx="1" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.2" opacity=".6" />
        </svg>
      );
    case "Terracotta":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path
            d="M9 4h6M8 4c0 2-2 2.5-2 5.5C6 14 8 20 12 20s6-6 6-10.5C18 6.5 16 6 16 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Glass Mosaics":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy="6" r="1.6" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="6" cy="16" r="1.6" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "Trims":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path
            d="M5 5v9a5 5 0 0 0 5 5h9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}

function BrandAccordion({ brand }: { brand: Brand }) {
  return (
    <details className="group rounded-sm border border-navy/15 bg-white open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-4">
        {brand.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={brand.logo}
            alt={brand.marca}
            className="h-12 w-12 shrink-0 rounded-sm object-contain"
          />
        ) : (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy/10 text-sm font-semibold text-navy">
            {brand.marca.slice(0, 2).toUpperCase()}
          </span>
        )}
        <span className="font-serif text-lg text-navy">{brand.marca}</span>
        <span className="ml-auto text-navy/40 transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>
      <ul className="divide-y divide-navy/10 border-t border-navy/10">
        {brand.items.map((doc) => (
          <li
            key={doc.id}
            className="flex items-center justify-between gap-4 px-6 py-3"
          >
            <div className="min-w-0">
              <p className="truncate text-sm text-navy">{doc.nombre}</p>
              <p className="text-xs text-navy/40">{formatSize(doc.size)}</p>
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
}

export default function CatalogsBrowser({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string | null>(null);

  if (sections.length === 0) {
    return (
      <p className="mt-10 text-sm text-navy/50">No catalogs available yet.</p>
    );
  }

  const activeSection = sections.find((s) => s.categoria === active);

  if (activeSection) {
    return (
      <div className="mt-8">
        <button
          type="button"
          onClick={() => setActive(null)}
          className="text-sm text-navy underline hover:text-gold"
        >
          ← All categories
        </button>
        <h2 className="mt-4 font-serif text-2xl text-navy">
          {activeSection.categoria}
        </h2>
        <div className="mt-5 space-y-4">
          {activeSection.brands.map((brand) => (
            <BrandAccordion key={brand.marca} brand={brand} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {sections.map((s) => {
        const catalogCount = s.brands.reduce(
          (n, b) => n + b.items.length,
          0
        );
        return (
          <button
            key={s.categoria}
            type="button"
            onClick={() => setActive(s.categoria)}
            className="flex items-center gap-3 rounded-sm border border-navy/15 bg-white px-4 py-4 text-left transition-colors hover:border-gold"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy/5 text-navy">
              <CategoryIcon categoria={s.categoria} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-navy">
                {s.categoria}
              </span>
              <span className="block text-xs text-navy/50">
                {s.brands.length} brand{s.brands.length === 1 ? "" : "s"} ·{" "}
                {catalogCount} catalog{catalogCount === 1 ? "" : "s"}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
