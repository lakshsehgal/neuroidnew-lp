import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neuroid Media — Creative-Led D2C Growth Agency",
  description:
    "We don't just run your ads — we move into your business. Performance marketing, UGC & performance creatives, retention marketing and CRO for ambitious D2C brands.",
  icons: {
    icon: [
      { url: "/brand/logo-mark.png", type: "image/png" },
    ],
    shortcut: "/brand/logo-mark.png",
    apple: "/brand/logo-mark.png",
  },
  openGraph: {
    title: "Neuroid Media — Creative-Led D2C Growth Agency",
    description:
      "We don't just run your ads — we move into your business. A holistic growth partner for D2C brands.",
    type: "website",
    url: "https://neuroidmedia.com",
    images: [{ url: "/brand/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuroid Media — Creative-Led D2C Growth Agency",
    description:
      "We don't just run your ads — we move into your business.",
    images: ["/brand/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-bg text-white">
        {children}
      </body>
    </html>
  );
}
