import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FG Digital Systems | Diseño Web y SEO Local",
  description: "Growth partner for SMBs in Spain and Italy. Especialistas en transformar la presencia digital de negocios locales.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased text-slate-800 bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
