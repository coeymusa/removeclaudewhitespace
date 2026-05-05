import type { Metadata } from "next";
import ContentPage, { howToJsonLd } from "@/components/ContentPage";

const URL = "https://removeclaudewhitespace.com/clean-terminal-output";

export const metadata: Metadata = {
  title: "Clean Terminal Output Online — Free Whitespace & ANSI Cleaner",
  description:
    "Free tool to clean terminal output for pasting into editors, docs, Reddit, Slack, or bug reports. Removes ANSI codes, box-drawing, line numbers, and indentation noise.",
  alternates: { canonical: "/clean-terminal-output" },
  openGraph: {
    title: "Clean Terminal Output Online",
    description: "Make terminal output paste-ready anywhere — editor, Reddit, Slack, bug reports.",
    url: URL,
  },
};

const ld = howToJsonLd({
  name: "How to clean terminal output for pasting",
  description:
    "Remove ANSI codes, box-drawing, line numbers, and excess whitespace from terminal output to make it paste-ready.",
  url: URL,
  steps: [
    { name: "Copy the terminal output", text: "Select and copy from your terminal — bash, zsh, pwsh, fish, Warp, iTerm, Windows Terminal." },
    { name: "Paste into the cleaner", text: "Default toggles handle 95% of terminal artefacts." },
    { name: "Toggle Markdown / Reddit if needed", text: "Turn it on to fix soft-wraps and per-line indents for Reddit, Discord, Slack." },
    { name: "Copy and paste", text: "Send the clean output to its destination." },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ContentPage
        eyebrow="Tool"
        title="Clean terminal output for pasting anywhere"
        intro="Terminal output is a mess of ANSI codes, box-drawing, line numbers, and soft-wraps. This tool turns it into clean text fit for an editor, a Reddit post, a Slack message, or a bug report."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Clean terminal output", href: "/clean-terminal-output" },
        ]}
      >
        <h2>What &quot;terminal output&quot; tends to include</h2>
        <ul>
          <li><strong>ANSI escape codes</strong> for colour, bold, cursor, and screen control.</li>
          <li><strong>Unicode box-drawing</strong> from frames, progress bars, and tool-call brackets.</li>
          <li><strong>Line-number prefixes</strong> from Read tools, <code>cat -n</code>, and pagers.</li>
          <li><strong>Soft-wrapped lines</strong> hard-broken at your terminal width.</li>
          <li><strong>Tool-call bullets</strong> like ●, ⏺, ⏵ from AI assistants.</li>
          <li><strong>Leading indent</strong> from UI padding that becomes structural whitespace.</li>
        </ul>

        <h2>Common terminals this works for</h2>
        <p>
          The transforms are generic — they target the artefacts, not the
          source. Output from <strong>Warp</strong>, <strong>iTerm2</strong>,{" "}
          <strong>Windows Terminal</strong>, <strong>Alacritty</strong>,{" "}
          <strong>Kitty</strong>, <strong>Hyper</strong>, the macOS{" "}
          <strong>Terminal.app</strong>, and any plain TTY all clean the same way.
        </p>

        <h2>Common AI assistants this works for</h2>
        <ul>
          <li><strong>Claude Code</strong> — the canonical case; tool-call bullets, line numbers, leading indent.</li>
          <li><strong>Cursor terminal</strong> — terminal artefacts when you copy from the integrated terminal.</li>
          <li><strong>Aider</strong> — diff blocks, line numbers, frame characters.</li>
          <li><strong>OpenAI Codex CLI</strong> — similar profile to Claude Code.</li>
          <li><strong>Gemini CLI</strong> — markdown-rendered terminal output with soft-wraps.</li>
        </ul>

        <h2>For Reddit, Slack, Discord and other markdown surfaces</h2>
        <p>
          The default <strong>Markdown / Reddit</strong> toggle does two
          paragraph-level transforms: it left-trims every line (so lines with
          2-3 spaces don&apos;t become inset paragraphs) and rejoins
          soft-wrapped paragraph lines (so sentences aren&apos;t broken
          mid-thought). Code fences, lists, and headings are preserved.
        </p>

        <h2>What stays untouched</h2>
        <p>
          The cleaner only modifies whitespace and known terminal artefacts.
          Identifiers, string contents, comments, and code structure are never
          rewritten. The original is preserved on the input side so you can
          toggle transforms and compare.
        </p>
      </ContentPage>
    </>
  );
}
