"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function Partneri() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative bg-white py-20 md:py-28 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1f84dd]/6 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#111] mb-6">
            Partneri
          </h1>
          <p className="text-[#555] text-lg md:text-xl leading-relaxed mb-4">
            Krenimo u realizaciju — radujemo se poslovnoj suradnji!
          </p>
          <p className="text-[#555] text-base leading-relaxed">
            Surađujemo sa brojnim tvrtkama iz regije koje su nam ukazale povjerenje. Naš cilj je izgradnja dugoročnih partnerskih odnosa temeljenih na kvaliteti, pouzdanosti i zajedničkom rastu.
          </p>
        </motion.div>
      </section>

      {/* Why partner with us */}
      <section className="bg-[#f8f9fa] py-20 md:py-24 px-6 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-[#111] mb-10"
        >
          Zašto s nama?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Kvaliteta", desc: "Koristimo najsuvremeniju opremu i tehnologiju za vrhunski vizualni doživljaj." },
            { title: "Pouzdanost", desc: "Rokovi se poštuju, dogovori se ispunjavaju — poslovna sigurnost na prvom mjestu." },
            { title: "Podrška", desc: "Tim stručnjaka je uvijek na raspolaganju za savjete, kreativu i tehničku podršku." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="p-6 bg-white border border-[#e5e5e5] rounded-lg"
            >
              <h3 className="text-[#111] text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#111] mb-2">Postanite naš partner</h3>
            <p className="text-[#555]">Kontaktirajte nas i započnimo uspješnu suradnju.</p>
          </div>
          <Link href="/kontakt" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1f84dd] text-white text-sm font-medium hover:bg-[#1a6fc4] transition-colors">
            Kontaktirajte nas
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
