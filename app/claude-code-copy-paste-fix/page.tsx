import type { Metadata } from "next";
import ContentPage, { articleJsonLd } from "@/components/ContentPage";

const URL = "https://removeclaudewhitespace.com/claude-code-copy-paste-fix";

export const metadata: Metadata = {
  title: "Claude Code Copy-Paste Fix — Clean Output for Editors & Reddit",
  description:
    "Fix Claude Code copy-paste issues. Remove the line numbers, ANSI codes, box-drawing, and soft-wrap line breaks that turn pasted output into a mess.",
  alternates: { canonical: "/claude-code-copy-paste-fix" },
  openGraph: {
    title: "Claude Code Copy-Paste Fix",
    description: "Stop fighting Claude Code's terminal output. One paste, one click, clean text.",
    url: URL,
  },
};

const ld = articleJsonLd({
  headline: "Claude Code Copy-Paste Fix",
  description:
    "Fix Claude Code copy-paste issues. Remove the line numbers, ANSI codes, box-drawing, and soft-wrap line breaks that turn pasted output into a mess.",
  url: URL,
  datePublished: "2026-05-05",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ContentPage
        eyebrow="Guide"
        title="The Claude Code copy-paste fix"
        intro="If you copy a function out of Claude Code and paste it into your editor only to find broken indentation, line numbers, and stray bullets — this is the fix."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Copy-paste fix", href: "/claude-code-copy-paste-fix" },
        ]}
      >
        <h2>The five things Claude Code adds to your paste</h2>
        <ol>
          <li><strong>Line numbers</strong> from the Read tool — <code>1\t</code>, <code>2\t</code> stuck to every line.</li>
          <li><strong>Tool-call bullets</strong> — ●, ⏺ at the start of certain lines.</li>
          <li><strong>Box-drawing frames</strong> — ─, │, ┌, ┐ around tool results.</li>
          <li><strong>Indent padding</strong> — 2 to 4 spaces on every line of code.</li>
          <li><strong>Soft-wrap line breaks</strong> — sentences split at your terminal width.</li>
        </ol>

        <h2>The 30-second fix</h2>
        <ol>
          <li>Copy from Claude Code as you normally would.</li>
          <li>
            Paste into the cleaner on{" "}
            <a href="https://removeclaudewhitespace.com/">removeclaudewhitespace.com</a>.
          </li>
          <li>Click <strong>copy</strong>.</li>
          <li>Paste into your editor or wherever else.</li>
        </ol>

        <h2>Why a regex isn&apos;t enough</h2>
        <p>
          You can write a regex to strip <code>{"^\\s*\\d+\\t"}</code>. You can
          write another for ANSI. You can write a third to collapse blank
          lines. The trouble is the transforms interact: removing line numbers
          changes the leading indent, which changes how indent normalisation
          works, which changes whether a line gets joined to its neighbour.
          Doing it as one composable pipeline — with each step toggleable — is
          much more reliable than a one-shot regex.
        </p>

        <h2>The case for client-side</h2>
        <p>
          Code from Claude Code often contains environment variables, API
          tokens, internal hostnames, or proprietary logic. Sending it to a
          third-party server to clean whitespace is overkill at best and a
          security policy violation at worst. The cleaner runs in your browser
          via plain JavaScript — open DevTools and watch the Network tab to
          confirm.
        </p>

        <h2>Common scenarios</h2>
        <h3>Pasting back into your editor</h3>
        <p>
          Defaults handle this case: line numbers stripped, indent normalised,
          tool bullets removed. Drop the result into VS Code or your editor of
          choice — it lands flush.
        </p>

        <h3>Pasting into a Reddit post</h3>
        <p>
          The <strong>Markdown / Reddit</strong> toggle is on by default. It
          left-trims every line and rejoins soft-wrapped paragraph lines, so
          your post doesn&apos;t come out as a mess of broken sentences and
          inset paragraph fragments.
        </p>

        <h3>Sharing in Slack or Discord</h3>
        <p>
          Same as Reddit — Markdown / Reddit mode handles the wrap and indent
          issues. For code blocks specifically, wrap the cleaned output in
          triple backticks before pasting.
        </p>

        <h3>Pasting into a bug report or PR description</h3>
        <p>
          Turn off <strong>Indent</strong> if you want to preserve the
          original code structure. Otherwise the defaults are good.
        </p>

        <h2>Related</h2>
        <ul>
          <li><a href="/why-claude-code-output-is-messy">Why Claude Code output pastes messy</a> — the technical breakdown.</li>
          <li><a href="/strip-ansi-codes-online">Strip ANSI escape codes online</a>.</li>
          <li><a href="/remove-line-numbers-from-code">Remove line numbers from code</a>.</li>
          <li><a href="/clean-terminal-output">Clean terminal output</a>.</li>
        </ul>
      </ContentPage>
    </>
  );
}
