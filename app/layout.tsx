import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://site-ceo-hub.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "CEO Club Mentoria",

  description:
    "Mentoria para dentistas que desejam se desenvolver.",

  keywords: [
    "CEO Club Mentoria",
    "mentoria para dentistas",
    "gestão odontológica",
    "mentoria odontológica",
    "vendas odontológicas",
    "gestão de clínicas odontológicas",
    "dentista empreendedor",
  ],

  authors: [{ name: "CEO Club Mentoria" }],
  creator: "CEO Club Mentoria",
  publisher: "CEO Club Mentoria",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "CEO Club Mentoria",
    description: "Transformando dentistas em CEO's da própria clínica.",
    url: siteUrl,
    siteName: "CEO Club Mentoria",
    locale: "pt_BR",
    type: "website",
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