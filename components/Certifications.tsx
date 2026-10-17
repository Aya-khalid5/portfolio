import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            title="Certifications & training"
            description="Completed programs, each backed by a certificate."
          />
          <Link
            href="/certifications"
            className="focus-ring link-draw flex items-center gap-1.5 text-sm font-medium text-clay-dark"
          >
            View the certificates <ArrowRight size={15} />
          </Link>
        </div>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <h3 className="font-display text-base font-medium text-ink">
                  {cert.name}
                </h3>
                <p className="text-sm text-ink-soft">{cert.provider}</p>
              </div>
              <p className="text-sm text-ink-soft sm:text-right">
                {[cert.type, cert.hours, cert.issueDate]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
