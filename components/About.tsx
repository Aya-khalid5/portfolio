import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { SITE } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm sm:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.6fr_1fr] lg:gap-16">
            <div className="relative mx-auto w-52 sm:w-60 lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-peach-soft"
              />
              <Image
                src={SITE.photo}
                alt={SITE.photoAlt}
                width={800}
                height={1000}
                sizes="(min-width: 640px) 240px, 208px"
                className="relative aspect-[4/5] w-full rounded-3xl border border-border bg-black object-cover object-top"
              />
            </div>

            <div>
              <SectionHeader title="About me" />

              <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-ink-soft">
                <p>
                  I’m a Data Analyst who enjoys finding the story behind the
                  data — turning messy datasets into clear insights, meaningful
                  KPIs, and interactive dashboards that help people make better
                  decisions.
                </p>
                <p>
                  I work with Excel, SQL, Power BI, and Python, with Tableau for
                  data visualization. From cleaning and transforming raw data to
                  exploring patterns, building data models, and designing
                  dashboards, I focus on making data accurate, understandable,
                  and useful.
                </p>
                <p>
                  Through hands-on projects and professional training, I’ve
                  explored different problem spaces, from quick-commerce
                  operations and marketing performance to health and lifestyle
                  analytics. Each project helps me look beyond the numbers, ask
                  better questions, and understand what the data actually
                  reveals.
                </p>
                <p>
                  <strong className="font-semibold text-ink">
                    My approach is simple: clean the data, understand the story,
                    and turn insights into action.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
