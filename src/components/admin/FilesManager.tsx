"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { upload } from "@vercel/blob/client";

type BlobFile = {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: string;
};

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function FilesManager() {
  const [files, setFiles] = useState<BlobFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const loadFiles = useCallback(async () => {
    try {
      const res = await fetch("/admin/api/blob/list");
      if (!res.ok) throw new Error("No se pudo cargar la lista");
      const data = await res.json();
      setFiles(data);
    } catch {
      setError("No se pudo cargar la lista de documentos.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- async fetch, setState happens post-await
    loadFiles();
  }, [loadFiles]);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);

    if (file.type !== "application/pdf") {
      setError("Solo se admiten archivos PDF.");
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    setUploading(true);
    try {
      await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/admin/api/blob/upload",
      });
      await loadFiles();
    } catch (err) {
      const detail = err instanceof Error ? err.message : String(err);
      setError(`Error al subir el archivo: ${detail}`);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  async function handleDelete(url: string) {
    if (!confirm("¿Eliminar este documento? El enlace dejará de funcionar.")) {
      return;
    }
    try {
      const res = await fetch("/admin/api/blob/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) throw new Error();
      setFiles((prev) => prev.filter((f) => f.url !== url));
    } catch {
      setError("No se pudo eliminar el documento.");
    }
  }

  async function handleCopy(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl((cur) => (cur === url ? null : cur)), 2000);
    } catch {
      setError("No se pudo copiar el enlace.");
    }
  }

  return (
    <div className="space-y-8">
      <div className="rounded-sm border border-navy/15 bg-white p-6">
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

      <div className="rounded-sm border border-navy/15 bg-white">
        <div className="border-b border-navy/10 px-6 py-4">
          <h2 className="text-sm font-semibold text-navy">
            Documentos subidos
          </h2>
        </div>
        {loading ? (
          <p className="px-6 py-6 text-sm text-navy/60">Cargando...</p>
        ) : files.length === 0 ? (
          <p className="px-6 py-6 text-sm text-navy/60">
            No hay documentos todavía.
          </p>
        ) : (
          <ul className="divide-y divide-navy/10">
            {files.map((file) => (
              <li
                key={file.url}
                className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-navy">
                    {file.pathname}
                  </p>
                  <p className="text-xs text-navy/50">
                    {formatSize(file.size)} · {formatDate(file.uploadedAt)}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3 text-sm">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy underline hover:text-gold"
                  >
                    Abrir
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(file.url)}
                    className="rounded-sm border border-navy/20 px-3 py-1 text-navy transition-colors hover:border-gold hover:text-gold"
                  >
                    {copiedUrl === file.url ? "Copiado" : "Copiar enlace"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(file.url)}
                    className="rounded-sm border border-red-200 px-3 py-1 text-red-600 transition-colors hover:border-red-400"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
