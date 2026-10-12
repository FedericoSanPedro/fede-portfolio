import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCase } from "@/components/ProjectCase";
import { getProject, projects } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return {};
  }
  return {
    title: `${project.title} — Federico San Pedro`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }
  return <ProjectCase project={project} />;
}
