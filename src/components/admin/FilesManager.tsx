"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { upload } from "@vercel/blob/client";
import { CATEGORIES, defaultCategoryFor } from "@/lib/categories";

type Documento = {
  id: string;
  marca: string;
  nombre: string;
  url: string;
  size: number;
  fecha: string;
};

function genId(): string {
  return "d" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

function slugify(text: string): string {
  return (
    text
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "otros"
  );
}

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function FilesManager() {
  const [docs, setDocs] = useState<Documento[]>([]);
  const [logos, setLogos] = useState<Record<string, string>>({});
  const [categorias, setCategorias] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadingLogoFor, setUploadingLogoFor] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [marca, setMarca] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const loadDocs = useCallback(async () => {
    try {
      const [docsRes, marcasRes] = await Promise.all([
        fetch("/admin/api/documentos"),
        fetch("/admin/api/marcas"),
      ]);
      if (!docsRes.ok || !marcasRes.ok) throw new Error("No se pudo cargar la lista");
      const docsData = await docsRes.json();
      const marcasData: {
        nombre: string;
        logo_url: string | null;
        categoria: string | null;
      }[] = await marcasRes.json();
      setDocs(docsData);
      setLogos(
        Object.fromEntries(
          marcasData.filter((m) => m.logo_url).map((m) => [m.nombre, m.logo_url as string])
        )
      );
      setCategorias(
        Object.fromEntries(
          marcasData.map((m) => [
            m.nombre,
            (m.categoria && m.categoria.trim()) || defaultCategoryFor(m.nombre) || "",
          ])
        )
      );
    } catch {
      setError("No se pudo cargar la lista de documentos.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- async fetch, setState happens post-await
    loadDocs();
  }, [loadDocs]);

  const marcasConocidas = useMemo(() => {
    const set = new Set(docs.map((d) => d.marca).filter(Boolean));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [docs]);

  const grupos = useMemo(() => {
    const map = new Map<string, Documento[]>();
    for (const d of docs) {
      const key = d.marca || "Sin marca";
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(d);
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [docs]);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);

    if (file.type !== "application/pdf") {
      setError("Solo se admiten archivos PDF.");
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    const marcaLimpia = marca.trim();
    if (!marcaLimpia) {
      setError("Indica la marca antes de subir el archivo.");
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    setUploading(true);
    try {
      const pathname = `${slugify(marcaLimpia)}/${Date.now()}-${file.name}`;
      const blob = await upload(pathname, file, {
        access: "public",
        handleUploadUrl: "/admin/api/blob/upload",
      });

      const id = genId();
      const res = await fetch(`/admin/api/documentos/${encodeURIComponent(id)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          marca: marcaLimpia,
          nombre: file.name,
          url: blob.url,
          size: file.size,
          fecha: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("No se pudo guardar el documento");

      await loadDocs();
    } catch (err) {
      const detail = err instanceof Error ? err.message : String(err);
      setError(`Error al subir el archivo: ${detail}`);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("¿Eliminar este documento? El enlace dejará de funcionar.")) {
      return;
    }
    try {
      const res = await fetch(`/admin/api/documentos/${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
      setDocs((prev) => prev.filter((d) => d.id !== id));
    } catch {
      setError("No se pudo eliminar el documento.");
    }
  }

  async function handleLogoChange(
    marcaNombre: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);

    if (!file.type.startsWith("image/")) {
      setError("El logo debe ser una imagen.");
      e.target.value = "";
      return;
    }

    setUploadingLogoFor(marcaNombre);
    try {
      const ext = file.name.split(".").pop() || "png";
      const pathname = `logos/${slugify(marcaNombre)}-${Date.now()}.${ext}`;
      const blob = await upload(pathname, file, {
        access: "public",
        handleUploadUrl: "/admin/api/blob/upload",
      });
      const res = await fetch("/admin/api/marcas", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: marcaNombre, logoUrl: blob.url }),
      });
      if (!res.ok) throw new Error("No se pudo guardar el logo");
      setLogos((prev) => ({ ...prev, [marcaNombre]: blob.url }));
    } catch {
      setError("No se pudo subir el logo.");
    } finally {
      setUploadingLogoFor(null);
      e.target.value = "";
    }
  }

  async function handleCategoriaChange(marcaNombre: string, categoria: string) {
    setCategorias((prev) => ({ ...prev, [marcaNombre]: categoria }));
    try {
      const res = await fetch("/admin/api/marcas", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: marcaNombre, categoria }),
      });
      if (!res.ok) throw new Error("No se pudo guardar la categoría");
    } catch {
      setError("No se pudo guardar la categoría.");
    }
  }

  function shortLink(id: string): string {
    if (typeof window === "undefined") return `/d/${id}`;
    return `${window.location.origin}/d/${id}`;
  }

  async function handleCopy(id: string) {
    const link = shortLink(id);
    try {
      await navigator.clipboard.writeText(link);
      setCopiedUrl(id);
      setTimeout(() => setCopiedUrl((cur) => (cur === id ? null : cur)), 2000);
    } catch {
      setError("No se pudo copiar el enlace.");
    }
  }

  return (
    <div className="space-y-8">
      <div className="rounded-sm border border-navy/15 bg-white p-6">
        <div className="mb-4">
          <label className="mb-1 block text-sm font-semibold text-navy">
            Marca
          </label>
          <input
            type="text"
            list="marcas-conocidas"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            placeholder="Ej. Alumacer"
            className="w-full max-w-sm border-b border-navy/30 bg-transparent py-1.5 text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none"
          />
          <datalist id="marcas-conocidas">
            {marcasConocidas.map((m) => (
              <option key={m} value={m} />
            ))}
          </datalist>
        </div>

        <label className="flex cursor-pointer flex-col items-start gap-3">
          <span className="text-sm font-semibold text-navy">
            Subir documento PDF
          </span>
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            disabled={uploading}
            className="block w-full text-sm text-navy/70 file:mr-4 file:rounded-sm file:border-0 file:bg-navy file:px-4 file:py-2 file:text-sm file:font-semibold file:text-cream file:transition-colors hover:file:bg-gold disabled:opacity-50"
          />
        </label>
        {uploading && (
          <p className="mt-3 text-sm text-navy/60">Subiendo...</p>
        )}
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      </div>

      {grupos.length > 0 && (
        <a
          href="/catalogos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm text-navy underline hover:text-gold"
        >
          Ver catálogo público →
        </a>
      )}

      <div className="space-y-6">
        {loading ? (
          <p className="text-sm text-navy/60">Cargando...</p>
        ) : grupos.length === 0 ? (
          <p className="text-sm text-navy/60">No hay documentos todavía.</p>
        ) : (
          grupos.map(([nombreMarca, items]) => (
            <div
              key={nombreMarca}
              className="rounded-sm border border-navy/15 bg-white"
            >
              <div className="flex items-center gap-4 border-b border-navy/10 px-6 py-4">
                {logos[nombreMarca] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logos[nombreMarca]}
                    alt={nombreMarca}
                    className="h-9 w-9 shrink-0 rounded-sm object-contain"
                  />
                ) : (
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/10 text-xs font-semibold text-navy">
                    {nombreMarca.slice(0, 2).toUpperCase()}
                  </span>
                )}
                <h2 className="text-sm font-semibold text-navy">
                  {nombreMarca}
                </h2>
                <select
                  value={categorias[nombreMarca] ?? ""}
                  onChange={(e) =>
                    handleCategoriaChange(nombreMarca, e.target.value)
                  }
                  className="ml-auto rounded-sm border border-navy/20 bg-white px-2 py-1 text-xs text-navy focus:border-gold focus:outline-none"
                >
                  <option value="">Sin categoría</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <label className="cursor-pointer text-xs text-navy/50 underline hover:text-gold">
                  {uploadingLogoFor === nombreMarca
                    ? "Subiendo logo..."
                    : logos[nombreMarca]
                      ? "Cambiar logo"
                      : "Subir logo"}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={uploadingLogoFor === nombreMarca}
                    onChange={(e) => handleLogoChange(nombreMarca, e)}
                  />
                </label>
              </div>
              <ul className="divide-y divide-navy/10">
                {items.map((doc) => (
                  <li
                    key={doc.id}
                    className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-navy">
                        {doc.nombre}
                      </p>
                      <p className="text-xs text-navy/50">
                        {formatSize(doc.size)} · {formatDate(doc.fecha)}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3 text-sm">
                      <a
                        href={`/d/${doc.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy underline hover:text-gold"
                      >
                        Abrir
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy(doc.id)}
                        className="rounded-sm border border-navy/20 px-3 py-1 text-navy transition-colors hover:border-gold hover:text-gold"
                      >
                        {copiedUrl === doc.id ? "Copiado" : "Copiar enlace"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(doc.id)}
                        className="rounded-sm border border-red-200 px-3 py-1 text-red-600 transition-colors hover:border-red-400"
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
