import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeoChronicle | Countries & Capital City History",
  description: "A global directory exploring the history and growth of the world's most prominent capital cities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
