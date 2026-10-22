import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biro SDMO - BGN RI",
  description: "Biro SDMO - BGN RI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
