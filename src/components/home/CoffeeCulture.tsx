"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "The Roast",
    description: "We source single-origin Ethiopian beans from Yirgacheffe, Sidama, and Harrar — roasted in-house to unlock their full aromatic potential.",
  },
  {
    number: "02",
    title: "The Ceremony",
    description: "Inspired by the traditional Ethiopian coffee ceremony, our baristas prepare each cup with intention, patience, and artistry.",
  },
  {
    number: "03",
    title: "The Experience",
    description: "Served in our signature rose-gold cups, every coffee is a sensory journey — from the first aroma to the last sip.",
  },
];

export default function CoffeeCulture() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "#1C1C1C" }}>
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-15 bg-fixed-safe"
        style={{
          backgroundImage: `url('/images/unnamed (3).jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(28,28,28,0.98) 0%, rgba(28,28,28,0.85) 50%, rgba(28,28,28,0.98) 100%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative h-[480px]"
          >
            <div
              className="absolute top-0 left-0 w-4/5 h-3/4 overflow-hidden shadow-2xl"
              style={{ borderRadius: "4px", border: "3px solid rgba(212,160,23,0.3)" }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url('/images/unnamed (1).jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <div
              className="absolute bottom-0 right-0 w-3/5 h-3/5 overflow-hidden shadow-2xl"
              style={{ borderRadius: "4px", border: "3px solid rgba(212,106,126,0.3)" }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url('/images/unnamed (2).jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            {/* Gold label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-1/2 -right-4 -translate-y-1/2 px-5 py-4 z-10"
              style={{ background: "linear-gradient(135deg, #D4A017, #E8C060)", borderRadius: "2px", boxShadow: "0 10px 40px rgba(212,160,23,0.4)" }}
            >
              <p className="text-white text-3xl font-bold leading-none" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>100%</p>
              <p className="text-white/80 text-xs tracking-wider uppercase mt-1" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>Ethiopian Origin</p>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-5xl block mb-3" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
              Coffee Culture
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Ethiopia, the{" "}
              <span style={{ background: "linear-gradient(135deg, #D4A017, #E8C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Birthplace
              </span>{" "}
              of Coffee
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-[#D4A017] to-transparent" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#D4A017]" />
            </div>
            <p className="text-white/60 leading-relaxed mb-10" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}>
              Coffee was born in Ethiopia. At La Vie En Rose, we honor that heritage by combining the ancient Ethiopian coffee ceremony with the refined techniques of Parisian café culture — creating something entirely unique.
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-5 group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                    style={{ background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.3)" }}
                  >
                    <span className="text-sm font-bold" style={{ color: "#D4A017", fontFamily: "var(--font-playfair), Georgia, serif" }}>{step.number}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{step.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }}>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
