import { ImageResponse } from "next/og";
import { SIGNATURE_PATH } from "@/components/common/Signature/signaturePath";

export const alt = "Taito Yusa - Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 48,
          background: "#f5f5f5",
        }}
      >
        <svg
          width="900"
          height="240"
          viewBox="230 800 1580 420"
          fill="none"
        >
          <path
            d={SIGNATURE_PATH}
            stroke="#3267a9"
            strokeWidth={15}
            strokeLinecap="round"
            strokeMiterlimit={10}
          />
        </svg>

        <div
          style={{
            display: "flex",
            color: "#112234",
            fontSize: 40,
            letterSpacing: 8,
          }}
        >
          TAITO YUSA — PORTFOLIO
        </div>
      </div>
    ),
    size,
  );
}
