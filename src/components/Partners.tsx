"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollToSection } from "@/hooks/useLenis";

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="partners" ref={ref} className="bg-[#f8f9fa] py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#111] mb-6">
          Krenimo u realizaciju,
        </h2>
        <p className="text-[#555] text-xl md:text-2xl leading-relaxed mb-10">
          radujemo se poslovnoj suradnji!
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1f84dd] text-white text-sm font-medium hover:bg-[#1a6fc4] transition-colors"
        >
          Zatražite ponudu
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
