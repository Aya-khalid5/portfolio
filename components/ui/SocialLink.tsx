import type { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export default function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      aria-label={label}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-ink-soft transition-colors duration-200 hover:border-clay hover:text-clay-dark"
    >
      <Icon size={18} strokeWidth={1.75} />
    </a>
  );
}
