import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sophie Zen - Sophrologue certifiée à Paris",
  description: "Sophrologue certifiée RNCP à Paris. Gestion du stress, troubles du sommeil, préparation mentale. Séances personnalisées pour retrouver équilibre et bien-être.",
  keywords: "sophrologie, sophrologue, Paris, stress, sommeil, bien-être, relaxation, développement personnel",
  openGraph: {
    title: "Sophie Zen - Sophrologue certifiée à Paris",
    description: "Retrouvez votre équilibre intérieur avec la sophrologie. Gestion du stress, amélioration du sommeil, développement personnel.",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
