import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects, FEATURED_COUNT } from "@/data/projects";

export default function Projects() {
  const [lead, ...rest] = projects.slice(0, FEATURED_COUNT);

  return (
    <section id="projects" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            title="Featured projects"
            description="Nine projects from raw data to finished report. Each has its own page with the objective, process, findings, and screenshots."
          />
          <Link
            href="/projects"
            className="focus-ring link-draw flex items-center gap-1.5 text-sm font-medium text-clay-dark"
          >
            View all {projects.length} projects <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 space-y-6">
          <ProjectCard project={lead} variant="feature" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
