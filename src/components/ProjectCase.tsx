
import Link from "next/link";
import { copy, type Project } from "@/lib/content";

export function ProjectCase({ project }: { project: Project }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
      <Link href="/#work" className="font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-accent">
        ← {copy.work.back}
      </Link>
      <p className="mt-8 font-mono text-xs text-muted">{project.year}</p>
      <h1 className="display mt-3 text-4xl md:text-6xl">{project.title}</h1>
      <p className="mt-5 text-lg leading-8 text-muted">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-accent">
            {copy.work.live} →
          </a>
        ) : null}
        {project.repoUrl ? (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-accent">
            {copy.work.code} →
          </a>
        ) : null}
      </div>

      <dl className="mt-12 grid gap-10">
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{copy.work.problem}</dt>
          <dd className="mt-3 leading-7 text-muted">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{copy.work.approach}</dt>
          <dd className="mt-3 leading-7 text-muted">{project.approach}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{copy.work.outcome}</dt>
          <dd className="mt-3 leading-7 text-muted">{project.outcome}</dd>
        </div>
      </dl>
    </article>
  );
}
