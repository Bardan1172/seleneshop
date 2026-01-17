import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Selene Shop",
  description: "Premium Minecraft Services & Digital Art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
