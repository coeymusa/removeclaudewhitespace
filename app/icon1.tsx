import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
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
          fontSize: 140,
          fontWeight: 900,
          letterSpacing: -8,
          fontFamily: "system-ui, sans-serif",
          borderRadius: 32,
        }}
      >
        rc
      </div>
    ),
    size,
  );
}
