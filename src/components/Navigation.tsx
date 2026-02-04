"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToSection } from "@/hooks/useLenis";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href.replace("#", ""));
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <nav className="px-6 md:px-16 lg:px-24 h-20 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-base font-bold tracking-tight text-white"
          >
            LA—MEDIA
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="group relative text-sm text-[#888] hover:text-white transition-colors">
              Lokacije
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e53935] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#process" onClick={(e) => handleNavClick(e, "#process")} className="group relative text-sm text-[#888] hover:text-white transition-colors">
              Proces
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e53935] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="group relative text-sm text-[#888] hover:text-white transition-colors">
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e53935] group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="text-3xl font-medium text-white">
                Lokacije
              </a>
              <a href="#process" onClick={(e) => handleNavClick(e, "#process")} className="text-3xl font-medium text-white">
                Proces
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="text-3xl font-medium text-white">
                Kontakt
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
