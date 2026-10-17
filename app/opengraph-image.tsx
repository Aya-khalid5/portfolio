import { ImageResponse } from "next/og";

export const alt = "Aya Khaled | Data Analyst: Excel, SQL, Power BI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#FAF6F0",
          color: "#2B2420",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 8,
            background: "#D9723F",
            marginBottom: 40,
          }}
        />
        <div style={{ display: "flex", fontSize: 84, fontWeight: 600 }}>
          Aya Khaled
        </div>
        <div style={{ display: "flex", fontSize: 44, marginTop: 16, color: "#B85A2E" }}>
          Data Analyst
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 28, color: "#5C534B" }}>
          Excel • SQL • Power BI • Turning data into insights
        </div>
      </div>
    ),
    { ...size }
  );
}
