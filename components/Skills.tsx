import SectionHeader from "@/components/SectionHeader";
import Badge from "@/components/ui/Badge";
import { coreTools, skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          title="Skills"
          description="The tools and methods I use to get from raw data to a decision someone can act on."
        />

        <ul aria-label="Core tools" className="mt-6 flex flex-wrap gap-2">
          {coreTools.map((tool) => (
            <li key={tool}>
              <Badge tone="solid">{tool}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-t-2 border-peach pt-5">
              <h3 className="font-display text-base font-medium text-ink">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
              {group.usedIn && (
                <p className="mt-4 text-xs leading-relaxed text-ink-soft">
                  <span className="font-medium text-ink">Used in: </span>
                  {group.usedIn}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
