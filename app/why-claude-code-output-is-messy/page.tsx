import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Claude Code Output Pastes Messy (and How to Fix It)",
  description:
    "Deep dive into why text copied from Claude Code, terminals, and AI assistants includes line numbers, ANSI codes, and box-drawing — and how to strip them in seconds.",
  alternates: { canonical: "/why-claude-code-output-is-messy" },
  openGraph: {
    title: "Why Claude Code Output Pastes Messy",
    description: "The technical reasons behind messy AI assistant copy-paste — and the fix.",
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Why Claude Code Output Pastes Messy (and How to Fix It)",
      description:
        "Deep dive into why text copied from Claude Code, terminals, and AI assistants includes line numbers, ANSI codes, and box-drawing — and how to strip them in seconds.",
      mainEntityOfPage: "https://removeclaudewhitespace.com/why-claude-code-output-is-messy",
      url: "https://removeclaudewhitespace.com/why-claude-code-output-is-messy",
      datePublished: "2026-05-05",
      dateModified: "2026-05-05",
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
        { "@type": "ListItem", position: 1, name: "Home", item: "https://removeclaudewhitespace.com/" },
        { "@type": "ListItem", position: 2, name: "Why Claude Code output pastes messy", item: "https://removeclaudewhitespace.com/why-claude-code-output-is-messy" },
      ],
    },
  ],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <header className="border-b border-ink-200/80 bg-ink-50/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="font-mono text-[13px] text-ink-900">
            ← remove<span className="text-accent">claude</span>whitespace
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-24 prose-content">
        <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
          Guide
        </span>
        <h1 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
          Why Claude Code output pastes messy — and how to fix it
        </h1>
        <p className="mt-5 text-lg text-ink-500 leading-relaxed">
          You ask Claude Code for a snippet, copy what looks like clean code,
          paste into your editor, and{" "}
          <em>everything is broken</em>. Here&apos;s what&apos;s actually
          happening — and the one-click fix.
        </p>

        <Section title="The terminal is a renderer, not a clipboard">
          <p>
            Claude Code runs in a terminal. Terminals draw text using a mix of
            characters, ANSI escape codes, and Unicode glyphs to produce the
            polished UI you see — line numbers, color highlighting, frames, and
            tool-call markers. None of those visual aids exist in the underlying
            text; they&apos;re drawn around it.
          </p>
          <p>
            But when you select-and-copy from a terminal, your clipboard
            captures the rendered text — meaning the line numbers and frame
            characters come along as actual characters. Pasting that into VS
            Code or your IDE is when the mess shows up.
          </p>
        </Section>

        <Section title="What gets copied that you don't want">
          <ul>
            <li>
              <strong>Line-number prefixes</strong> like{" "}
              <code className="cd">1\t</code>, <code className="cd">42│</code>{" "}
              from the Read tool&apos;s <code className="cd">cat -n</code>{" "}
              format.
            </li>
            <li>
              <strong>ANSI escape codes</strong> like{" "}
              <code className="cd">\x1B[33m</code> for syntax highlighting that
              your editor renders as garbage.
            </li>
            <li>
              <strong>Box-drawing characters</strong> like{" "}
              <code className="cd">─ │ ┌ ┐ └ ┘</code> from tool-call frames.
            </li>
            <li>
              <strong>Bullet markers</strong> like{" "}
              <code className="cd">●</code>, <code className="cd">⏺</code> that
              prefix tool calls and assistant turns.
            </li>
            <li>
              <strong>Indentation padding</strong> from the UI that becomes a
              multi-space leading indent on every line.
            </li>
            <li>
              <strong>Soft-wrap line breaks</strong> the terminal added at your
              window width, which split sentences that were originally one line.
            </li>
          </ul>
        </Section>

        <Section title="The dumb fix and the smart fix">
          <p>
            <strong>The dumb fix:</strong> select carefully, manually delete
            line numbers, run a regex find-replace, hand-fix indentation. Loses
            you 30 seconds and your patience every time.
          </p>
          <p>
            <strong>The smart fix:</strong> paste into{" "}
            <Link href="/" className="text-accent underline underline-offset-4">
              the cleaner on the homepage
            </Link>{" "}
            and copy the output. Each transform is a separate toggle so you stay
            in control: keep diff markers when you want them, drop indentation
            when it&apos;s padding rather than structure.
          </p>
        </Section>

        <Section title="What the cleaner does, in order">
          <ol>
            <li>Normalises line endings to LF.</li>
            <li>Strips ANSI escape sequences.</li>
            <li>Removes Unicode box-drawing and arrow glyphs.</li>
            <li>Drops line-number prefixes (tab- and pipe-delimited).</li>
            <li>Strips tool-call bullet markers.</li>
            <li>Optionally removes diff +/- markers.</li>
            <li>Trims trailing whitespace per line.</li>
            <li>Detects and removes the common leading indent.</li>
            <li>Optionally rejoins soft-wrapped paragraphs.</li>
            <li>Collapses runs of blank lines.</li>
          </ol>
        </Section>

        <Section title="Why client-side matters">
          <p>
            Code snippets often contain tokens, internal hostnames, or
            proprietary logic. Sending them to a third-party server to clean
            whitespace is overkill at best and a security policy violation at
            worst. Every transform here runs in your browser via plain
            JavaScript — open DevTools and verify there are no network calls.
          </p>
        </Section>

        <div className="mt-12 p-6 rounded-2xl bg-ink-900 text-ink-100 not-prose">
          <p className="text-sm text-ink-300">Ready to clean some output?</p>
          <Link
            href="/"
            className="mt-2 inline-flex items-center gap-2 text-lg font-semibold hover:text-accent transition"
          >
            Go to the cleaner →
          </Link>
        </div>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-ink-900 mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-ink-700 leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-accent [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_strong]:text-ink-900 [&_.cd]:px-1.5 [&_.cd]:py-0.5 [&_.cd]:rounded [&_.cd]:bg-ink-100 [&_.cd]:font-mono [&_.cd]:text-[12px] [&_.cd]:text-ink-700">
        {children}
      </div>
    </div>
  );
}
