"use client";

import { motion } from "framer-motion";

const awards = [
  { label: "Best Café", sub: "Addis Ababa 2023" },
  { label: "Top 10 Restaurants", sub: "Ethiopia Food Awards" },
  { label: "Luxury Dining", sub: "Africa Travel Guide" },
  { label: "Instagram Worthy", sub: "Condé Nast Traveller" },
  { label: "Best Coffee", sub: "Bole District 2024" },
  { label: "Premium Experience", sub: "Hospitality Africa" },
];

export default function AwardsStrip() {
  return (
    <section className="py-10 overflow-hidden" style={{ background: "#F8F3EE", borderTop: "1px solid rgba(212,160,23,0.15)", borderBottom: "1px solid rgba(212,160,23,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4A017]" />
          <span className="text-xs tracking-[0.4em] uppercase text-[#D4A017] font-semibold" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
            Recognition & Awards
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4A017]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {awards.map((award, i) => (
            <motion.div
              key={award.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center group"
            >
              <div
                className="py-4 px-3 transition-all duration-300 group-hover:shadow-md"
                style={{ background: "white", border: "1px solid rgba(212,160,23,0.15)", borderRadius: "2px" }}
              >
                <div className="text-2xl mb-1">🏆</div>
                <p className="text-xs font-bold text-[#1C1C1C] leading-tight" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{award.label}</p>
                <p className="text-[10px] text-[#5C4033]/50 mt-0.5 tracking-wide" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{award.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
