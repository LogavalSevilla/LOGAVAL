export const locales = ["en", "es", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    services: string;
    manufacturers: string;
    products: string;
    markets: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    body: string;
    stats: { value: string; label: string }[];
    countries: string[];
  };
  services: {
    title: string;
    items: { title: string; body: string }[];
  };
  origin: {
    spainTitle: string;
    spainBody: string;
    italyTitle: string;
    italyBody: string;
    spainLabel: string;
    italyLabel: string;
    spainManufacturers: string[];
    italyManufacturers: string[];
  };
  products: {
    items: { name: string; description: string }[];
  };
  markets: {
    title: string;
    body: string;
  };
  cta: {
    title: string;
    body: string;
    button: string;
    form: {
      name: string;
      country: string;
      clientType: string;
      clientTypeOptions: string[];
      projectType: string;
      projectTypeOptions: string[];
      message: string;
      send: string;
    };
  };
  footer: {
    legal: string;
    privacy: string;
    cookies: string;
    copyright: string;
  };
};

const en: Dictionary = {
  meta: {
    title: "LOGAVAL Export Trading | Ceramic export to the GCC",
    description:
      "Ceramic tiles, terracotta, glass mosaic and tile trims, with end-to-end commercial support on every export operation.",
  },
  nav: {
    about: "About us",
    services: "Services",
    manufacturers: "Manufacturers",
    products: "Products",
    markets: "Markets",
    contact: "Contact us",
  },
  hero: {
    title:
      "Connecting Europe's ceramic manufacturers with distributors and contract projects across the GCC",
    subtitle:
      "Ceramic tiles, terracotta, glass mosaic and tile trims, with end-to-end commercial support on every export operation.",
    ctaPrimary: "Request catalogue",
    ctaSecondary: "Contact us",
  },
  about: {
    title: "20 years of experience in the Middle East ceramic market",
    body: "Logaval Export Trading is a commercial agency based in Seville, Spain. Founded in 2010, it builds on our founder's work in the Middle East ceramic market since 2006. With partners in Dubai, Riyadh and Doha, we work on the ground with distributors, contractors and developers across the six GCC countries.",
    stats: [
      { value: "20", label: "years of experience" },
      { value: "6", label: "GCC countries" },
      { value: "15", label: "manufacturers" },
      { value: "3", label: "partner cities" },
    ],
    countries: [
      "Saudi Arabia",
      "United Arab Emirates",
      "Qatar",
      "Kuwait",
      "Bahrain",
      "Oman",
    ],
  },
  services: {
    title: "One point of contact from first enquiry to shipment",
    items: [
      {
        title: "Product selection",
        body: "We match each project or distribution need with the right manufacturer and series.",
      },
      {
        title: "Factory negotiation",
        body: "Prices, volumes, lead times and payment terms, agreed directly with the factory.",
      },
      {
        title: "Samples",
        body: "Samples and catalogues delivered to clients and specifiers in the Gulf.",
      },
      {
        title: "Technical and documentation support",
        body: "Technical data sheets, certificates, test reports and project submittals.",
      },
      {
        title: "Order follow-up",
        body: "From order confirmation to loading and shipment, every party stays informed.",
      },
    ],
  },
  origin: {
    spainTitle: "Spain: technology, large formats and supply capacity",
    spainBody:
      "Spain is one of the world's leading tile producers, with Castellón as its main industrial cluster. Spanish manufacturers combine advanced technology, large-format porcelain and the capacity to supply large projects on schedule.",
    italyTitle: "Italy: design and premium collections",
    italyBody:
      "Italian manufacturers add design-led collections and premium finishes, often specified in high-end residential and hospitality projects.",
    spainLabel: "Spain (13)",
    italyLabel: "Italy (2)",
    spainManufacturers: [
      "Azuvi",
      "Geotiles",
      "Ascale",
      "Kerlife",
      "Mainzu",
      "Mayor",
      "Paula Purroy",
      "Vidrepur",
      "WOW",
      "DNA",
      "Alumacer",
      "Alteret",
      "Todobarro",
    ],
    italyManufacturers: ["AquarioDue", "Vivaterra"],
  },
  products: {
    items: [
      {
        name: "Indoor ceramic tiles",
        description:
          "Porcelain and ceramic tiles for floors and walls in residential and commercial interiors.",
      },
      {
        name: "Outdoor ceramic tiles",
        description:
          "Weather-resistant porcelain tiles for terraces, pools and outdoor flooring.",
      },
      {
        name: "Luxury tiles",
        description:
          "Large-format, design-led collections for high-end residential and hospitality projects.",
      },
      {
        name: "Terracotta",
        description:
          "Natural clay floor tiles with a warm, traditional character, for interiors and exteriors.",
      },
    ],
  },
  markets: {
    title: "Active across the GCC",
    body: "We work with importers, distributors and contract companies in the six GCC countries, on residential, hospitality and commercial projects.",
  },
  cta: {
    title: "Working on a project or looking for new product lines?",
    body: "Tell us what you need and we will propose the right manufacturers and products.",
    button: "Book a meeting",
    form: {
      name: "Name",
      country: "Country",
      clientType: "Client type",
      clientTypeOptions: ["Distributor", "Contractor", "Developer", "Architect"],
      projectType: "Project type",
      projectTypeOptions: ["Residential", "Hospitality", "Commercial"],
      message: "Message",
      send: "Send",
    },
  },
  footer: {
    legal: "Legal notice",
    privacy: "Privacy policy",
    cookies: "Cookie policy",
    copyright: "© 2026 Logaval Export Trading, SLU. All rights reserved.",
  },
};

const es: Dictionary = {
  meta: {
    title: "LOGAVAL Export Trading | Exportación de cerámica al GCC",
    description:
      "Cerámica, terracota, mosaico vítreo y perfilería, con asesoramiento comercial integral en cada operación de exportación.",
  },
  nav: {
    about: "Quiénes somos",
    services: "Servicios",
    manufacturers: "Fabricantes",
    products: "Productos",
    markets: "Mercados",
    contact: "Contacta con nosotros",
  },
  hero: {
    title:
      "Conectamos a fabricantes europeos de cerámica con distribuidores y proyectos contract del Golfo",
    subtitle:
      "Cerámica, terracota, mosaico vítreo y perfilería, con asesoramiento comercial integral en cada operación de exportación.",
    ctaPrimary: "Solicitar catálogo",
    ctaSecondary: "Contactar",
  },
  about: {
    title: "20 años de experiencia en el mercado cerámico de Oriente Medio",
    body: "Logaval Export Trading es una agencia comercial con sede en Sevilla, España. Fundada en 2010, nace de la experiencia de su fundador en el mercado cerámico de Oriente Medio desde 2006. Con colaboradores en Dubái, Riad y Doha, trabajamos sobre el terreno con distribuidores, constructoras y promotoras de los seis países del GCC.",
    stats: [
      { value: "20", label: "años de experiencia" },
      { value: "6", label: "países del GCC" },
      { value: "15", label: "fabricantes" },
      { value: "3", label: "ciudades con colaboradores" },
    ],
    countries: [
      "Arabia Saudí",
      "Emiratos Árabes Unidos",
      "Qatar",
      "Kuwait",
      "Bahréin",
      "Omán",
    ],
  },
  services: {
    title: "Un único interlocutor desde la primera consulta hasta el embarque",
    items: [
      {
        title: "Selección de producto",
        body: "Asignamos a cada proyecto o necesidad de distribución el fabricante y la serie adecuados.",
      },
      {
        title: "Negociación con fábrica",
        body: "Precios, volúmenes, plazos de entrega y condiciones de pago, acordados directamente con la fábrica.",
      },
      {
        title: "Muestras",
        body: "Muestras y catálogos entregados a clientes y prescriptores en el Golfo.",
      },
      {
        title: "Soporte técnico y documental",
        body: "Fichas técnicas, certificados, ensayos y documentación de proyecto.",
      },
      {
        title: "Seguimiento del pedido",
        body: "Desde la confirmación hasta la carga y el embarque, todas las partes informadas.",
      },
    ],
  },
  origin: {
    spainTitle: "España: tecnología, gran formato y capacidad de suministro",
    spainBody:
      "España es uno de los principales productores mundiales de cerámica, con Castellón como gran polo industrial. Sus fabricantes combinan tecnología avanzada, porcelánico de gran formato y capacidad para abastecer grandes proyectos en plazo.",
    italyTitle: "Italia: diseño y colecciones premium",
    italyBody:
      "Los fabricantes italianos aportan colecciones de diseño y acabados premium, muy presentes en proyectos residenciales de alta gama y hoteleros.",
    spainLabel: "España (13)",
    italyLabel: "Italia (2)",
    spainManufacturers: [
      "Azuvi",
      "Geotiles",
      "Ascale",
      "Kerlife",
      "Mainzu",
      "Mayor",
      "Paula Purroy",
      "Vidrepur",
      "WOW",
      "DNA",
      "Alumacer",
      "Alteret",
      "Todobarro",
    ],
    italyManufacturers: ["AquarioDue", "Vivaterra"],
  },
  products: {
    items: [
      {
        name: "Cerámica interior",
        description:
          "Porcelánico y cerámica para pavimento y revestimiento en interiores residenciales y comerciales.",
      },
      {
        name: "Cerámica exterior",
        description:
          "Porcelánico resistente a la intemperie para terrazas, piscinas y pavimento exterior.",
      },
      {
        name: "Cerámica de lujo",
        description:
          "Colecciones de gran formato y diseño premium para proyectos residenciales y hoteleros de alta gama.",
      },
      {
        name: "Terracota",
        description:
          "Pavimento de barro natural con carácter cálido y tradicional, para interior y exterior.",
      },
    ],
  },
  markets: {
    title: "Presentes en todo el GCC",
    body: "Trabajamos con importadores, distribuidores y empresas contract de los seis países del GCC, en proyectos residenciales, hoteleros y comerciales.",
  },
  cta: {
    title: "¿Tienes un proyecto o buscas nuevas líneas de producto?",
    body: "Cuéntanos qué necesitas y te propondremos los fabricantes y productos adecuados.",
    button: "Agendar reunión",
    form: {
      name: "Nombre",
      country: "País",
      clientType: "Tipo de cliente",
      clientTypeOptions: ["Distribuidor", "Constructora", "Promotora", "Arquitecto"],
      projectType: "Tipo de proyecto",
      projectTypeOptions: ["Residencial", "Hotelero", "Comercial"],
      message: "Mensaje",
      send: "Enviar",
    },
  },
  footer: {
    legal: "Aviso legal",
    privacy: "Política de privacidad",
    cookies: "Política de cookies",
    copyright: "© 2026 Logaval Export Trading, SLU. Todos los derechos reservados.",
  },
};

const it: Dictionary = {
  meta: {
    title: "LOGAVAL Export Trading | Esportazione di ceramica nel GCC",
    description:
      "Ceramica, cotto, mosaico in vetro e profili, con una consulenza commerciale completa in ogni operazione di export.",
  },
  nav: {
    about: "Chi siamo",
    services: "Servizi",
    manufacturers: "Produttori",
    products: "Prodotti",
    markets: "Mercati",
    contact: "Contattaci",
  },
  hero: {
    title:
      "Colleghiamo i produttori europei di ceramica con distributori e progetti contract nei paesi del Golfo",
    subtitle:
      "Ceramica, cotto, mosaico in vetro e profili, con una consulenza commerciale completa in ogni operazione di export.",
    ctaPrimary: "Richiedi il catalogo",
    ctaSecondary: "Contattaci",
  },
  about: {
    title: "20 anni di esperienza nel mercato ceramico del Medio Oriente",
    body: "Logaval Export Trading è un'agenzia commerciale con sede a Siviglia, in Spagna. Fondata nel 2010, nasce dall'esperienza del suo fondatore nel mercato ceramico del Medio Oriente dal 2006. Con partner a Dubai, Riad e Doha, lavoriamo sul campo con distributori, imprese di costruzione e sviluppatori immobiliari nei sei paesi del GCC.",
    stats: [
      { value: "20", label: "anni di esperienza" },
      { value: "6", label: "paesi del GCC" },
      { value: "15", label: "produttori" },
      { value: "3", label: "città con partner" },
    ],
    countries: [
      "Arabia Saudita",
      "Emirati Arabi Uniti",
      "Qatar",
      "Kuwait",
      "Bahrein",
      "Oman",
    ],
  },
  services: {
    title: "Un unico interlocutore dalla prima richiesta alla spedizione",
    items: [
      {
        title: "Selezione del prodotto",
        body: "Abbiniamo a ogni progetto o esigenza distributiva il produttore e la serie più adatti.",
      },
      {
        title: "Trattativa con la fabbrica",
        body: "Prezzi, volumi, tempi di consegna e condizioni di pagamento, concordati direttamente con la fabbrica.",
      },
      {
        title: "Campionature",
        body: "Campioni e cataloghi consegnati a clienti e progettisti nel Golfo.",
      },
      {
        title: "Supporto tecnico e documentale",
        body: "Schede tecniche, certificazioni, test di laboratorio e documentazione di progetto.",
      },
      {
        title: "Gestione dell'ordine",
        body: "Dalla conferma d'ordine al carico e alla spedizione, tutte le parti restano informate.",
      },
    ],
  },
  origin: {
    spainTitle: "Spagna: tecnologia, grandi formati e capacità produttiva",
    spainBody:
      "La Spagna è tra i principali produttori mondiali di ceramica, con Castellón come grande distretto industriale. I suoi produttori uniscono tecnologia avanzata, gres porcellanato di grande formato e la capacità di fornire grandi progetti nei tempi previsti.",
    italyTitle: "Italia: design e collezioni premium",
    italyBody:
      "I produttori italiani offrono collezioni di design e finiture di pregio, spesso scelte per progetti residenziali di alta gamma e per l'hospitality.",
    spainLabel: "Spagna (13)",
    italyLabel: "Italia (2)",
    spainManufacturers: [
      "Azuvi",
      "Geotiles",
      "Ascale",
      "Kerlife",
      "Mainzu",
      "Mayor",
      "Paula Purroy",
      "Vidrepur",
      "WOW",
      "DNA",
      "Alumacer",
      "Alteret",
      "Todobarro",
    ],
    italyManufacturers: ["AquarioDue", "Vivaterra"],
  },
  products: {
    items: [
      {
        name: "Ceramica da interni",
        description:
          "Gres porcellanato e ceramica per pavimenti e rivestimenti in interni residenziali e commerciali.",
      },
      {
        name: "Ceramica da esterni",
        description:
          "Gres porcellanato resistente alle intemperie per terrazze, piscine e pavimentazioni esterne.",
      },
      {
        name: "Ceramica di lusso",
        description:
          "Collezioni di grande formato e design premium per progetti residenziali e alberghieri di alta gamma.",
      },
      {
        name: "Cotto",
        description:
          "Pavimenti in argilla naturale dal carattere caldo e tradizionale, per interni ed esterni.",
      },
    ],
  },
  markets: {
    title: "Presenti in tutto il GCC",
    body: "Collaboriamo con importatori, distributori e aziende contract nei sei paesi del GCC, in progetti residenziali, alberghieri e commerciali.",
  },
  cta: {
    title: "Hai un progetto o cerchi nuove linee di prodotto?",
    body: "Raccontaci di cosa hai bisogno e ti proporremo i produttori e i prodotti più adatti.",
    button: "Prenota un incontro",
    form: {
      name: "Nome",
      country: "Paese",
      clientType: "Tipo di cliente",
      clientTypeOptions: ["Distributore", "Impresa", "Sviluppatore", "Architetto"],
      projectType: "Tipo di progetto",
      projectTypeOptions: ["Residenziale", "Alberghiero", "Commerciale"],
      message: "Messaggio",
      send: "Invia",
    },
  },
  footer: {
    legal: "Note legali",
    privacy: "Informativa sulla privacy",
    cookies: "Cookie policy",
    copyright: "© 2026 Logaval Export Trading, SLU. Tutti i diritti riservati.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, es, it };
