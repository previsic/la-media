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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <p className="text-[#ff0000] text-sm font-mono mb-4">{step.num}</p>
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
              {step.title}
            </h3>
            <p className="text-[#666] text-sm leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
