import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Be_Vietnam_Pro,
  Lexend,
  Oswald,
} from "next/font/google";
import "./globals.css";

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
  title: "Idaho Discovery Week | Skyward Explorer",
  description:
    "Join Grant and Moema for an unforgettable week of hands-on learning, creative exploration, and high-energy discovery in the heart of Idaho.",
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
      </body>
    </html>
  );
}
