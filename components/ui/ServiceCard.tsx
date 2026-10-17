import {
  FileSpreadsheet,
  LayoutDashboard,
  Database,
  FileText,
  Mail,
  type LucideIcon,
} from "lucide-react";
import type { Service, ServiceIcon } from "@/data/services";
import { SITE } from "@/lib/utils";

const icons: Record<ServiceIcon, LucideIcon> = {
  excel: FileSpreadsheet,
  dashboard: LayoutDashboard,
  sql: Database,
  report: FileText,
};

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-medium text-ink">{title}</h4>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  const subject = encodeURIComponent(`Inquiry: ${service.title}`);

  return (
    <li className="flex flex-col rounded-2xl border border-border bg-surface p-6">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-peach-soft text-clay-dark"
      >
        <Icon size={19} strokeWidth={1.75} />
      </span>

      <h3 className="mt-4 font-display text-lg font-medium leading-snug text-ink">
        {service.title}
      </h3>

      <div className="mt-4 space-y-5">
        <List title="What you receive" items={service.deliverables} />
        <List title="What I need from you" items={service.needs} />
      </div>

      <a
        href={`mailto:${SITE.email}?subject=${subject}`}
        className="focus-ring link-draw mt-auto inline-flex items-center gap-1.5 self-start pt-6 text-sm font-medium text-clay-dark"
      >
        <Mail size={15} aria-hidden="true" />
        Discuss your project
        <span className="sr-only"> ({service.title})</span>
      </a>
    </li>
  );
}
