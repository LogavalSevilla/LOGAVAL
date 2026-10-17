import { notFound } from "next/navigation";
import { dictionaries, locales, type Locale } from "@/i18n/translations";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Origin from "@/components/Origin";
import Products from "@/components/Products";
import Markets from "@/components/Markets";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = dictionaries[locale as Locale];

  return (
    <>
      <Header locale={locale as Locale} dict={dict} />
      <main className="flex-1">
        <Hero dict={dict} />
        <About dict={dict} />
        <Services dict={dict} />
        <Origin dict={dict} />
        <Products dict={dict} />
        <Markets dict={dict} />
        <ContactCta dict={dict} />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
