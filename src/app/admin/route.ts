import fs from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "src/admin-content/panel-ingresos-gastos.html"
  );
  const fragment = await fs.readFile(filePath, "utf8");

  const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex,nofollow" />
<a href="/admin/logout" style="position:fixed;top:10px;right:14px;z-index:9999;font:12px system-ui,sans-serif;color:#5b6f6d;text-decoration:underline;">Cerrar sesión</a>
${fragment}
</html>`;

  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
