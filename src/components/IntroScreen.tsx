"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("la-media-intro");
    
    if (hasSeenIntro) {
      return;
    }

    setShouldRender(true);
    sessionStorage.setItem("la-media-intro", "1");
    
    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 6 + 2;
      });
    }, 180);

    // Start curtain lift after loader completes
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
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
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
        >
          {/* Big red percentage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[20vw] md:text-[25vw] font-black leading-none tracking-tighter"
            style={{ 
              color: "#e53935",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {Math.min(Math.round(progress), 100)}
            <span className="text-[8vw] md:text-[10vw]">%</span>
          </motion.div>

          {/* Bottom progress line */}
          <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-white/10">
            <motion.div
              className="h-full"
              style={{ 
                width: `${Math.min(progress, 100)}%`,
                backgroundColor: "#e53935",
              }}
              transition={{ duration: 0.15 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
