"use client";

import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="section-padding" style={{ background: "#F8F3EE" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: "4px", border: "4px solid white" }}
            >
              <div
                className="w-full h-[500px]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
                role="img"
                aria-label="Founder of La Vie En Rose Addis"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(28,28,28,0.4) 0%, transparent 60%)" }}
              />
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 p-6 max-w-xs shadow-2xl"
              style={{ background: "#1C1C1C", border: "1px solid rgba(212,160,23,0.3)", borderRadius: "4px" }}
            >
              <p
                className="text-white/80 italic leading-relaxed mb-3"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "17px" }}
              >
                &ldquo;I wanted to create a place where every Ethiopian could feel the magic of Paris — without leaving home.&rdquo;
              </p>
              <p
                className="text-[#D4A017] text-xs tracking-widest uppercase font-semibold"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                — Founder, La Vie En Rose
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span
              className="text-5xl block mb-3"
              style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
            >
              The Founder
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}
            >
              A Dream Born in{" "}
              <span style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Two Worlds
              </span>
            </h2>

            <div className="flex items-center gap-4 mb-7">
              <div className="h-px w-16 bg-gradient-to-r from-[#D4A017] to-transparent" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#D4A017]" />
            </div>

            <div className="space-y-5">
              {[
                "After years of studying and working in Paris, our founder returned to Addis Ababa with a suitcase full of memories — the smell of fresh croissants on Rue de Rivoli, the sound of jazz in a Saint-Germain café, the warmth of a perfectly pulled espresso on a cold morning.",
                "But more than anything, she returned with a question: why couldn't Addis Ababa have this? Why couldn't her city — vibrant, creative, and full of life — have a café that matched its ambition?",
                "La Vie En Rose was her answer. Named after the iconic Édith Piaf song, it is a love letter to both cities — a place where the elegance of Paris and the soul of Addis Ababa exist in perfect harmony.",
                "Today, she oversees every detail of the café — from the sourcing of single-origin Ethiopian beans to the training of each barista — ensuring that every guest experiences the same magic she felt in those Parisian cafés.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-[#5C4033]/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "5+", label: "Years in Paris" },
                { value: "Le Cordon Bleu", label: "Trained" },
                { value: "2020", label: "Founded" },
              ].map(item => (
                <div
                  key={item.label}
                  className="text-center p-4"
                  style={{ background: "white", border: "1px solid rgba(212,160,23,0.15)", borderRadius: "2px" }}
                >
                  <p
                    className="text-lg font-bold text-[#1C1C1C] leading-tight"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="text-[10px] text-[#5C4033]/50 tracking-wider uppercase mt-1"
                    style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
