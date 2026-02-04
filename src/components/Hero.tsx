"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/hooks/useLenis";

export default function Hero() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("la-media-intro");
    setShouldAnimate(!hasSeenIntro);
    setIsReady(true);
  }, []);

  // Delay for curtain animation
  const startDelay = shouldAnimate ? 2 : 0;

  // Don't render until we know if we should animate
  if (!isReady) {
    return <section className="min-h-screen bg-black" />;
  }

  return (
    <section className="relative min-h-screen flex flex-col bg-black pt-20 pb-8 px-6 md:px-16 lg:px-24">
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Headline */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-[15vw] md:text-[12vw] lg:text-[9vw] font-bold leading-[0.95] tracking-tighter">
            {shouldAnimate ? (
              <>
                <span className="block overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: startDelay }}
                    className="block text-white"
                  >
                    Vaš brand.
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: startDelay + 0.1 }}
                    className="block text-white"
                  >
                    Veliki ekran.
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: startDelay + 0.2 }}
                    className="block text-[#ff0000]"
                  >
                    Svi gledaju.
                  </motion.span>
                </span>
              </>
            ) : (
              <>
                <span className="block text-white">Vaš brand.</span>
                <span className="block text-white">Veliki ekran.</span>
                <span className="block text-[#ff0000]">Svi gledaju.</span>
              </>
            )}
          </h1>
        </div>

        {/* Description + CTA */}
        {shouldAnimate ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: startDelay + 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8"
          >
            <p className="text-[#888] text-base md:text-lg max-w-md leading-relaxed">
              LED oglašavanje na najprometnijim lokacijama. 
              Jednostavno. Učinkovito. Nezaboravno.
            </p>
            
            <div className="flex gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="px-5 py-2.5 bg-[#ff0000] text-white text-sm font-medium hover:bg-[#cc0000] transition-colors"
              >
                Kontakt
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="px-5 py-2.5 border border-[#333] text-white text-sm font-medium hover:border-white transition-colors"
              >
                Lokacije
              </a>
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
            <p className="text-[#888] text-base md:text-lg max-w-md leading-relaxed">
              LED oglašavanje na najprometnijim lokacijama. 
              Jednostavno. Učinkovito. Nezaboravno.
            </p>
            
            <div className="flex gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="px-5 py-2.5 bg-[#ff0000] text-white text-sm font-medium hover:bg-[#cc0000] transition-colors"
              >
                Kontakt
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="px-5 py-2.5 border border-[#333] text-white text-sm font-medium hover:border-white transition-colors"
              >
                Lokacije
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Bottom stats */}
      {shouldAnimate ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: startDelay + 0.7 }}
          className="pt-8 border-t border-[#222] mt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-[#666] text-xs mt-1">Aktivnih lokacija</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">15M</p>
              <p className="text-[#666] text-xs mt-1">Dnevnih prikaza</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">8</p>
              <p className="text-[#666] text-xs mt-1">Godina iskustva</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">200+</p>
              <p className="text-[#666] text-xs mt-1">Zadovoljnih klijenata</p>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="pt-8 border-t border-[#222] mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-[#666] text-xs mt-1">Aktivnih lokacija</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">15M</p>
              <p className="text-[#666] text-xs mt-1">Dnevnih prikaza</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">8</p>
              <p className="text-[#666] text-xs mt-1">Godina iskustva</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">200+</p>
              <p className="text-[#666] text-xs mt-1">Zadovoljnih klijenata</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
