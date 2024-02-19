import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rybená - Acessibilidade Web",
  description: "A Rybená é uma empresa que oferece solu,ções de acessibilidade web para empresas e desenvolvedores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" src="https://cdn.rybena.com.br/dom/master/latest/rybena.js"></script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
