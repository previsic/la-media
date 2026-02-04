"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "LED kampanja nam je donijela 3x veći reach nego billboardi uz istu cijenu.",
    name: "Marko Horvat",
    role: "Marketing direktor, Retail Co.",
  },
  {
    quote: "Profesionalan pristup i odlična vidljivost. Preporučujem svima koji žele rezultate.",
    name: "Ana Jurić",
    role: "Vlasnica, Boutique Moda",
  },
  {
    quote: "Nakon prve kampanje odmah smo rezervirali termine za cijelu godinu.",
    name: "Ivan Petrović",
    role: "Direktor marketinga, Auto Centar",
  },
  {
    quote: "Najbolja investicija u oglašavanje koju smo napravili. ROI je bio nevjerojatan.",
    name: "Petra Babić",
    role: "CEO, Tech Solutions",
  },
];

const clients = [
  "Konzum",
  "Plodine", 
  "Tommy",
  "Pevex",
  "HEP",
  "A1",
  "Erste Bank",
  "Podravka",
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="bg-black py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-[#151515]">
      {/* Testimonial slider */}
      <div className="max-w-4xl mb-16 min-h-[280px] md:min-h-[320px] relative">
        {/* Large quote mark */}
        <div className="absolute -top-4 -left-4 text-[120px] md:text-[180px] leading-none text-[#e53935]/10 font-serif select-none pointer-events-none">
          "
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10"
          >
            <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-8">
              {testimonials[current].quote}
            </p>
            <div className="flex items-center gap-4">
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e53935] to-[#b71c1c] flex items-center justify-center text-white font-bold">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-medium">{testimonials[current].name}</p>
                <p className="text-[#666] text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === current ? "bg-[#e53935] w-8" : "bg-[#333] w-2 hover:bg-[#555]"
              }`}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Clients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-[#666] text-xs uppercase tracking-wider mb-6">
          Klijenti koji nam vjeruju
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {clients.map((client) => (
            <span key={client} className="text-[#333] text-lg md:text-xl font-medium hover:text-[#666] transition-colors">
              {client}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
