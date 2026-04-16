import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doorlight Publications",
  description: "Doorlight Publications website featuring books by Marilyn R. Gardner, Edward R. Brown, and Pauline A. Brown.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
