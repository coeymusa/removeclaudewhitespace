import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://removeclaudewhitespace.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Remove Claude Whitespace — Clean Claude Code Output Instantly",
    template: "%s | Remove Claude Whitespace",
  },
  description:
    "Free tool to remove whitespace, line numbers, ANSI codes, and box-drawing characters from Claude Code, terminal, and AI assistant output. Paste fragmented text, get clean copyable code in one click.",
  keywords: [
    "remove claude whitespace",
    "clean claude code output",
    "claude code formatter",
    "strip line numbers",
    "remove terminal output formatting",
    "clean copied code",
    "remove ansi codes",
    "claude code copy paste",
    "fix claude code indentation",
    "ai code cleaner",
    "claude output cleaner",
    "remove box drawing characters",
  ],
  authors: [{ name: "Remove Claude Whitespace" }],
  creator: "Remove Claude Whitespace",
  publisher: "Remove Claude Whitespace",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Remove Claude Whitespace — Clean Claude Code Output Instantly",
    description:
      "Paste messy Claude Code output. Get clean, copyable text. Removes line numbers, ANSI codes, box-drawing chars, indentation noise — all client-side, free, instant.",
    siteName: "Remove Claude Whitespace",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Remove Claude Whitespace — Clean Claude Code Output",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remove Claude Whitespace",
    description:
      "Clean Claude Code output in one click. Free, instant, client-side.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  category: "developer tools",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Remove Claude Whitespace",
      url: SITE_URL,
      description:
        "Free online tool that removes whitespace, line numbers, ANSI codes, and formatting noise from Claude Code and AI assistant output.",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Remove line numbers from copied code",
        "Strip ANSI escape codes",
        "Remove box-drawing characters",
        "Collapse blank lines",
        "Trim trailing whitespace",
        "Normalize indentation",
        "Client-side processing — your code never leaves your browser",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Remove Claude Whitespace do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It cleans up text copied from Claude Code, AI assistants, or terminal output by removing line numbers, ANSI escape codes, box-drawing characters, leading indentation, and excessive blank lines — leaving you with clean, paste-ready code.",
          },
        },
        {
          "@type": "Question",
          name: "Is my code sent to a server?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. All processing happens locally in your browser. Your code never leaves your device.",
          },
        },
        {
          "@type": "Question",
          name: "Is it free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — completely free, no signup, no ads in the working area, no limits.",
          },
        },
        {
          "@type": "Question",
          name: "Why is text from Claude Code so messy when I paste it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Terminal-rendered output often includes line-number prefixes, ANSI color codes, Unicode box-drawing characters, and uneven indentation. When you copy these into a regular editor, the formatting comes along for the ride. This tool strips that noise.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
