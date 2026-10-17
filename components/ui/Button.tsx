import Link from "next/link";
import { cx } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  className,
}: ButtonProps) {
  const base =
    "focus-ring inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200";

  const styles: Record<string, string> = {
    primary: "bg-ink text-canvas hover:bg-clay-dark",
    secondary:
      "bg-transparent text-ink border border-ink/20 hover:border-clay hover:text-clay-dark",
    ghost: "bg-peach-soft text-clay-dark hover:bg-peach/60",
  };

  const classes = cx(base, styles[variant], className);

  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal && !external) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      className={classes}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
    >
      {children}
      {icon}
      {!isMail && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
