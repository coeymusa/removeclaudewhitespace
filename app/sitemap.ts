import type { MetadataRoute } from "next";

const SITE = "https://removeclaudewhitespace.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/why-claude-code-output-is-messy`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/how-to-clean-claude-code-output`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/strip-ansi-codes-online`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/remove-line-numbers-from-code`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/clean-terminal-output`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/claude-code-copy-paste-fix`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/built-by`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
