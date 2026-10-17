import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import SocialLink from "@/components/ui/SocialLink";
import { SITE } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-medium text-ink">
            {SITE.name}
          </p>
          <p className="mt-1 text-xs text-ink-soft">
            {SITE.title} &middot; {SITE.location} &middot;{" "}
            <Link
              href="/#home"
              className="focus-ring link-draw hover:text-ink"
            >
              Back to top
            </Link>
          </p>
        </div>

        <div className="flex gap-3">
          <SocialLink href={`mailto:${SITE.email}`} icon={Mail} label="Email" />
          <SocialLink href={SITE.linkedin} icon={Linkedin} label="LinkedIn" />
          <SocialLink href={SITE.github} icon={Github} label="GitHub" />
        </div>
      </div>
    </footer>
  );
}
