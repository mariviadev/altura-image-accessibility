"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Logo({ size = 120 }: { size?: number }) {
  // Try to render an exact image wordmark if present at /brand/altura-wordmark.png.
  // Fallback to an inline SVG (Space Grotesk 700) if the image is missing or fails to load.
  const [imgErr, setImgErr] = useState(false);
  const height = Math.round((size / 240) * 66) || 32; // keep ~240x66 aspect

  return (
    <Link href="/" aria-label="Altura home" className="block leading-none">
      {!imgErr ? (
        <Image
          src="/brand/altura-wordmark.png"
          alt="ALTURA"
          width={size}
          height={height}
          priority
          onError={() => setImgErr(true)}
        />
      ) : (
        <svg
          width={size}
          height={height}
          viewBox="0 0 240 66"
          role="img"
          aria-label="ALTURA"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="240" height="66" fill="none" />
          <text
            x="0"
            y="48"
            fill="#ffffff"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
            fontSize="46"
          >
            ALTURA
          </text>
        </svg>
      )}
    </Link>
  );
}
