import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Psicóloga em Cascavel - Ana Paula Klein",
  description:
    "Conheça a Psicóloga Ana Paula Klein, especialista na abordagem centrada na pessoa, atendo em Cascavel e Online. Saiba mais e entre em contato.",
  canonical: "https://psianaklein.com.br/",
  openGraph: {
    locale: "pt_BR",
    type: "website",
    title: "Psicóloga em Cascavel - Ana Paula Klein",
    description:
      "Conheça a Psicóloga Ana Paula Klein, especialista na abordagem centrada na pessoa, atendo em Cascavel e Online. Saiba mais e entre em contato.",
    url: "https://psianaklein.com.br/",
    siteName: "Ana Paula Klein",
    images: [
      {
        url: "/images/banner-site-mobile.png",
        width: 425,
        height: 475,
        alt: "Imagem representativa de Ana Paula Klein",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://psianaklein.com.br/",
  },
  article: {
    modifiedTime: "2024-08-01T13:56:27+00:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
