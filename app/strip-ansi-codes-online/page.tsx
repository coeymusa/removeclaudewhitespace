import type { Metadata } from "next";
import ContentPage, { howToJsonLd } from "@/components/ContentPage";

const URL = "https://removeclaudewhitespace.com/strip-ansi-codes-online";

export const metadata: Metadata = {
  title: "Strip ANSI Escape Codes Online — Free, Client-Side",
  description:
    "Free online tool to strip ANSI escape codes from terminal output. Removes color, cursor, and styling escape sequences in one click. No upload — runs in your browser.",
  alternates: { canonical: "/strip-ansi-codes-online" },
  openGraph: {
    title: "Strip ANSI Escape Codes Online",
    description: "Remove ANSI color and styling escape sequences from terminal output instantly.",
    url: URL,
  },
};

const ld = howToJsonLd({
  name: "How to strip ANSI escape codes from terminal output",
  description:
    "Remove ANSI color and styling escape sequences from terminal output by pasting into a free, client-side cleaner.",
  url: URL,
  steps: [
    { name: "Copy the terminal output", text: "Select and copy the text containing ANSI escape codes from your terminal." },
    { name: "Paste into the cleaner", text: "Paste into the input panel. The ANSI escape codes are removed instantly." },
    { name: "Copy the cleaned output", text: "Click copy to put the clean text on your clipboard." },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ContentPage
        eyebrow="Tool"
        title="Strip ANSI escape codes from terminal output"
        intro="ANSI escape codes drive colour and styling in your terminal — but they become unreadable garbage the moment you copy them into a doc or editor. Strip them in one paste."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Strip ANSI codes", href: "/strip-ansi-codes-online" },
        ]}
      >
        <h2>What ANSI escape codes look like</h2>
        <p>
          ANSI escape codes are sequences that start with the escape character{" "}
          <code>\x1B</code> (ESC), followed by <code>[</code>, then a series of
          numeric parameters and a final letter. They tell the terminal how to
          render the text that follows — colour, bold, cursor position, screen
          clear. The most common forms you&apos;ll see when output is captured to
          a file or a clipboard are <code>\x1B[31m</code> (red),{" "}
          <code>\x1B[1m</code> (bold), and <code>\x1B[0m</code> (reset).
        </p>

        <h2>Why they leak into your paste</h2>
        <p>
          Anything that captures your terminal stream — <code>script(1)</code>,
          a piped log, a pasted Claude Code output, a Docker build log copied
          from CI — preserves the escape codes as literal characters. Your
          editor or markdown surface has no idea they&apos;re control codes; it
          just shows them as text.
        </p>

        <h2>How to remove them</h2>
        <ol>
          <li>Copy the terminal output you want to clean.</li>
          <li>
            Paste into the cleaner below. The <strong>ANSI codes</strong> toggle
            is on by default; it strips every <code>\x1B[…m</code> sequence.
          </li>
          <li>Click <strong>copy</strong>. Paste your clean text wherever you need it.</li>
        </ol>

        <h2>Regex behind the scenes</h2>
        <p>
          The pattern is straightforward: <code>/\x1B\[[0-9;]*[A-Za-z]/g</code>.
          It matches the ESC byte, the bracket, any number of digits and
          semicolons, then a single letter terminator. This catches CSI, SGR,
          and most cursor-control sequences. If you have OSC sequences (e.g.{" "}
          <code>\x1B]…\x07</code>) in the mix, drop a note on{" "}
          <a href="https://github.com/coeymusa/removeclaudewhitespace" target="_blank" rel="noopener">GitHub</a>.
        </p>

        <h2>Privacy</h2>
        <p>
          Stripping happens in your browser. Your output never leaves your
          machine — useful when terminal logs contain tokens, hostnames, or
          internal data.
        </p>
      </ContentPage>
    </>
  );
}
