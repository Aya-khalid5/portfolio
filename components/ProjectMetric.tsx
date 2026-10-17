import type { Metric } from "@/data/projects";

export default function ProjectMetric({ value, label }: Metric) {
  return (
    <div className="border-l-2 border-peach pl-3">
      <p className="font-display text-xl font-medium text-ink sm:text-2xl">
        {value}
      </p>
      <p className="mt-0.5 text-xs text-ink-soft">{label}</p>
    </div>
  );
}
