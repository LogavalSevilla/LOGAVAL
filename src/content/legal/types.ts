export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  sections: LegalSection[];
};

export type LegalContent = {
  legalNotice: LegalDoc;
  privacyPolicy: LegalDoc;
  cookiePolicy: LegalDoc;
};
