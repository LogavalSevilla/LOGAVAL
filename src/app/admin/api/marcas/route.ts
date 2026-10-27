import { NextResponse } from "next/server";
import { sql, ensureSchema } from "@/lib/db";

export async function GET() {
  await ensureSchema();
  const rows = await sql`SELECT nombre, logo_url, categoria FROM marcas`;
  return NextResponse.json(rows);
}

export async function PUT(request: Request) {
  await ensureSchema();
  const body = await request.json();
  const nombre = String(body.nombre ?? "").trim();
  if (!nombre) {
    return NextResponse.json({ error: "Falta el nombre de la marca" }, { status: 400 });
  }

  const existing = await sql`SELECT logo_url, categoria FROM marcas WHERE nombre = ${nombre}`;
  const logoUrl =
    body.logoUrl !== undefined ? String(body.logoUrl) : (existing[0]?.logo_url ?? "");
  const categoria =
    body.categoria !== undefined ? String(body.categoria) : (existing[0]?.categoria ?? "");

  await sql`
    INSERT INTO marcas (nombre, logo_url, categoria)
    VALUES (${nombre}, ${logoUrl}, ${categoria})
    ON CONFLICT (nombre) DO UPDATE SET logo_url = EXCLUDED.logo_url, categoria = EXCLUDED.categoria
  `;
  return NextResponse.json({ ok: true });
}
