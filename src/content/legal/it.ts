import type { LegalContent } from "./types";

const it: LegalContent = {
  legalNotice: {
    title: "Note Legali",
    sections: [
      {
        heading: "Informazioni generali",
        blocks: [
          {
            type: "p",
            text: "In adempimento dell'obbligo di informazione previsto dalla Legge spagnola 34/2002, dell'11 luglio, sui Servizi della Società dell'Informazione e il Commercio Elettronico (LSSI-CE), si informa che il presente sito web appartiene a:",
          },
          {
            type: "list",
            items: [
              "Azienda: Logaval Export Trading, SLU",
              "P. IVA/Codice Fiscale (CIF/NIF): B98565955",
              "Indirizzo: Calle Perú, 23, 41012 Siviglia (Spagna)",
              "Email: carlos@logaval.es",
              "Telefono: +34 699 094 559",
              "Dominio web: logaval.es",
            ],
          },
          {
            type: "p",
            text: "L'accesso e l'uso del sito web attribuiscono la qualifica di utente e implicano l'accettazione di tutte le condizioni incluse nelle presenti Note Legali.",
          },
        ],
      },
      {
        heading: "Condizioni d'uso",
        blocks: [
          {
            type: "p",
            text: "L'utente si impegna a utilizzare il sito web in modo appropriato e a non svolgere attività che possano:",
          },
          {
            type: "list",
            items: [
              "causare danni al sito web o ai suoi sistemi",
              "introdurre virus o software dannoso",
              "tentare di accedere ad aree riservate del server",
              "utilizzare i contenuti per scopi illeciti.",
            ],
          },
          {
            type: "p",
            text: "Il titolare del sito web si riserva il diritto di modificare qualsiasi informazione del sito senza obbligo di preavviso.",
          },
        ],
      },
      {
        heading: "Proprietà intellettuale e industriale",
        blocks: [
          {
            type: "p",
            text: "Tutti i contenuti del sito web (testi, immagini, loghi, design, codice, struttura, ecc.) sono protetti da diritti di proprietà intellettuale.",
          },
          {
            type: "p",
            text: "È vietata la riproduzione, distribuzione o modifica senza l'autorizzazione espressa del titolare.",
          },
        ],
      },
      {
        heading: "Responsabilità",
        blocks: [
          { type: "p", text: "Il titolare del sito web non è responsabile di:" },
          {
            type: "list",
            items: [
              "errori od omissioni nei contenuti",
              "danni derivanti dall'uso del sito web",
              "presenza di virus o malware.",
            ],
          },
        ],
      },
      {
        heading: "Link esterni",
        blocks: [
          {
            type: "p",
            text: "Questo sito web può contenere link a pagine esterne. Il titolare non è responsabile del contenuto né delle politiche sulla privacy di tali siti.",
          },
        ],
      },
      {
        heading: "Legislazione applicabile",
        blocks: [
          {
            type: "p",
            text: "Il rapporto tra l'utente e il titolare del sito web sarà disciplinato dalla legislazione spagnola.",
          },
        ],
      },
    ],
  },

  privacyPolicy: {
    title: "Informativa sulla Privacy",
    sections: [
      {
        heading: "1. Informazioni generali",
        blocks: [
          {
            type: "p",
            text: "La presente Informativa sulla Privacy descrive come vengono raccolti, utilizzati e protetti i dati personali degli utenti che visitano il sito web logaval.es.",
          },
          {
            type: "p",
            text: "Il trattamento dei dati personali viene effettuato in conformità al Regolamento Generale sulla Protezione dei Dati (RGPD) e alla Legge Organica spagnola 3/2018 sulla Protezione dei Dati e Garanzia dei Diritti Digitali (LOPDGDD) in vigore in Spagna.",
          },
          {
            type: "p",
            text: "L'uso di questo sito web implica l'accettazione della presente informativa sulla privacy.",
          },
        ],
      },
      {
        heading: "2. Titolare del trattamento",
        blocks: [
          { type: "p", text: "Il titolare del trattamento dei dati personali è:" },
          {
            type: "list",
            items: [
              "Azienda: Logaval Export Trading, SLU",
              "P. IVA/Codice Fiscale (CIF/NIF): B98565955",
              "Indirizzo: Calle Perú 23, 41012, Siviglia (Spagna)",
              "Email: carlos@logaval.es",
              "Telefono: +34 699 094 559",
            ],
          },
        ],
      },
      {
        heading: "3. Dati personali raccolti",
        blocks: [
          { type: "p", text: "Possiamo raccogliere e trattare i seguenti dati personali:" },
          { type: "subheading", text: "Dati identificativi" },
          {
            type: "list",
            items: ["Nome e cognome", "Indirizzo email", "Numero di telefono"],
          },
          { type: "subheading", text: "Dati di fatturazione e spedizione" },
          { type: "list", items: ["Indirizzo postale", "Codice postale", "Città e paese"] },
          { type: "subheading", text: "Dati commerciali" },
          {
            type: "list",
            items: ["Storico degli acquisti", "Richieste effettuate", "Preferenze di prodotto"],
          },
          { type: "subheading", text: "Dati tecnici di navigazione" },
          {
            type: "list",
            items: [
              "Indirizzo IP",
              "Tipo di browser",
              "Sistema operativo",
              "Pagine visitate",
              "Cookie e dati analitici.",
            ],
          },
        ],
      },
      {
        heading: "4. Finalità del trattamento dei dati",
        blocks: [
          { type: "p", text: "I dati personali vengono utilizzati per le seguenti finalità:" },
          { type: "subheading", text: "Gestione di servizi e ordini" },
          {
            type: "list",
            items: [
              "Elaborare gli acquisti effettuati sul sito",
              "Gestire pagamenti, spedizioni e fatturazione",
              "Fornire assistenza clienti",
            ],
          },
          { type: "subheading", text: "Gestione delle richieste" },
          {
            type: "list",
            items: ["Rispondere alle richieste inviate tramite moduli, email o telefono."],
          },
          { type: "subheading", text: "Comunicazioni commerciali" },
          {
            type: "list",
            items: ["Inviare informazioni su prodotti, promozioni o novità quando l'utente abbia dato il proprio consenso."],
          },
          { type: "subheading", text: "Miglioramento del sito web" },
          {
            type: "list",
            items: ["Analizzare il comportamento di navigazione per migliorare l'esperienza dell'utente e il funzionamento del sito."],
          },
          { type: "subheading", text: "Adempimento di obblighi legali" },
          { type: "list", items: ["Adempiere a obblighi legali, fiscali e amministrativi."] },
        ],
      },
      {
        heading: "5. Base giuridica del trattamento",
        blocks: [
          { type: "p", text: "Il trattamento dei dati personali si basa su:" },
          {
            type: "list",
            items: [
              "Il consenso dell'utente al momento dell'accettazione della presente informativa o dell'invio di moduli.",
              "L'esecuzione di un contratto quando l'utente effettua un acquisto o richiede un servizio.",
              "L'adempimento di obblighi legali applicabili all'azienda.",
            ],
          },
        ],
      },
      {
        heading: "6. Conservazione dei dati",
        blocks: [
          { type: "p", text: "I dati personali saranno conservati:" },
          {
            type: "list",
            items: [
              "Per il tempo necessario a fornire il servizio richiesto.",
              "Finché sussista un rapporto commerciale.",
              "Per i termini previsti dalla normativa fiscale o amministrativa applicabile.",
            ],
          },
          {
            type: "p",
            text: "Al termine di questi periodi, i dati saranno cancellati o resi anonimi.",
          },
        ],
      },
      {
        heading: "7. Destinatari dei dati",
        blocks: [
          {
            type: "p",
            text: "I dati personali potranno essere condivisi con terzi solo quando necessario per fornire i servizi richiesti, come ad esempio:",
          },
          {
            type: "list",
            items: [
              "Aziende di trasporto e logistica",
              "Fornitori di servizi tecnologici",
              "Piattaforme di pagamento sicure",
              "Studi di consulenza contabile o fiscale",
              "Autorità pubbliche quando sussista un obbligo legale",
            ],
          },
          {
            type: "p",
            text: "I dati personali non saranno in alcun caso venduti né ceduti a terzi per finalità commerciali.",
          },
        ],
      },
      {
        heading: "8. Trasferimenti internazionali di dati",
        blocks: [
          {
            type: "p",
            text: "In alcuni casi, determinati fornitori tecnologici possono trattare dati al di fuori dello Spazio Economico Europeo.",
          },
          {
            type: "p",
            text: "In tal caso, saranno adottate le garanzie adeguate in conformità alla normativa europea sulla protezione dei dati.",
          },
        ],
      },
      {
        heading: "9. Diritti dell'utente",
        blocks: [
          { type: "p", text: "L'utente può esercitare in qualsiasi momento i seguenti diritti:" },
          {
            type: "list",
            items: [
              "Diritto di accesso ai propri dati personali",
              "Diritto di rettifica dei dati inesatti",
              "Diritto di cancellazione dei dati",
              "Diritto di limitazione del trattamento",
              "Diritto di opposizione al trattamento",
              "Diritto alla portabilità dei dati",
            ],
          },
          { type: "p", text: "Per esercitare questi diritti, l'utente può inviare una richiesta a:" },
          { type: "list", items: ["Email: carlos@logaval.es"] },
          {
            type: "p",
            text: "L'utente può inoltre presentare un reclamo all'Agenzia Spagnola per la Protezione dei Dati (Agencia Española de Protección de Datos) qualora ritenga che i propri diritti siano stati violati.",
          },
        ],
      },
      {
        heading: "10. Sicurezza dei dati",
        blocks: [
          {
            type: "p",
            text: "Il sito web applica misure tecniche e organizzative adeguate per garantire la sicurezza dei dati personali e prevenire:",
          },
          {
            type: "list",
            items: ["accessi non autorizzati", "perdita o alterazione delle informazioni", "uso improprio dei dati."],
          },
        ],
      },
      {
        heading: "11. Informativa sui cookie",
        blocks: [
          {
            type: "p",
            text: "Questo sito web utilizza cookie per migliorare l'esperienza di navigazione e analizzare l'utilizzo del sito.",
          },
          { type: "p", text: "Per maggiori informazioni, consultare la nostra Cookie Policy." },
        ],
      },
      {
        heading: "12. Modifiche all'informativa sulla privacy",
        blocks: [
          {
            type: "p",
            text: "Ci riserviamo il diritto di modificare la presente Informativa sulla Privacy per adeguarla a cambiamenti normativi o miglioramenti del servizio.",
          },
          { type: "p", text: "Si consiglia di consultare periodicamente questa pagina." },
        ],
      },
    ],
  },

  cookiePolicy: {
    title: "Cookie Policy",
    sections: [
      {
        heading: "Cosa sono i cookie?",
        blocks: [
          {
            type: "p",
            text: "I cookie sono piccoli file che vengono scaricati sul dispositivo dell'utente quando accede a determinate pagine del sito web di Logaval Export Trading, SLU (logaval.es). Consentono di memorizzare e recuperare informazioni sulla navigazione effettuata da tale dispositivo.",
          },
        ],
      },
      {
        heading: "Tipologie di cookie utilizzati",
        blocks: [
          { type: "subheading", text: "Cookie tecnici" },
          { type: "p", text: "Consentono la navigazione e l'uso delle funzioni di base del sito web." },
          { type: "subheading", text: "Cookie analitici" },
          {
            type: "p",
            text: "Consentono di analizzare il comportamento degli utenti sul sito per migliorarne il funzionamento.",
          },
          { type: "subheading", text: "Cookie di personalizzazione" },
          { type: "p", text: "Consentono di ricordare le preferenze dell'utente, come lingua o regione." },
          { type: "subheading", text: "Cookie pubblicitari" },
          { type: "p", text: "Consentono di gestire gli spazi pubblicitari e mostrare annunci pertinenti." },
          { type: "subheading", text: "Cookie di terze parti" },
          {
            type: "p",
            text: "Questo sito web può utilizzare servizi di terze parti che raccolgono informazioni a fini statistici o pubblicitari. Tra questi possono rientrare strumenti come:",
          },
          { type: "list", items: ["Google Analytics"] },
          { type: "p", text: "Questi strumenti raccolgono informazioni anonime sulla navigazione." },
        ],
      },
      {
        heading: "Come gestire i cookie",
        blocks: [
          {
            type: "p",
            text: "L'utente può consentire, bloccare o eliminare i cookie dalle impostazioni del proprio browser.",
          },
          { type: "p", text: "Guide per i browser più diffusi:" },
          { type: "list", items: ["Google Chrome", "Mozilla Firefox", "Microsoft Edge", "Safari"] },
        ],
      },
      {
        heading: "Disattivazione dei cookie",
        blocks: [
          {
            type: "p",
            text: "La disattivazione dei cookie può compromettere il corretto funzionamento del sito web.",
          },
        ],
      },
    ],
  },
};

export default it;
