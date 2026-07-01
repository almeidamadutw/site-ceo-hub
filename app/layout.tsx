import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://site-ceo-hub.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "CEO Club Mentoria",

  description:
    "Mentoria estratégica para dentistas e profissionais da saúde que desejam liderar suas clínicas com método, clareza e visão de crescimento.",

  keywords: [
    "CEO Club Mentoria",
    "mentoria para dentistas",
    "mentoria para profissionais da saúde",
    "gestão odontológica",
    "mentoria odontológica",
    "vendas odontológicas",
    "gestão de clínicas",
    "gestão de clínicas odontológicas",
    "dentista empreendedor",
    "clínica com visão de CEO",
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
    description:
      "Mentoria estratégica para dentistas e profissionais da saúde que desejam liderar suas clínicas com visão de CEO.",
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
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}