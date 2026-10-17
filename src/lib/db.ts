import { neon } from "@neondatabase/serverless";

export const sql = neon(process.env.DATABASE_URL!);

export type Collection = "ingresos" | "gastos" | "reglas";
export const COLLECTIONS: Collection[] = ["ingresos", "gastos", "reglas"];

export function isCollection(x: string): x is Collection {
  return (COLLECTIONS as string[]).includes(x);
}

let ready: Promise<void> | null = null;

export function ensureSchema(): Promise<void> {
  if (!ready) {
    ready = Promise.all([
      sql`CREATE TABLE IF NOT EXISTS ingresos (
        id TEXT PRIMARY KEY,
        num TEXT,
        fecha TEXT,
        fabricante TEXT,
        base DOUBLE PRECISION,
        iva DOUBLE PRECISION
      )`,
      sql`CREATE TABLE IF NOT EXISTS gastos (
        id TEXT PRIMARY KEY,
        num TEXT,
        fecha TEXT,
        empresa TEXT,
        categoria TEXT,
        base DOUBLE PRECISION,
        iva DOUBLE PRECISION
      )`,
      sql`CREATE TABLE IF NOT EXISTS reglas (
        id TEXT PRIMARY KEY,
        prefijo TEXT,
        empresa TEXT,
        tipo TEXT
      )`,
    ]).then(() => undefined);
  }
  return ready;
}
