import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries, locales, type Locale } from "@/i18n/translations";
import SetHtmlLang from "@/components/SetHtmlLang";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const dict = dictionaries[locale as Locale];
  return { title: dict.meta.title, description: dict.meta.description };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <>
      <SetHtmlLang locale={locale as Locale} />
      {children}
    </>
  );
}
