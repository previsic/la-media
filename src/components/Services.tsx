"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollToSection } from "@/hooks/useLenis";

const services = [
  {
    id: "video-zidovi",
    title: "Video zidovi",
    description: "Naši LED video zidovi su smješteni na jako atraktivnim lokacijama u Mostaru.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l.5 1.5" />
      </svg>
    ),
  },
  {
    id: "bilbordi",
    title: "Bilboard površine",
    description: "Sve naše lokacije odlikuje odlična vidljivost i smještaj uz prometnice sa najjačim frekvencijama prometa.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="bg-white py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-[#111]"
        >
          Naše usluge
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#555] text-sm md:text-base"
        >
          Iz ponude izdvajamo video zidove i osvijetljene bilboard površine.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group relative p-8 md:p-10 bg-[#f8f9fa] border border-[#e5e5e5] hover:border-[#1f84dd]/50 transition-all duration-300"
          >
            <div className="text-[#1f84dd] mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-[#111] text-xl md:text-2xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-[#555] text-base leading-relaxed">
              {service.description}
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="inline-flex items-center gap-2 mt-6 text-[#1f84dd] text-sm font-medium hover:gap-3 transition-all"
            >
              Zatražite ponudu
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 pt-8 border-t border-[#e5e5e5] flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <p className="text-[#555]">
          Trebate specifičnu lokaciju ili format? Imamo rješenje.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className="text-[#111] text-sm font-medium hover:text-[#1f84dd] transition-colors inline-flex items-center gap-2"
        >
          Kontaktirajte nas
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
