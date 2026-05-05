import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0b",
          color: "#ff6a3d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 800,
          fontFamily: "monospace",
          borderRadius: 6,
        }}
      >
        ⌗
      </div>
    ),
    size,
  );
}
