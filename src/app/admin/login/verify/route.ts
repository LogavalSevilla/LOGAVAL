import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  ADMIN_MAX_AGE,
  createSessionToken,
} from "@/lib/adminAuth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const password = String(body?.password ?? "");
  const expected = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!expected || !secret || password !== expected) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const token = await createSessionToken(secret);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: ADMIN_MAX_AGE,
    path: "/",
  });
  return res;
}
