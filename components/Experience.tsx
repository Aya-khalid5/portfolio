import SectionHeader from "@/components/SectionHeader";
import Badge from "@/components/ui/Badge";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          title="Experience"
          description="Community involvement and professional training."
        />

        <ol className="mt-10 space-y-10">
          {experience.map((item) => (
            <li
              key={item.title}
              className="border-l-2 border-peach pl-6 sm:pl-8"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <Badge tone="solid">{item.kind}</Badge>
                {item.date && (
                  <p className="text-sm text-ink-soft">{item.date}</p>
                )}
              </div>
              <h3 className="mt-3 font-display text-lg font-medium text-ink">
                {item.title}
              </h3>
              <p className="text-sm text-clay-dark">{item.organization}</p>

              {item.details && (
                <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-soft marker:text-peach">
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}

              {item.tags && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <li key={t}>
                      <Badge>{t}</Badge>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
