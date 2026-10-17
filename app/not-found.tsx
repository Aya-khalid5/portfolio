import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-24 text-center">
      <div>
        <p className="font-display text-6xl font-medium text-clay">404</p>
        <h1 className="mt-4 font-display text-2xl font-medium text-ink">
          This page doesn&rsquo;t exist
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          The page you&rsquo;re looking for may have moved or was never
          published.
        </p>
        <Link
          href="/"
          className="focus-ring link-draw mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-clay-dark"
        >
          <ArrowLeft size={15} /> Back to home
        </Link>
      </div>
    </section>
  );
}
