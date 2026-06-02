import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reading Buddy",
  description: "Audio-first reading comprehension for young readers",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#3a7d44" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Reading Buddy" />
      </head>
      <body className="min-h-screen bg-amber-50 antialiased">
        {children}
      </body>
    </html>
  );
}
