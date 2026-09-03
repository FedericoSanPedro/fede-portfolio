export type Locale = "es" | "en";

export type Project = {
  slug: string;
  year: string;
  liveUrl?: string;
  repoUrl?: string;
  stack: string[];
  featured: boolean;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  problem: Record<Locale, string>;
  approach: Record<Locale, string>;
  outcome: Record<Locale, string>;
};

export const profile = {
  name: "Federico San Pedro",
  role: {
    es: "Full Stack Developer",
    en: "Full Stack Developer",
  },
  location: {
    es: "Buenos Aires, Argentina",
    en: "Buenos Aires, Argentina",
  },
  availability: {
    es: "Abierto a nuevas oportunidades",
    en: "Open to new opportunities",
  },
  email: "hello@federicosp.dev",
  github: "https://github.com/FedericoSanPedro",
  linkedin: "https://www.linkedin.com/in/federico-san-pedro/",
  resumeUrl: "/cv.pdf",
};

export const copy = {
  nav: {
    work: { es: "Trabajo", en: "Work" },
    about: { es: "Sobre mí", en: "About" },
    contact: { es: "Contacto", en: "Contact" },
  },
  hero: {
    kicker: { es: "Node.js · React · TypeScript", en: "Node.js · React · TypeScript" },
    headline: {
      es: "Construyo productos fullstack con APIs sólidas y interfaces que se sienten rápidas.",
      en: "I build fullstack products with solid APIs and interfaces that feel fast.",
    },
    body: {
      es: "Más de 4 años como desarrollador web. Hoy me especializo en Node.js y React: diseño contratos de API, modelado de datos y UIs en producción. PHP me dio criterio; este stack me da velocidad para entregar.",
      en: "4+ years as a web developer. I now specialize in Node.js and React: API contracts, data modeling, and production UIs. PHP gave me judgment; this stack gives me speed to ship.",
    },
    ctaWork: { es: "Ver proyectos", en: "See work" },
    ctaContact: { es: "Escribime", en: "Get in touch" },
  },
  about: {
    title: { es: "Cómo trabajo", en: "How I work" },
    paragraphs: {
      es: [
        "Arranqué en PHP y seguí creciendo hacia JavaScript en todo el stack. Esa transición no fue maquillaje de CV: fue cambiar cómo diseño sistemas. En Node pienso en contratos, validación y errores. En React pienso en estado mínimo, composición y experiencia.",
        "En Avalith trabajo como Full Stack Developer en productos reales, con NestJS, React/Next.js, TypeScript y AWS. Me importa que el backend sea predecible para quien lo consume, y que el frontend no esconda complejidad innecesaria.",
        "Español nativo. Inglés C1. Me gusta ownership, arquitectura limpia y equipos que discuten trade-offs sin teatro.",
      ],
      en: [
        "I started in PHP and grew into JavaScript across the stack. That shift was not a CV polish: it changed how I design systems. In Node I think about contracts, validation, and errors. In React I think about minimal state, composition, and experience.",
        "At Avalith I work as a Full Stack Developer on real products, with NestJS, React/Next.js, TypeScript, and AWS. I care that backends stay predictable for consumers, and that frontends do not hide unnecessary complexity.",
        "Native Spanish. English C1. I value ownership, clean architecture, and teams that debate trade-offs without theater.",
      ],
    },
  },
  skills: {
    title: { es: "Stack que uso de verdad", en: "Stack I actually use" },
    groups: [
      {
        label: { es: "Frontend", en: "Frontend" },
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native / Expo"],
      },
      {
        label: { es: "Backend", en: "Backend" },
        items: ["Node.js", "NestJS", "Express", "REST APIs", "Prisma", "PostgreSQL"],
      },
      {
        label: { es: "Cloud y entrega", en: "Cloud & delivery" },
        items: ["AWS", "Serverless", "JWT / RBAC", "Git", "CI-minded deploys"],
      },
    ],
  },
  work: {
    title: { es: "Proyectos seleccionados", en: "Selected work" },
    subtitle: {
      es: "Casos que muestran backend, frontend y criterio de producto. No un dump de repos.",
      en: "Cases that show backend, frontend, and product judgment. Not a dump of repos.",
    },
    caseLabel: { es: "Ver caso", en: "View case" },
    problem: { es: "Problema", en: "Problem" },
    approach: { es: "Enfoque", en: "Approach" },
    outcome: { es: "Resultado", en: "Outcome" },
    back: { es: "Volver al trabajo", en: "Back to work" },
    live: { es: "Demo", en: "Live" },
    code: { es: "Código", en: "Code" },
  },
  experience: {
    title: { es: "Experiencia", en: "Experience" },
    items: [
      {
        company: "Avalith",
        role: { es: "Full Stack Developer", en: "Full Stack Developer" },
        period: { es: "2022 — Actualidad", en: "2022 — Present" },
        points: {
          es: [
            "Desarrollo end-to-end: APIs en Node/Nest, interfaces en React/Next.js, TypeScript en ambos lados.",
            "Participación en plataformas de escala y herramientas para developers, con foco en confiabilidad y DX.",
            "Integración con cloud (AWS), autenticación, y monitoreo cuando el producto lo pide.",
          ],
          en: [
            "End-to-end delivery: Node/Nest APIs, React/Next.js interfaces, TypeScript on both sides.",
            "Work on large-scale platforms and developer tools, with a focus on reliability and DX.",
            "Cloud integration (AWS), authentication, and monitoring when the product needs it.",
          ],
        },
      },
    ],
  },
  contact: {
    title: { es: "Hablemos", en: "Let's talk" },
    body: {
      es: "Si estás armando un equipo y necesitás alguien que mueva backend y frontend en JavaScript, escribime. Respondo con contexto, no con un template.",
      en: "If you are building a team and need someone who can move backend and frontend in JavaScript, write to me. I reply with context, not a template.",
    },
    name: { es: "Nombre", en: "Name" },
    email: { es: "Email", en: "Email" },
    message: { es: "Mensaje", en: "Message" },
    send: { es: "Enviar", en: "Send" },
    sending: { es: "Enviando…", en: "Sending…" },
    success: {
      es: "Listo. Te respondo a la brevedad.",
      en: "Got it. I will get back to you shortly.",
    },
    error: {
      es: "No se pudo enviar. Probá de nuevo o escribinos por LinkedIn.",
      en: "Could not send. Try again or reach me on LinkedIn.",
    },
  },
  footer: {
    note: {
      es: "Este sitio es el proyecto: Next.js, React, TypeScript y una API Route de Node para el formulario.",
      en: "This site is the project: Next.js, React, TypeScript, and a Node API Route for the form.",
    },
  },
};

export const projects: Project[] = [
  {
    slug: "spaciofit",
    year: "2026",
    repoUrl: "https://github.com/FedericoSanPedro/SpacioFit",
    featured: true,
    stack: ["NestJS", "Prisma", "PostgreSQL", "JWT", "Next.js", "Tailwind", "AWS"],
    title: {
      es: "SpacioFit — operación de un gimnasio",
      en: "SpacioFit — gym operations",
    },
    summary: {
      es: "API REST con roles (admin, entrenador, alumno) para inscripciones, horarios, asistencia y progreso. Frontend en Next.js.",
      en: "REST API with roles (admin, trainer, student) for enrollment, schedules, attendance, and progress. Next.js frontend.",
    },
    problem: {
      es: "Un gimnasio necesita más que una landing: inscribir alumnos, asignar turnos, registrar asistencia y ver progreso sin planillas sueltas.",
      en: "A gym needs more than a landing page: enroll students, assign slots, track attendance, and see progress without scattered spreadsheets.",
    },
    approach: {
      es: "Backend en NestJS con Prisma y PostgreSQL. Autenticación JWT y RBAC. El frontend consume la API y muestra métricas de horas entrenadas. Deploy pensado para AWS.",
      en: "NestJS backend with Prisma and PostgreSQL. JWT auth and RBAC. The frontend consumes the API and shows training-hour metrics. Deploy designed for AWS.",
    },
    outcome: {
      es: "Un producto fullstack con contrato de API claro, modelado relacional y una UI que un staff real puede usar. Es el caso más completo de mi stack actual.",
      en: "A fullstack product with a clear API contract, relational modeling, and a UI real staff can use. It is the fullest case of my current stack.",
    },
  },
  {
    slug: "serverless-aws",
    year: "2026",
    repoUrl: "https://github.com/FedericoSanPedro/serverless-aws",
    featured: true,
    stack: ["AWS Lambda", "API Gateway", "DynamoDB", "SQS", "Serverless Framework"],
    title: {
      es: "API serverless en AWS",
      en: "Serverless API on AWS",
    },
    summary: {
      es: "CRUD asíncrono: POST, listado, get by id, y procesamiento en cola con Lambda, DynamoDB y SQS.",
      en: "Async CRUD: POST, list, get by id, and queue processing with Lambda, DynamoDB, and SQS.",
    },
    problem: {
      es: "No todo backend vive en un servidor 24/7. Quería practicar el modelo event-driven que aparece en entrevistas y en producción.",
      en: "Not every backend lives on a 24/7 server. I wanted to practice the event-driven model that shows up in interviews and in production.",
    },
    approach: {
      es: "Funciones Lambda detrás de API Gateway. Persistencia en DynamoDB. Un worker en SQS para procesar ítems después del alta. Infra definida con Serverless Framework.",
      en: "Lambda functions behind API Gateway. Persistence in DynamoDB. An SQS worker to process items after create. Infra defined with the Serverless Framework.",
    },
    outcome: {
      es: "Una API desplegable, con logs por función y separación clara entre comando, consulta y trabajo asíncrono.",
      en: "A deployable API, with per-function logs and a clear split between command, query, and async work.",
    },
  },
  {
    slug: "naming-contest",
    year: "2026",
    repoUrl: "https://github.com/FedericoSanPedro/naming-contest",
    featured: true,
    stack: ["Node.js", "Express 5", "TypeScript", "EJS"],
    title: {
      es: "Naming Contest — Express + TypeScript",
      en: "Naming Contest — Express + TypeScript",
    },
    summary: {
      es: "Servidor Node con Express 5 y TypeScript. Backend explícito, sin magia de framework fullstack.",
      en: "Node server with Express 5 and TypeScript. Explicit backend, without fullstack-framework magic.",
    },
    problem: {
      es: "Quería un proyecto donde el servidor Node se vea: rutas, tipos y runtime, no solo componentes React.",
      en: "I wanted a project where the Node server is visible: routes, types, and runtime — not only React components.",
    },
    approach: {
      es: "Express 5 tipado, ts-node-dev en desarrollo, vistas EJS para entregar HTML desde el servidor.",
      en: "Typed Express 5, ts-node-dev in development, EJS views to deliver HTML from the server.",
    },
    outcome: {
      es: "Base clara de API/server tradicional en Node, útil para conversar diseño de rutas y TypeScript en backend.",
      en: "A clear traditional Node server/API base, useful to discuss route design and TypeScript on the backend.",
    },
  },
  {
    slug: "gadget-selling-app",
    year: "2026",
    repoUrl: "https://github.com/FedericoSanPedro/Gadget-Selling-App",
    featured: false,
    stack: ["React Native", "Expo", "TypeScript", "Expo Router"],
    title: {
      es: "Gadget Selling App",
      en: "Gadget Selling App",
    },
    summary: {
      es: "App móvil con Expo Router para un flujo de catálogo y venta. React más allá del DOM.",
      en: "Mobile app with Expo Router for a catalog and sales flow. React beyond the DOM.",
    },
    problem: {
      es: "Muchos perfiles React se quedan en web. Quería mostrar el mismo modelo mental en native.",
      en: "Many React profiles stop at the web. I wanted to show the same mental model on native.",
    },
    approach: {
      es: "Expo 54, React 19, navegación por archivos con Expo Router y TypeScript estricto.",
      en: "Expo 54, React 19, file-based navigation with Expo Router, and strict TypeScript.",
    },
    outcome: {
      es: "Una app arrancable en iOS, Android y web desde el mismo codebase.",
      en: "An app you can run on iOS, Android, and web from the same codebase.",
    },
  },
];
