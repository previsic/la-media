"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("la-media-intro");
    
    if (hasSeenIntro) {
      setShouldRender(false);
      return;
    }

    sessionStorage.setItem("la-media-intro", "1");
    
    // Start curtain lift after a brief pause
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={() => setShouldRender(false)}>
      {showIntro && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a]"
        />
      )}
    </AnimatePresence>
  );
}
