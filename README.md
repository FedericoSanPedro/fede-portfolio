# Federico San Pedro — Portfolio

Sitio de portafolio en **Next.js, React y TypeScript**. El formulario de contacto pasa por una API Route de Node validada con Zod.

## Qué muestra

- Posicionamiento fullstack Node.js / React (no un dump de repos).
- Casos de proyecto con problema, enfoque y resultado.
- Contenido en inglés.
- Stack real: NestJS, Next.js, AWS, React Native.

Editá `src/lib/content.ts` para nombres, links, experiencia y casos. Si querés el botón de CV, poné un PDF en `public/cv.pdf`.

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

Vercel es el camino más corto. El POST `/api/contact` valida el payload y lo registra en logs; conectá un mailer (Resend, SES) cuando quieras recibir los mensajes de verdad.
