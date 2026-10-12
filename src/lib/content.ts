export type Project = {
  slug: string;
  year: string;
  liveUrl?: string;
  repoUrl?: string;
  stack: string[];
  featured: boolean;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const profile = {
  name: "Federico San Pedro",
  role: "Full Stack Developer",
  location: "Buenos Aires, Argentina",
  availability: "Open to new opportunities",
  email: "federicosanpedro5@gmail.com",
  github: "https://github.com/FedericoSanPedro",
  linkedin: "https://www.linkedin.com/in/federico-san-pedro/",
  resumeUrl: "/cv.pdf",
};

export const copy = {
  nav: {
    work: "Work",
    about: "About",
    contact: "Contact",
  },
  hero: {
    kicker: "Node.js · React · TypeScript",
    headline: "I build fullstack products with solid APIs and interfaces that feel fast.",
    body: "4+ years as a web developer. I now specialize in Node.js and React: API contracts, data modeling, and production UIs. PHP gave me judgment; this stack gives me speed to ship.",
    ctaWork: "See work",
    ctaContact: "Get in touch",
  },
  about: {
    title: "How I work",
    paragraphs: [
        "I started in PHP and grew into JavaScript across the stack. That shift was not a CV polish: it changed how I design systems. In Node I think about contracts, validation, and errors. In React I think about minimal state, composition, and experience.",
        "At Avalith I work as a Full Stack Developer on real products, with NestJS, React/Next.js, TypeScript, and AWS. I care that backends stay predictable for consumers, and that frontends do not hide unnecessary complexity.",
        "Native Spanish. English C1. I value ownership, clean architecture, and teams that debate trade-offs without theater.",
      ],
  },
  skills: {
    title: "Stack I actually use",
    groups: [
      {
        label: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native / Expo"],
      },
      {
        label: "Backend",
        items: ["Node.js", "NestJS", "Express", "REST APIs", "Prisma", "PostgreSQL"],
      },
      {
        label: "Cloud & delivery",
        items: ["AWS", "Serverless", "JWT / RBAC", "Git", "CI-minded deploys"],
      },
    ],
  },
  work: {
    title: "Selected work",
    subtitle: "Cases that show backend, frontend, and product judgment. Not a dump of repos.",
    caseLabel: "View case",
    problem: "Problem",
    approach: "Approach",
    outcome: "Outcome",
    back: "Back to work",
    live: "Live",
    code: "Code",
  },
  experience: {
    title: "Experience",
    items: [
      {
        company: "Avalith",
        role: "Full Stack Developer",
        period: "2022 — Present",
        points: [
            "End-to-end delivery: Node/Nest APIs, React/Next.js interfaces, TypeScript on both sides.",
            "Work on large-scale platforms and developer tools, with a focus on reliability and DX.",
            "Cloud integration (AWS), authentication, and monitoring when the product needs it.",
          ],
      },
    ],
  },
  contact: {
    title: "Let's talk",
    body: "If you are building a team and need someone who can move backend and frontend in JavaScript, write to me. I reply with context, not a template.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    sending: "Sending…",
    success: "Got it. I will get back to you shortly.",
    error: "Could not send. Try again or reach me on LinkedIn.",
  },
  footer: {
    note: "This site is the project: Next.js, React, TypeScript, and a Node API Route for the form.",
  },
};

export const projects: Project[] = [
  {
    slug: "spaciofit",
    year: "2026",
    repoUrl: "https://github.com/FedericoSanPedro/SpacioFit",
    featured: true,
    stack: ["NestJS", "Prisma", "PostgreSQL", "JWT", "Next.js", "Tailwind", "AWS"],
    title: "SpacioFit — gym operations",
    summary: "REST API with roles (admin, trainer, student) for enrollment, schedules, attendance, and progress. Next.js frontend.",
    problem: "A gym needs more than a landing page: enroll students, assign slots, track attendance, and see progress without scattered spreadsheets.",
    approach: "NestJS backend with Prisma and PostgreSQL. JWT auth and RBAC. The frontend consumes the API and shows training-hour metrics. Deploy designed for AWS.",
    outcome: "A fullstack product with a clear API contract, relational modeling, and a UI real staff can use. It is the fullest case of my current stack.",
  },
  {
    slug: "serverless-aws",
    year: "2026",
    repoUrl: "https://github.com/FedericoSanPedro/serverless-aws",
    featured: true,
    stack: ["AWS Lambda", "API Gateway", "DynamoDB", "SQS", "Serverless Framework"],
    title: "Serverless API on AWS",
    summary: "Async CRUD: POST, list, get by id, and queue processing with Lambda, DynamoDB, and SQS.",
    problem: "Not every backend lives on a 24/7 server. I wanted to practice the event-driven model that shows up in interviews and in production.",
    approach: "Lambda functions behind API Gateway. Persistence in DynamoDB. An SQS worker to process items after create. Infra defined with the Serverless Framework.",
    outcome: "A deployable API, with per-function logs and a clear split between command, query, and async work.",
  },
  {
    slug: "naming-contest",
    year: "2026",
    repoUrl: "https://github.com/FedericoSanPedro/naming-contest",
    featured: true,
    stack: ["Node.js", "Express 5", "TypeScript", "EJS"],
    title: "Naming Contest — Express + TypeScript",
    summary: "Node server with Express 5 and TypeScript. Explicit backend, without fullstack-framework magic.",
    problem: "I wanted a project where the Node server is visible: routes, types, and runtime — not only React components.",
    approach: "Typed Express 5, ts-node-dev in development, EJS views to deliver HTML from the server.",
    outcome: "A clear traditional Node server/API base, useful to discuss route design and TypeScript on the backend.",
  },
  {
    slug: "gadget-selling-app",
    year: "2026",
    repoUrl: "https://github.com/FedericoSanPedro/Gadget-Selling-App",
    featured: false,
    stack: ["React Native", "Expo", "TypeScript", "Expo Router"],
    title: "Gadget Selling App",
    summary: "Mobile app with Expo Router for a catalog and sales flow. React beyond the DOM.",
    problem: "Many React profiles stop at the web. I wanted to show the same mental model on native.",
    approach: "Expo 54, React 19, file-based navigation with Expo Router, and strict TypeScript.",
    outcome: "An app you can run on iOS, Android, and web from the same codebase.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
