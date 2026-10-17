import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    title: "Understand the business question",
    description:
      "Agree on the decision the analysis should support before touching the data.",
  },
  {
    title: "Inspect and understand the data",
    description:
      "Check sources, fields, and quality to see what the data can and cannot answer.",
  },
  {
    title: "Clean and prepare the dataset",
    description:
      "Handle missing values, duplicates, and formats, and document each step.",
  },
  {
    title: "Analyze trends and develop KPIs",
    description:
      "Explore patterns and define the measures that track the question.",
  },
  {
    title: "Build visualizations and dashboards",
    description:
      "Turn the results into clear charts and interactive reports.",
  },
  {
    title: "Communicate insights and recommendations",
    description:
      "Explain what the numbers mean and what to do next, in plain language.",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          title="How I work"
          description="The same six steps on every analysis, from the first question to the final recommendation."
        />

        <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-border pt-5">
              <span className="font-display text-sm font-medium text-clay-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-base font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
