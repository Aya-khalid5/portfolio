import Link from "next/link";
import { Github, Linkedin, ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ProjectImage from "@/components/ui/ProjectImage";
import { getProjectBySlug } from "@/data/projects";
import { SITE } from "@/lib/utils";

export default function Hero() {
  const featured = getProjectBySlug("diabetes-analysis-prediction")!;
  const thumb = featured.images[0];

  return (
    <section id="home" className="relative overflow-hidden pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-content items-center gap-14 px-6 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-28">
        <div className="animate-rise">
          <p className="text-sm font-medium text-clay-dark">
            {SITE.name} · {SITE.location}
          </p>

          <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
            Data Analyst turning data into insights
          </h1>

          <ul
            aria-label="Core tools"
            className="mt-5 flex flex-wrap gap-2"
          >
            {["Excel", "SQL", "Power BI", "Python","Tableau"].map((tool) => (
              <li key={tool}>
                <Badge tone="solid">{tool}</Badge>
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
            {SITE.positioning}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/#projects" icon={<ArrowRight size={16} />}>
              View My Projects
            </Button>
            <Button href="/#contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button href={SITE.github} variant="ghost" icon={<Github size={16} />}>
              GitHub
            </Button>
            <Button
              href={SITE.linkedin}
              variant="ghost"
              icon={<Linkedin size={16} />}
            >
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="animate-rise [animation-delay:150ms]">
          <Link
            href={`/projects/${featured.slug}`}
            className="focus-ring group block rounded-3xl border border-border bg-surface p-4 shadow-[0_1px_0_0_rgba(43,36,32,0.04)] transition-colors duration-200 hover:border-clay sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-clay-dark">Featured project</p>
                <p className="mt-1 font-display text-lg font-medium text-ink">
                  {featured.title}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="mt-1 shrink-0 text-ink-soft transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay-dark"
              />
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-border bg-peach-soft/30">
              <ProjectImage
                src={thumb.src}
                alt={thumb.caption}
                width={thumb.width}
                height={thumb.height}
                priority
                className="aspect-video w-full object-contain"
              />
            </div>

            <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
              {featured.metrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="flex flex-col-reverse justify-end gap-0.5">
                  <dt className="text-xs text-ink-soft">{metric.label}</dt>
                <dd className="font-display text-lg font-medium text-ink">{metric.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-sm font-medium text-clay-dark">
              View project details
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
