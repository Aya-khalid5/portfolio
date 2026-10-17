import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CertificateCard from "@/components/CertificateCard";
import { certifications } from "@/data/certifications";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Certifications",
  description: `Completed certifications and training programs of ${SITE.shortName}, ${SITE.title}.`,
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          title="Certifications"
          description="Completed training programs and courses, each shown with its certificate."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificateCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
