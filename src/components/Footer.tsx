import Logo from "./Logo";
import type { Dictionary } from "@/i18n/translations";

const COMPANY = {
  name: "Logaval Export Trading, SLU",
  address: "Calle Perú, 23 · 41012 Sevilla, España",
  email: "carlos@logaval.es",
  phone: "+34 699 094 559",
  whatsapp: "34699094559",
  website: "logaval.es",
  instagram: "@logaval_spain",
};

export default function Footer({ dict }: { dict: Dictionary }) {
  const { footer } = dict;
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <Logo variant="dark" />

          <div className="space-y-1.5 text-sm text-cream/80">
            <p>{COMPANY.name}</p>
            <p>{COMPANY.address}</p>
            <p>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-gold">
                {COMPANY.email}
              </a>
              {" · "}
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {COMPANY.phone}
              </a>
            </p>
            <p>
              <a
                href={`https://${COMPANY.website}`}
                className="hover:text-gold"
              >
                {COMPANY.website}
              </a>
              {" · "}
              <a
                href="https://instagram.com/logaval_spain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {COMPANY.instagram}
              </a>
            </p>
          </div>

          <div className="flex gap-6 text-sm text-cream/80">
            <a href="#" className="hover:text-gold">
              {footer.legal}
            </a>
            <a href="#" className="hover:text-gold">
              {footer.privacy}
            </a>
            <a href="#" className="hover:text-gold">
              {footer.cookies}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/15 pt-6 text-xs text-cream/60">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
