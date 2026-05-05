"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CleanOptions,
  cleanText,
  defaultOptions,
  getStats,
} from "@/lib/clean";

const SAMPLE = `   1\t●  function greetUser(name: string) {
   2\t│    console.log(\`Hello, \${name}!\`);
   3\t│  }
   4\t│
   5\t│  greetUser("world");

   ┌─ Done in 0.3s
   └─ 1 file changed`;

const TOGGLES: { key: keyof CleanOptions; label: string; hint: string }[] = [
  { key: "stripLineNumbers", label: "Line numbers", hint: "Strip 1│, 2│, 1\\t prefixes" },
  { key: "removeAnsi", label: "ANSI codes", hint: "Strip color escape sequences" },
  { key: "stripBoxDrawing", label: "Box drawing", hint: "Remove ─ │ └ ┐ characters" },
  { key: "stripToolBrackets", label: "Bullet markers", hint: "Strip ●, ○, ⏺ prefixes" },
  { key: "trimTrailing", label: "Trailing space", hint: "Remove end-of-line whitespace" },
  { key: "collapseBlankLines", label: "Blank lines", hint: "Collapse 2+ blank lines into 1" },
  { key: "normalizeIndent", label: "Indent", hint: "Remove common leading indent" },
  { key: "removeDiffMarkers", label: "Diff markers", hint: "Strip + - @@ from patches" },
  { key: "smartUnwrap", label: "Smart unwrap", hint: "Join soft-wrapped paragraphs" },
  { key: "unifyLineEndings", label: "LF endings", hint: "Convert CRLF → LF" },
];

export default function Cleaner() {
  const [input, setInput] = useState("");
  const [opts, setOpts] = useState<CleanOptions>(defaultOptions);
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => cleanText(input, opts), [input, opts]);
  const stats = useMemo(() => getStats(input, output), [input, output]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(t);
  }, [copied]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
    } catch {}
  };

  const onPasteSample = () => setInput(SAMPLE);
  const onClear = () => setInput("");

  return (
    <section className="relative" aria-label="Whitespace cleaner">
      <div className="grid lg:grid-cols-2 gap-3 lg:gap-4">
        {/* Input */}
        <div className="group relative">
          <Header
            label="Paste"
            badge={input ? `${stats.inputLines} lines · ${stats.inputChars} chars` : "input"}
            actions={
              <>
                <SmallButton onClick={onPasteSample}>sample</SmallButton>
                <SmallButton onClick={onClear} disabled={!input}>
                  clear
                </SmallButton>
              </>
            }
          />
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste fragmented Claude Code output here…"
            spellCheck={false}
            className="w-full h-[420px] lg:h-[520px] resize-none rounded-2xl border border-ink-200 bg-white px-5 py-4 font-mono text-[13px] leading-[1.65] text-ink-900 placeholder:text-ink-300 outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/10 transition scrollbar-thin"
          />
        </div>

        {/* Output */}
        <div className="group relative">
          <Header
            label="Clean"
            badge={
              output
                ? `${stats.outputLines} lines · ${stats.outputChars} chars · −${stats.savedPct}%`
                : "output"
            }
            actions={
              <SmallButton onClick={onCopy} disabled={!output} primary>
                {copied ? "copied ✓" : "copy"}
              </SmallButton>
            }
          />
          <div className="relative">
            <pre className="w-full h-[420px] lg:h-[520px] overflow-auto rounded-2xl border border-ink-900 bg-ink-900 px-5 py-4 font-mono text-[13px] leading-[1.65] text-ink-100 scrollbar-thin">
              {output || (
                <span className="text-ink-500">
                  Your cleaned output will appear here.
                </span>
              )}
            </pre>
            {output && (
              <div className="absolute bottom-3 right-3 text-[10px] uppercase tracking-wider text-ink-500 font-mono pointer-events-none">
                ready to paste
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Toggles */}
      <div className="mt-5 flex flex-wrap gap-2">
        {TOGGLES.map((t) => {
          const active = opts[t.key];
          return (
            <button
              key={t.key}
              onClick={() => setOpts({ ...opts, [t.key]: !active })}
              title={t.hint}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition ${
                active
                  ? "bg-ink-900 text-white border-ink-900 hover:bg-ink-700"
                  : "bg-white text-ink-500 border-ink-200 hover:border-ink-400 hover:text-ink-700"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  active ? "bg-accent" : "bg-ink-300"
                }`}
              />
              {t.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function Header({
  label,
  badge,
  actions,
}: {
  label: string;
  badge: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between mb-2 px-1">
      <div className="flex items-baseline gap-2">
        <span className="text-xs font-mono uppercase tracking-[0.18em] text-ink-900">
          {label}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-ink-400">
          {badge}
        </span>
      </div>
      <div className="flex items-center gap-1">{actions}</div>
    </div>
  );
}

function SmallButton({
  children,
  onClick,
  disabled,
  primary,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  primary?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider transition disabled:opacity-30 disabled:cursor-not-allowed ${
        primary
          ? "bg-accent text-white hover:bg-accent-hover"
          : "text-ink-500 hover:bg-ink-100 hover:text-ink-900"
      }`}
    >
      {children}
    </button>
  );
}
