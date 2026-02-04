"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const locations = [
  { id: 1, city: "Zagreb", spot: "Trg bana Jelačića", image: "/images/led-1.jpg" },
  { id: 2, city: "Zagreb", spot: "Avenue Mall", image: "/images/led-2.jpg" },
  { id: 3, city: "Split", spot: "Riva", image: "/images/led-3.jpg" },
  { id: 4, city: "Rijeka", spot: "Korzo", image: "/images/led-4.jpg" },
  { id: 5, city: "Osijek", spot: "Trg Ante Starčevića", image: "/images/led-5.jpg" },
  { id: 6, city: "Zadar", spot: "Forum", image: "/images/led-6.jpg" },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="bg-black py-24 md:py-32 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Lokacije
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#666] text-sm md:text-base"
        >
          {locations.length} aktivnih lokacija
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative aspect-[16/10] bg-[#111] overflow-hidden cursor-pointer"
          >
            {/* Image placeholder with pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#151515] to-[#0a0a0a]">
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #333 1px, transparent 0)`,
                  backgroundSize: '20px 20px',
                }}
              />
              {/* LED glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#e53935]/10 rounded-full blur-3xl group-hover:bg-[#e53935]/20 transition-all duration-500" />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <p className="text-[#e53935] text-xs font-medium uppercase tracking-wider mb-1">
                {loc.city}
              </p>
              <h3 className="text-white text-lg md:text-xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                {loc.spot}
              </h3>
            </div>

            {/* Hover border animation */}
            <div className="absolute inset-0 border border-[#e53935]/0 group-hover:border-[#e53935]/50 transition-all duration-300" />
            
            {/* Corner accents on hover */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-[#e53935] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-[#e53935] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 pt-8 border-t border-[#222] flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <p className="text-[#666]">
          Trebate specifičnu lokaciju? Imamo rješenje.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-white text-sm font-medium hover:text-[#e53935] transition-colors inline-flex items-center gap-2"
        >
          Razgovarajmo
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
