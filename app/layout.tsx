import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CEO Club",
  description: "Transformando dentistas em CEOs da própria clínica.",
  icons: {
    icon: "/icon.jpeg",
    shortcut: "/icon.jpeg",
    apple: "/icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}