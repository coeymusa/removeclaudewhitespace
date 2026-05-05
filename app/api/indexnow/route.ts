import { NextResponse } from "next/server";

const HOST = "removeclaudewhitespace.com";
const KEY = "b2646861b3b2e62e7988eddbe922404a";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/why-claude-code-output-is-messy`,
  `https://${HOST}/how-to-clean-claude-code-output`,
  `https://${HOST}/about`,
];

export async function GET() {
  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: URLS,
    }),
  });

  return NextResponse.json({
    submitted: URLS.length,
    status: res.status,
    statusText: res.statusText,
  });
}
