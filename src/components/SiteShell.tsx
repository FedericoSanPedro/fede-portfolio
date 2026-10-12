"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, profile } from "@/lib/content";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-20 border-b border-line/80 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link href="/" className="group min-w-0">
            <p className="truncate font-medium tracking-tight text-ink">{profile.name}</p>
            <p className="truncate font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {profile.role} · {profile.location}
            </p>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            <a href={home ? "#work" : "/#work"} className="hover:text-ink">
              {copy.nav.work}
            </a>
            <a href={home ? "#about" : "/#about"} className="hover:text-ink">
              {copy.nav.about}
            </a>
            <a href={home ? "#contact" : "/#contact"} className="hover:text-ink">
              {copy.nav.contact}
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="max-w-xl">{copy.footer.note}</p>
        </div>
      </footer>
    </div>
  );
}
