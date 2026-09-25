import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AESIVIA — Every journey changes a life",
  description:
    "Create your character and enter a living healthcare journey RPG.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/aesivia-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
    apple: "/brand/aesivia-icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
