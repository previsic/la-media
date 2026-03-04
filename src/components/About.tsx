"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#f8f9fa] py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#111] mb-8"
        >
          O nama
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#555] text-lg leading-relaxed"
        >
          MediaWin d.o.o. Mostar, marketinška je i oglašivačka tvrtka sa sjedištem u Mostaru. Prvenstveno se bavi uslugama oglašavanja te internet marketingom. Iz ponude izdvajamo usluge <span className="text-[#111] font-medium">Bilboard osvjetljene površine</span>, oglašavanja na velikim outdoor površinama, <span className="text-[#111] font-medium">video oglašavanje</span>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#555] text-lg leading-relaxed mt-6"
        >
          Zahvaljujući tome što u svom radu težimo vrhunskoj kvaliteti, te stalnom praćenju tržišta, razvijamo se u renomiranu tvrtku čije ime postaje potvrda i jamstvo kvalitete. Kako bi udovoljili vašim potrebama i željama u domeni ponuđenih radova i usluga, imamo na raspolaganju najsuvremeniju tehnologiju te visokokvalificiran i stručan tim. Naše oglašivačke površine se nalaze u regiji Hercegovina.
        </motion.p>
      </div>
    </section>
  );
}
