"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Početna", href: "/" },
  { label: "Video zidovi", href: "/video-zidovi" },
  { label: "Bilbordi", href: "/bilbordi" },
  { label: "Partneri", href: "/partneri" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-white shadow-[0_1px_10px_rgba(0,0,0,0.05)]"
        }`}
      >
        <nav className="px-6 md:px-16 lg:px-24 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center h-20" aria-label="MEDIAWIN - Početna">
            <img src="/logo-mediawin-color.svg" alt="MEDIAWIN" className="h-20 w-auto object-contain" />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 text-[#111] hover:text-[#1f84dd] transition-colors"
            aria-label="Meni"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[280px] sm:max-w-[320px] bg-white border-l border-[#e5e5e5] shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between h-20 px-6 border-b border-[#e5e5e5]">
                <span className="text-[#555] text-xs uppercase tracking-wider">Meni</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#111] hover:text-[#1f84dd] transition-colors p-1"
                  aria-label="Zatvori meni"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 px-2 text-lg font-medium rounded-lg transition-colors ${
                      pathname === link.href
                        ? "text-[#1f84dd] bg-[#1f84dd]/10"
                        : "text-[#111] hover:text-[#1f84dd] hover:bg-[#1f84dd]/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
