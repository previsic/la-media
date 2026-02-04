"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Poziv",
    desc: "Javite nam se s idejom. Razgovaramo o ciljevima, budžetu i željenim lokacijama.",
  },
  {
    num: "02",
    title: "Ponuda",
    desc: "Pripremamo personaliziranu ponudu s preporučenim lokacijama i cijenama.",
  },
  {
    num: "03",
    title: "Sadržaj",
    desc: "Vi dostavljate materijale ili mi kreiramo sadržaj prilagođen LED formatu.",
  },
  {
    num: "04",
    title: "Emitiranje",
    desc: "Vaša kampanja ide uživo. Pratimo rezultate i optimiziramo po potrebi.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="bg-[#080808] py-24 md:py-32 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-white mb-16 md:mb-24"
      >
        Kako<br />radimo
      </motion.h2>

      {/* Steps */}
      <div className="relative">
        {/* Connecting line - desktop only */}
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-[1px] bg-gradient-to-r from-[#e53935]/50 via-[#e53935]/20 to-transparent" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Number with circle */}
              <div className="relative inline-flex items-center justify-center w-12 h-12 mb-6">
                <div className="absolute inset-0 bg-[#e53935]/10 rounded-full group-hover:bg-[#e53935]/20 transition-colors duration-300" />
                <span className="text-[#e53935] text-sm font-mono font-bold">{step.num}</span>
              </div>
              
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">
                {step.desc}
              </p>
              
              {/* Arrow indicator - desktop only */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-2 text-[#e53935]/30">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
