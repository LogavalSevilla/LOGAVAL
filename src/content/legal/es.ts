import type { LegalContent } from "./types";

const es: LegalContent = {
  legalNotice: {
    title: "Aviso Legal",
    sections: [
      {
        heading: "Información general",
        blocks: [
          {
            type: "p",
            text: "En cumplimiento del deber de información recogido en la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que el presente sitio web pertenece a:",
          },
          {
            type: "list",
            items: [
              "Empresa: Logaval Export Trading, SLU",
              "CIF/NIF: ESB98565955",
              "Dirección: Calle Perú, 23, 41012 Sevilla (España)",
              "Correo electrónico: carlos@logaval.es",
              "Teléfono: +34 699 094 559",
              "Dominio web: logaval.es",
            ],
          },
          {
            type: "p",
            text: "El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación de todas las condiciones incluidas en este Aviso Legal.",
          },
        ],
      },
      {
        heading: "Condiciones de uso",
        blocks: [
          {
            type: "p",
            text: "El usuario se compromete a utilizar el sitio web de forma adecuada y a no realizar actividades que puedan:",
          },
          {
            type: "list",
            items: [
              "causar daños al sitio web o a sus sistemas",
              "introducir virus o software malicioso",
              "intentar acceder a áreas restringidas del servidor",
              "utilizar los contenidos con fines ilícitos.",
            ],
          },
          {
            type: "p",
            text: "El titular de la web se reserva el derecho a modificar cualquier información del sitio web sin obligación de preavisar.",
          },
        ],
      },
      {
        heading: "Propiedad intelectual e industrial",
        blocks: [
          {
            type: "p",
            text: "Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño, código, estructura, etc.) están protegidos por derechos de propiedad intelectual.",
          },
          {
            type: "p",
            text: "Queda prohibida la reproducción, distribución o modificación sin autorización expresa del titular.",
          },
        ],
      },
      {
        heading: "Responsabilidad",
        blocks: [
          {
            type: "p",
            text: "El titular del sitio web no se hace responsable de:",
          },
          {
            type: "list",
            items: [
              "errores u omisiones en los contenidos",
              "daños derivados del uso del sitio web",
              "presencia de virus o malware.",
            ],
          },
        ],
      },
      {
        heading: "Enlaces externos",
        blocks: [
          {
            type: "p",
            text: "Este sitio web puede contener enlaces a páginas externas. El titular no se responsabiliza del contenido ni de las políticas de privacidad de dichos sitios.",
          },
        ],
      },
      {
        heading: "Legislación aplicable",
        blocks: [
          {
            type: "p",
            text: "La relación entre el usuario y el titular del sitio web se regirá por la legislación española.",
          },
        ],
      },
    ],
  },

  privacyPolicy: {
    title: "Política de Privacidad",
    sections: [
      {
        heading: "1. Información general",
        blocks: [
          {
            type: "p",
            text: "La presente Política de Privacidad describe cómo se recopilan, utilizan y protegen los datos personales de los usuarios que visitan el sitio web logaval.es.",
          },
          {
            type: "p",
            text: "El tratamiento de los datos personales se realiza conforme a lo establecido en el Reglamento General de Protección de Datos (RGPD) y en la Ley Orgánica de Protección de Datos y Garantía de Derechos Digitales (LOPDGDD) vigente en España.",
          },
          {
            type: "p",
            text: "El uso de este sitio web implica la aceptación de esta política de privacidad.",
          },
        ],
      },
      {
        heading: "2. Responsable del tratamiento",
        blocks: [
          { type: "p", text: "El responsable del tratamiento de los datos personales es:" },
          {
            type: "list",
            items: [
              "Empresa: Logaval Export Trading, SLU",
              "CIF/NIF: ESB98565955",
              "Dirección: Calle Perú 23, 41012, Sevilla (España)",
              "Correo electrónico: carlos@logaval.es",
              "Teléfono: +34 699 094 559",
            ],
          },
        ],
      },
      {
        heading: "3. Datos personales que recopilamos",
        blocks: [
          { type: "p", text: "Podemos recopilar y tratar los siguientes datos personales:" },
          { type: "subheading", text: "Datos identificativos" },
          {
            type: "list",
            items: ["Nombre y apellidos", "Dirección de correo electrónico", "Número de teléfono"],
          },
          { type: "subheading", text: "Datos de facturación y envío" },
          { type: "list", items: ["Dirección postal", "Código postal", "Ciudad y país"] },
          { type: "subheading", text: "Datos comerciales" },
          {
            type: "list",
            items: ["Historial de compras", "Consultas realizadas", "Preferencias de productos"],
          },
          { type: "subheading", text: "Datos técnicos de navegación" },
          {
            type: "list",
            items: [
              "Dirección IP",
              "Tipo de navegador",
              "Sistema operativo",
              "Páginas visitadas",
              "Cookies y datos analíticos.",
            ],
          },
        ],
      },
      {
        heading: "4. Finalidad del tratamiento de los datos",
        blocks: [
          { type: "p", text: "Los datos personales se utilizan para las siguientes finalidades:" },
          { type: "subheading", text: "Gestión de servicios y pedidos" },
          {
            type: "list",
            items: [
              "Procesar compras realizadas en la web",
              "Gestionar pagos, envíos y facturación",
              "Ofrecer atención al cliente",
            ],
          },
          { type: "subheading", text: "Atención de consultas" },
          {
            type: "list",
            items: ["Responder solicitudes realizadas a través de formularios, correo electrónico o teléfono."],
          },
          { type: "subheading", text: "Comunicaciones comerciales" },
          {
            type: "list",
            items: ["Enviar información sobre productos, promociones o novedades cuando el usuario haya dado su consentimiento."],
          },
          { type: "subheading", text: "Mejora del sitio web" },
          {
            type: "list",
            items: ["Analizar el comportamiento de navegación para mejorar la experiencia del usuario y el funcionamiento del sitio."],
          },
          { type: "subheading", text: "Cumplimiento legal" },
          { type: "list", items: ["Cumplir obligaciones legales, fiscales y administrativas."] },
        ],
      },
      {
        heading: "5. Base legal del tratamiento",
        blocks: [
          { type: "p", text: "El tratamiento de los datos personales se basa en:" },
          {
            type: "list",
            items: [
              "El consentimiento del usuario al aceptar esta política o enviar formularios.",
              "La ejecución de un contrato cuando el usuario realiza una compra o solicita un servicio.",
              "El cumplimiento de obligaciones legales aplicables a la empresa.",
            ],
          },
        ],
      },
      {
        heading: "6. Conservación de los datos",
        blocks: [
          { type: "p", text: "Los datos personales se conservarán:" },
          {
            type: "list",
            items: [
              "Durante el tiempo necesario para prestar el servicio solicitado.",
              "Mientras exista relación comercial.",
              "Durante los plazos exigidos por la legislación fiscal o administrativa.",
            ],
          },
          {
            type: "p",
            text: "Una vez finalizados estos plazos, los datos serán eliminados o anonimizados.",
          },
        ],
      },
      {
        heading: "7. Destinatarios de los datos",
        blocks: [
          {
            type: "p",
            text: "Los datos personales podrán ser compartidos con terceros únicamente cuando sea necesario para prestar los servicios solicitados, como:",
          },
          {
            type: "list",
            items: [
              "Empresas de transporte y logística",
              "Proveedores de servicios tecnológicos",
              "Plataformas de pago seguras",
              "Asesorías contables o fiscales",
              "Autoridades públicas cuando exista obligación legal",
            ],
          },
          {
            type: "p",
            text: "En ningún caso se venderán ni cederán datos personales a terceros con fines comerciales.",
          },
        ],
      },
      {
        heading: "8. Transferencias internacionales de datos",
        blocks: [
          {
            type: "p",
            text: "En algunos casos, determinados proveedores tecnológicos pueden tratar datos fuera del Espacio Económico Europeo.",
          },
          {
            type: "p",
            text: "Cuando esto ocurra, se adoptarán las garantías adecuadas conforme a la normativa europea de protección de datos.",
          },
        ],
      },
      {
        heading: "9. Derechos del usuario",
        blocks: [
          { type: "p", text: "El usuario puede ejercer en cualquier momento los siguientes derechos:" },
          {
            type: "list",
            items: [
              "Derecho de acceso a sus datos personales",
              "Derecho de rectificación de datos inexactos",
              "Derecho de supresión de datos",
              "Derecho de limitación del tratamiento",
              "Derecho de oposición al tratamiento",
              "Derecho a la portabilidad de los datos",
            ],
          },
          { type: "p", text: "Para ejercer estos derechos, el usuario puede enviar una solicitud a:" },
          { type: "list", items: ["Email: carlos@logaval.es"] },
          {
            type: "p",
            text: "El usuario también puede presentar una reclamación ante la Agencia Española de Protección de Datos si considera que sus derechos han sido vulnerados.",
          },
        ],
      },
      {
        heading: "10. Seguridad de los datos",
        blocks: [
          {
            type: "p",
            text: "El sitio web aplica medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos personales y evitar:",
          },
          {
            type: "list",
            items: ["accesos no autorizados", "pérdida o alteración de información", "uso indebido de los datos."],
          },
        ],
      },
      {
        heading: "11. Política de cookies",
        blocks: [
          {
            type: "p",
            text: "Este sitio web utiliza cookies para mejorar la experiencia de navegación y analizar el uso del sitio.",
          },
          { type: "p", text: "Para obtener más información, consulte nuestra Política de Cookies." },
        ],
      },
      {
        heading: "12. Cambios en la política de privacidad",
        blocks: [
          {
            type: "p",
            text: "Nos reservamos el derecho de modificar la presente Política de Privacidad para adaptarla a cambios legislativos o mejoras del servicio.",
          },
          { type: "p", text: "Se recomienda revisar periódicamente esta página." },
        ],
      },
    ],
  },

  cookiePolicy: {
    title: "Política de Cookies",
    sections: [
      {
        heading: "¿Qué son las cookies?",
        blocks: [
          {
            type: "p",
            text: "Las cookies son pequeños archivos que se descargan en el dispositivo del usuario al acceder a determinadas páginas del sitio web de Logaval Export Trading, SLU (logaval.es). Permiten almacenar y recuperar información sobre la navegación realizada desde dicho dispositivo.",
          },
        ],
      },
      {
        heading: "Tipos de cookies utilizadas",
        blocks: [
          { type: "subheading", text: "Cookies técnicas" },
          { type: "p", text: "Permiten la navegación y el uso de las funciones básicas del sitio web." },
          { type: "subheading", text: "Cookies de análisis" },
          {
            type: "p",
            text: "Permiten analizar el comportamiento de los usuarios en la web para mejorar el funcionamiento del sitio.",
          },
          { type: "subheading", text: "Cookies de personalización" },
          { type: "p", text: "Permiten recordar preferencias del usuario como idioma o región." },
          { type: "subheading", text: "Cookies publicitarias" },
          { type: "p", text: "Permiten gestionar espacios publicitarios y mostrar anuncios relevantes." },
          { type: "subheading", text: "Cookies de terceros" },
          {
            type: "p",
            text: "Este sitio web puede utilizar servicios de terceros que recopilan información con fines estadísticos o publicitarios. Entre ellos pueden encontrarse herramientas como:",
          },
          { type: "list", items: ["Google Analytics"] },
          { type: "p", text: "Estas herramientas recopilan información anónima sobre la navegación." },
        ],
      },
      {
        heading: "Cómo gestionar las cookies",
        blocks: [
          {
            type: "p",
            text: "El usuario puede permitir, bloquear o eliminar cookies desde la configuración de su navegador.",
          },
          { type: "p", text: "Guías para los navegadores más utilizados:" },
          { type: "list", items: ["Google Chrome", "Mozilla Firefox", "Microsoft Edge", "Safari"] },
        ],
      },
      {
        heading: "Desactivación de cookies",
        blocks: [
          {
            type: "p",
            text: "La desactivación de cookies puede afectar al funcionamiento correcto del sitio web.",
          },
        ],
      },
    ],
  },
};

export default es;
