import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import IntroScreen from "@/components/IntroScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LA-MEDIA | LED Oglašavanje",
  description: "Agencija za LED display oglašavanje. Premium LED paneli na najprometnijim lokacijama. Mostar, BiH.",
  keywords: ["LED oglašavanje", "LED display", "outdoor reklame", "digitalni billboardi", "Mostar", "BiH", "Bosna i Hercegovina"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className="lenis" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        <IntroScreen />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
