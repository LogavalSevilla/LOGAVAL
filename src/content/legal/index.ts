import type { Locale } from "@/i18n/translations";
import type { LegalContent } from "./types";
import en from "./en";
import es from "./es";
import it from "./it";

export const legalContent: Record<Locale, LegalContent> = { en, es, it };
export type { LegalContent, LegalDoc, LegalSection, LegalBlock } from "./types";
