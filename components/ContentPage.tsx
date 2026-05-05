import Link from "next/link";
import Cleaner from "@/components/Cleaner";

export type Crumb = { name: string; href: string };

export default function ContentPage({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumbs: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-ink-200/80 bg-ink-50/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="font-mono text-[13px] text-ink-900">
            ← remove<span className="text-accent">claude</span>whitespace.com
          </Link>
          <nav className="flex items-center gap-5 text-xs font-medium text-ink-500">
            <Link href="/why-claude-code-output-is-messy" className="hover:text-ink-900 transition">
              Why
            </Link>
            <Link href="/how-to-clean-claude-code-output" className="hover:text-ink-900 transition">
              How
            </Link>
          </nav>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-5 lg:px-8 pt-10 pb-16 prose-content">
        <nav aria-label="Breadcrumb" className="text-[11px] font-mono uppercase tracking-wider text-ink-400 mb-6 flex flex-wrap gap-2">
          {crumbs.map((c, i) => (
            <span key={c.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>›</span>}
              {i === crumbs.length - 1 ? (
                <span className="text-ink-700">{c.name}</span>
              ) : (
                <Link href={c.href} className="hover:text-ink-900 transition">
                  {c.name}
                </Link>
              )}
            </span>
          ))}
        </nav>

        <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
          {title}
        </h1>
        <p className="mt-5 text-lg text-ink-500 leading-relaxed">{intro}</p>

        <div className="mt-10 space-y-5 text-ink-700 leading-relaxed [&>h2]:text-2xl [&>h2]:lg:text-3xl [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:text-ink-900 [&>h2]:mt-12 [&>h2]:mb-2 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-ink-900 [&>h3]:mt-8 [&>h3]:mb-2 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>strong]:text-ink-900">
          {children}
        </div>
      </article>

      <section className="border-t border-ink-200/80 bg-ink-50">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-12">
          <div className="mb-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
              Try it
            </span>
            <h2 className="mt-2 text-2xl font-semibold text-ink-900">
              Clean your output now
            </h2>
          </div>
          <Cleaner />
        </div>
      </section>

      <footer className="border-t border-ink-200/80 bg-ink-900 text-ink-300">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/" className="font-mono text-[13px] text-ink-100">
            remove<span className="text-accent">claude</span>whitespace.com
          </Link>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-400">
            <Link href="/strip-ansi-codes-online" className="hover:text-white">Strip ANSI codes</Link>
            <Link href="/remove-line-numbers-from-code" className="hover:text-white">Remove line numbers</Link>
            <Link href="/clean-terminal-output" className="hover:text-white">Clean terminal output</Link>
            <Link href="/claude-code-copy-paste-fix" className="hover:text-white">Copy-paste fix</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

export function howToJsonLd({
  name,
  description,
  steps,
  url,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name,
        description,
        totalTime: "PT30S",
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://removeclaudewhitespace.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name,
            item: url,
          },
        ],
      },
    ],
  };
}

export function articleJsonLd({
  headline,
  description,
  url,
  datePublished,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline,
        description,
        mainEntityOfPage: url,
        url,
        datePublished,
        dateModified: datePublished,
        author: { "@type": "Organization", name: "Remove Claude Whitespace" },
        publisher: {
          "@type": "Organization",
          name: "Remove Claude Whitespace",
          url: "https://removeclaudewhitespace.com/",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://removeclaudewhitespace.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: headline,
            item: url,
          },
        ],
      },
    ],
  };
}
