import { NextResponse } from "next/server";
import { sql, ensureSchema } from "@/lib/db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await ensureSchema();
  const rows = await sql`SELECT url FROM documentos WHERE id = ${id}`;
  const url = rows[0]?.url as string | undefined;

  if (!url) {
    return new NextResponse("Documento no encontrado.", { status: 404 });
  }

  return NextResponse.redirect(url, 307);
}
