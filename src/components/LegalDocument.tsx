import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Dictionary, Locale } from "@/i18n/translations";
import type { LegalDoc } from "@/content/legal";

const BACK_LABEL: Record<Locale, string> = {
  en: "Back to home",
  es: "Volver al inicio",
  it: "Torna alla home",
};

export default function LegalDocument({
  doc,
  dict,
  locale,
}: {
  doc: LegalDoc;
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="flex-1 bg-cream">
        <article className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <Link
            href={`/${locale}`}
            className="text-sm font-semibold tracking-wide text-gold hover:text-navy"
          >
            ← {BACK_LABEL[locale]}
          </Link>

          <h1 className="mt-6 font-serif text-3xl text-navy sm:text-4xl">
            {doc.title}
          </h1>

          <div className="mt-10 space-y-10">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-xl text-navy">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.blocks.map((block, i) => {
                    if (block.type === "p") {
                      return (
                        <p key={i} className="leading-relaxed text-navy/80">
                          {block.text}
                        </p>
                      );
                    }
                    if (block.type === "subheading") {
                      return (
                        <h3
                          key={i}
                          className="pt-2 text-sm font-semibold tracking-wide text-navy"
                        >
                          {block.text}
                        </h3>
                      );
                    }
                    return (
                      <ul
                        key={i}
                        className="list-disc space-y-1.5 pl-5 leading-relaxed text-navy/80"
                      >
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
