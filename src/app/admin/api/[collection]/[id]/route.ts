import { NextResponse } from "next/server";
import { del } from "@vercel/blob";
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
  } else if (collection === "documentos") {
    const existing = await sql`SELECT marca, nombre, url, size, fecha, categoria FROM documentos WHERE id = ${id}`;
    const prev = existing[0];
    const marca = body.marca !== undefined ? String(body.marca) : String(prev?.marca ?? "");
    const nombre = body.nombre !== undefined ? String(body.nombre) : String(prev?.nombre ?? "");
    const url = body.url !== undefined ? String(body.url) : String(prev?.url ?? "");
    const size = body.size !== undefined ? Number(body.size) || 0 : Number(prev?.size) || 0;
    const fecha = body.fecha !== undefined ? String(body.fecha) : String(prev?.fecha ?? "");
    const categoria =
      body.categoria !== undefined ? String(body.categoria) : String(prev?.categoria ?? "");
    await sql`
      INSERT INTO documentos (id, marca, nombre, url, size, fecha, categoria)
      VALUES (${id}, ${marca}, ${nombre}, ${url}, ${size}, ${fecha}, ${categoria})
      ON CONFLICT (id) DO UPDATE SET
        marca = EXCLUDED.marca, nombre = EXCLUDED.nombre, url = EXCLUDED.url,
        size = EXCLUDED.size, fecha = EXCLUDED.fecha, categoria = EXCLUDED.categoria
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
  } else if (collection === "documentos") {
    const rows = await sql`SELECT url FROM documentos WHERE id = ${id}`;
    const url = rows[0]?.url as string | undefined;
    await sql`DELETE FROM documentos WHERE id = ${id}`;
    if (url) {
      try {
        await del(url);
      } catch {
        // blob already gone or URL invalid; DB row is removed regardless
      }
    }
  } else {
    await sql`DELETE FROM reglas WHERE id = ${id}`;
  }

  return NextResponse.json({ ok: true });
}
