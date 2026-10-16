import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import {
  ADMIN_COOKIE_NAME,
  ADMIN_MAX_AGE,
  createSessionToken,
} from "@/lib/adminAuth";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

async function login(formData: FormData) {
  "use server";
  const password = String(formData.get("password") || "");
  const expected = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!expected || !secret || password !== expected) {
    redirect("/admin/login?error=1");
  }

  const token = await createSessionToken(secret);
  const store = await cookies();
  store.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: ADMIN_MAX_AGE,
    path: "/",
  });
  redirect("/admin");
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-6">
      <form
        action={login}
        className="w-full max-w-sm space-y-5 rounded-sm border border-navy/15 bg-white p-8 shadow-sm"
      >
        <h1 className="font-serif text-2xl text-navy">Panel LOGAVAL</h1>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          autoFocus
          required
          className="w-full border-b border-navy/30 bg-transparent py-2 text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none"
        />
        {error && (
          <p className="text-sm text-red-600">Contraseña incorrecta.</p>
        )}
        <button
          type="submit"
          className="w-full rounded-sm bg-navy px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-gold"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
