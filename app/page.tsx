import Cleaner from "@/components/Cleaner";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-ink-200/80 bg-ink-50/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-mono text-[13px] tracking-tight text-ink-900">
              remove<span className="text-accent">claude</span>whitespace.com
            </span>
          </Link>
          <nav className="flex items-center gap-5 text-xs font-medium text-ink-500">
            <a href="#how" className="hover:text-ink-900 transition">How it works</a>
            <a href="#faq" className="hover:text-ink-900 transition">FAQ</a>
            <a
              href="https://github.com/coeymusa/removeclaudewhitespace"
              target="_blank"
              rel="noopener"
              className="hover:text-ink-900 transition"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative grid-bg border-b border-ink-200/80">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 pt-16 lg:pt-24 pb-10 lg:pb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ink-200 bg-white text-[11px] font-mono uppercase tracking-wider text-ink-500 mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            Free · Client-side · No signup
          </div>
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-900 max-w-3xl leading-[1.05] animate-slide-up">
            Clean up Claude Code output{" "}
            <span className="relative inline-block">
              <span className="relative z-10">in one paste</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-accent/30 -z-0" />
            </span>
            .
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-500 leading-relaxed text-balance animate-slide-up">
            Paste fragmented terminal output — line numbers, ANSI codes, box-drawing,
            indentation noise — get clean, paste-ready code instantly.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-10 lg:py-14">
        <Cleaner />
      </section>

      {/* How it works */}
      <section
        id="how"
        className="border-t border-ink-200/80 bg-white"
      >
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
              How it works
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-ink-900">
              Why does Claude Code output paste so messy?
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              Terminal-rendered output is meant for the eye, not the clipboard.
              When you copy it into a regular editor, you drag along all the
              visual scaffolding that made it readable on screen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-ink-200 border border-ink-200 rounded-2xl overflow-hidden">
            <Step
              n="01"
              title="Line number prefixes"
              body="The cat -n format used by Read produces 1\t, 2\t, ... at the start of every line."
            />
            <Step
              n="02"
              title="ANSI &amp; box-drawing"
              body="Tool call frames, syntax-highlight escapes, and Unicode borders end up in your paste."
            />
            <Step
              n="03"
              title="Excess indentation"
              body="UI padding leaks into the leading whitespace of every line, breaking your code structure."
            />
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <BeforeAfter
              label="Before"
              variant="before"
              code={`   1\t●  function greetUser(name) {
   2\t│    console.log(\`Hello, \${name}!\`);
   3\t│  }
   ┌─ Done in 0.3s`}
            />
            <BeforeAfter
              label="After"
              variant="after"
              code={`function greetUser(name) {
  console.log(\`Hello, \${name}!\`);
}`}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-ink-200/80 bg-ink-50">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
              Built for the paste
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-ink-900">
              Every kind of noise. Every kind of clean.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Feature title="Line numbers" body="Strips Read tool prefixes, gutter numbers, and tab-indexed line markers." />
            <Feature title="ANSI escape codes" body="Removes color codes from any terminal session — bash, zsh, pwsh, fish." />
            <Feature title="Box drawing" body="Cleans Unicode borders, arrows, and frame characters from tool output." />
            <Feature title="Tool bullets" body="Strips ●, ○, ⏺ markers Claude Code uses to denote tool calls." />
            <Feature title="Indentation" body="Detects and removes the common leading indent that UI padding adds." />
            <Feature title="Diff markers" body="Optional: strip + and - prefixes to recover plain code from a patch." />
            <Feature title="Smart unwrap" body="Optional: rejoin paragraphs that got soft-wrapped by your terminal." />
            <Feature title="Blank lines" body="Collapses runs of empty lines into a single break." />
            <Feature title="Local processing" body="Runs entirely in your browser. Your code never touches our servers." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-ink-200/80 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-ink-900">
            Common questions
          </h2>
          <div className="mt-10 divide-y divide-ink-200">
            <Faq q="Is my code sent to a server?">
              No. Cleaning runs entirely in your browser via JavaScript. Nothing
              leaves your device — you can verify with DevTools.
            </Faq>
            <Faq q="Does it work with output from other AI assistants?">
              Yes. The same patterns apply to terminal output from any tool —
              ChatGPT code blocks pasted from Terminal, Cursor, Aider, OpenAI
              Codex CLI, Gemini CLI, and traditional CLI tools.
            </Faq>
            <Faq q="Will it break my code?">
              The cleaner only touches whitespace and known terminal artifacts.
              Toggle off any transform you don&apos;t want. The original input is
              preserved on the left so you can compare.
            </Faq>
            <Faq q="Can I use it on the command line?">
              You can pipe text through your clipboard using OS tools. A CLI
              version is on the roadmap — open an issue on GitHub to vote.
            </Faq>
            <Faq q="Is there a character limit?">
              No hard limit. The tool processes hundreds of thousands of
              characters without breaking a sweat because it runs locally.
            </Faq>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink-200/80 bg-ink-900 text-ink-300">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo dark />
            <span className="font-mono text-[13px] text-ink-100">
              remove<span className="text-accent">claude</span>whitespace
            </span>
          </div>
          <div className="text-xs text-ink-400">
            Built for developers who copy-paste from Claude Code 100 times a day.
          </div>
        </div>
      </footer>
    </main>
  );
}

function Logo({ dark }: { dark?: boolean }) {
  return (
    <div
      className={`w-7 h-7 rounded-md flex items-center justify-center font-mono text-[13px] font-bold ${
        dark ? "bg-accent text-white" : "bg-ink-900 text-white"
      }`}
    >
      ⌗
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="bg-white p-7">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
        {n}
      </div>
      <h3
        className="text-lg font-semibold text-ink-900 mb-2"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="text-sm text-ink-500 leading-relaxed">{body}</p>
    </div>
  );
}

function BeforeAfter({
  label,
  code,
  variant,
}: {
  label: string;
  code: string;
  variant: "before" | "after";
}) {
  const styles =
    variant === "before"
      ? "bg-ink-50 border-ink-200 text-ink-700"
      : "bg-ink-900 border-ink-900 text-ink-100";
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
            variant === "before" ? "text-ink-400" : "text-accent"
          }`}
        >
          {label}
        </span>
      </div>
      <pre
        className={`p-5 rounded-xl border font-mono text-[12px] leading-[1.7] overflow-x-auto whitespace-pre ${styles}`}
      >
        {code}
      </pre>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-6 rounded-xl border border-ink-200 bg-white hover:border-ink-900 transition group">
      <div className="w-8 h-8 rounded-lg bg-ink-900 group-hover:bg-accent transition flex items-center justify-center mb-4">
        <span className="text-white font-mono text-sm">⌗</span>
      </div>
      <h3 className="text-base font-semibold text-ink-900 mb-1.5">{title}</h3>
      <p className="text-sm text-ink-500 leading-relaxed">{body}</p>
    </div>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group py-5">
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <span className="text-base font-medium text-ink-900">{q}</span>
        <span className="ml-4 text-ink-400 group-open:rotate-45 transition-transform text-xl leading-none">
          +
        </span>
      </summary>
      <p className="mt-3 text-ink-500 leading-relaxed">{children}</p>
    </details>
  );
}
