import { ImageResponse } from "next/og";

export const alt = "Remove Claude Whitespace — Clean Claude Code Output Instantly";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0b",
          color: "#fafafa",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          fontFamily: "Inter, system-ui, sans-serif",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(255,106,61,0.15), transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,106,61,0.08), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#ff6a3d",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              color: "white",
              fontWeight: 800,
            }}
          >
            ⌗
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 22,
              color: "#a8a8b3",
            }}
          >
            removclaudewhitespace.com
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
              display: "flex",
            }}
          >
            Clean Claude Code output in one paste.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a8a8b3",
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Strip line numbers, ANSI codes, box-drawing — instantly.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: 80,
            right: 80,
            padding: "10px 20px",
            background: "rgba(255,106,61,0.12)",
            border: "1px solid rgba(255,106,61,0.4)",
            borderRadius: 999,
            color: "#ff6a3d",
            fontFamily: "monospace",
            fontSize: 18,
            display: "flex",
          }}
        >
          FREE · CLIENT-SIDE
        </div>
      </div>
    ),
    size,
  );
}
