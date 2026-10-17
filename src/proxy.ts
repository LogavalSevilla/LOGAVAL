import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/i18n/translations";
import { ADMIN_COOKIE_NAME, verifySessionToken } from "@/lib/adminAuth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login" || pathname === "/admin/logout") {
    return;
  }

  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    const secret = process.env.ADMIN_SESSION_SECRET;
    const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const valid = secret ? await verifySessionToken(token, secret) : false;
    if (!valid) {
      if (pathname.startsWith("/admin/api/")) {
        return NextResponse.json(
          { error: "Sesión caducada. Vuelve a iniciar sesión." },
          { status: 401 }
        );
      }
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
    return;
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|images|favicon.ico|.*\\..*).*)"],
};
