import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github, BarChart3 } from "lucide-react";
import { getProjectLinks, type Project } from "@/data/projects";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ProjectImage from "@/components/ui/ProjectImage";
import { cx } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  /** "feature" gives the project a wide card with metrics and quick links. */
  variant?: "default" | "feature";
}

const linkIcons = {
  app: <ExternalLink size={15} aria-hidden="true" />,
  report: <BarChart3 size={15} aria-hidden="true" />,
  github: <Github size={15} aria-hidden="true" />,
};

export default function ProjectCard({
  project,
  variant = "default",
}: ProjectCardProps) {
  const thumbnail = project.images[0];
  const feature = variant === "feature";
  const links = feature ? getProjectLinks(project) : [];

  return (
    <article
      className={cx(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-200 focus-within:border-clay hover:border-clay",
        feature ? "grid lg:grid-cols-[1.15fr_1fr]" : "flex flex-col"
      )}
    >
      <div
        className={cx(
          "bg-peach-soft/30 border-border",
          feature ? "border-b lg:border-b-0 lg:border-r" : "border-b"
        )}
      >
        <ProjectImage
          src={thumbnail?.src ?? ""}
          alt={thumbnail?.caption ?? `${project.title} screenshot`}
          width={thumbnail?.width}
          height={thumbnail?.height}
          className={cx(
            "aspect-video w-full object-contain",
            feature && "lg:h-full"
          )}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-medium text-ink">
            <Link
              href={`/projects/${project.slug}`}
              className="focus-ring after:absolute after:inset-0 after:content-['']"
            >
              {project.title}
            </Link>
          </h3>
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="mt-1 shrink-0 text-ink-soft transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay-dark"
          />
        </div>

        <p
          className={cx(
            "text-sm leading-relaxed text-ink-soft",
            feature ? "line-clamp-5" : "line-clamp-4"
          )}
        >
          {project.summary}
        </p>

        {feature && project.metrics.length > 0 && (
          <dl className="grid grid-cols-3 gap-3">
            {project.metrics.slice(0, 3).map((metric) => (
              <div key={metric.label} className="flex flex-col-reverse justify-end gap-0.5 border-l-2 border-peach pl-3">
                <dt className="text-xs text-ink-soft">{metric.label}</dt>
                <dd className="font-display text-lg font-medium text-ink">{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <ul aria-label="Tools used" className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tools.slice(0, 4).map((tool) => (
            <li key={tool}>
              <Badge>{tool}</Badge>
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="relative z-10 flex flex-wrap gap-2">
            {links.map((link) => (
              <Button
                key={link.kind}
                href={link.url}
                variant="secondary"
                icon={linkIcons[link.kind]}
                className="px-4 py-2"
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
