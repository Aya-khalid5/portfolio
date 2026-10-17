import { Mail, Linkedin, Github, Globe } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/utils";

const details = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/aya-khaled5", href: SITE.linkedin },
  { label: "GitHub", value: "github.com/Aya-khalid5", href: SITE.github },
  { label: "Portfolio", value: "portfolio-aya-khaled.vercel.app", href: SITE.url },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-10 rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <div>
            <SectionHeader
              title="Let's work together"
              description="Open to Data Analyst roles, remote opportunities, and freelance projects. Email is the quickest way to reach me."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${SITE.email}`} icon={<Mail size={16} />}>
                Email Me
              </Button>
              <Button
                href={SITE.linkedin}
                variant="secondary"
                icon={<Linkedin size={16} />}
              >
                LinkedIn
              </Button>
              <Button
                href={SITE.github}
                variant="secondary"
                icon={<Github size={16} />}
              >
                GitHub
              </Button>
            </div>
          </div>

          <dl className="divide-y divide-border self-center border-y border-border text-sm">
            {details.map((item) => (
              <div
                key={item.label}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3.5"
              >
                <dt className="flex items-center gap-2 text-ink-soft">
                  {item.label === "Portfolio" && (
                    <Globe size={14} aria-hidden="true" />
                  )}
                  {item.label}
                </dt>
                <dd>
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      item.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="focus-ring link-draw break-all font-medium text-ink hover:text-clay-dark"
                  >
                    {item.value}
                    {!item.href.startsWith("mailto:") && (
                      <span className="sr-only"> (opens in a new tab)</span>
                    )}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
