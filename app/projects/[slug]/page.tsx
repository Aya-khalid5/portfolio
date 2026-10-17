import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, BarChart3 } from "lucide-react";

import {
  projects,
  getProjectBySlug,
  getProjectLinks,
  type ProjectLink,
} from "@/data/projects";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ProjectMetric from "@/components/ProjectMetric";
import {
  ProjectMediaProvider,
  ProjectHeroImage,
  ProjectGallery,
} from "@/components/project/ProjectMedia";
import { SITE } from "@/lib/utils";

interface ProjectPageProps {
  params: { slug: string };
}

const linkIcons: Record<ProjectLink["kind"], JSX.Element> = {
  app: <ExternalLink size={16} aria-hidden="true" />,
  report: <BarChart3 size={16} aria-hidden="true" />,
  github: <Github size={16} aria-hidden="true" />,
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${SITE.shortName}`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const links = getProjectLinks(project);
  const hasProcess = Boolean(project.process && project.process.length > 0);
  const hasObjective = Boolean(project.objective);

  return (
    <ProjectMediaProvider images={project.images} title={project.title}>
      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-content px-6">
          {/* Back to Projects */}
          <Link
            href="/projects"
            className="focus-ring link-draw inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to projects
          </Link>

          {/* Header */}
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <h1 className="font-display text-3xl font-medium text-ink sm:text-4xl">
                {project.title}
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
                {project.summary}
              </p>

              <h2 className="sr-only">Tools and technologies</h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li key={tool}>
                    <Badge>{tool}</Badge>
                  </li>
                ))}
              </ul>

              {project.datasetSize && (
                <p className="mt-6 text-sm text-ink-soft">
                  <span className="font-medium text-ink">Dataset: </span>
                  {project.datasetSize}
                </p>
              )}

              {links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {links.map((link, i) => (
                    <Button
                      key={link.kind}
                      href={link.url}
                      variant={i === 0 ? "primary" : "secondary"}
                      icon={linkIcons[link.kind]}
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            <ProjectHeroImage title={project.title} />
          </div>

          {/* Objective and process */}
          {(hasObjective || hasProcess) && (
            <div className="mt-16 grid gap-10 border-t border-border pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              {hasObjective && (
                <div>
                  <h2 className="font-display text-lg font-medium text-ink">
                    Objective
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {project.objective}
                  </p>
                </div>
              )}

              {hasProcess && (
                <div>
                  <h2 className="font-display text-lg font-medium text-ink">
                    Analytical process
                  </h2>
                  <ol className="mt-4 space-y-3">
                    {project.process!.map((step, i) => (
                      <li
                        key={step}
                        className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-0.5 font-display text-xs font-medium text-clay-dark"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}

          {/* Key Metrics */}
          {project.metrics.length > 0 && (
            <div className="mt-14 border-t border-border pt-10">
              <h2 className="font-display text-lg font-medium text-ink">
                Key metrics
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {project.metrics.map((metric) => (
                  <ProjectMetric key={metric.label} {...metric} />
                ))}
              </div>
            </div>
          )}

          {/* Key Insights */}
          {project.insights && project.insights.length > 0 && (
            <div className="mt-14 border-t border-border pt-10">
              <h2 className="font-display text-lg font-medium text-ink">
                Key insights
              </h2>

              <ul className="mt-5 space-y-2.5">
                {project.insights.map((insight) => (
                  <li
                    key={insight}
                    className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
                    />
                    {insight}
                  </li>
                ))}
              </ul>

              {project.note && (
                <p className="mt-5 max-w-2xl rounded-xl bg-peach-soft/50 px-4 py-3 text-sm leading-relaxed text-ink-soft">
                  {project.note}
                </p>
              )}
            </div>
          )}

          {/* Limitations */}
          {project.limitations && (
            <div className="mt-14 border-t border-border pt-10">
              <h2 className="font-display text-lg font-medium text-ink">
                Limitations
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {project.limitations}
              </p>
            </div>
          )}

          {/* Gallery */}
          {project.images.length > 1 && (
            <div className="mt-14 border-t border-border pt-10">
              <h2 className="font-display text-lg font-medium text-ink">
                More screenshots
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                Select any screenshot to view it at full size.
              </p>
              <ProjectGallery />
            </div>
          )}

          {/* Main work (shown when there is no step-by-step process) */}
          {!hasProcess && (
            <div className="mt-14 border-t border-border pt-10">
              <h2 className="font-display text-lg font-medium text-ink">
                Main work
              </h2>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.mainWork.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    </ProjectMediaProvider>
  );
}
