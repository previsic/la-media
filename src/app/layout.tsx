import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import IntroScreen from "@/components/IntroScreen";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MediaWin d.o.o. Mostar | Video zidovi i bilboard oglašavanje",
  description: "Marketinška i oglašivačka tvrtka. Video zidovi i osvijetljene bilboard površine u Mostaru i regiji Hercegovina. Budite vidljivi 24 sata.",
  keywords: ["MediaWin", "video zidovi", "bilbordi", "oglašavanje", "Mostar", "Hercegovina", "outdoor", "LED"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f84dd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className="lenis" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased overflow-x-hidden`}>
        <IntroScreen />
        <SmoothScrollProvider>
          <Navigation />
          <main className="pt-20">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
