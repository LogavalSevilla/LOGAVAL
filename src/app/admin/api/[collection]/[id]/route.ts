import { NextResponse } from "next/server";
import { sql, ensureSchema, isCollection } from "@/lib/db";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ collection: string; id: string }> }
) {
  const { collection, id } = await params;
  if (!isCollection(collection)) {
    return NextResponse.json({ error: "Unknown collection" }, { status: 404 });
  }
  await ensureSchema();
  const body = await request.json();

  if (collection === "ingresos") {
    const num = String(body.num ?? "");
    const fecha = String(body.fecha ?? "");
    const fabricante = String(body.fabricante ?? "");
    const base = Number(body.base) || 0;
    const iva = Number(body.iva) || 0;
    await sql`
      INSERT INTO ingresos (id, num, fecha, fabricante, base, iva)
      VALUES (${id}, ${num}, ${fecha}, ${fabricante}, ${base}, ${iva})
      ON CONFLICT (id) DO UPDATE SET
        num = EXCLUDED.num, fecha = EXCLUDED.fecha, fabricante = EXCLUDED.fabricante,
        base = EXCLUDED.base, iva = EXCLUDED.iva
    `;
  } else if (collection === "gastos") {
    const num = String(body.num ?? "");
    const fecha = String(body.fecha ?? "");
    const empresa = String(body.empresa ?? "");
    const categoria = String(body.categoria ?? "");
    const base = Number(body.base) || 0;
    const iva = Number(body.iva) || 0;
    await sql`
      INSERT INTO gastos (id, num, fecha, empresa, categoria, base, iva)
      VALUES (${id}, ${num}, ${fecha}, ${empresa}, ${categoria}, ${base}, ${iva})
      ON CONFLICT (id) DO UPDATE SET
        num = EXCLUDED.num, fecha = EXCLUDED.fecha, empresa = EXCLUDED.empresa,
        categoria = EXCLUDED.categoria, base = EXCLUDED.base, iva = EXCLUDED.iva
    `;
  } else {
    const prefijo = String(body.prefijo ?? "");
    const empresa = String(body.empresa ?? "");
    const tipo = String(body.tipo ?? "");
    await sql`
      INSERT INTO reglas (id, prefijo, empresa, tipo)
      VALUES (${id}, ${prefijo}, ${empresa}, ${tipo})
      ON CONFLICT (id) DO UPDATE SET
        prefijo = EXCLUDED.prefijo, empresa = EXCLUDED.empresa, tipo = EXCLUDED.tipo
    `;
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ collection: string; id: string }> }
) {
  const { collection, id } = await params;
  if (!isCollection(collection)) {
    return NextResponse.json({ error: "Unknown collection" }, { status: 404 });
  }
  await ensureSchema();

  if (collection === "ingresos") {
    await sql`DELETE FROM ingresos WHERE id = ${id}`;
  } else if (collection === "gastos") {
    await sql`DELETE FROM gastos WHERE id = ${id}`;
  } else {
    await sql`DELETE FROM reglas WHERE id = ${id}`;
  }

  return NextResponse.json({ ok: true });
}
