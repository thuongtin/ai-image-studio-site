import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Image Studio · SmartEcom Apps",
  description:
    "AI Image Studio lets e-commerce teams transform any product image and run deep market analysis without leaving the browser.",
  metadataBase: new URL("https://smartecom.app"),
  openGraph: {
    type: "website",
    url: "https://smartecom.app",
    title: "AI Image Studio · Transform product images with AI",
    description:
      "Chrome extension that crops on-page images, connects to OpenAI, Google, Ideogram, fal.ai and generates product intelligence.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "AI Image Studio icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Image Studio · SmartEcom Apps",
    description:
      "Transform any product image with AI and run instant market analysis right inside Chrome.",
    images: ["/icon.png"],
  },
  icons: [
    {
      rel: "icon",
      url: "/icon.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-grid-gradient min-h-screen">{children}</body>
    </html>
  );
}
