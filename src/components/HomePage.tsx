
import Link from "next/link";
import { copy, profile, projects } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";

export function HomePage() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_0.8fr] md:px-8 md:py-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">{copy.hero.kicker}</p>
          <h1 className="display mt-5 max-w-3xl text-4xl leading-[1.05] text-ink md:text-6xl">
            {copy.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{copy.hero.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink">
              {copy.hero.ctaWork}
            </a>
            <a href="#contact" className="rounded-full border border-line px-5 py-3 text-sm text-ink hover:border-accent">
              {copy.hero.ctaContact}
            </a>
          </div>
        </div>
        <aside className="h-fit rounded-2xl border border-line bg-bg-elev p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{profile.availability}</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a className="hover:text-accent" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href={profile.resumeUrl}>
                CV
              </a>
            </li>
          </ul>
        </aside>
      </section>

      <section id="work" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">01</p>
          <h2 className="display mt-3 text-3xl md:text-5xl">{copy.work.title}</h2>
          <p className="mt-4 max-w-2xl text-muted">{copy.work.subtitle}</p>

          <div className="mt-10 grid gap-4">
            {featured.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group grid gap-5 rounded-2xl border border-line bg-bg-elev p-6 transition hover:border-accent md:grid-cols-[auto_1fr_auto] md:items-start"
              >
                <span className="font-mono text-sm text-muted">0{index + 1}</span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="text-xl text-ink md:text-2xl">{project.title}</h3>
                    <span className="font-mono text-xs text-muted">{project.year}</span>
                  </div>
                  <p className="mt-3 max-w-2xl leading-7 text-muted">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-accent">{copy.work.caseLabel} →</span>
              </Link>
            ))}
          </div>

          {more.length > 0 ? (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {more.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="rounded-2xl border border-line p-6 hover:border-accent"
                >
                  <h3 className="text-lg">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section id="about" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">02</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">{copy.about.title}</h2>
            <div className="mt-6 space-y-5 leading-7 text-muted">
              {copy.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{copy.skills.title}</h3>
            <div className="mt-6 grid gap-6">
              {copy.skills.groups.map((group) => (
                <div key={group.label}>
                  <p className="text-sm text-ink">{group.label}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-bg-elev px-3 py-1 text-sm text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">03</p>
          <h2 className="display mt-3 text-3xl md:text-5xl">{copy.experience.title}</h2>
          <div className="mt-10 grid gap-6">
            {copy.experience.items.map((job) => (
              <article key={job.company} className="rounded-2xl border border-line p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-xl">
                    {job.role} · {job.company}
                  </h3>
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                </div>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-muted">
                  {job.points.map((point) => (
                    <li key={point.slice(0, 32)}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">04</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">{copy.contact.title}</h2>
            <p className="mt-5 max-w-md leading-7 text-muted">{copy.contact.body}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
