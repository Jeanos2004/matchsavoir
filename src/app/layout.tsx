import type { Metadata } from "next";
import "./globals.css";
import NavigationMenu from "@/components/Layout/NavigationMenu";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "MatchSavoir | Mise en relation formateurs et apprenants",
  description:
    "Plateforme de mise en relation entre formateurs et apprenants pour un apprentissage personnalisé et efficace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-background-dark text-white">
        <NavigationMenu />
        <main className="flex-grow pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
