export type CleanOptions = {
  stripLineNumbers: boolean;
  collapseBlankLines: boolean;
  trimTrailing: boolean;
  removeDiffMarkers: boolean;
  stripBoxDrawing: boolean;
  normalizeIndent: boolean;
  removeAnsi: boolean;
  unifyLineEndings: boolean;
  stripToolBrackets: boolean;
  smartUnwrap: boolean;
};

export const defaultOptions: CleanOptions = {
  stripLineNumbers: true,
  collapseBlankLines: true,
  trimTrailing: true,
  removeDiffMarkers: false,
  stripBoxDrawing: true,
  normalizeIndent: true,
  removeAnsi: true,
  unifyLineEndings: true,
  stripToolBrackets: true,
  smartUnwrap: false,
};

const ANSI_RE = /\x1B\[[0-9;]*[A-Za-z]/g;
const BOX_DRAWING_RE = /[\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2190-\u21FF]/g;
const LINE_NUMBER_RE = /^[\s]*\d{1,5}[\s]*[│|>:\u2502]\s?/;
const LINE_NUMBER_TAB_RE = /^[\s]*\d{1,5}\t/;
const TOOL_BRACKET_RE = /^[\s]*[●○◐◑◒◓◔◕⏺⏵▶▷►]\s?/;

export function cleanText(input: string, opts: CleanOptions): string {
  let text = input;

  if (opts.unifyLineEndings) {
    text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  }

  if (opts.removeAnsi) {
    text = text.replace(ANSI_RE, "");
  }

  if (opts.stripBoxDrawing) {
    text = text.replace(BOX_DRAWING_RE, "");
  }

  // Replace non-breaking spaces and other unusual whitespace
  text = text.replace(/\u00A0/g, " ").replace(/\u200B/g, "");

  let lines = text.split("\n");

  if (opts.stripLineNumbers) {
    lines = lines.map((line) => {
      let stripped = line.replace(LINE_NUMBER_TAB_RE, "");
      stripped = stripped.replace(LINE_NUMBER_RE, "");
      return stripped;
    });
  }

  if (opts.stripToolBrackets) {
    lines = lines.map((line) => line.replace(TOOL_BRACKET_RE, ""));
  }

  if (opts.removeDiffMarkers) {
    lines = lines
      .filter((line) => !/^@@.*@@/.test(line))
      .map((line) => line.replace(/^[+\-](?!\+|-)/, ""));
  }

  if (opts.trimTrailing) {
    lines = lines.map((line) => line.replace(/[ \t]+$/g, ""));
  }

  if (opts.normalizeIndent) {
    const minIndent = computeMinIndent(lines);
    if (minIndent > 0) {
      lines = lines.map((line) =>
        line.length >= minIndent && line.slice(0, minIndent).trim() === ""
          ? line.slice(minIndent)
          : line,
      );
    }
  }

  if (opts.smartUnwrap) {
    lines = smartUnwrapLines(lines);
  }

  if (opts.collapseBlankLines) {
    const collapsed: string[] = [];
    let blankRun = 0;
    for (const line of lines) {
      if (line.trim() === "") {
        blankRun++;
        if (blankRun <= 1) collapsed.push("");
      } else {
        blankRun = 0;
        collapsed.push(line);
      }
    }
    lines = collapsed;
  }

  // Trim leading & trailing blank lines
  while (lines.length && lines[0].trim() === "") lines.shift();
  while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();

  return lines.join("\n");
}

function computeMinIndent(lines: string[]): number {
  let min = Infinity;
  for (const line of lines) {
    if (line.trim() === "") continue;
    const m = line.match(/^[ \t]*/);
    const indent = m ? m[0].replace(/\t/g, "    ").length : 0;
    if (indent < min) min = indent;
    if (min === 0) return 0;
  }
  return min === Infinity ? 0 : min;
}

function smartUnwrapLines(lines: string[]): string[] {
  const result: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const cur = lines[i];
    const next = lines[i + 1];
    if (
      next !== undefined &&
      cur.trim() !== "" &&
      next.trim() !== "" &&
      !/[.!?:;]\s*$/.test(cur) &&
      !/^[\s]*[-*•]/.test(next) &&
      !/^[\s]*\d+\./.test(next) &&
      !/^[\s]*#/.test(next) &&
      !/^[\s]*```/.test(next) &&
      !/^[\s]{2,}/.test(next)
    ) {
      result.push(cur + " " + next.trim());
      i++;
    } else {
      result.push(cur);
    }
  }
  return result;
}

export function getStats(input: string, output: string) {
  return {
    inputChars: input.length,
    outputChars: output.length,
    inputLines: input ? input.split("\n").length : 0,
    outputLines: output ? output.split("\n").length : 0,
    saved: Math.max(0, input.length - output.length),
    savedPct:
      input.length === 0
        ? 0
        : Math.round(((input.length - output.length) / input.length) * 100),
  };
}
