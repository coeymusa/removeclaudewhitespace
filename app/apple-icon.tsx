import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 130,
          fontWeight: 900,
          letterSpacing: -8,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        rc
      </div>
    ),
    size,
  );
}
