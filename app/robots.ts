import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://removeclaudewhitespace.com/sitemap.xml",
    host: "https://removeclaudewhitespace.com",
  };
}
