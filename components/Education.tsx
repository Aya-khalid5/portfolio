import SectionHeader from "@/components/SectionHeader";

export default function Education() {
  return (
    <section id="education" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeader title="Education" />

        <div className="mt-10 max-w-2xl rounded-3xl border border-border bg-surface p-8 shadow-sm">
          <h3 className="font-display text-xl font-medium text-ink">
            Benha University
          </h3>
          <p className="mt-1 text-base text-ink-soft">
            Faculty of Computers and Artificial Intelligence
          </p>
          <p className="mt-4 text-base text-ink">
            Bachelor&rsquo;s degree in Computers and Artificial Intelligence
          </p>
          <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-5 text-sm text-ink-soft">
            <div>
              <dt className="inline font-medium text-orange-500">GPA: </dt>
              <dd className="inline text-orange-500">3.72 / 4.0</dd>
            </div>
             <div>
              <dt className="inline font-medium text-orange-500">
              Excellent:{" "}
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
