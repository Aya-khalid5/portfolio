import { cx } from "@/lib/utils";

interface BadgeProps {
  children: string;
  tone?: "default" | "solid";
}

export default function Badge({ children, tone = "default" }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-tight",
        tone === "default"
          ? "border-border bg-surface text-ink-soft"
          : "border-transparent bg-peach-soft text-clay-dark"
      )}
    >
      {children}
    </span>
  );
}
