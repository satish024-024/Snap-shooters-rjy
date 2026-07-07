import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Manrope, Space_Grotesk } from "next/font/google";
import ClientProviders from "@/components/layout/client-providers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-button",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Snap Shooter Studios | India's Premium Wedding Experience Company",
  description: "Crafting timeless wedding stories across India through photography, cinematography, planning, and celebration. Photography is the hero of the entire experience.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-champagne selection:text-black">
        {/* Ambient Overlays */}
        <div className="film-grain" />
        <div className="light-leak light-leak-1" />
        <div className="light-leak light-leak-2" />
        
        {/* Lenis Smooth Scroll & Preloader */}
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
