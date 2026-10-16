import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { dictionaries, locales, type Locale } from "@/i18n/translations";
import { legalContent } from "@/content/legal";
import LegalDocument from "@/components/LegalDocument";

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
  return { title: legalContent[locale as Locale].privacyPolicy.title };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = dictionaries[locale as Locale];
  const doc = legalContent[locale as Locale].privacyPolicy;

  return <LegalDocument doc={doc} dict={dict} locale={locale as Locale} />;
}
