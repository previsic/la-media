"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const locations = [
  { name: "Rondeau, Bulevar", city: "Mostar" },
  { name: "Ulaz u grad – sjever", city: "Mostar" },
  { name: "Ulaz u grad – jug", city: "Mostar" },
  { name: "Magistrala M-17", city: "Hercegovina" },
];

export default function Bilbordi() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative bg-white py-20 md:py-28 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#1f84dd]/6 rounded-full blur-[140px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-10 h-10 text-[#1f84dd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="text-[#1f84dd] text-sm font-semibold uppercase tracking-wider">Outdoor oglašavanje</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#111] mb-6">
            Bilbordi
          </h1>
          <p className="text-[#555] text-lg md:text-xl leading-relaxed">
            Sve naše lokacije odlikuje odlična vidljivost i smještaj uz prometnice sa najjačim frekvencijama prometa. Osvijetljene bilboard površine osiguravaju vidljivost Vaše poruke i tokom noći.
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="bg-[#f8f9fa] py-20 md:py-24 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Osvijetljene površine", desc: "Sve bilboard lokacije su opremljene osvjetljenjem za maksimalnu vidljivost danju i noću." },
            { title: "Premium lokacije", desc: "Pozicionirani uz glavne magistrale i prometne ulaze u gradove regije Hercegovina." },
            { title: "Veliki formati", desc: "Dominantne dimenzije bilboard površina garantiraju da Vaša poruka neće proći nezapaženo." },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="p-6 bg-white border border-[#e5e5e5] rounded-lg"
            >
              <h3 className="text-[#111] text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-[#111] mb-10"
        >
          Naše lokacije
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="p-6 border border-[#e5e5e5] hover:border-[#1f84dd]/40 transition-colors"
            >
              <p className="text-[#1f84dd] text-xs uppercase tracking-wider mb-1">{loc.city}</p>
              <p className="text-[#111] text-lg font-medium">{loc.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#111] mb-2">Zainteresirani?</h3>
            <p className="text-[#555]">Javite nam se za ponudu i slobodne termine.</p>
          </div>
          <Link href="/kontakt" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1f84dd] text-white text-sm font-medium hover:bg-[#1a6fc4] transition-colors">
            Zatražite ponudu
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
