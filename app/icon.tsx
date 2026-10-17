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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2B2420",
          color: "#F2A76B",
          fontSize: 18,
          fontWeight: 600,
          borderRadius: 6,
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
