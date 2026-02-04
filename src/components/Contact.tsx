"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="bg-[#080808] py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kontakt
          </h2>
          <p className="text-[#888] text-lg mb-12 max-w-md">
            Zainteresirani ste za LED oglašavanje? Javite nam se i dogovorimo detalje.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-[#666] text-xs uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:lamedia.mo@gmail.com" className="text-white text-lg hover:text-[#ff0000] transition-colors">
                lamedia.mo@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[#666] text-xs uppercase tracking-wider mb-1">Telefon</p>
              <a href="tel:+38763062063" className="text-white text-lg hover:text-[#ff0000] transition-colors">
                +387 63 062 063
              </a>
            </div>
            <div>
              <p className="text-[#666] text-xs uppercase tracking-wider mb-1">Adresa</p>
              <p className="text-white text-lg">
                Kralja Petra Krešimira IV bb<br />
                88000 Mostar
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right - Simple form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              const subject = encodeURIComponent(`Upit - ${name}`);
              const body = encodeURIComponent(`Ime: ${name}\nEmail: ${email}\n\n${message}`);
              window.location.href = `mailto:lamedia.mo@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Ime"
                required
                className="w-full bg-transparent border-b border-[#333] py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#ff0000] transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-[#333] py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#ff0000] transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Poruka"
                rows={4}
                required
                className="w-full bg-transparent border-b border-[#333] py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#ff0000] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#ff0000] text-white font-medium hover:bg-[#cc0000] transition-colors"
            >
              Pošalji
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
