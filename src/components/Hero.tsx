"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("la-media-intro");
    setShouldAnimate(!hasSeenIntro);
    setIsReady(true);
  }, []);

  const startDelay = shouldAnimate ? 2 : 0;

  if (!isReady) {
    return <section className="min-h-screen bg-white" />;
  }

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col bg-white pb-8 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1f84dd]/8 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1f84dd]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-8 md:mb-12">
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[7vw] font-bold leading-[1.05] tracking-tight">
            {shouldAnimate ? (
              <>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: startDelay }}
                    className="block text-[#111]"
                  >
                    Budite vidljivi
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: startDelay + 0.1 }}
                    className="block text-[#1f84dd]"
                  >
                    24 sata.
                  </motion.span>
                </span>
              </>
            ) : (
              <>
                <span className="block text-[#111]">Budite vidljivi</span>
                <span className="block text-[#1f84dd]">24 sata.</span>
              </>
            )}
          </h1>
        </div>

        {shouldAnimate ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: startDelay + 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8"
          >
            <p className="text-[#888] text-base md:text-lg max-w-lg leading-relaxed">
              Predstavit ćemo Vas na najbolji način kroz kreativne ideje i kvalitetu.
            </p>
            <div className="flex gap-3">
              <Link href="/kontakt" className="px-6 py-3 bg-[#1f84dd] text-white text-sm font-medium hover:bg-[#1a6fc4] transition-colors">
                Zatražite ponudu
              </Link>
              <Link href="/kontakt" className="px-6 py-3 border border-[#333] text-[#111] text-sm font-medium hover:border-[#1f84dd] hover:text-[#1f84dd] transition-colors">
                Kontaktirajte nas
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
            <p className="text-[#555] text-base md:text-lg max-w-lg leading-relaxed">
              Predstavit ćemo Vas na najbolji način kroz kreativne ideje i kvalitetu.
            </p>
            <div className="flex gap-3">
              <Link href="/kontakt" className="px-6 py-3 bg-[#1f84dd] text-white text-sm font-medium hover:bg-[#1a6fc4] transition-colors">
                Zatražite ponudu
              </Link>
              <Link href="/kontakt" className="px-6 py-3 border border-[#333] text-[#111] text-sm font-medium hover:border-[#1f84dd] hover:text-[#1f84dd] transition-colors">
                Kontaktirajte nas
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
