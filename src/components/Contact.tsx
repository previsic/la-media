"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="bg-white py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-[#e5e5e5]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#111] mb-6">
            Kontakt
          </h2>
          <p className="text-[#555] text-lg mb-12 max-w-md">
            Zainteresirani ste za video zidove ili bilboard oglašavanje? Javite nam se i dogovorimo detalje.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-[#555] text-xs uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:mediawin.mostar@gmail.com" className="text-[#111] text-lg hover:text-[#1f84dd] transition-colors">
                mediawin.mostar@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[#555] text-xs uppercase tracking-wider mb-1">Telefon</p>
              <a href="tel:+38736315956" className="text-[#111] text-lg hover:text-[#1f84dd] transition-colors">
                +387 36 315 956
              </a>
            </div>
            <div>
              <p className="text-[#555] text-xs uppercase tracking-wider mb-1">Mobitel</p>
              <a href="tel:+38763312202" className="text-[#111] text-lg hover:text-[#1f84dd] transition-colors">
                +387 63 312 202
              </a>
            </div>
            <div>
              <p className="text-[#555] text-xs uppercase tracking-wider mb-1">Adresa</p>
              <p className="text-[#111] text-lg">
                Kralja Zvonimira 13<br />
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
          className="relative"
        >
          {/* Form background accent */}
          <div className="absolute -inset-8 bg-gradient-to-br from-[#1f84dd]/5 to-transparent rounded-2xl pointer-events-none" />
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              const subject = encodeURIComponent(`Upit - ${name}`);
              const body = encodeURIComponent(`Ime: ${name}\nEmail: ${email}\n\n${message}`);
              window.location.href = `mailto:mediawin.mostar@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="relative space-y-8"
          >
            <div className="group">
              <label className="block text-[#555] text-xs uppercase tracking-wider mb-2 group-focus-within:text-[#1f84dd] transition-colors">
                Ime
              </label>
              <input
                type="text"
                name="name"
                placeholder="Vaše ime"
                required
                className="w-full bg-transparent border-b-2 border-[#e5e5e5] py-3 text-[#111] placeholder-[#999] focus:outline-none focus:border-[#1f84dd] transition-colors"
              />
            </div>
            <div className="group">
              <label className="block text-[#555] text-xs uppercase tracking-wider mb-2 group-focus-within:text-[#1f84dd] transition-colors">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="vas@email.com"
                required
                className="w-full bg-transparent border-b-2 border-[#e5e5e5] py-3 text-[#111] placeholder-[#999] focus:outline-none focus:border-[#1f84dd] transition-colors"
              />
            </div>
            <div className="group">
              <label className="block text-[#555] text-xs uppercase tracking-wider mb-2 group-focus-within:text-[#1f84dd] transition-colors">
                Poruka
              </label>
              <textarea
                name="message"
                placeholder="Kako vam možemo pomoći?"
                rows={4}
                required
                className="w-full bg-transparent border-b-2 border-[#e5e5e5] py-3 text-[#111] placeholder-[#999] focus:outline-none focus:border-[#1f84dd] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="group relative w-full py-4 bg-[#1f84dd] text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(31,132,221,0.4)]"
            >
              <span className="relative z-10">Pošalji upit</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a6fc4] to-[#1f84dd] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
