import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          title="Services"
          description="Freelance data work, scoped to what you need. Each service lists what you receive and what I need from you to get started."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </ul>

        <p className="mt-10 text-sm text-ink-soft">
          Pricing and timelines depend on the data and scope, so they are agreed
          per project. Describe your data and question in an email to get
          started.
        </p>
      </div>
    </section>
  );
}
