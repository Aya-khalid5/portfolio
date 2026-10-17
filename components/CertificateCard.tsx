import type { Certification } from "@/data/certifications";
import Badge from "@/components/ui/Badge";
import ProjectImage from "@/components/ui/ProjectImage";

export default function CertificateCard({ cert }: { cert: Certification }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="border-b border-border bg-peach-soft/30">
        <ProjectImage
          src={cert.image}
          alt={`${cert.type}: ${cert.name}, ${cert.provider}`}
          className="aspect-[4/3] w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-base font-medium text-ink">
          {cert.name}
        </h3>
        <p className="text-sm text-ink-soft">{cert.provider}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Badge tone="solid">{cert.type}</Badge>
          {cert.hours && <Badge>{cert.hours}</Badge>}
          {cert.issueDate && <Badge>{cert.issueDate}</Badge>}
        </div>
      </div>
    </div>
  );
}
