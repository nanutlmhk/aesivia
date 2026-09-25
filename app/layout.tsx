import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AESIVIA — Every journey changes a life",
  description:
    "Create your character and enter a living healthcare journey RPG.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
