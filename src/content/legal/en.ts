import type { LegalContent } from "./types";

const en: LegalContent = {
  legalNotice: {
    title: "Legal Notice",
    sections: [
      {
        heading: "General information",
        blocks: [
          {
            type: "p",
            text: "In compliance with the duty of information set out in Spanish Law 34/2002, of 11 July, on Information Society Services and Electronic Commerce (LSSI-CE), please note that this website belongs to:",
          },
          {
            type: "list",
            items: [
              "Company: Logaval Export Trading, SLU",
              "Tax ID (CIF/NIF): ESB98565955",
              "Address: Calle Perú, 23, 41012 Seville (Spain)",
              "Email: carlos@logaval.es",
              "Phone: +34 699 094 559",
              "Website domain: logaval.es",
            ],
          },
          {
            type: "p",
            text: "Accessing and using this website grants the condition of user and implies acceptance of all the terms set out in this Legal Notice.",
          },
        ],
      },
      {
        heading: "Terms of use",
        blocks: [
          {
            type: "p",
            text: "The user agrees to use the website appropriately and not to carry out activities that could:",
          },
          {
            type: "list",
            items: [
              "cause damage to the website or its systems",
              "introduce viruses or malicious software",
              "attempt to access restricted areas of the server",
              "use the content for unlawful purposes.",
            ],
          },
          {
            type: "p",
            text: "The website owner reserves the right to modify any information on the website without prior notice.",
          },
        ],
      },
      {
        heading: "Intellectual and industrial property",
        blocks: [
          {
            type: "p",
            text: "All content on the website (texts, images, logos, design, code, structure, etc.) is protected by intellectual property rights.",
          },
          {
            type: "p",
            text: "Reproduction, distribution or modification without the express authorisation of the owner is prohibited.",
          },
        ],
      },
      {
        heading: "Liability",
        blocks: [
          { type: "p", text: "The website owner is not responsible for:" },
          {
            type: "list",
            items: [
              "errors or omissions in the content",
              "damage arising from the use of the website",
              "the presence of viruses or malware.",
            ],
          },
        ],
      },
      {
        heading: "External links",
        blocks: [
          {
            type: "p",
            text: "This website may contain links to external pages. The owner is not responsible for the content or privacy policies of those sites.",
          },
        ],
      },
      {
        heading: "Applicable law",
        blocks: [
          {
            type: "p",
            text: "The relationship between the user and the website owner will be governed by Spanish law.",
          },
        ],
      },
    ],
  },

  privacyPolicy: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. General information",
        blocks: [
          {
            type: "p",
            text: "This Privacy Policy describes how the personal data of users who visit the website logaval.es is collected, used and protected.",
          },
          {
            type: "p",
            text: "Personal data is processed in accordance with the General Data Protection Regulation (GDPR) and the Spanish Organic Law 3/2018 on Data Protection and Guarantee of Digital Rights (LOPDGDD) in force in Spain.",
          },
          {
            type: "p",
            text: "Use of this website implies acceptance of this privacy policy.",
          },
        ],
      },
      {
        heading: "2. Data controller",
        blocks: [
          { type: "p", text: "The controller responsible for the processing of personal data is:" },
          {
            type: "list",
            items: [
              "Company: Logaval Export Trading, SLU",
              "Tax ID (CIF/NIF): ESB98565955",
              "Address: Calle Perú 23, 41012, Seville (Spain)",
              "Email: carlos@logaval.es",
              "Phone: +34 699 094 559",
            ],
          },
        ],
      },
      {
        heading: "3. Personal data we collect",
        blocks: [
          { type: "p", text: "We may collect and process the following personal data:" },
          { type: "subheading", text: "Identification data" },
          {
            type: "list",
            items: ["Full name", "Email address", "Phone number"],
          },
          { type: "subheading", text: "Billing and shipping data" },
          { type: "list", items: ["Postal address", "Postal code", "City and country"] },
          { type: "subheading", text: "Commercial data" },
          {
            type: "list",
            items: ["Purchase history", "Enquiries made", "Product preferences"],
          },
          { type: "subheading", text: "Technical browsing data" },
          {
            type: "list",
            items: [
              "IP address",
              "Browser type",
              "Operating system",
              "Pages visited",
              "Cookies and analytics data.",
            ],
          },
        ],
      },
      {
        heading: "4. Purpose of the data processing",
        blocks: [
          { type: "p", text: "Personal data is used for the following purposes:" },
          { type: "subheading", text: "Management of services and orders" },
          {
            type: "list",
            items: [
              "Processing purchases made on the website",
              "Managing payments, shipments and invoicing",
              "Providing customer service",
            ],
          },
          { type: "subheading", text: "Handling enquiries" },
          {
            type: "list",
            items: ["Responding to requests made through forms, email or phone."],
          },
          { type: "subheading", text: "Commercial communications" },
          {
            type: "list",
            items: ["Sending information about products, promotions or news when the user has given their consent."],
          },
          { type: "subheading", text: "Website improvement" },
          {
            type: "list",
            items: ["Analysing browsing behaviour to improve user experience and the site's performance."],
          },
          { type: "subheading", text: "Legal compliance" },
          { type: "list", items: ["Fulfilling legal, tax and administrative obligations."] },
        ],
      },
      {
        heading: "5. Legal basis for the processing",
        blocks: [
          { type: "p", text: "The processing of personal data is based on:" },
          {
            type: "list",
            items: [
              "The user's consent when accepting this policy or submitting forms.",
              "The performance of a contract when the user makes a purchase or requests a service.",
              "Compliance with legal obligations applicable to the company.",
            ],
          },
        ],
      },
      {
        heading: "6. Data retention",
        blocks: [
          { type: "p", text: "Personal data will be retained:" },
          {
            type: "list",
            items: [
              "For as long as necessary to provide the requested service.",
              "For as long as the business relationship continues.",
              "For the periods required by applicable tax or administrative legislation.",
            ],
          },
          {
            type: "p",
            text: "Once these periods have ended, the data will be deleted or anonymised.",
          },
        ],
      },
      {
        heading: "7. Data recipients",
        blocks: [
          {
            type: "p",
            text: "Personal data may be shared with third parties only when necessary to provide the requested services, such as:",
          },
          {
            type: "list",
            items: [
              "Transport and logistics companies",
              "Technology service providers",
              "Secure payment platforms",
              "Accounting or tax advisory firms",
              "Public authorities when legally required",
            ],
          },
          {
            type: "p",
            text: "Personal data will never be sold or transferred to third parties for commercial purposes.",
          },
        ],
      },
      {
        heading: "8. International data transfers",
        blocks: [
          {
            type: "p",
            text: "In some cases, certain technology providers may process data outside the European Economic Area.",
          },
          {
            type: "p",
            text: "Where this occurs, appropriate safeguards will be adopted in accordance with European data protection regulations.",
          },
        ],
      },
      {
        heading: "9. User rights",
        blocks: [
          { type: "p", text: "The user may exercise the following rights at any time:" },
          {
            type: "list",
            items: [
              "Right of access to their personal data",
              "Right to rectification of inaccurate data",
              "Right to erasure of data",
              "Right to restriction of processing",
              "Right to object to processing",
              "Right to data portability",
            ],
          },
          { type: "p", text: "To exercise these rights, the user can send a request to:" },
          { type: "list", items: ["Email: carlos@logaval.es"] },
          {
            type: "p",
            text: "The user may also lodge a complaint with the Spanish Data Protection Agency (Agencia Española de Protección de Datos) if they believe their rights have been violated.",
          },
        ],
      },
      {
        heading: "10. Data security",
        blocks: [
          {
            type: "p",
            text: "The website applies appropriate technical and organisational measures to ensure the security of personal data and prevent:",
          },
          {
            type: "list",
            items: ["unauthorised access", "loss or alteration of information", "misuse of data."],
          },
        ],
      },
      {
        heading: "11. Cookie policy",
        blocks: [
          {
            type: "p",
            text: "This website uses cookies to improve the browsing experience and analyse site usage.",
          },
          { type: "p", text: "For more information, please see our Cookie Policy." },
        ],
      },
      {
        heading: "12. Changes to the privacy policy",
        blocks: [
          {
            type: "p",
            text: "We reserve the right to modify this Privacy Policy to adapt it to legislative changes or service improvements.",
          },
          { type: "p", text: "We recommend reviewing this page periodically." },
        ],
      },
    ],
  },

  cookiePolicy: {
    title: "Cookie Policy",
    sections: [
      {
        heading: "What are cookies?",
        blocks: [
          {
            type: "p",
            text: "Cookies are small files that are downloaded onto a user's device when accessing certain pages of the Logaval Export Trading, SLU website (logaval.es). They allow information about browsing activity carried out from that device to be stored and retrieved.",
          },
        ],
      },
      {
        heading: "Types of cookies used",
        blocks: [
          { type: "subheading", text: "Technical cookies" },
          { type: "p", text: "Enable browsing and use of the website's basic functions." },
          { type: "subheading", text: "Analytics cookies" },
          {
            type: "p",
            text: "Allow user behaviour on the website to be analysed in order to improve the site's performance.",
          },
          { type: "subheading", text: "Personalisation cookies" },
          { type: "p", text: "Allow user preferences such as language or region to be remembered." },
          { type: "subheading", text: "Advertising cookies" },
          { type: "p", text: "Allow advertising spaces to be managed and relevant ads to be shown." },
          { type: "subheading", text: "Third-party cookies" },
          {
            type: "p",
            text: "This website may use third-party services that collect information for statistical or advertising purposes. These may include tools such as:",
          },
          { type: "list", items: ["Google Analytics"] },
          { type: "p", text: "These tools collect anonymous information about browsing activity." },
        ],
      },
      {
        heading: "How to manage cookies",
        blocks: [
          {
            type: "p",
            text: "Users can allow, block or delete cookies through their browser settings.",
          },
          { type: "p", text: "Guides for the most commonly used browsers:" },
          { type: "list", items: ["Google Chrome", "Mozilla Firefox", "Microsoft Edge", "Safari"] },
        ],
      },
      {
        heading: "Disabling cookies",
        blocks: [
          {
            type: "p",
            text: "Disabling cookies may affect the proper functioning of the website.",
          },
        ],
      },
    ],
  },
};

export default en;
