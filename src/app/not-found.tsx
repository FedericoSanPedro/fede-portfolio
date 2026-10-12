import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="display mt-4 text-4xl">Page not found</h1>
      <Link href="/" className="mt-6 inline-block text-accent">
        ← Home
      </Link>
    </div>
  );
}
