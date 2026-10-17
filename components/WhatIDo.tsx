import {
  Eraser,
  Search,
  LayoutDashboard,
  Gauge,
  Database,
  Network,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

const capabilities: Capability[] = [
  {
    title: "Data Cleaning & Preparation",
    description:
      "Fixing missing values, duplicates, and inconsistent formats so the analysis starts from data you can trust.",
    icon: Eraser,
  },
  {
    title: "Exploratory Data Analysis",
    description:
      "Looking for patterns, outliers, and relationships before deciding what is worth measuring.",
    icon: Search,
  },
  {
    title: "Dashboards & Data Visualization",
    description:
      "Interactive Power BI and Excel dashboards with filters, clear layouts, and charts that fit the question.",
    icon: LayoutDashboard,
  },
  {
    title: "KPI Reporting & Business Insights",
    description:
      "Defining the metrics that matter and turning them into findings people can act on.",
    icon: Gauge,
  },
  {
    title: "Analysis with SQL & Python",
    description:
      "Querying relational data with SQL and using Python (Pandas) for deeper analysis and preparation.",
    icon: Database,
  },
  {
    title: "Data Modeling & Reporting",
    description:
      "Star-schema models and DAX measures that keep reports consistent and easy to extend.",
    icon: Network,
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          title="What I do"
          description="The parts of the analysis workflow I spend most of my time on."
        />

        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <li key={title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-peach-soft text-clay-dark"
              >
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-base font-medium text-ink">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
