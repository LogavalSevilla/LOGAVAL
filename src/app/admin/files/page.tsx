import type { Metadata } from "next";
import Link from "next/link";
import FilesManager from "@/components/admin/FilesManager";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminFilesPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              href="/admin"
              className="text-sm text-navy/60 underline hover:text-gold"
            >
              ← Panel
            </Link>
            <h1 className="mt-2 font-serif text-2xl text-navy">
              Documentos
            </h1>
            <p className="mt-1 text-sm text-navy/60">
              Sube un PDF y comparte el enlace con tu cliente. Se abre
              directamente en cualquier navegador, sin apps ni registro.
            </p>
          </div>
          <form action="/admin/logout" method="POST" className="shrink-0">
            <button
              type="submit"
              className="text-xs text-navy/50 underline hover:text-gold"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
        <FilesManager />
      </div>
    </main>
  );
}
