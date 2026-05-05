import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Remove Claude Whitespace — a free, client-side tool that cleans Claude Code output for paste-ready use.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-ink-200/80">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 h-14 flex items-center">
          <Link href="/" className="font-mono text-[13px] text-ink-900">
            ← remove<span className="text-accent">claude</span>whitespace
          </Link>
        </div>
      </header>
      <article className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-ink-900">
          About
        </h1>
        <div className="mt-6 space-y-5 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-ink-900">Remove Claude Whitespace</strong>{" "}
            exists because pasting from a terminal-rendered AI assistant into a
            real editor is one of those small daily annoyances that adds up.
          </p>
          <p>
            It&apos;s a static, client-side tool. No accounts, no analytics
            beacons on your code, no servers in the loop. Open the page, paste,
            copy, close.
          </p>
          <p>
            The source is on{" "}
            <a
              href="https://github.com/coeymusa/removeclaudewhitespace"
              target="_blank"
              rel="noopener"
              className="text-accent underline underline-offset-4"
            >
              GitHub
            </a>
            . Bug reports and feature requests welcome.
          </p>
        </div>
      </article>
    </main>
  );
}
