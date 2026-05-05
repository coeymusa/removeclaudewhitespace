import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Clean Claude Code Output: Step-by-Step",
  description:
    "Step-by-step guide to removing line numbers, ANSI codes, and whitespace noise from Claude Code output before pasting into your editor.",
  alternates: { canonical: "/how-to-clean-claude-code-output" },
};

const howToLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "How to clean Claude Code output",
      description:
        "Step-by-step guide to removing line numbers, ANSI codes, and whitespace noise from Claude Code output before pasting into your editor.",
      totalTime: "PT30S",
      step: [
        { "@type": "HowToStep", position: 1, name: "Copy from Claude Code", text: "Select the snippet you want — code, log output, a tool result." },
        { "@type": "HowToStep", position: 2, name: "Paste into the cleaner", text: "Open the cleaner and paste into the left textarea. The right panel updates live." },
        { "@type": "HowToStep", position: 3, name: "Toggle transforms", text: "Defaults strip line numbers, ANSI codes, box-drawing, and trailing whitespace. Toggle off any transform that's eating something you wanted to keep." },
        { "@type": "HowToStep", position: 4, name: "Click copy", text: "The 'copy' button puts the clean output on your clipboard." },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://removeclaudewhitespace.com/" },
        { "@type": "ListItem", position: 2, name: "How to clean Claude Code output", item: "https://removeclaudewhitespace.com/how-to-clean-claude-code-output" },
      ],
    },
  ],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <header className="border-b border-ink-200/80 bg-ink-50/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="font-mono text-[13px] text-ink-900">
            ← remove<span className="text-accent">claude</span>whitespace
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
          Tutorial
        </span>
        <h1 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
          How to clean Claude Code output: a 30-second tutorial
        </h1>
        <p className="mt-5 text-lg text-ink-500 leading-relaxed">
          The fastest way to turn fragmented terminal copy-paste into clean,
          editor-ready code.
        </p>

        <ol className="mt-12 space-y-8">
          <Step
            n="1"
            title="Copy from Claude Code"
            body="Select the snippet you want — code, log output, a tool result. Don't worry about being precise; the cleaner handles slop."
          />
          <Step
            n="2"
            title="Paste into the left panel"
            body={
              <>
                Open{" "}
                <Link href="/" className="text-accent underline underline-offset-4">
                  the cleaner
                </Link>{" "}
                and paste into the left textarea. The right panel updates live.
              </>
            }
          />
          <Step
            n="3"
            title="Toggle transforms (optional)"
            body="By default the cleaner strips line numbers, ANSI codes, box-drawing, and trailing whitespace. Toggle off any transform that's eating something you wanted to keep."
          />
          <Step
            n="4"
            title="Click copy"
            body="The 'copy' button puts the clean output on your clipboard. Paste into your editor — done."
          />
        </ol>

        <h2 className="mt-16 text-2xl lg:text-3xl font-semibold tracking-tight text-ink-900">
          Common scenarios
        </h2>

        <div className="mt-6 space-y-6 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-ink-900">
              You copied a function from a Read tool result.
            </strong>{" "}
            Default settings strip the <code className="cd">1\t</code>,{" "}
            <code className="cd">2\t</code> prefixes and normalise the
            indentation. Done.
          </p>
          <p>
            <strong className="text-ink-900">
              You copied a multi-line shell command from a terminal session.
            </strong>{" "}
            Turn on <em>Smart unwrap</em> to rejoin lines that were soft-wrapped
            at your window width.
          </p>
          <p>
            <strong className="text-ink-900">
              You copied a diff and want the final code.
            </strong>{" "}
            Turn on <em>Diff markers</em> — it strips <code className="cd">+</code>{" "}
            and <code className="cd">-</code> prefixes and removes hunk headers.
          </p>
          <p>
            <strong className="text-ink-900">
              You want to keep some leading indent.
            </strong>{" "}
            Turn off <em>Indent</em>. The cleaner won&apos;t touch your
            structural whitespace.
          </p>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-ink-900 text-ink-100">
          <p className="text-sm text-ink-300">Try it now:</p>
          <Link
            href="/"
            className="mt-2 inline-flex items-center gap-2 text-lg font-semibold hover:text-accent transition"
          >
            Open the cleaner →
          </Link>
        </div>
      </article>
    </main>
  );
}

function Step({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <li className="flex gap-5">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ink-900 text-white flex items-center justify-center font-mono text-sm font-bold">
        {n}
      </div>
      <div className="pt-1.5">
        <h3 className="text-lg font-semibold text-ink-900 mb-1">{title}</h3>
        <p className="text-ink-700 leading-relaxed">{body}</p>
      </div>
    </li>
  );
}
