import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://removclaudewhitespace.com/sitemap.xml",
    host: "https://removclaudewhitespace.com",
  };
}
