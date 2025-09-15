import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Léna Dubois - Sophrologue certifiée autour d'Avignon",
  description: "Sophrologue certifiée autour d'Avignon. Gestion du stress, troubles du sommeil, accompagnement des enfants et adolescents. Séances personnalisées pour retrouver équilibre et bien-être.",
  keywords: "sophrologie, sophrologue, Avignon, stress, sommeil, bien-être, relaxation, enfants, adolescents",
  openGraph: {
    title: "Léna Dubois - Sophrologue certifiée autour d'Avignon",
    description: "Retrouvez votre équilibre intérieur avec la sophrologie. Gestion du stress, amélioration du sommeil, accompagnement des enfants et adolescents.",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: '/public/favicon.png',
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
