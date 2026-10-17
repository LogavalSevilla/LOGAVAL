import { NextResponse } from "next/server";
import { sql, ensureSchema, isCollection } from "@/lib/db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ collection: string }> }
) {
  const { collection } = await params;
  if (!isCollection(collection)) {
    return NextResponse.json({ error: "Unknown collection" }, { status: 404 });
  }
  await ensureSchema();

  let rows;
  if (collection === "ingresos") {
    rows = await sql`SELECT id, num, fecha, fabricante, base, iva FROM ingresos ORDER BY fecha DESC`;
  } else if (collection === "gastos") {
    rows = await sql`SELECT id, num, fecha, empresa, categoria, base, iva FROM gastos ORDER BY fecha DESC`;
  } else if (collection === "documentos") {
    rows = await sql`SELECT id, marca, nombre, url, size, fecha FROM documentos ORDER BY fecha DESC`;
  } else {
    rows = await sql`SELECT id, prefijo, empresa, tipo FROM reglas`;
  }
  return NextResponse.json(rows);
}
