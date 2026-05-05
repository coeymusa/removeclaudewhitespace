import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

const URL = "https://removeclaudewhitespace.com/built-by";

export const metadata: Metadata = {
  title: "Built by Corey — Other Projects",
  description:
    "More tools, services, and experiments from the maker of Remove Claude Whitespace.",
  alternates: { canonical: "/built-by" },
  openGraph: {
    title: "Built by Corey — Other Projects",
    description:
      "More tools, services, and experiments from the maker of Remove Claude Whitespace.",
    url: URL,
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-ink-200/80 bg-ink-50/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="font-mono text-[13px] text-ink-900">
            ← remove<span className="text-accent">claude</span>whitespace.com
          </Link>
        </div>
      </header>

      <section className="border-b border-ink-200/80 grid-bg">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
            Built by
          </span>
          <h1 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 leading-[1.05]">
            Hi, I&apos;m Corey. I make things.
          </h1>
          <p className="mt-5 text-lg text-ink-500 leading-relaxed text-balance">
            Remove Claude Whitespace is one of a handful of tools, products, and
            services I run. If this one was useful, you might like the others.
          </p>
          <a
            href="https://coreyscodecave.com"
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-ink-900 text-ink-900 text-sm font-medium hover:bg-ink-900 hover:text-white transition"
          >
            Full archive at coreyscodecave.com →
          </a>
        </div>
      </section>

      <section className="bg-ink-50">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 gap-4">
            {PROJECTS.map((p, i) => (
              <a
                key={p.slug}
                href={p.url}
                target="_blank"
                rel="noopener"
                className="group p-7 rounded-2xl bg-white border border-ink-200 hover:border-ink-900 transition relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-400">
                    No. {String(i + 1).padStart(2, "0")} · {p.category}
                  </span>
                  <span className="text-ink-300 group-hover:text-accent group-hover:translate-x-1 transition-all text-lg">
                    →
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-ink-900 mb-1.5">
                  {p.name}
                </h2>
                <p className="font-mono text-[11px] text-ink-400 mb-3">
                  {p.domain}
                </p>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {p.tagline}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-ink-200/80 bg-ink-900 text-ink-300">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/" className="font-mono text-[13px] text-ink-100">
            ← back to remove<span className="text-accent">claude</span>whitespace.com
          </Link>
          <a
            href="https://coreyscodecave.com"
            target="_blank"
            rel="noopener"
            className="text-xs text-ink-400 hover:text-white transition"
          >
            coreyscodecave.com
          </a>
        </div>
      </footer>
    </main>
  );
}
