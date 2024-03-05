import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/shared/Header/Header";
import { Footer } from "./components/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feature world",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}
