import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Be_Vietnam_Pro,
  Lexend,
  Oswald,
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const headlineFont = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
});

const bodyFont = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const labelFont = Lexend({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const blockyFont = Oswald({
  variable: "--font-blocky",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://idahodiscoveryweek.com"),
  title: {
    default: "Idaho Discovery Week | Summer Learning Center",
    template: "%s | Idaho Discovery Week",
  },
  description:
    "Summer 2026 camps in Meridian, Idaho for kids — Electronics & Circuitry, Drawing From Life, and Japanese Language & Culture. Hands-on learning at The Lark House.",
  keywords: [
    "Idaho Discovery Week",
    "summer camp",
    "Meridian Idaho",
    "kids camp",
    "electronics camp",
    "drawing camp",
    "Japanese language camp",
    "STEM camp",
    "The Lark House",
  ],
  openGraph: {
    title: "Idaho Discovery Week | Summer Learning Center",
    description:
      "Summer 2026 camps in Meridian, Idaho — Electronics & Circuitry, Drawing From Life, and Japanese Language & Culture. Hands-on learning at The Lark House.",
    siteName: "Idaho Discovery Week",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Idaho Discovery Week - Summer Learning Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idaho Discovery Week | Summer Learning Center",
    description:
      "Summer 2026 camps in Meridian, Idaho — Electronics, Drawing, and Japanese Language & Culture.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headlineFont.variable} ${bodyFont.variable} ${labelFont.variable} ${blockyFont.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background font-body text-on-background selection:bg-secondary-container selection:text-on-secondary-container">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
