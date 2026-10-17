import { NextResponse } from "next/server";
import { sql, ensureSchema } from "@/lib/db";

export async function GET() {
  await ensureSchema();
  const rows = await sql`SELECT nombre, logo_url FROM marcas`;
  return NextResponse.json(rows);
}

export async function PUT(request: Request) {
  await ensureSchema();
  const body = await request.json();
  const nombre = String(body.nombre ?? "").trim();
  const logoUrl = String(body.logoUrl ?? "");
  if (!nombre) {
    return NextResponse.json({ error: "Falta el nombre de la marca" }, { status: 400 });
  }
  await sql`
    INSERT INTO marcas (nombre, logo_url)
    VALUES (${nombre}, ${logoUrl})
    ON CONFLICT (nombre) DO UPDATE SET logo_url = EXCLUDED.logo_url
  `;
  return NextResponse.json({ ok: true });
}
