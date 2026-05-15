"use client";

import { motion } from "framer-motion";
import { Coffee, Heart, Star, Leaf } from "lucide-react";

const values = [
  {
    icon: Coffee,
    title: "Premium Quality",
    description:
      "We source only the finest single-origin Ethiopian coffee beans and premium imported ingredients, ensuring every item on our menu meets the highest standards of quality.",
  },
  {
    icon: Heart,
    title: "Warm Hospitality",
    description:
      "Rooted in the Ethiopian tradition of 'Injera and Coffee', we welcome every guest as family — with genuine warmth, attentive service, and a smile that makes you feel at home.",
  },
  {
    icon: Star,
    title: "Artisan Excellence",
    description:
      "Our baristas and pastry chefs are trained in both Ethiopian coffee traditions and French culinary arts, creating a unique fusion that is distinctly La Vie En Rose.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We are committed to supporting local Ethiopian coffee farmers, using eco-friendly packaging, and reducing our environmental footprint — because luxury and responsibility go hand in hand.",
  },
];

export default function OurValues() {
  return (
    <section className="section-padding" style={{ background: "#1C1C1C" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="text-5xl block mb-2"
            style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
          >
            What We Stand For
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4A017, #E8C060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Core Values
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="p-8 group transition-all duration-400"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "4px",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(212, 106, 126, 0.2), rgba(212, 106, 126, 0.05))",
                  border: "1px solid rgba(212, 106, 126, 0.3)",
                }}
              >
                <value.icon size={24} style={{ color: "#D46A7E" }} />
              </div>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {value.title}
              </h3>
              <p
                className="text-white/50 leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
