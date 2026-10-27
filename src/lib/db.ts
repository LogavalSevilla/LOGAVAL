import { neon } from "@neondatabase/serverless";

export const sql = neon(process.env.DATABASE_URL!);

export type Collection = "ingresos" | "gastos" | "reglas" | "documentos";
export const COLLECTIONS: Collection[] = [
  "ingresos",
  "gastos",
  "reglas",
  "documentos",
];

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
      sql`CREATE TABLE IF NOT EXISTS documentos (
        id TEXT PRIMARY KEY,
        marca TEXT,
        nombre TEXT,
        url TEXT,
        size DOUBLE PRECISION,
        fecha TEXT
      )`,
      sql`CREATE TABLE IF NOT EXISTS marcas (
        nombre TEXT PRIMARY KEY,
        logo_url TEXT,
        categoria TEXT
      )`,
    ])
      .then(() => sql`ALTER TABLE marcas ADD COLUMN IF NOT EXISTS categoria TEXT`)
      .then(() => sql`ALTER TABLE documentos ADD COLUMN IF NOT EXISTS categoria TEXT`)
      .then(() => undefined);
  }
  return ready;
}
