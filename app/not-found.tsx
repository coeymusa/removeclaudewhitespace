import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          404
        </div>
        <h1 className="mt-3 text-4xl font-semibold text-ink-900">
          Page not found
        </h1>
        <p className="mt-3 text-ink-500">That page doesn&apos;t exist.</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-ink-900 text-white text-sm font-medium hover:bg-ink-700 transition"
        >
          ← Back to the cleaner
        </Link>
      </div>
    </main>
  );
}
